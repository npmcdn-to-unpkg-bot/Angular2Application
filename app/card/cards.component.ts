import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { LocalStorageService } from '../utility/localstorage.service';
import { ShuffleCardService } from './shuffle.card.service';
import { Card } from './card';
import { RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'card-module',
  templateUrl: `app/card/cards.component.html`,
  providers: [ShuffleCardService],
  styleUrls: ['app/card/card.css']
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];
  spades: Card[] = [];
  clubs: Card[] = [];
  hearts: Card[] = [];
  diamonds: Card[] = [];
  points: any;
  percentage: any;
  isButtonPressed: boolean = false;
  isButtonRequired: boolean = true;

  //Lets prepare all the cards for initial rendering
  constructor(
    private fireBaseService: FirebaseService,
    private routeParams: RouteParams,
    private shuffleCardService: ShuffleCardService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.initializeCards();

    if (this.routeParams.get('id')) {
      this.isButtonRequired = false;
      let id = this.routeParams.get('id');
      this.fireBaseService.observedOneCards(id).subscribe((data) => {
        this.points = data.points;
        this.percentage = data.percentage;
        this.getCardArrangment(data.cards);
      });
    }
  }

  getCardArrangment(myArray) {

    this.spades = [];
    this.clubs = [];
    this.hearts = [];
    this.diamonds = [];

    for (var i = 0; i < myArray.length; i++) {
      if (i < 13) {
        this.spades.push(myArray[i]);
      }
      else if (i < 26) {
        this.clubs.push(myArray[i]);
      }
      else if (i < 39) {
        this.hearts.push(myArray[i]);
      }
      else if (i < 52) {
        this.diamonds.push(myArray[i]);
      }
    }
  }

  persistInFirebase(data) {
    this.fireBaseService.saveToFirebase(data);
  }

  shuffle() {
    this.isButtonPressed = true;
    this.initializeCards();
    this.cards = this.shuffleCardService.shuffleCard(this.cards);
    this.points = this.shuffleCardService.calculatePoint(this.cards);
    this.percentage = this.shuffleCardService.calculatePercentage(this.points);
    this.getCardArrangment(this.cards);
    this.persistInFirebase({
      userName: this.localStorageService.getStorage("userName") || 'anonymous',
      cards: this.cards,
      points: this.points,
      percentage: this.percentage,
      date: new Date().getTime()
    });
  }

  initializeCards() {
    this.cards = [];
    this.spades = [];
    this.clubs = [];
    this.hearts = [];
    this.diamonds = [];
    for (var i = 1; i <= 52; i++) {
      this.cards.push({
        index: i,
        color: 'white'
      });
      if (i <= 13) {
        this.spades.push({
          index: i,
          color: 'white'
        });
      } else if (i <= 26) {
        this.clubs.push({
          index: i,
          color: 'white'
        });
      } else if (i <= 39) {
        this.hearts.push({
          index: i,
          color: 'white'
        });
      } else {
        this.diamonds.push({
          index: i,
          color: 'white'
        });
      }
    }
  }

}