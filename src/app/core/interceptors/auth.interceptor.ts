import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { isNull } from 'util';
import { Store } from '@ngrx/store';
import { CoreState, getAuthState, AuthRequestJWT } from '../store';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token: string;
    constructor(private _store: Store<CoreState>) { 
        this._store.select(getAuthState).subscribe({
            next: res => this.token = res.token,
            error: err => console.log(new Error(err))
        });
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (!isNull(this.token)) {
            request = request.clone({ setHeaders: {'X-App-Token': `${this.token}`,},});
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                
                if (event instanceof HttpResponse) {
                    // do anything here with valid responses.
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 400) {
                    this._store.dispatch(new AuthRequestJWT);
                }
                let data = {};

                data = {
                    reason: error && error.error.response ? error.error.response: '',
                    status: error.status
                };
                // this.errorDialogService.openDialog(data);
                return throwError(error);
            }));
    }
}