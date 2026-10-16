Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastlewallDefenceVO = require("gge-module:export_CastlewallDefenceVO");
var __s0local0 = function (__s1param0) {
  function PalisadeDefenceVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "Palisade";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PalisadeDefenceVO, __s1param0);
  Object.defineProperty(PalisadeDefenceVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlewallDefenceVO.CastlewallDefenceVO.prototype, "isInfoTooltipAvailable").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PalisadeDefenceVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlewallDefenceVO.CastlewallDefenceVO.prototype, "isHoverGlowAvailable").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PalisadeDefenceVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlewallDefenceVO.CastlewallDefenceVO.prototype, "isRingmenuAvailable").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  return PalisadeDefenceVO;
}(__dep_export_CastlewallDefenceVO.CastlewallDefenceVO);
exports.PalisadeDefenceVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
