import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

 

import { Shop } from '../models/Shop';
import { Item } from '../models/Item';


@Injectable()
export class ShopService {
    private shops: Shop[] = [];

    constructor(private http: Http) { }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get("http://localhost:53743/api/shops")
        .map(res => res.json())
        .catch((err) => {
          reject(err);
          return Observable.throw(err);
        })
        .subscribe((shops) => {
          resolve(shops);   
        });
    });
  }
}