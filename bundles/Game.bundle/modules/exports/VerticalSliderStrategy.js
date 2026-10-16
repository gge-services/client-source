Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function VerticalSliderStrategy() {}
  VerticalSliderStrategy.prototype.getElementLength = function (__s5param0) {
    return __s5param0.height;
  };
  VerticalSliderStrategy.prototype.getPosition = function (__s7param0) {
    return __s7param0.y;
  };
  VerticalSliderStrategy.prototype.getMouseValue = function (__s9param0) {
    return __s9param0.localY;
  };
  VerticalSliderStrategy.prototype.transformMousePosition = function (__s11param0, __s11param1) {
    return this.getPosition(__s11param0) + this.getMouseValue(__s11param1);
  };
  VerticalSliderStrategy.prototype.setPosition = function (__s13param0, __s13param1) {
    __s13param0.y = __s13param1;
  };
  VerticalSliderStrategy.prototype.getMousePosition = function (__s15param0) {
    return __s15param0.mouseY;
  };
  VerticalSliderStrategy.prototype.getElementScale = function (__s17param0) {
    return __s17param0.scaleY;
  };
  return VerticalSliderStrategy;
}();
exports.VerticalSliderStrategy = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISliderChangeStrategy");
