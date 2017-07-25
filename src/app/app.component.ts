import { Component } from '@angular/core';

import { UsersService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _usersService: UsersService;

  public constructor(usersService: UsersService) {
    this._usersService = usersService;

    console.log(this._usersService.getUsers());
  }
}
