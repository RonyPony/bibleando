import { Component, OnInit } from '@angular/core';
import { BiblesService } from 'src/app/core/services/bibles.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {
  showVerseAndChap: boolean = false;
  currentSelectedBook: string = '';
  currentSelectedChar: string = '';
  currentSelectedOriginChar: string = '';
  currentSelectedVerse: string = '';
  currentSelectedOriginVerse: string = '';
  currentSelectedVersion: string = '';
  currenSelectedDestinityChar: string = '';
  currenSelectedDestinityVerse: string ='';
  singleSearch: boolean = true;
  content: string = '';
  constructor(private bibleService:BiblesService) { }

  ngOnInit() {
    this.getSearchType();
    this.getName();
    this.getChar();
    this.getVerse()
    this.getContent();
    this.currentSelectedVersion = this.bibleService.getSelectedVersion();
  }

  getSearchType() {
    this.singleSearch = localStorage.getItem("searchType")=="SingleVerse";
  }
  getContent() {
    var searchType=localStorage.getItem("searchType");
    if (searchType=="SingleVerse") {
      console.log("Searching Single Verse")
      this.bibleService.getPassages().subscribe(pass => {
        this.content = pass.data.content
      })
    } else {
      console.log("Searching Multiple Verse")
      this.bibleService.getLongPassage().subscribe(pess => {
        this.content=pess.data.content
      })
    }



  }

  getVerse() {
    this.currenSelectedDestinityVerse = "Verso " + this.bibleService.getSelectedDestinityVerse().split('.', 3)[2];
    this.currentSelectedOriginVerse = "Verso " + this.bibleService.getSelectedOriginVerse().split('.', 3)[2];
    this.currentSelectedVerse = "Verso " + this.bibleService.getSelectedVerse().split('.', 3)[2];
  }

  getChar() {
    this.currenSelectedDestinityChar = "Capitulo " + this.bibleService.getSelectedDestinityChar().split('.', 3)[1];
    this.currentSelectedOriginChar = "Capitulo " + this.bibleService.getSelectedOriginChar().split('.',3)[1];
    this.currentSelectedChar = "Capitulo "+this.bibleService.getSelectedChar().split('.',3)[1];
  }

  getName() {
    this.bibleService.getBookName(this.bibleService.getSelectedBook()).subscribe(ww => {
      this.currentSelectedBook = ww.data['name'];
    })
      }

}
