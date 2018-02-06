import { Component, OnInit, Input } from '@angular/core';

import { GadgetModel } from '../../gadgetmodel';

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.component.html',
  styleUrls: ['./gadget.component.css']
})
export class GadgetComponent implements OnInit {
    @Input() gadget: GadgetModel;

  constructor() { }

  ngOnInit() {
  }

}
