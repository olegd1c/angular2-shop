import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product-service';
import {ProductCart} from '../../app-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  productsCart: ProductCart[] = [];

  constructor(private productService: ProductService) {
    //this.products.push() = this.productService.getProducts();
    this.productsCart.push(new ProductCart(1,"first",10,2));
    this.productsCart.push(new ProductCart(2,"second",15,6));   
  }

  ngOnInit() {
  }

}
