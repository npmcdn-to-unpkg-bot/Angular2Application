import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { FirebaseService } from './../firebase.service';
import { User } from '../model/User';

@Injectable()
export class DashBoardService {
    getUsers: any;
    constructor(private firebaseService: FirebaseService) {
        this.getUsers = Observable.create(observer => {
            this.firebaseService.myFirebaseRef.child("users").on('value', (snapshot) => {
                let arrResult = [], 
                    data = snapshot.val();
                for (let key in data) {
                    data[key].id = key;
                    arrResult.push(data[key]);
                }                
                observer.next(arrResult);
            }, (error) => observer.error(error));
        });
    }
    
    updateUser = function(model) {
      var userRef = new Firebase("https://angular2application.firebaseio.com/users/" + model.name);
      userRef.update({
          age: model.age,
          department: model.department
      });
    }



}