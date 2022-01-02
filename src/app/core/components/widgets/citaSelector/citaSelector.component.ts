import { Component, OnInit } from '@angular/core';
import { BiblesService } from 'src/app/core/services/bibles.service';
import { Books } from 'src/app/models/books';
import { Capitulos } from 'src/app/models/capitulos';
import { Versiculos } from 'src/app/models/verses';

@Component({
  selector: 'app-citaSelector',
  templateUrl: './citaSelector.component.html',
  styleUrls: ['./citaSelector.component.scss']
})
export class CitaSelectorComponent implements OnInit {

  constructor(private bibleService:BiblesService) {}
  libros: Books | undefined;
  capitulosOrigen: Capitulos | undefined;
  capitulosDestino: Capitulos | undefined;
  versiculosOrigen: Versiculos | undefined;
  versiculosDestino: Versiculos | undefined;
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
    localStorage.setItem("searchType", "MultiVerse");
    this.loadOriginCharacters()
  }

  selectOriginChar(x:Event){
    this.currentSelectedChar = (x.target as HTMLInputElement).value
    console.log("Selected origin Char: "+this.currentSelectedChar);
    localStorage.setItem("currentSelectedOriginChar", this.currentSelectedChar);
    this.loadOriginVerses()
  }

  selectDestinityChar(x:Event){
    this.currentSelectedChar = (x.target as HTMLInputElement).value
    console.log("Selected destinity Char: "+this.currentSelectedChar);
    localStorage.setItem("currentSelectedDestinityChar", this.currentSelectedChar);
    this.loadDestinityVerses()
  }

  selectOriginVerse(x:Event){
    this.currentSelectedVerse = (x.target as HTMLInputElement).value
    console.log("Selected origin Verse: "+this.currentSelectedVerse);
    localStorage.setItem("currentSelectedOriginVerse", this.currentSelectedVerse);
    this.loadDestinityCharacters();
  }

  selectDestinityVerse(x:Event){
    this.currentSelectedVerse = (x.target as HTMLInputElement).value
    console.log("Selected destinity Verse: "+this.currentSelectedVerse);
    localStorage.setItem("currentSelectedDestinityVerse", this.currentSelectedVerse);
    this.canSearch = true;
  }

  async loadOriginCharacters() {
    var bibleVersion = this.bibleService.getSelectedVersion();
    var bks =  (await this.bibleService.getcharcters(bibleVersion,this.currentSelectedBook)).subscribe(dd => {
    this.capitulosOrigen = dd
    });
  }


  async loadDestinityCharacters() {
    var bibleVersion = this.bibleService.getSelectedVersion();
    var bks =  (await this.bibleService.getcharcters(bibleVersion,this.currentSelectedBook)).subscribe(dd => {
    this.capitulosDestino = dd
    });
  }

  refresh() {
    window.location.reload();
  }

  async loadOriginVerses() {
    var bibleVersion = this.bibleService.getSelectedVersion();
    var bks =  (await this.bibleService.getVerses(bibleVersion,this.currentSelectedChar)).subscribe(dd => {
    this.versiculosOrigen = dd
    });
  }

  async loadDestinityVerses() {
    var bibleVersion = this.bibleService.getSelectedVersion();
    var bks =  (await this.bibleService.getVerses(bibleVersion,this.currentSelectedChar)).subscribe(dd => {
    this.versiculosDestino = dd
    });
  }

}
