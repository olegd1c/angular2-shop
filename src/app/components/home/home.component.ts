import { Component, OnInit, Input, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { ProductService} from '../../services/product-service';
import { Angular2ShopRoutingModule} from '../application/app.routing';
import {Observable}               from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import {Product,IProduct, ProductSearchParams} from '../../app-model';
import { ProductSearchPipe } from '../product-pipe/product-search.pipe';
/*
@Pipe({ name: 'minPrice',  pure: false })
export class minPriceSearchPipe implements PipeTransform {
transform(value: any, [price]): any {
        return value.filter((item) => item.price < price);
    }
}

*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 
export class HomeComponent implements OnInit {
  //@Output() addedCart: EventEmitter<Product>;
  //@Output() deletedCart: EventEmitter<Product>;
  //minPrice: minPriceSearchPipe;
  products: Product[] = [];
  productsOb: Observable<Product[]>;
    //products: Promse<Product[]>;
  //@SessionStored
  productsCart: Product[] = new Array<Product>();
  productSearchParams : ProductSearchParams;

  constructor(private productService: ProductService, private minPricePipe: ProductSearchPipe) {
    //this.products = this.productService.getProducts();
    //this.productsCart = new Array<Product>();
    //this.addedCart = new EventEmitter<Product>();
    //this.deletedCart = new EventEmitter<Product>();  
    console.log('home constructor');  
  }

  ngOnInit() {
    console.log('home ngOnInit');
    
        this.productSearchParams = this.productService.getProductSearchParams();
      
        //console.log(this.productSearchParams);        
        this.productService.getProductsP()
          .subscribe(
                                products => this.products = products, //Bind to view
                                  err => {
                                      // Log errors if any
                                      console.log(err);
                                  });
    //console.log(this.products);        

/*
       this.productService.searchEvent
          .subscribe(
        params => this.productsOb = this.productService.search(params),
        console.error.bind(console),
        () => console.log('DONE')
      )
      .subscribe(
                                productsOb => this.products = productsOb, //Bind to view
                                  err => {
                                      // Log errors if any
                                      console.log(err);
                                  })
      ;                             
 */
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

  updateProducts(){
    console.log('home updateProducts');
     this.products = this.minPricePipe.transform(this.products,this.productSearchParams); 
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
