Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_MerchantScrollItemVO = require("gge-module:export_MerchantScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleVIPBuyPointsTimeDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleVIPBuyPointsTimeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVIPBuyPointsTimeDialog, __s1param0);
  CastleVIPBuyPointsTimeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_packageList.item0.btn_buy, this.dialogDisp.mc_packageList.item1.btn_buy, this.dialogDisp.mc_packageList.item2.btn_buy]);
    this.packageList = new __dep_exact_9e901e8e2483a22f.ItemList(this.dialogDisp.mc_packageList);
    this.packageList.scrollItemClass = __dep_export_CastleVIPBuyPointsTimeItem.CastleVIPBuyPointsTimeItem;
  };
  CastleVIPBuyPointsTimeDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.setTexts();
    this.updatePackageList();
    this.updatePackageIcons();
  };
  CastleVIPBuyPointsTimeDialog.prototype.setTexts = function () {
    var __s9local0;
    var __s9local1;
    if (this.dialogProperties.packageType == __dep_export_CollectableEnum.CollectableEnum.VIP_POINTS) {
      __s9local0 = "dialog_buyVipPoints_title_v2";
      __s9local1 = "dialog_buyVipPoints_copy_v2";
    } else {
      __s9local0 = "dialog_buyVipTime_title";
      __s9local1 = "dialog_buyVipTime_copy_v2";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local1, [__dep_exact_26a421b704832cff.PlayerConst.DAILY_VIP_POINTS_LOSS]));
  };
  CastleVIPBuyPointsTimeDialog.prototype.updatePackageIcons = function () {
    var __s13local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.packageType == __dep_export_CollectableEnum.CollectableEnum.VIP_POINTS ? CastleVIPBuyPointsTimeDialog.ICON_VIP_POINTS_FRAME : CastleVIPBuyPointsTimeDialog.ICON_VIP_TIME_FRAME);
    for (var __s13local1 = 0; __s13local1 < CastleVIPBuyPointsTimeDialog.NUMBER_PACKAGE_ICONS; ++__s13local1) {
      this.dialogDisp["mc_icon" + __s13local1].gotoAndStop(__s13local0);
    }
  };
  CastleVIPBuyPointsTimeDialog.prototype.updatePackageList = function () {
    this.packageList.clear();
    var __s17local0 = __dep_export_CastleModel.CastleModel.vipData.getPackages(this.dialogProperties.packageType);
    if (__s17local0 != null) {
      for (var __s17local1 = 0, __s17local2 = __s17local0; __s17local1 < __s17local2.length; __s17local1++) {
        var __s17local3 = __s17local2[__s17local1];
        if (__s17local3 !== undefined) {
          var __s17local4 = new __dep_export_MerchantScrollItemVO.MerchantScrollItemVO();
          __s17local4.eventPackageVO = __s17local3;
          this.packageList.pushContent(__s17local4);
        }
      }
    }
    this.packageList.initList();
  };
  CastleVIPBuyPointsTimeDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
  };
  CastleVIPBuyPointsTimeDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    this.packageList.clear();
  };
  CastleVIPBuyPointsTimeDialog.prototype.onEventsChange = function (__s27param0) {
    this.updatePackageList();
  };
  CastleVIPBuyPointsTimeDialog.prototype.onClick = function (__s29param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s29param0.target)) {
      __s1param0.prototype.onClick.call(this, __s29param0);
      switch (__s29param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleVIPBuyPointsTimeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleVIPBuyPointsTimeDialog.__initialize_static_members = function () {
    CastleVIPBuyPointsTimeDialog.NAME = "CastleBuyVIPPointsTime";
    CastleVIPBuyPointsTimeDialog.NUMBER_PACKAGE_ICONS = 3;
    CastleVIPBuyPointsTimeDialog.ICON_VIP_TIME_FRAME = 1;
    CastleVIPBuyPointsTimeDialog.ICON_VIP_POINTS_FRAME = 2;
  };
  return CastleVIPBuyPointsTimeDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleVIPBuyPointsTimeDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleVIPBuyPointsTimeItem = require("gge-module:export_CastleVIPBuyPointsTimeItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
