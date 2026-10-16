Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePrivateOfferDialogProperties = require("gge-module:export_CastlePrivateOfferDialogProperties");
var __s0local0 = function (__s1param0) {
  function TreasurechestLowSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TreasurechestLowSurroundingsVE, __s1param0);
  TreasurechestLowSurroundingsVE.prototype.onMouseClick = function () {
    var __s5local0 = this.treasureChestBuildingVO.offerVO;
    var __s5local1 = __s5local0.id;
    var __s5local2 = __s5local0.getVisualComponentByName("offerDialog");
    if (__dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.isActive()) {
      __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.add(__dep_export_CastleTreasureChestOpenDialog.CastleTreasureChestOpenDialog);
    }
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__s5local2.dialogName, new __dep_export_CastlePrivateOfferDialogProperties.CastlePrivateOfferDialogProperties(__s5local0));
    __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPay(__s5local1);
  };
  return TreasurechestLowSurroundingsVE;
}(require("gge-module:export_ATreasurechestSurroundingsVE").ATreasurechestSurroundingsVE);
exports.TreasurechestLowSurroundingsVE = __s0local0;
var __dep_export_CastleTutorialDialogFilter = require("gge-module:export_CastleTutorialDialogFilter");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleTreasureChestOpenDialog = require("gge-module:export_CastleTreasureChestOpenDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
