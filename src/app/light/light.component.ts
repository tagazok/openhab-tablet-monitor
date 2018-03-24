import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { ApiService } from '../api.service';
import { ToasterService, Toast } from 'angular2-toaster';
import { MatDialog } from '@angular/material/dialog';
import { LightAdvancedComponent } from '../light-advanced/light-advanced.component';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent extends WidgetComponent {

  constructor(private api: ApiService,
              public toasterService: ToasterService,
              public dialog: MatDialog,
              protected elementRef: ElementRef,
              protected renderer: Renderer2) { 
                super(elementRef, renderer);
              }

  isOn() {
    return this.items.OnOff.state === "ON";
  }

  toggleOnOff() {
    console.log('Toggle OnOff');
    const state = this.isOn()? "OFF" : "ON";
    const toast: Toast = {
      type: 'success',
      title: `Light is now ${state}`,
      showCloseButton: false
    };
    this.api.send(this.items.OnOff.id, state).subscribe(res => {
      this.toasterService.pop(toast);
    }, error => {
      toast.type = "error";
      toast.title = `Error turning ${this.config.label || ''} ${state}`;
      this.toasterService.pop(toast);
    });
  }

  openAdvanced(): void {
    let dialogRef = this.dialog.open(LightAdvancedComponent, {
      width: '50%',
      data: { items: this.items }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
