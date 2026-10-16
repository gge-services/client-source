Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstGem = require("gge-module:export_ClientConstGem");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MovieClip;
var __s0local2 = function () {
  function CastleGemRenderer() {}
  CastleGemRenderer.renderAsset = function (__s5param0, __s5param1 = null, __s5param2 = null, __s5param3 = false) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "RandomGemVO")) {
      return CastleGemRenderer.renderRandomGem(__s5param0, __s5param1, __s5param2);
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "RelicGemVO")) {
      return CastleGemRenderer.renderRelicGem(__s5param0, __s5param1, __s5param2, __s5param3);
    } else if (__s5param0.isUnique) {
      return CastleGemRenderer.renderUniqueGem(__s5param0, __s5param1, __s5param2);
    } else {
      return CastleGemRenderer.renderSpecificGem(__s5param0, __s5param1, __s5param2);
    }
  };
  CastleGemRenderer.renderRelicGem = function (__s11param0, __s11param1 = null, __s11param2 = null, __s11param3 = false, __s11param4 = false) {
    var __s11local0 = new __s0local1();
    __s11local0.name = "eq";
    var __s11local1 = CastleGemRenderer.loadRelicGem(__s11param0, __s11param1);
    if (__s11local1.isLoaded) {
      CastleGemRenderer.removeBroken(__s11local1);
    } else {
      __s11local1.clipLoaded.addOnce(CastleGemRenderer.removeBroken);
    }
    var __s11local2 = __s11param2 || new __s0local0(CastleGemRenderer.DEFAULT_GEM_SIZE, CastleGemRenderer.DEFAULT_GEM_SIZE);
    __s11local1.doWhenLoaded(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(__s11local2.x, __s11local2.y));
    if (__s11param1) {
      __s11local1.doWhenLoaded(__s11param1);
    }
    var __s11local3 = __s11local2.x / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var __s11local4 = __s11local2.y / CastleGemRenderer.DEFAULT_GEM_SIZE;
    __s11local0.addChild(__s11local1.asDisplayObject());
    var __s11local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_BG_Relic", __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL("Equipment_BG_Relic"), null, 0, false);
    __s11local5.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s11local2.x + Math.round(__s11local3 * 6), __s11local2.y + Math.round(__s11local4 * 6));
    __s11local0.addChild(__s11local5.asDisplayObject());
    if (__s11param0.enchantmentLevel >= __dep_export_CastleModel.CastleModel.equipData.relicXml.maxRelicEnchanterLevel) {
      var __s11local6 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_EnchantingSparkle", __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL("Equipment_EnchantingSparkle"), null, 24, true);
      __s11local0.addChild(__s11local6.asDisplayObject());
      __s11local6.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s11local2.x - 5, __s11local2.y - 5);
    }
    if (__s11param3) {
      var __s11local7 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_NewIcon", __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL("Equipment_NewIcon"));
      __s11local7.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s11local2.x, __s11local2.y);
      __s11local7.name = "newClip";
      __s11local0.addChild(__s11local7.asDisplayObject());
    }
    if (__s11param4 && __dep_export_CastleModel.CastleModel.equipData.isGemFav(__s11param0.id, __dep_exact_81dacdf05bd32292.instanceOfClass(__s11param0, "RelicGemVO"))) {
      var __s11local8 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_FavStar", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_FavStar"));
      __s11local0.addChild(__s11local8.asDisplayObject());
      __s11local8.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s11local2.x + Math.round(__s11local3 * 9), __s11local2.y + Math.round(__s11local3 * 9));
    }
    return __s11local0;
  };
  CastleGemRenderer.renderUniqueGem = function (__s19param0, __s19param1 = null, __s19param2 = null) {
    var __s19local0 = CastleGemRenderer.loadUniqueGem(__s19param0, __s19param1);
    if (__s19local0.isLoaded) {
      CastleGemRenderer.removeBroken(__s19local0);
    } else {
      __s19local0.clipLoaded.addOnce(CastleGemRenderer.removeBroken);
    }
    var __s19local1 = __s19param2 || new __s0local0(CastleGemRenderer.DEFAULT_GEM_SIZE, CastleGemRenderer.DEFAULT_GEM_SIZE);
    __s19local0.doWhenLoaded(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(__s19local1.x, __s19local1.y));
    if (__s19param1) {
      __s19local0.doWhenLoaded(__s19param1);
    }
    var __s19local2 = new __s0local1();
    var __s19local3 = __s19local1.x / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var __s19local4 = __s19local1.y / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var __s19local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_BG", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG"), null, 0, false);
    __s19local5.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s19local1.x + Math.round(__s19local3 * 2), __s19local1.y + Math.round(__s19local4 * 2));
    __s19local2.addChild(__s19local5.asDisplayObject());
    __s19local2.addChild(__s19local0.asDisplayObject());
    var __s19local6 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_BG_Unique", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG_Unique"), null, 0, false);
    __s19local6.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s19local1.x + Math.round(__s19local3 * 6), __s19local1.y + Math.round(__s19local4 * 6));
    __s19local2.addChild(__s19local6.asDisplayObject());
    if (__s19param0.hasStar) {
      var __s19local7;
      var __s19local8 = __s19local1.x + __s19local3 * 0.7;
      var __s19local9 = __s19local1.y + __s19local4 * 3.5;
      (__s19local7 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_StarLevel", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_StarLevel"))).clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s19local8, __s19local9);
      __s19local2.addChild(__s19local7.asDisplayObject());
      __s19local7.doWhenLoaded(CastleGemRenderer.fillStarClip(__s19local7, __s19param0));
    }
    return __s19local2;
  };
  CastleGemRenderer.fillStarClip = function (__s25param0, __s25param1) {
    return function (__s27param0) {
      __s25param0.currentshownDisplayObject.mc_star.gotoAndStop(__s25param1.starRarity + 1);
      __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance().registerTextField(__s25param0.currentshownDisplayObject.mc_star.txt_level, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s25param1.starLevel.toString()), new __dep_exact_9e901e8e2483a22f_4.InternalGGSTextFieldConfigVO(true));
    };
  };
  CastleGemRenderer.renderRandomGem = function (__s29param0, __s29param1 = null, __s29param2 = null) {
    var __s29local0 = CastleGemRenderer.loadRandomAsset(__s29param0, __s29param1);
    if (__s29local0.isLoaded) {
      CastleGemRenderer.addLevel(__s29param0, __s29local0)(__s29local0);
    } else {
      __s29local0.clipLoaded.addOnce(CastleGemRenderer.addLevel(__s29param0, __s29local0));
    }
    var __s29local1 = __s29param2 || new __s0local0(CastleGemRenderer.DEFAULT_GEM_SIZE, CastleGemRenderer.DEFAULT_GEM_SIZE);
    __s29local0.doWhenLoaded(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(__s29local1.x, __s29local1.y));
    if (__s29param1) {
      __s29local0.doWhenLoaded(__s29param1);
    }
    var __s29local2 = new __s0local1();
    var __s29local3 = __s29local1.x / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var __s29local4 = __s29local1.y / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var __s29local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_BG", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG"), null, 0, false);
    __s29local5.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s29local1.x + Math.round(__s29local3 * 2), __s29local1.y + Math.round(__s29local4 * 2));
    __s29local2.addChild(__s29local5.asDisplayObject());
    __s29local2.addChild(__s29local0.asDisplayObject());
    var __s29local6 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_BG_Gem", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG_Gem"), null, 0, false);
    __s29local6.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s29local1.x + Math.round(__s29local3 * 6), __s29local1.y + Math.round(__s29local4 * 6));
    __s29local2.addChild(__s29local6.asDisplayObject());
    return __s29local2;
  };
  CastleGemRenderer.renderSpecificGem = function (__s34param0, __s34param1 = null, __s34param2 = null) {
    var __s34local0 = CastleGemRenderer.loadAsset(__s34param0, __s34param1);
    if (__s34local0.isLoaded) {
      if (__s34param0.lordType == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER) {
        CastleGemRenderer.removeBorder(__s34local0);
      }
      CastleGemRenderer.removeBroken(__s34local0);
      CastleGemRenderer.removeSimple(__s34local0);
    } else {
      __s34local0.clipLoaded.addOnce(CastleGemRenderer.removeBroken);
      __s34local0.clipLoaded.addOnce(CastleGemRenderer.removeSimple);
      if (__s34param0.lordType == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER) {
        __s34local0.clipLoaded.addOnce(CastleGemRenderer.removeBorder);
      }
    }
    var __s34local1 = __s34param2 || new __s0local0(CastleGemRenderer.DEFAULT_GEM_SIZE, CastleGemRenderer.DEFAULT_GEM_SIZE);
    __s34local0.doWhenLoaded(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(__s34local1.x, __s34local1.y));
    if (__s34param1) {
      __s34local0.doWhenLoaded(__s34param1);
    }
    var __s34local2 = new __s0local1();
    var __s34local3 = __s34local1.x / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var __s34local4 = __s34local1.y / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var __s34local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_BG", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG"), null, 0, false);
    __s34local5.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s34local1.x + Math.round(__s34local3 * 2), __s34local1.y + Math.round(__s34local4 * 2));
    __s34local2.addChild(__s34local5.asDisplayObject());
    __s34local2.addChild(__s34local0.asDisplayObject());
    var __s34local6 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_BG_Gem", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG_Gem"), null, 0, false);
    __s34local6.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s34local1.x + Math.round(__s34local3 * 6), __s34local1.y + Math.round(__s34local4 * 6));
    __s34local2.addChild(__s34local6.asDisplayObject());
    return __s34local2;
  };
  CastleGemRenderer.renderAssetBroken = function (__s41param0, __s41param1, __s41param2) {
    var __s41local0;
    if (__s41param1 === undefined) {
      __s41param1 = null;
    }
    if (__s41param2 === undefined) {
      __s41param2 = null;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s41param0, "RelicGemVO")) {
      __s41local0 = CastleGemRenderer.loadRelicGem(__s41param0, __s41param1);
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s41param0, "CastleGemVO")) {
      var __s41local1 = __s41param0;
      __s41local0 = __s41local1.isUnique ? CastleGemRenderer.loadUniqueGem(__s41local1, __s41param1) : CastleGemRenderer.loadAsset(__s41local1, __s41param1);
    }
    if (__s41local0.isLoaded) {
      CastleGemRenderer.removeBorder(__s41local0);
      CastleGemRenderer.removeSimple(__s41local0);
    } else {
      __s41local0.clipLoaded.addOnce(CastleGemRenderer.removeBorder);
      __s41local0.clipLoaded.addOnce(CastleGemRenderer.removeSimple);
    }
    var __s41local2 = __s41param2 || new __s0local0(CastleGemRenderer.DEFAULT_GEM_SIZE, CastleGemRenderer.DEFAULT_GEM_SIZE);
    __s41local0.doWhenLoaded(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(__s41local2.x, __s41local2.y));
    if (__s41param1) {
      __s41local0.doWhenLoaded(__s41param1);
    }
    var __s41local3 = new __s0local1();
    __s41local3.addChild(__s41local0.asDisplayObject());
    return __s41local3;
  };
  CastleGemRenderer.renderAssetForSocket = function (__s50param0, __s50param1) {
    var __s50local0;
    if (__s50param1 === undefined) {
      __s50param1 = null;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s50param0, "RelicGemVO")) {
      __s50local0 = CastleGemRenderer.loadRelicGem(__s50param0, __s50param1);
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s50param0, "CastleGemVO")) {
      var __s50local1 = __s50param0;
      __s50local0 = __s50local1.isUnique ? CastleGemRenderer.loadUniqueGem(__s50local1, __s50param1) : CastleGemRenderer.loadAsset(__s50local1, __s50param1);
    }
    if (__s50local0.isLoaded) {
      CastleGemRenderer.removeBorder(__s50local0);
      CastleGemRenderer.removeHD(__s50local0);
      CastleGemRenderer.removeBackground(__s50local0);
      CastleGemRenderer.removeBroken(__s50local0);
    } else {
      __s50local0.clipLoaded.addOnce(CastleGemRenderer.removeBorder);
      __s50local0.clipLoaded.addOnce(CastleGemRenderer.removeHD);
      __s50local0.clipLoaded.addOnce(CastleGemRenderer.removeBackground);
      __s50local0.clipLoaded.addOnce(CastleGemRenderer.removeBroken);
    }
    __s50local0.doWhenLoaded(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(18, 18));
    if (__s50param1) {
      __s50local0.doWhenLoaded(__s50param1);
    }
    var __s50local2 = new __s0local1();
    __s50local2.addChild(__s50local0.asDisplayObject());
    return __s50local2;
  };
  CastleGemRenderer.loadAsset = function (__s58param0, __s58param1 = null) {
    var __s58local0 = [];
    __s58local0.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor("cc", CastleGemRenderer.gemColor(__s58param0.boni[0].effect.effectID)));
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleGemRenderer.assetName(__s58param0.level), CastleGemRenderer.filePath, __s58local0, 0, false);
  };
  CastleGemRenderer.loadRandomAsset = function (__s60param0, __s60param1 = null) {
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleGemRenderer.assetName(0), CastleGemRenderer.filePath, null, 0, false);
  };
  CastleGemRenderer.loadUniqueGem = function (__s62param0, __s62param1 = null) {
    var __s62local0 = "Item_Gem_Unique_" + __s62param0.reuseAssetOfGemID;
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s62local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s62local0), null, 0, false);
  };
  CastleGemRenderer.loadRelicGem = function (__s64param0, __s64param1 = null) {
    var __s64local0 = __s64param0.getAssetClipName();
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s64local0, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s64local0));
  };
  CastleGemRenderer.removeHD = function (__s66param0) {
    var __s66local0 = __s66param0.currentshownDisplayObject;
    if (__s66local0.mc_shape_hd) {
      __s66local0.mc_shape_hd.visible = false;
    }
  };
  CastleGemRenderer.removeSimple = function (__s69param0) {
    var __s69local0 = __s69param0.currentshownDisplayObject;
    if (__s69local0.mc_shape_simple) {
      __s69local0.mc_shape_simple.visible = false;
    }
  };
  CastleGemRenderer.removeBackground = function (__s72param0) {
    var __s72local0 = __s72param0.currentshownDisplayObject;
    if (__s72local0.mc_background) {
      __s72local0.mc_background.visible = false;
    }
  };
  CastleGemRenderer.removeBorder = function (__s75param0) {
    var __s75local0 = __s75param0.currentshownDisplayObject;
    if (__s75local0.mc_border) {
      __s75local0.mc_border.visible = false;
    }
  };
  CastleGemRenderer.removeBroken = function (__s78param0) {
    var __s78local0 = __s78param0.currentshownDisplayObject;
    if (__s78local0.mc_broken) {
      __s78local0.mc_broken.visible = false;
    }
  };
  CastleGemRenderer.gemColor = function (__s81param0) {
    var __s81local0 = [];
    __s81local0.push(__dep_export_ClientConstGem.ClientConstGem.GEM_COLOR_MAPPING[__s81param0]);
    return __s81local0;
  };
  CastleGemRenderer.addLevel = function (__s83param0, __s83param1) {
    return function callBack(__s85param0) {
      var __s85local0 = __s83param1.currentshownDisplayObject;
      __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance().registerTextField(__s85local0.txt_level, new __dep_exact_92d05af59ee2ff30.NumberVO(__s83param0.level), new __dep_exact_9e901e8e2483a22f_4.InternalGGSTextFieldConfigVO(true));
    };
  };
  CastleGemRenderer.assetName = function (__s87param0) {
    return "Item_Gem_Lv" + __s87param0;
  };
  Object.defineProperty(CastleGemRenderer, "filePath", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_Gems");
    },
    enumerable: true,
    configurable: true
  });
  CastleGemRenderer.DEFAULT_GEM_SIZE = 55;
  return CastleGemRenderer;
}();
exports.CastleGemRenderer = __s0local2;
