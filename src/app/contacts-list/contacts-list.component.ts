import {Component, OnInit} from "@angular/core";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/merge";
import {EventBusService} from "../eventbus.service";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService, private eventBusService: EventBusService) {
  }

  ngOnInit() {
    let getInitialData = this.contactsService.getContacts();
    let doSearch = this.contactsService.search(this.terms$);

    this.contacts = doSearch.merge(getInitialData);

    this.eventBusService.emit('appTitleChange', 'Contacts');
  }

}
