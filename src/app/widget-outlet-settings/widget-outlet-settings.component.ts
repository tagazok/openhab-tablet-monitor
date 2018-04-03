import { Component, OnInit, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { ConfigService } from '../config.service';
import { WidgetValueConfigComponent } from '../widgets/widget-value/widget-value-config/widget-value-config.component';
import { WidgetSwitchConfigComponent } from '../widgets/widget-switch/widget-switch-config/widget-switch-config.component';

@Component({
  selector: 'app-widget-outlet-settings',
  template: `
  <template #container></template>
  `,
  styleUrls: ['./widget-outlet-settings.component.css']
})
export class WidgetOutletSettingsComponent implements OnInit {

  @Input() widget: any;
  
  private components = {
    // 'light': LightComponent,
    // 'button': WidgetButtonComponent,
    'value': WidgetValueConfigComponent,
    'switch': WidgetSwitchConfigComponent,
    // 'music-controls': WidgetMusicControlsComponent,
    // 'label': WidgetLabelComponent,
    // 'separator': WidgetSeparatorComponent
  };

  @ViewChild("container", { read: ViewContainerRef })
  container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver,
              private configService: ConfigService) {}

  createComponent() {
    
    // this.container.clear();
    // if (!this.components[this.widget.widget]) return;

    // console.log(`widget type: ${this.widget.widget}`);

    // const factory: ComponentFactory<any> = 
    // this.resolver.resolveComponentFactory(
    //   this.components[this.widget.widget]
    // );
    
    // this.componentRef = this.container.createComponent(factory);
    
    // if (this.widget.items) {
    //   const items = this.getItems();
    //   this.componentRef.instance.items = items;
    // } else if (this.widget.item) {
    //   const itemRef = this.configService.items[this.widget.item];
 
    //   console.log(`${itemRef.type} : ${itemRef.state}`);
    //   this.componentRef.instance.item = itemRef;
    // }

    // this.componentRef.instance.type = this.components[this.widget.widget];
    // this.componentRef.instance.config = this.widget.config || {};
  }

  // getItems() {
  //   let items = {}
  //   for(let [key, value] of Object.entries(this.widget.items)) {
  //     items[key] = this.configService.items[value.toString()];
  //   }
  //   return items;
  // }

  ngOnInit() {
    this.createComponent();
  }

}
