export class CastleFacebookEvent extends createjs.Event {
  static FACEBOOK_MAPPING_UPDATED: any;
  static FACEBOOK_MAPPING_ERROR: any;
  static FACEBOOK_ACTION_CANCELED: any;
  constructor(argument0, argument1 = false, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED = "facebookMappingUpdated";
    CastleFacebookEvent.FACEBOOK_ACTION_CANCELED = "facebookActionCanceled";
    CastleFacebookEvent.FACEBOOK_MAPPING_ERROR = "facebookMappingError";
  }
}
CastleFacebookEvent.__initialize_static_members();
