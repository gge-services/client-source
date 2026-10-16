Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Bitmap;
var __s0local1 = createjs.Rectangle;
var __s0local2 = createjs.MovieClip;
var __s0local3 = function () {
  function ClipSourceOptimizer() {}
  ClipSourceOptimizer.findFlattenedImageInfo = function (__s5param0, __s5param1) {
    return {
      maxWidth: Math.max(__s5param0.maxWidth, __s5param1.width),
      maxHeight: Math.max(__s5param0.maxHeight, __s5param1.height),
      totalWidth: __s5param0.totalWidth + Math.ceil(__s5param1.width) + 1
    };
  };
  ClipSourceOptimizer.flattenedImagesToBitmaps = function (__s7param0, __s7param1 = 1) {
    if (__s7param0.length === 0) {
      return [];
    }
    var __s7local0;
    var __s7local1 = [];
    if (__s7param0.length === 1) {
      var __s7local2 = __s7param0[0];
      (__s7local0 = new __s0local0(__s7local2.canvas)).sourceRect = new __s0local1(0, 0, __s7local0.width, __s7local0.height);
      __s7local0.x = -__s7local2.registrationPointX;
      __s7local0.y = -__s7local2.registrationPointY;
      __s7local1.push(__s7local0);
    } else {
      var __s7local3 = Math.ceil(__s7param0.length / __s7param1);
      var __s7local4 = [];
      for (; __s7param0.length > 0;) {
        __s7local4.push(__s7param0.splice(0, __s7local3));
      }
      __s7local4.forEach(function (__s14param0) {
        var __s14local0 = __s14param0.reduce(ClipSourceOptimizer.findFlattenedImageInfo, {
          maxWidth: 0,
          maxHeight: 0,
          totalWidth: 0
        });
        __s14local0.maxWidth;
        var __s14local1 = __s14local0.maxHeight;
        var __s14local2 = __s14local0.totalWidth;
        var __s14local3 = document.createElement("canvas");
        __s14local3.height = Math.ceil(__s14local1) + 1;
        __s14local3.width = __s14local2;
        var __s14local4 = __s14local3.getContext("2d");
        var __s14local5 = 0;
        __s14param0.forEach(function (__s16param0) {
          __s14local4.drawImage(__s16param0.canvas, 0, 0, __s16param0.width, __s16param0.height, __s14local5, 0, __s16param0.width, __s16param0.height);
          (__s7local0 = new __s0local0(__s14local3)).sourceRect = new __s0local1(__s14local5, 0, __s16param0.width, __s16param0.height);
          __s7local0.x = -__s16param0.registrationPointX;
          __s7local0.y = -__s16param0.registrationPointY;
          __s7local1.push(__s7local0);
          __s14local5 += Math.ceil(__s16param0.width) + 1;
          __s16param0.dispose();
        });
      });
    }
    return __s7local1;
  };
  ClipSourceOptimizer.maxSublayerMCFramesReducer = function (__s18param0, __s18param1) {
    if (__s18param1 instanceof __s0local2) {
      if (__s18param0 >= __s18param1.totalFrames) {
        return __s18param0;
      } else {
        return __s18param1.totalFrames;
      }
    } else {
      return __s18param0;
    }
  };
  ClipSourceOptimizer.ClipMCToBitmaps = function (__s24param0, __s24param1, __s24param2) {
    var __s24local0;
    var __s24local1 = [];
    if (__s24param1.hasSubLayer) {
      var __s24local2 = __s24param0.subLayerMaxFrame || 0;
      var __s24local3 = undefined;
      if (!__s24local2) {
        __s24param0.subLayerMaxFrame = __s24local2 = __s24param0.children.reduce(ClipSourceOptimizer.maxSublayerMCFramesReducer, __s24local2);
      }
      for (var __s24local4 = 1; __s24local4 < __s24local2 + 1; __s24local4++) {
        for (var __s24local5 = 0; __s24local5 < __s24param0.children.length; __s24local5++) {
          if ((__s24local3 = __s24param0.children[__s24local5]) instanceof __s0local2) {
            __s24local3.gotoAndStop(__s24local4);
          }
        }
        __s24local1.push(__s24param2.call(__s24param1, __s24param0));
      }
    } else {
      __s24local0 = [];
      if (__s24param0.totalFrames === 1 && __s24param0.children.length === 1) {
        var __s24local6 = __s24param0.children[0];
        if (__s24local6 instanceof __s0local0) {
          __s24local0.push(__s24local6.clone());
          return __s24local0;
        }
        if (__s24local6 instanceof __s0local2 && __s24local6.totalFrames === 1 && __s24local6.children.length === 1 && __s24local6.children[0] instanceof __s0local0 && !__s24local6.filters && !__s24local6.mask && __s24local6.scaleX === 1 && __s24local6.scaleY === 1 && !__s24local6.skewX && !__s24local6.skewY && !__s24local6.rotation) {
          var __s24local7 = __s24local6.children[0].clone();
          __s24local7.x += __s24local6.x;
          __s24local7.y += __s24local6.y;
          __s24local0.push(__s24local7);
          return __s24local0;
        }
      }
      var __s24local8 = true;
      for (var __s24local9 = 1; __s24local9 < __s24param0.totalFrames + 1; __s24local9++) {
        __s24param0.gotoAndStop(__s24local9);
        if (__s24local8 && __s24param0.children.length === 1 && __s24param0.children[0] instanceof __s0local0) {
          __s24local0.push(__s24param0.children[0].clone());
        } else {
          __s24local8 = false;
        }
        __s24local1.push(__s24param2.call(__s24param1, __s24param0));
      }
      if (__s24local8) {
        __s24local1.forEach(function (__s42param0) {
          return __s42param0.dispose();
        });
        __s24param0.uncache();
        return __s24local0;
      }
    }
    __s24param0.uncache();
    return ClipSourceOptimizer.flattenedImagesToBitmaps(__s24local1);
  };
  return ClipSourceOptimizer;
}();
exports.ClipSourceOptimizer = __s0local3;
