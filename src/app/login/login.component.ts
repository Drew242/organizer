import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { MdSnackBar } from '@angular/material';

import { User } from "../user.interface";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Get Organized';
  username = "";
  password = "";

  constructor(private authService: AuthService,
    private router: Router,
    public snackBar: MdSnackBar) {}


    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

    onLogin(username, password) {
      this.authService.signinUser(this.username, this.password)
      .then(success => {
        if (success) {
          console.log('You should be heading to the protected route');
          this.router.navigate(['/ptask']);
        }
      })
      .catch(error => {
        console.log('Ya messed up buddy');
        this.openSnackBar("Incorrect Combination", "Please Try Again");
      })
    }

  }
