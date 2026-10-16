Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectablesCosts = require("gge-module:export_CollectablesCosts");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ModernSimpleCostDialog() {
    return __s1param0.call(this, ModernSimpleCostDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernSimpleCostDialog, __s1param0);
  ModernSimpleCostDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  ModernSimpleCostDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProps.title)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProps.copy));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.cost_1.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("cost_simple"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.mc_discount.txt_discount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.dialogProps.discount]));
    this.dialogDisp.mc_cost.mc_discount.visible = this.dialogProps.discount > 0;
    this.dialogDisp.mc_cost.cost_1.visible = this.dialogProps.costs.length == 1;
    this.dialogDisp.mc_cost.cost_2.visible = this.dialogProps.costs.length == 2;
    this.dialogDisp.mc_cost.cost_3.visible = this.dialogProps.costs.length == 3;
    var __s7local0 = this.dialogDisp.mc_cost["cost_" + this.dialogProps.costs.length];
    if (__s7local0) {
      var __s7local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, new __s0local0(30, 20));
      __s7local1.tooltip.useAmount = false;
      __s7local1.costTextfield.enableMarkOnNotEnough = true;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s7local0, "mc_item"), this.dialogProps.costs, __s7local1);
    }
    var __s7local2 = __dep_export_CostHelper.CostHelper.canAfford(new __dep_export_CollectablesCosts.CollectablesCosts(this.dialogProps.costs));
    var __s7local3 = !this.dialogProps.disableBuyIfCantAfford || __s7local2;
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, __s7local3, this.dialogProps.enableBuyDelay);
  };
  ModernSimpleCostDialog.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s10param0.target)) {
      switch (__s10param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          if (this.dialogProps.onCancel) {
            this.dialogProps.onCancel();
          }
          break;
        case this.dialogDisp.btn_ok:
          this.hide();
          if (this.dialogProps.onBuy) {
            this.dialogProps.onBuy();
          }
      }
    }
  };
  Object.defineProperty(ModernSimpleCostDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernSimpleCostDialog.NAME = "ModernSimpleCostExt";
  return ModernSimpleCostDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ModernSimpleCostDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
