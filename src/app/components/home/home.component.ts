import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProductService} from '../../services/product-service';
import { Angular2ShopRoutingModule} from '../application/app.routing';
//import { SessionStorage } from '@angular/WebStorage'

import {Product} from '../../app-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 
export class HomeComponent implements OnInit {
  //@Output() addedCart: EventEmitter<Product>;
  //@Output() deletedCart: EventEmitter<Product>;

  products: Product[] = [];

  //@SessionStored
  productsCart: Product[] = new Array<Product>();

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    //this.productsCart = new Array<Product>();
    //this.addedCart = new EventEmitter<Product>();
    //this.deletedCart = new EventEmitter<Product>();  
    console.log('home constructor');  
  }

  ngOnInit() {
    console.log('home ngOnInit');  
  }

  onProductAdded(product: Product): void {
        console.log('home addCart');
        //this.productService.addProduct(product).then(product => this.addCart(product));
        this.addCart(product);
    }

    onProductDeleted(product: Product): void {
        //this.productService.deleteProduct(product).then(product => this.deleteCart(product));
    }    

    private addCart(product: Product): void {
        console.log('home addCart 2');
        this.productsCart.push(product);
        console.log('productsCart.length '+this.productsCart.length);
    }

    private deleteCart(product: Product): void {
        let index = this.productsCart.indexOf(product);

        if (index > -1) {
            this.productsCart.splice(index, 1);
        }
    } 

}
