import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { LocalStorageService } from './utility/localstorage.service';
import { MissionService } from './mission.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LoginService } from './login/login.service';

@Component({
    selector: 'home-screen',
    templateUrl: 'app/home.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService]
})
export class HomeComponent implements OnInit {
    userName: string;
    isUnAuth: boolean = false;
    constructor(
        private router: Router,
        private _localStorage: LocalStorageService,
        private missionService: MissionService,
        private loginService: LoginService
    ) { }

    ngOnInit() { }

    login() {
        this.loginService.login(this.userName).subscribe((data) => {
            if (data) {
                this.missionService.announceMission(this.userName);
                this._localStorage.setStorage("userName", this.userName);
                this.router.navigate(['Dashboard']);
            } else {
                this.isUnAuth = true;
            }
        });


    }

}