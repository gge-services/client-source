Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ACollectableItemVE = require("gge-module:export_ACollectableItemVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ACollectableItemGemVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemGemVE, __s1param0);
  ACollectableItemGemVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
    this.triggerOnAllIconDispLoadedManually = true;
    this.scaleManually = true;
  };
  ACollectableItemGemVE.prototype.iconCreate = function () {
    var __s7local0 = this.renderer.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
    var __s7local1 = 1;
    if (__s7local0) {
      __s7local1 = __s7local0.transform.scale;
      __s7local0.transform.scale = 1;
    }
    var __s7local2 = this.options.icon.dimension.x * __s7local1;
    __s7local2 -= Math.round(6 / 55 * (__s7local2 - __s7local2 * (6 / 55)));
    var __s7local3 = this.options.icon.dimension.y * __s7local1;
    __s7local3 -= Math.round(6 / 55 * (__s7local3 - __s7local3 * (6 / 55)));
    var __s7local4 = new __s0local0(__s7local2, __s7local3);
    this.dispCreator.addDisp(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(this.itemGemVO.gemVO, this.bindFunction(this.onAllDispClipsLoaded), __s7local4, this.renderer.options.icon.useFavIcon));
    this.updateIconDimension();
  };
  ACollectableItemGemVE.prototype.tooltipShowAdvanced = function () {
    if (this.itemGemVO.gemVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(this.renderer.clips.getTooltipTargetMc(), this.itemGemVO.gemVO, null, false);
    }
  };
  Object.defineProperty(ACollectableItemGemVE.prototype, "itemGemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemGemVE;
}(__dep_export_ACollectableItemVE.ACollectableItemVE);
exports.ACollectableItemGemVE = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
