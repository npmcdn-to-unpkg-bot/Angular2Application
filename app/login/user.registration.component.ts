import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';


@Component({    
    selector: 'p-register',
    templateUrl: 'app/login/user.registration.component.html',
    providers: [LoginService],
    directives: [ROUTER_DIRECTIVES]
})
export class UserRegistrationComponent implements OnInit {
    
    userName: string;
    password: string;
    
    constructor(private loginService: LoginService) {
        
    }
    
    register() {
        this.loginService.registerUser({
            username: this.userName,
            password: this.password 
        });
        
        this.userName = "";
        this.password = "";
        
    }

    ngOnInit() { }

}