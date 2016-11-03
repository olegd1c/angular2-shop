import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ProductService} from '../../services/product-service';
import { ProductCart, Product, ICartContainer, Customer } from '../../app-model';
import { Auth }              from '../auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  customer:Customer;
  productsCart: ProductCart[];
  public message: ICartContainer = {userId: "",
      totalSum: 0,
      address: "",
      orderDetails: []}
      
  constructor(private productService: ProductService, private auth: Auth) {
    this.productsCart = new Array<ProductCart>();
    //this.message.address = "Kiev, my home";
  }

  ngOnInit() {
    this.productsCart = this.productService.getProductsCartL();
    console.log("cart init");
    console.log(this.auth.userProfile);
    console.log(this.auth);
    this.getCustomer(this.auth);    
  }

  onProductAdded(product: ProductCart): void {
    this.addCart(product);
  }

  onProductDeleted(product: ProductCart): void {
    this.deleteCart(product);
  }

  private sentCart() {
    this.productService.sentCart(this.auth,this.message)
      .subscribe(
      res => {
        console.log("sentCart subscribe");
        //            console.log(res);

        if (res.status = 200 && res.json.success == 1) {
          console.log("sentCart subscribe ok");
          this.productService.clearProductCarts();
          this.productsCart = this.productService.getProductsCartL();
          
          this.message = {userId: "",
                totalSum: 0,
                address: "",
                orderDetails: []}
                          
          console.log("this.productsCart");
          console.log(this.productsCart);
        }
      },

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

  getCustomer(auth:Auth){
    console.log("auth");
    console.log(auth);  

    this.productService.sentRecCustomer(auth).subscribe(
      res => {
        console.log("getAddCustomer subscribe");      
        if (res.status = 200 && res.json.success == 1) {
          console.log(res.json);                      
          //this.customer = JSON.parse(res.json["customer"]);
          this.customer = res.json["customer"];
          console.log("this.customer");
          console.log(this.customer);
        }
      },
      err => {
        // Log errors if any
        console.log(err);
      });
    ;

  }

}
