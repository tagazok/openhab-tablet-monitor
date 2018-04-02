import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetSeparatorComponent } from './widget-separator/widget-separator.component';
import { WidgetModule } from '../widget/widget.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    FlexLayoutModule
  ],
  declarations: [
    WidgetSeparatorComponent,
  ],
  entryComponents: [
    WidgetSeparatorComponent
  ]
})
export class WidgetSeparatorModule { }
