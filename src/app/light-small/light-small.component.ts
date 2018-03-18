import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ToasterService, Toast } from 'angular2-toaster';

@Component({
  selector: 'app-light-small',
  templateUrl: './light-small.component.html',
  styleUrls: ['./light-small.component.css']
})
export class LightSmallComponent implements OnInit {
  @Input() device: any;
  
  constructor(private api: ApiService,
              public toasterService: ToasterService,) { }

  ngOnInit() {
  }

  isOn() {
    return this.device.properties.OnOff.value === "ON";
  }

  toggleOnOff() {
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

}
