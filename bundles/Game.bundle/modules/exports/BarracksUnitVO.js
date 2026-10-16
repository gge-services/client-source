Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_SoldierUnitVO = require("gge-module:export_SoldierUnitVO");
var __s0local0 = function (__s1param0) {
  function BarracksUnitVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BarracksUnitVO, __s1param0);
  Object.defineProperty(BarracksUnitVO.prototype, "unitBuildingType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_SoldierUnitVO.SoldierUnitVO.prototype, "unitBuildingType").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return BarracksUnitVO;
}(__dep_export_SoldierUnitVO.SoldierUnitVO);
exports.BarracksUnitVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryVO", "IShopVO", "ICostVO");
