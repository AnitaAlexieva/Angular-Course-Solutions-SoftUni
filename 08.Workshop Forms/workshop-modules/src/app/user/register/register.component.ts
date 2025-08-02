import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/sharedd/validators/email-validator';
import { matchPasswordValidaiton } from 'src/app/sharedd/validators/match-password';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    //controls
    username:['', [Validators.required, Validators.minLength(4)]],
    email:['',[ Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel:[''],
    passGroup: this.fb.group({ password:['', Validators.required],rePassword:['', Validators.required]
     },   {
         validators: [matchPasswordValidaiton('password', 'rePassword')]
      })
   
  })

  constructor(private fb:FormBuilder){}

  register():void{
    if(this.form.invalid){
      return
    }

    console.log(this.form.value)
  }
}