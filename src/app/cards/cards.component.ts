import { Component } from '@angular/core';
import { CardsApiService } from "src/app/services/api/cards/cards-api.service";
import { Card } from '../models/card';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})


export class CardsComponent {

  public cards: Card[] = this.cardsApiService.getCardsList();
  public cardsFinals: Card[] = [];
  public isLoading = true;

  constructor(
   public cardsApiService : CardsApiService
  ) { }

 
  async ngOnInit() {
    await this.cardsApiService.getCards();
    this.cards = this.cardsApiService.getCardsList();
    
    for (let i = 0; i < this.cards.length; i++) {   
        for (let j = 0; j < this.cards[i].listCard?.length; j++) {
          this.cardsFinals.push(this.cards[i].listCard[j]);
        }
     break;
    }
    this.isLoading = false;
  }

}
