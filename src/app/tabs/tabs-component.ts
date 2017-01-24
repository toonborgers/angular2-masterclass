import {Component, OnInit} from "@angular/core";
import {TabComponent} from "./tab-component";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs-component.html'
})
export class TabsComponent {
  private tabs: Array<TabComponent> = [];

  addTab(tab: TabComponent) {
    this.tabs.push(tab);

    if (this.tabs.length === 1) {
      this.select(tab);
    }
  }

  select(newSelected: TabComponent) {
    this.tabs.find(tab => tab === newSelected)
      .selected = true;
  }
}
