import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ProductService} from '../../services/product-service';
import { ProductCart,Product, CartContainer } from '../../app-model';
import { Auth }              from '../auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  productsCart: ProductCart[];

  constructor(private productService: ProductService, private auth: Auth) {
    this.productsCart = new Array<ProductCart>();
  }

  ngOnInit() {
    this.productsCart = this.productService.getProductsCartL();
    console.log("cart init");
    console.log(this.auth.userProfile);
    console.log(this.auth);                     
  }

  onProductAdded(product: ProductCart): void {
        this.addCart(product);
    }

    onProductDeleted(product: ProductCart): void {
        this.deleteCart(product);
    }    

  private sentCart(){  
    this.productService.sentCart(this.auth)
      .subscribe(
        res => 
          {
            console.log("sentCart subscribe");
//            console.log(res);

            if(res.status = 200 && res.json.success == 1){
              console.log("sentCart subscribe ok");
              this.productService.clearProductCarts();
              this.productsCart = this.productService.getProductsCartL();
              console.log("this.productsCart");
              console.log(this.productsCart);
            }
          } , 

        err => {
          // Log errors if any
          console.log(err);
        });      
    ;
  }

    private addCart(product: ProductCart): void {
        this.productService.addProductCartL(product);
        this.productsCart = this.productService.getProductsCartL(); 
    }

    private deleteCart(product: ProductCart): void {   
        this.productService.deleteProductCart(product.id);        
        this.productsCart = this.productService.getProductsCartL();    
    } 

}
