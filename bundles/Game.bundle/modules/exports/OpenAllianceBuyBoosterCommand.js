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
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AllianceRaidConst = require("gge-module:export_AllianceRaidConst");
var __dep_export_CastleAllianceBuyBoostDialogProperties = require("gge-module:export_CastleAllianceBuyBoostDialogProperties");
var __dep_export_CastleAllianceBuyCustomizableBoostDialogProperties = require("gge-module:export_CastleAllianceBuyCustomizableBoostDialogProperties");
var __dep_export_CastleAllianceBuyTemporaryBoostDialogProperties = require("gge-module:export_CastleAllianceBuyTemporaryBoostDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenAllianceBuyBoosterCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenAllianceBuyBoosterCommand, __s1param0);
  OpenAllianceBuyBoosterCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0;
    var __s5local1;
    var __s5local2;
    var __s5local3;
    var __s5local4 = __s5param0[0];
    var __s5local5 = __dep_exact_f855840627e6e145.int(__s5param0[1]);
    var __s5local6 = __s5param0[2];
    if (__s5param0.length >= 4) {
      __s5local0 = __s5param0[3];
    }
    var __s5local7 = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeToString(__s5local4.getBoostDuration(__s5local5, __s5local4.getBoostLevel(__s5local5) + 1), __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.ONE_TIME_HOURS_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    var __s5local8 = __s5local4.isBoosterTemporary(__s5local5);
    var __s5local9 = __s5local8 && __s5local4.isTemporaryBoosterActive(__s5local5);
    var __s5local10 = __dep_export_AllianceBuffData.AllianceBuffData.CUSTOMIZABLE_BUFFS.indexOf(__s5local5) > -1;
    __s5local1 = __s5local8 ? __s5local9 ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_prolongEffect_header") : __s5local10 ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_activate_title") : __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_activateEffect_header") : __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_raiseEffect");
    __s5local3 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s5local4.getUpgradeBoostValue(__s5local5, __s5local6)]);
    switch (__s5local5) {
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS:
        __s5local1 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_raiseMemberLimit");
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_raiseMemberLimit_desc");
        __s5local3 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_NOMINAL_ADD, [__s5local4.additionalMemberForNextLevel]);
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_DEFENSE_SPEED_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_raiseDefenceBoost_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_MARKET_SPEED_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_raiseMarketBoost_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_DEPOSIT_BONUS:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_raiseDepositBonus_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_MARAUDER_BONUS:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_raiseMarauderBonus_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_ATTACK_SPEED_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_raiseAttackBoost_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__s5local9 ? "dialog_alliance_temporaryBoost_attackPower_prolong_desc" : "dialog_alliance_temporaryBoost_attackPower_desc", [__s5local7]);
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__s5local9 ? "dialog_alliance_temporaryBoost_defencePower_prolong_desc" : "dialog_alliance_temporaryBoost_defencePower_desc", [__s5local7]);
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__s5local9 ? "dialog_alliance_temporaryBoost_supportTravel_prolong_desc" : "dialog_alliance_temporaryBoost_supportTravel_desc", [__s5local7]);
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_GLORY_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__s5local9 ? "dialog_alliance_temporaryBoost_glory_prolong_desc" : "dialog_alliance_temporaryBoost_glory_desc", [__s5local7]);
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_RAGE_POINT_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_allianceRageBoost_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_KHAN:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_allianceCooldownReductionKhan_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_NOMADS:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_allianceCooldownReductionNomad_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_ALIEN_ATTACK_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_allianceAttackBoostAliens_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_DAIMYO_ATTACK_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_allianceAttackBoostDaimyo_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_KHAN_DEFENSE_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_allianceDefenseBoostKhan_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_HEALING_SPEED_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_healingSpeedIncreaseBoostPremium_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_INFLUENCE_POINT_BOOST:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_BGCollectorBoost_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_SAMURAI_CAMP:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_allianceSamuraiCooldownReduction_desc");
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_DAIYMO:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_allianceDaimyoCooldownReduction_desc");
        break;
      case __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_COMMON:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_TemporaryCommonAttackBonus_desc");
        break;
      case __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_RARE:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_TemporaryRareAttackBonus_desc");
        break;
      case __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_EPIC:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_TemporaryEpicAttackBonus_desc");
        break;
      case __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_LEGENDARY:
        __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_TemporaryLegendaryAttackBonus_desc");
        break;
      default:
        return;
    }
    if (__s5local10) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceBuyCustomizableBoostDialog.CastleAllianceBuyCustomizableBoostDialog, new __dep_export_CastleAllianceBuyCustomizableBoostDialogProperties.CastleAllianceBuyCustomizableBoostDialogProperties(__s5local1, __s5local2, __s5local5, __s5local0, __s5local9));
    } else if (__s5local8) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceBuyTemporaryBoostExternalDialog.CastleAllianceBuyTemporaryBoostExternalDialog, new __dep_export_CastleAllianceBuyTemporaryBoostDialogProperties.CastleAllianceBuyTemporaryBoostDialogProperties(__s5local1, __s5local2, __s5local3, __s5local7, __s5local4.getUpgradeCosts(__s5local5), __s5local5, __s5local0));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceBuyStandardBoostDialog.CastleAllianceBuyStandardBoostDialog, new __dep_export_CastleAllianceBuyBoostDialogProperties.CastleAllianceBuyBoostDialogProperties(__s5local1, __s5local2, __s5local3, __s5local4.getUpgradeCosts(__s5local5), __s5local5, __s5local0));
    }
  };
  Object.defineProperty(OpenAllianceBuyBoosterCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return OpenAllianceBuyBoosterCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenAllianceBuyBoosterCommand = __s0local0;
var __dep_export_AllianceBuffData = require("gge-module:export_AllianceBuffData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleAllianceBuyCustomizableBoostDialog = require("gge-module:export_CastleAllianceBuyCustomizableBoostDialog");
var __dep_export_CastleAllianceBuyStandardBoostDialog = require("gge-module:export_CastleAllianceBuyStandardBoostDialog");
var __dep_export_CastleAllianceBuyTemporaryBoostExternalDialog = require("gge-module:export_CastleAllianceBuyTemporaryBoostExternalDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
