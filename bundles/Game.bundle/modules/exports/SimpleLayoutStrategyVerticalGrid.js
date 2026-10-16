Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Rectangle;
var __s0local1 = function () {
  function SimpleLayoutStrategyVerticalGrid() {}
  SimpleLayoutStrategyVerticalGrid.prototype.apply = function (__s5param0, __s5param1) {
    if (__s5param0.length == 0) {
      return new __s0local0();
    }
    var __s5local0 = __s5param1.left;
    var __s5local1 = __s5param1.top;
    var __s5local2 = new __s0local0();
    __s5local2.left = __s5local0;
    __s5local2.top = __s5local1;
    __s5param1.width = __s5param1.width;
    var __s5local3 = 0;
    var __s5local4 = 0;
    for (var __s5local5 = 0; __s5local5 < __s5param0.length; __s5local5++) {
      var __s5local6 = __s5param0[__s5local5];
      var __s5local7 = __s5local6.width + __s5local6.margin.left + __s5local6.margin.right;
      if (__s5local3 + __s5local7 > __s5param1.width) {
        __s5local1 += __s5local4;
        __s5local3 = 0;
        __s5local4 = 0;
      }
      var __s5local8 = __s5local6.disp.getBounds();
      __s5local6.disp.x = __s5local0 + __s5local6.margin.left + __s5local3 - __s5local8.left;
      __s5local6.disp.y = __s5local1 + __s5local6.margin.top - __s5local8.top;
      __s5local3 += __s5local7;
      __s5local4 = Math.max(__s5local4, __s5local6.height + __s5local6.margin.top + __s5local6.margin.bottom);
    }
    __s5local2.height = __s5local1 + __s5local4;
    return __s5local2;
  };
  return SimpleLayoutStrategyVerticalGrid;
}();
exports.SimpleLayoutStrategyVerticalGrid = __s0local1;
