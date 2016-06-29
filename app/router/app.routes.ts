import { provideRouter, RouterConfig } from '@angular/router';
import { CardHistoryComponent } from '../card/card.history.component';
import { CardsComponent } from '../card/cards.component';
import { HomeComponent } from '../home.component';
import { UserRegistrationComponent } from '../login/user.registration.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

declare var System:any; 

export const routes: RouterConfig = [
  {
    path: '',
    name: 'Home',
    //loader: () => System.import('./build/home.component').then(m => m.HomeComponent),
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: 'Register',    
    //loader: () => System.import('./build/login/user.registration.component').then(m => m.UserRegistrationComponent),
    component: UserRegistrationComponent,
    name: 'Register'
  },
  {
    path: 'Dashboard',
    name: 'Dashboard',
    component: DashboardComponent
    //loader: () => System.import('./build/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'History',
    name: 'History',
    component: CardHistoryComponent
  },
  {
    path: 'CardHistoryDetailsComponent/:id',
    name: 'CardHistoryDetailsComponent',
    component: CardsComponent
  }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];