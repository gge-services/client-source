Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __dep_exact_ebfc67fda817e2f8 = require("gge-module:exact_ebfc67fda817e2f8");
var __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR = require("gge-module:export_DARK_TEXT_PASSIVE_LINK_COLOR");
var __dep_export_applyFormat = require("gge-module:export_applyFormat");
require("gge-module:opaque_82453ac29c1bbd43219288b8");
require("gge-module:opaque_405e7ab0cb655ba54196e6eb");
var __s0local0 = true;
var __s0local1 = new Set([".", ":", ";", ",", "!", "?", ")", "。", "！", "？"]);
var __dep_exact_f45fa64c7a371373 = require("gge-module:exact_f45fa64c7a371373");
function lineTextWidth(__s1param0) {
  return __s1param0.reduce(function (__s3param0, __s3param1) {
    if (__s3param1.type === "plain") {
      return __s3param0 + __s3param1.width;
    } else {
      return __s3param0;
    }
  }, 0);
}
exports.layOutTokens = function layOutTokens(__s7param0, __s7param1, __s7param2, __s7param3, __s7param4, __s7param5, __s7param6, __s7param7, __s7param8, __s7param9) {
  var __s7local0 = (__s7param2.size || 12) - 1;
  var __s7local1 = __s7param5 && __s7param2.leading || 0;
  var __s7local2 = Math.round((__s7local0 + 1) * 1.2 + __s7local1);
  var __s7local3 = -(Math.max(__s7param8, 1) - 1) * __s7local2;
  var __s7local4 = [];
  var __s7local5 = [__s7local4];
  if (__s7param3 !== "textWidth") {
    __s7param3 -= __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.TEXT_GUTTER_WIDTH;
  }
  __s7param7 -= __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.TEXT_GUTTER_WIDTH * 2;
  var __s7local6 = 0;
  var __s7local7 = __s7param2;
  var __s7local8 = [];
  for (var __s7local9 = 0, __s7local10 = __s7param1; __s7local9 < __s7local10.length; __s7local9++) {
    var __s7local11 = __s7local10[__s7local9];
    switch (__s7local11.type) {
      case "newline":
        __s7local4.push({
          type: "plain",
          text: "\n",
          width: 0
        });
        __s7local4 = [];
        __s7local5.push(__s7local4);
        __s7local6 = 0;
        break;
      case "plain":
        __dep_export_applyFormat.applyFormat(__s7param0, __s7local7, __s7param4);
        var __s7local12 = __s7local11.text;
        var __s7local13 = __s7param0.measureText(__s7local12).width;
        if (__s7param6 && typeof __s7param3 == "number" && __s7local6 + __s7local13 > __s7param3) {
          var __s7local14 = __s7local12.split(/([ \t\n\x0B\f\r-])/);
          __s7local14 = __s7local14.filter(function (__s14param0) {
            return __s14param0 != "";
          });
          if (__s0local0) {
            __s7local14 = __s7local14.reduce(function (__s17param0, __s17param1) {
              if (__s7param0.measureText(__s17param1).width > __s7param3) {
                var __s17local0 = __s17param1.split("").reduce(function (__s20param0, __s20param1) {
                  if (__s0local1.has(__s20param1) && __s20param0.length > 0) {
                    __s20param0[__s20param0.length - 1] += __s20param1;
                  } else {
                    __s20param0.push(__s20param1);
                  }
                  return __s20param0;
                }, []);
                __s17param0.push.apply(__s17param0, __s17local0);
              } else {
                __s17param0.push(__s17param1);
              }
              return __s17param0;
            }, []);
          }
          for (var __s7local15 = 0, __s7local16 = __s7local14; __s7local15 < __s7local16.length; __s7local15++) {
            var __s7local17 = __s7local16[__s7local15];
            var __s7local18 = __s7param0.measureText(__s7local17).width;
            if (__s7local6 + __s7local18 > __s7param3 && __s7local17 != " ") {
              __s7local4 = [];
              __s7local5.push(__s7local4);
              __s7local6 = 0;
            }
            var __s7local19 = {
              type: "plain",
              text: __s7local17,
              width: __s7local18
            };
            __s7local4.push(__s7local19);
            __s7local6 += __s7local19.width;
          }
        } else {
          __s7local4.push({
            type: "plain",
            text: __s7local12,
            width: __s7local13
          });
          __s7local6 += __s7local13;
        }
        break;
      case "push-format-augmentation":
        __s7local8 = __s7local8.concat([__s7local7]);
        __s7local7 = __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s7local7, __s7local11.partialFormat);
        __s7local4.push({
          type: "switch-to-format",
          format: __s7local7
        });
        break;
      case "pop-last-format-augmentation":
        __s7local7 = __s7local8[__s7local8.length - 1];
        __s7local8 = __s7local8.slice(0, __s7local8.length - 1);
        __s7local4.push({
          type: "switch-to-format",
          format: __s7local7
        });
        break;
      default:
        __s7local4.push(__s7local11);
    }
  }
  var __s7local20 = Math.max.apply(Math, __s7local5.map(lineTextWidth));
  var __s7local21 = (__s7param3 = typeof __s7param3 == "number" ? __s7param3 : __s7local20) + __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.TEXT_GUTTER_WIDTH * 2;
  var __s7local22 = __s7local5.map(function (__s29param0, __s29param1) {
    var __s29local0;
    if (__s7local7.align === __dep_exact_ebfc67fda817e2f8.TextFormatAlign.CENTER) {
      var __s29local1 = lineTextWidth(__s29param0);
      __s29local0 = (__s7local21 - __s29local1) / 2;
    } else if (__s7local7.align === __dep_exact_ebfc67fda817e2f8.TextFormatAlign.RIGHT) {
      __s29local1 = lineTextWidth(__s29param0);
      __s29local0 = __s7local21 - __s29local1 - __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.TEXT_GUTTER_WIDTH;
    } else {
      __s29local0 = __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.TEXT_GUTTER_WIDTH;
    }
    var __s29local2 = __s29param0.slice();
    __s29local2.unshift({
      type: "set-x-y",
      x: __s29local0,
      y: __s7local3 + __s29param1 * __s7local2 + __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.TEXT_GUTTER_WIDTH
    });
    return __s29local2;
  });
  var __s7local23 = __s7local22.map(function (__s34param0) {
    return __s34param0.map(function (__s36param0) {
      if (__s36param0.type === "plain") {
        return __s36param0.text;
      } else {
        return "";
      }
    }).join("");
  });
  var __s7local24 = Math.max.apply(Math, __s7local22.map(function (__s40param0) {
    return __s40param0.reduce(function (__s42param0, __s42param1) {
      if (__s42param1.type === "plain") {
        return __s42param0 + __s42param1.width;
      } else if (__s42param1.type === "advance-x") {
        return __s42param0 + __s42param1.amount;
      } else if (__s42param1.type === "set-x-y") {
        return __s42param1.x;
      } else {
        return __s42param0;
      }
    }, 0);
  }));
  var __s7local25 = Math.ceil(__s7local20);
  var __s7local26 = Math.ceil(__s7local23.length * __s7local2);
  var __s7local27 = {
    textWidth: __s7local25,
    textHeight: __s7local26,
    totalNumberOfTextLines: __s7local23.length,
    maximumNumberOfVisibleLines: __s7param7 / __s7local2,
    drawnLines: __s7local23,
    lineHeight: __s7local2,
    distanceToBaseline: __s7local0,
    leading: __s7local1,
    widthUntilEndOfText: __s7local24,
    textWithGutterWidth: __s7local25 + __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.TEXT_GUTTER_WIDTH * 2,
    textWithGutterHeight: __s7local26 + __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.TEXT_GUTTER_WIDTH * 2
  };
  return {
    drawingTokens: __dep_exact_f45fa64c7a371373(__s7local22).reduce(function (__s48param0, __s48param1) {
      var __s48local0 = __s48param0[__s48param0.length - 1];
      if (__s48local0 && __s48local0.type === "plain" && __s48param1.type === "plain") {
        __s48param0[__s48param0.length - 1] = {
          type: "plain",
          text: __s48local0.text + __s48param1.text,
          width: __s48local0.width + __s48param1.width
        };
      } else {
        __s48param0.push(__s48param1);
      }
      return __s48param0;
    }, []).map(function () {
      if (__s7param9 === "middle") {
        var __s52local0 = __s7param7 - __s7local26;
        if (__s52local0 > 0) {
          return function (__s56param0) {
            switch (__s56param0.type) {
              case "set-x-y":
                return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s56param0, {
                  y: __s56param0.y + __s52local0 / 2
                });
              default:
                return __s56param0;
            }
          };
        }
      } else if (__s7param9 === "bottom") {
        var __s52local1 = __s7param7 - __s7local26;
        if (__s52local1 > 0) {
          return function (__s61param0) {
            switch (__s61param0.type) {
              case "set-x-y":
                return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s61param0, {
                  y: __s61param0.y + __s52local1
                });
              default:
                return __s61param0;
            }
          };
        }
      }
      return function (__s64param0) {
        return __s64param0;
      };
    }()).map(function (__s66param0) {
      switch (__s66param0.type) {
        case "advance-x":
          return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s66param0, {
            amount: Math.round(__s66param0.amount)
          });
        case "set-x-y":
          return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s66param0, {
            x: Math.round(__s66param0.x),
            y: Math.round(__s66param0.y)
          });
        case "plain":
          return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s66param0, {
            width: Math.round(__s66param0.width)
          });
      }
      return __s66param0;
    }),
    metrics: __s7local27
  };
};
