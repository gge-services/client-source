import { ABGHelper } from "./ABGHelper";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { C2SFindNextEnemyCastleVO } from "./C2SFindNextEnemyCastleVO";
import { C2SFindNextMapObjectVO } from "./C2SFindNextMapObjectVO";
import { C2SFindNextTowerVO } from "./C2SFindNextTowerVO";
import { C2SGetEquipmentInventory } from "./C2SGetEquipmentInventory";
import { C2SGetGemInventory } from "./C2SGetGemInventory";
import { C2SJoinCampVO } from "./C2SJoinCampVO";
import { C2SJoinCastleVO } from "./C2SJoinCastleVO";
import { C2SMapFacebookVO } from "./C2SMapFacebookVO";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleAllianceDialog } from "./CastleAllianceDialog";
import { CastleAllianceDialogProperties } from "./CastleAllianceDialogProperties";
import { CastleAllianceNomadInvasionDialog } from "./CastleAllianceNomadInvasionDialog";
import { CastleAllianceNomadInvasionEventDialogProperties } from "./CastleAllianceNomadInvasionEventDialogProperties";
import { CastleAllianceSamuraiInvasionDialog } from "./CastleAllianceSamuraiInvasionDialog";
import { CastleAllianceSamuraiInvasionEventDialogProperties } from "./CastleAllianceSamuraiInvasionEventDialogProperties";
import { CastleAllianceTeaserDialog } from "./CastleAllianceTeaserDialog";
import { CastleBasicController } from "./CastleBasicController";
import { CastleConstructionItemsMainDialog } from "./CastleConstructionItemsMainDialog";
import { CastleConstructionItemsMainDialogProperties } from "./CastleConstructionItemsMainDialogProperties";
import { CastleDecoShopItemArrayHelper } from "./CastleDecoShopItemArrayHelper";
import { CastleDecoShopPanel } from "./CastleDecoShopPanel";
import { CastleDefenceDialog } from "./CastleDefenceDialog";
import { CastleDefenceDialogProperties } from "./CastleDefenceDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleEquipmentDialog } from "./CastleEquipmentDialog";
import { CastleEquipmentDialogProperties } from "./CastleEquipmentDialogProperties";
import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleHandleKingdomDialog } from "./CastleHandleKingdomDialog";
import { CastleHandleKingdomDialogProperties } from "./CastleHandleKingdomDialogProperties";
import { CastleHandleSeasonDialog } from "./CastleHandleSeasonDialog";
import { CastleHandleSeasonDialogProperties } from "./CastleHandleSeasonDialogProperties";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleMercenaryOverviewDialog } from "./CastleMercenaryOverviewDialog";
import { CastleModel } from "./CastleModel";
import { CastleOpenShopExecutor } from "./CastleOpenShopExecutor";
import { CastlePremiumMarketCollectionData } from "./CastlePremiumMarketCollectionData";
import { CastlePremiumMarketPlaceDialog } from "./CastlePremiumMarketPlaceDialog";
import { CastlePremiumMarketPlaceDialogProperties } from "./CastlePremiumMarketPlaceDialogProperties";
import { CastleRecruitDialog } from "./CastleRecruitDialog";
import { CastleRecruitDialogProperties } from "./CastleRecruitDialogProperties";
import { CastleResearchDialog } from "./CastleResearchDialog";
import { CastleResearchDialogProperties } from "./CastleResearchDialogProperties";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { CastleSlumDonateCharacterDialog } from "./CastleSlumDonateCharacterDialog";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { CastleTransferTroopsDialog } from "./CastleTransferTroopsDialog";
import { CastleTransferTroopsToSeasonProperties } from "./CastleTransferTroopsToSeasonProperties";
import { CastleTutorialController } from "./CastleTutorialController";
import { CastleWodData } from "./CastleWodData";
import { ClientConstAlliance } from "./ClientConstAlliance";
import { ClientConstCastle } from "./ClientConstCastle";
import { ClientConstQuestCondition } from "./ClientConstQuestCondition";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { CXFSourceTrackingConstants } from "./CXFSourceTrackingConstants";
import { DungeonConst } from "../../../ggs.dll/reconstructed/exports/DungeonConst";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { FlashBlockHelper } from "./FlashBlockHelper";
import { GeneralsHelper } from "./GeneralsHelper";
import { GeneralsOverviewDialog } from "./GeneralsOverviewDialog";
import { IngameClientCommands } from "./IngameClientCommands";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Iso } from "./Iso";
import { IsoBuildingStateEnum } from "./IsoBuildingStateEnum";
import { IsoObjectEnum } from "./IsoObjectEnum";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { OptionsDialog } from "./OptionsDialog";
import { OptionsDialogProperties } from "./OptionsDialogProperties";
import { PrivateEventEnum } from "./PrivateEventEnum";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { SpecialServerHelper } from "./SpecialServerHelper";
import { TempServerHelper } from "./TempServerHelper";
import { TMapNodeVO } from "./TMapNodeVO";
import { TreasureMapsConst } from "../../../ggs.dll/reconstructed/exports/TreasureMapsConst";
import { WorldClassic } from "../../../ggs.dll/reconstructed/exports/WorldClassic";
import { WorldConst } from "../../../ggs.dll/reconstructed/exports/WorldConst";
import { WorldIsland } from "../../../ggs.dll/reconstructed/exports/WorldIsland";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Point;
export class ShowHowToDoQuestconditionCommand extends SimpleCommand {
  constructor() {
    const __initial0 = true;
    const __initial1 = [];
    const __initial2 = false;
    CONSTRUCTOR_HACK;
    super();
    this.canGoOn = __initial0;
    this.waitingFunctions = __initial1;
    this.onWaitingState = __initial2;
  }
  execute(argument0 = null) {
    if (!this.onWaitingState) {
      var __s5local0;
      var __s5local1;
      this.questVO = argument0[0];
      this.conditionVO = argument0[1];
      this.canGoOn = true;
      ShowHowToDoQuestconditionCommand.layoutManager.hideAllDialogs();
      if (this.questVO) {
        var __s5local2 = this.questVO.mapID > -1 ? this.questVO.mapID : this.questVO.triggerKingdomID;
        if (FlashBlockHelper.checkFlashBlock(__s5local2)) {
          return;
        }
      }
      switch (this.conditionVO.conditionType) {
        case ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
          this.go(this.bindFunction(this.toIsoState));
          if (int(this.conditionVO.conditionData.length) > 1) {
            __s5local0 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]);
            __s5local1 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[1]);
            this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s5local0, __s5local1);
          } else {
            if ((__s5local0 = castAs(CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]), "ABasicBuildingVO")).level == 1 && !instanceOfClass(__s5local0, "GuardTowerVO") || instanceOfClass(__s5local0, "CastlewallDefenceVO")) {
              this.go(this.bindFunction(this.toDecoState));
            }
            this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s5local0);
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_EXPANSIONS:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDecoState));
          break;
        case ClientConstQuestCondition.QUESTTYPE_DECOS:
        case ClientConstQuestCondition.QUESTTYPE_LAW_AND_ORDER:
          __s5local0 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]);
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDecoState));
          this.go(this.bindFunction(this.toDecoShopTab), ClientConstCastle.CATEGORY_DECO, __s5local0);
          break;
        case ClientConstQuestCondition.QUESTTYPE_STORAGE:
          __s5local0 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(this.conditionVO.conditionData[0]);
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDecoState));
          this.go(this.bindFunction(this.toDecoShopTab), ClientConstCastle.CATEGORY_STORAGE, __s5local0);
          break;
        case ClientConstQuestCondition.QUESTTYPE_TOOL_START:
        case ClientConstQuestCondition.QUESTTYPE_UNITS:
        case ClientConstQuestCondition.QUESTTYPE_TOOLS:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toRecruitDialog));
          break;
        case ClientConstQuestCondition.QUESTTYPE_OFF_UNITS:
        case ClientConstQuestCondition.QUESTTYPE_DEF_UNITS:
          if (TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.questVO.mapID) > -1) {
            var __s5local3 = castAs(CastleModel.specialEventData.activeSeasonVO, "ASeasonEventVO");
            if (__s5local3 && __s5local3.treasureMapVO.isTroopsTransferActive) {
              this.go(ShowHowToDoQuestconditionCommand.toSeasonEventDialog);
            } else {
              this.go(this.bindFunction(this.toDialog), CastleTransferTroopsDialog, new CastleTransferTroopsToSeasonProperties());
            }
          } else {
            this.go(this.bindFunction(this.toIsoState));
            this.go(this.bindFunction(this.toRecruitSoldiers));
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_RECRUIT_UNITS:
        case ClientConstQuestCondition.QUESTTYPE_REQUEST_ALLIANCE_HELP:
        case ClientConstQuestCondition.QUESTTYPE_RECRUIT_ATTACK_UNITS:
        case ClientConstQuestCondition.QUESTTYPE_RECRUIT_DEFENDER_UNITS:
          this.toAnyValidRecruitmentCastle(ClientConstCastle.UNIT_CATEGORY_SOLDIERS);
          break;
        case ClientConstQuestCondition.QUESTTYPE_PRODUCE_TOOLS:
          this.toAnyValidRecruitmentCastle(ClientConstCastle.UNIT_CATEGORY_TOOLS);
          break;
        case ClientConstQuestCondition.QUESTTYPE_HEAL_SOLDIERS:
          this.handleHealUnitsCondition();
          break;
        case ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
          CommandController.instance.executeCommand(IngameClientCommands.OPEN_ACTIVE_TAX_DIALOG_COMMAND);
          break;
        case ClientConstQuestCondition.QUESTTYPE_COUNT_BATTLES:
        case ClientConstQuestCondition.QUESTTYPE_SABOTAGE:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(this.bindFunction(this.toNextEnemy));
          break;
        case ClientConstQuestCondition.QUESTTYPE_COLLECT_FAME:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(this.bindFunction(this.toNextDifferentEnemy));
          break;
        case ClientConstQuestCondition.QUESTTYPE_FIND_EQUIPMENT:
        case ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
          var __s5local4 = this.questVO.triggerKingdomID;
          if (__s5local4 == -1) {
            __s5local4 = int(CastleModel.kingdomData.activeKingdomID);
          }
          if (CastleModel.kingdomData.isKingdomUnlocked(__s5local4)) {
            this.go(this.bindFunction(this.toWorldMap));
            if (!this.isFactionQuest()) {
              var __s5local5 = int(this.conditionVO.conditionData[0] > 0 ? this.conditionVO.conditionData[0] : -2);
              this.go(ShowHowToDoQuestconditionCommand.toNextDungeon, __s5local4, __s5local5);
            }
          } else {
            ShowHowToDoQuestconditionCommand.layoutManager.state = CastleLayoutManager.STATE_KINGDOMMAP;
            if (CastleModel.kingdomData.isKingdomUnlockable(CastleModel.kingdomData.getKingdomVOByID(__s5local4))) {
              CastleModel.kingdomData.tempTargetSpaceID = __s5local4;
              this.go(this.bindFunction(this.toDialog), CastleHandleKingdomDialog, new CastleHandleKingdomDialogProperties(CastleModel.kingdomData.getKingdomVOByID(__s5local4)));
            }
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_LOOTRESOURCE:
        case ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_POINT_EVENT:
          this.go(this.bindFunction(this.toWorldMap));
          if (!this.isFactionQuest()) {
            this.go(this.bindFunction(this.toNextEnemy));
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_SPY:
          this.go(this.bindFunction(this.toWorldMap));
          if (this.conditionVO.conditionData[0] != 0 || ABGHelper.isOnABGAndTower) {
            this.go(this.bindFunction(this.toNextEnemy));
          } else {
            this.go(ShowHowToDoQuestconditionCommand.toNextDungeon, this.questVO.triggerKingdomID, -2);
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_COUNT_POPULATION:
          __s5local0 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(127);
          __s5local1 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(205);
          while (__s5local0.hasUserLevelAndEffectsForUpgrade() && __s5local1.hasUserLevelAndEffectsForUpgrade()) {
            __s5local0 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(__s5local0.upgradeWodID);
            __s5local1 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(__s5local1.upgradeWodID);
          }
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s5local0, __s5local1);
          break;
        case ClientConstQuestCondition.QUESTTYPE_JOIN_ALLIANCE:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceTeaserDialog);
          break;
        case ClientConstQuestCondition.QUESTTYPE_START_KINGDOM:
          ShowHowToDoQuestconditionCommand.layoutManager.state = CastleLayoutManager.STATE_KINGDOMMAP;
          break;
        case ClientConstQuestCondition.QUESTTYPE_START_TREASUREMAP:
          if (CastleModel.specialEventData.activeSeasonVO && !CastleModel.specialEventData.activeSeasonVO.finished) {
            if (ShowHowToDoQuestconditionCommand.layoutManager.isInEventState) {
              this.go(this.bindFunction(this.toHomeCastleIsoState));
            }
            this.go(ShowHowToDoQuestconditionCommand.toSeasonEventDialog);
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_OUTPOSTS:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_OUTPOST, this.questVO.triggerKingdomID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_CONQUER_VILLAGES:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_VILLAGE, this.questVO.triggerKingdomID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_COUNT_BOSSDUNGEONS:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_BOSS_DUNGEON, this.questVO.triggerKingdomID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
        case ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
        case ClientConstQuestCondition.QUESTTYPE_COLLECT_SILVER_RUNES:
        case ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
        case ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
        case ClientConstQuestCondition.QUESTTYPE_COLLECT_PEARL_RELICS:
          if (CastleModel.specialEventData.activeSeasonVO) {
            if (CastleModel.specialEventData.activeSeasonVO.isLocked) {
              this.go(ShowHowToDoQuestconditionCommand.toSeasonEventDialog);
            } else {
              if (this.conditionVO.conditionData[0] != null) {
                var __s5local6 = CastleModel.specialEventData.activeSeasonVO.treasureMapVO.getNodeById(this.conditionVO.conditionData[0]);
                if (__s5local6 != null && __s5local6.nodeType == TMapNodeVO.NODE_TYPE_PORT) {
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
        case ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAMP:
          this.go(this.bindFunction(this.toWorldMap), false, FactionConst.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_FACTION_CAMP, FactionConst.KINGDOM_ID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONVILLAGE:
          this.go(this.bindFunction(this.toWorldMap), false, FactionConst.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_FACTION_VILLAGE, FactionConst.KINGDOM_ID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAPITAL:
          this.go(this.bindFunction(this.toWorldMap), false, FactionConst.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_FACTION_CAPITAL, FactionConst.KINGDOM_ID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_LOOT_NPC_AQUAMARINE:
          if (CastleModel.kingdomData.isKingdomUnlocked(WorldIsland.KINGDOM_ID)) {
            this.go(this.bindFunction(this.toWorldMap), true, WorldIsland.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_ISLE_DUNGEON, WorldIsland.KINGDOM_ID);
          } else {
            ShowHowToDoQuestconditionCommand.layoutManager.state = CastleLayoutManager.STATE_KINGDOMMAP;
            if (CastleModel.kingdomData.isKingdomUnlockable(CastleModel.kingdomData.getKingdomVOByID(WorldIsland.KINGDOM_ID))) {
              CastleModel.kingdomData.tempTargetSpaceID = WorldIsland.KINGDOM_ID;
              this.go(this.bindFunction(this.toDialog), CastleHandleKingdomDialog, new CastleHandleKingdomDialogProperties(CastleModel.kingdomData.getKingdomVOByID(WorldIsland.KINGDOM_ID)));
            }
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_LOOT_PVP_AQUAMARINE:
          this.go(this.bindFunction(this.toWorldMap), true, WorldIsland.KINGDOM_ID);
          this.go(this.bindFunction(this.toNextEnemy), -1, WorldIsland.KINGDOM_ID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_GAIN_FACTION_POINTS:
          var __s5local7 = castAs(CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_FACTION_INVASION), "FactionInvasionEventVO");
          if (__s5local7) {
            this.go(this.bindFunction(this.toWorldMap), true, WorldClassic.KINGDOM_ID);
            var __s5local8 = 0;
            __s5local8 = __s5local7.bluePoints == __s5local7.redPoints ? int(Math.random() < 0.5 ? DungeonConst.BLUE_FACTION_KING : DungeonConst.RED_FACTION_KING) : int(__s5local7.bluePoints > __s5local7.redPoints ? DungeonConst.RED_FACTION_KING : DungeonConst.BLUE_FACTION_KING);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, WorldClassic.KINGDOM_ID, -3, __s5local8);
          } else if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_FACTION)) {
            this.handleFactionTowerCondition();
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_CONQUER_RESOURCE_ISLE:
          this.go(this.bindFunction(this.toWorldMap), true, WorldIsland.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_ISLE_RESOURCE, WorldIsland.KINGDOM_ID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES:
          CastleOpenShopExecutor.open(CastleOpenShopExecutor.SOURCE_QUEST_BUY_RUBIES, CXFSourceTrackingConstants.SOURCE_QUEST_BUY_RUBIES);
          break;
        case ClientConstQuestCondition.QUESTTYPE_VISIT_SHOP:
        case ClientConstQuestCondition.QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES:
          CastleOpenShopExecutor.open(CastleOpenShopExecutor.SOURCE_QUEST_VISIT_SHOP, CXFSourceTrackingConstants.SOURCE_QUEST_VISIT_SHOP);
          break;
        case ClientConstQuestCondition.QUESTTYPE_RESEARCH:
          var __s5local9 = CastleModel.researchData.researchVOs.get(this.conditionVO.conditionData[0]);
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleResearchDialog, new CastleResearchDialogProperties(__s5local9, null));
          break;
        case ClientConstQuestCondition.QUESTTYPE_WISHING_WELL:
          this.go(this.bindFunction(this.toHomeCastleIsoState));
          this.go(this.bindFunction(this.centerOnWishingWell));
          break;
        case ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_TABLETS:
          if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_NOMADINVASION_VENDOR)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            this.go(ShowHowToDoQuestconditionCommand.toNomadInvasionDialog, CastleAllianceNomadInvasionDialog.TAB_MERCHANT);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_MEDALS:
          if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_NOMADINVASION_VENDOR)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            this.go(ShowHowToDoQuestconditionCommand.toNomadInvasionDialog, CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_SPEND_SAMURAI_TOKENS:
          if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_SAMURAI_INVASION)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            this.go(ShowHowToDoQuestconditionCommand.toSamuraiInvasionDialog, CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_OPEN_SAMURAI_EVENT_DIALOG:
          if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_SAMURAI_INVASION)) {
            this.go(this.bindFunction(this.toHomeCastleIsoState));
            var __s5local10 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_SAMURAI_INVASION);
            this.go(ShowHowToDoQuestconditionCommand.toSamuraiInvasionDialog, __s5local10.daimyoInfoVO.isEnabled ? CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO : CastleAllianceSamuraiInvasionDialog.TAB_PLAYER);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_COLLECT_SAMURAI_TOKENS:
        case ClientConstQuestCondition.QUESTTYPE_DEFEAT_SAMURAI_CAMPS:
          if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_SAMURAI_INVASION)) {
            this.go(this.bindFunction(this.toWorldMap), true, WorldClassic.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_SAMURAI_CAMP, WorldClassic.KINGDOM_ID, -3, DungeonConst.BASIC_SAMURAI_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_COLLECT_KHAN_TABLETS:
        case ClientConstQuestCondition.QUESTTYPE_DEFEAT_NOMAD_CAMPS:
          if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE)) {
            this.go(this.bindFunction(this.toWorldMap), true, WorldClassic.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_NOMAD_CAMP, WorldClassic.KINGDOM_ID, -3, DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_DEFEAT_KHAN_CAMPS:
        case ClientConstQuestCondition.QUESTTYPE_COLLECT_RAGE:
        case ClientConstQuestCondition.QUESTTYPE_DEFEND_KHAN_ATTACKS:
          var __s5local11 = castAs(CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE), "AllianceNomadInvasionEventVO");
          if (__s5local11 && __s5local11.khanCampBarVO) {
            this.go(this.bindFunction(this.toWorldMap), true, WorldClassic.KINGDOM_ID);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP, WorldClassic.KINGDOM_ID, -3, DungeonConst.BASIC_ALLIANCE_NOMAD_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_SPEND_RUBIES:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePremiumMarketPlaceDialog, new CastlePremiumMarketPlaceDialogProperties(CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO));
          break;
        case ClientConstQuestCondition.QUESTTYPE_WRITE_ALLIANCECHAT:
          this.toAllianceDialog(ClientConstAlliance.CAT_COMMUNICATION);
          break;
        case ClientConstQuestCondition.QUESTTYPE_SEND_RESOURCES_PLAYER:
          this.go(this.bindFunction(this.toWorldMap));
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_CASTLE, this.questVO.triggerKingdomID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_USE_FORGE_ALLIANCE:
          this.toAllianceDialog(ClientConstAlliance.CAT_FORGE);
          break;
        case ClientConstQuestCondition.QUESTTYPE_USE_FORGE:
          CastleModel.smartfoxClient.sendCommandVO(new C2SGetGemInventory());
          CastleModel.smartfoxClient.sendCommandVO(new C2SGetEquipmentInventory());
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEquipmentDialog, new CastleEquipmentDialogProperties(null, -1, false, -1, CastleEquipmentDialog.CRAFTING));
          break;
        case ClientConstQuestCondition.QUESTTYPE_COLLECT_CITIZEN:
          this.go(this.bindFunction(this.toIsoState));
          break;
        case ClientConstQuestCondition.QUESTTYPE_COLLECT_FROM_CARRIAGE:
          this.go(this.bindFunction(this.toHomeCastleIsoState));
          this.go(this.bindFunction(this.toAnCenterResourceCart));
          break;
        case ClientConstQuestCondition.QUESTTYPE_COMPLETE_MERCENARY_MISSION:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleMercenaryOverviewDialog);
          break;
        case ClientConstQuestCondition.QUESTTYPE_FINISH_UNLOCKABLE:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toDialog), CastleSlumDonateCharacterDialog);
          break;
        case ClientConstQuestCondition.QUESTTYPE_BUY_PACKAGE:
          this.go(this.bindFunction(this.toIsoState));
          this.go(this.bindFunction(this.toPrivateEventDialog), PrivateEventEnum.LOW_LEVEL_UNIT_DEALER.privateEventID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_CREATE_EMBLEM:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePremiumMarketPlaceDialog, new CastlePremiumMarketPlaceDialogProperties(ClientConstCastle.CATEGORY_MARKETPLACE_CREST));
          break;
        case ClientConstQuestCondition.QUESTTYPE_ASSIGN_CONSTRUCTIONITEM:
          this.go(this.bindFunction(this.toHomeCastleIsoState));
          this.go(this.bindFunction(this.toDialog), CastleConstructionItemsMainDialog, new CastleConstructionItemsMainDialogProperties());
          break;
        case ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK:
          this.go(this.bindFunction(this.toAndConnectToFacebook));
          break;
        case ClientConstQuestCondition.QUESTTYPE_DEFEAT_ALIENS_WITH_MIN_FAME:
          if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE)) {
            this.go(this.bindFunction(this.toWorldMap), true);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_ALIEN_CAMP, WorldClassic.KINGDOM_ID, -1, DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
          } else if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE)) {
            this.go(this.bindFunction(this.toWorldMap), true);
            this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_RED_ALIEN_CAMP, WorldClassic.KINGDOM_ID, -1, DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP:
        case ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS:
          if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_FACTION)) {
            this.handleFactionTowerCondition();
          } else {
            this.showEventNotRunningAlert();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_PVP:
          if (CastleModel.kingdomData.activeKingdomID == FactionConst.KINGDOM_ID || CastleModel.kingdomData.activeKingdomID == WorldIsland.KINGDOM_ID) {
            this.go(this.bindFunction(this.toWorldMap), true, CastleModel.kingdomData.activeKingdomID);
            this.go(this.bindFunction(this.toNextEnemy), -1, CastleModel.kingdomData.activeKingdomID);
          } else {
            this.go(this.bindFunction(this.toWorldMap), true);
            if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE)) {
              this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_ALIEN_CAMP, WorldClassic.KINGDOM_ID, -1, DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
            } else if (CastleModel.specialEventData.isEventActive(EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE)) {
              this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_RED_ALIEN_CAMP, WorldClassic.KINGDOM_ID, -1, DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
            } else {
              this.go(this.bindFunction(this.toNextEnemy), true);
            }
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_GAIN_LTPE_POINTS:
          this.go(this.bindFunction(this.toIsoState));
          this.go(ShowHowToDoQuestconditionCommand.toLTPEDialog);
          break;
        case ClientConstQuestCondition.QUESTTYPE_JOIN_TEMP_SERVER:
          if (TempServerHelper.tmpServerEvent) {
            TempServerHelper.tmpServerEvent.openDialog();
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_OPTIN_NEWSLETTER:
          if (!EnvGlobalsHandler.globals.loginIsKeyBased && !EnvGlobalsHandler.globals.isOnSpecialServer && !SpecialServerHelper.isOnKeyLoginToNormalLoginServer) {
            CastleDialogHandler.getInstance().registerDefaultDialogs(OptionsDialog, new OptionsDialogProperties(OptionsDialog.TAB_ACCOUNT_DETAILS, true));
          }
          break;
        case ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN:
        case ClientConstQuestCondition.QUESTTYPE_GACHA_DRAW:
          GeneralsHelper.showGeneralsHubDialog();
          break;
        case ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleDefenceDialog, new CastleDefenceDialogProperties(CastleModel.userData.castleList.getHomeCastle()));
          break;
        case ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
        case ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING:
        case ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
          this.go(this.bindFunction(this.toWorldMap), true, WorldClassic.KINGDOM_ID);
          this.go(ShowHowToDoQuestconditionCommand.toNearestMapObject, WorldConst.AREA_TYPE_WOLF_KING, WorldClassic.KINGDOM_ID, -3, DungeonConst.BASIC_WOLF_KING_PLAYER_ID);
          break;
        case ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW:
          CastleDialogHandler.getInstance().registerDefaultDialogs(GeneralsOverviewDialog);
      }
    }
  }
  handleHealUnitsCondition() {
    var __s68local0 = CastleModel.userCastleListDetailed.getCastlesWithHospitalsList();
    if (__s68local0 && __s68local0.length != 0) {
      var __s68local1;
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
        var __s68local2 = CastleModel.areaData.activeArea.isFactionCamp ? IsoObjectEnum.FACTION_HOSPITAL : IsoObjectEnum.HOSPITAL;
        if (castAs(Iso.data.objects.provider.getObjectByType(__s68local2), "ABasicBuildingVO")) {
          __s68local1 = CastleModel.areaData.activeArea.areaInfo;
        }
      }
      if (!__s68local1 && __s68local0 != null) {
        for (var __s68local3 = 0, __s68local4 = __s68local0; __s68local3 < __s68local4.length; __s68local3++) {
          var __s68local5 = __s68local4[__s68local3];
          if (__s68local5 !== undefined && __s68local5.kingdomID == CastleModel.kingdomData.activeKingdomID) {
            __s68local1 = CastleModel.userData.castleList.getCastleVOByID(__s68local5.areaID, __s68local5.kingdomID);
          }
        }
      }
      __s68local1 || (__s68local1 = CastleModel.userData.castleList.getCastleVOByID(__s68local0[0].areaID, __s68local0[0].kingdomID));
      this.go(this.bindFunction(this.toIsoState), __s68local1);
      this.go(this.bindFunction(this.toDialog), CastleRecruitDialog, new CastleRecruitDialogProperties(ClientConstCastle.CATEGORY_HOSPITAL));
    } else {
      this.go(this.bindFunction(this.toIsoState));
      var __s68local6 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(ClientConstCastle.HOSPITAL_BUILDING_WOD);
      this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s68local6);
    }
  }
  handleFactionTowerCondition() {
    var __s78local0 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_FACTION);
    if (__s78local0.isLocked) {
      ShowHowToDoQuestconditionCommand.layoutManager.state = CastleLayoutManager.STATE_KINGDOMMAP;
      this.go(this.bindFunction(this.toFactionMainDialog));
    } else if (__s78local0.isSpectator) {
      this.showEventNotRunningAlert();
    } else {
      this.go(this.bindFunction(this.toWorldMap), true, FactionConst.KINGDOM_ID);
      this.go(ShowHowToDoQuestconditionCommand.toNextFactionTower);
    }
  }
  toPrivateEventDialog(argument0) {
    var __s83local0 = CastleModel.specialEventData.getActivePrivateEventByEventId(argument0);
    if (__s83local0) {
      CommandController.instance.executeCommand(IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, [__s83local0, false]);
    } else {
      this.canGoOn = false;
    }
  }
  toAnyValidRecruitmentCastle(argument0) {
    this.go(this.bindFunction(this.toIsoState), this.findValidCastleForCategory(argument0));
    if (argument0 == ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      this.go(this.bindFunction(this.toProduceTools));
    } else {
      this.go(this.bindFunction(this.toRecruitSoldiers));
    }
  }
  findValidCastleForCategory(argument0) {
    if (CastleModel.permanentCastleData.getCurrentCastle() && this.hasUnlockedUnits(argument0, CastleModel.permanentCastleData.getCurrentCastle())) {
      return CastleModel.areaData.activeAreaInfo;
    }
    for (var __s91local0 = 0, __s91local1 = CastleModel.userData.getCastleList(true); __s91local0 < __s91local1.length; __s91local0++) {
      var __s91local2 = __s91local1[__s91local0];
      if (this.hasUnlockedUnits(argument0, CastleModel.permanentCastleData.getCastleByAreaInfo(__s91local2))) {
        return __s91local2;
      }
    }
    this.canGoOn = false;
    return null;
  }
  hasUnlockedUnits(argument0, argument1) {
    var __s97local0;
    if (argument0 == ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      __s97local0 = argument1.unitsVO.unlockedTools;
    } else if (argument0 == ClientConstCastle.UNIT_CATEGORY_SOLDIERS) {
      __s97local0 = argument1.unitsVO.unlockedSoldiers;
    }
    if (argument1 == CastleModel.permanentCastleData.getCurrentCastle()) {
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
  }
  toAllianceDialog(argument0) {
    if (CastleModel.userData.isInAlliance) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceDialog, new CastleAllianceDialogProperties(argument0));
    } else {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceTeaserDialog);
    }
  }
  toDialog(argument0, argument1 = null) {
    CastleDialogHandler.getInstance().registerDefaultDialogs(argument0, argument1);
  }
  toFactionMainDialog() {
    CommandController.instance.executeCommand(IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
  }
  centerOnWishingWell() {
    if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle && CastleModel.areaData.activeArea.isMyMainCastle) {
      var __s114local0 = Iso.renderer.objects.provider.getObjectByType(IsoObjectEnum.RUBY_WISHING_WELL);
      if (instanceOfClass(__s114local0, "RubyWishingWellFixedPositionBuildingVE")) {
        this.centerOnBasicBuilding(__s114local0);
      }
    } else {
      ShowHowToDoQuestconditionCommand.controller.addEventListener(CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onWishingJAAArrived));
      CommandController.instance.executeCommand(IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
  }
  onWishingJAAArrived(argument0) {
    ShowHowToDoQuestconditionCommand.controller.removeEventListener(CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onWishingJAAArrived));
    this.centerOnWishingWell();
  }
  static toNomadInvasionDialog(argument0) {
    if (castAs(CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE), "AllianceNomadInvasionEventVO")) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceNomadInvasionDialog, new CastleAllianceNomadInvasionEventDialogProperties(argument0));
    }
  }
  static toSamuraiInvasionDialog(argument0) {
    var __s124local0 = castAs(CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_SAMURAI_INVASION), "SamuraiInvasionEventVO");
    if (__s124local0) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceSamuraiInvasionDialog, new CastleAllianceSamuraiInvasionEventDialogProperties(__s124local0, argument0));
    }
  }
  static toLTPEDialog() {
    var __s127local0 = castAs(CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_LONGTERM_POINT_EVENT), "LongTermPointEventEventVO");
    if (__s127local0) {
      __s127local0.openDialog();
    }
  }
  static toSeasonEventDialog() {
    CastleModel.kingdomData.tempTargetSpaceID = CastleModel.specialEventData.activeSeasonVO.mapID;
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleHandleSeasonDialog, new CastleHandleSeasonDialogProperties(CastleModel.specialEventData.activeSeasonVO));
  }
  static toNearestMapObject(argument0, argument1, argument2 = -3, argument3 = -1) {
    CastleModel.smartfoxClient.sendCommandVO(new C2SFindNextMapObjectVO(argument0, argument1, argument2, -1, argument3));
  }
  static toNextDungeon(argument0, argument1 = -2) {
    ShowHowToDoQuestconditionCommand.toNearestMapObject(CastleModel.kingdomData.getKingdomVOByID(argument0).dungeonType, argument0, argument1);
  }
  toNextEnemy(argument0 = -1, argument1 = -1) {
    var __s136local0 = int(Math.max(argument1 > -1 ? argument1 : this.questVO.triggerKingdomID, 0));
    var __s136local1 = CastleModel.userData.castleList.getMainCastleByKingdomID(__s136local0);
    CastleModel.smartfoxClient.sendCommandVO(new C2SFindNextEnemyCastleVO(__s136local1.absAreaPosX, __s136local1.absAreaPosY, 0, argument0));
  }
  toNextDifferentEnemy() {
    var __s138local0 = CastleModel.userData.castleList.getMainCastleByKingdomID(this.questVO.triggerKingdomID > -1 ? this.questVO.triggerKingdomID : 0);
    CastleModel.smartfoxClient.sendCommandVO(new C2SFindNextEnemyCastleVO(__s138local0.absAreaPosX, __s138local0.absAreaPosY, CastleModel.questData.currentSearchEnemyCounter % ClientConstCastle.MAX_FINDABLE_ENEMY_COUNTER));
    CastleModel.questData.increaseCurrentSearchEnemyCounter();
  }
  static toNextFactionTower() {
    CastleModel.smartfoxClient.sendCommandVO(new C2SFindNextTowerVO());
  }
  toSeasonMap() {
    CastleModel.specialEventData.activeSeasonVO.loadTreasureMapAssets(function () {
      ShowHowToDoQuestconditionCommand.layoutManager.state = CastleLayoutManager.STATE_SEASON_WORLDMAP;
      if (this.conditionVO) {
        CommandController.instance.executeCommand(IngameClientCommands.SWITCH_SEASON_MAP_CENTER_AND_HIGHLIGHT_DUNGEONS, this.conditionVO);
      }
    });
  }
  toWorldMap(argument0 = false, argument1 = -1) {
    var __s147local0 = int(Math.max(argument1 > -1 ? argument1 : this.questVO.triggerKingdomID, 0));
    if (__s147local0 != CastleModel.kingdomData.activeKingdomID) {
      this.onWaitingState = true;
      ShowHowToDoQuestconditionCommand.controller.addEventListener(CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    }
    var __s147local1 = CastleModel.userData.castleList.getMainCastleByKingdomID(__s147local0);
    if (__s147local0 == FactionConst.KINGDOM_ID && !__s147local1) {
      CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_FACTION).openDialog();
      this.canGoOn = false;
      return;
    }
    if (argument0) {
      CommandController.instance.executeCommand(IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s147local1);
    } else {
      CommandController.instance.executeCommand(IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__s147local0, __s147local1.absAreaPosX, __s147local1.absAreaPosY]);
    }
  }
  toProduceTools() {
    if (this.hasUnlockedUnits(ClientConstCastle.UNIT_CATEGORY_TOOLS, CastleModel.permanentCastleData.getCurrentCastle())) {
      this.go(this.bindFunction(this.toDialog), CastleRecruitDialog, new CastleRecruitDialogProperties(ClientConstCastle.UNIT_CATEGORY_TOOLS));
    } else {
      var __s153local0 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(ClientConstCastle.BARRACKS_BUILDING_WOD_ID);
      if (__s153local0.level == 1) {
        this.go(this.bindFunction(this.toDecoState));
      }
      this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s153local0);
    }
  }
  toRecruitSoldiers() {
    if (this.hasUnlockedUnits(ClientConstCastle.UNIT_CATEGORY_SOLDIERS, CastleModel.permanentCastleData.getCurrentCastle())) {
      this.go(this.bindFunction(this.toDialog), CastleRecruitDialog, new CastleRecruitDialogProperties(ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    } else {
      var __s158local0 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING).get(ClientConstCastle.BARRACKS_BUILDING_WOD_ID);
      if (__s158local0.level == 1) {
        this.go(this.bindFunction(this.toDecoState));
      }
      this.go(this.bindFunction(this.toAndCenterBuildingForUpdate), __s158local0);
    }
  }
  toRecruitDialog() {
    var __s163local0 = [];
    for (var __s163local1 = 0; __s163local1 < this.conditionVO.conditionData.length; __s163local1++) {
      var __s163local2 = CastleModel.wodData.voSubList(CastleWodData.TYPE_UNIT).get(this.conditionVO.conditionData[__s163local1]);
      __s163local0.push(__s163local2);
    }
    if (instanceOfClass(__s163local0[0], "ToolUnitVO")) {
      if (__s163local0[0].name == ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP) {
        if (!CastleModel.militaryData.isBuildingCategoryAllowed(ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP)) {
          this.canGoOn = false;
          return;
        }
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleRecruitDialog, new CastleRecruitDialogProperties(ClientConstCastle.UNIT_CATEGORY_TOOLS, ClientConstCastle.UNIT_TYPE_TOOL_ATTACK));
      } else {
        if (!CastleModel.militaryData.isBuildingCategoryAllowed(ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP)) {
          this.canGoOn = false;
          return;
        }
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleRecruitDialog, new CastleRecruitDialogProperties(ClientConstCastle.UNIT_CATEGORY_TOOLS, ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE));
      }
    } else {
      if (!(CastleModel.areaData.activeArea.isFactionCamp ? CastleModel.militaryData.isBuildingCategoryAllowed(ClientConstCastle.UNIT_BUILDINGTYPE_FACTION_BARRACKS) : CastleModel.militaryData.isBuildingCategoryAllowed(ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS))) {
        this.canGoOn = false;
        return;
      }
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleRecruitDialog, new CastleRecruitDialogProperties(CastleModel.areaData.activeArea.isFactionCamp ? ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    }
    CastleTutorialController.getInstance().waitForExternalDialogShow(CastleRecruitDialog, function () {
      var __s174local0 = CastleModel.areaData.activeArea.isFactionCamp ? ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
      for (var __s174local1 = ShowHowToDoQuestconditionCommand.layoutManager.getDialog(CastleRecruitDialog).subLayer.get(__s174local0); __s174local1.shopCurrentPage < __s174local1.shopMaxPage;) {
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
        __s174local1.shopCurrentPage = int(Math.min(__s174local1.shopMaxPage, __s174local1.shopCurrentPage + 1));
        __s174local1.fillShopItemsByGroup();
      }
    });
  }
  toAnCenterResourceCart() {
    var __s184local0 = Iso.data.objects.surroundings.getResourceCarts();
    if (__s184local0.length >= 1) {
      this.toAndCenterIsoObject(__s184local0[0]);
    }
  }
  toAndCenterShip() {
    var __s187local0 = Iso.data.objects.provider.getObjectByType(IsoObjectEnum.SHIP);
    if (__s187local0) {
      this.toAndCenterIsoObject(__s187local0);
    }
  }
  toAndCenterIsoObject(argument0) {
    if (argument0) {
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
        var __s190local0 = new __s0local0(argument0.x, argument0.y);
        if (argument0.hasOwnProperty("posOffset")) {
          __s190local0.add(argument0.posOffset);
        }
        Iso.renderer.camera.scrollToGridPos(__s190local0);
      } else {
        this.canGoOn = false;
      }
    }
  }
  toAndCenterBuildingForUpdate(argument0, argument1 = null) {
    if (argument0) {
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
        if (instanceOfClass(argument0, "CastlewallDefenceVO")) {
          this.go(this.bindFunction(this.toDecoShopTab), argument0.getLowestDowngradeVO().shopCategory, argument0, argument1);
        } else {
          var __s196local0 = Iso.renderer.objects.innerBuildings.list;
          (__s196local0 = __s196local0.concat(Iso.renderer.objects.defenceObjects.towers)).push(Iso.renderer.objects.defenceObjects.gate);
          __s196local0.push(Iso.renderer.objects.defenceObjects.moat);
          var __s196local1;
          var __s196local2 = [];
          if (__s196local0 != null) {
            for (var __s196local3 = 0, __s196local4 = __s196local0; __s196local3 < __s196local4.length; __s196local3++) {
              var __s196local5 = __s196local4[__s196local3];
              if (__s196local5 !== undefined && __s196local5) {
                if (__s196local5.buildingVO.name == argument0.name && __s196local5.vo.group == argument0.group && (__s196local5.buildingVO.level < argument0.level || __s196local5.buildingVO.level <= argument0.level && (__s196local5.buildingVO.buildingState == IsoBuildingStateEnum.UPGRADE_IN_PROGRESS || __s196local5.buildingVO.buildingState == IsoBuildingStateEnum.UPGRADE_STOPPED || __s196local5.buildingVO.buildingState == IsoBuildingStateEnum.BUILD_IN_PROGRESS || __s196local5.buildingVO.buildingState == IsoBuildingStateEnum.BUILD_STOPPED))) {
                  __s196local2.push(__s196local5);
                }
                if (argument1 && __s196local5.buildingVO.name == argument1.name && __s196local5.vo.group == argument1.group && (__s196local5.buildingVO.level < argument1.level || __s196local5.buildingVO.level <= argument1.level && (__s196local5.buildingVO.buildingState == IsoBuildingStateEnum.UPGRADE_IN_PROGRESS || __s196local5.buildingVO.buildingState == IsoBuildingStateEnum.UPGRADE_STOPPED || __s196local5.buildingVO.buildingState == IsoBuildingStateEnum.BUILD_IN_PROGRESS || __s196local5.buildingVO.buildingState == IsoBuildingStateEnum.BUILD_STOPPED))) {
                  __s196local2.push(__s196local5);
                }
              }
            }
          }
          __s196local2.sort(ShowHowToDoQuestconditionCommand.sortBuildingsByLevel);
          if (__s196local2 != null) {
            for (var __s196local6 = 0, __s196local7 = __s196local2; __s196local6 < __s196local7.length; __s196local6++) {
              var __s196local8 = __s196local7[__s196local6];
              if (__s196local8 !== undefined && __s196local8.buildingVO.buildingState != IsoBuildingStateEnum.BUILD_IN_PROGRESS && __s196local8.buildingVO.buildingState != IsoBuildingStateEnum.BUILD_STOPPED && __s196local8.buildingVO.buildingState != IsoBuildingStateEnum.UPGRADE_IN_PROGRESS && __s196local8.buildingVO.buildingState != IsoBuildingStateEnum.UPGRADE_STOPPED && __s196local8.buildingVO.buildingState != IsoBuildingStateEnum.REPAIR_IN_PROGRESS && __s196local8.buildingVO.buildingState != IsoBuildingStateEnum.REPAIR_STOPPED && __s196local8.buildingVO.buildingState != IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS && __s196local8.buildingVO.buildingState != IsoBuildingStateEnum.DISASSEMBLE_STOPPED) {
                __s196local1 = __s196local8;
                break;
              }
            }
          }
          if (!__s196local1 && __s196local2.length > 0) {
            if (!Iso.data.objects.provider.hasMaxAmountOfObjectsByType(__s196local2[0].buildingVO)) {
              this.go(this.bindFunction(this.toDecoState));
              this.go(this.bindFunction(this.toDecoShopTab), argument0.getLowestDowngradeVO().shopCategory, argument0, argument1);
              return;
            }
            __s196local1 = __s196local2[0];
          } else if (!__s196local1 || instanceOfClass(__s196local1, "BasicMoatVE") || instanceOfClass(__s196local1, "PremiumMoatVE")) {
            this.go(this.bindFunction(this.toDecoState));
            this.go(this.bindFunction(this.toDecoShopTab), argument0.getLowestDowngradeVO().shopCategory, argument0, argument1);
            return;
          }
          if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastleBuildMode && instanceOfClass(argument0, "GuardTowerVO")) {
            ShowHowToDoQuestconditionCommand.layoutManager.getPanel(CastleDecoShopPanel).changeCategory(ClientConstCastle.CATEGORY_DEFENCE);
          }
          this.centerOnBasicBuilding(__s196local1);
        }
      } else {
        this.canGoOn = false;
      }
    }
  }
  centerOnBasicBuilding(argument0) {
    if (argument0 && !CastleModel.tutorialData.isTutorialActive) {
      Iso.renderer.camera.scrollToGridPos(argument0.vo.pos);
      Iso.renderer.mouse.changeSelectedTarget(argument0);
    }
  }
  toDecoShopTab(argument0 = null, argument1 = null, argument2 = null) {
    if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastleBuildMode) {
      if (instanceOfClass(argument1, "CastlewallDefenceVO")) {
        argument0 = argument1.shopCategory;
      }
      if (argument0 && argument0 != ClientConstCastle.CATEGORY_NOT_IN_SHOP) {
        var __s220local0 = ShowHowToDoQuestconditionCommand.layoutManager.getPanel(CastleDecoShopPanel);
        var __s220local1 = CastleDecoShopItemArrayHelper.getBuildingsByCategory(argument0);
        __s220local0.revertHighLightFilters();
        if (argument1 || argument2) {
          var __s220local2 = -1;
          for (var __s220local3 = 0; __s220local3 < __s220local1.length; __s220local3++) {
            var __s220local4 = __s220local1[__s220local3];
            if (__s220local4.isAvailableByLevelAndEffect) {
              var __s220local5 = int(__s220local3 / CastleDecoShopPanel.ITEMS_PER_PAGE);
              var __s220local6 = int(__s220local3 % CastleDecoShopPanel.ITEMS_PER_PAGE);
              if (ShowHowToDoQuestconditionCommand.buildingsAreEqual(argument1, __s220local4)) {
                __s220local0.changeCategory(argument0, __s220local5, true);
                __s220local0.highLightFilteredArrayIndex(__s220local6);
                __s220local2 = __s220local5;
              } else if (ShowHowToDoQuestconditionCommand.buildingsAreEqual(argument2, __s220local4)) {
                if (__s220local2 == -1 || __s220local2 == __s220local5) {
                  __s220local0.changeCategory(argument0, __s220local5, true);
                  __s220local0.highLightFilteredArrayIndex(__s220local6);
                }
              }
            }
          }
        } else {
          __s220local0.changeCategory(argument0);
        }
      }
    } else {
      this.canGoOn = false;
    }
  }
  toAndConnectToFacebook() {
    if (CastleModel.userData.isConnectedToFacebook && CastleFacebookModule.hasAuthResponse) {
      CastleModel.smartfoxClient.sendCommandVO(new C2SMapFacebookVO(true, CastleFacebookModule.userID, CastleFacebookModule.accessToken, CastleFacebookModule.appID));
    } else {
      CommandController.instance.executeCommand(IngameClientCommands.MAP_USER_TO_FACEBOOK, true);
    }
  }
  static buildingsAreEqual(argument0, argument1) {
    if (!argument0 || !argument1) {
      return false;
    }
    var __s238local0 = true;
    if (argument0.objectType == IsoObjectEnum.DECO) {
      __s238local0 = argument0.type == argument1.type;
    }
    return !!argument0 && !!argument1 && argument0.name == argument1.name && argument0.group == argument1.group && __s238local0;
  }
  toDecoState() {
    if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
      Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    } else {
      this.canGoOn = false;
    }
  }
  go(argument0) {
    var __s246local0 = this;
    var __s246local1 = [];
    for (var __s246local2 = 1; __s246local2 < arguments.length; __s246local2++) {
      __s246local1[__s246local2 - 1] = arguments[__s246local2];
    }
    if (this.canGoOn) {
      if (this.onWaitingState) {
        this.waitingFunctions.push(function () {
          __s246local1.unshift(argument0);
          __s246local0.go.apply(__s246local0, __s246local1);
        });
      } else {
        argument0.apply(this, __s246local1);
      }
    }
  }
  toHomeCastleIsoState() {
    if (!CastleModel.areaData.activeArea.isMyHomeCastle || !ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle) {
      var __s255local0 = CastleModel.userData.castleList.getHomeCastle();
      ShowHowToDoQuestconditionCommand.controller.addEventListener(CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
      this.onWaitingState = true;
      if (CastleModel.worldmapData) {
        CastleModel.worldmapData.allowGAARequests = false;
      }
      CastleModel.smartfoxClient.sendCommandVO(new C2SJoinCastleVO(__s255local0.objectId, __s255local0.kingdomID));
    }
  }
  toIsoState(argument0?: any) {
    var __s259local0;
    if (argument0 === undefined) {
      argument0 = null;
    }
    if (this.questVO && (this.questVO.mapID == -1 || this.questVO.eventID == EventConst.EVENTTYPE_FACTION || argument0)) {
      if (!(__s259local0 = argument0 || CastleModel.userData.castleList.getMainCastleByKingdomID(this.questVO.triggerKingdomID))) {
        this.canGoOn = false;
        return;
      }
      if (ShowHowToDoQuestconditionCommand.layoutManager.isInMyCastle && CastleModel.kingdomData.activeKingdomID == this.questVO.triggerKingdomID && CastleModel.areaData.activeAreaInfo.objectId == __s259local0.objectId) {
        return;
      }
      ShowHowToDoQuestconditionCommand.controller.addEventListener(CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
      this.onWaitingState = true;
      if (CastleModel.worldmapData) {
        CastleModel.worldmapData.allowGAARequests = false;
      }
      CastleModel.smartfoxClient.sendCommandVO(new C2SJoinCastleVO(__s259local0.objectId, __s259local0.kingdomID));
    } else {
      if (!CastleModel.specialEventData.activeSeasonVO || !CastleModel.specialEventData.activeSeasonVO.treasureMapVO || CastleModel.specialEventData.activeSeasonVO.finished) {
        this.canGoOn = false;
        return;
      }
      ShowHowToDoQuestconditionCommand.controller.addEventListener(CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
      this.onWaitingState = true;
      CastleModel.specialEventData.activeSeasonVO.loadTreasureMapAssets(function () {
        CastleModel.smartfoxClient.sendCommandVO(new C2SJoinCampVO(CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID));
      });
    }
  }
  onServerMessageArrived(argument0) {
    ShowHowToDoQuestconditionCommand.controller.removeEventListener(CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    ShowHowToDoQuestconditionCommand.controller.removeEventListener(CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    this.onWaitingState = false;
    this.executeFunctionList();
  }
  executeFunctionList() {
    for (var __s272local0 = 0; __s272local0 < this.waitingFunctions.length; __s272local0++) {
      this.waitingFunctions[__s272local0]();
    }
    this.waitingFunctions = [];
  }
  static sortBuildingsByLevel(argument0, argument1) {
    if (argument0.buildingVO.level < argument1.buildingVO.level) {
      return 1;
    } else if (argument0.buildingVO.level > argument1.buildingVO.level || argument0.buildingVO.efficiency > argument1.buildingVO.efficiency) {
      return -1;
    } else {
      return 0;
    }
  }
  isFactionQuest() {
    return instanceOfClass(this.conditionVO, "CastleQuestConditionVO") && this.conditionVO.isFactionQuest;
  }
  showEventNotRunningAlert() {
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("alert_eventNotRunning")));
  }
  static get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
  static get controller() {
    return CastleBasicController.getInstance();
  }
}
classImplementsInterfaces(ShowHowToDoQuestconditionCommand, "ISimpleCommand");

export interface ShowHowToDoQuestconditionCommand {
  go(first: any, ...args: any[]): any;
}
