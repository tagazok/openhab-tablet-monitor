import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, Input } from "@angular/core";
// import { WidgetErrorComponent } from "../widget-error/widget-error.component";

import { WidgetSeparatorComponent } from "../widgets/widget-separator/widget-separator/widget-separator.component";
import { WidgetLabelComponent } from "../widgets/widget-label/widget-label/widget-label.component";
import { WidgetButtonComponent } from "../widgets/widget-button/widget-button/widget-button.component";
import { WidgetValueComponent } from "../widgets/widget-value/widget-value/widget-value.component";
import { WidgetSwitchComponent } from "../widgets/widget-switch/widget-switch/widget-switch.component";
import { WidgetMusicControlsSimpleComponent } from "../widgets/widget-music-controls-simple/widget-music-controls-simple/widget-music-controls-simple.component";
import { WidgetLightSimpleComponent } from "../widgets/widget-light-simple/widget-light-simple/widget-light-simple.component";
import { ConfigService } from "../shared/config.service";
import { WidgetImageComponent } from "../widgets/widget-image/widget-image/widget-image.component";
import { WidgetJsonComponent } from "../widgets/widget-json/widget-json/widget-json.component";
import { WidgetFlowercareComponent } from "../widgets/widget-flowercare/widget-flowercare/widget-flowercare.component";

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
    'json': WidgetJsonComponent,
    'light': WidgetLightSimpleComponent,
    'button': WidgetButtonComponent,
    'value': WidgetValueComponent,
    'switch': WidgetSwitchComponent,
    'music-controls': WidgetMusicControlsSimpleComponent,
    'label': WidgetLabelComponent,
    'separator': WidgetSeparatorComponent,
    'image': WidgetImageComponent,
    "flowercare": WidgetFlowercareComponent
  };

  @ViewChild("container", { read: ViewContainerRef, static: true }) container;
  // @ViewChild("container", { static: false }) container;
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
      items[key] = this.configService.items[value.toString()];
    }
    return items;
  }
  ngOnInit() {
    this.createComponent();
  }
}
