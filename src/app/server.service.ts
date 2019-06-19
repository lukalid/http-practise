import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import {Observable, ObservableInput} from 'rxjs';

export interface Server {
  name: string;
  capacity: number;
  id: number;
}

@Injectable()
export class ServerService {

  private url = 'https://angular-http-practise-luka.firebaseio.com/data.json'; // data.json -> firebase specific

  constructor(private httpService: HttpClient) { }

  storeServers(servers: any[]) {
    const serverHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // return this.httpService.post(this.url, servers, {headers: serverHeaders});
    return this.httpService.put(this.url, servers, {headers: serverHeaders});
  }

  getServers() {
    return this.httpService.get<Server[]>(this.url)
      .map((response) => response)
      .catch((error: any) => Observable.throwError(error));
  }

  getAppName() {
    return this.httpService.get<string>('https://angular-http-practise-luka.firebaseio.com/appName.json')
      .map((response) => response);
  }

}
