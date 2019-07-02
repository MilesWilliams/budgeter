import {
	ActionReducer,
	combineReducers,
	ActionReducerMap,
	createFeatureSelector,
	compose,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromAuthentication from './auth.reducer';

import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';

import { RouterStateUrl } from './router.reducer';
import { App } from '../../config/app.config';

export interface CoreState {
    authentication: fromAuthentication.IAuthenticationState;
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<CoreState> = {
	authentication: fromAuthentication.reducer,
	routerReducer: fromRouter.routerReducer
};

export const storeConfig: LocalStorageConfig = {
	keys: ['authentication', 'routerReducer'],
	rehydrate: !App.production,
};

const developmentReducer: ActionReducer<CoreState> = compose(
	localStorageSync(storeConfig),
	combineReducers
)(reducers);

// production reducer
const productionReducer: ActionReducer<CoreState> = combineReducers(reducers);

export function CoreStateReducer(state: CoreState, action: any) {
	return developmentReducer(state, action);
}

export const getCoreState = createFeatureSelector<CoreState>('CoreState');
