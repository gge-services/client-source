Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AGachaComponent = require("gge-module:export_AGachaComponent");
var __dep_export_GachaEventMainDialog = require("gge-module:export_GachaEventMainDialog");
var __s0local0 = function (__s1param0) {
  function GachaComponentMerchantButton(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaComponentMerchantButton, __s1param0);
  GachaComponentMerchantButton.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.updateIcon();
  };
  GachaComponentMerchantButton.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
  };
  GachaComponentMerchantButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  GachaComponentMerchantButton.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  GachaComponentMerchantButton.prototype.onEventUpdate = function (__s13param0) {
    if (__s13param0.specialEventVO.eventId == this.getEventVO().currencyMerchantEventID) {
      this.checkButtonEnabled();
    }
  };
  GachaComponentMerchantButton.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.disp)) {
      var __s16local0 = this.getCurrencyMerchantEventVO();
      if (__s16local0) {
        var __s16local1 = this.getCurrencyPackageID();
        __s16local0.openMerchantDialog(true, __s16local1);
      }
    }
  };
  GachaComponentMerchantButton.prototype.updateIcon = function () {
    var __s20local0 = __dep_export_GachaEventMainDialog.GachaEventMainDialog.NAME + "_Elements_" + this.getEventVO().assetName();
    var __s20local1 = __dep_export_GachaEventMainDialog.GachaEventMainDialog.NAME + "_MerchantIcon_" + this.getEventVO().assetName();
    var __s20local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s20local1, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s20local0), null, 0, false);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_icon);
    this.disp.mc_icon.addChild(__s20local2);
    this.checkButtonEnabled();
  };
  GachaComponentMerchantButton.prototype.checkButtonEnabled = function () {
    var __s22local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.getEventVO().currencyMerchantEventID);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp, !!__s22local0);
    this.disp.toolTipText = __s22local0 ? __s22local0.eventBuildingNameId : "alert_not_available";
  };
  GachaComponentMerchantButton.prototype.getCurrencyPackageID = function () {
    var __s24local0 = this;
    var __s24local1 = this.getCurrencyMerchantEventVO();
    if (__s24local1) {
      var __s24local2 = __s24local1.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType);
      if ((__s24local2 = __s24local2.filter(function (__s27param0) {
        return __s27param0.firstReward.isCombineAbleWith(__s24local0.getEventVO().getCurrentGachaVO().costs.list[0]);
      })).length > 0) {
        return __s24local2[0].packageID;
      }
    }
    return -1;
  };
  GachaComponentMerchantButton.prototype.getCurrencyMerchantEventVO = function () {
    var __s30local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.getEventVO().currencyMerchantEventID);
    if (__s30local0 && __s30local0.isActive && __s30local0 instanceof __dep_export_BuyPackagesEventVO.BuyPackagesEventVO) {
      return __s30local0;
    } else {
      return null;
    }
  };
  GachaComponentMerchantButton.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentMerchantButton;
}(__dep_export_AGachaComponent.AGachaComponent);
exports.GachaComponentMerchantButton = __s0local0;
