import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My playground';;
  users = [
      {name:'Pesho', age:21},
      {name:'Raq', age:31},
      {name:'Petq', age:29},
      {name:'Katq', age:41},
      {name:'Gosho', age:53},
    ] as User [];

    addUser(inputName:HTMLInputElement, inputAge:HTMLInputElement){
      const user:User = {
        name:inputName.value,
        age:Number(inputAge.value)
      }

      this.users.push(user)
      inputName.value='';
      inputAge.value='';
    }
}
