var __s0local0;
var __s0local1;
var __s0local2;
__s0local1 = [require("gge-module:opaque_5c61709ecb7732e44481babe"), require("gge-module:exact_f70a9f50ff0ced05")];
if ((__s0local2 = typeof (__s0local0 = function (__s1param0) {
  function __s1local0(__s3param0, __s3param1) {
    return __s3param0 = __s3param0.replace(/{[0-9a-zA-Z-_. ]+}/g, function (__s5param0) {
      __s5param0 = __s5param0.replace(/^{([^}]*)}$/, "$1");
      if (typeof (__s5local0 = __s3param1[__s5param0]) == "string") {
        return __s5local0;
      } else if (typeof __s5local0 == "number") {
        return "" + __s5local0;
      } else {
        return JSON.stringify(__s5local0);
      }
      var __s5local0;
    });
  }
  function __s1local1() {
    var __s10local0 = arguments[0];
    var __s10local1 = [].slice.call(arguments, 1);
    __s10local1.forEach(function (__s12param0) {
      var __s12local0;
      for (__s12local0 in __s12param0) {
        __s10local0[__s12local0] = __s12param0[__s12local0];
      }
    });
    return __s10local0;
  }
  function __s1local2(__s16param0, __s16param1, __s16param2) {
    var __s16local0;
    __s16param1 = __s16param0 + (__s16param1 ? ": " + __s1local0(__s16param1, __s16param2) : "");
    (__s16local0 = new Error(__s16param1)).code = __s16param0;
    __s1local1(__s16local0, __s16param2);
    return __s16local0;
  }
  function __s1local3(__s18param0, __s18param1, __s18param2) {
    if (__s18param0.length && __s18param0[__s18param0.length - 1].type === __s18param1) {
      __s18param0[__s18param0.length - 1].value += __s18param2;
    } else {
      __s18param0.push({
        type: __s18param1,
        value: __s18param2
      });
    }
  }
  function __s1local4(__s22param0) {
    return JSON.stringify(__s22param0, function (__s24param0, __s24param1) {
      if (__s24param1 && __s24param1.runtimeKey) {
        return __s24param1.runtimeKey;
      } else {
        return __s24param1;
      }
    });
  }
  function __s1local5(__s28param0, __s28param1, __s28param2, __s28param3) {
    if (!__s28param2) {
      throw __s1local2(__s28param0, __s28param1, __s28param3);
    }
  }
  function __s1local6(__s31param0) {
    if (Array.isArray(__s31param0)) {
      return __s31param0;
    } else if (__s31param0) {
      return [__s31param0];
    } else {
      return [];
    }
  }
  function __s1local7(__s36param0, __s36param1, __s36param2) {
    var __s36local0;
    __s36local0 = __s1local6((__s36param2 = __s36param2 || {}).skip).some(function (__s38param0) {
      return __s38param0.test(__s36param0);
    });
    __s1local5("E_MISSING_CLDR", "Missing required CLDR content `{path}`.", __s36param1 || __s36local0, {
      path: __s36param0
    });
  }
  function __s1local8(__s40param0, __s40param1) {
    __s1local5("E_MISSING_PARAMETER", "Missing required parameter `{name}`.", __s40param0 !== undefined, {
      name: __s40param1
    });
  }
  function __s1local9(__s42param0, __s42param1, __s42param2, __s42param3) {
    __s1local5("E_INVALID_PAR_TYPE", "Invalid `{name}` parameter ({value}). {expected} expected.", __s42param2, {
      expected: __s42param3,
      name: __s42param1,
      value: __s42param0
    });
  }
  function __s1local10(__s44param0, __s44param1) {
    __s1local9(__s44param0, __s44param1, __s44param0 === undefined || typeof __s44param0 == "string" || __s44param0 instanceof __s1param0, "String or Cldr instance");
  }
  function __s1local11(__s46param0) {
    return __s46param0 !== null && "" + __s46param0 == "[object Object]";
  }
  function __s1local12(__s48param0) {
    if (__s48param0 instanceof __s1param0) {
      return __s48param0;
    } else {
      return new __s1param0(__s48param0);
    }
  }
  function validateLikelySubtags(__s52param0) {
    __s52param0.once("get", __s1local7);
    __s52param0.get("supplemental/likelySubtags");
  }
  function Globalize(__s54param0) {
    if (!(this instanceof Globalize)) {
      return new Globalize(__s54param0);
    }
    __s1local8(__s54param0, "locale");
    __s1local10(__s54param0, "locale");
    this.cldr = __s1local12(__s54param0);
    validateLikelySubtags(this.cldr);
  }
  Globalize.load = function () {
    __s1param0.load.apply(__s1param0, arguments);
  };
  Globalize.locale = function (__s59param0) {
    __s1local10(__s59param0, "locale");
    if (arguments.length) {
      this.cldr = __s1local12(__s59param0);
      validateLikelySubtags(this.cldr);
    }
    return this.cldr;
  };
  Globalize._alwaysArray = __s1local6;
  Globalize._createError = __s1local2;
  Globalize._formatMessage = __s1local0;
  Globalize._formatMessageToParts = function (__s62param0, __s62param1) {
    var __s62local0 = 0;
    var __s62local1 = [];
    __s62param0.replace(/{[0-9a-zA-Z-_. ]+}/g, function (__s64param0, __s64param1) {
      var __s64local0 = __s64param0.slice(1, -1);
      __s1local3(__s62local1, "literal", __s62param0.slice(__s62local0, __s64param1));
      __s1local3(__s62local1, "variable", __s62param1[__s64local0]);
      __s62local1[__s62local1.length - 1].name = __s64local0;
      __s62local0 += __s64param1 + __s64param0.length;
    });
    return __s62local1.filter(function (__s66param0) {
      return __s66param0.value !== "";
    });
  };
  Globalize._isPlainObject = __s1local11;
  Globalize._objectExtend = __s1local1;
  Globalize._partsJoin = function (__s68param0) {
    return __s68param0.map(function (__s70param0) {
      return __s70param0.value;
    }).join("");
  };
  Globalize._partsPush = __s1local3;
  Globalize._regexpEscape = function (__s72param0) {
    return __s72param0.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };
  Globalize._runtimeBind = function (__s74param0, __s74param1, __s74param2, __s74param3) {
    var __s74local0 = __s1local4(__s74param0);
    var __s74local1 = function (__s76param0) {
      if (__s76param0.name !== undefined) {
        return __s76param0.name;
      }
      var __s76local0 = /^function\s+([\w\$]+)\s*\(/.exec(__s76param0.toString());
      if (__s76local0 && __s76local0.length > 0) {
        return __s76local0[1];
      } else {
        return undefined;
      }
    }(__s74param2);
    var __s74local2 = __s74param1.locale;
    if (__s74local1) {
      __s74param2.runtimeKey = function (__s82param0, __s82param1, __s82param2, __s82param3) {
        var __s82local0;
        var __s82local1;
        __s82param3 = __s82param3 || __s1local4(__s82param2);
        __s82local1 = __s82param0 + __s82param1 + __s82param3;
        if ((__s82local0 = [].reduce.call(__s82local1, function (__s84param0, __s84param1) {
          var __s84local0 = __s84param1.charCodeAt(0);
          return (__s84param0 = (__s84param0 << 5) - __s84param0 + __s84local0) | 0;
        }, 0)) > 0) {
          return "a" + __s82local0;
        } else {
          return "b" + Math.abs(__s82local0);
        }
      }(__s74local1, __s74local2, null, __s74local0);
      __s74param2.generatorString = function () {
        return "Globalize(\"" + __s74local2 + "\")." + __s74local1 + "(" + __s74local0.slice(1, -1) + ")";
      };
      __s74param2.runtimeArgs = __s74param3;
      return __s74param2;
    } else {
      return __s74param2;
    }
  };
  Globalize._stringPad = function (__s91param0, __s91param1, __s91param2) {
    var __s91local0;
    if (typeof __s91param0 != "string") {
      __s91param0 = String(__s91param0);
    }
    __s91local0 = __s91param0.length;
    for (; __s91local0 < __s91param1; __s91local0 += 1) {
      __s91param0 = __s91param2 ? __s91param0 + "0" : "0" + __s91param0;
    }
    return __s91param0;
  };
  Globalize._validate = __s1local5;
  Globalize._validateCldr = __s1local7;
  Globalize._validateDefaultLocale = function (__s96param0) {
    __s1local5("E_DEFAULT_LOCALE_NOT_DEFINED", "Default locale has not been defined.", __s96param0 !== undefined, {});
  };
  Globalize._validateParameterPresence = __s1local8;
  Globalize._validateParameterRange = function (__s98param0, __s98param1, __s98param2, __s98param3) {
    __s1local5("E_PAR_OUT_OF_RANGE", "Parameter `{name}` has value `{value}` out of range [{minimum}, {maximum}].", __s98param0 === undefined || __s98param0 >= __s98param2 && __s98param0 <= __s98param3, {
      maximum: __s98param3,
      minimum: __s98param2,
      name: __s98param1,
      value: __s98param0
    });
  };
  Globalize._validateParameterTypePlainObject = function (__s100param0, __s100param1) {
    __s1local9(__s100param0, __s100param1, __s100param0 === undefined || __s1local11(__s100param0), "Plain Object");
  };
  Globalize._validateParameterType = __s1local9;
  return Globalize;
}) == "function" ? __s0local0.apply(exports, __s0local1) : __s0local0) !== undefined) {
  module.exports = __s0local2;
}
