import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { ShopService } from '../../app.Common/Services/ShopService';
import { BackendService } from '../../app.Common/services/backend.service';

import { Shop } from '../../app.common/models/Shop';

@Component({
  selector: 'wrapper-cmp',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  providers: [BackendService, ShopService]
})
export class WrapperComponent {

  shops: any = [];
  items: any = [];
  shopsVisibility = true;

  constructor(private shopService: ShopService) { }

  ngAfterViewInit() {
    this.GetShops();
  }

  ngOnInit() {

  }

  private GetShops() {
    this.shopService.getUsers().then((data) => {
      this.shops = data;
      console.log(this.shops);
    });
  }

  public ShowItems(shopIndex: number) {
    this.shopsVisibility = false;

    this.items = this.shops[shopIndex].Items;
    console.log(this.items);
  }

  public ShowShops() {
    this.shopsVisibility = true;
  }
}
