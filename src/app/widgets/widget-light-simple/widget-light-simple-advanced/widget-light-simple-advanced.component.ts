import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../shared/api.service';
import { WidgetLightSimpleComponent } from '../widget-light-simple/widget-light-simple.component';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-light-advanced',
  templateUrl: './widget-light-simple-advanced.component.html',
  styleUrls: ['./widget-light-simple-advanced.component.css']
})
export class WidgetLightSimpleAdvancedComponent implements OnInit {

  configBrightnessSaturation = {
    max: 255,
    min: 0,
    step: 1,
    thumbLabel: true
  };
  configColor = {
    max: 360,
    min: 0,
    step: 1,
    thumbLabel: false
  };
  constructor(
    // private api: ApiService,
    private messageService: MessageService,
    public dialogRef: MatDialogRef<WidgetLightSimpleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  updateValue(type) {
    this.messageService.sendMessage({
      domain: 'light',
      service: 'turn_on',
      type: 'call_service',
      service_data: {
        [type]: this.data.item.attributes[type],
        entity_id: this.data.item.id
      }
    });
    // this.api.send(this.data.item.Color.id, Object.values(this.data.item.Color.state).join()).subscribe(res => {

    // });
  }

}
