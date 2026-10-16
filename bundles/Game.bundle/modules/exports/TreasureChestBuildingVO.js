Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ABasicBuildingVO = require("gge-module:export_ABasicBuildingVO");
var __s0local0 = function (__s1param0) {
  function TreasureChestBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TreasureChestBuildingVO, __s1param0);
  Object.defineProperty(TreasureChestBuildingVO.prototype, "isMovable", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVO.AIsoObjectVO.prototype, "isMovable").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  TreasureChestBuildingVO.prototype.getInfoTooltipLine2 = function () {
    return "";
  };
  Object.defineProperty(TreasureChestBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVO.ABasicBuildingVO.prototype, "isRingmenuAvailable").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureChestBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return true;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVO.ABasicBuildingVO.prototype, "isClickAvailable").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureChestBuildingVO.prototype, "isBuildingGroundViewAvailable", {
    get: function () {
      return false;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVO.ABasicBuildingVO.prototype, "isBuildingGroundViewAvailable").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  return TreasureChestBuildingVO;
}(__dep_export_ABasicBuildingVO.ABasicBuildingVO);
exports.TreasureChestBuildingVO = __s0local0;
var __dep_export_AIsoObjectVO = require("gge-module:export_AIsoObjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
