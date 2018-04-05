import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetImageComponent } from './widget-image/widget-image.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WidgetModule } from '../widget/widget.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    WidgetImageComponent
  ],
  entryComponents: [
    WidgetImageComponent
  ]
})
export class WidgetImageModule { }
