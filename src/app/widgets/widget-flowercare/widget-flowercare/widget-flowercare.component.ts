import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { WidgetComponent } from '../../widget/widget/widget.component';

@Component({
  selector: 'app-widget-flowercare',
  templateUrl: './widget-flowercare.component.html',
  styleUrls: ['./widget-flowercare.component.css']
})
export class WidgetFlowercareComponent extends WidgetComponent {
  displayValue: boolean = false;
  constructor(protected elementRef: ElementRef, protected renderer: Renderer2) {
    super(elementRef, renderer);
  }

  toggleDisplayValue() {
    this.displayValue = !this.displayValue;
  }
}
