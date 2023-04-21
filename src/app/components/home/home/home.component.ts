import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardsApiService } from "src/app/services/api/cards/cards-api.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public goal:string = 'Conocer mi sobrino';
  public goalMoney:string = '$6.000.000';
     public cards: Card[] = this.cardsApiService.getCardsList();
  constructor(
   private cardsApiService : CardsApiService
  ) { 

  }

  ngOnInit(): void {
    this.cardsApiService.getCards();  
  }

}
