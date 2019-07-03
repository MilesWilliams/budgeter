import * as fromActions from '../actions/auth.actions';

import { User } from '../../interfaces';

export interface IAuthenticationState {
	authenticated: boolean;
	authenticating: boolean;
	user: User;
	show_login_form: boolean;
	token: string;
}
export const initialState: IAuthenticationState = {
	authenticated: false,
	authenticating: false,
	user: null,
	show_login_form: false,
	token: null
};

export function reducer(
	state: IAuthenticationState = initialState,
	action: fromActions.AuthenticationActions
): IAuthenticationState {
	switch (action.type) {
		case fromActions.TOGGLE_AUTH_FORM: {
			return { ...state, show_login_form: !state.show_login_form };
		}

		case fromActions.AUTH_LOGIN: {
			return {...state, authenticating: true};
		}

		case fromActions.AUTH_LOGIN_SUCCESS: {
			const payload = action.payload;
			return {
				...state,
				authenticating: false,
				authenticated: true,
				user: payload.user,
				token: payload.token
			};
		}

		case fromActions.AUTH_LOGIN_FAIL: {
			return {...state, authenticating: false, authenticated: false};
		}

		case fromActions.AUTH_SIGNUP: {
			return {...state, authenticating: true};
		}

		case fromActions.AUTH_SIGNUP_SUCCESS: {
			const payload = action.payload;
			return {
				...state,
				authenticating: false,
				authenticated: true,
				user: payload.user,
				token: payload.token
			};
		}

		case fromActions.AUTH_SIGNUP_FAIL: {
			return {...state, authenticating: false, authenticated: false};
		}

		case fromActions.AUTH_REQUEST_JWT_SUCCESS: {
			const token = action.payload;
			return {...state, token};
		}

		case fromActions.SIGN_OUT: {
			return {
				...state,
				...initialState
			};
		}

		default:
			return state;
	}
}

export const loginFormOpen = (state: IAuthenticationState) => state.show_login_form;
export const authUser = (state: IAuthenticationState) => state.user;
export const authenticated = (State: IAuthenticationState) => State.authenticated;