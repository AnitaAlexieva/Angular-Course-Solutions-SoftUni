import { Component } from '@angular/core';
import { GlobalServiceService } from './global-service.service';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.css']
})
export class GlobalLoaderComponent {
    constructor(public globalServiceLoader: GlobalServiceService){}

}
