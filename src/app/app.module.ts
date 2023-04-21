import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//MODULOS
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'


// COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainSidebarComponent } from './components/sidebars/main-sidebar/main-sidebar.component';
import { HomeComponent } from './components/home/home/home.component';


//apis
import { ApiService } from "./services/api/api.service";
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainSidebarComponent,
    HomeComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
    
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
