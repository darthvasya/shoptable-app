import { Component, OnInit } from '@angular/core';

import { ShopService } from '../../app.Common/Services/ShopService';

@Component({
  selector: 'wrapper-cmp',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  providers: [ShopService]
})
export class WrapperComponent implements OnInit {

  constructor( private shopService: ShopService ) { }

  ngOnInit() {
    console.log(1331313);
    this.shopService.getShops();
  }

}
