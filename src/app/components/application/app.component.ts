import { Component } from '@angular/core';
import {ProductCart} from '../../app-model';
import { ProductService} from '../../services/product-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  //productsCart: ProductCart[] = [];
  
  constructor(private productService: ProductService) {
    //this.products.push() = this.productService.getProducts();
    //this.productsCart.push(new ProductCart(1,"first",10,2));
    //this.productsCart.push(new ProductCart(2,"second",15,6));   
  }

}
