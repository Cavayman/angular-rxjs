import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface Message {
  text: string;
}

@Injectable()
export class NumberStoreService {


  constructor(private http: HttpClient) {
  }


  searchMessages(keyword: string): Observable<Message[]> {
    const url = 'www.someexampleapi.com';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<Message[]>(url, {withCredentials: true, headers: headers});
  }
}
