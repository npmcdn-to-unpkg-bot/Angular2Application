import { Component, OnInit } from '@angular/core';
import { DashBoardService } from './dashboard.service';
import { DashBoardPipe } from './dashboard.pipe';

@Component({
    selector: 'p-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    providers: [DashBoardService],
    pipes: [DashBoardPipe]
})
export class DashboardComponent implements OnInit {
    private usernameFilter: string = "";
    constructor(private dashBoardService: DashBoardService) { }
    Users: any = [{usernmae: 'TEST', password: 'TEST', age: 0}];
    sliderValue:number = 20;
    people = [{
        name: 'Justin Bieber',
        age: 21
    }, {
            name: 'Miley Cyrus',
            age: 23
        }, {
            name: 'John Legend',
            age: 37
        }, {
            name: 'Betty White',
            age: 94
        }, {
            name: 'Roger Waters',
            age: 72
        }, {
            name: 'Larry Page',
            age: 42
        }];
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