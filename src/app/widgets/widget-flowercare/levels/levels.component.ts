import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {
  @Input() level;
  @Input() limits;

  constructor() { }

  ngOnInit() {
  }
}
