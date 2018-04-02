import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetMusicControlsSimpleComponent } from './widget-music-controls-simple/widget-music-controls-simple.component';
import { WidgetModule } from '../widget/widget.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    SharedModule,
    FlexLayoutModule,
    MatSliderModule,
    FormsModule
  ],
  declarations: [WidgetMusicControlsSimpleComponent],
  entryComponents: [
    WidgetMusicControlsSimpleComponent
  ]
})
export class WidgetMusicControlsSimpleModule { }
