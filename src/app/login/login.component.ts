import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { MdSnackBar } from '@angular/material';

import { Subscription } from "rxjs/Rx";

import { User } from "../user.interface";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  title = 'Get Organized';
  username = "";
  password = "";
  isAuthenticated = false;

  private subscription: Subscription

  constructor(private authService: AuthService,
              private router: Router,
              public snackBar: MdSnackBar) {
                this.subscription = this.authService.isAuthenticated().subscribe(
                  authStatus => this.isAuthenticated = authStatus
                );
              }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onLogin(username, password) {
    this.authService.signinUser(this.username, this.password);
    let auth = this.isAuthenticated;
    if (!auth) {
      this.openSnackBar("Incorrect Combination", "Please Try Again");
      console.log(this.isAuthenticated);
    }
  }

}
