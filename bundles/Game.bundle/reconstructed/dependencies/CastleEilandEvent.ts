export class CastleEilandEvent extends createjs.Event {
  constructor(argument0, argument1 = false, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static EILAND_RESET = "EILAND_RESET";
  static NEW_EILAND_TITLE = "NEW_EILAND_TITLE";
  static STORM_ISLANDS_INFO_RECEIVED = "STORM_ISLAND_INFO_RECEIVED";
}
