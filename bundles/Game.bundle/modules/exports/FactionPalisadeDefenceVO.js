Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastlewallDefenceVO = require("gge-module:export_CastlewallDefenceVO");
var __s0local0 = function (__s1param0) {
  function FactionPalisadeDefenceVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "FactionPalisade";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionPalisadeDefenceVO, __s1param0);
  FactionPalisadeDefenceVO.prototype.getShopIconName = function (__s5param0) {
    return this.name + "_" + this.group + "_Level" + Math.min(this.level, 3);
  };
  Object.defineProperty(FactionPalisadeDefenceVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlewallDefenceVO.CastlewallDefenceVO.prototype, "isInfoTooltipAvailable").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionPalisadeDefenceVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlewallDefenceVO.CastlewallDefenceVO.prototype, "isHoverGlowAvailable").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionPalisadeDefenceVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlewallDefenceVO.CastlewallDefenceVO.prototype, "isRingmenuAvailable").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionPalisadeDefenceVO;
}(__dep_export_CastlewallDefenceVO.CastlewallDefenceVO);
exports.FactionPalisadeDefenceVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
