import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';



@NgModule({
  declarations: [EmailDirective, WelcomeMsgComponent ],
  imports: [
    CommonModule
  ],
  exports:[
    EmailDirective,
    WelcomeMsgComponent
  ]
})
export class ShareddModule { }
