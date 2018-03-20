import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-widget-value',
  templateUrl: './widget-value.component.html',
  styleUrls: ['./widget-value.component.css']
})
export class WidgetValueComponent implements OnInit {
  @Input() device: any;
  @Input() config: any;
  @HostBinding('style.border') border = 'solid 1px #699fae;';

  constructor() {}

  ngOnInit() {
    if (this.config && this.config.border) {
      this.border = this.config.border;
    }
  }

  getIcon() {
    if (this.config && this.config.icon) return this.config.icon;
    return 'fas fa-play';
  }
}
