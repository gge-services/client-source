Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function HorizontalSliderStrategy() {}
  HorizontalSliderStrategy.prototype.getElementLength = function (__s5param0) {
    return __s5param0.width;
  };
  HorizontalSliderStrategy.prototype.setPosition = function (__s7param0, __s7param1) {
    __s7param0.x = __s7param1;
  };
  HorizontalSliderStrategy.prototype.getPosition = function (__s9param0) {
    return __s9param0.x;
  };
  HorizontalSliderStrategy.prototype.getMouseValue = function (__s11param0) {
    return __s11param0.localX;
  };
  HorizontalSliderStrategy.prototype.transformMousePosition = function (__s13param0, __s13param1) {
    return this.getPosition(__s13param0) + this.getMouseValue(__s13param1);
  };
  HorizontalSliderStrategy.prototype.getMousePosition = function (__s15param0) {
    return __s15param0.mouseX;
  };
  HorizontalSliderStrategy.prototype.getElementScale = function (__s17param0) {
    return __s17param0.scaleX;
  };
  return HorizontalSliderStrategy;
}();
exports.HorizontalSliderStrategy = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISliderChangeStrategy");
