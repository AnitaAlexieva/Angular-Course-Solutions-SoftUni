import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArticleComponent } from './article/article.componet';
import { App } from './app.component';


@NgModule({
  declarations: [
    App,
    ArticleComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [Component]
})
export class AppModule { }
