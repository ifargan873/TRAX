import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.css']
})
export class UsersMainComponent {

  constructor(private sidenavService: SidenavService){}

  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;

  ngOnInit(): void {
		this.sidenavService.setSidenav(this.sidenav);
	}
}
