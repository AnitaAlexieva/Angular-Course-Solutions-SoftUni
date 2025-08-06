import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LoaderComponent } from './loader/loader.component';
import { SlicePipe } from './pipes/slice.pipe';



@NgModule({
  declarations: [EmailDirective, WelcomeMsgComponent, LoaderComponent, SlicePipe],
  imports: [
    CommonModule
  ],
  exports:[
    EmailDirective,
    WelcomeMsgComponent,
    LoaderComponent,
    SlicePipe
  ]
})
export class ShareddModule { }
