import {Injectable, OnInit} from '@angular/core';
import { Product, Review, ProductCart, Cart,IProduct} from '../app-model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable }               from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
//import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';



@Injectable()
export class ProductService {
//  let productCarts: ProductCarts[];
// let product: Product;
//public cart: Cart;

   //private apiUrl = 'php/';
    private apiUrl = environment.uri_php;
    //
   //private apiUrl = "http://angular2-shop.devapp.in.ua/php/";//get_products.php
   private apiUrlProduct = this.apiUrl+environment.uri_product;
   private apiUrlToCart = this.apiUrl+environment.uri_to_cart;
   private apiUrlGetCart = this.apiUrl+environment.uri_get_cart;

   productsCart : ProductCart[];

    _headers:  Headers;
    constructor(private _http: Http) {
      console.log('ProductService constructor');
      //this.productsCart = new Array<ProductCart>();
      var productsCartLocal: any = localStorage.getItem('productsCart');
      if (productsCartLocal == null) {
        this.productsCart = new Array<ProductCart>();
        this.setProductCarts(this.productsCart); 
      } 
      else{
        this.productsCart = JSON.parse(productsCartLocal);
      }  
        //productsCart = []
        /*
        this._http = _http;
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
        this._headers.append('Access-Control-Allow-Origin', '*');
        this._headers.append("Access-Control-Allow-Origin", "http://localhost:4200");
        this._headers.append('Access-Control-Allow-Headers', 'Content-Type');
        this._headers.append('Access-Control-Allow-Methods', 'GET');
        */
    }

  ngOnInit() {
    console.log('ProductService ngOnInit'); 
  }



/*
    getProductsP(): Promise<Product[]> {
        return this._http.get(this.apiUrlProduct)
            .toPromise()
            .then(res => {
                    console.log(res.json()['products']);
                    //console.log(res.json().data);
                    return res.json()['products']
                }
                )
            .catch(this.handleError);
    }
*/
  getProducts1(): Product[] {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductsP() : Observable<Product[]> {

        // ...using get request
        return this._http.get(this.apiUrlProduct)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json()['products'])
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
/*
  getProductsCart(): ProductCart[] 
  {     
    //apiUrlGetCart
    //return JSON.parse(localStorage.getItem('productsCart'));
             // ...using get request
        return this.getProductsCartServ()
              .subscribe(productsCart => this.productsCart = productsCart, //Bind to view
              err => {
              // Log errors if any
              console.log(err);
              });                 
  }
*/
  getProductsCart(): Observable<ProductCart[]> 
  {     
    //apiUrlGetCart
    //return JSON.parse(localStorage.getItem('productsCart'));
             // ...using get request
        return this._http.get(this.apiUrlGetCart)
            // ...and calling .json() on the response to return data
            .map(
              (res:Response) => {
                console.log('ff');
                console.log(res.json());
                res.json()['cart']}            
            )
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  setProductCarts(productsCart: ProductCart[]) 
  {     
      localStorage.setItem('productsCart',JSON.stringify(productsCart));
  } 

  addProductCartL(productCart: ProductCart){
    
      let indexP : number = this.findProductCart(productCart.id);
      this.productsCart = this.getProductsCartL();
      if (indexP >= 0) {                
        let prodCart = this.productsCart[indexP];
        
        console.log('addProductCart sum');
        console.log(prodCart);  
        let newCount = prodCart.count+1;  
        
        //prodCart.setCount(newCount);
        prodCart.count = newCount;
        prodCart.sum = prodCart.count*prodCart.price;

        this.productsCart[indexP] = prodCart; 

        this.setProductCarts(this.productsCart);                
      } 

      else{        
        this.productsCart.push(productCart);
      }

    //this.productsCart.push(productCart);

    this.setProductCarts(this.productsCart);    
  }

  getProductsCartL(){
    return this.productsCart;
  }

  addProductCart(productCart: ProductCart) 
  {     
      this.add_to_cart(productCart);
      /*
      let indexP : number = this.findProductCart(productCart.id);
      this.productsCart = this.getProductsCart();
      if (indexP >= 0) {                
        let prodCart = this.productsCart[indexP];
        
        console.log('addProductCart sum');
        console.log(prodCart);  
        let newCount = prodCart.count+1;  
        
        //prodCart.setCount(newCount);
        prodCart.count = newCount;
        prodCart.sum = prodCart.count*prodCart.price;

        this.productsCart[indexP] = prodCart; 

        this.setProductCarts(this.productsCart);                
      } 

      //else{        
      //  this.productsCart.push(productCart);
      //}
      */
      
       
  } 

private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
}

  add_to_cart (productCart: ProductCart): Observable<string> {
    console.log('start add_to_cart');
    //let body = JSON.stringify(productCart);//"cart";//JSON.stringify({ name });
    /*
    public id: number;
    public title: string;
    public price: number = 0;
    public rating: number;
    public description: string;
    public categories: string[];
    public count: number = 0;
    public sum: number = 0;
*/
    let body = `id=${productCart.id}&title=${productCart.title}&price=${productCart.price}&rating=${productCart.rating}&description=${productCart.description}&categories=${productCart.categories}&count=${productCart.count}&sum=${productCart.sum}`;
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers , method: "post"});

    console.log('uri: '+this.apiUrlToCart);
    console.log('body: '+body);

     return this._http.post(this.apiUrlToCart, body, options) 
                    .map(res => <string> res.json());
    /*                    
    return this._http.post(this.apiUrlToCart, body, options)
                    .map(this.extractData)
                    .catch((error:any) => Observable.throw(error.json().error || 'Error add to cart'));
                    */

/*
    let body = `name=${newMail.name}&email=${newMail.email}&message=${newMail.message}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers , method: "post"});

    return this._http.post(this._contactUrl, body, options) 
                    .map(res => <string> res.json());
                    //.catch(this.handleError)
*/

    //console.log('end add_to_cart');                
  }

  addProductToCartL(product: Product){
    this.addProductCartL(new ProductCart(product,1));
  }

  addProductToCart(product: Product): Observable<string>
  {   
    return this.add_to_cart(new ProductCart(product,1));
    /*  
      let indexP : number = this.findProductCart(product.id);
      this.productsCart = this.getProductsCart();
      if (indexP >= 0) {
        let prodCart = this.productsCart[indexP];
        console.log('addProductToCart sum');
        console.log(prodCart);      
        let newCount = prodCart.count+1;   
        
        //prodCart.setCount(newCount);
        this.setCountProduct(prodCart,newCount);
        this.productsCart[indexP] = prodCart; 
        this.setProductCarts(this.productsCart); 

      } 
      else{
        this.productsCart = this.getProductsCart();
        
        console.log('addProductToCart else');
        console.log(product);   

        this.productsCart.push(new ProductCart(product,1));
        this.setProductCarts(this.productsCart);         
      }
      
      this.setProductCarts(this.productsCart);
      */
  }  

  public setCountProduct(product: ProductCart,countP: number){
      product.count = countP;
      product.sum = product.count*product.price;
    }       

  deleteProductCart(id: number) 
  {   
      console.log('ProductService deleteProductsCart');          
      //console.log('ProductService products '+this.productsCart.length); 

      let indexP : number = this.findProductCart(id);
  
          if (indexP >= 0){
              this.productsCart = this.getProductsCartL();            
              this.productsCart.splice(indexP,1);
              this.setProductCarts(this.productsCart);
              //break;  
          }   
             
  }  


  findProductCart( idP : number) : number{
   
      let indexP: number = -1;
      this.productsCart = this.getProductsCartL();
      for (var i = 0; i < (this.productsCart.length); i++){        
                if (this.productsCart[i].id == idP){
                    indexP = i;
                    break;  
                }
            }
    return indexP;                
  }
  
   
  getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
  }

  getReviewsForProduct(productId: number): Review[] {
    return reviews
      .filter(r => r.productId === productId)
      .map(r => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));
  }

  getAllCategories(): string[] {
    return ['Books', 'Electronics', 'Hardware'];
  }

  /*
  private handleError(error: any): Promise<any> {
        console.log('Произошла ошибка', error);
        return Promise.reject(error.message || error);
    }  

  addProduct(product: Product): Promise<Product> {
        return this.post(product);
    }

  deleteProduct(product: Product): Promise<Product> {
        return this.delete(product);
    }    

  private post(product: Product): Promise<Product> {
        let body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this._http.post(this.apiUrl, body, options)
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError)
    }

    private put(product: Product): Promise<Product> {
        let body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${product.id}`;

        return this._http.put(url, body, options)
                        .toPromise()
                        .then(res => product)
                        .catch(this.handleError);
    }

    private delete(product: Product): Promise<Product> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${product.id}`;

        return this._http.delete(url, options)
                        .toPromise()
                        .then(res => product)
                        .catch(this.handleError);
    }
    */

} 

var products = [
  {
    "id": 0,
    "title": "First Product",
    "price": 24.99,
    "rating": 4.3,
    "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["electronics", "hardware"]
  },
  {
    "id": 1,
    "title": "Second Product",
    "price": 64.99,
    "rating": 3.5,
    "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["books"]
  },
  {
    "id": 2,
    "title": "Third Product",
    "price": 74.99,
    "rating": 4.2,
    "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["electronics"]
  },
  {
    "id": 3,
    "title": "Fourth Product",
    "price": 84.99,
    "rating": 3.9,
    "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["hardware"]
  },
  {
    "id": 4,
    "title": "Fifth Product",
    "price": 94.99,
    "rating": 5,
    "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["electronics", "hardware"]
  },
  {
    "id": 5,
    "title": "Sixth Product",
    "price": 54.99,
    "rating": 4.6,
    "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["books"]
  }
];

var reviews = [
  {
    "id": 0,
    "productId": 0,
    "timestamp": "2014-05-20T02:17:00+00:00",
    "user": "User 1",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 1,
    "productId": 0,
    "timestamp": "2014-05-20T02:53:00+00:00",
    "user": "User 2",
    "rating": 3,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 2,
    "productId": 0,
    "timestamp": "2014-05-20T05:26:00+00:00",
    "user": "User 3",
    "rating": 4,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 3,
    "productId": 0,
    "timestamp": "2014-05-20T07:20:00+00:00",
    "user": "User 4",
    "rating": 4,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 4,
    "productId": 0,
    "timestamp": "2014-05-20T11:35:00+00:00",
    "user": "User 5",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 5,
    "productId": 0,
    "timestamp": "2014-05-20T11:42:00+00:00",
    "user": "User 6",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  }
];
