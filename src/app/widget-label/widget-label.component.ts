import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-widget-label',
  template: `
  <div fxLayoutAlign="center center">
    {{config.value}}
  </div>`,
  styles: [`
    :host {
      margin-bottom: .7em;
    }
  `]
})
export class WidgetLabelComponent extends WidgetComponent {

}
