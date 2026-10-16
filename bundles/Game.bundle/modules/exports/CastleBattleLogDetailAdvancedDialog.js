Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleLogDataEvent = require("gge-module:export_CastleLogDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernComboboxComponentItem = require("gge-module:export_ModernComboboxComponentItem");
var __dep_export_SimpleComboboxComponent = require("gge-module:export_SimpleComboboxComponent");
var __dep_export_SimpleComboboxComponentConfig = require("gge-module:export_SimpleComboboxComponentConfig");
var __dep_export_CastleLegendEffectTextComposer = require("gge-module:export_CastleLegendEffectTextComposer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SupportToolTooltipHelper = require("gge-module:export_SupportToolTooltipHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_CastleForwardMessageDialogProperties = require("gge-module:export_CastleForwardMessageDialogProperties");
var __dep_export_CastleBattleLogPopUpDialogProperties = require("gge-module:export_CastleBattleLogPopUpDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleBattleLogDetailAdvancedDialog() {
    var __s3local0 = this;
    __s3local0._currentWave = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, CastleBattleLogDetailAdvancedDialog.NAME) || this).backgroundAlpha = 0.1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBattleLogDetailAdvancedDialog, __s1param0);
  CastleBattleLogDetailAdvancedDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_forwarding, this.dialogDisp.mc_flank1.btn_left1, this.dialogDisp.mc_flank1.btn_left2, this.dialogDisp.mc_flank1.btn_right1, this.dialogDisp.mc_flank1.btn_right2, this.dialogDisp.mc_flank2.btn_left1, this.dialogDisp.mc_flank2.btn_left2, this.dialogDisp.mc_flank2.btn_right1, this.dialogDisp.mc_flank2.btn_right2, this.dialogDisp.mc_flank3.btn_left1, this.dialogDisp.mc_flank3.btn_left2, this.dialogDisp.mc_flank3.btn_right1, this.dialogDisp.mc_flank3.btn_right2, this.dialogDisp.mc_finalWave.btn_left2, this.dialogDisp.mc_yard.btn_left1, this.dialogDisp.mc_yard.btn_right1]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_selector_wave.mc_selector], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.dialogDisp.mc_selector_wave.mc_items = this.dialogDisp.mc_selector_wave.mc_list;
    this._itxt_wave = this.textFieldManager.registerTextField(this.dialogDisp.mc_selector_wave.mc_selector.txt_label, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""));
    this._waveSelector = new __dep_export_SimpleComboboxComponent.SimpleComboboxComponent(this.dialogDisp.mc_selector_wave, new __dep_export_SimpleComboboxComponentConfig.SimpleComboboxComponentConfig(-2, 1));
    this.i_txt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_battleLogDetail_title"));
    this.i_txt_win = this.textFieldManager.registerTextField(this.dialogDisp.txt_win, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_battleLog_Victory01"));
    this.i_bonus_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_bonus.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.i_yard_left_txt_label = this.textFieldManager.registerTextField(this.dialogDisp.mc_yard.txt_left.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.i_yard_left1_txt_label = this.textFieldManager.registerTextField(this.dialogDisp.mc_yard.btn_left1.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.i_yard_right_txt_label = this.textFieldManager.registerTextField(this.dialogDisp.mc_yard.txt_right.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.i_yard_right1_txt_label = this.textFieldManager.registerTextField(this.dialogDisp.mc_yard.btn_right1.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.i_yard_left_txt_label.autoFitToBounds = true;
    this.i_yard_left1_txt_label.autoFitToBounds = true;
    this.i_yard_right_txt_label.autoFitToBounds = true;
    this.i_yard_right1_txt_label.autoFitToBounds = true;
    this.itxt_date = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeData.mc_date.txt_date, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeData.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this.castleComponent = new __dep_export_BattleLogCastleComponent.BattleLogCastleComponent(this.dialogDisp.mc_castleIcon, new __s0local0(1000, 70));
    this.dialogDisp.mc_timeData.mc_date.toolTipText = "generic_date";
    this.dialogDisp.mc_timeData.mc_date.mouseChildren = false;
    this.dialogDisp.mc_timeData.mc_time.toolTipText = "time";
    this.dialogDisp.mc_timeData.mc_time.mouseChildren = false;
    this.baronToolipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(this.dialogDisp.mc_baron);
  };
  CastleBattleLogDetailAdvancedDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    if (!this.isWaitingForServerMessage) {
      this.dialogDisp.btn_forwarding.toolTipText = "dialog_forwardlog_tootlipp";
      this.dialogDisp.btn_help.toolTipText = "generic_help";
      this.dialogDisp.btn_forwarding.visible = !this.dialogProperties.forwarded && __dep_export_CastleModel.CastleModel.userData.isInAlliance && this.dialogProperties.logVO && !this.dialogProperties.logVO.isFactionBattleLog;
      var __s7local0;
      var __s7local1 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_forwarding, __s7local1 && __s7local1.memberList.length > 1);
      if (__s7local1 && __s7local1.memberList.length == 1) {
        this.dialogDisp.btn_forwarding.toolTipText = "dialog_forwardLog_noMember_tooltip";
      }
      this.dialogDisp.icon_forward.visible = this.dialogProperties.forwarded;
      this.dialogDisp.icon_forward.toolTipText = "dialog_forwardlog_owner" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + this.dialogProperties.forwardSender;
      this._currentWave = -1;
      this.logVO = this.dialogProperties.logVO;
      this.resetDialog();
      this.i_txt_title.textContentVO.textId = "dialog_battleLogDetail_title";
      if (this.dialogProperties.logVO.hasWonState(this.dialogProperties.logVO.getOwnBattleInfo())) {
        this.i_txt_win.textContentVO.textId = "dialog_battleLog_Victory01";
        this.dialogDisp.btn_winDeco1.gotoAndStop(2);
      } else {
        this.i_txt_win.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP;
        __s7local0 = __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLog_defeat");
        __s7local0 += "!";
        this.i_txt_win.textContentVO.textReplacements = [__s7local0, ""];
        this.dialogDisp.btn_winDeco1.gotoAndStop(1);
      }
      this.controller.addEventListener(__dep_export_CastleLogDataEvent.CastleLogDataEvent.NEW_DETAILED_LOG, this.bindFunction(this.onNewDetailedLog));
      this.dialogDisp.support_source.visible = false;
      this.dialogDisp.support_target.visible = false;
      if (this.dialogProperties.logVO.hasMiddleInfo) {
        this.updateWaveSelector();
        this.displayLog();
      } else {
        __dep_export_CastleModel.CastleModel.messageData.getBattleLogMiddle(this.dialogProperties.logVO.logID);
        this.isWaitingForServerMessage = true;
      }
      this.dialogDisp.mc_icon1.toolTipText = "dialog_battleLogDetail_round1";
      this.dialogDisp.mc_icon2.toolTipText = "dialog_battleLogDetail_round2";
      this.dialogDisp.mc_yardLine.mc_icon3.toolTipText = "dialog_battleLogDetail_round3";
      this.dialogDisp.mc_bonus.toolTipText = "dialog_battleLogDetail_bonus";
      this.dialogDisp.mc_bonus.mouseChildren = false;
      this.dialogDisp.mc_yard.btn_left2.visible = false;
      this.dialogDisp.mc_yard.btn_right2.visible = false;
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.showLoaded = function (__s15param0 = null) {
    if (this.isWaitingForServerMessage) {
      this.dialogDisp.visible = false;
    } else {
      __s1param0.prototype.showLoaded.call(this, __s15param0);
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.hideLoaded = function (__s19param0 = null) {
    this.isWaitingForServerMessage = false;
    __s1param0.prototype.hideLoaded.call(this);
    if (this._waveSelector) {
      this._waveSelector.onHide();
      this._waveSelector.onSelectionChanged.remove(this.bindFunction(this.onComboboxChange));
    }
    this.resetDialog();
    this.controller.removeEventListener(__dep_export_CastleLogDataEvent.CastleLogDataEvent.NEW_DETAILED_LOG, this.bindFunction(this.onNewDetailedLog));
    if (this.dialogProperties.onClose) {
      this.dialogProperties.onClose();
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.updateWaveSelector = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._waveSelector.disp.mc_item);
    var __s23local0 = [];
    for (var __s23local1 = -1; __s23local1 <= this.dialogProperties.logVO.lastWaveIndex; __s23local1++) {
      var __s23local2 = new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem("CastleBattleLogDetailedAdvanced_DropdownElement", CastleBattleLogDetailAdvancedDialog.NAME, this.bindFunction(this.fillWaveItem), __s23local1);
      __s23local0.push(__s23local2);
    }
    this._waveSelector.updateWithNewValues(__s23local0);
    this._waveSelector.onShow();
    this._waveSelector.selectIndex(0);
    this._waveSelector.onSelectionChanged.add(this.bindFunction(this.onComboboxChange));
  };
  CastleBattleLogDetailAdvancedDialog.prototype.onNewDetailedLog = function (__s27param0 = null) {
    var __s27local0 = false;
    if (this.isWaitingForServerMessage) {
      __s27local0 = true;
    }
    this.isWaitingForServerMessage = false;
    if (__s27local0) {
      this.showLoaded();
      this.dialogDisp.visible = true;
    }
    this.updateWaveSelector();
    this.displayLog();
  };
  CastleBattleLogDetailAdvancedDialog.prototype.displayLog = function () {
    this.resetDialog();
    if (this.dialogProperties.logVO.mediumBattleWaves && this._currentWave == this.dialogProperties.logVO.reinforcementWaveIndex) {
      this.fillReinforcementWave(this.dialogProperties.logVO, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_REINFORCEMENT);
      this._itxt_wave.textContentVO.textId = "dialog_battleLogDetail_finalWave";
      this.dialogDisp.mc_yardLine.visible = false;
    } else if (this._currentWave == -1) {
      this.fillBattleLog(this.dialogProperties.logVO, this._currentWave);
      if (this.dialogProperties.logVO.hasReinforcementWave()) {
        this.fillReinforcementWave(this.dialogProperties.logVO, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_REINFORCEMENT_SUMMARY);
      }
      this._itxt_wave.textContentVO.textId = "dialog_battleLogDetail_summary";
      this.dialogDisp.mc_yardLine.visible = true;
    } else {
      this.fillBattleLog(this.dialogProperties.logVO, this._currentWave);
      this._itxt_wave.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON;
      this._itxt_wave.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_wave"), String(this._currentWave + 1)];
      this.dialogDisp.mc_yardLine.visible = false;
    }
    this.setTimeData();
    this.castleComponent.drawCastle(this.logVO);
  };
  CastleBattleLogDetailAdvancedDialog.prototype.setTimeData = function () {
    var __s37local0 = this.dialogProperties.logVO.battleTimestamp;
    this.itxt_date.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getDateStringFromDate(__s37local0);
    this.itxt_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeStringFromDate(__s37local0, __dep_export_CastleModel.CastleModel.languageData.getTextById);
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillBattleLog = function (__s39param0, __s39param1) {
    var __s39local0;
    var __s39local1;
    var __s39local2;
    if (__s39param1 == -1) {
      __s39local0 = __s39param0.mediumSummaryWave;
      __s39local1 = __s39param0.attackerTroopcountInKeep;
      __s39local2 = __s39param0.defenderTroopcountInKeep;
    } else {
      __s39local1 = (__s39local0 = __s39param0.mediumBattleWaves[__s39param1]).attacker.soldierAmountSurvived;
      __s39local2 = __s39local0.defender.soldierAmountSurvived;
    }
    var __s39local3;
    var __s39local4;
    var __s39local5 = __s39local0.attacker.flankLeft.soldierAmountSurvived > 0;
    var __s39local6 = __s39local0.attacker.flankMiddle.soldierAmountSurvived > 0;
    var __s39local7 = __s39local0.attacker.flankRight.soldierAmountSurvived > 0;
    if (__s39param0.isFactionBattleLog) {
      __s39local3 = __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.logVO.attackerBattleInfo.ownerInfoVO);
      __s39local4 = __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.logVO.defenderBattleInfo.ownerInfoVO);
    } else {
      __s39local3 = this.dialogProperties.logVO.attackerBattleInfo.ownerInfoVO.crest;
      __s39local4 = this.dialogProperties.logVO.defenderBattleInfo.ownerInfoVO.crest;
    }
    this.dialogDisp.mc_yard.mc_bg.gotoAndStop(3);
    this.dialogDisp.mc_flank2.mc_bg.gotoAndStop(2);
    this.fillFlankAttacker(this.dialogDisp.mc_flank1, __s39local0.attacker.flankLeft, __s39local5, __s39local3, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT);
    this.fillFlankAttacker(this.dialogDisp.mc_flank2, __s39local0.attacker.flankMiddle, __s39local6, __s39local3, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE);
    this.fillFlankAttacker(this.dialogDisp.mc_flank3, __s39local0.attacker.flankRight, __s39local7, __s39local3, __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT);
    this.fillYardAttacker(__s39local1, __s39param1, __s39local3);
    this.dialogDisp.mc_flank1.mc_crests.gotoAndStop(2);
    this.dialogDisp.mc_flank2.mc_crests.gotoAndStop(2);
    this.dialogDisp.mc_flank3.mc_crests.gotoAndStop(2);
    this.dialogDisp.mc_bonus.visible = (__s39local5 || __s39local6 || __s39local7) && __s39param1 == -1;
    if (this.dialogDisp.mc_bonus.visible) {
      var __s39local8 = __dep_exact_26a421b704832cff_1.CombatConst.getFlankBonus(__s39local5, __s39local6, __s39local7);
      __s39local8 = __dep_exact_f855840627e6e145.int(-(1 - __s39local8) * 100);
      var __s39local9 = this.dialogProperties.logVO.baronVO ? this.dialogProperties.logVO.baronVO.assignedGeneralVO : null;
      if (__s39local9 && __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByGeneralID(__s39local9.generalID)) {
        __s39local8 = __dep_exact_26a421b704832cff_1.CombatConst.getRaidFlankBonus(__s39local5, __s39local6, __s39local7);
        __s39local8 = __dep_exact_f855840627e6e145.int(-(1 - __s39local8) * 100);
      }
      if (__s39local8 >= 0) {
        this.i_bonus_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD;
        this.i_bonus_txt_value.textContentVO.textReplacements = [__s39local8];
      } else {
        this.i_bonus_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE;
        this.i_bonus_txt_value.textContentVO.textReplacements = [__s39local8];
      }
    }
    if (__s39param0.hasDefenderInfos) {
      this.fillFlankDefender(this.dialogDisp.mc_flank1, __s39local0.defender.flankLeft, __s39local5, __s39local4);
      this.fillFlankDefender(this.dialogDisp.mc_flank2, __s39local0.defender.flankMiddle, __s39local6, __s39local4);
      this.fillFlankDefender(this.dialogDisp.mc_flank3, __s39local0.defender.flankRight, __s39local7, __s39local4);
      this.fillYardDefender(__s39local2, __s39param1, __s39local4);
    } else {
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_flank1.mc_crests.mc_crest2, __s39local4, CastleBattleLogDetailAdvancedDialog.CREST_SIZE);
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_flank2.mc_crests.mc_crest2, __s39local4, CastleBattleLogDetailAdvancedDialog.CREST_SIZE);
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_flank3.mc_crests.mc_crest2, __s39local4, CastleBattleLogDetailAdvancedDialog.CREST_SIZE);
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_yard.mc_crests.mc_crest2, __s39local4, CastleBattleLogDetailAdvancedDialog.CREST_SIZE);
    }
    this.setLords();
    this.setSupportTools();
    this.setGenerals();
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillReinforcementWave = function (__s51param0, __s51param1) {
    var __s51local0;
    var __s51local1;
    var __s51local2 = __s51param1 == __dep_export_ClientConstCastle.ClientConstCastle.FLANK_REINFORCEMENT ? this.dialogDisp.mc_finalWave : this.dialogDisp.mc_finalWaveSummary;
    var __s51local3 = __s51param0.reinforcementWaveInfo;
    var __s51local4 = __s51param0.attackerGotThroughWall;
    if (__s51param0.isFactionBattleLog) {
      __s51local0 = __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.logVO.attackerBattleInfo.ownerInfoVO);
      __s51local1 = __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.logVO.defenderBattleInfo.ownerInfoVO);
    } else {
      __s51local0 = this.dialogProperties.logVO.attackerBattleInfo.ownerInfoVO.crest;
      __s51local1 = this.dialogProperties.logVO.defenderBattleInfo.ownerInfoVO.crest;
    }
    this.dialogDisp.mc_yard.mc_bg.gotoAndStop(3);
    this.fillFlankReinforcement(__s51local2, __s51local3, __s51local4, __s51local0, __s51param1);
    if (__s51param1 == __dep_export_ClientConstCastle.ClientConstCastle.FLANK_REINFORCEMENT) {
      this.fillYardAttacker(__s51param0.attackerTroopcountInKeep, __s51param0.mediumBattleWaves.length, __s51local0);
      this.dialogDisp.mc_bonus.visible = false;
      if (__s51param0.hasDefenderInfos) {
        this.fillYardDefender(0, __s51param0.mediumBattleWaves.length, __s51local1);
      } else {
        __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_yard.mc_crests.mc_crest2, __s51local1, CastleBattleLogDetailAdvancedDialog.CREST_SIZE);
      }
    }
    this.setLords();
    this.setSupportTools();
    this.setGenerals();
  };
  CastleBattleLogDetailAdvancedDialog.prototype.setLords = function () {
    var __s58local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.logVO.attackerBattleInfo.highestFameTitleBonus);
    var __s58local1 = __s58local0 > 0;
    var __s58local2 = __dep_exact_f855840627e6e145.int(this.dialogProperties.logVO.attackerBattleInfo.kingstowerBonus);
    var __s58local3 = __s58local2 > 0;
    var __s58local4 = this.dialogProperties.logVO.attackerBattleInfo.playerID < 0 || this.dialogProperties.logVO.defenderBattleInfo.playerID < 0;
    if (!__s58local3 && !__s58local1 || __s58local4) {
      this.dialogDisp.mc_general.gotoAndStop(1);
    } else {
      this.dialogDisp.mc_general.gotoAndStop(2);
      this.dialogDisp.mc_general.mc_attackBoost.mouseChildren = false;
    }
    if (!__s58local3 || __s58local1 || __s58local4) {
      if (__s58local3 || !__s58local1 || __s58local4) {
        if (__s58local3 && __s58local1 && !__s58local4) {
          this.dialogDisp.mc_general.mc_attackBoost.gotoAndStop(3);
          this.dialogDisp.mc_general.mc_attackBoost.toolTipText = __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("fameTitleAndKingstower_battlelog_tooltip"), [__s58local0 + __s58local2]);
        }
      } else {
        this.dialogDisp.mc_general.mc_attackBoost.gotoAndStop(2);
        this.dialogDisp.mc_general.mc_attackBoost.toolTipText = __dep_exact_92d05af59ee2ff30_1.Localize.text("fameTitle_battlelog_tooltip", [__s58local0]);
      }
    } else {
      this.dialogDisp.mc_general.mc_attackBoost.gotoAndStop(1);
      this.dialogDisp.mc_general.mc_attackBoost.toolTipText = __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingstower_battlelog_tooltip"), [__s58local2]);
    }
    if (this.commanderToolipTrigger) {
      this.commanderToolipTrigger.hide();
    }
    var __s58local5 = "";
    var __s58local6 = "";
    var __s58local7 = this.dialogDisp.mc_general.getChildByName("mc_icon");
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s58local7);
    this.commanderToolipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(__s58local7);
    this.commanderToolipTrigger.show();
    if (this.dialogProperties.logVO.commanderVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(this.dialogProperties.logVO.commanderVO, __s58local7, 30);
      this.commanderToolipTrigger.setProperties(this.dialogProperties.logVO.commanderVO, null, this.dialogProperties.logVO.mapobjectVO, __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.logVO.defenderBattleInfo.playerID, false));
      __s58local7.mouseChildren = false;
      __s58local5 = __dep_export_CastleGemEffectTextComposer.CastleGemEffectTextComposer.getGemBonusText(this.logVO.attackerTriggeredGems, __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.logVO.defenderBattleInfo.playerID, false));
      this.dialogDisp.gem_source.toolTipText = __s58local5;
      this.dialogDisp.gem_source.visible = __s58local5.length > 0;
      __s58local6 = __dep_export_CastleLegendEffectTextComposer.CastleLegendEffectTextComposer.getLegendBonusText(this.logVO.attackerLegendSkillIds);
      this.dialogDisp.legend_source.toolTipText = __s58local6;
      this.dialogDisp.legend_source.visible = __s58local6.length > 0;
      this.dialogDisp.legend_source.mouseChildren = false;
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_baron);
    if (this.dialogProperties.logVO.baronVO) {
      var __s58local8 = this.dialogProperties.logVO.baronVO;
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s58local8, this.dialogDisp.mc_baron, 30);
      this.dialogDisp.mc_baron.mouseChildren = false;
      this.baronToolipTrigger.setProperties(__s58local8, this.dialogProperties.logVO.mapobjectVO, this.dialogProperties.logVO.mapobjectVO, __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.logVO.attackerBattleInfo.playerID, false));
      __s58local5 = __dep_export_CastleGemEffectTextComposer.CastleGemEffectTextComposer.getGemBonusText(this.logVO.defenderTriggeredGems, __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.logVO.attackerBattleInfo.playerID, false));
      this.dialogDisp.gem_target.toolTipText = __s58local5;
      this.dialogDisp.gem_target.visible = __s58local5.length > 0;
      __s58local6 = __dep_export_CastleLegendEffectTextComposer.CastleLegendEffectTextComposer.getLegendBonusText(this.logVO.defenderLegendSkillIds);
      this.dialogDisp.legend_target.toolTipText = __s58local6;
      this.dialogDisp.legend_target.visible = __s58local6.length > 0;
      this.dialogDisp.legend_target.mouseChildren = false;
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.setGenerals = function () {
    this.dialogDisp.mc_general_source.visible = false;
    this.dialogDisp.mc_general_target.visible = false;
    this.dialogDisp.mc_general_abilities_source.visible = false;
    this.dialogDisp.mc_general_abilities_target.visible = false;
    if (this.logVO.commanderVO && this.logVO.commanderVO.assignedGeneralVO) {
      this.showGeneral(this.dialogDisp.mc_general_source, this.dialogDisp.mc_general_abilities_source, this.logVO.commanderVO.assignedGeneralVO, true, this.logVO.attackerBattleInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID);
    }
    if (this.logVO.baronVO && this.logVO.baronVO.assignedGeneralVO) {
      this.showGeneral(this.dialogDisp.mc_general_target, this.dialogDisp.mc_general_abilities_target, this.logVO.baronVO.assignedGeneralVO, false, this.logVO.defenderBattleInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID);
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.showGeneral = function (__s74param0, __s74param1, __s74param2, __s74param3, __s74param4) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s74param0);
    new __dep_export_GeneralSelectionItem.GeneralSelectionItem(__s74param2, __s74param0, false, false, false, false, null, true, __s74param4);
    var __s74local0 = "";
    if (__s74param2 && __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByGeneralID(__s74param2.generalID)) {
      __s74local0 = __dep_exact_92d05af59ee2ff30_1.Localize.text("are_boss_name_" + __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByGeneralID(__s74param2.generalID).name);
    } else if (__s74param2 && __s74param2.isNPCGeneral) {
      __s74local0 = __s74param2.nameTextShort;
    } else {
      __s74local0 = __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_attack_rework2022_generals_passiveEffectsList_header") + "\n";
      __s74local0 += __s74param2.getPassiveEffectsText();
    }
    __s74param0.toolTipText = __s74local0;
    __s74param0.mouseChildren = false;
    __s74param0.visible = true;
    __s74param1.visible = true;
    var __s74local1 = __s74param3 ? this.logVO.attackerAbilities : this.logVO.defenderAbilities;
    var __s74local2 = __s74local1.length > 0 ? __s74local1.map(function (__s79param0) {
      return __s79param0.abilityXmlVO;
    }) : [];
    for (var __s74local3 = 0; __s74local3 < 5; __s74local3++) {
      var __s74local4 = __s74param1["mc_ability" + __s74local3];
      __s74local4.scaleX = __s74local4.scaleY = 1;
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s74local4);
      if ((!!__s74param3 || !(__s74param2.defenseSlots.length <= __s74local3)) && (!__s74param3 || !(__s74param2.attackSlots.length <= __s74local3))) {
        if (__s74local2[__s74local3]) {
          __s74local4.addChild(__dep_export_GeneralsHelper.GeneralsHelper.getGeneralAbilityClip(__s74local2[__s74local3].abilityGroupID, 30, __s74local2[__s74local3].abilityID, __s74param3));
        } else {
          __s74local4.addChild(__dep_export_GeneralsHelper.GeneralsHelper.getGeneralAbilityClip(-1, 30, -1, __s74param3));
        }
      }
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillFlankAttacker = function (__s86param0, __s86param1, __s86param2, __s86param3, __s86param4) {
    var __s86local0 = this.textFieldManager.registerTextField(__s86param0.btn_left2.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s86param1.soldierAmountLost));
    if (!__s86param2) {
      __s86local0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.setFlankArrow(__s86param4, __s86param2);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s86param0.mc_crests.mc_crest1, __s86param3, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    this.textFieldManager.registerTextField(__s86param0.txt_left.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s86param1.soldierAmount));
    this.textFieldManager.registerTextField(__s86param0.btn_left1.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s86param1.toolsAmountUsed));
    __s86param0.visible = true;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillFlankDefender = function (__s89param0, __s89param1, __s89param2, __s89param3) {
    var __s89local0 = this.textFieldManager.registerTextField(__s89param0.btn_right2.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s89param1.soldierAmountLost));
    if (__s89param2) {
      __s89local0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s89param0.mc_crests.mc_crest2, __s89param3, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    this.textFieldManager.registerTextField(__s89param0.txt_right.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s89param1.soldierAmount));
    this.textFieldManager.registerTextField(__s89param0.btn_right1.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s89param1.toolsAmountUsed));
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillYardAttacker = function (__s92param0, __s92param1, __s92param2) {
    this.i_yard_left_txt_label.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s92param0);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_yard.mc_crests.mc_crest1, __s92param2, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    if (__s92param1 >= 0) {
      this.i_yard_left1_txt_label.textContentVO = new __dep_exact_92d05af59ee2ff30.TextVO("-");
      this.dialogDisp.mc_yard.btn_left1.visible = false;
    } else {
      this.i_yard_left1_txt_label.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.logVO.attackerTroopLostInKeep);
      this.dialogDisp.mc_yard.btn_left1.visible = true;
    }
    if (this.logVO.attackerTroopcountInKeep == -this.logVO.attackerTroopLostInKeep || this.logVO.attackerTroopcountInKeep == 0) {
      this.i_yard_left1_txt_label.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.dialogDisp.mc_yard.visible = true;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillYardDefender = function (__s97param0, __s97param1, __s97param2) {
    if (__s97param1 >= 0 && __s97param1 != this.dialogProperties.logVO.reinforcementWaveIndex) {
      this.i_yard_right_txt_label.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s97param0);
    } else {
      this.i_yard_right_txt_label.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.logVO.defenderTroopcountInKeep);
    }
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_yard.mc_crests.mc_crest2, __s97param2, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    if (__s97param1 >= 0) {
      this.i_yard_right1_txt_label.textContentVO = new __dep_exact_92d05af59ee2ff30.TextVO("-");
      this.dialogDisp.mc_yard.btn_right1.visible = false;
    } else {
      this.i_yard_right1_txt_label.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.logVO.defenderTroopLostInKeep);
      if (this.logVO.defenderTroopcountInKeep == -this.logVO.defenderTroopLostInKeep && this.logVO.attackerTroopcountInKeep != 0) {
        this.i_yard_right1_txt_label.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
      }
      this.dialogDisp.mc_yard.btn_right1.visible = true;
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillFlankReinforcement = function (__s104param0, __s104param1, __s104param2, __s104param3, __s104param4) {
    var __s104local0 = this.textFieldManager.registerTextField(__s104param0.btn_left2.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s104param1.soldierAmountLost));
    if (!__s104param2) {
      __s104local0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.setFlankArrow(__s104param4, this.logVO.mediumSummaryWave.attacker.soldierAmountSurvived > 0);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s104param0.mc_crest1, __s104param3, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    if (__s104param0.mc_crest2) {
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s104param0.mc_crest2, __s104param3, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    }
    this.textFieldManager.registerTextField(__s104param0.txt_left.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s104param1.soldierAmount));
    __s104param0.visible = true;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.setFlankArrow = function (__s108param0, __s108param1) {
    var __s108local0 = 2;
    if (!__s108param1) {
      __s108local0 = 1;
    }
    switch (__s108param0) {
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT:
        this.dialogDisp.mc_arrowLeft.gotoAndStop(__s108local0);
        this.dialogDisp.mc_arrowLeft.visible = true;
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE:
        this.dialogDisp.mc_arrowFrontal.gotoAndStop(__s108local0);
        this.dialogDisp.mc_arrowFrontal.visible = true;
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT:
        this.dialogDisp.mc_arrowRight.gotoAndStop(__s108local0);
        this.dialogDisp.mc_arrowRight.visible = true;
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_REINFORCEMENT:
        this.dialogDisp.mc_finalWave.mc_arrowFinal.gotoAndStop(__s108local0);
        this.dialogDisp.mc_finalWave.mc_arrowFinal.visible = true;
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_REINFORCEMENT_SUMMARY:
        this.dialogDisp.mc_finalWaveSummary.mc_arrowFinal.gotoAndStop(__s108local0);
        this.dialogDisp.mc_finalWaveSummary.mc_arrowFinal.visible = true;
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.setSupportTools = function () {
    this.updateSupportToolIcon(this.dialogDisp.support_source, this.logVO.supportToolsAttacker, "dialog_battleLogDetail_attackSupportTools_tooltip_header");
    this.updateSupportToolIcon(this.dialogDisp.support_target, this.logVO.supportToolsDefender, "dialog_battleLogDetail_defenseSupportTools_tooltip_header", true);
  };
  CastleBattleLogDetailAdvancedDialog.prototype.updateSupportToolIcon = function (__s114param0, __s114param1, __s114param2, __s114param3 = false) {
    __s114param0.visible = false;
    if (__s114param1.length > 0) {
      __s114param1.forEach(function (__s117param0) {
        __s114param0.visible = __s114param0.visible || __s117param0.lost != 0 || __s114param3;
      });
    }
    if (__s114param0.visible) {
      __s114param0.toolTipText = __dep_export_SupportToolTooltipHelper.SupportToolTooltipHelper.getToolTipByLogUnitVOs(__s114param1, __dep_exact_92d05af59ee2ff30_1.Localize.text(__s114param2));
    } else if (this.logVO.defenderUsedSupportTools && __s114param3) {
      __s114param0.visible = true;
      __s114param0.toolTipText = "dialog_battleLog_attackDefeated_noDefenseInfoAvailable_tt";
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.resetDialog = function () {
    this.resetFlankComponent(this.dialogDisp.mc_flank1, 0);
    this.resetFlankComponent(this.dialogDisp.mc_flank2, 1);
    this.resetFlankComponent(this.dialogDisp.mc_flank3, 0);
    this.resetFlankComponent(this.dialogDisp.mc_yard, 2);
    this.resetFlankComponent(this.dialogDisp.mc_finalWave, 3);
    this.resetFlankComponent(this.dialogDisp.mc_finalWaveSummary, 3);
    this.resetLegendSkills();
    this.resetGems();
    this.dialogDisp.mc_arrowLeft.visible = false;
    this.dialogDisp.mc_arrowRight.visible = false;
    this.dialogDisp.mc_arrowFrontal.visible = false;
    this.dialogDisp.mc_bonus.visible = false;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.resetLegendSkills = function () {
    this.dialogDisp.legend_source.visible = false;
    this.dialogDisp.legend_target.visible = false;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.resetGems = function () {
    this.dialogDisp.gem_source.visible = false;
    this.dialogDisp.gem_target.visible = false;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.resetFlankComponent = function (__s127param0, __s127param1) {
    __s127param0.txt_left.mouseChildren = false;
    __s127param0.visible = false;
    this.textFieldManager.registerTextField(__s127param0.txt_left.txt_label || __s127param0.txt_left, new __dep_exact_92d05af59ee2ff30.TextVO("???")).color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.textFieldManager.registerTextField(__s127param0.btn_left2.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO("???")).color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    if (__s127param1 != 3) {
      __s127param0.txt_right.mouseChildren = false;
      this.textFieldManager.registerTextField(__s127param0.btn_left1.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO("???")).color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this.textFieldManager.registerTextField(__s127param0.txt_right.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO("???")).color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this.textFieldManager.registerTextField(__s127param0.btn_right1.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO("???")).color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this.textFieldManager.registerTextField(__s127param0.btn_right2.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO("???")).color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    switch (__s127param1) {
      case 0:
        this.textFieldManager.registerTextField(__s127param0.txt_flanke, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_battleLogDetail_flank")).autoFitToBounds = true;
        __s127param0.txt_left.toolTipText = "dialog_battleLogDetail_attackerCount";
        __s127param0.txt_right.toolTipText = "dialog_battleLogDetail_defenderCount";
        __s127param0.btn_left1.toolTipText = "dialog_battleLogDetail_toolCount";
        __s127param0.btn_right1.toolTipText = "dialog_battleLogDetail_toolCount";
        __s127param0.btn_left2.toolTipText = "dialog_battleLogDetail_attackerLost";
        __s127param0.btn_right2.toolTipText = "dialog_battleLogDetail_defenderLost";
        break;
      case 1:
        this.textFieldManager.registerTextField(__s127param0.txt_flanke, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_battleLogDetail_frontal")).autoFitToBounds = true;
        __s127param0.txt_left.toolTipText = "dialog_battleLogDetail_attackerCount";
        __s127param0.txt_right.toolTipText = "dialog_battleLogDetail_defenderCount";
        __s127param0.btn_left1.toolTipText = "dialog_battleLogDetail_toolCount_front";
        __s127param0.btn_right1.toolTipText = "dialog_battleLogDetail_toolCount_front";
        __s127param0.btn_left2.toolTipText = "dialog_battleLogDetail_attackerLost";
        __s127param0.btn_right2.toolTipText = "dialog_battleLogDetail_defenderLost";
        break;
      case 2:
        this.textFieldManager.registerTextField(__s127param0.txt_flanke, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_battleLogDetail_courtyard")).autoFitToBounds = true;
        __s127param0.txt_left.toolTipText = "dialog_battleLogDetail_yardAttacker";
        __s127param0.txt_right.toolTipText = "dialog_battleLogDetail_yardDefender";
        __s127param0.btn_left1.toolTipText = "dialog_battleLogDetail_yardAttackersLost";
        __s127param0.btn_right1.toolTipText = "dialog_battleLogDetail_yardDefendersLost";
        break;
      case 3:
        this.textFieldManager.registerTextField(__s127param0.txt_flanke, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_battleLogDetail_finalWave")).autoFitToBounds = true;
        __s127param0.txt_left.toolTipText = "dialog_battleLogDetail_yardAttacker";
        __s127param0.btn_left2.toolTipText = "dialog_battleLogDetail_yardAttackersLost";
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.onClick = function (__s131param0) {
    __s1param0.prototype.onClick.call(this, __s131param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s131param0.target)) {
      switch (__s131param0.target) {
        case this.dialogDisp.mc_flank1.btn_left1:
        case this.dialogDisp.mc_flank1.btn_right1:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBattleLogPopUpDialog.CastleBattleLogPopUpDialog, new __dep_export_CastleBattleLogPopUpDialogProperties.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.LEFT_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_TOOLS));
          break;
        case this.dialogDisp.mc_flank1.btn_left2:
        case this.dialogDisp.mc_flank1.btn_right2:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBattleLogPopUpDialog.CastleBattleLogPopUpDialog, new __dep_export_CastleBattleLogPopUpDialogProperties.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.LEFT_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_UNITS));
          break;
        case this.dialogDisp.mc_flank2.btn_left1:
        case this.dialogDisp.mc_flank2.btn_right1:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBattleLogPopUpDialog.CastleBattleLogPopUpDialog, new __dep_export_CastleBattleLogPopUpDialogProperties.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.FRONTAL_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_TOOLS));
          break;
        case this.dialogDisp.mc_flank2.btn_left2:
        case this.dialogDisp.mc_flank2.btn_right2:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBattleLogPopUpDialog.CastleBattleLogPopUpDialog, new __dep_export_CastleBattleLogPopUpDialogProperties.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.FRONTAL_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_UNITS));
          break;
        case this.dialogDisp.mc_flank3.btn_left1:
        case this.dialogDisp.mc_flank3.btn_right1:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBattleLogPopUpDialog.CastleBattleLogPopUpDialog, new __dep_export_CastleBattleLogPopUpDialogProperties.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.RIGHT_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_TOOLS));
          break;
        case this.dialogDisp.mc_flank3.btn_left2:
        case this.dialogDisp.mc_flank3.btn_right2:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBattleLogPopUpDialog.CastleBattleLogPopUpDialog, new __dep_export_CastleBattleLogPopUpDialogProperties.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.RIGHT_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_UNITS));
          break;
        case this.dialogDisp.mc_finalWave.btn_left2:
        case this.dialogDisp.mc_finalWaveSummary.btn_left2:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBattleLogPopUpDialog.CastleBattleLogPopUpDialog, new __dep_export_CastleBattleLogPopUpDialogProperties.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this.dialogProperties.logVO.reinforcementWaveIndex, CastleBattleLogDetailAdvancedDialog.FRONTAL_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_UNITS));
          break;
        case this.dialogDisp.mc_yard.btn_left1:
        case this.dialogDisp.mc_yard.btn_right1:
          if (this._currentWave == -1) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBattleLogPopUpDialog.CastleBattleLogPopUpDialog, new __dep_export_CastleBattleLogPopUpDialogProperties.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.COURTYARD));
          }
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_battleLogDetail"));
          break;
        case this.dialogDisp.btn_forwarding:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleForwardMessageDialog.CastleForwardMessageDialog, new __dep_export_CastleForwardMessageDialogProperties.CastleForwardMessageDialogProperties(this.dialogProperties.messageId, __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BATTLE_LOG));
      }
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.onComboboxChange = function (__s136param0 = null) {
    this._currentWave = this._waveSelector.getSelectedItem().data;
    this.displayLog();
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillWaveItem = function (__s138param0) {
    __s138param0.disp.basicButton = null;
    __s138param0.disp.mouseChildren = true;
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s138param0.getItemMc(), 1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(__s138param0.getItemMc().txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(this.getWaveName(__s138param0.data, false)), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    var __s138local0 = this.textFieldManager.registerTextField(__s138param0.getItemMc().mc_default.txt_waveNumber, new __dep_exact_92d05af59ee2ff30.TextVO(" "), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    var __s138local1 = this.textFieldManager.registerTextField(__s138param0.getItemMc().mc_hover.txt_waveNumber, new __dep_exact_92d05af59ee2ff30.TextVO(" "), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    switch (__s138param0.data) {
      case CastleBattleLogDetailAdvancedDialog.COURTYARD:
        __s138param0.getItemMc().mc_default.icon.visible = false;
        __s138param0.getItemMc().mc_hover.icon.visible = false;
        break;
      case this.dialogProperties.logVO.reinforcementWaveIndex:
        __s138param0.getItemMc().mc_default.icon.visible = true;
        __s138param0.getItemMc().mc_hover.icon.visible = true;
        __s138param0.getItemMc().mc_default.icon.gotoAndStop(8);
        __s138param0.getItemMc().mc_hover.icon.gotoAndStop(8);
        break;
      default:
        __s138param0.getItemMc().mc_default.icon.visible = false;
        __s138param0.getItemMc().mc_hover.icon.visible = false;
        __s138local0.text = "" + (__s138param0.data + 1);
        __s138local1.text = "" + (__s138param0.data + 1);
    }
    __s138param0.getItemMc().gotoAndStop(1);
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s138param0.getItemMc(), 1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleBattleLogDetailAdvancedDialog.prototype.getWaveName = function (__s141param0, __s141param1) {
    if (__s141param0 == this.dialogProperties.logVO.reinforcementWaveIndex) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_finalWave");
    } else if (__s141param0 == CastleBattleLogDetailAdvancedDialog.COURTYARD) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_summary");
    } else if (__s141param1) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_wave"), (__s141param0 + 1 < 10 ? "0" : "") + (__s141param0 + 1)]);
    } else {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_wave");
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.baronToolipTrigger.show();
  };
  CastleBattleLogDetailAdvancedDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    if (this.commanderToolipTrigger) {
      this.commanderToolipTrigger.hide();
    }
    if (this.baronToolipTrigger) {
      this.baronToolipTrigger.hide();
    }
  };
  Object.defineProperty(CastleBattleLogDetailAdvancedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBattleLogDetailAdvancedDialog.NAME = "CastleBattleLogDetailAdvanced_Generals2";
  CastleBattleLogDetailAdvancedDialog.LEFT_FLANK = 0;
  CastleBattleLogDetailAdvancedDialog.FRONTAL_FLANK = 1;
  CastleBattleLogDetailAdvancedDialog.RIGHT_FLANK = 2;
  CastleBattleLogDetailAdvancedDialog.COURTYARD = -1;
  CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_UNITS = 0;
  CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_TOOLS = 1;
  CastleBattleLogDetailAdvancedDialog.CREST_SIZE = [[0, 0], [22, 22], [12, 18], [18, 10], [8, 8]];
  return CastleBattleLogDetailAdvancedDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBattleLogDetailAdvancedDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
var __dep_export_CastleGemEffectTextComposer = require("gge-module:export_CastleGemEffectTextComposer");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleForwardMessageDialog = require("gge-module:export_CastleForwardMessageDialog");
var __dep_export_BattleLogCastleComponent = require("gge-module:export_BattleLogCastleComponent");
var __dep_export_CastleBattleLogPopUpDialog = require("gge-module:export_CastleBattleLogPopUpDialog");
