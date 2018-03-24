import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LightComponent } from '../light/light.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-light-advanced',
  templateUrl: './light-advanced.component.html',
  styleUrls: ['./light-advanced.component.css']
})
export class LightAdvancedComponent implements OnInit {

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
    public dialogRef: MatDialogRef<LightComponent>,
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
