import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
   @Input() article!: Article;
  @Input() articleDesc!: string;

  descToShow: string = '';
  articleDescLen: number = 0;
  showReadMoreBtn: boolean = true;
  showHiddenBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  private symbol: number = 250;

  constructor() {
   
  }

  toggleImage(){

  }
  readMore(){

  }
  hideDesc(){
    
  }
}
