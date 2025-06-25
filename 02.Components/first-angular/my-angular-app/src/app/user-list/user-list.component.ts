import { Component } from '@angular/core';

type User = {
  name:string;
  age:number;
};
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    {name:'Pesho', age:21},
    {name:'Raq', age:31},
    {name:'Petq', age:29},
    {name:'Katq', age:41},
    {name:'Gosho', age:53},
  ] as User[];
  //User-list е колекция на User
}
