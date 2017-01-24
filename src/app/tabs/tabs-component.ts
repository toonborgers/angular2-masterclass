import {Component, OnInit} from "@angular/core";
import {TabComponent} from "./tab-component";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs-component.html'
})
export class TabsComponent implements OnInit {
  private tabs: Array<TabComponent> = [];

  ngOnInit(): void {
  }

  addTab(tab: TabComponent) {
    this.tabs.push(tab);

    if (this.tabs.length === 1) {
      this.select(tab);
    }
  }

  select(toSelect: TabComponent) {
    this.tabs.forEach(tab => tab.selected = (tab === toSelect));
  }
}
