import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-room',
  templateUrl: './manage-room.component.html',
  styleUrls: ['./manage-room.component.css']
})
export class ManageRoomComponent implements OnInit {

  roomId: string;
  constructor(private cs: ConfigService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.params['id'];
  }

}
