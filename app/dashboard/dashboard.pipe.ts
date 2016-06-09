import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/User';

@Pipe({
    name: 'UserFilterPipe'
})

export class UserFilterPipe implements PipeTransform {

    transform(users: User[], args) {
        if (!args && args === '') {
            return users;
        }
        return users.filter(function (user) {
            if (user.username.match(new RegExp(args,"i")))
                return true
            else
                return false;
        });
    }

}