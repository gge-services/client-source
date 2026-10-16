var __s0local0;
var __s0local1;
var __s0local2;
__s0local1 = [require("gge-module:opaque_5c61709ecb7732e44481babe"), require("gge-module:class_Globalize"), require("gge-module:exact_f70a9f50ff0ced05"), require("gge-module:exact_2eb0a95d73d217d1")];
if ((__s0local2 = typeof (__s0local0 = function (__s1param0, __s1param1) {
  var __s1local0;
  var __s1local1 = __s1param1._runtimeBind;
  var __s1local2 = __s1param1._validateCldr;
  var __s1local3 = __s1param1._validateDefaultLocale;
  var __s1local4 = __s1param1._validateParameterPresence;
  var __s1local5 = __s1param1._validateParameterType;
  var __s1local6 = __s1param1._validateParameterTypePlainObject;
  __s1local0 = function () {
    'use strict';

    function __s3local0(__s5param0) {
      if (Array.isArray(__s5param0)) {
        for (var __s5local0 = 0, __s5local1 = Array(__s5param0.length); __s5local0 < __s5param0.length; __s5local0++) {
          __s5local1[__s5local0] = __s5param0[__s5local0];
        }
        return __s5local1;
      }
      return Array.from(__s5param0);
    }
    function __s3local1(__s10param0, __s10param1) {
      if (!(__s10param0 instanceof __s10param1)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var __s3local2 = function () {
      function defineProperties(__s15param0, __s15param1) {
        for (var __s15local0 = 0; __s15local0 < __s15param1.length; __s15local0++) {
          var __s15local1 = __s15param1[__s15local0];
          __s15local1.enumerable = __s15local1.enumerable || false;
          __s15local1.configurable = true;
          if ("value" in __s15local1) {
            __s15local1.writable = true;
          }
          Object.defineProperty(__s15param0, __s15local1.key, __s15local1);
        }
      }
      return function (__s20param0, __s20param1, __s20param2) {
        if (__s20param1) {
          defineProperties(__s20param0.prototype, __s20param1);
        }
        if (__s20param2) {
          defineProperties(__s20param0, __s20param2);
        }
        return __s20param0;
      };
    }();
    var __s3local3 = function () {
      function Parser() {
        __s3local1(this, Parser);
      }
      __s3local2(Parser, [{
        key: "parse",
        value: function parse(__s28param0) {
          var __s28local0 = this;
          if (__s28param0 === "i = 0 or n = 1") {
            return "n >= 0 && n <= 1";
          } else if (__s28param0 === "i = 0,1") {
            return "n >= 0 && n < 2";
          } else if (__s28param0 === "i = 1 and v = 0") {
            this.v0 = 1;
            return "n == 1 && v0";
          } else {
            return __s28param0.replace(/([tv]) (!?)= 0/g, function (__s34param0, __s34param1, __s34param2) {
              var __s34local0 = __s34param1 + "0";
              __s28local0[__s34local0] = 1;
              if (__s34param2) {
                return "!" + __s34local0;
              } else {
                return __s34local0;
              }
            }).replace(/\b[fintv]\b/g, function (__s38param0) {
              __s28local0[__s38param0] = 1;
              return __s38param0;
            }).replace(/([fin]) % (10+)/g, function (__s40param0, __s40param1, __s40param2) {
              var __s40local0 = __s40param1 + __s40param2;
              __s28local0[__s40local0] = 1;
              return __s40local0;
            }).replace(/n10+ = 0/g, "t0 && $&").replace(/(\w+ (!?)= )([0-9.]+,[0-9.,]+)/g, function (__s42param0, __s42param1, __s42param2, __s42param3) {
              if (__s42param0 === "n = 0,1") {
                return "(n == 0 || n == 1)";
              } else if (__s42param2) {
                return __s42param1 + __s42param3.split(",").join(" && " + __s42param1);
              } else {
                return "(" + __s42param1 + __s42param3.split(",").join(" || " + __s42param1) + ")";
              }
            }).replace(/(\w+) (!?)= ([0-9]+)\.\.([0-9]+)/g, function (__s47param0, __s47param1, __s47param2, __s47param3, __s47param4) {
              if (Number(__s47param3) + 1 === Number(__s47param4)) {
                if (__s47param2) {
                  return __s47param1 + " != " + __s47param3 + " && " + __s47param1 + " != " + __s47param4;
                } else {
                  return "(" + __s47param1 + " == " + __s47param3 + " || " + __s47param1 + " == " + __s47param4 + ")";
                }
              } else if (__s47param2) {
                return "(" + __s47param1 + " < " + __s47param3 + " || " + __s47param1 + " > " + __s47param4 + ")";
              } else if (__s47param1 === "n") {
                __s28local0.t0 = 1;
                return "(t0 && n >= " + __s47param3 + " && n <= " + __s47param4 + ")";
              } else {
                return "(" + __s47param1 + " >= " + __s47param3 + " && " + __s47param1 + " <= " + __s47param4 + ")";
              }
            }).replace(/ and /g, " && ").replace(/ or /g, " || ").replace(/ = /g, " == ");
          }
        }
      }, {
        key: "vars",
        value: function (__s55param0) {
          function vars() {
            return __s55param0.apply(this, arguments);
          }
          vars.toString = function () {
            return __s55param0.toString();
          };
          return vars;
        }(function () {
          var __s61local0 = [];
          if (this.i) {
            __s61local0.push("i = s[0]");
          }
          if (this.f || this.v) {
            __s61local0.push("f = s[1] || ''");
          }
          if (this.t) {
            __s61local0.push("t = (s[1] || '').replace(/0+$/, '')");
          }
          if (this.v) {
            __s61local0.push("v = f.length");
          }
          if (this.v0) {
            __s61local0.push("v0 = !s[1]");
          }
          if (this.t0 || this.n10 || this.n100) {
            __s61local0.push("t0 = Number(s[0]) == n");
          }
          for (var __s61local1 in this) {
            if (/^.10+$/.test(__s61local1)) {
              var __s61local2 = __s61local1[0] === "n" ? "t0 && s[0]" : __s61local1[0];
              __s61local0.push(__s61local1 + " = " + __s61local2 + ".slice(-" + __s61local1.substr(2).length + ")");
            }
          }
          if (__s61local0.length) {
            return "var " + ["s = String(n).split('.')"].concat(__s61local0).join(", ");
          } else {
            return "";
          }
        })
      }]);
      return Parser;
    }();
    var __s3local4 = function () {
      function MakePlural(__s76param0) {
        var __s76local0 = arguments[1] === undefined ? MakePlural : arguments[1];
        var __s76local1 = __s76local0.cardinals;
        var __s76local2 = __s76local0.ordinals;
        __s3local1(this, MakePlural);
        if (!__s76local1 && !__s76local2) {
          throw new Error("At least one type of plural is required");
        }
        this.lc = __s76param0;
        this.categories = {
          cardinal: [],
          ordinal: []
        };
        this.parser = new __s3local3();
        this.fn = this.buildFunction(__s76local1, __s76local2);
        this.fn._obj = this;
        this.fn.categories = this.categories;
        this.fn.toString = this.fnToString.bind(this);
        return this.fn;
      }
      __s3local2(MakePlural, [{
        key: "compile",
        value: function compile(__s79param0, __s79param1) {
          var __s79local0;
          var __s79local1 = [];
          var __s79local2 = MakePlural.rules[__s79param0][this.lc];
          if (!__s79local2) {
            if (__s79param1) {
              throw new Error("Locale \"" + this.lc + "\" " + __s79param0 + " rules not found");
            }
            this.categories[__s79param0] = ["other"];
            return "'other'";
          }
          for (var __s79local3 in __s79local2) {
            var __s79local4 = __s79local2[__s79local3].trim().split(/\s*@\w*/);
            __s79local0 = __s79local4;
            var __s79local5 = Array.isArray(__s79local0) ? __s79local0 : Array.from(__s79local0);
            var __s79local6 = __s79local5[0];
            __s79local5.slice(1);
            var __s79local7 = __s79local3.replace("pluralRule-count-", "");
            if (__s79local6) {
              __s79local1.push([this.parser.parse(__s79local6), __s79local7]);
            }
          }
          this.categories[__s79param0] = __s79local1.map(function (__s86param0) {
            return __s86param0[1];
          }).concat("other");
          if (__s79local1.length === 1) {
            return "(" + __s79local1[0][0] + ") ? '" + __s79local1[0][1] + "' : 'other'";
          } else {
            return [].concat(__s3local0(__s79local1.map(function (__s90param0) {
              return "(" + __s90param0[0] + ") ? '" + __s90param0[1] + "'";
            })), ["'other'"]).join("\n      : ");
          }
        }
      }, {
        key: "buildFunction",
        value: function buildFunction(__s92param0, __s92param1) {
          var __s92local0 = this;
          var __s92local1 = {
            vars: function vars(__s94param0) {
              return ("  " + __s94param0 + ";").replace(/(.{1,78})(,|$) ?/g, "$1$2\n      ");
            },
            cond: function cond(__s96param0) {
              return ("  " + __s96param0 + ";").replace(/(.{1,78}) (\|\| |$) ?/gm, "$1\n          $2");
            }
          };
          var __s92local2 = [__s92param1 && ["ordinal", !__s92param0], __s92param0 && ["cardinal", true]].map(function compile(__s98param0) {
            if (__s98param0) {
              return (__s98param0[1] ? "return " : "if (ord) return ") + __s92local0.compile.apply(__s92local0, __s3local0(__s98param0));
            } else {
              return "";
            }
          }).map(__s92local1.cond);
          var __s92local3 = [__s92local1.vars(this.parser.vars())].concat(__s3local0(__s92local2)).join("\n").replace(/\s+$/gm, "").replace(/^[\s;]*[\r\n]+/gm, "");
          var __s92local4 = __s92param1 && __s92param0 ? "n, ord" : "n";
          return new Function(__s92local4, __s92local3);
        }
      }, {
        key: "fnToString",
        value: function fnToString(__s102param0) {
          return Function.prototype.toString.call(this.fn).replace(/^function( \w+)?/, __s102param0 ? "function " + __s102param0 : "function").replace("\n/**/", "");
        }
      }], [{
        key: "load",
        value: function load() {
          for (var __s104local0 = arguments.length, __s104local1 = Array(__s104local0), __s104local2 = 0; __s104local2 < __s104local0; __s104local2++) {
            __s104local1[__s104local2] = arguments[__s104local2];
          }
          __s104local1.forEach(function (__s108param0) {
            var __s108local0 = __s108param0 && __s108param0.supplemental || null;
            if (!__s108local0) {
              throw new Error("Data does not appear to be CLDR data");
            }
            MakePlural.rules = {
              cardinal: __s108local0["plurals-type-cardinal"] || MakePlural.rules.cardinal,
              ordinal: __s108local0["plurals-type-ordinal"] || MakePlural.rules.ordinal
            };
          });
          return MakePlural;
        }
      }]);
      return MakePlural;
    }();
    __s3local4.cardinals = true;
    __s3local4.ordinals = false;
    __s3local4.rules = {
      cardinal: {},
      ordinal: {}
    };
    return __s3local4;
  }();
  function __s1local7(__s111param0, __s111param1) {
    __s1local5(__s111param0, __s111param1, __s111param0 === undefined || typeof __s111param0 == "number", "Number");
  }
  __s1param1.plural = __s1param1.prototype.plural = function (__s113param0, __s113param1) {
    __s1local4(__s113param0, "value");
    __s1local7(__s113param0, "value");
    return this.pluralGenerator(__s113param1)(__s113param0);
  };
  __s1param1.pluralGenerator = __s1param1.prototype.pluralGenerator = function (__s115param0) {
    var __s115local0;
    var __s115local1;
    var __s115local2;
    var __s115local3;
    var __s115local4;
    var __s115local5;
    var __s115local6;
    __s1local6(__s115param0, "options");
    __s115param0 = __s115param0 || {};
    __s115local1 = this.cldr;
    __s115local0 = [__s115param0];
    __s115local5 = __s115param0.type || "cardinal";
    __s115local6 = __s115param0.type;
    __s1local5(__s115local6, "options.type", __s115local6 === undefined || __s115local6 === "cardinal" || __s115local6 === "ordinal", "String \"cardinal\" or \"ordinal\"");
    __s1local3(__s115local1);
    __s115local2 = __s115local5 === "ordinal";
    __s115local1.on("get", __s1local2);
    try {
      __s115local1.supplemental(["plurals-type-" + __s115local5, "{language}"]);
    } finally {
      __s115local1.off("get", __s1local2);
    }
    __s1local0.rules = {};
    __s1local0.rules[__s115local5] = __s115local1.supplemental("plurals-type-" + __s115local5);
    __s115local4 = function (__s119param0) {
      return function pluralGenerator(__s121param0) {
        __s1local4(__s121param0, "value");
        __s1local7(__s121param0, "value");
        return __s119param0(__s121param0);
      };
    }(__s115local3 = new __s1local0(__s115local1.attributes.language, {
      ordinals: __s115local2,
      cardinals: !__s115local2
    }));
    __s1local1(__s115local0, __s115local1, __s115local4, [__s115local3]);
    return __s115local4;
  };
  return __s1param1;
}) == "function" ? __s0local0.apply(exports, __s0local1) : __s0local0) !== undefined) {
  module.exports = __s0local2;
}
