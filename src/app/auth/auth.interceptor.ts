import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthService,
        private router: Router
    ) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setParams: {
                    auth: this.auth.token,
                }
            });
        }
        return next.handle(req)
            .pipe(
                tap((event) => {
                    if (event instanceof HttpResponse) {
                        console.log('200! OK! Server response');
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        console.log('Error! 401 Unauthorized');
                        this.auth.logout();
                        this.router.navigate(['/login']);
                    }
                    return throwError(error);
                })
            );
    }
}
