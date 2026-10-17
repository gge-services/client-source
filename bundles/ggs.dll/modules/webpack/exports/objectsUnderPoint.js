Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Graphics;
var __s0local1 = createjs.Shape;
var __s0local2 = createjs.DisplayObject;
exports.GAME_STAGE = "gamestage";
exports.UI_STAGE = "uiStage";
exports.BG_STAGE = "bgStage";
exports.STATIC_STAGE = "staticStage";
exports.TUTORIAL_STAGE = "tutorialStage";
exports.objectsUnderPoint = function objectsUnderPoint(__s1param0, __s1param1, __s1param2, __s1param3, __s1param4, __s1param5, __s1param6, __s1param7, __s1param8) {
  __s1param7 = __s1param7 || 0;
  __s1param8 = __s1param8 || Date.now();
  var __s1local0 = 1;
  var __s1local1 = 1;
  if (__s1param0.stage) {
    __s1local0 = 1 / __s1param0.stage.scaleX;
    __s1local1 = 1 / __s1param0.stage.scaleY;
  }
  if (!__s1param7 && !__s1param0._testMask(__s1param0, __s1param2, __s1param3)) {
    return null;
  }
  __s1param6 = __s1param6 || __s1param5 && __s1param0._hasMouseEventListener();
  var __s1local2 = __s1param0.children;
  for (var __s1local3 = __s1local2.length - 1; __s1local3 >= 0; __s1local3--) {
    var __s1local4 = __s1local2[__s1local3];
    var __s1local5 = __s1local4.hitArea;
    if (__s1local4.visible && (!__s1param5 || __s1local4.mouseEnabled) && (__s1local5 || __s1local4.isVisible()) && (__s1local5 || __s1param0._testMask(__s1local4, __s1param2, __s1param3))) {
      if (!__s1local5 && __s1local4 instanceof createjs.Container) {
        var __s1local6 = undefined;
        if (__s1param7 > 0) {
          var __s1local7 = __s1local4.getHitTestBounds(__s1param8, __s1param0.stage);
          if (__s1param2 >= __s1local7.x && __s1param2 <= __s1local7.right && __s1param3 >= __s1local7.y && __s1param3 <= __s1local7.y + __s1local7.height) {
            __s1local6 = __s1local4.__getObjectsUnderPoint(__s1param2, __s1param3, __s1param4, __s1param5, __s1param6, __s1param7 + 1, __s1param8);
          }
        } else {
          __s1local6 = __s1local4.__getObjectsUnderPoint(__s1param2, __s1param3, __s1param4, __s1param5, __s1param6, __s1param7 + 1, __s1param8);
        }
        if (!__s1param4 && __s1local6) {
          if (__s1param5 && !__s1param0.mouseChildren) {
            return __s1param0;
          } else {
            return __s1local6;
          }
        }
      } else {
        if (__s1param5 && !__s1param6 && !__s1local4._hasMouseEventListener()) {
          continue;
        }
        if (__s1local4.stage && __s1local4.stage.name === exports.BG_STAGE) {
          if (__s1param5 && !__s1param0.mouseChildren) {
            return __s1param0;
          } else {
            return __s1local4;
          }
        }
        var __s1local8 = __s1local4.width / __s1local4.scaleX;
        var __s1local9 = __s1local4.height / __s1local4.scaleY;
        var __s1local10 = __s1local4.getConcatenatedDisplayProps(__s1local4._props);
        var __s1local11 = __s1local10.matrix;
        if (__s1local5) {
          __s1local11.appendMatrix(__s1local5.getMatrix(__s1local5._props.matrix));
          __s1local10.alpha = __s1local5.alpha;
        }
        __s1local11.scale(__s1local0, __s1local1);
        __s1local11.tx = __s1local11.tx * __s1local0;
        __s1local11.ty = __s1local11.ty * __s1local1;
        if (Math.abs(__s1local11.b) < 0.01 && Math.abs(__s1local11.c) < 0.01) {
          var __s1local12 = __s1local5 || __s1local4;
          var __s1local13 = true;
          var __s1local14 = false;
          if (__s1local12 instanceof __s0local1) {
            for (var __s1local15 = __s1local12.graphics, __s1local16 = 0; __s1local16 < __s1local15.instructions.length; __s1local16++) {
              if (__s1local16 > 20) {
                __s1local13 = false;
                break;
              }
              var __s1local17 = __s1local15.instructions[__s1local16];
              if (__s1local17 instanceof __s0local0.QuadraticCurveTo || __s1local17 instanceof __s0local0.BezierCurveTo) {
                __s1local13 = false;
                break;
              }
            }
            if (__s1local13 && __s1local15.bounds) {
              __s1local8 = __s1local15.bounds.width;
              __s1local9 = __s1local15.bounds.height;
            }
          }
          if (__s1local13) {
            __s1local8 *= Math.abs(__s1local11.a);
            __s1local9 *= Math.abs(__s1local11.d);
            var __s1local18;
            var __s1local19;
            var __s1local20 = __s1local4.customCenterHittestArea !== undefined ? __s1local4.customCenterHittestArea : __s0local2.defaultCenterHittestArea;
            __s1local18 = Math.abs(__s1local11.tx + __s1local8 * 0.5 * Math.sign(__s1local11.a) - __s1param2);
            __s1local19 = Math.abs(__s1local11.ty + __s1local9 * 0.5 * Math.sign(__s1local11.d) - __s1param3);
            __s1local14 = __s1local18 < __s1local8 * __s1local20 && __s1local19 < __s1local9 * __s1local20;
            if (!(__s1local18 < __s1local8 * 0.5) || !(__s1local19 < __s1local9 * 0.5)) {
              continue;
            }
            if (!window.restrictedInteractiveArea && (__s1local4.stage.name === exports.UI_STAGE || __s1local14)) {
              if (__s1param5 && !__s1param0.mouseChildren) {
                return __s1param0;
              } else {
                return __s1local4;
              }
            }
          }
        }
        __s1param1.globalAlpha = __s1local10.alpha;
        __s1param1.setTransform(__s1local11.a, __s1local11.b, __s1local11.c, __s1local11.d, __s1local11.tx - __s1param2, __s1local11.ty - __s1param3);
        (__s1local5 || __s1local4).draw(__s1param1);
        if (!__s1param0._testHit(__s1param1)) {
          continue;
        }
        __s1param1.setTransform(1, 0, 0, 1, 0, 0);
        __s1param1.clearRect(0, 0, 2, 2);
        if (!__s1param4) {
          if (__s1param5 && !__s1param0.mouseChildren) {
            return __s1param0;
          } else {
            return __s1local4;
          }
        }
        __s1param4.push(__s1local4);
      }
    }
  }
  return null;
};
