Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = function (__s1param0) {
  function ACollectableItemEquipmentVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemEquipmentVE, __s1param0);
  ACollectableItemEquipmentVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
    this.triggerOnAllIconDispLoadedManually = true;
    this.scaleManually = true;
  };
  ACollectableItemEquipmentVE.prototype.iconCreate = function () {
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
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(this.equipmentItemVO.equipmentVO, this.dispCreator.dispContainer, __s7local2, __s7local3, this.bindFunction(this.onAllDispClipsLoaded), true, false, false, true, this.options.icon.useFavIcon);
  };
  ACollectableItemEquipmentVE.prototype.tooltipCreate = function () {
    return __dep_export_EquipmentIconHelper.EquipmentIconHelper.getToolTipByEquipmentVO(this.equipmentItemVO.equipmentVO);
  };
  ACollectableItemEquipmentVE.prototype.tooltipShowAdvanced = function () {
    if (this.equipmentItemVO.equipmentVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(this.renderer.clips.getTooltipTargetMc(), this.equipmentItemVO.equipmentVO, null, !this.equipmentItemVO.equipmentVO.isPermanent && this.renderer.options.tooltip.showEquipmentCountdown);
    }
  };
  ACollectableItemEquipmentVE.prototype.onAllDispClipsLoaded = function (__s15param0 = null) {
    var __s15local0 = this.equipmentItemVO.equipmentVO;
    if (__s15local0.visualRareID > 0) {
      __s15param0.gotoAndStop(__s15local0.visualRareID);
    }
    __s1param0.prototype.onAllDispClipsLoaded.call(this, __s15param0);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dispCreator.dispContainer);
  };
  Object.defineProperty(ACollectableItemEquipmentVE.prototype, "equipmentItemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemEquipmentVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.ACollectableItemEquipmentVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
