import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { LocalStorageService } from './utility/localstorage.service';
import { HomeComponent } from './home.component';
import { CardsComponent } from './card/cards.component';
import { CardHistoryComponent } from './card/card.history.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, AsyncRoute } from '@angular/router-deprecated';
import { MissionService } from './mission.service';

@Component({
  selector: 'my-app',
  templateUrl : `app/app.component.html`,
  providers: [ROUTER_PROVIDERS, FirebaseService, LocalStorageService, MissionService],
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
    path: '/dashboard',
    name: 'Dashboard',
    component: CardsComponent    
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
  today:Date = new Date();
  flag:boolean = false;
  
  constructor(private localstorage: LocalStorageService, private missionService: MissionService){
    this.userName = this.localstorage.getStorage("userName");
    
      missionService.missionAnnounced$.subscribe(
      userName => {
        this.userName = userName;
        this.flag = true;
      }); 
  }  
  
}