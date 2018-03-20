import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const bigRoomTransition = trigger('bigRoomTransition', [
  transition(':enter', [
    group([
      query('.area-center', style({ opacity: 0 })),
      query('.area-top', style({ opacity: 0 })),
      query('.area-bottom', style({ opacity: 0 })),
    ]),
    group([
      query('.area-center', stagger(100, [
        style({ transform: 'scale(.7)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'scale(1)', opacity: 1}))
      ])),
      query('.area-top', stagger(0, [
        style({ transform: 'translateY(-100px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
      ])),
      query('.area-bottom', stagger(0, [
        style({ transform: 'translateY(100px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
      ])),
    ])
  ]),
  transition(':leave', [
    group([
      query('.area-center', stagger(100, [
        style({ transform: 'scale(1)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'scale(.7)', opacity: 0})),
      ])),
      query('.area-top', stagger(0, [
        style({ transform: 'translateY(0px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(-100px)', opacity: 0})),
      ])),
      query('.area-bottom', stagger(0, [
        style({ transform: 'translateY(0px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
      ])),
    ])
  ])
]);

@Component({
  selector: 'app-big-room',
  templateUrl: './big-room.component.html',
  styleUrls: ['./big-room.component.css'],
  animations: [ bigRoomTransition ],
  host: {
    '[@bigRoomTransition]': ''
  }
})
export class BigRoomComponent implements OnInit {
  room: any;
  roomId: string;
  constructor(public cs: ConfigService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.params['id'];
  }
}
