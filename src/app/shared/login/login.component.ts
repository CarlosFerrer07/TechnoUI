import { toastService } from './../../Core/services/toast.service';
import { AuthService } from './../../Core/services/auth.service';
import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    ButtonModule,
    RouterLink,
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private toastService: toastService
  ) {}

  onSubmit() {
    const req = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.AuthService.doLogin(req).subscribe({
      next: (res: any) => {
        this.toastService.show('success', 'Logeado con éxito');
        this.router.navigate(['/layout']);
      },
      error: (err) => {
        this.toastService.show('error', err.error.mensaje);
        this.loginForm.reset();
      },
    });
  }
}
