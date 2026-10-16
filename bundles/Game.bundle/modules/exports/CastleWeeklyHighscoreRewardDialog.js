Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstHighscore = require("gge-module:export_ClientConstHighscore");
var __dep_export_C2SGetWeeklyHonorRankVO = require("gge-module:export_C2SGetWeeklyHonorRankVO");
var __dep_export_C2SRedeemWeeklyHonorBonus = require("gge-module:export_C2SRedeemWeeklyHonorBonus");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleWeeklyHighscoreRewardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleWeeklyHighscoreRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWeeklyHighscoreRewardDialog, __s1param0);
  CastleWeeklyHighscoreRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_rankreward_title"));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_rankreward_copy"));
    this.itxt_currentRank_label = this.textFieldManager.registerTextField(this.dialogDisp.txt_currentRank_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_tournament_yourRank"));
    this.itxt_reward_label = this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_fame_reward"));
    this.itxt_collect_label = this.textFieldManager.registerTextField(this.dialogDisp.txt_collect_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_rankreward_collect_time"));
    this.ibtn_collect_txt_label = this.textFieldManager.registerTextField(this.dialogDisp.btn_collect.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_rankreward_collect"));
    this.itxt_noHonor = this.textFieldManager.registerTextField(this.dialogDisp.txt_noHonor, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_rankreward_noHonor"));
    this.itxt_collect_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_collect_time, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_currentRank = this.textFieldManager.registerTextField(this.dialogDisp.txt_currentRank, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_noHonor.visible = false;
    this.dialogDisp.mc_reward.visible = false;
    this.dialogDisp.mc_reward.gotoAndStop(2);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_collect, this.dialogDisp.mc_reward.btn_unitinfo0, this.dialogDisp.mc_reward.btn_unitinfo1, this.dialogDisp.mc_reward.btn_toolinfo0]);
  };
  CastleWeeklyHighscoreRewardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTime));
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.WEEKLY_HONOR_SCORE_UPDATED, this.bindFunction(this.onWeeklyRewardUpdate));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetWeeklyHonorRankVO.C2SGetWeeklyHonorRankVO());
    this.lockDialog();
    this.onUpdateTime();
  };
  CastleWeeklyHighscoreRewardDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTime));
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.WEEKLY_HONOR_SCORE_UPDATED, this.bindFunction(this.onWeeklyRewardUpdate));
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.REWARD_REDEEMED, this.bindFunction(this.onRedeemedResponse));
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  CastleWeeklyHighscoreRewardDialog.prototype.onUpdateTime = function (__s11param0 = null) {
    if (this.itxt_collect_time && this.itxt_collect_time.originalTextField) {
      if (__dep_export_CastleModel.CastleModel.highscoreData.isReadyToCollect) {
        this.itxt_collect_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(0, __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
      } else {
        this.itxt_collect_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.highscoreData.nextRewardRemainingTime, __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
        this.itxt_collect_time.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
      }
    }
  };
  CastleWeeklyHighscoreRewardDialog.prototype.onWeeklyRewardUpdate = function (__s16param0) {
    if (__dep_export_CastleModel.CastleModel.userData.userHonor > 0) {
      this.itxt_noHonor.visible = false;
      if (__dep_export_CastleModel.CastleModel.highscoreData.isReadyToCollect) {
        this.setReward(__dep_export_ClientConstHighscore.ClientConstHighscore.getLeagueIdByLevel(__dep_export_CastleModel.CastleModel.userData.userLevel), __dep_export_CastleModel.CastleModel.highscoreData.rankLastWeek);
        this.itxt_currentRank.textContentVO.stringValue = String(__dep_export_CastleModel.CastleModel.highscoreData.rankLastWeek);
        this.dialogDisp.btn_collect.basicButton.enableButton = true;
        this.dialogDisp.btn_collect.toolTipText = "";
      } else {
        this.setReward(__dep_export_ClientConstHighscore.ClientConstHighscore.getLeagueIdByLevel(__dep_export_CastleModel.CastleModel.userData.userLevel), __dep_export_CastleModel.CastleModel.highscoreData.rankActual);
        this.itxt_currentRank.textContentVO.stringValue = String(__dep_export_CastleModel.CastleModel.highscoreData.rankActual);
        this.dialogDisp.btn_collect.basicButton.enableButton = false;
        this.dialogDisp.btn_collect.toolTipText = "dialog_rankreward_collect_blocked";
      }
    } else {
      this.dialogDisp.mc_reward.visible = false;
      this.itxt_noHonor.visible = true;
      this.dialogDisp.btn_collect.basicButton.enableButton = false;
      this.itxt_currentRank.textContentVO.stringValue = String(__dep_export_CastleModel.CastleModel.highscoreData.rankActual);
    }
    this.setLeagueTitleById(__dep_export_CastleModel.CastleModel.highscoreData.leaguageId);
    this.unLockDialog();
  };
  CastleWeeklyHighscoreRewardDialog.prototype.setLeagueTitle = function (__s22param0) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_league, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s22param0));
  };
  CastleWeeklyHighscoreRewardDialog.prototype.setLeagueTitleById = function (__s24param0) {
    switch (__s24param0) {
      case 1:
        this.setLeagueTitle("dialog_highscore_league1");
        break;
      case 2:
        this.setLeagueTitle("dialog_highscore_league2");
        break;
      case 3:
        this.setLeagueTitle("dialog_highscore_league3");
        break;
      case 4:
        this.setLeagueTitle("dialog_highscore_league4");
        break;
      case 5:
        this.setLeagueTitle("dialog_highscore_league5");
        break;
      default:
        this.setLeagueTitle("");
    }
  };
  CastleWeeklyHighscoreRewardDialog.prototype.onRedeemedResponse = function (__s27param0) {
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.REWARD_REDEEMED, this.bindFunction(this.onRedeemedResponse));
    if (__s27param0.params[0]) {
      this.lockDialog();
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetWeeklyHonorRankVO.C2SGetWeeklyHonorRankVO());
    } else {
      this.dialogDisp.btn_collect.basicButton.enableButton = true;
    }
  };
  CastleWeeklyHighscoreRewardDialog.prototype.setReward = function (__s31param0, __s31param1) {
    this.dialogDisp.mc_reward.visible = true;
    var __s31local0 = __dep_export_CastleModel.CastleModel.highscoreData.getHighscoreBonusVOForRank(__s31param0, __s31param1);
    if (!__s31local0) {
      console.warn("MISSING REWARD");
      this.dialogDisp.mc_reward.visible = false;
      return;
    }
    if (__s31local0.c1Reward > 0) {
      this.dialogDisp.mc_reward.gotoAndStop(1);
      this.dialogDisp.mc_reward.mc_rewardC1.toolTipText = "cash";
      var __s31local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreBonusConst.calcHighscoreBonusForC1(__s31local0.c1Reward, __s31local0.highestRank, __s31param1, __s31local0.minAmount, __dep_export_CastleModel.CastleModel.userData.userLevel));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.mc_rewardC1.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s31local1), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    } else if (__s31local0.unitRewards.length > 0 || __s31local0.toolRewardWod > 0) {
      this.dialogDisp.mc_reward.gotoAndStop(2);
      for (var __s31local2 = 0; __s31local2 < CastleWeeklyHighscoreRewardDialog.NUM_UNITREWARD_SLOTS; ++__s31local2) {
        if (__s31local2 < __s31local0.unitRewards.length) {
          var __s31local3 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s31local0.unitRewards[__s31local2].wodId, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
          var __s31local4 = this.dialogDisp.mc_reward["mc_rewardUnit" + __s31local2];
          var __s31local5 = this.dialogDisp.mc_reward["btn_unitinfo" + __s31local2];
          __s31local4.visible = true;
          __s31local5.visible = true;
          __s31local5.unitVO = __s31local3;
          var __s31local6 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreBonusConst.calcHighscoreBonusForUnits(__s31local0.unitRewards[__s31local2].amount, __s31local0.highestRank, __s31param1, __s31local0.minAmount));
          this.textFieldManager.registerTextField(__s31local4.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s31local6), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
          __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__s31local3, __s31local4.btn_unit, 88, 70, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
          __s31local4.toolTipText = {
            t: "generic_amount_reward",
            p: [__s31local6, __dep_exact_92d05af59ee2ff30.Localize.text(__s31local3.getNameString())]
          };
        } else {
          this.dialogDisp.mc_reward["mc_rewardUnit" + __s31local2].visible = false;
          this.dialogDisp.mc_reward["btn_unitinfo" + __s31local2].visible = false;
        }
      }
      if (__s31local0.toolRewardWod > 0) {
        var __s31local7 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s31local0.toolRewardWod, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
        var __s31local8 = this.dialogDisp.mc_reward.mc_rewardTool0;
        var __s31local9 = this.dialogDisp.mc_reward.btn_toolinfo0;
        __s31local8.visible = true;
        __s31local9.visible = true;
        __s31local9.toolVO = __s31local7;
        var __s31local10 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreBonusConst.calcHighscoreBonusForTools(__s31local0.toolMinAmount, __s31local0.toolOffset, __s31param1));
        this.textFieldManager.registerTextField(__s31local8.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO(String(__s31local10)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
        __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__s31local7, __s31local8.btn_unit, 88, 70, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
        __s31local8.toolTipText = {
          t: "generic_amount_reward",
          p: [__s31local10, __dep_exact_92d05af59ee2ff30.Localize.text(__s31local7.getNameString())]
        };
      } else {
        this.dialogDisp.mc_reward.mc_rewardTool0.visible = false;
        this.dialogDisp.mc_reward.btn_toolinfo0.visible = false;
      }
    } else {
      console.warn("MISSING REWARD");
      this.dialogDisp.mc_reward.visible = false;
    }
  };
  CastleWeeklyHighscoreRewardDialog.prototype.onClick = function (__s43param0) {
    __s1param0.prototype.onClick.call(this, __s43param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s43param0.target)) {
      switch (__s43param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_collect:
          this.collect();
          break;
        case this.dialogDisp.mc_reward.btn_unitinfo0:
        case this.dialogDisp.mc_reward.btn_unitinfo1:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s43param0.target.unitVO));
          break;
        case this.dialogDisp.mc_reward.btn_toolinfo0:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s43param0.target.toolVO));
      }
    }
  };
  CastleWeeklyHighscoreRewardDialog.prototype.collect = function () {
    this.dialogDisp.btn_collect.basicButton.enableButton = false;
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.REWARD_REDEEMED, this.bindFunction(this.onRedeemedResponse));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRedeemWeeklyHonorBonus.C2SRedeemWeeklyHonorBonus());
  };
  CastleWeeklyHighscoreRewardDialog.__initialize_static_members = function () {
    CastleWeeklyHighscoreRewardDialog.NAME = "CastleWeeklyHighscoreReward";
    CastleWeeklyHighscoreRewardDialog.NUM_UNITREWARD_SLOTS = 2;
  };
  return CastleWeeklyHighscoreRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleWeeklyHighscoreRewardDialog = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
