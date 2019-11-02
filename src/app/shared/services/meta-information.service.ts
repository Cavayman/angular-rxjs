import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {fromEvent, merge} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserStore} from './user-store.service';

@Injectable()
export class MetaInformationService {

  constructor(private localStorageService: UserStore) {

  }

  getOnlineStatus(): Observable<boolean> {
    return merge(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      Observable.create(sub => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }
}
