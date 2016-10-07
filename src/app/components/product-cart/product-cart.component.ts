import { Component, OnInit, Input} from '@angular/core';
import {ProductCart,Product} from '../../app-model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }
}
