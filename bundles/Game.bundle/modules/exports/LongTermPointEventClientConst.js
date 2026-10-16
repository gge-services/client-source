Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function LongTermPointEventClientConst() {}
  LongTermPointEventClientConst.__initialize_static_members = function () {
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
    LongTermPointEventClientConst.pointEventIDs = [__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION];
    (__s5local0 = new Map()).set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, "Alien");
    __s5local0.set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, "RedAlien");
    __s5local0.set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, "Nomad");
    __s5local0.set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION, "Samurai");
    __s5local0.set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION, "Faction");
    LongTermPointEventClientConst.pointEventAssetNames = __s5local0;
  };
  return LongTermPointEventClientConst;
}();
exports.LongTermPointEventClientConst = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
__s0local0.__initialize_static_members();
