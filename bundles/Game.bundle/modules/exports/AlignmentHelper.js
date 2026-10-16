Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function AlignmentHelper() {}
  AlignmentHelper.alignSingleLine = function (__s5param0, __s5param1, __s5param2 = 0) {
    if (__s5param0 != null && __s5param0.length != 0 || AlignmentHelper._validAlignmentTypes.indexOf(__s5param1) == -1) {
      var __s5local0;
      var __s5local1;
      var __s5local2;
      var __s5local3;
      var __s5local4 = NaN;
      var __s5local5 = 0;
      var __s5local6 = [];
      for (var __s5local7 = 0; __s5local7 < __s5param0.length; __s5local7++) {
        if (__s5param0[__s5local7].visible) {
          __s5local6.push(__s5param0[__s5local7]);
        }
      }
      for (__s5param1 != AlignmentHelper.ALIGN_HORIZONTAL_FROM_RIGHT && __s5param1 != AlignmentHelper.ALIGN_VERTICAL_FROM_BOTTOM || (__s5local5 = __dep_exact_f855840627e6e145.int(__s5local6.length - 1)); AlignmentHelper.hasNext(__s5local6, __s5param1, __s5local5);) {
        __s5local0 = __s5local6[__s5local5];
        __s5local1 = __s5local6[__s5local5 = __dep_exact_f855840627e6e145.int(AlignmentHelper.getNextIndex(__s5local6, __s5param1, __s5local5))];
        __s5local2 = __s5local0.getBounds(__s5local0.parent);
        __s5local3 = __s5local1.getBounds(__s5local1.parent);
        if (__s5param1 == AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT) {
          __s5local4 = __s5local1.x - __s5local3.left;
          __s5local1.x = __s5local2.right + __s5param2 + __s5local4;
        } else if (__s5param1 == AlignmentHelper.ALIGN_HORIZONTAL_FROM_RIGHT) {
          __s5local4 = __s5local3.right - __s5local1.x;
          __s5local1.x = __s5local2.left - __s5param2 - __s5local4;
        } else if (__s5param1 == AlignmentHelper.ALIGN_VERTICAL_FROM_TOP) {
          __s5local4 = __s5local1.y - __s5local3.top;
          __s5local1.y = __s5local2.bottom + __s5param2 + __s5local4;
        } else if (__s5param1 == AlignmentHelper.ALIGN_VERTICAL_FROM_BOTTOM) {
          __s5local4 = __s5local3.bottom - __s5local1.y;
          __s5local1.y = __s5local2.top - __s5param2 - __s5local4;
        }
      }
    } else {
      __dep_exact_9e901e8e2483a22f.warn("AligmentHelper.alignSingleLine says: check your params!");
    }
  };
  AlignmentHelper.distributeHorizontally = function (__s18param0, __s18param1, __s18param2) {
    if (__s18param0 != null && !(__s18param0.length < 2)) {
      var __s18local0;
      var __s18local1 = AlignmentHelper.getTotalDispWidth(__s18param0);
      var __s18local2 = __s18param0[0];
      var __s18local3 = __s18local2.getBounds(__s18local2.parent);
      var __s18local4 = (__s18param1.width - __s18local1 - __s18param2 - __s18local3.x) / (__s18param0.length - 1);
      if (__dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.isLanguageWrittenRightToLeft) {
        __s18param0[1].x = __s18param0[0].width + (__s18param1.width - __s18param0[0].width - __s18param0[1].width - __s18param2) - __s18local3.x;
      } else {
        for (var __s18local5 = 1; __s18local5 < __s18param0.length; __s18local5++) {
          __s18local2;
          __s18local0 = __s18local3;
          __s18local3 = (__s18local2 = __s18param0[__s18local5]).getBounds(__s18local2.parent);
          __s18local2.x = __s18local0.right + __s18local4 + (__s18local3.x - __s18local3.left);
        }
      }
    }
  };
  AlignmentHelper.getTotalDispWidth = function (__s25param0) {
    var __s25local0 = 0;
    for (var __s25local1 = 0; __s25local1 < __s25param0.length; __s25local1++) {
      __s25local0 += __s25param0[__s25local1].width;
    }
    return __s25local0;
  };
  AlignmentHelper.getNextIndex = function (__s29param0, __s29param1, __s29param2) {
    if (AlignmentHelper.hasNext(__s29param0, __s29param1, __s29param2)) {
      if (__s29param1 == AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT || __s29param1 == AlignmentHelper.ALIGN_VERTICAL_FROM_TOP) {
        return __s29param2 + 1;
      } else {
        return __s29param2 - 1;
      }
    } else {
      return -1;
    }
  };
  AlignmentHelper.hasNext = function (__s35param0, __s35param1, __s35param2) {
    if (__s35param1 == AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT || __s35param1 == AlignmentHelper.ALIGN_VERTICAL_FROM_TOP) {
      return __s35param2 + 1 >= 0 && __s35param2 + 1 < __s35param0.length;
    } else {
      return __s35param2 - 1 >= 0 && __s35param2 - 1 < __s35param0.length;
    }
  };
  AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT = 0;
  AlignmentHelper.ALIGN_HORIZONTAL_FROM_RIGHT = 1;
  AlignmentHelper.ALIGN_VERTICAL_FROM_TOP = 2;
  AlignmentHelper.ALIGN_VERTICAL_FROM_BOTTOM = 3;
  AlignmentHelper._validAlignmentTypes = [AlignmentHelper.ALIGN_VERTICAL_FROM_BOTTOM, AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT, AlignmentHelper.ALIGN_HORIZONTAL_FROM_RIGHT, AlignmentHelper.ALIGN_VERTICAL_FROM_TOP];
  return AlignmentHelper;
}();
exports.AlignmentHelper = __s0local0;
