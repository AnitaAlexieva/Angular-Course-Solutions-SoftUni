import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/sharedd/validators/email-validator';
import { matchPasswordValidaiton } from 'src/app/sharedd/validators/match-password';
import { UserService } from '../user.service';
import {  Router } from '@angular/router';

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

  constructor(private fb:FormBuilder, 
    private userService:UserService,
    private router: Router
  ){}

  register():void{
    if(this.form.invalid){
      return
    }

    const {username, email, tel, passGroup:{password, rePassword} = {}} = this.form.value
   
    this.userService
    .register(username!, email!, tel!, password!, rePassword!)
    .subscribe(()=>{
      this.router.navigate(['/themes'])
    })
    console.log(this.form.value)
  }
}