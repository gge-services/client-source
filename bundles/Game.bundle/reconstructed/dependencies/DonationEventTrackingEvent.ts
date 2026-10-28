import { BasicTrackingEvent } from "../../../ggs.dll/reconstructed/exports/BasicTrackingEvent";
export class DonationEventTrackingEvent extends BasicTrackingEvent {
  _actionType: any;
  _date: any;
  _playerId: any;

  static OPENED_DONATION_MAIN_DIALOG: any;
  constructor(argument0) {
    super(argument0);
  }
  getVars() {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      actionType: this._actionType
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
  static __initialize_static_members() {
    DonationEventTrackingEvent.OPENED_DONATION_MAIN_DIALOG = "opened_donation_main_dialog";
  }
}
DonationEventTrackingEvent.__initialize_static_members();
