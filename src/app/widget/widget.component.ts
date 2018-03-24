import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  template: '',
  selector: 'app-widget'
})
export class WidgetComponent implements OnInit {
  @Input() item: any;
  @Input() items: any;
  @Input() config: any;
  
  constructor(protected elementRef: ElementRef,
    protected renderer: Renderer2) { }

  ngOnInit() {
    if (this.config && this.config.style) {
      for (const [key, value] of Object.entries(this.config.style)) {
        this.renderer.setStyle(this.elementRef.nativeElement, key, value);
      }
    }
  }
}
