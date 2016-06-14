import { Component, OnInit } from '@angular/core';
import { DashBoardService } from './dashboard.service';
import { UserFilterPipe } from './dashboard.pipe';
import { UserInputComponent } from '../features/user.inputs.component';
import { UserFormComponent } from '../features/user.form.component';

@Component({
    selector: 'p-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    providers: [DashBoardService],
    directives: [UserInputComponent, UserFormComponent],
    pipes: [UserFilterPipe],
    styleUrls: ['app/dashboard/dashboard.css']
})
export class DashboardComponent implements OnInit {
    private usernameFilter: string = "";
    constructor(private dashBoardService: DashBoardService) { }
    Users: any = [];    
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