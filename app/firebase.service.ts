import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
    myFirebaseRef: Firebase = new Firebase("https://angular2application.firebaseio.com/");
    getUsers: any;
    constructor() {
        this.getUsers = Observable.create(observer => {
            this.myFirebaseRef.child("users").on('value', (snapshot) => {
                observer.next(snapshot.val());
            }, (error) => observer.error(error));
        });
    }
    
    observedOneCards(id) {
        return Observable.create(observer => {
            this.myFirebaseRef.child("Cards/" + id).on('value', (snapshot) => {
                observer.next(snapshot.val());
            }, (error) => observer.error(error));
        });
    } 
    
    saveToFirebase(data) {
        this.myFirebaseRef.child("Cards").push(data);
    }
}