import { Component, OnInit } from '@angular/core';
import { UserFormModel } from './user.form.model';
import { DashBoardService } from './../dashboard/dashboard.service';

@Component({
    selector: 'user-form',
    templateUrl: './app/features/user.form.component.html',
    styleUrls: ['./app/features/forms.css']
})
export class UserFormComponent implements OnInit {

    constructor(private dashBoardService: DashBoardService) { }

    Users: any = [];

    departments = ['', 'Development', 'Sales', 'Marketing'];

    model = new UserFormModel('Select User', this.departments[1], 28);

    submitted = false;

    onSubmit() { 
        this.submitted = true;
        this.dashBoardService.updateUser(this.model);
     }

    ngOnInit() {
        this.dashBoardService.getUsers.subscribe((data) => {
            this.Users = data;            
        });
    }

}