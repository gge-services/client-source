Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __s0local0 = function (__s1param0) {
  function DworkshopUnitVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DworkshopUnitVO, __s1param0);
  Object.defineProperty(DworkshopUnitVO.prototype, "unitBuildingType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ToolUnitVO.ToolUnitVO.prototype, "unitBuildingType").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DworkshopUnitVO.prototype, "unitType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ToolUnitVO.ToolUnitVO.prototype, "unitType").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return DworkshopUnitVO;
}(__dep_export_ToolUnitVO.ToolUnitVO);
exports.DworkshopUnitVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryVO", "IShopVO", "ICostVO");
