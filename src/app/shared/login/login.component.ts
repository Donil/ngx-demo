import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _redirecUrl: string;

  public email: string;

  public password: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usersService: UsersService) {
  }

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe(p => {
      this._redirecUrl = p.get('redirectUrl');
    })
  }

  public login() {
    this.usersService.login(this.email, this.password)
      .subscribe(user => this._redirecUrl
                          ? this.router.navigateByUrl(this._redirecUrl)
                          : this.router.navigate(['/']));
  }
}
