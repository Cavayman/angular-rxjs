import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, timer} from 'rxjs';
import {User} from '../model/User';
import {map} from 'rxjs/operators';

@Injectable()
export class NumberStoreService {

  private myNumbers: number[] = [];
  private numbers: BehaviorSubject<number[]> = new BehaviorSubject([]);

  constructor() {
    timer(0, 500).subscribe(i => {
      this.myNumbers.push(i);
    });
    timer(0, 2000).subscribe(res => {
      this.numbers.next(this.myNumbers);
      this.myNumbers = [];
    });
  }


  get number(): Observable<number[]> {
    return this.numbers.asObservable();
  }
}
