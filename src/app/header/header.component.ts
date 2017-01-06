import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import { Subscription } from "rxjs/Rx";

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  isAuthenticated = false;

  private subscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }

  logAuth() {
    console.log(this.isAuthenticated);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  login() {
    this.router.navigate(['/']);
  }

  logout() {
    this.authService.logout();
  }

  currentUser() {
    return this.isAuthenticated;
  }

}
