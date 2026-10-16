Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_ABasicBuildingVO = require("gge-module:export_ABasicBuildingVO");
var __s0local0 = function (__s1param0) {
  function AEventBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AEventBuildingVO, __s1param0);
  AEventBuildingVO.prototype.updateData = function () {
    __s1param0.prototype.updateData.call(this);
    this._buildingState = __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED;
  };
  Object.defineProperty(AEventBuildingVO.prototype, "isoSortOrder", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return true;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVO.ABasicBuildingVO.prototype, "isClickAvailable").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVO.ABasicBuildingVO.prototype, "isRingmenuAvailable").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  AEventBuildingVO.prototype.getInfoTooltipLine3 = function () {
    return "";
  };
  Object.defineProperty(AEventBuildingVO.prototype, "isMovable", {
    get: function () {
      return false;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVO.AIsoObjectVO.prototype, "isMovable").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  return AEventBuildingVO;
}(__dep_export_ABasicBuildingVO.ABasicBuildingVO);
exports.AEventBuildingVO = __s0local0;
var __dep_export_AIsoObjectVO = require("gge-module:export_AIsoObjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
