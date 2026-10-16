var __s0local0;
var __s0local1;
var __s0local2;
__s0local1 = [require("gge-module:opaque_5c61709ecb7732e44481babe"), require("gge-module:class_Globalize"), require("gge-module:opaque_b65804600291f9b6b8e6457f"), require("gge-module:exact_f70a9f50ff0ced05"), require("gge-module:exact_2eb0a95d73d217d1")];
if ((__s0local2 = typeof (__s0local0 = function (__s1param0, __s1param1) {
  var __s1local0 = __s1param1._alwaysArray;
  var __s1local1 = __s1param1._createError;
  var __s1local2 = __s1param1._formatMessageToParts;
  var __s1local3 = __s1param1._numberNumberingSystem;
  var __s1local4 = __s1param1._numberPattern;
  var __s1local5 = __s1param1._partsJoin;
  var __s1local6 = __s1param1._partsPush;
  var __s1local7 = __s1param1._runtimeBind;
  var __s1local8 = __s1param1._stringPad;
  var __s1local9 = __s1param1._validateCldr;
  var __s1local10 = __s1param1._validateDefaultLocale;
  var __s1local11 = __s1param1._validateParameterPresence;
  var __s1local12 = __s1param1._validateParameterType;
  var __s1local13 = __s1param1._validateParameterTypeNumber;
  var __s1local14 = __s1param1._validateParameterTypePlainObject;
  function __s1local15() {
    return __s1local1("E_MISSING_PLURAL_MODULE", "Plural module not loaded.");
  }
  function __s1local16(__s5param0, __s5param1) {
    __s1local12(__s5param0, __s5param1, __s5param0 === undefined || typeof __s5param0 == "string" && /^[A-Za-z]{3}$/.test(__s5param0), "3-letter currency code string as defined by ISO 4217");
  }
  function __s1local17(__s7param0, __s7param1, __s7param2) {
    var __s7local0;
    var __s7local1 = "";
    var __s7local2 = __s7param2.supplemental(["currencyData/fractions", __s7param0]) || __s7param2.supplemental("currencyData/fractions/DEFAULT");
    if (__s7local0 = +__s7local2._digits) {
      __s7local1 = "." + __s1local8("0", __s7local0).slice(0, -1) + __s7local2._rounding;
    }
    return __s7param1.replace(/\.(#+|0*[0-9]|0+[0-9]?)/g, __s7local1);
  }
  function __s1local18(__s10param0, __s10param1) {
    var __s10local0;
    var __s10local1 = {};
    for (__s10local0 in __s10param0) {
      if (__s10param1.test(__s10local0)) {
        __s10local1[__s10local0] = __s10param0[__s10local0];
      }
    }
    return __s10local1;
  }
  var __s1local19 = /[\0-#%-\*,-;\?-\]_a-\{\}\x7F-\xA1\xA7\xAA\xAB\xAD\xB2\xB3\xB5-\xB7\xB9-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u0383\u0386-\u03F5\u03F7-\u0481\u0483-\u058C\u0590-\u0605\u0609\u060A\u060C\u060D\u0610-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF-\u07F5\u07F7-\u07FD\u0800-\u09F1\u09F4-\u09F9\u09FC-\u0AF0\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C7E\u0C80-\u0D4E\u0D50-\u0D78\u0D7A-\u0E3E\u0E40-\u0F00\u0F04-\u0F12\u0F14\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39-\u0FBD\u0FC6\u0FCD\u0FD0-\u0FD4\u0FD9-\u109D\u10A0-\u138F\u139A-\u166C\u166E-\u17DA\u17DC-\u193F\u1941-\u19DD\u1A00-\u1B60\u1B6B-\u1B73\u1B7D-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF-\u2043\u2045-\u2051\u2053-\u2079\u207D-\u2089\u208D-\u209F\u20C0-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u2308-\u230B\u2329\u232A\u2427-\u243F\u244B-\u249B\u24EA-\u24FF\u2768-\u2793\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2B74\u2B75\u2B96\u2C00-\u2CE4\u2CEB-\u2E4F\u2E52-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u3003\u3005-\u3011\u3014-\u301F\u3021-\u3035\u3038-\u303D\u3040-\u309A\u309D-\u318F\u3192-\u3195\u31A0-\u31BF\u31E4-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uAA76\uAA7A-\uAB5A\uAB5C-\uAB69\uAB6C-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBC2-\uFDFB\uFDFE-\uFE61\uFE63\uFE67\uFE68\uFE6A-\uFF03\uFF05-\uFF0A\uFF0C-\uFF1B\uFF1F-\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5F-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDFFF]|[\uD801\uD803\uD804\uD806\uD808-\uD819\uD81B-\uD82E\uD830-\uD833\uD837\uD839\uD83A\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD802[\uDC00-\uDC76\uDC79-\uDEC7\uDEC9-\uDFFF]|\uD805[\uDC00-\uDF3E\uDF40-\uDFFF]|\uD807[\uDC00-\uDFD4\uDFF2-\uDFFF]|\uD81A[\uDC00-\uDF3B\uDF40-\uDF44\uDF46-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDE9-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE87-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDF\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDD79\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7B-\uDE7F\uDE87-\uDE8F\uDEA9-\uDEAF\uDEB7-\uDEBF\uDEC3-\uDECF\uDED7-\uDEFF\uDF93\uDFCB-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var __s1local20 = /[\0-\x1F!-#%-\*,-;\?-\]_a-\{\}\x7F-\x9F\xA1\xA7\xAA\xAB\xAD\xB2\xB3\xB5-\xB7\xB9-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u0383\u0386-\u03F5\u03F7-\u0481\u0483-\u058C\u0590-\u0605\u0609\u060A\u060C\u060D\u0610-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF-\u07F5\u07F7-\u07FD\u0800-\u09F1\u09F4-\u09F9\u09FC-\u0AF0\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C7E\u0C80-\u0D4E\u0D50-\u0D78\u0D7A-\u0E3E\u0E40-\u0F00\u0F04-\u0F12\u0F14\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39-\u0FBD\u0FC6\u0FCD\u0FD0-\u0FD4\u0FD9-\u109D\u10A0-\u138F\u139A-\u166C\u166E-\u167F\u1681-\u17DA\u17DC-\u193F\u1941-\u19DD\u1A00-\u1B60\u1B6B-\u1B73\u1B7D-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u2043\u2045-\u2051\u2053-\u205E\u2060-\u2079\u207D-\u2089\u208D-\u209F\u20C0-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u2308-\u230B\u2329\u232A\u2427-\u243F\u244B-\u249B\u24EA-\u24FF\u2768-\u2793\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2B74\u2B75\u2B96\u2C00-\u2CE4\u2CEB-\u2E4F\u2E52-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3001-\u3003\u3005-\u3011\u3014-\u301F\u3021-\u3035\u3038-\u303D\u3040-\u309A\u309D-\u318F\u3192-\u3195\u31A0-\u31BF\u31E4-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uAA76\uAA7A-\uAB5A\uAB5C-\uAB69\uAB6C-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBC2-\uFDFB\uFDFE-\uFE61\uFE63\uFE67\uFE68\uFE6A-\uFF03\uFF05-\uFF0A\uFF0C-\uFF1B\uFF1F-\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5F-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDFFF]|[\uD801\uD803\uD804\uD806\uD808-\uD819\uD81B-\uD82E\uD830-\uD833\uD837\uD839\uD83A\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD802[\uDC00-\uDC76\uDC79-\uDEC7\uDEC9-\uDFFF]|\uD805[\uDC00-\uDF3E\uDF40-\uDFFF]|\uD807[\uDC00-\uDFD4\uDFF2-\uDFFF]|\uD81A[\uDC00-\uDF3B\uDF40-\uDF44\uDF46-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDE9-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE87-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDF\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDD79\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7B-\uDE7F\uDE87-\uDE8F\uDEA9-\uDEAF\uDEB7-\uDEBF\uDEC3-\uDECF\uDED7-\uDEFF\uDF93\uDFCB-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  function __s1local21(__s15param0, __s15param1, __s15param2) {
    var __s15local0;
    var __s15local1;
    var __s15local2;
    var __s15local3;
    var __s15local4 = {
      "[:digit:]": /\d/,
      "[:^S:]": __s1local19,
      "[[:^S:]&[:^Z:]]": __s1local20
    };
    if (__s15param2.style === "code") {
      __s15local2 = __s15param0;
    } else {
      __s15local3 = ["symbol"];
      if (__s15param2.symbolForm === "narrow") {
        __s15local3.unshift("symbol-alt-narrow");
      }
      __s15local3.some(function (__s20param0) {
        return __s15local2 = __s15param1.main(["numbers/currencies", __s15param0, __s20param0]);
      });
    }
    __s15local0 = ["beforeCurrency", "afterCurrency"].map(function (__s22param0) {
      return __s15param1.main(["numbers", "currencyFormats-numberSystem-" + __s1local3(__s15param1), "currencySpacing", __s22param0]);
    });
    __s15local1 = __s15param1.main(["numbers", "currencyFormats-numberSystem-" + __s1local3(__s15param1), __s15param2.style === "accounting" ? "accounting" : "standard"]);
    return {
      pattern: __s15local1 = __s1local17(__s15param0, __s15local1, __s15param1).split(";").map(function (__s24param0) {
        return __s24param0.split("¤").map(function (__s26param0, __s26param1) {
          var __s26local0 = __s15local4[__s15local0[__s26param1].currencyMatch];
          var __s26local1 = __s15local4[__s15local0[__s26param1].surroundingMatch];
          var __s26local2 = "";
          __s26local0 = __s26local0.test(__s15local2.charAt(__s26param1 ? __s15local2.length - 1 : 0));
          __s26local1 = __s26local1.test(__s26param0.charAt(__s26param1 ? 0 : __s26param0.length - 1).replace(/[#@,.]/g, "0"));
          if (__s26local0 && __s26param0 && __s26local1) {
            __s26local2 = __s15local0[__s26param1].insertBetween;
          }
          return (__s26param1 ? __s26local2 : "") + __s26param0 + (__s26param1 ? "" : __s26local2);
        }).join("¤");
      }).join(";"),
      symbol: __s15local2
    };
  }
  function __s1local22(__s29param0, __s29param1, __s29param2) {
    if (__s29param1 && __s29param2) {
      return function currencyToPartsFormatter(__s32param0) {
        __s1local11(__s32param0, "value");
        __s1local13(__s32param0, "value");
        return function (__s34param0, __s34param1, __s34param2) {
          var __s34local0;
          var __s34local1;
          var __s34local2 = [];
          var __s34local3 = __s34param2.displayNames || {};
          var __s34local4 = __s34param2.unitPatterns;
          __s34local0 = __s34local3["displayName-count-" + __s34param1] || __s34local3["displayName-count-other"] || __s34local3.displayName || __s34param2.currency;
          __s34local1 = __s34local4["unitPattern-count-" + __s34param1] || __s34local4["unitPattern-count-other"];
          __s1local2(__s34local1, [__s34param0, __s34local0]).forEach(function (__s36param0) {
            if (__s36param0.type === "variable" && __s36param0.name === "0") {
              __s36param0.value.forEach(function (__s39param0) {
                __s1local6(__s34local2, __s39param0.type, __s39param0.value);
              });
            } else if (__s36param0.type === "variable" && __s36param0.name === "1") {
              __s1local6(__s34local2, "currency", __s36param0.value);
            } else {
              __s1local6(__s34local2, "literal", __s36param0.value);
            }
          });
          return __s34local2;
        }(__s29param0(__s32param0), __s29param1(__s32param0), __s29param2);
      };
    } else {
      return function currencyToPartsFormatter(__s44param0) {
        __s44local0 = __s29param0(__s44param0);
        __s44local1 = __s29param1;
        __s44local0.forEach(function (__s46param0) {
          if (__s46param0.type === "currency") {
            __s46param0.value = __s44local1;
          }
        });
        return __s44local0;
        var __s44local0;
        var __s44local1;
      };
    }
  }
  function validateRequiredCldr(__s49param0, __s49param1) {
    __s1local9(__s49param0, __s49param1, {
      skip: [/numbers\/currencies\/[^/]+\/symbol-alt-/, /supplemental\/currencyData\/fractions\/[A-Za-z]{3}$/]
    });
  }
  __s1param1.currencyFormatter = __s1param1.prototype.currencyFormatter = function (__s51param0, __s51param1) {
    var __s51local0;
    var __s51local1;
    var __s51local2;
    __s1local11(__s51param0, "currency");
    __s1local16(__s51param0, "currency");
    __s1local14(__s51param1, "options");
    __s51local0 = [__s51param0, __s51param1 = __s51param1 || {}];
    __s51local2 = function (__s53param0) {
      return function currencyFormatter(__s55param0) {
        return __s1local5(__s53param0(__s55param0));
      };
    }(__s51local1 = this.currencyToPartsFormatter(__s51param0, __s51param1));
    __s1local7(__s51local0, this.cldr, __s51local2, [__s51local1]);
    return __s51local2;
  };
  __s1param1.currencyToPartsFormatter = __s1param1.prototype.currencyToPartsFormatter = function (__s57param0, __s57param1) {
    var __s57local0;
    var __s57local1;
    var __s57local2;
    var __s57local3;
    var __s57local4;
    var __s57local5;
    var __s57local6;
    __s1local11(__s57param0, "currency");
    __s1local16(__s57param0, "currency");
    __s1local14(__s57param1, "options");
    __s57local1 = this.cldr;
    __s57local0 = [__s57param0, __s57param1 = __s57param1 || {}];
    __s57local6 = __s57param1.style || "symbol";
    __s1local10(__s57local1);
    __s57local1.on("get", validateRequiredCldr);
    try {
      __s57local4 = {
        accounting: __s1local21,
        code: __s1local21,
        name: function (__s60param0, __s60param1) {
          var __s60local0 = __s1local4("decimal", __s60param1);
          __s60local0 = __s1local17(__s60param0, __s60local0, __s60param1);
          return {
            displayNames: __s1local18(__s60param1.main(["numbers/currencies", __s60param0]), /^displayName/),
            pattern: __s60local0,
            unitPatterns: function (__s62param0) {
              return __s1local18(__s62param0.main(["numbers", "currencyFormats-numberSystem-" + __s1local3(__s62param0)]), /^unitPattern/);
            }(__s60param1)
          };
        },
        symbol: __s1local21
      }[__s57local6](__s57param0, __s57local1, __s57param1);
    } finally {
      __s57local1.off("get", validateRequiredCldr);
    }
    (__s57param1 = function (__s65param0, __s65param1) {
      var __s65local0;
      var __s65local1 = {};
      __s65param1 = __s1local0(__s65param1);
      for (__s65local0 in __s65param0) {
        if (__s65param1.indexOf(__s65local0) === -1) {
          __s65local1[__s65local0] = __s65param0[__s65local0];
        }
      }
      return __s65local1;
    }(__s57param1, "style")).raw = __s57local4.pattern;
    if (__s57local6 === "symbol" || __s57local6 === "accounting" || __s57local6 === "code") {
      __s57local2 = this.numberToPartsFormatter(__s57param1);
      __s57local5 = __s1local22(__s57local2, __s57local4.symbol);
      __s1local7(__s57local0, __s57local1, __s57local5, [__s57local2, __s57local4.symbol]);
    } else {
      __s57local2 = this.numberToPartsFormatter(__s57param1);
      __s57local3 = this.plural !== undefined ? this.pluralGenerator() : __s1local15;
      __s57local5 = __s1local22(__s57local2, __s57local3, __s57local4);
      __s1local7(__s57local0, __s57local1, __s57local5, [__s57local2, __s57local3, __s57local4]);
    }
    return __s57local5;
  };
  __s1param1.currencyParser = __s1param1.prototype.currencyParser = function () {};
  __s1param1.formatCurrency = __s1param1.prototype.formatCurrency = function (__s74param0, __s74param1, __s74param2) {
    __s1local11(__s74param0, "value");
    __s1local13(__s74param0, "value");
    return this.currencyFormatter(__s74param1, __s74param2)(__s74param0);
  };
  __s1param1.formatCurrencyToParts = __s1param1.prototype.formatCurrencyToParts = function (__s76param0, __s76param1, __s76param2) {
    __s1local11(__s76param0, "value");
    __s1local13(__s76param0, "value");
    return this.currencyToPartsFormatter(__s76param1, __s76param2)(__s76param0);
  };
  __s1param1.parseCurrency = __s1param1.prototype.parseCurrency = function () {};
  return __s1param1;
}) == "function" ? __s0local0.apply(exports, __s0local1) : __s0local0) !== undefined) {
  module.exports = __s0local2;
}
