import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireDatabase } from "angularfire2/database";
// import { LogService } from "./log.service";

@Injectable()
export class ConfigService {
  public serverUrl = environment.app.openHabUrl;
  public layoutUrl = environment.app.layout;
  public batteryLevelAlert = environment.app["batteryLevelAlert"] || 70;
  public layout = {};
  public items = {};

  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase,
    // private logService: LogService
  ) {}

  getLayout() {
    return new Promise((resolve, reject) => {
      this.db.object('olivier').valueChanges().subscribe(
      (response: any) => {
        this.layout = JSON.parse(response.layout);
        resolve(this.layout);
      }, error => {
        debugger;
        reject(error);
      });
    });
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

  getItems() {
    return new Promise((resolve, reject) => {
      return fetch(`${this.serverUrl}/rest/items`)
        .then(response => response.json())
        .then((items: any) => {
          for (let item of items) {
            const data = {
              id: item.name,
              type: item.type,
              category: item.category,
              state: item.state
            };
            if (item.type === "Color") {
              const [h, s, b] = item.state.split(",");
              data.state = { h, s, b };
            }
            if (
              item.category === "Battery" &&
              item.type === "Number" &&
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
