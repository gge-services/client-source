Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ModernCostConfirmationDialog(__s3param0 = null) {
    return __s1param0.call(this, __s3param0 || ModernCostConfirmationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernCostConfirmationDialog, __s1param0);
  ModernCostConfirmationDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  ModernCostConfirmationDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProps.title)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialoge_shapeshifter_Travel_title"))).visible = this.dialogProps.cost.amount > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProps.copy));
    this.addCostClip(this.dialogDisp.mc_icon);
    this.dialogDisp.mc_discount.visible = this.dialogProps.discount > 0;
  };
  ModernCostConfirmationDialog.prototype.addCostClip = function (__s9param0) {
    if (this.dialogProps.cost.amount > 0) {
      var __s9local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(30, 30));
      __s9local0.tooltip.useAmount = false;
      var __s9local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
      __s9local1.addIconMc(__s9param0);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s9local1, this.dialogProps.cost, __s9local0);
    } else {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s9param0);
    }
    var __s9local2 = 0;
    __s9local2 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProps.cost, "CollectableItemC2VO") ? __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.c2Amount) : __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProps.cost, "CollectableItemC1VO") ? __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.c1Amount) : __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.dialogProps.cost.id));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [this.dialogProps.cost.amount, __s9local2])).visible = this.dialogProps.cost.amount > 0;
  };
  ModernCostConfirmationDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
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
  };
  Object.defineProperty(ModernCostConfirmationDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernCostConfirmationDialog.NAME = "CastleCostConfirmation";
  return ModernCostConfirmationDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ModernCostConfirmationDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
