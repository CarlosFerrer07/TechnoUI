import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, RouterOutlet],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
