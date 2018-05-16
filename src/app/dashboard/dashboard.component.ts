import { Component, OnInit } from '@angular/core';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
import { ConfigService } from '../shared/config.service';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const homeTransition = trigger('homeTransition',
[
  transition(':enter', [
    query('.room', style({ opacity: 0 })),
    query('.room', stagger(100, [
      style({ transform: 'translateY(100px)' }),
      animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('.rooms', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ])),        
  ])
]);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [ homeTransition ],
  host: {
    '[@homeTransition]': '',
  }
})
export class DashboardComponent implements OnInit {

  constructor(public cs: ConfigService) { 
    debugger;
  }

  ngOnInit() {
  }

  getRooms() {
    return Object.values(this.cs.layout['rooms']) || [];
  }

  hasLight(room) {
    if (!room.devices) return false;
    return Object.values(room.devices).filter((device: any) => device.type === "light" && device.properties.OnOff.value === "ON").length > 0;
  }

  getDevices(room) {
    return Object.values(room.devices || {});
  }
}
