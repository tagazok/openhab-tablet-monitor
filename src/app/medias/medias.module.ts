import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediasComponent } from './medias/medias.component';
import { MediaComponent } from './media/media.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { MediasRoutingModule } from './medias-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MediasRoutingModule,
    FlexLayoutModule,
    MatListModule,
    SharedModule,
  ],
  declarations: [MediasComponent, MediaComponent, PlaylistsComponent],
  entryComponents: [
    MediasComponent,
    MediaComponent,
    PlaylistsComponent,
    ]
})
export class MediasModule { }
