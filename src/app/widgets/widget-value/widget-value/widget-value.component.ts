import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ElementRef,
  Renderer2
} from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { WidgetComponent } from "../../widget/widget/widget.component";

@Component({
  selector: "app-widget-value",
  templateUrl: "./widget-value.component.html",
  styleUrls: ["./widget-value.component.css"]
})
export class WidgetValueComponent extends WidgetComponent implements OnInit {
  constructor(protected elementRef: ElementRef, protected renderer: Renderer2, private decimalPipe: DecimalPipe) {
    super(elementRef, renderer);
  }

  ngOnInit() {
    super.ngOnInit();
    
    if (this.config.filter && this.config.filter.type === "number") {
      this.item.state = this.decimalPipe.transform(this.item.state, this.config.filter.arg);
    }
  }

  getIcon() {
    if (this.config && this.config.icon) return this.config.icon;
    return "fas fa-heart";
  }
}
