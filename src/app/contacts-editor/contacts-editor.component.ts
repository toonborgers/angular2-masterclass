import {Component, OnInit} from '@angular/core';
import {Contact} from "../models/contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  private contact: Contact = <Contact>{address: {}};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactsService: ContactsService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.contactsService
      .getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  save(contact: Contact) {
    this.contactsService
      .updateContact(contact)
      .subscribe(() => {
        this.goToDetails(contact);
      });
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  private goToDetails(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }
}
