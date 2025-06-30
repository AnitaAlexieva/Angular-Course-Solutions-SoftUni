import { Component } from '@angular/core';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My playground';;
  users = [
      {name:'Pesho', age:21, status:'pink'},
      {name:'Raq', age:31, status:'green'},
      {name:'Petq', age:29, status:'yellow'},
      {name:'Katq', age:41, status:'pink'},
      {name:'Gosho', age:53, status:'pink'},
    ] as User [];

}
