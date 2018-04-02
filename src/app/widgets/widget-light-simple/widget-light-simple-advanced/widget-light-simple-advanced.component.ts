import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../shared/api.service';
import { WidgetLightSimpleComponent } from '../widget-light-simple/widget-light-simple.component';

@Component({
  selector: 'app-light-advanced',
  templateUrl: './widget-light-simple-advanced.component.html',
  styleUrls: ['./widget-light-simple-advanced.component.css']
})
export class WidgetLightSimpleAdvancedComponent implements OnInit {

  configBrightnessSaturation = {
    max: 100,
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
    private api: ApiService,
    public dialogRef: MatDialogRef<WidgetLightSimpleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
  
  updateValue() {
    this.api.send(this.data.items.Color.id, Object.values(this.data.items.Color.state).join()).subscribe(res => {

    });
  }

}
