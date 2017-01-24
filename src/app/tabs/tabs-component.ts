import {Component, AfterContentInit, QueryList, ContentChildren} from "@angular/core";
import {TabComponent} from "./tab-component";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs-component.html'
})
export class TabsComponent implements AfterContentInit{
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  select(newSelected: TabComponent) {
    this.tabs.forEach(tab => tab.selected = (tab === newSelected));
  }

  ngAfterContentInit(): void {
    this.select(this.tabs.first);
  }
}
