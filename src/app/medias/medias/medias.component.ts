import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/config.service';
import { ApiService } from '../../shared/api.service';

import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const mediaTransition = trigger('mediaTransition',
[
  transition(':enter', [
    query('.player', style({ opacity: 0 })),
    query('.player', stagger(100, [
      style({ transform: 'translateY(100px)' }),
      animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('.players', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ])),        
  ])
]);

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css'],
  animations: [ mediaTransition ],
  host: {
    '[@mediaTransition]': '',
  }
})
export class MediasComponent implements OnInit {

  constructor(private configService: ConfigService,
              private api: ApiService) { }

  ngOnInit() {
  }

  getItemState(item) {
    return this.configService.items[item].state || '';
  }

  control(player, command) {
    this.api
      .send(`${this.configService.items[player.items.controls].id}`, command)
      .subscribe();
  }
}
