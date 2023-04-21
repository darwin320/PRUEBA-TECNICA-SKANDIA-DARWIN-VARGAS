

import { Injectable } from "@angular/core";
import { Card } from 'src/app/models/card';
import { ApiService, ApiWithSearch } from "../api.service";
import { Observable, from } from "rxjs";
import { SearchResult } from "../apiTypes";


//en esta clase consumo la api referente a las tarjetas que se deben mostrar en el aplicativo



@Injectable({
    providedIn: "root",
})

export class CardsApiService
    extends ApiService
    

    
{

    public isDataLoaded = false;


    private cards: Card[] = [];
   

    public async getCards() {
        const result = await this.makeSimpleGetRequest<Card>("/api/v1/test-front-end-skandia/cards");
    
        if (result.ok) {
            for (const card of [result.val]) {
                this.cards.push(card);
            }

            this.isDataLoaded = true;
        } else {
            console.error("Ha ocurrido un error es posible que el link no sea valido ");
        }
       
        
    }

    
    
    public getCardsList(): Card[] {
        return this.cards;
    }
    
  
    
    
}