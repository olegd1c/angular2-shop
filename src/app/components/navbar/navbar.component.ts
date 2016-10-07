import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../app-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() productsCart: Product[];

  constructor() { }

  ngOnInit() {
  }

}
