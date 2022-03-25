import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // request = request.clone({
    //   setHeaders: {
    //     api_key: 'O4KQmzcKAiT0U8qGnpsHmQ0wX1QtKaN5',
    //   },
    // });

    return next.handle(request);
  }
}
