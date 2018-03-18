import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class ApiService {

  private endpoint = "/rest/items";
  constructor(private http: HttpClient,
  private cs: ConfigService) { }

  send(itemName, payload) {
    return this.http.post(`${this.cs.serverUrl}${this.endpoint}/${itemName}`, payload);
  }
}
