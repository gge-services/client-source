Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function () {
  function CastleCraftingGemFailedAnimation() {}
  CastleCraftingGemFailedAnimation.playAnimation = function (__s5param0, __s5param1 = null) {
    CastleCraftingGemFailedAnimation._gemList = __s5param0.concat([]);
    CastleCraftingGemFailedAnimation.sortList();
    CastleCraftingGemFailedAnimation._callBack = __s5param1;
    CastleCraftingGemFailedAnimation._delay = 0;
    if (CastleCraftingGemFailedAnimation._gemList != null) {
      for (var __s5local0 = 0, __s5local1 = CastleCraftingGemFailedAnimation._gemList; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          CastleCraftingGemFailedAnimation._delay += CastleCraftingGemFailedAnimation._delayStep;
          var __s5local3 = new __dep_exact_81dacdf05bd32292.Timer(CastleCraftingGemFailedAnimation._delay, 1);
          __s5local3.addEventListener(__s0local0.TIMER, CastleCraftingGemFailedAnimation.doAnimation(__s5local3, __s5local2));
          __s5local3.start();
        }
      }
    }
  };
  CastleCraftingGemFailedAnimation.sortList = function () {
    CastleCraftingGemFailedAnimation._gemList.pop();
    CastleCraftingGemFailedAnimation._gemList.reverse();
    var __s11local0 = CastleCraftingGemFailedAnimation._gemList.shift();
    CastleCraftingGemFailedAnimation._gemList[CastleCraftingGemFailedAnimation._gemList.length] = __s11local0;
  };
  CastleCraftingGemFailedAnimation.doAnimation = function (__s13param0, __s13param1) {
    return function callbackHide(__s15param0) {
      if (__s13param1.mc_itemHolder && __s13param1.mc_itemHolder.getChildAt(0)) {
        var __s15local0 = __s13param1.mc_itemHolder.getChildAt(0).getChildAt(1).currentshownDisplayObject;
        CastleCraftingGemFailedAnimation.breakMc(__s15local0);
        CastleCraftingGemFailedAnimation.hideMc(__s15local0);
      }
      __s13param0.removeEventListener(__s0local0.TIMER, CastleCraftingGemFailedAnimation.doAnimation);
      __s13param0 = null;
    };
  };
  CastleCraftingGemFailedAnimation.breakMc = function (__s18param0) {
    if (__s18param0 && __s18param0.mc_broken) {
      __s18param0.mc_broken.visible = true;
    }
  };
  CastleCraftingGemFailedAnimation.hideMc = function (__s21param0) {
    if (__s21param0) {
      __dep_exact_608de47b6498f9b0.TweenMax.to(__s21param0, 0.5, {
        alpha: 0,
        onComplete: CastleCraftingGemFailedAnimation.onAnimationFinished
      });
    } else {
      CastleCraftingGemFailedAnimation.onAnimationFinished();
    }
  };
  CastleCraftingGemFailedAnimation.onAnimationFinished = function () {
    CastleCraftingGemFailedAnimation._delay -= CastleCraftingGemFailedAnimation._delayStep;
    if (CastleCraftingGemFailedAnimation._callBack && CastleCraftingGemFailedAnimation._delay == 0) {
      CastleCraftingGemFailedAnimation._callBack();
    }
  };
  Object.defineProperty(CastleCraftingGemFailedAnimation, "callBack", {
    set: function (__s28param0) {
      CastleCraftingGemFailedAnimation._callBack = __s28param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingGemFailedAnimation._delayStep = 85;
  CastleCraftingGemFailedAnimation._delay = 0;
  return CastleCraftingGemFailedAnimation;
}();
exports.CastleCraftingGemFailedAnimation = __s0local1;
