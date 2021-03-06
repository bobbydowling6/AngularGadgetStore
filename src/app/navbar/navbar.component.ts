import { Component, OnInit, Input} from '@angular/core';
import { cartmodel } from '../../cartmodel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    @Input() cart: cartmodel;
links = [{
    text: 'Home',
    href: './Home'
}, {
    text: 'Account',
    href: './Account'
}];
  constructor() { }

  ngOnInit() {
  }

}

