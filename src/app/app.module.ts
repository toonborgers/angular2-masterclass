import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ContactsAppComponent} from "./contacts.component";
import {ContactsService} from "./contacts.service";
import {ContactsListComponent} from "./contacts-list";
import {APP_ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import {ContactsDetailComponent} from "./contacts-detail/contacts-detail.component";
import {HttpModule} from "@angular/http";
import {API_ENDPOINT_TOKEN, API_ENDPOINT} from "./app.config";
import {FormsModule} from "@angular/forms";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {TabsComponent} from "./tabs/tabs-component";
import {TabComponent} from "./tabs/tab-component";
import {EventBusService} from "./eventbus.service";

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent, TabsComponent, TabComponent],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService, EventBusService,
    {provide: API_ENDPOINT_TOKEN, useValue: API_ENDPOINT}
  ]
})
export class ContactsModule {

}
