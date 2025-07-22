import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class UserModule { }
