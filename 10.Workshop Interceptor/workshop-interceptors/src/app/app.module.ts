import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { ThemeModule } from './theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareddModule } from './sharedd/sharedd.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    ThemeModule,
    ShareddModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
