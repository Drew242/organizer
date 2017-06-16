import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { Subscription } from "rxjs/Rx";

import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public currentUser: boolean = false;

  constructor(private router: Router,
              private authService: AuthService) {
                authService.isAuthenticated.subscribe((isAuthenticated) => {
                  this.currentUser = isAuthenticated;
                });
              }

  login() {
    this.router.navigate(['/']);
  }

  logout() {
    this.authService.logout();
  }

}
