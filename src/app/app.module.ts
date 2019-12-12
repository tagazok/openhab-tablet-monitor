import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Injectable } from "@angular/core";
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { PrettyJsonModule } from "angular2-prettyjson";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ToasterModule, ToasterService } from "angular2-toaster";
import { MatDialogModule } from "@angular/material/dialog";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from "@angular/forms";
import { RoomComponent } from "./room/room.component";
import { WidgetOutletComponent } from "./widget-outlet/widget-outlet.component";
import { HackerComponent } from "./hacker/hacker.component";
import { LogService } from "./log.service";
import { AlertsComponent } from "./alerts/alerts.component";
import { WidgetErrorComponent } from "./widget-error/widget-error.component";
import { DecimalPipe } from "@angular/common";
import { WidgetSeparatorModule } from "./widgets/widget-separator/widget-separator.module";
import { WidgetLabelModule } from "./widgets/widget-label/widget-label.module";
import { WidgetButtonModule } from "./widgets/widget-button/widget-button.module";
import { WidgetValueModule } from "./widgets/widget-value/widget-value.module";
import { WidgetSwitchModule } from "./widgets/widget-switch/widget-switch.module";
import { WidgetMusicControlsSimpleModule } from "./widgets/widget-music-controls-simple/widget-music-controls-simple.module";
import { WidgetLightSimpleModule } from "./widgets/widget-light-simple/widget-light-simple.module";
import { SharedModule } from "./shared/shared.module";
import { CanActivateAuthGuard } from "./shared/can-activate-auth-guard";
import { LoginComponent } from './login/login.component';
import { WidgetImageModule } from "./widgets/widget-image/widget-image.module";
import { CameraComponent } from './camera/camera.component';
import { MediasComponent } from "./medias/medias/medias.component";
import { WidgetJsonModule } from "./widgets/widget-json/widget-json.module";
import { WidgetFlowercareModule } from "./widgets/widget-flowercare/widget-flowercare.module";
import { WeatherModule } from "./weather/weather.module";
import { AuthService } from "./shared/auth.service";
import { Observable } from "rxjs/Observable";
import { WebsocketService } from './websocket.service';
import { MessageService } from './message.service';

@Injectable()
class LayoutResolver implements Resolve<any> {
  constructor(private authService: AuthService) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.authService.getUserAndConfig();
  }
}

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    data: { state: "home" },
    canActivate: [CanActivateAuthGuard],
    resolve: {
      layout: LayoutResolver
    }
  },
  {
    path: "hacker",
    component: HackerComponent,
    data: { state: "hacker" },
    canActivate: [CanActivateAuthGuard],
  },
  {
    path: "alerts",
    component: AlertsComponent,
    data: { state: "alerts" },
    canActivate: [CanActivateAuthGuard],
  },
  {
    path: "room/:id",
    component: RoomComponent,
    data: { state: "room" },
    canActivate: [CanActivateAuthGuard],
  },
  {
    path: "settings",
    loadChildren: "./settings/settings.module#SettingsModule"
  },
  { 
    path: "login",
    component: LoginComponent
  },
  {
    path: "camera/:url",
    component: CameraComponent
  },
  {
    path: "medias",
    component: MediasComponent,
    data: { state: "medias" },
    canActivate: [CanActivateAuthGuard],
  },
  {
    path: "weather",
    loadChildren: "./weather/weather.module#WeatherModule"
  }
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
    LoginComponent,
    CameraComponent,
    MediasComponent,
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

    WeatherModule,
    SharedModule.forRoot(),
    WidgetJsonModule,
    WidgetSeparatorModule,
    WidgetLabelModule,
    WidgetButtonModule,
    WidgetValueModule,
    WidgetSwitchModule,
    WidgetMusicControlsSimpleModule,
    WidgetLightSimpleModule,
    WidgetImageModule,
    WidgetFlowercareModule
  ],
  exports: [],
  providers: [ToasterService, LogService, DecimalPipe, LayoutResolver, WebsocketService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
