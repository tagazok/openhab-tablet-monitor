import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const weatherTransition = trigger('weatherTransition', [
  transition(':enter', [
    group([
      query('.area-center', style({ opacity: 0 })),
      query('.area-top', style({ opacity: 0 })),
      query('.area-bottom', style({ opacity: 0 })),
    ]),
    group([
      query('.area-center', stagger(100, [
        style({ transform: 'scale(.7)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'scale(1)', opacity: 1}))
      ])),
      query('.area-top', stagger(0, [
        style({ transform: 'translateY(-100px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
      ])),
      query('.area-bottom', stagger(0, [
        style({ transform: 'translateY(100px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
      ])),
    ])
  ]),
  transition(':leave', [
    group([
      query('.area-center', stagger(100, [
        style({ transform: 'scale(1)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'scale(.7)', opacity: 0})),
      ])),
      query('.area-top', stagger(0, [
        style({ transform: 'translateY(0px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(-100px)', opacity: 0})),
      ])),
      query('.area-bottom', stagger(0, [
        style({ transform: 'translateY(0px)' }),
        animate('.3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
      ])),
    ])
  ])
]);

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
  animations: [ weatherTransition ],
  host: {
    '[@weatherTransition]': ''
  }
})
export class WeatherComponent implements OnInit {
  forecast: any;
  weather: any;
  constructor() {}

  ngOnInit() {
    this.getForecast("paris, fr");
  }

  getForecast(location) {
    const statement = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u='c'`;
    // const url = 'https://query.yahooapis.com/v1/public/yql?format=json&q=' + statement;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${
      environment.api.openweathermap
    }`;
    const url_5days = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&units=metric&cnt=6&appid=${
      environment.api.openweathermap
    }`;
    fetch(url_5days)
      .then(response => response.json())
      .then(data => {
        // this.forecast = data.query.results.channel;
        // console.log(this.forecast);
        this.forecast = data;
        console.log(data);
      });
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // this.forecast = data.query.results.channel;
        // console.log(this.forecast);
        this.weather = data;
        console.log(data);
      });
  }

  getNextDays() {
    if (this.forecast)
      return this.forecast.list.slice(1, 6);
    return [];
  }

  getIcon(code) {
    if (code >= 200 && code <= 232) {
      return "IconThunder.qml";
    } else if ((code >= 300 && code <= 321) || (code >= 500 && code <= 531)) {
      return "IconRain.qml";
    } else if (code >= 600 && code <= 622) {
      return "IconSnow.qml";
    } else if ((code >= 701 && code <= 781) || code >= 900) {
      return "IconSpecial.qml";
    } else if (code >= 801 && code <= 804) {
      return "IconCloud.qml";
    } else if (code == 800) {
      return "IconSun.qml";
    }
  }
}
