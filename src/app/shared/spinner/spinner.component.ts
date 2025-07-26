import { Component, inject } from '@angular/core';
import { LoadingService } from '../../Core/services/loading.service';
import { CommonModule, NgIf } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-spinner',
  imports: [NgIf, ProgressSpinnerModule, CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  public spinnerService = inject(LoadingService);
}
