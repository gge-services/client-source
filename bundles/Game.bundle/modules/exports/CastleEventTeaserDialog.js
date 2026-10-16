Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_ClientConstTracking = require("gge-module:export_ClientConstTracking");
var __dep_export_C2SEventAnnouncementClaimRewardVO = require("gge-module:export_C2SEventAnnouncementClaimRewardVO");
var __dep_export_C2SClientSideTrackingVO = require("gge-module:export_C2SClientSideTrackingVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EventAnnouncementData = require("gge-module:export_EventAnnouncementData");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleEventTeaserDialog() {
    var __s3local0 = this;
    __s3local0.timeOfOpening = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleEventTeaserDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEventTeaserDialog, __s1param0);
  CastleEventTeaserDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.timerSecondTick));
    __dep_export_CastleModel.CastleModel.eventAnnouncementData.addEventListener(__dep_export_EventAnnouncementData.EventAnnouncementData.SHOW_EVENT_ANNOUNCEMENT_REWARD_COLLECTED, this.bindFunction(this.onRewardCollected));
  };
  CastleEventTeaserDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.timerSecondTick));
    __dep_export_CastleModel.CastleModel.eventAnnouncementData.removeEventListener(__dep_export_EventAnnouncementData.EventAnnouncementData.SHOW_EVENT_ANNOUNCEMENT_REWARD_COLLECTED, this.bindFunction(this.onRewardCollected));
  };
  CastleEventTeaserDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    if (this.eventRewardComp) {
      this.eventRewardComp.destroy();
    }
    if (this.claimableRewardComp) {
      this.claimableRewardComp.destroy();
    }
    var __s9local0 = new Date().time;
    __s9local0 *= __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    __s9local0 = Math.round(__s9local0);
    if (this.timeOfOpening > 0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SClientSideTrackingVO.C2SClientSideTrackingVO(__dep_export_ClientConstTracking.ClientConstTracking.EVENT_ANNOUNCEMENT_MESSAGE, __s9local0 - this.timeOfOpening));
    }
    this.timeOfOpening = 0;
  };
  CastleEventTeaserDialog.prototype.showLoaded = function (__s14param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s14param0);
    this.timeOfOpening = new Date().time;
    this.timeOfOpening = this.timeOfOpening * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this.timeOfOpening = Math.round(this.timeOfOpening);
    this.initBasicButtons([this.dialogDisp.closeBtn, this.dialogDisp.okBtn, this.dialogDisp.claimRewardsBtn, this.dialogDisp.arrowLeftBtn, this.dialogDisp.arrowRightBtn]);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.claimRewardsBtn, !this.dialogProperties.alreadyClaimed);
    this._durationText = this.textFieldManager.registerTextField(this.dialogDisp.eventDurationTxt, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.fillBackground();
    this.fillEventRewards();
    this.fillClaimableRewards();
    this.fillTexts();
    this.createCharacter();
    this.timerSecondTick();
  };
  CastleEventTeaserDialog.prototype.timerSecondTick = function (__s16param0 = null) {
    var __s16local0 = "";
    var __s16local1 = new Date().time;
    __s16local1 *= __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    if ((__s16local1 = Math.round(__s16local1)) < this.dialogProperties.durationTS) {
      __s16local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getLongEventTimeString(this.dialogProperties.durationTS - __s16local1);
    } else {
      this.hide();
    }
    this._durationText.textContentVO.stringValue = __s16local0;
  };
  CastleEventTeaserDialog.prototype.onClick = function (__s20param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      switch (__s20param0.target) {
        case this.dialogDisp.closeBtn:
        case this.dialogDisp.okBtn:
          this.hide();
          break;
        case this.dialogDisp.claimRewardsBtn:
          this.claimRewards();
      }
    }
  };
  CastleEventTeaserDialog.prototype.claimRewards = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SEventAnnouncementClaimRewardVO.C2SEventAnnouncementClaimRewardVO());
  };
  CastleEventTeaserDialog.prototype.onRewardCollected = function (__s26param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.claimRewardsBtn, !this.dialogProperties.alreadyClaimed);
    this.textFieldManager.registerTextField(this.dialogDisp.claimRewardsBtn.labelTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.claimButtonLabel));
  };
  CastleEventTeaserDialog.prototype.fillBackground = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.backgroundContainer);
    var __s28local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.dialogProperties.backgroundName, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.dialogProperties.backgroundName), null, 0, false);
    this.dialogDisp.backgroundContainer.addChild(__s28local0.asDisplayObject());
  };
  CastleEventTeaserDialog.prototype.createCharacter = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.characterContainer);
    var __s30local0 = __dep_export_ClientConstCharacter.ClientConstCharacter.getFullSizeAssetName(this.dialogProperties.characterId);
    var __s30local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s30local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s30local0), null, 0, false);
    this.dialogDisp.characterContainer.addChild(__s30local1.asDisplayObject());
  };
  CastleEventTeaserDialog.prototype.fillTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.dialogTitleTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.dialogTitleTextId));
    this.textFieldManager.registerTextField(this.dialogDisp.eventTitleTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.eventTitleTextId));
    this.textFieldManager.registerTextField(this.dialogDisp.possibleRewardsTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.possibleEventRewardsDescription));
    this.textFieldManager.registerTextField(this.dialogDisp.descriptionTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.announcementDescription)).verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.claimRewardsBtn.labelTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.claimButtonLabel));
  };
  CastleEventTeaserDialog.prototype.fillEventRewards = function () {
    this.dialogDisp.possibleEventRewards.gotoAndStop(1);
    this.eventRewardComp = this.createScrollableCollectableComponent(this.dialogDisp.possibleEventRewards, 3, this.dialogProperties.possibleRewards, this.collectableRenderList, "possibleReward_", this.dialogDisp.arrowLeftBtn, this.dialogDisp.arrowRightBtn);
  };
  CastleEventTeaserDialog.prototype.fillClaimableRewards = function () {
    this.claimableRewardCollectableList = [];
    this.claimableRewardComp = this.createScrollableCollectableComponent(this.dialogDisp.claimableRewardSets, 4, this.dialogProperties.claimableRewards, this.claimableRewardCollectableList, "claimableReward_", null, null);
  };
  CastleEventTeaserDialog.prototype.createScrollableCollectableComponent = function (__s38param0, __s38param1, __s38param2, __s38param3, __s38param4, __s38param5, __s38param6) {
    var __s38local0 = __s38param2.length;
    var __s38local1 = __dep_exact_f855840627e6e145.int(__s38local0 < __s38param1 ? __s38local0 : __s38param1);
    __s38param0.gotoAndStop(__s38local1);
    return new __dep_export_PaginatedCollectableRenderListWrapper.PaginatedCollectableRenderListWrapper(__s38param0, __s38param2, __s38param3, __s38local1 < __s38param1 ? __s38local1 : __s38param1, __s38param5, __s38param6, __s38param4, "mc_item", "parent.btn_info", "mc_icon");
  };
  CastleEventTeaserDialog.prototype.destroyCollectableRenderList = function () {
    __s1param0.prototype.destroyCollectableRenderList.call(this);
    this.destroyRenderList(this.claimableRewardCollectableList);
  };
  Object.defineProperty(CastleEventTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEventTeaserDialog.__initialize_static_members = function () {
    CastleEventTeaserDialog.NAME = "EventAnnouncementTeaser";
  };
  return CastleEventTeaserDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleEventTeaserDialog = __s0local0;
var __dep_export_PaginatedCollectableRenderListWrapper = require("gge-module:export_PaginatedCollectableRenderListWrapper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
