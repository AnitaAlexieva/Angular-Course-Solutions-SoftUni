import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/sharedd/validators/email-validator';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  isShowMode : boolean = false;

  profileDetails: ProfileDetails = {
    username: 'John Doe',
    email: 'john@gmail.com',
    tel: '123-321-123'
  }

  constructor(private fb: FormBuilder){}
  form = this.fb.group({
    username: ['',[Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel:['']
  })
  
  onToggle() : void{
    this.isShowMode=!this.isShowMode;
  } 

  saveProfileHandler():void{
    console.log('invoked!', this.form.value)
    if(this.form.invalid){
      this.profileDetails = this.form.value as ProfileDetails
    }
    this.onToggle()
  }
}
