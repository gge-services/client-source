Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_6 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_CastlePremiumMarketPlaceDialogProperties = require("gge-module:export_CastlePremiumMarketPlaceDialogProperties");
var __dep_export_CastleDefenceDialog = require("gge-module:export_CastleDefenceDialog");
var __dep_export_CastleDefenceDialogProperties = require("gge-module:export_CastleDefenceDialogProperties");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_GeneralsOverviewDialog = require("gge-module:export_GeneralsOverviewDialog");
var __dep_export_OptionsDialog = require("gge-module:export_OptionsDialog");
var __dep_export_OptionsDialogProperties = require("gge-module:export_OptionsDialogProperties");
var __dep_export_CastleRecruitDialogProperties = require("gge-module:export_CastleRecruitDialogProperties");
var __dep_export_CastleResearchDialogProperties = require("gge-module:export_CastleResearchDialogProperties");
var __dep_export_CastleAllianceNomadInvasionEventDialogProperties = require("gge-module:export_CastleAllianceNomadInvasionEventDialogProperties");
var __dep_export_CastleAllianceSamuraiInvasionEventDialogProperties = require("gge-module:export_CastleAllianceSamuraiInvasionEventDialogProperties");
var __dep_export_C2SMapFacebookVO = require("gge-module:export_C2SMapFacebookVO");
var __dep_export_C2SGetEquipmentInventory = require("gge-module:export_C2SGetEquipmentInventory");
var __dep_export_C2SGetGemInventory = require("gge-module:export_C2SGetGemInventory");
var __dep_export_C2SFindNextTowerVO = require("gge-module:export_C2SFindNextTowerVO");
var __dep_export_C2SFindNextEnemyCastleVO = require("gge-module:export_C2SFindNextEnemyCastleVO");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_C2SJoinCampVO = require("gge-module:export_C2SJoinCampVO");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ShowHowToDoQuestconditionCommand() {
    var __s3local0 = this;
    __s3local0.canGoOn = true;
    __s3local0.waitingFunctions = [];
    __s3local0.onWaitingState = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ShowHowToDoQuestconditionCommand, __s1param0);
  ShowHowToDoQuestconditionCommand.prototype.execute = function (__s5param0 = null) {
    if (!this.onWaitingState) {
      var __s5local0;
      var __s5local1;
      this.questVO = __s5param0[0];
      this.conditionVO = __s5param0[1];
      this.canGoOn = true;
      ShowHowToDoQuestconditionCommand.layoutManager.hideAllDialogs();
      if (this.questVO) {
        var __s5local2 = this.questVO.mapID > -1 ? this.questVO.mapID : this.questVO.triggerKingdomID;
        if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s5local2)) {
          return;
        }
      }
      switch (this.conditionVO.conditionType) {
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
          this.go(this.bindFunction(this.toIsoState));
          if (__dep_exact_f855840627e6e145.int(this.conditionVO.conditionData.length) > 1) {
            __s5local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]);
            __s5local1 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[1]);
            this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s5local0, __s5local1);
          } else {
            if ((__s5local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]), "ABasicBuildingVO")).level == 1 && !__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "GuardTowerVO") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "CastlewallDefenceVO")) {
              this.go(this.bindFunction(this.toDecoState));
            }
            this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s5local0);
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_EXPANSIONS:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDecoState));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DECOS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LAW_AND_ORDER:
          __s5local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]);
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDecoState));
          this.go(this.bindFunction(this.toDecoShopTab), __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DECO, __s5local0);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_STORAGE:
          __s5local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]);
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDecoState));
          this.go(this.bindFunction(this.toDecoShopTab), __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE, __s5local0);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TOOL_START:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_UNITS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TOOLS:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toRecruitDialog));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OFF_UNITS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEF_UNITS:
          if (__dep_exact_26a421b704832cff_3.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.questVO.mapID) > -1) {
            var __s5local3 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO, "ASeasonEventVO");
            if (__s5local3 && __s5local3.treasureMapVO.isTroopsTransferActive) {
              this.go(ShowHowToDoQuestconditionCommand.toSeasonEventDialog);
            } else {
              this.go(this.bindFunction(this.toDialog), __dep_export_CastleTransferTroopsDialog.CastleTransferTroopsDialog, new __dep_export_CastleTransferTroopsToSeasonProperties.CastleTransferTroopsToSeasonProperties());
            }
          } else {
            this.go(this.bindFunction(this.toIsoState));
            this.go(this.bindFunction(this.toRecruitSoldiers));
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_RECRUIT_UNITS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_REQUEST_ALLIANCE_HELP:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_RECRUIT_ATTACK_UNITS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_RECRUIT_DEFENDER_UNITS:
          this.toAnyValidRecruitmentCastle(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_PRODUCE_TOOLS:
          this.toAnyValidRecruitmentCastle(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_HEAL_SOLDIERS:
          this.handleHealUnitsCondition();
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
          __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_ACTIVE_TAX_DIALOG_COMMAND);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_BATTLES:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SABOTAGE:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(this.bindFunction(this.toNextEnemy));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_FAME:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(this.bindFunction(this.toNextDifferentEnemy));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_FIND_EQUIPMENT:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
          var __s5local4 = this.questVO.triggerKingdomID;
          if (__s5local4 == -1) {
            __s5local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
          }
          if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__s5local4)) {
            this.go(this.bindFunction(this.toWorldMap));
            if (!this.isFactionQuest()) {
              var __s5local5 = __dep_exact_f855840627e6e145.int(this.conditionVO.conditionData[0] > 0 ? this.conditionVO.conditionData[0] : -2);
              this.go(ShowHowToDoQuestconditionCommand.toNextDungeon, __s5local4, __s5local5);
            }
          } else {
            ShowHowToDoQuestconditionCommand.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP;
            if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlockable(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s5local4))) {
              __dep_export_CastleModel.CastleModel.kingdomData.tempTargetSpaceID = __s5local4;
              this.go(this.bindFunction(this.toDialog), __dep_export_CastleHandleKingdomDialog.CastleHandleKingdomDialog, new __dep_export_CastleHandleKingdomDialogProperties.CastleHandleKingdomDialogProperties(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s5local4)));
            }
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOTRESOURCE:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_POINT_EVENT:
          this.go(this.bindFunction(this.toWorldMap));
          if (!this.isFactionQuest()) {
            this.go(this.bindFunction(this.toNextEnemy));
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPY:
          this.go(this.bindFunction(this.toWorldMap));
          if (this.conditionVO.conditionData[0] != 0 || __dep_export_ABGHelper.ABGHelper.isOnABGAndTower) {
            this.go(this.bindFunction(this.toNextEnemy));
          } else {
            this.go(ShowHowToDoQuestconditionCommand.toNextDungeon, this.questVO.triggerKingdomID, -2);
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_POPULATION:
          __s5local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(127);
          __s5local1 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(205);
          while (__s5local0.hasUserLevelAndEffectsForUpgrade() && __s5local1.hasUserLevelAndEffectsForUpgrade()) {
            __s5local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s5local0.upgradeWodID);
            __s5local1 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s5local1.upgradeWodID);
          }
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s5local0, __s5local1);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_JOIN_ALLIANCE:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceTeaserDialog.CastleAllianceTeaserDialog);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_START_KINGDOM:
          ShowHowToDoQuestconditionCommand.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP;
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_START_TREASUREMAP:
          if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO && !__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.finished) {
            if (ShowHowToDoQuestconditionCommand.layoutManager.isInEventState) {
              this.go(this.bindFunction(this.toHomeCastleIsoState));
            }
            this.go(ShowHowToDoQuestconditionCommand.toSeasonEventDialog);
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OUTPOSTS:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_OUTPOST, this.questVO.triggerKingdomID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONQUER_VILLAGES:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_VILLAGE, this.questVO.triggerKingdomID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_BOSSDUNGEONS:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_BOSS_DUNGEON, this.questVO.triggerKingdomID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_SILVER_RUNES:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_PEARL_RELICS:
          if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO) {
            if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.isLocked) {
              this.go(ShowHowToDoQuestconditionCommand.toSeasonEventDialog);
            } else {
              if (this.conditionVO.conditionData[0] != null) {
                var __s5local6 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.getNodeById(this.conditionVO.conditionData[0]);
                if (__s5local6 != null && __s5local6.nodeType == __dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_PORT) {
                  this.go(this.bindFunction(this.toIsoState));
                  this.go(this.bindFunction(this.toAndCenterShip));
                  break;
                }
              }
              this.go(this.bindFunction(this.toSeasonMap));
            }
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAMP:
          this.go(this.bindFunction(this.toWorldMap), false, __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_FACTION_CAMP, __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONVILLAGE:
          this.go(this.bindFunction(this.toWorldMap), false, __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_FACTION_VILLAGE, __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAPITAL:
          this.go(this.bindFunction(this.toWorldMap), false, __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_FACTION_CAPITAL, __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOT_NPC_AQUAMARINE:
          if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID)) {
            this.go(this.bindFunction(this.toWorldMap), true, __dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_ISLE_DUNGEON, __dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID);
          } else {
            ShowHowToDoQuestconditionCommand.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP;
            if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlockable(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID))) {
              __dep_export_CastleModel.CastleModel.kingdomData.tempTargetSpaceID = __dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID;
              this.go(this.bindFunction(this.toDialog), __dep_export_CastleHandleKingdomDialog.CastleHandleKingdomDialog, new __dep_export_CastleHandleKingdomDialogProperties.CastleHandleKingdomDialogProperties(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID)));
            }
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOT_PVP_AQUAMARINE:
          this.go(this.bindFunction(this.toWorldMap), true, __dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID);
          this.go(this.bindFunction(this.toNextEnemy), -1, __dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GAIN_FACTION_POINTS:
          var __s5local7 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION), "FactionInvasionEventVO");
          if (__s5local7) {
            this.go(this.bindFunction(this.toWorldMap), true, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID);
            var __s5local8 = 0;
            __s5local8 = __s5local7.bluePoints == __s5local7.redPoints ? __dep_exact_f855840627e6e145.int(Math.random() < 0.5 ? __dep_exact_26a421b704832cff.DungeonConst.BLUE_FACTION_KING : __dep_exact_26a421b704832cff.DungeonConst.RED_FACTION_KING) : __dep_exact_f855840627e6e145.int(__s5local7.bluePoints > __s5local7.redPoints ? __dep_exact_26a421b704832cff.DungeonConst.RED_FACTION_KING : __dep_exact_26a421b704832cff.DungeonConst.BLUE_FACTION_KING);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID, -3, __s5local8);
          } else if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION)) {
            this.handleFactionTowerCondition();
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONQUER_RESOURCE_ISLE:
          this.go(this.bindFunction(this.toWorldMap), true, __dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_ISLE_RESOURCE, __dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES:
          __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_QUEST_BUY_RUBIES, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_QUEST_BUY_RUBIES);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_SHOP:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES:
          __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_QUEST_VISIT_SHOP, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_QUEST_VISIT_SHOP);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_RESEARCH:
          var __s5local9 = __dep_export_CastleModel.CastleModel.researchData.researchVOs.get(this.conditionVO.conditionData[0]);
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResearchDialog.CastleResearchDialog, new __dep_export_CastleResearchDialogProperties.CastleResearchDialogProperties(__s5local9, null));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_WISHING_WELL:
          this.go(this.bindFunction(this.toHomeCastleIsoState));
          this.go(this.bindFunction(this.centerOnWishingWell));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_TABLETS:
          if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_VENDOR)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            this.go(ShowHowToDoQuestconditionCommand.toNomadInvasionDialog, __dep_export_CastleAllianceNomadInvasionDialog.CastleAllianceNomadInvasionDialog.TAB_MERCHANT);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_MEDALS:
          if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_VENDOR)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            this.go(ShowHowToDoQuestconditionCommand.toNomadInvasionDialog, __dep_export_CastleAllianceNomadInvasionDialog.CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPEND_SAMURAI_TOKENS:
          if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            this.go(ShowHowToDoQuestconditionCommand.toSamuraiInvasionDialog, __dep_export_CastleAllianceSamuraiInvasionDialog.CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OPEN_SAMURAI_EVENT_DIALOG:
          if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            var __s5local10 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION);
            this.go(ShowHowToDoQuestconditionCommand.toSamuraiInvasionDialog, __s5local10.daimyoInfoVO.isEnabled ? __dep_export_CastleAllianceSamuraiInvasionDialog.CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO : __dep_export_CastleAllianceSamuraiInvasionDialog.CastleAllianceSamuraiInvasionDialog.TAB_PLAYER);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_SAMURAI_TOKENS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_SAMURAI_CAMPS:
          if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
            this.go(this.bindFunction(this.toWorldMap), true, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_SAMURAI_CAMP, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID, -3, __dep_exact_26a421b704832cff.DungeonConst.BASIC_SAMURAI_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_KHAN_TABLETS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_NOMAD_CAMPS:
          if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE)) {
            this.go(this.bindFunction(this.toWorldMap), true, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_NOMAD_CAMP, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID, -3, __dep_exact_26a421b704832cff.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_KHAN_CAMPS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_RAGE:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEND_KHAN_ATTACKS:
          var __s5local11 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE), "AllianceNomadInvasionEventVO");
          if (__s5local11 && __s5local11.khanCampBarVO) {
            this.go(this.bindFunction(this.toWorldMap), true, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID, -3, __dep_exact_26a421b704832cff.DungeonConst.BASIC_ALLIANCE_NOMAD_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPEND_RUBIES:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePremiumMarketPlaceDialog.CastlePremiumMarketPlaceDialog, new __dep_export_CastlePremiumMarketPlaceDialogProperties.CastlePremiumMarketPlaceDialogProperties(__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_WRITE_ALLIANCECHAT:
          this.toAllianceDialog(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_COMMUNICATION);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SEND_RESOURCES_PLAYER:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_CASTLE, this.questVO.triggerKingdomID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_USE_FORGE_ALLIANCE:
          this.toAllianceDialog(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FORGE);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_USE_FORGE:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetGemInventory.C2SGetGemInventory());
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetEquipmentInventory.C2SGetEquipmentInventory());
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog, new __dep_export_CastleEquipmentDialogProperties.CastleEquipmentDialogProperties(null, -1, false, -1, __dep_export_CastleEquipmentDialog.CastleEquipmentDialog.CRAFTING));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_CITIZEN:
          this.go(this.bindFunction(this.toIsoState));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_FROM_CARRIAGE:
          this.go(this.bindFunction(this.toHomeCastleIsoState));
          this.go(this.bindFunction(this.toAnCenterResourceCart));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COMPLETE_MERCENARY_MISSION:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMercenaryOverviewDialog.CastleMercenaryOverviewDialog);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_FINISH_UNLOCKABLE:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDialog), __dep_export_CastleSlumDonateCharacterDialog.CastleSlumDonateCharacterDialog);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUY_PACKAGE:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toPrivateEventDialog), __dep_export_PrivateEventEnum.PrivateEventEnum.LOW_LEVEL_UNIT_DEALER.privateEventID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CREATE_EMBLEM:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePremiumMarketPlaceDialog.CastlePremiumMarketPlaceDialog, new __dep_export_CastlePremiumMarketPlaceDialogProperties.CastlePremiumMarketPlaceDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_ASSIGN_CONSTRUCTIONITEM:
          this.go(this.bindFunction(this.toHomeCastleIsoState));
          this.go(this.bindFunction(this.toDialog), __dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog, new __dep_export_CastleConstructionItemsMainDialogProperties.CastleConstructionItemsMainDialogProperties());
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK:
          this.go(this.bindFunction(this.toAndConnectToFacebook));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_ALIENS_WITH_MIN_FAME:
          if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE)) {
            this.go(this.bindFunction(this.toWorldMap), true);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_ALIEN_CAMP, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID, -1, __dep_exact_26a421b704832cff.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
          } else if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE)) {
            this.go(this.bindFunction(this.toWorldMap), true);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_RED_ALIEN_CAMP, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID, -1, __dep_exact_26a421b704832cff.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS:
          if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION)) {
            this.handleFactionTowerCondition();
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_PVP:
          if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID || __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_6.WorldIsland.KINGDOM_ID) {
            this.go(this.bindFunction(this.toWorldMap), true, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
            this.go(this.bindFunction(this.toNextEnemy), -1, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
          } else {
            this.go(this.bindFunction(this.toWorldMap), true);
            if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE)) {
              this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_ALIEN_CAMP, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID, -1, __dep_exact_26a421b704832cff.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
            } else if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE)) {
              this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_RED_ALIEN_CAMP, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID, -1, __dep_exact_26a421b704832cff.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
            } else {
              this.go(this.bindFunction(this.toNextEnemy), true);
            }
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GAIN_LTPE_POINTS:
          this.go(this.bindFunction(this.toIsoState));
          this.go(ShowHowToDoQuestconditionCommand.toLTPEDialog);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_JOIN_TEMP_SERVER:
          if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent) {
            __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.openDialog();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OPTIN_NEWSLETTER:
          if (!__dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.loginIsKeyBased && !__dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.isOnSpecialServer && !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnKeyLoginToNormalLoginServer) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_OptionsDialog.OptionsDialog, new __dep_export_OptionsDialogProperties.OptionsDialogProperties(__dep_export_OptionsDialog.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GACHA_DRAW:
          __dep_export_GeneralsHelper.GeneralsHelper.showGeneralsHubDialog();
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDefenceDialog.CastleDefenceDialog, new __dep_export_CastleDefenceDialogProperties.CastleDefenceDialogProperties(__dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle()));
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
          this.go(this.bindFunction(this.toWorldMap), true, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_WOLF_KING, __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID, -3, __dep_exact_26a421b704832cff.DungeonConst.BASIC_WOLF_KING_PLAYER_ID);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralsOverviewDialog.GeneralsOverviewDialog);
      }
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.handleHealUnitsCondition = function () {
    var __s68local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getCastlesWithHospitalsList();
    if (__s68local0 && __s68local0.length != 0) {
      var __s68local1;
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
        var __s68local2 = __dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp ? __dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_HOSPITAL : __dep_export_IsoObjectEnum.IsoObjectEnum.HOSPITAL;
        if (__dep_exact_81dacdf05bd32292.castAs(__dep_export_Iso.Iso.data.objects.provider.getObjectByType(__s68local2), "ABasicBuildingVO")) {
          __s68local1 = __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo;
        }
      }
      if (!__s68local1 && __s68local0 != null) {
        for (var __s68local3 = 0, __s68local4 = __s68local0; __s68local3 < __s68local4.length; __s68local3++) {
          var __s68local5 = __s68local4[__s68local3];
          if (__s68local5 !== undefined && __s68local5.kingdomID == __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
            __s68local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s68local5.areaID, __s68local5.kingdomID);
          }
        }
      }
      __s68local1 ||= __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s68local0[0].areaID, __s68local0[0].kingdomID);
      this.go(this.bindFunction(this.toIsoState), __s68local1);
      this.go(this.bindFunction(this.toDialog), __dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL));
    } else {
      this.go(this.bindFunction(this.toIsoState));
      var __s68local6 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.HOSPITAL_BUILDING_WOD);
      this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s68local6);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.handleFactionTowerCondition = function () {
    var __s78local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
    if (__s78local0.isLocked) {
      ShowHowToDoQuestconditionCommand.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP;
      this.go(this.bindFunction(this.toFactionMainDialog));
    } else if (__s78local0.isSpectator) {
      this.showEventNotRunningAlert();
    } else {
      this.go(this.bindFunction(this.toWorldMap), true, __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID);
      this.go(ShowHowToDoQuestconditionCommand.toNextFactionTower);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toPrivateEventDialog = function (__s83param0) {
    var __s83local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActivePrivateEventByEventId(__s83param0);
    if (__s83local0) {
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, [__s83local0, false]);
    } else {
      this.canGoOn = false;
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toAnyValidRecruitmentCastle = function (__s87param0) {
    this.go(this.bindFunction(this.toIsoState), this.findValidCastleForCategory(__s87param0));
    if (__s87param0 == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      this.go(this.bindFunction(this.toProduceTools));
    } else {
      this.go(this.bindFunction(this.toRecruitSoldiers));
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.findValidCastleForCategory = function (__s91param0) {
    if (__dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle() && this.hasUnlockedUnits(__s91param0, __dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle())) {
      return __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
    }
    for (var __s91local0 = 0, __s91local1 = __dep_export_CastleModel.CastleModel.userData.getCastleList(true); __s91local0 < __s91local1.length; __s91local0++) {
      var __s91local2 = __s91local1[__s91local0];
      if (this.hasUnlockedUnits(__s91param0, __dep_export_CastleModel.CastleModel.permanentCastleData.getCastleByAreaInfo(__s91local2))) {
        return __s91local2;
      }
    }
    this.canGoOn = false;
    return null;
  };
  ShowHowToDoQuestconditionCommand.prototype.hasUnlockedUnits = function (__s97param0, __s97param1) {
    var __s97local0;
    if (__s97param0 == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      __s97local0 = __s97param1.unitsVO.unlockedTools;
    } else if (__s97param0 == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS) {
      __s97local0 = __s97param1.unitsVO.unlockedSoldiers;
    }
    if (__s97param1 == __dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle()) {
      var __s97local1 = 0;
      if (__s97local0 != null) {
        for (var __s97local2 = 0, __s97local3 = __s97local0; __s97local2 < __s97local3.length; __s97local2++) {
          var __s97local4 = __s97local3[__s97local2];
          if (__s97local4 !== undefined && __s97local4.isAvailableByLevel) {
            __s97local1++;
          }
        }
      }
      return __s97local1 > 0;
    }
    return __s97local0.length > 0;
  };
  ShowHowToDoQuestconditionCommand.prototype.toAllianceDialog = function (__s106param0) {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties(__s106param0));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceTeaserDialog.CastleAllianceTeaserDialog);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toDialog = function (__s110param0, __s110param1 = null) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s110param0, __s110param1);
  };
  ShowHowToDoQuestconditionCommand.prototype.toFactionMainDialog = function () {
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
  };
  ShowHowToDoQuestconditionCommand.prototype.centerOnWishingWell = function () {
    if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyMainCastle) {
      var __s114local0 = __dep_export_Iso.Iso.renderer.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.RUBY_WISHING_WELL);
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s114local0, "RubyWishingWellFixedPositionBuildingVE")) {
        this.centerOnBasicBuilding(__s114local0);
      }
    } else {
      ShowHowToDoQuestconditionCommand.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onWishingJAAArrived));
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.onWishingJAAArrived = function (__s119param0) {
    ShowHowToDoQuestconditionCommand.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onWishingJAAArrived));
    this.centerOnWishingWell();
  };
  ShowHowToDoQuestconditionCommand.toNomadInvasionDialog = function (__s121param0) {
    if (__dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE), "AllianceNomadInvasionEventVO")) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceNomadInvasionDialog.CastleAllianceNomadInvasionDialog, new __dep_export_CastleAllianceNomadInvasionEventDialogProperties.CastleAllianceNomadInvasionEventDialogProperties(__s121param0));
    }
  };
  ShowHowToDoQuestconditionCommand.toSamuraiInvasionDialog = function (__s124param0) {
    var __s124local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION), "SamuraiInvasionEventVO");
    if (__s124local0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceSamuraiInvasionDialog.CastleAllianceSamuraiInvasionDialog, new __dep_export_CastleAllianceSamuraiInvasionEventDialogProperties.CastleAllianceSamuraiInvasionEventDialogProperties(__s124local0, __s124param0));
    }
  };
  ShowHowToDoQuestconditionCommand.toLTPEDialog = function () {
    var __s127local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT), "LongTermPointEventEventVO");
    if (__s127local0) {
      __s127local0.openDialog();
    }
  };
  ShowHowToDoQuestconditionCommand.toSeasonEventDialog = function () {
    __dep_export_CastleModel.CastleModel.kingdomData.tempTargetSpaceID = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.mapID;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleHandleSeasonDialog.CastleHandleSeasonDialog, new __dep_export_CastleHandleSeasonDialogProperties.CastleHandleSeasonDialogProperties(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO));
  };
  ShowHowToDoQuestconditionCommand.toNearestMapObject = function (__s132param0, __s132param1, __s132param2 = -3, __s132param3 = -1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__s132param0, __s132param1, __s132param2, -1, __s132param3));
  };
  ShowHowToDoQuestconditionCommand.toNextDungeon = function (__s134param0, __s134param1 = -2) {
    ShowHowToDoQuestconditionCommand.toNearestMapObject(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s134param0).dungeonType, __s134param0, __s134param1);
  };
  ShowHowToDoQuestconditionCommand.prototype.toNextEnemy = function (__s136param0 = -1, __s136param1 = -1) {
    var __s136local0 = __dep_exact_f855840627e6e145.int(Math.max(__s136param1 > -1 ? __s136param1 : this.questVO.triggerKingdomID, 0));
    var __s136local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s136local0);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextEnemyCastleVO.C2SFindNextEnemyCastleVO(__s136local1.absAreaPosX, __s136local1.absAreaPosY, 0, __s136param0));
  };
  ShowHowToDoQuestconditionCommand.prototype.toNextDifferentEnemy = function () {
    var __s138local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this.questVO.triggerKingdomID > -1 ? this.questVO.triggerKingdomID : 0);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextEnemyCastleVO.C2SFindNextEnemyCastleVO(__s138local0.absAreaPosX, __s138local0.absAreaPosY, __dep_export_CastleModel.CastleModel.questData.currentSearchEnemyCounter % __dep_export_ClientConstCastle.ClientConstCastle.MAX_FINDABLE_ENEMY_COUNTER));
    __dep_export_CastleModel.CastleModel.questData.increaseCurrentSearchEnemyCounter();
  };
  ShowHowToDoQuestconditionCommand.toNextFactionTower = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextTowerVO.C2SFindNextTowerVO());
  };
  ShowHowToDoQuestconditionCommand.prototype.toSeasonMap = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.loadTreasureMapAssets(function () {
      ShowHowToDoQuestconditionCommand.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_SEASON_WORLDMAP;
      if (this.conditionVO) {
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_SEASON_MAP_CENTER_AND_HIGHLIGHT_DUNGEONS, this.conditionVO);
      }
    });
  };
  ShowHowToDoQuestconditionCommand.prototype.toWorldMap = function (__s147param0 = false, __s147param1 = -1) {
    var __s147local0 = __dep_exact_f855840627e6e145.int(Math.max(__s147param1 > -1 ? __s147param1 : this.questVO.triggerKingdomID, 0));
    if (__s147local0 != __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
      this.onWaitingState = true;
      ShowHowToDoQuestconditionCommand.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    }
    var __s147local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s147local0);
    if (__s147local0 == __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID && !__s147local1) {
      __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION).openDialog();
      this.canGoOn = false;
      return;
    }
    if (__s147param0) {
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s147local1);
    } else {
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__s147local0, __s147local1.absAreaPosX, __s147local1.absAreaPosY]);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toProduceTools = function () {
    if (this.hasUnlockedUnits(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS, __dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle())) {
      this.go(this.bindFunction(this.toDialog), __dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS));
    } else {
      var __s153local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.BARRACKS_BUILDING_WOD_ID);
      if (__s153local0.level == 1) {
        this.go(this.bindFunction(this.toDecoState));
      }
      this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s153local0);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toRecruitSoldiers = function () {
    if (this.hasUnlockedUnits(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, __dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle())) {
      this.go(this.bindFunction(this.toDialog), __dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    } else {
      var __s158local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.BARRACKS_BUILDING_WOD_ID);
      if (__s158local0.level == 1) {
        this.go(this.bindFunction(this.toDecoState));
      }
      this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s158local0);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toRecruitDialog = function () {
    var __s163local0 = [];
    for (var __s163local1 = 0; __s163local1 < this.conditionVO.conditionData.length; __s163local1++) {
      var __s163local2 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this.conditionVO.conditionData[__s163local1]);
      __s163local0.push(__s163local2);
    }
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s163local0[0], "ToolUnitVO")) {
      if (__s163local0[0].name == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP) {
        if (!__dep_export_CastleModel.CastleModel.militaryData.isBuildingCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP)) {
          this.canGoOn = false;
          return;
        }
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS, __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK));
      } else {
        if (!__dep_export_CastleModel.CastleModel.militaryData.isBuildingCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP)) {
          this.canGoOn = false;
          return;
        }
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS, __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE));
      }
    } else {
      if (!(__dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp ? __dep_export_CastleModel.CastleModel.militaryData.isBuildingCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_FACTION_BARRACKS) : __dep_export_CastleModel.CastleModel.militaryData.isBuildingCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS))) {
        this.canGoOn = false;
        return;
      }
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp ? __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    }
    __dep_export_CastleTutorialController.CastleTutorialController.getInstance().waitForExternalDialogShow(__dep_export_CastleRecruitDialog.CastleRecruitDialog, function () {
      var __s174local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp ? __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
      for (var __s174local1 = ShowHowToDoQuestconditionCommand.layoutManager.getDialog(__dep_export_CastleRecruitDialog.CastleRecruitDialog).subLayer.get(__s174local0); __s174local1.shopCurrentPage < __s174local1.shopMaxPage;) {
        for (var __s174local2 = 0, __s174local3 = __s174local1.currentShownUnits; __s174local2 < __s174local3.length; __s174local2++) {
          var __s174local4 = __s174local3[__s174local2];
          if (__s174local4 !== undefined && __s163local0 != null) {
            for (var __s174local5 = 0, __s174local6 = __s163local0; __s174local5 < __s174local6.length; __s174local5++) {
              var __s174local7 = __s174local6[__s174local5];
              if (__s174local7 !== undefined && __s174local4.wodId == __s174local7.wodId) {
                return;
              }
            }
          }
        }
        __s174local1.shopCurrentPage = __dep_exact_f855840627e6e145.int(Math.min(__s174local1.shopMaxPage, __s174local1.shopCurrentPage + 1));
        __s174local1.fillShopItemsByGroup();
      }
    });
  };
  ShowHowToDoQuestconditionCommand.prototype.toAnCenterResourceCart = function () {
    var __s184local0 = __dep_export_Iso.Iso.data.objects.surroundings.getResourceCarts();
    if (__s184local0.length >= 1) {
      this.toAndCenterIsoObject(__s184local0[0]);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toAndCenterShip = function () {
    var __s187local0 = __dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.SHIP);
    if (__s187local0) {
      this.toAndCenterIsoObject(__s187local0);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toAndCenterIsoObject = function (__s190param0) {
    if (__s190param0) {
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
        var __s190local0 = new __s0local0(__s190param0.x, __s190param0.y);
        if (__s190param0.hasOwnProperty("posOffset")) {
          __s190local0.add(__s190param0.posOffset);
        }
        __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(__s190local0);
      } else {
        this.canGoOn = false;
      }
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toAndCenterBuildingForUpdate = function (__s196param0, __s196param1 = null) {
    if (__s196param0) {
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
        if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s196param0, "CastlewallDefenceVO")) {
          this.go(this.bindFunction(this.toDecoShopTab), __s196param0.getLowestDowngradeVO().shopCategory, __s196param0, __s196param1);
        } else {
          var __s196local0 = __dep_export_Iso.Iso.renderer.objects.innerBuildings.list;
          (__s196local0 = __s196local0.concat(__dep_export_Iso.Iso.renderer.objects.defenceObjects.towers)).push(__dep_export_Iso.Iso.renderer.objects.defenceObjects.gate);
          __s196local0.push(__dep_export_Iso.Iso.renderer.objects.defenceObjects.moat);
          var __s196local1;
          var __s196local2 = [];
          if (__s196local0 != null) {
            for (var __s196local3 = 0, __s196local4 = __s196local0; __s196local3 < __s196local4.length; __s196local3++) {
              var __s196local5 = __s196local4[__s196local3];
              if (__s196local5 !== undefined && __s196local5) {
                if (__s196local5.buildingVO.name == __s196param0.name && __s196local5.vo.group == __s196param0.group && (__s196local5.buildingVO.level < __s196param0.level || __s196local5.buildingVO.level <= __s196param0.level && (__s196local5.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS || __s196local5.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED || __s196local5.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS || __s196local5.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED))) {
                  __s196local2.push(__s196local5);
                }
                if (__s196param1 && __s196local5.buildingVO.name == __s196param1.name && __s196local5.vo.group == __s196param1.group && (__s196local5.buildingVO.level < __s196param1.level || __s196local5.buildingVO.level <= __s196param1.level && (__s196local5.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS || __s196local5.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED || __s196local5.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS || __s196local5.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED))) {
                  __s196local2.push(__s196local5);
                }
              }
            }
          }
          __s196local2.sort(ShowHowToDoQuestconditionCommand.sortBuildingsByLevel);
          if (__s196local2 != null) {
            for (var __s196local6 = 0, __s196local7 = __s196local2; __s196local6 < __s196local7.length; __s196local6++) {
              var __s196local8 = __s196local7[__s196local6];
              if (__s196local8 !== undefined && __s196local8.buildingVO.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS && __s196local8.buildingVO.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED && __s196local8.buildingVO.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS && __s196local8.buildingVO.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED && __s196local8.buildingVO.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS && __s196local8.buildingVO.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED && __s196local8.buildingVO.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS && __s196local8.buildingVO.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED) {
                __s196local1 = __s196local8;
                break;
              }
            }
          }
          if (!__s196local1 && __s196local2.length > 0) {
            if (!__dep_export_Iso.Iso.data.objects.provider.hasMaxAmountOfObjectsByType(__s196local2[0].buildingVO)) {
              this.go(this.bindFunction(this.toDecoState));
              this.go(this.bindFunction(this.toDecoShopTab), __s196param0.getLowestDowngradeVO().shopCategory, __s196param0, __s196param1);
              return;
            }
            __s196local1 = __s196local2[0];
          } else if (!__s196local1 || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s196local1, "BasicMoatVE") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s196local1, "PremiumMoatVE")) {
            this.go(this.bindFunction(this.toDecoState));
            this.go(this.bindFunction(this.toDecoShopTab), __s196param0.getLowestDowngradeVO().shopCategory, __s196param0, __s196param1);
            return;
          }
          if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastleBuildMode && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s196param0, "GuardTowerVO")) {
            ShowHowToDoQuestconditionCommand.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel).changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE);
          }
          this.centerOnBasicBuilding(__s196local1);
        }
      } else {
        this.canGoOn = false;
      }
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.centerOnBasicBuilding = function (__s217param0) {
    if (__s217param0 && !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(__s217param0.vo.pos);
      __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__s217param0);
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toDecoShopTab = function (__s220param0 = null, __s220param1 = null, __s220param2 = null) {
    if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastleBuildMode) {
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s220param1, "CastlewallDefenceVO")) {
        __s220param0 = __s220param1.shopCategory;
      }
      if (__s220param0 && __s220param0 != __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_NOT_IN_SHOP) {
        var __s220local0 = ShowHowToDoQuestconditionCommand.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel);
        var __s220local1 = __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__s220param0);
        __s220local0.revertHighLightFilters();
        if (__s220param1 || __s220param2) {
          var __s220local2 = -1;
          for (var __s220local3 = 0; __s220local3 < __s220local1.length; __s220local3++) {
            var __s220local4 = __s220local1[__s220local3];
            if (__s220local4.isAvailableByLevelAndEffect) {
              var __s220local5 = __dep_exact_f855840627e6e145.int(__s220local3 / __dep_export_CastleDecoShopPanel.CastleDecoShopPanel.ITEMS_PER_PAGE);
              var __s220local6 = __dep_exact_f855840627e6e145.int(__s220local3 % __dep_export_CastleDecoShopPanel.CastleDecoShopPanel.ITEMS_PER_PAGE);
              if (ShowHowToDoQuestconditionCommand.buildingsAreEqual(__s220param1, __s220local4)) {
                __s220local0.changeCategory(__s220param0, __s220local5, true);
                __s220local0.highLightFilteredArrayIndex(__s220local6);
                __s220local2 = __s220local5;
              } else if (ShowHowToDoQuestconditionCommand.buildingsAreEqual(__s220param2, __s220local4)) {
                if (__s220local2 == -1 || __s220local2 == __s220local5) {
                  __s220local0.changeCategory(__s220param0, __s220local5, true);
                  __s220local0.highLightFilteredArrayIndex(__s220local6);
                }
              }
            }
          }
        } else {
          __s220local0.changeCategory(__s220param0);
        }
      }
    } else {
      this.canGoOn = false;
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toAndConnectToFacebook = function () {
    if (__dep_export_CastleModel.CastleModel.userData.isConnectedToFacebook && __dep_export_CastleFacebookModule.CastleFacebookModule.hasAuthResponse) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMapFacebookVO.C2SMapFacebookVO(true, __dep_export_CastleFacebookModule.CastleFacebookModule.userID, __dep_export_CastleFacebookModule.CastleFacebookModule.accessToken, __dep_export_CastleFacebookModule.CastleFacebookModule.appID));
    } else {
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.MAP_USER_TO_FACEBOOK, true);
    }
  };
  ShowHowToDoQuestconditionCommand.buildingsAreEqual = function (__s238param0, __s238param1) {
    if (!__s238param0 || !__s238param1) {
      return false;
    }
    var __s238local0 = true;
    if (__s238param0.objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.DECO) {
      __s238local0 = __s238param0.type == __s238param1.type;
    }
    return !!__s238param0 && !!__s238param1 && __s238param0.name == __s238param1.name && __s238param0.group == __s238param1.group && __s238local0;
  };
  ShowHowToDoQuestconditionCommand.prototype.toDecoState = function () {
    if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    } else {
      this.canGoOn = false;
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.go = function (__s246param0) {
    var __s246local0 = this;
    var __s246local1 = [];
    for (var __s246local2 = 1; __s246local2 < arguments.length; __s246local2++) {
      __s246local1[__s246local2 - 1] = arguments[__s246local2];
    }
    if (this.canGoOn) {
      if (this.onWaitingState) {
        this.waitingFunctions.push(function () {
          __s246local1.unshift(__s246param0);
          __s246local0.go.apply(__s246local0, __s246local1);
        });
      } else {
        __s246param0.apply(this, __s246local1);
      }
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toHomeCastleIsoState = function () {
    if (!__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyHomeCastle || !ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
      var __s255local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
      ShowHowToDoQuestconditionCommand.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
      this.onWaitingState = true;
      if (__dep_export_CastleModel.CastleModel.worldmapData) {
        __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
      }
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__s255local0.objectId, __s255local0.kingdomID));
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.toIsoState = function (__s259param0) {
    var __s259local0;
    if (__s259param0 === undefined) {
      __s259param0 = null;
    }
    if (this.questVO && (this.questVO.mapID == -1 || this.questVO.eventID == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION || __s259param0)) {
      if (!(__s259local0 = __s259param0 || __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this.questVO.triggerKingdomID))) {
        this.canGoOn = false;
        return;
      }
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == this.questVO.triggerKingdomID && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId == __s259local0.objectId) {
        return;
      }
      ShowHowToDoQuestconditionCommand.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
      this.onWaitingState = true;
      if (__dep_export_CastleModel.CastleModel.worldmapData) {
        __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
      }
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__s259local0.objectId, __s259local0.kingdomID));
    } else {
      if (!__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO || !__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO || __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.finished) {
        this.canGoOn = false;
        return;
      }
      ShowHowToDoQuestconditionCommand.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
      this.onWaitingState = true;
      __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.loadTreasureMapAssets(function () {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCampVO.C2SJoinCampVO(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID));
      });
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.onServerMessageArrived = function (__s270param0) {
    ShowHowToDoQuestconditionCommand.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    ShowHowToDoQuestconditionCommand.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    this.onWaitingState = false;
    this.executeFunctionList();
  };
  ShowHowToDoQuestconditionCommand.prototype.executeFunctionList = function () {
    for (var __s272local0 = 0; __s272local0 < this.waitingFunctions.length; __s272local0++) {
      this.waitingFunctions[__s272local0]();
    }
    this.waitingFunctions = [];
  };
  ShowHowToDoQuestconditionCommand.sortBuildingsByLevel = function (__s276param0, __s276param1) {
    if (__s276param0.buildingVO.level < __s276param1.buildingVO.level) {
      return 1;
    } else if (__s276param0.buildingVO.level > __s276param1.buildingVO.level || __s276param0.buildingVO.efficiency > __s276param1.buildingVO.efficiency) {
      return -1;
    } else {
      return 0;
    }
  };
  ShowHowToDoQuestconditionCommand.prototype.isFactionQuest = function () {
    return __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.conditionVO, "CastleQuestConditionVO") && this.conditionVO.isFactionQuest;
  };
  ShowHowToDoQuestconditionCommand.prototype.showEventNotRunningAlert = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_eventNotRunning")));
  };
  Object.defineProperty(ShowHowToDoQuestconditionCommand, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShowHowToDoQuestconditionCommand, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ShowHowToDoQuestconditionCommand;
}(__dep_exact_9e901e8e2483a22f_3.SimpleCommand);
exports.ShowHowToDoQuestconditionCommand = __s0local1;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_PrivateEventEnum = require("gge-module:export_PrivateEventEnum");
var __dep_export_TMapNodeVO = require("gge-module:export_TMapNodeVO");
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleAllianceTeaserDialog = require("gge-module:export_CastleAllianceTeaserDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleConstructionItemsMainDialog = require("gge-module:export_CastleConstructionItemsMainDialog");
var __dep_export_CastleConstructionItemsMainDialogProperties = require("gge-module:export_CastleConstructionItemsMainDialogProperties");
var __dep_export_CastleTransferTroopsDialog = require("gge-module:export_CastleTransferTroopsDialog");
var __dep_export_CastleTransferTroopsToSeasonProperties = require("gge-module:export_CastleTransferTroopsToSeasonProperties");
var __dep_export_CastleHandleKingdomDialog = require("gge-module:export_CastleHandleKingdomDialog");
var __dep_export_CastleHandleKingdomDialogProperties = require("gge-module:export_CastleHandleKingdomDialogProperties");
var __dep_export_CastleSlumDonateCharacterDialog = require("gge-module:export_CastleSlumDonateCharacterDialog");
var __dep_export_CastleMercenaryOverviewDialog = require("gge-module:export_CastleMercenaryOverviewDialog");
var __dep_export_CastlePremiumMarketPlaceDialog = require("gge-module:export_CastlePremiumMarketPlaceDialog");
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
var __dep_export_CastleResearchDialog = require("gge-module:export_CastleResearchDialog");
var __dep_export_CastleAllianceNomadInvasionDialog = require("gge-module:export_CastleAllianceNomadInvasionDialog");
var __dep_export_CastleAllianceSamuraiInvasionDialog = require("gge-module:export_CastleAllianceSamuraiInvasionDialog");
var __dep_export_CastleHandleSeasonDialog = require("gge-module:export_CastleHandleSeasonDialog");
var __dep_export_CastleHandleSeasonDialogProperties = require("gge-module:export_CastleHandleSeasonDialogProperties");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
var __dep_export_CastleDecoShopItemArrayHelper = require("gge-module:export_CastleDecoShopItemArrayHelper");
var __dep_export_CastleTutorialController = require("gge-module:export_CastleTutorialController");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __dep_export_CastleEquipmentDialogProperties = require("gge-module:export_CastleEquipmentDialogProperties");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ISimpleCommand");
