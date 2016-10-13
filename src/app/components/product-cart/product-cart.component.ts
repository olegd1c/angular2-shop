import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ProductCart,Product} from '../../app-model';
import {ProductService} from '../../services/product-service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  @Input() product: ProductCart;
  @Output() addedCart: EventEmitter<ProductCart>;
  @Output() deletedCart: EventEmitter<ProductCart>;

  constructor(private productService: ProductService) {
        this.addedCart = new EventEmitter<ProductCart>();
        this.deletedCart = new EventEmitter<ProductCart>();
   }

  ngOnInit() {
  }

   addCart() {
        console.log('product addCart');
        this.addedCart.emit(this.product);
    }

   deleteCart() {
        console.log('product delete prod');
        this.deletedCart.emit(this.product);
    } 
}
