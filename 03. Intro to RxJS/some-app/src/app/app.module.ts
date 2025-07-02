import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const p = new Promise((resolve, reject) =>{
  console.log('Promise invoked');

  setTimeout(() => {
    resolve(111)
  }, 3000);
})

p.then((data)=>{
  console.log('from promise ', data)
})