import { Component, OnInit}         from '@angular/core';
import { Auth }              from '../auth/auth.service';
import { ProductService } from '../../services/product-service';
import { Customer } from '../../app-model';

@Component({
  selector: 'profile_show',
  templateUrl: './profile_show.template.html'
})

export class ProfileShow {
  customer:Customer;
  constructor(private auth: Auth, private productService: ProductService) {
    this.customer = new Customer("","","","","","",""); 
  }

  ngOnInit() {
    console.log("ProfileShow oninit");
    console.log(this.auth);    
    this.getCustomer(this.auth); 
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
};
