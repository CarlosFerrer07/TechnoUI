import { UsersComponent } from './features/users/users.component';
import { Routes } from '@angular/router';
import { AuthComponent } from './Core/auth/auth.component';
import { RegisterComponent } from './shared/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authGuard } from './Core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/homepage/homepage.component').then(
            (m) => m.HomepageComponent
          ),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/homepage/homepage.component').then(
            (m) => m.HomepageComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./features/users/users.component').then(
            (m) => m.UsersComponent
          ),
      },
    ],
  },
];
