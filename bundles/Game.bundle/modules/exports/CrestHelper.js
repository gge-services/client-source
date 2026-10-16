Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.ColorFilter;
var __s0local2 = function () {
  function CrestHelper() {}
  CrestHelper.replaceIntoPlaceHolder = function (__s5param0, __s5param1) {
    var __s5local0 = __s5param0.getBounds(__s5param0.parent);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.replaceMovieClip(__s5param0, Library.CastleInterfaceElements.mc_crest);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s5param0, __s5local0.width, __s5local0.height);
    var __s5local1 = __dep_exact_81dacdf05bd32292_1.castAs(__s5param0.getChildAt(0), "MovieClip");
    if (__s5local1) {
      CrestHelper.setCrestGraphics(__s5local1, __s5param1);
    }
  };
  CrestHelper.setCrestGraphics = function (__s8param0, __s8param1, __s8param2 = null, __s8param3 = false) {
    __s8param2 ||= CrestHelper.DEFAULT_SIZE;
    CrestHelper.symbolSize = __s8param2;
    if (__s8param1) {
      if (__s8param3) {
        __s8param0.toolTipText = __s8param1.tooltipText;
        __s8param0.mouseChildren = false;
      }
      switch (__s8param1.backgroundType) {
        case __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN:
          CrestHelper.changeColor(__s8param0, 0, __s8param1.backgroundColor1);
          CrestHelper.changeColor(__s8param0, 1, __s8param1.backgroundColor1);
          CrestHelper.changeColor(__s8param0, 2, __s8param1.backgroundColor1);
          CrestHelper.changeColor(__s8param0, 3, __s8param1.backgroundColor1);
          break;
        case __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_TWO_HORIZONTAL:
          CrestHelper.changeColor(__s8param0, 0, __s8param1.backgroundColor1);
          CrestHelper.changeColor(__s8param0, 1, __s8param1.backgroundColor2);
          CrestHelper.changeColor(__s8param0, 2, __s8param1.backgroundColor1);
          CrestHelper.changeColor(__s8param0, 3, __s8param1.backgroundColor2);
          break;
        case __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_TWO_VERTICAL:
          CrestHelper.changeColor(__s8param0, 0, __s8param1.backgroundColor1);
          CrestHelper.changeColor(__s8param0, 1, __s8param1.backgroundColor1);
          CrestHelper.changeColor(__s8param0, 2, __s8param1.backgroundColor2);
          CrestHelper.changeColor(__s8param0, 3, __s8param1.backgroundColor2);
          break;
        case __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_FOUR_X:
          CrestHelper.changeColor(__s8param0, 0, __s8param1.backgroundColor1);
          CrestHelper.changeColor(__s8param0, 1, __s8param1.backgroundColor2);
          CrestHelper.changeColor(__s8param0, 2, __s8param1.backgroundColor2);
          CrestHelper.changeColor(__s8param0, 3, __s8param1.backgroundColor1);
      }
      __s8param0.symbols.gotoAndStop(__s8param1.symbolPosType + 1);
      var __s8local0;
      for (var __s8local1 = __s8param0.symbols, __s8local2 = [], __s8local3 = 0; __s8local3 < __s8local1.numChildren; __s8local3++) {
        if ((__s8local0 = __s8local1.getChildAt(__s8local3)).name.indexOf("c1") >= 0) {
          __s8local2.push(new Promise(function (__s16param0) {
            CrestHelper.addSymbol(__s8local0, __s8param1.symbolType1, __s8param1.symbolPosType, CrestHelper.getChangeSymbolColorCallback(__s8local0, __s8param1.symbolColor1, __s16param0));
          }));
        } else {
          __s8local2.push(new Promise(function (__s19param0) {
            CrestHelper.addSymbol(__s8local0, __s8param1.symbolType2, __s8param1.symbolPosType, CrestHelper.getChangeSymbolColorCallback(__s8local0, __s8param1.symbolColor2, __s19param0));
          }));
        }
      }
      return Promise.all(__s8local2);
    }
  };
  CrestHelper.getChangeSymbolColorCallback = function (__s21param0, __s21param1, __s21param2 = null) {
    return function (__s23param0) {
      CrestHelper.changeSymbolColor(__s21param0, __s21param1);
      if (__s21param2) {
        __s21param2();
      }
    };
  };
  CrestHelper.addSymbol = function (__s26param0, __s26param1, __s26param2, __s26param3) {
    if (__s26param0 && __s26param1) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s26param0);
      var __s26local0 = __dep_exact_f855840627e6e145.int(CrestHelper.symbolSize[__s26param2][0]);
      var __s26local1 = __dep_exact_f855840627e6e145.int(CrestHelper.symbolSize[__s26param2][1]);
      CrestHelper.getCrestSymbolGraphic(__s26param1, __s26local0, __s26local1, false, __s26param3, 1, null, __s26param0);
    }
  };
  CrestHelper.changeSymbolColor = function (__s29param0, __s29param1) {
    if (__s29param0.cacheCanvas) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s29param0);
      __s29param0.filters = [];
    }
    var __s29local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s29local0.color = __s29param1;
    __s29param0.useFilters([new __s0local1(__s29local0.redMultiplier, __s29local0.greenMultiplier, __s29local0.blueMultiplier, __s29local0.alphaMultiplier, __s29local0.redOffset, __s29local0.greenOffset, __s29local0.blueOffset, __s29local0.alphaOffset)]);
  };
  CrestHelper.changeColor = function (__s32param0, __s32param1, __s32param2) {
    var __s32local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s32local0.color = __s32param2;
    __s32param0.colorChange["cc" + __s32param1].useFilters([new __s0local1(__s32local0.redMultiplier, __s32local0.greenMultiplier, __s32local0.blueMultiplier, __s32local0.alphaMultiplier, __s32local0.redOffset, __s32local0.greenOffset, __s32local0.blueOffset, __s32local0.alphaOffset)]);
  };
  CrestHelper.getPlayerOrFactionCrest = function (__s34param0) {
    if (!__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s34param0.playerID)) {
      switch (__s34param0.factionID) {
        case __dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION:
          return __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO;
        case __dep_exact_26a421b704832cff.FactionConst.RED_FACTION:
          return __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
      }
    }
    return __s34param0.crest;
  };
  CrestHelper.getCrestSymbolGraphic = function (__s38param0, __s38param1, __s38param2, __s38param3 = false, __s38param4 = null, __s38param5 = 1, __s38param6 = null, __s38param7 = null) {
    var __s38local0 = __s38param7 || new __s0local0();
    var __s38local1 = __s38param3 ? "lockedCrest" : __s38param0.graphicClassName;
    var __s38local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s38local1, __s38param0.assetUrl, null, 0, true);
    __s38local2.alpha = __s38param5;
    __s38local0.addChild(__s38local2);
    __s38local0.mouseChildren = false;
    __s38local2.doWhenLoaded(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(__s38param1, __s38param2));
    if (__s38param4) {
      __s38local2.doWhenLoaded(__s38param4);
    }
    return __s38local0;
  };
  CrestHelper.DEFAULT_SIZE = [[0, 0], [120, 120], [70, 100], [100, 60], [50, 50]];
  return CrestHelper;
}();
exports.CrestHelper = __s0local2;
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_ClientConstCrest = require("gge-module:export_ClientConstCrest");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
