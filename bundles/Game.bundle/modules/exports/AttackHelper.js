Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectConditionHelper = require("gge-module:export_EffectConditionHelper");
var __dep_export_AllianceRaidEventPortalMapobjectVO = require("gge-module:export_AllianceRaidEventPortalMapobjectVO");
var __dep_export_WolfkingCastleMapObjectVO = require("gge-module:export_WolfkingCastleMapObjectVO");
var __dep_export_CastleStartAttackDialogProperties = require("gge-module:export_CastleStartAttackDialogProperties");
var __dep_export_SkippableCooldownDialogProperties = require("gge-module:export_SkippableCooldownDialogProperties");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __s0local0 = function () {
  function AttackHelper() {}
  AttackHelper.executeAttackCommand = function (__s5param0, __s5param1, __s5param2) {
    if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param0, "DungeonMapobjectVO") && __dep_export_CastleModel.CastleModel.userData.userLevel < __dep_exact_26a421b704832cff.CombatConst.MIN_ATTACK_PLAYER_LEVEL) {
      var __s5local0 = "dialog_attackWithLowLevel_NPC";
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param0, "UpgradableLandmarkMapobjectVO")) {
        if (__s5param0.isPlayerOwned) {
          __s5local0 = "dialog_attackWithLowLevel";
        }
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param0, "KingstowerMapobjectVO") && __s5param0.isPlayerOwned) {
        __s5local0 = "dialog_attackWithLowLevel";
      }
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text(__s5local0, [__dep_exact_26a421b704832cff.CombatConst.MIN_ATTACK_PLAYER_LEVEL]), __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL, null, null, false, [__s5param0, __s5param1]));
      return;
    }
    var __s5local1 = [__s5param0, __s5param1, __s5param2];
    if (!AttackHelper.checkProtectionStatus(__s5param0, __s5param1) || __dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      if (__s5param0.isCoolingDown && __s5param0.cooldownCanBeSkipped) {
        var __s5local2 = new __dep_export_SkippableCooldownDialogProperties.SkippableCooldownDialogProperties(__s5param0, AttackHelper._onAttackCommandConfirmed, __s5local1);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SkippableCooldownDialog.SkippableCooldownDialog, __s5local2);
      } else {
        AttackHelper._onAttackCommandConfirmed(__s5local1);
      }
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attackWithNoobProtection"), __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL, AttackHelper._onAttackCommandConfirmed, null, true, __s5local1));
    }
  };
  AttackHelper.checkProtectionStatus = function (__s15param0, __s15param1) {
    var __s15local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15param0, "NomadCampMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15param0, "NomadKhanCampMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15param0, "SamuraiCampMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15param0, "FactionInvasionCampMapObjectVO");
    var __s15local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
    var __s15local2 = !__dep_export_ClientConstUtils.ClientConstUtils.isObjectClassOf(__s15param0, [__dep_export_DungeonMapobjectVO.DungeonMapobjectVO, __dep_export_EventdungeonMapobjectVO.EventdungeonMapobjectVO, __dep_export_BossdungeonMapobjectVO.BossdungeonMapobjectVO, __dep_export_DaimyoCastleMapObjectVO.DaimyoCastleMapObjectVO, __dep_export_WolfkingCastleMapObjectVO.WolfkingCastleMapObjectVO, __dep_export_AllianceRaidEventPortalMapobjectVO.AllianceRaidEventPortalMapobjectVO]) && !__s15local0;
    var __s15local3 = __dep_export_CastleModel.CastleModel.userData.isNoobProtectedInKingdom(__s15param0.kingdomID);
    var __s15local4 = __dep_export_CastleModel.CastleModel.userData.isInPeaceMode && (__dep_export_CastleModel.CastleModel.userData.peaceModeStatus == __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PEACETIME || __dep_export_CastleModel.CastleModel.userData.peaceModeStatus == __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PRETIME);
    var __s15local5 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15param0, "FactionCampMapobjectVO");
    var __s15local6 = !!__s15local1 && __s15local1.factionProtectionStatus > -1;
    var __s15local7 = __s15param1 == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK;
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID) {
      return __s15local2 && __s15local3 || __s15local5 && __s15local6;
    } else {
      return !__s15local7 && __s15local2 && (__s15local3 || __s15local4);
    }
  };
  AttackHelper.canDrawCastle = function (__s19param0) {
    switch (__s19param0.areaType) {
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ALIEN_CAMP:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_RED_ALIEN_CAMP:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_NOMAD_CAMP:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_TOWER:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_CAPITAL:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_VILLAGE:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ISLE_RESOURCE:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_SAMURAI_CAMP:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_DAIMYO_CASTLE:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER:
      case __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ARE_PORTAL:
        return true;
    }
    return !(__s19param0.wallLevel <= 0) || !(__s19param0.gateLevel <= 0) || !(__s19param0.towerLevel <= 0) || !(__s19param0.moatLevel <= 0);
  };
  AttackHelper.canUseToolForAttackOnTarget = function (__s22param0, __s22param1, __s22param2) {
    var __s22local0 = __s22param1.canBeUsedToAttackNPC || __s22param0.hasOtherPlayerInfo || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s22param0, "AAlienInvasionMapobjectVO");
    var __s22local1 = __s22param1.isAllowedByAttackTarget(__s22param2, __s22param0.areaType);
    if (!AttackHelper.isToolUsableAgainstActiveRaidBoss(__s22param1)) {
      return false;
    }
    if (__s22local0 && __s22local1) {
      var __s22local2 = __dep_exact_81dacdf05bd32292.castAs(__s22param1, "EventtoolUnitVO");
      if (!__s22local2 || !(__s22local2.usedForEvent.length > 0) || __s22local2.inventoryAmount != 0) {
        return true;
      }
      for (var __s22local3 = 0, __s22local4 = __s22local2.usedForEvent; __s22local3 < __s22local4.length; __s22local3++) {
        var __s22local5 = __s22local4[__s22local3];
        if (__s22local5 !== undefined && __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__s22local5)) {
          return true;
        }
      }
    }
    return false;
  };
  AttackHelper.isToolUsableAgainstActiveRaidBoss = function (__s30param0) {
    var __s30local0 = __s30param0.effects;
    if (__s30local0.length == 0) {
      return true;
    }
    var __s30local1 = false;
    for (var __s30local2 = 0, __s30local3 = __s30local0; __s30local2 < __s30local3.length; __s30local2++) {
      var __s30local4 = __s30local3[__s30local2];
      if (__s30local4 && __s30local4.effect) {
        if (__s30local4.effect.raidBossIDs.length == 0) {
          return true;
        }
        __s30local1 = true;
        if (__dep_export_EffectConditionHelper.EffectConditionHelper.isEffectForActiveRaidBoss(__s30local4.effect)) {
          return true;
        }
      }
    }
    return !__s30local1;
  };
  AttackHelper._onAttackCommandConfirmed = function (__s38param0) {
    var __s38local0 = __s38param0[0];
    var __s38local1 = __dep_exact_f855840627e6e145.int(__s38param0[1]);
    var __s38local2 = __dep_exact_81dacdf05bd32292.castAs(__s38param0[2], "Function");
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartAttackDialog.CastleStartAttackDialog, new __dep_export_CastleStartAttackDialogProperties.CastleStartAttackDialogProperties(__s38local0, __s38local1));
    if (__s38local2 != null) {
      __s38local2();
    }
  };
  return AttackHelper;
}();
exports.AttackHelper = __s0local0;
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
var __dep_export_BossdungeonMapobjectVO = require("gge-module:export_BossdungeonMapobjectVO");
var __dep_export_DaimyoCastleMapObjectVO = require("gge-module:export_DaimyoCastleMapObjectVO");
var __dep_export_DungeonMapobjectVO = require("gge-module:export_DungeonMapobjectVO");
var __dep_export_EventdungeonMapobjectVO = require("gge-module:export_EventdungeonMapobjectVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStartAttackDialog = require("gge-module:export_CastleStartAttackDialog");
var __dep_export_SkippableCooldownDialog = require("gge-module:export_SkippableCooldownDialog");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
