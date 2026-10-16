Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTempServerConfirmationDialog = require("gge-module:export_CastleTempServerConfirmationDialog");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = createjs.Point;
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __s0local1 = function (__s1param0) {
  function CastleTempServerCostConfirmationDialog() {
    return __s1param0.call(this, CastleTempServerCostConfirmationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTempServerCostConfirmationDialog, __s1param0);
  CastleTempServerCostConfirmationDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.dialogDisp.cost_4.x = -212;
    if (this.dialogProps.preBuildCastle) {
      if (this.dialogProps.globalServerID == __dep_exact_26a421b704832cff.GlobalServerConst.TEMP_SERVER) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tempServer_preBuiltCastle_buyConfirmationPremium_desc"));
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_chooseCastleConfirm_desc"));
      }
      this.textFieldManager.registerTextField(this.dialogDisp.cost_1.txt_copy1, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("costs")));
      var __s5local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID);
      var __s5local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, new __s0local0(30, 30));
      __s5local1.costTextfield.useOtherResourceStorage = __s5local0.getResourcesAsCollectableList();
      __s5local1.tooltip.useAmount = false;
      var __s5local2 = this.dialogProps.preBuildCastle.costs;
      if (__s5local2.length <= 1) {
        __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.cost_1.icon_ruby).addIconMc(this.dialogDisp.cost_1.icon_ruby).addTextfield(this.dialogDisp.cost_1.txt_cost), __s5local2.list[0], __s5local1);
        this.textFieldManager.registerTextField(this.dialogDisp.cost_1.txt_cost, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_proportional_value", [__s5local2.list[0].amount, this.getAvailableCurrency(__s5local2.list[0])])).color = __s5local2.list[0].amount > this.getAvailableCurrency(__s5local2.list[0]) ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
        this.dialogDisp.cost_1.visible = true;
        this.dialogDisp.cost_4.visible = false;
        this.dialogDisp.cost_1.mc_discount.visible = false;
      } else {
        __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList().createByParentMc(this.dialogDisp.cost_4, "cost"), __s5local2, __s5local1);
        this.dialogDisp.cost_1.visible = false;
        this.dialogDisp.cost_4.visible = true;
      }
    }
  };
  CastleTempServerCostConfirmationDialog.prototype.getAvailableCurrency = function (__s12param0) {
    switch (__s12param0.itemType) {
      case __dep_export_CollectableEnum.CollectableEnum.C2:
        return __dep_export_CastleModel.CastleModel.currencyData.c2Amount;
      case __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY:
        return __dep_export_CastleModel.CastleModel.currencyData.getCurrencyById(__s12param0.id).amount;
    }
    return 0;
  };
  CastleTempServerCostConfirmationDialog.NAME = "PreBuiltCastleCostConfirmation";
  return CastleTempServerCostConfirmationDialog;
}(__dep_export_CastleTempServerConfirmationDialog.CastleTempServerConfirmationDialog);
exports.CastleTempServerCostConfirmationDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
