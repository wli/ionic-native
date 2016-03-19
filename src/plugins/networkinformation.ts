import {Plugin, CordovaProperty} from './plugin';


@Plugin({
  plugin: 'cordova-plugin-network-information',
  pluginRef: 'navigator.connection',
  platforms: ['Android','iOS','Amazon Fire OS','BlackBerry 10','Windows Phone','Windows','Tizen','Firefox OS']
})
export class NetworkInformation {

  @CordovaProperty
  static get type () : Connection {
    return;
  }

}

export interface Connection {
  UNKNOWN: "unknown",
  ETHERNET: "ethernet",
  WIFI: "wifi",
  CELL_2G: "2g",
  CELL_3G: "3g",
  CELL_4G: "4g",
  CELL:"cellular",
  NONE: "none"
}