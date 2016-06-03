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
var firebase_service_1 = require('./firebase.service');
var localstorage_service_1 = require('./utility/localstorage.service');
var home_component_1 = require('./home.component');
var cards_component_1 = require('./card/cards.component');
var card_history_component_1 = require('./card/card.history.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var mission_service_1 = require('./mission.service');
var AppComponent = (function () {
    function AppComponent(localstorage, missionService) {
        var _this = this;
        this.localstorage = localstorage;
        this.missionService = missionService;
        this.today = new Date();
        this.flag = false;
        this.userName = this.localstorage.getStorage("userName");
        missionService.missionAnnounced$.subscribe(function (userName) {
            _this.userName = userName;
            _this.flag = true;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/app.component.html",
            providers: [router_deprecated_1.ROUTER_PROVIDERS, firebase_service_1.FirebaseService, localstorage_service_1.LocalStorageService, mission_service_1.MissionService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, cards_component_1.CardsComponent, home_component_1.HomeComponent],
            inputs: ['flag']
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'Home',
                component: home_component_1.HomeComponent,
                useAsDefault: true
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: cards_component_1.CardsComponent
            },
            {
                path: '/history',
                name: 'History',
                component: card_history_component_1.CardHistoryComponent
            },
            {
                path: '/cardHistoryDetailsComponent/:id',
                name: 'CardHistoryDetailsComponent',
                component: cards_component_1.CardsComponent
            }
        ]), 
        __metadata('design:paramtypes', [localstorage_service_1.LocalStorageService, mission_service_1.MissionService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map