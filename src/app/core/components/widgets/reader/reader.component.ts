import { Component, OnInit } from '@angular/core';
import { BiblesService } from 'src/app/core/services/bibles.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {
  currentSelectedBook: string = '';
  currentSelectedChar: string = '';
  currentSelectedVerse: string = '';
  currentSelectedVersion: string = '';
  content: string = '';
  constructor(private bibleService:BiblesService) { }

  ngOnInit() {

    this.getName();
    this.getChar();
    this.getVerse()
    this.getContent();
    this.currentSelectedVersion = this.bibleService.getSelectedVersion();
  }
  getContent() {
    this.bibleService.getPassages().subscribe(pass => {
      this.content = pass.data.content
    })
  }

  getVerse() {
    this.currentSelectedVerse = "V. "+this.bibleService.getSelectedVerse().split('.', 3)[2];
  }

  getChar() {
    this.currentSelectedChar = "C. "+this.bibleService.getSelectedChar().split('.',3)[1];
  }

  getName() {
    this.bibleService.getBookName(this.bibleService.getSelectedBook()).subscribe(ww => {
      this.currentSelectedBook = ww.data['name'];
    })
      }

}
