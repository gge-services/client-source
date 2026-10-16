Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_GPGCommandVO = require("gge-module:export_GPGCommandVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePlayerGiftMerchantBuyDialog = require("gge-module:export_CastlePlayerGiftMerchantBuyDialog");
var __s0local0 = function (__s1param0) {
  function CastlePlayerGiftSliderGiveDialog() {
    return __s1param0.call(this, CastlePlayerGiftSliderGiveDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlayerGiftSliderGiveDialog, __s1param0);
  CastlePlayerGiftSliderGiveDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_info]);
  };
  CastlePlayerGiftSliderGiveDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateTexts();
  };
  Object.defineProperty(CastlePlayerGiftSliderGiveDialog.prototype, "physicalPackageLimit", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.playerGiftData.getPackageAmountByPackageID(this.dialogProperties_0.packageID);
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePlayerGiftMerchantBuyDialog.CastlePlayerGiftMerchantBuyDialog.prototype, "physicalPackageLimit").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSliderGiveDialog.prototype.getDescriptionTextID = function () {
    if (this.amountSlider.selectedIndex + 1 == 1) {
      return "dialog_giftTrader_selection_singular";
    } else {
      return "dialog_giftTrader_selection_plural";
    }
  };
  CastlePlayerGiftSliderGiveDialog.prototype.getPackageName = function (__s17param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s17param0.reward, "ACollectableItemResourceVO")) {
      return "dialog_giftTrader_resources_placeholder";
    } else if (__s17param0.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.C1) {
      return "dialog_giftTrader_coins_placeholder";
    } else if (__s17param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_TOOL) {
      return "dialog_giftTrader_tools_placeholder";
    } else if (__s17param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_SOLDIER) {
      return "dialog_giftTrader_units_placeholder";
    } else if (__s17param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM || __s17param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM || __s17param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_HERO) {
      return "dialog_giftTrader_equipment_placeholder";
    } else if (__s17param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_MINUTE_SKIP) {
      return "dialog_giftTrader_timeSkip_placeholder";
    } else {
      return null;
    }
  };
  CastlePlayerGiftSliderGiveDialog.prototype.updateTexts = function () {
    var __s26local0;
    __s26local0 = this.amountSlider.selectedIndex + 1 == 1 ? [__dep_export_CastleModel.CastleModel.playerGiftData.playerName, this.getPackageName(this.packageVO_0), this.amountPicker.amountFactor] : [__dep_export_CastleModel.CastleModel.playerGiftData.playerName, __dep_exact_92d05af59ee2ff30.Localize.number(this.amountSlider.selectedIndex + 1), this.getPackageName(this.packageVO_0), this.amountPicker.amountFactor];
    this.setDescriptionText(this.getDescriptionTextID(), __s26local0);
  };
  CastlePlayerGiftSliderGiveDialog.prototype.handleDiscount = function () {};
  CastlePlayerGiftSliderGiveDialog.prototype.onChangePackageAmount = function (__s30param0 = null) {
    __s1param0.prototype.onChangePackageAmount.call(this, __s30param0);
    this.updateTexts();
  };
  CastlePlayerGiftSliderGiveDialog.prototype.getMaxBuyablePackages = function () {
    return this.physicalPackageLimit;
  };
  CastlePlayerGiftSliderGiveDialog.prototype.updateSliderAndPickerVisibility = function () {};
  CastlePlayerGiftSliderGiveDialog.prototype.onClick = function (__s36param0) {
    __s1param0.prototype.onClick.call(this, __s36param0);
    if (__s36param0.target == this.dialogDisp.btn_help) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_giftTrader_selection"));
    }
  };
  CastlePlayerGiftSliderGiveDialog.prototype.onBtnOkClick = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_GPGCommandVO.GPGCommandVO(this.dialogProperties_0.receivingPlayerID, this.dialogProperties_0.packageID, this.amountSlider.selectedIndex + 1));
  };
  Object.defineProperty(CastlePlayerGiftSliderGiveDialog.prototype, "dialogTitle", {
    get: function () {
      return "dialog_giftTrader_sendGift_title";
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePlayerGiftMerchantBuyDialog.CastlePlayerGiftMerchantBuyDialog.prototype, "dialogTitle").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerGiftSliderGiveDialog.prototype, "packageVO_0", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.playerGiftData.getPackageVOByID(this.dialogProperties_0.packageID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerGiftSliderGiveDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSliderGiveDialog.NAME = "CastlePlayerGiftSliderGive";
  return CastlePlayerGiftSliderGiveDialog;
}(__dep_export_CastlePlayerGiftMerchantBuyDialog.CastlePlayerGiftMerchantBuyDialog);
exports.CastlePlayerGiftSliderGiveDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
