import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DrawerContainerComponent } from './drawer-container/drawer-container.component';
import { UsersTableComponent } from './users/users-table/users-table.component';


const routes: Routes = [
  { path: '', component: DrawerContainerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'uesrs', component: UsersTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
