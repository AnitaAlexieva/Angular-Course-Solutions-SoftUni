import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor( private fb: FormBuilder){}

  registerForm = this.fb.group({
    email:['', [Validators.required, Validators.email]], 
    password: ['',[Validators.maxLength(4)]]})

  handleSubmit():void{
    console.log(this.registerForm.value)
  }
}
