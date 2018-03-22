import { Injectable } from "@angular/core";

@Injectable()
export class LogService {
  public eventSourceLogs: Array<any> = new Array<any>();
  public alertsLogs: Array<any> = new Array<any>();
  private eventSourceLogsSize: number = 100;

  constructor() {
  }

  push(log) {
    this.eventSourceLogs.push(log);
    if (this.eventSourceLogs.length > this.eventSourceLogsSize) {
      this.eventSourceLogs.shift();
    }
  }

  // createAlert(key, log) {
  //   if (!this.alertsLogs[key])
  //     this.alertsLogs[key] = [];
  //   this.alertsLogs[key].push(log);
  // }
}
