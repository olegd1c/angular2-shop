import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ProductSearchParams} from '../../app-model';
import { ProductService} from '../../services/product-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model : ProductSearchParams;
  active = true;
  
  @Output() updateProducts: EventEmitter<ProductSearchParams>;

 constructor(private productService: ProductService ) {
    //this.model = new ProductSearchParams("",0,0);
  this.updateProducts = new EventEmitter<ProductSearchParams>();
/* 
  this.signinForm = _builder.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
*/        
}

  ngOnInit() {
    this.model = this.productService.getProductSearchParams();  
  }
   
  onSubmit(){
    console.log('search onSubmit');
    console.log(this.model);    
    this.productService.setProductSearchParams(this.model);
    this.updateProducts.emit(this.model);
    console.log(this.model); 
  }
}
