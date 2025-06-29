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
    this.imageIsShown= !this.imageIsShown;
    if(this.imageIsShown){
      this.imageButtonTitle = "Hide Image"
    }else{
      this.imageButtonTitle = "Show Image"
    }
  }
  readMore() {
  this.articleDescLen += this.symbol;

  if (this.articleDescLen >= this.articleDesc.length) {
    this.descToShow = this.articleDesc;
    this.showReadMoreBtn = false;
    this.showHiddenBtn = true;
  } else {
    this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    this.showReadMoreBtn = true;
    this.showHiddenBtn = true;
  }
}

  hideDesc(){
    this.descToShow='';
    this.articleDescLen=0;
    this.showHiddenBtn=true;
    this.showHiddenBtn=false;
  }
}
