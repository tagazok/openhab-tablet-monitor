import { Component, OnInit, Input, ElementRef, Renderer2 } from "@angular/core";
import { ApiService } from "../api.service";
import { Toast, ToasterService } from "angular2-toaster";
import { WidgetComponent } from "../widget/widget.component";

@Component({
  selector: "app-widget-button",
  templateUrl: "./widget-button.component.html",
  styleUrls: ["./widget-button.component.css"]
})
export class WidgetButtonComponent extends WidgetComponent {

  constructor(private api: ApiService,
    private toasterService: ToasterService,
    protected elementRef: ElementRef,
    protected renderer: Renderer2
  ) {
    super(elementRef, renderer);
  }

  click() {
    const toast: Toast = {
      type: "success",
      title: `${this.config.label || ''}`,
      showCloseButton: false
    };
    this.api
      .send(`${this.item.id}`, this.config.value)
      .subscribe(
        response => {
          this.toasterService.pop(toast);
        },
        error => {
          toast.type = "error";
          toast.title = `Error in ${this.config.label || 'updating'}`;
          this.toasterService.pop(toast);
        }
      );
  }

  getIcon() {
    if (this.config && this.config.icon) return this.config.icon;
    return "fas fa-play";
  }
}
