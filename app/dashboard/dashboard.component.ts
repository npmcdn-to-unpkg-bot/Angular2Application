import { Component, OnInit } from '@angular/core';
import { DashBoardService } from './dashboard.service';

@Component({    
    selector: 'p-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    providers: [DashBoardService]
})
export class DashboardComponent implements OnInit {
    constructor(private dashBoardService: DashBoardService) { }
    Users: any;
    ngOnInit() {
        this.dashBoardService.getUsers.subscribe((data) => {
            this.Users = data;
        })        
        // this.firebaseService.observedCards.subscribe((data) => {
        //     var arrResult = [];
        //     for (var key in data) {
        //         data[key].id = key;
        //         arrResult.push(data[key]);
        //     }
        //     this.cards = arrResult;            
        // });
    }

}