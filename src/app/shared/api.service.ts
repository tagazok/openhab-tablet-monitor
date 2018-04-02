import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class ApiService {

  private endpoint = "/rest/items";
  private plainTextHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'text/plain',
    })
  };
  constructor(private http: HttpClient,
  private cs: ConfigService) { }

  getAllItems() {
    return this.http.get(`${this.cs.serverUrl}${this.endpoint}`);
  }

  send(itemName, payload, httpOptions = {}) {
    return this.http.post(`${this.cs.serverUrl}${this.endpoint}/${itemName}`, payload, httpOptions);
  }

  sendPlainText(itemName, payload) {
    return this.send(itemName, payload, this.plainTextHttpOptions);
  }
}
