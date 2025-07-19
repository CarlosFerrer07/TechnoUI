import { Routes } from '@angular/router';
import { AuthComponent } from './Core/auth/auth.component';
import { RegisterComponent } from './shared/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
