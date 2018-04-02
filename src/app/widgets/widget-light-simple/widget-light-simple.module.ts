import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetLightSimpleComponent } from './widget-light-simple/widget-light-simple.component';
import { WidgetModule } from '../widget/widget.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { WidgetLightSimpleAdvancedComponent } from './widget-light-simple-advanced/widget-light-simple-advanced.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    FlexLayoutModule,
    SharedModule,
    MatDialogModule,
    ToasterModule,
    MatSliderModule,
    FormsModule
  ],
  declarations: [
    WidgetLightSimpleComponent,
    WidgetLightSimpleAdvancedComponent
  ],
  entryComponents: [
    WidgetLightSimpleComponent,
    WidgetLightSimpleAdvancedComponent
  ]
})
export class WidgetLightSimpleModule { }
