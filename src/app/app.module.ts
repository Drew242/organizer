import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MaterialModule } from '@angular/material';

import { TaskComponent } from './task/task.component';
import { TaskService } from './task/task.service';
import { ErrorComponent } from './error/error.component';
import { PTaskComponent } from './p-task/p-task.component';
import { PTaskService } from './p-task/p-task.service';

import { appRoutes } from './routes';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    ErrorComponent,
    LoginComponent,
    PTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TaskService,
    PTaskService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
