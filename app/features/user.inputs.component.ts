import { Component, OnInit } from '@angular/core';

@Component({    
    selector: 'user-inputs',
    templateUrl: './app/features/user.inputs.component.html'
})
export class UserInputComponent implements OnInit {
    
    clickMessage:string = ''
    numberOfClick:number = 0; 
    
    constructor() { }

    ngOnInit() { }
    
    onClickMe() {
        this.numberOfClick += 1;
        this.clickMessage = 'Button Clicked ' + this.numberOfClick + ' times';    
    }

}