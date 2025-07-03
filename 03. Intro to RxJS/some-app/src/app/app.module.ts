import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { interval, Observable } from 'rxjs';

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

//PROMISE
// - promise are not lazy, code invokes!
// - can not be canceled

const p = new Promise((resolve, reject) =>{
  console.log('Promise invoked');

  setTimeout(() => {
    resolve(111)
  }, 3000);
})

p.then((data)=>{
  console.log('from promise ', data)
})

//Shorthand
Promise.resolve(112)
.then((data) => data * 10)
.then((x) => console.log('from promise 2: ', x))

//Observables

//async analogy
// const o = new Observable((observer) =>{
//   observer.next(200);
//   observer.next(201);
//   observer.next(202);
//   observer.next(203);
// });

// o.subscribe((data) =>{
//   console.log('from observable: ', data)
// })

//сами си разписваме интервал

// const interval = (intervalValue:number) =>{
//   const o = new Observable<number>((observer) =>{
//       let counter = 0;
//     //подаваме counter, като го увеличаваме с единица
//     //през определен интервал от време, който сме задали
//       const timer = setInterval(() =>{
//         observer.next(counter++)
//       }, intervalValue)

//       //clear data on destroy
//       return () =>{
//         clearInterval(timer);
//       }
//   });

//   return o;
// }

interval(2000).subscribe((data) => {
  console.log('data from Interval: ', data)
})