Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function () {
  function SpecialServerHelper() {}
  Object.defineProperty(SpecialServerHelper, "isOnSpecialServer", {
    get: function () {
      return __dep_export_ABGHelper.ABGHelper.isOnABGServer || __dep_export_TempServerHelper.TempServerHelper.isOnTempServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpecialServerHelper, "eventIsRunning", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
        return !!__dep_export_ABGHelper.ABGHelper.abgEvent;
      } else {
        return !!__dep_export_TempServerHelper.TempServerHelper.isOnTempServer && !!__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpecialServerHelper, "useSkin", {
    get: function () {
      return SpecialServerHelper.isOnSpecialServer && !!SpecialServerHelper.skinName && SpecialServerHelper.skinName != "" && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_export_KingdomEnum.KingdomEnum.CLASSIC.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpecialServerHelper, "skinName", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
        return __dep_export_ABGHelper.ABGHelper.skinName;
      } else if (__dep_export_TempServerHelper.TempServerHelper.isOnTempServer) {
        return __dep_export_TempServerHelper.TempServerHelper.skinName;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  SpecialServerHelper.checkTextIDForSkinText = function (__s18param0) {
    if (SpecialServerHelper.useSkin) {
      return __dep_export_TextHelper.TextHelper.getExistingTextID(__s18param0 + "_" + SpecialServerHelper.skinName, __s18param0);
    } else {
      return __s18param0;
    }
  };
  Object.defineProperty(SpecialServerHelper, "isOnKeyLoginToNormalLoginServer", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_NASZAKLASA || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_KRALOYUN || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_SPIELAFFE || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId == 80;
    },
    enumerable: true,
    configurable: true
  });
  SpecialServerHelper.isCrossplay = function () {
    return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isCrossplay;
  };
  SpecialServerHelper.SKIN_MAYA = "Maya";
  return SpecialServerHelper;
}();
exports.SpecialServerHelper = __s0local0;
