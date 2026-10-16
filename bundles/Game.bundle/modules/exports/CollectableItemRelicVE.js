Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ACollectableItemVE = require("gge-module:export_ACollectableItemVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CollectableItemRelicVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemRelicVE, __s1param0);
  CollectableItemRelicVE.prototype.iconCreate = function () {
    if (this.relicItemVO.isRelicDefined()) {
      this.triggerOnAllIconDispLoadedManually = true;
      this.scaleManually = true;
      var __s5local0 = this.renderer.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      var __s5local1 = 1;
      if (__s5local0) {
        __s5local1 = __s5local0.transform.scale;
        __s5local0.transform.scale = 1;
      }
      var __s5local2 = this.options.icon.dimension.x * __s5local1;
      __s5local2 -= Math.round(6 / 55 * (__s5local2 - __s5local2 * (6 / 55)));
      var __s5local3 = this.options.icon.dimension.y * __s5local1;
      __s5local3 -= Math.round(6 / 55 * (__s5local3 - __s5local3 * (6 / 55)));
      if (this.relicItemVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_EQUIPMENT) {
        __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(this.relicItemVO.vo, this.dispCreator.dispContainer, __s5local2, __s5local3, this.bindFunction(this.onAllDispClipsLoaded), true, false, false, true, this.options.icon.useFavIcon);
      } else if (this.relicItemVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_GEM) {
        var __s5local4 = new __s0local0(__s5local2, __s5local3);
        this.dispCreator.addDisp(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(this.relicItemVO.vo, this.bindFunction(this.onAllDispClipsLoaded), __s5local4, this.renderer.options.icon.useFavIcon));
        this.updateIconDimension();
      }
    } else {
      this.triggerOnAllIconDispLoadedManually = false;
      var __s5local5;
      var __s5local6 = this.relicItemVO.getBluePrintVO();
      __s5local5 = this.relicItemVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_GEM ? __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM : __dep_export_BasicEquippableVO.BasicEquippableVO.getSlotType(__s5local6 ? __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicType(__s5local6.relicTypeId).slotId : -1);
      var __s5local7 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.relicXml.getStarRating(this.relicItemVO.predefinedMinRating));
      var __s5local8 = CollectableItemRelicVE.ASSET_PREFIX + "_" + __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(__s5local5) + "_" + __s5local7;
      this.dispCreator.addClip(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local8, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(CollectableItemRelicVE.ASSET_FILE_NAME_UNDEFINED)));
    }
  };
  CollectableItemRelicVE.prototype.tooltipCreate = function () {
    return __dep_export_EquipmentIconHelper.EquipmentIconHelper.getToolTipByEquipmentVO(this.relicItemVO.vo);
  };
  CollectableItemRelicVE.prototype.tooltipShowAdvanced = function () {
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.showRelicToolTip(this.renderer.clips.getTooltipTargetMc(), this.relicItemVO.vo);
  };
  CollectableItemRelicVE.prototype.onAllDispClipsLoaded = function (__s16param0 = null) {
    __s1param0.prototype.onAllDispClipsLoaded.call(this, __s16param0);
    if (this.relicItemVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_EQUIPMENT) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dispCreator.dispContainer);
    }
  };
  Object.defineProperty(CollectableItemRelicVE.prototype, "relicItemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemRelicVE.__initialize_static_members = function () {
    CollectableItemRelicVE.ASSET_FILE_NAME_UNDEFINED = CollectableItemRelicVE.ASSET_PREFIX + "_Undefined_2_0";
  };
  CollectableItemRelicVE.ASSET_PREFIX = "Relic_Equipment";
  return CollectableItemRelicVE;
}(__dep_export_ACollectableItemVE.ACollectableItemVE);
exports.CollectableItemRelicVE = __s0local1;
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CollectableItemRelicVO = require("gge-module:export_CollectableItemRelicVO");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
