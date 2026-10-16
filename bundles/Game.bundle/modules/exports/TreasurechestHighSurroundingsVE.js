Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastlePrivateOfferDialogProperties = require("gge-module:export_CastlePrivateOfferDialogProperties");
var __s0local0 = function (__s1param0) {
  function TreasurechestHighSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TreasurechestHighSurroundingsVE, __s1param0);
  TreasurechestHighSurroundingsVE.prototype.onMouseClick = function () {
    var __s5local0 = this.treasureChestBuildingVO.offerVO;
    var __s5local1 = __s5local0.getVisualComponentByName("offerDialog");
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__s5local1.dialogName, new __dep_export_CastlePrivateOfferDialogProperties.CastlePrivateOfferDialogProperties(__s5local0));
  };
  return TreasurechestHighSurroundingsVE;
}(require("gge-module:export_ATreasurechestSurroundingsVE").ATreasurechestSurroundingsVE);
exports.TreasurechestHighSurroundingsVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
