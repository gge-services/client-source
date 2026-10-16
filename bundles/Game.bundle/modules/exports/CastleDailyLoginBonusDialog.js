Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SCatchLoginBonusVO = require("gge-module:export_C2SCatchLoginBonusVO");
var __dep_export_LoginBonusDataUpdateEvent = require("gge-module:export_LoginBonusDataUpdateEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleVIPDataEvent = require("gge-module:export_CastleVIPDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleDailyLoginBonusDialog() {
    var __s3local0 = this;
    __s3local0._dailyAllicanceSpecialBonusFlagXStartPos = 0;
    __s3local0._currentDay = 0;
    __s3local0._selectedDay = 0;
    __s3local0._todayModulo = 0;
    __s3local0._today = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleDailyLoginBonusDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDailyLoginBonusDialog, __s1param0);
  CastleDailyLoginBonusDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initDialogButtons();
    this.initDialogTexts();
  };
  CastleDailyLoginBonusDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this._updateDialogModelListeners = [[__dep_export_CastleModel.CastleModel.loginBonusData, __dep_export_LoginBonusDataUpdateEvent.LoginBonusDataUpdateEvent.LOGIN_BONUS_UPDATED], [__dep_export_CastleModel.CastleModel.loginBonusData, __dep_export_LoginBonusDataUpdateEvent.LoginBonusDataUpdateEvent.LOGIN_BONUS_COLLECT_FAILED], [__dep_export_CastleModel.CastleModel.vipData, __dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED], [__dep_export_CastleBasicController.CastleBasicController.getInstance(), __dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED]];
    if (this._updateDialogModelListeners != null) {
      for (var __s7local0 = 0, __s7local1 = this._updateDialogModelListeners; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2[0].addEventListener(String(__s7local2[1]), this.bindFunction(this.onModelUpdate));
        }
      }
    }
  };
  CastleDailyLoginBonusDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    if (this._updateDialogModelListeners) {
      if (this._updateDialogModelListeners != null) {
        for (var __s13local0 = 0, __s13local1 = this._updateDialogModelListeners; __s13local0 < __s13local1.length; __s13local0++) {
          var __s13local2 = __s13local1[__s13local0];
          if (__s13local2 !== undefined) {
            __s13local2[0].removeEventListener(String(__s13local2[1]), this.bindFunction(this.onModelUpdate));
          }
        }
      }
      this._updateDialogModelListeners.length = 0;
      this._updateDialogModelListeners = null;
    }
  };
  CastleDailyLoginBonusDialog.prototype.showLoaded = function (__s20param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s20param0);
    this.updateDialogData();
  };
  CastleDailyLoginBonusDialog.prototype.onClick = function (__s22param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s22param0)) {
      __s1param0.prototype.onClick.call(this, __s22param0);
    }
    switch (__s22param0.target) {
      case this._dialogCloseButton.disp:
        this.hide();
        break;
      case this._dialogHelpButton.disp:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_loginBonus_title"), __dep_exact_92d05af59ee2ff30.Localize.text("help_loginBonus"));
        break;
      default:
        this.checkWrapper(__s22param0.target);
    }
  };
  CastleDailyLoginBonusDialog.prototype.onModelUpdate = function (__s26param0) {
    this.updateDialogData();
  };
  CastleDailyLoginBonusDialog.prototype.updateDialogData = function () {
    this.waitingForServer = false;
    this._rewardList = __dep_export_CastleModel.CastleModel.loginBonusData.rewardList;
    if (this._rewardList) {
      this._today = __dep_export_CastleModel.CastleModel.loginBonusData.rewardDay;
      this._todayModulo = this._today % 7;
      this.updateCurrentDay();
      this.updateCurrentDailyRewards();
    }
  };
  CastleDailyLoginBonusDialog.prototype.updateCurrentDay = function (__s31param0 = -1) {
    this._currentDay = this._selectedDay = __s31param0 > -1 ? __s31param0 : this._todayModulo;
    var __s31local0 = Math.floor(this._today / 7) * 7;
    if (this._dailyGoldButtons != null) {
      for (var __s31local1 = 0, __s31local2 = this._dailyGoldButtons; __s31local1 < __s31local2.length; __s31local1++) {
        var __s31local3 = __s31local2[__s31local1];
        if (__s31local3 !== undefined) {
          __s31local3.selected = this._currentDay == __s31local3.day;
          __s31local3.isGoldDays = this._today > 6 || __s31local3.day > 5;
          __s31local3.currentRewardDay = __s31local0++;
        }
      }
    }
    if (this._dailyTabButtons != null) {
      for (var __s31local4 = 0, __s31local5 = this._dailyTabButtons; __s31local4 < __s31local5.length; __s31local4++) {
        var __s31local6 = __s31local5[__s31local4];
        if (__s31local6 !== undefined) {
          __s31local6.selected = this._currentDay == __s31local6.day;
          __s31local6.isGoldDays = this._today > 6;
          __s31local6.currentRewardDay = this._currentDay;
        }
      }
    }
  };
  CastleDailyLoginBonusDialog.prototype.updateCurrentDailyRewards = function (__s41param0 = -1) {
    this._selectedDay = __s41param0 > -1 ? __s41param0 : this._todayModulo;
    var __s41local0;
    var __s41local1;
    var __s41local2 = this._rewardList[this._selectedDay];
    var __s41local3 = __s41local2.mainRewards;
    var __s41local4 = __s41local3.length;
    for (var __s41local5 = this._dailyRewards.length, __s41local6 = 0; __s41local6 < __s41local5; __s41local6++) {
      __s41local1 = this._dailyRewards[__s41local6];
      if (__s41local6 < __s41local4) {
        __s41local0 = __s41local3.getItemByIndex(__s41local6);
        __s41local1.collectableItem = __s41local2.mainRewardPicked && __s41local0.itemType == __s41local2.mainRewardPicked.itemType && __dep_export_CollectableHelper.CollectableHelper.haveSameId(__s41local0, __s41local2.mainRewardPicked) ? __s41local2.mainRewardPicked : __s41local0;
        if (__s41local2.mainRewardPicked) {
          __s41local1.enableButton = __s41local1.collectableItem.itemType.serverKey == __s41local2.mainRewardPicked.itemType.serverKey && __dep_export_CollectableHelper.CollectableHelper.haveSameId(__s41local1.collectableItem, __s41local2.mainRewardPicked);
        } else {
          __s41local1.enableButton = true;
        }
        if (!__s41local2.mainRewardPicked && this._selectedDay != this._todayModulo) {
          __s41local1.enableButton = false;
        }
        __s41local1.clickable = !__s41local2.mainRewardPicked && this._selectedDay == this._todayModulo;
      } else {
        __s41local1.changeToDefaultState();
        __s41local1.enableButton = false;
      }
    }
    this._dailyAllicanceSpecialBonus.changeToDefaultState();
    this._dailyVipSpecialBonus.changeToDefaultState();
    this.performDailySpecialBonusButtonSelection(this._dailyAllicanceSpecialBonus, false);
    this.performDailySpecialBonusButtonSelection(this._dailyVipSpecialBonus, false);
    this.updateFootnoteMessage();
  };
  CastleDailyLoginBonusDialog.prototype.updateFootnoteMessage = function () {
    var __s50local0 = this._rewardList[this._selectedDay];
    var __s50local1 = this._footnoteMessageGGSTextField.textContentVO;
    if (this._selectedDay == this._todayModulo) {
      if (__s50local0.mainRewardPicked) {
        if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && !this._rewardList[this._selectedDay].alliReward || __dep_export_CastleModel.CastleModel.vipData.vipModeActive && !this._rewardList[this._selectedDay].vipReward) {
          __s50local1.textId = "dialog_loginBonus_pickReward";
        } else {
          __s50local1.textId = "dialog_loginBonus_collectedReward";
        }
      } else {
        __s50local1.textId = "dialog_loginBonus_pickReward";
      }
    } else if (this._selectedDay < this._todayModulo) {
      if (__s50local0.mainRewardPicked) {
        __s50local1.textId = "dialog_loginBonus_collectedReward";
      } else {
        __s50local1.textId = "dialog_loginBonus_cannotCollectReward";
      }
    } else if (this._selectedDay > this._todayModulo) {
      __s50local1.textId = "dialog_loginBonus_futureRewards";
    } else {
      __s50local1.textId = "";
    }
  };
  CastleDailyLoginBonusDialog.prototype.checkWrapper = function (__s62param0) {
    if (__s62param0 && __s62param0.hasOwnProperty(__dep_export_DailyLoginBonusStateButton.DailyLoginBonusStateButton.WRAPPER_PROPERTY)) {
      var __s62local0 = __s62param0[__dep_export_DailyLoginBonusStateButton.DailyLoginBonusStateButton.WRAPPER_PROPERTY];
      if (__s62local0) {
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s62local0, "DailyTabButton")) {
          this.performDailyTabButtonSelection(__s62local0);
        } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s62local0, "DailyRewardButton")) {
          this.performDailyRewardButtonSelection(__s62local0);
        } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s62local0, "DailySpecialBonusButton")) {
          this.performDailySpecialBonusButtonSelection(__s62local0);
        }
      }
    }
  };
  CastleDailyLoginBonusDialog.prototype.performDailyTabButtonSelection = function (__s69param0) {
    if (this._dailyTabButtons != null) {
      for (var __s69local0 = 0, __s69local1 = this._dailyTabButtons; __s69local0 < __s69local1.length; __s69local0++) {
        var __s69local2 = __s69local1[__s69local0];
        if (__s69local2 !== undefined) {
          __s69local2.selected = false;
        }
      }
    }
    __s69param0.selected = true;
    this.updateCurrentDailyRewards(__s69param0.day);
  };
  CastleDailyLoginBonusDialog.prototype.performDailyRewardButtonSelection = function (__s75param0) {
    if (__s75param0.enableButton && __s75param0.clickable && this._selectedDay == this._todayModulo && !this.waitingForServer) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCatchLoginBonusVO.C2SCatchLoginBonusVO(__dep_export_CollectableHelper.CollectableHelper.getServerKeyByCollectable(__s75param0.collectableItem), __dep_exact_f855840627e6e145.int(__s75param0.collectableItem.itemType == __dep_export_CollectableEnum.CollectableEnum.UNITS ? __s75param0.collectableItem.id : -1)));
      this.waitingForServer = true;
    }
  };
  CastleDailyLoginBonusDialog.prototype.performDailySpecialBonusButtonSelection = function (__s78param0, __s78param1) {
    var __s78local0;
    if (__s78param1 === undefined) {
      __s78param1 = true;
    }
    switch (__s78param0) {
      case this._dailyAllicanceSpecialBonus:
        __s78local0 = "ALLI";
        var __s78local1 = this._rewardList[this._selectedDay].alliReward;
        var __s78local2 = __dep_export_CastleModel.CastleModel.userData.isInAlliance;
        if (__s78local1) {
          __s78param0.changeTo(__dep_export_DailySpecialBonusButton.DailySpecialBonusButton.STATE_REWARD_COLLECTED);
          this._dailyAllicanceSpecialBonus.enableButton = true;
          this._dailyAllicanceSpecialBonus.collectableItem = __s78local1;
          this._dailyAllicanceSpecialBonus.clickable = false;
        } else if (this._selectedDay == this._todayModulo) {
          this._dailyAllicanceSpecialBonus.enableButton = __s78local2;
          this._dailyAllicanceSpecialBonus.clickable = __s78local2;
          this._dailyAllicanceSpecialBonus.toolTipText = __s78local2 ? "dialog_loginBonus_allianceReward_tooltip" : "dialog_loginBonus_joinAlliance_tooltip";
        } else {
          this._dailyAllicanceSpecialBonus.clickable = false;
          this._dailyAllicanceSpecialBonus.enableButton = false;
          this._dailyAllicanceSpecialBonus.toolTipText = __s78local2 ? "dialog_loginBonus_futureReward_tooltip" : "dialog_loginBonus_joinAlliance_tooltip";
        }
        break;
      case this._dailyVipSpecialBonus:
        __s78local0 = "VIP";
        var __s78local3 = this._rewardList[this._selectedDay].vipReward;
        this._dailyVipSpecialBonus.button.visible = !!__s78local3 || __dep_export_CastleModel.CastleModel.vipData.vipModeActive;
        if (this._dailyVipSpecialBonus.button.visible) {
          this._dailyAllicanceSpecialBonus.button.x = this._dailyAllicanceSpecialBonusFlagXStartPos;
          if (this._dailyVipSpecialBonus.button.vip_text) {
            this._dailyVipSpecialBonus.button.vip_text.text = __dep_export_CastleModel.CastleModel.vipData.currentVIPLevel;
          }
          if (__s78local3) {
            __s78param0.changeTo(__dep_export_DailySpecialBonusButton.DailySpecialBonusButton.STATE_REWARD_COLLECTED);
            this._dailyVipSpecialBonus.enableButton = true;
            this._dailyVipSpecialBonus.collectableItem = __s78local3;
            this._dailyVipSpecialBonus.clickable = false;
          } else if (this._selectedDay == this._todayModulo) {
            this._dailyVipSpecialBonus.enableButton = true;
            this._dailyVipSpecialBonus.toolTipText = "dialog_loginBonus_vipReward_tooltip";
            this._dailyVipSpecialBonus.clickable = true;
          } else {
            this._dailyVipSpecialBonus.enableButton = false;
            this._dailyVipSpecialBonus.toolTipText = "dialog_loginBonus_futureReward_tooltip";
            this._dailyVipSpecialBonus.clickable = false;
          }
        } else {
          this._dailyAllicanceSpecialBonus.button.x = this._dailyAllicanceSpecialBonusFlagXStartPos + (this._dailyVipSpecialBonus.button.x - this._dailyAllicanceSpecialBonusFlagXStartPos) / 2;
        }
    }
    if (__s78param1 && __s78param0.enableButton && __s78param0.clickable && this._selectedDay == this._todayModulo && __s78local0 && __s78local0.length > 0 && !this.waitingForServer) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCatchLoginBonusVO.C2SCatchLoginBonusVO(null, -1, __s78local0));
      this.waitingForServer = true;
    }
  };
  CastleDailyLoginBonusDialog.prototype.initDialogTexts = function () {
    this._titleGGSTextField = this.textFieldManager.registerTextField(this.dialogDisp.dialog_dailyloginbonus_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_loginBonus_title"));
    this._messageGGSTextField = this.textFieldManager.registerTextField(this.dialogDisp.dialog_dailyloginbonus_msg, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_loginBonus_copy"));
    this._mainRewardsTitleGGSTextField = this.textFieldManager.registerTextField(this.dialogDisp.dialog_dailyloginbonus_rewards, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_loginBonus_rewards"));
    this._specialRewardsTitleGGSTextField = this.textFieldManager.registerTextField(this.dialogDisp.dialog_dailyloginbonus_specialbonus, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_loginBonus_specialRewards"));
    this._footnoteMessageGGSTextField = this.textFieldManager.registerTextField(this.dialogDisp.dialog_dailyloginbonus_footnote, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_loginBonus_pickReward"));
  };
  CastleDailyLoginBonusDialog.prototype.initDialogButtons = function () {
    this._dialogCloseButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.dialogDisp.dialog_close_button, true);
    this._dialogHelpButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.dialogDisp.dialog_help_button, true);
    this._dialogHelpButton.toolTipText = "generic_help";
    this._dailyGoldButtons = [new __dep_export_DailyGoldButton.DailyGoldButton(0, this.dialogDisp.dialog_day1_gold_button), new __dep_export_DailyGoldButton.DailyGoldButton(1, this.dialogDisp.dialog_day2_gold_button), new __dep_export_DailyGoldButton.DailyGoldButton(2, this.dialogDisp.dialog_day3_gold_button), new __dep_export_DailyGoldButton.DailyGoldButton(3, this.dialogDisp.dialog_day4_gold_button), new __dep_export_DailyGoldButton.DailyGoldButton(4, this.dialogDisp.dialog_day5_gold_button), new __dep_export_DailyGoldButton.DailyGoldButton(5, this.dialogDisp.dialog_day6_gold_button), new __dep_export_DailyGoldButton.DailyGoldButton(6, this.dialogDisp.dialog_day7_gold_button)];
    this._dailyTabButtons = [new __dep_export_DailyTabButton.DailyTabButton(0, this.dialogDisp.dialog_day1_tab_button), new __dep_export_DailyTabButton.DailyTabButton(1, this.dialogDisp.dialog_day2_tab_button), new __dep_export_DailyTabButton.DailyTabButton(2, this.dialogDisp.dialog_day3_tab_button), new __dep_export_DailyTabButton.DailyTabButton(3, this.dialogDisp.dialog_day4_tab_button), new __dep_export_DailyTabButton.DailyTabButton(4, this.dialogDisp.dialog_day5_tab_button), new __dep_export_DailyTabButton.DailyTabButton(5, this.dialogDisp.dialog_day6_tab_button), new __dep_export_DailyTabButton.DailyTabButton(6, this.dialogDisp.dialog_day7_tab_button)];
    this._dailyRewards = [new __dep_export_DailyRewardButton.DailyRewardButton(this.dialogDisp.dialog_daily_reward1_button), new __dep_export_DailyRewardButton.DailyRewardButton(this.dialogDisp.dialog_daily_reward2_button), new __dep_export_DailyRewardButton.DailyRewardButton(this.dialogDisp.dialog_daily_reward3_button)];
    this._dailyAllicanceSpecialBonus = new __dep_export_DailySpecialBonusButton.DailySpecialBonusButton(__dep_export_DailySpecialBonusButton.DailySpecialBonusButton.TYPE_ALLIANCE, this.dialogDisp.dialog_daily_reward_alliance_button);
    this._dailyVipSpecialBonus = new __dep_export_DailySpecialBonusButton.DailySpecialBonusButton(__dep_export_DailySpecialBonusButton.DailySpecialBonusButton.TYPE_VIP, this.dialogDisp.dialog_daily_reward_vip_button);
    this._dailyAllicanceSpecialBonusFlagXStartPos = __dep_exact_f855840627e6e145.int(this._dailyAllicanceSpecialBonus.button.x);
    this.initBasicButtons(this.buttons());
  };
  CastleDailyLoginBonusDialog.prototype.buttons = function () {
    return [this.dialogDisp.dialog_close_button, this.dialogDisp.dialog_help_button, this.dialogDisp.dialog_day1_tab_button, this.dialogDisp.dialog_day2_tab_button, this.dialogDisp.dialog_day3_tab_button, this.dialogDisp.dialog_day4_tab_button, this.dialogDisp.dialog_day5_tab_button, this.dialogDisp.dialog_day6_tab_button, this.dialogDisp.dialog_day7_tab_button, this.dialogDisp.dialog_day1_tab_button, this.dialogDisp.dialog_day2_tab_button, this.dialogDisp.dialog_day3_tab_button, this.dialogDisp.dialog_day4_tab_button, this.dialogDisp.dialog_day5_tab_button, this.dialogDisp.dialog_day6_tab_button, this.dialogDisp.dialog_day7_tab_button, this.dialogDisp.dialog_daily_reward1_button, this.dialogDisp.dialog_daily_reward2_button, this.dialogDisp.dialog_daily_reward3_button, this.dialogDisp.dialog_daily_reward_alliance_button, this.dialogDisp.dialog_daily_reward_vip_button];
  };
  CastleDailyLoginBonusDialog.NAME = "CastleDailyLoginBonusDialog";
  return CastleDailyLoginBonusDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleDailyLoginBonusDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DailyGoldButton = require("gge-module:export_DailyGoldButton");
var __dep_export_DailyLoginBonusStateButton = require("gge-module:export_DailyLoginBonusStateButton");
var __dep_export_DailyRewardButton = require("gge-module:export_DailyRewardButton");
var __dep_export_DailySpecialBonusButton = require("gge-module:export_DailySpecialBonusButton");
var __dep_export_DailyTabButton = require("gge-module:export_DailyTabButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
