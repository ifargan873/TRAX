import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';

import { User } from '../user.model';
import { UserService } from '../user.service'
import { UsersEditComponent } from '../users-edit/users-edit.component';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit, OnDestroy{
  users: User[] = [];
  isLoading = false;
  dataSource: any;
  private usersSub: Subscription;

  constructor( private userService: UserService, public dialog: MatDialog, private sidenav: SidenavService ){}

  displayedColumns = ['first_name', 'last_name', 'phone', 'email', 'action'];


  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  ngOnInit() {
    this.isLoading = true;
    this.userService.getUser();
    this.usersSub = this.userService.getUserUpdateListener()
      .subscribe((users: User[]) => {
        this.isLoading = false;
        this.users = users;
        this.dataSource = new MatTableDataSource(users);
      })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onDelete(userID: string) {
    this.userService.deleteUser(userID);
  }

  openDialog(user_property: User): void {
    const dialogRef = this.dialog.open(UsersEditComponent, {
      width: '250px',
      data: user_property,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  editUser(user_property){
    this.sidenav.toggle();
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
  }
}
