import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BiblesService } from 'src/app/core/services/bibles.service';
import {Bibles} from '../../../../models/bibles'
@Component({
  selector: 'app-versionSelector',
  templateUrl: './versionSelector.component.html',
  styleUrls: ['./versionSelector.component.scss']
})
export class VersionSelectorComponent implements OnInit {
  kk:Bibles | undefined;
  currentSelectedVersion: string = '';
  currentSelectedVersionName:string='';
  constructor(private http:HttpClient,private bibleService:BiblesService) {}
  ngOnInit() {
    this.currentSelectedVersion = localStorage.getItem("currentSelectedVersion")||'';
    console.log("currentSelectedVersion "+this.currentSelectedVersion);
    this.getBibles();
    this.getSelectedVersionName();
  }

  async getSelectedVersionName(){
    (await this.bibleService.getBibleByid(this.currentSelectedVersion)).subscribe(resp => {
      // console.log(resp.data['name'])
      this.currentSelectedVersionName = resp.data['name'];
      // console.log("Selected Version Name: "+resp.name)
    });
  }

  async getBibles(){
    await (await this.bibleService.getAllBibles()).subscribe(resp=>{
      this.kk=resp
    });
  }

  onChange(x:Event){
    this.currentSelectedVersion = (x.target as HTMLInputElement).value
    console.log(this.currentSelectedVersion);
    localStorage.setItem("currentSelectedVersion", this.currentSelectedVersion);
    this.getSelectedVersionName();
    window.location.reload();
  }

}

