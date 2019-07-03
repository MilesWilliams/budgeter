import { RouterStateSerializer } from '@ngrx/router-store';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteSerializer } from '../store/reducers/router.reducer';

export const interceptors: any[] = [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: AuthInterceptor,
		multi: true,
	},
	{
		provide: RouterStateSerializer,
		useClass: RouteSerializer,
    }
];
