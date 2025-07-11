import { Component, Input } from '@angular/core';
import { jsonPlaceholderUser, User } from '../types/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input('user') user = {} as jsonPlaceholderUser;
}
