import { BasicTrackingEvent } from "../../../ggs.dll/reconstructed/exports/BasicTrackingEvent";
export class SsoUserMoveTrackingEvent extends BasicTrackingEvent {
  _actionType: any;
  _date: any;
  _login_method: any;
  _playerId: any;

  static POPUP_SHOWN: any;
  static POPUP_CONFIRMED: any;
  static LOGIN_WITH_SSO: any;
  static LOGIN_WITH_PASSWORD: any;
  constructor(argument0) {
    super(argument0);
  }
  getVars() {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      actionType: this._actionType,
      login_method: this._login_method
    };
    return __s5local0;
  }
  set playerId(value) {
    this._playerId = value;
  }
  set date(value) {
    this._date = value;
  }
  set actionType(value) {
    this._actionType = value;
  }
  set login_method(value) {
    this._login_method = value;
  }
  static __initialize_static_members() {
    SsoUserMoveTrackingEvent.POPUP_SHOWN = "popup_shown";
    SsoUserMoveTrackingEvent.POPUP_CONFIRMED = "popup_confirmed";
    SsoUserMoveTrackingEvent.LOGIN_WITH_PASSWORD = "login_with_password";
    SsoUserMoveTrackingEvent.LOGIN_WITH_SSO = "login_with_sso";
  }
}
SsoUserMoveTrackingEvent.__initialize_static_members();
