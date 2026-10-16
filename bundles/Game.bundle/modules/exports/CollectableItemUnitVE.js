Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ACollectableItemSimpleIconVE = require("gge-module:export_ACollectableItemSimpleIconVE");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectableItemUnitVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemUnitVE, __s1param0);
  CollectableItemUnitVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
    this.triggerOnAllIconDispLoadedManually = true;
    this.scaleManually = true;
  };
  CollectableItemUnitVE.prototype.iconCreate = function () {
    var __s7local0 = this.renderer.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
    var __s7local1 = 1;
    if (__s7local0) {
      __s7local1 = __s7local0.transform.scale;
      __s7local0.transform.scale = 1;
    }
    __dep_export_WodPicHelper.WodPicHelper.addUnitPic(this.unitItemVO.unitVO, this.dispCreator.dispContainer, this.options.icon.dimension.x * __s7local1, this.options.icon.dimension.y * __s7local1, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1], this.options.icon.unitLevelDimension.x, this.options.icon.unitLevelOffset, true, true, true, this.bindFunction(this.onAllDispClipsLoaded), this.renderer.clips.unitLevelMC, this.options.icon.selfLoadlevelIndicator);
  };
  CollectableItemUnitVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemUnitVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemUnitVE.prototype.tooltipCreate = function () {
    if (this.renderer.options.tooltip.useSimpleTooltips) {
      return this.unitItemVO.unitVO.getNameString();
    } else {
      return this.tooltipCreateByAmount(this.unitItemVO.unitVO.getNameString());
    }
  };
  CollectableItemUnitVE.prototype.onInfoButtonClicked = function () {
    if (this.unitItemVO.unitVO) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.showDialog(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(this.unitItemVO.unitVO));
    }
  };
  Object.defineProperty(CollectableItemUnitVE.prototype, "unitItemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemUnitVE;
}(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE);
exports.CollectableItemUnitVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
