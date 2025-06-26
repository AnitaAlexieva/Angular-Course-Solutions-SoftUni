import { Component } from '@angular/core';

type User = {
  name:string;
  age:number;
  status:string;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  isTogle = false;

  users = [
    {name:'Pesho', age:21, status:'pink'},
    {name:'Raq', age:31, status:'green'},
    {name:'Petq', age:29, status:'yellow'},
    {name:'Katq', age:41, status:'pink'},
    {name:'Gosho', age:53, status:'pink'},
  ] as User[];
  //User-list е колекция на User

  handleClick(){
    console.log('clicked')
    this.isTogle = !this.isTogle;
    console.log(this.isTogle)
  }
}
