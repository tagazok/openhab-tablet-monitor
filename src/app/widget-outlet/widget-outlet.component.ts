import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, Input } from "@angular/core";
import { LightComponent } from "../light/light.component";
import { ScreenLightComponent } from "../screen-light/screen-light.component";
import { WidgetButtonComponent } from "../widget-button/widget-button.component";
import { WidgetValueComponent } from "../widget-value/widget-value.component";
import { WidgetSwitchComponent } from "../widget-switch/widget-switch.component";
import { WidgetMusicControlsComponent } from "../widget-music-controls/widget-music-controls.component";
import { ConfigService } from "../config.service";
import { WidgetErrorComponent } from "../widget-error/widget-error.component";
import { WidgetLabelComponent } from "../widget-label/widget-label.component";

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

  // @Input() device: any;
  @Input() widget: any;
  // @Input() config: any;
  private components = {
    'light': LightComponent,
    'screen-light': ScreenLightComponent,
    'button': WidgetButtonComponent,
    'value': WidgetValueComponent,
    'switch': WidgetSwitchComponent,
    'music-controls': WidgetMusicControlsComponent,
    'label': WidgetLabelComponent
  };

  @ViewChild("container", { read: ViewContainerRef })
  container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver,
              private configService: ConfigService) {}

  createComponent() {
    this.container.clear();
    if (!this.components[this.widget.widget]) return;

    console.log(`widget type: ${this.widget.widget}`);

    const factory: ComponentFactory<any> = 
    this.resolver.resolveComponentFactory(
      this.components[this.widget.widget]
    );
    
    this.componentRef = this.container.createComponent(factory);
    
    if (this.widget.items) {
      const items = this.getItems();
      this.componentRef.instance.items = items;
    } else if (this.widget.item) {
      const itemRef = this.configService.items[this.widget.item];
      // if (itemRef === undefined) {
      //   this.itemError("item", this.widget);
      //   return;
      // }
      console.log(`${itemRef.type} : ${itemRef.state}`);
      this.componentRef.instance.item = itemRef;
    }

    this.componentRef.instance.type = this.components[this.widget.widget];
    this.componentRef.instance.config = this.widget.config || {};
  }

  // itemError(item, widget) {
  //   const factory: ComponentFactory<any> = 
  //   this.resolver.resolveComponentFactory(
  //     this.components[this.widget.widget]
  //   );
    
  //   this.componentRef = this.container.createComponent(factory);

  //   this.componentRef.instance.type = WidgetErrorComponent
    
  //   this.componentRef.instance.widget = widget;
  // }

  getItems() {
    let items = {}
    for(let [key, value] of Object.entries(this.widget.items)) {
      items[key] = this.configService.items[value];
    }
    return items;
  }
  ngOnInit() {
    this.createComponent();
  }

}
