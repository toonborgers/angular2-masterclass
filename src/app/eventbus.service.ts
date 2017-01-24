import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {EventBusArgs} from "./eventbus.args";

@Injectable()
export class EventBusService {
  private messages = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    this.messages.next(new EventBusArgs(eventType, data));
  }

  observe(eventType: string): Observable<any> {
    return this.messages
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }
}
