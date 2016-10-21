import { Component, OnInit } from '@angular/core';
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
  model = new ProductSearchParams("dd",20,1000);
  active = true;

 constructor(private productService: ProductService ) {
/* 
  this.signinForm = _builder.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
*/        
}

  ngOnInit() {
    //this.model = this.productService.getProductSearchParams();  
  }

  onSubmit(){
    console.log(this.model);
    this.productService.setProductSearchParams(this.model);
  }
}
