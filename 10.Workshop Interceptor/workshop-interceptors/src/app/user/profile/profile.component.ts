import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/sharedd/validators/email-validator';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  isShowMode : boolean = false;

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    tel: ''
  }

  constructor(private fb: FormBuilder, private userService:UserService){}
  ngOnInit(): void {
    const {username, email,  tel} = this.userService.user!

    this.profileDetails = {
      username,
      email,
      tel,
    }

    this.form.setValue({
      username,
      tel,
      email
    })
  }
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
      return
    }
    this.profileDetails = this.form.value as ProfileDetails
    const { username, email, tel } = this.profileDetails;

    this.userService.updateProfile(username, email, tel).subscribe(()=>{
      this.onToggle()
    })
  }

  onCancel(e: Event):void{
    e.preventDefault();

    this.onToggle()
  }
}
