import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetButtonComponent } from './widget-button/widget-button.component';
import { WidgetModule } from '../widget/widget.module';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [WidgetButtonComponent],
  entryComponents: [
    WidgetButtonComponent
  ]
})
export class WidgetButtonModule { }
