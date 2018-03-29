import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { ManageLayoutComponent } from './manage-layout/manage-layout.component';
import { ManageRoomComponent } from './manage-room/manage-room.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsComponent, ManageLayoutComponent, ManageRoomComponent]
})
export class SettingsModule { }
