var __s0local0;
var __s0local1;
if ((__s0local1 = typeof (__s0local0 = function () {
  var __s1local0;
  var __s1local1 = Array.isArray || function (__s3param0) {
    return Object.prototype.toString.call(__s3param0) === "[object Array]";
  };
  function __s1local2(__s5param0, __s5param1) {
    if (__s1local1(__s5param0)) {
      __s5param0 = __s5param0.join("/");
    }
    if (typeof __s5param0 != "string") {
      throw new Error("invalid path \"" + __s5param0 + "\"");
    }
    return (__s5param0 = (__s5param0 = __s5param0.replace(/^\//, "").replace(/^cldr\//, "")).replace(/{[a-zA-Z]+}/g, function (__s9param0) {
      __s9param0 = __s9param0.replace(/^{([^}]*)}$/, "$1");
      return __s5param1[__s9param0];
    })).split("/");
  }
  function __s1local3(__s11param0, __s11param1) {
    var __s11local0;
    var __s11local1;
    if (__s11param0.some) {
      return __s11param0.some(__s11param1);
    }
    __s11local0 = 0;
    __s11local1 = __s11param0.length;
    for (; __s11local0 < __s11local1; __s11local0++) {
      if (__s11param1(__s11param0[__s11local0], __s11local0, __s11param0)) {
        return true;
      }
    }
    return false;
  }
  function __s1local4(__s17param0, __s17param1, __s17param2, __s17param3) {
    var __s17local0;
    var __s17local1 = __s17param2[0];
    var __s17local2 = __s17param2[1];
    var __s17local3 = __s17param0.localeSep;
    var __s17local4 = __s17param2[2];
    var __s17local5 = __s17param2.slice(3, 4);
    __s17param3 = __s17param3 || {};
    if (__s17local1 !== "und" && __s17local2 !== "Zzzz" && __s17local4 !== "ZZ") {
      return [__s17local1, __s17local2, __s17local4].concat(__s17local5);
    } else if (__s17param1.get("supplemental/likelySubtags") !== undefined) {
      if (__s1local3([[__s17local1, __s17local2, __s17local4], [__s17local1, __s17local4], [__s17local1, __s17local2], [__s17local1], ["und", __s17local2]], function (__s21param0) {
        return __s17local0 = !/\b(Zzzz|ZZ)\b/.test(__s21param0.join(__s17local3)) && __s17param1.get(["supplemental/likelySubtags", __s21param0.join(__s17local3)]);
      })) {
        __s17local0 = __s17local0.split(__s17local3);
        return [__s17local1 !== "und" ? __s17local1 : __s17local0[0], __s17local2 !== "Zzzz" ? __s17local2 : __s17local0[1], __s17local4 !== "ZZ" ? __s17local4 : __s17local0[2]].concat(__s17local5);
      } else if (__s17param3.force) {
        return __s17param1.get("supplemental/likelySubtags/und").split(__s17local3);
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
  function __s1local5(__s27param0, __s27param1, __s27param2) {
    var __s27local0;
    var __s27local1 = __s27param2[0];
    var __s27local2 = __s27param2[1];
    var __s27local3 = __s27param2[2];
    var __s27local4 = __s27param2[3];
    if (__s1local3([[[__s27local1, "Zzzz", "ZZ"], [__s27local1]], [[__s27local1, "Zzzz", __s27local3], [__s27local1, __s27local3]], [[__s27local1, __s27local2, "ZZ"], [__s27local1, __s27local2]]], function (__s29param0) {
      var __s29local0 = __s1local4(__s27param0, __s27param1, __s29param0[0]);
      __s27local0 = __s29param0[1];
      return __s29local0 && __s29local0[0] === __s27param2[0] && __s29local0[1] === __s27param2[1] && __s29local0[2] === __s27param2[2];
    })) {
      if (__s27local4) {
        __s27local0.push(__s27local4);
      }
      return __s27local0;
    } else {
      return __s27param2;
    }
  }
  function __s1local6(__s34param0) {
    var __s34local0;
    var __s34local1;
    var __s34local2 = [];
    __s34param0 = __s34param0.replace(/_/, "-");
    if ((__s34local0 = __s34param0.split("-u-"))[1]) {
      __s34local0[1] = __s34local0[1].split("-t-");
      __s34param0 = __s34local0[0] + (__s34local0[1][1] ? "-t-" + __s34local0[1][1] : "");
      __s34local2[4] = __s34local0[1][0];
    }
    __s34local1 = __s34param0.split("-t-")[0];
    if ((__s34local0 = __s34local1.match(/^(([a-z]{2,3})(-([A-Z][a-z]{3}))?(-([A-Z]{2}|[0-9]{3}))?)((-([a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*)$|^(root)$/)) === null) {
      return ["und", "Zzzz", "ZZ"];
    } else {
      __s34local2[0] = __s34local0[10] || __s34local0[2] || "und";
      __s34local2[1] = __s34local0[4] || "Zzzz";
      __s34local2[2] = __s34local0[6] || "ZZ";
      if (__s34local0[7] && __s34local0[7].length) {
        __s34local2[3] = __s34local0[7].slice(1);
      }
      return __s34local2;
    }
  }
  function __s1local7(__s40param0, __s40param1) {
    var __s40local0;
    var __s40local1;
    if (__s40param0.forEach) {
      return __s40param0.forEach(__s40param1);
    }
    __s40local0 = 0;
    __s40local1 = __s40param0.length;
    for (; __s40local0 < __s40local1; __s40local0++) {
      __s40param1(__s40param0[__s40local0], __s40local0, __s40param0);
    }
  }
  function __s1local8(__s45param0, __s45param1) {
    var __s45local0;
    var __s45local1;
    __s45local1 = __s45param0 + (__s45param1 && JSON ? ": " + JSON.stringify(__s45param1) : "");
    (__s45local0 = new Error(__s45local1)).code = __s45param0;
    __s1local7(function (__s47param0) {
      var __s47local0;
      var __s47local1 = [];
      if (Object.keys) {
        return Object.keys(__s47param0);
      }
      for (__s47local0 in __s47param0) {
        __s47local1.push(__s47local0);
      }
      return __s47local1;
    }(__s45param1), function (__s52param0) {
      __s45local0[__s52param0] = __s45param1[__s52param0];
    });
    return __s45local0;
  }
  function __s1local9(__s54param0, __s54param1, __s54param2) {
    if (!__s54param1) {
      throw __s1local8(__s54param0, __s54param2);
    }
  }
  function __s1local10(__s57param0, __s57param1) {
    __s1local9("E_MISSING_PARAMETER", __s57param0 !== undefined, {
      name: __s57param1
    });
  }
  function __s1local11(__s59param0, __s59param1, __s59param2, __s59param3) {
    __s1local9("E_INVALID_PAR_TYPE", __s59param2, {
      expected: __s59param3,
      name: __s59param1,
      value: __s59param0
    });
  }
  function __s1local12(__s61param0, __s61param1) {
    __s1local11(__s61param0, __s61param1, typeof __s61param0 == "string" || __s1local1(__s61param0), "String or Array");
  }
  function __s1local13(__s63param0, __s63param1) {
    var __s63local0;
    __s1local11(__s63param0, __s63param1, __s63param0 === undefined || (__s63local0 = __s63param0) !== null && "" + __s63local0 == "[object Object]", "Plain Object");
  }
  function __s1local14(__s65param0, __s65param1) {
    var __s65local0;
    var __s65local1 = __s65param0;
    var __s65local2 = __s65param1.length;
    for (__s65local0 = 0; __s65local0 < __s65local2 - 1; __s65local0++) {
      if (!(__s65local1 = __s65local1[__s65param1[__s65local0]])) {
        return;
      }
    }
    return __s65local1[__s65param1[__s65local0]];
  }
  function __s1local15(__s70param0, __s70param1) {
    var __s70local0;
    var __s70local1 = __s70param0._availableBundleMapQueue;
    var __s70local2 = __s1local14(__s70param1, ["main"]);
    if (__s70local2) {
      for (__s70local0 in __s70local2) {
        if (__s70local2.hasOwnProperty(__s70local0) && __s70local0 !== "root" && __s70local1.indexOf(__s70local0) === -1) {
          __s70local1.push(__s70local0);
        }
      }
    }
  }
  function __s1local16(__s76param0) {
    if (__s1local1(__s76param0)) {
      return __s76param0;
    } else {
      return [__s76param0];
    }
  }
  var __s1local17 = __s1local0 = function () {
    var __s80local0 = {};
    var __s80local1 = [].slice.call(arguments, 0);
    __s1local7(__s80local1, function (__s82param0) {
      var __s82local0;
      for (__s82local0 in __s82param0) {
        if (__s82local0 in __s80local0 && typeof __s80local0[__s82local0] == "object" && !__s1local1(__s80local0[__s82local0])) {
          __s80local0[__s82local0] = __s1local0(__s80local0[__s82local0], __s82param0[__s82local0]);
        } else {
          __s80local0[__s82local0] = __s82param0[__s82local0];
        }
      }
    });
    return __s80local0;
  };
  function __s1local18(__s88param0, __s88param1, __s88param2) {
    var __s88local0;
    var __s88local1;
    var __s88local2;
    __s1local10(__s88param2[0], "json");
    __s88local0 = 0;
    for (; __s88local0 < __s88param2.length; __s88local0++) {
      __s88local2 = __s1local16(__s88param2[__s88local0]);
      __s88local1 = 0;
      for (; __s88local1 < __s88local2.length; __s88local1++) {
        __s1local13(__s88local2[__s88local1], "json");
        __s88param1 = __s1local17(__s88param1, __s88local2[__s88local1]);
        __s1local15(__s88param0, __s88local2[__s88local1]);
      }
    }
    return __s88param1;
  }
  function __s1local19(__s94param0, __s94param1, __s94param2) {
    var __s94local0 = __s1local2(__s94param1, __s94param2);
    return __s1local14(__s94param0._resolved, __s94local0);
  }
  function __s1local20(__s96param0) {
    this.init(__s96param0);
  }
  __s1local20._alwaysArray = __s1local16;
  __s1local20._coreLoad = __s1local18;
  __s1local20._createError = __s1local8;
  __s1local20._itemGetResolved = __s1local19;
  __s1local20._jsonMerge = __s1local17;
  __s1local20._pathNormalize = __s1local2;
  __s1local20._resourceGet = __s1local14;
  __s1local20._validatePresence = __s1local10;
  __s1local20._validateType = __s1local11;
  __s1local20._validateTypePath = __s1local12;
  __s1local20._validateTypePlainObject = __s1local13;
  __s1local20._availableBundleMap = {};
  __s1local20._availableBundleMapQueue = [];
  __s1local20._resolved = {};
  __s1local20.localeSep = "-";
  __s1local20.load = function () {
    __s1local20._resolved = __s1local18(__s1local20, __s1local20._resolved, arguments);
  };
  __s1local20.prototype.init = function (__s100param0) {
    var __s100local0;
    var __s100local1;
    var __s100local2;
    var __s100local3;
    var __s100local4;
    var __s100local5;
    var __s100local6;
    var __s100local7;
    var __s100local8;
    var __s100local9;
    var __s100local10 = __s1local20.localeSep;
    var __s100local11 = "";
    __s1local10(__s100param0, "locale");
    __s1local11(__s100local9 = __s100param0, "locale", typeof __s100local9 == "string", "a string");
    if ((__s100local5 = __s1local6(__s100param0)).length === 5) {
      __s100local11 = __s100local10 + "u" + __s100local10 + (__s100local7 = __s100local5.pop());
      if (!__s100local5[3]) {
        __s100local5.pop();
      }
    }
    __s100local8 = __s100local5[3];
    __s100local1 = (__s100local2 = __s1local4(__s1local20, this, __s100local5, {
      force: true
    }) || __s100local5)[0];
    __s100local4 = __s100local2[1];
    __s100local6 = __s100local2[2];
    __s100local3 = __s1local5(__s1local20, this, __s100local2).join(__s100local10);
    this.attributes = __s100local0 = {
      bundle: function (__s104param0, __s104param1, __s104param2) {
        var __s104local0 = __s104param0._availableBundleMap;
        var __s104local1 = __s104param0._availableBundleMapQueue;
        if (__s104local1.length) {
          __s1local7(__s104local1, function (__s107param0, __s107param1) {
            var __s107local0;
            var __s107local1;
            var __s107local2;
            var __s107local3;
            __s107local3 = __s1local6(__s107param0);
            if ((__s107local1 = __s1local4(__s104param0, __s104param1, __s107local3)) === undefined) {
              __s104local1.splice(__s107param1, 1);
              throw new Error("Could not find likelySubtags for " + __s107param0);
            }
            __s107local2 = (__s107local2 = __s1local5(__s104param0, __s104param1, __s107local1)).join(__s104param0.localeSep);
            if (!(__s107local0 = __s104local0[__s107local2]) || !(__s107local0.length < __s107param0.length)) {
              __s104local0[__s107local2] = __s107param0;
            }
          });
          __s104param0._availableBundleMapQueue = [];
        }
        return __s104local0[__s104param2] || null;
      }(__s1local20, this, __s100local3),
      minLanguageId: __s100local3 + __s100local11,
      maxLanguageId: __s100local2.join(__s100local10) + __s100local11,
      language: __s100local1,
      script: __s100local4,
      territory: __s100local6,
      region: __s100local6,
      variant: __s100local8
    };
    if (__s100local7) {
      ("-" + __s100local7).replace(/-[a-z]{3,8}|(-[a-z]{2})-([a-z]{3,8})/g, function (__s112param0, __s112param1, __s112param2) {
        if (__s112param1) {
          __s100local0["u" + __s112param1] = __s112param2;
        } else {
          __s100local0["u" + __s112param0] = true;
        }
      });
    }
    this.locale = __s100param0;
  };
  __s1local20.prototype.get = function (__s116param0) {
    __s1local10(__s116param0, "path");
    __s1local12(__s116param0, "path");
    return __s1local19(__s1local20, __s116param0, this.attributes);
  };
  __s1local20.prototype.main = function (__s118param0) {
    __s1local10(__s118param0, "path");
    __s1local12(__s118param0, "path");
    __s1local9("E_MISSING_BUNDLE", this.attributes.bundle !== null, {
      locale: this.locale
    });
    __s118param0 = __s1local16(__s118param0);
    return this.get(["main/{bundle}"].concat(__s118param0));
  };
  return __s1local20;
}) == "function" ? __s0local0.call(exports, require, exports, module) : __s0local0) !== undefined) {
  module.exports = __s0local1;
}
