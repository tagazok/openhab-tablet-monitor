import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const topTransition = trigger('topTransition', [
  transition(':enter', [
    group([
      query('.header', style({ opacity: 0 })),
      query('.devices', style({ opacity: 0 })),
    ]),
    group([
      query('.header', stagger(100, [
        style({ transform: 'translateY(-100px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
      ])),
      query('.devices', stagger(100, [
        style({ transform: 'translateY(100px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
      ])),
    ])
  ]),
  transition(':leave', [
    group([
      query('.header', stagger(100, [
        style({ transform: 'translateY(0px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(-100px)', opacity: 0})),
      ])),
      query('.devices', stagger(100, [
        style({ transform: 'translateY(0px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
      ])),
    ])
  ])
]);

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  animations: [ topTransition ],
  host: {
    '[@topTransition]': ''
  }
})
export class RoomComponent implements OnInit {
  room: any;
  roomId: string;
  constructor(public cs: ConfigService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.params['id'];
  }

  getDevices() {
    return Object.values(this.cs.config.rooms[this.roomId].devices || {});
  }
}
