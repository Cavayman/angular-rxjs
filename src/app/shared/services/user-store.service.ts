import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/User';
import {map} from 'rxjs/operators';

@Injectable()
export class UserStore {

  private userData: BehaviorSubject<User> = new BehaviorSubject({userName: null, password: null});

  constructor() {
  }

  get user() {
    return this.userData.asObservable();
  }

  loginUser(user: User) {
    return new Observable(observer => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userData.next(user);
        observer.next();
      }, 1000);
    });
  }

  logoutUser() {
    return new Observable(observer => {
      setTimeout(() => {
        localStorage.removeItem('user');
        this.userData.next(null);
        observer.next();
      }, 1000);
    });
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.user.pipe(map(user => (user && user.userName && user.password) ? true : false));
  }
}
