import { Component, OnInit, Input } from '@angular/core';

import { GadgetModel } from '../../gadgetmodel';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
    @Input() gadget: GadgetModel;
    tab: number;

     setTab(selectedTab: number){
        this.tab = selectedTab;
    }

  constructor() { }

  ngOnInit() {
    this.tab = 1;
}
}
