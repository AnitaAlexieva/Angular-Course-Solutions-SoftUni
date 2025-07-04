import { Injectable } from '@angular/core';
import { jsonPlaceholderUser, User } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    URL = 'http://jsonplaceholder.typicode.com/users';
    users = [] as jsonPlaceholderUser [];

    getUser(){
      return fetch(this.URL).then((res) => res.json())
    }

    addUser(inputName:HTMLInputElement, inputAge:HTMLInputElement){
      const user:User = {
        name:inputName.value,
        age:Number(inputAge.value)
      }

      // this.users.push(user)
      inputName.value='';
      inputAge.value='';
    }

    
}
