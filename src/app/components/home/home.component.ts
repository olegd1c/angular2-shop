import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProductService} from '../../services/product-service';
import { Angular2ShopRoutingModule} from '../application/app.routing';
import {Observable}               from 'rxjs/Observable';
//import { SessionStorage } from '@angular/WebStorage'

import {Product,IProduct} from '../../app-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 
export class HomeComponent implements OnInit {
  //@Output() addedCart: EventEmitter<Product>;
  //@Output() deletedCart: EventEmitter<Product>;

  products: Product[] = [];
//products: Observable<Product[]>;
    //products: Promse<Product[]>;
  //@SessionStored
  productsCart: Product[] = new Array<Product>();

  constructor(private productService: ProductService) {
    //this.products = this.productService.getProducts();
    //this.productsCart = new Array<Product>();
    //this.addedCart = new EventEmitter<Product>();
    //this.deletedCart = new EventEmitter<Product>();  
    console.log('home constructor');  
  }

  ngOnInit() {
    console.log('home ngOnInit');
      /*
      this.productService.getProductsP().then(products => {
          console.log('home ngOnInit promise');
          console.log(products);
          //console.log(JSON.parse(products));
          this.products = products
      });
      */

      this.productService.getProductsP()
        .subscribe(
                               products => this.products = products, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });      

      console.log('home ngOnInit end');
  }

  onProductAdded(product: Product): void {
        console.log('home addCart');
        //this.productService.addProduct(product).then(product => this.addCart(product));
        this.addCart(product);
    }

    onProductDeleted(product: Product): void {
        this.deleteCart(product);
    }    

    private addCart(product: Product) {      
        this.productService.addProductToCartL(product);
        /*
        this.productService.addProductToCart(product).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );;
      */
    }

    private deleteCart(product: Product): void {
        console.log('delete prod');   
        this.productService.deleteProductCart(product.id);            
    } 

    handleResponse(response){
       console.log(`msg is: {response.status}`);

      if(response.status =='success'){
        //this.message = {name: '', email: '', message: ''};
        alert('Thank you for message');
      }

      if(response.status =='error'){
        alert('We were unable to send your message. Try again or send the email directly. Thank you');
      }
      
    }

}
