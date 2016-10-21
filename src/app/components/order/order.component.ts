import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../app-model';

//selector: '[myTr]app-order',
@Component({
  selector: '[myTr]',  
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input('myTr') order: Order;
  
  constructor() { }

  ngOnInit() {
  }

}
