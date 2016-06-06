import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    myLocalstorage: any;

    constructor() {
        this.myLocalstorage = window.localStorage;
    }
    
    setStorage(key: string, value: Object) {
        this.myLocalstorage.setItem(key, value);
    }

    getStorage(key: string) {
        return this.myLocalstorage.getItem(key);
    }
    
    clear() {
        this.myLocalstorage.clear();
    }

}