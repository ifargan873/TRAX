import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, Subscriber } from "rxjs";
import { map } from "rxjs/operators";

import { User } from "./user.model";
import { UsersMainComponent } from "./users-main/users-main.component";

@Injectable({ providedIn: "root" })
export class UserService {
  private user: User[] = [];
  private userUpdated = new Subject<User[]>();

  constructor( private http: HttpClient ){}

  getUser() {
    this.http.get<{ message: string, users: any }>("http://localhost:3000/api/user")
    .pipe(
      map(userData => {
        return userData.users.map(user => {
          return {
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            phone: user.phone,
            email: user.email
          }
        })
      })
    )
    .subscribe(transformedUser => {
      this.user = transformedUser;
      this.userUpdated.next([...this.user]);
    })
  }

  getUserUpdateListener() {
    return this.userUpdated.asObservable();
  }

  createUser(user_propery: User) {
    this.http.post("http://localhost:3000/api/user/signup", user_propery)
      .subscribe((responseData: any) => {
        const userCreated = {
          id: responseData.result._id,
          first_name: responseData.result.first_name,
          last_name: responseData.result.last_name,
          phone: responseData.result.phone,
          email: responseData.result.email,
          password: responseData.result.password
        }

        this.user.push(userCreated);
        this.userUpdated.next([...this.user])
      })
  }

  deleteUser(userId: string) {
    this.http.delete("http://localhost:3000/api/user/" + userId)
    .subscribe(() => {
      const updateUser = this.user.filter(user => user.id != userId);
      this.user = updateUser;
      this.userUpdated.next([...this.user]);
    })
  }
}
