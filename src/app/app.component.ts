import { Component, NgZone, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/filter';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ToasterConfig } from "angular2-toaster";

import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';
import { LogService } from "./log.service";
import { ApiService } from "./shared/api.service";
import { ConfigService } from "./shared/config.service";
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
              private logService: LogService) {
    this.zone = new NgZone({ enableLongStackTrace: false });

    Promise.all([
      // this.cs.getLayout(),
      this.cs.getItems()
    ]).then((response => {
      this.getIndicatorsStream()
      // .filter(event => event.topic.includes('LivingRoom_GoogleHome_Control'))
      .subscribe(message => {
        this.updateData(message);
      }, error => {
        console.error(error);
      });
    }))
  }

  ngOnInit() {
    this.initClock();
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  getIndicatorsStream() {
    return Observable.create(observer => {
      let eventSource = new window['EventSource'](`${this.cs.serverUrl}${this.endpoint}`);
      eventSource.onmessage = event => {
        const data = JSON.parse(event.data);
        const match = data.topic.match("smarthome/items/.*/state");
        if (match && match.length > 0) {
          this.zone.run(() => {
            observer.next(JSON.parse(event.data));
          });
        }
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

  initClock() {
    setInterval(() => { 
      this.date = new Date();
    }, 1000);
  }

  updateData(message) {
    const item = message.topic.split('/')[2];
    const payload = JSON.parse(message.payload);
    if (this.cs.items[item]) {
      let value = payload.value;

      if (payload.type === "HSB") {
      const [h, s, b] = value.split(',');
      value = {h, s, b};
    }
      this.cs.items[item].state = value;
    };

    const log = {
      date: new Date().toLocaleString(),
      item: item,
      payload: payload
    };

    this.logService.push(log);

    // TODO : Battery alerts
  }
}
