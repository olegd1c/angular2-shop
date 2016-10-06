import { Component, OnInit, Input} from '@angular/core';
import {ProductCart} from '../../app-model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  @Input() product: ProductCart;

  constructor() { }

  ngOnInit() {
  }
}
