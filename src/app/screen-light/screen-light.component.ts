import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ToasterService, Toast } from 'angular2-toaster';
import { MatDialog } from '@angular/material/dialog';
import { LightAdvancedComponent } from '../light-advanced/light-advanced.component';

@Component({
  selector: 'app-screen-light',
  templateUrl: './screen-light.component.html',
  styleUrls: ['./screen-light.component.css']
})
export class ScreenLightComponent implements OnInit {

  @Input() device: any;
  constructor(private api: ApiService,
              public toasterService: ToasterService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  isOn() {
    return this.device.properties.OnOff.value === "ON";
  }

  toggleOnOff() {
    console.log('Toggle OnOff');
    const state = this.isOn()? "OFF" : "ON";
    const toast: Toast = {
      type: 'success',
      title: `Light is now ${state}`,
      showCloseButton: false
    };
    this.api.send(this.device.properties.OnOff.OHitem, state).subscribe(res => {
      this.toasterService.pop(toast);
    }, error => {
      toast.type = "error";
      toast.title = `Error turning ${this.device.label} ${state}`;
      this.toasterService.pop(toast);
    });
  }

  toggleFullWhite() {
    console.log('Toggle Full White');
  }

  openAdvanced(): void {
    let dialogRef = this.dialog.open(LightAdvancedComponent, {
      width: '50%',
      data: { device: this.device }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
