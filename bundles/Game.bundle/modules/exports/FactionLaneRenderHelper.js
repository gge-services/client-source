Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function FactionLaneRenderHelper() {}
  FactionLaneRenderHelper.showLane = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0;
    if (__s5param3 === undefined) {
      __s5param3 = null;
    }
    if (__s5param4 === undefined) {
      __s5param4 = null;
    }
    var __s5local1 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    var __s5local2 = __dep_exact_f855840627e6e145.int(__s5param1.length - 1);
    (__s5local0 = []).push(__s5param1[__s5local2]);
    __s5param0.showLines(__s5param2.absAreaPos, __s5local0, FactionLaneRenderHelper.getCapitalConnectionColor(__s5param2), false, true);
    __s5local2 = 0;
    for (; __s5local2 < __s5param1.length - 1; __s5local2++) {
      __s5local0 = [];
      var __s5local3 = __s5param1[__s5local2];
      var __s5local4 = __s5param1[__s5local2 + 1];
      __s5local0.push(__s5local4);
      if (__s5local2 == 0 && FactionLaneRenderHelper.factionEventVO.attackableCamps.indexOf(__s5local3.specialCampID) > -1) {
        __s5local1 = __s5local3.specialCampID;
      } else if (FactionLaneRenderHelper.factionEventVO.attackableCamps.indexOf(__s5local4.specialCampID) > -1) {
        __s5local1 = __s5local4.specialCampID;
      }
      __s5param0.showLines(__s5local3.absAreaPos, __s5local0, FactionLaneRenderHelper.getTowerConnectionColor(__s5local3, __s5local4, __s5local1), false, false);
    }
    if (__s5param3 && __s5param4) {
      for (var __s5local5 = 0; __s5local5 < __s5param4.length; __s5local5++) {
        __s5local0 = [];
        var __s5local6 = __s5param4[__s5local5];
        __s5local0.push(__s5local6);
        __s5param0.showLines(__s5param3.absAreaPos, __s5local0, FactionLaneRenderHelper.getVillageConnectionColor(__s5local1, __s5local6), false, false);
      }
    }
  };
  FactionLaneRenderHelper.getTowerConnectionColor = function (__s16param0, __s16param1, __s16param2) {
    if (__s16param0.specialCampID >= __s16param2) {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
    } else if (__s16param1.specialCampID == __s16param2) {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK;
    } else {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_YELLOW;
    }
  };
  FactionLaneRenderHelper.getCapitalConnectionColor = function (__s21param0) {
    if (FactionLaneRenderHelper.factionEventVO.attackableCamps.indexOf(__s21param0) > -1) {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK;
    }
    var __s21local0 = false;
    for (var __s21local1 = 0, __s21local2 = FactionLaneRenderHelper.factionEventVO.attackableCamps; __s21local1 < __s21local2.length; __s21local1++) {
      var __s21local3 = __s21local2[__s21local1];
      if (__s21local3 !== undefined && !FactionLaneRenderHelper.factionEventVO.getCapitalByID(__s21local3) && __s21param0.belongsToLane(FactionLaneRenderHelper.factionEventVO.getTowerByID(__s21local3).laneID)) {
        __s21local0 = true;
        break;
      }
    }
    if (__s21local0) {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
    } else {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_YELLOW;
    }
  };
  FactionLaneRenderHelper.getVillageConnectionColor = function (__s29param0, __s29param1) {
    if (__s29param1.canBeAttacked) {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK;
    } else if (__s29param1.towerID < __s29param0) {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_YELLOW;
    } else {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
    }
  };
  Object.defineProperty(FactionLaneRenderHelper, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  return FactionLaneRenderHelper;
}();
exports.FactionLaneRenderHelper = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
