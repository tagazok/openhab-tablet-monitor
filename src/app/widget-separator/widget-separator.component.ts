import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-widget-separator',
  template: ``,
  styles: [`
    :host {
      display: block;
      border-bottom: solid 1px rgba(105, 159, 174, .5);
      margin-bottom: .7em;
    }
    `]
})
export class WidgetSeparatorComponent extends WidgetComponent {


}
