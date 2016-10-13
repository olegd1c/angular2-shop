import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../app-model';
import { Auth }      from '../auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

}
