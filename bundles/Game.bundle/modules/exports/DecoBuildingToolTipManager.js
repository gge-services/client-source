Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function DecoBuildingToolTipManager() {}
  Object.defineProperty(DecoBuildingToolTipManager, "iconTime", {
    get: function () {
      DecoBuildingToolTipManager._iconTime ||= new Library.CastleInterfaceElements_Icons.Icon_Time();
      return DecoBuildingToolTipManager._iconTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoBuildingToolTipManager, "iconMight", {
    get: function () {
      DecoBuildingToolTipManager._iconMight ||= new Library.CastleInterfaceElements.Icon_Might_starOnly();
      return DecoBuildingToolTipManager._iconMight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoBuildingToolTipManager, "iconPublicOrder", {
    get: function () {
      DecoBuildingToolTipManager._iconPublicOrder ||= new Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big();
      return DecoBuildingToolTipManager._iconPublicOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoBuildingToolTipManager, "iconMorale", {
    get: function () {
      DecoBuildingToolTipManager._iconMorale ||= new Library.CastleInterfaceElements.Icon_Morality();
      return DecoBuildingToolTipManager._iconMorale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoBuildingToolTipManager, "iconFusionLevel", {
    get: function () {
      DecoBuildingToolTipManager._iconFusionLevel ||= new Library.CastleInterfaceElements_Icons.Icon_Fusion_Level();
      return DecoBuildingToolTipManager._iconFusionLevel;
    },
    enumerable: true,
    configurable: true
  });
  DecoBuildingToolTipManager.showToolTip = function (__s15param0, __s15param1, __s15param2 = 0, __s15param3 = 0) {
    var __s15local0 = DecoBuildingToolTipManager.numShownItems(__s15param1) > 4 ? DecoBuildingToolTipManager.clipNameTwoRows : DecoBuildingToolTipManager.clipNameOneRow;
    if (!DecoBuildingToolTipManager._clip || !DecoBuildingToolTipManager._clip.isLoaded || DecoBuildingToolTipManager.loadedClipName != __s15local0) {
      if (!DecoBuildingToolTipManager._clip || DecoBuildingToolTipManager.loadedClipName != __s15local0) {
        DecoBuildingToolTipManager._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s15local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(DecoBuildingToolTipManager.assetName));
      }
      DecoBuildingToolTipManager.loadedClipName = __s15local0;
      DecoBuildingToolTipManager._clip.doWhenLoaded(function () {
        DecoBuildingToolTipManager.showToolTip(__s15param0, __s15param1, __s15param2, __s15param3);
      });
      return;
    }
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(DecoBuildingToolTipManager.mc);
    DecoBuildingToolTipManager.mc.addChild(DecoBuildingToolTipManager._clip.currentshownDisplayObject);
    if (__s15param1) {
      DecoBuildingToolTipManager.disp.visible = true;
      DecoBuildingToolTipManager.textFieldManager.registerTextField(DecoBuildingToolTipManager.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s15param1.getNameString())).autoFitToBounds = true;
      DecoBuildingToolTipManager.textFieldManager.registerTextField(DecoBuildingToolTipManager.disp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s15param1.getShortInfoString())).autoFitToBounds = true;
      var __s15local1 = __s15param1;
      var __s15local2 = __s15local1 && __s15local1.fusionInfoVO;
      DecoBuildingToolTipManager.disp.icon_fusion_target.visible = __s15local2 && __s15local1.fusionInfoVO.isFusionTarget;
      DecoBuildingToolTipManager.disp.icon_fusion_source.visible = __s15local2 && __s15local1.fusionInfoVO.isFusionSource;
      DecoBuildingToolTipManager.disp.icon_unique_deco.visible = __s15local2 && __s15local1.isUnique();
      DecoBuildingToolTipManager.disp.icon_effect.visible = __dep_exact_81dacdf05bd32292.instanceOfClass(__s15param1, "DecoBuildingVO") && __s15param1.allShowableBuildingEffects && __s15param1.allShowableBuildingEffects.length > 0;
      DecoBuildingToolTipManager.disp.mc_relic.visible = __s15param1.isRelicBuilding;
      var __s15local3 = 0;
      if (DecoBuildingToolTipManager.isShowingFusionLevel(__s15param1)) {
        DecoBuildingToolTipManager.handleFusionLevel(DecoBuildingToolTipManager.disp["i" + __s15local3], __s15param1);
        __s15local3++;
      }
      if (DecoBuildingToolTipManager.isShowingMoralePublicOrder(__s15param1)) {
        DecoBuildingToolTipManager.handleMoralePublicOrder(DecoBuildingToolTipManager.disp["i" + __s15local3], __s15param1);
        __s15local3++;
      }
      if (DecoBuildingToolTipManager.isShowingMight(__s15param1)) {
        DecoBuildingToolTipManager.handleMightValue(DecoBuildingToolTipManager.disp["i" + __s15local3], __s15param1);
        __s15local3++;
      }
      if (DecoBuildingToolTipManager.isShowingBuildingTime(__s15param1)) {
        DecoBuildingToolTipManager.handleBuildingTime(DecoBuildingToolTipManager.disp["i" + __s15local3], __s15param1);
        __s15local3++;
      }
      __s15param1.allShowableBuildingEffects.forEach(function (__s26param0) {
        var __s26local0 = __s26param0.effect.effectType.type.simpleEffectIconClass;
        DecoBuildingToolTipManager.handleEffect(DecoBuildingToolTipManager.disp["i" + __s15local3], __s26local0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s26param0.effect.effectType.type.simpleValueTextID, __s26param0.effectValue.textReplacements));
        __s15local3++;
      });
      for (; __s15local3 < 8; __s15local3++) {
        if (DecoBuildingToolTipManager.disp["i" + __s15local3]) {
          DecoBuildingToolTipManager.disp["i" + __s15local3].visible = false;
        }
      }
      DecoBuildingToolTipManager.positionDisp(__s15param0, __s15param2, __s15param3);
    }
  };
  DecoBuildingToolTipManager.handleEffect = function (__s31param0, __s31param1, __s31param2) {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.replaceMovieClip(__s31param0.icon_placeholder, __s31param1);
    if (__s31param0.icon_placeholder.getChildAt(0)) {
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.scaleToFit(__s31param0.icon_placeholder.getChildAt(0), DecoBuildingToolTipManager.MAX_ICON_HEIGHT, DecoBuildingToolTipManager.MAX_ICON_HEIGHT);
    }
    DecoBuildingToolTipManager.textFieldManager.registerTextField(__s31param0.txt_text, __s31param2);
    __s31param0.visible = true;
  };
  DecoBuildingToolTipManager.handleBuildingTime = function (__s34param0, __s34param1) {
    var __s34local0 = __s34param1.getEstimatedBuildDuration();
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s34param0.icon_placeholder);
    if (DecoBuildingToolTipManager.iconTime.height > DecoBuildingToolTipManager.MAX_ICON_HEIGHT || DecoBuildingToolTipManager.iconTime.height < DecoBuildingToolTipManager.MAX_ICON_HEIGHT - 2) {
      DecoBuildingToolTipManager.iconTime.scaleX = DecoBuildingToolTipManager.iconTime.scaleY = DecoBuildingToolTipManager.MAX_ICON_HEIGHT / DecoBuildingToolTipManager.iconTime.height;
    }
    __s34param0.icon_placeholder.addChild(DecoBuildingToolTipManager.iconTime);
    DecoBuildingToolTipManager.textFieldManager.registerTextField(__s34param0.txt_text, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getShortTimeStringBySeconds(__s34local0)));
    __s34param0.visible = true;
  };
  DecoBuildingToolTipManager.isShowingBuildingTime = function (__s37param0) {
    return __s37param0.getEstimatedBuildDuration() > 0 && __s37param0.shopCategory != __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_NOT_IN_SHOP && !__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isDecoInStorage(__s37param0);
  };
  DecoBuildingToolTipManager.handleMightValue = function (__s39param0, __s39param1) {
    var __s39local0 = __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(__s39param1, "AEffectBuildingVO") ? __s39param1.mightValue : 0);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s39param0.icon_placeholder);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.scaleToFit(DecoBuildingToolTipManager.iconMight, DecoBuildingToolTipManager.MAX_ICON_HEIGHT, DecoBuildingToolTipManager.MAX_ICON_HEIGHT);
    __s39param0.icon_placeholder.addChild(DecoBuildingToolTipManager.iconMight);
    DecoBuildingToolTipManager.textFieldManager.registerTextField(__s39param0.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s39local0));
    __s39param0.visible = true;
  };
  DecoBuildingToolTipManager.isShowingMight = function (__s41param0) {
    return __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(__s41param0, "AEffectBuildingVO") ? __s41param0.mightValue : 0) > 0;
  };
  DecoBuildingToolTipManager.handleMoralePublicOrder = function (__s43param0, __s43param1) {
    var __s43local0 = __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(__s43param1, "AEffectBuildingVO") ? __s43param1.morality : 0);
    var __s43local1 = __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(__s43param1, "AEffectBuildingVO") ? __s43param1.decoPoints : 0);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s43param0.icon_placeholder);
    var __s43local2 = __s43local0 != 0 ? DecoBuildingToolTipManager.iconMorale : DecoBuildingToolTipManager.iconPublicOrder;
    if (__s43local2.height > DecoBuildingToolTipManager.MAX_ICON_HEIGHT || __s43local2.height < DecoBuildingToolTipManager.MAX_ICON_HEIGHT - 2) {
      __s43local2.scaleX = __s43local2.scaleY = DecoBuildingToolTipManager.MAX_ICON_HEIGHT / __s43local2.height;
    }
    __s43param0.icon_placeholder.addChild(__s43local2);
    DecoBuildingToolTipManager.textFieldManager.registerTextField(__s43param0.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s43local0 != 0 ? __s43local0 : __s43local1));
    __s43param0.visible = true;
  };
  DecoBuildingToolTipManager.isShowingMoralePublicOrder = function (__s46param0) {
    var __s46local0 = __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(__s46param0, "AEffectBuildingVO") ? __s46param0.morality : 0);
    var __s46local1 = __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(__s46param0, "AEffectBuildingVO") ? __s46param0.decoPoints : 0);
    return __s46local0 != 0 || __s46local1 != 0;
  };
  DecoBuildingToolTipManager.handleFusionLevel = function (__s48param0, __s48param1) {
    var __s48local0 = __s48param1;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s48param0.icon_placeholder);
    if (DecoBuildingToolTipManager.iconFusionLevel.height > DecoBuildingToolTipManager.MAX_ICON_HEIGHT || DecoBuildingToolTipManager.iconFusionLevel.height < DecoBuildingToolTipManager.MAX_ICON_HEIGHT - 2) {
      DecoBuildingToolTipManager.iconFusionLevel.scaleX = DecoBuildingToolTipManager.iconFusionLevel.scaleY = DecoBuildingToolTipManager.MAX_ICON_HEIGHT / DecoBuildingToolTipManager.iconFusionLevel.height;
    }
    __s48param0.icon_placeholder.addChild(DecoBuildingToolTipManager.iconFusionLevel);
    var __s48local1 = __dep_exact_f855840627e6e145.int(__s48local0.fusionInfoVO.getCurrentLevel());
    DecoBuildingToolTipManager.textFieldManager.registerTextField(__s48param0.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s48local1));
    __s48param0.visible = true;
  };
  DecoBuildingToolTipManager.isShowingFusionLevel = function (__s51param0) {
    var __s51local0 = __s51param0;
    return __s51param0 && __dep_exact_81dacdf05bd32292.instanceOfClass(__s51local0, "ADecoBuildingVO") && __s51local0.isFusionRelevant() && (__s51local0.fusionInfoVO.isFusionSource || __s51local0.fusionInfoVO.isFusionTarget);
  };
  DecoBuildingToolTipManager.numShownItems = function (__s53param0) {
    var __s53local0 = 0;
    if (DecoBuildingToolTipManager.isShowingBuildingTime(__s53param0)) {
      __s53local0++;
    }
    if (DecoBuildingToolTipManager.isShowingFusionLevel(__s53param0)) {
      __s53local0++;
    }
    if (DecoBuildingToolTipManager.isShowingMoralePublicOrder(__s53param0)) {
      __s53local0++;
    }
    if (DecoBuildingToolTipManager.isShowingMight(__s53param0)) {
      __s53local0++;
    }
    return __s53local0 += __s53param0.allShowableBuildingEffects ? __s53param0.allShowableBuildingEffects.length : 0;
  };
  DecoBuildingToolTipManager.positionDisp = function (__s59param0, __s59param1 = 0, __s59param2 = 0) {
    var __s59local0 = __s59param0.localToGlobal(new __s0local1(0, 0));
    var __s59local1 = __dep_exact_f855840627e6e145.int(__s59local0.x + __s59param1);
    var __s59local2 = __dep_exact_f855840627e6e145.int(Math.max(DecoBuildingToolTipManager.disp.height, __s59local0.y) - __s59param0.height / 2 + __s59param2);
    if (__s59local2 - DecoBuildingToolTipManager.disp.height < 0) {
      __s59local2 = __dep_exact_f855840627e6e145.int(Math.max(DecoBuildingToolTipManager.disp.height, __s59local0.y) + __s59param0.height / 2 - __s59param2 + DecoBuildingToolTipManager.disp.height);
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall() && __dep_exact_81dacdf05bd32292.MobileHelper.isLandscape()) {
        var __s59local3 = DecoBuildingToolTipManager.disp.stage.stageHeight - __s59local2;
        if (__s59local3 < 0) {
          __s59local2 += __s59local3;
        }
      }
      DecoBuildingToolTipManager.disp.arrow_down.visible = false;
      DecoBuildingToolTipManager.disp.arrow_up.visible = true;
    } else {
      DecoBuildingToolTipManager.disp.arrow_down.visible = true;
      DecoBuildingToolTipManager.disp.arrow_up.visible = false;
    }
    if (__s59local1 - DecoBuildingToolTipManager.disp.width / 2 < 0) {
      __s59local1 = __dep_exact_f855840627e6e145.int(__s59local1 - (__s59local1 - DecoBuildingToolTipManager.disp.width / 2));
    }
    DecoBuildingToolTipManager.disp.x = __s59local1;
    DecoBuildingToolTipManager.disp.y = __s59local2;
    DecoBuildingToolTipManager.disp.mouseChildren = false;
    DecoBuildingToolTipManager.initDisp.visible = true;
    DecoBuildingToolTipManager.disp.visible = true;
  };
  Object.defineProperty(DecoBuildingToolTipManager, "disp", {
    get: function () {
      if (DecoBuildingToolTipManager._clip && DecoBuildingToolTipManager._clip.currentshownDisplayObject) {
        return DecoBuildingToolTipManager._clip.currentshownDisplayObject;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoBuildingToolTipManager, "initDisp", {
    get: function () {
      DecoBuildingToolTipManager.mc ||= new __s0local0();
      return DecoBuildingToolTipManager.mc;
    },
    enumerable: true,
    configurable: true
  });
  DecoBuildingToolTipManager.hideToolTip = function () {
    if (DecoBuildingToolTipManager.disp) {
      DecoBuildingToolTipManager.disp.visible = false;
    }
    if (DecoBuildingToolTipManager.initDisp) {
      DecoBuildingToolTipManager.initDisp.visible = false;
    }
  };
  Object.defineProperty(DecoBuildingToolTipManager, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  DecoBuildingToolTipManager.assetName = "CastleBuildingToolTip1";
  DecoBuildingToolTipManager.clipNameOneRow = "CastleBuildingToolTip_OneRow";
  DecoBuildingToolTipManager.clipNameTwoRows = "CastleBuildingToolTip_TwoRows";
  DecoBuildingToolTipManager.MAX_ICON_HEIGHT = 30;
  DecoBuildingToolTipManager.loadedClipName = "";
  return DecoBuildingToolTipManager;
}();
exports.DecoBuildingToolTipManager = __s0local2;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
