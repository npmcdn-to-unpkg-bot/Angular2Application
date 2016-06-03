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
var Observable_1 = require('rxjs/Observable');
var FirebaseService = (function () {
    function FirebaseService() {
        var _this = this;
        this.myFirebaseRef = new Firebase("https://angular2-pankajdevs.firebaseio.com/");
        this.observedCards = Observable_1.Observable.create(function (observer) {
            _this.myFirebaseRef.child("Cards").on('value', function (snapshot) {
                observer.next(snapshot.val());
            }, function (error) { return observer.error(error); });
        });
    }
    FirebaseService.prototype.observedOneCards = function (id) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.myFirebaseRef.child("Cards/" + id).on('value', function (snapshot) {
                observer.next(snapshot.val());
            }, function (error) { return observer.error(error); });
        });
    };
    FirebaseService.prototype.saveToFirebase = function (data) {
        this.myFirebaseRef.child("Cards").push(data);
    };
    FirebaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map