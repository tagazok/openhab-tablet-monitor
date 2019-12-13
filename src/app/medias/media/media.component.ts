import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from 'src/app/shared/config.service';
import { MessageService } from 'src/app/message.service';
import { MatDialog } from '@angular/material/dialog';
import { PlaylistsComponent } from '../playlists/playlists.component';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  @Input() public player: any;

  item: any;
  constructor(public configService: ConfigService,
              public messageService: MessageService,
              public dialog: MatDialog,) { }

  ngOnInit() {
    this.item = this.configService.items[this.player.item];
    console.log(this.item);
  }

  control(service) {
    this.messageService.sendMessage({
      domain: 'media_player',
      service: service,
      type: 'call_service',
      service_data: {
        entity_id: this.item.id
      }
    })
  }

  showPlaylists(): void {
    const dialogRef = this.dialog.open(PlaylistsComponent, {
      width: '50%',
      data: { player: this.player }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`result: ${result}`);
    });
  }
}
