Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicButton = require("gge-module:class_BasicButton");
var __dep_class_TwoStateButton = require("gge-module:class_TwoStateButton");
var __dep_class_CheckBoxButton = require("gge-module:class_CheckBoxButton");
var __dep_class_SmallButton = require("gge-module:class_SmallButton");
var __s0local0 = createjs.DisplayObject;
var __s0local1 = createjs.MovieClip;
var __s0local2 = function () {
  function ButtonHelper() {}
  ButtonHelper.initBasicButton = function (__s5param0, __s5param1 = -1) {
    ButtonHelper.initButton(__s5param0, __s5param1, __dep_class_BasicButton.BasicButton);
  };
  ButtonHelper.initTwoStateButton = function (__s7param0, __s7param1 = -1) {
    ButtonHelper.initButton(__s7param0, __s7param1, __dep_class_TwoStateButton.TwoStateButton);
  };
  ButtonHelper.initCheckBox = function (__s9param0, __s9param1 = -1) {
    ButtonHelper.initButton(__s9param0, __s9param1, __dep_class_CheckBoxButton.CheckBoxButton);
  };
  ButtonHelper.initCheckBoxes = function (__s11param0) {
    for (var __s11local0 = 0, __s11local1 = __s11param0; __s11local0 < __s11local1.length; __s11local0++) {
      var __s11local2 = __s11local1[__s11local0];
      ButtonHelper.initButton(__s11local2, -1, __dep_class_CheckBoxButton.CheckBoxButton);
    }
  };
  ButtonHelper.initSmallButton = function (__s15param0) {
    ButtonHelper.initButton(__s15param0, -1, __dep_class_SmallButton.SmallButton);
  };
  ButtonHelper.initBasicButtons = function (__s17param0) {
    for (var __s17local0 = 0, __s17local1 = __s17param0; __s17local0 < __s17local1.length; __s17local0++) {
      var __s17local2 = __s17local1[__s17local0];
      ButtonHelper.initBasicButton(__s17local2);
    }
  };
  ButtonHelper.initTwoStateButtons = function (__s21param0) {
    for (var __s21local0 = 0, __s21local1 = __s21param0; __s21local0 < __s21local1.length; __s21local0++) {
      var __s21local2 = __s21local1[__s21local0];
      ButtonHelper.initTwoStateButton(__s21local2);
    }
  };
  ButtonHelper.initSmallButtons = function (__s25param0) {
    for (var __s25local0 = 0, __s25local1 = __s25param0; __s25local0 < __s25local1.length; __s25local0++) {
      var __s25local2 = __s25local1[__s25local0];
      ButtonHelper.initSmallButton(__s25local2);
    }
  };
  ButtonHelper.initButton = function (__s29param0, __s29param1, __s29param2) {
    if (!!__s29param0 && !(__s29param0 instanceof __dep_class_BasicButton.BasicButton) && !__s29param0.basicButton) {
      __s29param0.basicButton = new __s29param2(__s29param0, true);
      if (__s29param1 > 0) {
        __s29param0.basicButton.mouseOverScale = __s29param1;
      }
    }
  };
  ButtonHelper.initButtons = function (__s33param0, __s33param1, __s33param2 = -1) {
    for (var __s33local0 = 0, __s33local1 = __s33param0; __s33local0 < __s33local1.length; __s33local0++) {
      var __s33local2 = __s33local1[__s33local0];
      ButtonHelper.initButton(__s33local2, __s33param2, __s33param1);
    }
  };
  ButtonHelper.hasBasicButton = function (__s37param0) {
    return !!ButtonHelper.getBasicButton(__s37param0);
  };
  ButtonHelper.isButtonEnabled = function (__s39param0) {
    var __s39local0 = ButtonHelper.getBasicButton(__s39param0);
    return !__s39local0 || __s39local0.enabled;
  };
  ButtonHelper.enableButton = function (__s41param0, __s41param1) {
    var __s41local0 = ButtonHelper.getBasicButton(__s41param0);
    if (__s41local0) {
      __s41local0.enableButton = __s41param1;
    }
  };
  ButtonHelper.setButtonSelected = function (__s44param0, __s44param1) {
    var __s44local0 = ButtonHelper.getBasicButton(__s44param0);
    if (__s44local0) {
      __s44local0.selectButton = __s44param1;
    }
  };
  ButtonHelper.isButtonSelected = function (__s47param0) {
    var __s47local0 = ButtonHelper.getBasicButton(__s47param0);
    return !!__s47local0 && __s47local0.isSelected;
  };
  ButtonHelper.delayEnableButton = function (__s49param0, __s49param1, __s49param2 = -1) {
    var __s49local0 = ButtonHelper.getBasicButton(__s49param0);
    if (__s49local0) {
      __s49local0.delayEnableButton(__s49param1, __s49param2);
    }
  };
  ButtonHelper.isEnablingDelayed = function (__s52param0) {
    var __s52local0 = ButtonHelper.getBasicButton(__s52param0);
    return !!__s52local0 && !!__s52local0.enablingIsDelayed;
  };
  ButtonHelper.setMouseOverScale = function (__s54param0, __s54param1 = -1) {
    var __s54local0 = ButtonHelper.getBasicButton(__s54param0);
    if (__s54local0) {
      __s54local0.mouseOverScale = __s54param1 > 0 ? __s54param1 : __dep_class_BasicButton.BasicButton.DEFAULT_MOUSEOVER_SCALE;
    }
  };
  ButtonHelper.getBasicButton = function (__s57param0) {
    if (__s57param0 != null && __s57param0 instanceof __s0local0) {
      if (__s57param0 instanceof __dep_class_BasicButton.BasicButton) {
        return __s57param0;
      } else if (__s57param0 instanceof __s0local1 && __s57param0.basicButton != null) {
        return __s57param0.basicButton;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  return ButtonHelper;
}();
exports.ButtonHelper = __s0local2;
