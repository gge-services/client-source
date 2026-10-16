Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleTreasureChestBuildingDialogProperties = require("gge-module:export_CastleTreasureChestBuildingDialogProperties");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __s0local0 = function (__s1param0) {
  function TreasureChestBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TreasureChestBuildingVE, __s1param0);
  TreasureChestBuildingVE.prototype.createDisp = function () {
    if (this.vo.isoData.areaData.isMyArea && !this.vo.isoData.areaData.isUnderConquerProcess) {
      return __s1param0.prototype.createDisp.call(this);
    }
  };
  TreasureChestBuildingVE.prototype.createAdditionalClips = function () {
    __s1param0.prototype.createAdditionalClips.call(this);
    this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK2);
  };
  TreasureChestBuildingVE.prototype.onMouseClick = function () {
    if (this.vo.isoData.areaData.isMyArea && !this.vo.isoData.areaData.isUnderConquerProcess) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleTreasureChestBuildingDialog.CastleTreasureChestBuildingDialog, new __dep_export_CastleTreasureChestBuildingDialogProperties.CastleTreasureChestBuildingDialogProperties(this.vo.objectId));
    }
  };
  return TreasureChestBuildingVE;
}(require("gge-module:export_ABasicBuildingVE").ABasicBuildingVE);
exports.TreasureChestBuildingVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleTreasureChestBuildingDialog = require("gge-module:export_CastleTreasureChestBuildingDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
