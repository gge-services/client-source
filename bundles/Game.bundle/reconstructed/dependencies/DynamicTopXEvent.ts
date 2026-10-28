export class DynamicTopXEvent extends createjs.Event {
  static UPDATE_DYNAMIC_TOP_X: any;
  constructor(argument0, argument1 = false, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    DynamicTopXEvent.UPDATE_DYNAMIC_TOP_X = "update_dynamic_dop_x";
  }
}
DynamicTopXEvent.__initialize_static_members();
