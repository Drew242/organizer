import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Observable, Subject } from "rxjs/Rx";

import { User } from "./user.interface";

declare let firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  signinUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(success => {
      this.isAuthenticated(); 
      this.router.navigate(['/task']);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  logout() {
    firebase.auth().signOut()
    this.router.navigate(['/']);
  }

  isAuthenticated(): Observable<boolean> {
    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        subject.next(true);
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }

}
