import {Injectable, Inject} from "@angular/core";
import "rxjs/add/operator/map";
import {Http, URLSearchParams} from "@angular/http";
import {API_ENDPOINT_TOKEN} from "./app.config";
import {Contact} from "./models/contact";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

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

  search(termStream: Observable<string>, debounceMs = 400) {
    return termStream
      .debounceTime(debounceMs)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term));
  }

  private rawSearch(term: string) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('text', term);

    return this.http.get(`${this.apiEndpoint}/search`, {search: urlSearchParams})
      .map(res => res.json())
      .map(json => json.items);
  }

}
