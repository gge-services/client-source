Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_CastleSetTimeDialogProperties = require("gge-module:export_CastleSetTimeDialogProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC1DialogProperties = require("gge-module:export_CastleNoMoneyC1DialogProperties");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ACastlePostActionDialog(__s3param0 = null) {
    var __s3local0 = this;
    __s3local0.MAX_BUTTON_AMOUNT = 4;
    __s3local0._currentBoostIndex = 0;
    __s3local0.isTravelTimePreview = false;
    __s3local0.isHorseDialog = false;
    __s3local0._slowDownArrivalTime = null;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0 || ACastlePostActionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastlePostActionDialog, __s1param0);
  ACastlePostActionDialog.prototype.initLoaded = function (__s5param0 = null) {
    var __s5local0 = new Array();
    if (this.dialogDisp.btn_close) {
      __s5local0.push(this.dialogDisp.btn_close);
    }
    if (this.dialogDisp.btn_cancel) {
      __s5local0.push(this.dialogDisp.btn_cancel);
    }
    if (this.dialogDisp.btn_back) {
      __s5local0.push(this.dialogDisp.btn_back);
    }
    if (this.dialogDisp.btn_help) {
      __s5local0.push(this.dialogDisp.btn_help);
    }
    if (this.dialogDisp.btn_ok) {
      __s5local0.push(this.dialogDisp.btn_ok);
    }
    if (this.dialogDisp.mc_slowdown) {
      __s5local0.push(this.dialogDisp.mc_slowdown);
    }
    this.initBasicButtons(__s5local0);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  ACastlePostActionDialog.prototype.showLoaded = function (__s13param0 = null) {
    this.isTravelTimePreview = false;
    this._slowDownArrivalTime = null;
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTravelTimeAndCosts));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_postAttack_title")).verticalAlign = __dep_exact_9e901e8e2483a22f_2.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrivel, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_postAttack_arrival")).autoFitToBounds = true;
    this.dialogDisp.mc_traveldistance.toolTipText = "distance";
    this.dialogDisp.mc_traveltime.toolTipText = "travelTime";
    this.dialogDisp.mc_travelcost.toolTipText = "dialog_travelPlanning_supportC1Cost_total_tooltip";
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    this.initPostAttackHorseComponents();
    this.initPostAttackSlowDownComponents();
    this.itxt_date ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_date, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.itxt_time ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.i_traveldist_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_traveldistance.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0, true, 1));
    this.i_travelcost_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_travelcost.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.i_traveltime_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_traveltime.txt_value, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrenciesUpdated));
    this._currentBoostIndex = -1;
    if (this.i_traveldist_txt_value) {
      this.i_traveldist_txt_value.textContentVO.numberValue = this.distance;
    }
    if (this.i_travelcost_txt_value) {
      this.i_travelcost_txt_value.textContentVO.numberValue = this.getTotalCostsC1();
    }
    this.setArrivalDateAndTime(this.getTotalTravelTime(), this.selectedHorse);
    this.isHorseDialog = this.dialogDisp.btn_horse0 != null;
    if (this.isHorseDialog && !this.horseCheckboxes) {
      this.horseCheckboxes = new Array();
      for (var __s13local0 = 0; __s13local0 < this.MAX_BUTTON_AMOUNT; __s13local0++) {
        var __s13local1 = this.dialogDisp["btn_horse" + __s13local0];
        if (__s13local1) {
          this.horseCheckboxes.push(new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(__s13local1, true));
          __s13local1.mouseEnabled = false;
        }
      }
    }
    if (this.isHorseDialog) {
      this.initBoosterButtons();
      this.dialogDisp.mc_slowdowncost.visible = false;
    }
    this.updateFTT();
    __s1param0.prototype.showLoaded.call(this, __s13param0);
  };
  ACastlePostActionDialog.prototype.initPostAttackHorseComponents = function () {
    if (this.dialogDisp.btn_help) {
      this.dialogDisp.btn_help.toolTipText = "generic_help";
    }
    if (this.dialogDisp.mc_pegasusTravelTicket) {
      this.dialogDisp.mc_pegasusTravelTicket.mouseChildren = false;
      this.dialogDisp.mc_pegasusTravelTicket.toolTipText = "fastTravelTickets_tooltip";
      var __s22local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_PEGASUS_TICKET));
      this.i_pegasusTravelTickets_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_pegasusTravelTicket.txt_fastTravelAmount, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s22local0));
    }
  };
  ACastlePostActionDialog.prototype.initPostAttackSlowDownComponents = function () {
    if (this.dialogDisp.mc_slowdowncost) {
      this.dialogDisp.mc_slowdowncost.toolTipText = "dialog_travelPlanning_supportC2Cost_total_tooltip";
      this.i_travelcostC2_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_slowdowncost.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_exact_26a421b704832cff_1.TravelConst.SLOWDOWN_C2_COSTS));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_slowdown.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_postAttack_slowDown"));
      this.dialogDisp.mc_slowdown.visible = !__dep_export_SpecialServerHelper.SpecialServerHelper.isCrossplay();
    }
  };
  ACastlePostActionDialog.prototype.onSpecialCurrenciesUpdated = function (__s29param0) {
    this.updateFTT();
  };
  ACastlePostActionDialog.prototype.updateFTT = function () {
    if (this.i_pegasusTravelTickets_txt_value) {
      var __s31local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_PEGASUS_TICKET));
      this.i_pegasusTravelTickets_txt_value.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s31local0);
    }
  };
  ACastlePostActionDialog.prototype.hideLoaded = function (__s34param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s34param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTravelTimeAndCosts));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrenciesUpdated));
    this.resetBoosterValues();
  };
  ACastlePostActionDialog.prototype.resetBoosterValues = function () {
    this._currentBoostIndex = -1;
  };
  ACastlePostActionDialog.prototype.setArrivalDateAndTime = function (__s38param0, __s38param1) {
    var __s38local0 = new Date();
    __s38local0.setTime(__s38local0.getTime() + __s38param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this.i_traveltime_txt_value.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getShortTimeStringBySeconds(__s38param0);
    this.itxt_date.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getDateStringFromDate(__s38local0);
    this.itxt_time.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30_1.Localize.datetime(__s38local0, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT);
    if (this.dialogDisp.mc_slowdown) {
      var __s38local1 = this.getOriginalTravelTime() < __dep_exact_26a421b704832cff_1.TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_slowdown, __s38local1);
      this.dialogDisp.mc_slowdown.toolTipText = __s38local1 ? "" : "dialog_slowArmy_time_maxTime_tooltip";
    }
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.i_traveltime_txt_value, this.isTravelTimeSubscriptionBoosted, 15, new __s0local0(-3, 0));
    var __s38local2 = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    if (this.isSlowedDown() && !this.isTravelTimePreview) {
      __s38local2 = __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    } else if (__s38param1) {
      __s38local2 = __dep_export_ClientConstColor.ClientConstColor.GENERIC_DARK_GREEN;
    } else if (this.isTravelTimeSubscriptionBoosted) {
      __s38local2 = __dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION;
    }
    this.i_traveltime_txt_value.color = __s38local2;
  };
  ACastlePostActionDialog.prototype.initBoosterButtons = function () {
    this.initCleanState();
    if (this.unlockedHorses) {
      for (var __s44local0 = 0; __s44local0 < this.unlockedHorses.length; __s44local0++) {
        this.initSingleButton(__s44local0);
      }
    }
  };
  ACastlePostActionDialog.prototype.initSingleButton = function (__s49param0) {
    this.initLockedLayer(__s49param0);
    this.tooltipVisibility(__s49param0);
    var __s49local0 = this.dialogDisp["btn_horse" + __s49param0];
    __s49local0.txt_bonus.defaultCacheScale = 2;
    __s49local0.txt_cost.defaultCacheScale = 2;
    __s49local0.mc_tooltip.txt_name.defaultCacheScale = 2;
    __s49local0.mc_tooltip.txt_bonus.defaultCacheScale = 2;
    var __s49local1 = this.calculateTooltip(__s49param0);
    this.textFieldManager.registerTextField(__s49local0.mc_tooltip.txt_name, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__s49local1));
    var __s49local2 = this.calculatePercentBonus(__s49param0);
    this.textFieldManager.registerTextField(__s49local0.mc_tooltip.txt_bonus, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("travelSpeedBonusPerField_Dummy", [__s49local2]));
    this.textFieldManager.registerTextField(__s49local0.txt_bonus, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s49local2]));
    this.setHorseCurrencyIconForSingleItem(__s49param0, __s49local0, this.unlockedHorses[__s49param0].isPayedWithPegasusTickets);
    this.dialogDisp["btn_horse" + __s49param0].mouseEnabled = !this.dialogDisp["mc_locked" + __s49param0].visible;
    __s49local0.toolTipText = null;
    __s49local0.mc_tooltip.visible = false;
  };
  ACastlePostActionDialog.prototype.tooltipVisibility = function (__s51param0) {
    var __s51local0 = this.dialogDisp["btn_horse" + __s51param0];
    var __s51local1 = this.dialogDisp["mc_locked" + __s51param0];
    __s51local0.mc_tooltip.visible = !__s51local1.visible;
  };
  ACastlePostActionDialog.prototype.initLockedLayer = function (__s53param0) {
    var __s53local0 = this.unlockedHorses[__s53param0].isPayedWithPegasusTickets;
    var __s53local1 = this.dialogDisp["mc_locked" + __s53param0];
    var __s53local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_PEGASUS_TICKET)) > 0;
    __s53local1.visible = !!__s53local0 && !__s53local2;
    var __s53local3 = __s53local1.toolTipText;
    if (__s53local0 && !__s53local2) {
      __s53local3 = this.shipsInsteadOfHorses ? "dialog_travelPlanning_notEnoughTickets_island" : "dialog_travelPlanning_notEnoughTickets";
    }
    __s53local1.toolTipText = __s53local3;
  };
  ACastlePostActionDialog.prototype.setHorseCurrencyIconForSingleItem = function (__s56param0, __s56param1, __s56param2) {
    if (__s56param0 > 0) {
      if (__s56param2) {
        this.textFieldManager.registerTextField(__s56param1.txt_cost, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_NOMINAL_ADD, [this.getCostForFastTravelTickets()]));
        __s56param1.mc_currency.gotoAndStop(4);
      } else {
        this.textFieldManager.registerTextField(__s56param1.txt_cost, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_NOMINAL_ADD, [this.getBoostCostC2(this.unlockedHorses[__s56param0])]));
        __s56param1.mc_currency.gotoAndStop(2);
      }
    } else {
      this.textFieldManager.registerTextField(__s56param1.txt_cost, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_NOMINAL_ADD, [this.getBoostCostC1(this.unlockedHorses[__s56param0])]));
      __s56param1.mc_currency.gotoAndStop(1);
    }
  };
  ACastlePostActionDialog.prototype.calculatePercentBonus = function (__s62param0) {
    var __s62local0 = this.getTravelTime(this.unlockedHorses[__s62param0]);
    var __s62local1 = this.normalTravelTime - __s62local0;
    return Math.floor(__s62local1 / this.normalTravelTime * 100);
  };
  ACastlePostActionDialog.prototype.calculateTooltip = function (__s64param0) {
    return (this.shipsInsteadOfHorses ? "eiland_ship" : "horse") + (__s64param0 + 1);
  };
  ACastlePostActionDialog.prototype.initCleanState = function () {
    var __s66local0 = __dep_exact_f855840627e6e145.int(this.shipsInsteadOfHorses ? __dep_export_ClientConstCastle.ClientConstCastle.HORSE_BOOSTER_COUNT : 0);
    for (var __s66local1 = 0; __s66local1 < __dep_export_ClientConstCastle.ClientConstCastle.HORSE_BOOSTER_COUNT; __s66local1++) {
      var __s66local2 = __s66local1 + 1 + __s66local0;
      var __s66local3 = this.dialogDisp["btn_horse" + __s66local1];
      var __s66local4 = this.dialogDisp["mc_locked" + __s66local1];
      this.textFieldManager.registerTextField(__s66local3.txt_bonus, new __dep_exact_92d05af59ee2ff30_4.TextVO("-"));
      this.textFieldManager.registerTextField(__s66local3.txt_cost, new __dep_exact_92d05af59ee2ff30_4.TextVO("-"));
      __s66local3.mc_horseIcon.gotoAndStop(__s66local2);
      __s66local4.parent.addChild(__s66local4);
      __s66local4.toolTipText = "noStable";
      __s66local4.visible = true;
      this.tooltipVisibility(__s66local1);
      var __s66local5 = __dep_exact_81dacdf05bd32292.castAs(this.horseCheckboxes[__s66local1], "CheckBoxButton");
      if (__s66local5) {
        __s66local5.isSelected = false;
      }
    }
  };
  ACastlePostActionDialog.prototype.tryToggleSelectedBoosterButton = function (__s71param0) {
    var __s71local0 = __s71param0.isSelected;
    if (!this.isSlowedDown() || __s71local0) {
      this.toggleSelectedBoosterButton(__s71param0);
      this._slowDownArrivalTime = null;
    } else {
      this.confirmRemoveSlowDown(__s71param0);
    }
  };
  ACastlePostActionDialog.prototype.confirmRemoveSlowDown = function (__s75param0) {
    var __s75local0 = this;
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("alert_cancelArmyDelay_header"), __dep_exact_92d05af59ee2ff30_1.Localize.text("alert_cancelArmyDelay_desc"), function () {
      __s75local0.toggleSelectedBoosterButton(__s75param0);
      __s75local0._slowDownArrivalTime = null;
    }));
  };
  ACastlePostActionDialog.prototype.toggleSelectedBoosterButton = function (__s79param0) {
    this._currentBoostIndex = -1;
    for (var __s79local0 = 0; __s79local0 < Math.min(this.unlockedHorses.length, this.MAX_BUTTON_AMOUNT); __s79local0++) {
      var __s79local1 = this.horseCheckboxes[__s79local0];
      if (__s79param0 == __s79local1) {
        var __s79local2 = !__s79local1.isSelected;
        if (__s79local2) {
          this._currentBoostIndex = __s79local0;
        }
        __s79local1.isSelected = __s79local2;
      } else {
        __s79local1.isSelected = false;
      }
    }
    this.setArrivalDateAndTime(this.getTotalTravelTime(), this.selectedHorse);
  };
  ACastlePostActionDialog.prototype.checkForHorsePayedWithPegasusTickets = function () {
    return !!this.selectedHorse && this.selectedHorse.isPayedWithPegasusTickets;
  };
  ACastlePostActionDialog.prototype.onClick = function (__s88param0) {
    __s1param0.prototype.onClick.call(this, __s88param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s88param0.target)) {
      if (this.isHorseDialog && __s88param0.target.name && __s88param0.target.name.indexOf("btn_horse") != -1) {
        var __s88local0 = __s88param0.target.name;
        __s88local0 = __s88local0.replace("btn_horse", "");
        this.tryToggleSelectedBoosterButton(this.horseCheckboxes[parseInt(__s88local0)]);
      }
      switch (__s88param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_back:
          if (__dep_export_CastleModel.CastleModel.userData.userLevel > __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.PLAYERLEVEL_AT_FIRST_DUNGEONATTACK) {
            this.hide();
          }
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text(this.getHelperTextID()));
          break;
        case this.dialogDisp.btn_ok:
          if (this.checkMoney()) {
            this.startTravelAction();
          }
          break;
        case this.dialogDisp.mc_slowdown:
          var __s88local1 = new __dep_export_CastleSetTimeDialogProperties.CastleSetTimeDialogProperties(this.getOrCreateSlowDownArrivalTime().getTime(), this.getOriginalTravelTime(), __dep_exact_26a421b704832cff_1.TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS, this.bindFunction(this.onSlowDownSelected));
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMovementSetTimeDialog.CastleMovementSetTimeDialog, __s88local1);
      }
    }
  };
  ACastlePostActionDialog.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
  };
  ACastlePostActionDialog.prototype.onSlowDownSelected = function (__s97param0) {
    this._slowDownArrivalTime ||= new Date();
    this._slowDownArrivalTime.setTime(__s97param0);
    if (this.normalTravelTime < this.getTotalTravelTime()) {
      this.toggleSelectedBoosterButton(null);
    }
    this.updateTravelTimeAndCosts();
  };
  ACastlePostActionDialog.prototype.getOrCreateSlowDownArrivalTime = function () {
    if (this.isSlowedDown()) {
      return this._slowDownArrivalTime;
    } else {
      return this.getOriginalArrivalTime();
    }
  };
  ACastlePostActionDialog.prototype.updateC1Costs = function () {
    var __s104local0 = this.getTotalCostsC1();
    var __s104local1 = __dep_export_CastleModel.CastleModel.currencyData.c1Amount >= __s104local0;
    this.i_travelcost_txt_value.textContentVO.numberValue = __s104local0;
    this.i_travelcost_txt_value.color = __s104local1 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
  };
  ACastlePostActionDialog.prototype.updateC2Costs = function () {
    var __s106local0 = this.getTotalCostsC2();
    var __s106local1 = __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __s106local0;
    this.dialogDisp.mc_slowdowncost.visible = __s106local0 > 0;
    this.i_travelcostC2_txt_value.textContentVO.numberValue = __s106local0;
    this.i_travelcostC2_txt_value.color = __s106local1 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
  };
  ACastlePostActionDialog.prototype.getTotalArrivalTime = function () {
    var __s108local0 = this.getOriginalArrivalTime();
    if (this._slowDownArrivalTime && this._slowDownArrivalTime.getTime() > __s108local0.getTime()) {
      return this._slowDownArrivalTime;
    } else {
      return __s108local0;
    }
  };
  ACastlePostActionDialog.prototype.getTotalTravelTime = function () {
    return __dep_exact_f855840627e6e145.int((this.getTotalArrivalTime().getTime() - new Date().getTime()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
  };
  ACastlePostActionDialog.prototype.getOriginalArrivalTime = function () {
    var __s114local0 = this.getTravelTime(this.selectedHorse) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    var __s114local1 = new Date();
    __s114local1.setTime(__s114local1.getTime() + __s114local0);
    return __s114local1;
  };
  ACastlePostActionDialog.prototype.getOriginalTravelTime = function () {
    return __dep_exact_f855840627e6e145.int(this.getTravelTime(this.selectedHorse));
  };
  ACastlePostActionDialog.prototype.getSlowDownOffsetInSeconds = function () {
    if (this._slowDownArrivalTime) {
      return __dep_exact_f855840627e6e145.int(Math.max(0, (this._slowDownArrivalTime.getTime() - this.getOriginalArrivalTime().getTime()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC));
    } else {
      return 0;
    }
  };
  ACastlePostActionDialog.prototype.isSlowedDown = function () {
    return this.getSlowDownOffsetInSeconds() > 0;
  };
  ACastlePostActionDialog.prototype.getHelperTextID = function () {
    return "help_travelPlanning";
  };
  ACastlePostActionDialog.prototype.updateTravelTimeAndCosts = function (__s126param0 = null) {
    this.checkClearSlowDown();
    this.updateTravelTime();
    this.updateC1Costs();
    if (this.dialogDisp.mc_slowdowncost) {
      this.updateC2Costs();
    }
  };
  ACastlePostActionDialog.prototype.checkClearSlowDown = function () {
    if (this._slowDownArrivalTime && this._slowDownArrivalTime.getTime() <= this.getOriginalArrivalTime().getTime()) {
      this._slowDownArrivalTime = null;
    }
  };
  ACastlePostActionDialog.prototype.updateTravelTime = function () {
    if (!this.isTravelTimePreview) {
      this.setArrivalDateAndTime(this.getTotalTravelTime(), this.selectedHorse);
    }
  };
  ACastlePostActionDialog.prototype.onMouseOut = function (__s135param0) {
    __s1param0.prototype.onMouseOut.call(this, __s135param0);
    this.isTravelTimePreview = false;
    this.updateTravelTime();
  };
  ACastlePostActionDialog.prototype.onMouseOver = function (__s137param0) {
    __s1param0.prototype.onMouseOver.call(this, __s137param0);
    if (this.isHorseDialog) {
      for (var __s137local0 = 0; __s137local0 < __dep_export_ClientConstCastle.ClientConstCastle.HORSE_BOOSTER_COUNT; __s137local0++) {
        if (__s137param0.target == this.dialogDisp["btn_horse" + __s137local0] && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s137param0.target)) {
          __s137param0.target.parent.addChild(__s137param0.target);
          __s137param0.target.mc_tooltip.visible = true;
          this.isTravelTimePreview = true;
          this.setArrivalDateAndTime(this.getTravelTime(this.unlockedHorses[__s137local0]), this.unlockedHorses[__s137local0]);
        } else {
          this.dialogDisp["btn_horse" + __s137local0].mc_tooltip.visible = false;
        }
      }
    }
  };
  ACastlePostActionDialog.prototype.getTravelTime = function (__s144param0 = null) {
    if (__s144param0) {
      return __dep_exact_f855840627e6e145.int(this.getBoostedTravelTime(this.getTravelBoost(__s144param0)));
    } else {
      return this.normalTravelTime;
    }
  };
  ACastlePostActionDialog.prototype.getTotalCostsC1 = function () {
    var __s148local0 = this.cost;
    if (this._currentBoostIndex >= 0) {
      __s148local0 += __dep_exact_f855840627e6e145.int(this.getBoostCostC1(this.selectedHorse));
    }
    return __s148local0;
  };
  ACastlePostActionDialog.prototype.getTotalCostsC2 = function () {
    var __s151local0 = 0;
    if (this._currentBoostIndex >= 0) {
      __s151local0 += __dep_exact_f855840627e6e145.int(this.getBoostCostC2(this.selectedHorse));
    }
    if (this.isSlowedDown()) {
      __s151local0 += __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.TravelConst.SLOWDOWN_C2_COSTS);
    }
    return __s151local0;
  };
  ACastlePostActionDialog.prototype.checkMoney = function () {
    return !!this.checkForHorsePayedWithPegasusTickets() || (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < this.getTotalCostsC2() ? (__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties()), false) : !(__dep_export_CastleModel.CastleModel.currencyData.c1Amount < this.getTotalCostsC1()) || (__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC1Dialog.CastleNoMoneyC1Dialog, new __dep_export_CastleNoMoneyC1DialogProperties.CastleNoMoneyC1DialogProperties()), false));
  };
  ACastlePostActionDialog.prototype.startTravelAction = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(ACastlePostActionDialog.prototype, "distance", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePostActionDialog.prototype, "cost", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePostActionDialog.prototype, "unlockedHorses", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePostActionDialog.prototype, "selectedHorse", {
    get: function () {
      if (this._currentBoostIndex >= 0) {
        return this.unlockedHorses[this._currentBoostIndex];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ACastlePostActionDialog.prototype.getTravelBoost = function (__s169param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ACastlePostActionDialog.prototype.getBoostCostC1 = function (__s171param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ACastlePostActionDialog.prototype.getBoostCostC2 = function (__s173param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ACastlePostActionDialog.prototype.getCostForFastTravelTickets = function () {
    return 1;
  };
  Object.defineProperty(ACastlePostActionDialog.prototype, "normalTravelTime", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  ACastlePostActionDialog.prototype.getBoostedTravelTime = function (__s179param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(ACastlePostActionDialog.prototype, "isTravelTimeSubscriptionBoosted", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePostActionDialog.prototype, "shipsInsteadOfHorses", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  ACastlePostActionDialog.prototype.hasEnoughEventTime = function (__s185param0) {
    return !this.isEventTimeRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION, __s185param0.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAMP) && !this.isEventTimeRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION, __s185param0.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAPITAL) && !this.isEventTimeRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION, __s185param0.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_TOWER) && !this.isEventTimeRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION, __s185param0.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_VILLAGE) && !this.isEventTimeRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, __s185param0.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_NOMAD_CAMP) && !this.isEventTimeRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, __s185param0.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP) && !this.isEventTimeRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, __s185param0.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALIEN_CAMP) && !this.isEventTimeRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, __s185param0.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_RED_ALIEN_CAMP) && !this.isEventTimeRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION, __s185param0.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_SAMURAI_CAMP) && !this.isEventTimeRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION, __s185param0.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP) && (__s185param0.kingdomID != __dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID || !(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID).resetTime < this.getTotalTravelTime())) && !this.isRandomDungeonEventRunningOut(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DUNGEON, __s185param0.absAreaPos) || (this.showNotEnoughTimeWarning(), false);
  };
  ACastlePostActionDialog.prototype.isEventTimeRunningOut = function (__s187param0, __s187param1) {
    if (__s187param1 && this.isEventActive(__s187param0)) {
      var __s187local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s187param0);
      return !!__s187local0 && __s187local0.remainingEventTimeInSeconds < this.getTotalTravelTime();
    }
    return false;
  };
  ACastlePostActionDialog.prototype.isEventActive = function (__s190param0) {
    return __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__s190param0);
  };
  ACastlePostActionDialog.prototype.isRandomDungeonEventRunningOut = function (__s192param0, __s192param1) {
    if (this.isEventActive(__s192param0)) {
      var __s192local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s192param0);
      if (__s192local0.targetAreaVO && __s192local0.targetAreaVO.absAreaPos.equals(__s192param1) && __s192local0.remainingEventTimeInSeconds < this.getTotalTravelTime()) {
        return true;
      }
    }
    return false;
  };
  ACastlePostActionDialog.prototype.showNotEnoughTimeWarning = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text(this.notEnoughTimeWarningHeader), __dep_exact_92d05af59ee2ff30_1.Localize.text(this.notEnoughTimeWarningCopy)));
  };
  Object.defineProperty(ACastlePostActionDialog.prototype, "notEnoughTimeWarningCopy", {
    get: function () {
      return "dialog_postAttack_eventNotLongEnough";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePostActionDialog.prototype, "notEnoughTimeWarningHeader", {
    get: function () {
      return "generic_alert_watchout";
    },
    enumerable: true,
    configurable: true
  });
  ACastlePostActionDialog.prototype.hideAttackDisplayElements = function () {
    this.dialogDisp.mc_siegeTime.visible = false;
    this.dialogDisp.mc_estimatedHonor.visible = false;
    this.dialogDisp.mc_checkbox.visible = false;
    this.dialogDisp.mc_dropdown.visible = false;
    this.dialogDisp.mc_wait.visible = false;
  };
  ACastlePostActionDialog.NAME = "CastlePostAttack";
  return ACastlePostActionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ACastlePostActionDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMovementSetTimeDialog = require("gge-module:export_CastleMovementSetTimeDialog");
var __dep_export_CastleNoMoneyC1Dialog = require("gge-module:export_CastleNoMoneyC1Dialog");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
