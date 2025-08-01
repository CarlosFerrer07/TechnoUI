import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  public show() {
    this.isLoadingSubject.next(true);
  }

  public hide() {
    this.isLoadingSubject.next(false);
  }
}
