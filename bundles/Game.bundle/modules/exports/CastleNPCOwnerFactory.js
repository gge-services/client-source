Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_6 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_7 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_8 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_9 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_10 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_export_ClientConstCrest = require("gge-module:export_ClientConstCrest");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_WorldMapOwnerInfoVO_ARE = require("gge-module:export_WorldMapOwnerInfoVO_ARE");
var __dep_export_CrestVO = require("gge-module:export_CrestVO");
var __s0local0 = __dep_exact_c549e43d1112dfff.getLogger("CastleNPCOwnerFactory");
var __s0local1 = function () {
  function CastleNPCOwnerFactory() {}
  CastleNPCOwnerFactory.getOwner = function (__s5param0) {
    if (__s5param0 > 0) {
      __dep_exact_9e901e8e2483a22f.error("ownerID " + __s5param0 + " is not a NPC ID!");
      return null;
    }
    var __s5local0;
    switch (__s5param0) {
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_UNKNOWN_EVENT_OWNER:
        __s5local0 = CastleNPCOwnerFactory.generateEventOwner(-1, __s5param0);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_THORNKING_DUNGEON:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_THORNKING_VILLAGE:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_THORNKING_COW_DUNGEON:
        __s5local0 = CastleNPCOwnerFactory.generateEventOwner(__dep_exact_26a421b704832cff_7.EventConst.EVENTTYPE_CRUSADE_THORNKING, __s5param0);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_SEEQUEEN_DUNGEON:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_SEEQUEEN_SHIPS:
        __s5local0 = CastleNPCOwnerFactory.generateEventOwner(__dep_exact_26a421b704832cff_7.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN, __s5param0);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_UNDERWORLD_DUNGEON:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_UNDERWORLD_VILLAGE:
        __s5local0 = CastleNPCOwnerFactory.generateEventOwner(__dep_exact_26a421b704832cff_7.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD, __s5param0);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_TREASURE_HUNT_DUNGEON:
        __s5local0 = CastleNPCOwnerFactory.generateTreasureHuntDungeonNPC();
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_TUTORIAL_DUNGEON_OWNER:
        __s5local0 = CastleNPCOwnerFactory.generateTutorialDungeonNPC();
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_USER_INVASION:
        __s5local0 = CastleNPCOwnerFactory.generateUserInvasionNPC();
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION:
        __s5local0 = CastleNPCOwnerFactory.generateRedAlienInvasionNPC();
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_SAMURAI_INVASION:
        __s5local0 = CastleNPCOwnerFactory.generateSamuraiInvasionNPC();
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE:
        __s5local0 = CastleNPCOwnerFactory.generateDaimyoCastleNPC();
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP:
        __s5local0 = CastleNPCOwnerFactory.generateKhanCampNPC();
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN2:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS2:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL2:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_SPRING:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_ELEMENTAL:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_SUMMER:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_10TH_ANNIVERSARY:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS3:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS4:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN3:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_SPRING2:
        __s5local0 = CastleNPCOwnerFactory.generateCollectorNPC(__s5param0);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ABG_CULTISTS:
        __s5local0 = CastleNPCOwnerFactory.generateABGOwner(__s5param0);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_WOLFKING:
        __s5local0 = CastleNPCOwnerFactory.generateWolfkingNPC();
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ARE_GENERIC:
        __s5local0 = CastleNPCOwnerFactory.generateARE_NPC();
        break;
      default:
        __s0local0.warn("Unknown NPC owner ID " + __s5param0 + ".");
        return __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO.createDummy();
    }
    __s5local0.isDungeonOwner = true;
    return __s5local0;
  };
  CastleNPCOwnerFactory.generateStandardNPCOwner = function () {
    var __s9local0 = [];
    (__s9local0 = __s9local0.concat(CastleNPCOwnerFactory.generateDungeonNPCs(), CastleNPCOwnerFactory.generateKingdomDungeonNPCs(), CastleNPCOwnerFactory.generateKingdomBossDungeonNPCs(), CastleNPCOwnerFactory.generateNomadNPCs(), CastleNPCOwnerFactory.generateVillageNPCs(), CastleNPCOwnerFactory.generatEventDungeonNPCs())).push(CastleNPCOwnerFactory.generateOutpostNPC(), CastleNPCOwnerFactory.generateCapitalNPC(), CastleNPCOwnerFactory.generateCapitalNPCIce(), CastleNPCOwnerFactory.generateCapitalNPCDesert(), CastleNPCOwnerFactory.generateCapitalNPCVolcano(), CastleNPCOwnerFactory.generateMetropolNPC(), CastleNPCOwnerFactory.generatePlagueMonkNPC(), CastleNPCOwnerFactory.generateBlueFactionNPC(), CastleNPCOwnerFactory.generateRedFactionNPC(), CastleNPCOwnerFactory.generateKingstowerNPC(), CastleNPCOwnerFactory.generateMonumentNPC(), CastleNPCOwnerFactory.generateLaboratoryNPC(__dep_exact_26a421b704832cff_9.WorldClassic.KINGDOM_ID), CastleNPCOwnerFactory.generateLaboratoryNPC(__dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID), CastleNPCOwnerFactory.generateLaboratoryNPC(__dep_exact_26a421b704832cff_4.WorldDessert.KINGDOM_ID), CastleNPCOwnerFactory.generateLaboratoryNPC(__dep_exact_26a421b704832cff_1.WorldVolcano.KINGDOM_ID), CastleNPCOwnerFactory.generateUnknownNPC());
    return __s9local0;
  };
  CastleNPCOwnerFactory.generateWolfkingNPC = function () {
    var __s11local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s11local0.playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_WOLFKING);
    __s11local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("wolfgard_playerName");
    __s11local0.playerLevel = -1;
    var __s11local1 = new __dep_export_CrestVO.CrestVO();
    __s11local1.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 2968662);
    __s11local1.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_WOLFKING, 11788776);
    __s11local0.crest = __s11local1;
    return __s11local0;
  };
  CastleNPCOwnerFactory.generateUserInvasionNPC = function () {
    var __s13local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s13local0.playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_USER_INVASION);
    __s13local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("alienInvasion_playerName");
    __s13local0.playerLevel = -1;
    var __s13local1 = new __dep_export_CrestVO.CrestVO();
    __s13local1.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 6179448);
    __s13local1.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_ALIEN, 12115422);
    __s13local0.crest = __s13local1;
    return __s13local0;
  };
  CastleNPCOwnerFactory.generateRedAlienInvasionNPC = function () {
    var __s15local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s15local0.playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION);
    __s15local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("redAlienInvasion_playerName");
    __s15local0.playerLevel = -1;
    var __s15local1 = new __dep_export_CrestVO.CrestVO();
    __s15local1.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 8986953);
    __s15local1.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_REDALIEN, 15921906);
    __s15local0.crest = __s15local1;
    return __s15local0;
  };
  CastleNPCOwnerFactory.generateSamuraiInvasionNPC = function () {
    var __s17local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s17local0.playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_SAMURAI_INVASION);
    __s17local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("samurai_playerName");
    __s17local0.playerLevel = -1;
    var __s17local1 = new __dep_export_CrestVO.CrestVO();
    __s17local1.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 2898774);
    __s17local1.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_SAMURAI, 16770451);
    __s17local0.crest = __s17local1;
    return __s17local0;
  };
  CastleNPCOwnerFactory.generateDaimyoCastleNPC = function () {
    var __s19local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s19local0.playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE);
    __s19local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("samurai_playerName");
    __s19local0.playerLevel = -1;
    var __s19local1 = new __dep_export_CrestVO.CrestVO();
    __s19local1.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 2898774);
    __s19local1.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_SAMURAI, 16770451);
    __s19local0.crest = __s19local1;
    return __s19local0;
  };
  CastleNPCOwnerFactory.generateEventOwner = function (__s21param0 = -1, __s21param1 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_UNKNOWN_EVENT_OWNER)) {
    var __s21local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s21local0.playerID = __s21param1;
    __s21local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_" + __s21param0 + "_DungeonOwner");
    __s21local0.crest = CastleNPCOwnerFactory.getCrusadeCrest(__s21param0);
    return __s21local0;
  };
  CastleNPCOwnerFactory.generateTutorialDungeonNPC = function () {
    var __s23local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s23local0.playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_TUTORIAL_DUNGEON_OWNER);
    __s23local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("dungeon_playerName_RandomDungeonEvent");
    __s23local0.playerLevel = 42;
    __s23local0.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    __s23local0.isDungeonOwner = true;
    return __s23local0;
  };
  CastleNPCOwnerFactory.generateDungeonNPCs = function () {
    var __s25local0 = [];
    for (var __s25local1 = 0; __s25local1 < __dep_exact_26a421b704832cff.DungeonConst.DUNGEON_PLAYER_NAME_COUNT; __s25local1++) {
      __s25local0.push(CastleNPCOwnerFactory.generateDungeonPlayer(__s25local1));
    }
    return __s25local0;
  };
  CastleNPCOwnerFactory.generateDungeonPlayer = function (__s29param0) {
    var __s29local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s29local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DungeonConst.getDungeonOwnerID(__dep_exact_26a421b704832cff_9.WorldClassic.KINGDOM_ID, __s29param0));
    __s29local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dungeon_playerName"));
    __s29local0.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    __s29local0.isDungeonOwner = true;
    return __s29local0;
  };
  CastleNPCOwnerFactory.generateABGOwner = function (__s31param0) {
    var __s31local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s31local0.playerID = __s31param0;
    __s31local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_-222"));
    __s31local0.crest = CastleNPCOwnerFactory.getDefaultABGCrest();
    __s31local0.isDungeonOwner = true;
    return __s31local0;
  };
  CastleNPCOwnerFactory.generateKingdomDungeonNPCs = function () {
    var __s33local0 = [];
    for (var __s33local1 = 1; __s33local1 < __dep_export_KingdomEnum.KingdomEnum.getNPCOwnerList().length; __s33local1++) {
      __s33local0.push(CastleNPCOwnerFactory.generateKingdomDungeonPlayer(__s33local1));
    }
    return __s33local0;
  };
  CastleNPCOwnerFactory.generateKingdomDungeonPlayer = function (__s37param0) {
    var __s37local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    var __s37local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DungeonConst.getDungeonOwnerID(__s37param0, 0));
    __s37local0.playerID = __s37local1;
    __s37local0.playerName = CastleNPCOwnerFactory.getNPCPlayerName("kingdom_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName(String(__s37local1)));
    __s37local0.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(__s37param0);
    __s37local0.isDungeonOwner = true;
    return __s37local0;
  };
  CastleNPCOwnerFactory.generateKingdomBossDungeonNPCs = function () {
    var __s39local0 = [];
    for (var __s39local1 = 1; __s39local1 < 4; __s39local1++) {
      __s39local0.push(CastleNPCOwnerFactory.generateKingdomBossDungeonPlayer(__s39local1));
    }
    return __s39local0;
  };
  CastleNPCOwnerFactory.generateKingdomBossDungeonPlayer = function (__s43param0) {
    var __s43local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    var __s43local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DungeonConst.getBossDungeonOwnerID(__s43param0));
    __s43local0.playerID = __s43local1;
    __s43local0.playerName = CastleNPCOwnerFactory.getNPCPlayerName("kingdom_boss_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName("" + __s43local1));
    __s43local0.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(__s43param0);
    __s43local0.isDungeonOwner = true;
    __s43local0.isShareableDungeon = true;
    return __s43local0;
  };
  CastleNPCOwnerFactory.generateNomadNPCs = function () {
    var __s45local0 = [];
    for (var __s45local1 = 0; __s45local1 < __dep_exact_26a421b704832cff.DungeonConst.NOMAD_CAMP_COUNT; __s45local1++) {
      var __s45local2 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_NOMAD_CAMP_FIRST_ID - __s45local1);
      __s45local0.push(CastleNPCOwnerFactory.generateNomadPlayer(__s45local2));
    }
    return __s45local0;
  };
  CastleNPCOwnerFactory.generateNomadPlayer = function (__s49param0) {
    var __s49local0;
    (__s49local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO()).playerID = __s49param0;
    __s49local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("nomad_playerName");
    __s49local0.playerLevel = -1;
    var __s49local1 = new __dep_export_CrestVO.CrestVO();
    __s49local1.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 1009082);
    __s49local1.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_NOMAD, 14408394);
    __s49local0.crest = __s49local1;
    __s49local0.isDungeonOwner = true;
    return __s49local0;
  };
  CastleNPCOwnerFactory.generateKhanCampNPC = function () {
    var __s51local0;
    (__s51local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO()).playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP);
    __s51local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("nomad_playerName");
    __s51local0.playerLevel = -1;
    __s51local0.isShareableDungeon = false;
    var __s51local1 = new __dep_export_CrestVO.CrestVO();
    __s51local1.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 1009082);
    __s51local1.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_NOMAD, 14408394);
    __s51local0.crest = __s51local1;
    __s51local0.isDungeonOwner = true;
    return __s51local0;
  };
  CastleNPCOwnerFactory.generateARE_NPC = function () {
    return new __dep_export_WorldMapOwnerInfoVO_ARE.WorldMapOwnerInfoVO_ARE();
  };
  CastleNPCOwnerFactory.generateCollectorNPC = function (__s55param0) {
    var __s55local0;
    var __s55local1 = __dep_export_CastleModel.CastleModel.collectEventData.getCollectInfoVOByID(Math.abs(__s55param0 - __dep_exact_26a421b704832cff.DungeonConst.BASIC_COLLECTOR_PLAYER_ID)).collectorEventSkinName;
    (__s55local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO()).playerID = __s55param0;
    __s55local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_collector_battlelog_attackerName_0_" + __s55local1);
    __s55local0.playerLevel = -1;
    var __s55local2 = new __dep_export_CrestVO.CrestVO();
    switch (__s55param0) {
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN2:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN3:
        __s55local2.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 2311175);
        __s55local2.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_COLLECTOR_HALLOWEEN, 10418537);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS2:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS3:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS4:
        __s55local2.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 1257822);
        __s55local2.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_COLLECTOR_CHRISTMAS, 14498576);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL2:
        __s55local2.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 5716113);
        __s55local2.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_COLLECTOR_CARNIVAL, 16765798);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_SPRING:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_SPRING2:
        __s55local2.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 15376694);
        __s55local2.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_COLLECTOR_SPRING, 1912371);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_ELEMENTAL:
        __s55local2.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 3158323);
        __s55local2.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_COLLECTOR_ELEMENTAL, 13558473);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_SUMMER:
        __s55local2.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 3899525);
        __s55local2.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_COLLECTOR_SUMMER, 15255878);
        break;
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_10TH_ANNIVERSARY:
        __s55local2.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 15379489);
        __s55local2.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_COLLECTOR_10TH_ANNIVERSARY, 11473426);
    }
    __s55local0.crest = __s55local2;
    __s55local0.isDungeonOwner = true;
    return __s55local0;
  };
  CastleNPCOwnerFactory.generateVillageNPCs = function () {
    var __s58local0 = [];
    __s58local0.push(CastleNPCOwnerFactory.generateVillageNPC(__dep_exact_26a421b704832cff_9.WorldClassic.KINGDOM_ID), CastleNPCOwnerFactory.generateVillageNPC(__dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID), CastleNPCOwnerFactory.generateVillageNPC(__dep_exact_26a421b704832cff_4.WorldDessert.KINGDOM_ID), CastleNPCOwnerFactory.generateVillageNPC(__dep_exact_26a421b704832cff_1.WorldVolcano.KINGDOM_ID), CastleNPCOwnerFactory.generateVillageNPC(__dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID));
    return __s58local0;
  };
  CastleNPCOwnerFactory.generateVillageNPC = function (__s60param0 = 1) {
    var __s60local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    var __s60local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DungeonConst.getDungeonOwnerID(__s60param0, 0));
    __s60local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_10.VillageConst.getVillageDefaultOwnerID(__s60param0));
    __s60local0.playerName = CastleNPCOwnerFactory.getNPCPlayerName("kingdom_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName("" + __s60local1));
    __s60local0.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(__s60param0);
    __s60local0.isDungeonOwner = true;
    __s60local0.isShareableDungeon = true;
    return __s60local0;
  };
  CastleNPCOwnerFactory.generateRedFactionNPC = function () {
    var __s62local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s62local0.playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_FACTION_RED);
    __s62local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("red_faction");
    __s62local0.factionID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_8.FactionConst.RED_FACTION);
    __s62local0.crest = __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
    __s62local0.isDungeonOwner = true;
    return __s62local0;
  };
  CastleNPCOwnerFactory.generateUnknownNPC = function () {
    var __s64local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s64local0.playerID = -366;
    __s64local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("Unknown_name");
    return __s64local0;
  };
  CastleNPCOwnerFactory.generateBlueFactionNPC = function () {
    var __s66local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s66local0.playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_FACTION_BLUE);
    __s66local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("blue_faction");
    __s66local0.factionID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_8.FactionConst.BLUE_FACTION);
    __s66local0.crest = __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO;
    __s66local0.isDungeonOwner = true;
    return __s66local0;
  };
  CastleNPCOwnerFactory.generateTreasureHuntDungeonNPC = function () {
    var __s68local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s68local0.playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_TREASURE_HUNT_DUNGEON);
    __s68local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_treasureMap_DungeonOwner");
    __s68local0.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    __s68local0.isDungeonOwner = true;
    return __s68local0;
  };
  CastleNPCOwnerFactory.generateOutpostNPC = function () {
    var __s70local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s70local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.OUTPOST_DEFAULT_OWNER_ID);
    __s70local0.playerLevel = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.OUTPOST_DEFAULT_LEVEL);
    __s70local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_classic"));
    __s70local0.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    __s70local0.isOutpostOwner = true;
    __s70local0.isShareableDungeon = true;
    return __s70local0;
  };
  CastleNPCOwnerFactory.generateCapitalNPC = function () {
    var __s72local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s72local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID);
    __s72local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_classic"));
    __s72local0.playerLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.landmark.defaultLandmark.defaultLevel);
    __s72local0.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    __s72local0.isOutpostOwner = true;
    __s72local0.isShareableDungeon = true;
    return __s72local0;
  };
  CastleNPCOwnerFactory.generateCapitalNPCIce = function () {
    var __s74local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s74local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID);
    __s74local0.playerName = CastleNPCOwnerFactory.getNPCPlayerName("kingdom_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName("-221"));
    __s74local0.playerLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.landmark.defaultLandmark.defaultLevel);
    __s74local0.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(__dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID);
    __s74local0.isOutpostOwner = true;
    __s74local0.isShareableDungeon = true;
    return __s74local0;
  };
  CastleNPCOwnerFactory.generateCapitalNPCDesert = function () {
    var __s76local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s76local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID);
    __s76local0.playerLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.landmark.defaultLandmark.defaultLevel);
    __s76local0.playerName = CastleNPCOwnerFactory.getNPCPlayerName("kingdom_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName("-220"));
    __s76local0.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(__dep_exact_26a421b704832cff_4.WorldDessert.KINGDOM_ID);
    __s76local0.isOutpostOwner = true;
    __s76local0.isShareableDungeon = true;
    return __s76local0;
  };
  CastleNPCOwnerFactory.generateCapitalNPCVolcano = function () {
    var __s78local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s78local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID);
    __s78local0.playerLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.landmark.defaultLandmark.defaultLevel);
    __s78local0.playerName = CastleNPCOwnerFactory.getNPCPlayerName("kingdom_dungeon_playerName_" + CastleNPCOwnerFactory.cleanPlayerName("-222"));
    __s78local0.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(__dep_exact_26a421b704832cff_1.WorldVolcano.KINGDOM_ID);
    __s78local0.isOutpostOwner = true;
    __s78local0.isShareableDungeon = true;
    return __s78local0;
  };
  CastleNPCOwnerFactory.generateMetropolNPC = function () {
    var __s80local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s80local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.METROPOL_DEFAULT_OWNER_ID);
    __s80local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_classic"));
    __s80local0.playerLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.landmark.defaultLandmark.defaultLevel);
    __s80local0.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    __s80local0.isOutpostOwner = true;
    __s80local0.isShareableDungeon = true;
    return __s80local0;
  };
  CastleNPCOwnerFactory.generateKingstowerNPC = function () {
    var __s82local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s82local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.KINGS_TOWER_DEFAULT_OWNER_ID);
    __s82local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_classic"));
    __s82local0.playerLevel = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL);
    __s82local0.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    __s82local0.isDungeonOwner = true;
    __s82local0.isShareableDungeon = true;
    __s82local0.isKingstowerOwner = true;
    return __s82local0;
  };
  CastleNPCOwnerFactory.generateMonumentNPC = function () {
    var __s84local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s84local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.MONUMENT_DEFAULT_OWNER_ID);
    __s84local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_playerName_classic"));
    __s84local0.playerLevel = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.MONUMENT_DEFAULT_LEVEL);
    __s84local0.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    __s84local0.isMonumentOwner = true;
    __s84local0.isDungeonOwner = true;
    __s84local0.isShareableDungeon = true;
    return __s84local0;
  };
  CastleNPCOwnerFactory.generateLaboratoryNPC = function (__s86param0) {
    var __s86local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s86local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.getLaboratoryDefaultOwnerFor(__s86param0));
    var __s86local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DungeonConst.getDungeonOwnerID(__s86param0, 0));
    __s86local0.playerName = CastleNPCOwnerFactory.getNPCPlayerName("kingdom_dungeon_playerName_" + (__s86param0 == __dep_exact_26a421b704832cff_9.WorldClassic.KINGDOM_ID ? "classic" : CastleNPCOwnerFactory.cleanPlayerName(String(__s86local1))));
    __s86local0.playerLevel = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.OutpostConst.LABORATORY_DEFAULT_LEVEL);
    __s86local0.crest = CastleNPCOwnerFactory.getKingdomOwnerCrest(__s86param0);
    __s86local0.isDungeonOwner = true;
    __s86local0.isShareableDungeon = true;
    return __s86local0;
  };
  CastleNPCOwnerFactory.generatePlagueMonkNPC = function () {
    var __s88local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s88local0.playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_6.SpyConst.PLAGUEMONK_OWNER_ID);
    __s88local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("plagueMonkOwner");
    var __s88local1 = new __dep_export_CrestVO.CrestVO();
    __s88local1.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 2960653);
    __s88local1.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_SHADOW, 5854994);
    __s88local0.crest = __s88local1;
    return __s88local0;
  };
  CastleNPCOwnerFactory.generatEventDungeonNPCs = function () {
    var __s90local0 = [];
    for (var __s90local1 = 0, __s90local2 = __dep_export_ClientConstNPCs.ClientConstNPCs.EVENT_DUNGEON_NPCs; __s90local1 < __s90local2.length; __s90local1++) {
      var __s90local3 = __s90local2[__s90local1];
      if (__s90local3 !== undefined) {
        __s90local0.push(CastleNPCOwnerFactory.generateEventDungeonNPC(__s90local3));
      }
    }
    return __s90local0;
  };
  CastleNPCOwnerFactory.generateEventDungeonNPC = function (__s95param0) {
    var __s95local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s95local0.playerID = __s95param0;
    __s95local0.playerName = __dep_exact_92d05af59ee2ff30.Localize.text("eventDungeon_playerName_" + __s95param0);
    __s95local0.crest = CastleNPCOwnerFactory.getDefaultBanditCrest();
    __s95local0.isDungeonOwner = true;
    return __s95local0;
  };
  CastleNPCOwnerFactory.getDefaultBanditCrest = function () {
    var __s97local0 = new __dep_export_CrestVO.CrestVO();
    __s97local0.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 1710618);
    __s97local0.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_DEFAULT, 15001048);
    return __s97local0;
  };
  CastleNPCOwnerFactory.getDefaultABGCrest = function () {
    var __s99local0 = new __dep_export_CrestVO.CrestVO();
    __s99local0.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 1791030);
    __s99local0.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_ABG_MAYA, 16494651);
    return __s99local0;
  };
  CastleNPCOwnerFactory.getKingdomOwnerCrest = function (__s101param0) {
    var __s101local0 = new __dep_export_CrestVO.CrestVO();
    var __s101local1 = 0;
    var __s101local2 = 0;
    var __s101local3 = 0;
    switch (__s101param0) {
      case __dep_exact_26a421b704832cff_9.WorldClassic.KINGDOM_ID:
        return CastleNPCOwnerFactory.getDefaultBanditCrest();
      case __dep_exact_26a421b704832cff_4.WorldDessert.KINGDOM_ID:
        __s101local1 = 16366401;
        __s101local2 = 11010048;
        __s101local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_DESSERT);
        break;
      case __dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID:
        __s101local1 = 15921906;
        __s101local2 = 18298;
        __s101local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_ICECREAM);
        break;
      case __dep_exact_26a421b704832cff_1.WorldVolcano.KINGDOM_ID:
        __s101local1 = 15782781;
        __s101local2 = 2171169;
        __s101local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_VOLCANO);
        break;
      case __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID:
        __s101local1 = 16777215;
        __s101local2 = 760717;
        __s101local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_ISLAND);
    }
    __s101local0.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, __s101local2);
    __s101local0.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __s101local3, __s101local1);
    return __s101local0;
  };
  CastleNPCOwnerFactory.getCrusadeCrest = function (__s104param0) {
    var __s104local0 = new __dep_export_CrestVO.CrestVO();
    var __s104local1 = 0;
    var __s104local2 = 0;
    var __s104local3 = 0;
    switch (__s104param0) {
      case __dep_exact_26a421b704832cff_7.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        __s104local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_THORNKING);
        __s104local1 = 0;
        __s104local2 = 7704832;
        break;
      case __dep_exact_26a421b704832cff_7.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        __s104local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_SEAQUEEN);
        __s104local1 = 0;
        __s104local2 = 15198431;
        break;
      case __dep_exact_26a421b704832cff_7.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        __s104local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_UNDERWORLD);
        __s104local1 = 1340548;
        __s104local2 = 1450019;
        break;
      default:
        __s104local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_DEFAULT);
        __s104local1 = 14408394;
        __s104local2 = 1644825;
    }
    __s104local0.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, __s104local2);
    __s104local0.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __s104local3, __s104local1);
    return __s104local0;
  };
  CastleNPCOwnerFactory.getNPCPlayerName = function (__s107param0) {
    if (__dep_exact_92d05af59ee2ff30.Localize.hasText(__s107param0)) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__s107param0);
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dungeon_playerName");
    }
  };
  CastleNPCOwnerFactory.cleanPlayerName = function (__s111param0) {
    return __s111param0.split("-").join("NPC_");
  };
  return CastleNPCOwnerFactory;
}();
exports.CastleNPCOwnerFactory = __s0local1;
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_WorldMapOwnerInfoVO = require("gge-module:export_WorldMapOwnerInfoVO");
