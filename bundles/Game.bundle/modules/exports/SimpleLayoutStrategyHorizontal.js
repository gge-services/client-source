Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function () {
  function SimpleLayoutStrategyHorizontal(__s3param0 = SimpleLayoutStrategyHorizontal.ALIGNMENT_LEFT) {
    this._alignment = 0;
    this._alignment = __s3param0;
  }
  SimpleLayoutStrategyHorizontal.prototype.apply = function (__s5param0, __s5param1) {
    if (__s5param0.length == 0) {
      return new __s0local0();
    }
    var __s5local0 = this.calculateTotalWidth(__s5param0);
    var __s5local1 = 0;
    switch (this._alignment) {
      case SimpleLayoutStrategyHorizontal.ALIGNMENT_LEFT:
        __s5local1 = __s5param1.x;
        break;
      case SimpleLayoutStrategyHorizontal.ALIGNMENT_RIGHT:
        __s5local1 = __s5param1.x + __s5param1.width - __s5local0;
        break;
      case SimpleLayoutStrategyHorizontal.ALIGNMENT_CENTER:
        __s5local1 = __s5param1.x + (__s5param1.width - __s5local0) / 2;
        break;
      default:
        __s5local1 = __s5param1.x;
    }
    var __s5local2 = new __s0local0();
    __s5local2.left = __s5local1;
    if (__s5param0 != null) {
      for (var __s5local3 = 0, __s5local4 = __s5param0; __s5local3 < __s5local4.length; __s5local3++) {
        var __s5local5 = __s5local4[__s5local3];
        if (__s5local5 !== undefined && __s5local5 && __s5local5.isLayoutEnabled) {
          if (this._alignment == SimpleLayoutStrategyHorizontal.ALIGNMENT_CENTER) {
            __s5local5.disp.x = __s5local1 - __s5local5.disp.getBounds().x + __s5local5.margin.left;
            __s5local1 = __s5local5.disp.x + __s5local5.disp.getBounds().x + __s5local5.width + __s5local5.margin.right;
          } else {
            __s5local5.disp.x = __s5local1 + __s5local5.margin.left;
            __s5local1 = __s5local5.disp.x + __s5local5.width + __s5local5.margin.right;
          }
        }
      }
    }
    __s5local2.right = __s5local1 - __s5local2.x;
    return __s5local2;
  };
  SimpleLayoutStrategyHorizontal.prototype.calculateTotalWidth = function (__s15param0) {
    var __s15local0 = 0;
    if (__s15param0 != null) {
      for (var __s15local1 = 0, __s15local2 = __s15param0; __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined && __s15local3 && __s15local3.isLayoutEnabled) {
          __s15local0 += __s15local3.width + __s15local3.margin.left + __s15local3.margin.right;
        }
      }
    }
    return __s15local0;
  };
  Object.defineProperty(SimpleLayoutStrategyHorizontal.prototype, "alignment", {
    get: function () {
      return this._alignment;
    },
    set: function (__s23param0) {
      this._alignment = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  SimpleLayoutStrategyHorizontal.__initialize_static_members = function () {
    SimpleLayoutStrategyHorizontal.ALIGNMENT_LEFT = 0;
    SimpleLayoutStrategyHorizontal.ALIGNMENT_CENTER = 1;
    SimpleLayoutStrategyHorizontal.ALIGNMENT_RIGHT = 2;
  };
  return SimpleLayoutStrategyHorizontal;
}();
exports.SimpleLayoutStrategyHorizontal = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleLayoutStrategy");
__s0local1.__initialize_static_members();
