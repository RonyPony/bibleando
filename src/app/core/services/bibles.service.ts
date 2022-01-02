import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from 'src/app/models/books';
import { Capitulos } from 'src/app/models/capitulos';
import { Passages } from 'src/app/models/pasaje';
import { Versiculos } from 'src/app/models/verses';
import {Bibles, DataEntity} from '../../models/bibles'

@Injectable({
  providedIn: 'root'
})
export class BiblesService {

constructor(private http:HttpClient) { }
  SelectedbookName: String = '';

async getAllBibles() : Promise<Observable<Bibles>>{
  console.log("Getting all Bibles");
  return this.http.get("https://api.scripture.api.bible/v1/bibles",{headers:new HttpHeaders().set('api-key','038c15a4ade850b0a35d07f28fe5587f')});
}

getSelectedVersion() {
  return localStorage.getItem("currentSelectedVersion") || '';
}

getBookName(bookId:string){
    var bversion = this.getSelectedVersion();
    var x= this.http.get<Books>(`https://api.scripture.api.bible/v1/bibles/${bversion}/books/${bookId}?include-chapters=false`,{headers:new HttpHeaders().set('api-key','038c15a4ade850b0a35d07f28fe5587f')});
  return x;
}

getPassages(){
  var bversion = this.getSelectedVersion();
  var verse = this.getSelectedVerse();
  var x= this.http.get<Passages>(`https://api.scripture.api.bible/v1/bibles/${bversion}/passages/${verse}?content-type=html&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`,{headers:new HttpHeaders().set('api-key','038c15a4ade850b0a35d07f28fe5587f')});
  return x;
}

  getLongPassage() {
    var bversion = this.getSelectedVersion();
    var origin = this.getSelectedOriginVerse();
    var destinity = this.getSelectedDestinityVerse();
    var x= this.http.get<Passages>(`https://api.scripture.api.bible/v1/bibles/${bversion}/passages/${origin}-${destinity}?content-type=html&include-notes=false&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=true&use-org-id=false`,{headers:new HttpHeaders().set('api-key','038c15a4ade850b0a35d07f28fe5587f')});
    return x;
  }

getSelectedBook() {
  var bk = localStorage.getItem("currentSelectedBook") || '';
  return bk;
}
getSelectedChar() {
  return localStorage.getItem("currentSelectedChar") || '';
}
getSelectedVerse() {
  return localStorage.getItem("currentSelectedVerse") || '';
}

getSelectedOriginVerse() {
  return localStorage.getItem("currentSelectedOriginVerse") || '';
}
getSelectedOriginChar() {
  return localStorage.getItem("currentSelectedOriginChar") || '';
}
getSelectedDestinityVerse() {
  return localStorage.getItem("currentSelectedDestinityVerse") || '';
}
getSelectedDestinityChar() {
  return localStorage.getItem("currentSelectedDestinityChar") || '';
}

async getBibleByid(id: string):Promise<Observable<Bibles>> {
    console.log("Getting bible id " + id);
    var x= this.http.get("https://api.scripture.api.bible/v1/bibles/"+id,{headers:new HttpHeaders().set('api-key','038c15a4ade850b0a35d07f28fe5587f')});
    return x;
}

async getBibleBooksByid(id: string):Promise<Observable<Books>> {
  console.log("Getting books by bibleid " + id);
  var x= this.http.get<Books>(`https://api.scripture.api.bible/v1/bibles/${id}/books`,{headers:new HttpHeaders().set('api-key','038c15a4ade850b0a35d07f28fe5587f')});
  return x;
}

async getcharcters(bibleId: string,bookId:string):Promise<Observable<Capitulos>> {
  console.log("Getting characters of: "+bibleId+" | "+bookId);
  var x= this.http.get<Capitulos>(`https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${bookId}/chapters`,{headers:new HttpHeaders().set('api-key','038c15a4ade850b0a35d07f28fe5587f')});
  return x;
}

async getVerses(bibleId: string,chapterId:string):Promise<Observable<Versiculos>> {
  console.log("Getting verses of: "+bibleId+" | "+chapterId);
  var x= this.http.get<Versiculos>(`https://api.scripture.api.bible/v1/bibles/${bibleId}/chapters/${chapterId}/verses`,{headers:new HttpHeaders().set('api-key','038c15a4ade850b0a35d07f28fe5587f')});
  return x;
}

}
