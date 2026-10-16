Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.TextField;
var __s0local2 = createjs.DisplayObject;
var __s0local3 = function () {
  function ButtonHelper() {}
  ButtonHelper.initBasicButton = function (__s5param0, __s5param1 = -1) {
    ButtonHelper.initButton(__s5param0, __s5param1, __dep_exact_84d43d9c404bd4d8.BasicButton);
  };
  ButtonHelper.initTwoStateButton = function (__s7param0, __s7param1 = -1) {
    ButtonHelper.initButton(__s7param0, __s7param1, __dep_exact_84d43d9c404bd4d8_3.TwoStateButton);
  };
  ButtonHelper.initCheckBox = function (__s9param0, __s9param1 = -1) {
    ButtonHelper.initButton(__s9param0, __s9param1, __dep_exact_84d43d9c404bd4d8_1.CheckBoxButton);
  };
  ButtonHelper.initCheckBoxes = function (__s11param0) {
    if (__s11param0 != null) {
      for (var __s11local0 = 0, __s11local1 = __s11param0; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined) {
          ButtonHelper.initButton(__s11local2, -1, __dep_exact_84d43d9c404bd4d8_1.CheckBoxButton);
        }
      }
    }
  };
  ButtonHelper.initSmallButton = function (__s17param0) {
    ButtonHelper.initButton(__s17param0, -1, __dep_exact_84d43d9c404bd4d8_2.SmallButton);
  };
  ButtonHelper.initBasicButtons = function (__s19param0) {
    if (__s19param0 != null) {
      for (var __s19local0 = 0, __s19local1 = __s19param0; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          ButtonHelper.initBasicButton(__s19local2);
        }
      }
    }
  };
  ButtonHelper.initTwoStateButtons = function (__s25param0) {
    if (__s25param0 != null) {
      for (var __s25local0 = 0, __s25local1 = __s25param0; __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined) {
          ButtonHelper.initTwoStateButton(__s25local2);
        }
      }
    }
  };
  ButtonHelper.initSmallButtons = function (__s31param0) {
    if (__s31param0 != null) {
      for (var __s31local0 = 0, __s31local1 = __s31param0; __s31local0 < __s31local1.length; __s31local0++) {
        var __s31local2 = __s31local1[__s31local0];
        if (__s31local2 !== undefined) {
          ButtonHelper.initSmallButton(__s31local2);
        }
      }
    }
  };
  ButtonHelper.initButton = function (__s37param0, __s37param1, __s37param2) {
    if (!!__s37param0 && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s37param0, "BasicButton") && !__s37param0.basicButton) {
      __s37param0.changeTextFieldCacheScale(2);
      if (__s37param0.children.length == 1 && __s37param0.getChildAt(0) instanceof __s0local1 && __dep_exact_7e3e67aee786bc23.isNullOrUndefined(__s37param0.hitArea) && !__s37param0.getChildAt(0).mouseEnabled) {
        console.warn("Register button \"" + __s37param0.name + "\" contains only a TextField. If it is not clickable, then set <TextField>.mouseEnable = true");
      }
      __s37param0.basicButton = new __s37param2(__s37param0, true);
      if (__s37param1 > 0) {
        __s37param0.basicButton.mouseOverScale = __s37param1;
      }
    }
  };
  ButtonHelper.initButtons = function (__s42param0, __s42param1, __s42param2 = -1) {
    if (__s42param0 != null) {
      for (var __s42local0 = 0, __s42local1 = __s42param0; __s42local0 < __s42local1.length; __s42local0++) {
        var __s42local2 = __s42local1[__s42local0];
        if (__s42local2 !== undefined) {
          ButtonHelper.initButton(__s42local2, __s42param2, __s42param1);
        }
      }
    }
  };
  ButtonHelper.hasBasicButton = function (__s48param0) {
    return !!ButtonHelper.getBasicButton(__s48param0);
  };
  ButtonHelper.isButtonEnabled = function (__s50param0) {
    var __s50local0 = ButtonHelper.getBasicButton(__s50param0);
    return !__s50local0 || __s50local0.enabled;
  };
  ButtonHelper.enableButton = function (__s52param0, __s52param1) {
    var __s52local0 = ButtonHelper.getBasicButton(__s52param0);
    if (__s52local0) {
      __s52local0.enableButton = __s52param1;
    }
  };
  ButtonHelper.setButtonSelected = function (__s55param0, __s55param1) {
    var __s55local0 = ButtonHelper.getBasicButton(__s55param0);
    if (__s55local0) {
      __s55local0.selectButton = __s55param1;
      if (!__s55local0.enableButton) {
        __s55param0.doCache();
      }
    }
  };
  ButtonHelper.isButtonSelected = function (__s59param0) {
    var __s59local0 = __dep_exact_81dacdf05bd32292.castAs(ButtonHelper.getBasicButton(__s59param0), "TwoStateButton");
    return !!__s59local0 && __s59local0.isSelected;
  };
  ButtonHelper.delayEnableButton = function (__s61param0, __s61param1, __s61param2 = -1) {
    var __s61local0 = ButtonHelper.getBasicButton(__s61param0);
    if (__s61local0) {
      __s61local0.delayEnableButton(__s61param1, __s61param2);
    }
  };
  ButtonHelper.isEnablingDelayed = function (__s64param0) {
    var __s64local0 = ButtonHelper.getBasicButton(__s64param0);
    return !!__s64local0 && !!__s64local0.enablingIsDelayed;
  };
  ButtonHelper.setMouseOverScale = function (__s66param0, __s66param1 = -1) {
    var __s66local0 = ButtonHelper.getBasicButton(__s66param0);
    if (__s66local0) {
      __s66local0.mouseOverScale = __s66param1 > 0 ? __s66param1 : __dep_exact_84d43d9c404bd4d8.BasicButton.DEFAULT_MOUSEOVER_SCALE;
    }
  };
  ButtonHelper.getBasicButton = function (__s69param0) {
    if (__s69param0 != null && __s69param0 instanceof __s0local2) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s69param0, "BasicButton")) {
        return __s69param0;
      } else if (__s69param0 instanceof __s0local0 && __s69param0.basicButton != null) {
        return __s69param0.basicButton;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  ButtonHelper.resetHoverState = function (__s76param0) {
    var __s76local0 = ButtonHelper.getBasicButton(__s76param0);
    if (__s76local0) {
      __s76local0.resetHoverState();
    }
  };
  return ButtonHelper;
}();
exports.ButtonHelper = __s0local3;
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_84d43d9c404bd4d8_1 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_84d43d9c404bd4d8_2 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_84d43d9c404bd4d8_3 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_7e3e67aee786bc23 = require("gge-module:exact_7e3e67aee786bc23");
