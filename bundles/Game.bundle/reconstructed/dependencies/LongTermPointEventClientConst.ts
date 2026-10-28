import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
export class LongTermPointEventClientConst {
  static teaserPrefix: any;
  static tabToolTipPrefix: any;
  static tabPrefix: any;
  static pointEventIDs: any;
  static pointEventAssetNames: any;
  static iconPrefix: any;
  static eventNamePrefix: any;
  static eventDescriptionPrefix: any;
  static eventAssetFilePrefix: any;
  static SEASON_SUFFIX: any;
  static SEASON_PREFIX: any;
  static MAX_AMOUNT_OF_TABS: any;
  static GENERAL_TAB_ID: any;
  static EVENT_PREFIX: any;
  static __initialize_static_members() {
    var __s5local0;
    LongTermPointEventClientConst.SEASON_PREFIX = "LongTermPointEvent";
    LongTermPointEventClientConst.SEASON_SUFFIX = "SkinComponent";
    LongTermPointEventClientConst.EVENT_PREFIX = "LongtermPointEvent";
    LongTermPointEventClientConst.GENERAL_TAB_ID = 0;
    LongTermPointEventClientConst.MAX_AMOUNT_OF_TABS = 5;
    LongTermPointEventClientConst.teaserPrefix = "LongTermPointEvent_Teaser_";
    LongTermPointEventClientConst.eventAssetFilePrefix = "LongtermPointEvent";
    LongTermPointEventClientConst.iconPrefix = "ltpe_icon_";
    LongTermPointEventClientConst.tabPrefix = "ltpe_tab_";
    LongTermPointEventClientConst.tabToolTipPrefix = "dialog_longPointsEvent_tab_";
    LongTermPointEventClientConst.eventNamePrefix = "dialog_longPointsEvent_eventcamp_header";
    LongTermPointEventClientConst.eventDescriptionPrefix = "dialog_longPointsEvent_eventcamp_desc";
    LongTermPointEventClientConst.pointEventIDs = [EventConst.EVENTTYPE_SAMURAI_INVASION, EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, EventConst.EVENTTYPE_FACTION_INVASION];
    (__s5local0 = new Map()).set(EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, "Alien");
    __s5local0.set(EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, "RedAlien");
    __s5local0.set(EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, "Nomad");
    __s5local0.set(EventConst.EVENTTYPE_SAMURAI_INVASION, "Samurai");
    __s5local0.set(EventConst.EVENTTYPE_FACTION_INVASION, "Faction");
    LongTermPointEventClientConst.pointEventAssetNames = __s5local0;
  }
}
LongTermPointEventClientConst.__initialize_static_members();
