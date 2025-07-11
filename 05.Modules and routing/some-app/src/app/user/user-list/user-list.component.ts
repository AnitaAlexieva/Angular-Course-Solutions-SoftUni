import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  isLoading:boolean = false;
  constructor(private userService: UserService){}

  fetchUsers(){
    this.userService.getUsers().subscribe((users)=>{
      console.log(users)
    })
  }
  // fetchUsers(){
  //   this.isLoading = true;
  //   setTimeout(() => {
  //     this.isLoading=false
  //   }, 3000);
  // }
}
