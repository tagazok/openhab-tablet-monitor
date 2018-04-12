import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetFlowercareComponent } from './widget-flowercare/widget-flowercare.component';
import { WidgetModule } from '../widget/widget.module';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LevelsComponent } from './levels/levels.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [WidgetFlowercareComponent, LevelsComponent],
  entryComponents: [WidgetFlowercareComponent]
})
export class WidgetFlowercareModule { }
