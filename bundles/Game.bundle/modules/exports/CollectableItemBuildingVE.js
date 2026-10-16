Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_DecoBuildingToolTipManager = require("gge-module:export_DecoBuildingToolTipManager");
var __dep_export_CastleBuildingInfoDialog = require("gge-module:export_CastleBuildingInfoDialog");
var __dep_export_CastleBuildingInfoDialogProperties = require("gge-module:export_CastleBuildingInfoDialogProperties");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemBuildingVE, __s1param0);
  CollectableItemBuildingVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
    this.triggerOnAllIconDispLoadedManually = true;
    this.scaleManually = true;
  };
  CollectableItemBuildingVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemBuildingVE.prototype.textfieldBackgroundVisible = function () {
    return this.itemBuildingVO.amount > 1;
  };
  CollectableItemBuildingVE.prototype.iconCreate = function () {
    __dep_export_WodPicHelper.WodPicHelper.addWodPic(this.itemBuildingVO.buildingVO, this.dispCreator.dispContainer, this.options.icon.dimension.x, this.options.icon.dimension.y, "", true, this.bindFunction(this.onAllDispClipsLoaded));
  };
  CollectableItemBuildingVE.prototype.tooltipCreate = function () {
    if (this.renderer.options.tooltip.useSimpleTooltips) {
      if (this.itemBuildingVO.buildingVO.buildingGroundType == __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DECO) {
        return this.itemBuildingVO.buildingVO.getNameString();
      } else {
        return "building_with_level" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + [this.itemBuildingVO.buildingVO.getNameString(), this.itemBuildingVO.buildingVO.level].toString();
      }
    } else {
      return __s1param0.prototype.tooltipCreate.call(this);
    }
  };
  CollectableItemBuildingVE.prototype.tooltipShowAdvanced = function () {
    if (this.itemBuildingVO.buildingVO) {
      __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.showToolTip(this.renderer.clips.getTooltipTargetMc(), this.itemBuildingVO.buildingVO, 0, -11);
    }
  };
  CollectableItemBuildingVE.prototype.onInfoButtonClicked = function () {
    if (this.itemBuildingVO.buildingVO) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.showDialog(__dep_export_CastleBuildingInfoDialog.CastleBuildingInfoDialog, new __dep_export_CastleBuildingInfoDialogProperties.CastleBuildingInfoDialogProperties(this.itemBuildingVO.buildingVO));
    }
  };
  Object.defineProperty(CollectableItemBuildingVE.prototype, "itemBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemBuildingVE;
}(require("gge-module:export_ACollectableItemSimpleIconVE").ACollectableItemSimpleIconVE);
exports.CollectableItemBuildingVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
