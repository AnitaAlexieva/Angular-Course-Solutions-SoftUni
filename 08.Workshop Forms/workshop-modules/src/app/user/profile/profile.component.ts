import { Component } from '@angular/core';
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

  onShowEdit() : void{
    this.isShowMode=true
  } 
}
