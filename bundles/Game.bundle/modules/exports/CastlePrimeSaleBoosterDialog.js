Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePremiumMarketPlaceDialogProperties = require("gge-module:export_CastlePremiumMarketPlaceDialogProperties");
var __dep_export_CastleAbstractPrimeSaleDialog = require("gge-module:export_CastleAbstractPrimeSaleDialog");
var __s0local0 = function (__s1param0) {
  function CastlePrimeSaleBoosterDialog() {
    var __s3local0 = this;
    __s3local0.initialBonusXPosition = 0;
    __s3local0.initialBonusBackgroundWidth = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrimeSaleBoosterDialog, __s1param0);
  CastlePrimeSaleBoosterDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initialBonusXPosition = this.dialogDisp.mc_booster_container.mc_bottom_rewards.mc_bonus.x;
    this.initialBonusBackgroundWidth = this.dialogDisp.mc_booster_container.mc_bottom_rewards.bonusAttributeBackground.width;
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastlePrimeSaleBoosterDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    var __s7local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_EVENT_BOOSTER_PRIME_SALE), "EventBoosterPrimeSaleEventVO");
    if (__s7local0) {
      var __s7local1 = __s7local0.activeBoosterSale;
      if (!(__s7local1 < 0)) {
        var __s7local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boosterSaleData.getDiscount(__s7local1));
        if (!(__s7local2 < 1)) {
          var __s7local3 = __dep_export_CastleModel.CastleModel.boostData.getOverseerVOByID(__s7local1);
          if (__s7local3) {
            this.dialogDisp.mc_booster_container.visible = true;
            var __s7local4 = this.dialogDisp.mc_booster_container.mc_booster;
            __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s7local4);
            var __s7local5 = __s7local3.visualMovieClip;
            __s7local4.addChild(__s7local5);
            var __s7local6 = __s7local3.bonusText;
            var __s7local7 = this.dialogDisp.mc_booster_container.mc_bottom_rewards;
            __s7local7.mc_bonus.txt_bonus.textColor = "#443326";
            __s7local7.mc_time_container.txt_time.textColor = "#443326";
            this.textFieldManager.registerTextField(__s7local7.mc_bonus.txt_bonus, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s7local6[0], [__s7local6[1]]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            __s7local7.mc_bonus.icon_bonus.gotoAndStop(__s7local3.bonusIconFrame);
            this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_primeday_primesale_specialists_description"));
            this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_specialOfferDeco_title"));
            this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_questInfo_showMe"));
            this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_primeday_primesale_saveCosts", [__s7local2]));
            this.textFieldManager.registerTextField(this.dialogDisp.mc_percentOff.txt_percentOff, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s7local2]));
            this.textFieldManager.registerTextField(this.dialogDisp.mc_booster_container.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.getTitle(__s7local1)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(this.dialogDisp.mc_old_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local3.baseCosts));
            this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local3.finalCostsC2));
            __s7local7.mc_bonus.mouseChildren = false;
            __s7local7.mc_bonus.toolTipText = __s7local3.bonusToolTip;
            if (__s7local1 == __dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER || __s7local1 == __dep_exact_26a421b704832cff.BoosterConst.RETURNING_SPEED) {
              __s7local7.mc_time_container.visible = false;
              __s7local7.timeAttributeBackground.visible = false;
              __s7local7.mc_bonus.x = 0;
              __s7local7.bonusAttributeBackground.x = 0;
              __s7local7.bonusAttributeBackground.width = this.initialBonusBackgroundWidth * 2;
            } else {
              __s7local7.mc_time_container.visible = true;
              __s7local7.timeAttributeBackground.visible = true;
              __s7local7.mc_bonus.x = this.initialBonusXPosition;
              __s7local7.bonusAttributeBackground.x = this.initialBonusXPosition;
              __s7local7.bonusAttributeBackground.width = this.initialBonusBackgroundWidth;
              this.textFieldManager.registerTextField(__s7local7.mc_time_container.txt_time, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getTimeToString(CastlePrimeSaleBoosterDialog.EVENT_OVERSEER_DURATION, __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)));
              __s7local7.mc_time_container.mouseChildren = false;
              __s7local7.mc_time_container.toolTipText = __s7local3.timeStringTooltip;
            }
            this.dialogDisp.mc_costs.mouseChildren = false;
            this.dialogDisp.mc_costs.toolTipText = __dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog.SPECIAL_PRICE;
            this.dialogDisp.mc_old_costs.mouseChildren = false;
            this.dialogDisp.mc_old_costs.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog.SAVE_COSTS, [__s7local2]);
          }
        }
      }
    }
  };
  CastlePrimeSaleBoosterDialog.prototype.getTitle = function (__s16param0) {
    switch (__s16param0) {
      case __dep_exact_26a421b704832cff.BoosterConst.MARAUDER:
        return "marauder";
      case __dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER:
        return "caravanCapacity";
      case __dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR:
        return "instructor";
      case __dep_exact_26a421b704832cff.BoosterConst.RETURNING_SPEED:
        return "maps";
      case __dep_exact_26a421b704832cff.BoosterConst.TAX:
        return "taxcollector";
    }
    return "overseer";
  };
  CastlePrimeSaleBoosterDialog.prototype.getCharacterName = function () {
    return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MERCHANT;
  };
  CastlePrimeSaleBoosterDialog.prototype.onOkButton = function () {
    this.hide();
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastlePremiumMarketPlaceDialog.CastlePremiumMarketPlaceDialog, new __dep_export_CastlePremiumMarketPlaceDialogProperties.CastlePremiumMarketPlaceDialogProperties(__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO));
  };
  CastlePrimeSaleBoosterDialog.prototype.onRemoveSpecialEvent = function (__s23param0) {
    if (__s23param0.specialEventVO.eventId == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_EVENT_BOOSTER_PRIME_SALE) {
      this.hide();
    }
  };
  CastlePrimeSaleBoosterDialog.prototype.getRemainingTime = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boosterSaleData.anyTimeLeft());
  };
  CastlePrimeSaleBoosterDialog.prototype.isOffer = function () {
    return true;
  };
  CastlePrimeSaleBoosterDialog.prototype.isEvent = function () {
    return true;
  };
  CastlePrimeSaleBoosterDialog.__initialize_static_members = function () {
    CastlePrimeSaleBoosterDialog.NAME = "CastlePrimeSaleBoosterDialog";
    CastlePrimeSaleBoosterDialog.EVENT_OVERSEER_DURATION = 604800;
  };
  return CastlePrimeSaleBoosterDialog;
}(__dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog);
exports.CastlePrimeSaleBoosterDialog = __s0local0;
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePremiumMarketPlaceDialog = require("gge-module:export_CastlePremiumMarketPlaceDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
