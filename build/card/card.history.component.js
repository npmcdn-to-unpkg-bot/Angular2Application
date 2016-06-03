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
var router_deprecated_1 = require('@angular/router-deprecated');
var CardHistoryComponent = (function () {
    function CardHistoryComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.cards = [];
    }
    CardHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.observedCards.subscribe(function (data) {
            var arrResult = [];
            for (var key in data) {
                data[key].id = key;
                arrResult.push(data[key]);
            }
            _this.cards = arrResult;
        });
    };
    CardHistoryComponent.prototype.getCardDetails = function (card) {
        this.router.navigate(['CardHistoryDetailsComponent', { id: card.id }]);
    };
    CardHistoryComponent = __decorate([
        core_1.Component({
            selector: 'card-history',
            templateUrl: 'app/card/card.history.component.html'
        }), 
        __metadata('design:paramtypes', [firebase_service_1.FirebaseService, router_deprecated_1.Router])
    ], CardHistoryComponent);
    return CardHistoryComponent;
}());
exports.CardHistoryComponent = CardHistoryComponent;
//# sourceMappingURL=card.history.component.js.map