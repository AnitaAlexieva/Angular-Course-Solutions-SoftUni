import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { UserRoutingModule } from '../user/user-routing-module';



@NgModule({
  declarations: [
    WelcomeMsgComponent
  ],
  imports: [
    CommonModule,UserRoutingModule
  ],
  exports:[
    WelcomeMsgComponent
  ]
})
export class SharedModule { }
