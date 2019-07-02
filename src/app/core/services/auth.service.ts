import { Injectable } from '@angular/core';
import { BaseApiService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable()
export class AuthService extends BaseApiService {
    constructor(protected _http: HttpClient) {
        super(_http, 'authentication');
    }

    /**
     * @template User
     * @param {{username: string, password: string}} payload
     * @returns {Observable<User>}
     * @memberof AuthService
     */
    public login<User>(payload: {username: string, password: string}): Observable<User> {
        return this._http.post<User>(this.Url(), payload);
    }

    /**
     * @param {User} user_details
     * @returns
     * @memberof AuthService
     */
    public createUser(user_details: User) {
        return this.create(user_details);
    }
}