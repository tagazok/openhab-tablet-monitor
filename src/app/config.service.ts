import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";

@Injectable()
export class ConfigService {
  public serverUrl = environment.app.openHabUrl;
  public configUrl = environment.app.layout;
  public devicesUrl = environment.app.devices;
  public batteryLevelAlert = environment.app['batteryLevelAlert'] || 70;
  public layout = {rooms: []};
  public devices = {};
}
