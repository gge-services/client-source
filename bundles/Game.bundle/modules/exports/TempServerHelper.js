Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function () {
  function TempServerHelper() {}
  Object.defineProperty(TempServerHelper, "tmpServerEvent", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TEMPSERVER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerHelper, "skinName", {
    get: function () {
      if (TempServerHelper.tmpServerEvent) {
        return TempServerHelper.tmpServerEvent.settingVO.skin;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerHelper, "isOnTempServer", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnTemporaryServer;
    },
    enumerable: true,
    configurable: true
  });
  TempServerHelper.checkTextIDForABGText = function (__s13param0) {
    if (TempServerHelper.isOnTempServer) {
      return __dep_export_TextHelper.TextHelper.getExistingTextID(__s13param0 + "_" + TempServerHelper.skinName, __s13param0);
    } else {
      return __s13param0;
    }
  };
  TempServerHelper.getAssetFrame = function () {
    if (TempServerHelper.tmpServerEvent) {
      if (TempServerHelper.tmpServerEvent.isCrossPlay && TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
        return 5;
      }
      if (TempServerHelper.tmpServerEvent.isCrossPlay && TempServerHelper.tmpServerEvent.isRankSwapScoring) {
        return 4;
      }
      if (TempServerHelper.tmpServerEvent.isCrossPlay && TempServerHelper.tmpServerEvent.isCollectorScoring) {
        return 3;
      }
      if (TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
        return 2;
      }
    }
    return 1;
  };
  return TempServerHelper;
}();
exports.TempServerHelper = __s0local0;
