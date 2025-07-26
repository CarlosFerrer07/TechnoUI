import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    catchError((error) => {
      console.error('HTTP error occurred:', error);
      return throwError(() => error);
    }),
    finalize(() => {
      loadingService.hide();
    })
  );
};
