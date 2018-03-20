import { Component, OnInit, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-widget-value',
  templateUrl: './widget-value.component.html',
  styleUrls: ['./widget-value.component.css']
})
export class WidgetValueComponent extends WidgetComponent {

  getIcon() {
    if (this.config && this.config.icon) return this.config.icon;
    return 'fas fa-heart';
  }
}
