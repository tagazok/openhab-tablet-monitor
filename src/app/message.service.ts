import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { ConfigService } from './shared/config.service';

const CHAT_URL = 'wss://192.168.86.254:8123/api/websocket';


@Injectable()
export class MessageService {
  public messages: Subject<any>;
  private id: number;

  constructor(wsService: WebsocketService,
              private configService: ConfigService) {
    this.id = 3;
    this.messages = <Subject<any>>wsService.connect(CHAT_URL).map(
      (response: MessageEvent): any => {
        let data = JSON.parse(response.data);
        console.log(data);
        return data;
      }
    );
  }

  handleMessage(msg: any) {
    if (msg.type === 'auth_required') {
      const message =  {
        'type': 'auth',
        'access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwYWQzMmI2MzRiNDA0ZGJiOWE4YTUxNTM0NjAxYzRjYSIsImlhdCI6MTU3NjE2OTE0OSwiZXhwIjoxODkxNTI5MTQ5fQ.Evx-TgUW8DsOZNWHYMVmEn8Gbunkvwbidj0krC3a5ws'
      }
      this.messages.next(message);
    }
    if (msg.type === 'auth_ok') {
      this.subscribeEvents();
    }
    if (msg.id === 2) {
      this.configService.processItems(msg);
    }
    if (msg.type === 'event') {
      this.configService.updateItem(msg);
    }
  }

  subscribeEvents() {
    this.messages.next({'id': 2, 'type': 'get_states'});
    this.messages.next({'id': 3, 'type': 'subscribe_events', 'event_type': 'state_changed'});
  }

  sendMessage(msg) {
    msg.id = this.id++;
    this.messages.next(msg);
  }
}
