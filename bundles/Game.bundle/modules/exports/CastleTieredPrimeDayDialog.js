Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTieredPrimeDayProgressBar = require("gge-module:export_CastleTieredPrimeDayProgressBar");
var __s0local0 = function (__s1param0) {
  function CastleTieredPrimeDayDialog() {
    var __s3local0 = this;
    __s3local0._subTitleGGSTF = null;
    __s3local0._timesLeftGGSTF = null;
    __s3local0.startingPositionX = 0;
    __s3local0.BOX_POSITION_Y = -10;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTieredPrimeDayDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTieredPrimeDayDialog, __s1param0);
  CastleTieredPrimeDayDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.setupStaticTexts();
    this.initBasicButtons(this.dialogButtons);
  };
  CastleTieredPrimeDayDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.setupBoxes();
    this.setupProgressBar();
    this.updateTimerText();
    this.updateProgress();
  };
  CastleTieredPrimeDayDialog.prototype.hideLoaded = function (__s9param0 = null) {
    this.removeBoxes();
    this.removeProgressBar();
    this.destroyBoxes();
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  CastleTieredPrimeDayDialog.prototype.destroyBoxes = function () {
    for (var __s11local0 = 0; __s11local0 < this._rewardBoxes.length; __s11local0++) {
      this._rewardBoxes[__s11local0].destroyCollectableRenderList();
    }
  };
  CastleTieredPrimeDayDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoval));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleTieredPrimeDayDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoval));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleTieredPrimeDayDialog.prototype.onEventRemoval = function (__s19param0) {
    if (__s19param0.specialEventVO == this.props.eventVO) {
      this.hide();
    }
  };
  CastleTieredPrimeDayDialog.prototype.onEventUpdate = function (__s22param0) {
    if (__s22param0.specialEventVO == this.props.eventVO) {
      this.updateProgress();
    }
  };
  CastleTieredPrimeDayDialog.prototype.updateProgress = function () {
    this._tieredProgressBar.updateProgress();
    this.updateRewardBoxes();
    this.updateBoughtRewardsText();
  };
  CastleTieredPrimeDayDialog.prototype.updateBoughtRewardsText = function () {
    var __s27local0 = __dep_exact_f855840627e6e145.int(this.props.eventVO.maxBuyCount - this.props.eventVO.boughtAllRewardsCount);
    if (__s27local0 > 1) {
      this._timesLeftGGSTF.textContentVO.textId = "dialog_primeday_paymentTier_charges";
      this._timesLeftGGSTF.textContentVO.textReplacements = [__s27local0];
    } else if (__s27local0 == 1) {
      this._timesLeftGGSTF.textContentVO.textId = "dialog_primeday_paymentTier_charges_singular";
    } else {
      this.hide();
    }
  };
  CastleTieredPrimeDayDialog.prototype.updateRewardBoxes = function () {
    for (var __s32local0 = 0; __s32local0 < this._rewardBoxes.length; __s32local0++) {
      this._rewardBoxes[__s32local0].isCollected = this.props.eventVO.isBoughtInCurrentCycle(__s32local0);
    }
  };
  CastleTieredPrimeDayDialog.prototype.removeBoxes = function () {
    if (this._rewardBoxes != null) {
      for (var __s36local0 = 0, __s36local1 = this._rewardBoxes; __s36local0 < __s36local1.length; __s36local0++) {
        var __s36local2 = __s36local1[__s36local0];
        if (__s36local2 !== undefined) {
          this.dialogDisp.mc_bg.removeChild(__s36local2.disp);
        }
      }
    }
    this._rewardBoxes = [];
  };
  CastleTieredPrimeDayDialog.prototype.removeProgressBar = function () {
    this._tieredProgressBar = null;
  };
  CastleTieredPrimeDayDialog.prototype.setupBoxes = function () {
    this.setupRewardBoxes();
    this.setStartingXPositionOfBoxes();
    this.setBoxesIndex();
  };
  CastleTieredPrimeDayDialog.prototype.setupProgressBar = function () {
    var __s46local0 = [];
    if (this._rewardBoxes != null) {
      for (var __s46local1 = 0, __s46local2 = this._rewardBoxes; __s46local1 < __s46local2.length; __s46local1++) {
        var __s46local3 = __s46local2[__s46local1];
        if (__s46local3 !== undefined) {
          __s46local0.push(__s46local3.activeBoxMC);
        }
      }
    }
    this._tieredProgressBar = new __dep_export_CastleTieredPrimeDayProgressBar.CastleTieredPrimeDayProgressBar(this.dialogDisp.mc_barDispComponent, __s46local0, this.props.eventVO);
  };
  CastleTieredPrimeDayDialog.prototype.setupRewardBoxes = function () {
    this._rewardBoxes = [];
    for (var __s52local0 = 0; __s52local0 < CastleTieredPrimeDayDialog.TIERS_COUNT;) {
      var __s52local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleTieredPrimeDayRewardBox"))();
      var __s52local2 = new __dep_export_CastleTieredPrimeDayRewardBoxVE.CastleTieredPrimeDayRewardBoxVE(__s52local1, __s52local0 + 1, this.props.eventVO.rewards[__s52local0]);
      this._rewardBoxes.push(__s52local2);
      this.dialogDisp.mc_bg.addChild(__s52local2.disp);
      __s52local2.disp.y = this.BOX_POSITION_Y;
      __s52local0++;
    }
  };
  CastleTieredPrimeDayDialog.prototype.setupStaticTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_paymentTier_subtitle"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_paymentTier_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_buy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("add_Gold"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_paymentTier_header"));
    this._subTitleGGSTF = this.textFieldManager.registerTextField(this.dialogDisp.txt_subTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this._timesLeftGGSTF = this.textFieldManager.registerTextField(this.dialogDisp.txt_timesLeft, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
  };
  CastleTieredPrimeDayDialog.prototype.onTimerUpdate = function (__s58param0) {
    if (this.props.eventVO.remainingEventTimeInSeconds <= 0) {
      this.hide();
    } else {
      this.updateTimerText();
    }
  };
  CastleTieredPrimeDayDialog.prototype.updateTimerText = function () {
    var __s62local0 = __dep_exact_f855840627e6e145.int(this.props.eventVO.remainingEventTimeInSeconds);
    if (!this.props.eventVO.isTimeless || __s62local0 <= __dep_export_PaymentrewardEventVO.PaymentrewardEventVO.REMAINING_TIME_ALERT) {
      this._subTitleGGSTF.textContentVO.textId = "dialog_primeday_paymentTier_endTimer";
      this._subTitleGGSTF.textContentVO.textReplacements = [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s62local0)];
    } else {
      this._subTitleGGSTF.textContentVO.textId = "limitedOffer";
    }
  };
  CastleTieredPrimeDayDialog.prototype.onClick = function (__s66param0) {
    switch (__s66param0.target) {
      case this.dialogDisp.btn_exit:
        this.hide();
        return;
      case this.dialogDisp.btn_buy:
        __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_exact_f855840627e6e145.int(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_UNKNOWN), __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_TIERED_PRIME_DAY_DIALOG);
        return;
    }
  };
  CastleTieredPrimeDayDialog.prototype.setStartingXPositionOfBoxes = function () {
    switch (this.amountOfBigBoxesByRewards) {
      case 0:
        this.startingPositionX = CastleTieredPrimeDayDialog.START_X_POS_NO_BIG_BOXES;
        break;
      case 1:
        this.startingPositionX = CastleTieredPrimeDayDialog.START_X_POS_ONE_BIG_BOX;
        break;
      case 2:
        this.startingPositionX = CastleTieredPrimeDayDialog.START_X_POS_TWO_BIG_BOXES;
        break;
      default:
        throw new Error("TieredPrimeDayDialog.placeBoxes -> this dialog cannot handle more than 3 Big RewardBoxes!");
    }
    for (var __s69local0 = 0; __s69local0 < this._rewardBoxes.length; __s69local0++) {
      var __s69local1 = this._rewardBoxes[__s69local0];
      var __s69local2 = __s69local0 > 0 ? this._rewardBoxes[__s69local0 - 1].width - CastleTieredPrimeDayDialog.BOX_SHADOW_LENGTH + this._rewardBoxes[__s69local0 - 1].disp.x : this.startingPositionX;
      __s69local1.disp.x = __s69local2;
    }
  };
  CastleTieredPrimeDayDialog.prototype.setBoxesIndex = function () {
    for (var __s74local0 = 0; __s74local0 < this._rewardBoxes.length; __s74local0++) {
      this.dialogDisp.mc_bg.setChildIndex(this._rewardBoxes[__s74local0].disp, this.dialogDisp.mc_bg.numChildren - (__s74local0 + 1));
    }
  };
  Object.defineProperty(CastleTieredPrimeDayDialog.prototype, "amountOfBigBoxesByRewards", {
    get: function () {
      var __s78local0 = 0;
      for (var __s78local1 = 0; __s78local1 < this.props.eventVO.rewards.length; ++__s78local1) {
        if (this.props.eventVO.rewards[__s78local1].rewardList.length > CastleTieredPrimeDayDialog.BORDER_REWARD_AMOUNT_FOR_BIG_BOX) {
          __s78local0++;
        }
      }
      return __s78local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayDialog.prototype, "dialogButtons", {
    get: function () {
      return [this.dialogDisp.btn_exit, this.dialogDisp.btn_buy];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayDialog.prototype, "props", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTieredPrimeDayDialog.__initialize_static_members = function () {
    CastleTieredPrimeDayDialog.BOX_SHADOW_LENGTH = 3;
    CastleTieredPrimeDayDialog.TIERS_COUNT = 3;
    CastleTieredPrimeDayDialog.BORDER_REWARD_AMOUNT_FOR_BIG_BOX = 4;
    CastleTieredPrimeDayDialog.NAME = "CastleTieredPrimeDay";
  };
  CastleTieredPrimeDayDialog.START_X_POS_NO_BIG_BOXES = -277;
  CastleTieredPrimeDayDialog.START_X_POS_ONE_BIG_BOX = -315;
  CastleTieredPrimeDayDialog.START_X_POS_TWO_BIG_BOXES = -353;
  return CastleTieredPrimeDayDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTieredPrimeDayDialog = __s0local0;
var __dep_export_PaymentrewardEventVO = require("gge-module:export_PaymentrewardEventVO");
var __dep_export_CastleTieredPrimeDayRewardBoxVE = require("gge-module:export_CastleTieredPrimeDayRewardBoxVE");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
