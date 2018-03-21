import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-hacker',
  templateUrl: './hacker.component.html',
  styleUrls: ['./hacker.component.css']
})
export class HackerComponent implements OnInit {

  constructor(private cs: ConfigService,
              private logService: LogService) { }

  ngOnInit() {
  }

}
