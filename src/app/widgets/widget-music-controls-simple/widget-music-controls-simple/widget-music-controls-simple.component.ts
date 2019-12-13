import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import { WidgetComponent } from "../../widget/widget/widget.component";
import { ApiService } from "../../../shared/api.service";
import { MessageService } from 'src/app/message.service';

@Component({
  selector: "app-widget-music-controls-simple",
  templateUrl: "./widget-music-controls-simple.component.html",
  styleUrls: ["./widget-music-controls-simple.component.css"]
})
export class WidgetMusicControlsSimpleComponent extends WidgetComponent implements OnInit {
  showVolume: boolean;
  constructor(
    // private api: ApiService,
    private messageService: MessageService,
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
    // this.api
    //   .send(`${this.items.controls.id}`, command)
    //   .subscribe();
    this.messageService.sendMessage({
      domain: 'media_player',
      service: `media_play_pause`,
      type: 'call_service',
      service_data: {
        entity_id: this.item.id
      }
    });
  }

  volume() {
    // this.api
    // .sendPlainText(`${this.items.volume.id}`, this.items.volume.state)
    // .subscribe();
  }
}