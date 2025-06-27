import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {
  private symbol: number = 250;
  @Input() article: Article;
  @Input() articleDesc : string;
  descToShow:string;
  articleDescLen:number;
  showReadMoreBtn:boolean=true;
  showHideBtn:boolean=false;
  imageIsShown:boolean=false;
  imageButtonTile:string="Show Image"

  constructor(article:Article, articleDesc:string, descToShow:string,articleDescLen:number){
    this.article=article;
    this.descToShow="";
    this.articleDesc=articleDesc;
    this.articleDescLen=0;
  }
}
