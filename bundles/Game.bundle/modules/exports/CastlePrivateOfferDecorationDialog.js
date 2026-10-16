Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_C2SOneTimeOfferCancelled = require("gge-module:export_C2SOneTimeOfferCancelled");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleYesNoOrangeWarningDialogProperties = require("gge-module:export_CastleYesNoOrangeWarningDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePrivateOfferDecorationDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrivateOfferDecorationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferDecorationDialog, __s1param0);
  Object.defineProperty(CastlePrivateOfferDecorationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferDecorationDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_buy, this.dialogDisp.btn_info]);
    this._itxtTitle = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOfferDeco_title"));
    this._itxtBuy = this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_price, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("add_Gold"));
    this._itxtCopy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOfferDeco_copy"));
    this._txtTime = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
  };
  CastlePrivateOfferDecorationDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    var __s9local0 = this.dialogProperties.offerVO.getTotalRewardListFromOfferVO();
    if (__s9local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.BUILDING).buildingVO) {
      var __s9local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_decoHolder);
      __s9local1.addInfoBtn(this.dialogDisp.btn_info);
      __s9local1.addIconMc(this.dialogDisp.mc_decoHolder.mc_icon);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s9local1, __s9local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.BUILDING), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(150, 120)));
    }
  };
  CastlePrivateOfferDecorationDialog.prototype.applyPropertiesLoaded = function (__s12param0 = null) {
    this.dialogDisp.timeBackground.visible = false;
    if (!this.dialogProperties.offerVO.isOneTimeOffer) {
      this.dialogDisp.timeBackground.visible = true;
      this.setRemainingTime();
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    }
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferEnded));
    var __s12local0 = __dep_exact_81dacdf05bd32292.castAs(this.dialogProperties.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG), "OfferDescriptionVisualQuestDialog");
    if (__s12local0 && __s12local0.dialogCustomization) {
      if (__s12local0.dialogCustomization.CTID) {
        this._itxtCopy.textContentVO.textId = __s12local0.dialogCustomization.CTID;
      }
      if (__s12local0.dialogCustomization.TR) {
        this._itxtCopy.textContentVO.textReplacements = __s12local0.dialogCustomization.TR;
      }
    } else {
      this._itxtCopy.textContentVO.textId = "dialog_specialOfferDeco_copy";
    }
  };
  CastlePrivateOfferDecorationDialog.prototype.hideLoaded = function (__s19param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferEnded));
  };
  CastlePrivateOfferDecorationDialog.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.dialogDisp.btn_close:
        if (this.dialogProperties.offerVO.isOneTimeOffer) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleYesNoOrangeWarningDialog.CastleYesNoOrangeWarningDialog, new __dep_export_CastleYesNoOrangeWarningDialogProperties.CastleYesNoOrangeWarningDialogProperties("dialog_primeday_oneTimeOffer_confirm_header", "dialog_primeday_oneTimeOffer_confirm_copy", this.bindFunction(this.cancelOneTimeOffer)), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
        } else {
          this.hide();
        }
        break;
      case this.dialogDisp.btn_buy:
        __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_PRIVATE_OFFER_DECORATION, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_PRIVATE_OFFER_DECORATION);
    }
  };
  CastlePrivateOfferDecorationDialog.prototype.cancelOneTimeOffer = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOneTimeOfferCancelled.C2SOneTimeOfferCancelled(this.dialogProperties.offerVO.id));
    this.hide();
  };
  CastlePrivateOfferDecorationDialog.prototype.onOfferEnded = function (__s28param0) {
    if (__s28param0.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastlePrivateOfferDecorationDialog.prototype.setRemainingTime = function (__s31param0 = null) {
    this._txtTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getHoureMinuteSecondTimeString(this.dialogProperties.offerVO.remainingSeconds);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.timeHitArea, this.dialogProperties.offerVO.remainingSeconds);
  };
  CastlePrivateOfferDecorationDialog.__initialize_static_members = function () {
    CastlePrivateOfferDecorationDialog.NAME = "CastlePrivateOfferDecoration";
  };
  return CastlePrivateOfferDecorationDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePrivateOfferDecorationDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleYesNoOrangeWarningDialog = require("gge-module:export_CastleYesNoOrangeWarningDialog");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
