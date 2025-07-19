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
  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        command: () => this.onMenuClick('/dashboard/home'),
      },
      {
        label: 'Users',
        command: () => this.onMenuClick('/dashboard/users'),
      },
    ];
  }

  onMenuClick(menu: string) {
    this.router.navigate([menu]);
  }
}
