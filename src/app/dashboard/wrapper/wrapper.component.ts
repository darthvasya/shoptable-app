import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { ShopService } from '../../app.Common/Services/ShopService';

import { Shop } from '../../app.common/models/Shop';

@Component({
  selector: 'wrapper-cmp',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  providers: [ShopService]
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
      for(var item of this.shops){
        item.StartWorkTime = this.ConvertDateToHourAndMinutes(item.StartWorkTime);
        item.EndWorkTime = this.ConvertDateToHourAndMinutes(item.EndWorkTime  );
      }
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

  private ConvertDateToHourAndMinutes(date: any) : string 
  {
        date = new Date(Date.parse(date));

        let hours = date.getHours();
        let minutes = date.getMinutes();

        return hours + ":" + minutes; 
  }
}
