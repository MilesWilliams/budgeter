import * as fromAuthActions from './auth.actions';
import * as fromRouterActions from './router.actions';

export const CoreActions: any[] = [fromAuthActions, fromRouterActions];

export * from './auth.actions';
export * from './router.actions';