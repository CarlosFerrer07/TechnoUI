import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { Toast } from 'primeng/toast';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpinnerComponent, Toast],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TechnoUI';
}
