import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
    myFirebaseRef: Firebase = new Firebase("https://angular2-pankajdevs.firebaseio.com/");
    observedCards: any;
    constructor() {
        this.observedCards = Observable.create(observer => {
            this.myFirebaseRef.child("Cards").on('value', (snapshot) => {
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