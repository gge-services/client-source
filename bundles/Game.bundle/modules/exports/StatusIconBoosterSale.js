Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconBoosterSale() {
    var __s3local0 = __s1param0.call(this, "Btn_BoosterSale", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BOOSTER) || this;
    __s3local0.setTooltip("dialog_specialOfferDeco_title");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconBoosterSale, __s1param0);
  StatusIconBoosterSale.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePrimeSaleBoosterDialog.CastlePrimeSaleBoosterDialog);
  };
  StatusIconBoosterSale.prototype.setVisibilityLoaded = function () {
    if (__dep_export_CastleModel.CastleModel.boosterSaleData.isAnyBoosterOnSale() && __dep_export_CastleModel.CastleModel.boosterSaleData.anyTimeLeft() == -1) {
      this.show();
    } else {
      this.hide();
    }
  };
  return StatusIconBoosterSale;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconBoosterSale = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrimeSaleBoosterDialog = require("gge-module:export_CastlePrimeSaleBoosterDialog");
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
