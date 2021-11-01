import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AuthData } from "./auth-data.model"
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  private token: string;
  private authStatusListener = new Subject<userAuth>();

  constructor(private http:HttpClient) {}

  getToken() {
    return this.token;
  }

  getAuthStatusLisntener() {
    return this.authStatusListener.asObservable();
  }

  createUser(user_propery: AuthData) {
    this.http.post("http://localhost:3000/api/user/signup", user_propery)
      .subscribe(response => {
        console.log(response);
      })
  }

  login(email: string, password: string) {
    const authData: AuthData = {email: email, password: password}
    this.http.post<{token: string, name: string}>("http://localhost:3000/api/user/login", authData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        this.authStatusListener.next({status: true, name: response.name});
      })
  }
}

export interface userAuth {
  status: boolean,
  name: string
}
