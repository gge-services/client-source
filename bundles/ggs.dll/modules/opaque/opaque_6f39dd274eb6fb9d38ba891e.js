var __s0local0;
var __s0local1;
var __s0local2;
__s0local1 = [require("gge-module:opaque_5c61709ecb7732e44481babe"), require("gge-module:class_Globalize"), require("gge-module:opaque_b65804600291f9b6b8e6457f"), require("gge-module:exact_f70a9f50ff0ced05"), require("gge-module:exact_2eb0a95d73d217d1")];
if ((__s0local2 = typeof (__s0local0 = function (__s1param0, __s1param1) {
  var __s1local0 = __s1param1._createError;
  var __s1local1 = __s1param1._createErrorUnsupportedFeature;
  var __s1local2 = __s1param1._formatMessage;
  var __s1local3 = __s1param1._isPlainObject;
  var __s1local4 = __s1param1._looseMatching;
  var __s1local5 = __s1param1._numberNumberingSystemDigitsMap;
  var __s1local6 = __s1param1._numberSymbol;
  var __s1local7 = __s1param1._partsJoin;
  var __s1local8 = __s1param1._partsPush;
  var __s1local9 = __s1param1._regexpEscape;
  var __s1local10 = __s1param1._removeLiteralQuotes;
  var __s1local11 = __s1param1._runtimeBind;
  var __s1local12 = __s1param1._stringPad;
  var __s1local13 = __s1param1._validate;
  var __s1local14 = __s1param1._validateCldr;
  var __s1local15 = __s1param1._validateDefaultLocale;
  var __s1local16 = __s1param1._validateParameterPresence;
  var __s1local17 = __s1param1._validateParameterType;
  var __s1local18 = __s1param1._validateParameterTypePlainObject;
  var __s1local19 = __s1param1._validateParameterTypeString;
  function __s1local20(__s3param0, __s3param1) {
    __s1local17(__s3param0, __s3param1, __s3param0 === undefined || __s3param0 instanceof Date, "Date");
  }
  var __s1local21 = "GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx".split("").reduce(function (__s5param0, __s5param1, __s5param2) {
    __s5param0[__s5param1] = __s5param2;
    return __s5param0;
  }, {});
  function __s1local22(__s7param0, __s7param1) {
    __s7param1 = __s7param1 || function (__s9param0, __s9param1, __s9param2) {
      __s9param0[__s9param2] = __s9param1;
      return __s9param0;
    };
    return Object.keys(__s7param0).reduce(function (__s11param0, __s11param1) {
      return __s7param1(__s11param0, __s11param1, __s7param0[__s11param1]);
    }, {});
  }
  var __s1local23 = __s1local22({
    e: "eEc",
    L: "ML"
  }, function (__s13param0, __s13param1, __s13param2) {
    __s13param2.split("").forEach(function (__s15param0) {
      __s13param0[__s15param0] = __s13param1;
    });
    return __s13param0;
  });
  function __s1local24(__s17param0) {
    return __s1local23[__s17param0] || __s17param0;
  }
  var __s1local25 = /([a-z])\1*|'([^']|'')+'|''|./gi;
  function __s1local26(__s19param0, __s19param1) {
    var __s19local0;
    var __s19local1 = "";
    for (__s19local0 = 0; __s19local0 < __s19param1; __s19local0++) {
      __s19local1 += __s19param0;
    }
    return __s19local1;
  }
  function __s1local27(__s23param0, __s23param1, __s23param2) {
    var __s23local0;
    var __s23local1;
    var __s23local2;
    var __s23local3;
    __s23local1 = __s23param0.match(/S/g);
    __s23local0 = __s23local1 ? __s23local1.length : 0;
    __s23local3 = __s23param0.replace(/S/g, "");
    __s23param1 = function expandBestMatchFormat(__s25param0, __s25param1) {
      var __s25local0;
      var __s25local1;
      var __s25local2;
      var __s25local3;
      var __s25local4;
      var __s25local5;
      var __s25local6;
      var __s25local7;
      var __s25local8 = __s1local24;
      __s25local7 = __s25param0.match(__s1local25);
      __s25local2 = __s25param1.match(__s1local25);
      __s25local0 = 0;
      for (; __s25local0 < __s25local2.length; __s25local0++) {
        __s25local3 = __s25local2[__s25local0].charAt(0);
        __s25local4 = __s25local2[__s25local0].length;
        __s25local1 = 0;
        for (; __s25local1 < __s25local7.length; __s25local1++) {
          __s25local5 = __s25local7[__s25local1].charAt(0);
          __s25local6 = __s25local7[__s25local1].length;
          if (__s25local8(__s25local3) === __s25local8(__s25local5) && __s25local4 < __s25local6) {
            __s25local2[__s25local0] = __s1local26(__s25local3, __s25local6);
          }
        }
      }
      return __s25local2.join("");
    }(__s23local3, __s23param1);
    if ((__s23local2 = __s23param1.lastIndexOf("s")) !== -1 && __s23local0 !== 0) {
      __s23param1 = __s23param1.slice(0, __s23local2 + 1) + __s23param2 + __s1local26("S", __s23local0) + __s23param1.slice(__s23local2 + 1);
    }
    return __s23param1;
  }
  function __s1local28(__s33param0, __s33param1) {
    var __s33local0;
    var __s33local1;
    var __s33local2;
    var __s33local3;
    var __s33local4;
    var __s33local5;
    var __s33local6;
    var __s33local7;
    var __s33local8;
    var __s33local9 = __s1local24;
    if (__s33param0 === __s33param1) {
      return 0;
    }
    __s33param0 = __s33param0.match(__s1local25);
    __s33param1 = __s33param1.match(__s1local25);
    if (__s33param0.length !== __s33param1.length) {
      return -1;
    }
    __s33local2 = 1;
    __s33local7 = 0;
    for (; __s33local7 < __s33param0.length; __s33local7++) {
      __s33local0 = __s33param0[__s33local7].charAt(0);
      __s33local5 = __s33local9(__s33local0);
      __s33local6 = null;
      __s33local8 = 0;
      for (; __s33local8 < __s33param1.length && (__s33local1 = __s33param1[__s33local8].charAt(0), __s33local6 = __s33local9(__s33local1), __s33local5 !== __s33local6); __s33local8++) {
        __s33local6 = null;
      }
      if (__s33local6 === null) {
        return -1;
      }
      __s33local3 = __s33param0[__s33local7].length;
      __s33local4 = __s33param1[__s33local8].length;
      __s33local2 += Math.abs(__s33local3 - __s33local4);
      if (__s33local0 !== __s33local1) {
        __s33local2 += 1;
      }
      if (__s33local3 < 3 && __s33local4 >= 3 || __s33local3 >= 3 && __s33local4 < 3) {
        __s33local2 += 20;
      }
    }
    return __s33local2;
  }
  function __s1local29(__s44param0, __s44param1) {
    var __s44local0;
    var __s44local1;
    var __s44local2;
    var __s44local3;
    var __s44local4;
    var __s44local5 = "dates/calendars/gregorian/dateTimeFormats/availableFormats";
    var __s44local6 = __s1local27;
    var __s44local7 = __s1local28;
    __s44local2 = __s44param0.main([__s44local5, __s44param1]);
    if (__s44param1 && !__s44local2) {
      __s44local0 = __s44param0.main([__s44local5]);
      __s44local3 = [];
      for (__s44local4 in __s44local0) {
        __s44local3.push({
          skeleton: __s44local4,
          pattern: __s44local0[__s44local4],
          rate: __s44local7(__s44param1, __s44local4)
        });
      }
      if ((__s44local3 = __s44local3.filter(function (__s49param0) {
        return __s49param0.rate > -1;
      }).sort(function (__s51param0, __s51param1) {
        return __s51param0.rate - __s51param1.rate;
      })).length) {
        __s44local1 = __s1local6("decimal", __s44param0);
        __s44local2 = __s44local6(__s44param1, __s44local3[0].pattern, __s44local1);
      }
    }
    return __s44local2;
  }
  function __s1local30(__s54param0, __s54param1) {
    var __s54local0;
    var __s54local1;
    var __s54local2;
    var __s54local3;
    var __s54local4;
    var __s54local5;
    var __s54local6 = __s1local29;
    function combineDateTime(__s56param0, __s56param1, __s56param2) {
      return __s1local2(__s54param1.main(["dates/calendars/gregorian/dateTimeFormats", __s56param0]), [__s56param2, __s56param1]);
    }
    switch (true) {
      case "skeleton" in __s54param0:
        (function validateSkeleton(__s59param0) {
          var __s59local0;
          var __s59local1 = __s1local21;
          __s59param0.replace(/[^GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx]/, function (__s61param0) {
            throw __s1local0("E_INVALID_OPTIONS", "Invalid field `{invalidField}` of skeleton `{value}`", {
              invalidField: __s61param0,
              type: "skeleton",
              value: __s59param0
            });
          });
          __s59param0.split("").every(function (__s63param0) {
            if (__s59local1[__s63param0] < __s59local0) {
              throw __s1local0("E_INVALID_OPTIONS", "Invalid order `{invalidField}` of skeleton `{value}`", {
                invalidField: __s63param0,
                type: "skeleton",
                value: __s59param0
              });
            }
            __s59local0 = __s59local1[__s63param0];
            return true;
          });
        })(__s54local2 = (__s54local2 = __s54param0.skeleton).replace(/j/g, function () {
          return __s54param1.supplemental.timeData.preferred();
        }));
        if (__s54local1 = __s54local6(__s54param1, __s54local2)) {
          break;
        }
        __s54local3 = __s54local2.split(/[^hHKkmsSAzZOvVXx]/).slice(-1)[0];
        __s54local0 = __s54local2.split(/[^GyYuUrQqMLlwWdDFgEec]/)[0];
        __s54local0 = __s54local6(__s54param1, __s54local0);
        __s54local3 = __s54local6(__s54param1, __s54local3);
        __s54local4 = /(MMMM|LLLL).*[Ec]/.test(__s54local0) ? "full" : /MMMM|LLLL/.test(__s54local0) ? "long" : /MMM|LLL/.test(__s54local0) ? "medium" : "short";
        __s54local1 = __s54local0 && __s54local3 ? combineDateTime(__s54local4, __s54local0, __s54local3) : __s54local0 || __s54local3;
        break;
      case "date" in __s54param0:
      case "time" in __s54param0:
        __s54local1 = __s54param1.main(["dates/calendars/gregorian", "date" in __s54param0 ? "dateFormats" : "timeFormats", __s54param0.date || __s54param0.time]);
        break;
      case "datetime" in __s54param0:
        __s54local1 = combineDateTime(__s54param0.datetime, __s54param1.main(["dates/calendars/gregorian/dateFormats", __s54param0.datetime]), __s54param1.main(["dates/calendars/gregorian/timeFormats", __s54param0.datetime]));
        break;
      case "raw" in __s54param0:
        __s54local1 = __s54param0.raw;
        break;
      default:
        throw __s1local0("E_INVALID_PAR_VALUE", "Invalid `{name}` value ({value}).", {
          name: {
            name: "options",
            value: __s54param0
          },
          value: __s54local5
        });
    }
    return __s54local1;
  }
  var __s1local31 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  function __s1local32(__s69param0) {
    return __s1local31.indexOf(__s69param0.supplemental.weekData.firstDay());
  }
  function __s1local33(__s71param0, __s71param1, __s71param2, __s71param3) {
    var __s71local0;
    var __s71local1;
    if (__s71param2) {
      if (__s71local1 = __s71param3.main(["dates/timeZoneNames/zone", __s71param2, __s71param0 < 4 ? "short" : "long", __s71param1])) {
        return __s71local1;
      } else {
        __s71local0 = __s71param3.supplemental(["metaZones/metazoneInfo/timezone", __s71param2, 0, "usesMetazone/_mzone"]);
        return __s71param3.main(["dates/timeZoneNames/metazone", __s71local0, __s71param0 < 4 ? "short" : "long", __s71param1]);
      }
    }
  }
  function __s1local34(__s76param0) {
    return __s76param0.split(";").map(function (__s78param0) {
      return __s78param0.slice(0, __s78param0.indexOf("H") + 1);
    }).join(";");
  }
  function __s1local35(__s80param0, __s80param1) {
    return __s80param0.split(";").map(function (__s82param0) {
      var __s82local0 = __s82param0.split(/H+/);
      __s82local0.splice(1, 0, __s80param1);
      return __s82local0.join("");
    }).join(";");
  }
  function __s1local36(__s84param0, __s84param1) {
    function __s84local0() {
      return __s84param1;
    }
    __s84local0.dataCacheKey = __s84param0;
    return __s84local0;
  }
  var __s1local37 = function () {
    function definePrivateProperty(__s90param0, __s90param1, __s90param2) {
      Object.defineProperty(__s90param0, __s90param1, {
        value: __s90param2
      });
    }
    function getUntilsIndex(__s92param0, __s92param1) {
      for (var __s92local0 = 0, __s92local1 = __s92param0.getTime(); __s92local0 < __s92param1.length - 1 && __s92local1 >= __s92param1[__s92local0];) {
        __s92local0++;
      }
      return __s92local0;
    }
    function setWrap(__s96param0) {
      var __s96local0 = this.getTimezoneOffset();
      var __s96local1 = __s96param0();
      this.original.setTime(new Date(this.getTime()));
      var __s96local2 = this.getTimezoneOffset();
      if (__s96local2 - __s96local0) {
        this.original.setMinutes(this.original.getMinutes() + __s96local2 - __s96local0);
      }
      return __s96local1;
    }
    function __s88local0(__s99param0, __s99param1) {
      definePrivateProperty(this, "original", new Date(__s99param0.getTime()));
      definePrivateProperty(this, "local", new Date(__s99param0.getTime()));
      definePrivateProperty(this, "timeZoneData", __s99param1);
      definePrivateProperty(this, "setWrap", setWrap);
      if (!__s99param1.untils || !__s99param1.offsets || !__s99param1.isdsts) {
        throw new Error("Invalid IANA data");
      }
      this.setTime(this.local.getTime() - this.getTimezoneOffset() * 60 * 1000);
    }
    __s88local0.prototype.clone = function () {
      return new __s88local0(this.original, this.timeZoneData);
    };
    ["getFullYear", "getMonth", "getDate", "getDay", "getHours", "getMinutes", "getSeconds", "getMilliseconds"].forEach(function (__s104param0) {
      var __s104local0 = "getUTC" + __s104param0.substr(3);
      __s88local0.prototype[__s104param0] = function () {
        return this.local[__s104local0]();
      };
    });
    __s88local0.prototype.valueOf = __s88local0.prototype.getTime = function () {
      return this.local.getTime() + this.getTimezoneOffset() * 60 * 1000;
    };
    __s88local0.prototype.getTimezoneOffset = function () {
      var __s110local0 = getUntilsIndex(this.original, this.timeZoneData.untils);
      return this.timeZoneData.offsets[__s110local0];
    };
    ["setFullYear", "setMonth", "setDate", "setHours", "setMinutes", "setSeconds", "setMilliseconds"].forEach(function (__s112param0) {
      var __s112local0 = "setUTC" + __s112param0.substr(3);
      __s88local0.prototype[__s112param0] = function (__s114param0) {
        var __s114local0 = this.local;
        return this.setWrap(function () {
          return __s114local0[__s112local0](__s114param0);
        });
      };
    });
    __s88local0.prototype.setTime = function (__s118param0) {
      return this.local.setTime(__s118param0);
    };
    __s88local0.prototype.isDST = function () {
      var __s120local0 = getUntilsIndex(this.original, this.timeZoneData.untils);
      return Boolean(this.timeZoneData.isdsts[__s120local0]);
    };
    __s88local0.prototype.inspect = function () {
      var __s122local0 = getUntilsIndex(this.original, this.timeZoneData.untils);
      var __s122local1 = this.timeZoneData.abbrs;
      return this.local.toISOString().replace(/Z$/, "") + " " + (__s122local1 && __s122local1[__s122local0] + " " || this.getTimezoneOffset() * -1 + " ") + (this.isDST() ? "(daylight savings)" : "");
    };
    __s88local0.prototype.toDate = function () {
      return new Date(this.getTime());
    };
    ["toISOString", "toJSON", "toUTCString"].forEach(function (__s126param0) {
      __s88local0.prototype[__s126param0] = function () {
        return this.toDate()[__s126param0]();
      };
    });
    return __s88local0;
  }();
  function __s1local38(__s130param0, __s130param1) {
    __s130param0 = __s130param0 instanceof __s1local37 ? __s130param0.clone() : new Date(__s130param0.getTime());
    switch (__s130param1) {
      case "year":
        __s130param0.setMonth(0);
      case "month":
        __s130param0.setDate(1);
      case "day":
        __s130param0.setHours(0);
      case "hour":
        __s130param0.setMinutes(0);
      case "minute":
        __s130param0.setSeconds(0);
      case "second":
        __s130param0.setMilliseconds(0);
    }
    return __s130param0;
  }
  function __s1local39(__s133param0, __s133param1, __s133param2) {
    return __s133param0 < __s133param1 || __s133param0 > __s133param2;
  }
  function __s1local40(__s135param0, __s135param1) {
    var __s135local0;
    var __s135local1 = {};
    for (__s135local0 in __s135param0) {
      if (__s135param1.test(__s135local0)) {
        __s135local1[__s135local0] = __s135param0[__s135local0];
      }
    }
    return __s135local1;
  }
  function __s1local41(__s140param0, __s140param1) {
    return (__s140param0.getDay() - __s140param1 + 7) % 7;
  }
  function __s1local42(__s142param0) {
    return Math.floor((__s142local0 = __s1local38(__s142param0, "year"), (__s142param0.getTime() - __s142local0.getTime()) / 86400000));
    var __s142local0;
  }
  var __s1local43 = __s1local22({
    era: "G",
    year: "yY",
    quarter: "qQ",
    month: "ML",
    week: "wW",
    day: "dDF",
    weekday: "ecE",
    dayperiod: "a",
    hour: "hHkK",
    minute: "m",
    second: "sSA",
    zone: "zvVOxX"
  }, function (__s144param0, __s144param1, __s144param2) {
    __s144param2.split("").forEach(function (__s146param0) {
      __s144param0[__s146param0] = __s144param1;
    });
    return __s144param0;
  });
  function __s1local44(__s148param0, __s148param1, __s148param2, __s148param3) {
    var __s148local0;
    var __s148local1 = __s148param0.getTimezoneOffset();
    __s148local0 = Math.abs(__s148local1);
    __s148param3 = __s148param3 || {
      1: function (__s150param0) {
        return __s1local12(__s150param0, 1);
      },
      2: function (__s152param0) {
        return __s1local12(__s152param0, 2);
      }
    };
    return __s148param1.split(";")[__s148local1 > 0 ? 1 : 0].replace(":", __s148param2).replace(/HH?/, function (__s154param0) {
      return __s148param3[__s154param0.length](Math.floor(__s148local0 / 60));
    }).replace(/mm/, function () {
      return __s148param3[2](Math.floor(__s148local0 % 60));
    }).replace(/ss/, function () {
      return __s148param3[2](Math.floor(__s148local0 % 1 * 60));
    });
  }
  function optionsHasStyle(__s160param0) {
    return __s160param0.skeleton !== undefined || __s160param0.date !== undefined || __s160param0.time !== undefined || __s160param0.datetime !== undefined || __s160param0.raw !== undefined;
  }
  function validateRequiredCldr(__s162param0, __s162param1) {
    __s1local14(__s162param0, __s162param1, {
      skip: [/dates\/calendars\/gregorian\/dateTimeFormats\/availableFormats/, /dates\/calendars\/gregorian\/days\/.*\/short/, /dates\/timeZoneNames\/zone/, /dates\/timeZoneNames\/metazone/, /globalize-iana/, /supplemental\/metaZones/, /supplemental\/timeData\/(?!001)/, /supplemental\/weekData\/(?!001)/]
    });
  }
  function validateOptionsPreset(__s164param0) {
    validateOptionsPresetEach("date", __s164param0);
    validateOptionsPresetEach("time", __s164param0);
    validateOptionsPresetEach("datetime", __s164param0);
  }
  function validateOptionsPresetEach(__s166param0, __s166param1) {
    var __s166local0 = __s166param1[__s166param0];
    __s1local13("E_INVALID_OPTIONS", "Invalid `{{type}: \"{value}\"}`.", __s166local0 === undefined || ["short", "medium", "long", "full"].indexOf(__s166local0) !== -1, {
      type: __s166param0,
      value: __s166local0
    });
  }
  function validateOptionsSkeleton(__s168param0, __s168param1) {
    __s1local13("E_INVALID_OPTIONS", "Invalid `{skeleton: \"{value}\"}` based on provided CLDR.", __s168param1 === undefined || typeof __s168param0 == "string" && __s168param0, {
      type: "skeleton",
      value: __s168param1
    });
  }
  function validateRequiredIana(__s170param0) {
    return function (__s172param0, __s172param1) {
      if (/globalize-iana/.test(__s172param0)) {
        __s1local13("E_MISSING_IANA_TZ", "Missing required IANA timezone content for `{timeZone}`: `{path}`.", __s172param1, {
          path: __s172param0.replace(/globalize-iana\//, ""),
          timeZone: __s170param0
        });
      }
    };
  }
  __s1param1.loadTimeZone = function (__s175param0) {
    var __s175local0 = {
      "globalize-iana": __s175param0
    };
    __s1local16(__s175param0, "json");
    __s1local18(__s175param0, "json");
    __s1param0.load(__s175local0);
  };
  __s1param1.dateFormatter = __s1param1.prototype.dateFormatter = function (__s177param0) {
    var __s177local0;
    var __s177local1;
    var __s177local2;
    __s1local18(__s177param0, "options");
    if (!optionsHasStyle(__s177param0 = __s177param0 || {})) {
      __s177param0.skeleton = "yMd";
    }
    __s177local0 = [__s177param0];
    __s177local2 = function (__s180param0) {
      return function dateFormatter(__s182param0) {
        return __s1local7(__s180param0(__s182param0));
      };
    }(__s177local1 = this.dateToPartsFormatter(__s177param0));
    __s1local11(__s177local0, this.cldr, __s177local2, [__s177local1]);
    return __s177local2;
  };
  __s1param1.dateToPartsFormatter = __s1param1.prototype.dateToPartsFormatter = function (__s184param0) {
    var __s184local0;
    var __s184local1;
    var __s184local2;
    var __s184local3;
    var __s184local4;
    var __s184local5;
    var __s184local6;
    var __s184local7;
    var __s184local8;
    __s1local18(__s184param0, "options");
    __s184local1 = this.cldr;
    if (!optionsHasStyle(__s184param0 = __s184param0 || {})) {
      __s184param0.skeleton = "yMd";
    }
    validateOptionsPreset(__s184param0);
    __s1local15(__s184local1);
    __s184local7 = __s184param0.timeZone;
    __s1local19(__s184local7, "options.timeZone");
    __s184local0 = [__s184param0];
    __s184local1.on("get", validateRequiredCldr);
    if (__s184local7) {
      __s184local8 = validateRequiredIana(__s184local7);
      __s184local1.on("get", __s184local8);
    }
    try {
      validateOptionsSkeleton(__s184local4 = __s1local30(__s184param0, __s184local1), __s184param0.skeleton);
      __s184local5 = function (__s189param0, __s189param1, __s189param2) {
        var __s189local0 = {
          numberFormatters: {},
          pattern: __s189param0,
          timeSeparator: __s1local6("timeSeparator", __s189param1)
        };
        var __s189local1 = ["abbreviated", "wide", "narrow"];
        function setNumberFormatterPattern(__s191param0) {
          __s189local0.numberFormatters[__s191param0] = __s1local12("", __s191param0);
        }
        if (__s189param2) {
          __s189local0.timeZoneData = __s1local36("iana/" + __s189param2, {
            offsets: __s189param1.get(["globalize-iana/zoneData", __s189param2, "offsets"]),
            untils: __s189param1.get(["globalize-iana/zoneData", __s189param2, "untils"]),
            isdsts: __s189param1.get(["globalize-iana/zoneData", __s189param2, "isdsts"])
          });
        }
        __s189param0.replace(__s1local25, function (__s194param0) {
          var __s194local0;
          var __s194local1;
          var __s194local2;
          var __s194local3;
          var __s194local4;
          var __s194local5;
          var __s194local6;
          __s194local1 = __s194param0.charAt(0);
          __s194local5 = __s194param0.length;
          if (__s194local1 === "j") {
            __s189local0.preferredTime = __s194local1 = __s189param1.supplemental.timeData.preferred();
          }
          if (__s194local1 === "Z" && __s194local5 === 4) {
            __s194local1 = "O";
            __s194local5 = 4;
          }
          if (__s194local1 === "z") {
            __s194local6 = __s1local33(__s194local5, "standard", __s189param2, __s189param1);
            __s194local2 = __s1local33(__s194local5, "daylight", __s189param2, __s189param1);
            if (__s194local6) {
              __s189local0.standardTzName = __s194local6;
            }
            if (__s194local2) {
              __s189local0.daylightTzName = __s194local2;
            }
            if (!__s194local6 || !__s194local2) {
              __s194local1 = "O";
              if (__s194local5 < 4) {
                __s194local5 = 1;
              }
            }
          }
          if (__s194local1 === "v") {
            if (!(__s194local4 = __s1local33(__s194local5, "generic", __s189param2, __s189param1))) {
              __s194local1 = "V";
              __s194local5 = 4;
            }
          }
          switch (__s194local1) {
            case "G":
              __s189local0.eras = __s189param1.main(["dates/calendars/gregorian/eras", __s194local5 <= 3 ? "eraAbbr" : __s194local5 === 4 ? "eraNames" : "eraNarrow"]);
              break;
            case "y":
              __s194local3 = true;
              break;
            case "Y":
              __s189local0.firstDay = __s1local32(__s189param1);
              __s189local0.minDays = __s189param1.supplemental.weekData.minDays();
              __s194local3 = true;
              break;
            case "u":
            case "U":
              throw __s1local1({
                feature: "year pattern `" + __s194local1 + "`"
              });
            case "Q":
            case "q":
              if (__s194local5 > 2) {
                __s189local0.quarters ||= {};
                __s189local0.quarters[__s194local1] ||= {};
                __s189local0.quarters[__s194local1][__s194local5] = __s189param1.main(["dates/calendars/gregorian/quarters", __s194local1 === "Q" ? "format" : "stand-alone", __s189local1[__s194local5 - 3]]);
              } else {
                __s194local3 = true;
              }
              break;
            case "M":
            case "L":
              if (__s194local5 > 2) {
                __s189local0.months ||= {};
                __s189local0.months[__s194local1] ||= {};
                __s189local0.months[__s194local1][__s194local5] = __s189param1.main(["dates/calendars/gregorian/months", __s194local1 === "M" ? "format" : "stand-alone", __s189local1[__s194local5 - 3]]);
              } else {
                __s194local3 = true;
              }
              break;
            case "w":
            case "W":
              __s189local0.firstDay = __s1local32(__s189param1);
              __s189local0.minDays = __s189param1.supplemental.weekData.minDays();
              __s194local3 = true;
              break;
            case "d":
            case "D":
            case "F":
              __s194local3 = true;
              break;
            case "g":
              throw __s1local1({
                feature: "Julian day pattern `g`"
              });
            case "e":
            case "c":
              if (__s194local5 <= 2) {
                __s189local0.firstDay = __s1local32(__s189param1);
                __s194local3 = true;
                break;
              }
            case "E":
              __s189local0.days ||= {};
              __s189local0.days[__s194local1] ||= {};
              __s189local0.days[__s194local1][__s194local5] = __s194local5 === 6 ? __s189param1.main(["dates/calendars/gregorian/days", __s194local1 === "c" ? "stand-alone" : "format", "short"]) || __s189param1.main(["dates/calendars/gregorian/days", __s194local1 === "c" ? "stand-alone" : "format", "abbreviated"]) : __s189param1.main(["dates/calendars/gregorian/days", __s194local1 === "c" ? "stand-alone" : "format", __s189local1[__s194local5 < 3 ? 0 : __s194local5 - 3]]);
              break;
            case "a":
              __s189local0.dayPeriods = {
                am: __s189param1.main("dates/calendars/gregorian/dayPeriods/format/wide/am"),
                pm: __s189param1.main("dates/calendars/gregorian/dayPeriods/format/wide/pm")
              };
              break;
            case "h":
            case "H":
            case "K":
            case "k":
            case "m":
            case "s":
            case "S":
            case "A":
              __s194local3 = true;
              break;
            case "v":
              if (__s194local5 !== 1 && __s194local5 !== 4) {
                throw __s1local1({
                  feature: "timezone pattern `" + __s189param0 + "`"
                });
              }
              __s189local0.genericTzName = __s194local4;
              break;
            case "V":
              if (__s194local5 === 1) {
                throw __s1local1({
                  feature: "timezone pattern `" + __s189param0 + "`"
                });
              }
              if (__s189param2) {
                if (__s194local5 === 2) {
                  __s189local0.timeZoneName = __s189param2;
                  break;
                }
                var __s194local7;
                var __s194local8 = __s189param1.main(["dates/timeZoneNames/zone", __s189param2, "exemplarCity"]);
                if (__s194local5 === 3) {
                  __s194local8 ||= __s189param1.main(["dates/timeZoneNames/zone/Etc/Unknown/exemplarCity"]);
                  __s194local7 = __s194local8;
                }
                if (__s194local8 && __s194local5 === 4) {
                  __s194local7 = __s1local2(__s189param1.main("dates/timeZoneNames/regionFormat"), [__s194local8]);
                }
                if (__s194local7) {
                  __s189local0.timeZoneName = __s194local7;
                  break;
                }
              }
              if (__s194param0 === "v") {
                __s194local5 = 1;
              }
            case "O":
              __s189local0.gmtFormat = __s189param1.main("dates/timeZoneNames/gmtFormat");
              __s189local0.gmtZeroFormat = __s189param1.main("dates/timeZoneNames/gmtZeroFormat");
              __s194local0 = __s189param1.main("dates/timeZoneNames/hourFormat");
              __s189local0.hourFormat = __s194local5 < 4 ? [__s1local34(__s194local0), __s1local35(__s194local0, "H")] : __s1local35(__s194local0, "HH");
            case "Z":
            case "X":
            case "x":
              setNumberFormatterPattern(1);
              setNumberFormatterPattern(2);
          }
          if (__s194local3) {
            setNumberFormatterPattern(__s194local5);
          }
        });
        return __s189local0;
      }(__s184local4, __s184local1, __s184local7);
    } finally {
      __s184local1.off("get", validateRequiredCldr);
      if (__s184local8) {
        __s184local1.off("get", __s184local8);
      }
    }
    __s184local2 = __s184local5.numberFormatters;
    delete __s184local5.numberFormatters;
    for (__s184local3 in __s184local2) {
      __s184local2[__s184local3] = this.numberFormatter({
        raw: __s184local2[__s184local3]
      });
    }
    __s184local6 = function (__s224param0, __s224param1) {
      return function dateToPartsFormatter(__s226param0) {
        __s1local16(__s226param0, "value");
        __s1local20(__s226param0, "value");
        return function (__s228param0, __s228param1, __s228param2) {
          var __s228local0 = [];
          var __s228local1 = __s228param2.timeSeparator;
          if (__s228param2.timeZoneData) {
            __s228param0 = new __s1local37(__s228param0, __s228param2.timeZoneData());
          }
          __s228param2.pattern.replace(__s1local25, function (__s231param0) {
            var __s231local0;
            var __s231local1;
            var __s231local2;
            var __s231local3 = __s231param0.charAt(0);
            var __s231local4 = __s231param0.length;
            if (__s231local3 === "j") {
              __s231local3 = __s228param2.preferredTime;
            }
            if (__s231local3 === "Z") {
              if (__s231local4 < 4) {
                __s231local3 = "x";
                __s231local4 = 4;
              } else if (__s231local4 < 5) {
                __s231local3 = "O";
                __s231local4 = 4;
              } else {
                __s231local3 = "X";
                __s231local4 = 5;
              }
            }
            if (__s231local3 === "z") {
              if (__s228param0.isDST) {
                __s231local2 = __s228param0.isDST() ? __s228param2.daylightTzName : __s228param2.standardTzName;
              }
              if (!__s231local2) {
                __s231local3 = "O";
                if (__s231local4 < 4) {
                  __s231local4 = 1;
                }
              }
            }
            switch (__s231local3) {
              case "G":
                __s231local2 = __s228param2.eras[__s228param0.getFullYear() < 0 ? 0 : 1];
                break;
              case "y":
                __s231local2 = __s228param0.getFullYear();
                if (__s231local4 === 2) {
                  __s231local2 = +(__s231local2 = String(__s231local2)).substr(__s231local2.length - 2);
                }
                break;
              case "Y":
                (__s231local2 = new Date(__s228param0.getTime())).setDate(__s231local2.getDate() + 7 - __s1local41(__s228param0, __s228param2.firstDay) - __s228param2.firstDay - __s228param2.minDays);
                __s231local2 = __s231local2.getFullYear();
                if (__s231local4 === 2) {
                  __s231local2 = +(__s231local2 = String(__s231local2)).substr(__s231local2.length - 2);
                }
                break;
              case "Q":
              case "q":
                __s231local2 = Math.ceil((__s228param0.getMonth() + 1) / 3);
                if (__s231local4 > 2) {
                  __s231local2 = __s228param2.quarters[__s231local3][__s231local4][__s231local2];
                }
                break;
              case "M":
              case "L":
                __s231local2 = __s228param0.getMonth() + 1;
                if (__s231local4 > 2) {
                  __s231local2 = __s228param2.months[__s231local3][__s231local4][__s231local2];
                }
                break;
              case "w":
                __s231local2 = __s1local41(__s1local38(__s228param0, "year"), __s228param2.firstDay);
                __s231local2 = Math.ceil((__s1local42(__s228param0) + __s231local2) / 7) - (7 - __s231local2 >= __s228param2.minDays ? 0 : 1);
                break;
              case "W":
                __s231local2 = __s1local41(__s1local38(__s228param0, "month"), __s228param2.firstDay);
                __s231local2 = Math.ceil((__s228param0.getDate() + __s231local2) / 7) - (7 - __s231local2 >= __s228param2.minDays ? 0 : 1);
                break;
              case "d":
                __s231local2 = __s228param0.getDate();
                break;
              case "D":
                __s231local2 = __s1local42(__s228param0) + 1;
                break;
              case "F":
                __s231local2 = Math.floor(__s228param0.getDate() / 7) + 1;
                break;
              case "e":
              case "c":
                if (__s231local4 <= 2) {
                  __s231local2 = __s1local41(__s228param0, __s228param2.firstDay) + 1;
                  break;
                }
              case "E":
                __s231local2 = __s1local31[__s228param0.getDay()];
                __s231local2 = __s228param2.days[__s231local3][__s231local4][__s231local2];
                break;
              case "a":
                __s231local2 = __s228param2.dayPeriods[__s228param0.getHours() < 12 ? "am" : "pm"];
                break;
              case "h":
                __s231local2 = __s228param0.getHours() % 12 || 12;
                break;
              case "H":
                __s231local2 = __s228param0.getHours();
                break;
              case "K":
                __s231local2 = __s228param0.getHours() % 12;
                break;
              case "k":
                __s231local2 = __s228param0.getHours() || 24;
                break;
              case "m":
                __s231local2 = __s228param0.getMinutes();
                break;
              case "s":
                __s231local2 = __s228param0.getSeconds();
                break;
              case "S":
                __s231local2 = Math.round(__s228param0.getMilliseconds() * Math.pow(10, __s231local4 - 3));
                break;
              case "A":
                __s231local2 = Math.round(function (__s248param0) {
                  return __s248param0 - __s1local38(__s248param0, "day");
                }(__s228param0) * Math.pow(10, __s231local4 - 3));
                break;
              case "z":
                break;
              case "v":
                if (__s228param2.genericTzName) {
                  __s231local2 = __s228param2.genericTzName;
                  break;
                }
              case "V":
                if (__s228param2.timeZoneName) {
                  __s231local2 = __s228param2.timeZoneName;
                  break;
                }
                if (__s231param0 === "v") {
                  __s231local4 = 1;
                }
              case "O":
                if (__s228param0.getTimezoneOffset() === 0) {
                  __s231local2 = __s228param2.gmtZeroFormat;
                } else {
                  if (__s231local4 < 4) {
                    __s231local0 = __s228param0.getTimezoneOffset();
                    __s231local0 = __s228param2.hourFormat[__s231local0 % 60 - __s231local0 % 1 == 0 ? 0 : 1];
                  } else {
                    __s231local0 = __s228param2.hourFormat;
                  }
                  __s231local2 = __s1local44(__s228param0, __s231local0, __s228local1, __s228param1);
                  __s231local2 = __s228param2.gmtFormat.replace(/\{0\}/, __s231local2);
                }
                break;
              case "X":
                if (__s228param0.getTimezoneOffset() === 0) {
                  __s231local2 = "Z";
                  break;
                }
              case "x":
                __s231local0 = __s228param0.getTimezoneOffset();
                if (__s231local4 === 1 && __s231local0 % 60 - __s231local0 % 1 != 0) {
                  __s231local4 += 1;
                }
                if ((__s231local4 === 4 || __s231local4 === 5) && __s231local0 % 1 == 0) {
                  __s231local4 -= 2;
                }
                __s231local2 = __s1local44(__s228param0, __s231local2 = ["+HH;-HH", "+HHmm;-HHmm", "+HH:mm;-HH:mm", "+HHmmss;-HHmmss", "+HH:mm:ss;-HH:mm:ss"][__s231local4 - 1], ":");
                break;
              case ":":
                __s231local2 = __s228local1;
                break;
              case "'":
                __s231local2 = __s1local10(__s231param0);
                break;
              default:
                __s231local2 = __s231param0;
            }
            if (typeof __s231local2 == "number") {
              __s231local2 = __s228param1[__s231local4](__s231local2);
            }
            __s231local1 = __s1local43[__s231local3];
            __s1local8(__s228local0, __s231local1 || "literal", __s231local2);
          });
          return __s228local0;
        }(__s226param0, __s224param0, __s224param1);
      };
    }(__s184local2, __s184local5);
    __s1local11(__s184local0, __s184local1, __s184local6, [__s184local2, __s184local5]);
    return __s184local6;
  };
  __s1param1.dateParser = __s1param1.prototype.dateParser = function (__s261param0) {
    var __s261local0;
    var __s261local1;
    var __s261local2;
    var __s261local3;
    var __s261local4;
    var __s261local5;
    var __s261local6;
    var __s261local7;
    __s1local18(__s261param0, "options");
    __s261local1 = this.cldr;
    if (!optionsHasStyle(__s261param0 = __s261param0 || {})) {
      __s261param0.skeleton = "yMd";
    }
    validateOptionsPreset(__s261param0);
    __s1local15(__s261local1);
    __s261local6 = __s261param0.timeZone;
    __s1local19(__s261local6, "options.timeZone");
    __s261local0 = [__s261param0];
    try {
      __s261local1.on("get", validateRequiredCldr);
      if (__s261local6) {
        __s261local1.on("get", validateRequiredIana(__s261local6));
      }
      validateOptionsSkeleton(__s261local4 = __s1local30(__s261param0, __s261local1), __s261param0.skeleton);
      __s261local7 = function (__s266param0, __s266param1, __s266param2) {
        var __s266local0;
        var __s266local1 = {
          pattern: __s1local4(__s266param0)
        };
        var __s266local2 = __s1local6("timeSeparator", __s266param1);
        var __s266local3 = ["abbreviated", "wide", "narrow"];
        function hourFormatRe(__s268param0, __s268param1, __s268param2, __s268param3) {
          var __s268local0;
          __s268param2 ||= "\\d";
          __s268param1 ||= "{0}";
          __s268local0 = __s268param0.replace("+", "\\+").replace(/HH|mm|ss/g, "((" + __s268param2 + "){2})").replace(/H|m/g, "((" + __s268param2 + "){1,2})");
          if (__s268param3) {
            __s268local0 = __s268local0.replace(/:/g, __s268param3);
          }
          __s268local0 = __s268local0.split(";").map(function (__s271param0) {
            return __s268param1.replace("{0}", __s271param0);
          }).join("|");
          return new RegExp("^" + __s268local0);
        }
        function populateProperties(__s273param0, __s273param1) {
          if (!/(timeZoneNames\/zone|supplemental\/metaZones|timeZoneNames\/metazone|timeZoneNames\/regionFormat|timeZoneNames\/gmtFormat)/.test(__s273param0)) {
            if (__s273param1) {
              if ((__s273param0 = __s273param0.replace(/^.*\/dates\//, "").replace(/calendars\//, "")) === "gregorian/dayPeriods/format/wide") {
                __s273param1 = __s1local40(__s273param1, /^am|^pm/);
              }
              __s273param1 = __s1local3(__s273param1) ? Object.keys(__s273param1).map(function (__s278param0) {
                return [__s278param0, new RegExp("^" + __s1local9(__s1local4(__s273param1[__s278param0])))];
              }).sort(function (__s280param0, __s280param1) {
                return __s280param1[1].source.length - __s280param0[1].source.length;
              }) : __s1local4(__s273param1);
              __s266local1[__s273param0] = __s273param1;
            }
          }
        }
        __s266local0 = (__s266local0 = __s1local5(__s266param1)) ? "[" + __s266local0 + "]" : "\\d";
        __s266local1.digitsRe = new RegExp(__s266local0);
        __s266param1.on("get", populateProperties);
        __s266param0.match(__s1local25).forEach(function (__s282param0) {
          var __s282local0;
          var __s282local1;
          var __s282local2;
          var __s282local3;
          var __s282local4;
          var __s282local5;
          __s282local1 = __s282param0.charAt(0);
          __s282local4 = __s282param0.length;
          if (__s282local1 === "Z") {
            if (__s282local4 < 5) {
              __s282local1 = "O";
              __s282local4 = 4;
            } else {
              __s282local1 = "X";
              __s282local4 = 5;
            }
          }
          if (__s282local1 === "z") {
            __s282local5 = __s1local33(__s282local4, "standard", __s266param2, __s266param1);
            __s282local2 = __s1local33(__s282local4, "daylight", __s266param2, __s266param1);
            __s282local5 &&= __s1local9(__s1local4(__s282local5));
            __s282local2 &&= __s1local9(__s1local4(__s282local2));
            if (__s282local5 || __s282local2) {
              __s266local1.standardOrDaylightTzName = new RegExp("^" + function regexpSourceSomeTerm(__s289param0) {
                return "(" + __s289param0.filter(function (__s291param0) {
                  return __s291param0;
                }).reduce(function (__s293param0, __s293param1) {
                  return __s293param0 + "|" + __s293param1;
                }) + ")";
              }([__s282local5, __s282local2]));
            }
            if (!__s282local5 || !__s282local2) {
              __s282local1 = "O";
              if (__s282local4 < 4) {
                __s282local4 = 1;
              }
            }
          }
          if (__s282local1 === "v") {
            if (__s282local4 !== 1 && __s282local4 !== 4) {
              throw __s1local1({
                feature: "timezone pattern `" + __s266param0 + "`"
              });
            }
            var __s282local6 = __s1local33(__s282local4, "generic", __s266param2, __s266param1);
            if (__s282local6) {
              __s266local1.genericTzName = new RegExp("^" + __s1local9(__s1local4(__s282local6)));
              __s282local1 = "O";
            } else {
              __s282local1 = "V";
              __s282local4 = 4;
            }
          }
          switch (__s282local1) {
            case "G":
              __s266param1.main(["dates/calendars/gregorian/eras", __s282local4 <= 3 ? "eraAbbr" : __s282local4 === 4 ? "eraNames" : "eraNarrow"]);
              break;
            case "u":
            case "U":
              throw __s1local1({
                feature: "year pattern `" + __s282local1 + "`"
              });
            case "Q":
            case "q":
              if (__s282local4 > 2) {
                __s266param1.main(["dates/calendars/gregorian/quarters", __s282local1 === "Q" ? "format" : "stand-alone", __s266local3[__s282local4 - 3]]);
              }
              break;
            case "M":
            case "L":
              if (__s282local4 > 2) {
                __s266param1.main(["dates/calendars/gregorian/months", __s282local1 === "M" ? "format" : "stand-alone", __s266local3[__s282local4 - 3]]);
              }
              break;
            case "g":
              throw __s1local1({
                feature: "Julian day pattern `g`"
              });
            case "e":
            case "c":
              if (__s282local4 <= 2) {
                break;
              }
            case "E":
              if (__s282local4 === 6) {
                if (!__s266param1.main(["dates/calendars/gregorian/days", [__s282local1 === "c" ? "stand-alone" : "format"], "short"])) {
                  __s266param1.main(["dates/calendars/gregorian/days", [__s282local1 === "c" ? "stand-alone" : "format"], "abbreviated"]);
                }
              } else {
                __s266param1.main(["dates/calendars/gregorian/days", [__s282local1 === "c" ? "stand-alone" : "format"], __s266local3[__s282local4 < 3 ? 0 : __s282local4 - 3]]);
              }
              break;
            case "a":
              __s266param1.main("dates/calendars/gregorian/dayPeriods/format/wide");
              break;
            case "V":
              if (__s282local4 === 1) {
                throw __s1local1({
                  feature: "timezone pattern `" + __s266param0 + "`"
                });
              }
              if (__s266param2) {
                if (__s282local4 === 2) {
                  __s266local1.timeZoneName = __s266param2;
                  __s266local1.timeZoneNameRe = new RegExp("^" + __s1local9(__s266param2));
                  break;
                }
                var __s282local7;
                var __s282local8 = __s266param1.main(["dates/timeZoneNames/zone", __s266param2, "exemplarCity"]);
                if (__s282local4 === 3) {
                  __s282local8 ||= __s266param1.main(["dates/timeZoneNames/zone/Etc/Unknown/exemplarCity"]);
                  __s282local7 = __s282local8;
                }
                if (__s282local8 && __s282local4 === 4) {
                  __s282local7 = __s1local2(__s266param1.main("dates/timeZoneNames/regionFormat"), [__s282local8]);
                }
                if (__s282local7) {
                  __s282local7 = __s1local4(__s282local7);
                  __s266local1.timeZoneName = __s282local7;
                  __s266local1.timeZoneNameRe = new RegExp("^" + __s1local9(__s282local7));
                }
              }
              if (__s282param0 === "v") {
                __s282local4 = 1;
              }
            case "z":
            case "O":
              __s282local3 = __s266param1.main("dates/timeZoneNames/gmtFormat");
              __s266param1.main("dates/timeZoneNames/gmtZeroFormat");
              __s266param1.main("dates/timeZoneNames/hourFormat");
              __s266local1["timeZoneNames/gmtZeroFormatRe"] = new RegExp("^" + __s1local9(__s266local1["timeZoneNames/gmtZeroFormat"]));
              __s282local0 = __s266local1["timeZoneNames/hourFormat"];
              __s266local1["timeZoneNames/hourFormat"] = (__s282local4 < 4 ? [__s1local35(__s282local0, "H"), __s1local34(__s282local0)] : [__s1local35(__s282local0, "HH")]).map(function (__s315param0) {
                return hourFormatRe(__s315param0, __s282local3, __s266local0, __s266local2);
              });
            case "X":
            case "x":
              __s266local1.x = [["+HHmm;-HHmm", "+HH;-HH"], ["+HHmm;-HHmm"], ["+HH:mm;-HH:mm"], ["+HHmmss;-HHmmss", "+HHmm;-HHmm"], ["+HH:mm:ss;-HH:mm:ss", "+HH:mm;-HH:mm"]][__s282local4 - 1].map(function (__s317param0) {
                return hourFormatRe(__s317param0);
              });
          }
        });
        __s266param1.off("get", populateProperties);
        return __s266local1;
      }(__s261local4, __s261local1, __s261local6);
      __s261local3 = function (__s319param0, __s319param1) {
        var __s319local0 = {
          preferredTimeData: __s319param0.supplemental.timeData.preferred()
        };
        if (__s319param1) {
          __s319local0.timeZoneData = __s1local36("iana/" + __s319param1, {
            offsets: __s319param0.get(["globalize-iana/zoneData", __s319param1, "offsets"]),
            untils: __s319param0.get(["globalize-iana/zoneData", __s319param1, "untils"]),
            isdsts: __s319param0.get(["globalize-iana/zoneData", __s319param1, "isdsts"])
          });
        }
        return __s319local0;
      }(__s261local1, __s261local6);
    } finally {
      __s261local1.off("get", validateRequiredCldr);
      if (__s261local6) {
        __s261local1.off("get", validateRequiredIana(__s261local6));
      }
    }
    __s261local5 = function (__s324param0, __s324param1, __s324param2) {
      return function dateParser(__s326param0) {
        __s1local16(__s326param0, "value");
        __s1local19(__s326param0, "value");
        return function (__s328param0, __s328param1, __s328param2) {
          var __s328local0;
          var __s328local1;
          var __s328local2;
          var __s328local3;
          var __s328local4;
          var __s328local5;
          var __s328local6;
          var __s328local7;
          var __s328local8;
          var __s328local9 = new Date();
          var __s328local10 = [];
          if (__s328param2.timeZoneData) {
            __s328local9 = new __s1local37(__s328local9, __s328param2.timeZoneData());
          }
          if (!__s328param1.length) {
            return null;
          }
          if (!__s328param1.every(function (__s332param0) {
            var __s332local0;
            var __s332local1;
            var __s332local2;
            if (__s332param0.type === "literal") {
              return true;
            }
            __s332local0 = __s332param0.type.charAt(0);
            __s332local2 = __s332param0.type.length;
            if (__s332local0 === "j") {
              __s332local0 = __s328param2.preferredTimeData;
            }
            switch (__s332local0) {
              case "G":
                __s328local10.push(0);
                __s328local4 = +__s332param0.value;
                break;
              case "y":
                __s332local1 = __s332param0.value;
                if (__s332local2 === 2) {
                  if (__s1local39(__s332local1, 0, 99)) {
                    return false;
                  }
                  if ((__s332local1 += Math.floor(__s328local9.getFullYear() / 100) * 100) > __s328local9.getFullYear() + 20) {
                    __s332local1 -= 100;
                  }
                }
                __s328local9.setFullYear(__s332local1);
                __s328local10.push(0);
                break;
              case "Y":
                throw __s1local1({
                  feature: "year pattern `" + __s332local0 + "`"
                });
              case "Q":
              case "q":
                break;
              case "M":
              case "L":
                __s332local1 = __s332local2 <= 2 ? __s332param0.value : +__s332param0.value;
                if (__s1local39(__s332local1, 1, 12)) {
                  return false;
                }
                __s328local3 = __s332local1;
                __s328local10.push(1);
                break;
              case "w":
              case "W":
                break;
              case "d":
                __s328local1 = __s332param0.value;
                __s328local10.push(2);
                break;
              case "D":
                __s328local2 = __s332param0.value;
                __s328local10.push(2);
                break;
              case "F":
                break;
              case "e":
              case "c":
              case "E":
                break;
              case "a":
                __s328local0 = __s332param0.value;
                break;
              case "h":
                __s332local1 = __s332param0.value;
                if (__s1local39(__s332local1, 1, 12)) {
                  return false;
                }
                __s328local5 = __s328local6 = true;
                __s328local9.setHours(__s332local1 === 12 ? 0 : __s332local1);
                __s328local10.push(3);
                break;
              case "K":
                __s332local1 = __s332param0.value;
                if (__s1local39(__s332local1, 0, 11)) {
                  return false;
                }
                __s328local5 = __s328local6 = true;
                __s328local9.setHours(__s332local1);
                __s328local10.push(3);
                break;
              case "k":
                __s332local1 = __s332param0.value;
                if (__s1local39(__s332local1, 1, 24)) {
                  return false;
                }
                __s328local5 = true;
                __s328local9.setHours(__s332local1 === 24 ? 0 : __s332local1);
                __s328local10.push(3);
                break;
              case "H":
                __s332local1 = __s332param0.value;
                if (__s1local39(__s332local1, 0, 23)) {
                  return false;
                }
                __s328local5 = true;
                __s328local9.setHours(__s332local1);
                __s328local10.push(3);
                break;
              case "m":
                __s332local1 = __s332param0.value;
                if (__s1local39(__s332local1, 0, 59)) {
                  return false;
                }
                __s328local9.setMinutes(__s332local1);
                __s328local10.push(4);
                break;
              case "s":
                __s332local1 = __s332param0.value;
                if (__s1local39(__s332local1, 0, 59)) {
                  return false;
                }
                __s328local9.setSeconds(__s332local1);
                __s328local10.push(5);
                break;
              case "A":
                __s328local9.setHours(0);
                __s328local9.setMinutes(0);
                __s328local9.setSeconds(0);
              case "S":
                __s332local1 = Math.round(__s332param0.value * Math.pow(10, 3 - __s332local2));
                __s328local9.setMilliseconds(__s332local1);
                __s328local10.push(6);
                break;
              case "z":
              case "Z":
              case "O":
              case "v":
              case "V":
              case "X":
              case "x":
                if (typeof __s332param0.value == "number") {
                  __s328local7 = __s332param0.value;
                }
            }
            return true;
          })) {
            return null;
          }
          if (__s328local5 && !(!__s328local0 ^ __s328local6)) {
            return null;
          }
          if (__s328local4 === 0) {
            __s328local9.setFullYear(__s328local9.getFullYear() * -1 + 1);
          }
          if (__s328local3 !== undefined) {
            (function (__s352param0, __s352param1) {
              var __s352local0 = __s352param0.getDate();
              __s352param0.setDate(1);
              __s352param0.setMonth(__s352param1);
              (function (__s354param0, __s354param1) {
                var __s354local0 = new Date(__s354param0.getFullYear(), __s354param0.getMonth() + 1, 0).getDate();
                __s354param0.setDate(__s354param1 < 1 ? 1 : __s354param1 < __s354local0 ? __s354param1 : __s354local0);
              })(__s352param0, __s352local0);
            })(__s328local9, __s328local3 - 1);
          }
          if (__s328local1 !== undefined) {
            if (__s1local39(__s328local1, 1, function (__s357param0) {
              return new Date(__s357param0.getFullYear(), __s357param0.getMonth() + 1, 0).getDate();
            }(__s328local9))) {
              return null;
            }
            __s328local9.setDate(__s328local1);
          } else if (__s328local2 !== undefined) {
            if (__s1local39(__s328local2, 1, (__s328local8 = __s328local9.getFullYear(), new Date(__s328local8, 1, 29).getMonth() === 1 ? 366 : 365))) {
              return null;
            }
            __s328local9.setMonth(0);
            __s328local9.setDate(__s328local2);
          }
          if (__s328local6 && __s328local0 === "pm") {
            __s328local9.setHours(__s328local9.getHours() + 12);
          }
          if (__s328local7 !== undefined) {
            __s328local9.setMinutes(__s328local9.getMinutes() + __s328local7 - __s328local9.getTimezoneOffset());
          }
          __s328local10 = Math.max.apply(null, __s328local10);
          if ((__s328local9 = __s1local38(__s328local9, ["year", "month", "day", "hour", "minute", "second", "milliseconds"][__s328local10])) instanceof __s1local37) {
            __s328local9 = __s328local9.toDate();
          }
          return __s328local9;
        }(0, function (__s365param0, __s365param1, __s365param2) {
          var __s365local0;
          var __s365local1;
          var __s365local2 = [];
          var __s365local3 = ["abbreviated", "wide", "narrow"];
          __s365local0 = __s365param2.digitsRe;
          __s365param0 = __s1local4(__s365param0);
          __s365local1 = __s365param2.pattern.match(__s1local25).every(function (__s367param0) {
            var __s367local0;
            var __s367local1;
            var __s367local2;
            var __s367local3;
            var __s367local4 = {};
            function hourFormatParse(__s369param0, __s369param1) {
              var __s369local0;
              var __s369local1;
              var __s369local2 = __s365param0.match(__s369param0);
              __s369param1 = __s369param1 || function (__s371param0) {
                return +__s371param0;
              };
              return !!__s369local2 && (__s369local1 = __s369local2[1], __s369local2.length < 6 ? (__s369local0 = __s369local1 ? 1 : 3, __s367local4.value = __s369param1(__s369local2[__s369local0]) * 60) : __s369local2.length < 10 ? (__s369local0 = __s369local1 ? [1, 3] : [5, 7], __s367local4.value = __s369param1(__s369local2[__s369local0[0]]) * 60 + __s369param1(__s369local2[__s369local0[1]])) : (__s369local0 = __s369local1 ? [1, 3, 5] : [7, 9, 11], __s367local4.value = __s369param1(__s369local2[__s369local0[0]]) * 60 + __s369param1(__s369local2[__s369local0[1]]) + __s369param1(__s369local2[__s369local0[2]]) / 60), __s369local1 && (__s367local4.value *= -1), true);
            }
            function oneDigitIfLengthOne() {
              if (__s367local1 === 1) {
                __s367local2 = true;
                return __s367local3 = __s365local0;
              }
            }
            function oneOrTwoDigitsIfLengthOneOrTwo() {
              if (__s367local1 === 1 || __s367local1 === 2) {
                __s367local2 = true;
                return __s367local3 = new RegExp("^(" + __s365local0.source + "){1,2}");
              }
            }
            function twoDigitsIfLengthTwo() {
              if (__s367local1 === 2) {
                __s367local2 = true;
                return __s367local3 = new RegExp("^(" + __s365local0.source + "){2}");
              }
            }
            function lookup(__s382param0) {
              var __s382local0 = __s365param2[__s382param0.join("/")];
              if (__s382local0) {
                __s382local0.some(function (__s385param0) {
                  if (__s385param0[1].test(__s365param0)) {
                    __s367local4.value = __s385param0[0];
                    __s367local3 = __s385param0[1];
                    return true;
                  }
                });
                return null;
              } else {
                return null;
              }
            }
            __s367local4.type = __s367param0;
            __s367local0 = __s367param0.charAt(0);
            __s367local1 = __s367param0.length;
            if (__s367local0 === "Z") {
              if (__s367local1 < 4) {
                __s367local0 = "x";
                __s367local1 = 4;
              } else if (__s367local1 < 5) {
                __s367local0 = "O";
                __s367local1 = 4;
              } else {
                __s367local0 = "X";
                __s367local1 = 5;
              }
            }
            if (__s367local0 === "z" && __s365param2.standardOrDaylightTzName) {
              __s367local4.value = null;
              __s367local3 = __s365param2.standardOrDaylightTzName;
            }
            if (__s367local0 === "v") {
              if (__s365param2.genericTzName) {
                __s367local4.value = null;
                __s367local3 = __s365param2.genericTzName;
              } else {
                __s367local0 = "V";
                __s367local1 = 4;
              }
            }
            if (__s367local0 === "V" && __s365param2.timeZoneName) {
              __s367local4.value = __s367local1 === 2 ? __s365param2.timeZoneName : null;
              __s367local3 = __s365param2.timeZoneNameRe;
            }
            switch (__s367local0) {
              case "G":
                lookup(["gregorian/eras", __s367local1 <= 3 ? "eraAbbr" : __s367local1 === 4 ? "eraNames" : "eraNarrow"]);
                break;
              case "y":
              case "Y":
                __s367local2 = true;
                __s367local3 = __s367local1 === 1 ? new RegExp("^(" + __s365local0.source + ")+") : __s367local1 === 2 ? new RegExp("^(" + __s365local0.source + "){1,2}") : new RegExp("^(" + __s365local0.source + "){" + __s367local1 + ",}");
                break;
              case "Q":
              case "q":
                if (!oneDigitIfLengthOne() && !twoDigitsIfLengthTwo()) {
                  lookup(["gregorian/quarters", __s367local0 === "Q" ? "format" : "stand-alone", __s365local3[__s367local1 - 3]]);
                }
                break;
              case "M":
              case "L":
                if (!oneOrTwoDigitsIfLengthOneOrTwo()) {
                  lookup(["gregorian/months", __s367local0 === "M" ? "format" : "stand-alone", __s365local3[__s367local1 - 3]]);
                }
                break;
              case "D":
                if (__s367local1 <= 3) {
                  __s367local2 = true;
                  __s367local3 = new RegExp("^(" + __s365local0.source + "){" + __s367local1 + ",3}");
                }
                break;
              case "W":
              case "F":
                oneDigitIfLengthOne();
                break;
              case "e":
              case "c":
                if (__s367local1 <= 2) {
                  if (!oneDigitIfLengthOne()) {
                    twoDigitsIfLengthTwo();
                  }
                  break;
                }
              case "E":
                if (__s367local1 === 6) {
                  if (!lookup(["gregorian/days", [__s367local0 === "c" ? "stand-alone" : "format"], "short"])) {
                    lookup(["gregorian/days", [__s367local0 === "c" ? "stand-alone" : "format"], "abbreviated"]);
                  }
                } else {
                  lookup(["gregorian/days", [__s367local0 === "c" ? "stand-alone" : "format"], __s365local3[__s367local1 < 3 ? 0 : __s367local1 - 3]]);
                }
                break;
              case "a":
                lookup(["gregorian/dayPeriods/format/wide"]);
                break;
              case "w":
                if (!function oneOrTwoDigitsIfLengthOne() {
                  if (__s367local1 === 1) {
                    __s367local2 = true;
                    return __s367local3 = new RegExp("^(" + __s365local0.source + "){1,2}");
                  }
                }()) {
                  twoDigitsIfLengthTwo();
                }
                break;
              case "d":
              case "h":
              case "H":
              case "K":
              case "k":
              case "j":
              case "m":
              case "s":
                oneOrTwoDigitsIfLengthOneOrTwo();
                break;
              case "S":
                __s367local2 = true;
                __s367local3 = new RegExp("^(" + __s365local0.source + "){" + __s367local1 + "}");
                break;
              case "A":
                __s367local2 = true;
                __s367local3 = new RegExp("^(" + __s365local0.source + "){" + (__s367local1 + 5) + "}");
                break;
              case "v":
              case "V":
              case "z":
                if (__s367local3 && __s367local3.test(__s365param0)) {
                  break;
                }
                if (__s367local0 === "V" && __s367local1 === 2) {
                  break;
                }
              case "O":
                if (__s365param0 === __s365param2["timeZoneNames/gmtZeroFormat"]) {
                  __s367local4.value = 0;
                  __s367local3 = __s365param2["timeZoneNames/gmtZeroFormatRe"];
                } else if (!__s365param2["timeZoneNames/hourFormat"].some(function (__s414param0) {
                  if (hourFormatParse(__s414param0, __s365param1)) {
                    __s367local3 = __s414param0;
                    return true;
                  }
                })) {
                  return null;
                }
                break;
              case "X":
                if (__s365param0 === "Z") {
                  __s367local4.value = 0;
                  __s367local3 = /^Z/;
                  break;
                }
              case "x":
                if (!__s365param2.x.some(function (__s419param0) {
                  if (hourFormatParse(__s419param0)) {
                    __s367local3 = __s419param0;
                    return true;
                  }
                })) {
                  return null;
                }
                break;
              case "'":
                __s367local4.type = "literal";
                __s367local3 = new RegExp("^" + __s1local9(__s1local10(__s367param0)));
                break;
              default:
                __s367local4.type = "literal";
                __s367local3 = new RegExp("^" + __s1local9(__s367param0));
            }
            return !!__s367local3 && !(__s365param0 = __s365param0.replace(__s367local3, function (__s423param0) {
              __s367local4.lexeme = __s423param0;
              if (__s367local2) {
                __s367local4.value = __s365param1(__s423param0);
              }
              return "";
            }), !__s367local4.lexeme || __s367local2 && isNaN(__s367local4.value) || (__s365local2.push(__s367local4), 0));
          });
          if (__s365param0 !== "") {
            __s365local1 = false;
          }
          if (__s365local1) {
            return __s365local2;
          } else {
            return [];
          }
        }(__s326param0, __s324param0, __s324param2), __s324param1) || null;
      };
    }(__s261local2 = this.numberParser({
      raw: "0"
    }), __s261local3, __s261local7);
    __s1local11(__s261local0, __s261local1, __s261local5, [__s261local2, __s261local3, __s261local7]);
    return __s261local5;
  };
  __s1param1.formatDate = __s1param1.prototype.formatDate = function (__s429param0, __s429param1) {
    __s1local16(__s429param0, "value");
    __s1local20(__s429param0, "value");
    return this.dateFormatter(__s429param1)(__s429param0);
  };
  __s1param1.formatDateToParts = __s1param1.prototype.formatDateToParts = function (__s431param0, __s431param1) {
    __s1local16(__s431param0, "value");
    __s1local20(__s431param0, "value");
    return this.dateToPartsFormatter(__s431param1)(__s431param0);
  };
  __s1param1.parseDate = __s1param1.prototype.parseDate = function (__s433param0, __s433param1) {
    __s1local16(__s433param0, "value");
    __s1local19(__s433param0, "value");
    return this.dateParser(__s433param1)(__s433param0);
  };
  return __s1param1;
}) == "function" ? __s0local0.apply(exports, __s0local1) : __s0local0) !== undefined) {
  module.exports = __s0local2;
}
