"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var firebase_service_1 = require('../firebase.service');
var localstorage_service_1 = require('../utility/localstorage.service');
var shuffle_card_service_1 = require('./shuffle.card.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var CardsComponent = (function () {
    //Lets prepare all the cards for initial rendering
    function CardsComponent(fireBaseService, routeParams, shuffleCardService, localStorageService) {
        this.fireBaseService = fireBaseService;
        this.routeParams = routeParams;
        this.shuffleCardService = shuffleCardService;
        this.localStorageService = localStorageService;
        this.cards = [];
        this.spades = [];
        this.clubs = [];
        this.hearts = [];
        this.diamonds = [];
        this.isButtonPressed = false;
        this.isButtonRequired = true;
    }
    CardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeCards();
        if (this.routeParams.get('id')) {
            this.isButtonRequired = false;
            var id = this.routeParams.get('id');
            this.fireBaseService.observedOneCards(id).subscribe(function (data) {
                _this.points = data.points;
                _this.percentage = data.percentage;
                _this.getCardArrangment(data.cards);
            });
        }
    };
    CardsComponent.prototype.getCardArrangment = function (myArray) {
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
    };
    CardsComponent.prototype.persistInFirebase = function (data) {
        this.fireBaseService.saveToFirebase(data);
    };
    CardsComponent.prototype.shuffle = function () {
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
    };
    CardsComponent.prototype.initializeCards = function () {
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
            }
            else if (i <= 26) {
                this.clubs.push({
                    index: i,
                    color: 'white'
                });
            }
            else if (i <= 39) {
                this.hearts.push({
                    index: i,
                    color: 'white'
                });
            }
            else {
                this.diamonds.push({
                    index: i,
                    color: 'white'
                });
            }
        }
    };
    CardsComponent = __decorate([
        core_1.Component({
            selector: 'card-module',
            templateUrl: "app/card/cards.component.html",
            providers: [shuffle_card_service_1.ShuffleCardService],
            styleUrls: ['app/card/card.css']
        }), 
        __metadata('design:paramtypes', [firebase_service_1.FirebaseService, router_deprecated_1.RouteParams, shuffle_card_service_1.ShuffleCardService, localstorage_service_1.LocalStorageService])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
//# sourceMappingURL=cards.component.js.map