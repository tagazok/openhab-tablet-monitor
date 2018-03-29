import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageLayoutComponent } from './manage-layout/manage-layout.component';
import { ManageRoomComponent } from './manage-room/manage-room.component';
import { SettingsComponent } from './settings/settings.component';
// import { AdminDashboardComponent }  from './admin-dashboard.component';
// import { ManageCrisesComponent }    from './manage-crises.component';
// import { ManageHeroesComponent }    from './manage-heroes.component';

// import { AuthGuard }                from '../auth-guard.service';

const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'layout', component: ManageLayoutComponent },
          { path: 'room/:id', component: ManageRoomComponent },
          // { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(settingsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/