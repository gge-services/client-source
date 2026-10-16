Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BasicMoatVO = require("gge-module:export_BasicMoatVO");
var __dep_export_Iso = require("gge-module:export_Iso");
var __s0local0 = function (__s1param0) {
  function PremiumMoatVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PremiumMoatVO, __s1param0);
  Object.defineProperty(PremiumMoatVO.prototype, "isMoatAvailableByBuildOrder", {
    get: function () {
      var __s5local0 = __dep_export_Iso.Iso.data.objects.defences.moat;
      if (__s5local0 && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local0, "PremiumMoatVO")) {
        return this.level == __s5local0.level + 1 && !__s5local0.buildingState.isUnderConstruction;
      } else if (__s5local0) {
        return this.level == 1 && !__s5local0.buildingState.isUnderConstruction;
      } else {
        return this.level == 1;
      }
    },
    set: function (__s10param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMoatVO.BasicMoatVO.prototype, "isMoatAvailableByBuildOrder").set.call(this, __s10param0);
    },
    enumerable: true,
    configurable: true
  });
  return PremiumMoatVO;
}(__dep_export_BasicMoatVO.BasicMoatVO);
exports.PremiumMoatVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
