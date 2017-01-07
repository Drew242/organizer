import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Observable, Subject } from "rxjs/Rx";

import { User } from "./user.interface";

declare let firebase: any;

@Injectable()
export class AuthService {
  isAuthenticated = new Subject<boolean>();

  constructor(private router: Router) {}

  signinUser(email, password) {
     return new Promise((res, err) => {
       firebase.auth().signInWithEmailAndPassword(email, password)
       .then (success => {
         this.isAuthenticated.next(true);
         res(success);
       })
       .catch (error => {
        err(error);
       });
     });
  }

  logout() {
    firebase.auth().signOut()
    .then (success => {
      this.isAuthenticated.next(false);
      this.router.navigate(['/']);
    })
    .catch (error => {
      console.log(error);
    });
  }



}
