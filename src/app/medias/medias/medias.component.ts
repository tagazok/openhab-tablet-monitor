import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/config.service';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit {

  constructor(private configService: ConfigService,
              private api: ApiService) { }

  ngOnInit() {
  }

  getItemState(item) {
    return this.configService.items[item].state || ''
  }

  control(player, command) {
    this.api
      .send(`${this.configService.items[player.items.controls].id}`, command)
      .subscribe();
  }
}
