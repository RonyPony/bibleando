import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BiblesService } from 'src/app/core/services/bibles.service';
import {Books} from 'src/app/models/books'
import { Capitulos } from 'src/app/models/capitulos';
import { Versiculos } from 'src/app/models/verses';
@Component({
  selector: 'app-capitSelector',
  templateUrl: './capitSelector.component.html',
  styleUrls: ['./capitSelector.component.scss']
})
export class CapitSelectorComponent implements OnInit {

  constructor(private http:HttpClient,private bibleService:BiblesService) { }
  libros: Books | undefined;
  capitulos: Capitulos | undefined;
  versiculos: Versiculos | undefined;
  currentSelectedBook: string = '';
  currentSelectedChar: string = '';
  currentSelectedVerse: string = '';
  canSearch: boolean=false;
  ngOnInit() {
    this.getBooks()
  }

  async getBooks() {

    var version = this.bibleService.getSelectedVersion();
    var bks =  (await this.bibleService.getBibleBooksByid(version)).subscribe(dd => {
    this.libros = dd
    });


  }

  selectBook(x: Event) {
    this.currentSelectedBook = (x.target as HTMLInputElement).value
    console.log("Selected Book: "+this.currentSelectedBook);
    localStorage.setItem("currentSelectedBook", this.currentSelectedBook);
    localStorage.setItem("searchType", "SingleVerse");
    this.loadCharacters()
  }

  selectChar(x:Event){
    this.currentSelectedChar = (x.target as HTMLInputElement).value
    console.log("Selected Char: "+this.currentSelectedChar);
    localStorage.setItem("currentSelectedChar", this.currentSelectedChar);
    this.loadVerses()
  }

  selectVerse(x:Event){
    this.currentSelectedVerse = (x.target as HTMLInputElement).value
    console.log("Selected Verse: "+this.currentSelectedVerse);
    localStorage.setItem("currentSelectedVerse", this.currentSelectedVerse);
    this.canSearch = true;
  }

  async loadCharacters() {
    var bibleVersion = this.bibleService.getSelectedVersion();
    var bks =  (await this.bibleService.getcharcters(bibleVersion,this.currentSelectedBook)).subscribe(dd => {
    this.capitulos = dd
    });
  }

  refresh() {
    window.location.reload();
  }

  async loadVerses() {
    var bibleVersion = this.bibleService.getSelectedVersion();
    var bks =  (await this.bibleService.getVerses(bibleVersion,this.currentSelectedChar)).subscribe(dd => {
    this.versiculos = dd
    });
  }

}
