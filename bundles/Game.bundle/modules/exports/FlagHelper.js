Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.ColorFilter;
var __s0local1 = function () {
  function FlagHelper() {}
  FlagHelper.colorFlag = function (__s5param0, __s5param1, __s5param2 = false) {
    if (__s5param0) {
      if (__s5param0.c3) {
        FlagHelper.fillCrestFlag(__s5param0, __s5param1, __s5param2);
      } else {
        FlagHelper.fillCustomFlag(__s5param0, __s5param1);
      }
      __s5param0.visible = true;
    }
  };
  FlagHelper.fillCustomFlag = function (__s10param0, __s10param1) {
    var __s10local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s10local0.color = __s10param1.backgroundColor1;
    if (__s10param0.c1) {
      __s10param0.c1.useFilters([new __s0local0(__s10local0.redMultiplier, __s10local0.greenMultiplier, __s10local0.blueMultiplier, __s10local0.alphaMultiplier, __s10local0.redOffset, __s10local0.greenOffset, __s10local0.blueOffset, __s10local0.alphaOffset)]);
    }
    if (__s10param1.backgroundType != __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN) {
      __s10local0.color = __s10param1.backgroundColor2;
    }
    if (__s10param0.c2) {
      __s10param0.c2.useFilters([new __s0local0(__s10local0.redMultiplier, __s10local0.greenMultiplier, __s10local0.blueMultiplier, __s10local0.alphaMultiplier, __s10local0.redOffset, __s10local0.greenOffset, __s10local0.blueOffset, __s10local0.alphaOffset)]);
    }
  };
  FlagHelper.fillCrestFlag = function (__s15param0, __s15param1, __s15param2 = false) {
    var __s15local0 = __s15param2;
    if (__s15param0.c1.totalFrames == 1 && __s15param0.parent && __s15param0.parent.scaleX < 0) {
      __s15local0 = true;
    }
    var __s15local1 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s15local1.color = __s15param1.backgroundColor1;
    switch (__s15param1.backgroundType) {
      case 0:
        if (__s15param0.c1) {
          __s15param0.c1.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        if (__s15param0.c2) {
          __s15param0.c2.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        if (__s15param0.c3) {
          __s15param0.c3.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        if (__s15param0.c4) {
          __s15param0.c4.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        break;
      case 1:
        if (__s15local0) {
          __s15local1.color = __s15param1.backgroundColor2;
        }
        if (__s15param0.c1) {
          __s15param0.c1.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        if (__s15param0.c3) {
          __s15param0.c3.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        __s15local1.color = __s15local0 ? __s15param1.backgroundColor1 : __s15param1.backgroundColor2;
        if (__s15param0.c2) {
          __s15param0.c2.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        if (__s15param0.c4) {
          __s15param0.c4.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        break;
      case 2:
        if (__s15param0.c1) {
          __s15param0.c1.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        if (__s15param0.c2) {
          __s15param0.c2.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        __s15local1.color = __s15param1.backgroundColor2;
        if (__s15param0.c3) {
          __s15param0.c3.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        if (__s15param0.c4) {
          __s15param0.c4.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        break;
      case 3:
        if (__s15local0) {
          __s15local1.color = __s15param1.backgroundColor2;
        }
        if (__s15param0.c1) {
          __s15param0.c1.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        if (__s15param0.c4) {
          __s15param0.c4.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        __s15local1.color = __s15local0 ? __s15param1.backgroundColor1 : __s15param1.backgroundColor2;
        if (__s15param0.c2) {
          __s15param0.c2.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
        if (__s15param0.c3) {
          __s15param0.c3.useFilters([new __s0local0(__s15local1.redMultiplier, __s15local1.greenMultiplier, __s15local1.blueMultiplier, __s15local1.alphaMultiplier, __s15local1.redOffset, __s15local1.greenOffset, __s15local1.blueOffset, __s15local1.alphaOffset)]);
        }
    }
  };
  return FlagHelper;
}();
exports.FlagHelper = __s0local1;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCrest = require("gge-module:export_ClientConstCrest");
