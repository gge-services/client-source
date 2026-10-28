export class VCKCommandOkEvent extends createjs.Event {
  static VCK_OK: any;
  constructor(argument0, argument1 = true, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    VCKCommandOkEvent.VCK_OK = "vck_ok";
  }
}
VCKCommandOkEvent.__initialize_static_members();
