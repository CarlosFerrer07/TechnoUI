import { Injectable } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class toastService {
  constructor(private messageService: MessageService) {}

  show(severity: string, message: string) {
    this.messageService.add({
      severity: severity,
      detail: message,
      life: 3000,
    });
  }
}
