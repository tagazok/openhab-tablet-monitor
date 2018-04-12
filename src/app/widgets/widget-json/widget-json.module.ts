import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetJsonComponent } from './widget-json/widget-json.component';
import { WidgetModule } from '../widget/widget.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    SharedModule
  ],
  declarations: [WidgetJsonComponent],
  entryComponents: [WidgetJsonComponent]
})
export class WidgetJsonModule { }
