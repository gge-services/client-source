Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __s0local0 = function (__s1param0) {
  function ADefenceBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADefenceBuildingVO, __s1param0);
  ADefenceBuildingVO.prototype.getShopIconURL = function (__s5param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Castlewall");
  };
  Object.defineProperty(ADefenceBuildingVO.prototype, "isMovable", {
    get: function () {
      return false;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVO.AIsoObjectVO.prototype, "isMovable").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "canBeRotated", {
    get: function () {
      return false;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "canBeRotated").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return this.isSelectionEnabled;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return this.isSelectionEnabled;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return this.isSelectionEnabled;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "isRingmenuAvailable").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "isSelectionEnabled", {
    get: function () {
      return !__dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "isBuildingGroundViewAvailable", {
    get: function () {
      return false;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "isBuildingGroundViewAvailable").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  return ADefenceBuildingVO;
}(__dep_export_AEffectBuildingVO.AEffectBuildingVO);
exports.ADefenceBuildingVO = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_AIsoObjectVO = require("gge-module:export_AIsoObjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
