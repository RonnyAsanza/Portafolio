import { Injectable, Injector } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from '../interceptor/loader.service'

@Injectable({
    providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpInterceptor {
    private totalRequests = 0;
    private loader: LoaderService;

    constructor(private injector: Injector) {
        this.loader = this.injector.get(LoaderService);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.totalRequests++;
        this.loader.show();

        request = this.addAuthToken(request);

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                switch (error.status) {
                    case 401:
                    case 403:
                        return throwError("Access Denied – You don’t have permission to access");
                    default:
                        return throwError(error.error.message);
                }
            }),
            finalize(() => {
                this.totalRequests--;
                if (this.totalRequests === 0) {
                    this.loader.hide();
                }
            })
        );
    }

    addAuthToken(request: HttpRequest<any>) {
        const token: string = localStorage.getItem('token')!;
        if (!token) {
            return request;
        }

        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}
