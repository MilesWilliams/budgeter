import { Action } from '@ngrx/store';
import { Utils } from 'src/app/utils';
import { User, Signup } from '../../interfaces';

export const TOGGLE_AUTH_FORM = Utils.Type('[Authentication: Show] Show login form');

export const AUTH_LOGIN = Utils.Type('[Authentication: Login] Login user');
export const AUTH_LOGIN_SUCCESS = Utils.Type('[Authentication: Login] Login user success');
export const AUTH_LOGIN_FAIL = Utils.Type('[Authentication: Login] Login user fail');

export class AuthLoginUser implements Action {
	readonly type = AUTH_LOGIN;

	constructor(public payload: {username: string, password: string}) {}
}
export class AuthLoginUserSuccess implements Action {
	readonly type = AUTH_LOGIN_SUCCESS;
	constructor(public payload: {user: User, token: string}) {}
}
export class AuthLoginUserFail implements Action {
	readonly type = AUTH_LOGIN_FAIL;
	constructor(public payload: any) {}
}

export class ToggleLoginForm implements Action {
	readonly type = TOGGLE_AUTH_FORM;
	constructor(){}
}

export const AUTH_SIGNUP = Utils.Type('[Authentication: Signup] Signup user');
export const AUTH_SIGNUP_SUCCESS = Utils.Type('[Authentication: Signup] Signup user success');
export const AUTH_SIGNUP_FAIL = Utils.Type('[Authentication: Signup] Signup user fail');

export class AuthSignupUser implements Action {
	readonly type = AUTH_SIGNUP;

	constructor(public payload: Signup) {}
}
export class AuthSignupUserSuccess implements Action {
	readonly type = AUTH_SIGNUP_SUCCESS;
	constructor(public payload: {user: User, token: string}) {}
}
export class AuthSignupUserFail implements Action {
	readonly type = AUTH_SIGNUP_FAIL;
	constructor(public payload: any) {}
}

export const AUTH_REQUEST_JWT = Utils.Type('[Authentication: JWT] Request JWT');
export const AUTH_REQUEST_JWT_SUCCESS = Utils.Type('[Authentication: JWT] Request JWT success');
export const AUTH_REQUEST_JWT_FAIL = Utils.Type('[Authentication: JWT] Request JWT fail');

export class AuthRequestJWT implements Action {
	readonly type = AUTH_REQUEST_JWT;
}
export class AuthRequestJWTSuccess implements Action {
	readonly type = AUTH_REQUEST_JWT_SUCCESS;
	constructor(public payload: string) {}
}
export class AuthRequestJWTFail implements Action {
	readonly type = AUTH_REQUEST_JWT_FAIL;
	constructor(public payload: any) {}
}

export const FAIL_AUTH_GUARD = Utils.Type('[Authentication: Guard] Guard returned not authenticated');
export class FailAuthGuard implements Action {
	readonly type = FAIL_AUTH_GUARD;
}

export const SIGN_OUT = Utils.Type('[Authentication: Sing Out] Sign out user');
export class SignOutUser implements Action {
	readonly type = SIGN_OUT;
}

/**
 * Authentication type.
 * @type {Actions}
 */
export type AuthenticationActions =
| AuthLoginUser
| AuthLoginUserSuccess
| AuthLoginUserFail
| ToggleLoginForm
| AuthSignupUser
| AuthSignupUserSuccess
| AuthSignupUserFail
| AuthRequestJWT
| AuthRequestJWTSuccess
| AuthRequestJWTFail
| FailAuthGuard
| SignOutUser;
