Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function () {
  function SimpleLayoutStrategyVertical(__s3param0 = SimpleLayoutStrategyVertical.ALIGNMENT_TOP) {
    this._alignment = 0;
    this._alignment = __s3param0;
  }
  SimpleLayoutStrategyVertical.prototype.apply = function (__s5param0, __s5param1) {
    if (__s5param0.length == 0) {
      return new __s0local0();
    }
    var __s5local0 = this.calculateTotalHeight(__s5param0);
    var __s5local1 = 0;
    switch (this._alignment) {
      case SimpleLayoutStrategyVertical.ALIGNMENT_TOP:
        __s5local1 = __s5param1.y;
        break;
      case SimpleLayoutStrategyVertical.ALIGNMENT_BOTTOM:
        __s5local1 = __s5param1.y + __s5param1.height - __s5local0;
        break;
      case SimpleLayoutStrategyVertical.ALIGNMENT_CENTER:
        __s5local1 = __s5param1.y + (__s5param1.height - __s5local0) / 2;
        break;
      default:
        __s5local1 = __s5param1.y;
    }
    var __s5local2 = new __s0local0();
    __s5local2.top = __s5local1;
    if (__s5param0 != null) {
      var __s5local3 = 0;
      for (var __s5local4 = 0, __s5local5 = __s5param0; __s5local4 < __s5local5.length; __s5local4++) {
        var __s5local6 = __s5local5[__s5local4];
        if (__s5local6 !== undefined && __s5local6 && __s5local6.isLayoutEnabled) {
          __s5local6.disp.y = __s5local1 + __s5local6.margin.top;
          __s5local1 = __s5local3 + 1 == __s5param0.length ? __s5local6.disp.y + __s5local6.height : __s5local6.disp.y + __s5local6.height + __s5local6.margin.bottom;
          __s5local3++;
        }
      }
    }
    __s5local2.bottom = __s5local1 - __s5local2.y;
    return __s5local2;
  };
  SimpleLayoutStrategyVertical.prototype.calculateTotalHeight = function (__s13param0) {
    var __s13local0 = 0;
    if (__s13param0 != null) {
      for (var __s13local1 = 0, __s13local2 = __s13param0; __s13local1 < __s13local2.length; __s13local1++) {
        var __s13local3 = __s13local2[__s13local1];
        if (__s13local3 !== undefined && __s13local3 && __s13local3.isLayoutEnabled) {
          __s13local0 += __s13local3.height + __s13local3.margin.top + __s13local3.margin.bottom;
        }
      }
    }
    return __s13local0;
  };
  Object.defineProperty(SimpleLayoutStrategyVertical.prototype, "alignment", {
    get: function () {
      return this._alignment;
    },
    set: function (__s21param0) {
      this._alignment = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  SimpleLayoutStrategyVertical.__initialize_static_members = function () {
    SimpleLayoutStrategyVertical.ALIGNMENT_TOP = 0;
    SimpleLayoutStrategyVertical.ALIGNMENT_CENTER = 1;
    SimpleLayoutStrategyVertical.ALIGNMENT_BOTTOM = 2;
  };
  return SimpleLayoutStrategyVertical;
}();
exports.SimpleLayoutStrategyVertical = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleLayoutStrategy");
__s0local1.__initialize_static_members();
