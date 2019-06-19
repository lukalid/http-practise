import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {

  private url = 'https://angular-http-practise-luka.firebaseio.com/data.json'; // data.json -> firebase specific

  constructor(private httpService: HttpClient) { }

  storeServers(servers: any[]) {
    const serverHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpService.post(this.url, servers, {headers: serverHeaders});
  }

}
