Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = function () {
  function ClientConstIsoChangeEventSkin() {}
  ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom = function (__s5param0, __s5param1 = true) {
    var __s5local0 = "";
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_export_KingdomEnum.KingdomEnum.CLASSIC.id) {
      return (__s5param1 ? "_" : "") + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    }
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN)) {
      var __s5local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN);
      var __s5local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      if (__s5local1.kingdomIDs.indexOf(__s5local2) > -1 && __dep_export_CastleModel.CastleModel.userData.userLevel >= __s5local1.minLevel && (__s5param0 && __s5local1.hasIsoSkin || !__s5param0 && __s5local1.hasWorldMapSkin)) {
        __s5local0 = (__s5param1 ? "_" : "") + __s5local1.skinString;
      }
    }
    return __s5local0;
  };
  ClientConstIsoChangeEventSkin.getSkinnedBackgroundColor = function (__s10param0) {
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN)) {
      var __s10local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN);
      var __s10local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      if (__s10local0.kingdomIDs.indexOf(__s10local1) > -1 && __dep_export_CastleModel.CastleModel.userData.userLevel >= __s10local0.minLevel && (__s10param0 && __s10local0.hasIsoSkin || !__s10param0 && __s10local0.hasWorldMapSkin)) {
        return __s10local0.getBackgroundColor(__s10local1, __s10param0);
      }
    }
    return __dep_export_ClientConstColor.ClientConstColor.USE_DEFAULT_COLOR;
  };
  return ClientConstIsoChangeEventSkin;
}();
exports.ClientConstIsoChangeEventSkin = __s0local0;
