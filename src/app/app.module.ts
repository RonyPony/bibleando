import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/screens/home/home.component';
import { MenuComponent } from './core/components/widgets/menu/menu.component';
import { VersionSelectorComponent } from './core/components/widgets/versionSelector/versionSelector.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BiblesService } from './core/services/bibles.service';
import { CapitSelectorComponent } from './core/components/widgets/capitSelector/capitSelector.component';
import { ReaderComponent } from './core/components/widgets/reader/reader.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VersionSelectorComponent,
    MenuComponent,
    CapitSelectorComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BiblesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
