import { Injectable } from '@angular/core';
import { BaseApiService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Signup } from '../interfaces/user.interface';

@Injectable()
export class AuthenticationService extends BaseApiService {
    constructor(protected _http: HttpClient) {
        super(_http, 'authentication');
    }

    /**
     * @template User
     * @param {{username: string, password: string}} payload
     * @returns {Observable<User>}
     * @memberof AuthenticationService
     */
    public login<User>(payload: { username: string, password: string }): Observable<{user: User, token: string}> {
        return this._http.post<{user: User, token: string}>(this.Url(), payload);
    }

    /**
     * @param {User} user_details
     * @returns
     * @memberof AuthenticationService
     */
    public createUser(user_details: User) {
        return this.create(user_details);
    }

    /**
 *
 * @param {{username: string, password: string}} authDetails
 * @returns {Observable<User>}
 * @memberof AuthenticationService
 */
    public authenticateUser(authDetails: { username: string, password: string }): Observable<User> {
        return this._http.get<User>('./assets/dummy-data/user.json', { responseType: "json" });
    }

    /**
     *
     * @returns {Observable<string>}
     * @memberof AuthenticationService
     */
    public getJWT(): Observable<string> {
        return this._http.get<string>(this.Url('token'));
    }

    /**
     *
     * @param {Signup} signupForm
     * @returns {Observable<{ user: User, token: string }>}
     * @memberof AuthenticationService
     */
    public signup(signupForm: Signup): Observable<{ user: User, token: string }> {
        return this._http.post<{ user: User, token: string }>(this.Url('signup'), signupForm);
    }
}