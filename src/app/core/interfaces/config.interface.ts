import { NavItem } from './nav-item.interface';


/**
 * @export
 * @interface AppConfig
 * @description the applications main config interface
 */
export interface AppConfig {
	/*
    * the base restfull endpoint url.
    */
    readonly _domain: string;
    /*
    * the base cdn domain url if there is one.
    */
    readonly _cdn?: string;
	/*
    * the apps authentication token for use within the auth-interceptor.
    */
	auth_token?: string;
    /*
    * the server api version.
    */
    readonly api_version: number;
	/*
    * is the site in production or developement.
    */
    readonly production: boolean;
	/*
    * set to true to turn maintenance mode on.
    */
	maintenance_mode: boolean;
	/*
    * Drop down nav items.
    */
	settings_menu: NavItem[];
	/*
    * the apps name.
    */
	site_name: string;
	/*
    * specify which user types can log into the app.
    * Used within the auth effect.
    */
    readonly allowed_user_types: number[];
}
