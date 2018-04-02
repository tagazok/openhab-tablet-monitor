import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetSwitchComponent } from './widget-switch/widget-switch.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WidgetModule } from '../widget/widget.module';
import { WidgetSwitchConfigComponent } from './widget-switch-config/widget-switch-config.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    FlexLayoutModule
  ],
  declarations: [
    WidgetSwitchComponent,
    WidgetSwitchConfigComponent
  ],
  entryComponents: [
    WidgetSwitchComponent,
    WidgetSwitchConfigComponent
  ]
})
export class WidgetSwitchModule { }
