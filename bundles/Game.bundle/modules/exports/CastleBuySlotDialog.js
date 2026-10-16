Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleBuySlotDialog() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuySlotDialog, __s1param0);
  CastleBuySlotDialog.prototype.initLoaded = function (__s5param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_ok);
    if (this.dialogDisp.btn_help) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_help);
    }
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleBuySlotDialog.prototype.applyPropertiesLoaded = function (__s8param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s8param0);
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true);
    this.dialogDisp.info_time.toolTipText = "rentduration";
    this.dialogDisp.info_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mc_discount.visible = __dep_export_CastleModel.CastleModel.boosterSaleData.hideDiscount();
  };
  CastleBuySlotDialog.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    switch (__s10param0.target) {
      case this.dialogDisp.btn_cancel:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.hide();
        if (this.buySlotDialogProperties.functionOk != null) {
          this.buySlotDialogProperties.functionOk(null);
        }
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", this.buySlotDialogProperties.helpertext);
    }
  };
  Object.defineProperty(CastleBuySlotDialog.prototype, "buySlotDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBuySlotDialog;
}(require("gge-module:export_CastleCostInfoDialog").CastleCostInfoDialog);
exports.CastleBuySlotDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
