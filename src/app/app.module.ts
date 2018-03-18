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
import { RoomComponent } from './room/room.component';
import { ConfigService } from './config.service';
import { OutletComponentComponent } from './outlet-component/outlet-component.component';
import { LightComponent } from './light/light.component';
import { LightAdvancedComponent } from './light-advanced/light-advanced.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { LightSmallComponent } from './light-small/light-small.component';
import { LiteService } from './lite.service';

const routes: Routes = [
  { path: "", component: DashboardComponent, data: { state: 'home'} },
  { path: "room/:id", component: RoomComponent, data: { state: 'room'} },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RoomComponent,
    OutletComponentComponent,
    LightComponent,
    LightAdvancedComponent,
    LightSmallComponent
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
  providers: [
    ToasterService,
    ApiService,
    ConfigService,
    LiteService
  ],
  entryComponents: [
    LightComponent,
    LightAdvancedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
