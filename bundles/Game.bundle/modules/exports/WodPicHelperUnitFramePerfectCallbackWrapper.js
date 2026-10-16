Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function WodPicHelperUnitFramePerfectCallbackWrapper() {}
  WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic = function (__s5param0, __s5param1, __s5param2) {
    return WodPicHelperUnitFramePerfectCallbackWrapper.callback(__s5param0, __s5param1, __s5param2, false, true, 3);
  };
  WodPicHelperUnitFramePerfectCallbackWrapper.callback = function (__s7param0, __s7param1, __s7param2, __s7param3 = false, __s7param4 = false, __s7param5 = 0, __s7param6 = false) {
    if (__s7param0) {
      return function (__s10param0) {
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s10param0, "CastleGoodgameExternalClip") && (__dep_exact_81dacdf05bd32292.instanceOfClass(__s7param0, "SoldierUnitVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s7param0, "UnknownUnitVO") && __s7param0.type != "Tools")) {
          var __s10local0 = __s10param0;
          var __s10local1 = __s10param0.parent.getChildAt(1);
          if (__s7param6) {
            var __s10local2 = new __s0local0(__s10local0.width, __s10local0.height);
            var __s10local3 = __s10local0.getBounds(__s10local0);
            var __s10local4 = __s10local2.subtract(__s10local3.topLeft.add(__s10local2));
            var __s10local5 = __s10local0.scaleX;
            __s10local0.scaleX = __s10local0.scaleY = Math.min(1, Math.min(__s10local0._cacheScale, __s10local0.height / __s10local4.y));
            var __s10local6 = __s10local0.scaleX / __s10local5;
            __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s10local0, __s7param1 * __s10local6, __s7param2 * __s10local6);
            if (__s10local1) {
              __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s10local1, __s10local1.width * __s10local6, __s10local1.height * __s10local6);
            }
          }
          if (__s10local0) {
            if (__s7param3) {
              var __s10local7 = __s10local0.x - (__s7param1 - __s10local0.width) / 2;
              __s10local0.x = -(__s7param1 - __s10local0.width) / 2;
              if (__s10local1) {
                __s10local1.x = -__s10local7;
              }
            } else {
              if (__s10local1) {
                __s10local1.x = -__s10local0.x;
              }
              __s10local0.x = 0;
            }
            if (__s7param4) {
              var __s10local8 = __s10local0.getBounds();
              var __s10local9 = __s10local0.y - Math.round(__s10local8.bottom * __s10local0.scaleY);
              __s10local0.y = -Math.round(__s10local8.bottom * __s10local0.scaleY);
              if (__s10local1) {
                __s10local1.y = -__s10local9;
              }
            } else {
              if (__s10local1) {
                __s10local1.y = -__s10local0.y;
              }
              __s10local0.y = 0;
            }
          }
        } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s10param0, "DisplayObject")) {
          __s10param0.x = -Math.round(__s7param1 / 2) + __s7param5;
          __s10param0.y = -Math.round(__s7param2 / 2) + __s7param5;
        }
      };
    } else {
      return null;
    }
  };
  return WodPicHelperUnitFramePerfectCallbackWrapper;
}();
exports.WodPicHelperUnitFramePerfectCallbackWrapper = __s0local1;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
