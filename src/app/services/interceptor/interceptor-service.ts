import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clonar la solicitud para modificar los headers
    request = request.clone({
      headers: request.headers.set('Accept', '*/*')
                              .set('Cache-Control', 'no-cache')
    });

    return next.handle(request);
  }
}
