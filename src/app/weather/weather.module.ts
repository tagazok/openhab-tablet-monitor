import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const weatherRoutes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(weatherRoutes)
  ],
  declarations: [WeatherComponent]
})
export class WeatherModule { }
