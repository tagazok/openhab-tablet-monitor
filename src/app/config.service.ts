import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";

@Injectable()
export class ConfigService {
  public serverUrl = environment.app.openHabUrl;
  public configUrl = environment.app.homeDescription;
  public devicesUrl = environment.app.devices;
  public layout = {rooms: []};
  public devices = {};
}
