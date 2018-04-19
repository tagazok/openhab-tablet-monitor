import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  forecast: any;
  constructor() { }

  ngOnInit() {
    this.getForecast("paris, fr");
  }

  getForecast(location) {
    const statement = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u='c'`;
    const url = 'https://query.yahooapis.com/v1/public/yql?format=json&q=' + statement;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.forecast = data.query.results.channel;
        console.log(this.forecast);
      });
  }

  getNextDays() {
    return Object.values(this.forecast.item.forecast).slice(1, 5) || [];
  }
}
