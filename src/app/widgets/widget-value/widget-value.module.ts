import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetValueComponent } from './widget-value/widget-value.component';
import { WidgetModule } from '../widget/widget.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WidgetValueConfigComponent } from './widget-value-config/widget-value-config.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    SharedModule
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
