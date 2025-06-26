import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {

  @Input('color') colorValue = 'white';

    handleInput(username:string){
      console.log(username);
      console.log(this.colorValue)
    }

}
