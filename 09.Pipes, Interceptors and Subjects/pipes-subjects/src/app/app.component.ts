import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-subjects';

  user = { name: 'Petko', age: 22, list: [1,2,3,4,5]}

  sum(acc:number, curr:number): number{
    return acc + curr;
  }

  addProperty(){
    (this.user as any).test = 'test123'

    this.user.list = [...this.user.list, 100]
  }
}
