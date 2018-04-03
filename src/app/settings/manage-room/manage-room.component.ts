import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WidgetSwitchConfigComponent } from '../../widgets/widget-switch/widget-switch-config/widget-switch-config.component';
import { WidgetValueConfigComponent } from '../../widgets/widget-value/widget-value-config/widget-value-config.component';

@Component({
  selector: 'app-manage-room',
  templateUrl: './manage-room.component.html',
  styleUrls: ['./manage-room.component.css']
})
export class ManageRoomComponent implements OnInit {

  roomId: string;
  constructor(private cs: ConfigService,
              public dialog: MatDialog,
              private route:ActivatedRoute) { }

  private components = {
    'value': WidgetValueConfigComponent,
    'switch': WidgetSwitchConfigComponent,
  };

  ngOnInit() {
    this.roomId = this.route.snapshot.params['id'];
  }

  openConfig(widget): void {
    let dialogRef = this.dialog.open(this.components[widget.widget], {
      width: '50%',
      data: { widget: widget }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
