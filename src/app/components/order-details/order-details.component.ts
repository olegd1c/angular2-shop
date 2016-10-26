import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Order, OrderDetails} from '../../app-model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderId: number;
  orderDetails: OrderDetails[];  
  order: Order;
  constructor(private productService: ProductService, route: ActivatedRoute) {
    this.orderId = parseInt(route.snapshot.params['orderId']);
    console.log(route.snapshot.params['order']);
    
    //this.order = parse  route.snapshot.params['order'];
  }

  ngOnInit() {
    this.order = this.productService.getOrderById(this.orderId);
    console.log("this.order");
    console.log(this.order);
    this.productService.getOrderDetails(this.orderId)
      .subscribe(
        orderDetails => this.orderDetails = orderDetails, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });    
  }

}
