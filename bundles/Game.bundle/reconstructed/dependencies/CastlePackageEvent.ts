export class CastlePackageEvent extends createjs.Event {
  static PACKAGEPRICE_GOT: any;
  static PACKAGEINFO_UPDATED: any;
  constructor(argument0, argument1 = true, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    CastlePackageEvent.PACKAGEINFO_UPDATED = "PACKAGEINFO_UPDATED";
    CastlePackageEvent.PACKAGEPRICE_GOT = "PACKAGEPRICE_GOT";
  }
}
CastlePackageEvent.__initialize_static_members();
