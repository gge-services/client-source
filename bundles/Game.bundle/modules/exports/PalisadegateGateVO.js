Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BasicGateVO = require("gge-module:export_BasicGateVO");
var __s0local0 = function (__s1param0) {
  function PalisadegateGateVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PalisadegateGateVO, __s1param0);
  Object.defineProperty(PalisadegateGateVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicGateVO.BasicGateVO.prototype, "isInfoTooltipAvailable").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PalisadegateGateVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicGateVO.BasicGateVO.prototype, "isHoverGlowAvailable").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PalisadegateGateVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicGateVO.BasicGateVO.prototype, "isRingmenuAvailable").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  return PalisadegateGateVO;
}(__dep_export_BasicGateVO.BasicGateVO);
exports.PalisadegateGateVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
