import { Component, OnInit, Input } from '@angular/core';
import { GadgetModel } from '../../gadgetmodel';
import { ReviewModel } from '../../reviewmodel';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

    @Input() gadget: GadgetModel;
    newReview: ReviewModel;

    constructor() { }

    submitClicked() {
        this.gadget.reviews.push(this.newReview);
        this.ngOnInit();
    }

  ngOnInit() {
      this.newReview = {
          id: -1,
          createddate: '',
          body: '',
          rating: 5,
          author: ''
      };
  }

}
