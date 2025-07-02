import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My playground';
  appUsers: User[] = [];

  constructor(public userService: UserService){
    this.appUsers = this.userService.users;
  }

  setUsers(inputName:HTMLInputElement, inputAge:HTMLInputElement){
    this.userService.addUser(inputName,inputAge);
    
    //Additional finctionality
  }

}
