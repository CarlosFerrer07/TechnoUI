import { Component } from '@angular/core';
import { LoginComponent } from '../../shared/login/login.component';
@Component({
  selector: 'app-auth',
  imports: [LoginComponent],
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
