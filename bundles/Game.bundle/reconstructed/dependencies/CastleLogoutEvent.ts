export class CastleLogoutEvent extends createjs.Event {
  static LOGOUT_TRIGGERED: any;
  constructor(argument0, argument1 = false, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    CastleLogoutEvent.LOGOUT_TRIGGERED = "logout_triggered";
  }
}
CastleLogoutEvent.__initialize_static_members();
