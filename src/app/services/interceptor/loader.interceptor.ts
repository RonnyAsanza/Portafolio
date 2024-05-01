// import { Injectable } from '@angular/core';
// import {
//     HttpRequest,
//     HttpHandler,
//     HttpEvent,
//     HttpInterceptor
// } from '@angular/common/http';
// import { finalize, Observable } from 'rxjs';
// import { LoaderService } from '../loader.service';

// @Injectable()
// export class LoadingInterceptor implements HttpInterceptor {
//     private totalRequests = 0;

//     constructor(private loader: LoaderService) { }

//     intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//         debugger;
//         this.totalRequests++;
//         this.loader.show()
//         return next.handle(request)
//             .pipe(
//                 finalize(() => {
//                     this.totalRequests--;
//                     if (this.totalRequests == 0) {
//                         this.loader.hide();
//                     }
//                 })
//             );

//     }
// }
