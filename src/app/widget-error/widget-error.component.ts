import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-error',
  templateUrl: './widget-error.component.html',
  styleUrls: ['./widget-error.component.css']
})
export class WidgetErrorComponent implements OnInit {
  @Input() widget: any;
  
  constructor() { }

  ngOnInit() {
  }

}
