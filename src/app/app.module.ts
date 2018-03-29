import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigService } from './config.service';
import { OutletComponentComponent } from './outlet-component/outlet-component.component';
import { LightAdvancedComponent } from './light-advanced/light-advanced.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { LightSmallComponent } from './light-small/light-small.component';
import { RoomComponent } from './room/room.component';
import { WidgetOutletComponent } from './widget-outlet/widget-outlet.component';
import { LightComponent } from './light/light.component';
import { WidgetButtonComponent } from './widget-button/widget-button.component';
import { WidgetLabelComponent } from './widget-label/widget-label.component';
import { WidgetValueComponent } from './widget-value/widget-value.component';
import { WidgetComponent } from './widget/widget.component';
import { HackerComponent } from './hacker/hacker.component';
import { LogService } from './log.service';
import { WidgetSwitchComponent } from './widget-switch/widget-switch.component';
import { WidgetMusicControlsComponent } from './widget-music-controls/widget-music-controls.component';
import { AlertsComponent } from './alerts/alerts.component';
import { WidgetErrorComponent } from './widget-error/widget-error.component';
import { DecimalPipe } from '@angular/common';
import { WidgetSeparatorComponent } from './widget-separator/widget-separator.component';
// import { VideoChatComponent } from './video-chat/video-chat.component';

const routes: Routes = [
  { path: "", component: DashboardComponent, data: { state: 'home'} },
  { path: "hacker", component: HackerComponent, data: { state: 'hacker'} },
  { path: "alerts", component: AlertsComponent, data: { state: 'alerts'} },
  { path: "room/:id", component: RoomComponent, data: { state: 'room'} },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule',
    // canLoad: [AuthGuard]
  },
  // { path: "video-chat", component: VideoChatComponent, data: { state: 'videochat'} }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OutletComponentComponent,
    LightAdvancedComponent,
    LightSmallComponent,
    RoomComponent,
    WidgetOutletComponent,
    LightComponent,
    WidgetButtonComponent,
    WidgetLabelComponent,
    WidgetValueComponent,
    WidgetComponent,
    HackerComponent,
    WidgetSwitchComponent,
    WidgetMusicControlsComponent,
    AlertsComponent,
    WidgetErrorComponent,
    WidgetSeparatorComponent
    // VideoChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
    HttpClientModule,

    PrettyJsonModule,
    ToasterModule,

    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule
  ],
  exports: [],
  providers: [
    ToasterService,
    ApiService,
    ConfigService,
    LogService,
    DecimalPipe
  ],
  entryComponents: [
    LightAdvancedComponent,
    LightComponent,
    WidgetButtonComponent,
    WidgetValueComponent,
    WidgetSwitchComponent,
    WidgetMusicControlsComponent,
    WidgetLabelComponent,
    WidgetSeparatorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
