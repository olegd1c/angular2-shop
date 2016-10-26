import { Component, OnInit, Input } from '@angular/core';
import { Auth }              from '../auth/auth.service';
import { Order } from '../../app-model';
import { ProductService} from '../../services/product-service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {

  orders: Order[] = [];
  constructor(private auth: Auth, private productService: ProductService) {
      
  }

  ngOnInit() {
    //console.log(this.auth.userProfile.identities[0].user_id);
    this.productService.getOrders(this.auth.userProfile.identities[0].user_id)
        .subscribe(
        orders => this.orders = orders, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

}