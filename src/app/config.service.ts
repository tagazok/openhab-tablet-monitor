import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";

@Injectable()
export class ConfigService {
  public serverUrl = environment.app.openHabUrl;
  public configUrl = environment.app.layout;
  public layoutUrl = environment.app.layout_items;
  public devicesUrl = environment.app.devices;
  public itemsUrl = environment.app.items;
  public batteryLevelAlert = environment.app['batteryLevelAlert'] || 70;
  public layout = {rooms: []};
  public items = {};


  constructor() {
  }

  getLayout() {
    return new Promise((resolve, reject) => {
      return fetch(`${this.layoutUrl}`)
      .then(response => response.json())
      .then(layout => {
        this.layout = layout;
        resolve(this.layout);
      });
    });

    // fetch(`${this.layoutUrl}`)
    // .then(response => response.json())
    // .then(layout => {
    //   this.layout = layout;
    // })
  }
  getItems() {
    return new Promise((resolve, reject) => {
      return fetch(`${this.serverUrl}/rest/items`)
      .then(response => response.json())
      .then((items: any) => {
        for(let item of items) {
          const data = {
            id: item.name,
            type: item.type,
            state: item.state
          }
          if (item.type === "Color") {
            const [h, s, b] = item.state.split(',');
            data.state = {h, s, b};
          }
          this.items[item.name] = data;
        }
        resolve(this.items);
      });
    });

    // fetch(`${this.serverUrl}/rest/items`)
    // .then(response => response.json())
    // .then((items: any) => {
    //   for(let item of items) {
    //     this.items[item.name] = {
    //       id: item.name,
    //       type: item.type,
    //       state: item.state
    //     }
    //   }
    // })
  }
}
