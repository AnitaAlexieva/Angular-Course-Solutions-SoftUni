import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../user/user-list/user-list.component';
import { UserDetailsComponent } from '../user/user-details/user-details.component';



@NgModule({
  declarations: [
    GlobalLoaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[GlobalLoaderComponent, NavComponent]
})
export class CoreModule { }
