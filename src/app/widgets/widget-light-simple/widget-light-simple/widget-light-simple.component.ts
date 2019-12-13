import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { ToasterService, Toast } from 'angular2-toaster';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../shared/api.service';
import { WidgetComponent } from '../../widget/widget/widget.component';
import { WidgetLightSimpleAdvancedComponent } from '../widget-light-simple-advanced/widget-light-simple-advanced.component';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-light',
  templateUrl: './widget-light-simple.component.html',
  styleUrls: ['./widget-light-simple.component.css']
})
export class WidgetLightSimpleComponent extends WidgetComponent {

  constructor(private api: ApiService,
              public toasterService: ToasterService,
              private messageService: MessageService,
              public dialog: MatDialog,
              protected elementRef: ElementRef,
              protected renderer: Renderer2) {
                super(elementRef, renderer);
              }

  isOn() {
    return this.item && this.item.state === 'on';
  }

  toggleOnOff() {
    console.log('Toggle OnOff');
    const state = this.isOn() ? 'off' : 'on';
    const toast: Toast = {
      type: 'success',
      title: `Light is now ${state}`,
      showCloseButton: false
    };
    // this.api.send(this.items.OnOff.id, state).subscribe(res => {
    //   this.toasterService.pop(toast);
    // }, error => {
    //   toast.type = 'error';
    //   toast.title = `Error turning ${this.config.label || ''} ${state}`;
    //   this.toasterService.pop(toast);
    // });
    this.messageService.sendMessage({
      domain: 'light',
      type: 'call_service',
      service: `turn_${state}`,
      service_data: {
        entity_id: this.item.id
      }
    });
  }

  openAdvanced(): void {
    const dialogRef = this.dialog.open(WidgetLightSimpleAdvancedComponent, {
      width: '50%',
      data: { item: this.item }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
