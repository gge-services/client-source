Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function () {
  function KingdomCrestsAndSymbolsHelper() {}
  KingdomCrestsAndSymbolsHelper.addSymbolToMC = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4 = 0) {
    if (__s5param0) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s5param0);
      var __s5local0 = KingdomCrestsAndSymbolsHelper.getKingdomByID(__s5param2);
      var __s5local1 = [];
      if (__s5param4 == 0) {
        __s5local1.push(__s5local0.symbolColor);
      } else {
        __s5local1.push(__s5param4);
      }
      var __s5local2 = [];
      __s5local2.push(new __dep_exact_9e901e8e2483a22f.ClipColor("cc", __s5local1, "c"));
      var __s5local3 = new __dep_exact_9e901e8e2483a22f_2.GoodgameDisplayObjectClipExternal(KingdomCrestsAndSymbolsHelper.SYMBOL_PREFIX + __s5local0.xmlName, __dep_exact_9e901e8e2483a22f_4.BasicModel.basicLoaderData.getVersionedItemAssetUrl(KingdomCrestsAndSymbolsHelper.ASSET_NAME), __s5local2, 1, false);
      __s5local3.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_5.ClipSizeComponent(__s5param3.x, __s5param3.y);
      __s5param0.addChild(__s5local3);
    }
    if (__s5param1) {
      var __s5local4 = new __dep_exact_81dacdf05bd32292.ColorTransform();
      __s5local4.color = __s5local0.symbolBgColor;
      __s5param1.transform.colorTransform = __s5local4;
    }
  };
  KingdomCrestsAndSymbolsHelper.addCrestToMC = function (__s11param0, __s11param1, __s11param2) {
    if (__s11param0) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s11param0);
      var __s11local0 = KingdomCrestsAndSymbolsHelper.getKingdomByID(__s11param1);
      var __s11local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(KingdomCrestsAndSymbolsHelper.CREST_PREFIX + __s11local0.xmlName, KingdomCrestsAndSymbolsHelper.assetPath, null, 1, false);
      __s11local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_5.ClipSizeComponent(__s11param2.x, __s11param2.y);
      __s11param0.addChild(__s11local1);
    }
  };
  KingdomCrestsAndSymbolsHelper.getKingdomByID = function (__s14param0) {
    var __s14local0 = __dep_export_KingdomEnum.KingdomEnum.getTypeById(__s14param0);
    if (__s14param0 == __dep_export_KingdomEnum.KingdomEnum.CLASSIC.id && __dep_export_ABGHelper.ABGHelper.isOnABGServer && __dep_export_SpecialServerHelper.SpecialServerHelper.useSkin) {
      __s14local0 = __dep_export_KingdomEnum.KingdomEnum.getTypeByXMLName(__dep_export_ABGHelper.ABGHelper.skinName);
    }
    return __s14local0;
  };
  Object.defineProperty(KingdomCrestsAndSymbolsHelper, "assetPath", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_4.BasicModel.basicLoaderData.getVersionedItemAssetUrl(KingdomCrestsAndSymbolsHelper.ASSET_NAME);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomCrestsAndSymbolsHelper, "castleEnv", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  KingdomCrestsAndSymbolsHelper.ASSET_NAME = "KingdomCrestsSymbols";
  KingdomCrestsAndSymbolsHelper.SYMBOL_PREFIX = "KingdomSymbol_";
  KingdomCrestsAndSymbolsHelper.CREST_PREFIX = "KingdomCrest_";
  return KingdomCrestsAndSymbolsHelper;
}();
exports.KingdomCrestsAndSymbolsHelper = __s0local0;
