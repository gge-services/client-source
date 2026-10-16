Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SLuckyWheelSpinVO = require("gge-module:export_C2SLuckyWheelSpinVO");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleRewardInfoDialog = require("gge-module:export_CastleRewardInfoDialog");
var __dep_export_CastleRewardInfoDialogProperties = require("gge-module:export_CastleRewardInfoDialogProperties");
var __dep_export_CastleBasicLuckyWheelDialog = require("gge-module:export_CastleBasicLuckyWheelDialog");
var __dep_export_CastleLuckyWheelSalesDayMediator = require("gge-module:export_CastleLuckyWheelSalesDayMediator");
var __dep_export_CastleNotEnoughLuckyWheelSalesDaysTicketsDialog = require("gge-module:export_CastleNotEnoughLuckyWheelSalesDaysTicketsDialog");
var __s0local0 = function (__s1param0) {
  function CastleLuckWheelSalesDaysDialog() {
    return __s1param0.call(this, CastleLuckWheelSalesDaysDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckWheelSalesDaysDialog, __s1param0);
  Object.defineProperty(CastleLuckWheelSalesDaysDialog.prototype, "mediatorClass", {
    get: function () {
      return __dep_export_CastleLuckyWheelSalesDayMediator.CastleLuckyWheelSalesDayMediator;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBasicLuckyWheelDialog.CastleBasicLuckyWheelDialog.prototype, "mediatorClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckWheelSalesDaysDialog.prototype.initLoaded = function (__s9param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s9param0);
    this._tfTickets = this.textFieldManager.registerTextField(this.dialogDisp.mc_tickets.tf_ticketcount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.dialogDisp.mc_tickets.icon_tickets.toolTipText = "tooltip_tickets_saleDays";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.mc_tickets.btn_info_tickets]);
  };
  CastleLuckWheelSalesDaysDialog.prototype.updateScoreBarText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.component_scoreBar.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_luckyWheel_saleDays_description"));
  };
  CastleLuckWheelSalesDaysDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      switch (__s13param0.target) {
        case this.dialogDisp.mc_tickets.btn_info_tickets:
          var __s13local0 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SALES_DAYS_LUCKY_WHEEL_TICKET);
          this.layoutManager.showDialog(__dep_export_CastleRewardInfoDialog.CastleRewardInfoDialog, new __dep_export_CastleRewardInfoDialogProperties.CastleRewardInfoDialogProperties(__s13local0));
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper(__dep_exact_92d05af59ee2ff30_2.Localize.text(""), __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_luckyWheel_saleDays_text_help"));
      }
    }
  };
  CastleLuckWheelSalesDaysDialog.prototype.updateBG = function () {
    __s1param0.prototype.updateBG.call(this);
    this.dialogDisp.mc_tickets.y = this.eventVO.isProMode ? 120 : 111;
    this.dialogDisp.component_spin.y = this.eventVO.isProMode ? 122 : 113;
  };
  CastleLuckWheelSalesDaysDialog.prototype.handleNotEnoughTickets = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleNotEnoughLuckyWheelSalesDaysTicketsDialog.CastleNotEnoughLuckyWheelSalesDaysTicketsDialog);
  };
  CastleLuckWheelSalesDaysDialog.prototype.startSpin = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLuckyWheelSpinVO.C2SLuckyWheelSpinVO(1));
  };
  Object.defineProperty(CastleLuckWheelSalesDaysDialog.prototype, "eventVO", {
    get: function () {
      if (this.luckyProperties) {
        return this.luckyProperties.eventVO;
      } else {
        return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LUCKYWHEEL_SD);
      }
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBasicLuckyWheelDialog.CastleBasicLuckyWheelDialog.prototype, "eventVO").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckWheelSalesDaysDialog.NAME = "CastleLuckyWheelSalesDay";
  return CastleLuckWheelSalesDaysDialog;
}(__dep_export_CastleBasicLuckyWheelDialog.CastleBasicLuckyWheelDialog);
exports.CastleLuckWheelSalesDaysDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
