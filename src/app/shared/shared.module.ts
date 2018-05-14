import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { CanActivateAuthGuard } from './can-activate-auth-guard';
import { environment } from '../../environments/environment';
import { MinuteSecondsPipe } from './minute-seconds.pipe';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [MinuteSecondsPipe],
  exports: [MinuteSecondsPipe]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ConfigService, ApiService, AuthService, CanActivateAuthGuard]
    };
  }
}
