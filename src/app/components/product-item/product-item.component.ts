import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../../app-model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addedCart: EventEmitter<Product>;
  @Output() deletedCart: EventEmitter<Product>;

  constructor() {
        this.addedCart = new EventEmitter<Product>();
        this.deletedCart = new EventEmitter<Product>();
   }

  ngOnInit() {
  }

   addCart() {
        console.log('product addCart');
        this.addedCart.emit(this.product);
    }

   deleteCart() {
        this.deletedCart.emit(this.product);
    }  
}

