Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BasicGateVO = require("gge-module:export_BasicGateVO");
var __s0local0 = function (__s1param0) {
  function FactionGateGateVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionGateGateVO, __s1param0);
  FactionGateGateVO.prototype.getShopIconName = function (__s5param0) {
    return this.name + "_" + this.group + "_Level" + Math.min(this.level, 3);
  };
  Object.defineProperty(FactionGateGateVO.prototype, "usesColorFourCrest", {
    get: function () {
      return false;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicGateVO.BasicGateVO.prototype, "usesColorFourCrest").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionGateGateVO;
}(__dep_export_BasicGateVO.BasicGateVO);
exports.FactionGateGateVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
