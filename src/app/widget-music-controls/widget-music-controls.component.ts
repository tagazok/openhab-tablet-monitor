import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import { ApiService } from "../api.service";
import { WidgetComponent } from "../widget/widget.component";

@Component({
  selector: "app-widget-music-controls",
  templateUrl: "./widget-music-controls.component.html",
  styleUrls: ["./widget-music-controls.component.css"]
})
export class WidgetMusicControlsComponent extends WidgetComponent implements OnInit {
  showVolume: boolean;
  constructor(
    private api: ApiService,
    protected elementRef: ElementRef,
    protected renderer: Renderer2
  ) {
    super(elementRef, renderer);
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.config && this.config.open) {
      this.showVolume = this.config.open;
    } else {
      this.showVolume = false;
    }
  }

  control(command) {
    this.api
      .send(`${this.items.Control.id}`, command)
      .subscribe();
  }

  volume() {
    this.api
    .sendPlainText(`${this.items.Volume.id}`, this.items.Volume.state)
    .subscribe();
  }
}