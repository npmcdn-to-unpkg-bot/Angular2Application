import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Card } from './card';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'card-history',
    templateUrl: 'app/card/card.history.component.html'
})
export class CardHistoryComponent implements OnInit {
    constructor(
        private firebaseService: FirebaseService,
        private router: Router) { }

    cards: Card[] = [];

    ngOnInit() {
        // this.firebaseService.observedCards.subscribe((data) => {
        //     var arrResult = [];
        //     for (var key in data) {
        //         data[key].id = key;
        //         arrResult.push(data[key]);
        //     }
        //     this.cards = arrResult;            
        // });
    }
    getCardDetails(card) {
        this.router.navigate(['CardHistoryDetailsComponent', { id: card.id }]);
    }


}