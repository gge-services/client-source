export class CastleRecruitSelectUnitEvent extends createjs.Event {
  static SHOW_UNIT_SELECTION: any;
  constructor(argument0, argument1 = false, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    CastleRecruitSelectUnitEvent.SHOW_UNIT_SELECTION = "SHOW_UNIT_SELECTION";
  }
}
CastleRecruitSelectUnitEvent.__initialize_static_members();
