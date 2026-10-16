Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function CastleNotEnoughLuckyWheelSalesDaysTicketsDialog() {
    return __s1param0.call(this, CastleNotEnoughLuckyWheelSalesDaysTicketsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNotEnoughLuckyWheelSalesDaysTicketsDialog, __s1param0);
  CastleNotEnoughLuckyWheelSalesDaysTicketsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_luckyWheel_SaleDay_noTicketsTitle"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_luckyWheel_SaleDay_noTickets", [__dep_exact_26a421b704832cff.LuckyWheelConst.SPIN_TICKET_COST_SALE_DAYS]));
    this.dialogDisp.icon_tickets.toolTipText = "tooltip_tickets_saleDays";
  };
  CastleNotEnoughLuckyWheelSalesDaysTicketsDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleNotEnoughLuckyWheelSalesDaysTicketsDialog.NAME = "CastleNotEnoughLuckyWheelSalesDaysTickets";
  return CastleNotEnoughLuckyWheelSalesDaysTicketsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleNotEnoughLuckyWheelSalesDaysTicketsDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
