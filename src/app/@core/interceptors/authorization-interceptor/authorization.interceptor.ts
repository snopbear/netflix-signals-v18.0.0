import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { LocalStorageService } from '@services-common/index';

export const AuthorizationInterceptor = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.getToken();

  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return next(clonedReq);
  }

  return next(req);
};
