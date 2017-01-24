import {Component, OnInit} from "@angular/core";
import {Contact} from "../models/contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../contacts.service";
import {EventBusService} from "../eventbus.service";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  private contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactsService: ContactsService,
              private router: Router,
              private eventBusService: EventBusService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.contactsService
      .getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        this.eventBusService.emit('appTitleChange', contact.name);
      });
  }

  navigateToEditor() {
    this.router.navigate(["edit"], {relativeTo: this.route});
  }

  navigateToList() {
    this.router.navigate(["/"]);
  }
}
