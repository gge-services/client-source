import { BasicTrackingEvent } from "../../../ggs.dll/reconstructed/exports/BasicTrackingEvent";
export class SocialButtonTrackingEvent extends BasicTrackingEvent {
  _buttonName: any;
  _date: any;
  _playerId: any;

  static BUTTON_NAME_DISCORD_MAINTENANCE: any;
  static BUTTON_NAME_DISCORD: any;
  constructor(argument0) {
    super(argument0);
  }
  getVars() {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      buttonName: this._buttonName
    };
    return __s5local0;
  }
  set playerId(value) {
    this._playerId = value;
  }
  set date(value) {
    this._date = value;
  }
  set buttonName(value) {
    this._buttonName = value;
  }
  static __initialize_static_members() {
    SocialButtonTrackingEvent.BUTTON_NAME_DISCORD = "Discord";
    SocialButtonTrackingEvent.BUTTON_NAME_DISCORD_MAINTENANCE = "Maintenance";
  }
}
SocialButtonTrackingEvent.__initialize_static_members();
