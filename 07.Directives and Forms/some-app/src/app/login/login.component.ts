import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  forSubmitHandler(form:NgForm){
    
    console.log(form.value)

    //form.value => ngModel on input
    const {email, password} = form?.value

    //2 ways of reseting the data
    //form.reset()
    form.setValue({email:'', password:''})

  }
}
