import {Component, Input} from "@angular/core";
import {TabsComponent} from "./tabs-component";

@Component({
  selector: 'trm-tab',
  templateUrl: './tab-component.html'
})
export class TabComponent {
  @Input() selected: boolean;
  @Input() title: string;

  constructor(private tabsComponent: TabsComponent) {
    tabsComponent.addTab(this);
  }
}


