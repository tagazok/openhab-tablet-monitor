import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageRoomComponent } from '../../../settings/manage-room/manage-room.component';

@Component({
  selector: 'app-widget-value-config',
  templateUrl: './widget-value-config.component.html',
  styleUrls: ['./widget-value-config.component.css']
})
export class WidgetValueConfigComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ManageRoomComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
