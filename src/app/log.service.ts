import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  public eventSourceLogs: Array<any> = new Array<any>();
  public alertsLogs: any = {};
  private eventSourceLogsSize = 100;

  constructor() {
  }

  push(log) {
    this.eventSourceLogs.push(log);
    if (this.eventSourceLogs.length > this.eventSourceLogsSize) {
      this.eventSourceLogs.shift();
    }
  }

  createAlert(key, log) {
    console.log(`%c Received alert for ${key.name}`, 'color: red');
    if (!this.alertsLogs[key]) {
      this.alertsLogs[key] = log;
    }
  }
}
