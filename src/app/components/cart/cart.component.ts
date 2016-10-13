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
    this.productsCart = this.productService.getProductsCart();
  }

  onProductAdded(product: ProductCart): void {
        this.addCart(product);
    }

    onProductDeleted(product: ProductCart): void {
        this.deleteCart(product);
    }    

    private addCart(product: ProductCart): void {
        this.productService.addProductCart(product);
        this.productsCart = this.productService.getProductsCart();
    }

    private deleteCart(product: ProductCart): void {   
        this.productService.deleteProductCart(product.id);        
        this.productsCart = this.productService.getProductsCart();    
    }   
}
