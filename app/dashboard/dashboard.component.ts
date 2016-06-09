import { Component, OnInit } from '@angular/core';
import { DashBoardService } from './dashboard.service';
import { UserFilterPipe } from './dashboard.pipe';

@Component({
    selector: 'p-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    providers: [DashBoardService],
    pipes: [UserFilterPipe]
})
export class DashboardComponent implements OnInit {
    private usernameFilter: string = "";
    constructor(private dashBoardService: DashBoardService) { }
    Users: any = [{usernmae: 'TEST', password: 'TEST', age: 0}];    
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