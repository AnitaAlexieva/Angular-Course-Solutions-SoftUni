import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm') form:NgForm | undefined;

  forSubmitHandler(){

    if(!this.form){
      return;
    }
    
    console.log('Form invalid: ', this.form.invalid)
    console.log(this.form.value)

    if(this.form?.invalid){
      console.log('Form is invalid')
        return;
      
    }

    //form.value => ngModel on input
    const {email, password} = this.form?.value

    //2 ways of reseting the data
    //form.reset()
    this.form.setValue({email:'', password:''})

  }
}
