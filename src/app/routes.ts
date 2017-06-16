import { Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { PTaskComponent } from './p-task/p-task.component';

import { AuthGuard } from './shared/auth.guard';

export const appRoutes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "task", component: TaskComponent, pathMatch: "full" },
  { path: "ptask", component: PTaskComponent, canActivate: [AuthGuard] },
  { path: "**", component: ErrorComponent }
];
