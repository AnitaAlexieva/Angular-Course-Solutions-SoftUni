import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../types/User';
import { GlobalServiceService } from 'src/app/core/global-loader/global-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy{

  isLoading:boolean = false;
  users: User[] = [];
  counter: number = 0;
  interval:any

  constructor(private userService: UserService, private globalLoaderService: GlobalServiceService){}

  ngOnDestroy(): void {
    console.log('On destroy invoked!')
    //to clear data
    clearInterval(this.interval)
  }

  ngOnInit(): void {
    this.fetchUsers();

    this.interval = setInterval(() => {
      this.counter += 1;
      console.log(this.counter);
      
    }, 3000);
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
