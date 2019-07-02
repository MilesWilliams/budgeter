import { BaseApiService } from "./base.service";
import { AuthService } from './auth.service';


// Add all your services here
export const services: any[] = [BaseApiService, AuthService];

export { BaseApiService } from './base.service';
export { AuthService } from './auth.service';