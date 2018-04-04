import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
import { ConfigService } from '../shared/config.service';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const roomTransition = trigger('roomTransition', [
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
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  animations: [ roomTransition ],
  host: {
    '[@roomTransition]': ''
  }
})
export class RoomComponent implements OnInit {
  room: any;
  roomId: string;
  strokeColor = "red";
  constructor(public cs: ConfigService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.params['id'];
  }
}
