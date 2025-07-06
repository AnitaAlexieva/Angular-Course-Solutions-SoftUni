import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { jsonPlaceholderUser, User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'My playground';
    appUsers: jsonPlaceholderUser[] = [];
    isLoading = true;

  constructor(public userService: UserService){
    this.appUsers = this.userService.users;
  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
  this.userService.getUser().then((users) => {
    console.log('users data ', users);

    this.appUsers = [...users];  

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  });
}

  setUsers(inputName:HTMLInputElement, inputAge:HTMLInputElement){
    this.userService.addUser(inputName,inputAge);

    //Additional finctionality
  }
  

}
