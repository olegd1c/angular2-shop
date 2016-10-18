import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ProductService} from '../../services/product-service';
import { ProductCart,Product } from '../../app-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  productsCart: ProductCart[];

  constructor(private productService: ProductService) {
    this.productsCart = new Array<ProductCart>();
  }

  ngOnInit() {
    this.productsCart = this.productService.getProductsCartL();
    
    /*this.productService.getProductsCart()
              .subscribe(productsCart => {
                console.log('cart on init')
                console.log(productsCart) 
                this.productsCart = productsCart
              }
                , //Bind to view
              err => {
              // Log errors if any
              console.log(err);
              });
      */                      
  }

  onProductAdded(product: ProductCart): void {
        this.addCart(product);
    }

    onProductDeleted(product: ProductCart): void {
        this.deleteCart(product);
    }    

    private addCart(product: ProductCart): void {
        this.productService.addProductCartL(product);
        this.productsCart = this.productService.getProductsCartL();
    /*
    this.productService.getProductsCart()
              .subscribe(productsCart => this.productsCart = productsCart, //Bind to view
              err => {
              // Log errors if any
              console.log(err);
              });
              */        
    }

    private deleteCart(product: ProductCart): void {   
        this.productService.deleteProductCart(product.id);        
        this.productsCart = this.productService.getProductsCartL();
    /*
    this.productService.getProductsCart()
              .subscribe(productsCart => this.productsCart = productsCart, //Bind to view
              err => {
              // Log errors if any
              console.log(err);
              });
              */            
    } 

}
