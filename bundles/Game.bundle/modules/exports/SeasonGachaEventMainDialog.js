Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GachaComponentAnimation = require("gge-module:export_GachaComponentAnimation");
var __dep_export_GachaComponentBackground = require("gge-module:export_GachaComponentBackground");
var __dep_export_GachaComponentCurrency = require("gge-module:export_GachaComponentCurrency");
var __dep_export_GachaComponentLevelRewards = require("gge-module:export_GachaComponentLevelRewards");
var __dep_export_GachaComponentMerchantButton = require("gge-module:export_GachaComponentMerchantButton");
var __dep_export_GachaComponentMilestones = require("gge-module:export_GachaComponentMilestones");
var __dep_export_GachaComponentPull = require("gge-module:export_GachaComponentPull");
var __dep_export_GachaComponentRanking = require("gge-module:export_GachaComponentRanking");
var __dep_export_GachaComponentRewards = require("gge-module:export_GachaComponentRewards");
var __s0local0 = function (__s1param0) {
  function SeasonGachaEventMainDialog() {
    var __s3local0 = this;
    __s3local0._gachaComponents = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, SeasonGachaEventMainDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonGachaEventMainDialog, __s1param0);
  SeasonGachaEventMainDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_timer.toolTipText = "dialog_tenthAnniversary_timer";
    this.addGachaComponent(__dep_export_GachaComponentBackground.GachaComponentBackground, this.dialogDisp.mc_bg);
    this.addGachaComponent(__dep_export_GachaComponentCurrency.GachaComponentCurrency, this.dialogDisp.mc_currency);
    this.addGachaComponent(__dep_export_GachaComponentMerchantButton.GachaComponentMerchantButton, this.dialogDisp.btn_merchant);
    this.addGachaComponent(__dep_export_GachaComponentRanking.GachaComponentRanking, this.dialogDisp.mc_ranking);
    this.addGachaComponent(__dep_export_GachaComponentLevelRewards.GachaComponentLevelRewards, this.dialogDisp.mc_levelRewards);
    this.addGachaComponent(__dep_export_GachaComponentPull.GachaComponentPull, this.dialogDisp.mc_pull, "supersale");
    this.addGachaComponent(__dep_export_GachaComponentMilestones.GachaComponentMilestones, this.dialogDisp.mc_milestones);
    this.addGachaComponent(__dep_export_GachaComponentRewards.GachaComponentRewards, this.dialogDisp.mc_rewards);
    this.addGachaComponent(__dep_export_GachaComponentAnimation.GachaComponentAnimation, this.dialogDisp.mc_animation);
  };
  SeasonGachaEventMainDialog.prototype.showLoaded = function (__s7param0) {
    var __s7local0 = this;
    if (__s7param0 === undefined) {
      __s7param0 = null;
    }
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("event_title_" + this.eventVO.eventId)));
    __dep_exact_9e901e8e2483a22f.loadAsset("Rewards_Animation").then(function (__s10param0) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_GachaEvent.GachaEvent(__dep_export_GachaEvent.GachaEvent.SHINE_ANIMATION_LOADED, null, null));
    });
    this._gachaComponents.forEach(function (__s12param0) {
      __s12param0.show([__s7local0.eventVO, 1]);
    });
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  SeasonGachaEventMainDialog.prototype.addGachaComponent = function (__s14param0, __s14param1, __s14param2 = null) {
    if (__s14param1) {
      if (__s14param2) {
        this._gachaComponents.push(new __s14param0(__s14param1, __s14param2));
      } else {
        this._gachaComponents.push(new __s14param0(__s14param1));
      }
    }
  };
  SeasonGachaEventMainDialog.prototype.hideLoaded = function (__s19param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s19param0);
    this._gachaComponents.forEach(function (__s21param0) {
      __s21param0.onHide();
    });
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  SeasonGachaEventMainDialog.prototype.onSpecialEventRemoved = function (__s23param0) {
    if (!this.isEventActive) {
      this.hide();
    }
  };
  SeasonGachaEventMainDialog.prototype.onLockDialog = function (__s26param0) {
    this.lockDialog();
  };
  SeasonGachaEventMainDialog.prototype.onUnlockDialog = function (__s28param0) {
    this.unLockDialog();
  };
  SeasonGachaEventMainDialog.prototype.onTimerUpdate = function (__s30param0) {
    this.updateTimer();
  };
  SeasonGachaEventMainDialog.prototype.onClick = function (__s32param0) {
    __s1param0.prototype.onClick.call(this, __s32param0);
    if (!this.isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s32param0.target)) {
      switch (__s32param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", "helpPopup_" + this.eventVO.assetName());
      }
    }
  };
  SeasonGachaEventMainDialog.prototype.updateActiveEvent = function () {
    this.updateTimer();
  };
  SeasonGachaEventMainDialog.prototype.updateTimer = function () {
    if (this.isEventActive) {
      var __s38local0 = this.eventVO.remainingEventTimeInSeconds;
      this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s38local0);
    } else {
      this.hide();
    }
  };
  Object.defineProperty(SeasonGachaEventMainDialog.prototype, "eventVO", {
    get: function () {
      return this.dialogProperties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonGachaEventMainDialog.prototype, "isEventActive", {
    get: function () {
      return !!__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.eventVO.eventId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonGachaEventMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonGachaEventMainDialog.NAME = "SeasonGachaMain";
  return SeasonGachaEventMainDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SeasonGachaEventMainDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
