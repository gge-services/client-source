import { BasicTrackingEvent } from "../../../ggs.dll/reconstructed/exports/BasicTrackingEvent";
export class AttackScreenWaveTrackingEvent extends BasicTrackingEvent {
  _actionType: any;
  _date: any;
  _numberWaves: any;
  _playerId: any;

  static ACTION_PRESET_ONE_WAVE: any;
  static ACTION_PRESET_ALL_WAVES: any;
  static ACTION_AUTOFILL_ONE_WAVE: any;
  static ACTION_AUTOFILL_ALL_WAVES: any;
  constructor(argument0) {
    super(argument0);
  }
  getVars() {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      numberWaves: this._numberWaves,
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
  set numberWaves(value) {
    this._numberWaves = value;
  }
  set actionType(value) {
    this._actionType = value;
  }
  static __initialize_static_members() {
    AttackScreenWaveTrackingEvent.ACTION_PRESET_ONE_WAVE = "preset_one_wave";
    AttackScreenWaveTrackingEvent.ACTION_PRESET_ALL_WAVES = "preset_all_wave";
    AttackScreenWaveTrackingEvent.ACTION_AUTOFILL_ONE_WAVE = "autofill_one_wave";
    AttackScreenWaveTrackingEvent.ACTION_AUTOFILL_ALL_WAVES = "autofill_all_wave";
  }
}
AttackScreenWaveTrackingEvent.__initialize_static_members();
