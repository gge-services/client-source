import { BasicTrackingEvent } from "../../../ggs.dll/reconstructed/exports/BasicTrackingEvent";
export class AccountDeletionTrackingEvent extends BasicTrackingEvent {
  _actionType: any;
  _date: any;
  _playerId: any;

  static DELETION_INITIALIZATION_CONFIRM: any;
  static DELETION_INITIALIZATION_CANCEL: any;
  static DELETION_INITIALIZATION: any;
  static ACCOUNT_DELETION_POPUP: any;
  static ACCOUNT_DELETION_OK: any;
  static ACCOUNT_DELETION_CANCEL: any;
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
    AccountDeletionTrackingEvent.DELETION_INITIALIZATION = "deletion_initialization";
    AccountDeletionTrackingEvent.DELETION_INITIALIZATION_CONFIRM = "deletion_initialization_confirm";
    AccountDeletionTrackingEvent.DELETION_INITIALIZATION_CANCEL = "deletion_initialization_cancel";
    AccountDeletionTrackingEvent.ACCOUNT_DELETION_POPUP = "account_deletion_popup";
    AccountDeletionTrackingEvent.ACCOUNT_DELETION_OK = "account_deletion_ok";
    AccountDeletionTrackingEvent.ACCOUNT_DELETION_CANCEL = "account_deletion_cancel";
  }
}
AccountDeletionTrackingEvent.__initialize_static_members();
