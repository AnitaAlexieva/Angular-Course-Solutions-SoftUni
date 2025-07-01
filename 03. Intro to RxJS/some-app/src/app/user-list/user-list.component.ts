import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,

})
export class UserListComponent implements OnChanges {
  @Input('user') userListData: User [] = [];

  constructor(private cd: ChangeDetectorRef){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('no changes')
  }
  refresh(){
    this.cd.detectChanges();
  }
}
