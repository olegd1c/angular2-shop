import { Component, OnInit } from '@angular/core';
import {ProductCart,Product} from '../../app-model';
import { ProductService} from '../../services/product-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(private productService: ProductService) {   
    console.log('app constructor');  
  }
         
  ngOnInit() {
    console.log('home ngOnInit');  
  }
}
