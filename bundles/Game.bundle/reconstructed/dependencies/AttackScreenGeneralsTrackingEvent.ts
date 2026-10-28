import { BasicTrackingEvent } from "../../../ggs.dll/reconstructed/exports/BasicTrackingEvent";
export class AttackScreenGeneralsTrackingEvent extends BasicTrackingEvent {
  _attackLaunched: any;
  _details: any;
  _playerId: any;
  _sessionEnd: any;
  _sessionStart: any;

  constructor(argument0) {
    super(argument0);
  }
  getVars() {
    var __s5local0 = {
      playerId: this._playerId,
      details: this._details,
      sessionStart: this._sessionStart,
      sessionEnd: this._sessionEnd,
      attackLaunched: this._attackLaunched ? "TRUE" : "FALSE"
    };
    return __s5local0;
  }
  set playerId(value) {
    this._playerId = value;
  }
  set details(value) {
    this._details = value;
  }
  set sessionStart(value) {
    this._sessionStart = value;
  }
  set sessionEnd(value) {
    this._sessionEnd = value;
  }
  set attackLaunched(value) {
    this._attackLaunched = value;
  }
  static __initialize_static_members() {}
}
AttackScreenGeneralsTrackingEvent.__initialize_static_members();
