import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetValueComponent } from './widget-value/widget-value.component';
import { WidgetModule } from '../widget/widget.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WidgetValueConfigComponent } from './widget-value-config/widget-value-config.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    FlexLayoutModule
  ],
  declarations: [
    WidgetValueComponent,
    WidgetValueConfigComponent
  ],
  entryComponents: [
    WidgetValueComponent,
    WidgetValueConfigComponent
  ]
})
export class WidgetValueModule { }
