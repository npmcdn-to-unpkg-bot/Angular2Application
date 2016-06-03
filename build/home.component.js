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
var router_deprecated_1 = require('@angular/router-deprecated');
var localstorage_service_1 = require('./utility/localstorage.service');
var mission_service_1 = require('./mission.service');
var HomeComponent = (function () {
    function HomeComponent(router, _localStorage, missionService) {
        this.router = router;
        this._localStorage = _localStorage;
        this.missionService = missionService;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.login = function () {
        this.missionService.announceMission(this.userName);
        this._localStorage.setStorage("userName", this.userName);
        this.router.navigate(['Dashboard']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-screen',
            templateUrl: 'app/home.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, localstorage_service_1.LocalStorageService, mission_service_1.MissionService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map