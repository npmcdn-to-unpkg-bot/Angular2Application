import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { LocalStorageService } from './utility/localstorage.service';
import { HomeComponent } from './home.component';
import { CardsComponent } from './card/cards.component';
import { CardHistoryComponent } from './card/card.history.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, AsyncRoute, Router } from '@angular/router-deprecated';
import { MissionService } from './mission.service';
import { UserRegistrationComponent } from './login/user.registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
declare var System:any;  

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  providers: [ROUTER_PROVIDERS, FirebaseService, LocalStorageService],
  directives: [ROUTER_DIRECTIVES, CardsComponent, HomeComponent],
  inputs: ['flag']
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    loader: () => System.import('./build/home.component').then(m => m.HomeComponent),   
    useAsDefault: true
  },
  {
    path: '/register',    
    loader: () => System.import('./build/login/user.registration.component').then(m => m.UserRegistrationComponent),
    name: 'Register'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    loader: () => System.import('./build/dashboard/dashboard.component').then(m => m.DashboardComponent),
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
export class AppComponent {
  userName: string;
  password: string;
  today: Date = new Date();
  flag: boolean = this.localstorage.getStorage("userName") ? true : false;

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