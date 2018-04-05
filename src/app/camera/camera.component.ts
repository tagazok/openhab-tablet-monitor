import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  url: string;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.url = this.route.snapshot.params['url'];
  }

}
