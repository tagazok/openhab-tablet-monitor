import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediasComponent } from './medias/medias.component';

const mediasRoutes: Routes = [
  {
    path: '',
    component: MediasComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mediasRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MediasRoutingModule {}