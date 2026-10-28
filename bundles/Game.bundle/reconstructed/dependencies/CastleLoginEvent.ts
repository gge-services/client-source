export class CastleLoginEvent extends createjs.Event {
  static ON_GBD_ARRIVED: any;
  static LOGIN_PROCESS_COMPLETE: any;
  constructor(argument0, argument1 = false, argument2 = false) {
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    CastleLoginEvent.LOGIN_PROCESS_COMPLETE = "login_process_complete";
    CastleLoginEvent.ON_GBD_ARRIVED = "onGbdArrived";
  }
}
CastleLoginEvent.__initialize_static_members();
