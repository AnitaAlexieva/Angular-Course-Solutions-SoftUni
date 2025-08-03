import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MainComponent } from './main/main.component';
import { LoaderComponent } from '../loader/loader.component';
import { ShareddModule } from '../sharedd/sharedd.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CurrentThemeComponent,
    PostsListComponent,
    MainComponent,
    ThemesListComponent,
    LoaderComponent,
    AddThemeComponent,
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    ShareddModule,
    FormsModule
  ]
})
export class ThemeModule { }
