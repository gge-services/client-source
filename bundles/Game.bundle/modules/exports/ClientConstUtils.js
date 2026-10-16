Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstUtils() {}
  ClientConstUtils.capitalizeFirstLetter = function (__s5param0, __s5param1 = true) {
    var __s5local0 = __s5param0.substr(0, 1);
    var __s5local1 = __s5param0.substr(1, __s5param0.length);
    if (__s5param1) {
      __s5local1.toLowerCase();
    }
    return __s5local0.toUpperCase() + __s5local1;
  };
  ClientConstUtils.lowercaseFirstLetter = function (__s8param0) {
    var __s8local0 = __s8param0.substr(0, 1);
    var __s8local1 = __s8param0.substr(1, __s8param0.length);
    return __s8local0.toLowerCase() + __s8local1;
  };
  ClientConstUtils.getTrimmedText = function (__s10param0) {
    return __s10param0.replace(/^\s+|\s+$/g, "");
  };
  ClientConstUtils.filterBBCodesFromText = function (__s12param0) {
    for (var __s12local0 = [/\[i](.*?)\[\/i]/gi, /\[u](.*?)\[\/u]/gi, /\[url=.*?](.*?)\[\/url]/gi, /\[color=.*?](.*?)\[\/color]/gi, /\[size=.*?](.*?)\[\/size]/gi, /\[font=.*?](.*?)\[\/font]/gi], __s12local1 = 0; __s12local1 < __s12local0.length; __s12local1++) {
      __s12param0 = __s12param0.replace(__s12local0[__s12local1], "$1");
    }
    return __s12param0;
  };
  ClientConstUtils.getSuffixNumberFromString = function (__s16param0) {
    if (__s16param0 == null || __s16param0 == "") {
      return -1;
    }
    var __s16local0 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var __s16local1 = "";
    for (var __s16local2 = __dep_exact_f855840627e6e145.int(__s16param0.length - 1); __s16local2 >= 0; --__s16local2) {
      var __s16local3 = __s16param0.charAt(__s16local2);
      if (!(__s16local0.indexOf(__s16local3) >= 0)) {
        break;
      }
      __s16local1 = __s16local3 + __s16local1;
    }
    if (__s16local1.length <= 0) {
      return -1;
    } else {
      return parseInt(__s16local1);
    }
  };
  ClientConstUtils.isMuslim = function () {
    return ["tr", "ar"].indexOf(__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.currentCountryLanguageCode) >= 0;
  };
  Object.defineProperty(ClientConstUtils, "isTlfMode", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.currentCountryLanguageCode == "ar";
    },
    enumerable: true,
    configurable: true
  });
  ClientConstUtils.chooseSingularOrPluralTextID = function (__s28param0, __s28param1, __s28param2) {
    if (__s28param0 > 1) {
      return __s28param2;
    } else {
      return __s28param1;
    }
  };
  ClientConstUtils.getClassFromObject = function (__s32param0) {
    var __s32local0 = __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s32param0);
    if (ClientConstUtils.CREATEJS_CLASS.indexOf(__s32local0) >= 0) {
      return createjs[__s32local0];
    } else {
      return __dep_exact_81dacdf05bd32292.getDefinitionByName(__s32local0);
    }
  };
  ClientConstUtils.isObjectClassOf = function (__s36param0, __s36param1) {
    if (__s36param1 != null) {
      for (var __s36local0 = 0, __s36local1 = __s36param1; __s36local0 < __s36local1.length; __s36local0++) {
        var __s36local2 = __s36local1[__s36local0];
        if (__s36local2 !== undefined && __s36param0 instanceof __s36local2) {
          return true;
        }
      }
    }
    return false;
  };
  ClientConstUtils.checkClassForType = function (__s42param0, __s42param1) {
    return __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s42param0.prototype, __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s42param1));
  };
  ClientConstUtils.getBooleanFromString = function (__s44param0) {
    return __s44param0.toLowerCase() == "true" || __s44param0 != "0";
  };
  ClientConstUtils.getValueOrDefaultFromArray = function (__s46param0, __s46param1, __s46param2) {
    if (__s46param0 && __s46param1 < __s46param0.length) {
      return __s46param0[__s46param1];
    } else {
      return __s46param2;
    }
  };
  ClientConstUtils.getNameFromClass = function (__s50param0) {
    if (__s50param0 == null) {
      return "null";
    }
    var __s50local0 = __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s50param0);
    return __s50local0 = __s50local0.substr(__s50local0.lastIndexOf(":") + 1);
  };
  ClientConstUtils.getScaleFactorForFitInBounds = function (__s53param0, __s53param1) {
    if (__s53param1.y - __s53param0.y < __s53param1.x - __s53param0.x) {
      return __s53param1.y / __s53param0.y;
    } else {
      return __s53param1.x / __s53param0.x;
    }
  };
  ClientConstUtils.getScaleFactor = function (__s57param0, __s57param1) {
    return __s57param1 / __s57param0;
  };
  ClientConstUtils.getRandomInt = function (__s59param0, __s59param1) {
    return Math.floor(__s59param0 + Math.random() * (__s59param1 - __s59param0 + 1));
  };
  ClientConstUtils.getRandomFloat = function (__s61param0, __s61param1) {
    return __s61param0 + Math.random() * (__s61param1 - __s61param0);
  };
  ClientConstUtils.distanceSquared = function (__s63param0, __s63param1) {
    return (__s63param0.x - __s63param1.x) * (__s63param0.x - __s63param1.x) + (__s63param0.y - __s63param1.y) * (__s63param0.y - __s63param1.y);
  };
  ClientConstUtils.map2String = function (__s65param0) {
    var __s65local0 = "{";
    for (var __s65local1 = 0, __s65local2 = Array.from(__s65param0.keys()); __s65local1 < __s65local2.length; __s65local1++) {
      var __s65local3 = __s65local2[__s65local1];
      __s65local0 += __s65local3 + "=" + __s65param0.get(__s65local3) + ", ";
    }
    __s65local0 = __s65local0.substr(0, __s65local0.length - 2);
    return __s65local0 += "}";
  };
  ClientConstUtils.MAX_INT = 2147483647;
  ClientConstUtils.MAX_EMAIL_CHARS = 254;
  ClientConstUtils.CREATEJS_CLASS = ["Container", "MovieClip", "TextField", "Shape", "DisplayObject"];
  return ClientConstUtils;
}();
exports.ClientConstUtils = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
