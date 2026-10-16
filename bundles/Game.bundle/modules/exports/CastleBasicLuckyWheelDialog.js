Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_LuckyWheelData = require("gge-module:export_LuckyWheelData");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_CastleScoreEventScoreBarProperties = require("gge-module:export_CastleScoreEventScoreBarProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleLuckyWheelDelayCommandHelper = require("gge-module:export_CastleLuckyWheelDelayCommandHelper");
var __dep_export_CastleLuckyWheelJackpotComponent = require("gge-module:export_CastleLuckyWheelJackpotComponent");
var __dep_export_CastleLuckyWheelMediator = require("gge-module:export_CastleLuckyWheelMediator");
var __dep_export_CastleLuckyWheelScoreBar = require("gge-module:export_CastleLuckyWheelScoreBar");
var __dep_export_CastleLuckyWheelSpeechbubbleComponent = require("gge-module:export_CastleLuckyWheelSpeechbubbleComponent");
var __dep_export_CastleLuckyWheelSpinButton = require("gge-module:export_CastleLuckyWheelSpinButton");
var __dep_export_CastleLuckyWheelSpinComponent = require("gge-module:export_CastleLuckyWheelSpinComponent");
var __dep_export_CircularItemDistributor = require("gge-module:export_CircularItemDistributor");
var __dep_export_CircularItemDistributorProperties = require("gge-module:export_CircularItemDistributorProperties");
var __dep_export_SomeDistributableItem = require("gge-module:export_SomeDistributableItem");
var __s0local0 = function (__s1param0) {
  function CastleBasicLuckyWheelDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentTicketCount = 0;
    __s3local0._currentCoinsAmount = 0;
    __s3local0._currentRubiesAmount = 0;
    __s3local0._nextRubiesAmount = 0;
    __s3local0._nextCoinsAmount = 0;
    __s3local0._firstTicketCountUpdateDuringThisSpin = true;
    __s3local0._jackPotBought = false;
    __s3local0._playerID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBasicLuckyWheelDialog, __s1param0);
  CastleBasicLuckyWheelDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.spin_btn_background.spin_component_background_pro.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_luckyWheel_pro"));
    this.dialogDisp.componentLevelTooltip.toolTipText = "dialog_luckyWheel_winclassCurrent";
    this.dialogDisp.component_level.mouseChildren = false;
    this.initProgressCircle();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_rank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("rank"));
    this.dialogDisp.mc_disabledRanking.toolTipText = "dialog_tournament_yourRank";
    this.dialogDisp.mc_disabledRanking.mouseChildren = false;
    this.dialogDisp.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
    this.dialogDisp.mc_storageSpace.mouseChildren = false;
    this.dialogDisp.mc_storageSpaceGem.toolTipText = "dialog_gemSpace_tooltip";
    this.dialogDisp.mc_storageSpaceGem.mouseChildren = false;
  };
  CastleBasicLuckyWheelDialog.prototype.initEventDependentComponents = function () {
    if (this.eventVO) {
      this.component_spin ||= new __dep_export_CastleLuckyWheelSpinComponent.CastleLuckyWheelSpinComponent(this.dialogDisp.component_spin, this.eventVO.eventId);
      this.component_speechbubble ||= new __dep_export_CastleLuckyWheelSpeechbubbleComponent.CastleLuckyWheelSpeechbubbleComponent(this.dialogDisp.tf_speechbubble, this.eventVO.eventId);
      this.component_jackpot ||= new __dep_export_CastleLuckyWheelJackpotComponent.CastleLuckyWheelJackpotComponent(this.dialogDisp.component_rewards, this.eventVO);
      if (!this.component_LuckyWheel) {
        this.component_LuckyWheel = new this.mediatorClass(this.dialogDisp.component_wheels, this.eventVO.eventId);
        this.component_LuckyWheel.maxSpeedReachedCallback = this.bindFunction(this.wheelHasReachedMaxSpeed);
        this.component_LuckyWheel.startBreakingCallback = this.bindFunction(this.wheelStartsSlowing);
        this.component_LuckyWheel.wheelStoppedCallback = this.bindFunction(this.wheelStopped);
        this.component_LuckyWheel.awardHasBeenAwardedCallback = this.bindFunction(this.awardHasBeenAwarded);
      }
      this._btnSpin ||= this.dialogDisp.component_spin.btn_spin.basicButton = this.component_spin.spinButton;
    }
  };
  Object.defineProperty(CastleBasicLuckyWheelDialog.prototype, "mediatorClass", {
    get: function () {
      return __dep_export_CastleLuckyWheelMediator.CastleLuckyWheelMediator;
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicLuckyWheelDialog.prototype.initProgressCircle = function () {
    this._dottedProgressCircleComponent = new __dep_export_CircularItemDistributor.CircularItemDistributor(this.dialogDisp.component_wheels.container_dots);
    var __s13local0 = __dep_export_SomeDistributableItem.SomeDistributableItem;
    var __s13local1 = new __dep_export_CircularItemDistributorProperties.CircularItemDistributorProperties(__s13local0, 72, "LuckyWheelProgressDot", 172, 1, 0.01);
    this._dottedProgressCircleComponent.init(__s13local1);
  };
  CastleBasicLuckyWheelDialog.prototype.showLoaded = function (__s15param0 = null) {
    this.initEventDependentComponents();
    __s1param0.prototype.showLoaded.call(this, __s15param0);
    if (this._playerID != __dep_export_CastleModel.CastleModel.userData.playerID) {
      this._playerID = __dep_export_CastleModel.CastleModel.userData.playerID;
      if (this.component_LuckyWheel) {
        this.component_LuckyWheel.clearReward();
      }
    }
    this.initDisplayedCurrencies();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(this.eventVO.eventId));
    var __s15local0 = this.eventVO.scoreEventVO.pointThresholds.concat(this.eventVO.scoreEventVO.topX);
    this.component_scoreBar = new __dep_export_CastleLuckyWheelScoreBar.CastleLuckyWheelScoreBar(this.dialogDisp.component_scoreBar, new __dep_export_CastleScoreEventScoreBarProperties.CastleScoreEventScoreBarProperties(this.eventVO.scoreEventVO.rewardLists, this.eventVO.textIDString, __s15local0, this.eventVO.levelLabels), this.eventVO);
    this.dialogDisp.component_level.mc_overlay.alpha = 0;
    this.updateSpeechbubbleAfterModeChange();
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.setSpinButtonState();
    this.onTimerTick();
    this.updateModeDependentVisuals();
    this.updateTotalTicketCount();
    this.updatePreviewTitle();
    this.updateWinClassAndProgress();
    this.updateStorageText();
    this.component_jackpot.startDelayedAutoSwitch();
    this.changeBtnsStatus(true);
    this.enableBasicButton(this.dialogDisp.btn_close.basicButton, true);
    this.component_LuckyWheel.show();
  };
  CastleBasicLuckyWheelDialog.prototype.initDisplayedCurrencies = function () {
    this._currentCoinsAmount = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.c1Amount);
    this._currentRubiesAmount = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.c2Amount);
    this._nextCoinsAmount = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.c1Amount);
    this._nextRubiesAmount = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.c2Amount);
  };
  CastleBasicLuckyWheelDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrencyUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    if (this.luckyWheelData) {
      this.luckyWheelData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_MODE_CHANGED, this.bindFunction(this.onModeChange));
      this.luckyWheelData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_AWARDED, this.bindFunction(this.onRewardReceived));
      this.luckyWheelData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_BOUGHT_JACKPOT, this.bindFunction(this.onBoughtJackpot));
      this.luckyWheelData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_WINCLASS_CHANGED, this.bindFunction(this.onWinClassBought));
    }
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    if (this.component_spin) {
      this.component_spin.addEventListenerOnShow();
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onInventorySpace = function (__s25param0) {
    this.updateStorageText();
  };
  CastleBasicLuckyWheelDialog.prototype.updateStorageText = function () {
    this.setStorageBar(this.dialogDisp.mc_storageSpace.equipmentBar, __dep_export_CastleModel.CastleModel.equipData.filledInventorySpace, __dep_export_CastleModel.CastleModel.equipData.playerTotalInventorySpace);
    this.setStorageBar(this.dialogDisp.mc_storageSpaceGem.gemBar, __dep_export_CastleModel.CastleModel.gemData.filledInventorySpace, __dep_export_CastleModel.CastleModel.gemData.playerTotalInventorySpace);
    this.dialogDisp.mc_storageSpace.toolTipText = __dep_exact_92d05af59ee2ff30_3.Localize.text("dialog_equipmentSpace_tooltip") + "\n" + __dep_exact_92d05af59ee2ff30_3.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__dep_export_CastleModel.CastleModel.equipData.filledInventorySpace, __dep_export_CastleModel.CastleModel.equipData.playerTotalInventorySpace]);
    this.dialogDisp.mc_storageSpaceGem.toolTipText = __dep_exact_92d05af59ee2ff30_3.Localize.text("dialog_gemSpace_tooltip") + "\n" + __dep_exact_92d05af59ee2ff30_3.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__dep_export_CastleModel.CastleModel.gemData.filledInventorySpace, __dep_export_CastleModel.CastleModel.gemData.playerTotalInventorySpace]);
  };
  CastleBasicLuckyWheelDialog.prototype.setStorageBar = function (__s29param0, __s29param1, __s29param2) {
    var __s29local0 = Math.min(__s29param1 / __s29param2, 1);
    __s29param0.scaleX = __s29local0;
    var __s29local1 = new __dep_exact_81dacdf05bd32292_1.ColorTransform();
    __s29local1.color = __s29local0 == 1 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED : __s29local0 >= 0.8 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_YELLOW : __dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_GREEN;
    __s29param0.transform.colorTransform = __s29local1;
  };
  CastleBasicLuckyWheelDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrencyUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    if (this.luckyWheelData) {
      this.luckyWheelData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_MODE_CHANGED, this.bindFunction(this.onModeChange));
      this.luckyWheelData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_AWARDED, this.bindFunction(this.onRewardReceived));
      this.luckyWheelData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_BOUGHT_JACKPOT, this.bindFunction(this.onBoughtJackpot));
      this.luckyWheelData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_WINCLASS_CHANGED, this.bindFunction(this.onWinClassBought));
    }
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    if (this.component_spin) {
      this.component_spin.removeEventListenersOnHide();
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onBoughtJackpot = function (__s35param0) {
    this.changeBtnsStatus(false);
    this.enableBasicButton(this.dialogDisp.btn_close.basicButton, false);
    this.component_LuckyWheel.changeWheel(__dep_export_CastleLuckyWheelMediator.CastleLuckyWheelMediator.All_JACKPOT_WHEEL);
    this.component_LuckyWheel.spinWheel();
  };
  CastleBasicLuckyWheelDialog.prototype.onWinClassBought = function (__s37param0) {
    this.updateWinClassAndProgress();
    this.updateProgressBars();
  };
  CastleBasicLuckyWheelDialog.prototype.updateSpeechbubbleAfterModeChange = function () {
    if (this.eventVO.isProMode && !this.eventVO.hasVisitedProMode) {
      this.component_speechbubble.state = __dep_export_CastleLuckyWheelSpeechbubbleComponent.CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_PRO_MODE_FIRST_VISIT;
    } else if (this.eventVO.isProMode || !this.eventVO.isFirstVisitToLuckyWheel && !this.eventVO.hasFreeSpin) {
      this.component_speechbubble.state = __dep_export_CastleLuckyWheelSpeechbubbleComponent.CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_REGULAR;
    } else {
      this.component_speechbubble.state = __dep_export_CastleLuckyWheelSpeechbubbleComponent.CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_FIRST_VISIT;
    }
  };
  CastleBasicLuckyWheelDialog.prototype.setSpinButtonState = function () {
    if (!this.component_LuckyWheel.wheelIsTurning) {
      var __s44local0 = false;
      if (this.luckyProperties && this.eventVO) {
        __s44local0 = this.eventVO.hasFreeSpin;
      }
      var __s44local1 = __dep_exact_f855840627e6e145.int(this.eventVO.ticketCost);
      var __s44local2 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.currencyID) >= __s44local1;
      if (__s44local0 && !this.eventVO.isProMode) {
        this._btnSpin.state = __dep_export_CastleLuckyWheelSpinButton.CastleLuckyWheelSpinButton.STATE_FREE_SPIN;
      } else {
        this._btnSpin.state = __s44local2 ? __dep_export_CastleLuckyWheelSpinButton.CastleLuckyWheelSpinButton.STATE_START_SPIN : __dep_export_CastleLuckyWheelSpinButton.CastleLuckyWheelSpinButton.STATE_NOT_ENOUGH_TICKETS;
      }
    }
  };
  CastleBasicLuckyWheelDialog.prototype.hideLoaded = function (__s50param0 = null) {
    this.component_jackpot.resetPosition();
    this.component_jackpot.dispose();
    this.component_LuckyWheel.hide();
    if (this.component_scoreBar) {
      this.component_scoreBar.destroy();
    }
    __s1param0.prototype.hideLoaded.call(this, __s50param0);
  };
  CastleBasicLuckyWheelDialog.prototype.onRewardReceived = function (__s53param0) {
    if (!this.eventVO.rewardIsTickets) {
      this.updateTotalTicketCount();
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onModeChange = function (__s56param0) {
    this.component_jackpot.update();
    this.component_jackpot.resetPosition();
    this.component_jackpot.startDelayedAutoSwitch();
    this.component_jackpot.changePreviewLevel(0);
    this.updateModeDependentVisuals();
    this.changeBtnsStatus(true);
    this.updateSpeechbubbleAfterModeChange();
  };
  CastleBasicLuckyWheelDialog.prototype.onCurrencyUpdate = function (__s58param0) {
    var __s58local0 = __dep_export_CastleModel.CastleModel.currencyData.c1Amount;
    var __s58local1 = __dep_export_CastleModel.CastleModel.currencyData.c2Amount;
    if ((this._currentRubiesAmount < __s58local1 || this._currentCoinsAmount < __s58local0) && (this._jackPotBought || this.component_LuckyWheel.wheelIsTurning)) {
      var __s58local2 = {
        C1: this._currentCoinsAmount,
        C2: this._currentRubiesAmount
      };
      this.updateCurrency(__s58local2);
    } else {
      this._currentCoinsAmount = __dep_exact_f855840627e6e145.int(__s58local0);
      this._currentRubiesAmount = __dep_exact_f855840627e6e145.int(__s58local1);
    }
    this._nextCoinsAmount = __dep_exact_f855840627e6e145.int(__s58local0);
    this._nextRubiesAmount = __dep_exact_f855840627e6e145.int(__s58local1);
  };
  CastleBasicLuckyWheelDialog.prototype.updateCurrency = function (__s62param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrencyUpdate));
    var __s62local0 = __s62param0 || {
      C1: this._nextCoinsAmount,
      C2: this._nextRubiesAmount
    };
    __dep_export_CastleModel.CastleModel.currencyData.parseGCU(__s62local0);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrencyUpdate));
    this._currentCoinsAmount = this._nextCoinsAmount;
    this._currentRubiesAmount = this._nextRubiesAmount;
    this._jackPotBought = false;
  };
  CastleBasicLuckyWheelDialog.prototype.onTicketUpdate = function (__s64param0) {
    var __s64local0 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.currencyID);
    if (this.component_LuckyWheel.wheelIsTurning) {
      if (this.component_LuckyWheel.wheelIsTurning && this._currentTicketCount > __s64local0) {
        this.updateTotalTicketCount(false);
      } else {
        this.updateTotalTicketCount(true);
      }
    } else {
      this.updateTotalTicketCount(false);
    }
    this.updateTicketCostsForSpin();
  };
  CastleBasicLuckyWheelDialog.prototype.updateTotalTicketCount = function (__s70param0 = false) {
    if (!!this._firstTicketCountUpdateDuringThisSpin || !__s70param0) {
      this._firstTicketCountUpdateDuringThisSpin = false;
      if (__s70param0) {
        if (!this.eventVO.hasFreeSpin || !!this.eventVO.isProMode) {
          this._currentTicketCount -= __dep_exact_f855840627e6e145.int(this.eventVO.ticketCost);
          this._currentTicketCount = this._currentTicketCount >= 0 ? this._currentTicketCount : 0;
        }
      } else {
        this._currentTicketCount = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.currencyID));
      }
      this._tfTickets.textContentVO.numberValue = this._currentTicketCount;
      this.setSpinButtonState();
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onTimerTick = function (__s76param0 = null) {
    var __s76local0 = __dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_duration.tf_remainingTime, __s76local0);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_duration, __s76local0);
    if (__s76local0 < __dep_export_LuckyWheelData.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN) {
      this.enableBasicButton(this._btnSpin, false);
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onRemoveSpecialEvent = function (__s79param0) {
    if (__s79param0.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onClick = function (__s82param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s82param0.target)) {
      switch (__s82param0.target) {
        case this.dialogDisp.component_spin.btn_spin:
          this.onWheelAction();
          break;
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onWheelAction = function () {
    switch (this._btnSpin.state) {
      case __dep_export_CastleLuckyWheelSpinButton.CastleLuckyWheelSpinButton.STATE_FREE_SPIN:
      case __dep_export_CastleLuckyWheelSpinButton.CastleLuckyWheelSpinButton.STATE_START_SPIN:
        this._firstTicketCountUpdateDuringThisSpin = true;
        this._jackPotBought = false;
        this.changeBtnsStatus(false);
        this.enableBasicButton(this.dialogDisp.btn_close.basicButton, false);
        this.component_LuckyWheel.spinWheel();
        this.luckyWheelData.resetWinningCategory();
        this.component_LuckyWheel.displayShine(false);
        __dep_export_CastleLuckyWheelDelayCommandHelper.CastleLuckyWheelDelayCommandHelper.startCommandDelay();
        this.startSpin();
        break;
      case __dep_export_CastleLuckyWheelSpinButton.CastleLuckyWheelSpinButton.STATE_STOP_SPIN:
        if (this.luckyWheelData.winningCategoryReceived) {
          this.component_LuckyWheel.stopWheel();
        } else {
          this.luckyWheelData.SGN_LUCKY_CATEGORY_RECEIVED.add(this.bindFunction(this.onWCReceived));
        }
        break;
      case __dep_export_CastleLuckyWheelSpinButton.CastleLuckyWheelSpinButton.STATE_NOT_ENOUGH_TICKETS:
        this.handleNotEnoughTickets();
    }
  };
  CastleBasicLuckyWheelDialog.prototype.handleNotEnoughTickets = function () {};
  CastleBasicLuckyWheelDialog.prototype.startSpin = function () {};
  CastleBasicLuckyWheelDialog.prototype.updateWinClassAndProgress = function () {
    this.eventVO.isAtMaxClass;
    this.textFieldManager.registerTextField(this.dialogDisp.component_level.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.eventVO.currentWinClass));
    this.updatePreviewTitle();
    this.component_jackpot.changePreviewLevel(0);
    this.setupFeatureBtns();
  };
  CastleBasicLuckyWheelDialog.prototype.fadeBack = function () {
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.dialogDisp.component_level.mc_overlay, 0.1, {
      alpha: 1
    }, {
      alpha: 0
    });
  };
  CastleBasicLuckyWheelDialog.prototype.updatePreviewTitle = function () {
    this.component_jackpot.updateTitle();
  };
  CastleBasicLuckyWheelDialog.prototype.enableBasicButton = function (__s101param0, __s101param1) {
    if (!__s101param1) {
      __s101param0.resetHoverState();
    }
    if (__s101param0 == this._btnSpin && __s101param1) {
      if (this.eventVO.remainingEventTimeInSeconds > __dep_export_LuckyWheelData.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN || this.component_LuckyWheel.wheelIsTurning) {
        __s101param0.enableButton = __s101param1;
        __s101param0.disp.mouseEnabled = __s101param1;
      }
    } else {
      __s101param0.enableButton = __s101param1;
      __s101param0.disp.mouseEnabled = __s101param1;
    }
  };
  CastleBasicLuckyWheelDialog.prototype.awardHasBeenAwarded = function () {
    this.updateJackpotDisplay();
    this.updateCurrency();
  };
  CastleBasicLuckyWheelDialog.prototype.wheelHasReachedMaxSpeed = function () {
    this._btnSpin.state = __dep_export_CastleLuckyWheelSpinButton.CastleLuckyWheelSpinButton.STATE_STOP_SPIN;
    if (this.component_spin.isAutoSpin) {
      if (this.luckyWheelData.winningCategoryReceived) {
        this.component_LuckyWheel.stopWheel();
      } else {
        this.luckyWheelData.SGN_LUCKY_CATEGORY_RECEIVED.add(this.bindFunction(this.onWCReceived));
      }
    } else {
      this.enableBasicButton(this._btnSpin, true);
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onWCReceived = function () {
    this.component_LuckyWheel.stopWheel();
    this.luckyWheelData.SGN_LUCKY_CATEGORY_RECEIVED.remove(this.bindFunction(this.onWCReceived));
  };
  CastleBasicLuckyWheelDialog.prototype.wheelStartsSlowing = function () {
    this.enableBasicButton(this._btnSpin, false);
  };
  CastleBasicLuckyWheelDialog.prototype.wheelStopped = function () {
    this._firstTicketCountUpdateDuringThisSpin = true;
    this.updateTotalTicketCount();
    this.updatePreviewSets();
    this.updateWinClassAndProgress();
    this.setSpinButtonState();
    this.updateProgressBars();
    this.updateTicketCostsForSpin();
    if (!this.component_LuckyWheel.hasWonJackpot) {
      this.updateJackpotDisplay();
      this.updateCurrency();
    }
    if (!this.eventVO.hasLevelUp) {
      this.component_speechbubble.state = __dep_export_CastleLuckyWheelSpeechbubbleComponent.CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_WIN;
    }
    this.changeBtnsStatus(true);
    this.enableBasicButton(this.dialogDisp.btn_close.basicButton, true);
  };
  CastleBasicLuckyWheelDialog.prototype.setupFeatureBtns = function () {};
  CastleBasicLuckyWheelDialog.prototype.updateModeDependentVisuals = function () {
    this.updateBG();
    this.updateJackpotDisplay();
    this.updatePreviewSets();
    this.setSpinButtonState();
    this.updateTicketCostsForSpin();
    this.updateProgressBars();
  };
  CastleBasicLuckyWheelDialog.prototype.updateBG = function () {
    this.dialogDisp.spin_btn_background.spin_component_background_normal.visible = !this.eventVO.isProMode;
    this.dialogDisp.spin_btn_background.spin_component_background_pro.visible = this.eventVO.isProMode;
  };
  CastleBasicLuckyWheelDialog.prototype.updateTicketCostsForSpin = function () {
    var __s129local0 = 0;
    __s129local0 = this.eventVO.hasFreeSpin && !this.eventVO.isProMode ? 0 : this.eventVO.ticketCost;
    this.component_spin.updateTicketCount(__s129local0);
  };
  CastleBasicLuckyWheelDialog.prototype.updateProgressBars = function () {
    this.updateWinClassProgressBar();
    this.updatePointEventScoreBar();
    this.updateLevel();
  };
  CastleBasicLuckyWheelDialog.prototype.updateWinClassProgressBar = function () {
    var __s133local0 = 0;
    var __s133local1 = this.eventVO.winClassProgress * 100;
    var __s133local2 = __dep_exact_f855840627e6e145.int(this.eventVO.getNeededSpinsForClass(this.eventVO.currentWinClass) - this.eventVO.numSpinsDoneInCurrentClass);
    if (this.eventVO.isAtMaxClass) {
      __s133local0 = 0;
      __s133local1 = 100;
    }
    if (this.eventVO.isProMode) {
      __s133local2 = Math.ceil(__s133local2 / __dep_exact_26a421b704832cff.LuckyWheelConst.WINNING_CLASS_PROGRESS_PROMODE);
    }
    this._dottedProgressCircleComponent.highlightItems(__s133local0, __s133local1, __dep_export_SomeDistributableItem.SomeDistributableItem.FRAME_PROGRESS, this.getProgressTooltips(__s133local2));
    __s133local0 = __s133local1;
    __s133local1 = Math.min(this.eventVO.nextWinClassProgress * 100, 100);
    this._dottedProgressCircleComponent.highlightItems(__s133local0, __s133local1, __dep_export_SomeDistributableItem.SomeDistributableItem.FRAME_ANOUNCED_PROGRESS, this.getProgressTooltips(__s133local2));
    if (__s133local1 < 100) {
      __s133local0 = __s133local1;
      __s133local1 = 100;
      this._dottedProgressCircleComponent.highlightItems(__s133local0, __s133local1, __dep_export_SomeDistributableItem.SomeDistributableItem.FRAME_DEFAULT, this.getProgressTooltips(__s133local2));
    }
  };
  CastleBasicLuckyWheelDialog.prototype.updatePointEventScoreBar = function () {
    if (this.component_scoreBar && this.eventVO) {
      var __s138local0 = [];
      for (var __s138local1 = 0; __s138local1 < this.eventVO.scoreEventVO.pointThresholds.length; __s138local1++) {
        __s138local0.push(this.luckyWheelData.getTotalNeededSpinsForClass(this.eventVO.scoreEventVO.pointThresholds[__s138local1]));
      }
      this.component_scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.eventVO.scoreEventVO.ownPoints, this.eventVO.scoreEventVO.ownRank, __s138local0, this.eventVO.scoreEventVO.topX));
    }
    this.updateScoreBarText();
    if (this.eventVO.scoreEventVO.ownRank > 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.eventVO.scoreEventVO.ownRank));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO("-"));
    }
  };
  CastleBasicLuckyWheelDialog.prototype.updateScoreBarText = function () {};
  CastleBasicLuckyWheelDialog.prototype.updateLevel = function () {
    if (this.eventVO.hasLevelUp) {
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.dialogDisp.component_level.mc_overlay, 0.5, {
        alpha: 0
      }, {
        alpha: 1,
        onComplete: this.bindFunction(this.fadeBack)
      });
      this.component_speechbubble.state = __dep_export_CastleLuckyWheelSpeechbubbleComponent.CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_LEVEL_UP;
    }
  };
  CastleBasicLuckyWheelDialog.prototype.getProgressTooltips = function (__s150param0) {
    if (__s150param0 <= 30 && __s150param0 > 0) {
      if (__s150param0 != 1) {
        return __dep_exact_92d05af59ee2ff30_3.Localize.text("dialog_luckyWheel_progressSpins_tooltip_plural", [__s150param0]);
      } else {
        return "dialog_luckyWheel_progressSpins_tooltip_singular";
      }
    } else if (this.eventVO && this.eventVO.isAtMaxClass) {
      return "dialog_luckyWheel_progressSpins_tooltip_max";
    } else {
      return "dialog_luckyWheel_progress_tooltip";
    }
  };
  CastleBasicLuckyWheelDialog.prototype.updatePreviewSets = function () {
    this.component_jackpot.update();
  };
  CastleBasicLuckyWheelDialog.prototype.updateJackpotDisplay = function () {
    this.component_jackpot.update();
  };
  Object.defineProperty(CastleBasicLuckyWheelDialog.prototype, "luckyProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicLuckyWheelDialog.prototype, "eventVO", {
    get: function () {
      if (this.luckyProperties) {
        return this.luckyProperties.eventVO;
      } else {
        return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_LUCKYWHEEL);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicLuckyWheelDialog.prototype.destroy = function () {
    if (this.component_LuckyWheel) {
      this.component_LuckyWheel.destroy();
    }
    __s1param0.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleBasicLuckyWheelDialog.prototype, "luckyWheelData", {
    get: function () {
      if (this.eventVO) {
        return this.eventVO.luckyWheelData;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicLuckyWheelDialog.prototype.changeBtnsStatus = function (__s174param0) {
    this.enableBasicButton(this._btnSpin, __s174param0);
  };
  return CastleBasicLuckyWheelDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBasicLuckyWheelDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
