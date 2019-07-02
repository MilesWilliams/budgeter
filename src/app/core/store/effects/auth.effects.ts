import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import * as AuthActions from '../actions/auth.actions';

import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { Go } from '../actions';
import { AuthenticationService } from '../../services';
import { User } from '../../interfaces';


@Injectable()
export class AuthenticationEffects {
	constructor(
		private actions$: Actions,
		private _svc: AuthenticationService
	) {}

	@Effect()
	authenticateUser$ = this.actions$.pipe(
		ofType<AuthActions.AuthLoginUser>(AuthActions.AUTH_LOGIN),
		map((action: AuthActions.AuthLoginUser) => action.payload),
		mergeMap((credentials) => 
			this._svc.login(credentials)
			.pipe(
				map((res) => new AuthActions.AuthLoginUserSuccess(res as {user: User, token: string})),
				catchError((err: any) => of(new AuthActions.AuthLoginUserFail(err)))
			)
		)
	);

	@Effect()
	onAuthSuccess$ = this.actions$.pipe(
		ofType(AuthActions.AUTH_LOGIN_SUCCESS),
		mergeMap(() => [
			new AuthActions.ToggleLoginForm(),
			// new LoadAllUsersAction
		])
	);

	@Effect()
	signupUser$ = this.actions$.pipe(
		ofType<AuthActions.AuthSignupUser>(AuthActions.AUTH_SIGNUP),
		map((action: AuthActions.AuthSignupUser) => action.payload),
		mergeMap((credentials) => 
			this._svc.signup(credentials)
			.pipe(
				map((res) => new AuthActions.AuthSignupUserSuccess(res)),
				catchError((err: any) => of(new AuthActions.AuthSignupUserFail(err)))
			)
		)
	);

	@Effect()
	onAuthSignupUserSuccess$ = this.actions$.pipe(
		ofType(AuthActions.AUTH_SIGNUP_SUCCESS),
		map(_ => new AuthActions.ToggleLoginForm())
	);

	@Effect()
	onSignOutUser$ = this.actions$.pipe(
		ofType(AuthActions.SIGN_OUT),
		map(_ => new Go({path: ['/']}))
	);

	@Effect()
	userfailedAuthGuard$ = this.actions$.pipe(
		ofType(AuthActions.FAIL_AUTH_GUARD),
		map(_ => new AuthActions.ToggleLoginForm())
	);

	@Effect()
	requestJWT$ = this.actions$.pipe(
		ofType<AuthActions.AuthRequestJWT>(AuthActions.AUTH_REQUEST_JWT),
		mergeMap((credentials) => 
			this._svc.getJWT()
			.pipe(
				map((res) => new AuthActions.AuthRequestJWTSuccess(res)),
				catchError((err: any) => of(new AuthActions.AuthRequestJWTFail(err)))
			)
		)
	);
}
