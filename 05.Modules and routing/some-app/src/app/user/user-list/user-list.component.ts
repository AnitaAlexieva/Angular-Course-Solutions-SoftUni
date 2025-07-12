import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../types/User';
import { GlobalServiceService } from 'src/app/core/global-loader/global-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  isLoading:boolean = false;
  users: User[] = [];

  constructor(private userService: UserService, private globalLoaderService: GlobalServiceService){}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){

    //before fetch
    this.globalLoaderService.showLoader();

    //Start fetch
    this.userService.getUsers().subscribe((users)=>{
      this.users=users;


      this.globalLoaderService.hideLoader()
    })
  }
  // fetchUsers(){
  //   this.isLoading = true;
  //   setTimeout(() => {
  //     this.isLoading=false
  //   }, 3000);
  // }
}
