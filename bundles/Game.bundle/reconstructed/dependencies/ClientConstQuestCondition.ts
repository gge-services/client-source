export class ClientConstQuestCondition {
  static hasShowHowToFunction(argument0) {
    switch (argument0) {
      case ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
      case ClientConstQuestCondition.QUESTTYPE_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_TOOLS:
      case ClientConstQuestCondition.QUESTTYPE_TOOL_START:
      case ClientConstQuestCondition.QUESTTYPE_DECOS:
      case ClientConstQuestCondition.QUESTTYPE_LAW_AND_ORDER:
      case ClientConstQuestCondition.QUESTTYPE_EXPANSIONS:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
      case ClientConstQuestCondition.QUESTTYPE_COUNT_BATTLES:
      case ClientConstQuestCondition.QUESTTYPE_FIND_EQUIPMENT:
      case ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
      case ClientConstQuestCondition.QUESTTYPE_LOOTRESOURCE:
      case ClientConstQuestCondition.QUESTTYPE_SPY:
      case ClientConstQuestCondition.QUESTTYPE_COUNT_POPULATION:
      case ClientConstQuestCondition.QUESTTYPE_JOIN_ALLIANCE:
      case ClientConstQuestCondition.QUESTTYPE_START_KINGDOM:
      case ClientConstQuestCondition.QUESTTYPE_START_TREASUREMAP:
      case ClientConstQuestCondition.QUESTTYPE_OUTPOSTS:
      case ClientConstQuestCondition.QUESTTYPE_CONQUER_VILLAGES:
      case ClientConstQuestCondition.QUESTTYPE_COUNT_BOSSDUNGEONS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAMP:
      case ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAPITAL:
      case ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONVILLAGE:
      case ClientConstQuestCondition.QUESTTYPE_LOOT_PVP_AQUAMARINE:
      case ClientConstQuestCondition.QUESTTYPE_LOOT_NPC_AQUAMARINE:
      case ClientConstQuestCondition.QUESTTYPE_CONQUER_RESOURCE_ISLE:
      case ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES:
      case ClientConstQuestCondition.QUESTTYPE_HEAL_SOLDIERS:
      case ClientConstQuestCondition.QUESTTYPE_RESEARCH:
      case ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND:
      case ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_TABLETS:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_KHAN_TABLETS:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_SAMURAI_TOKENS:
      case ClientConstQuestCondition.QUESTTYPE_SPEND_SAMURAI_TOKENS:
      case ClientConstQuestCondition.QUESTTYPE_WISHING_WELL:
      case ClientConstQuestCondition.QUESTTYPE_SPEND_RUBIES:
      case ClientConstQuestCondition.QUESTTYPE_SEND_RESOURCES_PLAYER:
      case ClientConstQuestCondition.QUESTTYPE_WRITE_ALLIANCECHAT:
      case ClientConstQuestCondition.QUESTTYPE_SABOTAGE:
      case ClientConstQuestCondition.QUESTTYPE_USE_FORGE_ALLIANCE:
      case ClientConstQuestCondition.QUESTTYPE_USE_FORGE:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_CITIZEN:
      case ClientConstQuestCondition.QUESTTYPE_RECRUIT_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_PRODUCE_TOOLS:
      case ClientConstQuestCondition.QUESTTYPE_FINISH_UNLOCKABLE:
      case ClientConstQuestCondition.QUESTTYPE_BUY_PACKAGE:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_FAME:
      case ClientConstQuestCondition.QUESTTYPE_OFF_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_DEF_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_GAIN_FACTION_POINTS:
      case ClientConstQuestCondition.QUESTTYPE_RECRUIT_ATTACK_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_RECRUIT_DEFENDER_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_PVP:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_KHAN_CAMPS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEND_KHAN_ATTACKS:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_RAGE:
      case ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_MEDALS:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_PEARL_RELICS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_NOMAD_CAMPS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_SAMURAI_CAMPS:
      case ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
      case ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_SILVER_RUNES:
      case ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
      case ClientConstQuestCondition.QUESTTYPE_CREATE_EMBLEM:
      case ClientConstQuestCondition.QUESTTYPE_ASSIGN_CONSTRUCTIONITEM:
      case ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK:
      case ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_ALIENS_WITH_MIN_FAME:
      case ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_POINT_EVENT:
      case ClientConstQuestCondition.QUESTTYPE_GAIN_LTPE_POINTS:
      case ClientConstQuestCondition.QUESTTYPE_VISIT_SHOP:
      case ClientConstQuestCondition.QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES:
      case ClientConstQuestCondition.QUESTTYPE_JOIN_TEMP_SERVER:
      case ClientConstQuestCondition.QUESTTYPE_OPTIN_NEWSLETTER:
      case ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN:
      case ClientConstQuestCondition.QUESTTYPE_GACHA_DRAW:
      case ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
      case ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
      case ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
      case ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW:
        return true;
      default:
        return false;
    }
  }
  static QUESTTYPE_STARTER = "starter";
  static QUESTTYPE_BUILDINGS = "buildings";
  static QUESTTYPE_UNITS = "units";
  static QUESTTYPE_TOOLS = "tools";
  static QUESTTYPE_TOOL_START = "toolStart";
  static QUESTTYPE_DECOS = "decos";
  static QUESTTYPE_STORAGE = "storage";
  static QUESTTYPE_EXPANSIONS = "expansions";
  static QUESTTYPE_INSTANTBUILD = "instantBuild";
  static QUESTTYPE_COLLECT_TAX = "collectTax";
  static QUESTTYPE_BRIBE_TAXCOLLECTOR = "bribeTaxCollector";
  static QUESTTYPE_DONATE_STONE = "donateStone";
  static QUESTTYPE_DONATE_FOOD = "donateFood";
  static QUESTTYPE_DONATE_WOOD = "donateWood";
  static QUESTTYPE_DONATE_C1 = "donateCurrency1";
  static QUESTTYPE_DONATE_COAL = "donateCoal";
  static QUESTTYPE_DONATE_OIL = "donateOil";
  static QUESTTYPE_DONATE_GLASS = "donateGlass";
  static QUESTTYPE_DONATE_IRON = "donateIron";
  static QUESTTYPE_DONATE_KHAN_MEDALS = "donateKhanMedals";
  static QUESTTYPE_DONATE_SAMURAI_TOKENS = "donateSamuraiTokens";
  static QUESTTYPE_COUNT_BATTLES = "countBattles";
  static QUESTTYPE_COUNT_DUNGEONS = "countDungeons";
  static QUESTTYPE_COUNT_POPULATION = "population";
  static QUESTTYPE_LOOTRESOURCE = "lootResource";
  static QUESTTYPE_SPY = "spy";
  static QUESTTYPE_OUTPOSTS = "outposts";
  static QUESTTYPE_START_TREASUREMAP = "startTreasureMap";
  static QUESTTYPE_TREASURE_NODE = "treasureNode";
  static QUESTTYPE_FINISHTREASUREDUNGEONS = "finishTreasureDungeons";
  static QUESTTYPE_JOIN_ALLIANCE = "alliance";
  static QUESTTYPE_START_KINGDOM = "startKingdom";
  static QUESTTYPE_CONQUER_VILLAGES = "villages";
  static QUESTTYPE_COUNT_BOSSDUNGEONS = "bossDungeon";
  static QUESTTYPE_TREASURE_VILLAGES = "treasureVillages";
  static QUESTTYPE_COLLECT_SILVER_RUNES = "collectSilverRunes";
  static QUESTTYPE_FIND_EQUIPMENT = "findEquipment";
  static QUESTTYPE_OFF_UNITS = "offUnits";
  static QUESTTYPE_DEF_UNITS = "defUnits";
  static QUESTTYPE_CONQUER_FACTIONCAMPS = "conquerFactionCamp";
  static QUESTTYPE_CONQUER_FACTIONVILLAGE = "conquerFactionVillage";
  static QUESTTYPE_DEFEATED_FACTIONCAPITAL = "defeatedFactionCapitalOnMap";
  static QUESTTYPE_DEFEATED_FACTIONCAMP = "defeatFactionCamp";
  static QUESTTYPE_FINISH_UNLOCKABLE = "finishUnlockable";
  static QUESTTYPE_JOIN_AREA = "joinArea";
  static QUESTTYPE_REPAIR_TREASURE_BRIDGES = "repairedTreasureBridges";
  static QUESTTYPE_COLLECT_KHAN_TABLETS = "collectKhanTablets";
  static QUESTTYPE_COLLECT_SAMURAI_TOKENS = "collectSamuraiTokens";
  static QUESTTYPE_SPEND_SAMURAI_TOKENS = "spendSamuraiTokens";
  static QUESTTYPE_LAW_AND_ORDER = "lawAndOrder";
  static QUESTTYPE_LOOT_PVP_AQUAMARINE = "lootAquamarineInPVP";
  static QUESTTYPE_LOOT_NPC_AQUAMARINE = "lootAquamarineFromNPC";
  static QUESTTYPE_CONQUER_RESOURCE_ISLE = "conquerResourceIsle";
  static QUESTTYPE_BUY_RUBIES = "buyRubies";
  static QUESTTYPE_COLLECT_FAME = "collectFame";
  static QUESTTYPE_HEAL_SOLDIERS = "healSoldiers";
  static QUESTTYPE_RESEARCH = "research";
  static QUESTTYPE_SPEND_KHAN_TABLETS = "spendKhanTablets";
  static QUESTTYPE_WISHING_WELL = "wishingWell";
  static QUESTTYPE_MINUTESKIP = "useMinuteSkip";
  static QUESTTYPE_INVITE_A_FRIEND = "inviteFriend";
  static QUESTTYPE_CONSTRUCTION_ALLIANCE_HELP = "requestAllianceHelpBuilding";
  static QUESTTYPE_BUY_PACKAGE = "buyPackage";
  static QUESTTYPE_WIN_FAME_FIGHT = "winFameFight";
  static QUESTTYPE_SPEND_RUBIES = "spendC2";
  static QUESTTYPE_WRITE_ALLIANCECHAT = "writeInAllianceChat";
  static QUESTTYPE_SEND_RESOURCES_PLAYER = "resourceToPlayer";
  static QUESTTYPE_SABOTAGE = "sabotageDamage";
  static QUESTTYPE_USE_FORGE_ALLIANCE = "useAllianceForge";
  static QUESTTYPE_USE_FORGE = "craftEquipment";
  static QUESTTYPE_COLLECT_CITIZEN = "collectFromCitizen";
  static QUESTTYPE_RECRUIT_UNITS = "recruitUnits";
  static QUESTTYPE_PRODUCE_TOOLS = "produceTools";
  static QUESTTYPE_REQUEST_ALLIANCE_HELP = "requestAllianceHelp";
  static QUESTTYPE_COMPLETE_MERCENARY_MISSION = "completeMercenaryMission";
  static QUESTTYPE_COLLECT_FROM_CARRIAGE = "collectFromCarriage";
  static QUESTTYPE_CREATE_EMBLEM = "createEmblem";
  static QUESTTYPE_ASSIGN_CONSTRUCTIONITEM = "assignConstructionItem";
  static QUESTTYPE_GAIN_FACTION_POINTS = "gainFactionPoints";
  static QUESTTYPE_DEFEAT_ALIENS_WITH_MIN_FAME = "defeatAliensWithMinFame";
  static QUESTTYPE_LOOT_RESOURCES_POINT_EVENT = "lootResourcesPointEvent";
  static QUESTTYPE_CONNECT_TO_FACEBOOK = "connectToFacebook";
  static QUESTTYPE_RECRUIT_ATTACK_UNITS = "recruitedAttackUnitsWithMinStrength";
  static QUESTTYPE_RECRUIT_DEFENDER_UNITS = "recruitedDefenderUnitsWithMinStrength";
  static QUESTTYPE_LOOT_RESOURCES_PVP = "lootResourcesPvP";
  static QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP = "defeatedFactionTowersOnMap";
  static QUESTTYPE_DEFEAT_FACTION_TOWERS = "defeatedFactionTowers";
  static QUESTTYPE_DEFEAT_KHAN_CAMPS = "defeatKhanCamps";
  static QUESTTYPE_DEFEND_KHAN_ATTACKS = "defendKhanAttacks";
  static QUESTTYPE_COLLECT_RAGE = "collectRage";
  static QUESTTYPE_SPEND_KHAN_MEDALS = "spendKhanMedals";
  static QUESTTYPE_COLLECT_PEARL_RELICS = "collectPearlRelics";
  static QUESTTYPE_DEFEAT_NOMAD_CAMPS = "defeatNomads";
  static QUESTTYPE_DEFEAT_SAMURAI_CAMPS = "defeatSamuraiCamps";
  static QUESTTYPE_GAIN_LTPE_POINTS = "gainLTPEPoints";
  static QUESTTYPE_JOIN_TEMP_SERVER = "joinTempServer";
  static QUESTTYPE_VISIT_SHOP = "visitShop";
  static QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES = "buyMinAmountOfRubies";
  static QUESTTYPE_OPEN_SAMURAI_EVENT_DIALOG = "clientOnly_openSamuraiEventDialog";
  static QUESTTYPE_OPTIN_NEWSLETTER = "optinNewsletter";
  static QUESTTYPE_VISIT_GENERALS_INN = "visitGeneralsInn";
  static QUESTTYPE_GENERAL_ASSIGN_TO_BARON = "assignGeneralToBaron";
  static QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER = "assignGeneralToCommander";
  static QUESTTYPE_DEFEND_WOLFKING = "defendWolfKing";
  static QUESTTYPE_DEFEAT_WOLFKING = "defeatWolfKing";
  static QUESTTYPE_GACHA_DRAW = "performGacha";
  static QUESTTYPE_VISIT_GENERALS_OVERVIEW = "visitGeneralsOverview";
}
