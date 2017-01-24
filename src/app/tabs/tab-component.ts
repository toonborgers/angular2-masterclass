import {Component, Input, OnInit} from "@angular/core";
import {TabsComponent} from "./tabs-component";

@Component({
  selector: 'trm-tab',
  templateUrl: './tab-component.html'
})
export class TabComponent implements OnInit {
  @Input() selected: boolean;
  @Input() title: string;

  constructor(private tabsComponent: TabsComponent) {
  }

  ngOnInit(): void {
    this.tabsComponent.addTab(this);
  }
}
