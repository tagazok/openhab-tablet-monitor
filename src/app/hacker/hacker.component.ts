import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { ConfigService } from '../shared/config.service';

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
