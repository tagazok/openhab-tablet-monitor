import { Injectable } from "@angular/core";

@Injectable()
export class LogService {
  public eventSourceLogs: Array<any>;
  private eventSourceLogsSize: number = 100;

  constructor() {
    this.eventSourceLogs = new Array<any>();
  }

  push(log) {
    this.eventSourceLogs.push(log);
    if (this.eventSourceLogs.length > this.eventSourceLogsSize) {
      this.eventSourceLogs.shift();
    }
  }
}
