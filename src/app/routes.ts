import { Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';

export const appRoutes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "task", component: TaskComponent, pathMatch: "full" },
  { path: "**", component: ErrorComponent }
];
