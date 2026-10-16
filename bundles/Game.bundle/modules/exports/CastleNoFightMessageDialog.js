Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleNoFightMessageDialog() {
    return __s1param0.call(this, CastleNoFightMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNoFightMessageDialog, __s1param0);
  CastleNoFightMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_player], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleNoFightMessageDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    var __s7local0;
    var __s7local1;
    var __s7local2 = this.textFieldManager.registerTextField(this.dialogDisp.btn_player.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    var __s7local3 = this.dialogProperties.messageVO.senderName;
    __s7local2.textContentVO = __s7local3 && __s7local3 != "" ? new __dep_exact_92d05af59ee2ff30_1.TextVO(__s7local3) : new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("Unknown_name");
    this.dialogDisp.btn_player.toolTipText = "panel_action_jumpTo";
    this.dialogDisp.btn_player.KID = this.dialogProperties.messageVO.kingdomID;
    var __s7local4 = this.dialogProperties.messageVO.ownerID;
    this.dialogDisp.btn_player.areaPos = new __s0local0(this.dialogProperties.messageVO.posX, this.dialogProperties.messageVO.posY);
    if (this.dialogProperties.messageVO.messageType == __dep_exact_26a421b704832cff_3.MessageConst.MESSAGE_TYPE_SPY_CANCELLED) {
      __s7local0 = "spyWarning_warning";
      __s7local1 = "dialog_noSpyMessage_copy";
    } else if (this.dialogProperties.messageVO.subtypeAttackCancelled == __dep_exact_26a421b704832cff_3.MessageConst.SUBTYPE_ATTACK_ABORTED) {
      var __s7local5 = __dep_exact_f855840627e6e145.int(this.dialogProperties.messageVO.reason);
      if (__s7local5 == __dep_exact_26a421b704832cff_3.MessageConst.BATTLE_LOG_CANCELLED_COOLDOWN) {
        __s7local1 = this.dialogProperties.messageVO.areaType == __dep_exact_26a421b704832cff_4.WorldConst.AREA_TYPE_FACTION_TOWER ? "dialog_noFightMessage_berimondTower_copy" : "dialog_noFightMessage_cooldown_copy";
      } else if (__s7local5 == __dep_exact_26a421b704832cff_3.MessageConst.BATTLE_LOG_CANCELLED_STARVATION) {
        __s7local1 = "dialog_noFightMessage_starvation_copy";
      } else {
        var __s7local6 = __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_player, __s7local6);
        this.dialogDisp.btn_player.mouseEnabled = __s7local6;
        if (__s7local4 <= __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_NOMAD_CAMP_FIRST_ID && __s7local4 >= __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_NOMAD_CAMP_LAST_ID) {
          __s7local1 = "dialog_noFightMessage_Nomads_copy";
        } else if (__s7local4 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP) {
          __s7local1 = __dep_export_CastleModel.CastleModel.userData.isInAlliance ? "dialog_noFightMessage_khanCampLevelUp" : "dialog_noFightMessage_khanCampNoAlliance";
        } else if (this.dialogProperties.messageVO.areaType == __dep_exact_26a421b704832cff_4.WorldConst.AREA_TYPE_ARE_PORTAL) {
          __s7local0 = "dialog_are_troopsreturn_title";
          __s7local1 = "dialog_are_troopsreturn_desc";
        } else {
          __s7local1 = "dialog_noFightMessage_copy";
        }
      }
      __s7local0 ||= "dialog_noFightMessage_title";
    } else if (this.dialogProperties.messageVO.subtypeAttackCancelled == __dep_exact_26a421b704832cff_3.MessageConst.SUBTYPE_ATTACK_AUTO_RETREAT) {
      __s7local0 = "dialog_message_retreatTroops_attacker_header";
      __s7local1 = "dialog_message_retreatTroops_attacker_copy";
    } else if (this.dialogProperties.messageVO.subtypeAttackCancelled == __dep_exact_26a421b704832cff_3.MessageConst.SUBTYPE_ATTACK_AUTO_RETREAT_ENEMY) {
      __s7local0 = "dialog_message_retreatTroops_defender_header";
      __s7local1 = "dialog_message_retreatTroops_defender_copy";
    }
    var __s7local7 = "";
    if (this.dialogProperties.messageVO.autoSkipType > __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF) {
      __s7local7 = "dialog_noFightMessage_autoCooldownSkip";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local0)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local7));
  };
  CastleNoFightMessageDialog.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_player:
        if (this.dialogDisp.btn_player.KID == __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID && !__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION)) {
          break;
        }
        if (!__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) && this.dialogProperties.messageVO.areaType == __dep_exact_26a421b704832cff_4.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceNomadInvasionDialog.CastleAllianceNomadInvasionDialog, new __dep_export_CastleAllianceNomadInvasionEventDialogProperties.CastleAllianceNomadInvasionEventDialogProperties(__dep_export_CastleAllianceNomadInvasionDialog.CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT));
        } else {
          var __s21local0 = new __dep_export_UnknownMapobjectVO.UnknownMapobjectVO();
          __s21local0.parseAreaInfo([this.dialogDisp.btn_player.areaPos.x, this.dialogDisp.btn_player.areaPos.y, this.dialogDisp.btn_player.KID]);
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s21local0);
        }
        this.hide();
    }
  };
  Object.defineProperty(CastleNoFightMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNoFightMessageDialog.NAME = "CastleNoFightMessageEx_JUN23";
  return CastleNoFightMessageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleNoFightMessageDialog = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_UnknownMapobjectVO = require("gge-module:export_UnknownMapobjectVO");
var __dep_export_CastleAllianceNomadInvasionDialog = require("gge-module:export_CastleAllianceNomadInvasionDialog");
var __dep_export_CastleAllianceNomadInvasionEventDialogProperties = require("gge-module:export_CastleAllianceNomadInvasionEventDialogProperties");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
