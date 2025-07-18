import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

// const routes: Routes = [
//   {path:'', component:UserListComponent},
//   {path:'user/list', component:UserListComponent},
//   {path:'todo-list', component:TodoListComponent}];


export const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'user/list'},
  {path:'todo-list', component:TodoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
