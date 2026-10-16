Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = createjs.Shape;
var __s0local3 = function () {
  function EquipmentIconHelper() {}
  EquipmentIconHelper.isFavorite = function (__s5param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "BasicEquipmentVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "RelicEquipmentVO")) {
      return __dep_export_CastleModel.CastleModel.equipData.isEQFav(__s5param0.id);
    } else {
      return __dep_export_CastleModel.CastleModel.equipData.isGemFav(__s5param0.id, !__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "CastleGemVO"));
    }
  };
  EquipmentIconHelper.addEquipmentIcon = function (__s9param0, __s9param1, __s9param2, __s9param3, __s9param4 = null, __s9param5 = true, __s9param6 = false, __s9param7 = false, __s9param8 = true, __s9param9 = false) {
    if (!__s9param0) {
      console.warn("EquipmentVO is null");
      return new __s0local0();
    }
    var __s9local0 = __s9param0 && __s9param0.hasStar ? 0.7 : 0;
    var __s9local1 = __s9param0 && __s9param0.hasStar ? 3.5 : 0;
    var __s9local2 = (__s9param2 = __s9param3 = Math.min(__s9param2, __s9param3)) / 55;
    var __s9local3 = __s9param3 / 55;
    var __s9local4 = new __s0local0();
    __s9local4.mouseChildren = true;
    __s9local4.name = "eq";
    if (__s9param1) {
      if (__s9param5) {
        __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s9param1);
      }
      __s9param1.addChild(__s9local4);
    }
    if (!(__s9param0 instanceof __dep_export_RandomHeroVO.RandomHeroVO)) {
      var __s9local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_BG", __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG"), null, 0, false);
      __s9local5.mouseEnabled = false;
      __s9local4.addChild(__s9local5.asDisplayObject());
      __s9local5.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_3.ClipSizeComponent(__s9param2 + Math.round(__s9local2 * 2), __s9param3 + Math.round(__s9local3 * 2));
    }
    var __s9local6;
    var __s9local7;
    var __s9local8;
    var __s9local9;
    var __s9local10 = __s9param2 + __s9local0 * __s9local2;
    var __s9local11 = __s9param3 + __s9local1 * __s9local3;
    try {
      __s9local6 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s9param0.visClassName, __s9param0.getFilePath(), null, 0, false);
    } catch (__s16local0) {
      if (__s9param0) {
        console.error("Could not Found File: \"" + __s9param0.visClassName + "\" in \"" + __s9param0.getFilePath());
      } else {
        console.error("vo is null");
      }
    }
    __s9local4.addChild(__s9local6.asDisplayObject());
    __s9local6.mouseEnabled = false;
    __s9local4.equipmentIcon = __s9local6;
    __s9local6.doWhenLoaded(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(__s9param2, __s9param3));
    if (!(__s9param0 instanceof __dep_export_RelicEquipmentVO.RelicEquipmentVO) && __s9param0.enchantmentLevel >= __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s9param0.visualRareID) || __s9param0 instanceof __dep_export_RelicEquipmentVO.RelicEquipmentVO && __s9param0.enchantmentLevel >= __dep_export_CastleModel.CastleModel.equipData.relicXml.maxRelicEnchanterLevel) {
      __s9local7 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_EnchantingSparkle", __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_EnchantingSparkle"), null, __s9param8 ? 24 : 0, __s9param8);
      __s9local4.addChild(__s9local7.asDisplayObject());
      __s9local7.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_3.ClipSizeComponent(__s9param2, __s9param3);
      __s9local7.mouseEnabled = false;
    }
    if (!__s9param0.isPermanent) {
      __s9local8 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_TemporaryIconBottomLeft", __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_TemporaryIconBottomLeft"));
      __s9local4.addChild(__s9local8.asDisplayObject());
      __s9local8.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_3.ClipSizeComponent(__s9param2, __s9param3);
      __s9local8.mouseEnabled = false;
    }
    if (__s9param0.hasStar) {
      __s9local9 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_StarLevel", __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_StarLevel"));
      __s9local4.addChild(__s9local9.asDisplayObject());
      __s9local9.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_3.ClipSizeComponent(__s9local10, __s9local11);
      __s9local9.doWhenLoaded(EquipmentIconHelper.fillStarClip(__s9local9, __s9param0));
      __s9local9.mouseEnabled = false;
    }
    if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "RandomEquipmentVO") && !(__s9param0 instanceof __dep_export_RandomHeroVO.RandomHeroVO)) {
      var __s9local12 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_BG_" + __s9param0.rarity, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG_" + __s9param0.rarity), null, 0, false);
      __s9local4.addChild(__s9local12.asDisplayObject());
      __s9local12.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_3.ClipSizeComponent(__s9param2 + Math.round(__s9local2 * 6), __s9param3 + Math.round(__s9local3 * 6));
      __s9local12.mouseEnabled = false;
    }
    if (__s9param7) {
      var __s9local13 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_NewIcon", __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_NewIcon"));
      __s9local4.addChild(__s9local13.asDisplayObject());
      __s9local13.name = "newClip";
      __s9local13.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_3.ClipSizeComponent(__s9param2 + Math.round(__s9local2 * 9), __s9param3 + Math.round(__s9local2 * 9));
    }
    if (__s9param9 && __dep_export_CastleModel.CastleModel.equipData.isEQFav(__s9param0.id)) {
      var __s9local14 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_FavStar", __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_FavStar"));
      __s9local4.addChild(__s9local14.asDisplayObject());
      __s9local14.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_3.ClipSizeComponent(__s9param2 + Math.round(__s9local2 * 9), __s9param3 + Math.round(__s9local2 * 9));
    }
    if (__s9param1 instanceof __s0local0) {
      __s9param1.toolTipText = EquipmentIconHelper.getToolTipByEquipmentVO(__s9param0);
    }
    if (__s9param0.gemVO) {
      var __s9local15 = new __dep_export_EquipmentGemSocket.EquipmentGemSocket(__s9param0, __s9param6);
      __s9local15.mouseEnabled = true;
      if (__s9param1) {
        __s9param1.addChild(__s9local15);
      } else {
        __s9local4.addChild(__s9local15);
      }
      if (__s9param1 instanceof __s0local0) {
        __s9param1.gemSocket = __s9local15;
      }
    }
    if (__s9param4) {
      if (__s9local6.isLoaded) {
        __s9param4(__s9local6);
      } else {
        __s9local6.clipLoaded.addOnce(__s9param4);
      }
    }
    return __s9local4;
  };
  EquipmentIconHelper.addEquipmentIconHitBG = function (__s34param0, __s34param1, __s34param2, __s34param3 = false) {
    var __s34local0 = __s34param0.getChildAt(0);
    if (!(__s34local0 instanceof __s0local2) || __s34local0.name != "EquipmentIconHitBG") {
      var __s34local1 = new __s0local2();
      __s34local1.graphics.beginFill(__s34param3 ? "#ff0000" : "#ffffff").drawRect(0, 0, __s34param1, __s34param2);
      __s34local1.alpha = __s34param3 ? 1 : 0.01;
      __s34local1.cache(0, 0, __s34param1, __s34param2);
      __s34local1.x = -__s34param1 / 2;
      __s34local1.y = -__s34param2 / 2;
      __s34local1.name = "EquipmentIconHitBG";
      __s34param0.addChildAt(__s34local1, 0);
    }
  };
  EquipmentIconHelper.updateEquipmentIconCache = function (__s37param0, __s37param1, __s37param2, __s37param3) {
    var __s37local0 = __s37param0.equipmentIcon;
    if (__s37local0) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s37local0, __s37param1, __s37param2, __s37param3);
    }
  };
  EquipmentIconHelper.fillStarClip = function (__s40param0, __s40param1) {
    return function (__s42param0) {
      __s40param0.currentshownDisplayObject.mc_star.gotoAndStop(__s40param1.starRarity + 1);
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s40param0.currentshownDisplayObject.mc_star.txt_level, new __dep_exact_92d05af59ee2ff30.NumberVO(__s40param1.starLevel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    };
  };
  EquipmentIconHelper.addGem = function (__s44param0, __s44param1) {
    return function (__s46param0) {
      __s44param0.currentshownDisplayObject.mc_empty.addChild(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAssetForSocket(__s44param1.gemVO, EquipmentIconHelper.resizeGemClip));
    };
  };
  EquipmentIconHelper.resizeGemClip = function (__s48param0 = null) {
    __s48param0.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_3.ClipSizeComponent(18, 18);
  };
  EquipmentIconHelper.getToolTipByEquipmentVO = function (__s50param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s50param0, "RandomEquipmentVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s50param0, "RandomHeroVO")) {
      return __s50param0.nameString;
    } else {
      return null;
    }
  };
  EquipmentIconHelper.getLordIcon = function (__s54param0, __s54param1, __s54param2 = -1, __s54param3 = null) {
    if (!__s54param0) {
      return new __s0local0();
    }
    var __s54local0;
    __s54local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s54param0.getVisClassName(), __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s54param0.getVisAsset()), null, 0, false);
    var __s54local1 = new __s0local0();
    if (__s54param2 > 0) {
      __s54local0.doWhenLoaded(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(__s54param2, __s54param2, 1));
      if (__s54param3) {
        __s54local0.doWhenLoaded(__s54param3);
      }
    }
    __s54local1.addChild(__s54local0.asDisplayObject());
    if (__s54param1) {
      __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s54param1);
      __s54param1.addChild(__s54local1);
    }
    return __s54local1;
  };
  EquipmentIconHelper.addLordFeather = function (__s60param0, __s60param1, __s60param2 = 1) {
    if (__s60param0.id == __dep_exact_26a421b704832cff.TravelConst.COMMANDER_PREMIUM) {
      var __s60local0;
      (__s60local0 = __dep_export_CastleModel.CastleModel.vipData.remainingPremiumCommanders > 0 ? new Library.CastleInterfaceElements_Icons.Icon_VipPoints() : new Library.CastleInterfaceElements_Icons.Icon_C2()).scaleX = __s60local0.scaleY = __s60param2 * 1.2;
      __s60param1.addChild(__s60local0);
    } else {
      var __s60local1 = __s60param0.getFeatherClassName();
      if (!__s60local1 || __s60local1 == "") {
        return;
      }
      var __s60local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s60local1, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s60param0.getFeatherAsset()), null, 0, false).asDisplayObject();
      __s60local2.scaleX = __s60local2.scaleY = __s60param2;
      __s60param1.addChild(__s60local2);
    }
  };
  EquipmentIconHelper.addLordIcon = function (__s65param0, __s65param1, __s65param2, __s65param3 = -1, __s65param4 = null, __s65param5 = false) {
    if (__s65param1.warning && __s65param1.warning.parent) {
      __s65param1.warning.parent.removeChild(__s65param1.warning);
    }
    if (!__s65param0) {
      if (__s65param4) {
        return new __s65param4();
      } else {
        return new __s0local0();
      }
    }
    var __s65local0 = __s65param4 ? new __s65param4() : new __s0local0();
    var __s65local1 = 0;
    if (__s65param0.isHero) {
      var __s65local2 = __s65param3 > 0 ? __s65param3 : __s65param2;
      var __s65local3 = __s65local2 * 1.05;
      var __s65local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_BG_" + __dep_export_BasicEquipmentVO.BasicEquipmentVO.parseRarityID(__s65param0.rareID), __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG_" + __dep_export_BasicEquipmentVO.BasicEquipmentVO.parseRarityID(__s65param0.rareID)), null, 0, false);
      __s65local4.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_3.ClipSizeComponent(__s65local3, __s65local3);
      __s65local0.addChild(EquipmentIconHelper.getLordIcon(__s65param0, null, __s65local2, function () {
        if (__s65param1.parent.cacheCanvas) {
          __s65param1.parent.updateCache();
        }
      }));
      __s65local0.addChild(__s65local4);
      __s65local0.mouseChildren = false;
      if (__s65param1) {
        __s65param1.addChild(__s65local0);
      }
    } else {
      __s65local1 = __s65param2;
      __s65local0 = EquipmentIconHelper.getLordIcon(__s65param0, __s65param1, __s65local1);
    }
    if (!__s65param0.everyEquipmentSlotIsUsed && __s65param0.canUseEquipmentWarningIcon && __s65param5 && (!__s65param0.isBaron || !__dep_exact_81dacdf05bd32292.instanceOfClass(__s65param0, "BaronVO") || !__s65param0.isDummyBaron)) {
      var __s65local5;
      var __s65local6 = __s65param2 + __s65param2 / 55 * 14;
      var __s65local7 = new __s0local0();
      __s65local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_LordNotFullEquippedWarning", __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_LordNotFullEquippedWarning"));
      __s65local7.addChild(__s65local5.asDisplayObject());
      __s65local5.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_3.ClipSizeComponent(__s65local6, __s65local6);
      if (__s65param0.isBaron) {
        __s65local7.toolTipText = "dialog_tempEquipment_castellan_missingEquipment_tooltip";
      } else {
        __s65local7.toolTipText = "dialog_tempEquipment_commander_missingEquipment_tooltip";
      }
      __s65local7.mouseChildren = false;
      __s65local0.addChild(__s65local7);
      if (__s65param1) {
        for (var __s65local8 = __s65param1; __s65local8.mouseChildren == 0 || __s65local8.parent && __s65local8.parent.mouseChildren == 0 || __s65local8.parent.parent && __s65local8.parent.parent.mouseChildren == 0;) {
          __s65local8 = __s65local8.parent;
        }
        var __s65local9 = __s65local8.globalToLocal(__s65local7.localToGlobal(new __s0local1()));
        __s65local7.x = __s65local9.x;
        __s65local7.y = __s65local9.y;
        __s65local8.addChild(__s65local7);
        __s65param1.warning = __s65local7;
      }
    }
    return __s65local0;
  };
  EquipmentIconHelper.onClipSizeChanged = function (__s83param0) {
    var __s83local0 = __s83param0.asDisplayObject();
    if (__s83param0.clipSizeComponent) {
      __s83local0.x = __s83param0.clipSizeComponent.offsetX;
      __s83local0.y = __s83param0.clipSizeComponent.offsetY;
    }
  };
  EquipmentIconHelper.hideEquipmentToolTip = function () {
    EquipmentIconHelper.equipToolTip.disp.visible = false;
  };
  EquipmentIconHelper.hideRelicEquipmentToolTip = function () {
    EquipmentIconHelper.relicEquipToolTip.disp.visible = false;
  };
  EquipmentIconHelper.showToolTip = function (__s90param0, __s90param1, __s90param2 = null, __s90param3 = true, __s90param4 = false) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s90param1, "RandomEquipmentVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s90param1, "RandomHeroVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s90param1, "RandomGemVO")) {
      __s90param0.toolTipText = __s90param1.nameString;
    } else {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s90param1, "RelicEquipmentVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s90param1, "RelicGemVO")) {
        EquipmentIconHelper.showRelicToolTip(__s90param0, __s90param1);
      } else {
        EquipmentIconHelper.hideRelicEquipmentToolTip();
        EquipmentIconHelper.equipToolTip.initToolTip(__s90param1, __s90param0, __s90param2, __s90param3, __s90param4);
        EquipmentIconHelper.equipToolTip.disp.visible = true;
      }
      EquipmentIconHelper.onShow.dispatch();
    }
  };
  EquipmentIconHelper.showRelicToolTip = function (__s96param0, __s96param1) {
    EquipmentIconHelper.hideEquipmentToolTip();
    EquipmentIconHelper.relicEquipToolTip.initToolTip(__s96param1, __s96param0);
    EquipmentIconHelper.relicEquipToolTip.disp.visible = true;
    EquipmentIconHelper.onShow.dispatch();
  };
  Object.defineProperty(EquipmentIconHelper, "equipToolTip", {
    get: function () {
      this._equipToolTip ||= new __dep_export_CastleEquipmentToolTip.CastleEquipmentToolTip();
      return this._equipToolTip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentIconHelper, "relicEquipToolTip", {
    get: function () {
      this._relicEquipToolTip ||= new __dep_export_RelicEquipmentToolTip.RelicEquipmentToolTip();
      return this._relicEquipToolTip;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentIconHelper.FRAME_UNIQUE = 5;
  EquipmentIconHelper.onShow = new __dep_exact_5c7bc328fca9e4de.Signal();
  return EquipmentIconHelper;
}();
exports.EquipmentIconHelper = __s0local3;
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_CastleEquipmentToolTip = require("gge-module:export_CastleEquipmentToolTip");
var __dep_export_RelicEquipmentToolTip = require("gge-module:export_RelicEquipmentToolTip");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
var __dep_export_EquipmentGemSocket = require("gge-module:export_EquipmentGemSocket");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_RelicEquipmentVO = require("gge-module:export_RelicEquipmentVO");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_RandomHeroVO = require("gge-module:export_RandomHeroVO");
