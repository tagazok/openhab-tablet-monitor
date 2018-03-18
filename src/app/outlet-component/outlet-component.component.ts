import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, Input } from "@angular/core";
import { LightComponent } from "../light/light.component";


@Component({
  selector: "app-outlet-component",
  template: `
    <template #container></template>
  `
})
export class OutletComponentComponent implements OnInit {
  @Input() device: any;
  private components = {
    'light': LightComponent
  };
  @ViewChild("container", { read: ViewContainerRef })
  container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent() {
    this.container.clear();
    const factory: ComponentFactory<any> = 
      this.resolver.resolveComponentFactory(
        this.components[this.device.type]
      );

    this.componentRef = this.container.createComponent(factory);
    
    this.componentRef.instance.type = this.components[this.device.type];
    this.componentRef.instance.device = this.device; 
  }

  ngOnInit() {
    this.createComponent();
  }

  // ngOnDestroy() {
  //   setTimeout(
  //     function() {
  //       this.componentRef.destroy();
  //     }, 5000);
  // }
}
