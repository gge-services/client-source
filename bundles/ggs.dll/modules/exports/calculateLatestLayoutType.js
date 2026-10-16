Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __dep_exact_9fee691c0fa47134 = require("gge-module:exact_9fee691c0fa47134");
var __dep_export_layOutTokens = require("gge-module:export_layOutTokens");
exports.calculateLatestLayoutType = function calculateLatestLayoutType(__s1param0, __s1param1, __s1param2, __s1param3, __s1param4) {
  var __s1local0;
  var __s1local1;
  if (__s1param1.autoSize === __dep_exact_9fee691c0fa47134.TextFieldAutoSize.NONE) {
    __s1local0 = __s1param1.lineWidth || __s1param1.width;
    __s1local1 = __s1param1.height;
  } else {
    __s1local0 = __s1param1.wordWrap ? __s1param1.width : "textWidth";
    __s1local1 = 9999;
  }
  var __s1local2;
  var __s1local3;
  var __s1local4;
  var __s1local5;
  var __s1local6 = __dep_export_layOutTokens.layOutTokens(__s1param0, __s1param3, __s1param2, __s1local0, __s1param4, __s1param1.multiline, __s1param1.wordWrap, __s1local1, __s1param1.firstVisibleLineIndex, __s1param1.verticalAlign);
  var __s1local7 = __s1local6.metrics;
  var __s1local8 = __s1param1.wordWrap ? __s1param1.width : __s1local7.textWithGutterWidth;
  var __s1local9 = __s1local7.textWithGutterHeight;
  if (__s1param1.autoSize === __dep_exact_9fee691c0fa47134.TextFieldAutoSize.NONE || __s1param1.autoSize === undefined || __s1param1.wordWrap) {
    __s1local4 = __s1param1.x;
    __s1local5 = __s1param1.y;
    __s1local2 = __s1param1.width;
    __s1local3 = __s1param1.autoSize === __dep_exact_9fee691c0fa47134.TextFieldAutoSize.NONE ? __s1param1.height : __s1local9;
  } else {
    switch (__s1param1.autoSize) {
      case __dep_exact_9fee691c0fa47134.TextFieldAutoSize.LEFT:
        __s1local4 = __s1param1.x;
        __s1local5 = __s1param1.y;
        __s1local2 = __s1local8;
        __s1local3 = __s1local9;
        break;
      case __dep_exact_9fee691c0fa47134.TextFieldAutoSize.RIGHT:
        __s1local4 = __s1param1.previousX + __s1param1.previousWidth - __s1local8;
        __s1local5 = __s1param1.y;
        __s1local2 = __s1local8;
        __s1local3 = __s1local9;
        break;
      case __dep_exact_9fee691c0fa47134.TextFieldAutoSize.CENTER:
        __s1local4 = __s1param1.previousX + __s1param1.previousWidth / 2 - __s1local8 / 2;
        __s1local5 = __s1param1.y;
        __s1local2 = __s1local8;
        __s1local3 = __s1local9;
        break;
      default:
        throw new Error("unexpect autosize property");
    }
  }
  return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s1local6, {
    autoSizeBehavior: __s1param1.autoSize,
    bounds: new createjs.Rectangle(0, 0, __s1local2, __s1local3),
    position: {
      x: __s1local4,
      y: __s1local5
    },
    size: {
      width: __s1local2,
      height: __s1local3
    }
  });
};
