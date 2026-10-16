Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePrivateOfferTimeChallengeDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrivateOfferTimeChallengeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferTimeChallengeDialog, __s1param0);
  CastlePrivateOfferTimeChallengeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close]);
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.topBar.gotoAndStop(CastlePrivateOfferTimeChallengeDialog.REGULAR_FRAME);
    if (this.dialogProperties.offerVO.hasInfiniteTime) {
      this.dialogDisp.topBar.gotoAndStop(CastlePrivateOfferTimeChallengeDialog.INFINITE_FRAME);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_description.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_timeOffer_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.topBar.txt_reach_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_timeOffer_condition", [this.getReachLevel()], false));
    this.updateTimeText();
    this.updateRewards();
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.hideLoaded = function (__s10param0 = null) {
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    __s1param0.prototype.hideLoaded.call(this, __s10param0);
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.updateRewards = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.offerVO.getTotalRewardListFromOfferVO(), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_TIME_CHALLENGE, new __s0local0(CastlePrivateOfferTimeChallengeDialog.ICON_WIDTH, CastlePrivateOfferTimeChallengeDialog.ICON_HEIGHT)), function preRenderFunc(__s17param0) {
      if (__s17param0.itemVO && __s17param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_TIME) {
        __s17param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 7;
      }
    });
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.updateTimeText = function () {
    if (!this.dialogProperties.offerVO.hasInfiniteTime) {
      var __s20local0 = new Date();
      __s20local0.setSeconds(__s20local0.getSeconds() + this.dialogProperties.offerVO.remainingSeconds);
      __s20local0.getFullYear().toString();
      var __s20local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getDateStringFromDate(__s20local0);
      var __s20local2 = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeStringFromDate(__s20local0, __dep_exact_92d05af59ee2ff30.Localize.text, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT);
      this.textFieldManager.registerTextField(this.dialogDisp.topBar.txt_time, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_timeOffer_timer", [__s20local1, __s20local2], false), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.getReachLevel = function () {
    var __s23local0 = this.dialogProperties.offerVO.getQuestConditionByName(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_INTEGER_PLAYER_LEVEL + __dep_export_ClientConstOffer.ClientConstOffer.TYPE_MIN);
    if (__s23local0) {
      return __dep_exact_f855840627e6e145.int(__s23local0.conditionTextReplacements[0]);
    } else {
      return 0;
    }
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.onOfferRemoved = function (__s27param0) {
    if (__s27param0.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  Object.defineProperty(CastlePrivateOfferTimeChallengeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferTimeChallengeDialog.__initialize_static_members = function () {
    CastlePrivateOfferTimeChallengeDialog.NAME = "CastlePrivateOfferTimeChallenge";
    CastlePrivateOfferTimeChallengeDialog.REGULAR_FRAME = "regular";
    CastlePrivateOfferTimeChallengeDialog.INFINITE_FRAME = "infinite";
    CastlePrivateOfferTimeChallengeDialog.ICON_WIDTH = 40;
    CastlePrivateOfferTimeChallengeDialog.ICON_HEIGHT = 55;
  };
  return CastlePrivateOfferTimeChallengeDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePrivateOfferTimeChallengeDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
