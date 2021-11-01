import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  userAuthenticated = false;
  userName: string;

  private authListenerSub:  Subscription;

  constructor( private router: Router, private authService: AuthService ) { }

  home = function () {
    this.router.navigateByUrl('/');
  };

  ngOnInit() {
    this.authListenerSub = this.authService
      .getAuthStatusLisntener()
      .subscribe(isAuthenticated => {
        this.userAuthenticated = isAuthenticated.status;
        this.userName = isAuthenticated.name;
      })
  }

  ngOnDestroy() {

  }
}
