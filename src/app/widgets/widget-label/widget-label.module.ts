import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetLabelComponent } from './widget-label/widget-label.component';
import { WidgetModule } from '../widget/widget.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    FlexLayoutModule
  ],
  declarations: [
    WidgetLabelComponent
  ],
  entryComponents: [
    WidgetLabelComponent
  ]
})
export class WidgetLabelModule { }
