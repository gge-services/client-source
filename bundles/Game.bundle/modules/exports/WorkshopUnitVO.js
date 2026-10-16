Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __s0local0 = function (__s1param0) {
  function WorkshopUnitVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorkshopUnitVO, __s1param0);
  Object.defineProperty(WorkshopUnitVO.prototype, "unitBuildingType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ToolUnitVO.ToolUnitVO.prototype, "unitBuildingType").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorkshopUnitVO.prototype, "unitType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ToolUnitVO.ToolUnitVO.prototype, "unitType").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorkshopUnitVO.prototype, "isAvailableInPeaceMode", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ToolUnitVO.ToolUnitVO.prototype, "isAvailableInPeaceMode").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  return WorkshopUnitVO;
}(__dep_export_ToolUnitVO.ToolUnitVO);
exports.WorkshopUnitVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryVO", "IShopVO", "ICostVO");
