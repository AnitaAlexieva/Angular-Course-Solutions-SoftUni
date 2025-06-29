import { Component } from '@angular/core';
import { Article } from './models/article.model';
import { ArticleData } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected title = 'Article Site';

}
