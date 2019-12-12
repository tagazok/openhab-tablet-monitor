import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';
// import { LogService } from "./log.service";

@Injectable()
export class ConfigService {
  public serverUrl = environment.app.openHabUrl;
  public layoutUrl = environment.app.layout;
  public batteryLevelAlert = environment.app['batteryLevelAlert'] || 70;
  public layout = {};
  public items = {};
  user: any;

  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase,
    // private as: AuthService
    // private logService: LogService
  ) {
    // this.user = as.user
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
  }

  getLayoutFromLocalStorage() {
    return this.getLayout();
    // return localStorage.getItem("layout");
  }

  setLayout(data) {
    // this.layout = JSON.parse(data);
    // localStorage.setItem("layout", data);
  }

  getLayoutFromFirebase(userId) {

    return this.db.object(`users/${userId}/layout`).valueChanges();

    // return new Promise((resolve, reject) => {
    //   this.db.object(`users/${this.user.uid}/layout`).valueChanges().subscribe(
    //   // this.db.object('olivier').valueChanges().subscribe(
    //   (response: any) => {
    //     this.layout = JSON.parse(response.layout);
    //     resolve(this.layout);
    //   }, error => {
    //     reject(error);
    //   });
    // });
    // debugger;
    // return new Promise((resolve, reject) => {
    //   return fetch(`${this.layoutUrl}`)
    //     .then(response => response.json())
    //     .then(layout => {
    //       this.layout = layout;
    //       this.saveLayout();
    //       resolve(this.layout);
    //     });
    // });
  }

  saveLayout() {
    let itemRef = this.db.object('olivier');
    itemRef.set({ layout: JSON.stringify(this.layout) });
  }

  processItems(msg: any) {
    for (const item of msg.result) {
      const data = {
        id: item.entity_id,
        type: item.entity_id.split('.')[0],
        name: item.attributes.friendly_name,
        state: item.state,
        attributes: item.attributes
      }
      this.items[data.id] = data;
    }
    console.log(this.items);
  }

  updateItem(msg) {
    const data = this.items[msg.event.data.entity_id];
    if (data) {
      data.state = msg.event.data.new_state.state;
      data.attributes = msg.event.data.new_state.attributes;
    }
  }

  getItems() {
    return new Promise((resolve, reject) => {
      return fetch(`${this.serverUrl}/rest/items`)
        .then(response => response.json())
        .then((items: any) => {
          for (const item of items) {
            const data = {
              id: item.name,
              type: item.type,
              category: item.category,
              state: item.state
            };
            if (item.type === 'Color') {
              const [h, s, b] = item.state.split(',');
              data.state = { h, s, b };
            }
            if (
              item.category === 'Battery' &&
              item.type === 'Number' &&
              item.state < this.batteryLevelAlert
            ) {
              // this.logService.createAlert(item, {
              //   item: item.name,
              //   type: "battery-empty",
              //   date: new Date().toLocaleString(),
              //   value: `${item.state}%`
              // })
            }
            this.items[item.name] = data;
          }
          resolve(this.items);
        });
    });
  }
}
