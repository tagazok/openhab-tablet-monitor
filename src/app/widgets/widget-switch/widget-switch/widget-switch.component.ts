import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ToasterService, Toast } from 'angular2-toaster';
import { WidgetComponent } from '../../widget/widget/widget.component';
import { ApiService } from '../../../shared/api.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-widget-switch',
  templateUrl: './widget-switch.component.html',
  styleUrls: ['./widget-switch.component.css']
})
export class WidgetSwitchComponent extends WidgetComponent {
  icons = {
    'ON': 'fas fa-power-off',
    'OFF': 'fas fa-power-off'
  };

  constructor(
    private api: ApiService,
    public toasterService: ToasterService,
    protected elementRef: ElementRef,
    protected renderer: Renderer2,
    public messageService: MessageService
  ) {
    super(elementRef, renderer);
    if (this.config && this.config.icons) {
      this.icons.ON = this.config.icons.ON;
      this.icons.OFF = this.config.icons.OFF;
    }
  }

  isOn() {
    return this.item.state === 'on';
  }

  toggleOnOff() {
    console.log('Toggle OnOff');
    const state = this.isOn() ? 'off' : 'on';
    const toast: Toast = {
      type: 'success',
      title: `${this.config.label || ''} ${state}`,
      showCloseButton: false
    };
    this.messageService.sendMessage({
      domain: this.config.domain || 'switch',
      type: 'call_service',
      service: `turn_${state}`,
      service_data: {
        entity_id: this.item.id
      }
    });
    // this.api.send(this.item.id, state).subscribe(
    //   res => {
    //     this.toasterService.pop(toast);
    //   },
    //   error => {
    //     toast.type = 'error';
    //     toast.title = `Error turning ${this.config.label || ''} ${state}`;
    //     this.toasterService.pop(toast);
    //   }
    // );
  }

  getIcon() {
    if (this.isOn()) { return this.icons.ON; }
    return this.icons.OFF;
  }
}
