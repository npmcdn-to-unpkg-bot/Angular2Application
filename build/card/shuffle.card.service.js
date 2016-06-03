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
var ShuffleCardService = (function () {
    function ShuffleCardService() {
    }
    ShuffleCardService.prototype.shuffleCard = function (array) {
        var i = array.length, j = 0, temp;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    ShuffleCardService.prototype.calculatePoint = function (allarray) {
        var points = 0;
        for (var index = 0; index < allarray.length; index++) {
            if (allarray[index].index == index + 1) {
                //Got two points
                points = points + 1;
                allarray[index].color = 'green';
            }
            if ((allarray[index].index == index + 1 || allarray[index].index == index + 14 || allarray[index].index == index + 27 || allarray[index].index == index + 40)) {
                points = points + 1;
                if (!(allarray[index].index == index + 1)) {
                    allarray[index].color = 'orange';
                }
            }
        }
        return points;
    };
    ShuffleCardService.prototype.calculatePercentage = function (points) {
        return Math.floor((points / 140) * 100);
    };
    ShuffleCardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ShuffleCardService);
    return ShuffleCardService;
}());
exports.ShuffleCardService = ShuffleCardService;
//# sourceMappingURL=shuffle.card.service.js.map