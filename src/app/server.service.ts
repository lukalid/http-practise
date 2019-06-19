import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {

  private url = 'https://angular-http-practise-luka.firebaseio.com/data.json'; // data.json -> firebase specific

  constructor(private httpService: HttpClient) { }

  storeServers(servers: any[]) {
    return this.httpService.post(this.url, servers);
  }

}
