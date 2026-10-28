export class CastleMinuteSkipEvent extends createjs.Event {
  static MINUTESKIP_USE_SUCESS: any;
  static MINUTESKIP_USE_FAIL: any;
  static MINUTESKIPS_UPDATED: any;
  constructor(argument0, argument1 = false, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS = "minuteskip_use_success";
    CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL = "minuteskip_use_fail";
    CastleMinuteSkipEvent.MINUTESKIPS_UPDATED = "minuteskips_updated";
  }
}
CastleMinuteSkipEvent.__initialize_static_members();
