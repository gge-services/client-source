export class CastleWorldmapScreenEvent extends createjs.Event {
  static WORLDMAP_LOADED: any;
  constructor(argument0, argument1 = false, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    CastleWorldmapScreenEvent.WORLDMAP_LOADED = "worldMapLoaded";
  }
}
CastleWorldmapScreenEvent.__initialize_static_members();
