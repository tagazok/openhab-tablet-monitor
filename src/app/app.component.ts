import { Component, NgZone, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/filter';
import { ApiService } from "./api.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConfigService } from "./config.service";
import { ToasterConfig } from "angular2-toaster";

import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';
import { LiteService } from "./lite.service";
import { LogService } from "./log.service";
const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    sequence([
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('.1ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(-100%)' }))
        ]),
        query(':enter', [
          animate('.1ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(0%)' })),
        ]),
      ]),
      query(':enter', animateChild()),
    ])
  ])
]);


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [ routerTransition ]
})
export class AppComponent implements OnInit {
  private zone: NgZone;
  private date: Date = new Date();
  private endpoint = "/rest/events";
  public config: ToasterConfig = new ToasterConfig({timeout: 200000000});

  constructor(private api: ApiService,
              private snackBar: MatSnackBar,
              private cs: ConfigService,
              private ls: LiteService,
              private logService: LogService) {
    this.zone = new NgZone({ enableLongStackTrace: false });

    Promise.all([
      fetch(this.cs.configUrl),
      fetch(this.cs.devicesUrl)
    ]).then((response: any) => {
      return Promise.all([
        response[0].json(),
        response[1].json()
      ]);
    })
    .then((config: any) => {
      this.cs.layout = config[0];
      this.cs.devices = config[1];
      this.initValues();
      this.getIndicatorsStream()
      // .filter(event => event.topic.includes('LivingRoom_GoogleHome_Control'))
      .subscribe(message => {
        this.updateData(message);
      }, error => {
        console.error(error);
      });
    });
  }

  ngOnInit() {
    this.initClock();
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  initValues() {
    this.api.getAllItems().subscribe((items: Array<any>) => {
      for(let item of items) {
        const [room, device, property] = item.name.split('_');
        const deviceKey = `${room}_${device}`;

        console.log(item.name);
        console.log(this.cs.devices);
        if (this.cs.devices[deviceKey] && this.cs.devices[deviceKey].properties[property]) {
          let value = item.state;
          if (item.type === "Color") {
            const [h, s, b] = item.state.split(',');
            value = {h, s, b};
          }
          this.cs.devices[deviceKey].properties[property].value = value;
        }
      }
    });
  }

  getIndicatorsStream() {
    return Observable.create(observer => {
      let eventSource = new window['EventSource'](`${this.cs.serverUrl}${this.endpoint}`);
      eventSource.onmessage = event => {
        this.zone.run(() => {
          observer.next(JSON.parse(event.data));
        });
      };
      eventSource.onerror = error => observer.error(error);
    });
  }

  nightMode() {
    this.api.send('LightsGroup', 'OFF').subscribe(response => {
      this.snackBar.open('Good night :)', '', {
        duration: 2000
      });
    }, error => {
      
    })
  }

  toggleLiteMode() {
    this.ls.sharedNode.liteMode = !this.ls.sharedNode.liteMode;
  }


  initClock() {
    setInterval(() => { 
      this.date = new Date();
    }, 1000);
  }

  updateData(message) {
    const item = message.topic.split('/')[2]
    const [room, device, property] = item.split('_');
    const payload = JSON.parse(message.payload);
    
    console.group(room)
    console.log(message.topic);
    console.log(message.payload);
    console.log(`${room} ${device} ${property} => ${payload.value}`);
    console.groupEnd();

    const deviceKey = `${room}_${device}`;
    if (!this.cs.devices[deviceKey] ||
        !this.cs.devices[deviceKey].properties[property])
        return;
    let value = payload.value;
    if (payload.type === "HSB") {
      const [h, s, b] = payload.value.split(',');
      value = {h, s, b};
    }

    this.logService.push({
      date: new Date().toLocaleString(),
      item: item,
      payload: payload
    });
    this.cs.devices[deviceKey].properties[property].value = value;
  }
}
