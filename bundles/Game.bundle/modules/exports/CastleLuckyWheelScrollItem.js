Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_amount = __s3local0.textFieldManager.registerTextField(__s3param0.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_price = __s3local0.textFieldManager.registerTextField(__s3param0.mc_price.txt_price, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_discount = __s3local0.textFieldManager.registerTextField(__s3local0._disp.mc_discount.txt_priceReduction, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE));
    __s3param0.mc_price.mouseChildren = false;
    __s3param0.mc_price.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    __s3param0.btn_buy.mouseChildren = false;
    __s3param0.btn_buy.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.BUY;
    __s3param0.mc_tickets.gotoAndStop(3);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelScrollItem, __s1param0);
  CastleLuckyWheelScrollItem.prototype.customFillItem = function () {
    this.itxt_amount.textContentVO.textId = "dialog_luckyWheel_ticketsNumber";
    this.itxt_amount.textContentVO.textReplacements = [this.luckyWheelScrollItemVO.eventPackageVO.reward.amount];
    this.itxt_price.textContentVO.numberValue = this.luckyWheelScrollItemVO.eventPackageVO.price.amount;
    this.disp.mc_tickets.toolTipText = "tooltip_tickets";
    if (this.luckyWheelScrollItemVO.ticketsToDisplay <= 3 && this.luckyWheelScrollItemVO.ticketsToDisplay > 0) {
      this.disp.mc_tickets.gotoAndStop(this.luckyWheelScrollItemVO.ticketsToDisplay);
    } else {
      this.disp.mc_tickets.gotoAndStop(3);
    }
    this.handleDiscount();
  };
  CastleLuckyWheelScrollItem.prototype.handleDiscount = function () {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.luckyWheelScrollItemVO.eventPackageVO.packageID));
    if (__s9local0 > 0) {
      this._disp.mc_discount.visible = true;
      this.itxt_discount.textContentVO.textReplacements = [-__s9local0];
    } else {
      this._disp.mc_discount.visible = false;
    }
  };
  CastleLuckyWheelScrollItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.initItem();
  };
  CastleLuckyWheelScrollItem.prototype.initItem = function () {
    this.disp.btn_buy.scaleX = 1;
    this.disp.btn_buy.scaleY = 1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_buy, true);
    this.disp.btn_buy.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.BUY;
  };
  CastleLuckyWheelScrollItem.prototype.onMouseClick = function (__s17param0) {
    __s1param0.prototype.onMouseClick.call(this, __s17param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      switch (__s17param0.target) {
        case this.disp.btn_buy:
          var __s17local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
          __s17local0.parseDataFromScrollItem(this.luckyWheelScrollItemVO);
          CastleLuckyWheelScrollItem.dialogHandler.registerDefaultDialogs(__dep_export_CastleLuckyWheelTicketSliderBuyDialog.CastleLuckyWheelTicketSliderBuyDialog, __s17local0);
      }
    }
  };
  Object.defineProperty(CastleLuckyWheelScrollItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelScrollItem.prototype, "luckyWheelScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelScrollItem, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleLuckyWheelScrollItem;
}(__dep_exact_9e901e8e2483a22f_2.ScrollItem);
exports.CastleLuckyWheelScrollItem = __s0local0;
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLuckyWheelTicketSliderBuyDialog = require("gge-module:export_CastleLuckyWheelTicketSliderBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
