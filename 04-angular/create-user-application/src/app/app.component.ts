import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create-user-application';

  constructor(private usersService: UsersService) {}

  getUsers() {
    return this.usersService.getUsers();
  }
}
