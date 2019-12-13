import { Component, OnInit, Inject } from '@angular/core';
import { MediaComponent } from '../media/media.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfigService } from 'src/app/shared/config.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists: any[];

  constructor(public dialogRef: MatDialogRef<MediaComponent>,
              public configService: ConfigService,
              public messageService: MessageService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.playlists = this.configService.layout['playlists'];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  play(uri) {
      this.messageService.sendMessage({
        domain: 'spotcast',
        service: 'start',
        type: 'call_service',
        service_data: {
          device_name: this.data.player.device_name,
          uri: uri,
          transfer_playback: true
        }
      });
    this.dialogRef.close();
  }

}
