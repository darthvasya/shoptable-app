import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {

    constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers) {
        let authData = JSON.parse(localStorage.getItem('authorizationData'));
        headers.append('Authorization', 'Bearer ' + authData.token);
        headers.append('Content-Type', 'application/json;charset=utf-8');
        console.log(headers);
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        })
    }

    delete(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.delete(url, {
            headers: headers
        })
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }
}