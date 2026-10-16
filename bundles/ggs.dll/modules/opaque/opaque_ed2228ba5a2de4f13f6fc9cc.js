module.exports = parse;
parse.filename = null;
parse.defaults = {
  keepCase: false
};
var __dep_exact_a4efe355d1edb1b9 = require("gge-module:exact_a4efe355d1edb1b9");
var __dep_class_Root = require("gge-module:class_Root");
var __dep_exact_60ddcf91058706cf = require("gge-module:exact_60ddcf91058706cf");
var __dep_class_Field = require("gge-module:class_Field");
var __dep_class_MapField = require("gge-module:class_MapField");
var __dep_class_OneOf = require("gge-module:class_OneOf");
var __dep_class_Enum = require("gge-module:class_Enum");
var __dep_exact_aaea423cf3e0c2a5 = require("gge-module:exact_aaea423cf3e0c2a5");
var __dep_class_Method = require("gge-module:class_Method");
var __dep_exact_e445b2ca0584aabe = require("gge-module:exact_e445b2ca0584aabe");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
var __s0local0 = /^[1-9][0-9]*$/;
var __s0local1 = /^-?[1-9][0-9]*$/;
var __s0local2 = /^0[x][0-9a-fA-F]+$/;
var __s0local3 = /^-?0[x][0-9a-fA-F]+$/;
var __s0local4 = /^0[0-7]+$/;
var __s0local5 = /^-?0[0-7]+$/;
var __s0local6 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
var __s0local7 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
var __s0local8 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
var __s0local9 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
function parse(__s1param0, __s1param1, __s1param2) {
  if (!(__s1param1 instanceof __dep_class_Root)) {
    __s1param2 = __s1param1;
    __s1param1 = new __dep_class_Root();
  }
  __s1param2 ||= parse.defaults;
  var __s1local0;
  var __s1local1;
  var __s1local2;
  var __s1local3;
  var __s1local4;
  var __s1local5 = __dep_exact_a4efe355d1edb1b9(__s1param0, __s1param2.alternateCommentMode || false);
  var __s1local6 = __s1local5.next;
  var __s1local7 = __s1local5.push;
  var __s1local8 = __s1local5.peek;
  var __s1local9 = __s1local5.skip;
  var __s1local10 = __s1local5.cmnt;
  var __s1local11 = true;
  var __s1local12 = false;
  var __s1local13 = __s1param1;
  var __s1local14 = __s1param2.keepCase ? function (__s4param0) {
    return __s4param0;
  } : __dep_exact_2865b4ce4f048b89.camelCase;
  function illegal(__s6param0, __s6param1, __s6param2) {
    var __s6local0 = parse.filename;
    if (!__s6param2) {
      parse.filename = null;
    }
    return Error("illegal " + (__s6param1 || "token") + " '" + __s6param0 + "' (" + (__s6local0 ? __s6local0 + ", " : "") + "line " + __s1local5.line + ")");
  }
  function readString() {
    var __s9local0;
    var __s9local1 = [];
    do {
      if ((__s9local0 = __s1local6()) !== "\"" && __s9local0 !== "'") {
        throw illegal(__s9local0);
      }
      __s9local1.push(__s1local6());
      __s1local9(__s9local0);
      __s9local0 = __s1local8();
    } while (__s9local0 === "\"" || __s9local0 === "'");
    return __s9local1.join("");
  }
  function readValue(__s14param0) {
    var __s14local0 = __s1local6();
    switch (__s14local0) {
      case "'":
      case "\"":
        __s1local7(__s14local0);
        return readString();
      case "true":
      case "TRUE":
        return true;
      case "false":
      case "FALSE":
        return false;
    }
    try {
      return function parseNumber(__s18param0, __s18param1) {
        var __s18local0 = 1;
        if (__s18param0.charAt(0) === "-") {
          __s18local0 = -1;
          __s18param0 = __s18param0.substring(1);
        }
        switch (__s18param0) {
          case "inf":
          case "INF":
          case "Inf":
            return __s18local0 * Infinity;
          case "nan":
          case "NAN":
          case "Nan":
          case "NaN":
            return NaN;
          case "0":
            return 0;
        }
        if (__s0local0.test(__s18param0)) {
          return __s18local0 * parseInt(__s18param0, 10);
        }
        if (__s0local2.test(__s18param0)) {
          return __s18local0 * parseInt(__s18param0, 16);
        }
        if (__s0local4.test(__s18param0)) {
          return __s18local0 * parseInt(__s18param0, 8);
        }
        if (__s0local6.test(__s18param0)) {
          return __s18local0 * parseFloat(__s18param0);
        }
        throw illegal(__s18param0, "number", __s18param1);
      }(__s14local0, true);
    } catch (__s26local0) {
      if (__s14param0 && __s0local8.test(__s14local0)) {
        return __s14local0;
      }
      throw illegal(__s14local0, "value");
    }
  }
  function readRanges(__s29param0, __s29param1) {
    var __s29local0;
    var __s29local1;
    do {
      if (!__s29param1 || (__s29local0 = __s1local8()) !== "\"" && __s29local0 !== "'") {
        __s29param0.push([__s29local1 = parseId(__s1local6()), __s1local9("to", true) ? parseId(__s1local6()) : __s29local1]);
      } else {
        __s29param0.push(readString());
      }
    } while (__s1local9(",", true));
    __s1local9(";");
  }
  function parseId(__s35param0, __s35param1) {
    switch (__s35param0) {
      case "max":
      case "MAX":
      case "Max":
        return 536870911;
      case "0":
        return 0;
    }
    if (!__s35param1 && __s35param0.charAt(0) === "-") {
      throw illegal(__s35param0, "id");
    }
    if (__s0local1.test(__s35param0)) {
      return parseInt(__s35param0, 10);
    }
    if (__s0local3.test(__s35param0)) {
      return parseInt(__s35param0, 16);
    }
    if (__s0local5.test(__s35param0)) {
      return parseInt(__s35param0, 8);
    }
    throw illegal(__s35param0, "id");
  }
  function parsePackage() {
    if (__s1local0 !== undefined) {
      throw illegal("package");
    }
    __s1local0 = __s1local6();
    if (!__s0local8.test(__s1local0)) {
      throw illegal(__s1local0, "name");
    }
    __s1local13 = __s1local13.define(__s1local0);
    __s1local9(";");
  }
  function parseImport() {
    var __s46local0;
    var __s46local1 = __s1local8();
    switch (__s46local1) {
      case "weak":
        __s46local0 = __s1local2 ||= [];
        __s1local6();
        break;
      case "public":
        __s1local6();
      default:
        __s46local0 = __s1local1 ||= [];
    }
    __s46local1 = readString();
    __s1local9(";");
    __s46local0.push(__s46local1);
  }
  function parseSyntax() {
    __s1local9("=");
    __s1local3 = readString();
    if (!(__s1local12 = __s1local3 === "proto3") && __s1local3 !== "proto2") {
      throw illegal(__s1local3, "syntax");
    }
    __s1local9(";");
  }
  function parseCommon(__s52param0, __s52param1) {
    switch (__s52param1) {
      case "option":
        parseOption(__s52param0, __s52param1);
        __s1local9(";");
        return true;
      case "message":
        (function parseType(__s55param0, __s55param1) {
          if (!__s0local7.test(__s55param1 = __s1local6())) {
            throw illegal(__s55param1, "type name");
          }
          var __s55local0 = new __dep_exact_60ddcf91058706cf(__s55param1);
          ifBlock(__s55local0, function parseType_block(__s58param0) {
            if (!parseCommon(__s55local0, __s58param0)) {
              switch (__s58param0) {
                case "map":
                  (function parseMapField(__s62param0) {
                    __s1local9("<");
                    var __s62local0 = __s1local6();
                    if (__dep_exact_e445b2ca0584aabe.mapKey[__s62local0] === undefined) {
                      throw illegal(__s62local0, "type");
                    }
                    __s1local9(",");
                    var __s62local1 = __s1local6();
                    if (!__s0local8.test(__s62local1)) {
                      throw illegal(__s62local1, "type");
                    }
                    __s1local9(">");
                    var __s62local2 = __s1local6();
                    if (!__s0local7.test(__s62local2)) {
                      throw illegal(__s62local2, "name");
                    }
                    __s1local9("=");
                    var __s62local3 = new __dep_class_MapField(__s1local14(__s62local2), parseId(__s1local6()), __s62local0, __s62local1);
                    ifBlock(__s62local3, function parseMapField_block(__s67param0) {
                      if (__s67param0 !== "option") {
                        throw illegal(__s67param0);
                      }
                      parseOption(__s62local3, __s67param0);
                      __s1local9(";");
                    }, function parseMapField_line() {
                      parseInlineOptions(__s62local3);
                    });
                    __s62param0.add(__s62local3);
                  })(__s55local0);
                  break;
                case "required":
                case "optional":
                case "repeated":
                  parseField(__s55local0, __s58param0);
                  break;
                case "oneof":
                  (function parseOneOf(__s72param0, __s72param1) {
                    if (!__s0local7.test(__s72param1 = __s1local6())) {
                      throw illegal(__s72param1, "name");
                    }
                    var __s72local0 = new __dep_class_OneOf(__s1local14(__s72param1));
                    ifBlock(__s72local0, function parseOneOf_block(__s75param0) {
                      if (__s75param0 === "option") {
                        parseOption(__s72local0, __s75param0);
                        __s1local9(";");
                      } else {
                        __s1local7(__s75param0);
                        parseField(__s72local0, "optional");
                      }
                    });
                    __s72param0.add(__s72local0);
                  })(__s55local0, __s58param0);
                  break;
                case "extensions":
                  readRanges(__s55local0.extensions ||= []);
                  break;
                case "reserved":
                  readRanges(__s55local0.reserved ||= [], true);
                  break;
                default:
                  if (!__s1local12 || !__s0local8.test(__s58param0)) {
                    throw illegal(__s58param0);
                  }
                  __s1local7(__s58param0);
                  parseField(__s55local0, "optional");
              }
            }
          });
          __s55param0.add(__s55local0);
        })(__s52param0, __s52param1);
        return true;
      case "enum":
        (function parseEnum(__s80param0, __s80param1) {
          if (!__s0local7.test(__s80param1 = __s1local6())) {
            throw illegal(__s80param1, "name");
          }
          var __s80local0 = new __dep_class_Enum(__s80param1);
          ifBlock(__s80local0, function parseEnum_block(__s83param0) {
            switch (__s83param0) {
              case "option":
                parseOption(__s80local0, __s83param0);
                __s1local9(";");
                break;
              case "reserved":
                readRanges(__s80local0.reserved ||= [], true);
                break;
              default:
                (function parseEnumValue(__s86param0, __s86param1) {
                  if (!__s0local7.test(__s86param1)) {
                    throw illegal(__s86param1, "name");
                  }
                  __s1local9("=");
                  var __s86local0 = parseId(__s1local6(), true);
                  var __s86local1 = {};
                  ifBlock(__s86local1, function parseEnumValue_block(__s89param0) {
                    if (__s89param0 !== "option") {
                      throw illegal(__s89param0);
                    }
                    parseOption(__s86local1, __s89param0);
                    __s1local9(";");
                  }, function parseEnumValue_line() {
                    parseInlineOptions(__s86local1);
                  });
                  __s86param0.add(__s86param1, __s86local0, __s86local1.comment);
                })(__s80local0, __s83param0);
            }
          });
          __s80param0.add(__s80local0);
        })(__s52param0, __s52param1);
        return true;
      case "service":
        (function parseService(__s94param0, __s94param1) {
          if (!__s0local7.test(__s94param1 = __s1local6())) {
            throw illegal(__s94param1, "service name");
          }
          var __s94local0 = new __dep_exact_aaea423cf3e0c2a5(__s94param1);
          ifBlock(__s94local0, function parseService_block(__s97param0) {
            if (!parseCommon(__s94local0, __s97param0)) {
              if (__s97param0 !== "rpc") {
                throw illegal(__s97param0);
              }
              (function parseMethod(__s101param0, __s101param1) {
                var __s101local0 = __s101param1;
                if (!__s0local7.test(__s101param1 = __s1local6())) {
                  throw illegal(__s101param1, "name");
                }
                var __s101local1;
                var __s101local2;
                var __s101local3;
                var __s101local4;
                var __s101local5 = __s101param1;
                __s1local9("(");
                if (__s1local9("stream", true)) {
                  __s101local2 = true;
                }
                if (!__s0local8.test(__s101param1 = __s1local6())) {
                  throw illegal(__s101param1);
                }
                __s101local1 = __s101param1;
                __s1local9(")");
                __s1local9("returns");
                __s1local9("(");
                if (__s1local9("stream", true)) {
                  __s101local4 = true;
                }
                if (!__s0local8.test(__s101param1 = __s1local6())) {
                  throw illegal(__s101param1);
                }
                __s101local3 = __s101param1;
                __s1local9(")");
                var __s101local6 = new __dep_class_Method(__s101local5, __s101local0, __s101local1, __s101local3, __s101local2, __s101local4);
                ifBlock(__s101local6, function parseMethod_block(__s108param0) {
                  if (__s108param0 !== "option") {
                    throw illegal(__s108param0);
                  }
                  parseOption(__s101local6, __s108param0);
                  __s1local9(";");
                });
                __s101param0.add(__s101local6);
              })(__s94local0, __s97param0);
            }
          });
          __s94param0.add(__s94local0);
        })(__s52param0, __s52param1);
        return true;
      case "extend":
        (function parseExtension(__s111param0, __s111param1) {
          if (!__s0local8.test(__s111param1 = __s1local6())) {
            throw illegal(__s111param1, "reference");
          }
          var __s111local0 = __s111param1;
          ifBlock(null, function parseExtension_block(__s114param0) {
            switch (__s114param0) {
              case "required":
              case "repeated":
              case "optional":
                parseField(__s111param0, __s114param0, __s111local0);
                break;
              default:
                if (!__s1local12 || !__s0local8.test(__s114param0)) {
                  throw illegal(__s114param0);
                }
                __s1local7(__s114param0);
                parseField(__s111param0, "optional", __s111local0);
            }
          });
        })(__s52param0, __s52param1);
        return true;
    }
    return false;
  }
  function ifBlock(__s118param0, __s118param1, __s118param2) {
    var __s118local0 = __s1local5.line;
    if (__s118param0) {
      __s118param0.comment = __s1local10();
      __s118param0.filename = parse.filename;
    }
    if (__s1local9("{", true)) {
      for (var __s118local1; (__s118local1 = __s1local6()) !== "}";) {
        __s118param1(__s118local1);
      }
      __s1local9(";", true);
    } else {
      if (__s118param2) {
        __s118param2();
      }
      __s1local9(";");
      if (__s118param0 && typeof __s118param0.comment != "string") {
        __s118param0.comment = __s1local10(__s118local0);
      }
    }
  }
  function parseField(__s127param0, __s127param1, __s127param2) {
    var __s127local0 = __s1local6();
    if (__s127local0 !== "group") {
      if (!__s0local8.test(__s127local0)) {
        throw illegal(__s127local0, "type");
      }
      var __s127local1 = __s1local6();
      if (!__s0local7.test(__s127local1)) {
        throw illegal(__s127local1, "name");
      }
      __s127local1 = __s1local14(__s127local1);
      __s1local9("=");
      var __s127local2 = new __dep_class_Field(__s127local1, parseId(__s1local6()), __s127local0, __s127param1, __s127param2);
      ifBlock(__s127local2, function parseField_block(__s132param0) {
        if (__s132param0 !== "option") {
          throw illegal(__s132param0);
        }
        parseOption(__s127local2, __s132param0);
        __s1local9(";");
      }, function parseField_line() {
        parseInlineOptions(__s127local2);
      });
      __s127param0.add(__s127local2);
      if (!__s1local12 && !!__s127local2.repeated && (__dep_exact_e445b2ca0584aabe.packed[__s127local0] !== undefined || __dep_exact_e445b2ca0584aabe.basic[__s127local0] === undefined)) {
        __s127local2.setOption("packed", false, true);
      }
    } else {
      (function parseGroup(__s139param0, __s139param1) {
        var __s139local0 = __s1local6();
        if (!__s0local7.test(__s139local0)) {
          throw illegal(__s139local0, "name");
        }
        var __s139local1 = __dep_exact_2865b4ce4f048b89.lcFirst(__s139local0);
        if (__s139local0 === __s139local1) {
          __s139local0 = __dep_exact_2865b4ce4f048b89.ucFirst(__s139local0);
        }
        __s1local9("=");
        var __s139local2 = parseId(__s1local6());
        var __s139local3 = new __dep_exact_60ddcf91058706cf(__s139local0);
        __s139local3.group = true;
        var __s139local4 = new __dep_class_Field(__s139local1, __s139local2, __s139local0, __s139param1);
        __s139local4.filename = parse.filename;
        ifBlock(__s139local3, function parseGroup_block(__s143param0) {
          switch (__s143param0) {
            case "option":
              parseOption(__s139local3, __s143param0);
              __s1local9(";");
              break;
            case "required":
            case "optional":
            case "repeated":
              parseField(__s139local3, __s143param0);
              break;
            default:
              throw illegal(__s143param0);
          }
        });
        __s139param0.add(__s139local3).add(__s139local4);
      })(__s127param0, __s127param1);
    }
  }
  function parseOption(__s146param0, __s146param1) {
    var __s146local0 = __s1local9("(", true);
    if (!__s0local8.test(__s146param1 = __s1local6())) {
      throw illegal(__s146param1, "name");
    }
    var __s146local1 = __s146param1;
    if (__s146local0) {
      __s1local9(")");
      __s146local1 = "(" + __s146local1 + ")";
      __s146param1 = __s1local8();
      if (__s0local9.test(__s146param1)) {
        __s146local1 += __s146param1;
        __s1local6();
      }
    }
    __s1local9("=");
    parseOptionValue(__s146param0, __s146local1);
  }
  function parseOptionValue(__s151param0, __s151param1) {
    if (__s1local9("{", true)) {
      do {
        if (!__s0local7.test(__s1local4 = __s1local6())) {
          throw illegal(__s1local4, "name");
        }
        if (__s1local8() === "{") {
          parseOptionValue(__s151param0, __s151param1 + "." + __s1local4);
        } else {
          __s1local9(":");
          if (__s1local8() === "{") {
            parseOptionValue(__s151param0, __s151param1 + "." + __s1local4);
          } else {
            setOption(__s151param0, __s151param1 + "." + __s1local4, readValue(true));
          }
        }
        __s1local9(",", true);
      } while (!__s1local9("}", true));
    } else {
      setOption(__s151param0, __s151param1, readValue(true));
    }
  }
  function setOption(__s162param0, __s162param1, __s162param2) {
    if (__s162param0.setOption) {
      __s162param0.setOption(__s162param1, __s162param2);
    }
  }
  function parseInlineOptions(__s165param0) {
    if (__s1local9("[", true)) {
      do {
        parseOption(__s165param0, "option");
      } while (__s1local9(",", true));
      __s1local9("]");
    }
    return __s165param0;
  }
  while ((__s1local4 = __s1local6()) !== null) {
    switch (__s1local4) {
      case "package":
        if (!__s1local11) {
          throw illegal(__s1local4);
        }
        parsePackage();
        break;
      case "import":
        if (!__s1local11) {
          throw illegal(__s1local4);
        }
        parseImport();
        break;
      case "syntax":
        if (!__s1local11) {
          throw illegal(__s1local4);
        }
        parseSyntax();
        break;
      case "option":
        if (!__s1local11) {
          throw illegal(__s1local4);
        }
        parseOption(__s1local13, __s1local4);
        __s1local9(";");
        break;
      default:
        if (parseCommon(__s1local13, __s1local4)) {
          __s1local11 = false;
          continue;
        }
        throw illegal(__s1local4);
    }
  }
  parse.filename = null;
  return {
    package: __s1local0,
    imports: __s1local1,
    weakImports: __s1local2,
    syntax: __s1local3,
    root: __s1param1
  };
}
