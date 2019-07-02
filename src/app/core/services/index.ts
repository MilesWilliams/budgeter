import { BaseApiService } from "./base.service";
import { AuthenticationService } from './auth.service';


// Add all your services here
export const services: any[] = [BaseApiService, AuthenticationService];

export { BaseApiService } from './base.service';
export { AuthenticationService } from './auth.service';