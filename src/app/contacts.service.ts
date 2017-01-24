import {Injectable, Inject} from "@angular/core";
import "rxjs/add/operator/map";
import {Http, URLSearchParams} from "@angular/http";
import {API_ENDPOINT_TOKEN} from "./app.config";
import {Contact} from "./models/contact";

@Injectable()
export class ContactsService {

  constructor(private http: Http, @Inject(API_ENDPOINT_TOKEN) private apiEndpoint: string) {
  }

  getContacts() {
    return this.http.get(`${this.apiEndpoint}/contacts`)
      .map(res => res.json())
      .map(json => json.items);
  }

  getContact(id: string) {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
      .map(res => res.json())
      .map(json => json.item);
  }

  updateContact(contact: Contact) {
    let url = `${this.apiEndpoint}/contacts/${contact.id}`;

    return this.http.put(url, contact);
  }

  search(term: string) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('text', term);

    return this.http.get(`${this.apiEndpoint}/search`, {search: urlSearchParams})
      .map(res => res.json())
      .map(json => json.items);
  }
}
