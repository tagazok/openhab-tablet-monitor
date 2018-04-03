import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
  // providers: [
    // ApiService,
    // ConfigService
  // ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ConfigService, ApiService]
    };
  }
}
