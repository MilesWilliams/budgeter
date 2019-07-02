import { createSelector } from '@ngrx/store';
import * as fromCore from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getAuthState = createSelector(
	fromCore.getCoreState,
	(state: fromCore.CoreState) => state.authentication
);

export const showLoginForm = createSelector(getAuthState, state => {
	return state.show_login_form;
});

export const getUserProfile = createSelector(
	getAuthState,
	fromAuth.authUser
);

export const getAuthenticated = createSelector(
	getAuthState,
	fromAuth.authenticated
);