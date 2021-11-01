import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatDatepickerModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatNativeDateModule,
  MatCardModule,
  MatMenuModule,
  MatPaginatorIntl} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksCreateComponent } from './tasks-create/tasks-create.component';
import { HeaderComponent } from './header/header.component';
import { KpiCardComponent } from './kpi-card/kpi-card.component';
import { MenuDrawerComponent } from './menu-drawer/menu-drawer.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DrawerContainerComponent } from './drawer-container/drawer-container.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { LoginComponent } from './auth/login/login.component';
import { CustomPaginator } from './tasks-list/CustomPaginator';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TasksCreateComponent,
    HeaderComponent,
    KpiCardComponent,
    MenuDrawerComponent,
    CreateUserComponent,
    DrawerContainerComponent,
    UsersCreateComponent,
    UsersTableComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatNativeDateModule,
    MatCardModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
