import { AuthService } from './../../Core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [Menubar],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: MenuItem[] | undefined;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        command: () => this.onMenuClick('/layout/home'),
      },
      {
        label: 'Users',
        command: () => this.onMenuClick('/layout/users'),
      },
      {
        label: 'Logout',
        command: () => this.logout(),
      },
    ];
  }

  onMenuClick(menu: string) {
    this.router.navigate([menu]);
  }

  logout() {
    this.authService.doLogout();
    this.router.navigate(['/login']);
  }
}
