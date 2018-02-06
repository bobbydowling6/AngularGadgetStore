import { Component, OnInit, Input } from '@angular/core';

import { GadgetModel } from '../../gadgetmodel';
import { cartmodel } from '../../cartmodel';

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.component.html',
  styleUrls: ['./gadget.component.css']
})
export class GadgetComponent implements OnInit {
    @Input() gadget: GadgetModel;
    @Input() cart: cartmodel;
    addToCart() {
        this.gadget.inventory = this.gadget.inventory - 1;
        this.cart.totalquantity = this.cart.totalquantity + 1;
        if (this.cart.items.map((x) => x.gadgetid).indexOf(this.gadget.id) === -1) {
        this.cart.items.push({
            gadgetid: this.gadget.id,
            name: this.gadget.name,
            unitprice: this.gadget.price,
            quantity: 1
            });
    } else {
        this.cart.items.filter((x) => x.gadgetid === this.gadget.id)[0].quantity += 1;
    }
    this.cart.totalprice = this.cart.items.map((x) => x.quantity * x.unitprice).reduce((x, y) => x + y);
    }
  constructor() { }

  ngOnInit() {
  }

}
