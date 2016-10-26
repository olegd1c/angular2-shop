import { Component, OnInit, Input } from '@angular/core';
import { OrderDetails } from '../../app-model';

@Component({
  selector: '[myTrOrder]',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input('myTrOrder') orderItem: OrderDetails;
  constructor() { }

  ngOnInit() {
  }

}
