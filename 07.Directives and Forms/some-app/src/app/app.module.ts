import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyStructuralDirective } from './my-structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MyRouterLinkDirective,
    MyStructuralDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
