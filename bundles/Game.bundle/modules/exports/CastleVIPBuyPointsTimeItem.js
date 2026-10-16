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
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleVIPDataEvent = require("gge-module:export_CastleVIPDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleVIPBuyPointsTimeItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_amount = __s3local0.textFieldManager.registerTextField(__s3param0.txt_amount, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.itxt_price = __s3local0.textFieldManager.registerTextField(__s3param0.mc_price.txt_price, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_discount = __s3local0.textFieldManager.registerTextField(__s3local0._disp.mc_discount.txt_priceReduction, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE));
    __s3param0.mc_price.mouseChildren = false;
    __s3param0.mc_price.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    __s3param0.btn_buy.mouseChildren = false;
    __s3param0.btn_buy.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.BUY;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVIPBuyPointsTimeItem, __s1param0);
  CastleVIPBuyPointsTimeItem.prototype.customFillItem = function () {
    this.itxt_amount.textContentVO = this.packageVO.textVO;
    this.itxt_price.textContentVO.numberValue = this.packageVO.priceC2;
    this.handleDiscount();
    this.handleVIP();
  };
  CastleVIPBuyPointsTimeItem.prototype.handleDiscount = function () {
    var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageVO.packageID));
    if (__s7local0 > 0) {
      this._disp.mc_discount.visible = true;
      this.itxt_discount.textContentVO.textReplacements = [-__s7local0];
    } else {
      this._disp.mc_discount.visible = false;
    }
  };
  CastleVIPBuyPointsTimeItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    __dep_export_CastleModel.CastleModel.vipData.addEventListener(__dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVIPDataChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEventChanged));
  };
  CastleVIPBuyPointsTimeItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.vipData.removeEventListener(__dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVIPDataChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEventChanged));
  };
  CastleVIPBuyPointsTimeItem.prototype.handleVIP = function () {
    this.disp.btn_buy.scaleX = 1;
    this.disp.btn_buy.scaleY = 1;
    if (this.packageVO.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_TIME) {
      var __s15local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.vipData.maxTimePackagesBuyable(this.packageVO.reward.duration));
      if (__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer && this.packageVO.disabledOnGlobalServer) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_buy, false);
        this.disp.btn_buy.toolTipText = "noAvailableOffer";
        return;
      }
      if (__s15local0 < 1) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_buy, false);
        this.disp.btn_buy.toolTipText = "dialog_buyVipTime_maxAmount";
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_buy, true);
        this.disp.btn_buy.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.BUY;
      }
    } else if (__dep_export_CastleModel.CastleModel.vipData.currentPremiumPoints >= __dep_export_CastleModel.CastleModel.vipData.getVIPLevelInfoVOByLevel(__dep_export_CastleModel.CastleModel.vipData.maxLevel).minVIPPoints) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_buy, false);
      this.disp.btn_buy.toolTipText = "dialog_buyVipPoints_maxAmountTotal_v2";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_buy, true);
      this.disp.btn_buy.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.BUY;
    }
  };
  CastleVIPBuyPointsTimeItem.prototype.onSpecialEventRemoved = function (__s23param0) {
    this.handleDiscount();
  };
  CastleVIPBuyPointsTimeItem.prototype.onSpecialEventChanged = function (__s25param0) {
    this.handleDiscount();
  };
  CastleVIPBuyPointsTimeItem.prototype.onVIPDataChanged = function (__s27param0) {
    this.handleVIP();
  };
  CastleVIPBuyPointsTimeItem.prototype.onMouseClick = function (__s29param0) {
    __s1param0.prototype.onMouseClick.call(this, __s29param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s29param0.target)) {
      switch (__s29param0.target) {
        case this.disp.btn_buy:
          var __s29local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
          __s29local0.parseDataFromScrollItem(this.scrollItemVO);
          var __s29local1 = require("gge-module:export_CastleVIPBuyDialog").CastleVIPBuyDialog;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s29local1, __s29local0);
      }
    }
  };
  Object.defineProperty(CastleVIPBuyPointsTimeItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPBuyPointsTimeItem.prototype, "packageVO", {
    get: function () {
      return this.scrollItemVO.eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleVIPBuyPointsTimeItem;
}(__dep_exact_9e901e8e2483a22f_2.ScrollItem);
exports.CastleVIPBuyPointsTimeItem = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
