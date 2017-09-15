import { Injectable, Type } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


import { Shop } from '../models/Shop';
import { Item } from '../models/Item';

const SHOPS = [];

@Injectable()
export class BackendService {
    constructor(private http: Http) { }

    getAll(type: Type<any>): PromiseLike<any[]> {
        if (type === Shop) {
            // TODO get from the database
            this.getShops().then((data) => console.log(data))
            console.log(1231);
            return Promise.resolve<Shop[]>(SHOPS);
        }
        let err = new Error('Cannot get object of this type');
        throw err;
    }

    getShops(): Promise<Shop[]> {
        return this.http.get("http://localhost:53743/api/shops")
            .toPromise()
            .then(response => response.json() as Shop[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}