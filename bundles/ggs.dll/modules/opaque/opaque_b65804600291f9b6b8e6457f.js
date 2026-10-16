var __s0local0;
var __s0local1;
var __s0local2;
__s0local1 = [require("gge-module:opaque_5c61709ecb7732e44481babe"), require("gge-module:class_Globalize"), require("gge-module:exact_f70a9f50ff0ced05"), require("gge-module:exact_2eb0a95d73d217d1")];
if ((__s0local2 = typeof (__s0local0 = function (__s1param0, __s1param1) {
  var __s1local0 = __s1param1._createError;
  var __s1local1 = __s1param1._partsJoin;
  var __s1local2 = __s1param1._partsPush;
  var __s1local3 = __s1param1._regexpEscape;
  var __s1local4 = __s1param1._runtimeBind;
  var __s1local5 = __s1param1._stringPad;
  var __s1local6 = __s1param1._validateCldr;
  var __s1local7 = __s1param1._validateDefaultLocale;
  var __s1local8 = __s1param1._validateParameterPresence;
  var __s1local9 = __s1param1._validateParameterRange;
  var __s1local10 = __s1param1._validateParameterType;
  var __s1local11 = __s1param1._validateParameterTypePlainObject;
  function __s1local12(__s3param0) {
    return __s1local0("E_UNSUPPORTED", "Unsupported {feature}.", {
      feature: __s3param0
    });
  }
  function __s1local13(__s5param0, __s5param1) {
    __s1local10(__s5param0, __s5param1, __s5param0 === undefined || typeof __s5param0 == "number", "Number");
  }
  function __s1local14(__s7param0, __s7param1) {
    __s1local10(__s7param0, __s7param1, __s7param0 === undefined || typeof __s7param0 == "string", "a string");
  }
  function __s1local15(__s9param0) {
    var __s9local0 = __s9param0.attributes["u-nu"];
    if (__s9local0) {
      if (__s9local0 === "traditio") {
        __s9local0 = "traditional";
      }
      if (["native", "traditional", "finance"].indexOf(__s9local0) !== -1) {
        return __s9param0.main(["numbers/otherNumberingSystems", __s9local0]);
      } else {
        return __s9local0;
      }
    } else {
      return __s9param0.main("numbers/defaultNumberingSystem");
    }
  }
  function __s1local16(__s16param0) {
    var __s16local0;
    var __s16local1 = __s1local15(__s16param0);
    if (__s16local1 !== "latn") {
      if ((__s16local0 = __s16param0.supplemental(["numberingSystems", __s16local1]))._type !== "numeric") {
        throw __s1local12("`" + __s16local0._type + "` numbering system");
      }
      return __s16local0._digits;
    }
  }
  var __s1local17 = /^(('([^']|'')*'|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
  function __s1local18(__s20param0) {
    var __s20local0;
    var __s20local1;
    var __s20local2;
    var __s20local3;
    var __s20local4;
    var __s20local5;
    var __s20local6;
    var __s20local7;
    var __s20local8;
    var __s20local9;
    var __s20local10;
    var __s20local11;
    var __s20local12;
    var __s20local13;
    var __s20local14;
    var __s20local15;
    var __s20local16;
    var __s20local17;
    if (!(__s20param0 = __s20param0.match(__s1local17))) {
      throw new Error("Invalid pattern: " + __s20param0);
    }
    __s20local11 = __s20param0[1];
    __s20local10 = __s20param0[4];
    __s20local3 = __s20param0[5];
    __s20local16 = __s20param0[9];
    __s20local14 = __s20param0[10];
    __s20local17 = __s20param0[11];
    if (__s20local16) {
      __s20local16.replace(/(@+)(#*)/, function (__s24param0, __s24param1, __s24param2) {
        __s20local9 = __s24param1.length;
        __s20local6 = __s20local9 + __s24param2.length;
      });
    } else {
      __s20local2 = __s20param0[8];
      __s20local4 = __s20param0[7];
      if (__s20local2) {
        __s20local2.replace(/[0-9]+/, function (__s28param0) {
          __s20local7 = __s28param0;
        });
        if (__s20local7) {
          __s20local13 = +("0." + __s20local7);
          __s20local7 = __s20local7.length;
        } else {
          __s20local7 = 0;
        }
        __s20local5 = __s20local2.length - 1;
      } else {
        __s20local7 = 0;
        __s20local5 = 0;
      }
      __s20local4.replace(/0+$/, function (__s33param0) {
        __s20local8 = __s33param0.length;
      });
    }
    if (__s20local14) {
      throw __s1local12({
        feature: "scientific notation (not implemented)"
      });
    }
    if (__s20local10) {
      throw __s1local12({
        feature: "padding (not implemented)"
      });
    }
    if ((__s20local0 = __s20local3.lastIndexOf(",")) !== -1) {
      __s20local1 = __s20local3.split(".")[0];
      __s20local12 = __s20local1.length - __s20local0 - 1;
      if ((__s20local1 = __s20local3.lastIndexOf(",", __s20local0 - 1)) !== -1) {
        __s20local15 = __s20local0 - 1 - __s20local1;
      }
    }
    return [__s20local11, __s20local10, __s20local8, __s20local7, __s20local5, __s20local9, __s20local6, __s20local13, __s20local12, __s20local15, __s20local17];
  }
  function __s1local19(__s39param0, __s39param1) {
    return __s39param1.main(["numbers/symbols-numberSystem-" + __s1local15(__s39param1), __s39param0]);
  }
  var __s1local20 = {
    ".": "decimal",
    ",": "group",
    "%": "percentSign",
    "+": "plusSign",
    "-": "minusSign",
    E: "exponential",
    "‰": "perMille"
  };
  function __s1local21(__s41param0) {
    if (isNaN(__s41param0)) {
      return NaN;
    } else {
      return Math[__s41param0 < 0 ? "ceil" : "floor"](__s41param0);
    }
  }
  function __s1local22(__s45param0, __s45param1, __s45param2) {
    var __s45local0;
    var __s45local1;
    var __s45local2;
    var __s45local3;
    var __s45local4;
    var __s45local5;
    var __s45local6;
    var __s45local7;
    function getOptions(__s47param0, __s47param1) {
      if (__s47param0 in __s45param2) {
        __s45local6[__s47param1] = __s45param2[__s47param0];
      }
    }
    __s45param2 = __s45param2 || {};
    __s45param0 = __s45param0.split(";");
    __s45local4 = __s45param0[0];
    __s45local0 = __s45param0[1] || "-" + __s45local4;
    __s45local2 = __s1local18(__s45local0);
    __s45local1 = __s45local2[0];
    __s45local3 = __s45local2[10];
    __s45local7 = (__s45local7 = (__s45local7 = __s45param2.round) || "round") === "truncate" ? __s1local21 : Math[__s45local7];
    (__s45local5 = function (__s50param0, __s50param1) {
      var __s50local0;
      var __s50local1;
      __s50param0 = +__s50param0;
      if (isNaN(__s50param0)) {
        return NaN;
      }
      if (typeof __s50param1 == "object" && __s50param1.exponent) {
        __s50local1 = 1;
        if ((__s50local0 = +__s50param1.exponent) == 0) {
          return __s45local7(__s50param0);
        }
        if (typeof __s50local0 != "number" || __s50local0 % 1 != 0) {
          return NaN;
        }
      } else {
        if ((__s50local1 = +__s50param1 || 1) === 1) {
          return __s45local7(__s50param0);
        }
        if (isNaN(__s50local1)) {
          return NaN;
        }
        __s50local0 = +(__s50local1 = __s50local1.toExponential().split("e"))[1];
        __s50local1 = +__s50local1[0];
      }
      (__s50param0 = __s50param0.toString().split("e"))[0] = +__s50param0[0] / __s50local1;
      __s50param0[1] = __s50param0[1] ? +__s50param0[1] - __s50local0 : -__s50local0;
      (__s50param0 = (__s50param0 = __s45local7(+(__s50param0[0] + "e" + __s50param0[1]))).toString().split("e"))[0] = +__s50param0[0] * __s50local1;
      __s50param0[1] = __s50param0[1] ? +__s50param0[1] + __s50local0 : __s50local0;
      return +(__s50param0[0] + "e" + __s50param0[1]);
    }).generatorString = function () {
      return "numberRound(" + (__s45param2.round ? "\"" + __s45param2.round + "\"" : "") + ")";
    };
    __s45local6 = __s1local18(__s45local4).concat([__s45local4, __s45local1 + __s45local4 + __s45local3, __s45local1, __s45local3, __s45local5, __s1local19("infinity", __s45param1), __s1local19("nan", __s45param1), function (__s61param0) {
      var __s61local0;
      var __s61local1 = {};
      for (__s61local0 in __s1local20) {
        __s61local1[__s61local0] = __s1local19(__s1local20[__s61local0], __s61param0);
      }
      return __s61local1;
    }(__s45param1), __s1local16(__s45param1)]);
    if (__s45param2.compact) {
      __s45local6[2] = 1;
      __s45local6[3] = 0;
      __s45local6[4] = 0;
      __s45local6[5] = __s45local6[6] = undefined;
      __s45local6[20] = function (__s66param0, __s66param1) {
        var __s66local0 = 0;
        var __s66local1 = __s66param1.main(["numbers/decimalFormats-numberSystem-" + __s1local15(__s66param1), __s66param0, "decimalFormat"]);
        (__s66local1 = Object.keys(__s66local1).reduce(function (__s68param0, __s68param1) {
          var __s68local0 = __s68param1.split("0").length - 1;
          var __s68local1 = __s68param1.split("-")[2];
          __s68param0[__s68local0] = __s68param0[__s68local0] || {};
          __s68param0[__s68local0][__s68local1] = __s66local1[__s68param1];
          __s66local0 = Math.max(__s68local0, __s66local0);
          return __s68param0;
        }, {})).maxExponent = __s66local0;
        return __s66local1;
      }(__s45param2.compact, __s45param1);
    }
    getOptions("minimumIntegerDigits", 2);
    getOptions("minimumFractionDigits", 3);
    getOptions("maximumFractionDigits", 4);
    getOptions("minimumSignificantDigits", 5);
    getOptions("maximumSignificantDigits", 6);
    if (__s45param2.useGrouping === false) {
      __s45local6[8] = null;
    }
    if ("minimumFractionDigits" in __s45param2 && !("maximumFractionDigits" in __s45param2)) {
      __s45local6[4] = Math.max(__s45local6[3], __s45local6[4]);
    } else if (!("minimumFractionDigits" in __s45param2) && "maximumFractionDigits" in __s45param2) {
      __s45local6[3] = Math.min(__s45local6[3], __s45local6[4]);
    }
    return __s45local6;
  }
  var __s1local23 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;
  var __s1local24 = /[\x2D\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]|\uD803\uDEAD/g;
  var __s1local25 = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
  function __s1local26(__s73param0) {
    return __s73param0.replace(__s1local23, "").replace(__s1local24, "-").replace(__s1local25, " ");
  }
  function __s1local27(__s75param0, __s75param1) {
    return Object.keys(__s75param0).map(function (__s77param0) {
      return __s75param1([__s77param0, __s75param0[__s77param0]]);
    }).reduce(function (__s79param0, __s79param1) {
      __s79param0[__s79param1[0]] = __s79param1[1];
      return __s79param0;
    }, {});
  }
  function __s1local28(__s81param0) {
    if (__s81param0[0] + __s81param0[__s81param0.length - 1] !== "''") {
      return __s81param0;
    } else if (__s81param0 === "''") {
      return "'";
    } else {
      return __s81param0.replace(/''/g, "'").slice(1, -1);
    }
  }
  function __s1local29(__s86param0, __s86param1) {
    if (__s86param0 !== "decimal" && __s86param0 !== "percent") {
      throw new Error("Invalid style");
    }
    return __s86param1.main(["numbers", __s86param0 + "Formats-numberSystem-" + __s1local15(__s86param1), "standard"]);
  }
  var __s1local30 = /^([^0]*)(0+)([^0]*)$/;
  function __s1local31(__s89param0, __s89param1, __s89param2) {
    var __s89local0;
    if (__s89param0 === 0) {
      return __s89param0;
    } else {
      __s89local0 = Math.ceil(Math.log(Math.abs(__s89param0)) / Math.log(10));
      return __s89param2(__s89param0, {
        exponent: __s89local0 -= __s89param1
      });
    }
  }
  __s1param1.numberFormatter = __s1param1.prototype.numberFormatter = function (__s93param0) {
    var __s93local0;
    var __s93local1;
    var __s93local2;
    __s1local11(__s93param0, "options");
    __s93local0 = [__s93param0 = __s93param0 || {}];
    __s93local2 = function (__s95param0) {
      return function numberFormatter(__s97param0) {
        return __s1local1(__s95param0(__s97param0));
      };
    }(__s93local1 = this.numberToPartsFormatter(__s93param0));
    __s1local4(__s93local0, this.cldr, __s93local2, [__s93local1]);
    return __s93local2;
  };
  __s1param1.numberToPartsFormatter = __s1param1.prototype.numberToPartsFormatter = function (__s99param0) {
    var __s99local0;
    var __s99local1;
    var __s99local2;
    var __s99local3;
    var __s99local4;
    var __s99local5;
    __s1local11(__s99param0, "options");
    __s99param0 = __s99param0 || {};
    __s99local1 = this.cldr;
    __s99local0 = [__s99param0];
    __s1local7(__s99local1);
    __s99local1.on("get", __s1local6);
    try {
      __s99local3 = __s99param0.raw ? __s99param0.raw : __s1local29(__s99param0.style || "decimal", __s99local1);
      __s99local2 = [__s99local4 = __s1local22(__s99local3, __s99local1, __s99param0)];
    } finally {
      __s99local1.off("get", __s1local6);
    }
    (function validateDigits(__s103param0) {
      var __s103local0 = __s103param0[2];
      var __s103local1 = __s103param0[3];
      var __s103local2 = __s103param0[4];
      var __s103local3 = __s103param0[5];
      var __s103local4 = __s103param0[6];
      if (isNaN(__s103local3 * __s103local4)) {
        if (!isNaN(__s103local3) || !isNaN(__s103local4)) {
          throw new Error("Neither or both the minimum and maximum significant digits must be present");
        }
        __s1local9(__s103local0, "minimumIntegerDigits", 1, 21);
        __s1local9(__s103local1, "minimumFractionDigits", 0, 20);
        __s1local9(__s103local2, "maximumFractionDigits", __s103local1, 20);
      } else {
        __s1local9(__s103local3, "minimumSignificantDigits", 1, 21);
        __s1local9(__s103local4, "maximumSignificantDigits", __s103local3, 21);
      }
    })(__s99local4);
    if (__s99param0.compact) {
      __s99local2.push(this.pluralGenerator());
    }
    __s99local5 = function (__s109param0, __s109param1) {
      return function numberToPartsFormatter(__s111param0) {
        __s1local8(__s111param0, "value");
        __s1local13(__s111param0, "value");
        return function (__s113param0, __s113param1, __s113param2) {
          var __s113local0;
          var __s113local1;
          var __s113local2;
          var __s113local3;
          var __s113local4;
          var __s113local5;
          var __s113local6;
          var __s113local7;
          var __s113local8;
          var __s113local9;
          var __s113local10;
          var __s113local11;
          var __s113local12;
          var __s113local13;
          var __s113local14;
          var __s113local15;
          var __s113local16;
          var __s113local17;
          var __s113local18;
          var __s113local19;
          var __s113local20;
          var __s113local21;
          var __s113local22;
          var __s113local23;
          var __s113local24;
          __s113local6 = __s113param1[2];
          __s113local5 = __s113param1[3];
          __s113local3 = __s113param1[4];
          __s113local7 = __s113param1[5];
          __s113local4 = __s113param1[6];
          __s113local14 = __s113param1[7];
          __s113local11 = __s113param1[8];
          __s113local15 = __s113param1[9];
          __s113local13 = __s113param1[15];
          __s113local2 = __s113param1[16];
          __s113local8 = __s113param1[17];
          __s113local18 = __s113param1[18];
          __s113local9 = __s113param1[19];
          __s113local1 = __s113param1[20];
          if (isNaN(__s113param0)) {
            return [{
              type: "nan",
              value: __s113local8
            }];
          } else {
            if (__s113param0 < 0) {
              __s113local12 = __s113param1[12];
              __s113local10 = __s113param1[13];
              __s113local17 = __s113param1[14];
            } else {
              __s113local12 = __s113param1[11];
              __s113local10 = __s113param1[0];
              __s113local17 = __s113param1[10];
            }
            __s113local10 = (__s113local16 = function (__s119param0) {
              var __s119local0 = "integer";
              var __s119local1 = [];
              __s119param0.replace(/('([^']|'')+'|'')|./g, function (__s121param0, __s121param1) {
                if (__s121param1) {
                  __s1local2(__s119local1, "literal", __s1local28(__s121param1));
                } else if (__s121param0 !== "¤") {
                  (__s121param0 = (__s121param0 = __s121param0.replace(/[.,\-+E%\u2030]/, function (__s125param0) {
                    if (__s125param0 === ".") {
                      __s119local0 = "fraction";
                    }
                    __s1local2(__s119local1, __s1local20[__s125param0], __s113local18[__s125param0]);
                    return "";
                  })).replace(/[0-9]/, function (__s128param0) {
                    if (__s113local9) {
                      __s128param0 = __s113local9[+__s128param0];
                    }
                    __s1local2(__s119local1, __s119local0, __s128param0);
                    return "";
                  })).replace(/./, function (__s131param0) {
                    __s1local2(__s119local1, "literal", __s131param0);
                  });
                } else {
                  __s1local2(__s119local1, "currency", __s121param0);
                }
              });
              return __s119local1;
            })(__s113local10);
            __s113local17 = __s113local16(__s113local17);
            if (isFinite(__s113param0)) {
              if (__s113local12.indexOf("%") !== -1) {
                __s113param0 *= 100;
              } else if (__s113local12.indexOf("‰") !== -1) {
                __s113param0 *= 1000;
              }
              if (__s113local1) {
                __s113local23 = Math.abs(Math.floor(__s113param0)).toString().length - 1;
                if ((__s113local23 = Math.min(__s113local23, __s113local1.maxExponent)) >= 3) {
                  __s113local19 = __s113local1[__s113local23] && __s113local1[__s113local23].other;
                }
                if (__s113local19 === "0") {
                  __s113local19 = null;
                } else if (__s113local19) {
                  __s113local20 = __s113local19.split("0").length - 1;
                  __s113local22 = __s113local23 - (__s113local20 - 1);
                  __s113param0 /= Math.pow(10, __s113local22);
                }
              }
              __s113param0 = isNaN(__s113local7 * __s113local4) ? function (__s141param0, __s141param1, __s141param2, __s141param3, __s141param4, __s141param5) {
                __s141param0 = __s141param3 ? __s141param4(__s141param0, __s141param5 || {
                  exponent: -__s141param3
                }) : __s141param4(__s141param0);
                __s141param0 = String(__s141param0);
                if (__s141param3 && /e-/.test(__s141param0)) {
                  __s141param0 = (+__s141param0).toFixed(__s141param3).replace(/0+$/, "").replace(/\.$/, "");
                }
                if (__s141param2) {
                  (__s141param0 = __s141param0.split("."))[1] = __s1local5(__s141param0[1] || "", __s141param2, true);
                  __s141param0 = __s141param0.join(".");
                }
                if (__s141param1) {
                  (__s141param0 = __s141param0.split("."))[0] = __s1local5(__s141param0[0], __s141param1);
                  __s141param0 = __s141param0.join(".");
                }
                return __s141param0;
              }(__s113param0, __s113local6, __s113local5, __s113local3, __s113local13, __s113local14) : function (__s146param0, __s146param1, __s146param2, __s146param3) {
                var __s146local0;
                var __s146local1;
                if (__s146param1 > __s146param2) {
                  __s146param2 = __s146param1;
                }
                __s146local0 = __s1local31(__s146param0, __s146param1, __s146param3);
                __s146local1 = __s1local31(__s146param0, __s146param2, __s146param3);
                __s146param0 = (+(__s146param0 = +__s146local0 == +__s146local1 ? __s146local0 : __s146local1)).toString(10);
                if (/e/.test(__s146param0)) {
                  throw __s1local12({
                    feature: "integers out of (1e21, 1e-7)"
                  });
                }
                if (__s146param1 - __s146param0.replace(/^0+|\./g, "").length > 0) {
                  (__s146param0 = __s146param0.split("."))[1] = __s1local5(__s146param0[1] || "", __s146param1 - __s146param0[0].replace(/^0+/, "").length, true);
                  __s146param0 = __s146param0.join(".");
                }
                return __s146param0;
              }(__s113param0, __s113local7, __s113local4, __s113local13);
              if (__s113local1 && __s113local19) {
                __s113local24 = __s113param2 ? __s113param2(+__s113param0) : "other";
                __s113local19 = __s113local1[__s113local23][__s113local24] || __s113local19;
                __s113local21 = __s113local19.match(__s1local30);
                __s113local0 = function (__s152param0) {
                  var __s152local0 = [];
                  __s152param0.replace(/(\s+)|([^\s0]+)/g, function (__s154param0, __s154param1, __s154param2) {
                    if (__s154param1) {
                      __s1local2(__s152local0, "literal", __s154param1);
                    } else if (__s154param2) {
                      __s1local2(__s152local0, "compact", __s154param2);
                    }
                  });
                  return __s152local0;
                };
                __s113local10 = __s113local10.concat(__s113local0(__s113local21[1]));
                __s113local17 = __s113local0(__s113local21[3]).concat(__s113local17);
              }
              __s113param0 = __s113param0.replace(/^-/, "");
              if (__s113local11) {
                __s113param0 = function (__s159param0, __s159param1, __s159param2) {
                  var __s159local0;
                  var __s159local1 = __s159param1;
                  var __s159local2 = "";
                  var __s159local3 = !!__s159param2;
                  __s159param0 = String(__s159param0).split(".");
                  __s159local0 = __s159param0[0].length;
                  while (__s159local0 > __s159local1) {
                    __s159local2 = __s159param0[0].slice(__s159local0 - __s159local1, __s159local0) + (__s159local2.length ? "," : "") + __s159local2;
                    __s159local0 -= __s159local1;
                    if (__s159local3) {
                      __s159local1 = __s159param2;
                      __s159local3 = false;
                    }
                  }
                  __s159param0[0] = __s159param0[0].slice(0, __s159local0) + (__s159local2.length ? "," : "") + __s159local2;
                  return __s159param0.join(".");
                }(__s113param0, __s113local11, __s113local15);
              }
              return __s113local10.concat(__s113local16(__s113param0), __s113local17);
            } else {
              return __s113local10.concat({
                type: "infinity",
                value: __s113local2
              }, __s113local17);
            }
          }
        }(__s111param0, __s109param0, __s109param1);
      };
    }.apply(null, __s99local2);
    __s1local4(__s99local0, __s99local1, __s99local5, __s99local2);
    return __s99local5;
  };
  __s1param1.numberParser = __s1param1.prototype.numberParser = function (__s165param0) {
    var __s165local0;
    var __s165local1;
    var __s165local2;
    var __s165local3;
    __s1local11(__s165param0, "options");
    __s165param0 = __s165param0 || {};
    __s165local1 = this.cldr;
    __s165local0 = [__s165param0];
    __s1local7(__s165local1);
    if (__s165param0.compact) {
      throw __s1local12({
        feature: "compact number parsing (not implemented)"
      });
    }
    __s165local1.on("get", __s1local6);
    __s165local2 = function (__s168param0, __s168param1, __s168param2) {
      var __s168local0;
      var __s168local1;
      var __s168local2;
      var __s168local3;
      var __s168local4;
      var __s168local5;
      var __s168local6;
      var __s168local7;
      var __s168local8;
      var __s168local9;
      var __s168local10;
      var __s168local11;
      var __s168local12;
      var __s168local13;
      var __s168local14;
      var __s168local15;
      var __s168local16;
      var __s168local17;
      var __s168local18;
      var __s168local19;
      var __s168local20 = __s1local22(__s168param0, __s168param1, __s168param2);
      __s168local15 = __s1local26(__s168local20[0]);
      __s168local7 = __s168local20[4];
      __s168local9 = __s168local20[5];
      __s168local8 = __s168local20[6];
      __s168local16 = __s168local20[8];
      __s168local17 = __s168local20[9];
      __s168local18 = __s1local26(__s168local20[10]);
      __s168local11 = __s1local26(__s168local20[13]);
      __s168local12 = __s1local26(__s168local20[14]);
      __s168local4 = __s1local26(__s168local20[16]);
      __s168local10 = __s1local26(__s168local20[17]);
      __s168local19 = __s1local27(__s168local20[18], function (__s170param0) {
        return [__s170param0[0], __s1local26(__s170param0[1])];
      });
      __s168local13 = __s168local20[19];
      __s168local6 = __s1local27(function (__s172param0) {
        var __s172local0;
        var __s172local1 = {};
        for (__s172local0 in __s1local20) {
          __s172local1[__s1local19(__s1local20[__s172local0], __s172param0)] = __s172local0;
        }
        return __s172local1;
      }(__s168param1), function (__s176param0) {
        return [__s1local26(__s176param0[0]), __s176param0[1]];
      });
      __s168local2 = __s168local13 ? "[" + __s168local13 + "]" : "\\d";
      __s168local3 = __s1local3(__s168local19[","]);
      __s168local1 = __s1local3(__s168local19["."]);
      if (__s168local13) {
        __s168local5 = __s168local13.split("").reduce(function (__s179param0, __s179param1, __s179param2) {
          __s179param0[__s179param1] = String(__s179param2);
          return __s179param0;
        }, {});
      }
      __s168local0 = [__s168local15, __s168local18, __s168local11, __s168local12].map(function (__s181param0) {
        return __s181param0.replace(/('([^']|'')+'|'')|./g, function (__s183param0, __s183param1) {
          if (__s183param1) {
            return __s1local28(__s183param1);
          } else {
            return __s183param0 = __s183param0.replace(/[\-+E%\u2030]/, function (__s187param0) {
              return __s168local19[__s187param0];
            });
          }
        });
      });
      __s168local15 = __s168local0[0];
      __s168local18 = __s168local0[1];
      __s168local11 = __s168local0[2];
      __s168local12 = __s168local0[3];
      __s168local14 = __s168local2 + "+";
      if (__s168local16) {
        __s168local14 = "(" + (__s168local0 = __s168local17 ? __s168local2 + "{1," + __s168local17 + "}((" + __s168local3 + __s168local2 + "{" + __s168local17 + "})*(" + __s168local3 + __s168local2 + "{" + __s168local16 + "}))" : __s168local2 + "{1," + __s168local16 + "}(" + __s168local3 + __s168local2 + "{" + __s168local16 + "})+") + "|" + __s168local14 + ")";
      }
      if (!isNaN(__s168local9 * __s168local8) || !!__s168local7) {
        __s168local14 = "(" + (__s168local14 = __s168local14 + "(" + (__s168local0 = __s168local1 + __s168local2 + "+") + "|" + __s168local1 + ")?|(" + __s168local14 + ")?" + __s168local0) + ")";
      }
      return [__s168local6, __s168local5, {
        infinity: new RegExp("^" + __s1local3(__s168local4)),
        nan: new RegExp("^" + __s1local3(__s168local10)),
        negativePrefix: new RegExp("^" + __s1local3(__s168local11)),
        negativeSuffix: new RegExp("^" + __s1local3(__s168local12)),
        number: new RegExp("^" + __s168local14),
        prefix: new RegExp("^" + __s1local3(__s168local15)),
        suffix: new RegExp("^" + __s1local3(__s168local18))
      }];
    }(__s165param0.raw ? __s165param0.raw : __s1local29(__s165param0.style || "decimal", __s165local1), __s165local1, __s165param0);
    __s165local1.off("get", __s1local6);
    __s165local3 = function (__s191param0) {
      return function numberParser(__s193param0) {
        __s1local8(__s193param0, "value");
        __s1local14(__s193param0, "value");
        return function (__s195param0, __s195param1) {
          var __s195local0;
          var __s195local1;
          var __s195local2;
          var __s195local3;
          var __s195local4;
          var __s195local5;
          var __s195local6;
          var __s195local7;
          var __s195local8;
          __s195local0 = [["nan"], ["prefix", "infinity", "suffix"], ["prefix", "number", "suffix"], ["negativePrefix", "infinity", "negativeSuffix"], ["negativePrefix", "number", "negativeSuffix"]];
          __s195local2 = __s195param1[0];
          __s195local1 = __s195param1[1] || {};
          __s195local8 = __s195param1[2];
          if (!function tokenizeNParse(__s197param0, __s197param1) {
            return __s197param1.some(function (__s199param0) {
              var __s199local0 = __s197param0;
              return __s199param0.every(function (__s201param0) {
                return __s199local0.match(__s195local8[__s201param0]) !== null && (__s199local0 = __s199local0.replace(__s195local8[__s201param0], function parse(__s203param0) {
                  return function (__s205param0) {
                    __s205param0 = __s205param0.split("").map(function (__s207param0) {
                      return __s195local2[__s207param0] || __s195local1[__s207param0] || __s207param0;
                    }).join("");
                    switch (__s203param0) {
                      case "infinity":
                        __s195local4 = Infinity;
                        break;
                      case "nan":
                        __s195local4 = NaN;
                        break;
                      case "number":
                        __s205param0 = __s205param0.replace(/,/g, "");
                        __s195local4 = +__s205param0;
                        break;
                      case "prefix":
                      case "negativePrefix":
                        __s195local5 = __s205param0;
                        break;
                      case "suffix":
                        __s195local7 = __s205param0;
                        break;
                      case "negativeSuffix":
                        __s195local7 = __s205param0;
                        __s195local3 = true;
                        break;
                      default:
                        throw new Error("Internal error");
                    }
                    return "";
                  };
                }(__s201param0)), true);
              }) && !__s199local0.length;
            });
          }(__s195param0 = __s1local26(__s195param0), __s195local0) || isNaN(__s195local4)) {
            return NaN;
          } else {
            if ((__s195local6 = "" + __s195local5 + __s195local7).indexOf("%") !== -1) {
              __s195local4 /= 100;
            } else if (__s195local6.indexOf("‰") !== -1) {
              __s195local4 /= 1000;
            }
            if (__s195local3) {
              __s195local4 *= -1;
            }
            return __s195local4;
          }
        }(__s193param0, __s191param0);
      };
    }(__s165local2);
    __s1local4(__s165local0, __s165local1, __s165local3, [__s165local2]);
    return __s165local3;
  };
  __s1param1.formatNumber = __s1param1.prototype.formatNumber = function (__s215param0, __s215param1) {
    __s1local8(__s215param0, "value");
    __s1local13(__s215param0, "value");
    return this.numberFormatter(__s215param1)(__s215param0);
  };
  __s1param1.formatNumberToParts = __s1param1.prototype.formatNumberToParts = function (__s217param0, __s217param1) {
    __s1local8(__s217param0, "value");
    __s1local13(__s217param0, "value");
    return this.numberToPartsFormatter(__s217param1)(__s217param0);
  };
  __s1param1.parseNumber = __s1param1.prototype.parseNumber = function (__s219param0, __s219param1) {
    __s1local8(__s219param0, "value");
    __s1local14(__s219param0, "value");
    return this.numberParser(__s219param1)(__s219param0);
  };
  __s1param1._createErrorUnsupportedFeature = __s1local12;
  __s1param1._numberNumberingSystem = __s1local15;
  __s1param1._numberNumberingSystemDigitsMap = __s1local16;
  __s1param1._numberPattern = __s1local29;
  __s1param1._numberSymbol = __s1local19;
  __s1param1._looseMatching = __s1local26;
  __s1param1._removeLiteralQuotes = __s1local28;
  __s1param1._stringPad = __s1local5;
  __s1param1._validateParameterTypeNumber = __s1local13;
  __s1param1._validateParameterTypeString = __s1local14;
  return __s1param1;
}) == "function" ? __s0local0.apply(exports, __s0local1) : __s0local0) !== undefined) {
  module.exports = __s0local2;
}
