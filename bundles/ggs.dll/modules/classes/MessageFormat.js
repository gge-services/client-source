var __s0local0;
var __s0local1;
var __s0local2;
__s0local1 = [require("gge-module:opaque_5c61709ecb7732e44481babe"), require("gge-module:class_Globalize"), require("gge-module:exact_f70a9f50ff0ced05")];
if ((__s0local2 = typeof (__s0local0 = function (__s1param0, __s1param1) {
  var __s1local0;
  var __s1local1 = __s1param1._alwaysArray;
  var __s1local2 = __s1param1._createError;
  var __s1local3 = __s1param1._isPlainObject;
  var __s1local4 = __s1param1._runtimeBind;
  var __s1local5 = __s1param1._validateDefaultLocale;
  var __s1local6 = __s1param1._validate;
  var __s1local7 = __s1param1._validateParameterPresence;
  var __s1local8 = __s1param1._validateParameterType;
  var __s1local9 = __s1param1._validateParameterTypePlainObject;
  __s1local0 = function () {
    /** @file messageformat.js - ICU PluralFormat + SelectFormat for JavaScript
     *  @author Alex Sexton - @SlexAxton
     *  @version 0.3.0-1
     *  @copyright 2012-2015 Alex Sexton, Eemeli Aro, and Contributors
     *  @license To use or fork, MIT. To contribute back, Dojo CLA  */
    function propname(__s5param0, __s5param1) {
      if (/^[A-Z_$][0-9A-Z_$]*$/i.test(__s5param0)) {
        if (__s5param1) {
          return __s5param1 + "." + __s5param0;
        } else {
          return __s5param0;
        }
      }
      var __s5local0 = JSON.stringify(__s5param0);
      if (__s5param1) {
        return __s5param1 + "[" + __s5local0 + "]";
      } else {
        return __s5local0;
      }
    }
    function MessageFormat(__s12param0, __s12param1, __s12param2) {
      this.lc = [__s12param0];
      this.runtime.pluralFuncs = {};
      this.runtime.pluralFuncs[this.lc[0]] = __s12param1;
      this.runtime.fmt = {};
      if (__s12param2) {
        for (var __s12local0 in __s12param2) {
          this.runtime.fmt[__s12local0] = __s12param2[__s12local0];
        }
      }
    }
    MessageFormat._parse = function () {
      function SyntaxError(__s19param0, __s19param1, __s19param2, __s19param3, __s19param4, __s19param5) {
        this.message = __s19param0;
        this.expected = __s19param1;
        this.found = __s19param2;
        this.offset = __s19param3;
        this.line = __s19param4;
        this.column = __s19param5;
        this.name = "SyntaxError";
      }
      (function peg$subclass(__s21param0, __s21param1) {
        function ctor() {
          this.constructor = __s21param0;
        }
        ctor.prototype = __s21param1.prototype;
        __s21param0.prototype = new ctor();
      })(SyntaxError, Error);
      return {
        SyntaxError: SyntaxError,
        parse: function parse(__s25param0) {
          var __s25local0;
          var __s25local1 = arguments.length > 1 ? arguments[1] : {};
          var __s25local2 = {};
          var __s25local3 = {
            start: peg$parsestart
          };
          var __s25local4 = peg$parsestart;
          function __s25local5(__s27param0) {
            return {
              type: "messageFormatPattern",
              statements: __s27param0
            };
          }
          var __s25local6 = __s25local2;
          var __s25local7 = "{";
          var __s25local8 = {
            type: "literal",
            value: "{",
            description: "\"{\""
          };
          var __s25local9 = null;
          var __s25local10 = ",";
          var __s25local11 = {
            type: "literal",
            value: ",",
            description: "\",\""
          };
          var __s25local12 = "}";
          var __s25local13 = {
            type: "literal",
            value: "}",
            description: "\"}\""
          };
          function __s25local14(__s29param0, __s29param1) {
            var __s29local0 = {
              type: "messageFormatElement",
              argumentIndex: __s29param0
            };
            if (__s29param1 && __s29param1.length) {
              __s29local0.elementFormat = __s29param1[1];
            } else {
              __s29local0.output = true;
            }
            return __s29local0;
          }
          var __s25local15 = "plural";
          var __s25local16 = {
            type: "literal",
            value: "plural",
            description: "\"plural\""
          };
          function __s25local17(__s33param0, __s33param1) {
            return {
              type: "elementFormat",
              key: __s33param0,
              val: __s33param1
            };
          }
          var __s25local18 = "selectordinal";
          var __s25local19 = {
            type: "literal",
            value: "selectordinal",
            description: "\"selectordinal\""
          };
          var __s25local20 = "select";
          var __s25local21 = {
            type: "literal",
            value: "select",
            description: "\"select\""
          };
          function __s25local22(__s35param0, __s35param1) {
            return {
              type: "elementFormat",
              key: __s35param0,
              val: __s35param1
            };
          }
          function __s25local23(__s37param0, __s37param1) {
            return {
              type: "pluralFormatPattern",
              pluralForms: __s37param1,
              offset: __s37param0 || 0
            };
          }
          var __s25local24 = "offset";
          var __s25local25 = {
            type: "literal",
            value: "offset",
            description: "\"offset\""
          };
          var __s25local26 = ":";
          var __s25local27 = {
            type: "literal",
            value: ":",
            description: "\":\""
          };
          function __s25local28(__s39param0) {
            return __s39param0;
          }
          function __s25local29(__s41param0, __s41param1) {
            return {
              key: __s41param0,
              val: __s41param1
            };
          }
          function __s25local30(__s43param0) {
            return __s43param0;
          }
          var __s25local31 = "=";
          var __s25local32 = {
            type: "literal",
            value: "=",
            description: "\"=\""
          };
          function __s25local33(__s45param0) {
            return {
              type: "selectFormatPattern",
              pluralForms: __s45param0
            };
          }
          function __s25local34(__s47param0) {
            return __s47param0;
          }
          var __s25local35 = "#";
          var __s25local36 = {
            type: "literal",
            value: "#",
            description: "\"#\""
          };
          function __s25local37() {
            return {
              type: "octothorpe"
            };
          }
          function __s25local38(__s51param0) {
            return {
              type: "string",
              val: __s51param0.join("")
            };
          }
          var __s25local39 = {
            type: "other",
            description: "identifier"
          };
          var __s25local40 = /^[0-9a-zA-Z$_]/;
          var __s25local41 = {
            type: "class",
            value: "[0-9a-zA-Z$_]",
            description: "[0-9a-zA-Z$_]"
          };
          var __s25local42 = /^[^ \t\n\r,.+={}]/;
          var __s25local43 = {
            type: "class",
            value: "[^ \\t\\n\\r,.+={}]",
            description: "[^ \\t\\n\\r,.+={}]"
          };
          function __s25local44(__s53param0) {
            return __s53param0;
          }
          function __s25local45(__s55param0) {
            return __s55param0.join("");
          }
          var __s25local46 = /^[^{}#\\\0-\x1F \t\n\r]/;
          var __s25local47 = {
            type: "class",
            value: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]",
            description: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]"
          };
          function __s25local48(__s57param0) {
            return __s57param0;
          }
          var __s25local49 = "\\\\";
          var __s25local50 = {
            type: "literal",
            value: "\\\\",
            description: "\"\\\\\\\\\""
          };
          function __s25local51() {
            return "\\";
          }
          var __s25local52 = "\\#";
          var __s25local53 = {
            type: "literal",
            value: "\\#",
            description: "\"\\\\#\""
          };
          function __s25local54() {
            return "#";
          }
          var __s25local55 = "\\{";
          var __s25local56 = {
            type: "literal",
            value: "\\{",
            description: "\"\\\\{\""
          };
          function __s25local57() {
            return "{";
          }
          var __s25local58 = "\\}";
          var __s25local59 = {
            type: "literal",
            value: "\\}",
            description: "\"\\\\}\""
          };
          function __s25local60() {
            return "}";
          }
          var __s25local61 = "\\u";
          var __s25local62 = {
            type: "literal",
            value: "\\u",
            description: "\"\\\\u\""
          };
          function __s25local63(__s67param0, __s67param1, __s67param2, __s67param3) {
            return String.fromCharCode(parseInt("0x" + __s67param0 + __s67param1 + __s67param2 + __s67param3));
          }
          var __s25local64 = /^[0-9]/;
          var __s25local65 = {
            type: "class",
            value: "[0-9]",
            description: "[0-9]"
          };
          function __s25local66(__s69param0) {
            return parseInt(__s69param0.join(""), 10);
          }
          var __s25local67 = /^[0-9a-fA-F]/;
          var __s25local68 = {
            type: "class",
            value: "[0-9a-fA-F]",
            description: "[0-9a-fA-F]"
          };
          var __s25local69 = {
            type: "other",
            description: "whitespace"
          };
          function __s25local70(__s71param0) {
            return __s71param0.join("");
          }
          var __s25local71 = /^[ \t\n\r]/;
          var __s25local72 = {
            type: "class",
            value: "[ \\t\\n\\r]",
            description: "[ \\t\\n\\r]"
          };
          var __s25local73 = 0;
          var __s25local74 = 0;
          var __s25local75 = {
            line: 1,
            column: 1,
            seenCR: false
          };
          var __s25local76 = 0;
          var __s25local77 = [];
          var __s25local78 = 0;
          if ("startRule" in __s25local1) {
            if (!(__s25local1.startRule in __s25local3)) {
              throw new Error("Can't start parsing from rule \"" + __s25local1.startRule + "\".");
            }
            __s25local4 = __s25local3[__s25local1.startRule];
          }
          function peg$computePosDetails(__s75param0) {
            if (__s25local74 !== __s75param0) {
              if (__s25local74 > __s75param0) {
                __s25local74 = 0;
                __s25local75 = {
                  line: 1,
                  column: 1,
                  seenCR: false
                };
              }
              (function advance(__s79param0, __s79param1, __s79param2) {
                var __s79local0;
                var __s79local1;
                for (__s79local0 = __s79param1; __s79local0 < __s79param2; __s79local0++) {
                  if ((__s79local1 = __s25param0.charAt(__s79local0)) === "\n") {
                    if (!__s79param0.seenCR) {
                      __s79param0.line++;
                    }
                    __s79param0.column = 1;
                    __s79param0.seenCR = false;
                  } else if (__s79local1 === "\r" || __s79local1 === "\u2028" || __s79local1 === "\u2029") {
                    __s79param0.line++;
                    __s79param0.column = 1;
                    __s79param0.seenCR = true;
                  } else {
                    __s79param0.column++;
                    __s79param0.seenCR = false;
                  }
                }
              })(__s25local75, __s25local74, __s75param0);
              __s25local74 = __s75param0;
            }
            return __s25local75;
          }
          function peg$fail(__s87param0) {
            if (!(__s25local73 < __s25local76)) {
              if (__s25local73 > __s25local76) {
                __s25local76 = __s25local73;
                __s25local77 = [];
              }
              __s25local77.push(__s87param0);
            }
          }
          function peg$buildException(__s91param0, __s91param1, __s91param2) {
            var __s91local0 = peg$computePosDetails(__s91param2);
            var __s91local1 = __s91param2 < __s25param0.length ? __s25param0.charAt(__s91param2) : null;
            if (__s91param1 !== null) {
              (function cleanupExpected(__s94param0) {
                var __s94local0 = 1;
                for (__s94param0.sort(function (__s97param0, __s97param1) {
                  if (__s97param0.description < __s97param1.description) {
                    return -1;
                  } else if (__s97param0.description > __s97param1.description) {
                    return 1;
                  } else {
                    return 0;
                  }
                }); __s94local0 < __s94param0.length;) {
                  if (__s94param0[__s94local0 - 1] === __s94param0[__s94local0]) {
                    __s94param0.splice(__s94local0, 1);
                  } else {
                    __s94local0++;
                  }
                }
              })(__s91param1);
            }
            return new SyntaxError(__s91param0 !== null ? __s91param0 : function buildMessage(__s105param0, __s105param1) {
              var __s105local0;
              var __s105local1;
              var __s105local2;
              var __s105local3 = new Array(__s105param0.length);
              for (__s105local2 = 0; __s105local2 < __s105param0.length; __s105local2++) {
                __s105local3[__s105local2] = __s105param0[__s105local2].description;
              }
              __s105local0 = __s105param0.length > 1 ? __s105local3.slice(0, -1).join(", ") + " or " + __s105local3[__s105param0.length - 1] : __s105local3[0];
              __s105local1 = __s105param1 ? "\"" + function stringEscape(__s109param0) {
                function hex(__s111param0) {
                  return __s111param0.charCodeAt(0).toString(16).toUpperCase();
                }
                return __s109param0.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (__s113param0) {
                  return "\\x0" + hex(__s113param0);
                }).replace(/[\x10-\x1F\x80-\xFF]/g, function (__s115param0) {
                  return "\\x" + hex(__s115param0);
                }).replace(/[\u0180-\u0FFF]/g, function (__s117param0) {
                  return "\\u0" + hex(__s117param0);
                }).replace(/[\u1080-\uFFFF]/g, function (__s119param0) {
                  return "\\u" + hex(__s119param0);
                });
              }(__s105param1) + "\"" : "end of input";
              return "Expected " + __s105local0 + " but " + __s105local1 + " found.";
            }(__s91param1, __s91local1), __s91param1, __s91local1, __s91param2, __s91local0.line, __s91local0.column);
          }
          function peg$parsestart() {
            return peg$parsemessageFormatPattern();
          }
          function peg$parsemessageFormatPattern() {
            var __s123local0;
            var __s123local1;
            __s25local73;
            __s123local0 = [];
            if ((__s123local1 = peg$parsemessageFormatElement()) === __s25local2 && (__s123local1 = peg$parsestring()) === __s25local2) {
              __s123local1 = peg$parseoctothorpe();
            }
            while (__s123local1 !== __s25local2) {
              __s123local0.push(__s123local1);
              if ((__s123local1 = peg$parsemessageFormatElement()) === __s25local2 && (__s123local1 = peg$parsestring()) === __s25local2) {
                __s123local1 = peg$parseoctothorpe();
              }
            }
            if (__s123local0 !== __s25local2) {
              __s123local0 = __s25local5(__s123local0);
            }
            return __s123local0;
          }
          function peg$parsemessageFormatElement() {
            var __s130local0;
            var __s130local1;
            var __s130local2;
            var __s130local3;
            var __s130local4;
            var __s130local5;
            __s130local0 = __s25local73;
            if (__s25param0.charCodeAt(__s25local73) === 123) {
              __s130local1 = __s25local7;
              __s25local73++;
            } else {
              __s130local1 = __s25local2;
              if (__s25local78 === 0) {
                peg$fail(__s25local8);
              }
            }
            if (__s130local1 !== __s25local2 && peg$parse_() !== __s25local2 && (__s130local2 = peg$parseid()) !== __s25local2) {
              __s130local3 = __s25local73;
              if (__s25param0.charCodeAt(__s25local73) === 44) {
                __s130local4 = __s25local10;
                __s25local73++;
              } else {
                __s130local4 = __s25local2;
                if (__s25local78 === 0) {
                  peg$fail(__s25local11);
                }
              }
              if (__s130local4 !== __s25local2 && (__s130local5 = peg$parseelementFormat()) !== __s25local2) {
                __s130local3 = __s130local4 = [__s130local4, __s130local5];
              } else {
                __s25local73 = __s130local3;
                __s130local3 = __s25local6;
              }
              if (__s130local3 === __s25local2) {
                __s130local3 = __s25local9;
              }
              if (__s130local3 !== __s25local2 && (__s130local4 = peg$parse_()) !== __s25local2) {
                if (__s25param0.charCodeAt(__s25local73) === 125) {
                  __s130local5 = __s25local12;
                  __s25local73++;
                } else {
                  __s130local5 = __s25local2;
                  if (__s25local78 === 0) {
                    peg$fail(__s25local13);
                  }
                }
                if (__s130local5 !== __s25local2) {
                  __s130local1 = __s25local14(__s130local2, __s130local3);
                  __s130local0 = __s130local1;
                } else {
                  __s25local73 = __s130local0;
                  __s130local0 = __s25local6;
                }
              } else {
                __s25local73 = __s130local0;
                __s130local0 = __s25local6;
              }
            } else {
              __s25local73 = __s130local0;
              __s130local0 = __s25local6;
            }
            return __s130local0;
          }
          function peg$parseelementFormat() {
            var __s150local0;
            var __s150local1;
            var __s150local2;
            var __s150local3;
            var __s150local4;
            var __s150local5;
            __s150local0 = __s25local73;
            if ((__s150local1 = peg$parse_()) !== __s25local2) {
              if (__s25param0.substr(__s25local73, 6) === __s25local15) {
                __s150local2 = __s25local15;
                __s25local73 += 6;
              } else {
                __s150local2 = __s25local2;
                if (__s25local78 === 0) {
                  peg$fail(__s25local16);
                }
              }
              if (__s150local2 !== __s25local2 && (__s150local3 = peg$parse_()) !== __s25local2) {
                if (__s25param0.charCodeAt(__s25local73) === 44) {
                  __s150local4 = __s25local10;
                  __s25local73++;
                } else {
                  __s150local4 = __s25local2;
                  if (__s25local78 === 0) {
                    peg$fail(__s25local11);
                  }
                }
                if (__s150local4 !== __s25local2 && peg$parse_() !== __s25local2 && (__s150local5 = peg$parsepluralFormatPattern()) !== __s25local2 && peg$parse_() !== __s25local2) {
                  __s150local1 = __s25local17(__s150local2, __s150local5);
                  __s150local0 = __s150local1;
                } else {
                  __s25local73 = __s150local0;
                  __s150local0 = __s25local6;
                }
              } else {
                __s25local73 = __s150local0;
                __s150local0 = __s25local6;
              }
            } else {
              __s25local73 = __s150local0;
              __s150local0 = __s25local6;
            }
            if (__s150local0 === __s25local2 && (__s150local0 = __s25local73, (__s150local1 = peg$parse_()) !== __s25local2 ? (__s25param0.substr(__s25local73, 13) === __s25local18 ? (__s150local2 = __s25local18, __s25local73 += 13) : (__s150local2 = __s25local2, __s25local78 === 0 && peg$fail(__s25local19)), __s150local2 !== __s25local2 && (__s150local3 = peg$parse_()) !== __s25local2 ? (__s25param0.charCodeAt(__s25local73) === 44 ? (__s150local4 = __s25local10, __s25local73++) : (__s150local4 = __s25local2, __s25local78 === 0 && peg$fail(__s25local11)), __s150local4 !== __s25local2 && peg$parse_() !== __s25local2 && (__s150local5 = peg$parsepluralFormatPattern()) !== __s25local2 && peg$parse_() !== __s25local2 ? (__s150local1 = __s25local17(__s150local2, __s150local5), __s150local0 = __s150local1) : (__s25local73 = __s150local0, __s150local0 = __s25local6)) : (__s25local73 = __s150local0, __s150local0 = __s25local6)) : (__s25local73 = __s150local0, __s150local0 = __s25local6), __s150local0 === __s25local2 && (__s150local0 = __s25local73, (__s150local1 = peg$parse_()) !== __s25local2 ? (__s25param0.substr(__s25local73, 6) === __s25local20 ? (__s150local2 = __s25local20, __s25local73 += 6) : (__s150local2 = __s25local2, __s25local78 === 0 && peg$fail(__s25local21)), __s150local2 !== __s25local2 && (__s150local3 = peg$parse_()) !== __s25local2 ? (__s25param0.charCodeAt(__s25local73) === 44 ? (__s150local4 = __s25local10, __s25local73++) : (__s150local4 = __s25local2, __s25local78 === 0 && peg$fail(__s25local11)), __s150local4 !== __s25local2 && peg$parse_() !== __s25local2 && (__s150local5 = function peg$parseselectFormatPattern() {
              var __s164local0;
              var __s164local1;
              __s25local73;
              __s164local0 = [];
              if ((__s164local1 = peg$parseselectForm()) !== __s25local2) {
                while (__s164local1 !== __s25local2) {
                  __s164local0.push(__s164local1);
                  __s164local1 = peg$parseselectForm();
                }
              } else {
                __s164local0 = __s25local6;
              }
              if (__s164local0 !== __s25local2) {
                __s164local0 = __s25local33(__s164local0);
              }
              return __s164local0;
            }()) !== __s25local2 && peg$parse_() !== __s25local2 ? (__s150local1 = __s25local17(__s150local2, __s150local5), __s150local0 = __s150local1) : (__s25local73 = __s150local0, __s150local0 = __s25local6)) : (__s25local73 = __s150local0, __s150local0 = __s25local6)) : (__s25local73 = __s150local0, __s150local0 = __s25local6), __s150local0 === __s25local2))) {
              __s150local0 = __s25local73;
              if ((__s150local1 = peg$parse_()) !== __s25local2) {
                if ((__s150local2 = peg$parseid()) !== __s25local2) {
                  __s150local3 = [];
                  __s150local4 = peg$parseargStylePattern();
                  while (__s150local4 !== __s25local2) {
                    __s150local3.push(__s150local4);
                    __s150local4 = peg$parseargStylePattern();
                  }
                  if (__s150local3 !== __s25local2) {
                    __s150local1 = __s25local22(__s150local2, __s150local3);
                    __s150local0 = __s150local1;
                  } else {
                    __s25local73 = __s150local0;
                    __s150local0 = __s25local6;
                  }
                } else {
                  __s25local73 = __s150local0;
                  __s150local0 = __s25local6;
                }
              } else {
                __s25local73 = __s150local0;
                __s150local0 = __s25local6;
              }
            }
            return __s150local0;
          }
          function peg$parsepluralFormatPattern() {
            var __s180local0;
            var __s180local1;
            var __s180local2;
            var __s180local3;
            __s180local0 = __s25local73;
            if ((__s180local1 = function peg$parseoffsetPattern() {
              var __s182local0;
              var __s182local1;
              var __s182local2;
              var __s182local3;
              var __s182local4;
              __s182local0 = __s25local73;
              if ((__s182local1 = peg$parse_()) !== __s25local2) {
                if (__s25param0.substr(__s25local73, 6) === __s25local24) {
                  __s182local2 = __s25local24;
                  __s25local73 += 6;
                } else {
                  __s182local2 = __s25local2;
                  if (__s25local78 === 0) {
                    peg$fail(__s25local25);
                  }
                }
                if (__s182local2 !== __s25local2 && peg$parse_() !== __s25local2) {
                  if (__s25param0.charCodeAt(__s25local73) === 58) {
                    __s182local3 = __s25local26;
                    __s25local73++;
                  } else {
                    __s182local3 = __s25local2;
                    if (__s25local78 === 0) {
                      peg$fail(__s25local27);
                    }
                  }
                  if (__s182local3 !== __s25local2 && peg$parse_() !== __s25local2 && (__s182local4 = peg$parsedigits()) !== __s25local2 && peg$parse_() !== __s25local2) {
                    __s182local1 = __s25local28(__s182local4);
                    __s182local0 = __s182local1;
                  } else {
                    __s25local73 = __s182local0;
                    __s182local0 = __s25local6;
                  }
                } else {
                  __s25local73 = __s182local0;
                  __s182local0 = __s25local6;
                }
              } else {
                __s25local73 = __s182local0;
                __s182local0 = __s25local6;
              }
              return __s182local0;
            }()) === __s25local2) {
              __s180local1 = __s25local9;
            }
            if (__s180local1 !== __s25local2) {
              __s180local2 = [];
              if ((__s180local3 = peg$parsepluralForm()) !== __s25local2) {
                while (__s180local3 !== __s25local2) {
                  __s180local2.push(__s180local3);
                  __s180local3 = peg$parsepluralForm();
                }
              } else {
                __s180local2 = __s25local6;
              }
              if (__s180local2 !== __s25local2) {
                __s180local1 = __s25local23(__s180local1, __s180local2);
                __s180local0 = __s180local1;
              } else {
                __s25local73 = __s180local0;
                __s180local0 = __s25local6;
              }
            } else {
              __s25local73 = __s180local0;
              __s180local0 = __s25local6;
            }
            return __s180local0;
          }
          function peg$parsepluralForm() {
            var __s205local0;
            var __s205local1;
            var __s205local2;
            var __s205local3;
            var __s205local4;
            var __s205local5;
            __s205local0 = __s25local73;
            if ((__s205local1 = peg$parse_()) !== __s25local2 && (__s205local2 = function peg$parsepluralKey() {
              var __s207local0;
              var __s207local1;
              var __s207local2;
              __s207local0 = __s25local73;
              if ((__s207local1 = peg$parseid()) !== __s25local2) {
                __s207local1 = __s25local30(__s207local1);
              }
              if ((__s207local0 = __s207local1) === __s25local2) {
                __s207local0 = __s25local73;
                if (__s25param0.charCodeAt(__s25local73) === 61) {
                  __s207local1 = __s25local31;
                  __s25local73++;
                } else {
                  __s207local1 = __s25local2;
                  if (__s25local78 === 0) {
                    peg$fail(__s25local32);
                  }
                }
                if (__s207local1 !== __s25local2 && (__s207local2 = peg$parsedigits()) !== __s25local2) {
                  __s207local1 = __s25local28(__s207local2);
                  __s207local0 = __s207local1;
                } else {
                  __s25local73 = __s207local0;
                  __s207local0 = __s25local6;
                }
              }
              return __s207local0;
            }()) !== __s25local2 && peg$parse_() !== __s25local2) {
              if (__s25param0.charCodeAt(__s25local73) === 123) {
                __s205local3 = __s25local7;
                __s25local73++;
              } else {
                __s205local3 = __s25local2;
                if (__s25local78 === 0) {
                  peg$fail(__s25local8);
                }
              }
              if (__s205local3 !== __s25local2 && peg$parse_() !== __s25local2 && (__s205local4 = peg$parsemessageFormatPattern()) !== __s25local2 && peg$parse_() !== __s25local2) {
                if (__s25param0.charCodeAt(__s25local73) === 125) {
                  __s205local5 = __s25local12;
                  __s25local73++;
                } else {
                  __s205local5 = __s25local2;
                  if (__s25local78 === 0) {
                    peg$fail(__s25local13);
                  }
                }
                if (__s205local5 !== __s25local2) {
                  __s205local1 = __s25local29(__s205local2, __s205local4);
                  __s205local0 = __s205local1;
                } else {
                  __s25local73 = __s205local0;
                  __s205local0 = __s25local6;
                }
              } else {
                __s25local73 = __s205local0;
                __s205local0 = __s25local6;
              }
            } else {
              __s25local73 = __s205local0;
              __s205local0 = __s25local6;
            }
            return __s205local0;
          }
          function peg$parseselectForm() {
            var __s228local0;
            var __s228local1;
            var __s228local2;
            var __s228local3;
            var __s228local4;
            var __s228local5;
            __s228local0 = __s25local73;
            if ((__s228local1 = peg$parse_()) !== __s25local2 && (__s228local2 = peg$parseid()) !== __s25local2 && peg$parse_() !== __s25local2) {
              if (__s25param0.charCodeAt(__s25local73) === 123) {
                __s228local3 = __s25local7;
                __s25local73++;
              } else {
                __s228local3 = __s25local2;
                if (__s25local78 === 0) {
                  peg$fail(__s25local8);
                }
              }
              if (__s228local3 !== __s25local2 && peg$parse_() !== __s25local2 && (__s228local4 = peg$parsemessageFormatPattern()) !== __s25local2 && peg$parse_() !== __s25local2) {
                if (__s25param0.charCodeAt(__s25local73) === 125) {
                  __s228local5 = __s25local12;
                  __s25local73++;
                } else {
                  __s228local5 = __s25local2;
                  if (__s25local78 === 0) {
                    peg$fail(__s25local13);
                  }
                }
                if (__s228local5 !== __s25local2) {
                  __s228local1 = __s25local29(__s228local2, __s228local4);
                  __s228local0 = __s228local1;
                } else {
                  __s25local73 = __s228local0;
                  __s228local0 = __s25local6;
                }
              } else {
                __s25local73 = __s228local0;
                __s228local0 = __s25local6;
              }
            } else {
              __s25local73 = __s228local0;
              __s228local0 = __s25local6;
            }
            return __s228local0;
          }
          function peg$parseargStylePattern() {
            var __s242local0;
            var __s242local1;
            var __s242local2;
            var __s242local3;
            __s242local0 = __s25local73;
            if ((__s242local1 = peg$parse_()) !== __s25local2) {
              if (__s25param0.charCodeAt(__s25local73) === 44) {
                __s242local2 = __s25local10;
                __s25local73++;
              } else {
                __s242local2 = __s25local2;
                if (__s25local78 === 0) {
                  peg$fail(__s25local11);
                }
              }
              if (__s242local2 !== __s25local2 && peg$parse_() !== __s25local2 && (__s242local3 = peg$parseid()) !== __s25local2 && peg$parse_() !== __s25local2) {
                __s242local1 = __s25local34(__s242local3);
                __s242local0 = __s242local1;
              } else {
                __s25local73 = __s242local0;
                __s242local0 = __s25local6;
              }
            } else {
              __s25local73 = __s242local0;
              __s242local0 = __s25local6;
            }
            return __s242local0;
          }
          function peg$parseoctothorpe() {
            var __s251local0;
            __s25local73;
            if (__s25param0.charCodeAt(__s25local73) === 35) {
              __s251local0 = __s25local35;
              __s25local73++;
            } else {
              __s251local0 = __s25local2;
              if (__s25local78 === 0) {
                peg$fail(__s25local36);
              }
            }
            if (__s251local0 !== __s25local2) {
              __s251local0 = __s25local37();
            }
            return __s251local0;
          }
          function peg$parsestring() {
            var __s257local0;
            var __s257local1;
            __s25local73;
            __s257local0 = [];
            if ((__s257local1 = peg$parsechars()) === __s25local2) {
              __s257local1 = peg$parsewhitespace();
            }
            if (__s257local1 !== __s25local2) {
              while (__s257local1 !== __s25local2) {
                __s257local0.push(__s257local1);
                if ((__s257local1 = peg$parsechars()) === __s25local2) {
                  __s257local1 = peg$parsewhitespace();
                }
              }
            } else {
              __s257local0 = __s25local6;
            }
            if (__s257local0 !== __s25local2) {
              __s257local0 = __s25local38(__s257local0);
            }
            return __s257local0;
          }
          function peg$parseid() {
            var __s266local0;
            var __s266local1;
            var __s266local2;
            var __s266local3;
            var __s266local4;
            var __s266local5;
            var __s266local6;
            __s25local78++;
            __s266local0 = __s25local73;
            if ((__s266local1 = peg$parse_()) !== __s25local2) {
              __s266local2 = __s25local73;
              __s266local3 = __s25local73;
              if (__s25local40.test(__s25param0.charAt(__s25local73))) {
                __s266local4 = __s25param0.charAt(__s25local73);
                __s25local73++;
              } else {
                __s266local4 = __s25local2;
                if (__s25local78 === 0) {
                  peg$fail(__s25local41);
                }
              }
              if (__s266local4 !== __s25local2) {
                __s266local5 = [];
                if (__s25local42.test(__s25param0.charAt(__s25local73))) {
                  __s266local6 = __s25param0.charAt(__s25local73);
                  __s25local73++;
                } else {
                  __s266local6 = __s25local2;
                  if (__s25local78 === 0) {
                    peg$fail(__s25local43);
                  }
                }
                while (__s266local6 !== __s25local2) {
                  __s266local5.push(__s266local6);
                  if (__s25local42.test(__s25param0.charAt(__s25local73))) {
                    __s266local6 = __s25param0.charAt(__s25local73);
                    __s25local73++;
                  } else {
                    __s266local6 = __s25local2;
                    if (__s25local78 === 0) {
                      peg$fail(__s25local43);
                    }
                  }
                }
                if (__s266local5 !== __s25local2) {
                  __s266local3 = __s266local4 = [__s266local4, __s266local5];
                } else {
                  __s25local73 = __s266local3;
                  __s266local3 = __s25local6;
                }
              } else {
                __s25local73 = __s266local3;
                __s266local3 = __s25local6;
              }
              if (__s266local3 !== __s25local2) {
                __s266local3 = __s25param0.substring(__s266local2, __s25local73);
              }
              if ((__s266local2 = __s266local3) !== __s25local2 && (__s266local3 = peg$parse_()) !== __s25local2) {
                __s266local1 = __s25local44(__s266local2);
                __s266local0 = __s266local1;
              } else {
                __s25local73 = __s266local0;
                __s266local0 = __s25local6;
              }
            } else {
              __s25local73 = __s266local0;
              __s266local0 = __s25local6;
            }
            __s25local78--;
            if (__s266local0 === __s25local2) {
              __s266local1 = __s25local2;
              if (__s25local78 === 0) {
                peg$fail(__s25local39);
              }
            }
            return __s266local0;
          }
          function peg$parsechars() {
            var __s290local0;
            var __s290local1;
            __s25local73;
            __s290local0 = [];
            if ((__s290local1 = peg$parsechar()) !== __s25local2) {
              while (__s290local1 !== __s25local2) {
                __s290local0.push(__s290local1);
                __s290local1 = peg$parsechar();
              }
            } else {
              __s290local0 = __s25local6;
            }
            if (__s290local0 !== __s25local2) {
              __s290local0 = __s25local45(__s290local0);
            }
            return __s290local0;
          }
          function peg$parsechar() {
            var __s297local0;
            var __s297local1;
            var __s297local2;
            var __s297local3;
            var __s297local4;
            var __s297local5;
            __s297local0 = __s25local73;
            if (__s25local46.test(__s25param0.charAt(__s25local73))) {
              __s297local1 = __s25param0.charAt(__s25local73);
              __s25local73++;
            } else {
              __s297local1 = __s25local2;
              if (__s25local78 === 0) {
                peg$fail(__s25local47);
              }
            }
            if (__s297local1 !== __s25local2) {
              __s297local1 = __s25local48(__s297local1);
            }
            if ((__s297local0 = __s297local1) === __s25local2) {
              __s297local0 = __s25local73;
              if (__s25param0.substr(__s25local73, 2) === __s25local49) {
                __s297local1 = __s25local49;
                __s25local73 += 2;
              } else {
                __s297local1 = __s25local2;
                if (__s25local78 === 0) {
                  peg$fail(__s25local50);
                }
              }
              if (__s297local1 !== __s25local2) {
                __s297local1 = __s25local51();
              }
              if ((__s297local0 = __s297local1) === __s25local2) {
                __s297local0 = __s25local73;
                if (__s25param0.substr(__s25local73, 2) === __s25local52) {
                  __s297local1 = __s25local52;
                  __s25local73 += 2;
                } else {
                  __s297local1 = __s25local2;
                  if (__s25local78 === 0) {
                    peg$fail(__s25local53);
                  }
                }
                if (__s297local1 !== __s25local2) {
                  __s297local1 = __s25local54();
                }
                if ((__s297local0 = __s297local1) === __s25local2) {
                  __s297local0 = __s25local73;
                  if (__s25param0.substr(__s25local73, 2) === __s25local55) {
                    __s297local1 = __s25local55;
                    __s25local73 += 2;
                  } else {
                    __s297local1 = __s25local2;
                    if (__s25local78 === 0) {
                      peg$fail(__s25local56);
                    }
                  }
                  if (__s297local1 !== __s25local2) {
                    __s297local1 = __s25local57();
                  }
                  if ((__s297local0 = __s297local1) === __s25local2) {
                    __s297local0 = __s25local73;
                    if (__s25param0.substr(__s25local73, 2) === __s25local58) {
                      __s297local1 = __s25local58;
                      __s25local73 += 2;
                    } else {
                      __s297local1 = __s25local2;
                      if (__s25local78 === 0) {
                        peg$fail(__s25local59);
                      }
                    }
                    if (__s297local1 !== __s25local2) {
                      __s297local1 = __s25local60();
                    }
                    if ((__s297local0 = __s297local1) === __s25local2) {
                      __s297local0 = __s25local73;
                      if (__s25param0.substr(__s25local73, 2) === __s25local61) {
                        __s297local1 = __s25local61;
                        __s25local73 += 2;
                      } else {
                        __s297local1 = __s25local2;
                        if (__s25local78 === 0) {
                          peg$fail(__s25local62);
                        }
                      }
                      if (__s297local1 !== __s25local2 && (__s297local2 = peg$parsehexDigit()) !== __s25local2 && (__s297local3 = peg$parsehexDigit()) !== __s25local2 && (__s297local4 = peg$parsehexDigit()) !== __s25local2 && (__s297local5 = peg$parsehexDigit()) !== __s25local2) {
                        __s297local1 = __s25local63(__s297local2, __s297local3, __s297local4, __s297local5);
                        __s297local0 = __s297local1;
                      } else {
                        __s25local73 = __s297local0;
                        __s297local0 = __s25local6;
                      }
                    }
                  }
                }
              }
            }
            return __s297local0;
          }
          function peg$parsedigits() {
            var __s329local0;
            var __s329local1;
            __s25local73;
            __s329local0 = [];
            if (__s25local64.test(__s25param0.charAt(__s25local73))) {
              __s329local1 = __s25param0.charAt(__s25local73);
              __s25local73++;
            } else {
              __s329local1 = __s25local2;
              if (__s25local78 === 0) {
                peg$fail(__s25local65);
              }
            }
            if (__s329local1 !== __s25local2) {
              while (__s329local1 !== __s25local2) {
                __s329local0.push(__s329local1);
                if (__s25local64.test(__s25param0.charAt(__s25local73))) {
                  __s329local1 = __s25param0.charAt(__s25local73);
                  __s25local73++;
                } else {
                  __s329local1 = __s25local2;
                  if (__s25local78 === 0) {
                    peg$fail(__s25local65);
                  }
                }
              }
            } else {
              __s329local0 = __s25local6;
            }
            if (__s329local0 !== __s25local2) {
              __s329local0 = __s25local66(__s329local0);
            }
            return __s329local0;
          }
          function peg$parsehexDigit() {
            var __s342local0;
            if (__s25local67.test(__s25param0.charAt(__s25local73))) {
              __s342local0 = __s25param0.charAt(__s25local73);
              __s25local73++;
            } else {
              __s342local0 = __s25local2;
              if (__s25local78 === 0) {
                peg$fail(__s25local68);
              }
            }
            return __s342local0;
          }
          function peg$parse_() {
            var __s347local0;
            var __s347local1;
            var __s347local2;
            __s25local78++;
            __s347local0 = __s25local73;
            __s347local1 = [];
            __s347local2 = peg$parsewhitespace();
            while (__s347local2 !== __s25local2) {
              __s347local1.push(__s347local2);
              __s347local2 = peg$parsewhitespace();
            }
            if (__s347local1 !== __s25local2) {
              __s347local1 = __s25local70(__s347local1);
            }
            __s25local78--;
            if ((__s347local0 = __s347local1) === __s25local2) {
              __s347local1 = __s25local2;
              if (__s25local78 === 0) {
                peg$fail(__s25local69);
              }
            }
            return __s347local0;
          }
          function peg$parsewhitespace() {
            var __s354local0;
            if (__s25local71.test(__s25param0.charAt(__s25local73))) {
              __s354local0 = __s25param0.charAt(__s25local73);
              __s25local73++;
            } else {
              __s354local0 = __s25local2;
              if (__s25local78 === 0) {
                peg$fail(__s25local72);
              }
            }
            return __s354local0;
          }
          if ((__s25local0 = __s25local4()) !== __s25local2 && __s25local73 === __s25param0.length) {
            return __s25local0;
          }
          if (__s25local0 !== __s25local2 && __s25local73 < __s25param0.length) {
            peg$fail({
              type: "end",
              description: "end of input"
            });
          }
          throw peg$buildException(null, __s25local77, __s25local76);
        }
      };
    }().parse;
    MessageFormat.plurals = {};
    MessageFormat.formatters = {};
    MessageFormat.prototype.runtime = {
      number: function (__s361param0, __s361param1) {
        if (isNaN(__s361param0)) {
          throw new Error("'" + __s361param0 + "' isn't a number.");
        }
        return __s361param0 - (__s361param1 || 0);
      },
      plural: function (__s364param0, __s364param1, __s364param2, __s364param3, __s364param4) {
        if ({}.hasOwnProperty.call(__s364param3, __s364param0)) {
          return __s364param3[__s364param0]();
        }
        if (__s364param1) {
          __s364param0 -= __s364param1;
        }
        var __s364local0 = __s364param2(__s364param0, __s364param4);
        if (__s364local0 in __s364param3) {
          return __s364param3[__s364local0]();
        } else {
          return __s364param3.other();
        }
      },
      select: function (__s370param0, __s370param1) {
        if ({}.hasOwnProperty.call(__s370param1, __s370param0)) {
          return __s370param1[__s370param0]();
        } else {
          return __s370param1.other();
        }
      },
      pluralFuncs: {},
      fmt: {},
      toString: function () {
        function __s374local0(__s376param0, __s376param1) {
          if (typeof __s376param0 != "object") {
            var __s376local0 = __s376param0.toString().replace(/^(function )\w*/, "$1");
            var __s376local1 = /([ \t]*)\S.*$/.exec(__s376local0);
            if (__s376local1) {
              return __s376local0.replace(new RegExp("^" + __s376local1[1], "mg"), "");
            } else {
              return __s376local0;
            }
          }
          var __s376local2 = [];
          for (var __s376local3 in __s376param0) {
            if (__s376local3 != "toString") {
              if (__s376param1 == 0) {
                __s376local2.push("var " + __s376local3 + " = " + __s374local0(__s376param0[__s376local3], __s376param1 + 1) + ";\n");
              } else {
                __s376local2.push(propname(__s376local3) + ": " + __s374local0(__s376param0[__s376local3], __s376param1 + 1));
              }
            }
          }
          if (__s376param1 == 0) {
            return __s376local2.join("");
          }
          if (__s376local2.length == 0) {
            return "{}";
          }
          var __s376local1 = "  ";
          while (--__s376param1) {
            __s376local1 += "  ";
          }
          return "{\n" + __s376local2.join(",\n").replace(/^/gm, __s376local1) + "\n}";
        }
        return __s374local0(this, 0);
      }
    };
    MessageFormat.prototype._precompile = function (__s390param0, __s390param1) {
      __s390param1 = __s390param1 || {
        keys: {},
        offset: {}
      };
      var __s390local0;
      var __s390local1;
      var __s390local2 = [];
      var __s390local3 = [];
      switch (__s390param0.type) {
        case "messageFormatPattern":
          for (__s390local0 = 0; __s390local0 < __s390param0.statements.length; ++__s390local0) {
            __s390local2.push(this._precompile(__s390param0.statements[__s390local0], __s390param1));
          }
          __s390local1 = __s390local2.join(" + ") || "\"\"";
          if (__s390param1.pf_count) {
            return __s390local1;
          } else {
            return "function(d) { return " + __s390local1 + "; }";
          }
        case "messageFormatElement":
          __s390param1.pf_count = __s390param1.pf_count || 0;
          if (__s390param0.output) {
            return propname(__s390param0.argumentIndex, "d");
          } else {
            __s390param1.keys[__s390param1.pf_count] = __s390param0.argumentIndex;
            return this._precompile(__s390param0.elementFormat, __s390param1);
          }
        case "elementFormat":
          __s390local3 = [propname(__s390param1.keys[__s390param1.pf_count], "d")];
          switch (__s390param0.key) {
            case "select":
              __s390local3.push(this._precompile(__s390param0.val, __s390param1));
              return "select(" + __s390local3.join(", ") + ")";
            case "selectordinal":
              return "plural(" + (__s390local3 = __s390local3.concat([0, propname(this.lc[0], "pluralFuncs"), this._precompile(__s390param0.val, __s390param1), 1])).join(", ") + ")";
            case "plural":
              __s390param1.offset[__s390param1.pf_count || 0] = __s390param0.val.offset || 0;
              return "plural(" + (__s390local3 = __s390local3.concat([__s390param1.offset[__s390param1.pf_count] || 0, propname(this.lc[0], "pluralFuncs"), this._precompile(__s390param0.val, __s390param1)])).join(", ") + ")";
            default:
              if (this.withIntlSupport && !(__s390param0.key in this.runtime.fmt) && __s390param0.key in MessageFormat.formatters) {
                __s390local1 = MessageFormat.formatters[__s390param0.key];
                this.runtime.fmt[__s390param0.key] = typeof __s390local1(this) == "function" ? __s390local1(this) : __s390local1;
              }
              __s390local3.push(JSON.stringify(this.lc));
              if (__s390param0.val && __s390param0.val.length) {
                __s390local3.push(JSON.stringify(__s390param0.val.length == 1 ? __s390param0.val[0] : __s390param0.val));
              }
              return "fmt." + __s390param0.key + "(" + __s390local3.join(", ") + ")";
          }
        case "pluralFormatPattern":
        case "selectFormatPattern":
          __s390param1.pf_count = __s390param1.pf_count || 0;
          if (__s390param0.type == "selectFormatPattern") {
            __s390param1.offset[__s390param1.pf_count] = 0;
          }
          var __s390local4 = true;
          for (__s390local0 = 0; __s390local0 < __s390param0.pluralForms.length; ++__s390local0) {
            var __s390local5 = __s390param0.pluralForms[__s390local0].key;
            if (__s390local5 === "other") {
              __s390local4 = false;
            }
            var __s390local6 = JSON.parse(JSON.stringify(__s390param1));
            __s390local6.pf_count++;
            __s390local2.push(propname(__s390local5) + ": function() { return " + this._precompile(__s390param0.pluralForms[__s390local0].val, __s390local6) + ";}");
          }
          if (__s390local4) {
            throw new Error("No 'other' form found in " + __s390param0.type + " " + __s390param1.pf_count);
          }
          return "{ " + __s390local2.join(", ") + " }";
        case "string":
          return JSON.stringify(__s390param0.val || "");
        case "octothorpe":
          if (__s390param1.pf_count) {
            __s390local3 = [propname(__s390param1.keys[__s390param1.pf_count - 1], "d")];
            if (__s390param1.offset[__s390param1.pf_count - 1]) {
              __s390local3.push(__s390param1.offset[__s390param1.pf_count - 1]);
            }
            return "number(" + __s390local3.join(", ") + ")";
          } else {
            return "\"#\"";
          }
        default:
          throw new Error("Bad AST type: " + __s390param0.type);
      }
    };
    MessageFormat.prototype.compile = function (__s410param0, __s410param1) {
      var __s410local0 = {};
      var __s410local1 = this.lc;
      function __s410local2(__s412param0, __s412param1) {
        try {
          var __s412local0 = MessageFormat._parse(__s412param1);
          return __s412param0._precompile(__s412local0);
        } catch (__s415local0) {
          throw new Error((__s412local0 ? "Precompiler" : "Parser") + " error: " + __s415local0.toString());
        }
      }
      function __s410local3(__s417param0, __s417param1) {
        __s417param1 ||= 0;
        if (typeof __s417param0 != "object") {
          return __s417param0;
        }
        var __s417local0 = [];
        var __s417local1 = "";
        for (var __s417local2 = 0; __s417local2 < __s417param1; ++__s417local2) {
          __s417local1 += "  ";
        }
        for (var __s417local3 in __s417param0) {
          __s417local0.push("\n" + __s417local1 + "  " + propname(__s417local3) + ": " + __s410local3(__s417param0[__s417local3], __s417param1 + 1));
        }
        return "{" + __s417local0.join(",") + "\n" + __s417local1 + "}";
      }
      if (typeof __s410param0 == "string") {
        var __s410local4 = new Function("number, plural, select, pluralFuncs, fmt", "return " + __s410local2(this, __s410param0));
        return __s410local4(this.runtime.number, this.runtime.plural, this.runtime.select, this.runtime.pluralFuncs, this.runtime.fmt);
      }
      __s410param1 = __s410param1 || {};
      for (var __s410local5 in __s410param0) {
        if (__s410param1.locale) {
          this.lc = __s410param1.locale[__s410local5] && [].concat(__s410param1.locale[__s410local5]) || __s410local1;
        }
        if (typeof __s410param0[__s410local5] == "string") {
          try {
            __s410local0[__s410local5] = __s410local2(this, __s410param0[__s410local5]);
          } catch (__s430local0) {
            __s430local0.message = __s430local0.message.replace(":", " with `" + __s410local5 + "`:");
            throw __s430local0;
          }
        } else {
          __s410local0[__s410local5] = {};
          for (var __s410local6 in __s410param0[__s410local5]) {
            try {
              __s410local0[__s410local5][__s410local6] = __s410local2(this, __s410param0[__s410local5][__s410local6]);
            } catch (__s436local0) {
              __s436local0.message = __s436local0.message.replace(":", " with `" + __s410local6 + "` in `" + __s410local5 + "`:");
              throw __s436local0;
            }
          }
        }
      }
      this.lc = __s410local1;
      var __s410local7 = this.runtime.toString() + "\n";
      switch (__s410param1.global || "") {
        case "exports":
          var __s410local8 = [];
          for (var __s410local9 in __s410local0) {
            __s410local8.push(propname(__s410local9, "exports") + " = " + __s410local3(__s410local0[__s410local9]));
          }
          return new Function(__s410local7 + __s410local8.join(";\n"));
        case "module.exports":
          return new Function(__s410local7 + "module.exports = " + __s410local3(__s410local0));
        case "":
          return new Function(__s410local7 + "return " + __s410local3(__s410local0));
        default:
          return new Function("G", __s410local7 + propname(__s410param1.global, "G") + " = " + __s410local3(__s410local0));
      }
    };
    return MessageFormat;
  }();
  function __s1local10() {
    return __s1local2("E_MISSING_PLURAL_MODULE", "Plural module not loaded.");
  }
  var __s1local11 = [].slice;
  __s1param1.loadMessages = function (__s443param0) {
    var __s443local0;
    var __s443local1 = {
      "globalize-messages": __s443param0,
      main: {}
    };
    __s1local7(__s443param0, "json");
    __s1local9(__s443param0, "json");
    for (__s443local0 in __s443param0) {
      if (__s443param0.hasOwnProperty(__s443local0)) {
        __s443local1.main[__s443local0] = {};
      }
    }
    __s1param0.load(__s443local1);
  };
  __s1param1.messageFormatter = __s1param1.prototype.messageFormatter = function (__s448param0) {
    var __s448local0;
    var __s448local1;
    var __s448local2;
    var __s448local3;
    var __s448local4;
    var __s448local5 = __s1local11.call(arguments, 0);
    __s1local7(__s448param0, "path");
    __s1local8(__s448param0, "path", typeof __s448param0 == "string" || Array.isArray(__s448param0), "a String nor an Array");
    __s448param0 = __s1local1(__s448param0);
    __s448local0 = this.cldr;
    __s1local5(__s448local0);
    (function (__s450param0) {
      __s1local6("E_MISSING_MESSAGE_BUNDLE", "Missing message bundle for locale `{locale}`.", __s450param0.attributes.bundle && __s450param0.get("globalize-messages/{bundle}") !== undefined, {
        locale: __s450param0.locale
      });
    })(__s448local0);
    (function (__s452param0, __s452param1) {
      __s452param0 = __s452param0.join("/");
      __s1local6("E_MISSING_MESSAGE", "Missing required message content `{path}`.", __s452param1 !== undefined, {
        path: __s452param0
      });
    })(__s448param0, __s448local2 = __s448local0.get(["globalize-messages/{bundle}"].concat(__s448param0)));
    if (Array.isArray(__s448local2)) {
      __s448local2 = __s448local2.join(" ");
    }
    (function (__s455param0, __s455param1) {
      __s455param0 = __s455param0.join("/");
      __s1local6("E_INVALID_MESSAGE", "Invalid message content `{path}`. {expected} expected.", typeof __s455param1 == "string", {
        expected: "a string",
        path: __s455param0
      });
    })(__s448param0, __s448local2);
    __s448local3 = this.plural !== undefined ? this.pluralGenerator() : __s1local10;
    __s448local4 = function (__s457param0) {
      return function messageFormatter(__s459param0) {
        var __s459local0;
        if (typeof __s459param0 == "number" || typeof __s459param0 == "string") {
          __s459param0 = [].slice.call(arguments, 0);
        }
        __s1local8(__s459local0 = __s459param0, "variables", __s459local0 === undefined || __s1local3(__s459local0) || Array.isArray(__s459local0), "Array or Plain Object");
        return __s457param0(__s459param0);
      };
    }(__s448local1 = new __s1local0(__s448local0.locale, __s448local3).compile(__s448local2));
    __s1local4(__s448local5, __s448local0, __s448local4, [function (__s462param0, __s462param1) {
      var __s462local0 = __s462param0.locale;
      var __s462local1 = __s462param1.toString;
      __s462param1.toString = function () {
        var __s464local0;
        var __s464local1 = {};
        __s464local0 = __s462local1.call(__s462param1);
        if (/number\(/.test(__s464local0)) {
          __s464local1.number = "messageFormat.number";
        }
        if (/plural\(/.test(__s464local0)) {
          __s464local1.plural = "messageFormat.plural";
        }
        if (/select\(/.test(__s464local0)) {
          __s464local1.select = "messageFormat.select";
        }
        __s464local0.replace(/pluralFuncs(\[([^\]]+)\]|\.([a-zA-Z]+))/, function (__s469param0) {
          __s464local1.pluralFuncs = "{\"" + __s462local0 + "\": Globalize(\"" + __s462local0 + "\").pluralGenerator()}";
          return __s469param0;
        });
        return "(function( " + Object.keys(__s464local1).join(", ") + " ) {\n  return " + __s464local0 + "\n})(" + Object.keys(__s464local1).map(function (__s471param0) {
          return __s464local1[__s471param0];
        }).join(", ") + ")";
      };
      return __s462param1;
    }(__s448local0, __s448local1), __s448local3]);
    return __s448local4;
  };
  __s1param1.formatMessage = __s1param1.prototype.formatMessage = function (__s473param0) {
    return this.messageFormatter(__s473param0).apply({}, __s1local11.call(arguments, 1));
  };
  return __s1param1;
}) == "function" ? __s0local0.apply(exports, __s0local1) : __s0local0) !== undefined) {
  module.exports = __s0local2;
}
