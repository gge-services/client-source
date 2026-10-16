Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EmptyScrollItemVO = require("gge-module:export_EmptyScrollItemVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleSpecialCurrencyMerchantDialog = require("gge-module:export_CastleSpecialCurrencyMerchantDialog");
var __s0local0 = function (__s1param0) {
  function CastleSpecialCurrencyMerchantDialogTypeHardMode(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpecialCurrencyMerchantDialogTypeHardMode, __s1param0);
  CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.mcSpecialCurrency.mc_coin.gotoAndStop(1);
    this.dialogDisp.mcSpecialCurrency2.mc_coin.gotoAndStop(2);
  };
  CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.btn_travel.toolTipText = this.travelTooltipText;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_travel, __dep_export_CastleModel.CastleModel.specialEventData.isSeasonEventActive);
  };
  Object.defineProperty(CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "travelTooltipText", {
    get: function () {
      return "event_title_" + __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype.initBasicButtons = function (__s11param0) {
    __s11param0 = __s11param0.concat([this.dialogDisp.btn_travel]);
    __s1param0.prototype.initBasicButtons.call(this, __s11param0);
  };
  Object.defineProperty(CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "isEvent", {
    get: function () {
      return true;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog.prototype, "isEvent").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype.getItemListVOs = function () {
    var __s17local0 = this.packageContainer.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType);
    var __s17local1 = [];
    if (__s17local0 != null) {
      for (var __s17local2 = 0, __s17local3 = __s17local0; __s17local2 < __s17local3.length; __s17local2++) {
        var __s17local4 = __s17local3[__s17local2];
        if (__s17local4 !== undefined) {
          if (__s17local4.sortOrder % 2 != (__s17local1.length + 1) % 2) {
            __s17local1.push(new __dep_export_EmptyScrollItemVO.EmptyScrollItemVO());
          }
          var __s17local5 = this.createScrollItem(__s17local4);
          __s17local1.push(__s17local5);
        }
      }
    }
    return __s17local1;
  };
  Object.defineProperty(CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userSpecialCurrencies", {
    get: function () {
      var __s24local0 = [];
      __s24local0.push(this.userCurrency1);
      __s24local0.push(this.userCurrency2);
      return __s24local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency1", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency2", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype.onClick = function (__s30param0) {
    __s1param0.prototype.onClick.call(this, __s30param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s30param0.target)) {
      switch (__s30param0.target) {
        case this.dialogDisp.btn_travel:
          this.hide();
          __dep_export_CastleModel.CastleModel.kingdomData.tempTargetSpaceID = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.mapID;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleHandleSeasonDialog.CastleHandleSeasonDialog, new __dep_export_CastleHandleSeasonDialogProperties.CastleHandleSeasonDialogProperties(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO));
      }
    }
  };
  CastleSpecialCurrencyMerchantDialogTypeHardMode.NAME = "CastleThornkingEvent";
  return CastleSpecialCurrencyMerchantDialogTypeHardMode;
}(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog);
exports.CastleSpecialCurrencyMerchantDialogTypeHardMode = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleHandleSeasonDialog = require("gge-module:export_CastleHandleSeasonDialog");
var __dep_export_CastleHandleSeasonDialogProperties = require("gge-module:export_CastleHandleSeasonDialogProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
