import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [EmailDirective, WelcomeMsgComponent, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    EmailDirective,
    WelcomeMsgComponent,
    LoaderComponent
  ]
})
export class ShareddModule { }
