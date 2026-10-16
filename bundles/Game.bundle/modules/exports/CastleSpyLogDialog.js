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
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SGetSpyInfo = require("gge-module:export_C2SGetSpyInfo");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleSpyDataEvent = require("gge-module:export_CastleSpyDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleLegendEffectTextComposer = require("gge-module:export_CastleLegendEffectTextComposer");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_CastleDarkOkDialog = require("gge-module:export_CastleDarkOkDialog");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_CastleSpyDialogProperties = require("gge-module:export_CastleSpyDialogProperties");
var __dep_export_CastleSpyinfoDetailsDialogProperties = require("gge-module:export_CastleSpyinfoDetailsDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleSpyLogDialog() {
    var __s3local0 = this;
    __s3local0.normalBackgroundHeight = 0;
    __s3local0.normalButtonY = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleSpyLogDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpyLogDialog, __s1param0);
  CastleSpyLogDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.dialogDisp.mc_accuracy.toolTipText = "spy_dialog_spyAccuracy";
    this.dialogDisp.mc_risk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.mc_damage.toolTipText = "spy_dialog_sabotageDamage";
    this.dialogDisp.btn_log.toolTipText = "dialog_moveOverview_details";
    this.dialogDisp.mc_spySoldiers.toolTipText = "dialog_spyLog_amountMilitary";
    this.dialogDisp.mc_spyTools.toolTipText = "dialog_spyLog_amountDefenceTools";
    this.dialogDisp.mc_spyCitizens.toolTipText = "dialog_spyLog_amountPesants";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.txt_castlename.actLikeButton = true;
    this.dialogDisp.txt_castlename.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.dialogDisp.txt_castlename, true);
    this.dialogDisp.txt_castlename.toolTipText = "dialog_jumpto_castleSelected";
    this.dialogDisp.txt_castlename.mouseChildren = false;
    this.itxt_title ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_spyLog_title"));
    this.itxt_result ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_result, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COLON, [0]));
    this.itxt_result.autoFitToBounds = true;
    this.itxt_description ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.i_risk_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_risk.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.i_damage_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_damage.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.i_accuracy_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_accuracy.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE, [0]));
    if (!this.i_spySoldier_txt_loot) {
      this.i_spySoldier_txt_loot = this.textFieldManager.registerTextField(this.dialogDisp.mc_spySoldiers.txt_loot, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
      this.i_spySoldier_txt_loot.autoFitToBounds = true;
      this.i_spySoldier_txt_loot.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
    this.i_txt_player_burgname ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_castlename.txt_player_burgname, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.i_txt_player_burgname.autoFitToBounds = true;
    this.i_spyTools_txt_loot ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_spyTools.txt_loot, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.i_spyPeasant_txt_loot ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_spyCitizens.txt_loot, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.resourceListComponent ||= new __dep_export_CastleResourceListComponent.CastleResourceListComponent(this.dialogDisp.mc_resourceList, Library.CastleInterfaceElements.CastleComponent_Info_LootItem, CastleSpyLogDialog.RESOURCE_ICONS_PER_ROW, 2);
    this.resourceListComponent.useKiloAbbreviationForAmount = true;
    this.normalBackgroundHeight = this.dialogDisp.background.height;
    this.normalButtonY = this.dialogDisp.btn_return.y;
    this.lordTooltipTrigger ||= new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(this.dialogDisp.mc_lordHolder);
    this.initBasicButtons([this.dialogDisp.btn_log, this.dialogDisp.aux_button, this.dialogDisp.btn_attack, this.dialogDisp.btn_close, this.dialogDisp.btn_return, this.dialogDisp.btn_help, this.dialogDisp.txt_castlename, this.dialogDisp.mc_playerlog1.btn_player, this.dialogDisp.mc_playerlog2.btn_player]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleSpyLogDialog.prototype.showLoaded = function (__s8param0 = null) {
    this.clear();
    this.controller.addEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.NEW_SPY_LOG, this.bindFunction(this.showCurrentLog));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    __dep_export_CastleModel.CastleModel.spyData.getSpyLog(this.messageVO.messageID);
    this.dialogDisp.mc_resourceList.visible = this.dialogDisp.mc_spySoldiers.visible = this.dialogDisp.mc_spyTools.visible = this.dialogDisp.mc_spyCitizens.visible = this.dialogDisp.mc_lordHolder.visible = false;
    this.dialogDisp.btn_help.visible = !this.messageVO.isPlagueLog;
    this.dialogDisp.btn_log.visible = this.messageVO.hasDetailedSpyLog();
    this.dialogDisp.aux_button.visible = false;
    if (this.messageVO.isSabotageLog) {
      this.itxt_title.textContentVO.textId = "dialog_spy_titleSabotage_suffix";
      this.itxt_title.textContentVO.textReplacements = [this.getResultTitleSuffix()];
      this.dialogDisp.mc_damage.visible = true;
      this.dialogDisp.mc_accuracy.visible = false;
      this.itxt_result.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COLON;
      this.itxt_result.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_Sabotage_resultFrom")];
      this.dialogDisp.mc_damage.toolTipText = this.messageVO.subtypeResult == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_SUCCESS ? "spy_dialog_sabotageDamage" : "spy_dialog_sabotageDamage_expected";
    } else if (this.messageVO.isPlagueLog) {
      this.dialogDisp.txt_title.text = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spy_titlePlague") + " - " + this.getResultTitleSuffix();
      this.dialogDisp.mc_damage.visible = true;
      this.dialogDisp.mc_accuracy.visible = false;
      this.itxt_result.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COLON;
      this.itxt_result.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_Plague_resultFrom")];
      this.dialogDisp.mc_damage.toolTipText = this.messageVO.subtypeResult == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_SUCCESS ? "spy_dialog_sabotageDamage" : "spy_dialog_sabotageDamage_expected";
    } else {
      this.dialogDisp.mc_damage.visible = false;
      this.dialogDisp.mc_accuracy.visible = true;
      this.itxt_title.textContentVO.textId = "dialog_spyLog_title";
      this.itxt_result.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COLON;
      this.itxt_result.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_resultFrom")];
      var __s8local0 = "spyWarning_attackNow";
      __s8local0 = this.messageVO.hasDetailedSpyLog() ? "spyWarning_attackNow" : (this.messageVO.isEcoSpyLog() && this.messageVO.isFailedSpyLog(), "spyWarning_tryAgain");
      this.textFieldManager.registerTextField(this.dialogDisp.aux_button.txt_field, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s8local0));
    }
    this.dialogDisp.kingdomIndicator1.gotoAndStop(1);
    this.dialogDisp.kingdomIndicator1.visible = false;
    this.dialogDisp.kingdomIndicator2.gotoAndStop(1);
    this.dialogDisp.kingdomIndicator2.visible = false;
    this.lordTooltipTrigger.show();
    __s1param0.prototype.showLoaded.call(this, __s8param0);
    this.disp.visible = false;
  };
  CastleSpyLogDialog.prototype.clear = function () {
    this.itxt_description.textContentVO.textId = "";
    this.i_txt_player_burgname.textContentVO.stringValue = "";
    this.i_risk_txt_value.textContentVO.textReplacements = [""];
    this.i_damage_txt_value.textContentVO.textReplacements = [""];
    this.i_accuracy_txt_value.textContentVO.textReplacements = [""];
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerlog1.txt_player_full, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerlog1.btn_player.txt_player_name, new __dep_exact_92d05af59ee2ff30_3.TextVO("")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerlog2.txt_player_full, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerlog2.btn_player.txt_player_name, new __dep_exact_92d05af59ee2ff30_3.TextVO("")).autoFitToBounds = true;
    this.dialogDisp.mc_legendIcon.visible = false;
    this.dialogDisp.mc_legendIcon_bg.visible = false;
  };
  Object.defineProperty(CastleSpyLogDialog.prototype, "messageVO", {
    get: function () {
      return this.dialogProperties.messageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyLogDialog.prototype.repositionButton = function () {
    this.dialogDisp.aux_button.y = this.dialogDisp.mc_resourceList.y + this.dialogDisp.mc_resourceList.height;
  };
  CastleSpyLogDialog.prototype.resizeBackground = function () {
    var __s21local0 = this.dialogDisp.aux_button.y + this.dialogDisp.aux_button.height;
    this.dialogDisp.background.height = __s21local0;
    this.dialogDisp.background.y = this.dialogDisp.background.height / 2;
  };
  CastleSpyLogDialog.prototype.hideLoaded = function (__s23param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.NEW_SPY_LOG, this.bindFunction(this.showCurrentLog));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    this.lordTooltipTrigger.hide();
    __s1param0.prototype.hideLoaded.call(this, __s23param0);
  };
  CastleSpyLogDialog.prototype.getResultTitleSuffix = function () {
    if (this.messageVO.messageType == __dep_exact_26a421b704832cff_2.MessageConst.MESSAGE_TYPE_SPY_PLAYER || this.messageVO.messageType == __dep_exact_26a421b704832cff_2.MessageConst.MESSAGE_TYPE_SPY_NPC) {
      switch (this.messageVO.subtypeResult) {
        case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_success");
        case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_FAILED:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_failure");
        case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_keptAway");
      }
    }
    return "";
  };
  CastleSpyLogDialog.prototype.getDescriptionText = function () {
    if (this.messageVO.messageType == __dep_exact_26a421b704832cff_2.MessageConst.MESSAGE_TYPE_SPY_PLAYER) {
      if (this.messageVO.subtypeSpy == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_ECO) {
        switch (this.messageVO.subtypeResult) {
          case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
            return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_spyResultsEco");
          case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_FAILED:
            return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_spyResultsFailed");
          case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
            return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_spyResultsKept");
        }
      } else {
        switch (this.messageVO.subtypeResult) {
          case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
            if (this.messageVO.subtypeSpy == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_DEFENCE) {
              return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_spyResultsMilitay");
            }
            if (this.messageVO.subtypeSpy == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_PLAQUE_MONK) {
              return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_plagueMessage_success");
            }
            if (this.messageVO.subtypeSpy == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_SABOTAGE) {
              return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_sabotageMessage_success");
            }
            break;
          case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_FAILED:
            if (this.messageVO.subtypeSpy == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_SABOTAGE) {
              return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_sabotageMessage_failed");
            } else if (this.messageVO.subtypeSpy == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_PLAQUE_MONK) {
              return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_plagueMessage_failed");
            } else {
              return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_spyResultsFailed");
            }
          case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
            if (this.messageVO.subtypeSpy == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_SABOTAGE) {
              return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_sabotageMessage_keptAway");
            } else if (this.messageVO.subtypeSpy == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_PLAQUE_MONK) {
              return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_plagueMessage_keptAway");
            } else {
              return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_spyResultsKept");
            }
        }
      }
    } else if (this.messageVO.messageType == __dep_exact_26a421b704832cff_2.MessageConst.MESSAGE_TYPE_SPY_NPC) {
      switch (this.messageVO.subtypeResult) {
        case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
          if (this.messageVO.subtypeSpy == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_DEFENCE) {
            return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_spyResultsMilitay");
          }
          break;
        case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_FAILED:
          if (this.messageVO.subtypeSpy == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_SABOTAGE) {
            return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_sabotageMessage_failed");
          } else if (__dep_export_PlayerHelper.PlayerHelper.isAlienInvasion(this.spyLogVO.enemyOwnerInfo.playerID)) {
            return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_spyResultsFailed_alienInvasion");
          } else {
            return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_spyResultsFailed");
          }
        case __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_spyResultsKept");
      }
    }
    return "";
  };
  CastleSpyLogDialog.prototype.fillPlayerLogInfo = function (__s51param0, __s51param1, __s51param2, __s51param3) {
    this.textFieldManager.registerTextField(__s51param0.txt_player_full, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s51param3)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(__s51param0.btn_player.txt_player_name, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s51param2.playerName)).autoFitToBounds = true;
    __s51param0.btn_player.properties = __s51param2.playerID;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s51param0.btn_player, !__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s51param2.playerID));
    if (this.spyLogVO.isFactionSpyLog) {
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s51param0.mc_playercrest, __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(__s51param2));
    } else {
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s51param0.mc_playercrest, __s51param2.crest, null, true);
      __s51param0.mc_playercrest.mouseChildren = false;
    }
    if (__s51param1) {
      __s51param0.mc_icon.gotoAndStop(1);
      __s51param0.mc_icon.toolTipText = "guards";
    } else if (this.spyLogVO.spyOwnerInfo.playerID == __dep_exact_26a421b704832cff_4.SpyConst.PLAGUEMONK_OWNER_ID) {
      __s51param0.mc_icon.gotoAndStop(3);
      __s51param0.mc_icon.toolTipText = "plaguemonks";
    } else {
      __s51param0.mc_icon.gotoAndStop(2);
      __s51param0.mc_icon.toolTipText = "spies";
    }
    __s51param0.mc_icon.mouseChildren = false;
  };
  CastleSpyLogDialog.prototype.onClick = function (__s58param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s58param0.target)) {
      __s1param0.prototype.onClick.call(this, __s58param0);
      switch (__s58param0.target) {
        case this.dialogDisp.btn_log:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpyinfoDetailsDialog.CastleSpyinfoDetailsDialog, new __dep_export_CastleSpyinfoDetailsDialogProperties.CastleSpyinfoDetailsDialogProperties(this.spyLogVO, this.messageVO, this.bindFunction(this.hide)));
          break;
        case this.dialogDisp.aux_button:
          if (!this.messageVO.hasDetailedSpyLog()) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpyDialog.CastleSpyDialog, new __dep_export_CastleSpyDialogProperties.CastleSpyDialogProperties(this.spyLogVO.mapobjectVO, __dep_export_CastleSpyDialog.CastleSpyDialog.TAB_SPY, true, this.messageVO.isEcoSpyLog()));
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSpyInfo.C2SGetSpyInfo(this.spyLogVO.mapobjectVO.absAreaPosX, this.spyLogVO.mapobjectVO.absAreaPosY, this.spyLogVO.mapobjectVO.kingdomID));
            this.hide();
            break;
          }
        case this.dialogDisp.btn_attack:
          if (this.isValidAttackTarget(this.spyLogVO.mapobjectVO)) {
            if (this.spyLogVO.mapobjectVO.isNpcCapital) {
              __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this.spyLogVO.mapobjectVO, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER, null);
            } else {
              __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this.spyLogVO.mapobjectVO, this.spyLogVO.mapobjectVO.attackType, this.bindFunction(this.hide));
            }
            this.hide();
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_noSpyData")));
            this.hide();
          }
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_return:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_spyLog"));
          break;
        case this.dialogDisp.txt_castlename:
          if (this.spyLogVO) {
            __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.spyLogVO.mapobjectVO);
            this.hide();
          }
          break;
        case this.dialogDisp.mc_playerlog1.btn_player:
        case this.dialogDisp.mc_playerlog2.btn_player:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s58param0.target.properties), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleSpyLogDialog.prototype.isValidAttackTarget = function (__s68param0) {
    var __s68local0 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName(__dep_exact_81dacdf05bd32292_2.getQualifiedClassName(__s68param0));
    var __s68local1 = [__dep_export_FactionCampMapobjectVO.FactionCampMapobjectVO, __dep_export_FactionCapitalMapobjectVO.FactionCapitalMapobjectVO, __dep_export_FactionTowerMapobjectVO.FactionTowerMapobjectVO, __dep_export_FactionVillageMapobjectVO.FactionVillageMapobjectVO];
    var __s68local2 = __dep_exact_f855840627e6e145.int(__s68local1.indexOf(__s68local0)) != -1;
    var __s68local3 = __s68local2 && __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION) != null;
    return !__s68local2 || __s68local3;
  };
  CastleSpyLogDialog.prototype.showCurrentLog = function (__s70param0) {
    __s1param0.prototype.showLoaded.call(this, null);
    this.controller.removeEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.NEW_SPY_LOG, this.bindFunction(this.showCurrentLog));
    this.spyLogVO = __s70param0.params[0];
    if (this.spyLogVO) {
      this.disp.visible = true;
      if (!this.spyLogVO.mapobjectVO.isOwnMapobject && this.spyLogVO.enemyOwnerInfo.playerID != __dep_export_CastleModel.CastleModel.userData.playerID) {
        this.controller.addEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PRE_SPYINFO_UPDATED, this.bindFunction(this.onPreSpyInfoUpdate));
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSpyInfo.C2SGetSpyInfo(this.spyLogVO.mapobjectVO.absAreaPosX, this.spyLogVO.mapobjectVO.absAreaPosY, this.spyLogVO.mapobjectVO.kingdomID));
      }
      this.itxt_description.textContentVO.textId = this.getDescriptionText();
      this.dialogDisp.kingdomIndicator1.visible = true;
      this.dialogDisp.kingdomIndicator2.visible = true;
      var __s70local0 = __dep_exact_f855840627e6e145.int(Math.min(this.spyLogVO.mapobjectVO.kingdomID + 1, this.dialogDisp.kingdomIndicator1.totalFrames));
      this.dialogDisp.kingdomIndicator1.gotoAndStop(__s70local0);
      this.dialogDisp.kingdomIndicator2.gotoAndStop(__s70local0);
      this.i_txt_player_burgname.textContentVO.stringValue = this.spyLogVO.getCastleName(this.messageVO.messageType);
      this.i_risk_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE;
      this.i_risk_txt_value.textContentVO.textReplacements = [this.spyLogVO.spyRisk];
      if (this.messageVO.isSabotageLog || this.messageVO.isPlagueLog) {
        this.i_damage_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE;
        this.i_damage_txt_value.textContentVO.textReplacements = [this.spyLogVO.spyAccuracy];
      } else {
        this.i_accuracy_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE;
        this.i_accuracy_txt_value.textContentVO.textReplacements = [this.spyLogVO.spyAccuracy];
      }
      this.updatePlayerLogSection();
      this.updateLootSection();
      this.updateLord();
      this.updateJumpToButton();
      this.updateLegendIcon();
      this.repositionButton();
      this.resizeBackground();
    } else {
      this.hide();
    }
  };
  CastleSpyLogDialog.prototype.updateAttackButton = function () {
    var __s77local0;
    this.dialogDisp.btn_attack.visible = this.messageVO.isDefenceSpyLog() && !this.messageVO.isFailedSpyLog() && !this.messageVO.forwarded && this.spyLogVO && this.spyLogVO.mapobjectVO.canBeAttacked() && !__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.spyLogVO.mapobjectVO, "WolfkingCastleMapObjectVO");
    if (this.spyLogVO != null && this.spyLogVO.mapobjectVO.remainingCooldownTimeInSeconds > 0) {
      var __s77local1 = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getShortTimeString(this.spyLogVO.mapobjectVO.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.ONE_TIME_FORMAT);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "castleHasCooldown",
        p: [__s77local1]
      };
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_attack, this.spyLogVO.mapobjectVO.cooldownCanBeSkipped);
    } else if (this.spyLogVO.mapobjectVO.kingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && this.spyLogVO.enemyOwnerInfo.isFactionProtected) {
      __s77local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this.spyLogVO.mapobjectVO.ownerInfo.remainingFactionProtectionTimeInSeconds);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [__s77local0]
      };
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.spyLogVO.mapobjectVO.kingdomID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && this.spyLogVO.enemyOwnerInfo.isPeaceProtected && !this.spyLogVO.mapobjectVO.ignoresPeaceMode) {
      __s77local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this.spyLogVO.mapobjectVO.ownerInfo.remainingPeaceTime);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [__s77local0]
      };
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.spyLogVO.enemyOwnerInfo.isNoobProtected && !this.spyLogVO.mapobjectVO.ignoresPeaceMode) {
      __s77local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this.spyLogVO.mapobjectVO.ownerInfo.remainingNoobTime);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [__s77local0]
      };
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.spyLogVO.isFactionSpyLog && (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.spyLogVO.mapobjectVO, "FactionTowerMapobjectVO") || __dep_exact_81dacdf05bd32292_3.instanceOfClass(this.spyLogVO.mapobjectVO, "FactionCapitalMapobjectVO"))) {
      this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_attack";
    } else {
      if (this.spyLogVO && (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.spyLogVO.mapobjectVO, "VillageMapobjectVO") || this.spyLogVO.mapobjectVO.isNpcCapital || this.spyLogVO.isFactionSpyLog)) {
        this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_village";
      } else {
        this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_attack";
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_attack, true);
    }
  };
  CastleSpyLogDialog.prototype.onPreSpyInfoUpdate = function (__s87param0) {
    this.controller.removeEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PRE_SPYINFO_UPDATED, this.bindFunction(this.onPreSpyInfoUpdate));
    var __s87local0 = __s87param0.params[0];
    if (this.spyLogVO) {
      this.dialogDisp.aux_button.visible = this.isAttackNowTryAgainButtonVisible();
      this.dialogDisp.aux_button.toolTipText = null;
      if (this.messageVO.hasDetailedSpyLog()) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.aux_button, this.spyLogVO && this.spyLogVO.mapobjectVO && this.spyLogVO.mapobjectVO.canBeAttacked());
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.aux_button, __s87local0 && __s87local0.availableSpies > 0);
        if (!this.dialogDisp.aux_button.enabled) {
          this.dialogDisp.aux_button.toolTipText = "ringmenu_toolTip_noFreeAgents";
        }
      }
      this.updateAttackButton();
    }
  };
  CastleSpyLogDialog.prototype.isAttackNowTryAgainButtonVisible = function () {
    return !this.messageVO.isSabotageLog && !this.messageVO.isPlagueLog && !this.messageVO.forwarded && this.spyLogVO.enemyOwnerInfo.playerID != __dep_export_CastleModel.CastleModel.userData.playerID && (!this.messageVO.isEcoSpyLog() || !!this.messageVO.isFailedSpyLog()) && !__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.spyLogVO.mapobjectVO, "WolfkingCastleMapObjectVO");
  };
  CastleSpyLogDialog.prototype.updatePlayerLogSection = function () {
    if (!this.spyLogVO.spyOwnerInfo || !this.spyLogVO.enemyOwnerInfo) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDarkOkDialog.CastleDarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("dialog_referFriend_failure_header", "dialog_attack_noSpyinfos_short"));
      this.hide();
      return;
    }
    this.fillPlayerLogInfo(this.dialogDisp.mc_playerlog1, false, this.spyLogVO.spyOwnerInfo, this.spyLogVO.spyCount);
    this.fillPlayerLogInfo(this.dialogDisp.mc_playerlog2, true, this.spyLogVO.enemyOwnerInfo, this.spyLogVO.guardCount);
  };
  CastleSpyLogDialog.prototype.updateLootSection = function () {
    this.resourceListComponent.destroy();
    var __s98local0 = this.messageVO.isDefenceSpyLog();
    var __s98local1 = this.messageVO.isEcoSpyLog();
    var __s98local2 = this.messageVO.isFailedSpyLog();
    this.dialogDisp.mc_resourceList.visible = __s98local0 || __s98local1 && !__s98local2;
    this.dialogDisp.mc_spySoldiers.visible = this.dialogDisp.mc_spyTools.visible = this.dialogDisp.mc_spyCitizens.visible = __s98local0;
    this.dialogDisp.background.height = this.normalBackgroundHeight;
    this.dialogDisp.btn_return.y = this.normalButtonY;
    this.dialogDisp.mc_resourceList.mc_background.scaleY = 1;
    if (this.messageVO.isEcoSpyLog()) {
      if (this.spyLogVO.spyResources.length > CastleSpyLogDialog.RESOURCE_ICONS_PER_ROW) {
        this.dialogDisp.background.height = this.normalBackgroundHeight + CastleSpyLogDialog.RESOURCE_OVERFLOW_OFFSET;
        this.dialogDisp.btn_return.y = this.normalButtonY + CastleSpyLogDialog.RESOURCE_OVERFLOW_OFFSET;
        this.dialogDisp.mc_resourceList.mc_background.scaleY = 1.59;
      }
      this.resourceListComponent.updateComponent(this.spyLogVO.spyResources, __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_result")]));
    }
    if (this.messageVO.isDefenceSpyLog()) {
      this.i_spySoldier_txt_loot.textContentVO.numberValue = this.spyLogVO.armyInfoVO.totalMilitarySoldierCount;
      this.i_spyTools_txt_loot.textContentVO.numberValue = this.spyLogVO.armyInfoVO.totalMilitaryDefenceToolCount;
      this.dialogDisp.mc_spySoldiers.mc_icon.gotoAndStop(CastleSpyLogDialog.FRAME_SOLDIERS);
      this.dialogDisp.mc_spyTools.mc_icon.gotoAndStop(CastleSpyLogDialog.FRAME_TOOLS);
      var __s98local3 = __dep_exact_f855840627e6e145.int(this.spyLogVO.armyInfoVO.getTotalCountByWOD(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_PEASANT_WOD));
      var __s98local4 = __dep_exact_f855840627e6e145.int(this.spyLogVO.armyInfoVO.getTotalCountByWOD(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_MILITIA_WOD));
      if (__s98local4 > __s98local3) {
        this.dialogDisp.mc_spyCitizens.mc_icon.gotoAndStop(CastleSpyLogDialog.FRAME_MILITIA);
        this.i_spyPeasant_txt_loot.textContentVO.numberValue = __s98local4;
        this.dialogDisp.mc_spyCitizens.toolTipText = "dialog_spyLog_amountMilitia";
      } else {
        this.dialogDisp.mc_spyCitizens.mc_icon.gotoAndStop(CastleSpyLogDialog.FRAME_PEASANTS);
        this.i_spyPeasant_txt_loot.textContentVO.numberValue = __s98local3;
        this.dialogDisp.mc_spyCitizens.toolTipText = "dialog_spyLog_amountPesants";
      }
    }
  };
  CastleSpyLogDialog.prototype.updateJumpToButton = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(this.spyLogVO.mapobjectVO.kingdomID)) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.txt_castlename, true);
      this.dialogDisp.txt_castlename.toolTipText = "panel_action_jumpTo";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.txt_castlename, false);
      this.dialogDisp.txt_castlename.toolTipText = "not_unlocked";
    }
  };
  CastleSpyLogDialog.prototype.updateLord = function () {
    this.dialogDisp.mc_lordHolder.visible = this.messageVO.isDefenceSpyLog();
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.spyLogVO.lordVO) {
      var __s109local0 = this.spyLogVO.lordVO;
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s109local0, this.dialogDisp.mc_lordHolder, 50);
      this.lordTooltipTrigger.setProperties(__s109local0, this.spyLogVO.mapobjectVO, this.spyLogVO.mapobjectVO, __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_ACTIVE, false);
    }
    this.updateAttackButton();
  };
  CastleSpyLogDialog.prototype.updateLegendIcon = function () {
    if ((this.spyLogVO.enemyOwnerInfo.isLegend || __dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(this.spyLogVO.enemyOwnerInfo.playerID) && this.spyLogVO.enemyOwnerInfo.playerLevel >= __dep_exact_26a421b704832cff_3.PlayerConst.LEVEL_CAP) && this.messageVO.subtypeResult == __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_ATTACKER_SUCCESS && !this.messageVO.isPlagueLog && this.messageVO.subtypeSpy != __dep_exact_26a421b704832cff_2.MessageConst.SUBTYPE_SPY_SABOTAGE) {
      if (this.spyLogVO.spyOwnerInfo.isLegend) {
        this.dialogDisp.mc_legendIcon.gotoAndStop(1);
        var __s112local0 = __dep_export_CastleLegendEffectTextComposer.CastleLegendEffectTextComposer.getLegendBonusText(this.spyLogVO.legendSkills);
        if (__s112local0.length == 0) {
          __s112local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_legendTemple_tooltip_header") + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("equip_effect_no_effect");
        }
        this.dialogDisp.mc_legendIcon.toolTipText = __s112local0;
      } else {
        this.dialogDisp.mc_legendIcon.gotoAndStop(2);
        this.dialogDisp.mc_legendIcon.toolTipText = "legendTemple_espionage_false";
      }
      this.dialogDisp.mc_legendIcon.visible = true;
      this.dialogDisp.mc_legendIcon_bg.visible = true;
      this.dialogDisp.mc_legendIcon.mouseChildren = false;
    } else {
      this.dialogDisp.mc_legendIcon.visible = false;
      this.dialogDisp.mc_legendIcon_bg.visible = false;
    }
  };
  CastleSpyLogDialog.prototype.onSpecialEventRemoved = function (__s119param0) {
    if (this.spyLogVO) {
      var __s119local0 = this.spyLogVO.mapobjectVO;
      if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s119local0, "AInvasionEventMapObjectVO") && __s119param0.specialEventVO.eventId == __s119local0.eventType) {
        this.hide();
      }
    }
  };
  CastleSpyLogDialog.NAME = "CastleSpyLog";
  CastleSpyLogDialog.FRAME_SOLDIERS = 13;
  CastleSpyLogDialog.FRAME_TOOLS = 15;
  CastleSpyLogDialog.FRAME_PEASANTS = 14;
  CastleSpyLogDialog.FRAME_MILITIA = 16;
  CastleSpyLogDialog.RESOURCE_ICONS_PER_ROW = 4;
  CastleSpyLogDialog.RESOURCE_OVERFLOW_OFFSET = 50;
  return CastleSpyLogDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSpyLogDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_FactionCampMapobjectVO = require("gge-module:export_FactionCampMapobjectVO");
var __dep_export_FactionCapitalMapobjectVO = require("gge-module:export_FactionCapitalMapobjectVO");
var __dep_export_FactionTowerMapobjectVO = require("gge-module:export_FactionTowerMapobjectVO");
var __dep_export_FactionVillageMapobjectVO = require("gge-module:export_FactionVillageMapobjectVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleResourceListComponent = require("gge-module:export_CastleResourceListComponent");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastleSpyDialog = require("gge-module:export_CastleSpyDialog");
var __dep_export_CastleSpyinfoDetailsDialog = require("gge-module:export_CastleSpyinfoDetailsDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
