import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { LocalStorageService } from './utility/localstorage.service';
import { HomeComponent } from './home.component';
import { CardsComponent } from './card/cards.component';
import { CardHistoryComponent } from './card/card.history.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, AsyncRoute, Router } from '@angular/router-deprecated';
import { MissionService } from './mission.service';
import { UserRegistrationComponent } from './login/user.registratoin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'my-app',
  templateUrl : `app/app.component.html`,
  providers: [ROUTER_PROVIDERS, FirebaseService, LocalStorageService],
  directives:[ROUTER_DIRECTIVES, CardsComponent, HomeComponent],
  inputs: ['flag']
})
@RouteConfig([
    {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/register',
    name: 'Register',
    component: UserRegistrationComponent    
  },  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent    
  },
  {
    path: '/history',
    name: 'History',
    component: CardHistoryComponent
  },
    {
    path: '/cardHistoryDetailsComponent/:id',
    name: 'CardHistoryDetailsComponent',
    component: CardsComponent
  }
  
])
export class AppComponent  { 
  userName: string;
  password: string;
  today:Date = new Date();
  flag:boolean = false;
  
  constructor(
    private localstorage: LocalStorageService, 
    private missionService: MissionService,
    private router: Router
    ) {
    this.userName = this.localstorage.getStorage("userName");

    missionService.missionAnnounced$.subscribe(
      userName => {
        this.userName = userName;
        this.flag = true;
      }); 
  }  
  
  logout() {
    this.localstorage.clear();
    this.flag = false;
    this.router.navigate(['Home']);
  }
  
}