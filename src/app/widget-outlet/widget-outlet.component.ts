import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, Input } from "@angular/core";
import { LightComponent } from "../light/light.component";
import { ScreenLightComponent } from "../screen-light/screen-light.component";
import { WidgetButtonComponent } from "../widget-button/widget-button.component";
import { WidgetValueComponent } from "../widget-value/widget-value.component";
import { WidgetSwitchComponent } from "../widget-switch/widget-switch.component";
import { WidgetMusicControlsComponent } from "../widget-music-controls/widget-music-controls.component";

@Component({
  selector: 'app-widget-outlet',
  template: `
    <template #container></template>
  `,
  styles:[`
    :host {
      width: 100%; margin-bottom: .7em;
    }
    `
  ]
})
export class WidgetOutletComponent implements OnInit {

  @Input() device: any;
  @Input() widget: string;
  @Input() config: any;
  private components = {
    'light': LightComponent,
    'screen-light': ScreenLightComponent,
    'button': WidgetButtonComponent,
    'value': WidgetValueComponent,
    'switch': WidgetSwitchComponent,
    'music-controls': WidgetMusicControlsComponent
  };

  @ViewChild("container", { read: ViewContainerRef })
  container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent() {
    this.container.clear();
    if (!this.components[this.widget]) return;
    const factory: ComponentFactory<any> = 
      this.resolver.resolveComponentFactory(
        this.components[this.widget]
      );
      
    this.componentRef = this.container.createComponent(factory);
    console.log(`widget type: ${this.widget}`);
    this.componentRef.instance.type = this.components[this.widget];
    this.componentRef.instance.device = this.device; 
    this.componentRef.instance.config = this.config;
  }

  ngOnInit() {
    this.createComponent();
  }

}
