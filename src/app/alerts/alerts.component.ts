import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(public logService: LogService,
              private configService: ConfigService) { }

  ngOnInit() {
  }

  getDevices() {
    // return Object.values(this.configService.items);
    return [];
  }

  getAlerts() {
    return Object.values(this.logService.alertsLogs);
  }
}
