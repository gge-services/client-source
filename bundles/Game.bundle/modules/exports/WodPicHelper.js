Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __dep_export_CastleGoodgameBitmapClipExternal = require("gge-module:export_CastleGoodgameBitmapClipExternal");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
__dep_exact_c549e43d1112dfff.getLogger("WodPicHelper");
var __s0local0 = function () {
  function WodPicHelper() {}
  WodPicHelper.setCorrectUnitBackgroundPic = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    if (__s5param1 && __s5param0) {
      __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s5param1);
      if (__s5param1) {
        if (__s5param0.isAuxiliary) {
          if (__s5param3 != null) {
            __s5param1.addChildAt(new __s5param3(), 0);
          }
        } else if (__s5param2 != null) {
          __s5param1.addChildAt(new __s5param2(), 0);
        }
      } else {
        __dep_exact_9e901e8e2483a22f_5.debug("ERROR!!! WodPicHelper.setCorrectUnitBackgroundPic has recieved a Background MovieClip that is null");
      }
    }
  };
  WodPicHelper.addWodPic = function (__s13param0, __s13param1, __s13param2, __s13param3, __s13param4 = "", __s13param5 = true, __s13param6 = null, __s13param7 = -1) {
    if (!__s13param0 || !__s13param1) {
      return null;
    }
    if (__s13param5) {
      __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s13param1);
    }
    if (__s13param7 == -1) {
      __s13param7 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    }
    var __s13local0 = __dep_export_CastleModel.CastleModel.userData.playerCrest;
    if (__s13param7 == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID && __dep_export_CastleModel.CastleModel.areaData.activeArea) {
      __s13local0 = __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(__dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo);
    }
    var __s13local1 = __s13local0.colorsTwo;
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s13param0, "ABasicBuildingVO") && __s13param0.usesColorFourCrest) {
      __s13local1 = __s13local0.colorsFour;
    } else if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s13param0, "AllianceDecoBuildingVO")) {
      __s13local1 = __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.getMyAllianceCrestBackgroundColorAsVector();
    }
    var __s13local2;
    var __s13local3 = [];
    __s13local3.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor("flag", __s13local1));
    var __s13local4;
    var __s13local5 = __dep_exact_81dacdf05bd32292_2.getDefinitionByNameFromLibrary("LoadingAnimation");
    var __s13local6 = __s13param0.getShopIconName(__s13param4);
    if (__dep_export_ClientConstCastle.ClientConstCastle.USE_BITMAP_CLIPS) {
      var __s13local7 = __dep_exact_9e901e8e2483a22f_3.GoodgameBitmapEngine.clipFactory.getExternalClipSource(__s13local6, __s13param0.getShopIconURL(__s13param4), __s13local3);
      var __s13local8 = __dep_exact_9e901e8e2483a22f_3.GoodgameBitmapEngine.clipFactory.getClipSource(__s13local5);
      var __s13local9 = new __dep_export_CastleGoodgameBitmapClipExternal.CastleGoodgameBitmapClipExternal(__s13local7, 0, false, __s13local8);
      __s13local2 = __s13local9;
      __s13param1.addChild(__s13local2.asDisplayObject());
      if (__s13local7.isLoaded) {
        WodPicHelper.clipBitmapLoaded(__s13local9);
      } else {
        __s13local9.clipLoaded.addOnce(WodPicHelper.clipBitmapLoaded);
      }
    } else {
      __s13local2 = __s13local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s13local6, __s13param0.getShopIconURL(__s13param4), __s13local3, 0, false, __s13local5, false, 1, true, true);
      __s13param1.addChild(__s13local2.asDisplayObject());
      if (__s13local4.isLoaded) {
        WodPicHelper.getOnClipLoaded(__s13param2, __s13param3, __s13param1)(__s13local4);
      } else {
        var __s13local10 = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s13param2, __s13param3);
        __s13local10.clipSizeChanged.add(WodPicHelper.onClipSizeChanged);
        __s13local2.clipSizeComponent = __s13local10;
        __s13local4.clipLoaded.addOnce(WodPicHelper.getOnClipLoaded(__s13param2, __s13param3, __s13param1));
      }
    }
    if (__s13param6 && __s13local4) {
      if (__s13local4.isLoaded) {
        __s13param6(__s13local4);
      } else {
        __s13local4.clipLoaded.addOnce(__s13param6);
      }
    }
    var __s13local11 = __s13local2.currentshownDisplayObject;
    if (__s13local11 && __s13local11.art) {
      __s13local11.art.gotoAndStop(__s13param7 + 1);
    }
    return __s13local2.asDisplayObject();
  };
  WodPicHelper.onClipSizeChanged = function (__s31param0) {
    var __s31local0 = __s31param0.asDisplayObject();
    if (__s31param0.clipSizeComponent != null) {
      __s31local0.x = __s31param0.clipSizeComponent.offsetX;
      __s31local0.y = __s31param0.clipSizeComponent.offsetY;
    }
  };
  WodPicHelper.clipLoaded = function (__s34param0) {
    if (__s34param0.clipSizeComponent) {
      var __s34local0 = __s34param0.asDisplayObject();
      __s34local0.x = __s34param0.clipSizeComponent.offsetX;
      __s34local0.y = __s34param0.clipSizeComponent.offsetY;
    }
  };
  WodPicHelper.clipBitmapLoaded = function (__s37param0) {
    if (__s37param0.clipSizeComponent) {
      var __s37local0 = __s37param0.asDisplayObject();
      __s37local0.x = __s37param0.clipSizeComponent.offsetX;
      __s37local0.y = __s37param0.clipSizeComponent.offsetY;
    }
  };
  WodPicHelper.addPlayerUnitPic = function (__s40param0, __s40param1, __s40param2, __s40param3, __s40param4 = true, __s40param5 = true, __s40param6 = null) {
    return WodPicHelper.addUnitPic(__s40param0, __s40param1, __s40param2, __s40param3, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1], 30, null, __s40param4, __s40param5, true, __s40param6);
  };
  WodPicHelper.addUnitPic = function (__s42param0, __s42param1, __s42param2, __s42param3, __s42param4, __s42param5, __s42param6 = 30, __s42param7 = null, __s42param8 = true, __s42param9 = true, __s42param10 = true, __s42param11 = null, __s42param12 = null, __s42param13 = true) {
    var __s42local0 = __dep_exact_81dacdf05bd32292_2.getDefinitionByNameFromLibrary("LoadingAnimation");
    var __s42local1 = __s42param0.getVisualClassName();
    var __s42local2 = [];
    var __s42local3 = [];
    __s42local3.push(__s42param4);
    __s42local3.push(__s42param5);
    __s42local2.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor("", __s42local3));
    var __s42local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s42local1, __s42param0.getShopIconURL(""), __s42local2, 0, false, __s42param8 ? __s42local0 : null, false, 1, true, true);
    if (__s42param1) {
      if (__s42param9) {
        __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s42param1);
      }
      __s42param1.addChild(__s42local4.asDisplayObject());
    }
    if (__s42param10 && __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s42param0, "ToolUnitVO")) {
      __s42param3 = __dep_exact_f855840627e6e145.int(__s42param3 * 0.8);
      __s42param2 = __dep_exact_f855840627e6e145.int(__s42param2 * 0.8);
    }
    if (__s42local4.isLoaded) {
      WodPicHelper.getOnClipLoaded(__s42param2, __s42param3, __s42param1)(__s42local4);
    } else {
      var __s42local5 = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s42param2, __s42param3);
      __s42local5.clipSizeChanged.add(WodPicHelper.onClipSizeChanged);
      __s42local4.clipSizeComponent = __s42local5;
      __s42local4.clipLoaded.addOnce(WodPicHelper.getOnClipLoaded(__s42param2, __s42param3, __s42param1));
    }
    var __s42local6 = null;
    if (__s42param12) {
      __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s42param12);
    }
    if (__s42param13 && __s42param0.level > 0) {
      (__s42local6 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Colleactable_LevelIndicator_Unit", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Colleactable_LevelIndicator_Unit"))).recycleAsset = false;
      if (__s42param12) {
        __s42param12.addChild(__s42local6);
        __s42param12.visible = true;
      } else if (__s42param1) {
        __s42param1.addChild(__s42local6);
      }
      if (__s42local6.isLoaded) {
        WodPicHelper.getOnLevelClipLoaded(__s42param6, __s42param6, __s42param0.level)(__s42local6);
      } else {
        __s42local6.doWhenLoaded(WodPicHelper.getOnLevelClipLoaded(__s42param6, __s42param6, __s42param0.level));
      }
    }
    if (__s42param11) {
      if (__s42local4.isLoaded) {
        __s42param11(__s42local4);
      } else {
        __s42local4.clipLoaded.addOnce(__s42param11);
      }
    }
    if (__s42local6 && !__s42param12) {
      var __s42local7 = __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s42param0, "ToolUnitVO");
      if (__s42local4.isLoaded) {
        WodPicHelper.getOnClipLoadedLevelOffset(__s42local6, __s42param7, __s42param2, __s42param3, __s42local7)(__s42local4);
      } else {
        __s42local4.doWhenLoaded(WodPicHelper.getOnClipLoadedLevelOffset(__s42local6, __s42param7, __s42param2, __s42param3, __s42local7));
      }
    }
    return __s42local4.asDisplayObject();
  };
  WodPicHelper.addSmallUnitPicToContainer = function (__s61param0, __s61param1, __s61param2, __s61param3, __s61param4 = true, __s61param5, __s61param6 = null, __s61param7 = null, __s61param8 = null) {
    return WodPicHelper.addUnitPicToContainer(__s61param0, __s61param1, WodPicHelper.SMALL_UNIT_WIDTH, WodPicHelper.SMALL_UNIT_HEIGHT, WodPicHelper.SMALL_UNIT_WIDTH, WodPicHelper.SMALL_UNIT_HEIGHT, __s61param2, __s61param3, __s61param5, __s61param6, __s61param4, __s61param7, __s61param8);
  };
  WodPicHelper.addUnitPicToContainer = function (__s63param0, __s63param1, __s63param2, __s63param3, __s63param4, __s63param5, __s63param6, __s63param7, __s63param8, __s63param9 = null, __s63param10 = true, __s63param11 = null, __s63param12 = null) {
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s63param0, "EffectIconUnitVO")) {
      if (__s63param12) {
        __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s63param12);
      }
      return WodPicHelper.addEffectPic(__s63param0, __s63param1, __s63param2, __s63param3, __s63param4, __s63param5, __s63param6, __s63param7, __s63param10, __s63param11);
    } else if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s63param0, "SoldierUnitVO") || __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s63param0, "UnknownUnitVO") && __s63param0.type != "Tools") {
      return WodPicHelper.addUnitPic(__s63param0, __s63param1.mc_tool ? __s63param1.mc_tool : __s63param1, __s63param4, __s63param5, __s63param6, __s63param7, __s63param8, __s63param9, true, __s63param10, false, __s63param11, __s63param12);
    } else {
      return WodPicHelper.addUnitPic(__s63param0, __s63param1.mc_tool ? __s63param1.mc_tool : __s63param1, __s63param2, __s63param3, __s63param6, __s63param7, __s63param8, __s63param9, true, __s63param10, false, __s63param11, __s63param12);
    }
  };
  WodPicHelper.addSmallPlayerUnitPicToContainer = function (__s69param0, __s69param1, __s69param2, __s69param3 = null, __s69param4 = true, __s69param5 = null) {
    var __s69local0 = __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo;
    return WodPicHelper.addSmallUnitPicToContainer(__s69param0, __s69param1, __s69local0[0], __s69local0[1], __s69param4, __s69param2, __s69param3, __s69param5);
  };
  WodPicHelper.addPlayerUnitPicToContainer = function (__s71param0, __s71param1, __s71param2, __s71param3, __s71param4, __s71param5, __s71param6, __s71param7 = null, __s71param8 = true, __s71param9 = null, __s71param10 = null) {
    var __s71local0 = __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo;
    return WodPicHelper.addUnitPicToContainer(__s71param0, __s71param1, __s71param2, __s71param3, __s71param4, __s71param5, __s71local0[0], __s71local0[1], __s71param6, __s71param7, __s71param8, __s71param9, __s71param10);
  };
  WodPicHelper.addIcon = function (__s73param0, __s73param1, __s73param2, __s73param3) {
    var __s73local0 = new __s73param0();
    __s73local0.scaleX = __s73local0.scaleY = WodPicHelper.getScaleFactor(__s73local0, __s73param2, __s73param3);
    __s73param1.addChild(__s73local0);
  };
  WodPicHelper.addSoldierAttackEffectIcon = function (__s75param0, __s75param1, __s75param2, __s75param3) {
    var __s75local0;
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s75param1);
    var __s75local1 = __s75param0;
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s75param0, "SoldierUnitVO")) {
      if (__s75local1.meleeAttack > __s75local1.rangeAttack) {
        __s75local0 = Library.CastleInterfaceElements_Icons.Icon_UnitCombatPowerMelee;
      } else if (__s75local1.meleeAttack <= __s75local1.rangeAttack) {
        __s75local0 = Library.CastleInterfaceElements_Icons.Icon_UnitCombatPowerRange;
      }
    }
    WodPicHelper.addIcon(__s75local0, __s75param1, __s75param2, __s75param3);
  };
  WodPicHelper.addToolEffectIcon = function (__s80param0, __s80param1, __s80param2, __s80param3, __s80param4) {
    var __s80local0;
    if (__s80param4 === undefined) {
      __s80param4 = 0;
    }
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s80param1);
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s80param0, "ToolUnitVO")) {
      var __s80local1 = __s80param0;
      var __s80local2 = __s80local1.effectTypes;
      if (__s80local2.length) {
        if (__s80local2[__s80param4] === __dep_export_ToolEffectType.ToolEffectType.GENERIC_EFFECT) {
          var __s80local3 = __s80local1.effectTypes.length - __s80local1.effects.length;
          var __s80local4 = __s80local1.effects[__s80param4 - __s80local3];
          if (__s80local4) {
            __s80local0 = __s80local4.effect.effectType.type.simpleEffectIconClass;
          }
        } else {
          __s80local0 = __s80local2[__s80param4].iconClass;
        }
      } else if (__s80local1.numberofDolls > 0) {
        __s80local0 = Library.CastleInterfaceElements.Icon_Units_Big;
      } else if (__s80local1.unitSpeed > 0) {
        __s80local0 = Library.CastleInterfaceElements_Icons.Icon_TravelTime;
      }
    } else if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s80param0, "BasicUnitVO")) {
      __s80local0 = Library.CastleInterfaceElements_Icons.Icon_Units;
    }
    WodPicHelper.addIcon(__s80local0, __s80param1, __s80param2, __s80param3);
  };
  WodPicHelper.getScaleFactor = function (__s91param0, __s91param1, __s91param2) {
    var __s91local0 = __s91param0.getBounds(null);
    var __s91local1 = __s91param1 / __s91local0.width;
    if (__s91local0.height * __s91local1 > __s91param2) {
      __s91local1 = __s91param2 / __s91local0.height;
    }
    return parseFloat(__s91local1.toFixed(2));
  };
  WodPicHelper.addEffectPic = function (__s94param0, __s94param1, __s94param2, __s94param3, __s94param4, __s94param5, __s94param6, __s94param7, __s94param8 = true, __s94param9 = null) {
    var __s94local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s94param0.getVisualClassName()))();
    __s94local0.gotoAndStop(1);
    if (__s94param8) {
      if (__s94param1.mc_unit) {
        __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s94param1.mc_unit);
      }
      __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s94param1.mc_tool ? __s94param1.mc_tool : __s94param1);
    }
    __s94local0.scaleX = __s94local0.scaleY = WodPicHelper.getScaleFactor(__s94local0, __s94param2, __s94param3);
    (__s94param1.mc_tool ? __s94param1.mc_tool : __s94param1).addChild(__s94local0);
    WodPicHelper.colorWodPic(__s94local0, __s94param6, __s94param7);
    if (__s94param9) {
      __s94param9(__s94local0);
    }
    return __s94local0;
  };
  WodPicHelper.colorWodPic = function (__s99param0, __s99param1, __s99param2) {
    var __s99local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s99local0.color = __s99param1;
    if (__s99param0.c1) {
      __s99param0.c1.useFilters([new createjs.ColorFilter(__s99local0.redMultiplier, __s99local0.greenMultiplier, __s99local0.blueMultiplier, __s99local0.alphaMultiplier, __s99local0.redOffset, __s99local0.greenOffset, __s99local0.blueOffset, __s99local0.alphaOffset)]);
    }
    __s99local0.color = __s99param2;
    if (__s99param0.c2) {
      __s99param0.c2.useFilters([new createjs.ColorFilter(__s99local0.redMultiplier, __s99local0.greenMultiplier, __s99local0.blueMultiplier, __s99local0.alphaMultiplier, __s99local0.redOffset, __s99local0.greenOffset, __s99local0.blueOffset, __s99local0.alphaOffset)]);
    }
  };
  WodPicHelper.getOnClipLoadedLevelOffset = function (__s103param0, __s103param1, __s103param2, __s103param3, __s103param4 = false) {
    return function (__s105param0) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s105param0);
      var __s105local0 = __s105param0.getBounds();
      var __s105local1 = WodPicHelper.getScaleFactor(__s105param0, __s103param2, __s103param3);
      if (!__s105param0.cacheCanvas) {
        __s105param0.doCache();
      }
      if (__s103param4) {
        __s103param0.x = __s105param0.x + (__s105local0.x + __s103param0.width / 2) * __s105local1;
        __s103param0.y = __s105param0.y + (__s105local0.y + __s103param0.height / 3) * __s105local1;
      } else {
        __s103param0.x += ((__s103param1 ? -__s105local0.width / 2 + __s103param1.x : -__s105local0.width / 2) + 5) * __s105local1;
        __s103param0.y += ((__s103param1 ? -__s105local0.height / 2 + __s103param1.y : -__s105local0.height / 2) + 5) * __s105local1;
      }
    };
  };
  WodPicHelper.getOnLevelClipLoaded = function (__s110param0, __s110param1, __s110param2) {
    return function (__s112param0) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s112param0.currentshownDisplayObject.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s110param2), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
      __s112param0.scaleX = __s112param0.scaleY = 1;
      var __s112local0 = WodPicHelper.getScaleFactor(__s112param0, __s110param0, __s110param1);
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleAndCacheWithAntiAliasing(__s112param0, __s112local0);
    };
  };
  WodPicHelper.getOnClipLoaded = function (__s114param0, __s114param1, __s114param2 = null) {
    return function (__s116param0) {
      __s116param0.clipSizeComponent = null;
      __s116param0.scaleX = __s116param0.scaleY = 1;
      var __s116local0 = WodPicHelper.getScaleFactor(__s116param0, __s114param0, __s114param1);
      if (__s116local0 >= 0.95) {
        __s116local0 = 1;
      }
      var __s116local1 = __s116param0.getBounds();
      var __s116local2 = -(__s116local1.width * __s116local0 / 2 + __s116local1.left * __s116local0);
      var __s116local3 = -(__s116local1.height * __s116local0 / 2 + __s116local1.top * __s116local0);
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleAndCacheWithAntiAliasing(__s116param0, __s116local0);
      __s116param0.x = __s116local2;
      __s116param0.y = __s116local3;
    };
  };
  WodPicHelper.__initialize_static_members = function () {
    WodPicHelper.SMALL_UNIT_WIDTH = 40;
    WodPicHelper.SMALL_UNIT_HEIGHT = 40;
  };
  return WodPicHelper;
}();
exports.WodPicHelper = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
__s0local0.__initialize_static_members();
