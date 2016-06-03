import { Injectable } from '@angular/core';

@Injectable()
export class ShuffleCardService {
    constructor() { }

    shuffleCard(array) {
        var i = array.length,
            j = 0,
            temp;

        while (i--) {

            j = Math.floor(Math.random() * (i + 1));

            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }

        return array;
    }
    
    calculatePoint(allarray) {
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
  }
  
  calculatePercentage(points) {
    return Math.floor((points / 140) * 100);
  }


}