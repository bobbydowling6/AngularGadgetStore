import { Component, OnInit, Input } from '@angular/core';
import { GadgetModel } from '../../gadgetmodel';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

    @Input() gadget: GadgetModel;
  constructor() { }

  ngOnInit() {
  }

}
