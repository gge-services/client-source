Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleLuckyWheelScrollItemVO = require("gge-module:export_CastleLuckyWheelScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelTicketBuyDialog() {
    return __s1param0.call(this, CastleLuckyWheelTicketBuyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelTicketBuyDialog, __s1param0);
  CastleLuckyWheelTicketBuyDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_packageList.item0.btn_buy, this.dialogDisp.mc_packageList.item1.btn_buy, this.dialogDisp.mc_packageList.item2.btn_buy]);
    this.packageList = new __dep_exact_9e901e8e2483a22f.ItemList(this.dialogDisp.mc_packageList);
    this.packageList.scrollItemClass = __dep_export_CastleLuckyWheelScrollItem.CastleLuckyWheelScrollItem;
  };
  CastleLuckyWheelTicketBuyDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.setTexts();
    this.updatePackageList();
  };
  CastleLuckyWheelTicketBuyDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
  };
  CastleLuckyWheelTicketBuyDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
  };
  CastleLuckyWheelTicketBuyDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_luckyWheel_buyTickets"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_luckyWheel_buyTickets_text"));
  };
  CastleLuckyWheelTicketBuyDialog.prototype.updatePackageList = function () {
    this.packageList.clear();
    var __s15local0;
    var __s15local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LUCKYWHEEL);
    var __s15local2 = __s15local1.eventPackagesVO.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType);
    var __s15local3 = 1;
    if (__s15local2 != null) {
      for (var __s15local4 = 0, __s15local5 = __s15local2; __s15local4 < __s15local5.length; __s15local4++) {
        var __s15local6 = __s15local5[__s15local4];
        if (__s15local6 !== undefined) {
          (__s15local0 = new __dep_export_CastleLuckyWheelScrollItemVO.CastleLuckyWheelScrollItemVO()).eventPackageVO = __s15local6;
          __s15local0.specialEventVO = __s15local1;
          __s15local0.ticketsToDisplay = __s15local3;
          this.packageList.pushContent(__s15local0);
          __s15local3++;
        }
      }
    }
    this.packageList.initList();
  };
  CastleLuckyWheelTicketBuyDialog.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleLuckyWheelTicketBuyDialog.prototype.onUserLifetimeSpentChanged = function (__s25param0) {
    this.updatePackageList();
  };
  CastleLuckyWheelTicketBuyDialog.prototype.onRemoveSpecialEvent = function (__s27param0) {
    if (__s27param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LUCKYWHEEL) {
      this.hide();
    } else {
      this.updatePackageList();
    }
  };
  CastleLuckyWheelTicketBuyDialog.prototype.onRefreshSpecialEvent = function (__s31param0) {
    this.updatePackageList();
  };
  CastleLuckyWheelTicketBuyDialog.NAME = "CastleLuckyWheelTicketBuy";
  return CastleLuckyWheelTicketBuyDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleLuckyWheelTicketBuyDialog = __s0local0;
var __dep_export_CastleLuckyWheelScrollItem = require("gge-module:export_CastleLuckyWheelScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
