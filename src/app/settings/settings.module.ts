import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { ManageLayoutComponent } from './manage-layout/manage-layout.component';
import { ManageRoomComponent } from './manage-room/manage-room.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WidgetOutletSettingsComponent } from '../widget-outlet-settings/widget-outlet-settings.component';
import { WidgetValueModule } from '../widgets/widget-value/widget-value.module';
import { WidgetSwitchModule } from '../widgets/widget-switch/widget-switch.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SettingsRoutingModule,
    WidgetValueModule,
    WidgetSwitchModule,
    SharedModule
  ],
  providers: [],
  declarations: [
    SettingsComponent,
    ManageLayoutComponent,
    ManageRoomComponent,
    WidgetOutletSettingsComponent
  ]
})
export class SettingsModule { }
