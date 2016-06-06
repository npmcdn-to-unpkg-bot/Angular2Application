import { Injectable, Inject } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { FirebaseService } from './../firebase.service';

@Injectable()
export class LoginService {
    observedCards: any;

    constructor(private firebaseService: FirebaseService) {
    }


    registerUser(data) {
        this.firebaseService.myFirebaseRef.child("users").push(data);
    }

    login(username: string) {
        return Observable.create(observer => {
            this.firebaseService.myFirebaseRef.child("users").orderByChild("username").equalTo(username).once("value", (snapshot) => {
                if (snapshot.val() !== null)
                    observer.next(true);
                else
                    observer.next(false);
            }, (error) => observer.error(error));
        });
    }
}