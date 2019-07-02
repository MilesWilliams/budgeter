import { Injectable } from '@angular/core';
import { App } from '../config/app.config';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 *
 * @export
 * @class BaseApiService
 */
@Injectable()
export class BaseApiService {

    protected _endpoint: string;
    protected readonly _domain: string = App._domain;

    constructor(protected _http: HttpClient, _endpoint?: string) {
        if (_endpoint)
            this._endpoint = _endpoint;
    }

    protected init(_endpoint: string) {
        this._endpoint = _endpoint;
    }

    /**
     *
     * @readonly
     * @type {string}
     * @memberof ApiService
     */
    get Domain(): string {
        return this._domain;
    }

    /**
     *
     * @type {string}
     * @memberof ApiService
     */
    get Endpoint(): string {
        return this._endpoint;
    }

    /**
     *
     * @memberof ApiService
     */
    set Endpoint(value: string) {
        this._endpoint = value;
    }
    /**
     *
     * @param {string} [modifier]
     * @returns {string}
     * @memberof ApiService
     */
    Url(modifier?: string): string {
        return modifier ? `${this._domain}/${this._endpoint}/${modifier}` : `${this._domain}/${this._endpoint}`;
    }

    /**
     * @template T
     * @returns {Observable<T>}
     * @memberof BaseApiService
     */
    public all<T>(): Observable<T> {
        return this._http.get<T>(this.Url());
    }

    /**
     * @template T
     * @param {(string | number)} id
     * @returns {Observable<T>}
     * @memberof BaseApiService
     */
    public getOne<T>(id: string | number): Observable<T> {
        return this._http.get<T>(this.Url(id.toString()));
    }

    /**
     * @template T
     * @param {(string | number)} id
     * @returns {Observable<T>}
     * @memberof BaseApiService
     */
    public delete<T>(id: string | number): Observable<T> {
        return this._http.delete<T>(this.Url(id.toString()));
    }

    /**
     * @template T
     * @param {T} payload
     * @returns {Observable<T>}
     * @memberof BaseApiService
     */
    public create<T>(payload: T): Observable<T> {
        return this._http.post<T>(this.Url(), payload);
    }

    /**
     * @template T
     * @param {T} payload
     * @param {(string | number)} [id]
     * @returns {Observable<T>}
     * @memberof BaseApiService
     */
    public update<T>(payload: T, id?: string | number): Observable<T> {
        const itemID = payload['id'] ? payload['id'] : id.toString();
        return this._http.put<T>(this.Url(itemID), payload);
    }

}
