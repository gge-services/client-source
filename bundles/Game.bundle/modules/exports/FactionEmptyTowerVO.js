Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ATowerVO = require("gge-module:export_ATowerVO");
var __s0local0 = function (__s1param0) {
  function FactionEmptyTowerVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "FactionEmpty";
    __s3local0._group = __dep_export_ClientConstCastle.ClientConstCastle.GROUP_TOWER;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionEmptyTowerVO, __s1param0);
  Object.defineProperty(FactionEmptyTowerVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ATowerVO.ATowerVO.prototype, "isHoverGlowAvailable").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEmptyTowerVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ATowerVO.ATowerVO.prototype, "isInfoTooltipAvailable").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEmptyTowerVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ATowerVO.ATowerVO.prototype, "isRingmenuAvailable").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionEmptyTowerVO;
}(__dep_export_ATowerVO.ATowerVO);
exports.FactionEmptyTowerVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
