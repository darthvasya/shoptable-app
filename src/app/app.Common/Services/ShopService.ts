import { Injectable } from '@angular/core';
import { Http, Headers, Response  } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Shop } from '../models/Shop';
import { Item } from '../models/Item';


@Injectable()
export class ShopService {

    constructor(private http: HttpClient) { }

    getShops() : Observable<User[]>{
        console.log(12444)
        let headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=utf-8');

 
        this.http.get('http://localhost:53743/api/shops').subscribe(data => {
            // Read the result field from the JSON response.
                console.log(data);
        });
        //console.log(shops);
    }
}