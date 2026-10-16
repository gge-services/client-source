Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_MerchantScrollItemVO = require("gge-module:export_MerchantScrollItemVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAbstractInvasionMerchantSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_detailedDescription, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s3local0.getDescriptionText()));
    __s3local0.merchantComponent = new __dep_export_BuyEventPackagesComponent.BuyEventPackagesComponent();
    __s3local0.merchantComponent.init(__s3local0.getMerchantScrollItem(), __s3local0.subLayerDisp.itemList, __s3local0.subLayerDisp);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAbstractInvasionMerchantSublayer, __s1param0);
  CastleAbstractInvasionMerchantSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.merchantComponent.show(this.bindFunction(this.getItemListVOs));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    this.merchantComponent.update();
    this.updateCurrency();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.merchantComponent) {
      this.merchantComponent.hide();
    }
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
  };
  CastleAbstractInvasionMerchantSublayer.prototype.updateCurrency = function () {
    var __s10local0 = this.getCurrencies();
    var __s10local1 = new __dep_export_CollectableList.CollectableList();
    if (__s10local0 != null) {
      for (var __s10local2 = 0, __s10local3 = __s10local0; __s10local2 < __s10local3.length; __s10local2++) {
        var __s10local4 = __s10local3[__s10local2];
        if (__s10local4 !== undefined) {
          __s10local1.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s10local4.type, __dep_export_CastleModel.CastleModel.currencyData.getAmountByType(__s10local4), __s10local4.id));
        }
      }
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.subLayerDisp.mc_currency, "mc_item"), __s10local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, this.getCurrencyIconSize()));
  };
  CastleAbstractInvasionMerchantSublayer.prototype.setPackagesData = function (__s16param0, __s16param1) {
    this.packageContainer = __s16param0;
    this.eventVO = __s16param1;
  };
  CastleAbstractInvasionMerchantSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text(this.getHelpText()));
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getItemListVOs = function () {
    var __s20local0;
    __s20local0 = this.packageContainer ? this.packageContainer.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType) : [];
    var __s20local1 = [];
    var __s20local2 = this.getCurrencies();
    if (__s20local0 != null) {
      for (var __s20local3 = 0, __s20local4 = __s20local0; __s20local3 < __s20local4.length; __s20local3++) {
        var __s20local5 = __s20local4[__s20local3];
        if (__s20local5 !== undefined) {
          var __s20local6 = __s20local5.getCostList();
          var __s20local7 = false;
          if (__s20local2 != null) {
            for (var __s20local8 = 0, __s20local9 = __s20local2; __s20local8 < __s20local9.length; __s20local8++) {
              var __s20local10 = __s20local9[__s20local8];
              if (__s20local10 !== undefined) {
                for (var __s20local11 = 0, __s20local12 = __s20local6.list; __s20local11 < __s20local12.length; __s20local11++) {
                  var __s20local13 = __s20local12[__s20local11];
                  if (__s20local13 !== undefined && __s20local10.hasType(__s20local13)) {
                    __s20local7 = true;
                  }
                }
              }
            }
          }
          if (__s20local7) {
            var __s20local14 = new __dep_export_MerchantScrollItemVO.MerchantScrollItemVO();
            __s20local14.specialEventVO = this.eventVO;
            __s20local14.eventPackageVO = __s20local5;
            __s20local1.push(__s20local14);
          }
        }
      }
    }
    return __s20local1;
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getDescriptionText = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getCurrencies = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getCurrencyIconSize = function () {
    return new __s0local0();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getHelpText = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getMerchantScrollItem = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.onSpecialUserCurrencyUpdate = function (__s44param0 = null) {
    this.merchantComponent.update();
    this.updateCurrency();
  };
  return CastleAbstractInvasionMerchantSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAbstractInvasionMerchantSublayer = __s0local1;
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_BuyEventPackagesComponent = require("gge-module:export_BuyEventPackagesComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
