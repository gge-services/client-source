import { AllianceBuffData } from "./AllianceBuffData";
import { AllianceConst } from "../../../ggs.dll/reconstructed/exports/AllianceConst";
import { AllianceRaidConst } from "./AllianceRaidConst";
import { CastleAllianceBuyBoostDialogProperties } from "./CastleAllianceBuyBoostDialogProperties";
import { CastleAllianceBuyCustomizableBoostDialog } from "./CastleAllianceBuyCustomizableBoostDialog";
import { CastleAllianceBuyCustomizableBoostDialogProperties } from "./CastleAllianceBuyCustomizableBoostDialogProperties";
import { CastleAllianceBuyStandardBoostDialog } from "./CastleAllianceBuyStandardBoostDialog";
import { CastleAllianceBuyTemporaryBoostDialogProperties } from "./CastleAllianceBuyTemporaryBoostDialogProperties";
import { CastleAllianceBuyTemporaryBoostExternalDialog } from "./CastleAllianceBuyTemporaryBoostExternalDialog";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { GenericTextIds } from "../../../ggs.dll/reconstructed/exports/GenericTextIds";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TimeStringHelper } from "../../../ggs.dll/reconstructed/exports/TimeStringHelper";
export class OpenAllianceBuyBoosterCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0;
    var __s5local1;
    var __s5local2;
    var __s5local3;
    var __s5local4 = __s5param0[0];
    var __s5local5 = int(__s5param0[1]);
    var __s5local6 = __s5param0[2];
    if (__s5param0.length >= 4) {
      __s5local0 = __s5param0[3];
    }
    var __s5local7 = TimeStringHelper.getTimeToString(__s5local4.getBoostDuration(__s5local5, __s5local4.getBoostLevel(__s5local5) + 1), TimeStringHelper.ONE_TIME_HOURS_FORMAT, Localize.text);
    var __s5local8 = __s5local4.isBoosterTemporary(__s5local5);
    var __s5local9 = __s5local8 && __s5local4.isTemporaryBoosterActive(__s5local5);
    var __s5local10 = AllianceBuffData.CUSTOMIZABLE_BUFFS.indexOf(__s5local5) > -1;
    __s5local1 = __s5local8 ? __s5local9 ? Localize.text("dialog_alliance_prolongEffect_header") : __s5local10 ? Localize.text("dialog_alliance_temporaryBoost_activate_title") : Localize.text("dialog_alliance_activateEffect_header") : Localize.text("dialog_alliance_raiseEffect");
    __s5local3 = Localize.text(GenericTextIds.VALUE_PERCENTAGE_ADD, [__s5local4.getUpgradeBoostValue(__s5local5, __s5local6)]);
    switch (__s5local5) {
      case AllianceConst.TYPE_MEMBERS:
        __s5local1 = Localize.text("dialog_alliance_raiseMemberLimit");
        __s5local2 = Localize.text("dialog_alliance_raiseMemberLimit_desc");
        __s5local3 = Localize.text(GenericTextIds.VALUE_NOMINAL_ADD, [__s5local4.additionalMemberForNextLevel]);
        break;
      case AllianceConst.TYPE_DEFENSE_SPEED_BOOST:
        __s5local2 = Localize.text("dialog_alliance_raiseDefenceBoost_desc");
        break;
      case AllianceConst.TYPE_MARKET_SPEED_BOOST:
        __s5local2 = Localize.text("dialog_alliance_raiseMarketBoost_desc");
        break;
      case AllianceConst.TYPE_DEPOSIT_BONUS:
        __s5local2 = Localize.text("dialog_alliance_raiseDepositBonus_desc");
        break;
      case AllianceConst.TYPE_MARAUDER_BONUS:
        __s5local2 = Localize.text("dialog_alliance_raiseMarauderBonus_desc");
        break;
      case AllianceConst.TYPE_ATTACK_SPEED_BOOST:
        __s5local2 = Localize.text("dialog_alliance_raiseAttackBoost_desc");
        break;
      case AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST:
        __s5local2 = Localize.text(__s5local9 ? "dialog_alliance_temporaryBoost_attackPower_prolong_desc" : "dialog_alliance_temporaryBoost_attackPower_desc", [__s5local7]);
        break;
      case AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST:
        __s5local2 = Localize.text(__s5local9 ? "dialog_alliance_temporaryBoost_defencePower_prolong_desc" : "dialog_alliance_temporaryBoost_defencePower_desc", [__s5local7]);
        break;
      case AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST:
        __s5local2 = Localize.text(__s5local9 ? "dialog_alliance_temporaryBoost_supportTravel_prolong_desc" : "dialog_alliance_temporaryBoost_supportTravel_desc", [__s5local7]);
        break;
      case AllianceConst.TYPE_TEMP_GLORY_BOOST:
        __s5local2 = Localize.text(__s5local9 ? "dialog_alliance_temporaryBoost_glory_prolong_desc" : "dialog_alliance_temporaryBoost_glory_desc", [__s5local7]);
        break;
      case AllianceConst.TYPE_RAGE_POINT_BOOST:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_allianceRageBoost_desc");
        break;
      case AllianceConst.TYPE_COOLDOWN_REDUCTION_KHAN:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_allianceCooldownReductionKhan_desc");
        break;
      case AllianceConst.TYPE_COOLDOWN_REDUCTION_NOMADS:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_allianceCooldownReductionNomad_desc");
        break;
      case AllianceConst.TYPE_ALIEN_ATTACK_BOOST:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_allianceAttackBoostAliens_desc");
        break;
      case AllianceConst.TYPE_DAIMYO_ATTACK_BOOST:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_allianceAttackBoostDaimyo_desc");
        break;
      case AllianceConst.TYPE_KHAN_DEFENSE_BOOST:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_allianceDefenseBoostKhan_desc");
        break;
      case AllianceConst.TYPE_HEALING_SPEED_BOOST:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_healingSpeedIncreaseBoostPremium_desc");
        break;
      case AllianceConst.TYPE_INFLUENCE_POINT_BOOST:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_BGCollectorBoost_desc");
        break;
      case AllianceConst.TYPE_COOLDOWN_REDUCTION_SAMURAI_CAMP:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_allianceSamuraiCooldownReduction_desc");
        break;
      case AllianceConst.TYPE_COOLDOWN_REDUCTION_DAIYMO:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_allianceDaimyoCooldownReduction_desc");
        break;
      case AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_COMMON:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_TemporaryCommonAttackBonus_desc");
        break;
      case AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_RARE:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_TemporaryRareAttackBonus_desc");
        break;
      case AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_EPIC:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_TemporaryEpicAttackBonus_desc");
        break;
      case AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_LEGENDARY:
        __s5local2 = Localize.text("dialog_alliance_temporaryBoost_TemporaryLegendaryAttackBonus_desc");
        break;
      default:
        return;
    }
    if (__s5local10) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceBuyCustomizableBoostDialog, new CastleAllianceBuyCustomizableBoostDialogProperties(__s5local1, __s5local2, __s5local5, __s5local0, __s5local9));
    } else if (__s5local8) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceBuyTemporaryBoostExternalDialog, new CastleAllianceBuyTemporaryBoostDialogProperties(__s5local1, __s5local2, __s5local3, __s5local7, __s5local4.getUpgradeCosts(__s5local5), __s5local5, __s5local0));
    } else {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceBuyStandardBoostDialog, new CastleAllianceBuyBoostDialogProperties(__s5local1, __s5local2, __s5local3, __s5local4.getUpgradeCosts(__s5local5), __s5local5, __s5local0));
    }
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
}
