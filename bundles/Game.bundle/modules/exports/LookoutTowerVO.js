Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_GuardTowerVO = require("gge-module:export_GuardTowerVO");
var __s0local0 = function (__s1param0) {
  function LookoutTowerVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "Palisadetower";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LookoutTowerVO, __s1param0);
  Object.defineProperty(LookoutTowerVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_GuardTowerVO.GuardTowerVO.prototype, "isInfoTooltipAvailable").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LookoutTowerVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_GuardTowerVO.GuardTowerVO.prototype, "isHoverGlowAvailable").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LookoutTowerVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_GuardTowerVO.GuardTowerVO.prototype, "isRingmenuAvailable").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LookoutTowerVO.prototype, "hasTowerBase", {
    get: function () {
      return false;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_GuardTowerVO.GuardTowerVO.prototype, "hasTowerBase").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  return LookoutTowerVO;
}(__dep_export_GuardTowerVO.GuardTowerVO);
exports.LookoutTowerVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
