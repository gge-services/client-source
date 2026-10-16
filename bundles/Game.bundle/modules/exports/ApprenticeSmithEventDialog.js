Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ADynamicTabPackageShopDialog = require("gge-module:export_ADynamicTabPackageShopDialog");
var __dep_export_ApprenticeSmithEventDialogShop = require("gge-module:export_ApprenticeSmithEventDialogShop");
var __s0local0 = function (__s1param0) {
  function ApprenticeSmithEventDialog() {
    return __s1param0.call(this, ApprenticeSmithEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ApprenticeSmithEventDialog, __s1param0);
  ApprenticeSmithEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  ApprenticeSmithEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.getEventNameTextID()))).autoFitToBounds = true;
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.initTabsByPackages(__dep_export_ApprenticeSmithEventDialogShop.ApprenticeSmithEventDialogShop, this.bindFunction(this.sortTabs));
    if (this._currencies.length != 0) {
      var __s7local0;
      this._defaultSublayer.setEventID(this.dialogProperties.eventID, this.dialogProperties.buyPackageEventVO);
      if (this.dialogProperties.highlightPackageId > 0) {
        __s7local0 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.dialogProperties.highlightPackageId);
      }
      var __s7local1 = Math.max(this._currencies.findIndex(function (__s11param0) {
        if (__s7local0) {
          return __s11param0.hasType(__s7local0.getCostList().getItemByIndex(0));
        } else {
          return __s11param0.isSameAs(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN));
        }
      }), 0).toString();
      this.changeCategory(__s7local1);
      var __s7local2 = this._currentSublayer;
      if (__s7local0 && __s7local2) {
        __s7local2.setStarterPackage(__s7local0);
      }
    } else {
      this.hide();
    }
  };
  ApprenticeSmithEventDialog.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __s1param0.prototype.hide.call(this);
  };
  ApprenticeSmithEventDialog.prototype.sortTabs = function (__s19param0, __s19param1) {
    var __s19local0 = new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s19param0);
    var __s19local1 = new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s19param1);
    var __s19local2 = [__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SILVER_TOKEN, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_GOLD_TOKEN, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN];
    return __s19local2.indexOf(__s19local1.id) - __s19local2.indexOf(__s19local0.id);
  };
  ApprenticeSmithEventDialog.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          var __s21local0 = this._subLayer.get(this._currentCategory).currencyType.id;
          var __s21local1 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(__s21local0);
          if (__s21local1) {
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_apprenticeSmith_" + __s21local1.name + "_desc"));
          }
      }
    }
  };
  ApprenticeSmithEventDialog.prototype.onRemoveEvent = function (__s26param0) {
    if (__s26param0.specialEventVO.eventId == this.dialogProperties.eventID) {
      this.hide();
    }
  };
  ApprenticeSmithEventDialog.prototype.getEventPackages = function () {
    var __s29local0 = this.getEventVO();
    if (__s29local0) {
      return __s29local0.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE);
    } else {
      return [];
    }
  };
  ApprenticeSmithEventDialog.prototype.getEventNameTextID = function () {
    if (!this.dialogProperties) {
      return "eventBuilding_apprenticeSmith";
    }
    switch (this.dialogProperties.eventID) {
      case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR:
        return "eventBuilding_apprenticeSmith";
      case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_ALLIANCE_RAID_BOSS_VENDOR:
        return "dialog_are_raidbossShopEvent_title";
      default:
        return "eventBuilding_apprenticeSmith";
    }
  };
  ApprenticeSmithEventDialog.prototype.getEventVO = function () {
    var __s37local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    if (!__s37local0 && this.dialogProperties.buyPackageEventVO && this.dialogProperties.buyPackageEventVO.isActive) {
      return this.dialogProperties.buyPackageEventVO;
    } else {
      return __s37local0;
    }
  };
  Object.defineProperty(ApprenticeSmithEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeSmithEventDialog.NAME = "ModernFilterableShopExt_SEP23";
  return ApprenticeSmithEventDialog;
}(__dep_export_ADynamicTabPackageShopDialog.ADynamicTabPackageShopDialog);
exports.ApprenticeSmithEventDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
