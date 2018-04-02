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
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { RoomComponent } from './room/room.component';
import { WidgetOutletComponent } from './widget-outlet/widget-outlet.component';
import { HackerComponent } from './hacker/hacker.component';
import { LogService } from './log.service';
import { AlertsComponent } from './alerts/alerts.component';
import { WidgetErrorComponent } from './widget-error/widget-error.component';
import { DecimalPipe } from '@angular/common';
import { WidgetSeparatorModule } from './widgets/widget-separator/widget-separator.module';
import { WidgetLabelModule } from './widgets/widget-label/widget-label.module';
import { WidgetButtonModule } from './widgets/widget-button/widget-button.module';
import { WidgetValueModule } from './widgets/widget-value/widget-value.module';
import { WidgetSwitchModule } from './widgets/widget-switch/widget-switch.module';
import { WidgetMusicControlsSimpleModule } from './widgets/widget-music-controls-simple/widget-music-controls-simple.module';
import { WidgetLightSimpleModule } from './widgets/widget-light-simple/widget-light-simple.module';

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
    RoomComponent,
    WidgetOutletComponent,
    HackerComponent,
    AlertsComponent,
    WidgetErrorComponent,
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
    FormsModule,

    WidgetSeparatorModule,
    WidgetLabelModule,
    WidgetButtonModule,
    WidgetValueModule,
    WidgetSwitchModule,
    WidgetMusicControlsSimpleModule,
    WidgetLightSimpleModule
  ],
  exports: [],
  providers: [
    ToasterService,
    ApiService,
    ConfigService,
    LogService,
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
