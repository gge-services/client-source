Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleBuySlotAndUnitDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBuySlotAndUnitDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuySlotAndUnitDialog, __s1param0);
  CastleBuySlotAndUnitDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_cancle, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.buySlotDialogProperties.cost));
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("costs"));
    var __s5local0 = "dialog_buyslotTool_copy";
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.buySlotDialogProperties.buyItemVO, "SoldierUnitVO")) {
      __s5local0 = "dialog_buyslotUnit_copy";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s5local0));
    this.dialogDisp.info_bonus.visible = false;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.UnitProductionConst.UNLOCK_DURATION);
    var __s5local2 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s5local1, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s5local2));
    this.dialogDisp.info_time.toolTipText = "rentduration";
    this.dialogDisp.info_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mc_discount.visible = __dep_export_CastleModel.CastleModel.boosterSaleData.hideDiscount();
  };
  CastleBuySlotAndUnitDialog.prototype.onClick = function (__s8param0) {
    __s1param0.prototype.onClick.call(this, __s8param0);
    switch (__s8param0.target) {
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.hide();
        if (this.buySlotDialogProperties.functionOk != null) {
          this.buySlotDialogProperties.functionOk(this.buySlotDialogProperties.buyItemVO, this.buySlotDialogProperties.listId, this.buySlotDialogProperties.amount);
        }
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_recuit_slot"));
    }
  };
  Object.defineProperty(CastleBuySlotAndUnitDialog.prototype, "buySlotDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuySlotAndUnitDialog.__initialize_static_members = function () {
    CastleBuySlotAndUnitDialog.NAME = "CastleCostInfoEx";
  };
  return CastleBuySlotAndUnitDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleBuySlotAndUnitDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
