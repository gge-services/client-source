import { BasicTrackingEvent } from "../../../ggs.dll/reconstructed/exports/BasicTrackingEvent";
export class NewsHubTrackingEvent extends BasicTrackingEvent {
  _date: any;
  _playerId: any;
  _sourceName: any;

  static SOURCE_SETTINGS_BAR: any;
  static SOURCE_BULLETIN_BOARD: any;
  static SOURCE_ANNOUNCEMENT: any;
  constructor(argument0) {
    super(argument0);
  }
  getVars() {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      sourceName: this._sourceName
    };
    return __s5local0;
  }
  set playerId(value) {
    this._playerId = value;
  }
  set date(value) {
    this._date = value;
  }
  set sourceName(value) {
    this._sourceName = value;
  }
  static __initialize_static_members() {
    NewsHubTrackingEvent.SOURCE_SETTINGS_BAR = "option_panel";
    NewsHubTrackingEvent.SOURCE_BULLETIN_BOARD = "iso_world";
    NewsHubTrackingEvent.SOURCE_ANNOUNCEMENT = "announcement_popup";
  }
}
NewsHubTrackingEvent.__initialize_static_members();
