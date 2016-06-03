import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { LocalStorageService } from './utility/localstorage.service';
import { MissionService } from './mission.service';

@Component({
    selector: 'home-screen',
    templateUrl: 'app/home.component.html'
})
export class HomeComponent implements OnInit {
    userName:string;
    constructor(
        private router: Router, 
        private _localStorage: LocalStorageService,
        private missionService: MissionService
        ) {}

    ngOnInit() { }
    
    login() {
        this.missionService.announceMission(this.userName);
        this._localStorage.setStorage("userName", this.userName);
        this.router.navigate(['Dashboard']);        
    }
    
    

}