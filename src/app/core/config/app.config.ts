import { AppConfig } from '../interfaces/config.interface';

import { environment } from '../../../environments/environment';

/**
 * Set the applications production and develelopment tokens
 * Note: If the app has only one token, remove the developement token as this is optional.
 */
const production_token: string = '4f1b4648b095382ccf64e2f0e89c2d6f';
const development_token: string = 'f144b7e57cdf3101f92eae1aed871f04';

export const App: AppConfig = {
	_cdn: '',
	_domain: `http://localhost:8080/api/v1`,
	api_version: 1,
	site_name: 'Job-Reviewer',
	maintenance_mode: false,
	production: environment.production,
	allowed_user_types: [1],
	settings_menu: [
		{
			id: 1,
			active: false,
			icon: 'profile',
			label: 'Profile',
			route: 'user/profile'
		},
		{
			id: 2,
			active: false,
			icon: 'settings',
			label: 'Settings',
			route: 'user/settings'
		},
		{
			id: 3,
			active: false,
			icon: 'signout',
			label: 'Signout',
			route: 'sign-out'
		}
	]
};
