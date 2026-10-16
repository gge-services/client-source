var __s0local0 = function () {
  function AlchemistConst() {}
  AlchemistConst.HOURS_$LI$ = function () {
    if (AlchemistConst.HOURS == null) {
      AlchemistConst.HOURS = 3600;
    }
    return AlchemistConst.HOURS;
  };
  AlchemistConst.POTION_TO_INGREDIENT_TO_COST_$LI$ = function () {
    if (AlchemistConst.POTION_TO_INGREDIENT_TO_COST == null) {
      AlchemistConst.POTION_TO_INGREDIENT_TO_COST = [[15, 2, 1, 0], [20, 13, 5, 0], [0, 15, 10, 1], [35, 40, 0, 3], [50, 0, 24, 5]];
    }
    return AlchemistConst.POTION_TO_INGREDIENT_TO_COST;
  };
  AlchemistConst.POTION_TO_BOOST_$LI$ = function () {
    if (AlchemistConst.POTION_TO_BOOST == null) {
      AlchemistConst.POTION_TO_BOOST = [0.2, 0.2, 0.5, 1, 1.5];
    }
    return AlchemistConst.POTION_TO_BOOST;
  };
  AlchemistConst.POTION_TO_DURATION_$LI$ = function () {
    if (AlchemistConst.POTION_TO_DURATION == null) {
      AlchemistConst.POTION_TO_DURATION = [AlchemistConst.HOURS_$LI$() * 24, AlchemistConst.HOURS_$LI$() * 36, AlchemistConst.HOURS_$LI$() * 24, AlchemistConst.HOURS_$LI$() * 46, AlchemistConst.HOURS_$LI$() * 36];
    }
    return AlchemistConst.POTION_TO_DURATION;
  };
  AlchemistConst.getPotionDuration = function (__s17param0) {
    return AlchemistConst.POTION_TO_DURATION_$LI$()[__s17param0];
  };
  AlchemistConst.getPotionEffect = function (__s19param0) {
    return AlchemistConst.POTION_TO_BOOST_$LI$()[__s19param0];
  };
  return AlchemistConst;
}();
__s0local0.POTION_COUNT = 5;
__s0local0.INGREDIENT_COUNT = 4;
__s0local0.MAX_INGREDIENTS_PER_DROP = 3;
__s0local0.INGREDIENTS_PER_POTION = 3;
__s0local0.RUBY_COST = 150;
exports.AlchemistConst = __s0local0;
__s0local0.__class = "AlchemistConst";
var __s0local1 = function () {
  function AllianceBattleGroundConst() {}
  AllianceBattleGroundConst.calculateAllianceTowerPointsToLoot = function (__s25param0, __s25param1, __s25param2, __s25param3) {
    if (__s25param2 === 0) {
      return __s25param0;
    } else {
      return (__s25param0 + __s25param1 * (Math.pow(2, __s25param2) | 0)) * __s25param3;
    }
  };
  AllianceBattleGroundConst.calculateEffectStrength = function (__s29param0, __s29param1, __s29param2) {
    return __s29param1 + __s29param2 * (__s29param0 - 1);
  };
  AllianceBattleGroundConst.calculateBuffCosts = function (__s31param0, __s31param1, __s31param2) {
    var __s31local0 = 0;
    for (var __s31local1 = __s31param0 + 1; __s31local1 <= __s31param1; ++__s31local1) {
      __s31local0 += __s31local1 <= 45 ? __s31local1 * __s31param2 : __s31param2 * 45 * Math.pow((__s31local1 - 41) / 100 + 1, __s31local1 - 45);
    }
    return __s31local0 = Math.round(__s31local0);
  };
  return AllianceBattleGroundConst;
}();
__s0local1.NORMAL_SERVER_EVENT_JOIN_LEVEL = 30;
__s0local1.HIGHSCORE_ALLIANCE_COLLECTOR = "AllianceCollector";
__s0local1.HIGHSCORE_ALLIANCE_TOWER = "AllianceTower";
__s0local1.MAX_CONQUERABLE_METROPOLIS = 5;
__s0local1.MAX_CONQUERABLE_KINGSTOWER = 5;
__s0local1.MAX_ALLOWED_TOWER_CONNECTED_PLAYERS = 5;
__s0local1.JOIN_PERIOD_DAYS = 2;
exports.AllianceBattleGroundConst = __s0local1;
__s0local1.__class = "AllianceBattleGroundConst";
var __s0local2 = function () {
  function AllianceConst() {}
  AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN_$LI$ = function () {
    if (AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN == null) {
      AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN = 10800;
    }
    return AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN;
  };
  AllianceConst.MIN_XP_$LI$ = function () {
    if (AllianceConst.MIN_XP == null) {
      AllianceConst.MIN_XP = __s0local58.getXPFromLevel(AllianceConst.MIN_LEVEL);
    }
    return AllianceConst.MIN_XP;
  };
  AllianceConst.MIN_MEMBERSHIP_FOR_DONATE_$LI$ = function () {
    if (AllianceConst.MIN_MEMBERSHIP_FOR_DONATE == null) {
      AllianceConst.MIN_MEMBERSHIP_FOR_DONATE = 86400;
    }
    return AllianceConst.MIN_MEMBERSHIP_FOR_DONATE;
  };
  AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION == null) {
      AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION = 172800;
    }
    return AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION;
  };
  AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION_TEST_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION_TEST == null) {
      AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION_TEST = 180;
    }
    return AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION_TEST;
  };
  AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_TEST_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_TEST == null) {
      AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_TEST = 300;
    }
    return AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_TEST;
  };
  AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME == null) {
      AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME = 172800;
    }
    return AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME;
  };
  AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_REQUEST_EXPIRATION == null) {
      AllianceConst.DIPLOMACY_REQUEST_EXPIRATION = 604800;
    }
    return AllianceConst.DIPLOMACY_REQUEST_EXPIRATION;
  };
  AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_TEST_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_TEST == null) {
      AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_TEST = 420;
    }
    return AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_TEST;
  };
  AllianceConst.LOWEST_RANK_$LI$ = function () {
    if (AllianceConst.LOWEST_RANK == null) {
      AllianceConst.LOWEST_RANK = AllianceConst.RANK_APPLICANT;
    }
    return AllianceConst.LOWEST_RANK;
  };
  AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET_$LI$ = function () {
    if (AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET == null) {
      AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET = 3600;
    }
    return AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET;
  };
  AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET_$LI$ = function () {
    if (AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET == null) {
      AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET = 86340;
    }
    return AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET;
  };
  AllianceConst.isAllianceBookmark = function (__s75param0) {
    return __s75param0 >= AllianceConst.BOOKMARK_TYPE_ALLIANCE_FREE_ATTACK;
  };
  AllianceConst.MIN_RANK_FORUM_ADMIN_$LI$ = function () {
    if (AllianceConst.MIN_RANK_FORUM_ADMIN == null) {
      AllianceConst.MIN_RANK_FORUM_ADMIN = AllianceConst.RANK_GENERAL;
    }
    return AllianceConst.MIN_RANK_FORUM_ADMIN;
  };
  AllianceConst.mayDeclareWar = function (__s80param0, __s80param1) {
    return __s80param0 > AllianceConst.MAX_LEVEL_FOR_THIS_ALLIANCE || __s80param1 - __s80param0 <= AllianceConst.MAX_DIFFERENCE_TO_THAT_ALLIANCE;
  };
  AllianceConst.getRankingGroupFromRank = function (__s82param0) {
    switch (__s82param0) {
      case AllianceConst.RANK_LEADER:
      case AllianceConst.RANK_COLEADER:
        return AllianceConst.RANKING_GROUP_LEADER;
      case AllianceConst.RANK_MARSHAL:
      case AllianceConst.RANK_TREASURER:
      case AllianceConst.RANK_DIPLOMAT:
      case AllianceConst.RANK_RECRUITER:
      case AllianceConst.RANK_GENERAL:
        return AllianceConst.RANKING_GROUP_GENERAL;
      case AllianceConst.RANK_SERGEANT:
        return AllianceConst.RANKING_GROUP_SERGEANT;
      case AllianceConst.RANK_MEMBER:
        return AllianceConst.RANKING_GROUP_MEMBER;
      case AllianceConst.RANK_APPLICANT:
        return AllianceConst.RANKING_GROUP_APPLICANT;
      default:
        return -1;
    }
  };
  AllianceConst.hasHigherRank = function (__s85param0, __s85param1) {
    return AllianceConst.getRankingGroupFromRank(__s85param0) < AllianceConst.getRankingGroupFromRank(__s85param1) || __s85param0 === AllianceConst.RANK_LEADER;
  };
  AllianceConst.hasAdminRightsForTopicAndAnswers = function (__s87param0, __s87param1) {
    return __s87param0 <= AllianceConst.MIN_RANK_FORUM_ADMIN_$LI$() && AllianceConst.hasHigherRank(__s87param0, __s87param1);
  };
  AllianceConst.canManageAllianceRaid = function (__s89param0) {
    return __s89param0 === AllianceConst.RANK_LEADER || __s89param0 === AllianceConst.RANK_COLEADER;
  };
  AllianceConst.TYPE_TEMP_BUFFS_$LI$ = function () {
    if (AllianceConst.TYPE_TEMP_BUFFS == null) {
      AllianceConst.TYPE_TEMP_BUFFS = [AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST, AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST, AllianceConst.TYPE_TEMP_GLORY_BOOST, AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST, AllianceConst.TYPE_COOLDOWN_REDUCTION_NOMADS, AllianceConst.TYPE_COOLDOWN_REDUCTION_KHAN, AllianceConst.TYPE_RAGE_POINT_BOOST, AllianceConst.TYPE_INFLUENCE_POINT_BOOST, AllianceConst.TYPE_ALIEN_ATTACK_BOOST, AllianceConst.TYPE_DAIMYO_ATTACK_BOOST, AllianceConst.TYPE_KHAN_DEFENSE_BOOST, AllianceConst.TYPE_HEALING_SPEED_BOOST];
    }
    return AllianceConst.TYPE_TEMP_BUFFS;
  };
  AllianceConst.mayDonateC2 = function (__s94param0, __s94param1) {
    return __s94param1 || __s94param0 >= AllianceConst.MIN_LEVEL_FOR_DONATE_C2;
  };
  AllianceConst.FAME_REDUCE_INTERVAL_$LI$ = function () {
    if (AllianceConst.FAME_REDUCE_INTERVAL == null) {
      AllianceConst.FAME_REDUCE_INTERVAL = 86400;
    }
    return AllianceConst.FAME_REDUCE_INTERVAL;
  };
  AllianceConst.FAME_REDUCE_INTERVAL_TEST_$LI$ = function () {
    if (AllianceConst.FAME_REDUCE_INTERVAL_TEST == null) {
      AllianceConst.FAME_REDUCE_INTERVAL_TEST = 600;
    }
    return AllianceConst.FAME_REDUCE_INTERVAL_TEST;
  };
  AllianceConst.APPLICATION_TIME_TO_LIVE_$LI$ = function () {
    if (AllianceConst.APPLICATION_TIME_TO_LIVE == null) {
      AllianceConst.APPLICATION_TIME_TO_LIVE = 259200;
    }
    return AllianceConst.APPLICATION_TIME_TO_LIVE;
  };
  AllianceConst.isValidAllianceID = function (__s105param0) {
    return __s105param0 !== AllianceConst.NO_ALLIANCE_ID && __s105param0 !== AllianceConst.MEMBER_IS_SEARCHING_ID;
  };
  return AllianceConst;
}();
__s0local2.ALLIANCE_HELP_RECRUITMENT = 1;
__s0local2.ALLIANCE_HELP_HEAL_UNIT = 2;
__s0local2.ALLIANCE_HELP_REPAIR = 3;
__s0local2.ALLIANCE_HELP_BUILD = 4;
__s0local2.ALLIANCE_HELP_LOOP_RECRUIT = 5;
__s0local2.ALLIANCE_HELP_RECRUITMENT_LIST = 6;
__s0local2.ALLIANCE_HELP_BUILD_MINLEVEL = 20;
__s0local2.FOUND_COST_C1 = 50;
__s0local2.FOUND_COST_C2 = 375;
__s0local2.FOUND_COST_WOOD = 100;
__s0local2.FOUND_COST_STONE = 50;
__s0local2.RENAME_COST_C2 = 10000;
__s0local2.EMBLEM_CHANGE_COST_C2 = 10000;
__s0local2.NAME_MAX_LENGTH = 15;
__s0local2.NAME_MIN_LENGTH = 5;
__s0local2.NAME_MIN_LENGTH_HARD = 2;
__s0local2.DESCRIPTION_MAX_LENGTH = 1000;
__s0local2.MAX_CHAT_MSG_LENGTH = 1300;
__s0local2.MAX_REPLIES_TO_TOPIC = 20;
__s0local2.MIN_FORUM_TEXT_LENGTH = 2;
__s0local2.MAX_REPLY_TEXT = 2000;
__s0local2.MAX_TOPIC_TEXT = 38;
__s0local2.MAX_TOPIC_COUNT = 20;
__s0local2.MIN_LEVEL = 3;
__s0local2.MIN_LEVEL_FOR_DONATE_C2 = 25;
__s0local2.X_FREE_RENAMES = 1;
__s0local2.DIPLOMACY_IN_WAR = 0;
__s0local2.DIPLOMACY_NEUTRAL = 1;
__s0local2.DIPLOMACY_SOFT_ALLIED = 2;
__s0local2.DIPLOMACY_REAL_ALLIED = 3;
__s0local2.DIPLOMACY_REQUEST = 0;
__s0local2.DIPLOMACY_CONFIRMED = 1;
__s0local2.DIPLOMACY_TRIBUT_MAX = 50;
__s0local2.DIPLOMACY_TRIBUT_MIN = 0;
__s0local2.DIPLOMACY_TRIBUT_TRANSPORT_COST = 0.5;
__s0local2.MEMBER_JOIN = 0;
__s0local2.MEMBER_LEFT = 1;
__s0local2.MEMBER_KICKED = 2;
__s0local2.MEMBER_NEW_LEADER = 3;
__s0local2.MEMBER_DEMOTE = 4;
__s0local2.MEMBER_PROMOTE = 5;
__s0local2.MEMBER_DONATE_C1 = 6;
__s0local2.MEMBER_DONATE_C2 = 7;
__s0local2.MEMBER_DONATE_RES = 8;
__s0local2.CHANGE_NAME = 9;
__s0local2.CHANGE_ANNOUNCEMENT = 10;
__s0local2.CHANGE_DESCRIPTION = 11;
__s0local2.UPGRADE = 12;
__s0local2.CHANGE_DIPLOMACY = 13;
__s0local2.GET_REQUEST_DIPLOMACY = 14;
__s0local2.SEND_REQUEST_DIPLOMACY = 15;
__s0local2.REFUSE_DIPLOMACY = 16;
__s0local2.LEVEL_UP = 17;
__s0local2.LEVEL_DOWN = 18;
__s0local2.DONATE_C1_BY_LEVELUP = 19;
__s0local2.DONATE_C2_BY_LEVELUP = 20;
__s0local2.DONATE_RES_BY_LEVELUP = 21;
__s0local2.MEMBER_EARN_FAME = 22;
__s0local2.CONQUERED_CAPITAL = 23;
__s0local2.LOST_CAPITAL = 24;
__s0local2.LOOSING_CAPITAL = 25;
__s0local2.TOURNAMENTREWARD = 26;
__s0local2.TOURNAMENTRANK = 27;
__s0local2.CONQUERED_METROPOL = 28;
__s0local2.LOST_METROPOL = 29;
__s0local2.LOOSING_METROPOL = 30;
__s0local2.MEMBER_INACTIVE_KICK = 31;
__s0local2.ALLIANCE_RANK_OF_LAST_ROUND = 32;
__s0local2.NEW_KINGS_NAME = 33;
__s0local2.PRIZE_C1_OF_LAST_ROUND = 35;
__s0local2.PRIZE_C2_OF_LAST_ROUND = 36;
__s0local2.STORM_ISLAND_ENDED = 37;
__s0local2.TRIBUT_PAY_C1 = 38;
__s0local2.TRIBUT_PAY_C2 = 39;
__s0local2.TRIBUT_PAY_RES = 40;
__s0local2.TRIBUT_GET_C1 = 41;
__s0local2.TRIBUT_GET_C2 = 42;
__s0local2.TRIBUT_GET_RES = 43;
__s0local2.ACTIVATE_TEMP_BUFF = 44;
__s0local2.EXTEND_TEMP_BUFF = 45;
__s0local2.ABANDONED_CAPITAL = 46;
__s0local2.ABANDONED_METROPOL = 47;
__s0local2.ALLIANCE_FOUNDED = 48;
__s0local2.FOUNDED_NOBLE_HOUSE = 49;
__s0local2.SET_EMBLEM = 50;
__s0local2.KING_CONFERED_ISLAND_TITLE = 56;
__s0local2.CAPITAL_OWNER_JOINED = 57;
__s0local2.METROPOLIS_OWNER_JOINED = 58;
__s0local2.REWARD_C1 = 59;
__s0local2.REWARD_C2 = 60;
__s0local2.ALLIANCE_BATTLE_GROUND_OWNED_TOWER_DEFEATED = 61;
__s0local2.ALLIANCE_BATTLE_GROUND_MALUS_INCREASED = 62;
__s0local2.ALLIANCE_BATTLE_GROUND_POINTS_GAINED = 63;
__s0local2.ALLIANCE_BATTLE_GROUND_MALUS_RESET = 64;
__s0local2.DAIMYO_ALLIANCE_CASTLE_CONTRACT_COMPLETED = 65;
__s0local2.DAIMYO_ALLIANCE_TOWNSHIP_CONTRACT_COMPLETED = 66;
__s0local2.RANK_LEADER = 0;
__s0local2.RANK_COLEADER = 1;
__s0local2.RANK_MARSHAL = 2;
__s0local2.RANK_TREASURER = 3;
__s0local2.RANK_DIPLOMAT = 4;
__s0local2.RANK_RECRUITER = 5;
__s0local2.RANK_GENERAL = 6;
__s0local2.RANK_SERGEANT = 7;
__s0local2.RANK_MEMBER = 8;
__s0local2.RANK_APPLICANT = 9;
__s0local2.RANKING_GROUP_LEADER = 0;
__s0local2.RANKING_GROUP_GENERAL = 1;
__s0local2.RANKING_GROUP_SERGEANT = 2;
__s0local2.RANKING_GROUP_MEMBER = 3;
__s0local2.RANKING_GROUP_APPLICANT = 4;
__s0local2.RIGHT_HANDLE_DEPUTY = 0;
__s0local2.RIGHT_RENAME = 1;
__s0local2.RIGHT_DELETE = 2;
__s0local2.RIGHT_NEW_LEADER = 3;
__s0local2.RIGHT_HANDLE_GENERAL = 4;
__s0local2.RIGHT_HANDLE_SEAGANT = 5;
__s0local2.RIGHT_DESCRIPTION = 6;
__s0local2.RIGHT_DIPLOMACY = 7;
__s0local2.RIGHT_UPGRADE = 8;
__s0local2.RIGHT_INVITE = 9;
__s0local2.RIGHT_KICK_MEMBER = 10;
__s0local2.RIGHT_ANNOUNCEMENT = 11;
__s0local2.RIGHT_NEWSLETTER = 12;
__s0local2.RIGHT_AUTO_WAR = 13;
__s0local2.RIGHT_ACCEPT_APPLICATIONS = 14;
__s0local2.RIGHT_MANAGE_BOOKMARKS = 15;
__s0local2.RIGHT_EMBLEM = 16;
__s0local2.RIGHT_CHANGE_LANGUAGE = 18;
__s0local2.MAX_BANNED_PLAYERS = 20;
__s0local2.BOOKMARK_TYPE_PLAYER_ENEMY = 0;
__s0local2.BOOKMARK_TYPE_PLAYER_FRIEND = 1;
__s0local2.BOOKMARK_TYPE_ALLIANCE_FREE_ATTACK = 2;
__s0local2.BOOKMARK_TYPE_ALLIANCE_DEFEND = 3;
__s0local2.BOOKMARK_TYPE_ALLIANCE_ATTACK_ORDER = 4;
__s0local2.ALLIANCE_BOOKMARK_MAX_ENTRIES = 20;
__s0local2.ALLIANCE_RANKING_GROUPS_COUNT = 5;
__s0local2.HIGHEST_RANK_WITHOUT_ADMIN_RIGHTS = 7;
__s0local2.MAX_LEVEL_FOR_THIS_ALLIANCE = 5;
__s0local2.MAX_DIFFERENCE_TO_THAT_ALLIANCE = 5;
__s0local2.ONLINESTATE_ONLINE = 0;
__s0local2.ONLINESTATE_LAST_12_HOURS = 1;
__s0local2.ONLINESTATE_LAST_48_HOURS = 2;
__s0local2.ONLINESTATE_LAST_1_WEEK = 3;
__s0local2.ONLINESTATE_LONG_AGO = 4;
__s0local2.TYPE_MEMBERS = 0;
__s0local2.TYPE_DEFENSE_SPEED_BOOST = 1;
__s0local2.TYPE_MARKET_SPEED_BOOST = 2;
__s0local2.TYPE_DEPOSIT_BONUS = 3;
__s0local2.TYPE_MARAUDER_BONUS = 4;
__s0local2.TYPE_ATTACK_SPEED_BOOST = 5;
__s0local2.TYPE_FORGE_UPGRADE = 6;
__s0local2.TYPE_TEMP_ATTACK_POWER_BOOST = 7;
__s0local2.TYPE_TEMP_DEFENSE_POWER_BOOST = 8;
__s0local2.TYPE_TEMP_GLORY_BOOST = 9;
__s0local2.TYPE_TEMP_DEFENSE_SPEED_BOOST = 10;
__s0local2.TYPE_NOBLE_HOUSE = 11;
__s0local2.TYPE_RAGE_POINT_BOOST = 12;
__s0local2.TYPE_COOLDOWN_REDUCTION_KHAN = 13;
__s0local2.TYPE_COOLDOWN_REDUCTION_NOMADS = 14;
__s0local2.TYPE_INFLUENCE_POINT_BOOST = 15;
__s0local2.TYPE_ALIEN_ATTACK_BOOST = 16;
__s0local2.TYPE_DAIMYO_ATTACK_BOOST = 17;
__s0local2.TYPE_KHAN_DEFENSE_BOOST = 18;
__s0local2.TYPE_HEALING_SPEED_BOOST = 19;
__s0local2.TYPE_COOLDOWN_REDUCTION_SAMURAI_CAMP = 20;
__s0local2.TYPE_COOLDOWN_REDUCTION_DAIYMO = 21;
__s0local2.TYPE_TEMP_RAID_BOSS_COMMON_ATTACK_BOOST = 22;
__s0local2.TYPE_TEMP_RAID_BOSS_RARE_ATTACK_BOOST = 23;
__s0local2.TYPE_TEMP_RAID_BOSS_EPIC_ATTACK_BOOST = 24;
__s0local2.TYPE_TEMP_RAID_BOSS_LEGENDARY_ATTACK_BOOST = 25;
__s0local2.FAME_CAP = 9000000000000000000;
__s0local2.DAILY_FAME_LOSS = 0.005;
__s0local2.REAL_ALLIED_CAP = 5;
__s0local2.SOFT_ALLIED_CAP = 5;
__s0local2.NO_ALLIANCE_ID = -1;
__s0local2.MEMBER_IS_SEARCHING_ID = -2;
__s0local2.MAX_APPLICATION_COUNT = 20;
__s0local2.LOG_SIZE_CHAT = 50;
__s0local2.LOG_SIZE_NOTIFICATIONS = 200;
exports.AllianceConst = __s0local2;
__s0local2.__class = "AllianceConst";
var __s0local3 = function () {
  function AllianceForgeConst() {}
  AllianceForgeConst.canUseRelicAllianceForge = function (__s111param0) {
    return __s111param0 >= AllianceForgeConst.MINIMUM_LEGEND_LEVEL_FOR_RELIC_ALLIANCE_FORGE;
  };
  AllianceForgeConst.calculateC1CostForSoftCurrencyRelicAllianceForge = function (__s113param0) {
    return Math.pow(1.5, __s113param0) * 60000 | 0;
  };
  AllianceForgeConst.calculateC2CostForHardCurrencyRelicAllianceForge = function (__s115param0) {
    return Math.pow(1.25, __s115param0) * 10000 | 0;
  };
  return AllianceForgeConst;
}();
__s0local3.TOMBOLA_ID_SOFT_CURRENCY_FORGE = -1;
__s0local3.TOMBOLA_ID_HARD_CURRENCY_FORGE = -2;
__s0local3.MINIMUM_LEGEND_LEVEL_FOR_RELIC_ALLIANCE_FORGE = 1;
exports.AllianceForgeConst = __s0local3;
__s0local3.__class = "AllianceForgeConst";
var __s0local4 = function () {
  return function AllianceInvasionConst() {};
}();
__s0local4.PLAYER_PARTICIPATION_RAGE_THRESHOLD = 1;
__s0local4.DEFAULT_ALLIANCE_CAMP_LEAGUE_ID = 1;
__s0local4.ALLIANCE_INVASION_LORD_LOOK_ID = 1002;
__s0local4.REQUIRED_DEFEATS_FOR_DEFENSE_SETUP_CHANGE = 65;
exports.AllianceInvasionConst = __s0local4;
__s0local4.__class = "AllianceInvasionConst";
var __s0local5 = function () {
  return function AllianceMobilisationConst() {};
}();
__s0local5.QUEST_COOLDOWN_SKIP_C2_COST = 999;
exports.AllianceMobilisationConst = __s0local5;
__s0local5.__class = "AllianceMobilisationConst";
var __s0local6 = function () {
  return function AllianceRaidConst() {};
}();
__s0local6.BOSS_CARD_STATUS_AVAILABLE = 0;
__s0local6.BOSS_CARD_STATUS_UNAVAILABLE = 1;
__s0local6.BOSS_CARD_STATUS_ONGOING = 2;
__s0local6.BOSS_CARD_STATUS_LOCKED_FINAL_DEFEATED = 3;
__s0local6.BOSS_CARD_STATUS_LOCKED_ABORTED = 4;
exports.AllianceRaidConst = __s0local6;
__s0local6.__class = "AllianceRaidConst";
var __s0local7 = function () {
  return function ArtifactConst() {};
}();
__s0local7.SKIN_TRAVELLING_KNIGHTS = 1;
__s0local7.SKIN_RENEGADE_ICE_KINGDOM = 2;
__s0local7.SKIN_RENEGADE_DESERT_KINGDOM = 3;
__s0local7.SKIN_RENEGADE_VOLCANO_KINGDOM = 4;
__s0local7.SKIN_NEW_KING = 5;
exports.ArtifactConst = __s0local7;
__s0local7.__class = "ArtifactConst";
var __s0local8 = function () {
  return function AttackAdvisorConst() {};
}();
__s0local8.ADVISOR_TYPE_NOMAD = 1;
__s0local8.ADVISOR_TYPE_SAMURAI = 2;
__s0local8.ADVISOR_TYPE_BERIMOND = 3;
__s0local8.ADVISOR_TYPE_BARON = 4;
__s0local8.FAILURE_GENERIC = 0;
__s0local8.FAILURE_NOT_ENOUGH_CURRENCY_1 = 1;
__s0local8.FAILURE_NOT_ENOUGH_CURRENCY_2 = 2;
__s0local8.FAILURE_NOT_ENOUGH_PEGASUS_TICKETS = 3;
__s0local8.FAILURE_NOT_ENOUGH_UNITS_OR_TOOLS = 4;
__s0local8.FAILURE_NOT_ENOUGH_TIME_SKIPS = 5;
exports.AttackAdvisorConst = __s0local8;
__s0local8.__class = "AttackAdvisorConst";
var __s0local9 = function () {
  return function AutoSkipCooldownConst() {};
}();
__s0local9.AUTO_SKIP_TYPE_OFF = 0;
__s0local9.AUTO_SKIP_TYPE_MINUTE_SKIP = 1;
__s0local9.AUTO_SKIP_TYPE_C2 = 2;
exports.AutoSkipCooldownConst = __s0local9;
__s0local9.__class = "AutoSkipCooldownConst";
var __s0local10 = function () {
  function BeggingKnightsConst() {}
  BeggingKnightsConst.calculateRequirement = function (__s145param0, __s145param1) {
    return Math.max(1, Math.round(__s145param0 * __s145param1));
  };
  BeggingKnightsConst.calculateRewardAmount = function (__s147param0, __s147param1) {
    var __s147local0 = __s147param1 / 100 * __s147param0;
    return Math.max(1, Math.round(__s147local0));
  };
  return BeggingKnightsConst;
}();
exports.BeggingKnightsConst = __s0local10;
__s0local10.__class = "BeggingKnightsConst";
var __s0local11 = function () {
  function BoosterConst() {}
  BoosterConst.REMINDER_LEAD_TIME_SECONDS_$LI$ = function () {
    if (BoosterConst.REMINDER_LEAD_TIME_SECONDS == null) {
      BoosterConst.REMINDER_LEAD_TIME_SECONDS = 86400;
    }
    return BoosterConst.REMINDER_LEAD_TIME_SECONDS;
  };
  BoosterConst.TAX_BRIBE_DURATION_$LI$ = function () {
    if (BoosterConst.TAX_BRIBE_DURATION == null) {
      BoosterConst.TAX_BRIBE_DURATION = 604800;
    }
    return BoosterConst.TAX_BRIBE_DURATION;
  };
  BoosterConst.INSTRUCTOR_DURATION_$LI$ = function () {
    if (BoosterConst.INSTRUCTOR_DURATION == null) {
      BoosterConst.INSTRUCTOR_DURATION = 604800;
    }
    return BoosterConst.INSTRUCTOR_DURATION;
  };
  BoosterConst.MARAUDER_DURATION_$LI$ = function () {
    if (BoosterConst.MARAUDER_DURATION == null) {
      BoosterConst.MARAUDER_DURATION = 604800;
    }
    return BoosterConst.MARAUDER_DURATION;
  };
  BoosterConst.OVERSEER_DURATION_$LI$ = function () {
    if (BoosterConst.OVERSEER_DURATION == null) {
      BoosterConst.OVERSEER_DURATION = 604800;
    }
    return BoosterConst.OVERSEER_DURATION;
  };
  BoosterConst.PRIME_SALE_BOOSTER_IDS_$LI$ = function () {
    if (BoosterConst.PRIME_SALE_BOOSTER_IDS == null) {
      BoosterConst.PRIME_SALE_BOOSTER_IDS = [BoosterConst.OVERSEER_WOOD, BoosterConst.OVERSEER_STONE, BoosterConst.OVERSEER_FOOD, BoosterConst.OVERSEER_HONEY, BoosterConst.OVERSEER_MEAD, BoosterConst.OVERSEER_BEEF, BoosterConst.MARAUDER, BoosterConst.TAX, BoosterConst.INSTRUCTOR, BoosterConst.CARAVAN_OVERLOADER, BoosterConst.RETURNING_SPEED];
    }
    return BoosterConst.PRIME_SALE_BOOSTER_IDS;
  };
  return BoosterConst;
}();
__s0local11.OVERSEER_WOOD = 0;
__s0local11.OVERSEER_STONE = 1;
__s0local11.OVERSEER_FOOD = 2;
__s0local11.OVERSEER_HONEY = 3;
__s0local11.OVERSEER_MEAD = 4;
__s0local11.OVERSEER_BEEF = 5;
__s0local11.MARAUDER = 6;
__s0local11.TAX = 8;
__s0local11.INSTRUCTOR = 10;
__s0local11.CARAVAN_OVERLOADER = 11;
__s0local11.BUILDING_SKIP_DISCOUNT = 16;
__s0local11.GLORY_BOOST_ID = 17;
__s0local11.PERSONAL_GLORY_BOOST_ID = 18;
__s0local11.RETURNING_SPEED = 19;
__s0local11.KHAN_BOOST_ID = 20;
__s0local11.XP_BOOSTER_ID = 21;
__s0local11.SAMURA_TOKEN_BOOST_ID = 22;
__s0local11.LONGTERM_POINT_EVENT_BOOST_ID = 23;
__s0local11.GALLANTRY_POINTS_BOOST_ID = 24;
__s0local11.XP_BUILDING_BOOSTER_ID = 25;
__s0local11.ALLIANCE_COIN_BOOST_ID = 26;
__s0local11.RAGE_POINT_BOOST_ID = 27;
__s0local11.KHAN_MEDAL_BOOST_ID = 28;
__s0local11.REPUTATION_POINT_BOOST_ID = 29;
__s0local11.MIN_REBUY_FOR_DISCOUNT = 1;
__s0local11.DISCOUNT_FACTOR = 0.1;
__s0local11.REBUY_TRACKING = " rebuy";
__s0local11.TAX_BRIBE_COSTS_C2 = 750;
__s0local11.TAX_BRIBE_BOOST = 0.2;
__s0local11.INSTRUCTOR_CUSTOM_ID = "instructor";
__s0local11.INSTRUCTOR_BOOST = 0.8;
__s0local11.INSTRUCTOR_COST_C2 = 990;
__s0local11.MARAUDER_COST_C2 = 990;
__s0local11.MARAUDER_BOOST = 0.9;
__s0local11.OVERSEER_COST_C2 = 625;
__s0local11.OVERSEER_BOOST = 25;
__s0local11.OVERSEER_BEEF_COST_C2 = 4900;
__s0local11.OVERSEER_BEEF_BOOST = 125;
__s0local11.PERMANENT_BOOSTER_DURATION = 2147483647;
exports.BoosterConst = __s0local11;
__s0local11.__class = "BoosterConst";
var __s0local12 = function () {
  function ColossusConst() {}
  ColossusConst.calcResourcePointsForResources = function (__s175param0, __s175param1) {
    return Math.round(__s175param0) * ColossusConst.WOOD_POINTS + Math.round(__s175param1) * ColossusConst.STONE_POINTS;
  };
  ColossusConst.getResourcePointsForCoins = function (__s177param0) {
    return ColossusConst.COIN_POINTS * Math.round(__s177param0);
  };
  ColossusConst.getDecoPoints = function (__s179param0) {
    if (__s179param0 < ColossusConst.MIN_POINTS) {
      return 0;
    }
    var __s179local0 = Math.log(__s179param0 * 2.2 + 319) * 233 - 1320;
    if (__s179local0 < 3000) {
      return Math.round(__s179local0) | 0;
    } else {
      return Math.round(__s179local0 / 10 + 2700) | 0;
    }
  };
  return ColossusConst;
}();
__s0local12.COIN_POINTS = 1;
__s0local12.WOOD_POINTS = 2;
__s0local12.STONE_POINTS = 3;
__s0local12.MIN_POINTS = 50;
exports.ColossusConst = __s0local12;
__s0local12.__class = "ColossusConst";
var __s0local13 = function () {
  function CombatConst() {}
  CombatConst.ITEMS_LEFTWALL_TOOLS_$LI$ = function () {
    if (CombatConst.ITEMS_LEFTWALL_TOOLS == null) {
      CombatConst.ITEMS_LEFTWALL_TOOLS = [2, 2];
    }
    return CombatConst.ITEMS_LEFTWALL_TOOLS;
  };
  CombatConst.LEVELS_LEFTWALL_TOOLS_$LI$ = function () {
    if (CombatConst.LEVELS_LEFTWALL_TOOLS == null) {
      CombatConst.LEVELS_LEFTWALL_TOOLS = [0, 37];
    }
    return CombatConst.LEVELS_LEFTWALL_TOOLS;
  };
  CombatConst.ITEMS_LEFTWALL_UNITS_$LI$ = function () {
    if (CombatConst.ITEMS_LEFTWALL_UNITS == null) {
      CombatConst.ITEMS_LEFTWALL_UNITS = [0, 0];
    }
    return CombatConst.ITEMS_LEFTWALL_UNITS;
  };
  CombatConst.LEVELS_LEFTWALL_UNITS_$LI$ = function () {
    if (CombatConst.LEVELS_LEFTWALL_UNITS == null) {
      CombatConst.LEVELS_LEFTWALL_UNITS = [0, 13];
    }
    return CombatConst.LEVELS_LEFTWALL_UNITS;
  };
  CombatConst.ITEMS_MIDDLEWALL_TOOLS_$LI$ = function () {
    if (CombatConst.ITEMS_MIDDLEWALL_TOOLS == null) {
      CombatConst.ITEMS_MIDDLEWALL_TOOLS = [1, 1, 1];
    }
    return CombatConst.ITEMS_MIDDLEWALL_TOOLS;
  };
  CombatConst.LEVELS_MIDDLEWALL_TOOLS_$LI$ = function () {
    if (CombatConst.LEVELS_MIDDLEWALL_TOOLS == null) {
      CombatConst.LEVELS_MIDDLEWALL_TOOLS = [0, 11, 37];
    }
    return CombatConst.LEVELS_MIDDLEWALL_TOOLS;
  };
  CombatConst.ITEMS_MIDDLEWALL_UNITS_$LI$ = function () {
    if (CombatConst.ITEMS_MIDDLEWALL_UNITS == null) {
      CombatConst.ITEMS_MIDDLEWALL_UNITS = [0, 0, 0, 0, 0, 0];
    }
    return CombatConst.ITEMS_MIDDLEWALL_UNITS;
  };
  CombatConst.LEVELS_MIDDLEWALL_UNITS_$LI$ = function () {
    if (CombatConst.LEVELS_MIDDLEWALL_UNITS == null) {
      CombatConst.LEVELS_MIDDLEWALL_UNITS = [0, 0, 13, 13, 26, 26];
    }
    return CombatConst.LEVELS_MIDDLEWALL_UNITS;
  };
  CombatConst.ITEMS_MIDDLEWALL_UNITS_CROSS_PLAY_$LI$ = function () {
    if (CombatConst.ITEMS_MIDDLEWALL_UNITS_CROSS_PLAY == null) {
      CombatConst.ITEMS_MIDDLEWALL_UNITS_CROSS_PLAY = [0, 0, 0, 0, 0, 0];
    }
    return CombatConst.ITEMS_MIDDLEWALL_UNITS_CROSS_PLAY;
  };
  CombatConst.LEVELS_MIDDLEWALL_UNITS_CROSS_PLAY_$LI$ = function () {
    if (CombatConst.LEVELS_MIDDLEWALL_UNITS_CROSS_PLAY == null) {
      CombatConst.LEVELS_MIDDLEWALL_UNITS_CROSS_PLAY = [0, 0, 13, 13, 26, 26];
    }
    return CombatConst.LEVELS_MIDDLEWALL_UNITS_CROSS_PLAY;
  };
  CombatConst.ITEMS_RIGHTWALL_TOOLS_$LI$ = function () {
    if (CombatConst.ITEMS_RIGHTWALL_TOOLS == null) {
      CombatConst.ITEMS_RIGHTWALL_TOOLS = [2, 2];
    }
    return CombatConst.ITEMS_RIGHTWALL_TOOLS;
  };
  CombatConst.LEVELS_RIGHTWALL_TOOLS_$LI$ = function () {
    if (CombatConst.LEVELS_RIGHTWALL_TOOLS == null) {
      CombatConst.LEVELS_RIGHTWALL_TOOLS = [0, 37];
    }
    return CombatConst.LEVELS_RIGHTWALL_TOOLS;
  };
  CombatConst.ITEMS_RIGHTWALL_UNITS_$LI$ = function () {
    if (CombatConst.ITEMS_RIGHTWALL_UNITS == null) {
      CombatConst.ITEMS_RIGHTWALL_UNITS = [0, 0];
    }
    return CombatConst.ITEMS_RIGHTWALL_UNITS;
  };
  CombatConst.LEVELS_RIGHTWALL_UNITS_$LI$ = function () {
    if (CombatConst.LEVELS_RIGHTWALL_UNITS == null) {
      CombatConst.LEVELS_RIGHTWALL_UNITS = [0, 13];
    }
    return CombatConst.LEVELS_RIGHTWALL_UNITS;
  };
  CombatConst.ITEMS_ASUPPORT_TOOLS_$LI$ = function () {
    if (CombatConst.ITEMS_ASUPPORT_TOOLS == null) {
      CombatConst.ITEMS_ASUPPORT_TOOLS = [10, 10, 10];
    }
    return CombatConst.ITEMS_ASUPPORT_TOOLS;
  };
  CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP_$LI$ = function () {
    if (CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP == null) {
      CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP = [4, 4, 4];
    }
    return CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP;
  };
  CombatConst.ITEMS_FINALWAVE_UNITS_$LI$ = function () {
    if (CombatConst.ITEMS_FINALWAVE_UNITS == null) {
      CombatConst.ITEMS_FINALWAVE_UNITS = [0, 0, 0, 0, 0, 0, 0, 0];
    }
    return CombatConst.ITEMS_FINALWAVE_UNITS;
  };
  CombatConst.WAVE_UNLOCK_LEVEL_$LI$ = function () {
    if (CombatConst.WAVE_UNLOCK_LEVEL == null) {
      CombatConst.WAVE_UNLOCK_LEVEL = [0, 13, 26, 51];
    }
    return CombatConst.WAVE_UNLOCK_LEVEL;
  };
  CombatConst.FLANKBONUS_$LI$ = function () {
    if (CombatConst.FLANKBONUS == null) {
      CombatConst.FLANKBONUS = [0, 0.7, 1, 1.3];
    }
    return CombatConst.FLANKBONUS;
  };
  CombatConst.FLANKBONUS_RAID_$LI$ = function () {
    if (CombatConst.FLANKBONUS_RAID == null) {
      CombatConst.FLANKBONUS_RAID = [0, 0.4, 1, 1.6];
    }
    return CombatConst.FLANKBONUS_RAID;
  };
  CombatConst.WALL_WOD_IDS_VILLAGES_$LI$ = function () {
    if (CombatConst.WALL_WOD_IDS_VILLAGES == null) {
      CombatConst.WALL_WOD_IDS_VILLAGES = [503, 504, 505];
    }
    return CombatConst.WALL_WOD_IDS_VILLAGES;
  };
  CombatConst.GATE_WOD_IDS_VILLAGES_$LI$ = function () {
    if (CombatConst.GATE_WOD_IDS_VILLAGES == null) {
      CombatConst.GATE_WOD_IDS_VILLAGES = [452, 453, 469];
    }
    return CombatConst.GATE_WOD_IDS_VILLAGES;
  };
  CombatConst.NPC_ATTACK_DEFAULT_SOLDIER_IDS_$LI$ = function () {
    if (CombatConst.NPC_ATTACK_DEFAULT_SOLDIER_IDS == null) {
      CombatConst.NPC_ATTACK_DEFAULT_SOLDIER_IDS = [603, 607];
    }
    return CombatConst.NPC_ATTACK_DEFAULT_SOLDIER_IDS;
  };
  CombatConst.getFlankBonus = function (__s257param0, __s257param1, __s257param2) {
    return CombatConst.getFlankBonusHelper(__s257param0, __s257param1, __s257param2, CombatConst.FLANKBONUS_$LI$());
  };
  CombatConst.getRaidFlankBonus = function (__s259param0, __s259param1, __s259param2) {
    return CombatConst.getFlankBonusHelper(__s259param0, __s259param1, __s259param2, CombatConst.FLANKBONUS_RAID_$LI$());
  };
  CombatConst.getFlankBonusHelper = function (__s261param0, __s261param1, __s261param2, __s261param3) {
    var __s261local0 = 0;
    if (__s261param0) {
      __s261local0++;
    }
    if (__s261param1) {
      __s261local0++;
    }
    if (__s261param2) {
      __s261local0++;
    }
    return __s261param3[__s261local0];
  };
  CombatConst.getAmountSoldiers = function (__s266param0, __s266param1, __s266param2, __s266param3) {
    if (__s266param0 === 1) {
      return CombatConst.getAmountSoldiersMiddle(__s266param1, __s266param3);
    } else {
      return CombatConst.getAmountSoldiersFlank(__s266param1, __s266param2);
    }
  };
  CombatConst.getAmountSoldiersFlank = function (__s270param0, __s270param1) {
    return Math.ceil(CombatConst.getMaxAttackers(__s270param0) * 0.2 * (1 + __s270param1 / 100)) | 0;
  };
  CombatConst.getAmountSoldiersFlankWithoutBonus = function (__s272param0) {
    return Math.ceil(CombatConst.getMaxAttackers(__s272param0) * 0.2) | 0;
  };
  CombatConst.getAmountSoldiersMiddle = function (__s274param0, __s274param1) {
    return Math.ceil((CombatConst.getMaxAttackers(__s274param0) - CombatConst.getAmountSoldiersFlankWithoutBonus(__s274param0) * 2) * (1 + __s274param1 / 100)) | 0;
  };
  CombatConst.getMinSoldiers = function (__s276param0) {
    return CombatConst.getMaxAttackers(__s276param0) * 0.1 | 0;
  };
  CombatConst.getMaxDamagedBuildings = function (__s278param0) {
    return Math.round(Math.exp((__s278param0 - 4) * 0.199) * 0.179) | 0;
  };
  CombatConst.getTotalAmountToolsFlank = function (__s280param0, __s280param1) {
    return CombatConst.getTotalAmountTools(0, __s280param0, __s280param1);
  };
  CombatConst.getTotalAmountToolsMiddle = function (__s282param0) {
    return CombatConst.getTotalAmountTools(1, __s282param0, 0);
  };
  CombatConst.getTotalAmountTools = function (__s284param0, __s284param1, __s284param2) {
    if (__s284param0 === 1) {
      if (__s284param1 < 11) {
        return 10;
      } else if (__s284param1 < 37) {
        return 20;
      } else if (__s284param1 < 50) {
        return 30;
      } else if (__s284param1 < 69) {
        return 40;
      } else {
        return 50;
      }
    } else if (__s284param1 < 37) {
      return 10;
    } else if (__s284param1 < 50) {
      return 20;
    } else if (__s284param1 < 69) {
      return 30;
    } else {
      return Math.ceil(40 + __s284param2) | 0;
    }
  };
  CombatConst.getMaxAttackers = function (__s296param0) {
    var __s296local0 = 320;
    if (__s296param0 <= 69) {
      __s296local0 = Math.min(260, __s296param0 * 5 + 8);
    }
    return __s296local0;
  };
  CombatConst.getMaxUnitsInReinforcementWave = function (__s299param0, __s299param1, __s299param2, __s299param3) {
    var __s299local0 = Math.sqrt(__s299param0) * 20 + 50 + __s299param1 * 20 + __s299param2;
    return Math.round(__s299local0 * __s299param3) | 0;
  };
  CombatConst.getMaxLevelDif1 = function (__s301param0) {
    return Math.max(5, Math.round(__s301param0 * 0.002 * __s301param0 + __s301param0 * 0.17 + 3));
  };
  CombatConst.getMaxLevelDif2 = function (__s303param0) {
    return Math.max(5, Math.round(__s303param0 * 0.0015 * __s303param0 + __s303param0 * 0.12 + 3));
  };
  CombatConst.getHonorChange = function (__s305param0, __s305param1, __s305param2, __s305param3, __s305param4) {
    if (__s305param2 > __s305param3 + CombatConst.getMaxLevelDif2(__s305param2)) {
      if (__s305param2 > __s305param3 + CombatConst.getMaxLevelDif1(__s305param2)) {
        return (__s305param3 - __s305param2) * 3;
      } else {
        return 0;
      }
    } else {
      if (__s305param4) {
        __s305local0 = __s305param0;
        __s305local1 = __s305param1;
      } else {
        __s305local0 = __s305param1;
        __s305local1 = __s305param0;
      }
      return Math.round(Math.max((__s305local1 - __s305local0) / 7 + 100, 0));
    }
    var __s305local0;
    var __s305local1;
  };
  CombatConst.getHonorChangeWithBoost = function (__s313param0, __s313param1, __s313param2, __s313param3, __s313param4, __s313param5, __s313param6, __s313param7) {
    return Math.round(CombatConst.getHonorChange(__s313param0, __s313param1, __s313param2, __s313param3, __s313param7) * (1 + (__s313param6 + __s313param5 + __s313param4) / 100));
  };
  CombatConst.getMoralBonus = function (__s315param0) {
    if (__s315param0 >= 0) {
      return 2 - 1 / (1 + Math.abs(__s315param0) / 250);
    } else {
      return 1 / (1 + Math.abs(__s315param0) / 250);
    }
  };
  CombatConst.getFameBonusForHonor = function (__s319param0) {
    if (__s319param0 === 0) {
      return 0;
    } else {
      return Math.min(1, (Math.exp(__s319param0 * 0.00115) * 2 + (__s319param0 * 0.012 + 1)) / 100);
    }
  };
  CombatConst.getMaxWaveCount = function (__s323param0, __s323param1) {
    var __s323local0 = 1;
    for (var __s323local1 = CombatConst.WAVE_UNLOCK_LEVEL_$LI$().length - 1; __s323local1 >= 0; __s323local1--) {
      if (__s323param0 >= CombatConst.WAVE_UNLOCK_LEVEL_$LI$()[__s323local1]) {
        __s323local0 = __s323local1 + 1;
        break;
      }
    }
    if (__s323param1) {
      __s323local0 += CombatConst.CONQUERATTACK_ADDITIONAL_WAVES;
    }
    return __s323local0;
  };
  CombatConst.getMaxWaveCountWithBonus = function (__s329param0, __s329param1, __s329param2) {
    return CombatConst.getMaxWaveCount(__s329param0, __s329param1) + __s329param2;
  };
  CombatConst.isConquerAttack = function (__s331param0) {
    switch (__s331param0) {
      case CombatConst.ATTACK_TYPE_CAPITAL_CONQUER:
      case CombatConst.ATTACK_TYPE_OUTPOST_CONQUER:
      case CombatConst.ATTACK_TYPE_VILLAGE_CONQUER:
      case CombatConst.ATTACK_TYPE_KINGTOWER_CONQUER:
      case CombatConst.ATTACK_TYPE_MONUMENT_CONQUER:
      case CombatConst.ATTACK_TYPE_LABORATORY_CONQUER:
      case CombatConst.ATTACK_TYPE_METROPOL_CONQUER:
      case CombatConst.ATTACK_TYPE_CONQUER:
        return true;
      default:
        return false;
    }
  };
  CombatConst.getSurvivingDefenderRate = function (__s334param0) {
    return Math.max(CombatConst.MIN_SURVIVING_SOLDIERS, (__s334param0 * -0.25 * __s334param0 + 104) / 100);
  };
  CombatConst.getXpForAttackingDungeon = function (__s336param0) {
    return Math.round(Math.max(1, Math.pow(__s336param0 * 0.5, 1.1))) | 0;
  };
  CombatConst.getXpForPlayerBattle = function (__s338param0, __s338param1) {
    return Math.round(Math.max(1, __s338param0 * 0.05 + __s338param1 * 0.005));
  };
  CombatConst.isTargetLowLevelProtected = function (__s340param0, __s340param1) {
    var __s340local0 = false;
    if (__s340param1 <= CombatConst.LOW_LEVEL_PROTECTION_MAX_LEVEL) {
      __s340local0 = __s340param0 > __s340param1 + CombatConst.LOW_LEVEL_PROTECTION_RANGE;
    }
    return __s340local0;
  };
  CombatConst.isLowLevelProtectionActive = function (__s343param0, __s343param1, __s343param2) {
    return CombatConst.isTargetLowLevelProtected(__s343param0, __s343param1) && __s343param2 > -1;
  };
  CombatConst.getMinTargetLevelForFindEnemyCastle = function (__s345param0) {
    return Math.max(CombatConst.MIN_TARGET_LEVEL_FOR_FIND_ENEMY_CASTLE, __s345param0 - Math.max(CombatConst.MIN_TARGET_LEVEL_FOR_FIND_ENEMY_CASTLE, Math.round(__s345param0 * 0.002 * __s345param0 + __s345param0 * 0.17 + 3)) + 1) | 0;
  };
  CombatConst.getMaxTargetLevelForFindEnemyCastle = function (__s347param0) {
    return Math.round(__s347param0 * 1.3) | 0;
  };
  CombatConst.getMaxUnitCountWallByLevelForVillages = function (__s349param0) {
    if (__s349param0 >= 70) {
      return 320;
    } else if (__s349param0 >= 51) {
      return 260;
    } else {
      return 200;
    }
  };
  CombatConst.getWallOrGateWodIdForVillages = function (__s354param0, __s354param1) {
    if (__s354param0 >= 69) {
      if (__s354param1) {
        return CombatConst.WALL_WOD_IDS_VILLAGES_$LI$()[2];
      } else {
        return CombatConst.GATE_WOD_IDS_VILLAGES_$LI$()[2];
      }
    } else if (__s354param0 >= 50) {
      if (__s354param1) {
        return CombatConst.WALL_WOD_IDS_VILLAGES_$LI$()[1];
      } else {
        return CombatConst.GATE_WOD_IDS_VILLAGES_$LI$()[1];
      }
    } else if (__s354param1) {
      return CombatConst.WALL_WOD_IDS_VILLAGES_$LI$()[0];
    } else {
      return CombatConst.GATE_WOD_IDS_VILLAGES_$LI$()[0];
    }
  };
  CombatConst.getDefenseBonus = function (__s364param0, __s364param1, __s364param2, __s364param3, __s364param4, __s364param5, __s364param6) {
    return 1 + Math.max(0, __s364param0 + __s364param1 + __s364param2 + __s364param3 - __s364param5 - __s364param4 - __s364param6) * 1 / 100;
  };
  CombatConst.getTotalDefenseBonus = function (__s366param0, __s366param1, __s366param2) {
    return __s366param0 * __s366param1 * __s366param2;
  };
  CombatConst.getAttackBonus = function (__s368param0, __s368param1, __s368param2, __s368param3, __s368param4) {
    return __s368param0 + __s368param1 + __s368param2 + __s368param3 + __s368param4;
  };
  CombatConst.getAttackTypeSpecificBonus = function (__s370param0, __s370param1, __s370param2, __s370param3, __s370param4, __s370param5, __s370param6, __s370param7, __s370param8, __s370param9) {
    return __s370param0 * (__s370param1 + __s370param2 + __s370param3 + Math.max(-1, (__s370param4 + __s370param5 + __s370param6 + __s370param7 + __s370param8) / 100) + __s370param9);
  };
  CombatConst.getDefenseTotalTypeSpecificBonus = function (__s372param0, __s372param1, __s372param2, __s372param3, __s372param4, __s372param5, __s372param6, __s372param7, __s372param8, __s372param9) {
    return __s372param0 * (__s372param1 + __s372param2 + __s372param3) * (1 + Math.max(-1, (__s372param4 + __s372param5 + __s372param6 + __s372param7 + __s372param8) / 100 + __s372param9));
  };
  CombatConst.getDefenseValues = function (__s374param0, __s374param1, __s374param2, __s374param3) {
    var __s374local0 = __s374param0 + __s374param1;
    var __s374local1 = __s374local0 !== 0 ? __s374param0 / __s374local0 : 0.5;
    var __s374local2 = 1 - __s374local1;
    if (__s374param0 < __s374param2 * __s374local1 && __s374param1 > __s374param3 * __s374local2) {
      __s374param3 = Math.round((1 - __s374param0 / __s374param2) * __s374param3);
      __s374param2 = __s374param0;
    } else if (__s374param0 > __s374param2 * __s374local1 && __s374param1 < __s374param3 * __s374local2) {
      __s374param2 = Math.round((1 - __s374param1 / __s374param3) * __s374param2);
      __s374param3 = __s374param1;
    } else {
      __s374param2 = Math.round(__s374param2 * __s374local1);
      __s374param3 = Math.round(__s374param3 * __s374local2);
    }
    var __s374local3 = [0, 0];
    __s374local3[0] = __s374param2 | 0;
    __s374local3[1] = __s374param3 | 0;
    return __s374local3;
  };
  return CombatConst;
}();
__s0local13.ATTACK_SUPPORT_TOOL_SLOTS = 3;
__s0local13.REINFORCEMENT_WAVE_UNIT_SLOTS = 8;
__s0local13.REINFORCEMENT_WAVE_TOOL_SLOTS = 0;
__s0local13.SLOT_TYPE_MIDDLE_TOOL = 1;
__s0local13.SLOT_TYPE_FLANK_TOOL = 2;
__s0local13.LOW_LEVEL_PROTECTION_MAX_LEVEL = 10;
__s0local13.LOW_LEVEL_PROTECTION_RANGE = 5;
__s0local13.DEFENSIVE_DAMAGED_PERCENTAGE = 0.25;
__s0local13.BASIC_PEASANTS_FROM_POPULATION_FACTOR = 20;
__s0local13.TAKEOVER_DAMAGE_NORMAL = 0.5;
__s0local13.TAKEOVER_DAMAGE_BIG = 0.8;
__s0local13.TAKEOVER_DAMAGE_EXTRA_BIG = 1;
__s0local13.PALACE_DAMAGE_LOWER_BOUND = 0.5;
__s0local13.PALACE_DAMAGE_HIGHER_BOUND = 0.8;
__s0local13.EMPORIUM_DAMAGE_LOWER_BOUND = 0.5;
__s0local13.MIN_ATTACK_PLAYER_LEVEL = 5;
__s0local13.MIN_SURVIVING_SOLDIERS = 0.1;
__s0local13.CONQUERATTACK_ADDITIONAL_WAVES = 2;
__s0local13.LOOT_PRIO_MIN_LEVEL = 20;
__s0local13.LOOT_PRIO_NO = 0;
__s0local13.LOOT_PRIO_WOOD = 1;
__s0local13.LOOT_PRIO_STONE = 2;
__s0local13.LOOT_PRIO_FOOD = 3;
__s0local13.LOOT_PRIO_COAL = 4;
__s0local13.LOOT_PRIO_OIL = 5;
__s0local13.LOOT_PRIO_GLASS = 6;
__s0local13.LOOT_PRIO_AQUAMARINE = 7;
__s0local13.LOOT_PRIO_IRON = 8;
__s0local13.LOOT_PRIO_HONEY = 9;
__s0local13.LOOT_PRIO_MEAD = 10;
__s0local13.LOOT_PRIO_BEEF = 11;
__s0local13.LOOT_MAX_CONTIGENT_FACTOR = 1;
__s0local13.ATTACK_TYPE_ATTACK = 0;
__s0local13.ATTACK_TYPE_OUTPOST_CONQUER = 1;
__s0local13.ATTACK_TYPE_VILLAGE_CONQUER = 2;
__s0local13.ATTACK_TYPE_CAPITAL_CONQUER = 3;
__s0local13.ATTACK_TYPE_METROPOL_CONQUER = 5;
__s0local13.ATTACK_TYPE_KINGTOWER_CONQUER = 6;
__s0local13.ATTACK_TYPE_CONQUER = 7;
__s0local13.ATTACK_TYPE_MONUMENT_CONQUER = 8;
__s0local13.ATTACK_TYPE_LABORATORY_CONQUER = 9;
__s0local13.MIN_TARGET_LEVEL_FOR_FIND_ENEMY_CASTLE = 5;
__s0local13.MIN_SECONDS_TO_NEXT_ATTACK = 3;
__s0local13.MIN_FIRE_DAMAGE = 5;
__s0local13.MAX_FIRE_DAMAGE = 10;
__s0local13.DAMAGE_BUILDING_PROBABILITY = 100;
__s0local13.MAX_LEVEL_CAPITAL_NO_HONOR = 51;
exports.CombatConst = __s0local13;
__s0local13.__class = "CombatConst";
var __s0local14 = function () {
  return function CommKeys() {};
}();
__s0local14.MAY_CHANGE_EMBLEM = "MCE";
__s0local14.GEMS = "GEM";
__s0local14.RELIC_GEMS = "RGEM";
__s0local14.DISTANCE = "D";
__s0local14.DURATION = "D";
__s0local14.PRICE = "P";
__s0local14.X_COORDINATE = "X";
__s0local14.Y_COORDINATE = "Y";
__s0local14.ROTATION = "R";
__s0local14.X_POSITION = "XPOS";
__s0local14.Y_POSITION = "YPOS";
__s0local14.LEGEND_LEVEL = "LL";
__s0local14.CURRENT_TOP_X = "TOPX";
__s0local14.IS_RUINED = "R";
__s0local14.SHOULD_USE_VIP_FLAG = "VF";
__s0local14.AMOUNT_OF_TIME = "AOT";
__s0local14.REMAINING_DURATION = "RD";
__s0local14.REMAINING_SECONDS = "RS";
__s0local14.REMAINING_TIME = "RT";
__s0local14.REMAINING_CANCEL_ABANDONMENT_TIME = "CAT";
__s0local14.REMAINING_OPEN_GATE_DURATION = "OGT";
__s0local14.REMAINING_OPEN_GATE_DURATION_2 = "RPT";
__s0local14.REMAINING_TIME_UNTIL_EXECUTION = "RD";
__s0local14.REMAINING_NO_ABANDON_TIME = "TA";
__s0local14.REMAINING_NOOB_PROTECTION = "RNP";
__s0local14.SECONDS_UNTIL_RESET = "STR";
__s0local14.LABORATORY_REMAINING_SECONDS = "LRS";
__s0local14.ISLAND_KINGDOM_REMAINING_SECONDS = "KRS";
__s0local14.MONUMENT_REMAINING_SECONDS = "MRS";
__s0local14.APPROXIMATE_REMAINING_TIME = "ART";
__s0local14.PASSED_SECONDS = "PS";
__s0local14.REMAINING_PEACE_TIME = "RPT";
__s0local14.REMAINING_RELOCATION_TIME = "RRD";
__s0local14.AREA_INFO = "AI";
__s0local14.AREA_INFO_2 = "A";
__s0local14.EMPTY_POSITION = "EP";
__s0local14.VISIBLE_AREA_INFO = "VAI";
__s0local14.CHEST_ID = "CID";
__s0local14.TIME_TO_UNLOCK = "TTU";
__s0local14.LORDS = "L";
__s0local14.BARONS = "B";
__s0local14.COMMANDERS = "C";
__s0local14.GENERALS = "G";
__s0local14.LORD_ID = "ID";
__s0local14.LORD_ID_2 = "LID";
__s0local14.DUMMY_LORD_ID = "DLID";
__s0local14.LORD_NAME = "N";
__s0local14.LORD_EQUIPMENT = "EQ";
__s0local14.LORD_LOOK = "VIS";
__s0local14.WEARER_ID = "WID";
__s0local14.LOCKED_CASTLE_ID = "LICID";
__s0local14.ALIEN_INVASION_EFFECTS = "AIE";
__s0local14.WINS = "W";
__s0local14.DEFEATS = "D";
__s0local14.WINNING_SPREE = "SPR";
__s0local14.DO_EXTRACT = "EX";
__s0local14.TAUNT_ATTACK_EFFECTS = "TAE";
__s0local14.OBJECT = "O";
__s0local14.OBJECT_ID = "OID";
__s0local14.BUILDING = "B";
__s0local14.NEW_BUILDING = "N";
__s0local14.NEW_OBJECT = "NO";
__s0local14.MOVED_OBJECT = "MO";
__s0local14.CUSTOM_BUILDINGS = "CB";
__s0local14.CUSTOM_OBJECT_ID = "COID";
__s0local14.OBJECT_ID_LIST = "OIDL";
__s0local14.SLOT_OVERVIEW = "SO";
__s0local14.BUILDING_COST_REDUCTION = "B";
__s0local14.BURNING = "B";
__s0local14.UPGRADE_DETAILS = "UD";
__s0local14.FAST_COMPLETE = "F";
__s0local14.MINES = "M";
__s0local14.BUILDING_EXISTS = "BE";
__s0local14.BUILDING_LIST = "BL";
__s0local14.SIMULTANEOUS_SLOT_COUNT = "SSC";
__s0local14.MERCENARY_MISSIONS = "M";
__s0local14.NEXT_MERCENARY_MISSION_REFRESH = "NM";
__s0local14.MERCENARY_MISSION_ID = "ID";
__s0local14.MISSION_STATE = "S";
__s0local14.QUALITY = "Q";
__s0local14.REWARD = "R";
__s0local14.REWARD_ID = "RID";
__s0local14.REWARD_IDS = "RIDS";
__s0local14.REWARD_ROTATION_INDEX = "RIDX";
__s0local14.REWARD_STEP = "RS";
__s0local14.COLLECTED_REWARDS = "CR";
__s0local14.SELECTED_REWARDS = "RS";
__s0local14.WINNER_REWARD_ID = "WR";
__s0local14.TOP_X_REWARD_ID = "TR";
__s0local14.BOOBY_PRIZE_REWARD_ID = "BR";
__s0local14.MINIMUM_FAME_FOR_BOOBY_PRIZE = "MFB";
__s0local14.CLASS_REWARDS = "CR";
__s0local14.REWARD_GRANT_TYPE = "GT";
__s0local14.REWARD_LEVEL_FOR_POINTS = "RL";
__s0local14.PEACE_MODE_STATUS = "PMS";
__s0local14.PEACE_MODE_TIME = "PMT";
__s0local14.RESOURCE_CARTS = "RC";
__s0local14.RESOURCE_TYPE = "RT";
__s0local14.BOOKMARKS = "BM";
__s0local14.BOOKMARK_LIST = "BL";
__s0local14.BOOKMARK_DISPLAY_NAME = "N";
__s0local14.BOOKMARK_DISPLAY_NAME_2 = "DN";
__s0local14.IS_FRIEND = "TY";
__s0local14.IS_FRIEND_2 = "IF";
__s0local14.BOOKMARK_TYPE = "TY";
__s0local14.TIME_LEFT = "TI";
__s0local14.SEND_IMPORTANT_MESSAGES = "IM";
__s0local14.BOOKMARK_ID = "BID";
__s0local14.BOOKMARK_CREATOR = "C";
__s0local14.ALLIANCE_BOOKMARK_LIST = "ABL";
__s0local14.CURRENCY_1 = "C1";
__s0local14.CURRENCY_2 = "C2";
__s0local14.WOOD = "W";
__s0local14.STONE = "S";
__s0local14.FOOD = "F";
__s0local14.COAL = "C";
__s0local14.OIL = "O";
__s0local14.GLASS = "G";
__s0local14.AQUAMARINE = "A";
__s0local14.IRON = "I";
__s0local14.HONEY = "HONEY";
__s0local14.MEAD = "MEAD";
__s0local14.BEEF = "BEEF";
__s0local14.KHAN_TABLETS = "KT";
__s0local14.SKULL_RELICS = "TS";
__s0local14.PEARL_RELICS = "PR";
__s0local14.SILVER_RUNES = "USR";
__s0local14.GOLD_RUNES = "UGR";
__s0local14.GREEN_SKULL_RELICS = "GTS";
__s0local14.WISHING_WELL_COINS = "WWC";
__s0local14.SAMURAI_TOKENS = "ST";
__s0local14.PEGASUS_TRAVEL_TICKET = "PTT";
__s0local14.CAPITAL_COINS = "CC";
__s0local14.CAPITAL_TOKENS = "CT";
__s0local14.RUBY_COST_FOR_WOOD = "WC2";
__s0local14.RUBY_COST_FOR_STONE = "SC2";
__s0local14.RUBY_COST_FOR_FOOD = "FC2";
__s0local14.RUBY_COST_FOR_C1 = "C1C2";
__s0local14.RESOURCE_AMOUNT_FOOD = "RAF";
__s0local14.RESOURCE_AMOUNT_WOOD = "RAW";
__s0local14.RESOURCE_AMOUNT_STONE = "RAS";
__s0local14.RESOURCE_AMOUNT_BEEF = "RAB";
__s0local14.APOLOGIZE_TOKEN = "APT";
__s0local14.KHAN_MEDALS = "KM";
__s0local14.MISSING_CURRENCY_IDS = "MCIDS";
__s0local14.BOOSTER_KEYS = "BKS";
__s0local14.HIDDEN_FOOD = "HF";
__s0local14.HIDDEN_MEAD = "HM";
__s0local14.HIDDEN_BEEF = "HB";
__s0local14.WISHING_WELL_OPERATION = "WOP";
__s0local14.WISHING_WELL_LEVEL = "L";
__s0local14.ALL_DIALOGS = "A";
__s0local14.DIALOG_ID = "K";
__s0local14.PREMIUM_ACCOUNT_TYPE = "PT";
__s0local14.PREMIUM_TIME_REMAINING = "PA";
__s0local14.FESTIVAL_TYPE = "T";
__s0local14.UPDATE_ALL = "UA";
__s0local14.TREASURE_MAP_ID = "MID";
__s0local14.TREASURE_MAP = "TM";
__s0local14.TREASURE_MAP_NODE = "N";
__s0local14.TREASURE_MAP_NODE_ID = "NID";
__s0local14.PROGRESS_TYPE = "PT";
__s0local14.ACHIEVED = "A";
__s0local14.COOLDOWN_MAP = "CM";
__s0local14.PRIVATE_OFFER_ID = "OID";
__s0local14.PRIVATE_OFFER_STATE = "OS";
__s0local14.PRIVATE_OFFER_ITERATION = "IT";
__s0local14.CAMP_POSITIONS = "CP";
__s0local14.CAMP_REROLL_ENABLED = "CRE";
__s0local14.REROLL_CURRENCY_KEY = "RCK";
__s0local14.REROLL_CURRENCY_KEYS = "RCKS";
__s0local14.REROLL_COUNT_SC = "RCSC";
__s0local14.REROLL_COUNT_HC = "RCHC";
__s0local14.TOPIC_ID = "TID";
__s0local14.TOPIC = "N";
__s0local14.TOPIC_NAME = "TN";
__s0local14.TOPIC_CREATOR_NAME = "CN";
__s0local14.UNREAD_TOPIC_COUNT = "UTC";
__s0local14.REPLY_TEXT = "RT";
__s0local14.REPLY_ID = "RID";
__s0local14.REPLY = "R";
__s0local14.RANKING_GROUPS = "RG";
__s0local14.TIME_SINCE_LAST_ALLIANCE_HELP = "TSL";
__s0local14.ALLIANCE_HELP_ID = "LID";
__s0local14.ALLIANCE_HELP_TYPE = "T";
__s0local14.ALLIANCE_HELP_TARGET_ID = "ID";
__s0local14.ALLIANCE_HELP_RECRUITMENT_PACKAGE_ID = "RID";
__s0local14.APPLICATION_LIST = "AL";
__s0local14.APPLICATION_AGE = "AA";
__s0local14.ALLIANCE = "A";
__s0local14.ALLIANCES = "AL";
__s0local14.ALLIANCE_NAME = "N";
__s0local14.ALLIANCE_NEW_NAME = "AN";
__s0local14.ALLIANCE_NAME_2 = "AN";
__s0local14.ALLIANCE_ID = "AID";
__s0local14.ALLIANCE_DESCRIPTION = "D";
__s0local14.IS_SEARCHING_ALLIANCE = "IS";
__s0local14.ALLIANCE_INVITATION_DECISION = "D";
__s0local14.ALLIANCE_TRIBUTE = "T";
__s0local14.NEW_DIPLOMACY_RANK = "NDR";
__s0local14.OLD_DIPLOMACY_RANK = "ODR";
__s0local14.THIS_ALLIANCE = "AS";
__s0local14.OTHER_ALLIANCE = "AO";
__s0local14.DIPLOMACY_REQUEST_STATUS = "S";
__s0local14.DESCRIPTION_TYPE = "T";
__s0local14.AUTO_WAR_ENABLED = "AW";
__s0local14.ACCEPTED_APPLICATION = "A";
__s0local14.ONLINE_MEMBERS = "OM";
__s0local14.ALLIANCE_LANDMARKS = "ALA";
__s0local14.APPLICATION_TEXT = "AT";
__s0local14.IS_AUTO_JOIN_ENABLED = "IA";
__s0local14.AUTO_JOIN_SET = "AS";
__s0local14.RANK = "R";
__s0local14.BUFF_TYPE = "BT";
__s0local14.ALLIANCE_NOTIFICATION_TYPE = "A";
__s0local14.ALLIANCE_NOTIFICATION_VALUES = "AV";
__s0local14.TRIBUTE = "T";
__s0local14.ALLIANCE_DIPLOMACY = "DOA";
__s0local14.HAS_REACHED_PEACE_CAP = "SP";
__s0local14.DIPLOMACY_TRIBUTE_OFFER = "PO";
__s0local14.TIME_TO_ACCEPT_TRIBUTE = "TS";
__s0local14.ANNOUNCEMENT = "A";
__s0local14.IS_ISLAND_KING_ALLIANCE = "KA";
__s0local14.ALLIANCE_DIPLOMACY_REQUEST_STATUS = "AS";
__s0local14.ALLIANCE_DIPLOMACY_REQUEST_ACCEPTED = "AC";
__s0local14.ALLIANCE_MEMBER_INFO = "AMI";
__s0local14.ALLIANCE_DIPLOMACY_LIST = "ADL";
__s0local14.ALLIANCE_PRIME_TIME_BONUS_PERCENTAGE = "APP";
__s0local14.ALLIANCE_CAPITAL = "ACA";
__s0local14.ALLIANCE_METROPOLIS = "ATC";
__s0local14.ALLIANCE_KINGS_TOWER = "AKT";
__s0local14.ALLIANCE_MONUMENT = "AMO";
__s0local14.ALLIANCE_LABORATORY = "ALA";
__s0local14.ALLIANCE_CURRENT_FAME_2 = "CF";
__s0local14.ALLIANCE_BUFF_LIST = "ABL";
__s0local14.ALLIANCE_AQUA_POINTS_RANK = "AR";
__s0local14.ALLIANCE_LANGUAGE = "ALL";
__s0local14.ALLIANCE_SCORE = "ACS";
__s0local14.IS_ALLIANCE_OPEN = "IAO";
__s0local14.MESSAGE = "M";
__s0local14.MESSAGES = "MSG";
__s0local14.MESSAGE_ID = "MID";
__s0local14.MESSAGE_IDS = "MIDS";
__s0local14.MESSAGE_ERROR_IDS = "ERR";
__s0local14.MESSAGE_DELETED_IDS = "DEL";
__s0local14.CHAT_MESSAGE = "CM";
__s0local14.IS_CHAT_HIDDEN = "H";
__s0local14.TEXT = "TXT";
__s0local14.MESSAGE_TEXT = "MTXT";
__s0local14.SUBJECT = "SJ";
__s0local14.MESSAGE_HEADER = "MH";
__s0local14.BADWORDS = "BW";
__s0local14.SOURCE_NAME = "SN";
__s0local14.TARGET_NAME = "TN";
__s0local14.RECEIVER_NAME = "RN";
__s0local14.RECEIVER_PLAYER_IDS = "PID";
__s0local14.EMAIL = "EM";
__s0local14.MESSAGE_TYPE = "MT";
__s0local14.MESSAGE_METADATA = "MS";
__s0local14.BUG_MESSAGE = "BM";
__s0local14.IGNORED_PLAYER_ID = "IPID";
__s0local14.MESSAGE_TYPES_COUNT = "MTC";
__s0local14.SPACE_ID = "SID";
__s0local14.AREA_ID = "AID";
__s0local14.KINGDOM_ID = "KID";
__s0local14.KINGDOM_ID_2 = "K";
__s0local14.AREA_TYPE = "AT";
__s0local14.GIFTS = "G";
__s0local14.GIFT_ID = "ID";
__s0local14.GIFT_TYPE = "T";
__s0local14.GIFTS_AVAILABLE_TODAY = "RA";
__s0local14.PLAYER_ID = "PID";
__s0local14.PLAYER_LIST = "PL";
__s0local14.PLAYER_IDS = "PIDS";
__s0local14.WOOD_STORED = "WS";
__s0local14.STONE_STORED = "SS";
__s0local14.CAPITAL_TOKENS_STORED = "CTS";
__s0local14.WOOD_PRODUCTION = "WP";
__s0local14.STONE_PRODUCTION = "SP";
__s0local14.STONE_CAPACITY = "MRS";
__s0local14.WOOD_CAPACITY = "MRW";
__s0local14.FOOD_CAPACITY = "MRF";
__s0local14.COAL_CAPACITY = "MRC";
__s0local14.OIL_CAPACITY = "MRO";
__s0local14.GLASS_CAPACITY = "MRG";
__s0local14.IRON_CAPACITY = "MRI";
__s0local14.AQUAMARINE_CAPACITY = "MRA";
__s0local14.STORAGE = "S";
__s0local14.ALLIANCE_STORAGE = "STO";
__s0local14.DONATION_RESOURCE_VALUES = "RV";
__s0local14.WOOD_PRODUCTION_MODIFIER = "WM";
__s0local14.STONE_PRODUCTION_MODIFIER = "SM";
__s0local14.FOOD_PRODUCTION_BOOST = "FM";
__s0local14.COAL_PRODUCTION_MODIFIER = "CM";
__s0local14.OIL_PRODUCTION_MODIFIER = "OM";
__s0local14.GLASS_PRODUCTION_MODIFIER = "GM";
__s0local14.IRON_PRODUCTION_MODIFIER = "IM";
__s0local14.RESOURCE_METROPOLIS_FOOD_PRODUCTION_BONUS = "MP";
__s0local14.WOOD_DELTA = "DW";
__s0local14.STONE_DELTA = "DS";
__s0local14.FOOD_DELTA = "DF";
__s0local14.COAL_DELTA = "DC";
__s0local14.OIL_DELTA = "DO";
__s0local14.GLASS_DELTA = "DG";
__s0local14.IRON_DELTA = "DI";
__s0local14.FOOD_CONSUMPTION_DELTA = "DFC";
__s0local14.SICKNESS = "S";
__s0local14.MAIN_CASTLES_RESOURCES = "MCR";
__s0local14.CURRENT_AREA_RESOURCES = "CAR";
__s0local14.MINIMUM_STOCK = "MS";
__s0local14.PRODUCTION_ADJUSTMENT = "PA";
__s0local14.SERVER_PRODUCTION_FREEZE = "SRPF";
__s0local14.CURRENCY_TYPE = "CT";
__s0local14.PACKAGE_ID = "PID";
__s0local14.PACKAGE_ID_2 = "PKID";
__s0local14.PACKAGE_LIST = "PL";
__s0local14.PACKAGE_PRICE = "PKPC";
__s0local14.PROPOSED_RUBIES = "PC2";
__s0local14.AMOUNT = "AMT";
__s0local14.AMOUNT_2 = "A";
__s0local14.COUNT = "C";
__s0local14.PRIME_OFFER_ID = "PO";
__s0local14.BUY_TYPE = "BT";
__s0local14.BUY_TYPE_ID = "TID";
__s0local14.BUY_AGAIN = "BA";
__s0local14.PAY_WITH_RUBIES = "PWR";
__s0local14.DISCOUNT = "DIS";
__s0local14.DECORATION_ID = "DID";
__s0local14.UNSTORED_DECO_ID = "I";
__s0local14.UNIQUE_DECORATION_ID = "UID";
__s0local14.VILLAGE_COUNT = "VC";
__s0local14.POPUP_ID = "POP";
__s0local14.POPUP_VALUE = "VAL";
__s0local14.BOOSTER_ID = "BID";
__s0local14.BOOSTER_ID_2 = "ID";
__s0local14.BOOSTER_PERCENT_BOOST = "PB";
__s0local14.BOOSTER_LEVEL = "L";
__s0local14.FOOD_BOOST = "FB";
__s0local14.VIP_BOOST = "VB";
__s0local14.IS_BOOSTED = "BT";
__s0local14.GLORY_BOOSTER_PERCENTAGE = "GBP";
__s0local14.MOVEMENTS = "M";
__s0local14.MOVEMENT = "M";
__s0local14.TO_PLAYER_ID = "TID";
__s0local14.MARKET_MOVEMENT = "MM";
__s0local14.CARRIAGES = "C";
__s0local14.GOODS = "G";
__s0local14.TARGET_AREA = "TA";
__s0local14.SOURCE_AREA = "SA";
__s0local14.DISTANCE_X = "DX";
__s0local14.DISTANCE_Y = "DY";
__s0local14.X_DESTINATION = "DX";
__s0local14.Y_DESTINATION = "DY";
__s0local14.UNIT_TRANSFER = "UT";
__s0local14.RESOURCE_TRANSFER = "RT";
__s0local14.ATTACK_MOVEMENT = "A";
__s0local14.ATTACK_TYPE = "ATT";
__s0local14.TARGET_X_COORDINATE = "TX";
__s0local14.TARGET_Y_COORDINATE = "TY";
__s0local14.SOURCE_X_COORDINATE = "SX";
__s0local14.SOURCE_Y_COORDINATE = "SY";
__s0local14.SOURCE_KINGDOM_ID = "SKID";
__s0local14.TARGET_KINGDOM_ID = "TKID";
__s0local14.ARMY_ATTACK_MOVEMENT = "AAM";
__s0local14.TRANSFER_TYPE = "TT";
__s0local14.SCOPE = "S";
__s0local14.TOTAL_CARRIAGES = "TC";
__s0local14.AVAILABLE_CARRIAGES = "AC";
__s0local14.MOVEMENT_ID = "MID";
__s0local14.TARGET_KINGDOM_ID_2 = "TK";
__s0local14.TREASURE_HUNT_MOVEMENT = "TM";
__s0local14.FINAL_ARMY = "FA";
__s0local14.GUESSED_SIZE = "GS";
__s0local14.GESAMMTE_ARMY = "GA";
__s0local14.SLOWNDOWN_DURATION_IN_SECONDS = "SD";
__s0local14.TOTAL_TIME = "TT";
__s0local14.PASSED_TIME = "PT";
__s0local14.START_PLAYER_ID = "SID";
__s0local14.ATTACK_SUPPORT_TOOLS = "AST";
__s0local14.HOME_AWORKSHOP_LEVEL = "HAWL";
__s0local14.UNIT_MOVEMENT = "UM";
__s0local14.PROGRESS_WAITING_DURATION = "PWD";
__s0local14.TOTAL_WAITING_DURATION = "TWD";
__s0local14.ARMY = "A";
__s0local14.INVENTORY = "I";
__s0local14.ALLIANCE_SUPPORT_INVENTORY = "AI";
__s0local14.UNITS = "U";
__s0local14.TOOLS = "T";
__s0local14.LEFT = "L";
__s0local14.MIDDLE = "M";
__s0local14.RIGHT = "R";
__s0local14.REINFORCEMENT_WAVE = "RW";
__s0local14.PRECOMBAT_WAVE = "PW";
__s0local14.POSTCOMBAT_WAVE = "EW";
__s0local14.UNITS_TRAVELING = "UT";
__s0local14.STATUS = "S";
__s0local14.STATUS_2 = "ST";
__s0local14.MINIMUM_SOLDIER_COUNT = "MS";
__s0local14.MAXIMUM_UNITS = "MU";
__s0local14.UNIT_AMOUNT = "U";
__s0local14.MORALE = "M";
__s0local14.APPEND_UNITS = "AU";
__s0local14.RUNNING_ACHIEVEMENTS = "RA";
__s0local14.FINISHED_ACHIEVEMENTS = "FA";
__s0local14.ACHIEVEMENT_POINTS = "AVP";
__s0local14.ACHIEVEMENT_ID = "AID";
__s0local14.PROGRESS = "P";
__s0local14.QUEST_ID = "QID";
__s0local14.QUEST_IDS = "QIDS";
__s0local14.UNREAD = "U";
__s0local14.QUEST_STATE = "S";
__s0local14.QUEST_LIST = "QL";
__s0local14.ANNOUNCED_QUESTS = "ANN";
__s0local14.RUNNING_QUESTS = "R";
__s0local14.DONE_QUESTS = "D";
__s0local14.RUNNING_DAILY_QUESTS = "RDQ";
__s0local14.FINISHED_DAILY_QUESTS = "FDQ";
__s0local14.PLAYER_QUEST_LEVEL = "PQL";
__s0local14.CAMPAIGN_QUESTS = "CQS";
__s0local14.QUEST_CAMPAIGN_STATUS = "QCS";
__s0local14.CAMPAIGN_QUEST_ID = "CQID";
__s0local14.QUEST_CONDITION = "QC";
__s0local14.QUEST_TARGET_ID = "QTID";
__s0local14.SIDE = "S";
__s0local14.UNIT_DISTRIBUTION_PERCENTAGE = "UP";
__s0local14.UNIT_COMPOSITION = "UC";
__s0local14.SLOTS = "S";
__s0local14.LEFT_SLOT = "LS";
__s0local14.MIDDLE_SLOT = "MS";
__s0local14.RIGHT_SLOT = "RS";
__s0local14.UNIT_SLOTS = "SU";
__s0local14.UNIT_SLOTS_2 = "US";
__s0local14.TOOL_SLOTS = "ST";
__s0local14.DEFENSE_VALUE = "D";
__s0local14.SPY_AGE = "AS";
__s0local14.DEFENDER_PLAYER_ID = "DP";
__s0local14.DEFENDER_LEVEL = "DL";
__s0local14.KEEP_LEVEL = "KL";
__s0local14.WALL_LEVEL = "WL";
__s0local14.GATE_LEVEL = "GL";
__s0local14.TOWER_LEVEL = "TL";
__s0local14.MOAT_LEVEL = "ML";
__s0local14.SPECIAL_CAMP_ID = "SPC";
__s0local14.MINIMUM_ATTACK_UNITS_TO_CONSUME_TOOLS = "MAUCT";
__s0local14.SUPPORT_TOOL_SLOTS = "STS";
__s0local14.SOURCE_ZONE_ID = "SZID";
__s0local14.TARGET_ZONE_ID = "TZID";
__s0local14.BOUNTYHUNTER_REWARD_C1 = "BC1";
__s0local14.BOUNTYHUNTER_REWARD_C2 = "BC2";
__s0local14.BOUNTYHUNTER_REWARD_IRON = "I";
__s0local14.DUNGEON_PROTECTION_TIME = "DPT";
__s0local14.DUNGEON = "D";
__s0local14.DEFENCE_UNITS = "DU";
__s0local14.COLOSSUS_POINTS = "P";
__s0local14.ISLAND_RANK = "OR";
__s0local14.WINNER_ALLIANCE_ID = "WAID";
__s0local14.WINNER_ALLIANCE_NAME = "WAN";
__s0local14.WINNER_ALLIANCE_MEMBER_COUNT = "WAM";
__s0local14.WINNER_ALLIANCE_LEVEL = "WAL";
__s0local14.WINNER_ALLIANCE_AQUA_POINTS = "WAP";
__s0local14.ISLAND_KING_PLAYER_ID = "KID";
__s0local14.ISLAND_KING_PLAYER_NAME = "KN";
__s0local14.OWNER_ALLIANCE_MEMBER_COUNT = "OAM";
__s0local14.OWNER_ALLIANCE_NAME = "OAN";
__s0local14.OWNER_ALLIANCE_LEVEL = "OAL";
__s0local14.OWNER_ALLIANCE_ID = "OAI";
__s0local14.FACTION_OWNER_INFO = "FN";
__s0local14.FACTION_POINTS_BLUE = "BFP";
__s0local14.FACTION_POINTS_RED = "RFP";
__s0local14.PLAYER_COUNT_RED = "RP";
__s0local14.PLAYER_COUNT_BLUE = "BP";
__s0local14.FACTION_ID = "FID";
__s0local14.AUXILIARY_CAPACITY = "AUS";
__s0local14.PLAYER_PERCENTAGE_IN_FACTION_RED = "RFPPA";
__s0local14.FACTION_BLUE = "FB";
__s0local14.FACTION_RED = "FR";
__s0local14.CURRENT_FACTION_POINTS = "CFP";
__s0local14.HIGHEST_FACTION_POINTS = "HFP";
__s0local14.RED_FACTION_LAST_MAN_STANDING_ACTIVE = "RFLMS";
__s0local14.BLUE_FACTION_LAST_MAN_STANDING_ACTIVE = "BFLMS";
__s0local14.BLUE_FACTION_CAPITAL_REACHED = "BCR";
__s0local14.RED_FACTION_CAPITAL_REACHED = "RCR";
__s0local14.MAIN_CAMP_ID = "MC";
__s0local14.IS_SPECTATOR = "SPC";
__s0local14.FACTION_AREA_CAPACITY = "FAC";
__s0local14.MAP_SEED = "MS";
__s0local14.BATTLE_LOG_ID = "LID";
__s0local14.ATTACKER_LORD_INFO = "AL";
__s0local14.DEFENDER_BARON_INFO = "DB";
__s0local14.ATTACKER_GEM_TRIGGERED = "AGT";
__s0local14.DEFENDER_GEM_TRIGGERED = "DGT";
__s0local14.ATTACKER_LEGEND_SKILLS = "ALS";
__s0local14.DEFENDER_LEGEND_SKILLS = "DLS";
__s0local14.DEFENDER_WON = "DW";
__s0local14.DEFENDER_USED_SUPPORT_TOOLS = "DUST";
__s0local14.HONOR = "H";
__s0local14.DEFENDER_SURVIVAL_RATE = "SR";
__s0local14.PLAYER_BATTLE_INFO = "PBI";
__s0local14.PLAYER_INFO = "PI";
__s0local14.FOUND_EQUIPMENT = "EQF";
__s0local14.FOUND_GEM_ID = "GF";
__s0local14.FOUND_MINUTE_SKIP_ID = "MSF";
__s0local14.ATTACKER_HOSPITAL_CASTLE_ID = "AHC";
__s0local14.ATTACKER_HAD_HOSPITAL = "AHH";
__s0local14.ATTACKER_HOSPITAL_WAS_FULL = "AHF";
__s0local14.DEFENDER_HOSPITAL_CASTLE_ID = "DHC";
__s0local14.DEFENDER_HAD_HOSPITAL = "DHH";
__s0local14.DEFENDER_HOSPITAL_WAS_FULL = "DHF";
__s0local14.WOUNDED_SUPPORTER_UNITS = "WSU";
__s0local14.ATTACKER_USED_ONLY_AUXILIARIES = "AUA";
__s0local14.DEFENDER_USED_ONLY_AUXILIARIES = "DUA";
__s0local14.ATTACKER_ALLIANCE_SUBSCRIBERS = "AAS";
__s0local14.DEFENDER_ALLIANCE_SUBSCRIBERS = "DAS";
__s0local14.ATTACKER_HAD_PLAYER_SUBSCRIPTION = "AHP";
__s0local14.DEFENDER_HAD_PLAYER_SUBSCRIPTION = "DHP";
__s0local14.RAGE_POINTS = "RP";
__s0local14.ADDITIONAL_EFFECTS = "AE";
__s0local14.SPY = "S";
__s0local14.SPY_COUNT = "SC";
__s0local14.GUARD_COUNT = "GC";
__s0local14.GUARD_COUNT_2 = "GRD";
__s0local14.SPYING_PLAYER_ID = "SID";
__s0local14.SPY_OWNER = "SO";
__s0local14.SPY_RISK = "SR";
__s0local14.SPY_ACCOUNT = "SA";
__s0local14.SPY_TYPE = "ST";
__s0local14.SPY_EFFECT = "SE";
__s0local14.RISK = "R";
__s0local14.PLAGUE_MONK_MOVEMENT = "P";
__s0local14.CASTLE = "C";
__s0local14.CASTLES = "C";
__s0local14.CASTLE_ID = "CID";
__s0local14.CASTLE_NAME = "N";
__s0local14.CASTLE_NAME_1 = "CN";
__s0local14.POPULATION = "P";
__s0local14.NEUTRAL_DECO_POINTS = "NDP";
__s0local14.DECO_POINTS = "DP";
__s0local14.RIOT = "R";
__s0local14.SLUM_LEVEL = "SL";
__s0local14.SOLDIER_PRODUCTION_SPEED = "RS1";
__s0local14.OFFENSIVE_TOOL_PRODUCTION_SPEED = "RS2";
__s0local14.DEFENSIVE_TOOL_PRODUCTION_SPEED = "RS3";
__s0local14.HOSPITAL_PRODUCTION_SPEED = "RSH";
__s0local14.BUILD_SPEED = "BDB";
__s0local14.BUILDING_INFO = "BI";
__s0local14.BUILDING_LEVEL = "BL";
__s0local14.STATE = "S";
__s0local14.OPEN_GATE_COUNTER = "OGC";
__s0local14.TAX = "TX";
__s0local14.EXPECTED_MONEY = "EM";
__s0local14.IS_BRIBED = "IB";
__s0local14.POPULATION_1 = "PO";
__s0local14.COLLECTED_TAXES = "CT";
__s0local14.TAX_TYPE = "TT";
__s0local14.SKIN_ID = "EID";
__s0local14.UNLOCKED_STUFF = "UL";
__s0local14.IS_UNLOCKED = "U";
__s0local14.PAID_WOOD = "PW";
__s0local14.PAID_FOOD = "PF";
__s0local14.PAID_STONE = "PS";
__s0local14.PAID_C1 = "PC1";
__s0local14.PAID_C2 = "PC2";
__s0local14.TOP_X_RANK = "TX";
__s0local14.CURRENT_SCORE = "OP";
__s0local14.CURRENT_SCORE_2 = "OEP";
__s0local14.LEAGUE_TYPE = "LID";
__s0local14.CURRENT_FAME = "CF";
__s0local14.HIGHEST_FAME = "HF";
__s0local14.VILLAGE_POSITIONS = "VP";
__s0local14.AREA_POSITIONS = "AP";
__s0local14.UNITS_2 = "UT";
__s0local14.CASTLE_X_COORDINATE = "CX";
__s0local14.CASTLE_Y_COORDINATE = "CY";
__s0local14.GATE_DEFENSE = "GD";
__s0local14.MELEE_DEFENSE_STRENGTH = "MDS";
__s0local14.RANGE_DEFENSE_STRENGTH = "RDS";
__s0local14.PLACED_RANGE_UNITS = "PR";
__s0local14.PLACED_MELEE_UNITS = "PM";
__s0local14.HOME_DWORKSHOP_LEVEL = "HDWL";
__s0local14.POPUP_LIST = "P";
__s0local14.PLAYER_NAME = "PN";
__s0local14.REGISTRATION_EMAIL = "MAIL";
__s0local14.PASSWORD = "PW";
__s0local14.LOGIN_TOKEN = "LT";
__s0local14.STAY_LOGGED_IN = "PL";
__s0local14.LANGUAGE = "LANG";
__s0local14.REFERRER = "REF";
__s0local14.KOREA_REQUEST_ID = "koreaRequestId";
__s0local14.KOREA_REQUEST_ID_SHORT = "KID";
__s0local14.INVITE_CODE = "IC";
__s0local14.LOGIN_NEW_PASSWORD = "P";
__s0local14.LOGIN_NEW_PASSWORD_BCRYPT = "PB";
__s0local14.LOGIN_NEW_EMAIL = "M";
__s0local14.NEWSLETTER_SUBSCRIPTION = "N";
__s0local14.REGISTRATION_DATE = "RD";
__s0local14.FREE_CASTLE_RENAME = "FCR";
__s0local14.IS_PLAYER_NAME_TEMPORARY = "PNT";
__s0local14.IS_EMAIL_TEMPORARY = "MLT";
__s0local14.IS_PASSWORD_TEMPORARY = "PWT";
__s0local14.NAME_OR_EMAIL = "NOM";
__s0local14.ACCOUNT_ID = "AID";
__s0local14.LOGIN_TYPE_ID = "ID";
__s0local14.GOODGAME_CAMPAIGN_ID = "GCI";
__s0local14.EMAIL_2 = "E";
__s0local14.HAS_CONFIRMED_EMAIL = "V";
__s0local14.HAS_CONFIRMED_TERMS_AND_CONDITIONS = "CTAC";
__s0local14.HAS_NEWSLETTER_SUBSCRIPTION = "SFN";
__s0local14.API_BEARER_TOKEN = "ABT";
__s0local14.EXPIRES_IN_SECONDS = "ES";
__s0local14.CAN_GET_NEWSLETTER_REWARD = "CGNR";
__s0local14.API_BEARER_TOKEN_V2 = "ABTV2";
__s0local14.ZONE_NETWORK_ID = "ZNID";
__s0local14.HAS_PASSWORD = "hasPassword";
__s0local14.CONSTRUCTION_ITEM = "CI";
__s0local14.CONSTRUCTION_ITEM_ID = "CID";
__s0local14.CONSTRUCTION_ITEM_LIST = "CIL";
__s0local14.MODE = "M";
__s0local14.CONSTRUCTION_ITEM_SELECTED_UPGRADE_CURRENCY = "SUC";
__s0local14.NEXT_EXPIRING_CI_REMAINING_SECONDS = "NCRS";
__s0local14.LAST_EXPIRED_CI_TIMESTAMP = "LECT";
__s0local14.BOOSTED_CONSTRUCTION_ITEM_ID = "BCID";
__s0local14.TITLE_ID = "TI";
__s0local14.TITLE_ID_2 = "TID";
__s0local14.NEW_TITLE_INDEX = "NHT";
__s0local14.PREFIX_TITLE = "PRE";
__s0local14.SUFFIX_TITLE = "SUF";
__s0local14.PREFIX_TITLE_2 = "PFX";
__s0local14.SUFFIX_TITLE_2 = "SFX";
__s0local14.TITLE_COOLDOWN = "TCD";
__s0local14.TITLE_INFO = "TI";
__s0local14.AQUA_POINTS = "AP";
__s0local14.ALLIANCE_AQUA_POINTS = "A";
__s0local14.AQUA_POINTS_HIGHSCORE = "APH";
__s0local14.LEGEND_SKILL_POINTS = "SP";
__s0local14.PLAYER_AQUA_POINTS = "P";
__s0local14.DELTA_PLAYER_AQUA_POINTS = "DP";
__s0local14.CURRENT_MIGHT_POINTS = "MP";
__s0local14.HIGHEST_MIGHT_POINTS = "HMP";
__s0local14.VIP_POINTS = "VP";
__s0local14.COLLECTED_POINTS = "CP";
__s0local14.HIGHEST_MIGHT_POINTS_2 = "HAMP";
__s0local14.POINT_THRESHOLD = "PT";
__s0local14.SURVEY_ID = "SID";
__s0local14.IS_CANCELED = "C";
__s0local14.ANSWERS = "A";
__s0local14.ANSWERS_IDS = "AS";
__s0local14.QUESTION_ID = "ID";
__s0local14.FREE_TEXT = "T";
__s0local14.SURVEY_TYPE_ID = "ST";
__s0local14.QUESTIONS = "QS";
__s0local14.QUESTION_TYPE = "QT";
__s0local14.ANSWERS_COUNT = "AC";
__s0local14.FULL_NAME = "FUN";
__s0local14.FIRST_NAME = "FIN";
__s0local14.LAST_NAME = "LAN";
__s0local14.PROFILE_LINK = "PLK";
__s0local14.GENDER_NAME = "GEN";
__s0local14.LOCALE_CODE = "LOC";
__s0local14.IS_ACCOUNT_VERIFIED = "IAV";
__s0local14.FACEBOOK_AGE_RANGE = "AGR";
__s0local14.UTC_OFFSET = "UTC";
__s0local14.BIRTHDAY = "BID";
__s0local14.FACEBOOK_BUSINESS_TOKEN = "FBT";
__s0local14.FACEBOOK_INVITER_INFO = "FI";
__s0local14.FACEBOOK_ID = "FB";
__s0local14.FACEBOOK_ID_1 = "ID";
__s0local14.FACEBOOK_IDS = "FIDS";
__s0local14.FACEBOOK_INVITEES_LIST = "FL";
__s0local14.FACEBOOK_APP_ID = "FAID";
__s0local14.FACEBOOK_USER_ID = "FID";
__s0local14.FACEBOOK_TOKEN = "FTK";
__s0local14.INSTANCE_ID = "IID";
__s0local14.ZONE_ID = "ZID";
__s0local14.IS_CONNECTED_TO_FACEBOOK = "CTF";
__s0local14.SET_FACEBOOK_CONNECTION = "SFC";
__s0local14.FACEBOOK_SENDER_ID = "SID";
__s0local14.FACEBOOK_RECEIVER_ID = "RXID";
__s0local14.FACEBOOK_ID_WAS_SET_BEFORE = "SB";
__s0local14.FACEBOOK_IDS_MAPPING = "FM";
__s0local14.SHOPPING_CART = "SC";
__s0local14.TYPE_IDS = "TID";
__s0local14.PAYED_C2 = "P";
__s0local14.LIMIT = "LIM";
__s0local14.LEVEL = "L";
__s0local14.COST_C2 = "C2";
__s0local14.SHOPPING_CART_A = "SCA";
__s0local14.SHOPPING_CART_B = "SCB";
__s0local14.SHOPPING_CART_C = "SCC";
__s0local14.MATERIAL_BAG_ID = "BID";
__s0local14.CRAFTING_MATERIAL = "CM";
__s0local14.MATERIAL_ID = "MID";
__s0local14.ITEM_RECIPES = "IR";
__s0local14.RECIPE_ID = "RID";
__s0local14.SLOT_NAME = "SN";
__s0local14.LINK = "L";
__s0local14.WEBSITE_ID = "WID";
__s0local14.OWNER_INFO = "OI";
__s0local14.OWNER_INFO_2 = "O";
__s0local14.INGREDIENTS = "I";
__s0local14.SEARCH_VALUE = "SV";
__s0local14.WOD_ID = "WID";
__s0local14.WOD_IDS = "WIDS";
__s0local14.WOD_ID_2 = "W";
__s0local14.WOD_ID_3 = "WOD";
__s0local14.RANDOM_NAMES = "RN";
__s0local14.CHOSEN_OPTION = "CO";
__s0local14.FREE_UNIT_CAPACITY = "FUC";
__s0local14.SHUTTING_DOWN = "SD";
__s0local14.EQUIPMENT = "E";
__s0local14.REMAINING_COOLDOWN = "CD";
__s0local14.DAY_OF_WEEK = "DOW";
__s0local14.EVENT_ID = "EID";
__s0local14.JUDGEMENT_ID = "JID";
__s0local14.FREE_SKIP = "FS";
__s0local14.FOOD_CONSUMPTION_REDUCTION = "FCR";
__s0local14.TIME_UNTIL_NEXT_COLLECTION = "NC";
__s0local14.REMAINING_COLLECTIONS = "RC";
__s0local14.EXTRA_GOODS = "EG";
__s0local14.XP = "XP";
__s0local14.OLD_SLOT = "OS";
__s0local14.NEW_SLOT = "NS";
__s0local14.SLOT_ID = "S";
__s0local14.SLOT_ID_2 = "SID";
__s0local14.SKIN_ID_2 = "SID";
__s0local14.SKIN_ID_3 = "SKN";
__s0local14.LEAGUE_ID = "ALID";
__s0local14.UPCOMING_EVENTS = "UE";
__s0local14.SUB_TYPE = "ST";
__s0local14.FOUND_RANK = "FR";
__s0local14.WOOD_AND_STONE_PRODUCTION_REDUCTION = "WSR";
__s0local14.UNIT_ID = "U";
__s0local14.TAKE_FROM_STRONGHOLD = "S";
__s0local14.AREAS = "A";
__s0local14.UNLOCKED_HORSES = "UH";
__s0local14.LOCKED_UNITS = "L";
__s0local14.SAFE_HOUSE_INVENTORY = "SHI";
__s0local14.HOSPITAL_INVENTORY = "HI";
__s0local14.TRAVELLING_UNITS = "TU";
__s0local14.RESEARCH_ID = "RID";
__s0local14.SOURCE_AREA_ID = "SCID";
__s0local14.SOURCE_AREA_ID_2 = "SID";
__s0local14.TARGET_AREA_ID = "TCID";
__s0local14.OWNER_ID = "OID";
__s0local14.HORSE_WOD_ID = "HBW";
__s0local14.BOUGHT_PREMIUM_COMMANDER = "BPC";
__s0local14.VISIBLE_FOR_ALLIANCE = "AV";
__s0local14.LOOT_PRIORITY = "LP";
__s0local14.KING_TOWER_BONUS = "KTB";
__s0local14.EMBLEM = "E";
__s0local14.MORALE_BONUS = "MB";
__s0local14.WAIT_TIME_INDEX = "WT";
__s0local14.WAIT_TIME_HOURS = "WT";
__s0local14.CAMP_ID = "CID";
__s0local14.EFFECT = "E";
__s0local14.AVAILABLE_SPY_COUNT = "AS";
__s0local14.AVAILABLE_PLAGUE_MONK_COUNT = "APM";
__s0local14.TRAVELLING_PLAGUE_MONK_COUNT = "TPM";
__s0local14.AGE_SPY = "AS";
__s0local14.OBJECT_THINGY = "O";
__s0local14.VILLAGES = "VI";
__s0local14.HAS_CONTOR = "C";
__s0local14.RESOURCES_TRANSPORTED = "RT";
__s0local14.SLUM_PAID_WOOD = "SPW";
__s0local14.SLUM_PAID_STONE = "SPS";
__s0local14.SLUM_PAID_FOOD = "SPF";
__s0local14.SLUM_PAID_C1 = "SPC1";
__s0local14.DIRECTION = "D";
__s0local14.RELOCATION_COUNT = "RLC";
__s0local14.REMAINING_RELOCATION_COOLDOWN = "RMC";
__s0local14.JUST_MOVED = "JM";
__s0local14.ORIGIN_X_COORDINATE = "OX";
__s0local14.ORIGIN_Y_COORDINATE = "OY";
__s0local14.X_POSITION_2 = "PX";
__s0local14.Y_POSITION_2 = "PY";
__s0local14.CHOSEN_DURATION_INDEX = "CD";
__s0local14.NEW_NAME = "N";
__s0local14.HAS_TO_PAY = "P";
__s0local14.DISABLE_JUMP = "DJ";
__s0local14.INCLUDE_MIDDLE_LOG = "IM";
__s0local14.IGNORE = "IGN";
__s0local14.OWNER_CASTLE_ID = "OCID";
__s0local14.TARGET_CASTLE_ID = "TCID";
__s0local14.RESOURCES = "R";
__s0local14.ISLAND_RANDOM_SEED = "I";
__s0local14.ALLIANCE_BOOKMARK_INFO = "ABI";
__s0local14.CREATED_AVATAR_EMBLEM = "CAE";
__s0local14.EMBLEM_SYMBOL_1_ID = "S1";
__s0local14.EMBLEM_SYMBOL_2_ID = "S2";
__s0local14.NEW_PASSWORD = "NPW";
__s0local14.NEW_BCRYPT_PASSWORD = "NBPW";
__s0local14.OLD_PASSWORD = "OPW";
__s0local14.INDEX = "I";
__s0local14.SPECIAL_PARAMETER = "SP";
__s0local14.REWARDED_TROOPS_WOD_ID = "ID";
__s0local14.PORTAL_LOGIN_NAME = "PLN";
__s0local14.DAY = "D";
__s0local14.NAME_OR_MAIL = "NOM";
__s0local14.DISTRIBUTOR_ID = "ID";
__s0local14.SHOW_VIP_FLAG = "SVF";
__s0local14.CONFIRM_C2_THRESHOLD = "CC2T";
__s0local14.USE_BIG_MESSAGE_BOX = "BIG";
__s0local14.MESSAGE_2 = "MSG";
__s0local14.TIMESTAMP = "T";
__s0local14.NEXT_RETENTION_REWARD = "NRR";
__s0local14.CAN_COLLECT = "CC";
__s0local14.MEMBERS = "M";
__s0local14.RESOURCE_TYPE_2 = "T";
__s0local14.GEM_ID = "GID";
__s0local14.EQUIPMENT_ID = "EID";
__s0local14.HERO_ID = "HID";
__s0local14.SUCCESS = "S";
__s0local14.USED_GEM_IDS = "UG";
__s0local14.MADE_GEM_ID = "MID";
__s0local14.DO_EQUIP = "E";
__s0local14.REMAINING_EQUIPMENT_INVENTORY_SPACE = "E";
__s0local14.TOTAL_EQUIPMENT_INVENTORY_SPACE = "TE";
__s0local14.REMAINING_CONSTRUCTION_ITEM_INVENTORY_SPACE = "C";
__s0local14.REMAINING_GEM_INVENTORY_SPACE = "G";
__s0local14.TOTAL_GEM_INVENTORY_SPACE = "TG";
__s0local14.RECEIVED_REWARDS = "RR";
__s0local14.MISSION_ID = "MID";
__s0local14.MINUTE_SKIP_TYPE = "MST";
__s0local14.MINUTE_SKIPS = "MS";
__s0local14.ISSUER_ID = "IID";
__s0local14.EVENT_COMMAND = "CMD";
__s0local14.SKIP_WITH_C2 = "SC";
__s0local14.FOOD_STORED = "FS";
__s0local14.REMAINING_NOOB_PROTECTION_TIME_IN_SECONDS = "NS";
__s0local14.TIME_SINCE_LAST_ACTIVE = "LA";
__s0local14.WAS_RESETTED = "WR";
__s0local14.INCLUDE_CASTLE_DEFENSE = "CD";
__s0local14.TOTAL_CARRIAGES_2 = "MC";
__s0local14.HAS_BARRACKS = "B";
__s0local14.HAS_WORKSHOP = "WS";
__s0local14.HAS_DEFENSE_WORKSHOP = "DW";
__s0local14.HAS_HOSPITAL = "H";
__s0local14.ARMY_COLLECTION = "AC";
__s0local14.DEFENSE_DECORATION = "D";
__s0local14.HONOR_RANK = "RP";
__s0local14.BONUS_SPY_AMOUNT = "BS";
__s0local14.MAXIMUM_SPY_AMOUNT = "MS";
__s0local14.HAS_EVER_CHANGED_NAME = "ECN";
__s0local14.ADMIN_SECURITY_LEVEL = "CL";
__s0local14.USER_ID = "UID";
__s0local14.HAS_PREMIUM_FLAG = "PF";
__s0local14.CURRENT_PLAYER_LEVEL = "LVL";
__s0local14.NEW_PLAYER_LEVEL = "NL";
__s0local14.XP_FOR_CURRENT_LEVEL = "XPFCL";
__s0local14.XP_FOR_NEXT_LEVEL = "XPTNL";
__s0local14.LAST_WEEKS_RANK = "LWR";
__s0local14.CURRENT_HONOR_RANK = "CWR";
__s0local14.LIST_TYPE = "LT";
__s0local14.LAST_ROW = "LR";
__s0local14.HIGHSCORE_LIST = "L";
__s0local14.ALLIANCE_RANK = "R";
__s0local14.ALLIANCE_CURRENT_FAME = "ACF";
__s0local14.IS_SEARCHING_ALLIANCE_2 = "SA";
__s0local14.USED_PREMIUM_GENERALS = "UPG";
__s0local14.VIP_REMAINING_SECONDS = "VRS";
__s0local14.VIP_REACHED_LEVEL = "VRL";
__s0local14.OFFER_ID = "OID";
__s0local14.OFFER_DESCRIPTION_INDEX = "ODI";
__s0local14.OFFER_ACCEPTED = "C";
__s0local14.WAS_INSTANT_COMPLETED = "IC";
__s0local14.GAINED_EQUIPMENT = "GEQ";
__s0local14.DAILY_ACTIVITY_TYPE = "DA";
__s0local14.ARTIFACT_PIECES_FOUND = "PF";
__s0local14.WOOD_PACKAGES = "WP";
__s0local14.FOOD_PACKAGES = "FP";
__s0local14.STONE_PACKAGES = "SP";
__s0local14.DONATED_COINS = "DC";
__s0local14.DONATED_STONE = "DS";
__s0local14.DONATED_WOOD = "DW";
__s0local14.IS_SMALL_LIST = "S";
__s0local14.CURRENT_RANK = "OR";
__s0local14.HIGHSCORE = "HS";
__s0local14.AREA_TYPE_2 = "T";
__s0local14.MINIMUM_LEVEL = "LMIN";
__s0local14.MAXIMUM_LEVEL = "LMAX";
__s0local14.IS_PLAYER_ACTIVE = "PA";
__s0local14.CAMP_TYPE_ID = "ID";
__s0local14.DO_COLLECT_REWARDS = "CR";
__s0local14.RECEIVER_PLAYER_ID = "RID";
__s0local14.REWARD_COUNT = "RC";
__s0local14.REWARDS = "RW";
__s0local14.WON_RUBIES = "WR";
__s0local14.FOOD_COST = "F";
__s0local14.FOOD_PRODUCED = "FP";
__s0local14.WOOD_PRODUCED = "WP";
__s0local14.STONE_PRODUCED = "SP";
__s0local14.COAL_STORED = "CS";
__s0local14.COAL_PRODUCED = "CP";
__s0local14.OIL_STORED = "OS";
__s0local14.OIL_PRODUCED = "OP";
__s0local14.GLASS_STORED = "GS";
__s0local14.GLASS_PRODUCED = "GP";
__s0local14.IRON_STORED = "IS";
__s0local14.IRON_PRODUCED = "IP";
__s0local14.EVENTS = "E";
__s0local14.AREA_1_X_COORDINATE = "AX1";
__s0local14.AREA_1_Y_COORDINATE = "AY1";
__s0local14.AREA_2_X_COORDINATE = "AX2";
__s0local14.AREA_2_Y_COORDINATE = "AY2";
__s0local14.AREA_ID_2 = "ID";
__s0local14.AREA_NAME = "AN";
__s0local14.TOPIC_COUNT = "TC";
__s0local14.TOPICS = "T";
__s0local14.ALLIANCE_RANK_2 = "AR";
__s0local14.TOPIC_NAME_2 = "N";
__s0local14.TOPIC_CREATION_TIMESTAMP = "CT";
__s0local14.TOPIC_CREATOR_RANK = "CR";
__s0local14.REPLY_COUNT = "RC";
__s0local14.LAST_REPLY_CREATOR_NAME = "LRN";
__s0local14.LAST_REPLY_CREATION_TIMESTAMP = "LRT";
__s0local14.TOPIC_IS_READ = "R";
__s0local14.REPLIES = "R";
__s0local14.HELP_TYPE_ID = "TID";
__s0local14.MESSAGE_AGE = "MA";
__s0local14.HAS_ALREADY_CONFIRMED = "AC";
__s0local14.OPTIONAL_PARAMETERS = "OP";
__s0local14.ALLIANCE_HELP_LIST = "AHL";
__s0local14.MESSAGE_3 = "MT";
__s0local14.SOURCE_ID = "SID";
__s0local14.NPC_OWNER_ID = "NID";
__s0local14.CURRENCY_1_STORED = "SC1";
__s0local14.CURRENCY_2_STORED = "SC2";
__s0local14.WOOD_STORED_2 = "SW";
__s0local14.FREE_RENAMES = "FR";
__s0local14.IS_AUTO_WAR_ENABLED = "AW";
__s0local14.APPLICATION_AMOUNT = "AA";
__s0local14.REQUESTED_DELETE_TIME = "RT";
__s0local14.HAS_PACT_CAP_REACHED = "HP";
__s0local14.IS_LOOKING_FOR_MEMBERS = "IS";
__s0local14.BUFF_LEVELS = "BL";
__s0local14.BUFF_COOLDOWNS = "BC";
__s0local14.IS_INVENTORY_FULL = "IF";
__s0local14.ALLIANCE_LOGS = "AL";
__s0local14.BACKGROUND_TYPE = "BGT";
__s0local14.BACKGROUND_COLOR_1 = "BGC1";
__s0local14.BACKGROUND_COLOR_2 = "BGC2";
__s0local14.BACKGROUND_COLOR_3 = "BGC3";
__s0local14.SYMBOL_POSITION_TYPE = "SPT";
__s0local14.EMBLEM_SYMBOL_1_COLOR = "SC1";
__s0local14.EMBLEM_SYMBOL_2_COLOR = "SC2";
__s0local14.EMBLEM_SYMBOL_3_ID = "S3";
__s0local14.EMBLEM_SYMBOL_3_COLOR = "SC3";
__s0local14.MEMBER_COUNT = "M";
__s0local14.PACKAGE_ID_LIST = "PIDL";
__s0local14.IGNORED_PLAYERS = "IPS";
__s0local14.PLAYER_NAME_2 = "N";
__s0local14.OWNER_PLAYER_ID = "OID";
__s0local14.IS_DUMMY = "DUM";
__s0local14.SKIP_COST_PER_MINUTE = "CPM";
__s0local14.SKIP_LEVEL = "SL";
__s0local14.SINGLE_PLAYER = "SP";
__s0local14.ROTATION_INDEX = "RIDX";
__s0local14.ALLIANCE_RANKING_INFO = "A";
__s0local14.TOTAL_HOURS = "TH";
__s0local14.TARGET_PLAYER_ID = "PID";
__s0local14.HAS_WON = "HW";
__s0local14.AREA = "A";
__s0local14.HAS_FINISHED = "F";
__s0local14.ANNOUNCED_EVENT_ID = "AEID";
__s0local14.HAS_COLLECTED_REWARDS = "COL";
__s0local14.THEME = "T";
__s0local14.ATTACKABLE_CAMPS = "AC";
__s0local14.LAST_SKIPPABLE_SECOND = "SEC";
__s0local14.IS_ALREADY_COLLECTED = "AC";
__s0local14.POINT_EVENT_TYPE = "PET";
__s0local14.WINNING_CATEGORY = "WC";
__s0local14.SUB_EVENT_ID = "SEID";
__s0local14.REAL_PRICE = "RP";
__s0local14.IS_TIMELESS = "TML";
__s0local14.TIME_IN_SECONDS = "TS";
__s0local14.SCALE_FACTOR = "SC";
__s0local14.OCCUPIER_ID = "OCID";
__s0local14.MOVEMENT_TYPE = "T";
__s0local14.MEMBER_BUFF_LEVEL = "ML";
__s0local14.INVITER_ID = "INV";
__s0local14.CONNECTIONS = "CON";
__s0local14.IS_ONLINE = "ION";
__s0local14.IS_INVITER = "IIN";
__s0local14.IS_REFERRED = "IRF";
__s0local14.USING_ONLY_CURRENCY_2 = "OC2";
__s0local14.IS_FORCED_CANCELABLE = "FC";
__s0local14.IS_GROUPED_HIGHSCORE = "IGH";
__s0local14.CURRENCY_CODE = "CC";
__s0local14.VOUCHER_CODE = "VC";
__s0local14.PRICE_DATA = "PD";
__s0local14.LIFETIME_SPENT_C2 = "LTS";
__s0local14.C2_SPENT_90_DAYS = "SND";
__s0local14.USE_90_DAYS_SPENT = "UNDS";
__s0local14.BOUGHT_C2 = "BC2";
__s0local14.C2_SOURCE = "C2SRC";
__s0local14.SEND_ONE_PAY_POPUP = "PB";
__s0local14.IS_PAY_USER = "PU";
__s0local14.PAYMENT_DOPPLER_COUNT = "DC";
__s0local14.LAST_PAY_DATE = "LPD";
__s0local14.FIRST_PAY_DATE = "FPD";
__s0local14.KINGDOM_FAME_BOOST = "KFB";
__s0local14.LEVEL_RANGE = "LR";
__s0local14.NTH_TARGET = "N";
__s0local14.FACEBOOK_LOGIN_CLIENT_TRACKING = "FBD";
__s0local14.USER_SURVEY_SEEN_CLIENT_TRACKING = "USS";
__s0local14.MOBILE_ADVERTISING_ID = "ADID";
__s0local14.APPSFLYER_UID = "AFUID";
__s0local14.IOS_IDFV = "IDFV";
__s0local14.TEST_ID = "TID";
__s0local14.TEST_CASE_ID = "CID";
__s0local14.PACKAGE_INSTALLER_ID = "PAID";
__s0local14.PRE_INSTALL_ID = "PRID";
__s0local14.SLOT_TYPE = "ST";
__s0local14.RECRUITMENT_MODE = "RM";
__s0local14.RECRUITMENT_LIST_ID = "LID";
__s0local14.RECRUITMENT_LIST_ID_2 = "RLID";
__s0local14.HOSPITAL_SLOT_OVERVIEW = "SOH";
__s0local14.RECRUITMENT_SNAPSHOT = "RS";
__s0local14.CURRENT_FOOD_CONSUMPTION = "CFC";
__s0local14.CURRENT_RECRUITMENT_TIME = "CRT";
__s0local14.ADDITIONAL_FOOD_CONSUMPTION = "AFC";
__s0local14.ADDITIONAL_RECRUITMENT_TIME = "ART";
__s0local14.CURRENT_BOOST_STAGE = "CBS";
__s0local14.INITIAL_AMOUNT = "IA";
__s0local14.DOUBLING_COST_C2 = "DC";
__s0local14.PRODUCTIVITY = "P";
__s0local14.FOOD_PRODUCTION = "FP";
__s0local14.ERROR_ID = "EID";
__s0local14.COST_WOOD = "CW";
__s0local14.COST_STONE = "CS";
__s0local14.INITIAL_COMPLETION_TIME = "ICT";
__s0local14.RECEIVED_ALLIANCE_HELP = "RAH";
__s0local14.REMAINING_COMPLETION_TIME = "RCT";
__s0local14.TOTAL_UNIT_AMOUNT = "TUA";
__s0local14.PRODUCTION_SLOT = "PS";
__s0local14.QUEUE_SLOTS = "QS";
__s0local14.PACKAGE = "P";
__s0local14.SLOT_INFO = "SI";
__s0local14.REMAINING_UNLOCK_TIME = "RUT";
__s0local14.UNLOCKED_BY_VIP = "VIP";
__s0local14.SOURCE_PACKAGE_ID = "SPID";
__s0local14.TOTAL_COMPLETION_TIME = "TCT";
__s0local14.NEW_UNIT_AMOUNT = "NUA";
__s0local14.RECEIVED_UNIT_AMOUNT = "RUA";
__s0local14.DIALOG_NAME = "DN";
__s0local14.ACTION = "A";
__s0local14.STATE_LAYOUT = "SL";
__s0local14.ANNOUNCEMENT_AVAILABLE = "AA";
__s0local14.ANNOUNCEMENT_MESSAGES = "A";
__s0local14.ANNOUNCEMENT_ID = "ID";
__s0local14.ANNOUNCEMENT_IDS = "IDS";
__s0local14.ANNOUNCEMENT_LANGUAGE = "L";
__s0local14.ANNOUNCEMENT_FILTER = "F";
__s0local14.ANNOUNCEMENT_TITLE = "T";
__s0local14.ANNOUNCEMENT_MESSAGE = "M";
__s0local14.ANNOUNCEMENT_FILTER_PLAYER_LEVEL_MIN = "LMIN";
__s0local14.ANNOUNCEMENT_FILTER_PLAYER_LEVEL_MAX = "LMAX";
__s0local14.ANNOUNCEMENT_FILTER_PAY_USER = "PU";
__s0local14.ANNOUNCEMENT_FILTER_OS_TYPE = "OS";
__s0local14.ANNOUNCEMENT_FILTER_OS_TYPE_IOS = "ios";
__s0local14.ANNOUNCEMENT_FILTER_OS_TYPE_ANDROID = "android";
__s0local14.ANNOUNCEMENT_FILTER_STORE = "S";
__s0local14.ANNOUNCEMENT_FILTER_STORE_AMAZON = "amazon";
__s0local14.ANNOUNCEMENT_FILTER_STORE_APPLE = "apple";
__s0local14.ANNOUNCEMENT_FILTER_STORE_GOOGLE = "google";
__s0local14.ANNOUNCEMENT_FILTER_STORE_SAMSUNG = "samsung";
__s0local14.ANNOUNCEMENT_FILTER_OS_VERSION_MIN = "OSMIN";
__s0local14.ANNOUNCEMENT_FILTER_OS_VERSION_MAX = "OSMAX";
__s0local14.ACTIVE_RESEARCH_ID = "ARID";
__s0local14.ACTIVE_RESEARCH_REMAINING_TIME = "ARRT";
__s0local14.BOUGHT_RESEARCHES = "BR";
__s0local14.DEVICE_MODEL = "DM";
__s0local14.MOBILE_NETWORK_ID = "MNID";
__s0local14.PROMOTION_BANNER_ID = "PID";
__s0local14.CHANCE = "CH";
__s0local14.VILLAGE_ID = "VID";
__s0local14.XML_VILLAGE_ID = "XID";
__s0local14.VILLAGE_TYPE = "VT";
__s0local14.VILLAGE_LEVEL = "VL";
__s0local14.PRIVATE_RESOURCE_VILLAGES = "PV";
__s0local14.RESOURCE_VILLAGE_TOKEN = "RVT";
__s0local14.SKILL_ID = "ID";
__s0local14.SKILL_IDS = "IDS";
__s0local14.SKILL_IDS_2 = "SID";
__s0local14.LEGEND_SKILLS = "LS";
__s0local14.RESET_COUNT = "RC";
__s0local14.SCEAT_SKILL_IDS = "SIDS";
__s0local14.SCEAT_SKILL_ACTIVATIONS = "SSA";
__s0local14.SCEAT_SKILLS_TAB_ID = "TID";
__s0local14.SUBSCRIPTION_TYPE_ID = "STID";
__s0local14.ALLIANCE_SUBSCRIBERS_COUNT = "ASC";
__s0local14.SUBSCRIPTION_PACKAGES = "SP";
__s0local14.REMAINING_SECONDS_WITH_GRACE_PERIOD = "RSGP";
__s0local14.SUBSCRIPTION_LOYALTY_BOOST = "SLB";
__s0local14.ALLIANCE_RAGE = "AR";
__s0local14.ALLIANCE_CAMP = "AC";
__s0local14.ALLIANCE_CAMP_ID = "ACID";
__s0local14.ALLIANCE_CAMP_ENABLED = "ACE";
__s0local14.ALLIANCE_CAMP_VICTORY_COUNT = "ACVC";
__s0local14.PLAYER_RAGE_POINTS_TYPE = "PRPT";
__s0local14.PLAYER_CURRENT_RAGE_POINTS = "PCRP";
__s0local14.PLAYER_TOTAL_RAGE_POINTS = "PTRP";
__s0local14.REWARD_SET_ID = "RSID";
__s0local14.END_REWARD_VALUE = "ERV";
__s0local14.START_TIMESTAMP = "ST";
__s0local14.EXPIRED_EQUIPMENTS = "EE";
__s0local14.REGULAR_DECORATIONS = "RD";
__s0local14.CUSTOM_DECORATIONS = "CD";
__s0local14.UNIQUE_DECORATIONS = "UD";
__s0local14.STORAGE_ID = "SID";
__s0local14.FUSION_FORGE_ID = "FID";
__s0local14.FUSION_FORGE_IDS = "FIDS";
__s0local14.FUSION_FORGE_ENERGY = "FE";
__s0local14.FUSION_FORGE_LEVEL = "FL";
__s0local14.FUSION_FORGE_ENERGY_RECHARGE_INTERVAL_PROGRESS_IN_SECONDS = "FRS";
__s0local14.FUSION_FORGE_USED_MINUTE_SKIPS = "FUM";
__s0local14.FUSION_FORGE_USED_PREMIUM_SKIPS = "FUPS";
__s0local14.FUSION_FORGE_INFO = "FI";
__s0local14.FUSION_FORGE_SKIP_RECHARGE_USE_PREMIUM = "FSRP";
__s0local14.FUSION_FORGE_SKIP_RECHARGE_MINUTE_SKIP_ID = "FSRMID";
__s0local14.FUSION_FORGE_CATALYST_CONVERSION_DIRECTION = "FCCD";
__s0local14.FUSION_FORGE_CATALYST_ID = "FCID";
__s0local14.FUSION_FORGE_CATALYST_CONVERSION_AMOUNT = "FCCA";
__s0local14.FUSION_FORGE_FUSE_USE_PREMIUM = "FFFP";
__s0local14.FUSION_SOURCE_UNIQUE_DECORATION_ID = "FSUID";
__s0local14.FUSION_SOURCE_WOD_ID = "FSWID";
__s0local14.FUSION_TARGET_UNIQUE_DECORATION_ID = "FTUID";
__s0local14.FUSION_TARGET_WOD_ID = "FTWID";
__s0local14.FUSION_TARGET_OBJECT_ID = "FTOID";
__s0local14.FUSION_TARGET_SPACE_ID = "FTSID";
__s0local14.FUSION_TARGET_AREA_ID = "FTAID";
__s0local14.FUSION_XP = "FXP";
__s0local14.BONUS_FUSION_XP = "BFXP";
__s0local14.AUTO_SELL_EQUIPMENT_CONDITIONS = "ECS";
__s0local14.AUTO_SELL_GEM_CONDITIONS = "GCS";
__s0local14.POPOVER_ID = "ID";
__s0local14.POPOVER_DATA = "D";
__s0local14.PUSH_NOTIFICATION_CATEGORY_ACTIVE = "A";
__s0local14.PUSH_NOTIFICATION_DEVICE_TOKEN = "D";
__s0local14.PUSH_NOTIFICATION_CATEGORIES = "C";
__s0local14.PUSH_NOTIFICATION_DEVICE_PLATFORM = "PL";
__s0local14.GLOBALSERVER_LOGIN_TOKEN = "TLT";
__s0local14.COUNTRY_CODE = "CC";
__s0local14.REGISTRATION_IP = "IP";
__s0local14.GLOBALSERVER_ZONE = "TSZ";
__s0local14.GLOBALSERVER_IP = "TSIP";
__s0local14.GLOBALSERVER_PORT = "TSP";
__s0local14.IS_TEMPSERVER = "ITS";
__s0local14.DEVICE_ID = "DID";
__s0local14.TEMPSERVER_TOKEN_PLATFORM_ID = "PPID";
__s0local14.NETWORK_ID = "NID";
__s0local14.DAILY_POINTS_MIN_MODIFIER = "DPMM";
__s0local14.DAILY_POINTS_MAX_MODIFIER = "DPXM";
__s0local14.PREBUILT_CASTLE_ID = "PBCI";
__s0local14.SETTING_ID = "TSID";
__s0local14.RUNTIME_IN_DAYS = "TSR";
__s0local14.TEMP_SERVER_BUILDING_MIGHT = "TSBM";
__s0local14.TEMP_SERVER_COLLECTOR_KEYS = "TCK";
__s0local14.IS_PRESET_SELECTED = "IPS";
__s0local14.DAILY_RANK = "DR";
__s0local14.DAILY_HIGHSCORE = "DHS";
__s0local14.TEMP_SERVER_CAMP_ID = "TSCI";
__s0local14.TEMP_SERVER = "TS";
__s0local14.PLAYER_DAILY_TASK_REWARD_ID = "DTR";
__s0local14.PLAYER_DAILY_TASK_REWARD_LEVEL = "DTRL";
__s0local14.PLAYER_DAILY_TASK_POINTS = "DTP";
__s0local14.IS_SUPPORT_LOGIN = "ISL";
__s0local14.IS_COLLECTOR_ATTACK = "ICA";
__s0local14.COLLECTOR_KEYS = "CK";
__s0local14.COLLECTOR_SECONDS_TO_DAILY_PAYOUT = "SDP";
__s0local14.COLLECTOR_EVENT_OPTION_ID = "EOID";
__s0local14.COLLECTOR_CURRENCY_AMOUNT = "CCA";
__s0local14.TRIGGER_EVENTS = "TE";
__s0local14.TRIGGER_ID = "TRID";
__s0local14.SEASON_RUNTIME = "KLRT";
__s0local14.SEASON_REMAINING_DAYS = "KLRD";
__s0local14.SEASON_MODE_ENABLED = "KL";
__s0local14.SEASON_DIVISION = "KLD";
__s0local14.SEASON_DIVISION_ID = "KLDID";
__s0local14.SEASON_DIVISION_SIZE = "KLDS";
__s0local14.SEASON_POINTS = "KLCP";
__s0local14.SEASON_MEDALS = "KLM";
__s0local14.SEASON_MEDALS_OVERVIEW = "KLMO";
__s0local14.SEASON_MEDAL_ID = "KLMID";
__s0local14.SEASON_RANK = "KLR";
__s0local14.SEASON_RANK_ID = "KLRID";
__s0local14.SEASON_MEDAL_POINTS = "KLMP";
__s0local14.SEASON_PASS_ENABLED = "KLP";
__s0local14.SEASON_PASS = "KLSP";
__s0local14.SEASON_SEEN_EVENT_START = "KLSE";
__s0local14.SEASON_SEEN_START = "KLS";
__s0local14.SEASON_ALLIANCE_RANKING_ENABLED = "KLARE";
__s0local14.SEASON_ALLIANCE_POINTS = "KLAP";
__s0local14.SEASON_ALLIANCE_MEDAL_ID = "KLAMID";
__s0local14.SEASON_ALLIANCE_RANK = "KLAR";
__s0local14.SEASON_ALLIANCE_MEDALS = "KLAM";
__s0local14.SEASON_LEAGUE_TYPE_ID = "KLLID";
__s0local14.SEASON_PROMOTION_PASSES = "KLPP";
__s0local14.SEASON_EVENT_PASS_ENABLED = "KLEPE";
__s0local14.SEASON_PASS_TYPE = "KLPT";
__s0local14.SEASON_ID = "KLID";
__s0local14.SEASON_PROMOTION_PASS_ENABLED = "KLPPE";
__s0local14.GLOBAL_EFFECTS = "GE";
__s0local14.SEEN_GLOBAL_EFFECTS = "SGE";
__s0local14.GLOBAL_EFFECT_BOOSTERS = "GEB";
__s0local14.GLOBAL_EFFECT_ID = "GEID";
__s0local14.BOOST_VALUE = "BV";
__s0local14.USE_PREMIUM_RELIC_ALLIANCE_FORGE = "UPRAF";
__s0local14.MAY_FORGE = "MF";
__s0local14.SOFT_CURRENCY_RELIC_ALLIANCE_FORGE_USES = "SRFU";
__s0local14.HARD_CURRENCY_RELIC_ALLIANCE_FORGE_USES = "HRFU";
__s0local14.DONATE_CURRENCY_ID = "CID";
__s0local14.DONATE_CURRENCY_AMOUNT = "A";
__s0local14.NEW_RELICS = "NR";
__s0local14.RELIC_ITEM_ID = "RIID";
__s0local14.IS_GEM = "IG";
__s0local14.EXPANDABLE_AREAS = "EA";
__s0local14.REWARD_OBJECT_TYPE = "ROT";
__s0local14.REWARD_OBJECT_VALUE = "ROV";
__s0local14.EXPIRE_TIME = "ET";
__s0local14.LOST_AND_FOUND_ID = "LFID";
__s0local14.CREATION_TIMESTAMP = "CT";
__s0local14.RELIC_GEM = "GEM";
__s0local14.RELIC_EQUIPMENT = "EQ";
__s0local14.LOST_AND_FOUND_ELAPSED_SECONDS = "LFES";
__s0local14.USE_PREMIUM = "P";
__s0local14.LOCKED_SLOTS = "LS";
__s0local14.TRAINING_PROGRAMS = "TP";
__s0local14.TRAINING_EFFECT = "TE";
__s0local14.ACTIVE_TRAINING = "AT";
__s0local14.TRAINING_PROLONG_COUNTER = "PC";
__s0local14.DAIMYO_INFO = "DY";
__s0local14.DAIMYO_ENABLED = "E";
__s0local14.DAIMYO_CASTLES = "DC";
__s0local14.DAIMYO_TOWNSHIPS = "DT";
__s0local14.DAIMYO_ALLIANCE_CONTRACTS = "C";
__s0local14.DAIMYO_CASTLE_CONTRACTS = "DCC";
__s0local14.DAIMYO_TOWNSHIP_CONTRACTS = "DTC";
__s0local14.DAIMYO_WAR_EFFORTS = "WES";
__s0local14.DAIMYO_TOTAL_WAR_EFFORT = "TWE";
__s0local14.DAIMYO_CASTLE_WAR_EFFORTS = "CWES";
__s0local14.DAIMYO_TOWNSHIP_WAR_EFFORTS = "TWES";
__s0local14.DAIMYO_COOLDOWN_COUNTER = "CDC";
__s0local14.SAMURAI_MEDAL_BOOSTER_KEYS = "SMK";
__s0local14.SHOGUN_POINTS = "SP";
__s0local14.SHOGUN_POINT_BOOSTER_KEYS = "SPK";
__s0local14.DAIMYO_AREA_RANK = "DAR";
__s0local14.DAIMYO_DIFFICULTY_CAMP_ID = "DDCID";
__s0local14.RELIC_ENCHANTER_ENABLED = "E";
__s0local14.RELIC_FRAGMENT_BOOST = "RFB";
__s0local14.WEB_SHOP_SESSION_ID = "sessionId";
__s0local14.WEB_SHOP_PACKAGE_ID = "packageId";
__s0local14.CASH_OFFER_ID = "cashOfferId";
__s0local14.API_TOKEN = "apiToken";
__s0local14.AUTH_PLATFORM = "platform";
__s0local14.APPLE_TOKEN = "appleToken";
__s0local14.APPLE_ID = "appleId";
__s0local14.APPLE_AUTH_CODE = "authCode";
__s0local14.ALLIANCE_LEADER_PLAYER_ID = "ALPI";
__s0local14.ALLIANCE_BATTLEGROUND_CAMP_ID = "BGCI";
__s0local14.GLOBAL_SERVER_TYPE = "GST";
__s0local14.MAX_ALLIANCE_SIZE = "MAS";
__s0local14.MAX_INFLUENCE_POINTS = "MIP";
__s0local14.ALLIANCE_REWARD_ID = "ARID";
__s0local14.PLAYER_REWARD_ID = "PRID";
__s0local14.PLAYER_STATISTIC_ID = "PSI";
__s0local14.PLAYER_STATISTICS = "PST";
__s0local14.ALLIANCE_MEMBERS_STATISTICS = "AME";
__s0local14.CAPITAL_AMOUNT = "CPA";
__s0local14.CAPITAL_LIMIT = "CPL";
__s0local14.CITY_STATES_AMOUNT = "CSA";
__s0local14.CITY_STATES_PLAYER_LIMIT = "CSPL";
__s0local14.CITY_STATES_ALLIANCE_LIMIT = "CSAL";
__s0local14.TOWER_AMOUNT = "TWM";
__s0local14.TOWER_PLAYER_LIMIT = "TPL";
__s0local14.TOWER_ALLIANCE_LIMIT = "TAL";
__s0local14.GLOBAL_SERVER_PLAYER_RANK = "PLR";
__s0local14.GLOBAL_SERVER_PLAYER_RANK_POINTS = "PLP";
__s0local14.GLOBAL_SERVER_ALLIANCE_RANK = "ALR";
__s0local14.GLOBAL_SERVER_ALLIANCE_RANK_POINTS = "ALP";
__s0local14.ALLIANCE_AREAS_INFO = "AAI";
__s0local14.SECONDS_TILL_NEXT_REVIVE = "STNR";
__s0local14.SECONDS_TILL_NEXT_RE_LINK = "STNL";
__s0local14.TOWERS = "T";
__s0local14.TOWER_EFFECTS = "TE";
__s0local14.TOWER_EFFECT_ACTIVE = "TEA";
__s0local14.TOWER_EFFECT_ID = "TEID";
__s0local14.EFFECT_LEVEL_BEFORE_INCREASE = "ELBI";
__s0local14.EFFECT_LEVEL_AFTER_INCREASE = "ELAI";
__s0local14.REMAINING_JOIN_TIME = "RJT";
__s0local14.ALLIANCE_BATTLE_GROUND = "ABG";
__s0local14.GLOBAL_SERVER_INFO = "GSI";
__s0local14.MAP_TYPE = "MTYP";
__s0local14.END_TIMESTAMP = "ET";
__s0local14.PLAYER_ID_FULL = "playerId";
__s0local14.PAYLOAD = "payload";
__s0local14.CXF_PUSH_TOPIC = "topic";
__s0local14.CXF_BROADCAST_TOPIC = "topic";
__s0local14.LUCKY_WHEEL_EVENT_TYPE = "LWET";
__s0local14.LUCKY_WHEEL_TICKETS = "LWT";
__s0local14.DISTRICT_OBJECT_ID = "DOID";
__s0local14.FORTUNE_TELLER_DRAW_COUNT = "FTDC";
__s0local14.FORTUNE_TELLER_REWARD_ID_CHANCES = "FTRC";
__s0local14.VISUAL_COMPONENT_METADATA = "VCM";
__s0local14.FILTER_ID = "FID";
__s0local14.IS_ACTIVATION = "ACT";
__s0local14.ACTIVE_FILTERS = "AFS";
__s0local14.EMBLEM_UNLOCKED_SYMBOL_IDS = "U";
__s0local14.EMBLEM_PAID_SYMBOL_IDS = "P";
__s0local14.DOWNTIME_STATUS = "DTS";
__s0local14.PARENT_OFFER_ID = "POID";
__s0local14.SILENT_RECONNECT_ENABLED = "SRC";
__s0local14.SILENT_RECONNECT_ISO_ENABLED = "SRI";
__s0local14.IGS_REDIRECT_TO_HC_ENABLED = "ISR";
__s0local14.HOSPITAL_RUBY_FILTER = "HRF";
__s0local14.PRIORITISE_PRODUCTION_OVER_TROOPS = "PPOT";
__s0local14.HAS_ALLIANCE_ENTERED = "AE";
__s0local14.INTERNAL_RANK = "IR";
__s0local14.HAS_PLAYER_ENTERED = "PE";
__s0local14.HAS_ALLIANCE = "HA";
__s0local14.ALLIANCE_REWARD_IDS = "ARIDS";
__s0local14.PLAYER_REWARD_IDS = "PRIDS";
__s0local14.FEAST_REDUCTION_MODIFIER = "FRM";
__s0local14.PING = "ping";
__s0local14.PARENT_PARTITION_KEY = "parentPartitionKey";
__s0local14.HUB_REWARD_ID = "hubRewardID";
__s0local14.PARENT_SORT_KEY = "parentSortKey";
__s0local14.PARENT_STILL_ACTIVE = "parentStillActive";
__s0local14.EXTRA_TIER_UNLOCKED_BY_PARENT = "extraTierUnlockedByParent";
__s0local14.EXTRA_TIER_UNLOCK_COST_C_2 = "extraTierUnlockCostC2";
__s0local14.EXTRA_TIER_UNLOCKED = "extraTierUnlocked";
__s0local14.UNLOCK_TIMESTAMP = "unlockTimestamp";
__s0local14.BASIC_TIER = "basicTier";
__s0local14.EXTRA_TIER = "extraTier";
__s0local14.COLLECTED = "collected";
__s0local14.REWARD_HUB_REWARD_IDS = "rewardIds";
__s0local14.VISUAL_COMPONENT = "visualComponent";
__s0local14.REWARD_HUB_EVENT_ID = "eventID";
__s0local14.REWARD_HUB_SUB_EVENT_ID = "subEventID";
__s0local14.PROMOTION_ID = "promotionID";
__s0local14.COUNTERS = "counters";
__s0local14.PRE_UPGRADE_POPUP = "preUpgradePopup";
__s0local14.TRACKING_COMPONENT = "trackingComponent";
__s0local14.ERROR = "ERROR";
__s0local14.CORRELATION_ID = "correlationId";
__s0local14.PARENT_SORT_KEY_PREFIX = "parentSortKeyPrefix";
__s0local14.CRAFTING_RECIPE_ID = "CRID";
__s0local14.CRAFTING_QUEUE_ID = "CQID";
__s0local14.CRAFTING_BUILDINGS_INFO = "CBI";
__s0local14.CRAFTING_EFFECTS = "CE";
__s0local14.CRAFTING_QUEUE_BOOST_EFFECTS = "CQBE";
__s0local14.CRAFTING_AREA_INFO = "CAI";
__s0local14.PLATFORM_ID = "PLFID";
__s0local14.STORE_ID = "SID";
__s0local14.EVENT_DIFFICULTY_ID = "EDID";
__s0local14.EVENT_AUTO_SCALING_ENABLED = "EASE";
__s0local14.HIGHEST_THRESHOLD_REWARD = "HTR";
__s0local14.HAS_RECEIVED_ALLIANCE_REAWRDS = "HRAR";
__s0local14.RENT_C2_UNLOCK = "C2U";
__s0local14.PLAYER_NAME_CHANGE_COUNTER = "PNCC";
__s0local14.PLAYER_NAME_CHANGE_COOLDOWN = "PNCD";
__s0local14.ENABLE_RUBY_CONFIRMATION = "ERC";
__s0local14.DELETION_DATE_TIMESTAMP = "D";
__s0local14.IS_GDPR_DELETED = "GDPR";
__s0local14.PENDING_MAIL_ADDRESS = "PMA";
__s0local14.RESEND_MAIL_ACTION_TYPE = "T";
__s0local14.PENDING_MAIL_CHANGE_STATUS = "PMCS";
__s0local14.WELCOME_BACK_REWARD_ID = "WBRID";
__s0local14.WELCOME_BACK_REWARD_DATE = "WBRD";
__s0local14.WELCOME_BACK_REWARD_MIN_INACIVE_DAYS = "WBRMID";
__s0local14.ID = "ID";
__s0local14.CURRENCY_ID = "CID";
__s0local14.LOOTBOX_PAYOUT_ID = "LID";
__s0local14.ALL_LOOTBOXES = "ALL";
__s0local14.TOMBOLA_KEY = "KEY";
__s0local14.TOMBOLA_REWARDS_LIST = "LTR";
__s0local14.TOMBOLA_REWARDS_RESPONSE_LIST = "LTRR";
__s0local14.KEY_BAR_STATUS = "KBS";
__s0local14.TOMBOLA_KEY_BAR_FILLING_AMOUNT = "TBF";
__s0local14.KEY_TOMBOLA_REWARDS = "KTR";
__s0local14.USED_KEY_ID = "UKI";
__s0local14.CHARACTER_ID = "CID";
__s0local14.OFFERINGS_ID = "OID";
__s0local14.IS_FREE = "IF";
__s0local14.CHARACTERS = "CHR";
__s0local14.CHARACTER = "CH";
__s0local14.FREE_OPENINGS_AVAILABLE = "FOA";
__s0local14.LAST_FREE_OPENING = "LFO";
__s0local14.RARITY = "R";
__s0local14.REWARD_RESPONSE = "RR";
__s0local14.ALIAS_POPUP_SELECTION = "APS";
__s0local14.IGNORE_REWARD_GRANTING_CHECK = "IGC";
__s0local14.GENERAL_ID = "GID";
__s0local14.STAR_TIER = "ST";
__s0local14.IS_NEW = "IN";
__s0local14.LEVELLED_UP = "LU";
__s0local14.GENERAL_SKILL_IDS = "SIDS";
__s0local14.ABILITY_ID = "AID";
__s0local14.GENERAL_ASSIGNED_SLOT_AND_ABILITY_IDS = "GASAIDS";
__s0local14.SLOT_AND_ABILITY_IDS = "SAIDS";
__s0local14.OLD_XP = "OXP";
__s0local14.ATTACKER_ABILITIES = "AA";
__s0local14.DEFENDER_ABILITIES = "DA";
__s0local14.ENABLE_SPLITRUN_HARDCURRENCY_SHOP = "ESHS";
__s0local14.UNITS_YARD_LIMIT = "UYL";
__s0local14.ALLIANCE_YARD_UNITS_LIMIT = "AUYL";
__s0local14.UNITS_WALL_LIMIT = "UWL";
__s0local14.UNITS_YARD = "UY";
__s0local14.ALLIANCE_YARD_UNITS = "AUY";
__s0local14.UNITS_WALL = "UW";
__s0local14.REMAINING_SUPPORT_UNITS = "RSU";
__s0local14.FACEBOOK_LOGIN_BUTTON_DISABLE = "FLBD";
__s0local14.IS_CROSSPLAY_SERVER = "ICS";
__s0local14.GAME_ID = "GID";
__s0local14.IS_CROSSPLAY_SERVER_EVENT = "ICSE";
__s0local14.AUTO_SKIP_COOLDOWN_TYPE = "ASCT";
__s0local14.AUTO_SKIP_C2 = "ASC";
__s0local14.AUTO_SKIP_MINUTESKIPS = "ASMS";
__s0local14.AUTO_SKIP_SECONDS = "ASS";
__s0local14.DISABLE_RUBY_SHOP = "DRS";
__s0local14.RECAPTCHA_TOKEN = "RCT";
__s0local14.SKIN = "S";
__s0local14.DONATION_SETTING_ID = "DSI";
__s0local14.DONATION_ITEM_VALUES = "DIV";
__s0local14.DONATION_ITEM_ID = "DII";
__s0local14.DONATION_ITEM_AMOUNT = "DIA";
__s0local14.DONATED_ITEMS = "DIS";
__s0local14.DONATION_ITEM_POINTS = "DIP";
__s0local14.DONATION_EVENT_END_REWARD_IDS = "DEER";
__s0local14.DONATION_EVENT_END_TYPE_POINTS = "DEETP";
__s0local14.EFFECT_SOURCE_EQUIPMENT = "EQ";
__s0local14.EFFECT_SOURCE_BUILDING = "BG";
__s0local14.EFFECT_SOURCE_CONSTRUCTION_ITEM = "CI";
__s0local14.EFFECT_SOURCE_OTHER = "OTH";
__s0local14.EFFECT_SOURCE_DECORATION = "DE";
__s0local14.EFFECT_SOURCE_ALLIANCE_BUFF = "AB";
__s0local14.EFFECT_SOURCE_CREST_SYMBOL = "CS";
__s0local14.EFFECT_SOURCE_GLOBAL_EFFECT = "GE";
__s0local14.EFFECT_SOURCE_PRIVATE_VILLAGE = "PV";
__s0local14.EFFECT_SOURCE_TITLE = "TL";
__s0local14.EFFECT_SOURCE_RESEARCH = "RH";
__s0local14.EFFECT_SOURCE_ALLIANCE_SUBSCRIPTION = "AS";
__s0local14.EFFECT_SOURCE_PLAYER_SUBSCRIPTION = "PS";
__s0local14.EFFECT_SOURCE_BARON_ADVISOR_SUBSCRIPTION = "BAS";
__s0local14.EFFECT_SOURCE_ALLIANCE_COAT = "AC";
__s0local14.EFFECT_SOURCE_GENERAL = "GNL";
__s0local14.EFFECT_SOURCE_TRAINING = "TG";
__s0local14.EFFECT_SOURCE_HIGH_LEVEL_HOL = "HLH";
__s0local14.EFFECT_SOURCE_TOOLS = "TLS";
__s0local14.EFFECT_SOURCE_SOLDIER = "SR";
__s0local14.EFFECT_SOURCE_RAID_BOSS_STAGE_DEFENDER = "RBSD";
__s0local14.EFFECT_SOURCE_RAID_BOSS_STAGE_ATTACKER = "RBSA";
__s0local14.EFFECT_SOURCE_RAID_BOSS_BATTLE_DEFENDER = "RBBD";
__s0local14.EFFECT_SOURCE_RAID_BOSS_BATTLE_ATTACKER = "RBBA";
__s0local14.EFFECT_SOURCE_RAID_BOSS_POST_BATTLE_DEFENDER = "RBPBD";
__s0local14.EFFECT_SOURCE_RAID_BOSS_POST_BATTLE_ATTACKER = "RBPBA";
__s0local14.EFFECT_SOURCE_RAID_BOSS_WALL_REGENERATION = "RBWR";
__s0local14.DATA = "DATA";
__s0local14.DISABLE_HELPSHIFT_CHAT = "DHSC";
__s0local14.LEADERBOARD_TYPE = "LT";
__s0local14.LEADERBOARD_MAX_RESULTS = "M";
__s0local14.LEADERBOARD_LIST = "L";
__s0local14.LEADERBOARD_NUM_SCORES = "T";
__s0local14.LEADERBOARD_SCORE_ID = "SI";
__s0local14.LEADERBOARD_RANK = "R";
__s0local14.LEADERBOARD_PLAYER_NAME = "P";
__s0local14.LEADERBOARD_ALLIANCE_NAME = "A";
__s0local14.LEADERBOARD_SERVER_INSTANCE = "I";
__s0local14.LEADERBOARD_SCORE = "S";
__s0local14.LEADERBOARD_REWARD_SET_ID = "LRSI";
__s0local14.LEADERBOARD_SCORE_METADATA = "SM";
__s0local14.DIVISION_ID = "DI";
__s0local14.SUBDIVISION_ID = "SDI";
__s0local14.DIVISION_ROUND_ID = "DRI";
__s0local14.DIVISION_CHANGE_MESSAGE_EVENT_ID = "E";
__s0local14.DIVISION_CHANGE_MESSAGE_FOR_ALLIANCE = "A";
__s0local14.DIVISION_CHANGE_MESSAGE_START_DIVISION = "SD";
__s0local14.DIVISION_CHANGE_MESSAGE_END_DIVISION = "ED";
__s0local14.DIVISION_CHANGE_MESSAGE_RANK = "R";
__s0local14.DIVISION_CHANGE_MESSAGE_POINTS = "P";
__s0local14.DIVISION_CHANGE_MESSAGE_POINTS_TO_THRESHOLD = "PT";
__s0local14.ADVISOR_ATTACK_CURRENCY_ID = "ACI";
__s0local14.ADVISOR_ATTACK_IS_FREE = "AAF";
__s0local14.ADVISOR_ATTACK_IS_ACTIVATED = "AAA";
__s0local14.ADVISOR_ATTACK_TYPE = "AAT";
__s0local14.ADVISOR_ATTACK_COUNT = "AAC";
__s0local14.ADVISOR_ATTACK_NUMBER = "AAN";
__s0local14.ADVISOR_ATTACK_IS_LAST = "AAL";
__s0local14.ADVISOR_ATTACK_SEND_MESSAGE = "AASM";
__s0local14.ADVISOR_ATTACK_OVERVIEW_COMMANDERS = "C";
__s0local14.ADVISOR_ATTACK_OVERVIEW_GAINED = "G";
__s0local14.ADVISOR_ATTACK_OVERVIEW_GAINED_POINTS = "GP";
__s0local14.ADVISOR_ATTACK_OVERVIEW_LOST = "L";
__s0local14.ADVISOR_ATTACK_OVERVIEW_LOST_UNITS = "LU";
__s0local14.ADVISOR_ATTACK_OVERVIEW_LOST_TOOLS = "LT";
__s0local14.ADVISOR_ATTACK_OVERVIEW_WINS = "W";
__s0local14.ADVISOR_ATTACK_OVERVIEW_DEFEATS = "D";
__s0local14.ADVISOR_ATTACK_OVERVIEW_ABORTS = "P";
__s0local14.ATTACK_COUNT = "AC";
__s0local14.ATTACK_COUNT_THRESHOLD = "ACTH";
__s0local14.ATTACK_COUNT_GROWTH_RATE = "ACGR";
__s0local14.ALLIANCE_COAT_LAYOUTS = "ACLS";
__s0local14.ALLIANCE_COAT_LAYOUT_ID = "ACLI";
__s0local14.ALLIANCE_COAT_COLORS = "ACCS";
__s0local14.ALLIANCE_COAT_ISACTIVE = "ACIA";
__s0local14.ALLIANCE_COAT_LAYOUT_END_TIMESTAMP = "ACLET";
__s0local14.ALLIANCE_COAT_CURRENT_ACTIVE = "ACCA";
__s0local14.ALLIANCE_COAT_FALL_BACK = "ACFB";
__s0local14.ALLIANCE_COAT_LAYOUT = "ACL";
__s0local14.ALLIANCE_QUEST_STATUS = "AQS";
__s0local14.ALLIANCE_PARTICIPANT_COUNT = "APC";
__s0local14.ALLIANCE_QUEST_PLAYER_CONTRIBUTIONS = "AQPC";
__s0local14.RAID_BOSS_IDS = "RBIDS";
__s0local14.PORTAL_BOSS_ID = "BID";
__s0local14.BOSS_CARDS = "BCDS";
__s0local14.RAID_BOSS_CARD_STATUS = "CST";
__s0local14.UNLOCKED_LEVEL = "ULV";
__s0local14.PORTAL_BOSS_CREATION_TIME = "CT";
__s0local14.LEVEL_ID = "BLID";
__s0local14.WALL_INFO = "WI";
__s0local14.PERCENT_LEFT = "PL";
__s0local14.REGEN_TIME = "RT";
__s0local14.HEALTH = "HP";
__s0local14.BOSS_STAGE = "BS";
__s0local14.BOSS_STATUS = "BSE";
__s0local14.BOSS_LEVEL_PLAYER_POINTS = "BLPP";
__s0local14.REVIVE_UNIT_PERCENTAGE = "RUP";
__s0local14.ENABLE_NEWS_HUB = "ENH";
__s0local14.ENABLE_FREE_BARON_ADVISOR = "EFBA";
exports.CommKeys = __s0local14;
__s0local14.__class = "CommKeys";
var __s0local15 = function () {
  function ConditionConst() {}
  ConditionConst.calculateSpyCount = function (__s387param0) {
    return Math.min(__s0local19.MAX_SPY_COUNT, Math.ceil((__s387param0 - 4) / 10) | 0);
  };
  ConditionConst.amountOfTaxesToCollect = function (__s389param0) {
    return (Math.round((Math.exp(__s389param0 * 0.052) * 150 - 170) / 10) | 0) * 10;
  };
  ConditionConst.getLevelOfClassicDungeonToDestroy = function (__s391param0) {
    if (__s391param0 < 8) {
      return 1;
    } else {
      return Math.min(25, Math.ceil(25 / 65 * (__s391param0 - 6)) | 0);
    }
  };
  ConditionConst.calculateFameForFight = function (__s395param0, __s395param1) {
    return Math.round(Math.round(Math.pow(__s395param0, 5) * 1e-7 + 5) / 5) * 5 * __s395param1 | 0;
  };
  return ConditionConst;
}();
exports.ConditionConst = __s0local15;
__s0local15.__class = "ConditionConst";
var __s0local16 = function () {
  return function ConstantsSmartFox() {};
}();
__s0local16.C2S_RENAME_CASTLE = "arc";
__s0local16.S2C_RENAME_CASTLE = "arc";
__s0local16.S2C_SERVER_SHUTDOWN = "ssd";
__s0local16.S2C_GET_LOGIN_BONUS = "alb";
__s0local16.C2S_GET_LOGIN_BONUS = "alb";
__s0local16.C2S_CATCH_LOGIN_BONUS = "clb";
__s0local16.S2C_CATCH_LOGIN_BONUS = "clb";
__s0local16.C2S_STARTUP_LOGINBONUS_COLLECT = "slc";
__s0local16.S2C_STARTUP_LOGINBONUS_COLLECT = "slc";
__s0local16.C2S_STARTUP_LOGINBONUS_INFO = "sli";
__s0local16.S2C_STARTUP_LOGINBONUS_INFO = "sli";
__s0local16.C2S_EMAIL_VERIFIED = "lev";
__s0local16.C2S_CHANGE_EMBLEM = "cem";
__s0local16.S2C_CHANGE_EMBLEM = "cem";
__s0local16.C2S_CHOOSE_FREE_NAME = "lcn";
__s0local16.S2C_CHOOSE_FREE_NAME = "lcn";
__s0local16.C2S_CHOOSE_FREE_EMBLEM = "lce";
__s0local16.S2C_CHOOSE_FREE_EMBLEM = "lce";
__s0local16.S2C_COMEBACK_POPUP = "lcb";
__s0local16.S2C_ADMIN_FEEDBACK = "smg";
__s0local16.S2C_SHOW_POPUP = "msp";
__s0local16.C2S_UPDATE_PACKAGE_AND_PARTNER_IDS = "upp";
__s0local16.C2S_SET_META_DATA_EVENT = "dmd";
__s0local16.C2S_API_TOKEN_INFO = "ato";
__s0local16.S2C_API_TOKEN_INFO = "ato";
__s0local16.S2C_SEASON_EVENT = "sea";
__s0local16.C2S_SPECIAL_EVENT_INFO = "sei";
__s0local16.S2C_SPECIAL_EVENT_INFO = "sei";
__s0local16.S2C_ALLIANCE_TOURNAMENT_REWARD = "atr";
__s0local16.S2C_PRIVATE_PRIME_TIME_EVENT = "ppt";
__s0local16.S2C_SPECIAL_EVENT_END = "see";
__s0local16.C2S_POINT_EVENT_POINTS = "pep";
__s0local16.S2C_POINT_EVENT_POINTS = "pep";
__s0local16.C2S_SEASON_EVENT_PAY_UNLOCK = "spu";
__s0local16.S2C_SEASON_EVENT_PAY_UNLOCK = "spu";
__s0local16.C2S_SEASON_JOIN_EVENT = "sje";
__s0local16.S2C_SHOPPING_CART_REWARD = "spr";
__s0local16.C2S_BOUNTY_HUNTER_SKIP = "bst";
__s0local16.S2C_BOUNTY_HUNTER_SKIP = "bst";
__s0local16.BOUNTY_HUNTER_VALIDATE_OR_RESET_TARGET_EVENT = "brt";
__s0local16.C2S_TRIGGER_EVENT_INFO = "tei";
__s0local16.S2C_TRIGGER_EVENT_INFO = "tei";
__s0local16.S2C_TRIGGER_EVENT_END = "tee";
__s0local16.C2S_BUY_EVENTPACKAGE = "sbp";
__s0local16.S2C_BUY_EVENTPACKAGE = "sbp";
__s0local16.C2S_GET_PACKAGE_PRIZE = "gpp";
__s0local16.S2C_GET_PACKAGE_PRIZE = "gpp";
__s0local16.C2S_PLAYER_GIFT_LIST = "pgl";
__s0local16.S2C_PLAYER_GIFT_LIST = "pgl";
__s0local16.C2S_GRANT_PLAYER_GIFT = "gpg";
__s0local16.S2C_GRANT_PLAYER_GIFT = "gpg";
__s0local16.C2S_GET_ALLIANCE_INFO = "ain";
__s0local16.S2C_GET_ALLIANCE_INFO = "ain";
__s0local16.S2C_GET_ALLIANCE_BUFF_LIST = "abl";
__s0local16.C2S_FOUND_ALLIANCE = "afo";
__s0local16.S2C_FOUND_ALLIANCE = "afo";
__s0local16.C2S_ALLIANCE_INVITE_PLAYER = "aip";
__s0local16.S2C_ALLIANCE_INVITE_PLAYER = "aip";
__s0local16.C2S_ALLIANCE_ACTION_LIST = "all";
__s0local16.S2C_ALLIANCE_ACTION_LIST = "all";
__s0local16.C2S_ALLIANCE_QUIT = "aqi";
__s0local16.S2C_ALLIANCE_QUIT = "aqi";
__s0local16.C2S_GET_ALLIANCE_INVITATION = "bai";
__s0local16.S2C_GET_ALLIANCE_INVITATION = "bai";
__s0local16.C2S_ALLIANCE_ACCEPT_INVITE = "aai";
__s0local16.S2C_ALLIANCE_ACCEPT_INVITE = "aai";
__s0local16.S2C_ALLIANCE_CHAT_LOG = "acl";
__s0local16.C2S_ALLIANCE_CHAT_LOG = "acl";
__s0local16.C2S_ALLIANCE_CHAT = "acm";
__s0local16.S2C_ALLIANCE_CHAT = "acm";
__s0local16.C2S_ALLIANCE_CHAT_VISIBILITY = "acv";
__s0local16.S2C_ALLIANCE_CHAT_VISIBILITY = "acv";
__s0local16.C2S_ALLIANCE_ONLINE_MEMBERS = "aom";
__s0local16.S2C_ALLIANCE_ONLINE_MEMBERS = "aom";
__s0local16.C2S_ALLIANCE_DONATE = "ado";
__s0local16.S2C_ALLIANCE_DONATE = "ado";
__s0local16.C2S_ALLIANCE_UPGRADE = "aug";
__s0local16.S2C_ALLIANCE_UPGRADE = "aug";
__s0local16.C2S_ALLIANCE_CHANGE_NAME = "acn";
__s0local16.S2C_ALLIANCE_CHANGE_NAME = "acn";
__s0local16.C2S_ALLIANCE_CHANGE_DESCRIPTION = "acd";
__s0local16.S2C_ALLIANCE_CHANGE_DESCRIPTION = "acd";
__s0local16.C2S_ALLIANCE_NEWSLETTER = "anl";
__s0local16.S2C_ALLIANCE_NEWSLETTER = "anl";
__s0local16.C2S_ALLIANCE_KICK_MEMBER = "akm";
__s0local16.S2C_ALLIANCE_KICK_MEMBER = "akm";
__s0local16.C2S_ALLIANCE_RERANK_MEMBER = "arm";
__s0local16.S2C_ALLIANCE_RERANK_MEMBER = "arm";
__s0local16.C2S_ALLIANCE_CHANGE_DIPLOMACY = "adp";
__s0local16.S2C_ALLIANCE_CHANGE_DIPLOMACY = "adp";
__s0local16.C2S_ALLIANCE_REFUSE_DIPLOMACY = "ard";
__s0local16.S2C_ALLIANCE_REFUSE_DIPLOMACY = "ard";
__s0local16.C2S_ALLIANCE_GET_FAME = "afa";
__s0local16.S2C_ALLIANCE_GET_FAME = "afa";
__s0local16.C2S_ALLIANCE_SET_SEARCH_ALLIANCE = "asa";
__s0local16.S2C_ALLIANCE_SET_SEARCH_ALLIANCE = "asa";
__s0local16.C2S_ALLIANCE_SEND_APPLICATION = "saa";
__s0local16.S2C_ALLIANCE_SEND_APPLICATION = "saa";
__s0local16.C2S_ALLIANCE_APPLICATION_LIST = "aal";
__s0local16.S2C_ALLIANCE_APPLICATION_LIST = "aal";
__s0local16.C2S_ALLIANCE_ANSWER_APPLICATION = "aaa";
__s0local16.C2S_JOIN_OPEN_ALLIANCE = "joa";
__s0local16.S2C_JOIN_OPEN_ALLIANCE = "joa";
__s0local16.C2S_ALLIANCE_SET_SEARCH_MEMBER = "asm";
__s0local16.S2C_ALLIANCE_SET_SEARCH_MEMBER = "asm";
__s0local16.C2S_AUTO_ALLIANCE_SEARCH = "aas";
__s0local16.S2C_AUTO_ALLIANCE_SEARCH = "aas";
__s0local16.C2S_ALLIANCE_HELP_LIST = "ahl";
__s0local16.S2C_ALLIANCE_HELP_LIST = "ahl";
__s0local16.S2C_ALLIANCE_HELP_FEEDBACK = "ahf";
__s0local16.C2S_ALLIANCE_HELP_CONFIRMED = "ahc";
__s0local16.C2S_ALLIANCE_HELP_REQUEST_RECRUITMENT = "ahr";
__s0local16.S2C_ALLIANCE_HELP_REQUEST_RECRUITMENT = "ahr";
__s0local16.S2C_ALLIANCE_HELP_CHANGE_OR_ADD = "ahh";
__s0local16.S2C_ALLIANCE_HELP_DELETE = "ahd";
__s0local16.C2S_ALLIANCE_HELP_ALL = "aha";
__s0local16.C2S_ALLIANCE_SET_AUTO_WAR = "saw";
__s0local16.S2C_ALLIANCE_SET_AUTO_WAR = "saw";
__s0local16.S2C_GET_CURRENCY = "gcu";
__s0local16.S2C_GET_PLAYER_IDENTITY = "gpi";
__s0local16.S2C_GET_EMBLEM = "gem";
__s0local16.S2C_GET_XP = "gxp";
__s0local16.S2C_GET_BASIC_DATA = "gbd";
__s0local16.S2C_LEVEL_UP = "glu";
__s0local16.S2C_GET_ACTIVITY = "gac";
__s0local16.S2C_GET_PERMANENT_CASTLE_DATA = "gpc";
__s0local16.C2S_GET_PERMANENT_CASTLE_DATA = "gpc";
__s0local16.S2C_GET_PLAYER_ALLIANCE = "gal";
__s0local16.C2S_GET_CASTLELIST = "gcl";
__s0local16.S2C_GET_CASTLELIST = "gcl";
__s0local16.C2S_GET_DETAILPLAYERINFO = "gdi";
__s0local16.S2C_GET_DETAILPLAYERINFO = "gdi";
__s0local16.S2C_PREMIUM_FLAG_INFO = "gpf";
__s0local16.C2S_BUY_PREMIUIM_FLAG = "gbp";
__s0local16.S2C_BUY_PREMIUIM_FLAG = "gbp";
__s0local16.S2C_HELLO_WORLD = "ghw";
__s0local16.C2S_USER_ATTACK_PROTECTION = "uap";
__s0local16.S2C_USER_ATTACK_PROTECTION = "uap";
__s0local16.S2C_GET_HONOR = "gho";
__s0local16.C2S_GET_DETAILEDCASTLELIST = "dcl";
__s0local16.S2C_GET_DETAILEDCASTLELIST = "dcl";
__s0local16.S2C_GET_FAME = "ufa";
__s0local16.S2C_USER_FACTION_POINTS = "ufp";
__s0local16.S2C_USER_ACHIEVED_RANK = "uar";
__s0local16.C2S_USER_ACHIEVED_RANK = "uar";
__s0local16.S2C_GET_PAYMENT_INFO = "upi";
__s0local16.S2C_KIKERIKI = "kik";
__s0local16.S2C_GET_KINGSTOWER_LIST = "gkl";
__s0local16.C2S_GET_PACKAGE_BUY_COUNT = "gbc";
__s0local16.S2C_GET_PACKAGE_BUY_COUNT = "gbc";
__s0local16.S2C_LIFETIME_SPEND_C2 = "lts";
__s0local16.C2S_ADD_BOOKMARK = "bad";
__s0local16.S2C_ADD_BOOKMARK = "bad";
__s0local16.C2S_CHANGE_BOOKMARK = "bch";
__s0local16.S2C_CHANGE_BOOKMARK = "bch";
__s0local16.C2S_DELETE_BOOKMARK = "bde";
__s0local16.S2C_DELETE_BOOKMARK = "bde";
__s0local16.C2S_DELETE_ALLIANCE_BOOKMARK = "abd";
__s0local16.S2C_DELETE_ALLIANCE_BOOKMARK = "abd";
__s0local16.C2S_GET_BOOKMARKLIST = "gbl";
__s0local16.S2C_GET_BOOKMARKLIST = "gbl";
__s0local16.C2S_BOOSTER_INFO = "boi";
__s0local16.S2C_BOOSTER_INFO = "boi";
__s0local16.C2S_OVERSEER_START = "ovs";
__s0local16.S2C_OVERSEER_START = "ovs";
__s0local16.C2S_DOCTOR_START = "bds";
__s0local16.S2C_DOCTOR_START = "bds";
__s0local16.C2S_MARAUDER_START = "bms";
__s0local16.S2C_MARAUDER_START = "bms";
__s0local16.C2S_INSTRUCTOR_START = "bis";
__s0local16.S2C_INSTRUCTOR_START = "bis";
__s0local16.C2S_ARCHITECT_START = "bas";
__s0local16.S2C_ARCHITECT_START = "bas";
__s0local16.C2S_CARAVAN_OVERLOADER_START = "bcs";
__s0local16.S2C_CARAVAN_OVERLOADER_START = "bcs";
__s0local16.C2S_BOOST_RETURNSPEED_START = "brs";
__s0local16.S2C_BOOST_RETURNSPEED_START = "brs";
__s0local16.C2S_SHOW_CONSTRUCTION_LIST = "scl";
__s0local16.S2C_SHOW_CONSTRUCTION_LIST = "scl";
__s0local16.C2S_MOVE_CONSTRUCTION_ITEM = "mci";
__s0local16.S2C_FINISHED_BUILDING = "fbe";
__s0local16.C2S_GET_CASTLE = "gca";
__s0local16.S2C_GET_CASTLE = "gca";
__s0local16.C2S_GET_CASTLE_RESOURCES = "grc";
__s0local16.S2C_GET_CASTLE_RESOURCES = "grc";
__s0local16.C2S_GET_CASTLE_PRODUCTION_DATA = "gpa";
__s0local16.S2C_GET_CASTLE_PRODUCTION_DATA = "gpa";
__s0local16.C2S_PLACE_CUSTOM_INVENTORY_OBJECT = "pio";
__s0local16.S2C_PLACE_CUSTOM_INVENTORY_OBJECT = "pio";
__s0local16.C2S_BUY_OBJECT = "ebu";
__s0local16.S2C_BUY_OBJECT = "ebu";
__s0local16.C2S_BUY_EXPANSION = "ebe";
__s0local16.S2C_BUY_EXPANSION = "ebe";
__s0local16.C2S_MOVE_OBJECT = "emo";
__s0local16.S2C_MOVE_OBJECT = "emo";
__s0local16.C2S_UPGRADE_OBJECT = "eup";
__s0local16.S2C_UPGRADE_OBJECT = "eup";
__s0local16.C2S_DISASSEMBLE_OBJECT = "edo";
__s0local16.S2C_DISASSEMBLE_OBJECT = "edo";
__s0local16.S2C_GET_OBJECT = "ego";
__s0local16.C2S_FAST_COMPLETE_OBJECT = "fco";
__s0local16.S2C_FAST_COMPLETE_OBJECT = "fco";
__s0local16.C2S_REPAIR_BUILDING = "rbu";
__s0local16.S2C_REPAIR_BUILDING = "rbu";
__s0local16.C2S_UPGRADE_DEFENCE = "eud";
__s0local16.S2C_UPGRADE_DEFENCE = "eud";
__s0local16.S2C_GET_CHANGED_BUILDING_EFFICIENCY = "gcb";
__s0local16.S2C_GET_DAMAGED_BUILDINGS = "gdb";
__s0local16.S2C_GET_DAMAGED_BUILDINGS_E4K = "dar";
__s0local16.S2C_GET_DAMAGED_BUILDINGS_AND_RUBBLE = "gdr";
__s0local16.S2C_RESOURCE_CITIZEN = "irc";
__s0local16.C2S_RESOURCE_CITIZEN = "irc";
__s0local16.C2S_REPAIR_ALL = "ira";
__s0local16.S2C_REPAIR_ALL = "ira";
__s0local16.S2C_GET_AREA_BOOSTER = "gab";
__s0local16.C2S_MERCENARY_PACKAGE = "mpe";
__s0local16.S2C_MERCENARY_PACKAGE = "mpe";
__s0local16.C2S_MERCENARY_REFRESH_MISSION = "rmm";
__s0local16.S2C_MERCENARY_REFRESH_MISSION = "rmm";
__s0local16.S2C_SPECIAL_CURRENCY_EVENT = "sce";
__s0local16.GET_CASTLE_TRANSPORTATION_BUILDINGS_EVENT = "gctb";
__s0local16.C2S_START_TAX_COLLECTION = "txs";
__s0local16.S2C_START_TAX_COLLECTION = "txs";
__s0local16.C2S_COLLECT_TAX = "txc";
__s0local16.S2C_COLLECT_TAX = "txc";
__s0local16.C2S_BRIBE_TAX_COLLECTOR = "btx";
__s0local16.S2C_BRIBE_TAX_COLLECTOR = "btx";
__s0local16.C2S_TAX_INFO = "txi";
__s0local16.S2C_TAX_INFO = "txi";
__s0local16.C2S_GET_TUTORIAL_AREAS = "gta";
__s0local16.C2S_GET_AREAS = "gaa";
__s0local16.S2C_GET_AREAS = "gaa";
__s0local16.C2S_JOIN_AREA = "jaa";
__s0local16.S2C_JOIN_AREA = "jaa";
__s0local16.C2S_JOIN_CASTLE = "jca";
__s0local16.S2C_JOIN_CASTLE = "jca";
__s0local16.C2S_JOIN_CAMP = "jea";
__s0local16.S2C_JOIN_CAMP = "jea";
__s0local16.C2S_SEARCH_PLAYER = "wsp";
__s0local16.S2C_SEARCH_PLAYER = "wsp";
__s0local16.C2S_GET_DUNGEONS = "wgd";
__s0local16.C2S_FIND_NEXT_ENEMY_CASTLE_FOR_HONOR = "fec";
__s0local16.S2C_FIND_NEXT_ENEMY_CASTLE_FOR_HONOR = "fec";
__s0local16.S2C_FIND_NEXT_ENEMY_CASTLE_FOR_GLORY = "ffc";
__s0local16.C2S_FIND_NEXT_ENEMY_CASTLE_FOR_GLORY = "ffc";
__s0local16.C2S_LEAVE_AREA = "laa";
__s0local16.S2C_LEAVE_AREA = "laa";
__s0local16.C2S_FIND_NEXT_MAPOBJECT = "fnm";
__s0local16.S2C_FIND_NEXT_MAPOBJECT = "fnm";
__s0local16.C2S_RUIN_INFO = "rui";
__s0local16.S2C_RUIN_INFO = "rui";
__s0local16.C2S_START_RELOCATION = "rst";
__s0local16.S2C_START_RELOCATION = "rst";
__s0local16.C2S_REMEMBER_RUIN = "rmb";
__s0local16.S2C_REMEMBER_RUIN = "rmb";
__s0local16.S2C_GET_RELOCATION_INFO = "gri";
__s0local16.C2S_SHOW_MESSAGES = "sne";
__s0local16.S2C_SHOW_MESSAGES = "sne";
__s0local16.C2S_SEND_MESSAGE = "sms";
__s0local16.S2C_SEND_MESSAGE = "sms";
__s0local16.C2S_MARK_MESSAGE_READ = "mmr";
__s0local16.C2S_READ_MESSAGES = "rms";
__s0local16.S2C_READ_MESSAGES = "rms";
__s0local16.C2S_DELETE_MESSAGE = "dms";
__s0local16.S2C_DELETE_MESSAGE = "dms";
__s0local16.C2S_IGNORE_PLAYER = "ipl";
__s0local16.S2C_IGNORE_PLAYER = "ipl";
__s0local16.C2S_BATTLE_LOG_SHORT = "bls";
__s0local16.S2C_BATTLE_LOG_SHORT = "bls";
__s0local16.C2S_BATTLE_LOG_MIDDLE = "blm";
__s0local16.S2C_BATTLE_LOG_MIDDLE = "blm";
__s0local16.C2S_BATTLE_LOG_DETAIL = "bld";
__s0local16.S2C_BATTLE_LOG_DETAIL = "bld";
__s0local16.C2S_BUG_REPORT = "brp";
__s0local16.S2C_BUG_REPORT = "brp";
__s0local16.C2S_MARKET_CARRIAGE_NOTIFY = "mmn";
__s0local16.S2C_MARKET_CARRIAGE_NOTIFY = "mmn";
__s0local16.S2C_RENAME_CASTLE_INVITATION = "mir";
__s0local16.C2S_GET_IGNORED_PLAYERS = "ili";
__s0local16.S2C_GET_IGNORED_PLAYERS = "ili";
__s0local16.C2S_FORWARD_BATTLE_LOG = "mfb";
__s0local16.S2C_FORWARD_BATTLE_LOG = "mfb";
__s0local16.C2S_FORWARD_SPY_LOG = "mfs";
__s0local16.S2C_FORWARD_SPY_LOG = "mfs";
__s0local16.C2S_ARCHIVE_MESSAGES = "ams";
__s0local16.S2C_ARCHIVE_MESSAGES = "ams";
__s0local16.C2S_PEACEMODE_START = "mps";
__s0local16.S2C_PEACEMODE_START = "mps";
__s0local16.C2S_OPENGATE_START = "mos";
__s0local16.S2C_OPENGATE_START = "mos";
__s0local16.C2S_ABANDONOUTPOST_START = "mas";
__s0local16.S2C_ABANDONOUTPOST_START = "mas";
__s0local16.C2S_ABANDON_OUTPOST_CANCEL = "mac";
__s0local16.S2C_ABANDON_OUTPOST_CANCEL = "mac";
__s0local16.C2S_GET_ALL_MOVEMENTS = "gam";
__s0local16.S2C_GET_ALL_MOVEMENTS = "gam";
__s0local16.C2S_CANCEL_MOVEMENT = "mcm";
__s0local16.S2C_CANCEL_MOVEMENT = "mcm";
__s0local16.C2S_CREATE_DEFENCE_SUPPORT_MOVEMENT = "cds";
__s0local16.S2C_CREATE_DEFENCE_SUPPORT_MOVEMENT = "cds";
__s0local16.S2C_CREATE_SIEGE_MOVEMENT = "css";
__s0local16.C2S_CREATE_ARMY_ATTACK_MOVEMENT = "cra";
__s0local16.S2C_CREATE_ARMY_ATTACK_MOVEMENT = "cra";
__s0local16.S2C_ARMY_REACHED_SMALL_RADIUS = "asr";
__s0local16.S2C_ARMY_REACHED_BIG_RADIUS = "abr";
__s0local16.C2S_CREATE_ARMY_TRAVEL_MOVEMENT = "cat";
__s0local16.S2C_CREATE_ARMY_TRAVEL_MOVEMENT = "cat";
__s0local16.C2S_CREATE_MARKET_MOVEMENT = "crm";
__s0local16.S2C_CREATE_MARKET_MOVEMENT = "crm";
__s0local16.C2S_SKIP_DUNGEON_COOLDOWN = "sdc";
__s0local16.S2C_SKIP_DUNGEON_COOLDOWN = "sdc";
__s0local16.C2S_MARKET_INFO = "cmi";
__s0local16.S2C_MARKET_INFO = "cmi";
__s0local16.C2S_TROOP_SUPPORT_INFO = "sti";
__s0local16.S2C_TROOP_SUPPORT_INFO = "sti";
__s0local16.C2S_SHOW_INVENTORY = "sin";
__s0local16.S2C_SHOW_INVENTORY = "sin";
__s0local16.C2S_MARK_BUILDING_IN_STORAGE = "mbs";
__s0local16.S2C_MARK_BUILDING_IN_STORAGE = "mbs";
__s0local16.C2S_STORE_OBJECT = "sob";
__s0local16.S2C_STORE_OBJECT = "sob";
__s0local16.C2S_BUY_UNIT_PACKAGE = "bup";
__s0local16.S2C_BUY_UNIT_PACKAGE = "bup";
__s0local16.C2S_SHOW_PACKAGE_LIST = "spl";
__s0local16.S2C_SHOW_PACKAGE_LIST = "spl";
__s0local16.C2S_UNLOCK_PACKAGE_SLOT = "ups";
__s0local16.S2C_UNLOCK_PACKAGE_SLOT = "ups";
__s0local16.C2S_MOVE_UNIT_PACKAGE = "mup";
__s0local16.S2C_MOVE_UNIT_PACKAGE = "mup";
__s0local16.C2S_CANCEL_UNIT_PACKAGE = "mcu";
__s0local16.S2C_CANCEL_UNIT_PACKAGE = "mcu";
__s0local16.C2S_GET_UNIT_INVENTORY = "gui";
__s0local16.S2C_GET_UNIT_INVENTORY = "gui";
__s0local16.C2S_GET_RECEIVED_UNIT_EVENT = "rue";
__s0local16.S2C_GET_RECEIVED_UNIT_EVENT = "rue";
__s0local16.C2S_BOOST_UNIT_PACKAGE = "bou";
__s0local16.S2C_BOOST_UNIT_PACKAGE = "bou";
__s0local16.C2S_SET_RECRUITMENT_MODE = "srm";
__s0local16.S2C_GET_RECRUITMENT_DUPLICATION_INFO = "dri";
__s0local16.C2S_GET_RECRUITMENT_DUPLICATION_INFO = "dri";
__s0local16.C2S_DUPLICATE_RECRUITMENT_LIST = "drl";
__s0local16.S2C_DUPLICATE_RECRUITMENT_LIST = "drl";
__s0local16.C2S_DEFENSE_COMPLETE = "dfc";
__s0local16.S2C_DEFENSE_COMPLETE = "dfc";
__s0local16.C2S_DEFENSE_WALL = "dfw";
__s0local16.S2C_DEFENSE_WALL = "dfw";
__s0local16.C2S_DEFENSE_KEEP = "dfk";
__s0local16.S2C_DEFENSE_KEEP = "dfk";
__s0local16.C2S_DEFENSE_MOAT = "dfm";
__s0local16.S2C_DEFENSE_MOAT = "dfm";
__s0local16.C2S_INSTANT_BUY_TOOL = "ibt";
__s0local16.S2C_INSTANT_BUY_TOOL = "ibt";
__s0local16.C2S_GET_ATTACK_CASTLE_INFOS = "aci";
__s0local16.S2C_GET_ATTACK_CASTLE_INFOS = "aci";
__s0local16.C2S_GET_ATTACK_DUNGEON_INFOS = "adi";
__s0local16.S2C_GET_ATTACK_DUNGEON_INFOS = "adi";
__s0local16.C2S_GET_CONQUER_INFO_OUTPOST = "coi";
__s0local16.S2C_GET_CONQUER_INFO_OUTPOST = "coi";
__s0local16.C2S_GET_CONQUER_INFO_CAPITAL = "cci";
__s0local16.S2C_GET_CONQUER_INFO_CAPITAL = "cci";
__s0local16.C2S_CONQUER_INFO_TRADECENTER = "cti";
__s0local16.S2C_CONQUER_INFO_TRADECENTER = "cti";
__s0local16.C2S_ATTACK_INFO_BOSSDUNGEON = "abi";
__s0local16.S2C_ATTACK_INFO_BOSSDUNGEON = "abi";
__s0local16.C2S_ATTACK_INFO_VILLAGE = "avi";
__s0local16.S2C_ATTACK_INFO_VILLAGE = "avi";
__s0local16.C2S_ATTACK_INFO_LANDMARK = "ali";
__s0local16.S2C_ATTACK_INFO_LANDMARK = "ali";
__s0local16.C2S_ATTACK_INFO_ISLAND = "aii";
__s0local16.S2C_ATTACK_INFO_ISLAND = "aii";
__s0local16.S2C_OCCUPATION_TARGET_CHANGED_STATUS = "otc";
__s0local16.C2S_GET_PREDEFINED_ATTACK_SETUP = "gas";
__s0local16.S2C_GET_PREDEFINED_ATTACK_SETUP = "gas";
__s0local16.C2S_SAVE_PREDEFINED_ATTACK_SETUP = "sas";
__s0local16.S2C_SAVE_PREDEFINED_ATTACK_SETUP = "sas";
__s0local16.C2S_UNLOCK_PREDEFINED_ATTACK_SLOT = "uas";
__s0local16.S2C_UNLOCK_PREDEFINED_ATTACK_SLOT = "uas";
__s0local16.C2S_GET_ATTACK_INFO = "gai";
__s0local16.S2C_GET_ATTACK_INFO = "gai";
__s0local16.C2S_GET_MAX_SPYS = "gms";
__s0local16.S2C_GET_MAX_SPYS = "gms";
__s0local16.C2S_GET_SPY_INFO = "ssi";
__s0local16.S2C_GET_SPY_INFO = "ssi";
__s0local16.C2S_CREATE_SPY_MOVEMENT = "csm";
__s0local16.S2C_CREATE_SPY_MOVEMENT = "csm";
__s0local16.C2S_REMOVE_MOVEMENT = "mrm";
__s0local16.S2C_REMOVE_MOVEMENT = "mrm";
__s0local16.C2S_SPY_LOG_DETAIL = "bsd";
__s0local16.S2C_SPY_LOG_DETAIL = "bsd";
__s0local16.C2S_GET_SPY_UNITS_EVENT = "ssu";
__s0local16.S2C_GET_SPY_UNITS_EVENT = "ssu";
__s0local16.S2C_QUEST_START = "qst";
__s0local16.S2C_QUEST_FINISHED = "qfi";
__s0local16.C2S_QUEST_STARTER_CLICK = "qsc";
__s0local16.S2C_QUEST_STARTER_CLICK = "qsc";
__s0local16.C2S_QUEST_DONATE_RESOURCES = "qdr";
__s0local16.S2C_QUEST_DONATE_RESOURCES = "qdr";
__s0local16.C2S_QUEST_LIST = "qli";
__s0local16.S2C_QUEST_LIST = "qli";
__s0local16.S2C_QUEST_PROGRES = "qpg";
__s0local16.S2C_QUEST_MARK_AS_READ = "qmr";
__s0local16.C2S_CHECK_COMPLETED_QUESTS = "ccq";
__s0local16.S2C_CHECK_COMPLETED_QUESTS = "ccq";
__s0local16.C2S_MAIN_CASTLE_RESOURCES = "mcr";
__s0local16.S2C_MAIN_CASTLE_RESOURCES = "mcr";
__s0local16.C2S_BUY_QUEST = "bcq";
__s0local16.S2C_BUY_QUEST = "bcq";
__s0local16.C2S_BUY_CAMPAIGN_REWARD = "bcr";
__s0local16.S2C_BUY_CAMPAIGN_REWARD = "bcr";
__s0local16.S2C_CAMPAIGN_QUEST_STATUS = "cqs";
__s0local16.C2S_QUEST_DONATE_CURRENCIES = "qdc";
__s0local16.S2C_QUEST_DONATE_CURRENCIES = "qdc";
__s0local16.C2S_GET_HIGHSCORE = "hgh";
__s0local16.S2C_GET_HIGHSCORE = "hgh";
__s0local16.C2S_GET_WEEKLY_HONOR_SCORE = "gwh";
__s0local16.S2C_GET_WEEKLY_HONOR_SCORE = "gwh";
__s0local16.C2S_REDEEM_WEEKLY_HONOR_SCORE = "rwb";
__s0local16.S2C_REDEEM_WEEKLY_HONOR_SCORE = "rwb";
__s0local16.C2S_SUPPORT_DEFENCE_INFO = "sdi";
__s0local16.S2C_SUPPORT_DEFENCE_INFO = "sdi";
__s0local16.C2S_ARTIFACT_FOUND = "saf";
__s0local16.S2C_ARTIFACT_FOUND = "saf";
__s0local16.C2S_BUY_ARTIFACT_PIECE = "sap";
__s0local16.S2C_BUY_ARTIFACT_PIECE = "sap";
__s0local16.S2C_PAYMENT_REWARD = "par";
__s0local16.S2C_PAYMENT_CONFIRMAMTION = "upc";
__s0local16.C2S_START_HUNTER = "hst";
__s0local16.S2C_START_HUNTER = "hst";
__s0local16.C2S_HUNTER_INFO = "hin";
__s0local16.S2C_HUNTER_INFO = "hin";
__s0local16.S2C_HUNTER_RETURNED = "hre";
__s0local16.C2S_RESEARCH_INFO = "rei";
__s0local16.S2C_RESEARCH_INFO = "rei";
__s0local16.C2S_RESEARCH_START = "res";
__s0local16.S2C_RESEARCH_START = "res";
__s0local16.C2S_RESEARCH_FINISH_INSTANT = "rfi";
__s0local16.S2C_RESEARCH_FINISH_INSTANT = "rfi";
__s0local16.C2S_KINGDOM_INFO = "kpi";
__s0local16.S2C_KINGDOM_INFO = "kpi";
__s0local16.C2S_KINGDOM_SKIP_TRANSFER = "kst";
__s0local16.S2C_KINGDOM_SKIP_TRANSFER = "kst";
__s0local16.C2S_KINGDOM_UNIT_TRANSFER = "kut";
__s0local16.S2C_KINGDOM_UNIT_TRANSFER = "kut";
__s0local16.C2S_KINGDOM_GOODS_TRANSFER = "kgt";
__s0local16.S2C_KINGDOM_GOODS_TRANSFER = "kgt";
__s0local16.C2S_CRUSADE_SELECT_CAMP = "csc";
__s0local16.S2C_CRUSADE_SELECT_CAMP = "csc";
__s0local16.C2S_FACTION_SELECT_CAMP = "fsc";
__s0local16.S2C_FACTION_SELECT_CAMP = "fsc";
__s0local16.C2S_KINGDOM_SELECT_CAMP = "ksc";
__s0local16.S2C_KINGDOM_SELECT_CAMP = "ksc";
__s0local16.C2S_KINGDOM_GET_VILLAGE_LIST = "kgv";
__s0local16.S2C_KINGDOM_GET_VILLAGE_LIST = "kgv";
__s0local16.S2C_GET_LOGIN_NAME = "agl";
__s0local16.C2S_UNLOCK_EVENT = "ule";
__s0local16.S2C_UNLOCK_EVENT = "ule";
__s0local16.S2C_FACTIONS_JOIN_FACTION = "fjf";
__s0local16.C2S_GET_FACTION_BALANCE = "fgb";
__s0local16.S2C_GET_FACTION_BALANCE = "fgb";
__s0local16.C2S_FIND_NEXT_TOWER = "fnt";
__s0local16.S2C_FIND_NEXT_TOWER = "fnt";
__s0local16.C2S_GET_ATTACKABLE_FACTION_DATA = "afd";
__s0local16.S2C_GET_ATTACKABLE_FACTION_DATA = "afd";
__s0local16.C2S_GET_FACTIONKINGDOM_INFO = "fki";
__s0local16.S2C_GET_FACTIONKINGDOM_INFO = "fki";
__s0local16.C2S_START_FACTIONPROTECTION = "ffp";
__s0local16.S2C_START_FACTIONPROTECTION = "ffp";
__s0local16.C2S_CONQUER_INFO_FACTIONCAMP = "cfi";
__s0local16.S2C_CONQUER_INFO_FACTIONCAMP = "cfi";
__s0local16.C2S_GET_CAMP_UNIT_CAPACITY = "fuc";
__s0local16.S2C_GET_CAMP_UNIT_CAPACITY = "fuc";
__s0local16.C2S_GET_ALL_CAMP_UNIT_CAPACITY = "fac";
__s0local16.S2C_GET_ALL_CAMP_UNIT_CAPACITY = "fac";
__s0local16.C2S_GET_VILLAGE_COUNT = "gvc";
__s0local16.S2C_GET_VILLAGE_COUNT = "gvc";
__s0local16.S2C_SHUTTING_DOWN_EVENT = "sde";
__s0local16.C2S_GET_EQUIPMENT_INVENTORY = "gei";
__s0local16.S2C_GET_EQUIPMENT_INVENTORY = "gei";
__s0local16.C2S_EQUIPMENT_INVENTORY_SPACE_LEFT = "esl";
__s0local16.S2C_EQUIPMENT_INVENTORY_SPACE_LEFT = "esl";
__s0local16.C2S_CRAFT_EQUIPMENT = "ceq";
__s0local16.S2C_CRAFT_EQUIPMENT = "ceq";
__s0local16.C2S_EQUIP_EQUIPMENT = "eeq";
__s0local16.S2C_EQUIP_EQUIPMENT = "eeq";
__s0local16.C2S_SELL_EQUIPMENT = "seq";
__s0local16.S2C_SELL_EQUIPMENT = "seq";
__s0local16.S2C_BOUGHT_EQUIPMENT = "beq";
__s0local16.C2S_GET_LORDS_INFO = "gli";
__s0local16.S2C_GET_LORDS_INFO = "gli";
__s0local16.C2S_GET_LORD_ASSIGNED_GENERAL = "gla";
__s0local16.S2C_GET_LORD_ASSIGNED_GENERAL = "gla";
__s0local16.C2S_RENAME_LORD = "arl";
__s0local16.S2C_RENAME_LORD = "arl";
__s0local16.C2S_EXTRACT_GEM = "ege";
__s0local16.S2C_EXTRACT_GEM = "ege";
__s0local16.C2S_ALLIANCE_FORGE_EVENT = "frc";
__s0local16.S2C_ALLIANCE_FORGE_EVENT = "frc";
__s0local16.C2S_GET_NEW_RELICS = "gnr";
__s0local16.S2C_GET_NEW_RELICS = "gnr";
__s0local16.C2S_NEW_RELICS_FLAG = "nrf";
__s0local16.S2C_NEW_RELICS_FLAG = "nrf";
__s0local16.C2S_ENCHANT_RELIC_ITEM_EVENT = "ere";
__s0local16.S2C_ENCHANT_RELIC_ITEM_EVENT = "ere";
__s0local16.BOUGHT_RELIC_ITEM_EVENT = "bri";
__s0local16.C2S_ENCHANT_EQUIPMENT_EVENT = "eqe";
__s0local16.S2C_ENCHANT_EQUIPMENT_EVENT = "eqe";
__s0local16.C2S_SET_PUSH_NOTIFICATION_RUIN = "grt";
__s0local16.S2C_SET_PUSH_NOTIFICATION_RUIN = "grt";
__s0local16.C2S_COLOSSUS_GET_RANK = "che";
__s0local16.S2C_COLOSSUS_GET_RANK = "che";
__s0local16.C2S_COLOSSUS_DEPOSIT_RESOURCES = "cde";
__s0local16.S2C_COLOSSUS_DEPOSIT_RESOURCES = "cde";
__s0local16.C2S_CHOOSE_DECO_CASTLE = "cdc";
__s0local16.S2C_CHOOSE_DECO_CASTLE = "cdc";
__s0local16.C2S_COLOSSUS_GET_COLOSSUS = "cdg";
__s0local16.S2C_COLOSSUS_GET_COLOSSUS = "cdg";
__s0local16.C2S_OPEN_ACTIVITY_CHEST = "uoa";
__s0local16.S2C_OPEN_ACTIVITY_CHEST = "uoa";
__s0local16.S2C_ACTIVITY_CHEST_INFO = "uac";
__s0local16.C2S_FESTIVAL_START = "bfs";
__s0local16.S2C_FESTIVAL_START = "bfs";
__s0local16.C2S_ACHIEVEMENT_LIST = "vli";
__s0local16.S2C_ACHIEVEMENT_LIST = "vli";
__s0local16.C2S_ACHIEVEMENT_FINISHED = "vfi";
__s0local16.S2C_ACHIEVEMENT_FINISHED = "vfi";
__s0local16.S2C_GET_STATUS_MINES = "gsm";
__s0local16.C2S_COLLECT_MINE_RESOURCES = "cmr";
__s0local16.S2C_COLLECT_MINE_RESOURCES = "cmr";
__s0local16.S2C_DAILY_QUEST_LIST = "dql";
__s0local16.C2S_DAILY_QUEST_LIST = "dql";
__s0local16.S2C_COLLECT_DAILY_REWARD = "cdr";
__s0local16.C2S_COLLECT_DAILY_REWARD = "cdr";
__s0local16.C2S_VIP_INFO_EVENT = "vip";
__s0local16.S2C_VIP_INFO_EVENT = "vip";
__s0local16.C2S_OPTION_EVENT = "opt";
__s0local16.S2C_OPTION_EVENT = "opt";
__s0local16.C2S_LUCKY_WHEEL_SPIN = "lws";
__s0local16.S2C_LUCKY_WHEEL_SPIN = "lws";
__s0local16.C2S_LUCKY_WHEEL_CHANGE_MODE = "lwm";
__s0local16.S2C_LUCKY_WHEEL_CHANGE_MODE = "lwm";
__s0local16.C2S_LUCKY_WHEEL_BUY_JACKPOT = "lwj";
__s0local16.S2C_LUCKY_WHEEL_BUY_JACKPOT = "lwj";
__s0local16.C2S_LUCKY_WHEEL_INCREASE_PRIZE_CLASS = "lwc";
__s0local16.S2C_LUCKY_WHEEL_INCREASE_PRIZE_CLASS = "lwc";
__s0local16.S2C_GET_DAILY_RESET_TIME = "drt";
__s0local16.C2S_GET_DAILY_RESET_TIME = "drt";
__s0local16.C2S_GET_BUILDING_INFO = "gbi";
__s0local16.S2C_GET_BUILDING_INFO = "gbi";
__s0local16.C2S_GET_EXPANSION_INFO = "sea";
__s0local16.S2C_GET_EXPANSION_INFO = "sea";
__s0local16.C2S_NEW_MARAUDERS_DEPOSIT_RESOURCES = "bkp";
__s0local16.S2C_NEW_MARAUDERS_DEPOSIT_RESOURCES = "bkp";
__s0local16.C2S_TREASUREMAPS = "tmp";
__s0local16.S2C_TREASUREMAPS = "tmp";
__s0local16.C2S_CREATE_TREASUREHUNT_MOVEMENT = "thm";
__s0local16.S2C_CREATE_TREASUREHUNT_MOVEMENT = "thm";
__s0local16.C2S_ATTACK_INFO_TREASUREDUNGEON = "tai";
__s0local16.S2C_ATTACK_INFO_TREASUREDUNGEON = "tai";
__s0local16.C2S_BUY_TREASUREMAP_PIECE = "tbm";
__s0local16.S2C_BUY_TREASUREMAP_PIECE = "tbm";
__s0local16.C2S_TREASUREMAP_SKIP_TRANSFER = "tkt";
__s0local16.S2C_TREASUREMAP_SKIP_TRANSFER = "tkt";
__s0local16.C2S_TREASUREMAP_UNIT_TRANSFER = "tut";
__s0local16.S2C_TREASUREMAP_UNIT_TRANSFER = "tut";
__s0local16.C2S_TREASUREMAP_GOODS_TRANSFER = "tgt";
__s0local16.S2C_TREASUREMAP_GOODS_TRANSFER = "tgt";
__s0local16.C2S_TREASURE_FINISH_MAP = "tfm";
__s0local16.S2C_TREASURE_FINISH_MAP = "tfm";
__s0local16.S2C_TREASUREHUNT_INFO = "thi";
__s0local16.C2S_CLICK_NODE = "tcn";
__s0local16.S2C_CLICK_NODE = "tcn";
__s0local16.S2C_HIDE_ALIEN_CAMP = "hac";
__s0local16.S2C_REPLACE_ALIEN_CAMP = "rae";
__s0local16.C2S_REPLACE_ALIEN_CAMP = "rae";
__s0local16.S2C_GET_ALIEN_REPLACE_COUNT = "rce";
__s0local16.C2S_GET_ALIEN_REPLACE_COUNT = "rce";
__s0local16.C2S_DISMISS_UNITS = "dup";
__s0local16.S2C_DISMISS_UNITS = "dup";
__s0local16.C2S_REVIVE_ALL_HOSPITAL_UNITS = "hra";
__s0local16.S2C_REVIVE_ALL_HOSPITAL_UNITS = "hra";
__s0local16.C2S_CANCEL_HOSPITAL_SLOT = "hcs";
__s0local16.S2C_CANCEL_HOSPITAL_SLOT = "hcs";
__s0local16.C2S_REVIVE_HOSPITAL_UNITS = "hru";
__s0local16.S2C_REVIVE_HOSPITAL_UNITS = "hru";
__s0local16.C2S_SKIP_HOSPITAL_SLOT = "hss";
__s0local16.S2C_SKIP_HOSPITAL_SLOT = "hss";
__s0local16.C2S_DISMISS_HOSPITAL_UNITS = "hdu";
__s0local16.S2C_DISMISS_HOSPITAL_UNITS = "hdu";
__s0local16.C2S_ASSIGN_TITLE = "apt";
__s0local16.S2C_ASSIGN_TITLE = "apt";
__s0local16.S2C_ISLAND_KINGDOM_RESET = "ikr";
__s0local16.C2S_GET_AQUA_POINTS = "gap";
__s0local16.S2C_GET_AQUA_POINTS = "gap";
__s0local16.C2S_STORM_ISLAND_INFO = "sii";
__s0local16.S2C_STORM_ISLAND_INFO = "sii";
__s0local16.C2S_SEARCH_PLAYER_FOR_TITLE = "spt";
__s0local16.S2C_SEARCH_PLAYER_FOR_TITLE = "spt";
__s0local16.C2S_ALLIANCE_MEMBER_AQUA_POINTS_EVENT = "ama";
__s0local16.S2C_ALLIANCE_MEMBER_AQUA_POINTS_EVENT = "ama";
__s0local16.S2C_SLUM_LEVEL = "csl";
__s0local16.S2C_UPDATE_REWARD_INFO_EVENT = "uri";
__s0local16.C2S_ASSIGN_AND_GET_TEST_CASE_EVENT = "gtc";
__s0local16.S2C_ASSIGN_AND_GET_TEST_CASE_EVENT = "gtc";
__s0local16.C2S_SET_FACEBOOK_DATA_EVENT = "sfd";
__s0local16.S2C_SET_FACEBOOK_DATA_EVENT = "sfd";
__s0local16.C2S_PLAYERS_BY_FACEBOOK_IDS = "pbf";
__s0local16.S2C_PLAYERS_BY_FACEBOOK_IDS = "pbf";
__s0local16.C2S_GET_OWNER_INFO = "goi";
__s0local16.S2C_GET_OWNER_INFO = "goi";
__s0local16.C2S_GET_FACEBOOK_GIFT_COUNT = "fgc";
__s0local16.S2C_GET_FACEBOOK_GIFT_COUNT = "fgc";
__s0local16.C2S_GET_FACEBOOK_GIFT_LIST = "fgl";
__s0local16.S2C_GET_FACEBOOK_GIFT_LIST = "fgl";
__s0local16.C2S_COLLECT_FACEBOOK_GIFT = "cfg";
__s0local16.S2C_COLLECT_FACEBOOK_GIFT = "cfg";
__s0local16.C2S_SEND_FACEBOOK_GIFT = "sfg";
__s0local16.S2C_SEND_FACEBOOK_GIFT = "sfg";
__s0local16.C2S_GET_FACEBOOK_GIFT_COOLDOWN = "efc";
__s0local16.S2C_GET_FACEBOOK_GIFT_COOLDOWN = "efc";
__s0local16.C2S_RUBY_WISHING_WELL = "rww";
__s0local16.S2C_RUBY_WISHING_WELL = "rww";
__s0local16.C2S_SKILL_POINT_LIST = "skl";
__s0local16.S2C_SKILL_POINT_LIST = "skl";
__s0local16.C2S_ADD_SKILL_POINT = "skp";
__s0local16.S2C_ADD_SKILL_POINT = "skp";
__s0local16.C2S_RESET_SKILL_POINT = "skr";
__s0local16.S2C_RESET_SKILL_POINT = "skr";
__s0local16.S2C_HERO_DECISION_COMMAND = "hdc";
__s0local16.C2S_HERO_DECISION_COMMAND = "hdc";
__s0local16.C2S_GET_MONUMENTS_PROGRESS = "gmp";
__s0local16.S2C_GET_MONUMENTS_PROGRESS = "gmp";
__s0local16.S2C_GET_MONUMENTS_LIST = "gml";
__s0local16.S2C_MONUMENTS_RESET = "mre";
__s0local16.C2S_GET_GEMS_EVENT = "ggm";
__s0local16.S2C_GET_GEMS_EVENT = "ggm";
__s0local16.S2C_GEM_CHANGE = "gec";
__s0local16.S2C_SELL_GEM = "sge";
__s0local16.C2S_SELL_GEM = "sge";
__s0local16.S2C_BOUGHT_GEM = "bgm";
__s0local16.C2S_BIND_GEM = "bge";
__s0local16.S2C_BIND_GEM = "bge";
__s0local16.S2C_CRAFT_GEM = "cge";
__s0local16.C2S_CRAFT_GEM = "cge";
__s0local16.S2C_PLAYER_NAMES_LIST = "pnl";
__s0local16.C2S_GET_MIGHT_UPDATE = "gmu";
__s0local16.S2C_GET_MIGHT_UPDATE = "gmu";
__s0local16.C2S_KINGDOM_FAME_BOOST = "kfb";
__s0local16.S2C_KINGDOM_FAME_BOOST = "kfb";
__s0local16.C2S_SELECT_TITLE_EVENT = "ste";
__s0local16.S2C_SELECT_TITLE_EVENT = "ste";
__s0local16.C2S_GET_FACTION_POINTS = "gfp";
__s0local16.S2C_GET_FACTION_POINTS = "gfp";
__s0local16.S2C_LOGIN_POPUP_LIST = "lpl";
__s0local16.C2S_MINUTE_SKIP_BUILDING = "msb";
__s0local16.S2C_MINUTE_SKIP_BUILDING = "msb";
__s0local16.C2S_MINUTE_SKIP_KINGDOM_TRANSFER = "msk";
__s0local16.S2C_MINUTE_SKIP_KINGDOM_TRANSFER = "msk";
__s0local16.C2S_MINUTE_SKIP_MAP_TRANSFER = "msm";
__s0local16.S2C_MINUTE_SKIP_MAP_TRANSFER = "msm";
__s0local16.C2S_MINUTE_SKIP_RESEARCH = "msr";
__s0local16.S2C_MINUTE_SKIP_RESEARCH = "msr";
__s0local16.C2S_MINUTE_SKIP_DUNGEON = "msd";
__s0local16.S2C_MINUTE_SKIP_DUNGEON = "msd";
__s0local16.C2S_SAVE_SHOPPING_CART = "ssc";
__s0local16.S2C_IN_GAME_ANNOUNCEMENTS = "iga";
__s0local16.C2S_GET_ANNOUNCEMENTS_IN_LANGUAGE = "gia";
__s0local16.S2C_GET_ANNOUNCEMENTS_IN_LANGUAGE = "gia";
__s0local16.C2S_GET_CONSTRUCTION_ITEM_INVENTORY = "gii";
__s0local16.S2C_GET_CONSTRUCTION_ITEM_INVENTORY = "gii";
__s0local16.C2S_ADD_OR_REPLACE_CONSTRUCTION_ITEM = "rpc";
__s0local16.S2C_ADD_OR_REPLACE_CONSTRUCTION_ITEM = "rpc";
__s0local16.C2S_REMOVE_CONSTRUCTION_ITEM = "cri";
__s0local16.S2C_REMOVE_CONSTRUCTION_ITEM = "cri";
__s0local16.C2S_PROMOTION_BANNER_DATA = "pbd";
__s0local16.C2S_SELL_STORED_DECO = "sds";
__s0local16.S2C_SELL_STORED_DECO = "sds";
__s0local16.C2S_GET_USER_SURVEY_EVENT = "sur";
__s0local16.S2C_GET_USER_SURVEY_EVENT = "sur";
__s0local16.C2S_REPORT_USER_SURVEY_EVENT = "rus";
__s0local16.S2C_REPORT_USER_SURVEY_EVENT = "rus";
__s0local16.C2S_CLIENT_TRACKING_REQUEST_EVENT = "ctr";
__s0local16.S2C_GET_UNLOCKED_SYMBOL = "gus";
__s0local16.C2S_REQUEST_GGS_GIFT = "rgg";
__s0local16.S2C_REQUEST_GGS_GIFT = "rgg";
__s0local16.C2S_ALLIANCE_SUBSCRIBER_COUNT = "asc";
__s0local16.S2C_ALLIANCE_SUBSCRIBER_COUNT = "asc";
__s0local16.C2S_SUBSCRIPTIONS_INFORMATION = "sie";
__s0local16.S2C_SUBSCRIPTIONS_INFORMATION = "sie";
__s0local16.C2S_START_TAUNT_ATTACK = "lta";
__s0local16.S2C_START_TAUNT_ATTACK = "lta";
__s0local16.S2C_ALLIANCE_INVASION_CAMP_INFO = "aic";
__s0local16.S2C_RAGE_POINTS_RECEIVED = "rpr";
__s0local16.C2S_GET_CONSTRUCTION_CRAFTING_INFO = "gcc";
__s0local16.S2C_GET_CONSTRUCTION_CRAFTING_INFO = "gcc";
__s0local16.C2S_CONSTRUCTION_ITEM_CRAFT = "cic";
__s0local16.S2C_CONSTRUCTION_ITEM_CRAFT = "cic";
__s0local16.C2S_CONSTRUCTION_ITEM_DISASSEMBLE = "dci";
__s0local16.S2C_CONSTRUCTION_ITEM_DISASSEMBLE = "dci";
__s0local16.C2S_CONSTRUCTION_ITEM_INVENTORYS_SPACE_LEFT = "csp";
__s0local16.S2C_CONSTRUCTION_ITEM_INVENTORYS_SPACE_LEFT = "csp";
__s0local16.C2S_MINUTE_SKIP_CRAFTING = "sci";
__s0local16.S2C_MINUTE_SKIP_CRAFTING = "sci";
__s0local16.C2S_VISIT_SHOP = "vsh";
__s0local16.S2C_VISIT_SHOP = "vsh";
__s0local16.C2S_GET_ENABLED_HARDCORE_MODE_EFFECTS = "ghe";
__s0local16.S2C_GET_ENABLED_HARDCORE_MODE_EFFECTS = "ghe";
__s0local16.C2S_SET_ENABLED_HARDCORE_MODE_EFFECTS = "she";
__s0local16.S2C_SET_ENABLED_HARDCORE_MODE_EFFECTS = "she";
__s0local16.C2S_CONFIRM_TERMS_AND_CONDITIONS_EVENT = "ctc";
__s0local16.S2C_CONFIRM_TERMS_AND_CONDITIONS_EVENT = "ctc";
__s0local16.C2S_NEWSLETTER_SUBSCRIPTION_EVENT = "nse";
__s0local16.S2C_NEWSLETTER_SUBSCRIPTION_EVENT = "nse";
__s0local16.C2S_GET_NEWSLETTER_SUBSCRIPTION_STATUS_EVENT = "nss";
__s0local16.S2C_GET_NEWSLETTER_SUBSCRIPTION_STATUS_EVENT = "nss";
__s0local16.S2C_GET_FUSION_FORGE_INFO_EVENT = "ffi";
__s0local16.C2S_GET_FUSION_FORGE_INFO_EVENT = "ffi";
__s0local16.C2S_LEVEL_UP_FUSION_FORGE_EVENT = "ffl";
__s0local16.S2C_LEVEL_UP_FUSION_FORGE_EVENT = "ffl";
__s0local16.C2S_GET_FUSION_TARGET_DECO = "gtd";
__s0local16.S2C_GET_FUSION_TARGET_DECO = "gtd";
__s0local16.C2S_SKIP_FUSION_RECHARGE_EVENT = "fsr";
__s0local16.S2C_SKIP_FUSION_RECHARGE_EVENT = "fsr";
__s0local16.C2S_FUSION_CATALYST_CONVERSION_EVENT = "fcc";
__s0local16.S2C_FUSION_CATALYST_CONVERSION_EVENT = "fcc";
__s0local16.C2S_DECO_FORGE_FUSE_EVENT = "dff";
__s0local16.S2C_DECO_FORGE_FUSE_EVENT = "dff";
__s0local16.C2S_GET_AUTO_SELL_CONDITIONS_EVENT = "asg";
__s0local16.S2C_GET_AUTO_SELL_CONDITIONS_EVENT = "asg";
__s0local16.C2S_SET_AUTO_SELL_EQUIPMENT_CONDITIONS_EVENT = "aes";
__s0local16.S2C_SET_AUTO_SELL_EQUIPMENT_CONDITIONS_EVENT = "aes";
__s0local16.C2S_SET_AUTO_SELL_GEM_CONDITIONS_EVENT = "ags";
__s0local16.S2C_SET_AUTO_SELL_GEM_CONDITIONS_EVENT = "ags";
__s0local16.S2C_SHOW_POPOVER_EVENT = "spo";
__s0local16.C2S_REGISTER_PUSH_NOTIFICATION_DEVICE = "rpd";
__s0local16.C2S_GENERATE_LOGIN_TOKEN_EVENT = "glt";
__s0local16.S2C_GENERATE_LOGIN_TOKEN_EVENT = "glt";
__s0local16.C2S_REGISTER_OR_LOGIN_EVENT = "tle";
__s0local16.S2C_REGISTER_OR_LOGIN_EVENT = "tle";
__s0local16.S2C_TEMP_SERVER_EVENT = "tse";
__s0local16.S2C_TEMP_SERVER_PLAYER_HIGHSCORE = "tsh";
__s0local16.C2S_TEMP_SERVER_PLAYER_HIGHSCORE = "tsh";
__s0local16.S2C_TEMP_SERVER_SELECT_CAMP = "tsc";
__s0local16.C2S_TEMP_SERVER_SELECT_CAMP = "tsc";
__s0local16.S2C_TEMP_SERVER_GET_PLAYER_COLLECTOR_CURRENCY = "tpc";
__s0local16.C2S_TEMP_SERVER_GET_PLAYER_COLLECTOR_CURRENCY = "tpc";
__s0local16.S2C_CREATE_TEMP_SERVER_COLLECTOR_ARMY_ATTACK_MOVEMENT = "cam";
__s0local16.C2S_CREATE_TEMP_SERVER_COLLECTOR_ARMY_ATTACK_MOVEMENT = "cam";
__s0local16.S2C_GET_ATTACK_TEMP_SERVER_COLLECTOR_CASTLE_INFO = "ati";
__s0local16.C2S_GET_ATTACK_TEMP_SERVER_COLLECTOR_CASTLE_INFO = "ati";
__s0local16.S2C_MUTE_DIALOGS = "smd";
__s0local16.C2S_GET_PLAYER_COLLECTOR_CURRENCY = "pcc";
__s0local16.S2C_GET_PLAYER_COLLECTOR_CURRENCY = "pcc";
__s0local16.C2S_GET_ATTACK_COLLECTOR_CASTLE_INFO = "acc";
__s0local16.S2C_GET_ATTACK_COLLECTOR_CASTLE_INFO = "acc";
__s0local16.C2S_BUY_PRIVATE_RESOURCE_VILLAGE = "bpv";
__s0local16.S2C_BUY_PRIVATE_RESOURCE_VILLAGE = "bpv";
__s0local16.C2S_REMOVE_PRIVATE_RESOURCE_VILLAGE = "rpv";
__s0local16.S2C_REMOVE_PRIVATE_RESOURCE_VILLAGE = "rpv";
__s0local16.C2S_UPGRADE_PRIVATE_RESOURCE_VILLAGE = "upv";
__s0local16.S2C_UPGRADE_PRIVATE_RESOURCE_VILLAGE = "upv";
__s0local16.C2S_GET_KINGDOMS_LEAGUE_INFO_EVENT = "kli";
__s0local16.S2C_GET_KINGDOMS_LEAGUE_INFO_EVENT = "kli";
__s0local16.C2S_BUY_KINGDOMS_LEAGUE_PASS_EVENT = "kbp";
__s0local16.S2C_BUY_KINGDOMS_LEAGUE_PASS_EVENT = "kbp";
__s0local16.C2S_SET_KINGDOMS_LEAGUE_START_SEEN_EVENT = "kss";
__s0local16.S2C_SET_KINGDOMS_LEAGUE_START_SEEN_EVENT = "kss";
__s0local16.C2S_GET_KINGDOMS_HIGHSCORE_RANK_EVENT = "klh";
__s0local16.S2C_GET_KINGDOMS_HIGHSCORE_RANK_EVENT = "klh";
__s0local16.SEASON_PASS_PRICE_EVENT = "spp";
__s0local16.BUY_SEASON_PROMOTION_PASS = "bsp";
__s0local16.BUY_SEASON_EVENT_PASS = "bep";
__s0local16.C2S_OFFER_OFFER_PAY = "oop";
__s0local16.S2C_OFFER_OFFER_PAY = "oop";
__s0local16.BUY_BESTSELLER_OFFER = "bso";
__s0local16.C2S_UPDATE_SEEN_GLOBAL_EFFECTS_EVENT = "usg";
__s0local16.S2C_UPDATE_SEEN_GLOBAL_EFFECTS_EVENT = "usg";
__s0local16.ACTIVATE_GLOBAL_EFFECT_BOOSTER_EVENT = "agb";
__s0local16.GLOBAL_EFFECT_BOOSTER_INFO_EVENT = "bie";
__s0local16.C2S_LOST_AND_FOUND_EVENT = "lfe";
__s0local16.S2C_LOST_AND_FOUND_EVENT = "lfe";
__s0local16.C2S_COLLECT_LOST_AND_FOUND_EVENT = "clf";
__s0local16.S2C_COLLECT_LOST_AND_FOUND_EVENT = "clf";
__s0local16.C2S_ACTIVATE_TRAINING_PROGRAM_EVENT = "atp";
__s0local16.S2C_ACTIVATE_TRAINING_PROGRAM_EVENT = "atp";
__s0local16.C2S_PROLONG_TRAINING_PROGRAM_EVENT = "ptp";
__s0local16.S2C_PROLONG_TRAINING_PROGRAM_EVENT = "ptp";
__s0local16.C2S_REROLL_TRAINING_PROGRAMS_EVENT = "rtp";
__s0local16.S2C_REROLL_TRAINING_PROGRAMS_EVENT = "rtp";
__s0local16.C2S_GET_ACTIVE_TRAINING_PROGRAM_INFO_EVENT = "gatp";
__s0local16.S2C_GET_ACTIVE_TRAINING_PROGRAM_INFO_EVENT = "gatp";
__s0local16.C2S_GET_TRAINING_PROGRAM_INFO_EVENT = "gtp";
__s0local16.S2C_GET_TRAINING_PROGRAM_INFO_EVENT = "gtp";
__s0local16.C2S_GET_DAIMYO_ALLIANCE_CONTRACTS_EVENT = "gdc";
__s0local16.S2C_GET_DAIMYO_ALLIANCE_CONTRACTS_EVENT = "gdc";
__s0local16.C2S_GET_DAIMYO_WAR_EFFORTS_EVENT = "gdw";
__s0local16.S2C_GET_DAIMYO_WAR_EFFORTS_EVENT = "gdw";
__s0local16.C2S_GET_DAIMYO_AREAS_EVENT = "gda";
__s0local16.S2C_GET_DAIMYO_AREAS_EVENT = "gda";
__s0local16.C2S_CREATE_DAIMYO_DEFENSE_MOVEMENT_EVENT = "cdd";
__s0local16.S2C_CREATE_DAIMYO_DEFENSE_MOVEMENT_EVENT = "cdd";
__s0local16.C2S_LAUNCH_DAIMYO_TAUNT_ATTACK_EVENT = "ldt";
__s0local16.S2C_LAUNCH_DAIMYO_TAUNT_ATTACK_EVENT = "ldt";
__s0local16.S2C_RELIC_ENCHANTER_ENABLED_EVENT = "ree";
__s0local16.THIRD_PARTY_GET_MAPPING = "tgm";
__s0local16.THIRD_PARTY_SET_MAPPING = "tsm";
__s0local16.ALLIANCE_BATTLE_GROUND_JOINED_PLAYER = "ajp";
__s0local16.ALLIANCE_BATTLE_GROUND_MINE_OUT_TIME = "mot";
__s0local16.GET_ALLIANCE_BATTLE_GROUND_ALLIANCE_POINTS = "gabgap";
__s0local16.GET_ALLIANCE_BATTLE_GROUND_PLAYER_POINTS = "gabgpp";
__s0local16.CREATE_ALLIANCE_BATTLE_GROUND_COLLECTOR_ARMY_ATTACK_MOVEMENT = "abgcam";
__s0local16.GET_ATTACK_ALLIANCE_BATTLE_GROUND_COLLECTOR_CASTLE_INFO = "abgati";
__s0local16.GET_ALLIANCE_BATTLE_GROUND_ALLIANCE_HIGHSCORE = "abgph";
__s0local16.GO_TO_WORLD_MAP_AFTER_REMOVE_AREA = "gtwara";
__s0local16.GET_PLAYER_EVENT_STATISTICS = "gpe";
__s0local16.GET_ALLIANCE_EVENT_STATISTICS = "gae";
__s0local16.GET_ALLIANCE_CENTERS_OF_POWER = "cpe";
__s0local16.GET_ALLIANCE_CENTERS_OF_POWER_DETAILED = "cpd";
__s0local16.GET_ALLIANCE_TOWER_RESET_TIMERS = "trt";
__s0local16.GET_ALLIANCE_TOWER_INFO = "tie";
__s0local16.GET_ALLIANCE_TOWER_PLAYER_INFO = "tpi";
__s0local16.GET_ALLIANCE_TOWER_BUFF_INFO = "tbi";
__s0local16.INCREASE_ALLIANCE_TOWER_BUFF = "iatb";
__s0local16.ACTIVATE_ALLIANCE_TOWER_BUFF = "aatb";
__s0local16.GET_ATTACK_ALLIANCE_BATTLE_GROUND_TOWER_INFO = "gti";
__s0local16.CREATE_ALLIANCE_BATTLE_GROUND_TOWER_DEFENSE_MOVEMENT = "tde";
__s0local16.GET_AREA_BARON_INFO_EVENT = "abe";
__s0local16.GLOBAL_SERVER_PREVIOUS_RUN_INFO_EVENT = "gpr";
__s0local16.GLOBAL_SERVER_REGISTER_OR_LOGIN_E4K_EVENT = "tle";
__s0local16.GLOBAL_SERVER_REGISTER_OR_LOGIN_EP_EVENT = "tlep";
__s0local16.FORTUNE_TELLER_EVENT = "ftl";
__s0local16.MOVE_OBJECT_TO_BUILDING_DISTRICT = "mde";
__s0local16.MOVE_OBJECT_FROM_BUILDING_DISTRICT = "rde";
__s0local16.BUY_SCEAT_SKILL = "bss";
__s0local16.SKIP_SCEAT_SKILL_ACTIVATION = "ssa";
__s0local16.AREA_BUILDING_PRODUCTION_INFO = "abpi";
__s0local16.MOVEMENT_FILTER_EVENT = "mvf";
__s0local16.BUY_UNLOCKED_SYMBOLS_EVENT = "bus";
__s0local16.GET_UNLOCKED_AND_PAID_CREST_SYMBOL_EVENT = "gus";
__s0local16.DOWNTIME_STATUS = "DTS";
__s0local16.FEATURE_FLAGS = "FTF";
__s0local16.CHANGE_ALLIANCE_LANGUAGE = "cal";
__s0local16.HOSPITAL_FLAGS = "hfl";
__s0local16.BREWERY_FLAGS = "bfl";
__s0local16.GET_NEXT_EXPIRING_CONSTRUCTION_ITEM_EVENT = "nec";
__s0local16.GET_ALL_EXPIRED_CONSTRUCTION_ITEM_EVENT = "aec";
__s0local16.MARK_EXPIRED_CONSTRUCTION_ITEM_EVENT = "mec";
__s0local16.USE_BOOSTER_CONSUMABLE_ON_CONSTRUCTION_ITEM_EVENT = "ubc";
__s0local16.GET_FEAST_COST_REDUCTION_EVENT = "fce";
__s0local16.PENDING_REWARDS_EVENT = "pre";
__s0local16.CRAFTING_START_EVENT = "crst";
__s0local16.CRAFTING_CANCEL_EVENT = "crca";
__s0local16.CRAFTING_SKIP_EVENT = "crsk";
__s0local16.CRAFTING_INFO_EVENT = "crin";
__s0local16.CRAFTING_QUEUE_MOVE_EVENT = "crqm";
__s0local16.CRAFTING_UNLOCK_EVENT = "crun";
__s0local16.CRAFTING_AREA_INFO_EVENT = "crai";
__s0local16.SELECT_EVENT_AUTO_SCALING_DIFFICULTY_EVENT = "sede";
__s0local16.CHANGE_PLAYER_NAME_EVENT = "cpne";
__s0local16.CHANGE_PLAYER_EMAIL_EVENT = "cpee";
__s0local16.GET_PLAYER_NAME_CHANGE_INFO_EVENT = "gnci";
__s0local16.PLAYER_SCHEDULED_DELETION_EVENT = "psd";
__s0local16.REQUEST_MAIL_CHANGE = "rmc";
__s0local16.MAIL_NEWSLETTER_STATUS = "mns";
__s0local16.RESEND_MAIL = "rsm";
__s0local16.CANCEL_MAIL_CHANGE = "cmc";
__s0local16.VALIDATE_NEW_PLAYER_NAME_EVENT = "vpn";
__s0local16.VALIDATE_LOGIN_NAME_EVENT = "vln";
__s0local16.GET_LOOTBOXES_STATUS = "gls";
__s0local16.OPEN_LOOTBOX_EVENT = "ole";
__s0local16.GENERALS_INFO_EVENT = "gie";
__s0local16.GENERAL_UNLOCK_EVENT = "gue";
__s0local16.GENERAL_STAR_UPGRADE_EVENT = "gsue";
__s0local16.GENERAL_ADD_XP_EVENT = "gaxp";
__s0local16.GENERAL_RESET_FLAGS_EVENT = "grf";
__s0local16.GENERAL_UNLOCK_SKILL_EVENT = "guse";
__s0local16.GENERAL_RESET_SKILLS_EVENT = "grs";
__s0local16.GET_CHARACTERS_STATUS_EVENT = "gcs";
__s0local16.SPIN_CHARACTER_TOMBOLA_EVENT = "sct";
__s0local16.GENERALS_ASSIGN_ABILITY_EVENT = "gaae";
__s0local16.FINISH_QUEST_CONDITION_EVENT = "fcq";
__s0local16.SKIP_GENERALS_INTRODUCTION = "sgi";
__s0local16.LAUNCH_WOLFKING_TAUNT_ATTACK = "lwta";
__s0local16.WELCOME_BACK_MESSAGE_INFO_EVENT = "wbie";
__s0local16.UPDATE_PREDEFINED_ATTACK_NAME_EVENT = "upan";
__s0local16.STORE_SOLDIERS_EVENT = "sts";
__s0local16.TAKE_SOLDIERS_EVENT = "tas";
__s0local16.DAILY_MESSAGES_COUNT_UPDATE = "mcd";
__s0local16.PING_PONG = "pinpon";
__s0local16.C2S_VERSION_CHECK = "vck";
__s0local16.C2S_NEW_CASH_HASH = "nch";
__s0local16.C2S_REPORT_SURVEY = "rsv";
__s0local16.C2S_SOCIALLOGIN_EVENT = "lgs";
__s0local16.C2S_VERIFY_PLAYERMAIL_EVENT = "vpm";
__s0local16.S2C_SERVER_MESSAGE = "sms";
__s0local16.S2C_GET_CASH_HASH = "gch";
__s0local16.S2C_VERSION_CHECK = "vck";
__s0local16.S2C_SPECIAL_OFFER_EVENT = "soe";
__s0local16.S2C_FORUM_LOGIN_DATA = "core_gfl";
__s0local16.S2C_SERVERINFO = "nfo";
__s0local16.S2C_COMA_TEASER_EVENT = "cmt";
__s0local16.S2C_LOSTPASSWORD_EVENT = "lpp";
__s0local16.GET_DONATION_TYPE_INFO_EVENT = "gdti";
__s0local16.DONATE_DONATION_ITEM_EVENT = "ddi";
__s0local16.CLAIM_FREE_CHEST_EVENT = "cfc";
__s0local16.SPIN_GACHA_EVENT = "dge";
__s0local16.LIST_LEADERBOARD_SCORES_PAGE_EVENT = "llsp";
__s0local16.LIST_LEADERBOARD_SCORES_WINDOW_EVENT = "llsw";
__s0local16.SEARCH_LEADERBOARD_SCORES_EVENT = "slse";
__s0local16.ACTIVATE_ATTACK_ADVISOR_EVENT = "aa";
__s0local16.GET_ATTACK_ADVISOR_OVERVIEW_EVENT = "aao";
__s0local16.ALLIANCE_EMBLEM_EVENT = "aee";
__s0local16.SET_ALLIANCE_EMBLEM_EVENT = "sae";
__s0local16.START_ALLIANCE_QUEST = "saq";
__s0local16.COMPLETE_ALLIANCE_QUEST = "caq";
__s0local16.CANCEL_ALLIANCE_QUEST = "caaq";
__s0local16.REROLL_ALLIANCE_QUEST = "raq";
__s0local16.ALLIANCE_QUEST_STATUS = "aqs";
__s0local16.ALLIANCE_QUEST_PLAYER_CONTRIBUTION_EVENT = "aqpc";
__s0local16.SKIP_COOLDOWN_ALLIANCE_QUEST = "scq";
__s0local16.BOSS_STATUS_EVENT = "bse";
__s0local16.BOSS_BROADCAST_STATUS_EVENT = "bbs";
__s0local16.SELECT_RAID_BOSS_EVENT = "srb";
__s0local16.ABORT_RAID_EVENT = "arb";
exports.ConstantsSmartFox = __s0local16;
__s0local16.__class = "ConstantsSmartFox";
var __s0local17 = function () {
  function ConstructionConst() {}
  ConstructionConst.UNLOCK_DURATION_$LI$ = function () {
    if (ConstructionConst.UNLOCK_DURATION == null) {
      ConstructionConst.UNLOCK_DURATION = 604800;
    }
    return ConstructionConst.UNLOCK_DURATION;
  };
  ConstructionConst.FREE_SKIP_TIME_$LI$ = function () {
    if (ConstructionConst.FREE_SKIP_TIME == null) {
      ConstructionConst.FREE_SKIP_TIME = 240;
    }
    return ConstructionConst.FREE_SKIP_TIME;
  };
  ConstructionConst.getFastCompleteCostC2 = function (__s411param0, __s411param1) {
    return Math.ceil(__s411param0 * 1 / 60 * __s411param1) | 0;
  };
  ConstructionConst.getInstantCostC2PerMinuteFor = function (__s413param0) {
    var __s413local0 = ConstructionConst.INSTANT_COST_C2_PER_MINUTE;
    if (__s413param0 >= 30) {
      return __s413local0;
    } else {
      __s413local0 *= ConstructionConst.SKIP_COST_FACTOR;
      if (__s413param0 <= 25) {
        return __s413local0;
      } else {
        return (2 - __s413local0) / 5 * (__s413param0 - 25) + __s413local0;
      }
    }
  };
  ConstructionConst.getRepairAllCostsC2 = function (__s419param0) {
    return ConstructionConst.getRepairAllCostsC2WithDiscount(__s419param0, 0);
  };
  ConstructionConst.getRepairAllCostsC2WithDiscount = function (__s421param0, __s421param1) {
    if (__s421param1 >= 100) {
      return 0;
    }
    var __s421local0 = __s421param0 / 60 | 0;
    if (__s421local0 === 1) {
      return 42;
    } else {
      return Math.min(ConstructionConst.MAX_REPAIR_ALL_COST, __s421local0 * ConstructionConst.INSTANT_REPAIR_ALL_COST_C2_PER_MINUTE * Math.max(1, 1 / (Math.log(__s421local0) / Math.log(5)) * 2 + 0.335) * (100 - __s421param1) / 100 | 0);
    }
  };
  ConstructionConst.getRepairCost = function (__s426param0, __s426param1) {
    return Math.ceil(__s426param0 * __s426param1 * ConstructionConst.BUILT_TO_REPAIR_TIME_FACTOR) | 0;
  };
  ConstructionConst.getRefundPrice = function (__s428param0) {
    return __s428param0 * ConstructionConst.SELL_BONUS_FROM_BUY_COSTS_FACTOR | 0;
  };
  ConstructionConst.getDamageFactor = function (__s430param0) {
    if (__s430param0 < 50) {
      return 0.5;
    } else {
      return __s430param0 / ConstructionConst.MAX_HP;
    }
  };
  ConstructionConst.getRepairDuration = function (__s434param0, __s434param1) {
    return Math.floor(__s434param0 * ConstructionConst.BUILT_TO_REPAIR_TIME_FACTOR * ((ConstructionConst.MAX_HP - __s434param1) / 100)) | 0;
  };
  ConstructionConst.getExpandLimitForC2 = function (__s436param0, __s436param1, __s436param2) {
    if (__s436param1 === __s0local30.EVENTCAMP_AREA_ID || __s436param2 === __s0local32.KINGDOM_ID) {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    } else if (__s436param0 < __s0local94.TUTORIAL_END_LEVEL) {
      return 0;
    } else if (__s436param0 < 13) {
      return __s436param0 - 1;
    } else if (__s436param0 < 28) {
      return Math.ceil(6 + (__s436param0 + 1) / 3) | 0;
    } else {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    }
  };
  ConstructionConst.getExpandLimitForResourcesShortTutorial = function (__s443param0, __s443param1, __s443param2) {
    if (__s443param1 === __s0local30.EVENTCAMP_AREA_ID || __s443param2 === __s0local32.KINGDOM_ID) {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    } else if (__s443param0 < 3) {
      return __s443param0;
    } else if (__s443param0 < 6) {
      return __s443param0 - 1;
    } else if (__s443param0 < 13) {
      return Math.ceil(2 + __s443param0 / 3) | 0;
    } else if (__s443param0 < 22) {
      return Math.ceil(__s443param0 / 2 - 0.5) | 0;
    } else if (__s443param0 < 46) {
      return Math.ceil((__s443param0 - 1) / 4 + 4) | 0;
    } else {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    }
  };
  ConstructionConst.getExpandLevelForResourcesShortTutorial = function (__s452param0) {
    if (__s452param0 < 3) {
      return __s452param0;
    } else if (__s452param0 < 5) {
      return __s452param0 + 1;
    } else if (__s452param0 < 7) {
      return __s452param0 * 3 - 8;
    } else if (__s452param0 < 11) {
      return __s452param0 * 2;
    } else if (__s452param0 < 17) {
      return __s452param0 * 4 - 18;
    } else {
      return 0;
    }
  };
  ConstructionConst.getExpandLimitForResources = function (__s460param0, __s460param1, __s460param2) {
    if (__s460param1 === __s0local30.EVENTCAMP_AREA_ID || __s460param2 === __s0local32.KINGDOM_ID) {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    } else if (__s460param0 === 1) {
      return 1;
    } else if (__s460param0 === 2) {
      return 2;
    } else if (__s460param0 < 6) {
      return __s460param0 - 1;
    } else if (__s460param0 < 13) {
      return Math.ceil(2 + __s460param0 / 3) | 0;
    } else if (__s460param0 < 22) {
      return Math.ceil(__s460param0 / 2 - 0.5) | 0;
    } else if (__s460param0 < 46) {
      return Math.ceil((__s460param0 - 1) / 4 + 4) | 0;
    } else {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    }
  };
  ConstructionConst.getExpandLevelForResources = function (__s470param0) {
    if (__s470param0 < 5) {
      return __s470param0 + 1;
    } else if (__s470param0 < 7) {
      return __s470param0 * 3 - 8;
    } else if (__s470param0 < 11) {
      return __s470param0 * 2;
    } else if (__s470param0 < 17) {
      return __s470param0 * 4 - 18;
    } else {
      return 0;
    }
  };
  ConstructionConst.getExpandLevelForC2 = function (__s477param0) {
    if (__s477param0 < 4) {
      return __s0local94.TUTORIAL_END_LEVEL;
    } else if (__s477param0 < 12) {
      return __s477param0 + 1;
    } else if (__s477param0 < 17) {
      return (__s477param0 - 7) * 3;
    } else {
      return 0;
    }
  };
  ConstructionConst.getSkipCostForUnits = function (__s483param0, __s483param1) {
    return __s483param0 * __s483param1 | 0;
  };
  return ConstructionConst;
}();
__s0local17.MAX_SLOTS = 4;
__s0local17.MAX_QUEUE_SLOTS = 2;
__s0local17.MAX_SIMULTANEOUS_SLOTS = 2;
__s0local17.SLOTSTATEUNLOCKED = -1;
__s0local17.SLOTSTATELOCKED = -2;
__s0local17.BUILT_TO_DISASSEMBLE_TIME_FACTOR = 0.5;
__s0local17.BUILT_TO_REPAIR_TIME_FACTOR = 0.5;
__s0local17.MAX_HP = 100;
__s0local17.MIN_HP = 0;
__s0local17.UPGRADE_RECRUITSPEED_BOOST = 5;
__s0local17.INSTANT_COST_C2_PER_MINUTE = 2;
__s0local17.INSTANT_REPAIR_ALL_COST_C2_PER_MINUTE = 2;
__s0local17.UNLOCK_C2 = 625;
__s0local17.PREMIUM_FACTOR_REPAIR_ALL = 0.5;
__s0local17.RUBBLE_WOD_ID = 250;
__s0local17.MAX_REPAIR_ALL_COST = 10000;
__s0local17.DAMAGE_TYPE_FIRE = 0;
__s0local17.DAMAGE_TYPE_PLAGUE = 1;
__s0local17.SELL_BONUS_FROM_BUY_COSTS_FACTOR = 0.25;
__s0local17.SKIP_COST_FACTOR = 2;
__s0local17.MAX_EXPANSION_LEVEL = 19;
exports.ConstructionConst = __s0local17;
__s0local17.__class = "ConstructionConst";
var __s0local18 = function () {
  function ConstructionItemConst() {}
  ConstructionItemConst.MAX_SLOTS_$LI$ = function () {
    if (ConstructionItemConst.MAX_SLOTS == null) {
      ConstructionItemConst.MAX_SLOTS = ConstructionItemConst.APPEARANCE_SLOT_COUNT + ConstructionItemConst.PRIMARY_SLOT_COUNT + ConstructionItemConst.SECONDARY_SLOT_COUNT;
    }
    return ConstructionItemConst.MAX_SLOTS;
  };
  ConstructionItemConst.SLOT_TYPE_COUNTS_$LI$ = function () {
    if (ConstructionItemConst.SLOT_TYPE_COUNTS == null) {
      ConstructionItemConst.SLOT_TYPE_COUNTS = [ConstructionItemConst.APPEARANCE_SLOT_COUNT, ConstructionItemConst.PRIMARY_SLOT_COUNT, ConstructionItemConst.SECONDARY_SLOT_COUNT];
    }
    return ConstructionItemConst.SLOT_TYPE_COUNTS;
  };
  return ConstructionItemConst;
}();
__s0local18.APPEARANCE_SLOT_TYPE = 0;
__s0local18.PRIMARY_SLOT_TYPE = 1;
__s0local18.SECONDARY_SLOT_TYPE = 2;
__s0local18.APPEARANCE_SLOT_COUNT = 1;
__s0local18.PRIMARY_SLOT_COUNT = 1;
__s0local18.SECONDARY_SLOT_COUNT = 1;
__s0local18.RARENESS_UNIQUE = 0;
__s0local18.RARENESS_COMMON = 1;
__s0local18.RARENESS_RARE = 2;
__s0local18.RARENESS_EPIC = 3;
__s0local18.RARENESS_LEGENDARY = 4;
__s0local18.INVENTORY_SOFTCAP = 5000;
__s0local18.INVENTORY_HARDCAP = 6000;
exports.ConstructionItemConst = __s0local18;
__s0local18.__class = "ConstructionItemConst";
var __s0local19 = function () {
  function DailyQuestConst() {}
  DailyQuestConst.REWARD_STEPS_$LI$ = function () {
    if (DailyQuestConst.REWARD_STEPS == null) {
      DailyQuestConst.REWARD_STEPS = [3, 6, 9, 12];
    }
    return DailyQuestConst.REWARD_STEPS;
  };
  DailyQuestConst.RANDOM_REWARD_STEPS_$LI$ = function () {
    if (DailyQuestConst.RANDOM_REWARD_STEPS == null) {
      DailyQuestConst.RANDOM_REWARD_STEPS = [3, 6, 9];
    }
    return DailyQuestConst.RANDOM_REWARD_STEPS;
  };
  return DailyQuestConst;
}();
__s0local19.MIN_LEVEL = 6;
__s0local19.MAX_SPY_COUNT = 5;
__s0local19.RUBY_STEP = 12;
__s0local19.ACTIVITIES_PER_DAY = 12;
__s0local19.TEMP_SERVER_ACTIVITIES_PER_DAY = 3;
exports.DailyQuestConst = __s0local19;
__s0local19.__class = "DailyQuestConst";
var __s0local20 = function () {
  return function DaimyoConst() {};
}();
__s0local20.DAIMYO_CASTLES_PER_PLAYER = 4;
__s0local20.DAIMYO_TOWNSHIPS_PER_PLAYER = 4;
__s0local20.DAIMYO_BARON_LOOK_ID = 1002;
__s0local20.DAIMYO_GENERAL_LOOK_ID = 1003;
exports.DaimyoConst = __s0local20;
__s0local20.__class = "DaimyoConst";
var __s0local21 = function () {
  function DecorationConst() {}
  DecorationConst.getStorageID = function (__s513param0) {
    var __s513local0 = false;
    for (var __s513local1 = 0; __s513local1 < __s0local93.CRUSADE_MAP_IDS_$LI$().length; __s513local1++) {
      if (__s0local93.CRUSADE_MAP_IDS_$LI$()[__s513local1] === __s513param0) {
        __s513local0 = true;
        break;
      }
    }
    if (__s513local0 || __s0local32.KINGDOM_ID === __s513param0) {
      return __s513param0;
    }
    var __s513local2 = false;
    for (__s513local1 = 0; __s513local1 < __s0local105.WORLD_IDS_$LI$().length; __s513local1++) {
      if (__s0local105.WORLD_IDS_$LI$()[__s513local1] === __s513param0) {
        __s513local2 = true;
        break;
      }
    }
    if (__s513local2) {
      return DecorationConst.GLOBAL_DECORATION_STORAGE_ID;
    } else {
      return DecorationConst.NO_DECORATION_STORAGE_ID;
    }
  };
  return DecorationConst;
}();
__s0local21.HARD_CAP = 3000;
__s0local21.SOFT_CAP = 50;
__s0local21.EMPTY_NEW_COUNT = 0;
__s0local21.NO_DECORATION_STORAGE_ID = -1;
__s0local21.GLOBAL_DECORATION_STORAGE_ID = 1;
__s0local21.AREA_INVENTORY_STORAGE_ID = 2;
exports.DecorationConst = __s0local21;
__s0local21.__class = "DecorationConst";
var __s0local22 = function () {
  function DefenseConst() {}
  DefenseConst.ITEMS_KEEP_$LI$ = function () {
    if (DefenseConst.ITEMS_KEEP == null) {
      DefenseConst.ITEMS_KEEP = [5, 5, 5];
    }
    return DefenseConst.ITEMS_KEEP;
  };
  DefenseConst.LEVELS_KEEP_$LI$ = function () {
    if (DefenseConst.LEVELS_KEEP == null) {
      DefenseConst.LEVELS_KEEP = [1, 2, 3];
    }
    return DefenseConst.LEVELS_KEEP;
  };
  DefenseConst.ITEMS_SUPPORT_TOOLS_$LI$ = function () {
    if (DefenseConst.ITEMS_SUPPORT_TOOLS == null) {
      DefenseConst.ITEMS_SUPPORT_TOOLS = [6, 6, 6];
    }
    return DefenseConst.ITEMS_SUPPORT_TOOLS;
  };
  DefenseConst.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP_$LI$ = function () {
    if (DefenseConst.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP == null) {
      DefenseConst.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP = [4, 4, 4];
    }
    return DefenseConst.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP;
  };
  DefenseConst.ITEMS_LEFTWALL_$LI$ = function () {
    if (DefenseConst.ITEMS_LEFTWALL == null) {
      DefenseConst.ITEMS_LEFTWALL = [1, 1, 1, 1];
    }
    return DefenseConst.ITEMS_LEFTWALL;
  };
  DefenseConst.LEVELS_LEFTWALL_$LI$ = function () {
    if (DefenseConst.LEVELS_LEFTWALL == null) {
      DefenseConst.LEVELS_LEFTWALL = [1, 2, 3, 5];
    }
    return DefenseConst.LEVELS_LEFTWALL;
  };
  DefenseConst.ITEMS_SKILLS_LEFTWALL_$LI$ = function () {
    if (DefenseConst.ITEMS_SKILLS_LEFTWALL == null) {
      DefenseConst.ITEMS_SKILLS_LEFTWALL = [1];
    }
    return DefenseConst.ITEMS_SKILLS_LEFTWALL;
  };
  DefenseConst.LEVELS_SKILLS_LEFTWALL_$LI$ = function () {
    if (DefenseConst.LEVELS_SKILLS_LEFTWALL == null) {
      DefenseConst.LEVELS_SKILLS_LEFTWALL = [506];
    }
    return DefenseConst.LEVELS_SKILLS_LEFTWALL;
  };
  DefenseConst.ITEMS_MIDDLEWALL_$LI$ = function () {
    if (DefenseConst.ITEMS_MIDDLEWALL == null) {
      DefenseConst.ITEMS_MIDDLEWALL = [1, 2, 1, 1, 2, 1];
    }
    return DefenseConst.ITEMS_MIDDLEWALL;
  };
  DefenseConst.LEVELS_MIDDLEWALL_$LI$ = function () {
    if (DefenseConst.LEVELS_MIDDLEWALL == null) {
      DefenseConst.LEVELS_MIDDLEWALL = [2, 2, 3, 5, 6, 9];
    }
    return DefenseConst.LEVELS_MIDDLEWALL;
  };
  DefenseConst.PLAYER_LEVEL_WALL_$LI$ = function () {
    if (DefenseConst.PLAYER_LEVEL_WALL == null) {
      DefenseConst.PLAYER_LEVEL_WALL = [1, 11, 24];
    }
    return DefenseConst.PLAYER_LEVEL_WALL;
  };
  DefenseConst.PLAYER_LEVEL_GATE_$LI$ = function () {
    if (DefenseConst.PLAYER_LEVEL_GATE == null) {
      DefenseConst.PLAYER_LEVEL_GATE = [1, 11, 24];
    }
    return DefenseConst.PLAYER_LEVEL_GATE;
  };
  DefenseConst.ITEMS_RIGHTWALL_$LI$ = function () {
    if (DefenseConst.ITEMS_RIGHTWALL == null) {
      DefenseConst.ITEMS_RIGHTWALL = [1, 1, 1, 1];
    }
    return DefenseConst.ITEMS_RIGHTWALL;
  };
  DefenseConst.LEVELS_RIGHTWALL_$LI$ = function () {
    if (DefenseConst.LEVELS_RIGHTWALL == null) {
      DefenseConst.LEVELS_RIGHTWALL = [1, 2, 3, 5];
    }
    return DefenseConst.LEVELS_RIGHTWALL;
  };
  DefenseConst.ITEMS_SKILLS_RIGHTWALL_$LI$ = function () {
    if (DefenseConst.ITEMS_SKILLS_RIGHTWALL == null) {
      DefenseConst.ITEMS_SKILLS_RIGHTWALL = [1];
    }
    return DefenseConst.ITEMS_SKILLS_RIGHTWALL;
  };
  DefenseConst.LEVELS_SKILLS_RIGHTWALL_$LI$ = function () {
    if (DefenseConst.LEVELS_SKILLS_RIGHTWALL == null) {
      DefenseConst.LEVELS_SKILLS_RIGHTWALL = [506];
    }
    return DefenseConst.LEVELS_SKILLS_RIGHTWALL;
  };
  DefenseConst.ITEMS_LEFTMOAT_$LI$ = function () {
    if (DefenseConst.ITEMS_LEFTMOAT == null) {
      DefenseConst.ITEMS_LEFTMOAT = [4];
    }
    return DefenseConst.ITEMS_LEFTMOAT;
  };
  DefenseConst.LEVELS_LEFTMOAT_$LI$ = function () {
    if (DefenseConst.LEVELS_LEFTMOAT == null) {
      DefenseConst.LEVELS_LEFTMOAT = [1];
    }
    return DefenseConst.LEVELS_LEFTMOAT;
  };
  DefenseConst.ITEMS_MIDDLEMOAT_$LI$ = function () {
    if (DefenseConst.ITEMS_MIDDLEMOAT == null) {
      DefenseConst.ITEMS_MIDDLEMOAT = [4];
    }
    return DefenseConst.ITEMS_MIDDLEMOAT;
  };
  DefenseConst.LEVELS_MIDDLEMOAT_$LI$ = function () {
    if (DefenseConst.LEVELS_MIDDLEMOAT == null) {
      DefenseConst.LEVELS_MIDDLEMOAT = [1];
    }
    return DefenseConst.LEVELS_MIDDLEMOAT;
  };
  DefenseConst.ITEMS_RIGHTMOAT_$LI$ = function () {
    if (DefenseConst.ITEMS_RIGHTMOAT == null) {
      DefenseConst.ITEMS_RIGHTMOAT = [4];
    }
    return DefenseConst.ITEMS_RIGHTMOAT;
  };
  DefenseConst.LEVELS_RIGHTMOAT_$LI$ = function () {
    if (DefenseConst.LEVELS_RIGHTMOAT == null) {
      DefenseConst.LEVELS_RIGHTMOAT = [1];
    }
    return DefenseConst.LEVELS_RIGHTMOAT;
  };
  DefenseConst.ITEMS_LEFTWALL_FACTION_$LI$ = function () {
    if (DefenseConst.ITEMS_LEFTWALL_FACTION == null) {
      DefenseConst.ITEMS_LEFTWALL_FACTION = [1, 1, 1];
    }
    return DefenseConst.ITEMS_LEFTWALL_FACTION;
  };
  DefenseConst.LEVELS_LEFTWALL_FACTION_$LI$ = function () {
    if (DefenseConst.LEVELS_LEFTWALL_FACTION == null) {
      DefenseConst.LEVELS_LEFTWALL_FACTION = [1, 2, 3];
    }
    return DefenseConst.LEVELS_LEFTWALL_FACTION;
  };
  DefenseConst.ITEMS_MIDDLEWALL_FACTION_$LI$ = function () {
    if (DefenseConst.ITEMS_MIDDLEWALL_FACTION == null) {
      DefenseConst.ITEMS_MIDDLEWALL_FACTION = [1, 2, 1, 1, 2];
    }
    return DefenseConst.ITEMS_MIDDLEWALL_FACTION;
  };
  DefenseConst.LEVELS_MIDDLEWALL_FACTION_$LI$ = function () {
    if (DefenseConst.LEVELS_MIDDLEWALL_FACTION == null) {
      DefenseConst.LEVELS_MIDDLEWALL_FACTION = [2, 2, 3, 5, 6];
    }
    return DefenseConst.LEVELS_MIDDLEWALL_FACTION;
  };
  DefenseConst.ITEMS_RIGHTWALL_FACTION_$LI$ = function () {
    if (DefenseConst.ITEMS_RIGHTWALL_FACTION == null) {
      DefenseConst.ITEMS_RIGHTWALL_FACTION = [1, 1, 1];
    }
    return DefenseConst.ITEMS_RIGHTWALL_FACTION;
  };
  DefenseConst.LEVELS_RIGHTWALL_FACTION_$LI$ = function () {
    if (DefenseConst.LEVELS_RIGHTWALL_FACTION == null) {
      DefenseConst.LEVELS_RIGHTWALL_FACTION = [1, 2, 3];
    }
    return DefenseConst.LEVELS_RIGHTWALL_FACTION;
  };
  DefenseConst.getFixedPrctOnSide = function (__s612param0) {
    return Math.round(25 - 2000 / (__s612param0 + 80));
  };
  DefenseConst.getIndicesOfMaxToMinSorting = function (__s614param0) {
    var __s614local0 = [0, 1, 2];
    if (__s614param0[__s614local0[0]] > __s614param0[__s614local0[1]]) {
      if (__s614param0[__s614local0[2]] > __s614param0[__s614local0[0]]) {
        __s614local0[0] = 2;
        __s614local0[1] = 0;
        __s614local0[2] = 1;
      } else if (__s614param0[__s614local0[2]] > __s614param0[__s614local0[1]]) {
        __s614local0[1] = 2;
        __s614local0[2] = 1;
      }
    } else if (__s614param0[__s614local0[1]] > __s614param0[__s614local0[2]]) {
      if (__s614param0[__s614local0[0]] > __s614param0[__s614local0[2]]) {
        __s614local0[0] = 1;
        __s614local0[1] = 0;
      } else {
        __s614local0[0] = 1;
        __s614local0[1] = 2;
        __s614local0[2] = 0;
      }
    } else {
      __s614local0[0] = 2;
      __s614local0[2] = 0;
    }
    return __s614local0;
  };
  DefenseConst.getSideUnitCount = function (__s623param0, __s623param1) {
    var __s623local0 = [__s623param0 * 1 * __s623param1[DefenseConst.SIDE_LEFT] / 100, __s623param0 * 1 * __s623param1[DefenseConst.SIDE_MIDDLE] / 100, __s623param0 * 1 * __s623param1[DefenseConst.SIDE_RIGHT] / 100];
    var __s623local1 = new Array(3);
    __s623local1[0] = __s623local0[0] | 0;
    __s623local1[1] = __s623local0[1] | 0;
    __s623local1[2] = __s623local0[2] | 0;
    var __s623local2 = new Array(3);
    __s623local2[0] = __s623local0[0] - __s623local1[0];
    __s623local2[1] = __s623local0[1] - __s623local1[1];
    __s623local2[2] = __s623local0[2] - __s623local1[2];
    var __s623local3 = Math.round(__s623local2[0] + __s623local2[1] + __s623local2[2]);
    if (__s623local3 > 0) {
      var __s623local4 = DefenseConst.getIndicesOfMaxToMinSorting(__s623local2);
      for (var __s623local5 = 0; __s623local5 < __s623local3; __s623local5++) {
        __s623local1[__s623local4[__s623local5]]++;
      }
    }
    return __s623local1;
  };
  DefenseConst.calculateCastleDefense = function (__s628param0, __s628param1, __s628param2, __s628param3, __s628param4) {
    var __s628local0 = __s628param2.getTotalAmount();
    __s628param0 = Math.ceil(__s628param0 * (1 + __s628param1 / 100)) | 0;
    var __s628local1;
    var __s628local2;
    var __s628local3 = Math.min(__s628param0, __s628local0);
    var __s628local4 = DefenseConst.getSideUnitCount(__s628local3, __s628param3);
    var __s628local5 = __s628param2.getMeleeCount();
    var __s628local6 = __s628param2.getRangedCount();
    var __s628local7 = new Array(3);
    var __s628local8 = new Array(3);
    var __s628local9 = new Array(3);
    var __s628local10 = new Array(3);
    var __s628local11 = 0;
    var __s628local12 = 0;
    for (var __s628local13 = 0; __s628local13 < 3; __s628local13++) {
      __s628local9[__s628local13] = __s628local4[__s628local13] * __s628param4[__s628local13] / 100;
      __s628local10[__s628local13] = __s628local4[__s628local13] - __s628local9[__s628local13];
      __s628local11 += __s628local9[__s628local13];
      __s628local12 += __s628local10[__s628local13];
    }
    __s628local1 = __s628local11 | 0;
    __s628local2 = __s628local12 | 0;
    if (__s628local11 > __s628local5) {
      for (var __s628local14 = 0; __s628local14 < 3; __s628local14++) {
        __s628local9[__s628local14] = __s628local1 === 0 ? 0 : __s628local5 * __s628local9[__s628local14] / __s628local11;
        __s628local10[__s628local14] = __s628local4[__s628local14] - __s628local9[__s628local14];
      }
    } else if (__s628local12 > __s628local6) {
      for (var __s628local15 = 0; __s628local15 < 3; __s628local15++) {
        __s628local10[__s628local15] = __s628local2 === 0 ? 0 : __s628local6 * __s628local10[__s628local15] / __s628local12;
        __s628local9[__s628local15] = __s628local4[__s628local15] - __s628local10[__s628local15];
      }
    }
    for (var __s628local16 = 0; __s628local16 < 3; __s628local16++) {
      __s628local7[__s628local16] = __s628local9[__s628local16] | 0;
      __s628local8[__s628local16] = __s628local10[__s628local16] | 0;
    }
    var __s628local17 = new Array(3);
    for (var __s628local18 = 0; __s628local18 < 3; __s628local18++) {
      __s628local17[__s628local18] = __s628local9[__s628local18] - __s628local7[__s628local18];
    }
    var __s628local19 = new Array(3);
    for (var __s628local20 = 0; __s628local20 < 3; __s628local20++) {
      __s628local19[__s628local20] = __s628local10[__s628local20] - __s628local8[__s628local20];
    }
    var __s628local21 = __s628local17[0] + __s628local17[1] + __s628local17[2] + 0.5 | 0;
    var __s628local22 = __s628local19[0] + __s628local19[1] + __s628local19[2] + 0.49999 | 0;
    var __s628local23 = new Array(3);
    for (var __s628local24 = 0; __s628local24 < 3; __s628local24++) {
      __s628local23[__s628local24] = __s628local7[__s628local24] + __s628local8[__s628local24] === __s628local4[__s628local24];
    }
    for (var __s628local25, __s628local26 = DefenseConst.getIndicesOfMaxToMinSorting(__s628local17), __s628local27 = 0; __s628local27 < 3 && (__s628local25 = __s628local26[__s628local27], !(__s628local21 <= 0)); __s628local27++) {
      if (!__s628local23[__s628local25]) {
        __s628local7[__s628local25]++;
        __s628local21--;
        __s628local23[__s628local25] = __s628local7[__s628local25] + __s628local8[__s628local25] === __s628local4[__s628local25];
      }
    }
    __s628local26 = DefenseConst.getIndicesOfMaxToMinSorting(__s628local19);
    for (var __s628local28 = 0; __s628local28 < 3 && (__s628local25 = __s628local26[__s628local28], !(__s628local22 <= 0)); __s628local28++) {
      if (!__s628local23[__s628local25]) {
        __s628local8[__s628local25]++;
        __s628local22--;
        __s628local23[__s628local25] = __s628local7[__s628local25] + __s628local8[__s628local25] === __s628local4[__s628local25];
      }
    }
    var __s628local29 = __s628param2.getUnitTypeCount() * 2;
    var __s628local30 = new __s0local77(__s628local29);
    var __s628local31 = 0;
    for (var __s628local32 = __s628param2.getSoldierMeleeDefenseOrder(), __s628local33 = 0; __s628local33 < __s628local32.length; __s628local33++) {
      var __s628local34 = __s628local32[__s628local33];
      var __s628local35 = __s628param2.getItemAmount(__s628local34);
      var __s628local36 = __s628local7[0] + __s628local7[1] + __s628local7[2];
      var __s628local37 = Math.min(__s628local35, __s628local36);
      if (__s628local36 > 0 && __s628local37 > 0) {
        var __s628local38 = __s628local37 - (__s628local41 = Math.round(__s628local37 * 1 * __s628local7[DefenseConst.SIDE_LEFT] / __s628local36) | 0) - (__s628local42 = Math.round(__s628local37 * 1 * __s628local7[DefenseConst.SIDE_RIGHT] / __s628local36 - 0.0001) | 0);
        __s628param2.removeItem(__s628local34, __s628local37);
        __s628local30.leftSide[__s628local31] = __s628local34;
        __s628local30.leftSide[__s628local31 + 1] = __s628local41;
        __s628local30.middleSide[__s628local31] = __s628local34;
        __s628local30.middleSide[__s628local31 + 1] = __s628local38;
        __s628local30.rightSide[__s628local31] = __s628local34;
        __s628local30.rightSide[__s628local31 + 1] = __s628local42;
        __s628local31 += 2;
        __s628local7[DefenseConst.SIDE_LEFT] -= __s628local41;
        __s628local7[DefenseConst.SIDE_MIDDLE] -= __s628local38;
        __s628local7[DefenseConst.SIDE_RIGHT] -= __s628local42;
      }
    }
    for (var __s628local39 = __s628param2.getSoldierRangedDefenseOrder(), __s628local40 = 0; __s628local40 < __s628local39.length; __s628local40++) {
      __s628local34 = __s628local39[__s628local40];
      __s628local35 = __s628param2.getItemAmount(__s628local34);
      __s628local36 = __s628local8[0] + __s628local8[1] + __s628local8[2];
      __s628local37 = Math.min(__s628local35, __s628local36);
      if (__s628local36 > 0 && __s628local37 > 0) {
        var __s628local41;
        var __s628local42;
        __s628local38 = __s628local37 - (__s628local41 = Math.round(__s628local37 * 1 * __s628local8[DefenseConst.SIDE_LEFT] / __s628local36) | 0) - (__s628local42 = Math.round(__s628local37 * 1 * __s628local8[DefenseConst.SIDE_RIGHT] / __s628local36 - 0.0001) | 0);
        __s628param2.removeItem(__s628local34, __s628local37);
        __s628local30.leftSide[__s628local31] = __s628local34;
        __s628local30.leftSide[__s628local31 + 1] = __s628local41;
        __s628local30.middleSide[__s628local31] = __s628local34;
        __s628local30.middleSide[__s628local31 + 1] = __s628local38;
        __s628local30.rightSide[__s628local31] = __s628local34;
        __s628local30.rightSide[__s628local31 + 1] = __s628local42;
        __s628local31 += 2;
        __s628local8[DefenseConst.SIDE_LEFT] -= __s628local41;
        __s628local8[DefenseConst.SIDE_MIDDLE] -= __s628local38;
        __s628local8[DefenseConst.SIDE_RIGHT] -= __s628local42;
      }
    }
    for (var __s628local43 = __s628local31; __s628local43 < __s628local29; __s628local43++) {
      __s628local30.leftSide[__s628local43] = -1;
      __s628local30.middleSide[__s628local43] = -1;
      __s628local30.rightSide[__s628local43] = -1;
    }
    return __s628local30;
  };
  return DefenseConst;
}();
__s0local22.MAX_SLOTSIZE = 999;
__s0local22.MAX_SUPPORT_TOOLS_SLOTSIZE = 1;
__s0local22.TOOL_TYPE_WALL = 1;
__s0local22.TOOL_TYPE_GATE = 2;
__s0local22.TOOL_TYPE_FIELD = 3;
__s0local22.TOOL_TYPE_MOAT = 4;
__s0local22.TOOL_TYPE_KEEP = 5;
__s0local22.TOOL_TYPE_KEEP_DEFENSE_SUPPORT_TOOLS = 6;
__s0local22.DEFENCE_CATEGORY_MOAT = 2;
__s0local22.SIDE_LEFT = 0;
__s0local22.SIDE_MIDDLE = 1;
__s0local22.SIDE_RIGHT = 2;
__s0local22.MAX_SUPPORT_TOOL_TRIGGER_LIMIT = 2000;
exports.DefenseConst = __s0local22;
__s0local22.__class = "DefenseConst";
var __s0local23 = function () {
  return function DistrictConst() {};
}();
__s0local23.NOT_IN_DISTRICT = -1;
__s0local23.NO_SLOT = -1;
__s0local23.INVALID_DISTRICT_ID = -1;
exports.DistrictConst = __s0local23;
__s0local23.__class = "DistrictConst";
var __s0local24 = function () {
  function DontShowDialogConst() {}
  DontShowDialogConst.isValidDialogID = function (__s668param0) {
    return __s668param0 === DontShowDialogConst.WORLDMAP_TEASER;
  };
  return DontShowDialogConst;
}();
__s0local24.WORLDMAP_TEASER = 0;
exports.DontShowDialogConst = __s0local24;
__s0local24.__class = "DontShowDialogConst";
var __s0local25 = function () {
  return function DowntimeStatusConst() {};
}();
__s0local25.FREEZED = 1;
__s0local25.UNFREEZED = 0;
__s0local25.FOOD_PRODUCTION_MESSAGE = 1;
__s0local25.ALL_PRODUCTION_MESSAGE = 0;
exports.DowntimeStatusConst = __s0local25;
__s0local25.__class = "DowntimeStatusConst";
var __s0local26 = function () {
  function DungeonConst() {}
  DungeonConst.COOLDOWN_$LI$ = function () {
    if (DungeonConst.COOLDOWN == null) {
      DungeonConst.COOLDOWN = 10800;
    }
    return DungeonConst.COOLDOWN;
  };
  DungeonConst.getEventDungeonOwnerIDBySkinID = function (__s681param0) {
    switch (__s681param0) {
      case DungeonConst.DUNGEON_SKIN_ROBBER_BARON_KING:
        return DungeonConst.RANDOM_DUNGEON_EVENT_PLAYER_ID;
      case DungeonConst.DUNGEON_SKIN_COW:
        return DungeonConst.APRIL_DUNGEON_EVENT_PLAYER_ID;
      case DungeonConst.DUNGEON_SKIN_ST_PATRICKS_DAY:
        return DungeonConst.ST_PATRICKS_DAY_DUNGEON_EVENT_PLAYER_ID;
      case DungeonConst.DUNGEON_SKIN_EASTER:
        return DungeonConst.EASTER_DUNGEON_EVENT_PLAYER_ID;
      default:
        return DungeonConst.INVALID;
    }
  };
  DungeonConst.getEventDungeonDefaultOwnerID = function () {
    return DungeonConst.RANDOM_DUNGEON_EVENT_PLAYER_ID;
  };
  DungeonConst.getDungeonOwnerID = function (__s686param0, __s686param1) {
    if (__s686param0 === 0) {
      return DungeonConst.DUNGEON_PLAYER_ID - __s686param1;
    } else {
      return DungeonConst.KINGDOM_DUNGEON_PLAYER_ID - (__s686param0 - 1);
    }
  };
  DungeonConst.getBossDungeonOwnerID = function (__s690param0) {
    return DungeonConst.KINGDOM_BOSS_DUNGEON_PLAYER_ID - (__s690param0 - 1);
  };
  DungeonConst.getLevel = function (__s692param0, __s692param1) {
    var __s692local0 = DungeonConst.getKingdomOffset(__s692param1);
    return (Math.floor(DungeonConst.FACTOR_VICTORY_LEVEL * Math.pow(Math.abs(__s692param0), DungeonConst.POWER_VICTORY_LEVEL)) | 0) + __s692local0;
  };
  DungeonConst.getSkipCost = function (__s694param0, __s694param1) {
    return Math.max(1, (__s694param0 * __s694param1 / 180 | 0) / 60 | 0);
  };
  DungeonConst.getVictories = function (__s696param0, __s696param1) {
    var __s696local0 = DungeonConst.getKingdomOffset(__s696param1);
    return Math.floor(Math.pow((__s696param0 - __s696local0 + 1) / DungeonConst.FACTOR_VICTORY_LEVEL, 1 / DungeonConst.POWER_VICTORY_LEVEL)) | 0;
  };
  DungeonConst.getKingdomOffset = function (__s698param0) {
    var __s698local0 = 0;
    switch (__s698param0) {
      case 0:
        __s698local0 = 1;
        break;
      case 2:
        __s698local0 = 20;
        break;
      case 1:
        __s698local0 = 35;
        break;
      case 3:
        __s698local0 = 45;
    }
    return __s698local0;
  };
  DungeonConst.getResources = function (__s701param0) {
    return Math.pow(__s701param0, 2.2) * 1.2 + 90 | 0;
  };
  DungeonConst.getC1 = function (__s703param0) {
    if (__s703param0 >= 61) {
      return Math.pow(__s703param0, 1.1) * 210 | 0;
    } else {
      return Math.pow(__s703param0, 2.1) * 3.5 + 25 | 0;
    }
  };
  DungeonConst.getC2 = function (__s707param0) {
    return Math.max(0, (Math.random() * 11 - 5 + __s707param0 * 0.5 + 0.7) * 0.5) | 0;
  };
  DungeonConst.getC2Probability = function (__s709param0) {
    if (__s709param0 >= 3) {
      return 50;
    } else {
      return 0;
    }
  };
  DungeonConst.getWallUpgradeByLevel = function (__s713param0) {
    if (__s713param0 < 11) {
      return 1;
    } else if (__s713param0 < 24) {
      return 2;
    } else {
      return 3;
    }
  };
  DungeonConst.getWallWOD = function (__s718param0) {
    if (__s718param0 < 11) {
      return 501;
    } else if (__s718param0 < 24) {
      return 502;
    } else {
      return 503;
    }
  };
  DungeonConst.getGateWOD = function (__s723param0) {
    if (__s723param0 < 11) {
      return 450;
    } else if (__s723param0 < 24) {
      return 451;
    } else {
      return 452;
    }
  };
  DungeonConst.getGuards = function (__s728param0, __s728param1) {
    var __s728local0 = DungeonConst.getLevel(__s728param0, __s728param1);
    return Math.max(0, Math.min(50, Math.round((__s728local0 - 4) * 0.06 * (__s728local0 - 4) + (__s728local0 - 4) * 0.5)));
  };
  return DungeonConst;
}();
__s0local26.DUNGEON_PLAYER_ID = -202;
__s0local26.DUNGEON_PLAYER_NAME_COUNT = 13;
__s0local26.KINGDOM_DUNGEON_PLAYER_ID = -220;
__s0local26.KINGDOM_BOSS_DUNGEON_PLAYER_ID = -230;
__s0local26.BLUE_FACTION_KING = -410;
__s0local26.RED_FACTION_KING = -411;
__s0local26.RANDOM_DUNGEON_EVENT_PLAYER_ID = -500;
__s0local26.APRIL_DUNGEON_EVENT_PLAYER_ID = -501;
__s0local26.ST_PATRICKS_DAY_DUNGEON_EVENT_PLAYER_ID = -502;
__s0local26.EASTER_DUNGEON_EVENT_PLAYER_ID = -503;
__s0local26.RANDOM_DUNGEON_MAX_GUARDS = 50;
__s0local26.BASIC_NOMAD_CAMP_PLAYER_ID = -601;
__s0local26.BASIC_SAMURAI_CAMP_PLAYER_ID = -651;
__s0local26.BASIC_INVASION_CAMP_PLAYER_ID = -701;
__s0local26.BASIC_ALIEN_ID = -1000;
__s0local26.BASIC_SAMURAI_ALIEN_ID = -1001;
__s0local26.BASIC_RED_ALIEN_ID = -1002;
__s0local26.BASIC_ALLIANCE_NOMAD_CAMP_PLAYER_ID = -801;
__s0local26.BASIC_DAIMYO_CASTLE_PLAYER_ID = -811;
__s0local26.BASIC_DAIMYO_TOWNSHIP_PLAYER_ID = -815;
__s0local26.BASIC_COLLECTOR_PLAYER_ID = -1100;
__s0local26.BASIC_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER_PLAYER_ID = -1200;
__s0local26.BASIC_WOLF_KING_PLAYER_ID = -1201;
__s0local26.BASIC_ARE_PORTAL_PLAYER_ID = -1202;
__s0local26.DUNGEON_SKIN_ROBBER_BARON_KING = 1;
__s0local26.DUNGEON_SKIN_COW = 2;
__s0local26.DUNGEON_SKIN_ST_PATRICKS_DAY = 3;
__s0local26.DUNGEON_SKIN_EASTER = 4;
__s0local26.NOMAD_CAMP_COUNT = 4;
__s0local26.MESSAGE_FAKE_TUTORIAL_BATTLELOG_PID = -2;
__s0local26.DUNGEON_DELETION_CLASSIC_FACTOR = 1;
__s0local26.DUNGEON_DELETION_ICE_FACTOR = 2.2;
__s0local26.DUNGEON_DELETION_DESERT_FACTOR = 3.5;
__s0local26.DUNGEON_DELETION_VULCAN_FACTOR = 4;
__s0local26.NO_LOW_LEVEL_DUNGEON_ATTACK = false;
__s0local26.RAID_BOSS_DEFENDER_LEVEL = 120;
__s0local26.FACTOR_VICTORY_LEVEL = 1.9;
__s0local26.POWER_VICTORY_LEVEL = 0.555;
__s0local26.INVALID = -1;
exports.DungeonConst = __s0local26;
__s0local26.__class = "DungeonConst";
var __s0local27 = function () {
  function EffectConst() {}
  EffectConst.boostToModifier = function (__s734param0) {
    var __s734local0 = (EffectConst.BASE_BOOST_PERCENTAGE + __s734param0) * EffectConst.TO_MULTIPLIER_FACTOR;
    return Math.max(__s734local0, 0);
  };
  EffectConst.modifierToIntBoost = function (__s736param0) {
    var __s736local0 = (__s736param0 - EffectConst.DEFAULT_MODIFIER) * EffectConst.BASE_BOOST_PERCENTAGE | 0;
    return Math.max(__s736local0, 0);
  };
  EffectConst.boostsToModifier = function () {
    var __s738local0 = [];
    for (var __s738local1 = 0; __s738local1 < arguments.length; __s738local1++) {
      __s738local0[__s738local1] = arguments[__s738local1];
    }
    var __s738local2 = EffectConst.BASE_BOOST_PERCENTAGE;
    for (var __s738local3 = 0; __s738local3 < __s738local0.length; __s738local3++) {
      __s738local2 += __s738local0[__s738local3];
    }
    var __s738local4 = __s738local2 * EffectConst.TO_MULTIPLIER_FACTOR;
    return Math.max(__s738local4, 0);
  };
  EffectConst.addBoostToModifier = function (__s744param0, __s744param1) {
    __s744param1 += __s744param0 * EffectConst.TO_MULTIPLIER_FACTOR;
    return Math.max(__s744param1, 0);
  };
  EffectConst.reductionBoostToModifier = function (__s746param0) {
    return EffectConst.boostToModifier(-__s746param0);
  };
  EffectConst.addReductionBoostToModifier = function (__s748param0, __s748param1) {
    return EffectConst.addBoostToModifier(-__s748param0, __s748param1);
  };
  EffectConst.boostToBoostFactor = function (__s750param0) {
    return __s750param0 * EffectConst.TO_MULTIPLIER_FACTOR;
  };
  EffectConst.boostsToBoostFactor = function () {
    var __s752local0 = [];
    for (var __s752local1 = 0; __s752local1 < arguments.length; __s752local1++) {
      __s752local0[__s752local1] = arguments[__s752local1];
    }
    var __s752local2 = 0;
    for (var __s752local3 = 0; __s752local3 < __s752local0.length; __s752local3++) {
      __s752local2 += __s752local0[__s752local3];
    }
    return EffectConst.boostToBoostFactor(__s752local2);
  };
  EffectConst.boostFactorToBoost = function (__s758param0) {
    return __s758param0 * EffectConst.BASE_BOOST_PERCENTAGE;
  };
  EffectConst.addBoostFactorsToModifier = function (__s760param0) {
    var __s760local0 = [];
    for (var __s760local1 = 1; __s760local1 < arguments.length; __s760local1++) {
      __s760local0[__s760local1 - 1] = arguments[__s760local1];
    }
    var __s760local2 = __s760param0;
    for (var __s760local3 = 0; __s760local3 < __s760local0.length; __s760local3++) {
      __s760local2 += __s760local0[__s760local3];
    }
    return __s760local2;
  };
  EffectConst.reductionBoostFactorToModifier = function (__s766param0) {
    return EffectConst.boostFactorsToModifier(-__s766param0);
  };
  EffectConst.boostFactorsToModifier = function () {
    var __s768local0 = [];
    for (var __s768local1 = 0; __s768local1 < arguments.length; __s768local1++) {
      __s768local0[__s768local1] = arguments[__s768local1];
    }
    return EffectConst.addBoostFactorsToModifier.apply(this, [EffectConst.DEFAULT_MODIFIER].concat(__s768local0));
  };
  EffectConst.applyBoostToValueRoundingWithCeil = function (__s772param0, __s772param1) {
    var __s772local0 = EffectConst.boostToModifier(__s772param0);
    return Math.ceil(__s772param1 * __s772local0) | 0;
  };
  EffectConst.applyBoostToValueRoundingWithFloor = function (__s774param0, __s774param1) {
    var __s774local0 = EffectConst.boostToModifier(__s774param0);
    return Math.floor(__s774param1 * __s774local0) | 0;
  };
  EffectConst.applyBoostToValue = function (__s776param0, __s776param1) {
    return __s776param1 * EffectConst.boostToModifier(__s776param0);
  };
  EffectConst.getBoostedAmount = function (__s778param0, __s778param1) {
    return EffectConst.applyBoostToValueRoundingWithCeil(__s778param0, __s778param1) - __s778param1;
  };
  EffectConst.reduceBoostToValueRoundingWithFloor = function (__s780param0, __s780param1) {
    var __s780local0 = EffectConst.addBoostToModifier(-__s780param0, 1);
    return Math.floor(__s780param1 * __s780local0) | 0;
  };
  return EffectConst;
}();
__s0local27.BASE_BOOST_PERCENTAGE = 100;
__s0local27.TO_MULTIPLIER_FACTOR = 0.01;
__s0local27.DEFAULT_MODIFIER = 1;
__s0local27.NO_BOOST = 0;
__s0local27.NO_BOOST_FACTOR = 0;
__s0local27.NO_BONUS = 0;
__s0local27.DUMMY_VALUE = 0;
exports.EffectConst = __s0local27;
__s0local27.__class = "EffectConst";
var __s0local28 = function () {
  function EquipmentConst() {}
  EquipmentConst.SLOT_IDS_$LI$ = function () {
    if (EquipmentConst.SLOT_IDS == null) {
      EquipmentConst.SLOT_IDS = [EquipmentConst.SLOT_ARMOR, EquipmentConst.SLOT_WEAPON, EquipmentConst.SLOT_HELMET, EquipmentConst.SLOT_ARTIFACT, EquipmentConst.SLOT_SKIN, EquipmentConst.SLOT_HERO];
    }
    return EquipmentConst.SLOT_IDS;
  };
  EquipmentConst.SLOT_IDS_FOR_GEMS_$LI$ = function () {
    if (EquipmentConst.SLOT_IDS_FOR_GEMS == null) {
      EquipmentConst.SLOT_IDS_FOR_GEMS = [EquipmentConst.SLOT_ARMOR, EquipmentConst.SLOT_WEAPON, EquipmentConst.SLOT_HELMET, EquipmentConst.SLOT_ARTIFACT, EquipmentConst.SLOT_SKIN];
    }
    return EquipmentConst.SLOT_IDS_FOR_GEMS;
  };
  EquipmentConst.PER_TEN_THOUSAND_$LI$ = function () {
    if (EquipmentConst.PER_TEN_THOUSAND == null) {
      EquipmentConst.PER_TEN_THOUSAND = 0.0001;
    }
    return EquipmentConst.PER_TEN_THOUSAND;
  };
  EquipmentConst.getMaxEnchantmentLevel = function (__s795param0) {
    switch (__s795param0) {
      case EquipmentConst.RARENESS_COMMON:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_COMMON;
      case EquipmentConst.RARENESS_RARE:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_RARE;
      case EquipmentConst.RARENESS_EPIC:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_EPIC;
      case EquipmentConst.RARENESS_LEGENDARY:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_LEGENDARY;
      case EquipmentConst.RARENESS_UNIQUE:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_UNIQUE;
      case EquipmentConst.RARENESS_RELIC:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_RELIC;
    }
    return 0;
  };
  EquipmentConst.isValidForEnchanting = function (__s798param0, __s798param1) {
    return __s798param1 < EquipmentConst.getMaxEnchantmentLevel(__s798param0);
  };
  EquipmentConst.getC2PriceForEnchanting = function (__s800param0) {
    return (Math.round(Math.pow(__s800param0, 2.1) * 5.5) | 0) * 10;
  };
  EquipmentConst.getC1PriceForEnchanting = function (__s802param0) {
    return (Math.round(Math.pow(__s802param0, 1.7) * 17) | 0) * 10;
  };
  EquipmentConst.getPriceForCrafting = function (__s804param0, __s804param1, __s804param2) {
    var __s804local0 = 0;
    if (__s804param0 === EquipmentConst.NORMAL_CRAFT_COUNT) {
      switch (__s804param1) {
        case EquipmentConst.RARENESS_COMMON:
          __s804local0 = EquipmentConst.PRICE_COMMON;
          break;
        case EquipmentConst.RARENESS_RARE:
          __s804local0 = EquipmentConst.PRICE_RARE;
          break;
        case EquipmentConst.RARENESS_EPIC:
          __s804local0 = EquipmentConst.PRICE_EPIC;
          break;
        case EquipmentConst.RARENESS_LEGENDARY:
          __s804local0 = EquipmentConst.PRICE_LEGENDARY;
      }
    } else {
      switch (__s804param1) {
        case EquipmentConst.RARENESS_COMMON:
          __s804local0 = EquipmentConst.PRICE_TORARE;
          break;
        case EquipmentConst.RARENESS_RARE:
          __s804local0 = EquipmentConst.PRICE_TOEPIC;
          break;
        case EquipmentConst.RARENESS_EPIC:
          __s804local0 = EquipmentConst.PRICE_TOLEGENDARY;
      }
    }
    return Math.floor(__s804local0 * __s804param2) | 0;
  };
  EquipmentConst.getEnchantingChance = function (__s810param0) {
    return Math.min(100, Math.round(Math.exp(__s810param0 * -0.2) * 1.28 * 100));
  };
  EquipmentConst.getEquipmentBonus = function (__s812param0, __s812param1, __s812param2) {
    var __s812local0 = __s812param0 * __s812param1 * __s812param2 * EquipmentConst.PER_TEN_THOUSAND_$LI$();
    if (__s812local0 > 1 || __s812local0 < -1) {
      return __s812local0 | 0;
    } else if (__s812local0 > 0) {
      return 1;
    } else if (__s812local0 < 0) {
      return -1;
    } else {
      return 0;
    }
  };
  EquipmentConst.getEquipmentBonusWithEnchantment = function (__s818param0, __s818param1, __s818param2, __s818param3, __s818param4) {
    return EquipmentConst.getEquipmentBonus(__s818param0, __s818param1, __s818param2) + __s818param3 * __s818param4;
  };
  EquipmentConst.getBaronCapitalPick = function (__s820param0) {
    switch (__s820param0) {
      case __s0local100.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_CLASSIC;
      case __s0local107.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_ICE;
      case __s0local106.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_DESERT;
      case __s0local110.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_VULCAN;
    }
    return -1;
  };
  EquipmentConst.isHero = function (__s823param0) {
    switch (__s823param0) {
      case EquipmentConst.RARENESS_HERO_UNIQUE:
      case EquipmentConst.RARENESS_HERO_COMMON:
      case EquipmentConst.RARENESS_HERO_RARE:
      case EquipmentConst.RARENESS_HERO_EPIC:
      case EquipmentConst.RARENESS_HERO_LEGENDARY:
      case EquipmentConst.RARENESS_HERO_RELIC:
        return true;
      default:
        return false;
    }
  };
  EquipmentConst.isOutpostBaron = function (__s826param0) {
    return __s826param0 === EquipmentConst.PICK_BARON_A1 || __s826param0 === EquipmentConst.PICK_BARON_A2 || __s826param0 === EquipmentConst.PICK_BARON_A3;
  };
  return EquipmentConst;
}();
__s0local28.NORMAL_CRAFT_COUNT = 3;
__s0local28.SUPER_CRAFT_COUNT = 6;
__s0local28.EQUIPMENT_SIZE_NORMAL = 400;
__s0local28.EQUIPMENT_SIZE_MAX = 420;
__s0local28.UNDEFINED_WEARER_ID = -1;
__s0local28.BARON_WEARER_ID = 1;
__s0local28.COMMANDER_WEARER_ID = 2;
__s0local28.SLOT_ARMOR = 1;
__s0local28.SLOT_WEAPON = 2;
__s0local28.SLOT_HELMET = 3;
__s0local28.SLOT_ARTIFACT = 4;
__s0local28.SLOT_SKIN = 5;
__s0local28.SLOT_HERO = 6;
__s0local28.RARENESS_UNIQUE = 0;
__s0local28.RARENESS_COMMON = 1;
__s0local28.RARENESS_RARE = 2;
__s0local28.RARENESS_EPIC = 3;
__s0local28.RARENESS_LEGENDARY = 4;
__s0local28.RARENESS_RELIC = 5;
__s0local28.RARENESS_HERO_UNIQUE = 10;
__s0local28.RARENESS_HERO_COMMON = 11;
__s0local28.RARENESS_HERO_RARE = 12;
__s0local28.RARENESS_HERO_EPIC = 13;
__s0local28.RARENESS_HERO_LEGENDARY = 14;
__s0local28.RARENESS_HERO_RELIC = 15;
__s0local28.RARENESS_HERO_BEGINN = 10;
__s0local28.PRICE_COMMON = 10;
__s0local28.PRICE_TORARE = 25;
__s0local28.PRICE_RARE = 500;
__s0local28.PRICE_TOEPIC = 2500;
__s0local28.PRICE_EPIC = 4000;
__s0local28.PRICE_TOLEGENDARY = 20000;
__s0local28.PRICE_LEGENDARY = 25000;
__s0local28.PICK_BARON_CLASSIC = 0;
__s0local28.PICK_BARON_ICE = 1;
__s0local28.PICK_BARON_DESERT = 2;
__s0local28.PICK_BARON_VULCAN = 3;
__s0local28.PICK_BARON_CAPITAL_CLASSIC = 4;
__s0local28.PICK_BARON_FACTION = 5;
__s0local28.PICK_BARON_A1 = 6;
__s0local28.PICK_BARON_A2 = 7;
__s0local28.PICK_BARON_A3 = 8;
__s0local28.PICK_BARON_METROPOL = 9;
__s0local28.PICK_BARON_CAPITAL_ICE = 10;
__s0local28.PICK_BARON_CAPITAL_DESERT = 11;
__s0local28.PICK_BARON_CAPITAL_VULCAN = 12;
__s0local28.PICK_BARON_ISLAND = 13;
__s0local28.BARON_BOSS_DUNGEON = -51;
__s0local28.WOLFKING_BARON = -214;
__s0local28.BARON_FACTION_RED = -101;
__s0local28.BARON_FACTION_BLUE = -102;
__s0local28.NO_ENCHANTMENT = 0;
__s0local28.MAX_ENCHANTMENTLEVEL_COMMON = 3;
__s0local28.MAX_ENCHANTMENTLEVEL_RARE = 8;
__s0local28.MAX_ENCHANTMENTLEVEL_EPIC = 12;
__s0local28.MAX_ENCHANTMENTLEVEL_LEGENDARY = 16;
__s0local28.MAX_ENCHANTMENTLEVEL_UNIQUE = 20;
__s0local28.MAX_ENCHANTMENTLEVEL_RELIC = 50;
__s0local28.LORD_NAME_MIN_LENGTH = 3;
__s0local28.LORD_NAME_MAX_LENGTH = 15;
__s0local28.EQUIPMENT_TYPE_ID_GENERATED = 0;
__s0local28.EQUIPMENT_TYPE_ID_UNIQUE = 1;
__s0local28.EQUIPMENT_TYPE_ID_UNIQUE_TEMPORARY = 2;
__s0local28.EQUIPMENT_TYPE_ID_RELIC = 3;
exports.EquipmentConst = __s0local28;
__s0local28.__class = "EquipmentConst";
var __s0local29 = function () {
  return function EventAutoScalingConst() {};
}();
__s0local29.DIFFICULTY_NOT_SELECTED = -1;
__s0local29.CLASSIC_EVENT_DIFFICULTY = 0;
__s0local29.ANY_EVENT_DIFFICULTY = 1;
exports.EventAutoScalingConst = __s0local29;
__s0local29.__class = "EventAutoScalingConst";
var __s0local30 = function () {
  function EventConst() {}
  EventConst.ARTIFACT_EVENT_TYPES_$LI$ = function () {
    if (EventConst.ARTIFACT_EVENT_TYPES == null) {
      EventConst.ARTIFACT_EVENT_TYPES = [EventConst.EVENTTYPE_ARTIFACT2, EventConst.EVENTTYPE_ARTIFACT_ICECREAM, EventConst.EVENTTYPE_ARTIFACT_DESSERT, EventConst.EVENTTYPE_ARTIFACT_VOLCANO];
    }
    return EventConst.ARTIFACT_EVENT_TYPES;
  };
  EventConst.DUNGEON_EVENT_TYPES_$LI$ = function () {
    if (EventConst.DUNGEON_EVENT_TYPES == null) {
      EventConst.DUNGEON_EVENT_TYPES = [EventConst.EVENTTYPE_DUNGEON, EventConst.EVENTTYPE_APRIL];
    }
    return EventConst.DUNGEON_EVENT_TYPES;
  };
  EventConst.CRUSADE_EVENT_TYPES_$LI$ = function () {
    if (EventConst.CRUSADE_EVENT_TYPES == null) {
      EventConst.CRUSADE_EVENT_TYPES = [EventConst.EVENTTYPE_CRUSADE_THORNKING, EventConst.EVENTTYPE_CRUSADE_SEAQUEEN, EventConst.EVENTTYPE_CRUSADE_UNDERWORLD];
    }
    return EventConst.CRUSADE_EVENT_TYPES;
  };
  EventConst.NOMAD_INVASION_EVENT_TYPES_$LI$ = function () {
    if (EventConst.NOMAD_INVASION_EVENT_TYPES == null) {
      EventConst.NOMAD_INVASION_EVENT_TYPES = [EventConst.EVENTTYPE_NOMADINVASION, EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE];
    }
    return EventConst.NOMAD_INVASION_EVENT_TYPES;
  };
  EventConst.SAMURAI_INVASION_EVENT_TYPES_$LI$ = function () {
    if (EventConst.SAMURAI_INVASION_EVENT_TYPES == null) {
      EventConst.SAMURAI_INVASION_EVENT_TYPES = [EventConst.EVENTTYPE_SAMURAI_INVASION];
    }
    return EventConst.SAMURAI_INVASION_EVENT_TYPES;
  };
  EventConst.FACTION_INVASION_EVENT_TYPES_$LI$ = function () {
    if (EventConst.FACTION_INVASION_EVENT_TYPES == null) {
      EventConst.FACTION_INVASION_EVENT_TYPES = [EventConst.EVENTTYPE_FACTION_INVASION];
    }
    return EventConst.FACTION_INVASION_EVENT_TYPES;
  };
  EventConst.EVENTTYPES_WITH_ALLIANCE_INVASION_CAMP_$LI$ = function () {
    if (EventConst.EVENTTYPES_WITH_ALLIANCE_INVASION_CAMP == null) {
      EventConst.EVENTTYPES_WITH_ALLIANCE_INVASION_CAMP = [EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND];
    }
    return EventConst.EVENTTYPES_WITH_ALLIANCE_INVASION_CAMP;
  };
  EventConst.ALL_PACKAGEEVENT_EVENT_TYPES_$LI$ = function () {
    if (EventConst.ALL_PACKAGEEVENT_EVENT_TYPES == null) {
      EventConst.ALL_PACKAGEEVENT_EVENT_TYPES = [EventConst.EVENTTYPE_UNITDEALER_ISLAND, EventConst.EVENTTYPE_UNITDEALER_UNDERWORLD, EventConst.EVENTTYPE_UNITDEALER_BERIMOND, EventConst.EVENTTYPE_MERCHANT, EventConst.EVENTTYPE_ARMORER, EventConst.EVENTTYPE_PLAGUE, EventConst.EVENTTYPE_UNITDEALER, EventConst.EVENTTYPE_NOMADHUNTER, EventConst.EVENTTYPE_UNITDEALER_SEAQUEEN, EventConst.EVENTTYPE_EQUIPMENTMERCHANT, EventConst.EVENTTYPE_MERCHANT_FACTION, EventConst.EVENTTYPE_GIFT_TRADER, EventConst.EVENTTYPE_UNITDEALER_SAMURAI, EventConst.EVENTTYPE_UNITDEALER_FACTION_INVASION, EventConst.EVENTTYPE_APPRENTICE_BLACKSMITH, EventConst.EVENTTYPE_WISHING_WELL_COIN_VENDOR, EventConst.EVENTTYPE_NOMADINVASION_VENDOR, EventConst.EVENTTYPE_SAMURAIINVASION_VENDOR, EventConst.EVENTTYPE_COLLECTOR_SHOP, EventConst.EVENTTYPE_DAIMYO_SHOP, EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR];
    }
    return EventConst.ALL_PACKAGEEVENT_EVENT_TYPES;
  };
  EventConst.MODIFIABLE_PACKAGEEVENT_EVENT_TYPES_$LI$ = function () {
    if (EventConst.MODIFIABLE_PACKAGEEVENT_EVENT_TYPES == null) {
      EventConst.MODIFIABLE_PACKAGEEVENT_EVENT_TYPES = [EventConst.EVENTTYPE_ARMORER, EventConst.EVENTTYPE_MERCHANT, EventConst.EVENTTYPE_EQUIPMENTMERCHANT, EventConst.EVENTTYPE_GIFT_TRADER];
    }
    return EventConst.MODIFIABLE_PACKAGEEVENT_EVENT_TYPES;
  };
  EventConst.ALIEN_INVASION_EVENT_TYPES_$LI$ = function () {
    if (EventConst.ALIEN_INVASION_EVENT_TYPES == null) {
      EventConst.ALIEN_INVASION_EVENT_TYPES = [EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, EventConst.EVENTTYPE_SAMURAI_ALIEN_INVASION, EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE];
    }
    return EventConst.ALIEN_INVASION_EVENT_TYPES;
  };
  EventConst.TREASURE_MAP_UNIT_DEALERS_$LI$ = function () {
    if (EventConst.TREASURE_MAP_UNIT_DEALERS == null) {
      EventConst.TREASURE_MAP_UNIT_DEALERS = [EventConst.EVENTTYPE_UNITDEALER, EventConst.EVENTTYPE_UNITDEALER_UNDERWORLD, EventConst.EVENTTYPE_UNITDEALER_SEAQUEEN];
    }
    return EventConst.TREASURE_MAP_UNIT_DEALERS;
  };
  EventConst.COLOSSUS_EVENT_TYPES_$LI$ = function () {
    if (EventConst.COLOSSUS_EVENT_TYPES == null) {
      EventConst.COLOSSUS_EVENT_TYPES = [EventConst.EVENTTYPE_COLOSSUS, EventConst.EVENTTYPE_HORSE_COLOSSUS, EventConst.EVENTTYPE_COIN_COLOSSUS];
    }
    return EventConst.COLOSSUS_EVENT_TYPES;
  };
  EventConst.BUY_INSTANT_TOOL_CHECK_RELEVANT_EVENTS_$LI$ = function () {
    if (EventConst.BUY_INSTANT_TOOL_CHECK_RELEVANT_EVENTS == null) {
      EventConst.BUY_INSTANT_TOOL_CHECK_RELEVANT_EVENTS = [EventConst.EVENTTYPE_ARMORER, EventConst.EVENTTYPE_NOMADHUNTER, EventConst.EVENTTYPE_UNITDEALER_BERIMOND, EventConst.EVENTTYPE_UNITDEALER_SAMURAI, EventConst.EVENTTYPE_UNITDEALER_FACTION_INVASION];
    }
    return EventConst.BUY_INSTANT_TOOL_CHECK_RELEVANT_EVENTS;
  };
  EventConst.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT_$LI$ = function () {
    if (EventConst.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT == null) {
      EventConst.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT = [EventConst.LEAGUETYPE_EVENT_SUBTYPE_DEFAULT];
    }
    return EventConst.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT;
  };
  EventConst.LTPE_DEFAULT_SUBTYPES_$LI$ = function () {
    if (EventConst.LTPE_DEFAULT_SUBTYPES == null) {
      EventConst.LTPE_DEFAULT_SUBTYPES = EventConst.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT_$LI$();
    }
    return EventConst.LTPE_DEFAULT_SUBTYPES;
  };
  EventConst.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_ALIEN_INVASION_ALLIANCE_$LI$ = function () {
    if (EventConst.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_ALIEN_INVASION_ALLIANCE == null) {
      EventConst.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_ALIEN_INVASION_ALLIANCE = EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALIEN_INVASION_ALLIANCE;
    }
    return EventConst.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_ALIEN_INVASION_ALLIANCE;
  };
  EventConst.LEAGUETYPE_EVENT_SUBTYPES_ALIEN_INVASION_ALLIANCE_$LI$ = function () {
    if (EventConst.LEAGUETYPE_EVENT_SUBTYPES_ALIEN_INVASION_ALLIANCE == null) {
      EventConst.LEAGUETYPE_EVENT_SUBTYPES_ALIEN_INVASION_ALLIANCE = [EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALIEN_INVASION_ALLIANCE];
    }
    return EventConst.LEAGUETYPE_EVENT_SUBTYPES_ALIEN_INVASION_ALLIANCE;
  };
  EventConst.LEAGUETYPE_EVENT_SUBTYPES_FACTION_$LI$ = function () {
    if (EventConst.LEAGUETYPE_EVENT_SUBTYPES_FACTION == null) {
      EventConst.LEAGUETYPE_EVENT_SUBTYPES_FACTION = [EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_ALLIANCE, EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_BLUE, EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_RED];
    }
    return EventConst.LEAGUETYPE_EVENT_SUBTYPES_FACTION;
  };
  EventConst.LTPE_DEFAULT_SUBTYPE_$LI$ = function () {
    if (EventConst.LTPE_DEFAULT_SUBTYPE == null) {
      EventConst.LTPE_DEFAULT_SUBTYPE = EventConst.LEAGUETYPE_EVENT_SUBTYPE_DEFAULT;
    }
    return EventConst.LTPE_DEFAULT_SUBTYPE;
  };
  EventConst.ALLOWED_EVENT_TYPES_FOR_LTPE_$LI$ = function () {
    if (EventConst.ALLOWED_EVENT_TYPES_FOR_LTPE == null) {
      EventConst.ALLOWED_EVENT_TYPES_FOR_LTPE = [EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, EventConst.EVENTTYPE_SAMURAI_INVASION, EventConst.EVENTTYPE_FACTION_INVASION, EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE];
    }
    return EventConst.ALLOWED_EVENT_TYPES_FOR_LTPE;
  };
  EventConst.EVENT_TYPES_FOR_OFFICERS_SCHOOL_$LI$ = function () {
    if (EventConst.EVENT_TYPES_FOR_OFFICERS_SCHOOL == null) {
      EventConst.EVENT_TYPES_FOR_OFFICERS_SCHOOL = [EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, EventConst.EVENTTYPE_SAMURAI_INVASION, EventConst.EVENTTYPE_FACTION_INVASION, EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE];
    }
    return EventConst.EVENT_TYPES_FOR_OFFICERS_SCHOOL;
  };
  EventConst.LUCKY_WHEEL_EVENT_TYPES_$LI$ = function () {
    if (EventConst.LUCKY_WHEEL_EVENT_TYPES == null) {
      EventConst.LUCKY_WHEEL_EVENT_TYPES = [EventConst.EVENTTYPE_LUCKYWHEEL, EventConst.EVENTTYPE_LUCKYWHEEL_SD];
    }
    return EventConst.LUCKY_WHEEL_EVENT_TYPES;
  };
  EventConst.QUEST_SKIP_AUTO_START_EVENTS_$LI$ = function () {
    if (EventConst.QUEST_SKIP_AUTO_START_EVENTS == null) {
      EventConst.QUEST_SKIP_AUTO_START_EVENTS = [EventConst.EVENTTYPE_ALLIANCE_MOBILISATION, EventConst.EVENTTYPE_ALLIANCE_RAID_MOBILISATION, EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_QUEST_EVENT];
    }
    return EventConst.QUEST_SKIP_AUTO_START_EVENTS;
  };
  EventConst.getBountyPrizeC1ByTargetLevel = function (__s905param0) {
    return (Math.round(Math.pow(__s905param0, 0.75) * 415 / 100) | 0) * 100;
  };
  EventConst.getItemPositionByC2Amount = function (__s907param0) {
    switch (__s907param0) {
      case 2000:
        return 1;
      case 6500:
        return 2;
      case 15000:
        return 3;
      case 30000:
        return 4;
      case 50000:
        return 5;
      case 85000:
        return 6;
      case 180000:
        return 7;
      case 380000:
        return 8;
      default:
        return -1;
    }
  };
  return EventConst;
}();
__s0local30.TRIGGER_ID_OFFSET = 600;
__s0local30.INVALID_EVENTTYPE = -1;
__s0local30.EVENTTYPE_CRUSADE_THORNKING = 2;
__s0local30.EVENTTYPE_FACTION = 3;
__s0local30.EVENTTYPE_CRUSADE_SEAQUEEN = 4;
__s0local30.EVENTTYPE_NOMADINVASION = 5;
__s0local30.EVENTTYPE_PAYMENTREWARD_SPECIAL_OFFER = 6;
__s0local30.EVENTTYPE_PRIME_SALES = 7;
__s0local30.EVENTTYPE_SKIP_FOR_FREE = 8;
__s0local30.EVENTTYPE_EGA_VOTING = 10;
__s0local30.EVENTTYPE_GGS_GIFT = 13;
__s0local30.EVENTTYPE_UNITDEALER_ISLAND = 14;
__s0local30.EVENTTYPE_LUCKYWHEEL = 15;
__s0local30.EVENTTYPE_GLORY_BOOSTER = 16;
__s0local30.EVENTTYPE_UNITDEALER_UNDERWORLD = 17;
__s0local30.EVENTTYPE_ADJUST_SKIP_BUILDING = 18;
__s0local30.EVENTTYPE_ARTIFACT_VERYLOW = 19;
__s0local30.EVENTTYPE_MERCHANT = 22;
__s0local30.EVENTTYPE_ARTIFACT = 23;
__s0local30.EVENTTYPE_TOURNAMENT = 24;
__s0local30.EVENTTYPE_BOUNTYHUNTER = 25;
__s0local30.EVENTTYPE_DUNGEON = 26;
__s0local30.EVENTTYPE_ARMORER = 27;
__s0local30.EVENTTYPE_RESSOURCEEXCHANGER = 28;
__s0local30.EVENTTYPE_ARTIFACT2 = 29;
__s0local30.EVENTTYPE_ARTIFACT_LOW = 30;
__s0local30.EVENTTYPE_RATINGEVENT = 32;
__s0local30.EVENTTYPE_ALCHEMIST = 35;
__s0local30.EVENTTYPE_ALLIANCE_TOURNAMENT = 36;
__s0local30.EVENTTYPE_ARTIFACT_ICECREAM = 37;
__s0local30.EVENTTYPE_ARTIFACT_DESSERT = 38;
__s0local30.EVENTTYPE_ARTIFACT_VOLCANO = 39;
__s0local30.EVENTTYPE_ARTIFACT_LOW_LEVEL = 67;
__s0local30.EVENTTYPE_CONSTRUCTION_EXPERT = 40;
__s0local30.EVENTTYPE_PLAGUE = 41;
__s0local30.EVENTTYPE_MERCHANT_FACTION = 42;
__s0local30.EVENTTYPE_UNITDEALER = 43;
__s0local30.EVENTTYPE_COLOSSUS = 44;
__s0local30.EVENTTYPE_ALLIPRIME = 45;
__s0local30.EVENTTYPE_ENCHANTER = 46;
__s0local30.EVENTTYPE_APRIL = 48;
__s0local30.EVENTTYPE_NOMADHUNTER = 49;
__s0local30.EVENTTYPE_RESEARCH_EXPERT = 50;
__s0local30.EVENTTYPE_ALLIPAYMENT = 55;
__s0local30.EVENTTYPE_HORSE_COLOSSUS = 57;
__s0local30.EVENTTYPE_UNITDEALER_SEAQUEEN = 58;
__s0local30.EVENTTYPE_POINT_EVENT = 60;
__s0local30.EVENTTYPE_EVENT_SKIN = 61;
__s0local30.EVENTTYPE_BEGGING_KNIGHTS = 62;
__s0local30.EVENTTYPE_WORLD_CUP = 63;
__s0local30.EVENTTYPE_CRUSADE_UNDERWORLD = 64;
__s0local30.EVENTTYPE_USER_SURVEY = 65;
__s0local30.EVENTTYPE_GIFT_TRADER = 66;
__s0local30.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES = 68;
__s0local30.EVENTTYPE_COIN_COLOSSUS = 69;
__s0local30.EVENTTYPE_PRIME_SALES_REVIVE_ALL = 70;
__s0local30.EVENTTYPE_ALIEN_INVASION_ALLIANCE = 71;
__s0local30.EVENTTYPE_SAMURAI_ALIEN_INVASION = 500;
__s0local30.EVENTTYPE_NOMADINVASION_ALLIANCE = 72;
__s0local30.EVENTTYPE_EVENT_ANNOUNCEMENT = 73;
__s0local30.EVENTTYPE_REAL_CURRENCY_PRIME_DAY = 74;
__s0local30.EVENTTYPE_EVENT_BOOSTER_PRIME_SALE = 75;
__s0local30.EVENTTYPE_UNITDEALER_BERIMOND = 76;
__s0local30.EVENTTYPE_EVENT_TEMPORARY_QUESTS = 77;
__s0local30.EVENTTYPE_EVENT_ONE_TIME_OFFER = 78;
__s0local30.EVENTTYPE_REACTIVATION_PRIME_DAY = 79;
__s0local30.EVENTTYPE_SAMURAI_INVASION = 80;
__s0local30.EVENTTYPE_UNITDEALER_SAMURAI = 81;
__s0local30.EVENTTYPE_TIERED_PRIME_DAY = 82;
__s0local30.EVENTTYPE_LONGTERM_POINT_EVENT = 83;
__s0local30.EVENTTYPE_PRIVATE_PRIME_TIME_EVENT = 84;
__s0local30.EVENTTYPE_FACTION_INVASION = 85;
__s0local30.EVENTTYPE_UNITDEALER_FACTION_INVASION = 86;
__s0local30.EVENTTYPE_PRIME_SALES_TECHNICUS = 87;
__s0local30.EVENTTYPE_PRIME_SALES_RELIC_ENCHANTER = 88;
__s0local30.EVENTTYPE_LUCKYWHEEL_SD = 89;
__s0local30.EVENTTYPE_SHOPPING_CART_PRIMEDAY = 90;
__s0local30.EVENTTYPE_APPRENTICE_BLACKSMITH = 92;
__s0local30.EVENTTYPE_WISHING_WELL_COIN_VENDOR = 93;
__s0local30.EVENTTYPE_NOMADINVASION_VENDOR = 94;
__s0local30.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT = 95;
__s0local30.EVENTTYPE_TIMELIMITED_CAMPAIGN_QUEST_EVENT = 96;
__s0local30.EVENTTYPE_UNIT_PRIME_SALE = 100;
__s0local30.EVENTTYPE_EQUIPMENTMERCHANT = 101;
__s0local30.EVENTTYPE_TEMPSERVER = 106;
__s0local30.EVENTTYPE_COLLECTOR = 108;
__s0local30.EVENTTYPE_COLLECTOR_SHOP = 109;
__s0local30.EVENTTYPE_KINGDOMS_LEAGUE = 601;
__s0local30.EVENTTYPE_KINGDOMS_LEAGUE_KILL = 602;
__s0local30.EVENTTYPE_KINGDOMS_LEAGUE_CHANGE_RUNTIME = 603;
__s0local30.EVENTTYPE_GLOBAL_EFFECTS = 610;
__s0local30.EVENTTYPE_GLOBAL_EFFECTS_KILL = 611;
__s0local30.EVENTTYPE_GLOBAL_EFFECTS_BOOSTER = 612;
__s0local30.EVENTTYPE_GLOBAL_EFFECTS_BOOSTER_KILL = 613;
__s0local30.EVENTTYPE_LONGTERMPOINTEVENT_CHANGE_UPCOMING_EVENTS = 620;
__s0local30.EVENTTYPE_CURRENCY_CLEAR_COMPENSATION = 621;
__s0local30.EVENTTYPE_SAMURAIINVASION_VENDOR = 107;
__s0local30.EVENTTYPE_TEMPSERVER_MULTIPLIER = 110;
__s0local30.EVENTTYPE_DAIMYO_SHOP = 111;
__s0local30.EVENTTYPE_PRIME_SALES_EXPANSIONS = 112;
__s0local30.EVENTTYPE_ALLIANCE_BATTLEGROUND = 113;
__s0local30.EVENTTYPE_WEBSHOP = 114;
__s0local30.EVENTTYPE_REACTIVATION_PRIVATE_PRIME_TIME_EVENT = 115;
__s0local30.EVENTTYPE_APPRENTICE_TOKEN_VENDOR = 116;
__s0local30.EVENTTYPE_FORTUNE_TELLER = 117;
__s0local30.EVENTTYPE_LOYALTY = 118;
__s0local30.EVENTTYPE_MOBILE_BROWSER_SHOP_STANDARD = 119;
__s0local30.EVENTTYPE_MOBILE_BROWSER_SHOP_SPECIAL = 120;
__s0local30.EVENTTYPE_MOBILE_BROWSER_SHOP_TEMPSERVER_STANDARD = 121;
__s0local30.EVENTTYPE_MOBILE_BROWSER_SHOP_TEMPSERVER_SPECIAL = 122;
__s0local30.EVENTTYPE_DONATION = 123;
__s0local30.EVENTTYPE_PRIME_TIME_SKIN = 124;
__s0local30.EVENTTYPE_SPECIAL_DAILY_BUNDLE = 125;
__s0local30.EVENTTYPE_DECO_GACHA = 126;
__s0local30.EVENTTYPE_CHRISTMAS_GACHA = 127;
__s0local30.EVENTTYPE_EASTER_GACHA = 128;
__s0local30.EVENTTYPE_ALLIANCE_MOBILISATION = 129;
__s0local30.EVENTTYPE_SUMMER_GACHA = 130;
__s0local30.EVENTTYPE_ANNIVERSARY_GACHA = 131;
__s0local30.EVENTTYPE_HALLOWEEN_GACHA = 132;
__s0local30.EVENTTYPE_ALLIANCE_RAID = 133;
__s0local30.EVENTTYPE_BLACK_FRIDAY_GACHA = 134;
__s0local30.EVENTTYPE_CARNIVAL_GACHA = 135;
__s0local30.EVENTTYPE_CONVERSION_PRIVATE_PRIME_TIME_EVENT = 136;
__s0local30.EVENTTYPE_ALLIANCE_RAID_MOBILISATION = 137;
__s0local30.EVENTTYPE_ALLIANCE_RAID_BOSS_VENDOR = 138;
__s0local30.EVENTTYPE_ISLAND_KINGDOM = 102;
__s0local30.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE = 103;
__s0local30.EVENTTYPE_PRIME_SALES_FUSION_RECHARGE = 104;
__s0local30.EVENTTYPE_PRIME_SALES_PREMIUM_FUSION = 105;
__s0local30.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS = 599;
__s0local30.EVENTCAMP_AREA_ID = -24;
__s0local30.PROVISIONS = 24;
__s0local30.LEAGUETYPE_EVENT_SUBTYPE_DEFAULT = 0;
__s0local30.LEAGUETYPE_EVENT_SUBTYPE_ALIEN_INVASION_ALLIANCE = 1;
__s0local30.LEAGUETYPE_EVENT_SUBTYPE_NOMAD_INVASION_ALLIANCE = 1;
__s0local30.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_INVASION = 1;
__s0local30.LEAGUETYPE_EVENT_SUBTYPE_ALLIANCE_MOBILISATION_ALLIANCE = 1;
__s0local30.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_ALLIANCE = 1;
__s0local30.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_BLUE = 2;
__s0local30.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_RED = 3;
__s0local30.LEAGUETYPE_EVENT_SUBTYPE_ALLIANCE_CAMP_INVASION = 16;
__s0local30.DEFAULT_REWARD_SET_ID = 1;
__s0local30.DEFAULT_REWARD_ID = 1;
__s0local30.SKIN_OFFSET = 100;
exports.EventConst = __s0local30;
__s0local30.__class = "EventConst";
var __s0local31 = function () {
  function FacebookConst() {}
  FacebookConst.GIFT_COOLDOWN_$LI$ = function () {
    if (FacebookConst.GIFT_COOLDOWN == null) {
      FacebookConst.GIFT_COOLDOWN = 86400;
    }
    return FacebookConst.GIFT_COOLDOWN;
  };
  return FacebookConst;
}();
__s0local31.BULK_REQUEST_LIMIT = 150;
exports.FacebookConst = __s0local31;
__s0local31.__class = "FacebookConst";
var __s0local32 = function () {
  function FactionConst() {}
  FactionConst.FACTIONS_$LI$ = function () {
    if (FactionConst.FACTIONS == null) {
      FactionConst.FACTIONS = [FactionConst.BLUE_FACTION, FactionConst.RED_FACTION];
    }
    return FactionConst.FACTIONS;
  };
  FactionConst.TOWER_COOLDOWN_$LI$ = function () {
    if (FactionConst.TOWER_COOLDOWN == null) {
      FactionConst.TOWER_COOLDOWN = 10800;
    }
    return FactionConst.TOWER_COOLDOWN;
  };
  FactionConst.VILLAGE_COOLDOWN_$LI$ = function () {
    if (FactionConst.VILLAGE_COOLDOWN == null) {
      FactionConst.VILLAGE_COOLDOWN = 86400;
    }
    return FactionConst.VILLAGE_COOLDOWN;
  };
  FactionConst.TITLE_RESET_INTERVAL_SECONDS_$LI$ = function () {
    if (FactionConst.TITLE_RESET_INTERVAL_SECONDS == null) {
      FactionConst.TITLE_RESET_INTERVAL_SECONDS = 14400;
    }
    return FactionConst.TITLE_RESET_INTERVAL_SECONDS;
  };
  FactionConst.getOppositeFactionID = function (__s933param0) {
    if (__s933param0 === FactionConst.BLUE_FACTION) {
      return FactionConst.RED_FACTION;
    } else {
      return FactionConst.BLUE_FACTION;
    }
  };
  FactionConst.getMapWidth = function () {
    return __s0local105.SECTOR_WIDTH * FactionConst.MAP_WIDTH_IN_SECTORS;
  };
  FactionConst.getMapHeight = function () {
    return __s0local105.SECTOR_HEIGHT * FactionConst.MAP_HEIGHT_IN_SECTORS;
  };
  FactionConst.getSectorSeed = function (__s941param0, __s941param1, __s941param2) {
    return __s941param0 + __s941param1 * 15 + __s941param2 * 31;
  };
  FactionConst.inSector = function (__s943param0, __s943param1, __s943param2) {
    var __s943local0 = __s943param2[0];
    var __s943local1 = __s943param2[1];
    var __s943local2 = __s943param0 * FactionConst.SECTOR_WIDTH_IN_CAMPS;
    var __s943local3 = __s943param1 * FactionConst.SECTOR_HEIGHT_IN_CAMPS;
    return __s943local2 <= __s943local0 && __s943local0 < __s943local2 + FactionConst.SECTOR_WIDTH_IN_CAMPS && __s943local3 <= __s943local1 && __s943local1 < __s943local3 + FactionConst.SECTOR_HEIGHT_IN_CAMPS;
  };
  FactionConst.upperLeftWorldXFromAbsoluteCampX = function (__s945param0) {
    var __s945local0 = __s945param0 / FactionConst.SECTOR_WIDTH_IN_CAMPS | 0;
    var __s945local1 = __s945param0 % FactionConst.SECTOR_WIDTH_IN_CAMPS;
    return __s945local0 * __s0local105.SECTOR_WIDTH + __s945local1 * FactionConst.CAMP_SPOT_WIDTH;
  };
  FactionConst.upperLeftWorldYFromAbsoluteCampY = function (__s947param0) {
    var __s947local0 = __s947param0 / FactionConst.SECTOR_HEIGHT_IN_CAMPS | 0;
    var __s947local1 = __s947param0 % FactionConst.SECTOR_HEIGHT_IN_CAMPS;
    return __s947local0 * __s0local105.SECTOR_HEIGHT + __s947local1 * FactionConst.CAMP_SPOT_HEIGHT;
  };
  FactionConst.getMoraleModifier = function (__s949param0) {
    if (__s949param0 >= 0) {
      return 2 - 1 / (1 + Math.abs(__s949param0) / 200);
    } else {
      return 1 / (1 + Math.abs(__s949param0) / 200);
    }
  };
  FactionConst.getPeaceHeatup = function (__s953param0) {
    if (__s953param0) {
      return 300;
    } else {
      return 43200;
    }
  };
  FactionConst.getPeaceDuration = function (__s957param0) {
    if (__s957param0) {
      return 600;
    } else {
      return 216000;
    }
  };
  FactionConst.getPeaceCooldown = function (__s961param0) {
    if (__s961param0) {
      return 300;
    } else {
      return 345600;
    }
  };
  FactionConst.getPeaceC2Cost = function () {
    return 7500;
  };
  FactionConst.getMoraleBoostFromFactionStrength = function (__s967param0) {
    if (__s967param0 <= 0.49) {
      return Math.round(Math.min(0.75, __s967param0 * -13 + 6.5) * 100);
    } else {
      return 0;
    }
  };
  FactionConst.getCostReductionBonus = function (__s971param0) {
    if (__s971param0 <= 0.49) {
      return Math.round(Math.min(0.5, __s971param0 * -10 + 5) * 100) / 100;
    } else {
      return 0;
    }
  };
  FactionConst.getIndexOfFactionID = function (__s975param0) {
    for (var __s975local0 = 0; __s975local0 < FactionConst.FACTIONS_$LI$().length; __s975local0++) {
      if (FactionConst.FACTIONS_$LI$()[__s975local0] === __s975param0) {
        return __s975local0;
      }
    }
    return -1;
  };
  FactionConst.getNPCFactionID = function (__s980param0) {
    switch (__s980param0) {
      case __s0local26.BLUE_FACTION_KING:
        return FactionConst.BLUE_FACTION;
      case __s0local26.RED_FACTION_KING:
        return FactionConst.RED_FACTION;
      default:
        return -1;
    }
  };
  FactionConst.getNpcPID = function (__s983param0) {
    switch (__s983param0) {
      case FactionConst.BLUE_FACTION:
        return __s0local26.BLUE_FACTION_KING;
      case FactionConst.RED_FACTION:
        return __s0local26.RED_FACTION_KING;
      default:
        return -1;
    }
  };
  return FactionConst;
}();
__s0local32.KINGDOM_ID = 10;
__s0local32.MAP_WIDTH_IN_SECTORS = 200;
__s0local32.MAP_HEIGHT_IN_SECTORS = 10;
__s0local32.SECTOR_WIDTH_IN_CAMPS = 4;
__s0local32.SECTOR_HEIGHT_IN_CAMPS = 6;
__s0local32.CAMP_SPOT_WIDTH = 3;
__s0local32.CAMP_SPOT_HEIGHT = 2;
__s0local32.BLUE_FACTION = 0;
__s0local32.RED_FACTION = 1;
__s0local32.VILLAGE_POINTS = 5;
__s0local32.TOWER_POINTS = 15;
__s0local32.CAPITAL_POINTS = 30;
__s0local32.BURNING_BUILDING_MORAL = 10;
__s0local32.BERIMOND_ADVISOR_MORALE = 200;
__s0local32.START_GATE_WOD = 238;
__s0local32.START_MAINTENT_WOD = 233;
__s0local32.START_WALL_WOD = 234;
__s0local32.START_TOWER_WOD = 272;
__s0local32.START_WOOD = 3000;
__s0local32.START_FOOD = 3000;
__s0local32.START_STONE = 3000;
__s0local32.TOWER_COOLDOWN_TEST = 60;
__s0local32.VILLAGE_COOLDOWN_TEST = 60;
__s0local32.BARON_ID = -16;
__s0local32.DESTROYED_OCCUPIER_PLAYER_ID = -415;
__s0local32.TOP_X = 100;
__s0local32.MAJORITY_CAP = 1.2;
__s0local32.FACTION_PROTECTION_STATUS_OFF = -1;
__s0local32.FACTION_PROTECTION_STATUS_PRETIME = 0;
__s0local32.FACTION_PROTECTION_STATUS_ACTIVE = 1;
__s0local32.FACTION_PROTECTION_STATUS_COOLDOWN = 2;
__s0local32.FACTION_ACTIVE_THRESHOLD = 250;
exports.FactionConst = __s0local32;
__s0local32.__class = "FactionConst";
var __s0local33 = function () {
  function FusionConst() {}
  FusionConst.getPremiumFusionC2Cost = function (__s990param0) {
    return 2500 + (Math.floor(__s990param0 * (1 / 3)) | 0) * 100;
  };
  FusionConst.getFusionEnergyCost = function (__s992param0) {
    return __s992param0 * 50 + 900;
  };
  FusionConst.getBaseFusionXPFromSource = function (__s994param0) {
    return __s994param0 * 10 + 10;
  };
  FusionConst.getFusionXPModifierFromSource = function (__s996param0, __s996param1) {
    if (__s996param0 === __s996param1) {
      return 1;
    } else if (__s996param0 < __s996param1) {
      return Math.pow(Math.exp(__s996param0 - __s996param1), 0.025);
    } else {
      return FusionConst.logOfBase(100, __s996param0 - __s996param1) + 1;
    }
  };
  FusionConst.logOfBase = function (__s1001param0, __s1001param1) {
    return Math.log(__s1001param1) / Math.log(__s1001param0);
  };
  FusionConst.getFusionXPFromSource = function (__s1003param0, __s1003param1) {
    return Math.floor(FusionConst.getBaseFusionXPFromSource(__s1003param0) * FusionConst.getFusionXPModifierFromSource(__s1003param0, __s1003param1)) | 0;
  };
  FusionConst.getBonusFusionXPChanceFromSource = function (__s1005param0, __s1005param1, __s1005param2) {
    if (__s1005param1 === __s1005param2) {
      return __s1005param0;
    } else {
      return Math.min(Math.floor(__s1005param0 * Math.exp((__s1005param1 - __s1005param2) / 144.269)), 100) | 0;
    }
  };
  FusionConst.getBonusFusionXPChanceFromCatalyst = function (__s1009param0, __s1009param1) {
    if (__s1009param0 === __s1009param1) {
      return 0;
    } else {
      return Math.max((__s1009param0 - __s1009param1) * 4, 0);
    }
  };
  FusionConst.getBonusFusionXPChance = function (__s1013param0, __s1013param1, __s1013param2, __s1013param3, __s1013param4) {
    return FusionConst.getBonusFusionXPChanceFromSource(__s1013param0, __s1013param1, __s1013param2) + FusionConst.getBonusFusionXPChanceFromCatalyst(__s1013param3, __s1013param4);
  };
  FusionConst.getBonusFusionXPBoost = function (__s1015param0, __s1015param1, __s1015param2) {
    var __s1015local0 = __s1015param1 + __s1015param2;
    return Math.max(Math.round((__s1015local0 / 100 - 1) * __s1015param0), 0);
  };
  FusionConst.getBonusFusionXP = function (__s1017param0, __s1017param1) {
    return (Math.floor(__s1017param0 * 2.5 + 5) | 0) + FusionConst.getForgeBonusFusionXP(__s1017param1);
  };
  FusionConst.getBonusFusionXPWithForgeMax = function (__s1019param0, __s1019param1, __s1019param2) {
    return (Math.floor(__s1019param1 * 2.5 + 5) | 0) + FusionConst.getForgeBonusFusionXPWithMax(__s1019param0, __s1019param1, __s1019param2);
  };
  FusionConst.getForgeBonusFusionXP = function (__s1021param0) {
    return __s1021param0 * 5 + 9;
  };
  FusionConst.getMaxAllowedForgeBonusFusionXP = function (__s1023param0, __s1023param1) {
    return (FusionConst.getBaseFusionXPFromSource(__s1023param0) + (FusionConst.getStartXPFromLevel(__s1023param1 + 1) - FusionConst.getStartXPFromLevel(__s1023param1) | 0)) * 100;
  };
  FusionConst.getForgeBonusFusionXPWithMax = function (__s1025param0, __s1025param1, __s1025param2) {
    var __s1025local0 = FusionConst.getForgeBonusFusionXP(__s1025param2);
    var __s1025local1 = FusionConst.getMaxAllowedForgeBonusFusionXP(__s1025param0, __s1025param1);
    return Math.min(__s1025local0, __s1025local1);
  };
  FusionConst.getFusionEnergyCap = function (__s1027param0) {
    return __s1027param0 * 100 + 2300;
  };
  FusionConst.getFusionEnergyRechargeAmount = function (__s1029param0) {
    return __s1029param0 * 25 + 575;
  };
  FusionConst.getFusionEnergyRechargeFromMinuteSkip = function (__s1031param0, __s1031param1) {
    return Math.round(Math.ceil(__s1031param0 * 3600 / __s1031param1));
  };
  FusionConst.getFusionEnergyRechargeFromC2 = function (__s1033param0) {
    return __s1033param0;
  };
  FusionConst.getFusionEnergyRechargeFromC2Cost = function (__s1035param0, __s1035param1, __s1035param2) {
    return Math.ceil(__s1035param0 * Math.pow(__s1035param1, __s1035param2)) | 0;
  };
  FusionConst.getForgeLevelUpDustCost = function (__s1037param0) {
    return __s1037param0 * 10 + 10;
  };
  FusionConst.getDecorationFusionFusionCurrencyCost = function (__s1039param0) {
    return Math.floor(1 / 3 * __s1039param0 + 1) | 0;
  };
  FusionConst.getDecorationPointsFromFusionLevel = function (__s1041param0) {
    return __s1041param0 * 5 + 100 | 0;
  };
  FusionConst.getTotalBonusFusionXP = function (__s1043param0, __s1043param1) {
    return __s1043param0 + __s1043param1;
  };
  FusionConst.getRechargeTimeForOneFusionEnergyInSeconds = function (__s1045param0, __s1045param1) {
    return __s1045param0 / FusionConst.getFusionEnergyRechargeAmount(__s1045param1) | 0;
  };
  FusionConst.getLevelFromXP = function (__s1047param0) {
    return Math.floor(Math.sqrt(12.25 + __s1047param0 * 0.4) - 2.5) | 0;
  };
  FusionConst.getStartXPFromLevel = function (__s1049param0) {
    return Math.round(Math.floor(Math.pow(__s1049param0 - 1, 2) * 2.5 + (__s1049param0 - 1) * 17.5));
  };
  FusionConst.getFusionCurrencyCost = function (__s1051param0, __s1051param1) {
    if (__s1051param0 === FusionConst.DECORATION_FORGE_ID) {
      return FusionConst.getDecorationFusionFusionCurrencyCost(__s1051param1);
    } else {
      return 0;
    }
  };
  FusionConst.getDecorationPointsFromFusionXP = function (__s1055param0) {
    return FusionConst.getDecorationPointsFromFusionLevel(FusionConst.getLevelFromXP(__s1055param0));
  };
  FusionConst.getXPRangeBetweenLevels = function (__s1057param0, __s1057param1) {
    return FusionConst.getStartXPFromLevel(__s1057param1) - FusionConst.getStartXPFromLevel(__s1057param0);
  };
  FusionConst.getNeededXPToNextLevel = function (__s1059param0) {
    var __s1059local0 = FusionConst.getLevelFromXP(__s1059param0);
    return FusionConst.getStartXPFromLevel(__s1059local0 + 1) - __s1059param0;
  };
  FusionConst.getXPProgressInLevel = function (__s1061param0) {
    var __s1061local0 = FusionConst.getLevelFromXP(__s1061param0);
    return __s1061param0 - FusionConst.getStartXPFromLevel(__s1061local0);
  };
  return FusionConst;
}();
__s0local33.DECORATION_FORGE_ID = 1;
exports.FusionConst = __s0local33;
__s0local33.__class = "FusionConst";
var __s0local34 = function () {
  return function GameConst() {};
}();
__s0local34.GAME_ID = 12;
__s0local34.IS_EMPIRE = true;
__s0local34.IS_E4K = false;
__s0local34.GAME_NAME_SHORT = "EP";
__s0local34.ALLIANCE_FORGE_ACTIVATED = true;
__s0local34.JUDGMENT_CITIZEN_ACTIVATED = true;
__s0local34.LOOKING_FOR_MEMBERS_ACTIVATED = true;
__s0local34.MAIN_QUESTS_ACTIVATED = true;
__s0local34.PROMO_MAILS_ACTIVATED = true;
__s0local34.WORLD_LOOP_ACTIVATED = true;
__s0local34.ALLI_FORUM_ACTIVATED = true;
__s0local34.COMEBACK_BONUS_ACTIVATED = true;
__s0local34.EXPANSION_TREASURE_CHEST = true;
__s0local34.EMPTY_DEFAULT_EMBLEM = true;
__s0local34.RESOURCE_CARTS = true;
__s0local34.ALLIANCE_TRIBUTE = true;
__s0local34.LABORATORY_ACTIVATED = true;
__s0local34.SEND_ALLIANCE_WAR_MESSAGE = true;
__s0local34.WEB_RESOURCE_PACKAGE = true;
__s0local34.WEB_USE_ROUNDING = true;
__s0local34.WEB_AUTO_RETREAT = true;
__s0local34.KINGDOM_RESOURCES_IMMEDIATELY_LOOTABLE = false;
__s0local34.WEB_REGISTER = true;
__s0local34.WEB_COLOSSUS = true;
__s0local34.WEB_WISHING_WELL = true;
__s0local34.WEB_TUTORIAL = true;
__s0local34.WEB_FACTION = true;
__s0local34.WEB_ARCHIVE_MESSAGE = true;
__s0local34.WEB_PARAGON = true;
__s0local34.WEB_SEARCH_MAP = true;
__s0local34.WEB_ALIEN = true;
__s0local34.WEB_STORM_ISLAND = true;
__s0local34.WEB_GEMS = true;
__s0local34.REG_MGR_USE_EMPIRE_ERROR_CODES = true;
__s0local34.LP_LOGINREWARD = true;
__s0local34.CORE_LOGIN = false;
__s0local34.PRIVATE_OFFER_EMPIRE_STILE = true;
__s0local34.LEVEL_ZERO_EMBLEM = true;
__s0local34.SET_PLAYER_PW_HASH_IN_FACADE = false;
__s0local34.VERIFY_PLAYER_MAIL_EVENT = true;
__s0local34.SIMPLE_RANDOM = true;
__s0local34.WEB_DEFAULT_NETWORK = true;
__s0local34.BUGGY_ADDITIONAL_ICE_KINGDOM_CASTLES = true;
__s0local34.ALIEN_INVASION_USE_RANDOM_TOOL_AMOUNTS = false;
__s0local34.ALIEN_HERO_EFFECTS = true;
__s0local34.WEB_MOVEMENT_VISIBILITY = true;
__s0local34.WEB_NPC_ATTACKS = true;
__s0local34.PRIME_SALE_FILL_ALL_STORAGES = false;
__s0local34.SLIM_BASIC_DATA = false;
__s0local34.UNLOCK_EVENT_ERROR_RESPONSE = false;
__s0local34.SEND_OUT_ACHIEVEMENT_LIST = true;
__s0local34.QUEST_CAN_BE_UNREAD = false;
__s0local34.ALLIANCE_MINI_CHAT = false;
__s0local34.SPYLOG_TOOLS_AMOUNT = false;
__s0local34.SEND_ALLIANCE_WAR_ENEMY_SABOTAGE_MESSAGE = false;
__s0local34.ALLI_AUTOWAR_ON_CHANGE_NOTIFY_ALL = false;
__s0local34.DETAIL_CASTLE_LIST_WITH_PACKAGE_LIST_OVERVIEW = false;
__s0local34.E4K_TUTORIAL_AB = false;
__s0local34.INVALIDATE_USER_KINGDOM = false;
__s0local34.SEND_AQUA_RANK_IN_ALLIANCE_INFO = false;
__s0local34.SEND_FULL_GBC = false;
__s0local34.DISTINGUISH_SHADOW_ATTACKS = true;
__s0local34.FACEBOOK_USE_MAPPING_PROVIDER = false;
__s0local34.FACEBOOK_FRIENDINVITE = false;
__s0local34.SEND_DAMAGE_AND_RUBBLE = false;
__s0local34.REGISTRATION_EMAIL_WITH_WEBSITE_ID_ENABLED = true;
__s0local34.PING_PONG = false;
__s0local34.MOBILE_CORE_EVENTSTUFF = false;
__s0local34.FREE_PLAYER_RENAME = false;
__s0local34.PUSH_NOTIFICATIONS_ACTIVATED = false;
__s0local34.MOBILE_LOGIN_ADDITIONAL_DATA = false;
__s0local34.FACEBOOK_EMPIRE_STYLE = true;
__s0local34.WEB_LTPE = true;
__s0local34.RATING_EVENT_ENABLED = false;
__s0local34.ANNOUNCEMENT_ENABLED = false;
__s0local34.EXPIRED_EQUIPMENT_MESSAGE_ENABLED = true;
__s0local34.HAS_LOGIN_TOKEN = true;
__s0local34.GAME_SHORT_NAME = "Empire";
__s0local34.ITEM_XML_NAME = "items.xml";
__s0local34.GAME_TRACKING_PREFIX = "empire_";
__s0local34.DEFAULT_URL = "empire.goodgamestudios.com";
__s0local34.AWS_PROJECT_NAME = "ep";
exports.GameConst = __s0local34;
__s0local34.__class = "GameConst";
var __s0local35 = function () {
  function GemConst() {}
  GemConst.getTotalStorageCapacity = function (__s1071param0) {
    if (__s1071param0) {
      return GemConst.MAX_GEM_STORAGE;
    } else {
      return GemConst.NORMAL_GEM_STORAGE;
    }
  };
  return GemConst;
}();
__s0local35.MAX_GEM_LEVEL = 13;
__s0local35.MIN_GEM_LEVEL = 0;
__s0local35.MIN_PLAYER_LEVEL_FOR_GEM_DROP = 25;
__s0local35.NUM_GEMS_NEEDED_FOR_UPGRADE = 6;
__s0local35.MAX_GEM_STORAGE = 500;
__s0local35.NORMAL_GEM_STORAGE = 480;
exports.GemConst = __s0local35;
__s0local35.__class = "GemConst";
var __s0local36 = function () {
  function GeneralConst() {}
  GeneralConst.getMaxLevelForStarTier = function (__s1079param0) {
    return Math.min(100, (__s1079param0 + 1) * 10);
  };
  GeneralConst.calculateXPGainForAttackingGeneral = function (__s1081param0, __s1081param1, __s1081param2, __s1081param3) {
    if (__s1081param0 > GeneralConst.MAXIMUM_DAILY_ATTACKS_FOR_XP_GAIN) {
      return 0;
    }
    var __s1081local0 = GeneralConst.BASE_XP_ATTACK;
    if (__s1081param0 > 2) {
      __s1081local0 = Math.max(10, GeneralConst.BASE_XP_ATTACK - GeneralConst.BASE_XP_ATTACK * __s1081param0 / 15);
    }
    var __s1081local1 = __s1081param0 === 1 ? GeneralConst.FIRST_ATTACK_BONUS_XP : 0;
    var __s1081local2 = GeneralConst.calculateUnitsKilledBonusXPForAttackingGeneral(__s1081param3, __s1081param0, __s1081param1, __s1081param2);
    return Math.round(__s1081local0 + __s1081local1 + __s1081local2);
  };
  GeneralConst.calculateUnitsKilledBonusXPForAttackingGeneral = function (__s1085param0, __s1085param1, __s1085param2, __s1085param3) {
    if (__s1085param0) {
      return 0;
    } else {
      __s1085local0 = __s1085param1 > 2 ? Math.max(10, Math.round(GeneralConst.UNITS_KILLED_XP_CAP - GeneralConst.UNITS_KILLED_XP_CAP * __s1085param1 / 15)) : GeneralConst.UNITS_KILLED_XP_CAP;
      __s1085local1 = __s1085param2 < 45 ? (GeneralConst.log15(__s1085param3 * Math.max(5, 35 - __s1085param2) / __s1085param2 + 60 / __s1085param2) - 1) * 200 : (GeneralConst.log15(__s1085param3 * Math.pow(__s1085param2, 0.75) / (__s1085param2 * 5)) - 1) * 200;
      return Math.max(0, Math.min(__s1085local0, __s1085local1));
    }
    var __s1085local0;
    var __s1085local1;
  };
  GeneralConst.log15 = function (__s1089param0) {
    return Math.log(__s1089param0) / Math.log(15);
  };
  GeneralConst.calculateXPGainForDefendingGeneral = function (__s1091param0) {
    if (__s1091param0 > GeneralConst.MAXIMUM_DAILY_ATTACKS_FOR_XP_GAIN) {
      return 0;
    }
    var __s1091local0 = GeneralConst.BASE_XP_DEFENSE;
    if (__s1091param0 > 2) {
      __s1091local0 = Math.max(10, GeneralConst.BASE_XP_DEFENSE - GeneralConst.BASE_XP_DEFENSE * __s1091param0 / 15);
    }
    return Math.round(__s1091local0);
  };
  return GeneralConst;
}();
__s0local36.SKILL_RESET_C2_COST = 2500;
__s0local36.MAXIMUM_DAILY_ATTACKS_FOR_XP_GAIN = 20;
__s0local36.BASE_XP_ATTACK = 100;
__s0local36.BASE_XP_DEFENSE = 100;
__s0local36.FIRST_ATTACK_BONUS_XP = 500;
__s0local36.UNITS_KILLED_XP_CAP = 500;
__s0local36.GENERALS_STARTER_QUEST_SERIES_ID = 10000;
__s0local36.GENERAL_HORATIO_ID = 104;
__s0local36.NPC_GENERAL_ID = 106;
exports.GeneralConst = __s0local36;
__s0local36.__class = "GeneralConst";
var __s0local37 = function () {
  return function GiftConst() {};
}();
__s0local37.DEFAULT_SKIN = 0;
__s0local37.CHRISTMAS_SKIN = 1;
exports.GiftConst = __s0local37;
__s0local37.__class = "GiftConst";
var __s0local38 = function () {
  return function GlobalPrimeTimeConst() {};
}();
__s0local38.MBS_PERCENTAGE_BONUS = 0;
exports.GlobalPrimeTimeConst = __s0local38;
__s0local38.__class = "GlobalPrimeTimeConst";
var __s0local39 = function () {
  return function GlobalServerConst() {};
}();
__s0local39.NORMAL_SERVER = 1;
__s0local39.TEMP_SERVER = 2;
__s0local39.ALLIANCE_BATTLE_GROUND_SERVER = 3;
exports.GlobalServerConst = __s0local39;
__s0local39.__class = "GlobalServerConst";
var __s0local40 = function () {
  return function GraphiteConst() {};
}();
__s0local40.DEFAULT_GRAPHITE_HOST_URL = "graphite.ggs-game.com";
__s0local40.DEFAULT_GRAPHITE_HOST_PORT = 2003;
exports.GraphiteConst = __s0local40;
__s0local40.__class = "GraphiteConst";
var __s0local41 = function () {
  function HighscoreBonusConst() {}
  HighscoreBonusConst.calcHighscoreBonusForC1 = function (__s1115param0, __s1115param1, __s1115param2, __s1115param3, __s1115param4) {
    var __s1115local0 = HighscoreBonusConst.calcLevelIndependentC1HighscoreBonus(__s1115param0, __s1115param1, __s1115param2, __s1115param3);
    var __s1115local1 = HighscoreBonusConst.calcLevelDependentC1HighscoreBonus(__s1115param4);
    return Math.max(__s1115local0, __s1115local1);
  };
  HighscoreBonusConst.calcHighscoreBonusForUnits = function (__s1117param0, __s1117param1, __s1117param2, __s1117param3) {
    return Math.round(Math.max(__s1117param3, (1 - (__s1117param2 - __s1117param1 + 1) / 100 + 0.01) * __s1117param0)) | 0;
  };
  HighscoreBonusConst.calcHighscoreBonusForTools = function (__s1119param0, __s1119param1, __s1119param2) {
    return Math.max(__s1119param0, Math.floor((__s1119param1 - __s1119param2) * 0.5) | 0);
  };
  HighscoreBonusConst.calcLevelIndependentC1HighscoreBonus = function (__s1121param0, __s1121param1, __s1121param2, __s1121param3) {
    return Math.max(__s1121param3, __s1121param0 - (__s1121param2 - __s1121param1) * 10);
  };
  HighscoreBonusConst.calcLevelDependentC1HighscoreBonus = function (__s1123param0) {
    return (Math.round(Math.pow(__s1123param0, 1.1)) | 0) * 10;
  };
  return HighscoreBonusConst;
}();
exports.HighscoreBonusConst = __s0local41;
__s0local41.__class = "HighscoreBonusConst";
var __s0local42 = function () {
  function HighscoreConst() {}
  HighscoreConst.SEASON_NUMBER_OF_ENTRIES_SHOWN_$LI$ = function () {
    if (HighscoreConst.SEASON_NUMBER_OF_ENTRIES_SHOWN == null) {
      HighscoreConst.SEASON_NUMBER_OF_ENTRIES_SHOWN = HighscoreConst.PERSISTENT_LEAGUE_NUMBER_OF_ENTRIES_SHOWN;
    }
    return HighscoreConst.SEASON_NUMBER_OF_ENTRIES_SHOWN;
  };
  HighscoreConst.DAIMYO_NUMBER_OF_ENTRIES_SHOWN_$LI$ = function () {
    if (HighscoreConst.DAIMYO_NUMBER_OF_ENTRIES_SHOWN == null) {
      HighscoreConst.DAIMYO_NUMBER_OF_ENTRIES_SHOWN = HighscoreConst.NUMBER_OF_ENTRIES_SHOWN;
    }
    return HighscoreConst.DAIMYO_NUMBER_OF_ENTRIES_SHOWN;
  };
  HighscoreConst.GLOBAL_SERVER_PREVIOUS_RUN_NUMBER_OF_ENTRIES_SHOWN_$LI$ = function () {
    if (HighscoreConst.GLOBAL_SERVER_PREVIOUS_RUN_NUMBER_OF_ENTRIES_SHOWN == null) {
      HighscoreConst.GLOBAL_SERVER_PREVIOUS_RUN_NUMBER_OF_ENTRIES_SHOWN = HighscoreConst.NUMBER_OF_ENTRIES_SHOWN;
    }
    return HighscoreConst.GLOBAL_SERVER_PREVIOUS_RUN_NUMBER_OF_ENTRIES_SHOWN;
  };
  HighscoreConst.POINTS_CAPITALS_$LI$ = function () {
    if (HighscoreConst.POINTS_CAPITALS == null) {
      HighscoreConst.POINTS_CAPITALS = [1500, 1400, 1250, 1750];
    }
    return HighscoreConst.POINTS_CAPITALS;
  };
  HighscoreConst.TITLE_COOLDOWN_$LI$ = function () {
    if (HighscoreConst.TITLE_COOLDOWN == null) {
      HighscoreConst.TITLE_COOLDOWN = 259200;
    }
    return HighscoreConst.TITLE_COOLDOWN;
  };
  HighscoreConst.TITLE_COOLDOWN_TEST_$LI$ = function () {
    if (HighscoreConst.TITLE_COOLDOWN_TEST == null) {
      HighscoreConst.TITLE_COOLDOWN_TEST = 300;
    }
    return HighscoreConst.TITLE_COOLDOWN_TEST;
  };
  HighscoreConst.LEAGUED_HIGHSCORES_$LI$ = function () {
    if (HighscoreConst.LEAGUED_HIGHSCORES == null) {
      HighscoreConst.LEAGUED_HIGHSCORES = [HighscoreConst.PLAYER_HONOR, HighscoreConst.PLAYER_MIGHT_POINTS, HighscoreConst.PLAYER_ACHIEVEMENT_POINTS, HighscoreConst.SAMURAI_PLAYER, HighscoreConst.NOMADINVASION, HighscoreConst.ALLIANCE_NOMADINVASION_PLAYER, HighscoreConst.ALLIANCE_TOURNAMENT_FAME, HighscoreConst.FACTION_TOURNAMENT, HighscoreConst.POINT_EVENT, HighscoreConst.BEGGING_KNIGHTS, HighscoreConst.ALIEN_INVASION, HighscoreConst.ALLIANCE_ALIEN_INVASION_PLAYER, HighscoreConst.SAMURAI_PLAYER, HighscoreConst.LONG_TERM_POINT_EVENT, HighscoreConst.FACTION_INVASION_PLAYER_BLUE, HighscoreConst.FACTION_INVASION_PLAYER_RED];
    }
    return HighscoreConst.LEAGUED_HIGHSCORES;
  };
  HighscoreConst.MIN_XP_FOR_HIGHSCORE_$LI$ = function () {
    if (HighscoreConst.MIN_XP_FOR_HIGHSCORE == null) {
      HighscoreConst.MIN_XP_FOR_HIGHSCORE = __s0local58.getXPFromLevel(__s0local58.MIN_LEVEL_FOR_MAP);
    }
    return HighscoreConst.MIN_XP_FOR_HIGHSCORE;
  };
  HighscoreConst.NO_OFFSET_$LI$ = function () {
    if (HighscoreConst.NO_OFFSET == null) {
      HighscoreConst.NO_OFFSET = 0;
    }
    return HighscoreConst.NO_OFFSET;
  };
  HighscoreConst.GLOBALSERVER_PREVIOUS_RUN_HIGHSCORES_ON_MAINSERVER_$LI$ = function () {
    if (HighscoreConst.GLOBALSERVER_PREVIOUS_RUN_HIGHSCORES_ON_MAINSERVER == null) {
      HighscoreConst.GLOBALSERVER_PREVIOUS_RUN_HIGHSCORES_ON_MAINSERVER = [HighscoreConst.TEMPSERVER_PREVIOUS_RUN_PLAYER, HighscoreConst.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_PLAYER, HighscoreConst.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_ALLIANCE];
    }
    return HighscoreConst.GLOBALSERVER_PREVIOUS_RUN_HIGHSCORES_ON_MAINSERVER;
  };
  return HighscoreConst;
}();
__s0local42.SEPARATOR = ",";
__s0local42.MY_RANK = -1;
__s0local42.SEARCH_FOR_OWN_RANK = "-1";
__s0local42.PLAYER_ACHIEVEMENT_POINTS = 1;
__s0local42.PLAYER_WEEKLY_LOOT = 2;
__s0local42.PLAYER_HONOR = 5;
__s0local42.PLAYER_MIGHT_POINTS = 6;
__s0local42.PLAYER_LEGEND = 7;
__s0local42.ALLIANCE_HONOR = 10;
__s0local42.ALLIANCE_MIGHT_POINTS = 11;
__s0local42.ALLIANCE_LANDMARKS = 12;
__s0local42.ALLIANCE_AQUA_POINTS = 13;
__s0local42.TOURNAMENT_FAME = 20;
__s0local42.ALLIANCE_TOURNAMENT_FAME = 21;
__s0local42.FACTION_TOURNAMENT = 30;
__s0local42.TOURNAMENT_START_OFFSET = 4;
__s0local42.TOURNAMENT_TOP = 6;
__s0local42.NUMBER_OF_ENTRIES_SHOWN = 10;
__s0local42.NUMBER_OF_ENTRIES_SHOWN_FOR_COLOSS = 50;
__s0local42.PERSISTENT_LEAGUE_NUMBER_OF_ENTRIES_SHOWN = 8;
__s0local42.NUMBER_OF_ENTRIES_SHOWN_FOR_FACTION = 5;
__s0local42.TOURNAMENT_NUM_ENTRIES = 8;
__s0local42.AQUAPOINTS_NUM_ENTRIES = 7;
__s0local42.TEMP_SERVER_HIGHSCORE_NUMBER_OF_ENTRIES_SHOWN = 7;
__s0local42.ALLIANCE_BATTLE_GROUND_HIGHSCORE_NUMBER_OF_ENTRIES_SHOWN = 9;
__s0local42.DONATION_EVENT_NUMBER_OF_ENTRIES = 10;
__s0local42.PLAYER_BUILDINGS = 6;
__s0local42.ALLIANCE_BUILDINGS = 11;
__s0local42.POINTS_METROPOL = 750;
__s0local42.POINTS_KINGS_TOWER = 25;
__s0local42.POINTS_MONUMENTS = 25;
__s0local42.POINTS_LABORATORY = 25;
__s0local42.POINT_EVENT = 40;
__s0local42.FACTION_INVASION_INITIAL_POINTS = 150;
__s0local42.BEGGING_KNIGHTS = 41;
__s0local42.ALIEN_INVASION = 42;
__s0local42.LUCKY_WHEEL = 43;
__s0local42.ALLIANCE_ALIEN_INVASION_PLAYER = 44;
__s0local42.ALLIANCE_ALIEN_INVASION_ALLIANCE = 45;
__s0local42.ALLIANCE_NOMADINVASION_PLAYER = 46;
__s0local42.ALLIANCE_NOMADINVASION_ALLIANCE = 47;
__s0local42.NOMADINVASION = 48;
__s0local42.ALLIANCE_SAMURAI_ALIEN_INVASION_PLAYER = 500;
__s0local42.ALLIANCE_SAMURAI_ALIEN_INVASION_ALLIANCE = 501;
__s0local42.COLOSSUS = 50;
__s0local42.SAMURAI_PLAYER = 51;
__s0local42.SAMURAI_ALLIANCE = 52;
__s0local42.LONG_TERM_POINT_EVENT = 53;
__s0local42.FACTION_INVASION_PLAYER_BLUE = 54;
__s0local42.FACTION_INVASION_PLAYER_RED = 55;
__s0local42.FACTION_INVASION_ALLIANCE = 56;
__s0local42.ALLIANCE_RED_ALIEN_INVASION_PLAYER = 58;
__s0local42.ALLIANCE_RED_ALIEN_INVASION_ALLIANCE = 59;
__s0local42.TEMP_SERVER_DAILY_MIGHT_POINTS_BUILDINGS = 61;
__s0local42.TEMP_SERVER_GLOBAL = 62;
__s0local42.KINGDOMS_LEAGUE_SEASON = 63;
__s0local42.KINGDOMS_LEAGUE_SEASON_EVENT = 64;
__s0local42.TEMP_SERVER_DAILY_COLLECTOR_POINTS = 65;
__s0local42.TEMP_SERVER_DAILY_RANK_SWAP = 66;
__s0local42.ALLIANCE_KINGDOMS_LEAGUE_SEASON = 67;
__s0local42.ALLIANCE_KINGDOMS_LEAGUE_SEASON_EVENT = 68;
__s0local42.ALLIANCE_DAIMYO = 69;
__s0local42.ALLIANCE_BATTLE_GROUND_ALLIANCE_COLLECTOR = 70;
__s0local42.ALLIANCE_BATTLE_GROUND_PLAYER_COLLECTOR = 71;
__s0local42.LUCKY_WHEEL_SALE_DAYS = 72;
__s0local42.ALLIANCE_BATTLE_GROUND_ALLIANCE_TOWER = 74;
__s0local42.ALLIANCE_BATTLE_GROUND_PLAYER_TOWER = 75;
__s0local42.TEMPSERVER_PREVIOUS_RUN_PLAYER = 76;
__s0local42.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_ALLIANCE = 77;
__s0local42.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_PLAYER = 78;
__s0local42.DONATION_EVENT = 79;
__s0local42.DECO_GACHA_EVENT = 80;
__s0local42.CHRISTMAS_GACHA_EVENT = 81;
__s0local42.EASTER_GACHA_EVENT = 82;
__s0local42.SUMMER_GACHA_EVENT = 83;
__s0local42.ALLIANCE_MOBILISATION_EVENT = 84;
__s0local42.ANNIVERSARY_GACHA_EVENT = 85;
__s0local42.HALLOWEEN_GACHA_EVENT = 86;
__s0local42.BLACK_FRIDAY_GACHA_EVENT = 87;
__s0local42.CARNIVAL_GACHA_EVENT = 88;
__s0local42.ALLIANCE_RAID_MOBILISATION_EVENT = 89;
__s0local42.INVALID_HIGHSCORE_LIST_ID = -1;
__s0local42.INVALID_RANK = 0;
__s0local42.NO_ENTRIES = 0;
__s0local42.NO_SCORE = 0;
__s0local42.INVALID_ENTRY_ID = -1;
__s0local42.RANK_ONE = 1;
__s0local42.USE_LOCAL_HIGHSCORE = true;
__s0local42.DO_NOT_USE_LOCAL_HIGHSCORE = false;
__s0local42.USE_GLOBAL_HIGHSCORE = true;
__s0local42.DO_NOT_USE_GLOBAL_HIGHSCORE = false;
__s0local42.INITIAL_HIGHSCORE_SIZE_ON_LIVE = 131072;
__s0local42.INITIAL_HIGHSCORE_SIZE_ON_TEST = 4096;
exports.HighscoreConst = __s0local42;
__s0local42.__class = "HighscoreConst";
var __s0local43 = function () {
  return function InstallerPackageConst() {};
}();
__s0local43.UNKNOWN = -1;
__s0local43.PRE_INSTALLED = 0;
__s0local43.SAMSUNG = 1;
__s0local43.ITUNES = 2;
__s0local43.GOOGLEPLAY = 3;
__s0local43.AMAZON = 4;
exports.InstallerPackageConst = __s0local43;
__s0local43.__class = "InstallerPackageConst";
var __s0local44 = function () {
  function JudgementCitizenCalculation() {}
  JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND_$LI$ = function () {
    if (JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND == null) {
      JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND = [[-1, 1.925], [2.2, 1.925], [-1, 2.2], [-1, -1], [2.2, -1]];
    }
    return JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND;
  };
  JudgementCitizenCalculation.FACTOR_FORMULA_1_COND_$LI$ = function () {
    if (JudgementCitizenCalculation.FACTOR_FORMULA_1_COND == null) {
      JudgementCitizenCalculation.FACTOR_FORMULA_1_COND = [[-1, 0.22], [0.4, 0.22], [-1, 0.3], [-1, -1], [0.15, -1]];
    }
    return JudgementCitizenCalculation.FACTOR_FORMULA_1_COND;
  };
  JudgementCitizenCalculation.OFFSET_FORMULA_1_COND_$LI$ = function () {
    if (JudgementCitizenCalculation.OFFSET_FORMULA_1_COND == null) {
      JudgementCitizenCalculation.OFFSET_FORMULA_1_COND = [[-1, 0], [0, 0], [-1, 0], [-1, -1], [-15, -1]];
    }
    return JudgementCitizenCalculation.OFFSET_FORMULA_1_COND;
  };
  JudgementCitizenCalculation.MIN_VALUE_$LI$ = function () {
    if (JudgementCitizenCalculation.MIN_VALUE == null) {
      JudgementCitizenCalculation.MIN_VALUE = [[-1, 5], [15, 5], [-1, 10], [-1, -1], [5, -1]];
    }
    return JudgementCitizenCalculation.MIN_VALUE;
  };
  JudgementCitizenCalculation.FACTORS_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.FACTORS_REWARD == null) {
      JudgementCitizenCalculation.FACTORS_REWARD = [[[-1, -1, -1, -1], [5, -1.6, 0.12, -0.0013]], [[-1, -1, -1, -1], [5, -1.6, 0.121, -0.0013]], [[-1, -1, -1, -1], [5, -1.6, 0.123, -0.0013]], [[-1, -1, -1, -1], [-1, -1, -1, -1]], [[-1, -1, -1, -1], [5, -1.58, 0.12, -0.0013]]];
    }
    return JudgementCitizenCalculation.FACTORS_REWARD;
  };
  JudgementCitizenCalculation.MAX_VALUE_$LI$ = function () {
    if (JudgementCitizenCalculation.MAX_VALUE == null) {
      JudgementCitizenCalculation.MAX_VALUE = [[-1, 3400], [-1, 3800], [-1, 4200], [0, 0], [-1, 3500]];
    }
    return JudgementCitizenCalculation.MAX_VALUE;
  };
  JudgementCitizenCalculation.OFFSET_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.OFFSET_REWARD == null) {
      JudgementCitizenCalculation.OFFSET_REWARD = [[-1, 10], [-1, 10], [-1, 10], [-1, -1], [-1, 10]];
    }
    return JudgementCitizenCalculation.OFFSET_REWARD;
  };
  JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD == null) {
      JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD = [[-1, -1], [-1, -1], [-1, -1], [2.15, 2.3], [-1, -1]];
    }
    return JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD;
  };
  JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD == null) {
      JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD = [[-1, -1], [-1, -1], [-1, -1], [0.5, 0.3], [-1, -1]];
    }
    return JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD;
  };
  JudgementCitizenCalculation.calcCond = function (__s1194param0, __s1194param1, __s1194param2) {
    return Math.max(JudgementCitizenCalculation.MIN_VALUE_$LI$()[__s1194param1][__s1194param2], Math.round((JudgementCitizenCalculation.FACTOR_FORMULA_1_COND_$LI$()[__s1194param1][__s1194param2] * Math.pow(__s1194param0, JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND_$LI$()[__s1194param1][__s1194param2]) + JudgementCitizenCalculation.OFFSET_FORMULA_1_COND_$LI$()[__s1194param1][__s1194param2]) / 5) * 5) | 0;
  };
  JudgementCitizenCalculation.rewardC1 = function (__s1196param0, __s1196param1, __s1196param2) {
    return Math.min(JudgementCitizenCalculation.MAX_VALUE_$LI$()[__s1196param1][__s1196param2], Math.ceil((JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[__s1196param1][__s1196param2][3] * Math.pow(__s1196param0, 4) + JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[__s1196param1][__s1196param2][2] * Math.pow(__s1196param0, 3) + JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[__s1196param1][__s1196param2][1] * Math.pow(__s1196param0, 2) + JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[__s1196param1][__s1196param2][0] * __s1196param0 + JudgementCitizenCalculation.OFFSET_REWARD_$LI$()[__s1196param1][__s1196param2]) / 10) * 10) | 0;
  };
  JudgementCitizenCalculation.rewardWoodStone = function (__s1198param0, __s1198param1, __s1198param2) {
    return Math.round(JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD_$LI$()[__s1198param1][__s1198param2] * Math.pow(__s1198param0, JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD_$LI$()[__s1198param1][__s1198param2]) / 5) * 5 | 0;
  };
  JudgementCitizenCalculation.calculateWaitingTimeUntilNextJudgement = function (__s1200param0) {
    return (Math.round((__s1200param0 * 0.3 * Math.pow(__s1200param0, 2.6) + 50) / 10) | 0) * 10;
  };
  return JudgementCitizenCalculation;
}();
exports.JudgementCitizenCalculation = __s0local44;
__s0local44.__class = "JudgementCitizenCalculation";
var __s0local45 = function () {
  function LawAndOrderConst() {}
  LawAndOrderConst.calculateLawAndOrder = function (__s1206param0, __s1206param1, __s1206param2) {
    return __s1206param0 - (__s1206param2 + __s1206param1);
  };
  LawAndOrderConst.calculateLawAndOrderWithTitle = function (__s1208param0, __s1208param1, __s1208param2, __s1208param3) {
    return Math.round((__s1208param0 - (__s1208param2 + __s1208param1)) * (1 + __s1208param3 / 100));
  };
  LawAndOrderConst.calculateLawAndOrderFactor = function (__s1210param0, __s1210param1, __s1210param2) {
    return LawAndOrderConst.calculateLawAndOrderFactorWithEffect(__s1210param0, __s1210param1, __s1210param2, __s0local27.DEFAULT_MODIFIER);
  };
  LawAndOrderConst.calculateLawAndOrderFactorWithEffect = function (__s1212param0, __s1212param1, __s1212param2, __s1212param3) {
    var __s1212local0 = LawAndOrderConst.calculateLawAndOrder(__s1212param0, __s1212param1, __s1212param2);
    if (__s1212local0 < 0) {
      return 1 / (Math.sqrt(Math.abs(__s1212local0)) / 50 + 1) * __s1212param3;
    } else {
      return (Math.sqrt(__s1212local0) / 50 + 1) * __s1212param3;
    }
  };
  return LawAndOrderConst;
}();
exports.LawAndOrderConst = __s0local45;
__s0local45.__class = "LawAndOrderConst";
var __s0local46 = function () {
  function LegendSkillConst() {}
  LegendSkillConst.RESET_COOLDOWN_IN_SECONDS_$LI$ = function () {
    if (LegendSkillConst.RESET_COOLDOWN_IN_SECONDS == null) {
      LegendSkillConst.RESET_COOLDOWN_IN_SECONDS = 1296000;
    }
    return LegendSkillConst.RESET_COOLDOWN_IN_SECONDS;
  };
  LegendSkillConst.TIER_UNLOCK_POINTS_$LI$ = function () {
    if (LegendSkillConst.TIER_UNLOCK_POINTS == null) {
      LegendSkillConst.TIER_UNLOCK_POINTS = [0, LegendSkillConst.TIER_1_POINTS_TO_TIER_2, LegendSkillConst.TIER_2_POINTS_TO_TIER_3, LegendSkillConst.TIER_3_POINTS_TO_TIER_4, LegendSkillConst.TIER_4_POINTS_TO_TIER_5, LegendSkillConst.TIER_5_POINTS_TO_TIER_6];
    }
    return LegendSkillConst.TIER_UNLOCK_POINTS;
  };
  LegendSkillConst.isTierUnlocked = function (__s1226param0, __s1226param1) {
    return __s1226param0 >= LegendSkillConst.MIN_TIER_ID && __s1226param0 <= LegendSkillConst.MAX_TIER_ID && __s1226param1 >= LegendSkillConst.TIER_UNLOCK_POINTS_$LI$()[__s1226param0 - 1];
  };
  LegendSkillConst.pointsNeededForTier = function (__s1228param0) {
    if (__s1228param0 >= LegendSkillConst.MIN_TIER_ID && __s1228param0 <= LegendSkillConst.MAX_TIER_ID) {
      return LegendSkillConst.TIER_UNLOCK_POINTS_$LI$()[__s1228param0 - 1];
    } else {
      return -1;
    }
  };
  LegendSkillConst.resetSkipCostC2 = function (__s1232param0, __s1232param1) {
    return (LegendSkillConst.BASE_COST * Math.pow(__s1232param1, LegendSkillConst.EXPONENT) | 0) + (__s1232param0 + LegendSkillConst.BASE_SKILL_POINTS) * LegendSkillConst.POINTS_FACTOR;
  };
  return LegendSkillConst;
}();
__s0local46.TIER_1_POINTS_TO_TIER_2 = 40;
__s0local46.TIER_2_POINTS_TO_TIER_3 = 80;
__s0local46.TIER_3_POINTS_TO_TIER_4 = 90;
__s0local46.TIER_4_POINTS_TO_TIER_5 = 90;
__s0local46.TIER_5_POINTS_TO_TIER_6 = 90;
__s0local46.MIN_TIER_ID = 1;
__s0local46.MAX_TIER_ID = 6;
__s0local46.BASE_COST = 20;
__s0local46.EXPONENT = 5;
__s0local46.BASE_SKILL_POINTS = 50;
__s0local46.POINTS_FACTOR = 30;
exports.LegendSkillConst = __s0local46;
__s0local46.__class = "LegendSkillConst";
var __s0local47 = function () {
  function LongTermPointEventConst() {}
  LongTermPointEventConst.SKINS_$LI$ = function () {
    if (LongTermPointEventConst.SKINS == null) {
      LongTermPointEventConst.SKINS = [LongTermPointEventConst.NO_SKIN, LongTermPointEventConst.HALLOWEEN_SKIN, LongTermPointEventConst.WINTER_SKIN, LongTermPointEventConst.SPRING_SKIN, LongTermPointEventConst.REUSABLE_SKIN, LongTermPointEventConst.NEW_KING_SKIN, LongTermPointEventConst.ST_PATRICKS_DAY_SKIN, LongTermPointEventConst.ANNIVERSARY_SKIN, LongTermPointEventConst.OKTOBERFEST_SKIN, LongTermPointEventConst.CHRISTMAS_SKIN, LongTermPointEventConst.MAYA_SKIN, LongTermPointEventConst.PIRATES_SKIN, LongTermPointEventConst.DRAGONRIDERS_SKIN];
    }
    return LongTermPointEventConst.SKINS;
  };
  return LongTermPointEventConst;
}();
__s0local47.NO_SKIN = -1;
__s0local47.HARD_MODE_SKIN = -2;
__s0local47.HALLOWEEN_SKIN = 2;
__s0local47.WINTER_SKIN = 3;
__s0local47.SPRING_SKIN = 4;
__s0local47.REUSABLE_SKIN = 5;
__s0local47.NEW_KING_SKIN = 6;
__s0local47.ST_PATRICKS_DAY_SKIN = 7;
__s0local47.ANNIVERSARY_SKIN = 8;
__s0local47.OKTOBERFEST_SKIN = 9;
__s0local47.CHRISTMAS_SKIN = 10;
__s0local47.MAYA_SKIN = 11;
__s0local47.PIRATES_SKIN = 12;
__s0local47.DRAGONRIDERS_SKIN = 13;
exports.LongTermPointEventConst = __s0local47;
__s0local47.__class = "LongTermPointEventConst";
var __s0local48 = function () {
  function LordConst() {}
  LordConst.isRealLord = function (__s1245param0) {
    return __s1245param0 >= LordConst.FIRST_REAL_ID;
  };
  return LordConst;
}();
__s0local48.NO_LORD = -1;
__s0local48.FIRST_REAL_ID = 0;
__s0local48.BARON_ID = -300;
__s0local48.AUTOSCALING_ALIEN_BARON_ID = -220;
__s0local48.AUTOSCALING_BLOOD_CROW_BARON_ID = -219;
__s0local48.AUTOSCALING_NOMAD_AND_KHAN_BARON_ID = -217;
__s0local48.AUTOSCALING_SAMURAI_AND_DAIMYO_BARON_ID = -218;
__s0local48.AUTOSCALING_BATTLEGROUND_RESOURCE_TOWER_BARON_ID = -1;
__s0local48.AUTOSCALING_KHAN_TAUNT_COMMANDER_ID = -215;
__s0local48.AUTOSCALING_WOLF_KING_TAUNT_COMMANDER_ID = -213;
__s0local48.AUTOSCALING_DAIMIO_COMMANDER_ID = -216;
__s0local48.RAID_BOSS_BARON_ID = -400;
exports.LordConst = __s0local48;
__s0local48.__class = "LordConst";
var __s0local49 = function () {
  return function LostAndFoundConst() {};
}();
__s0local49.INVENTORY_SIZE = 30;
exports.LostAndFoundConst = __s0local49;
__s0local49.__class = "LostAndFoundConst";
var __s0local50 = function () {
  function LuckyWheelConst() {}
  LuckyWheelConst.calculateC2CostForIncreasingPrizeClass = function (__s1255param0, __s1255param1) {
    if (__s1255param0 <= 0 || __s1255param1 <= 0) {
      return 0;
    }
    var __s1255local0 = __s1255param0 * __s1255param1;
    return (Math.ceil(__s1255local0 / 100) | 0) * 100;
  };
  return LuckyWheelConst;
}();
__s0local50.SPIN_TICKET_COST_NORMAL = 30;
__s0local50.SPIN_TICKET_COST_PROMODE = 300;
__s0local50.SPIN_TICKET_COST_SALE_DAYS = 1;
__s0local50.JACKPOT_C2_COST_NORMAL = 2900;
__s0local50.JACKPOT_C2_COST_PROMODE = 29000;
__s0local50.CATEGORY_COUNT_NORMAL = 8;
__s0local50.CATEGORY_JACKPOT = 0;
__s0local50.MIN_EXCLUSIVE_POINT_VALUE = 1;
__s0local50.WINNING_CLASS_PROGRESS_NORMAL = 1;
__s0local50.WINNING_CLASS_PROGRESS_PROMODE = 10;
exports.LuckyWheelConst = __s0local50;
__s0local50.__class = "LuckyWheelConst";
var __s0local51 = function () {
  function MarketConst() {}
  MarketConst.getMarketTravelCostC1 = function (__s1262param0, __s1262param1) {
    return Math.ceil(__s1262param1 * 5 * Math.log(__s1262param0 + 1) / Math.log(2.3) * 0.6) | 0;
  };
  MarketConst.getHorseCostC1 = function (__s1264param0, __s1264param1, __s1264param2) {
    return __s1264param2 * (Math.ceil(__s1264param1 * 5 * Math.log(__s1264param0 + 1) / Math.log(2.3) * 0.2) | 0);
  };
  MarketConst.getHorseCostC2 = function (__s1266param0, __s1266param1, __s1266param2) {
    var __s1266local0 = (Math.sqrt(__s1266param0 + 60) * -25 * Math.pow(1.5, Math.pow(__s1266param0 + 60, 2) * -0.0002) + 145) * 1.5 * (1 + __s1266param1 / 83) | 0;
    return Math.round(__s1266local0 * __s1266param2);
  };
  return MarketConst;
}();
__s0local51.MARKET_TRAVEL_SPEED = 50;
__s0local51.RESOURCES_PER_CARRIAGE = 100;
__s0local51.MAX_MARKET_MOVEMENTS_TO_TARGET = 15;
exports.MarketConst = __s0local51;
__s0local51.__class = "MarketConst";
var __s0local52 = function () {
  function MercenaryConst() {}
  MercenaryConst.getSkipC2Cost = function (__s1272param0) {
    return Math.ceil(__s1272param0 * 1 / 60 * MercenaryConst.INSTANT_COST_C2_PER_MINUTE) | 0;
  };
  return MercenaryConst;
}();
__s0local52.REFRESH_MISSION_COST = 240;
__s0local52.REFRESH_INTERVAL_HOURS = 6;
__s0local52.MAX_MISSION_COUNT = 6;
__s0local52.REWARD_AMOUNT = 3;
__s0local52.INSTANT_COST_C2_PER_MINUTE = 5;
__s0local52.REFRESH_FIRST_HOUR_OF_THE_DAY = 4;
exports.MercenaryConst = __s0local52;
__s0local52.__class = "MercenaryConst";
var __s0local53 = function () {
  function MessageConst() {}
  MessageConst.getSubtypeForBattleAndSpies = function (__s1278param0, __s1278param1) {
    if (__s1278param0) {
      if (__s1278param1) {
        return MessageConst.SUBTYPE_ATTACKER_SUCCESS;
      } else {
        return MessageConst.SUBTYPE_DEFENDER_FAILED;
      }
    } else if (__s1278param1) {
      return MessageConst.SUBTYPE_ATTACKER_FAILED;
    } else {
      return MessageConst.SUBTYPE_DEFENDER_SUCCESS;
    }
  };
  return MessageConst;
}();
__s0local53.MAX_MAILBOX_SIZE = 50;
__s0local53.MESSAGES_PER_PAGE = 8;
__s0local53.MAX_LENGTH_SUBJECT = 20;
__s0local53.MAX_LENGTH_RECEIVER = 15;
__s0local53.MIN_LENGTH_TEXT = 3;
__s0local53.MAX_LENGTH_TEXT = 1300;
__s0local53.MAX_IGNORE_COUNT = 50;
__s0local53.MAX_MAILBOX_ARCHIVE_SIZE = 20;
__s0local53.MAX_MAILBOX_BATTLE_AND_SPY_REPORTS = 25;
__s0local53.MAX_MAILBOX_BATTLE_AND_SPY_REPORTS_FORWARDED = 50;
__s0local53.MAX_MAILBOX_OUTBOX_SIZE = 10;
__s0local53.MAX_MAILBOX_SPECIAL_OFFERS_SIZE = 50;
__s0local53.MIN_FREE_MESSAGE_ID_THRESHOLD = 100000000;
__s0local53.FROM_SERVER_PLAYER_ID = -1;
__s0local53.FROM_SERVER_PLAYER_NAME = "";
__s0local53.MESSAGE_TYPE_SYSTEM = 0;
__s0local53.MESSAGE_TYPE_USER_IN = 1;
__s0local53.MESSAGE_TYPE_USER_OUT = 2;
__s0local53.MESSAGE_TYPE_SPY_PLAYER = 3;
__s0local53.MESSAGE_TYPE_SPY_NPC = 4;
__s0local53.MESSAGE_TYPE_CONQUERABLE_AREA = 5;
__s0local53.MESSAGE_TYPE_BATTLE_LOG = 6;
__s0local53.MESSAGE_TYPE_ALLIANCE_REQUEST = 20;
__s0local53.MESSAGE_TYPE_ALLIANCE_WAR = 21;
__s0local53.MESSAGE_TYPE_ALLIANCE_NEWSLETTER = 22;
__s0local53.MESSAGE_TYPE_ALLIANCE_BOOKMARK = 23;
__s0local53.MESSAGE_TYPE_LOWLEVEL_UNDERWORLD = 40;
__s0local53.MESSAGE_TYPE_USER_SURVEY = 50;
__s0local53.MESSAGE_TYPE_ATTACK_CANCELLED = 67;
__s0local53.MESSAGE_TYPE_SPY_CANCELLED = 68;
__s0local53.MESSAGE_TYPE_STARVE_INFO = 70;
__s0local53.MESSAGE_TYPE_BUILDING_DISABLED = 71;
__s0local53.MESSAGE_TYPE_MARKET_CARRIAGE_ARRIVED = 75;
__s0local53.MESSAGE_TYPE_ABO = 80;
__s0local53.MESSAGE_TYPE_PAYMENT_DOPPLER = 81;
__s0local53.MESSAGE_TYPE_REBUY = 90;
__s0local53.MESSAGE_TYPE_SPECIAL_EVENT = 95;
__s0local53.MESSAGE_TYPE_STARVE_VILLAGE_LOST = 96;
__s0local53.MESSAGE_TYPE_TOURNAMENT_OVER = 97;
__s0local53.MESSAGE_TYPE_ISLAND_KINGDOM_TITLE = 98;
__s0local53.MESSAGE_TYPE_ISLAND_KINGDOM_REWARD = 99;
__s0local53.MESSAGE_TYPE_STARVE_ISLE_RESOURCE_LOST = 100;
__s0local53.MESSAGE_RUIN_INFO = 102;
__s0local53.MESSAGE_TYPE_PLAYER_GIFT = 103;
__s0local53.MESSAGE_TYPE_SUBSCRIPTION = 104;
__s0local53.MESSAGE_TYPE_ATTACK_COUNT_THRESHOLD = 105;
__s0local53.MESSAGE_TYPE_THANKY_YOU_PACKAGE = 117;
__s0local53.MESSAGE_TYPE_DOWNTIME_STATUS = 118;
__s0local53.MESSAGE_TYPE_DIVISION_CHANGE = 119;
__s0local53.MESSAGE_TYPE_ATTACK_ADVISOR_FAILURE = 120;
__s0local53.MESSAGE_TYPE_ATTACK_ADVISOR_SUMMARY = 121;
__s0local53.MESSAGE_TYPE_HIGHSCORE_BONUS = 122;
__s0local53.MESSAGE_TYPE_EVENT_ANNOUNCEMENT = 123;
__s0local53.MESSAGE_TYPE_POPUP = 124;
__s0local53.MESSAGE_TYPE_PATCH_NOTES = 125;
__s0local53.MESSAGE_TYPE_PRIVATE_OFFER = 126;
__s0local53.MESSAGE_TYPE_TEXT_ID = 127;
__s0local53.MAILBOX_INBOX = 0;
__s0local53.MAILBOX_COMBAT_AND_SPY = 1;
__s0local53.MAILBOX_FORWARDED = 2;
__s0local53.MAILBOX_OUTBOX = 3;
__s0local53.MAILBOX_SPECIAL_OFFERS = 4;
__s0local53.SPECIAL_ID_BAEM_AWARD = 1;
__s0local53.SPECIAL_ID_BAEM_AWARD_FINAL = 2;
__s0local53.SPECIAL_ID_EUROPEAN_AWARD = 3;
__s0local53.SPECIAL_ID_SHADOW_TEASER = 4;
__s0local53.SPECIAL_ID_EGA_100_RUBIES = 5;
__s0local53.SPECIAL_ID_EGA_150_RUBIES = 6;
__s0local53.SPECIAL_ID_EGA_500_RUBIES_FORUM = 7;
__s0local53.SPECIAL_ID_GAMEX_AWARD = 8;
__s0local53.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD = 9;
__s0local53.SPECIAL_ID_TURKEY_MESSAGE = 10;
__s0local53.SPECIAL_ID_SPECIAL_EVENT_START = 12;
__s0local53.SPECIAL_ID_SPECIAL_EVENT_END = 13;
__s0local53.SPECIAL_ID_FACTION_LAST_MAN_STANDING_BEGAN_FOR_FACTION = 14;
__s0local53.SPECIAL_ID_FACTION_LAST_CAMP_DESTROYED = 15;
__s0local53.SPECIAL_ID_VIP_INFORMATION = 16;
__s0local53.SPECIAL_ID_WORLD_CUP = 17;
__s0local53.SPECIAL_ID_UNDERWORLD = 18;
__s0local53.SPECIAL_ID_THORNKING = 19;
__s0local53.SPECIAL_ID_HOSPITAL_CAPACITY_EXCEEDED = 20;
__s0local53.SPECIAL_ID_EMPIRE_DEALS_DAYS_MESSAGE = 21;
__s0local53.SPECIAL_ID_TERMS_AND_CONDITIONS = 22;
__s0local53.SPECIAL_ID_WAR_OF_EMPIRES_1 = 23;
__s0local53.SPECIAL_ID_WAR_OF_EMPIRES_2 = 24;
__s0local53.SPECIAL_ID_WAR_OF_EMPIRES_3 = 25;
__s0local53.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_1 = 26;
__s0local53.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_2 = 27;
__s0local53.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_3 = 28;
__s0local53.SPECIAL_ID_ANNOUNCE_INSTANCE = 29;
__s0local53.SPECIAL_ID_FAIR_PLAY_MESSAGE = 30;
__s0local53.SPECIAL_ID_ALCHEMIST_RETIREMENT = 31;
__s0local53.SPECIAL_ID_SPECIAL_EVENT_UPDATE = 32;
__s0local53.SPECIAL_ID_TREASURE_MAP_PIECE_FOUND = 33;
__s0local53.SPECIAL_ID_MONUMENT = 66;
__s0local53.SPECIAL_ID_LABORATORY = 67;
__s0local53.SPECIAL_ID_METROPOLIS = 68;
__s0local53.SPECIAL_ID_KINGSTOWER = 69;
__s0local53.PRIVATE_OFFER_TIPPMAIL = 1;
__s0local53.PRIVATE_OFFER_DUNGEON_TREASURE_CHEST = 5;
__s0local53.PRIVATE_OFFER_WHALE_CHEST = 6;
__s0local53.PRIVATE_OFFER_EVENT_GIFT = 7;
__s0local53.PRIVATE_OFFER_FORUM_ADVERTISING = 8;
__s0local53.PRIVATE_OFFER_DEFENSE = 9;
__s0local53.PRIVATE_OFFER_TOOL_RETURN = 10;
__s0local53.PRIVATE_OFFER_VOUCHER = 11;
__s0local53.PRIVATE_OFFER_TIME_CHALLENGE = 12;
__s0local53.PRIVATE_OFFER_TIME_CHALLENGE_FINISHED = 13;
__s0local53.PRIVATE_OFFER_BESTSELLER_SHOP = 14;
__s0local53.BATTLE_LOG_CANCELLED_GENERAL = 1;
__s0local53.BATTLE_LOG_CANCELLED_COOLDOWN = 2;
__s0local53.BATTLE_LOG_CANCELLED_STARVATION = 3;
__s0local53.TOURNAMENT_SINGLE = 1;
__s0local53.SUBTYPE_SIEGE_CANCELED = 0;
__s0local53.SUBTYPE_NEW_SIEGE = 1;
__s0local53.SUBTYPE_CONQUERABLE_AREA_CONQUERED = 2;
__s0local53.SUBTYPE_CONQUERABLE_AREA_LOST = 3;
__s0local53.SUBTYPE_TREASUREMAP_SUBNODE = 0;
__s0local53.SUBTYPE_TREASUREMAP_MAINNODE = 1;
__s0local53.SUBTYPE_TREASUREMAP_ENDNODE = 2;
__s0local53.SUBTYPE_ATTACK_NORMAL = 0;
__s0local53.SUBTYPE_ATTACK_CONQUER = 1;
__s0local53.SUBTYPE_ATTACK_NPC = 2;
__s0local53.SUBTYPE_ATTACK_OCCUPY = 3;
__s0local53.SUBTYPE_ATTACK_SHADOW = 4;
__s0local53.POSITION_SUBTYPE_SPY = 0;
__s0local53.SUBTYPE_SPY_SABOTAGE = 0;
__s0local53.SUBTYPE_SPY_DEFENCE = 1;
__s0local53.SUBTYPE_SPY_ECO = 2;
__s0local53.SUBTYPE_SPY_PLAQUE_MONK = 3;
__s0local53.SUBTYPE_ATTACKER_SUCCESS = 0;
__s0local53.SUBTYPE_DEFENDER_SUCCESS = 1;
__s0local53.SUBTYPE_ATTACKER_FAILED = 2;
__s0local53.SUBTYPE_DEFENDER_FAILED = 3;
__s0local53.SUBTYPE_ALLIANCE_ENEMY_ATTACK_WAR = 0;
__s0local53.SUBTYPE_ALLIANCE_ENEMY_DECLARED_WAR = 1;
__s0local53.SUBTYPE_ALLIANCE_OUR_DECLARED_WAR = 2;
__s0local53.SUBTYPE_ALLIANCE_OUR_ATTACK_WAR = 3;
__s0local53.SUBTYPE_ALLIANCE_OUR_SABOTAGE_WAR = 4;
__s0local53.SUBTYPE_ALLIANCE_ENEMY_END_WAR = 5;
__s0local53.SUBTYPE_ALLIANCE_ENEMY_SABOTAGE_WAR = 6;
__s0local53.SUBTYPE_TITLE_ASSIGNED = 0;
__s0local53.SUBTYPE_TITLE_LOST = 1;
__s0local53.SUBTYPE_NEW_KING = 2;
__s0local53.SUBTYPE_REWARD_TOP_X = 3;
__s0local53.SUBTYPE_REWARD_KING = 4;
__s0local53.SUBTYPE_REWARD_POINTS = 5;
__s0local53.SUBTYPE_REWARD_WINNER_ALLI = 6;
__s0local53.SUBTYPE_LOST_TITLE_ON_RESET = 7;
__s0local53.DATATYPE_TITLE_LOST_TAKEN = 0;
__s0local53.DATATYPE_TITLE_LOST_RESET = 1;
__s0local53.DATATYPE_TITLE_LOST_LEADER_LEFT = 2;
__s0local53.DATATYPE_TITLE_LOST_PLAYER_LEFT = 3;
__s0local53.SUBTYPE_ATTACK_ABORTED = 0;
__s0local53.SUBTYPE_ATTACK_AUTO_RETREAT = 1;
__s0local53.SUBTYPE_ATTACK_AUTO_RETREAT_ENEMY = 2;
__s0local53.SUBTYPE_SPY_ABORTED = 0;
__s0local53.SUBTYPE_BOOKMARK_ADDED = 0;
__s0local53.SUBTYPE_BOOKMARK_DELETED = 1;
__s0local53.SUBTYPE_LOWLEVEL_UNDERWORLD_START = 0;
__s0local53.SUBTYPE_LOWLEVEL_UNDERWORLD_WARN = 1;
__s0local53.SUBTYPE_LOWLEVEL_UNDERWORLD_END = 2;
__s0local53.SUBTYPE_THANK_YOU_PACKAGE_DESTROYED_FACTION_TOWERS = 0;
__s0local53.SUBTYPE_SUPPORT_PACKAGE_LOST_FACTION_TOWERS = 1;
__s0local53.SUBTYPE_SUBSCRIPTION_ENABLED = 0;
__s0local53.SUBTYPE_SUBSCRIPTION_EXPIRED = 1;
__s0local53.SUBTYPE_SUBSCRIPTION_REWARD = 2;
__s0local53.SUBTYPE_META_DATA_SPLITTER = "#";
__s0local53.SUBJECT_SEPARATOR = "+";
__s0local53.SUBTYPE_POPUP_REGISTRATION_GIFT = 0;
__s0local53.SUBTYPE_POPUP_FACEBOOK_CONNECTION = 1;
__s0local53.SUBTYPE_POPUP_LOGIN_BONUS = 2;
__s0local53.SUBTYPE_POPUP_SAVE_ACCOUNT = 3;
exports.MessageConst = __s0local53;
__s0local53.__class = "MessageConst";
var __s0local54 = function () {
  return function MonumentConst() {};
}();
__s0local54.MAX_LEVEL_NORMAL_MONUMENT = 9;
__s0local54.START_LEVEL_RARE_MONUMENT = 5;
__s0local54.MAX_LEVEL_RARE_MONUMENT = 19;
exports.MonumentConst = __s0local54;
__s0local54.__class = "MonumentConst";
var __s0local55 = function () {
  return function MovementFilterConst() {};
}();
__s0local55.PLAYER_PVP_ATTACKS = 0;
__s0local55.ALLIANCE_PVP_ATTACKS = 1;
__s0local55.RESOURCE_TRANSPORTS = 2;
exports.MovementFilterConst = __s0local55;
__s0local55.__class = "MovementFilterConst";
var __s0local56 = function () {
  function OutpostConst() {}
  OutpostConst.SIEGE_TIME_$LI$ = function () {
    if (OutpostConst.SIEGE_TIME == null) {
      OutpostConst.SIEGE_TIME = 86400;
    }
    return OutpostConst.SIEGE_TIME;
  };
  OutpostConst.SIEGE_TIME_TEST_$LI$ = function () {
    if (OutpostConst.SIEGE_TIME_TEST == null) {
      OutpostConst.SIEGE_TIME_TEST = 600;
    }
    return OutpostConst.SIEGE_TIME_TEST;
  };
  OutpostConst.MIN_TIME_BEFORE_ABANDON_$LI$ = function () {
    if (OutpostConst.MIN_TIME_BEFORE_ABANDON == null) {
      OutpostConst.MIN_TIME_BEFORE_ABANDON = 259200;
    }
    return OutpostConst.MIN_TIME_BEFORE_ABANDON;
  };
  OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST_$LI$ = function () {
    if (OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST == null) {
      OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST = 300;
    }
    return OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST;
  };
  OutpostConst.ABANDON_TIME_$LI$ = function () {
    if (OutpostConst.ABANDON_TIME == null) {
      OutpostConst.ABANDON_TIME = 86400;
    }
    return OutpostConst.ABANDON_TIME;
  };
  OutpostConst.ABANDON_TIME_TEST_$LI$ = function () {
    if (OutpostConst.ABANDON_TIME_TEST == null) {
      OutpostConst.ABANDON_TIME_TEST = 3600;
    }
    return OutpostConst.ABANDON_TIME_TEST;
  };
  OutpostConst.ABANDON_CANCEL_TIME_$LI$ = function () {
    if (OutpostConst.ABANDON_CANCEL_TIME == null) {
      OutpostConst.ABANDON_CANCEL_TIME = 10800;
    }
    return OutpostConst.ABANDON_CANCEL_TIME;
  };
  OutpostConst.getCapitalDefaultOwnerFor = function (__s1318param0) {
    switch (__s1318param0) {
      case __s0local100.KINGDOM_ID:
        return OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID;
      case __s0local107.KINGDOM_ID:
        return OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID;
      case __s0local106.KINGDOM_ID:
        return OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID;
      case __s0local110.KINGDOM_ID:
        return OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID;
      default:
        return OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID;
    }
  };
  OutpostConst.isCapitalDefaultOwner = function (__s1321param0) {
    return __s1321param0 === OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID || __s1321param0 === OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID || __s1321param0 === OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID || __s1321param0 === OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID;
  };
  OutpostConst.getLaboratoryDefaultOwnerFor = function (__s1323param0) {
    switch (__s1323param0) {
      case __s0local100.KINGDOM_ID:
        return OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID;
      case __s0local107.KINGDOM_ID:
        return OutpostConst.LABORATORY_ICE_OWNER_ID;
      case __s0local106.KINGDOM_ID:
        return OutpostConst.LABORATORY_DESERT_OWNER_ID;
      case __s0local110.KINGDOM_ID:
        return OutpostConst.LABORATORY_VOLCANO_OWNER_ID;
      default:
        return OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID;
    }
  };
  OutpostConst.isLaboratoryDefaultOwner = function (__s1326param0) {
    return __s1326param0 === OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID || __s1326param0 === OutpostConst.LABORATORY_ICE_OWNER_ID || __s1326param0 === OutpostConst.LABORATORY_DESERT_OWNER_ID || __s1326param0 === OutpostConst.LABORATORY_VOLCANO_OWNER_ID;
  };
  return OutpostConst;
}();
__s0local56.DUMMY_SIEGE_TIME = 2;
__s0local56.DAMAGED_BUILDING_RATIO = 0.9;
__s0local56.ABANDON_CANCEL_TIME_TEST = 60;
__s0local56.DEFAULT_NAME = "";
__s0local56.OUTPOST_DEFAULT_OWNER_ID = -300;
__s0local56.OUTPOST_DEFAULT_AREA_ID = -300;
__s0local56.OUTPOST_DEFAULT_LEVEL = 5;
__s0local56.CAPITAL_CLASSIC_DEFAULT_OWNER_ID = -432;
__s0local56.CAPITAL_ICE_DEFAULT_OWNER_ID = -433;
__s0local56.CAPITAL_DESSERT_DEFAULT_OWNER_ID = -434;
__s0local56.CAPITAL_VOLCANO_DEFAULT_OWNER_ID = -435;
__s0local56.CAPITAL_UNSPAWNED_AREA_ID = -301;
__s0local56.CAPITAL_MAP_ICON = "333300";
__s0local56.CAPITAL_NON_CLASSIC_FOOD_PRODUCERS = 2;
__s0local56.CAPITAL_CLASSIC_FOOD_PRODUCERS = 3;
__s0local56.METROPOL_DEFAULT_OWNER_ID = -440;
__s0local56.METROPOL_UNSPAWNED_AREA_ID = -341;
__s0local56.METROPOL_ALLIANCE_BATTLE_GROUND_MINED_OUT_AREA_ID = -342;
__s0local56.METROPOL_MAP_ICON = "333300";
__s0local56.METROPOL_FOOD_PRODUCERS = 3;
__s0local56.KINGS_TOWER_DEFAULT_OWNER_ID = -450;
__s0local56.KINGS_TOWER_UNSPAWNED_AREA_ID = -351;
__s0local56.KINGS_TOWER_BONUS = 20;
__s0local56.KINGS_TOWER_DEFAULT_LEVEL = 70;
__s0local56.MONUMENT_DEFAULT_OWNER_ID = -460;
__s0local56.MONUMENT_UNSPAWNED_AREA_ID = -353;
__s0local56.MONUMENT_DEFAULT_LEVEL = 70;
__s0local56.LABORATORY_CLASSIC_DEFAULT_OWNER_ID = -470;
__s0local56.LABORATORY_ICE_OWNER_ID = -471;
__s0local56.LABORATORY_DESERT_OWNER_ID = -472;
__s0local56.LABORATORY_VOLCANO_OWNER_ID = -473;
__s0local56.LABORATORY_UNSPAWNED_AREA_ID = -355;
__s0local56.LABORATORY_DEFAULT_LEVEL = 70;
__s0local56.ALLIANCE_BATTLE_GROUND_DEFAULT_OWNER_ID = -480;
__s0local56.ALLIANCE_BATTLE_GROUND_UNSPAWNED_AREA_ID = -481;
__s0local56.LANDMARK_DEFAULT_LEVEL = 70;
__s0local56.RESOURCE_ISLE_DEFAULT_LEVEL = 70;
exports.OutpostConst = __s0local56;
__s0local56.__class = "OutpostConst";
var __s0local57 = function () {
  return function PackageConst() {};
}();
__s0local57.BUY_TYPE_EVENT = 0;
__s0local57.BUY_TYPE_PRIVATE_OFFER = 1;
__s0local57.BUY_TYPE_VIP = 2;
__s0local57.BUY_TYPE_SLUM = 3;
__s0local57.BUY_TYPE_PRIMEDAY = 4;
__s0local57.BUY_TYPE_CRUSADEMAP = 5;
__s0local57.BUY_TYPE_GIFT = 6;
__s0local57.BUY_TYPE_FUSION = 7;
__s0local57.BUY_TYPE_OFFERINGS = 8;
__s0local57.BUY_TYPE_GENERAL_SKILLS_RESET_TOKEN = 9;
__s0local57.MAX_BUY_PER_CLICK = 1000;
__s0local57.MAX_PLAYER_GIFT_PER_DAY = 50;
__s0local57.MAX_PLAYER_GIFT_STORAGE = 30;
exports.PackageConst = __s0local57;
__s0local57.__class = "PackageConst";
var __s0local58 = function () {
  function PlayerConst() {}
  PlayerConst.NAME_PREFIX_$LI$ = function () {
    if (PlayerConst.NAME_PREFIX == null) {
      PlayerConst.NAME_PREFIX = ["strong", "fast", "ultimate", "new", "mighty", "righteous", "amazing", "super", "great", "powerfully", "epic", "legendary", "fabulous", "gorgeous", "wise", "favoured", "heavy", "brave", "famous", "dark", "noble"];
    }
    return PlayerConst.NAME_PREFIX;
  };
  PlayerConst.NAME_MIDDLE_$LI$ = function () {
    if (PlayerConst.NAME_MIDDLE == null) {
      PlayerConst.NAME_MIDDLE = ["boss", "lord", "king", "manager", "star", "pro", "guru", "gold", "diamond"];
    }
    return PlayerConst.NAME_MIDDLE;
  };
  PlayerConst.NAME_SUFFIX_$LI$ = function () {
    if (PlayerConst.NAME_SUFFIX == null) {
      PlayerConst.NAME_SUFFIX = ["player", "user", "gamer", "adventurer", "hero", "champion", "ruler", "swayer", "ruler", "warrior", "fighter", "berserk", "nobleman"];
    }
    return PlayerConst.NAME_SUFFIX;
  };
  PlayerConst.OPEN_GATE_C2_$LI$ = function () {
    if (PlayerConst.OPEN_GATE_C2 == null) {
      PlayerConst.OPEN_GATE_C2 = [450, 700];
    }
    return PlayerConst.OPEN_GATE_C2;
  };
  PlayerConst.OPEN_GATE_DURATION_$LI$ = function () {
    if (PlayerConst.OPEN_GATE_DURATION == null) {
      PlayerConst.OPEN_GATE_DURATION = [21600, 43200];
    }
    return PlayerConst.OPEN_GATE_DURATION;
  };
  PlayerConst.PEACE_MODE_C2_$LI$ = function () {
    if (PlayerConst.PEACE_MODE_C2 == null) {
      PlayerConst.PEACE_MODE_C2 = [5000, 7500, 10000, 20000];
    }
    return PlayerConst.PEACE_MODE_C2;
  };
  PlayerConst.PEACE_MODE_DURATION_$LI$ = function () {
    if (PlayerConst.PEACE_MODE_DURATION == null) {
      PlayerConst.PEACE_MODE_DURATION = [604800, 1209600, 1814400, 5184000];
    }
    return PlayerConst.PEACE_MODE_DURATION;
  };
  PlayerConst.PEACE_MODE_HEAT_UP_$LI$ = function () {
    if (PlayerConst.PEACE_MODE_HEAT_UP == null) {
      PlayerConst.PEACE_MODE_HEAT_UP = 86400;
    }
    return PlayerConst.PEACE_MODE_HEAT_UP;
  };
  PlayerConst.PEACE_MODE_HEAT_UP_TEST_$LI$ = function () {
    if (PlayerConst.PEACE_MODE_HEAT_UP_TEST == null) {
      PlayerConst.PEACE_MODE_HEAT_UP_TEST = 600;
    }
    return PlayerConst.PEACE_MODE_HEAT_UP_TEST;
  };
  PlayerConst.PEACE_MODE_COOLDOWN_$LI$ = function () {
    if (PlayerConst.PEACE_MODE_COOLDOWN == null) {
      PlayerConst.PEACE_MODE_COOLDOWN = 172800;
    }
    return PlayerConst.PEACE_MODE_COOLDOWN;
  };
  PlayerConst.MAIL_CONFIRM_C2_$LI$ = function () {
    if (PlayerConst.MAIL_CONFIRM_C2 == null) {
      PlayerConst.MAIL_CONFIRM_C2 = [500, 10000, 30000, 60000, 90000];
    }
    return PlayerConst.MAIL_CONFIRM_C2;
  };
  PlayerConst.LOGIN_LP_INCENTIVES_C1_$LI$ = function () {
    if (PlayerConst.LOGIN_LP_INCENTIVES_C1 == null) {
      PlayerConst.LOGIN_LP_INCENTIVES_C1 = [0, 6000, 0, 2000, 0, 1500, 0, 1000, 0, 1500, 0, 3000, 0, 5000];
    }
    return PlayerConst.LOGIN_LP_INCENTIVES_C1;
  };
  PlayerConst.LOGIN_LP_INCENTIVES_C2_$LI$ = function () {
    if (PlayerConst.LOGIN_LP_INCENTIVES_C2 == null) {
      PlayerConst.LOGIN_LP_INCENTIVES_C2 = [150, 0, 50, 0, 37, 0, 26, 0, 37, 0, 75, 0, 125, 0];
    }
    return PlayerConst.LOGIN_LP_INCENTIVES_C2;
  };
  PlayerConst.LEVEL_CAP_XP_$LI$ = function () {
    if (PlayerConst.LEVEL_CAP_XP == null) {
      PlayerConst.LEVEL_CAP_XP = PlayerConst.LEVEL_CAP * PlayerConst.LEVEL_CAP * 30;
    }
    return PlayerConst.LEVEL_CAP_XP;
  };
  PlayerConst.COMBINED_LEVEL_CAP_$LI$ = function () {
    if (PlayerConst.COMBINED_LEVEL_CAP == null) {
      PlayerConst.COMBINED_LEVEL_CAP = PlayerConst.LEVEL_CAP + PlayerConst.LEGEND_LEVEL_CAP;
    }
    return PlayerConst.COMBINED_LEVEL_CAP;
  };
  PlayerConst.LEGEND_MAX_XP_$LI$ = function () {
    if (PlayerConst.LEGEND_MAX_XP == null) {
      PlayerConst.LEGEND_MAX_XP = PlayerConst.getXPFromLegendLevel(PlayerConst.LEGEND_LEVEL_CAP);
    }
    return PlayerConst.LEGEND_MAX_XP;
  };
  PlayerConst.CUMULATED_LEVEL_CAP_$LI$ = function () {
    if (PlayerConst.CUMULATED_LEVEL_CAP == null) {
      PlayerConst.CUMULATED_LEVEL_CAP = PlayerConst.LEVEL_CAP + PlayerConst.LEGEND_LEVEL_CAP;
    }
    return PlayerConst.CUMULATED_LEVEL_CAP;
  };
  PlayerConst.LOGIN_BONUS_KEY_PRICES_$LI$ = function () {
    if (PlayerConst.LOGIN_BONUS_KEY_PRICES == null) {
      PlayerConst.LOGIN_BONUS_KEY_PRICES = [[30, 40, 45, 55, 104, 150], [60, 70, 90, 99, 187, 275], [75, 90, 110, 130, 256, 375], [100, 115, 140, 183, 280, 540], [135, 160, 200, 240, 457, 675], [180, 220, 260, 317, 580, 950]];
    }
    return PlayerConst.LOGIN_BONUS_KEY_PRICES;
  };
  PlayerConst.SAVE_ACCOUNT_LEVEL_CATEGORY_$LI$ = function () {
    if (PlayerConst.SAVE_ACCOUNT_LEVEL_CATEGORY == null) {
      PlayerConst.SAVE_ACCOUNT_LEVEL_CATEGORY = [6, 7, 9, 11, 13, 15];
    }
    return PlayerConst.SAVE_ACCOUNT_LEVEL_CATEGORY;
  };
  PlayerConst.PLAYER_NAME_CHANGE_COOLDOWN_$LI$ = function () {
    if (PlayerConst.PLAYER_NAME_CHANGE_COOLDOWN == null) {
      PlayerConst.PLAYER_NAME_CHANGE_COOLDOWN = 43200;
    }
    return PlayerConst.PLAYER_NAME_CHANGE_COOLDOWN;
  };
  PlayerConst.getLevelFromXP = function (__s1396param0) {
    return Math.min(PlayerConst.LEVEL_CAP, Math.floor(Math.sqrt(__s1396param0 / 30))) | 0;
  };
  PlayerConst.getXPFromLevel = function (__s1398param0) {
    return Math.min(PlayerConst.LEVEL_CAP_XP_$LI$(), __s1398param0 * __s1398param0 * 30);
  };
  PlayerConst.getLegendLevelFromXP = function (__s1400param0) {
    var __s1400local0 = __s1400param0 - PlayerConst.LEVEL_CAP_XP_$LI$();
    if (__s1400local0 >= 0) {
      var __s1400local1 = Math.max(1, Math.floor(Math.pow((__s1400local0 + 2750) / 3000, 1 / 1.19))) | 0;
      return Math.min(PlayerConst.LEGEND_LEVEL_CAP, __s1400local1);
    }
    return 0;
  };
  PlayerConst.getXPFromLegendLevel = function (__s1403param0) {
    if (__s1403param0 < 1) {
      return 0;
    } else {
      __s1403param0 = Math.min(PlayerConst.LEGEND_LEVEL_CAP, __s1403param0);
      return (Math.ceil(Math.pow(__s1403param0, 1.19) * 3000) | 0) - 2750 + PlayerConst.LEVEL_CAP_XP_$LI$();
    }
  };
  PlayerConst.getXPFromCombinedLevel = function (__s1407param0) {
    if (__s1407param0 <= PlayerConst.LEVEL_CAP) {
      return PlayerConst.getXPFromLevel(__s1407param0);
    } else {
      return PlayerConst.getXPFromLegendLevel(__s1407param0 - PlayerConst.LEVEL_CAP);
    }
  };
  PlayerConst.getAttackCooldown = function (__s1411param0, __s1411param1) {
    return Math.min(47, Math.max(3, Math.floor((__s1411param0 * 0.65 - __s1411param1) * 3) | 0)) * 60 * 60;
  };
  PlayerConst.getOpenGateCosts = function (__s1413param0, __s1413param1) {
    var __s1413local0 = Math.min(PlayerConst.OPEN_GATE_COUNT_CAP, __s1413param1);
    return (Math.round(PlayerConst.OPEN_GATE_C2_$LI$()[__s1413param0] * Math.pow(__s1413local0, 1.1 + __s1413local0 / 10) / 10) | 0) * 10;
  };
  PlayerConst.getLoginBonusLevelCategory = function (__s1415param0) {
    if (__s1415param0 < 15) {
      return 0;
    } else if (__s1415param0 < 21) {
      return 1;
    } else if (__s1415param0 < 27) {
      return 2;
    } else if (__s1415param0 < 38) {
      return 3;
    } else if (__s1415param0 < 51) {
      return 4;
    } else {
      return 5;
    }
  };
  PlayerConst.getLoginBonusLevelCategoryNew = function (__s1423param0) {
    if (__s1423param0 < 24) {
      return 0;
    } else if (__s1423param0 < 40) {
      return 1;
    } else if (__s1423param0 < 50) {
      return 2;
    } else if (__s1423param0 < 60) {
      return 3;
    } else if (__s1423param0 < 69) {
      return 4;
    } else {
      return 5;
    }
  };
  PlayerConst.getLoginBonusKeyCost = function (__s1431param0, __s1431param1) {
    var __s1431local0 = PlayerConst.getLoginBonusLevelCategory(__s1431param0);
    return PlayerConst.LOGIN_BONUS_KEY_PRICES_$LI$()[__s1431local0][__s1431param1];
  };
  PlayerConst.justReachedLevel = function (__s1433param0, __s1433param1, __s1433param2) {
    return __s1433param1 >= __s1433param2 && __s1433param0 < __s1433param2;
  };
  PlayerConst.isHumanPlayerOrAlien = function (__s1435param0) {
    return PlayerConst.isHumanPlayer(__s1435param0) || PlayerConst.isAlien(__s1435param0);
  };
  PlayerConst.isHumanPlayer = function (__s1437param0) {
    return __s1437param0 > -1;
  };
  PlayerConst.isAlien = function (__s1439param0) {
    return __s1439param0 === __s0local26.BASIC_ALIEN_ID || __s1439param0 === __s0local26.BASIC_RED_ALIEN_ID || __s1439param0 === __s0local26.BASIC_SAMURAI_ALIEN_ID;
  };
  PlayerConst.isLegendaryPlayer = function (__s1441param0) {
    return __s1441param0 >= PlayerConst.LEVEL_CAP;
  };
  PlayerConst.isGodlikePlayer = function (__s1443param0) {
    return __s1443param0 >= PlayerConst.LEGEND_LEVEL_CAP;
  };
  PlayerConst.isNPC = function (__s1445param0) {
    return !PlayerConst.isHumanPlayer(__s1445param0);
  };
  return PlayerConst;
}();
__s0local58.START_XP = 0;
__s0local58.START_C1 = 100;
__s0local58.START_C2 = 0;
__s0local58.START_WOOD = 200;
__s0local58.START_STONE = 100;
__s0local58.START_FOOD = 0;
__s0local58.START_HONOR = 0;
__s0local58.START_ACHIEVEMENTPOINTS = 0;
__s0local58.MAX_LOGIN_FAILS = 59;
__s0local58.MAX_LOGIN_FAIL_RESETTIME = 1800;
__s0local58.CASTLE_NAME_MIN_LENGTH = 3;
__s0local58.CASTLE_NAME_MAX_LENGTH = 15;
__s0local58.OPEN_GATE_COUNT_CAP = 9;
__s0local58.WELCOME_GIFT_ID = 0;
__s0local58.MAIL_CONFIRMED_ID = 1;
__s0local58.CHANGE_CASTLE_NAME_C2 = 2500;
__s0local58.NEWSLETTER_CONFIRM_ID = 1;
__s0local58.DAILY_FAME_LOSS = 2;
__s0local58.MERCENARY_EVENT_MIN_LEVEL = 6;
__s0local58.START_LEVEL = 1;
__s0local58.LEVEL_CAP = 70;
__s0local58.LEGEND_LEVEL_CAP = 950;
__s0local58.START_LEGEND_LEVEL = 1;
__s0local58.PREMIUM_FLAG_COST_C2 = 4900;
__s0local58.MIN_LEVEL_FOR_RECRUITMENT = 2;
__s0local58.MIN_LEVEL_FOR_MESSAGES = 2;
__s0local58.MIN_LEVEL_FOR_ACTIVITY_CHEST = 2;
__s0local58.LEVEL_FOR_CASTLE_NAME = 3;
__s0local58.MIN_LEVEL_FOR_MAP = 3;
__s0local58.MIN_LEVEL_FOR_MAIL_POPUP = 3;
__s0local58.LEVEL_FOR_FACEBOOK_MESSAGE = 3;
__s0local58.MIN_LEVEL_FOR_EXPANSION_TREASURE = 6;
__s0local58.MIN_LEVEL_FOR_DAILY_REWARD = 6;
__s0local58.DAILY_VIP_POINTS_LOSS = 5;
__s0local58.BOOKMARKS_MAX_ENTRYS = 50;
__s0local58.LOGIN_BONUS_REQUIRED_XP = 1200;
__s0local58.LOGIN_BONUS_KEYS = 3;
__s0local58.DAYS_BEFORE_FINAL_DELETION = 120;
__s0local58.MIN_LEVEL_FOR_INVITE_TEASER = 12;
__s0local58.DEFAULT_MAIL = "-1";
__s0local58.RESEND_MAIL_ACCOUNT_VERIFICATION = 0;
__s0local58.MAIL_CHANGE_NO_PENDING_STATE = 0;
__s0local58.MAIL_CHANGE_STARTED = 1;
__s0local58.MAIL_CHANGE_FIRST_EXPIRATION_TIME_STATE = 2;
__s0local58.MAIL_CHANGE_SECOND_EXPIRATION_TIME_STATE = 3;
__s0local58.MAIL_CHANGE_CANCEL_STARTED = 4;
exports.PlayerConst = __s0local58;
__s0local58.__class = "PlayerConst";
var __s0local59 = function () {
  function PointEventConst() {}
  PointEventConst.POINTS_FOR_TASK_$LI$ = function () {
    if (PointEventConst.POINTS_FOR_TASK == null) {
      PointEventConst.POINTS_FOR_TASK = [1, 2, 3];
    }
    return PointEventConst.POINTS_FOR_TASK;
  };
  return PointEventConst;
}();
__s0local59.NUMBER_OF_REWARDPACKAGES = 3;
__s0local59.TOTAL_NUMBER_OF_REWARDS = 4;
__s0local59.COLLECT_TAX_PE_TYPE = 1;
__s0local59.SPY_PE_TYPE = 2;
__s0local59.SABOTAGE_DAMAGE_PE_TYPE = 3;
__s0local59.WIN_HONOR_FIGHT_PE_TYPE = 4;
__s0local59.DO_FIRE_DAMAGE_PE_TYPE = 5;
__s0local59.COLLECT_FROM_CITIZEN_PE_TYPE = 6;
__s0local59.COLLECT_FROM_CARRIAGE_PE_TYPE = 7;
__s0local59.OFF_MELEE_UNITS_PE_TYPE = 8;
__s0local59.OFF_RANGE_UNITS_PE_TYPE = 9;
__s0local59.FIND_EQUIPMENT_PE_TYPE = 10;
__s0local59.CRAFT_EQUIPMENT_PE_TYPE = 11;
__s0local59.RESOURCE_TO_PLAYER_PE_TYPE = 12;
__s0local59.COUNT_DUNGEONS_PE_TYPE = 13;
__s0local59.COUNT_DUNGEONS_KINGDOM_PE_TYPE = 14;
__s0local59.POINT_EVENT_FAME_PE_TYPE = 15;
__s0local59.POINT_EVENT_CONQUER_VILLAGES = 16;
__s0local59.POINT_EVENT_SPIN_LUCKY_WHEEL = 17;
__s0local59.POINT_EVENT_BOUNTY_HUNTER = 18;
__s0local59.POINT_EVENT_LUCKY_WHEEL = 19;
__s0local59.POINT_EVENT_NOMAD_INVASION = 20;
__s0local59.POINT_EVENT_MARAUDERS = 21;
__s0local59.POINT_EVENT_TOOLS = 22;
__s0local59.POINT_EVENT_LOOT_RESOURCES = 23;
__s0local59.POINT_EVENT_REVIVE_UNITS = 24;
__s0local59.POINT_EVENT_FACTION_POINTS = 25;
__s0local59.POINT_EVENT_DUNGEONS_ICE = 26;
__s0local59.POINT_EVENT_DUNGEONS_SAND = 27;
__s0local59.POINT_EVENT_SAMURAI_INVASION = 28;
__s0local59.POINT_EVENT_SPENT_C2 = 29;
__s0local59.POINT_EVENT_LUCKY_WHEEL_SALE_DAYS = 30;
__s0local59.NUM_ENTRIES_IN_HIGHSCORE = 8;
__s0local59.OFFSET_IN_HIGHSCORE_LIST = 4;
exports.PointEventConst = __s0local59;
__s0local59.__class = "PointEventConst";
var __s0local60 = function () {
  return function PopoverConst() {};
}();
__s0local60.EQUIPMENT_SOLD = 1;
__s0local60.GEM_SOLD = 2;
exports.PopoverConst = __s0local60;
__s0local60.__class = "PopoverConst";
var __s0local61 = function () {
  function PopupConst() {}
  PopupConst.ALLIANCE_ALIEN_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.ALLIANCE_ALIEN_INVASION_POPUPS == null) {
      PopupConst.ALLIANCE_ALIEN_INVASION_POPUPS = [PopupConst.ALLIANCE_ALIEN_INVASION_FIRST_ALLIANCE, PopupConst.ALLIANCE_ALIEN_INVASION_TOPX_ALLIANCE, PopupConst.ALLIANCE_ALIEN_INVASION_REWARD_ALLIANCE, PopupConst.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD, PopupConst.ALLIANCE_ALIEN_INVASION_FIRST_PLAYER, PopupConst.ALLIANCE_ALIEN_INVASION_TOPX_PLAYER, PopupConst.ALLIANCE_ALIEN_INVASION_REWARD_PLAYER, PopupConst.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.ALLIANCE_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED];
    }
    return PopupConst.ALLIANCE_ALIEN_INVASION_POPUPS;
  };
  PopupConst.ALLIANCE_NOMAD_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.ALLIANCE_NOMAD_INVASION_POPUPS == null) {
      PopupConst.ALLIANCE_NOMAD_INVASION_POPUPS = [PopupConst.ALLIANCE_NOMAD_INVASION_FIRST_ALLIANCE, PopupConst.ALLIANCE_NOMAD_INVASION_TOPX_ALLIANCE, PopupConst.ALLIANCE_NOMAD_INVASION_REWARD_ALLIANCE, PopupConst.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD, PopupConst.ALLIANCE_NOMAD_INVASION_FIRST_PLAYER, PopupConst.ALLIANCE_NOMAD_INVASION_TOPX_PLAYER, PopupConst.ALLIANCE_NOMAD_INVASION_REWARD_PLAYER, PopupConst.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.ALLIANCE_NOMAD_INVASION_ALLIANCE_REWARDS_UNLOCKED, PopupConst.NOMAD_INVASION_ALLIANCE_CAMP_REWARD_POPUP];
    }
    return PopupConst.ALLIANCE_NOMAD_INVASION_POPUPS;
  };
  PopupConst.SAMURAI_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.SAMURAI_INVASION_POPUPS == null) {
      PopupConst.SAMURAI_INVASION_POPUPS = [PopupConst.SAMURAI_INVASION_FIRST_ALLIANCE, PopupConst.SAMURAI_INVASION_TOPX_ALLIANCE, PopupConst.SAMURAI_INVASION_REWARD_ALLIANCE, PopupConst.SAMURAI_INVASION_END_WITHOUT_REWARD_ALLIANCE, PopupConst.SAMURAI_INVASION_FIRST_PLAYER, PopupConst.SAMURAI_INVASION_TOPX_PLAYER, PopupConst.SAMURAI_INVASION_REWARD_PLAYER, PopupConst.SAMURAI_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.SAMURAI_INVASION_ALLIANCE_REWARDS_UNLOCKED];
    }
    return PopupConst.SAMURAI_INVASION_POPUPS;
  };
  PopupConst.ALLIANCE_TOURNAMENT_POPUPS_$LI$ = function () {
    if (PopupConst.ALLIANCE_TOURNAMENT_POPUPS == null) {
      PopupConst.ALLIANCE_TOURNAMENT_POPUPS = [PopupConst.ALLIANCE_TOURNAMENT_FIRST, PopupConst.ALLIANCE_TOURNAMENT_TOPX, PopupConst.ALLIANCE_TOURNAMENT_REWARD, PopupConst.ALLIANCE_TOURNAMENT_END_WITHOUT_REWARD];
    }
    return PopupConst.ALLIANCE_TOURNAMENT_POPUPS;
  };
  PopupConst.FACTION_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.FACTION_INVASION_POPUPS == null) {
      PopupConst.FACTION_INVASION_POPUPS = [PopupConst.FACTION_INVASION_FIRST_ALLIANCE, PopupConst.FACTION_INVASION_TOPX_ALLIANCE, PopupConst.FACTION_INVASION_REWARD_ALLIANCE, PopupConst.FACTION_INVASION_END_WITHOUT_REWARD, PopupConst.FACTION_INVASION_FIRST_PLAYER, PopupConst.FACTION_INVASION_TOPX_PLAYER, PopupConst.FACTION_INVASION_REWARD_PLAYER, PopupConst.FACTION_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.FACTION_INVASION_ALLIANCE_REWARDS_UNLOCKED];
    }
    return PopupConst.FACTION_INVASION_POPUPS;
  };
  PopupConst.ALLIANCE_RED_ALIEN_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.ALLIANCE_RED_ALIEN_INVASION_POPUPS == null) {
      PopupConst.ALLIANCE_RED_ALIEN_INVASION_POPUPS = [PopupConst.ALLIANCE_RED_ALIEN_INVASION_FIRST_ALLIANCE, PopupConst.ALLIANCE_RED_ALIEN_INVASION_TOPX_ALLIANCE, PopupConst.ALLIANCE_RED_ALIEN_INVASION_REWARD_ALLIANCE, PopupConst.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD, PopupConst.ALLIANCE_RED_ALIEN_INVASION_FIRST_PLAYER, PopupConst.ALLIANCE_RED_ALIEN_INVASION_TOPX_PLAYER, PopupConst.ALLIANCE_RED_ALIEN_INVASION_REWARD_PLAYER, PopupConst.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.ALLIANCE_RED_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED];
    }
    return PopupConst.ALLIANCE_RED_ALIEN_INVASION_POPUPS;
  };
  PopupConst.SAMURAI_ALIEN_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.SAMURAI_ALIEN_INVASION_POPUPS == null) {
      PopupConst.SAMURAI_ALIEN_INVASION_POPUPS = [PopupConst.SAMURAI_ALIEN_INVASION_FIRST_ALLIANCE, PopupConst.SAMURAI_ALIEN_INVASION_TOPX_ALLIANCE, PopupConst.SAMURAI_ALIEN_INVASION_REWARD_ALLIANCE, PopupConst.SAMURAI_ALIEN_INVASION_END_WITHOUT_REWARD_ALLIANCE, PopupConst.SAMURAI_ALIEN_INVASION_FIRST_PLAYER, PopupConst.SAMURAI_ALIEN_INVASION_TOPX_PLAYER, PopupConst.SAMURAI_ALIEN_INVASION_REWARD_PLAYER, PopupConst.SAMURAI_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.SAMURAI_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED];
    }
    return PopupConst.SAMURAI_ALIEN_INVASION_POPUPS;
  };
  PopupConst.ALLIANCE_MOBILIZATION_POPUPS_$LI$ = function () {
    if (PopupConst.ALLIANCE_MOBILIZATION_POPUPS == null) {
      PopupConst.ALLIANCE_MOBILIZATION_POPUPS = [PopupConst.ALLIANCE_MOBILIZATION_FIRST_ALLIANCE, PopupConst.ALLIANCE_MOBILIZATION_TOPX_ALLIANCE, PopupConst.ALLIANCE_MOBILIZATION_REWARD_ALLIANCE, PopupConst.ALLIANCE_MOBILIZATION_END_WITHOUT_REWARD_ALLIANCE, -1, -1, -1, -1, PopupConst.ALLIANCE_MOBILIZATION_ALLIANCE_REWARDS_UNLOCKED, -1, PopupConst.ALLIANCE_MOBILIZATION_END_GENERIC];
    }
    return PopupConst.ALLIANCE_MOBILIZATION_POPUPS;
  };
  return PopupConst;
}();
__s0local61.BOUNTYHUNTER = 1;
__s0local61.RANDOMDUNGEON = 2;
__s0local61.ARTIFACT = 3;
__s0local61.QUEST_FINISH = 4;
__s0local61.ACHIEVEMENT_FINISH = 5;
__s0local61.MAIL_VERIFIED = 6;
__s0local61.ALCHEMIST = 7;
__s0local61.MAIN_QUEST = 8;
__s0local61.FACTION_FINISHED = 9;
__s0local61.COLOSSUS_COMPLETE = 11;
__s0local61.CRUSADE_THORNKING_FAILED = 12;
__s0local61.LEVEL_UP = 14;
__s0local61.APRILDUNGEON = 15;
__s0local61.CRUSADE_SEAQUEEN_FAILED = 16;
__s0local61.PRIVATE_OFFER = 18;
__s0local61.TMAP_RELIC_REWARD = 19;
__s0local61.TMAP_RESOURCE_REWARD = 20;
__s0local61.MINE_EXHAUSTED = 21;
__s0local61.POINT_EVENT_FIRST = 22;
__s0local61.POINT_EVENT_REWARD = 23;
__s0local61.POINT_EVENT_END_WITHOUT_REWARD = 24;
__s0local61.LOGIN_LP_INCENTIVE = 25;
__s0local61.BEGGING_KNIGHTS_FIRST = 26;
__s0local61.BEGGING_KNIGHTS_TOPX = 27;
__s0local61.BEGGING_KNIGHTS_REWARD = 28;
__s0local61.BEGGING_KNIGHTS_END_WITHOUT_REWARD = 29;
__s0local61.POINT_EVENT_TOPX = 30;
__s0local61.ISLAND_END_NO_ALLI_PLAYER = 31;
__s0local61.ISLAND_END_ALLI_PLAYER_WIN = 32;
__s0local61.ISLAND_END_ALLI_PLAYER_PARTICIPANT = 33;
__s0local61.ISLAND_END = 262;
__s0local61.CRUSADE_UNDERWOLRD_FAILED = 38;
__s0local61.LUCKY_WHEEL_POINT_EVENT_FIRST = 39;
__s0local61.LUCKY_WHEEL_POINT_EVENT_TOPX = 40;
__s0local61.LUCKY_WHEEL_POINT_EVENT_REWARD = 41;
__s0local61.LUCKY_WHEEL_POINT_EVENT_END_WITHOUT_REWARD = 42;
__s0local61.NOMAD_INVASION_FIRST = 43;
__s0local61.NOMAD_INVASION_TOPX = 44;
__s0local61.NOMAD_INVASION_REWARD = 45;
__s0local61.NOMAD_INVASION_END_WITHOUT_REWARD = 46;
__s0local61.ALLIANCE_ALIEN_INVASION_FIRST_ALLIANCE = 47;
__s0local61.ALLIANCE_ALIEN_INVASION_TOPX_ALLIANCE = 48;
__s0local61.ALLIANCE_ALIEN_INVASION_REWARD_ALLIANCE = 49;
__s0local61.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD = 50;
__s0local61.ALLIANCE_ALIEN_INVASION_FIRST_PLAYER = 51;
__s0local61.ALLIANCE_ALIEN_INVASION_TOPX_PLAYER = 52;
__s0local61.ALLIANCE_ALIEN_INVASION_REWARD_PLAYER = 53;
__s0local61.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER = 65;
__s0local61.ALLIANCE_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED = 254;
__s0local61.MIGHT_REWARD = 54;
__s0local61.ALLIANCE_NOMAD_INVASION_FIRST_ALLIANCE = 55;
__s0local61.ALLIANCE_NOMAD_INVASION_TOPX_ALLIANCE = 56;
__s0local61.ALLIANCE_NOMAD_INVASION_REWARD_ALLIANCE = 57;
__s0local61.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD = 58;
__s0local61.ALLIANCE_NOMAD_INVASION_FIRST_PLAYER = 59;
__s0local61.ALLIANCE_NOMAD_INVASION_TOPX_PLAYER = 60;
__s0local61.ALLIANCE_NOMAD_INVASION_REWARD_PLAYER = 61;
__s0local61.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD_PLAYER = 66;
__s0local61.ALLIANCE_NOMAD_INVASION_ALLIANCE_REWARDS_UNLOCKED = 255;
__s0local61.NOMAD_INVASION_ALLIANCE_CAMP_REWARD_POPUP = 118;
__s0local61.NEW_DAILY_QUEST_REWARD = 62;
__s0local61.MORALE_BOOSTER_REWARD = 63;
__s0local61.FACTION_POINT_EVENT_FIRST = 67;
__s0local61.FACTION_POINT_EVENT_TOPX = 68;
__s0local61.FACTION_POINT_EVENT_REWARD = 69;
__s0local61.FACTION_POINT_EVENT_END_WITHOUT_REWARD = 70;
__s0local61.PERMANENT_SLOT_REWARD = 71;
__s0local61.SAMURAI_INVASION_FIRST_ALLIANCE = 72;
__s0local61.SAMURAI_INVASION_TOPX_ALLIANCE = 73;
__s0local61.SAMURAI_INVASION_REWARD_ALLIANCE = 74;
__s0local61.SAMURAI_INVASION_END_WITHOUT_REWARD_ALLIANCE = 75;
__s0local61.SAMURAI_INVASION_FIRST_PLAYER = 76;
__s0local61.SAMURAI_INVASION_TOPX_PLAYER = 77;
__s0local61.SAMURAI_INVASION_REWARD_PLAYER = 78;
__s0local61.SAMURAI_INVASION_END_WITHOUT_REWARD_PLAYER = 79;
__s0local61.SAMURAI_INVASION_ALLIANCE_REWARDS_UNLOCKED = 256;
__s0local61.LONGTERM_POINT_EVENT_FIRST = 82;
__s0local61.LONGTERM_POINT_EVENT_TOPX = 83;
__s0local61.LONGTERM_POINT_EVENT_REWARD = 84;
__s0local61.LONGTERM_POINT_EVENT_END_WITHOUT_REWARD = 85;
__s0local61.ALLIANCE_TOURNAMENT_FIRST = 86;
__s0local61.ALLIANCE_TOURNAMENT_TOPX = 87;
__s0local61.ALLIANCE_TOURNAMENT_REWARD = 88;
__s0local61.ALLIANCE_TOURNAMENT_END_WITHOUT_REWARD = 89;
__s0local61.RESEARCH_FINISHED = 90;
__s0local61.FACTION_INVASION_FIRST_ALLIANCE = 91;
__s0local61.FACTION_INVASION_TOPX_ALLIANCE = 92;
__s0local61.FACTION_INVASION_REWARD_ALLIANCE = 93;
__s0local61.FACTION_INVASION_END_WITHOUT_REWARD = 94;
__s0local61.FACTION_INVASION_FIRST_PLAYER = 95;
__s0local61.FACTION_INVASION_TOPX_PLAYER = 96;
__s0local61.FACTION_INVASION_REWARD_PLAYER = 97;
__s0local61.FACTION_INVASION_END_WITHOUT_REWARD_PLAYER = 98;
__s0local61.FACTION_INVASION_ALLIANCE_REWARDS_UNLOCKED = 257;
__s0local61.TERMS_AND_CONDITIONS_CHANGE = 100;
__s0local61.LONGTERM_POINT_EVENT_HARD_MODE = 101;
__s0local61.CRAFTING_MATERIALS = 108;
__s0local61.ALLIANCE_RED_ALIEN_INVASION_FIRST_ALLIANCE = 109;
__s0local61.ALLIANCE_RED_ALIEN_INVASION_TOPX_ALLIANCE = 110;
__s0local61.ALLIANCE_RED_ALIEN_INVASION_REWARD_ALLIANCE = 111;
__s0local61.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD = 112;
__s0local61.ALLIANCE_RED_ALIEN_INVASION_FIRST_PLAYER = 113;
__s0local61.ALLIANCE_RED_ALIEN_INVASION_TOPX_PLAYER = 114;
__s0local61.ALLIANCE_RED_ALIEN_INVASION_REWARD_PLAYER = 115;
__s0local61.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER = 116;
__s0local61.ALLIANCE_RED_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED = 258;
__s0local61.RETURN_INVENTORY_TO_THE_OLD_OWNER = 117;
__s0local61.POPUP_FIRST_ALLIANCE = 0;
__s0local61.POPUP_TOPX_ALLIANCE = 1;
__s0local61.POPUP_REWARD_ALLIANCE = 2;
__s0local61.POPUP_END_WITHOUT_REWARD = 3;
__s0local61.POPUP_FIRST_PLAYER = 4;
__s0local61.POPUP_TOPX_PLAYER = 5;
__s0local61.POPUP_REWARD_PLAYER = 6;
__s0local61.POPUP_END_WITHOUT_REWARD_PLAYER = 7;
__s0local61.POPUP_ALLIANCE_REWARDS_UNLOCKED = 8;
__s0local61.ALLIANCE_CAMP_REWARD_POPUP_INDEX = 9;
__s0local61.POPUP_GENERIC_INDEX = 10;
__s0local61.TIME_LIMITED_CAMPAIGN_REWARD_POPUP = 119;
__s0local61.EXPIRED_EQUIPMENTS = 120;
__s0local61.NEWSLETTER_CONFIRMED = 221;
__s0local61.NEWSLETTER_CONFIRMED_AGAIN = 222;
__s0local61.EMAIL_SEND_SUCCESS = 223;
__s0local61.EMAIL_SEND_FAIL = 224;
__s0local61.SAMURAI_ALIEN_INVASION_FIRST_ALLIANCE = 225;
__s0local61.SAMURAI_ALIEN_INVASION_TOPX_ALLIANCE = 226;
__s0local61.SAMURAI_ALIEN_INVASION_REWARD_ALLIANCE = 227;
__s0local61.SAMURAI_ALIEN_INVASION_END_WITHOUT_REWARD_ALLIANCE = 228;
__s0local61.SAMURAI_ALIEN_INVASION_FIRST_PLAYER = 229;
__s0local61.SAMURAI_ALIEN_INVASION_TOPX_PLAYER = 230;
__s0local61.SAMURAI_ALIEN_INVASION_REWARD_PLAYER = 231;
__s0local61.SAMURAI_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER = 232;
__s0local61.SAMURAI_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED = 259;
__s0local61.SEASON_DAILY_MEDAL_PAYOUT = 233;
__s0local61.SEASON_PROMOTION = 234;
__s0local61.SEASON_EVENT_END = 235;
__s0local61.SEASON_END = 236;
__s0local61.SEASON_PASS_ACTIVATION = 261;
__s0local61.COLLECTOR_REWARD_PLAYER = 237;
__s0local61.TEMP_SERVER_ENTER = 238;
__s0local61.SUBSCRPTION_LOYALTY_PAYOUT = 239;
__s0local61.DAIMYO_ALLIANCE_CONTRACT_COMPLETED = 240;
__s0local61.DAIMYO_REWARD = 241;
__s0local61.ALLIANCE_BATTLE_GROUND_ENTER = 242;
__s0local61.ALLIANCE_BATTLE_GROUND_EVENT_END_REWARD = 243;
__s0local61.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_FIRST = 244;
__s0local61.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_TOPX = 245;
__s0local61.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_REWARD = 246;
__s0local61.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_END_WITHOUT_REWARD = 247;
__s0local61.ALLIANCE_BATTLE_GROUND_TOWER_PLAYER_REVIVE = 250;
__s0local61.ALLIANCE_BATTLE_GROUND_TOWER_PLAYER_RE_LINK = 251;
__s0local61.STATELESS_OFFER_REWARD_PAYOUT = 252;
__s0local61.BUILDINGS_TRANSFERRED_TO_AREA_INVENTORY = 253;
__s0local61.TEMP_SERVER_EVENT_END_REWARD = 260;
__s0local61.RECE_WELCOME_MESSAGE = 271;
__s0local61.VERIFICATION_SENT_TO_OLD_MAIL = 272;
__s0local61.MAIL_CHANGE_SUCCESS = 273;
__s0local61.PLAYER_NAME_EMAIL_ALIAS_POPUP = 274;
__s0local61.MAIL_CANCEL_SUCCESS = 275;
__s0local61.MAIL_CHANGE_REQUEST_WITHOUT_VERIFICATION = 276;
__s0local61.TEASER = 277;
__s0local61.DONATION_EVENT_END_REWARD = 278;
__s0local61.US_ZIP_CODE = 279;
__s0local61.GACHA_EVENT_REWARD = 280;
__s0local61.GACHA_EVENT_END_WITHOUT_REWARD = 281;
__s0local61.GACHA_EVENT_END_REWARD = 282;
__s0local61.GENERIC_REWARDS_GAINED = 283;
__s0local61.ALLIANCE_MOBILIZATION_REWARD_ALLIANCE = 284;
__s0local61.ALLIANCE_MOBILIZATION_FIRST_ALLIANCE = 285;
__s0local61.ALLIANCE_MOBILIZATION_TOPX_ALLIANCE = 286;
__s0local61.ALLIANCE_MOBILIZATION_END_WITHOUT_REWARD_ALLIANCE = 287;
__s0local61.ALLIANCE_MOBILIZATION_ALLIANCE_REWARDS_UNLOCKED = 288;
__s0local61.ALLIANCE_MOBILIZATION_END_GENERIC = 289;
__s0local61.ALLIANCE_RAID_END_GENERIC = 290;
__s0local61.ALLIANCE_RAID_THRESHOLD_REWARD = 291;
__s0local61.ALLIANCE_RAID_BOSS_LEVEL_DEFEAT = 292;
exports.PopupConst = __s0local61;
__s0local61.__class = "PopupConst";
var __s0local62 = function () {
  function PremiumConst() {}
  PremiumConst.FACTOR_C1_$LI$ = function () {
    if (PremiumConst.FACTOR_C1 == null) {
      PremiumConst.FACTOR_C1 = [0.9, 0.85, 0.8];
    }
    return PremiumConst.FACTOR_C1;
  };
  PremiumConst.FACTOR_C2_$LI$ = function () {
    if (PremiumConst.FACTOR_C2 == null) {
      PremiumConst.FACTOR_C2 = [0.95, 0.9, 0.9];
    }
    return PremiumConst.FACTOR_C2;
  };
  PremiumConst.FACTOR_BRIBE_TAX_C2_$LI$ = function () {
    if (PremiumConst.FACTOR_BRIBE_TAX_C2 == null) {
      PremiumConst.FACTOR_BRIBE_TAX_C2 = [0.2, 0.3, 0.5];
    }
    return PremiumConst.FACTOR_BRIBE_TAX_C2;
  };
  PremiumConst.FACTOR_DONATE_ALLI_$LI$ = function () {
    if (PremiumConst.FACTOR_DONATE_ALLI == null) {
      PremiumConst.FACTOR_DONATE_ALLI = [1.1, 1.15, 1.2];
    }
    return PremiumConst.FACTOR_DONATE_ALLI;
  };
  return PremiumConst;
}();
__s0local62.EVENT_SPECIALOFFER = 0;
__s0local62.EVENT_SPECIALINGAMEOFFER = 1;
__s0local62.EVENT_REGISTERBONUS = 2;
__s0local62.PREMIUM_ACCOUNT_GOLD = 2;
__s0local62.PREMIUM_ACCOUNT_SILVER = 1;
__s0local62.PREMIUM_ACCOUNT_BRONZE = 0;
__s0local62.PREMIUM_ACCOUNT_TYPE_0 = 50;
__s0local62.PREMIUM_ACCOUNT_TYPE_1 = 51;
__s0local62.PREMIUM_ACCOUNT_TYPE_2 = 52;
__s0local62.VIP_FLAG_OPTION_DEFAULT = true;
exports.PremiumConst = __s0local62;
__s0local62.__class = "PremiumConst";
var __s0local63 = function () {
  return function PrivateOfferHelpTextMessageConst() {};
}();
__s0local63.DEFAULT_MESSAGE = 0;
__s0local63.ATTACK_SUCCEEDED = 1;
__s0local63.DEFENSE_SUCCEEDED = 2;
__s0local63.SPY_SUCCEEDED = 3;
__s0local63.GOT_SUCCESSFULLY_SABOTAGED = 4;
__s0local63.DAILY_MAIL_1 = 5;
__s0local63.DAILY_MAIL_2 = 6;
__s0local63.DAILY_MAIL_3 = 7;
__s0local63.DAILY_MAIL_4 = 8;
__s0local63.DAILY_MAIL_5 = 9;
__s0local63.DAILY_MAIL_6 = 10;
__s0local63.DAILY_MAIL_7 = 11;
__s0local63.DAILY_MAIL_8 = 12;
exports.PrivateOfferHelpTextMessageConst = __s0local63;
__s0local63.__class = "PrivateOfferHelpTextMessageConst";
var __s0local64 = function () {
  function PrivatePrimeTimeConst() {}
  PrivatePrimeTimeConst.DEFAULT_SKIN_ID_$LI$ = function () {
    if (PrivatePrimeTimeConst.DEFAULT_SKIN_ID == null) {
      PrivatePrimeTimeConst.DEFAULT_SKIN_ID = PrivatePrimeTimeConst.START_SKIN_ID;
    }
    return PrivatePrimeTimeConst.DEFAULT_SKIN_ID;
  };
  PrivatePrimeTimeConst.GOLD_SKIN_ID_$LI$ = function () {
    if (PrivatePrimeTimeConst.GOLD_SKIN_ID == null) {
      PrivatePrimeTimeConst.GOLD_SKIN_ID = PrivatePrimeTimeConst.START_SKIN_ID;
    }
    return PrivatePrimeTimeConst.GOLD_SKIN_ID;
  };
  PrivatePrimeTimeConst.BRICK_SKIN_ID_$LI$ = function () {
    if (PrivatePrimeTimeConst.BRICK_SKIN_ID == null) {
      PrivatePrimeTimeConst.BRICK_SKIN_ID = PrivatePrimeTimeConst.START_SKIN_ID + 1;
    }
    return PrivatePrimeTimeConst.BRICK_SKIN_ID;
  };
  PrivatePrimeTimeConst.SKIN_LIST_$LI$ = function () {
    if (PrivatePrimeTimeConst.SKIN_LIST == null) {
      PrivatePrimeTimeConst.SKIN_LIST = [PrivatePrimeTimeConst.GOLD_SKIN_ID_$LI$(), PrivatePrimeTimeConst.BRICK_SKIN_ID_$LI$()];
    }
    return PrivatePrimeTimeConst.SKIN_LIST;
  };
  return PrivatePrimeTimeConst;
}();
__s0local64.USE_NOVELITY_ALGORITHM_SKIN_ID = 1;
__s0local64.START_SKIN_ID = 10;
exports.PrivatePrimeTimeConst = __s0local64;
__s0local64.__class = "PrivatePrimeTimeConst";
var __s0local65 = function () {
  return function ProductionPackageConst() {};
}();
__s0local65.MIN_RECRUITMENT_TIME_PER_UNIT = 15;
__s0local65.MIN_RECRUITMENT_TIME_PER_UNIT_IN_FACTION_KINGDOM = 10;
__s0local65.PRODUCTION_SLOT_SIZE = 5;
__s0local65.MAX_AMOUNT_OF_BOOST_APPLICATIONS_PER_PACKAGE = 3;
exports.ProductionPackageConst = __s0local65;
__s0local65.__class = "ProductionPackageConst";
var __s0local66 = function () {
  function PushConstants() {}
  PushConstants.PUSHCATEGORY_CONSTRUCTION_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_CONSTRUCTION == null) {
      PushConstants.PUSHCATEGORY_CONSTRUCTION = 2;
    }
    return PushConstants.PUSHCATEGORY_CONSTRUCTION;
  };
  PushConstants.PUSHCATEGORY_MISC_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_MISC == null) {
      PushConstants.PUSHCATEGORY_MISC = 4;
    }
    return PushConstants.PUSHCATEGORY_MISC;
  };
  PushConstants.PUSHCATEGORY_RESSOURCE_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_RESSOURCE == null) {
      PushConstants.PUSHCATEGORY_RESSOURCE = 8;
    }
    return PushConstants.PUSHCATEGORY_RESSOURCE;
  };
  PushConstants.PUSHCATEGORY_TAX_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_TAX == null) {
      PushConstants.PUSHCATEGORY_TAX = 16;
    }
    return PushConstants.PUSHCATEGORY_TAX;
  };
  PushConstants.PUSHCATEGORY_INGAME_EVENTS_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_INGAME_EVENTS == null) {
      PushConstants.PUSHCATEGORY_INGAME_EVENTS = 32;
    }
    return PushConstants.PUSHCATEGORY_INGAME_EVENTS;
  };
  PushConstants.PUSHCATEGORY_ALLIANCE_ATTACK_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_ALLIANCE_ATTACK == null) {
      PushConstants.PUSHCATEGORY_ALLIANCE_ATTACK = 64;
    }
    return PushConstants.PUSHCATEGORY_ALLIANCE_ATTACK;
  };
  PushConstants.PUSHCATEGORY_FORWARDED_MESSAGES_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_FORWARDED_MESSAGES == null) {
      PushConstants.PUSHCATEGORY_FORWARDED_MESSAGES = 128;
    }
    return PushConstants.PUSHCATEGORY_FORWARDED_MESSAGES;
  };
  return PushConstants;
}();
__s0local66.SOUND_DEFAULT = "default";
__s0local66.SOUND_NO_SOUND = "";
__s0local66.PUSHTYPE_ID_INCOMING_ATTACK = 1000;
__s0local66.PUSHTYPE_ID_ESPIONAGE_DONE = 1001;
__s0local66.PUSHTYPE_ID_ATTACK_DONE = 1002;
__s0local66.PUSHTYPE_ID_MARKET_MOVEMENT_DONE = 1003;
__s0local66.PUSHTYPE_ID_LOST_OUTPOST = 1004;
__s0local66.PUSHTYPE_ID_LOST_VILLAGE = 1005;
__s0local66.PUSHTYPE_ID_MESSAGE_RECEIVED = 1007;
__s0local66.PUSHTYPE_ID_ALLIANCE_INCOMING_ATTACK = 1008;
__s0local66.PUSHTYPE_ID_BACK_ONLINE = 1009;
__s0local66.PUSHTYPE_ID_UPDATE_AVAILABLE = 1010;
__s0local66.PUSHTYPE_ID_PRIVATE_PRIMETIME = 1039;
__s0local66.PUSHTYPE_ID_GLOBAL_PRIMETIME = 1040;
__s0local66.PUSHTYPE_ID_UPGRADE = 2000;
__s0local66.PUSHTYPE_ID_DESTRUCTION = 2001;
__s0local66.PUSHTYPE_ID_BUILDUP = 2002;
__s0local66.PUSHTYPE_ID_TAXCOLLECT = 2004;
__s0local66.PUSHTYPE_ID_DESERTINGUNITS = 2005;
__s0local66.PUSHTYPE_ID_UNITSREADY = 2006;
__s0local66.PUSHTYPE_ID_TOOLSBUILT = 2007;
__s0local66.PUSHTYPE_ID_RESEARCHCOMPLETED = 2008;
__s0local66.PUSHTYPE_ID_STORAGEFULL = 2009;
__s0local66.PUSHTYPE_ID_RETENTION_1 = 2010;
__s0local66.PUSHTYPE_ID_RETENTION_2 = 2011;
__s0local66.PUSHTYPE_ID_RETENTION_3 = 2012;
__s0local66.PUSHTYPE_ID_RETENTION_4 = 2013;
__s0local66.PUSHTYPE_ID_RETENTION_5 = 2014;
__s0local66.PUSHTYPE_ID_RETENTION_6 = 2015;
__s0local66.PUSHTYPE_ID_RETENTION_7 = 2016;
__s0local66.PUSHTYPE_ID_RETENTION_8 = 2017;
__s0local66.PUSHTYPE_ID_RETENTION_9 = 2018;
__s0local66.PUSHTYPE_ID_RETENTION_10 = 2019;
__s0local66.PUSHTYPE_ID_RETENTION_11 = 2020;
__s0local66.PUSHTYPE_ID_INACTIVITY_WARNING = 2021;
__s0local66.PUSHTYPE_ID_FINISHED_REPAIR = 2022;
__s0local66.PUSHTYPE_ID_MERCENARY_MISSION_COMPLETE = 2023;
__s0local66.PUSHTYPE_ID_MERCENARY_MISSION_AVAILABLE = 2024;
__s0local66.PUSHTYPE_ID_ACTIVITY_CHEST_1 = 2051;
__s0local66.PUSHTYPE_ID_ACTIVITY_CHEST_2 = 2052;
__s0local66.PUSHTYPE_ID_ACTIVITY_CHEST_3 = 2053;
__s0local66.PUSHTYPE_ID_ACTIVITY_CHEST_4 = 2054;
__s0local66.PUSHTYPE_ID_ACTIVITY_CHEST_5 = 2055;
__s0local66.PUSHTYPE_ID_ACTIVITY_CHEST_6 = 2056;
__s0local66.PUSHTYPE_ID_LOGIN_BONUS_1 = 2061;
__s0local66.PUSHTYPE_ID_LOGIN_BONUS_2 = 2062;
__s0local66.PUSHTYPE_ID_LOGIN_BONUS_3 = 2063;
__s0local66.PUSHTYPE_ID_LOGIN_BONUS_4 = 2064;
__s0local66.PUSHTYPE_ID_LOGIN_BONUS_5 = 2065;
__s0local66.PUSHTYPE_ID_LOGIN_BONUS_6 = 2066;
__s0local66.PUSHTYPE_ID_LOGIN_BONUS_7 = 2067;
__s0local66.PUSHTYPE_ID_INACTIVITY = 2071;
__s0local66.PUSHTYPE_ID_RESEARCH_COMPLETE = 2072;
__s0local66.PUSHCATEGORY_NO_CATEGORY = 0;
__s0local66.PUSHCATEGORY_MILITARY = 1;
exports.PushConstants = __s0local66;
__s0local66.__class = "PushConstants";
var __s0local67 = function () {
  function RecruitmentConst() {}
  RecruitmentConst.getSkipCostC2 = function (__s1555param0, __s1555param1, __s1555param2) {
    return __s1555param1 * (__s1555param0 / __s1555param2) | 0;
  };
  return RecruitmentConst;
}();
__s0local67.FINISH_FIRST_STACK_MODE_ID = 0;
__s0local67.FINISH_STACKS_EQUALLY_MODE_ID = 1;
__s0local67.SLOT_IS_PERMANENTLY_UNLOCKED = -1;
__s0local67.SLOT_IS_LOCKED = 0;
__s0local67.PRODUCTION_SLOT_TYPE_NAME = "production";
__s0local67.QUEUE_SLOT_TYPE_NAME = "queue";
__s0local67.INVALID_SLOT_ID = -1;
__s0local67.NO_SOURCE_ID = -1;
__s0local67.CONTAINS_SOLDIERS = true;
__s0local67.CONTAINS_TOOLS = false;
__s0local67.MAXIMUM_PREMIUM_TOOL_STACK_SIZE = 500;
__s0local67.CHEATED_DURATION_PER_PACKAGE = 5;
__s0local67.END_TIMESTAMP_IN_THE_PAST = -1;
__s0local67.START_TIMESTAMP_IN_THE_PAST = -1;
__s0local67.MINIMUM_STACK_SIZE_FOR_ALLIANCE_HELP = 5;
exports.RecruitmentConst = __s0local67;
__s0local67.__class = "RecruitmentConst";
var __s0local68 = function () {
  function RelicItemConst() {}
  RelicItemConst.calculateRelicItemMightValue = function (__s1561param0) {
    return 1000 + __s1561param0 * 10;
  };
  RelicItemConst.calculateFragmentSellValue = function (__s1563param0) {
    return __s1563param0 / 10 | 0;
  };
  RelicItemConst.calculateFragmentSellMinValue = function () {
    return 100;
  };
  RelicItemConst.calculateFragmentSellMaxValue = function (__s1567param0) {
    return (1 + __s1567param0) * 100;
  };
  RelicItemConst.isTombolaID = function (__s1569param0) {
    return __s1569param0 < 0;
  };
  return RelicItemConst;
}();
__s0local68.INSERT_RELIC_GEM_C1_COST = 95000;
__s0local68.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST = 2000;
exports.RelicItemConst = __s0local68;
__s0local68.__class = "RelicItemConst";
var __s0local69 = function () {
  function RelocationConst() {}
  RelocationConst.RELOCATION_DURATION_$LI$ = function () {
    if (RelocationConst.RELOCATION_DURATION == null) {
      RelocationConst.RELOCATION_DURATION = [600, 21600];
    }
    return RelocationConst.RELOCATION_DURATION;
  };
  RelocationConst.RELOCATION_COST_C2_$LI$ = function () {
    if (RelocationConst.RELOCATION_COST_C2 == null) {
      RelocationConst.RELOCATION_COST_C2 = [0, 5000, 20000, 35000];
    }
    return RelocationConst.RELOCATION_COST_C2;
  };
  RelocationConst.RELOCATION_COOLDOWN_$LI$ = function () {
    if (RelocationConst.RELOCATION_COOLDOWN == null) {
      RelocationConst.RELOCATION_COOLDOWN = 1209600;
    }
    return RelocationConst.RELOCATION_COOLDOWN;
  };
  RelocationConst.getRelocationCost = function (__s1584param0) {
    var __s1584local0 = __s1584param0;
    if (RelocationConst.RELOCATION_COST_C2_$LI$().length <= __s1584param0) {
      __s1584local0 = RelocationConst.RELOCATION_COST_C2_$LI$().length - 1;
    }
    return RelocationConst.RELOCATION_COST_C2_$LI$()[__s1584local0];
  };
  RelocationConst.getRelocationTime = function (__s1587param0) {
    var __s1587local0 = __s1587param0 - 1;
    if (RelocationConst.RELOCATION_DURATION_$LI$().length <= __s1587param0) {
      __s1587local0 = RelocationConst.RELOCATION_DURATION_$LI$().length - 1;
    }
    return RelocationConst.RELOCATION_DURATION_$LI$()[__s1587local0];
  };
  RelocationConst.getRelocationTimeForTesting = function (__s1590param0) {
    var __s1590local0 = __s1590param0 - 1;
    if (RelocationConst.TEST_RELOCATION_DURATION_$LI$().length <= __s1590param0) {
      __s1590local0 = RelocationConst.TEST_RELOCATION_DURATION_$LI$().length - 1;
    }
    return RelocationConst.TEST_RELOCATION_DURATION_$LI$()[__s1590local0];
  };
  RelocationConst.TEST_RELOCATION_DURATION_$LI$ = function () {
    if (RelocationConst.TEST_RELOCATION_DURATION == null) {
      RelocationConst.TEST_RELOCATION_DURATION = [180, 300];
    }
    return RelocationConst.TEST_RELOCATION_DURATION;
  };
  RelocationConst.TEST_RELOCATION_COOLDOWN_$LI$ = function () {
    if (RelocationConst.TEST_RELOCATION_COOLDOWN == null) {
      RelocationConst.TEST_RELOCATION_COOLDOWN = 180;
    }
    return RelocationConst.TEST_RELOCATION_COOLDOWN;
  };
  return RelocationConst;
}();
__s0local69.MIN_RELOCATION_LEVEL = 6;
exports.RelocationConst = __s0local69;
__s0local69.__class = "RelocationConst";
var __s0local70 = function () {
  function ResearchConst() {}
  ResearchConst.getFastCompleteCostC2 = function (__s1603param0, __s1603param1) {
    return Math.ceil(__s1603param0 * 1 / 60 * __s0local17.getInstantCostC2PerMinuteFor(__s1603param1)) | 0;
  };
  ResearchConst.RESOURCE_TYPES_TO_MODIFY_$LI$ = function () {
    if (ResearchConst.RESOURCE_TYPES_TO_MODIFY == null) {
      ResearchConst.RESOURCE_TYPES_TO_MODIFY = [__s0local14.FOOD, __s0local14.WOOD, __s0local14.STONE, __s0local14.COAL, __s0local14.OIL, __s0local14.GLASS, __s0local14.IRON, __s0local14.AQUAMARINE, __s0local14.MEAD, __s0local14.HONEY, __s0local14.BEEF];
    }
    return ResearchConst.RESOURCE_TYPES_TO_MODIFY;
  };
  return ResearchConst;
}();
exports.ResearchConst = __s0local70;
__s0local70.__class = "ResearchConst";
var __s0local71 = function () {
  function ResourceCartConst() {}
  ResourceCartConst.CHARGETIME_$LI$ = function () {
    if (ResourceCartConst.CHARGETIME == null) {
      ResourceCartConst.CHARGETIME = [900, 21600, 10800];
    }
    return ResourceCartConst.CHARGETIME;
  };
  return ResourceCartConst;
}();
__s0local71.MIN_LEVEL = 5;
exports.ResourceCartConst = __s0local71;
__s0local71.__class = "ResourceCartConst";
var __s0local72 = function () {
  function ResourceConst() {}
  ResourceConst.RESOURCE_FACTORS_$LI$ = function () {
    if (ResourceConst.RESOURCE_FACTORS == null) {
      ResourceConst.RESOURCE_FACTORS = [ResourceConst.WOOD_FACTOR, ResourceConst.STONE_FACTOR, ResourceConst.FOOD_FACTOR, ResourceConst.COAL_FACTOR, ResourceConst.OIL_FACTOR, ResourceConst.GLASS_FACTOR, ResourceConst.AQUAMARINE_FACTOR, ResourceConst.IRON_FACTOR, ResourceConst.HONEY_FACTOR, ResourceConst.MEAD_FACTOR, ResourceConst.BEEF_FACTOR];
    }
    return ResourceConst.RESOURCE_FACTORS;
  };
  ResourceConst.getC2PriceForResources = function (__s1622param0) {
    var __s1622local0 = 0;
    for (var __s1622local1 = 0; __s1622local1 < __s1622param0.length; __s1622local1++) {
      __s1622local0 += ResourceConst.RESOURCE_FACTORS_$LI$()[__s1622local1] * __s1622param0[__s1622local1];
    }
    return (Math.ceil(__s1622local0 * ResourceConst.ONE_CLICK_FACTOR / 100) | 0) * 100;
  };
  ResourceConst.getCombinedProductionModifier = function (__s1626param0, __s1626param1, __s1626param2) {
    return __s1626param2 * __s1626param1 * __s1626param0;
  };
  return ResourceConst;
}();
__s0local72.PRODUCTION_INTERVAL = 3600;
__s0local72.NO_RIOT = 0;
__s0local72.RIOT_INCREASE = 5;
__s0local72.PRICE_FOR_PACKAGE = 1;
__s0local72.PRICE_FOR_BUILDING = 2;
__s0local72.WOOD_FACTOR = 0.25;
__s0local72.STONE_FACTOR = 0.22;
__s0local72.FOOD_FACTOR = 0.19;
__s0local72.COAL_FACTOR = 0.41;
__s0local72.OIL_FACTOR = 0.57;
__s0local72.GLASS_FACTOR = 0.79;
__s0local72.IRON_FACTOR = 1.5;
__s0local72.AQUAMARINE_FACTOR = 1000;
__s0local72.MEAD_FACTOR = 0.25;
__s0local72.HONEY_FACTOR = 0.19;
__s0local72.BEEF_FACTOR = 0.25;
__s0local72.ONE_CLICK_FACTOR = 1.12;
__s0local72.MEAD_HOHEY_UNLOCK_PLAYER_LEGEND_LEVEL = 650;
__s0local72.BEEF_UNLOCK_PLAYER_LEGEND_LEVEL = 650;
__s0local72.MIN_LEVEL_FOR_RESOURCE_TRADER_BUTTON_FOR_PACKAGES = 70;
exports.ResourceConst = __s0local72;
__s0local72.__class = "ResourceConst";
var __s0local73 = function () {
  return function RewardConst() {};
}();
__s0local73.PLAYER = 0;
__s0local73.ALLIANCE = 1;
__s0local73.ALLIANCE_MEMBER = 2;
__s0local73.DECO_GRANT_TYPE_NORMAL = 0;
__s0local73.DECO_GRANT_TYPE_GLOBAL = 1;
__s0local73.DECO_GRANT_TYPE_AREA_SPECIFIC = 2;
__s0local73.OFFER_ID_FOR_C2_INVITER_REWARD = 2209;
exports.RewardConst = __s0local73;
__s0local73.__class = "RewardConst";
var __s0local74 = function () {
  function SceatSkillConst() {}
  SceatSkillConst.getFastCompleteCostC2 = function (__s1636param0, __s1636param1) {
    return Math.ceil(__s1636param0 * 1 / 60 * __s0local17.getInstantCostC2PerMinuteFor(__s1636param1)) | 0;
  };
  return SceatSkillConst;
}();
exports.SceatSkillConst = __s0local74;
__s0local74.__class = "SceatSkillConst";
var __s0local75 = function () {
  function SeasonConst() {}
  SeasonConst.calculateMaxPromotion = function (__s1642param0) {
    return Math.max(1, Math.min(Math.floor(__s1642param0 * SeasonConst.MAX_POINTS_PER_DAY / SeasonConst.POINTS_PER_PROMOTION) + 1, 21)) | 0;
  };
  SeasonConst.calculateSeasonPassPrice = function (__s1644param0, __s1644param1, __s1644param2, __s1644param3) {
    return Math.max(0, (__s1644param0 - 1) * __s1644param1 + __s1644param2 * __s1644param3 - 2);
  };
  SeasonConst.calculateSeasonPassC2Cost = function (__s1646param0, __s1646param1, __s1646param2, __s1646param3, __s1646param4) {
    return Math.max(__s1646param0 - (__s1646param1 * __s1646param2 + __s1646param3 * __s1646param4), 0);
  };
  return SeasonConst;
}();
__s0local75.GOLD_MEDAL_ID = 1;
__s0local75.SILVER_MEDAL_ID = 2;
__s0local75.BRONZE_MEDAL_ID = 3;
__s0local75.PASS_TYPE_SEASON = 1;
__s0local75.PASS_TYPE_EVENT_END = 2;
__s0local75.PASS_TYPE_PROMOTION = 3;
__s0local75.MAX_POINTS_PER_DAY = 1000;
__s0local75.POINTS_PER_PROMOTION = 2000;
exports.SeasonConst = __s0local75;
__s0local75.__class = "SeasonConst";
var __s0local76 = function () {
  return function ShadowUnitConst() {};
}();
__s0local76.DEFAULT_AREA_ID = -333;
__s0local76.DEFAULT_OWNER_ID = -333;
__s0local76.SHADOW_LORDS_ID = -333;
__s0local76.DEFAULT_NAME = "-333";
exports.ShadowUnitConst = __s0local76;
__s0local76.__class = "ShadowUnitConst";
var __s0local77 = function () {
  return function SharedCastleDefense(__s1654param0) {
    this.leftSide = new Array(__s1654param0);
    this.middleSide = new Array(__s1654param0);
    this.rightSide = new Array(__s1654param0);
  };
}();
exports.SharedCastleDefense = __s0local77;
__s0local77.__class = "SharedCastleDefense";
var __s0local78 = function () {
  return function ShoppingCartConst() {};
}();
__s0local78.DEFAULT_SKIN = 0;
__s0local78.OPTIONS_PER_GROUP = 6;
__s0local78.TOTAL_OPTIONS_AMOUNT = 18;
__s0local78.SHOPPING_CART_SIZE = 9;
__s0local78.SHOPPING_CART_GROUP_SIZE = 3;
__s0local78.SHOPPING_CART_CATEGORY_SIZE = 3;
__s0local78.DEFAULT_AMOUNT_BUYABLE = 3;
__s0local78.LIFE_TIME_GROUP_AMOUNT = 4;
__s0local78.TOTAL_OPTIONS_PER_TYPE = 12;
exports.ShoppingCartConst = __s0local78;
__s0local78.__class = "ShoppingCartConst";
var __s0local79 = function () {
  return function SplitRunConst() {};
}();
__s0local79.SKIP_GROUP_PARAM = "inSkipGroup";
__s0local79.BUY_LEVEL_TEST_NAME = "buyLevel";
__s0local79.BUY_LEVEL_TEST_PARAM = "inBuyLevelGroup";
__s0local79.MIN_LEVEL_TO_BUY_LEVEL = 10;
__s0local79.MAX_LEVEL_TO_BUY_LEVEL = 69;
exports.SplitRunConst = __s0local79;
__s0local79.__class = "SplitRunConst";
var __s0local80 = function () {
  function SpyConst() {}
  SpyConst.SPY_VALIDITY_$LI$ = function () {
    if (SpyConst.SPY_VALIDITY == null) {
      SpyConst.SPY_VALIDITY = 172800;
    }
    return SpyConst.SPY_VALIDITY;
  };
  SpyConst.MAX_SABOTAGE_COOLDOWN_$LI$ = function () {
    if (SpyConst.MAX_SABOTAGE_COOLDOWN == null) {
      SpyConst.MAX_SABOTAGE_COOLDOWN = 43200;
    }
    return SpyConst.MAX_SABOTAGE_COOLDOWN;
  };
  SpyConst.SABOTAGE_PROTECTION_WINDOW_$LI$ = function () {
    if (SpyConst.SABOTAGE_PROTECTION_WINDOW == null) {
      SpyConst.SABOTAGE_PROTECTION_WINDOW = 345600;
    }
    return SpyConst.SABOTAGE_PROTECTION_WINDOW;
  };
  SpyConst.getRatioGuardSpy = function () {
    return SpyConst.MAX_GUARD / SpyConst.MAX_SPY;
  };
  SpyConst.getRatioAccuracy = function () {
    return 50 - (SpyConst.MAX_ACCURACY + SpyConst.MIN_ACCURACY) / 2;
  };
  SpyConst.getRatioDamage = function () {
    return 50 - (SpyConst.MAX_DAMAGE + SpyConst.MIN_DAMAGE) / 2;
  };
  SpyConst.getSpyRisk = function (__s1683param0, __s1683param1, __s1683param2, __s1683param3, __s1683param4) {
    var __s1683local0 = SpyConst.MIN_RISK_SPY_PLAYER;
    if (!!__s1683param3 || !__s1683param4) {
      __s1683local0 = SpyConst.MIN_RISK_SPY_DUNGEON;
    }
    var __s1683local1 = Math.max(Math.min(-(SpyConst.getRatioGuardSpy() * __s1683param0 - __s1683param1) + SpyConst.getRatioAccuracy() + __s1683param2, SpyConst.MAX_RISK_SPY), __s1683local0);
    var __s1683local2 = Math.max(Math.min(Math.floor(__s1683param1 * 1 / __s1683param0 / SpyConst.getRatioGuardSpy() * (SpyConst.getRatioAccuracy() + __s1683param2)), SpyConst.MAX_RISK_SPY), __s1683local0);
    return Math.round((__s1683local1 + __s1683local2) / 2);
  };
  SpyConst.getSabotageRisk = function (__s1686param0, __s1686param1, __s1686param2) {
    var __s1686local0 = Math.max(Math.min(-(SpyConst.getRatioGuardSpy() * __s1686param0 - __s1686param1) + SpyConst.getRatioDamage() + __s1686param2, SpyConst.MAX_RISK_SABOTAGE), SpyConst.MIN_RISK_SABOTAGE);
    var __s1686local1 = Math.max(Math.min(Math.floor(__s1686param1 * 1 / __s1686param0 / SpyConst.getRatioGuardSpy() * (SpyConst.getRatioDamage() + __s1686param2)), SpyConst.MAX_RISK_SABOTAGE), SpyConst.MIN_RISK_SABOTAGE);
    return Math.round((__s1686local0 + __s1686local1) / 2);
  };
  SpyConst.getTravelCostC1 = function (__s1688param0, __s1688param1, __s1688param2) {
    return (__s1688param0 * 20 * Math.log(__s1688param1 + 1) / Math.log(2.3) + __s1688param2 - 20) * 0.6 | 0;
  };
  SpyConst.getHorseCostC1 = function (__s1690param0, __s1690param1, __s1690param2, __s1690param3) {
    return __s1690param2 * (Math.ceil((__s1690param1 * Math.log(__s1690param0 + 1) / Math.log(2.3) * 20 + __s1690param3 - 20) * 0.2) | 0);
  };
  SpyConst.getHorseCostC2 = function (__s1692param0, __s1692param1, __s1692param2) {
    var __s1692local0 = (Math.sqrt(__s1692param0 + 60) * -25 * Math.pow(1.5, Math.pow(__s1692param0 + 60, 2) * -0.0002) + 145) * 1.5 * (1 + __s1692param1 / 28) | 0;
    return Math.round(__s1692local0 * __s1692param2);
  };
  return SpyConst;
}();
__s0local80.SPY_QUEST_ID = 2147;
__s0local80.TRAVELSPEED_SABOTAGE = 50;
__s0local80.TRAVELSPEED_SPY = 450;
__s0local80.MAX_GUARD = 180;
__s0local80.MAX_SPY = 15;
__s0local80.MAX_DEPLOYABLE_PLAGUEMONKS = 20;
__s0local80.MAX_OWNABLE_PLAGUEMONKS = 200;
__s0local80.MIN_RISK_SPY_PLAYER = 5;
__s0local80.MIN_RISK_SPY_DUNGEON = 0;
__s0local80.MAX_RISK_SPY = 95;
__s0local80.MIN_RISK_SABOTAGE = 10;
__s0local80.MAX_RISK_SABOTAGE = 90;
__s0local80.MIN_ACCURACY = 50;
__s0local80.MAX_ACCURACY = 100;
__s0local80.MIN_DAMAGE = 10;
__s0local80.MAX_DAMAGE = 50;
__s0local80.PLAGUEMONK_OWNER_ID = -334;
__s0local80.PLAGUEMONK_DISTANCE_TO_TARGET = 10;
__s0local80.DAMAGE_PER_BUILDING = 10;
__s0local80.DAMAGE_PER_SPY = 0.02;
__s0local80.QUEST_ID_DEFENSE = 0;
__s0local80.QUEST_ID_ECO = 1;
__s0local80.MAX_DELTA_LEVEL_SPY = 50;
__s0local80.MIN_LEVEL_SPY_ALL = 50;
__s0local80.SABTOAGE_PROTECTION_THRESHOLD = 12;
exports.SpyConst = __s0local80;
__s0local80.__class = "SpyConst";
var __s0local81 = function () {
  return function StatisticsConst() {};
}();
__s0local81.CONTRIBUTION_TO_ALLIANCE_INFLUENCE = 1;
__s0local81.CITY_STATES_CONQUERED = 2;
__s0local81.CAPITALS_ATTACKED = 3;
__s0local81.INFLUENCE_FROM_CITY_STATES = 4;
__s0local81.INFLUENCE_FROM_ENEMY_CASTLES = 5;
__s0local81.INFLUENCE_FROM_ENEMY_CAPITALS = 6;
__s0local81.CONTRIBUTION_TO_ALLIANCE_TOWER_POINTS = 7;
__s0local81.ALLIANCE_TOWERS_DEFEATED = 8;
__s0local81.ALLIANCE_TOWERS_DEFENDED = 9;
__s0local81.ALLIANCE_CASTLES_DEFENDED = 10;
__s0local81.TOWER_EFFECT_BUFFS_ACTIVATED = 11;
__s0local81.TOWER_EFFECT_BUFFS_PURCHASED = 12;
__s0local81.SUPPORT_TROOPS_SENT_TO_ALLIANCE_TOWERS = 13;
__s0local81.RESOURCE_TOWERS_DEFEATED = 14;
__s0local81.AQUAMARINE_TOTAL = 15;
__s0local81.AQUAMARINE_RESOURCE_ISLE = 16;
__s0local81.AQUAMARINE_STORM_FORTRESS = 17;
__s0local81.AQUAMARINE_PVP = 18;
__s0local81.AQUAMARINE_SPENT = 19;
__s0local81.AQUAMARINE_LOST_PVP = 20;
__s0local81.AQUAMARINE_FIRST_POINTS_TIMESTAMP = 21;
exports.StatisticsConst = __s0local81;
__s0local81.__class = "StatisticsConst";
var __s0local82 = function () {
  function SubscriptionConst() {}
  SubscriptionConst.PLAYER_TYPE_PACKAGES_$LI$ = function () {
    if (SubscriptionConst.PLAYER_TYPE_PACKAGES == null) {
      SubscriptionConst.PLAYER_TYPE_PACKAGES = [SubscriptionConst.PLAYER_SUBSCRIPTION_PACKAGE_TYPE_ID, SubscriptionConst.PLAYER_SUBSCRIPTION_PREMIUM_PACKAGE_TYPE_ID, SubscriptionConst.PLAYER_SUBSCRIPTION_BARON_ADVISOR_PACKAGE_TYPE_ID];
    }
    return SubscriptionConst.PLAYER_TYPE_PACKAGES;
  };
  return SubscriptionConst;
}();
__s0local82.PLAYER_SUBSCRIPTION_PACKAGE_TYPE_ID = 1;
__s0local82.ALLIANCE_SUBSCRIPTION_PACKAGE_TYPE_ID = 2;
__s0local82.PLAYER_SUBSCRIPTION_PREMIUM_PACKAGE_TYPE_ID = 3;
__s0local82.PLAYER_SUBSCRIPTION_BARON_ADVISOR_PACKAGE_TYPE_ID = 4;
exports.SubscriptionConst = __s0local82;
__s0local82.__class = "SubscriptionConst";
var __s0local83 = function () {
  return function SurveyConst() {};
}();
__s0local83.MAX_ANSWER_LENGTH = 1000;
__s0local83.QUESTION_TYPE_TEXT = 0;
__s0local83.QUESTION_TYPE_RADIO = 1;
__s0local83.QUESTION_TYPE_CHECKBOX = 2;
exports.SurveyConst = __s0local83;
__s0local83.__class = "SurveyConst";
var __s0local84 = function () {
  function TaxConst() {}
  TaxConst.COLLECTOR_DURATION_$LI$ = function () {
    if (TaxConst.COLLECTOR_DURATION == null) {
      TaxConst.COLLECTOR_DURATION = [600, 1800, 5400, 10800, 21600, 43200, 86400];
    }
    return TaxConst.COLLECTOR_DURATION;
  };
  TaxConst.START_COST_C2_$LI$ = function () {
    if (TaxConst.START_COST_C2 == null) {
      TaxConst.START_COST_C2 = [0, 0, 0, 0, 0, 125, 300];
    }
    return TaxConst.START_COST_C2;
  };
  TaxConst.START_COST_C1_PERC_$LI$ = function () {
    if (TaxConst.START_COST_C1_PERC == null) {
      TaxConst.START_COST_C1_PERC = [0, 0.1, 0.1, 0.1, 0.1, 0, 0];
    }
    return TaxConst.START_COST_C1_PERC;
  };
  TaxConst.COLLECTOR_LOSS_$LI$ = function () {
    if (TaxConst.COLLECTOR_LOSS == null) {
      TaxConst.COLLECTOR_LOSS = [1, 0.66, 0.44, 0.33, 0.25, 0.3, 0.4];
    }
    return TaxConst.COLLECTOR_LOSS;
  };
  TaxConst.getCollectorC1Costs = function (__s1725param0, __s1725param1, __s1725param2, __s1725param3, __s1725param4, __s1725param5) {
    if (__s1725param0 >= 5 && __s1725param1 > 0) {
      return 0;
    }
    var __s1725local0 = TaxConst.START_COST_C1_PERC_$LI$()[__s1725param0];
    if ((__s1725param4 || __s1725param3) && __s1725param0 === 5 || __s1725param5 && __s1725param0 >= 5) {
      __s1725local0 = 0.1;
    }
    return Math.floor(TaxConst.getCollectorIncome(__s1725param0, __s1725param2) * __s1725local0) | 0;
  };
  TaxConst.getCollectorC2Costs = function (__s1729param0, __s1729param1, __s1729param2, __s1729param3, __s1729param4) {
    if (__s1729param0 === 5 && (__s1729param3 || __s1729param1 === __s0local62.PREMIUM_ACCOUNT_SILVER || __s1729param1 === __s0local62.PREMIUM_ACCOUNT_GOLD || __s1729param2)) {
      return 0;
    } else if (__s1729param0 !== 6 || !__s1729param4 && __s1729param1 !== __s0local62.PREMIUM_ACCOUNT_GOLD) {
      return TaxConst.START_COST_C2_$LI$()[__s1729param0];
    } else {
      return 0;
    }
  };
  TaxConst.getCollectorIncome = function (__s1734param0, __s1734param1) {
    var __s1734local0 = __s1734param1 * 2;
    return Math.round(TaxConst.COLLECTOR_LOSS_$LI$()[__s1734param0] * TaxConst.COLLECTOR_DURATION_$LI$()[__s1734param0] / 3600 * __s1734local0);
  };
  TaxConst.applyCollectionBoosts = function (__s1736param0, __s1736param1, __s1736param2, __s1736param3) {
    var __s1736local0 = 1;
    if (__s1736param1) {
      __s1736local0 += __s0local11.TAX_BRIBE_BOOST;
    }
    __s1736param0 *= __s1736local0 += __s1736param3 / 100;
    __s1736param0 *= __s1736param2;
    return Math.round(__s1736param0);
  };
  TaxConst.getCollectedMoney = function (__s1739param0, __s1739param1, __s1739param2, __s1739param3, __s1739param4, __s1739param5) {
    var __s1739local0;
    var __s1739local1 = TaxConst.COLLECTOR_DURATION_$LI$()[__s1739param0];
    __s1739local0 = __s1739param1 > 0 ? (__s1739local1 - __s1739param1) / (__s1739local1 * 1) * __s1739param2 : __s1739param2;
    return TaxConst.applyCollectionBoosts(__s1739local0, __s1739param3, __s1739param4, __s1739param5);
  };
  TaxConst.getCollectorC2CostsNoVip = function (__s1741param0, __s1741param1, __s1741param2) {
    var __s1741local0 = TaxConst.START_COST_C2_$LI$()[__s1741param0];
    if ((__s1741param0 === 5 || __s1741param0 === 6) && __s1741param1 > __s0local62.PREMIUM_ACCOUNT_BRONZE) {
      if (__s1741param0 === 5 || __s1741param1 === __s0local62.PREMIUM_ACCOUNT_GOLD) {
        __s1741local0 = 0;
      }
    }
    if (__s1741param2 && __s1741param0 === 5) {
      __s1741local0 = 0;
    }
    return __s1741local0;
  };
  return TaxConst;
}();
exports.TaxConst = __s0local84;
__s0local84.__class = "TaxConst";
var __s0local85 = function () {
  return function TempServerConst() {};
}();
__s0local85.NORMAL_SERVER_EVENT_JOIN_LEVEL = 70;
__s0local85.TEMP_SERVER_EVENT_JOIN_LEVEL = 11;
__s0local85.HIGHSCORE_COLLECTOR = "collector";
__s0local85.HIGHSCORE_MIGHT = "might";
__s0local85.HIGHSCORE_RANK_SWAP = "rankSwap";
exports.TempServerConst = __s0local85;
__s0local85.__class = "TempServerConst";
var __s0local86 = function () {
  return function ThirdPartyAuthConst() {};
}();
__s0local86.PLATFORM_APPLE = "apple";
__s0local86.PLATFORM_FACEBOOK = "facebook";
__s0local86.PLATFORM_GAME_CENTER = "gamecenter";
exports.ThirdPartyAuthConst = __s0local86;
__s0local86.__class = "ThirdPartyAuthConst";
var __s0local87 = function () {
  return function TimeConst() {};
}();
__s0local87.SUNDAY = 1;
__s0local87.MONDAY = 2;
__s0local87.TUESDAY = 3;
__s0local87.WEDNESDAY = 4;
__s0local87.THURSDAY = 5;
__s0local87.FRIDAY = 6;
__s0local87.SATURDAY = 7;
exports.TimeConst = __s0local87;
__s0local87.__class = "TimeConst";
var __s0local88 = function () {
  function TimeLimitedCampaignConst() {}
  TimeLimitedCampaignConst.calculateEndRewardPurchaseCost = function (__s1762param0, __s1762param1, __s1762param2) {
    var __s1762local0 = __s1762param0 * (1 - __s1762param2 / __s1762param1) | 0;
    return __s1762local0 - __s1762local0 % TimeLimitedCampaignConst.END_REWARD_VALUE_REMAINDER_DIVISOR;
  };
  return TimeLimitedCampaignConst;
}();
__s0local88.NO_SKIN = -1;
__s0local88.QUEST_STATUS_NEW = "N";
__s0local88.QUEST_STATUS_INPROGRESS = "I";
__s0local88.QUEST_STATUS_FAILED = "F";
__s0local88.QUEST_STATUS_COMPLETE = "C";
__s0local88.DEFAULT_END_REWARD_VALUE = 1000000;
__s0local88.END_REWARD_VALUE_REMAINDER_DIVISOR = 10000;
exports.TimeLimitedCampaignConst = __s0local88;
__s0local88.__class = "TimeLimitedCampaignConst";
var __s0local89 = function () {
  return function TombolaConst() {};
}();
__s0local89.BATCH_OPENING_SPIN_CAP = 100;
exports.TombolaConst = __s0local89;
__s0local89.__class = "TombolaConst";
var __s0local90 = function () {
  function TrackingConst() {}
  TrackingConst.wasAutofieldUsed = function (__s1772param0) {
    return (__s1772param0 & TrackingConst.TRACKING_AUTOFILL_USED) != 0;
  };
  TrackingConst.wasAutofieldToolsBefore = function (__s1774param0) {
    return (__s1774param0 & TrackingConst.TRACKING_AUTOFILL_TOOLS_BEFORE) != 0;
  };
  TrackingConst.wasAutofieldSoldiersBefore = function (__s1776param0) {
    return (__s1776param0 & TrackingConst.TRACKING_AUTOFILL_SOLDIERS_BEFORE) != 0;
  };
  TrackingConst.wasAutofieldModified = function (__s1778param0) {
    return (__s1778param0 & TrackingConst.TRACKING_AUTOFILL_MODIFIED) != 0;
  };
  return TrackingConst;
}();
__s0local90.TRACKING_ID_MOVEMENTS = 901;
__s0local90.TRACKING_AUTOFILL_USED = 1;
__s0local90.TRACKING_AUTOFILL_TOOLS_BEFORE = 2;
__s0local90.TRACKING_AUTOFILL_SOLDIERS_BEFORE = 4;
__s0local90.TRACKING_AUTOFILL_MODIFIED = 8;
exports.TrackingConst = __s0local90;
__s0local90.__class = "TrackingConst";
var __s0local91 = function () {
  function TrainingConst() {}
  TrainingConst.calculateProlongationDuration = function (__s1784param0) {
    return __s1784param0 / 2 | 0;
  };
  return TrainingConst;
}();
exports.TrainingConst = __s0local91;
__s0local91.__class = "TrainingConst";
var __s0local92 = function () {
  function TravelConst() {}
  TravelConst.BASIC_FIELD_TRAVEL_TIME_$LI$ = function () {
    if (TravelConst.BASIC_FIELD_TRAVEL_TIME == null) {
      TravelConst.BASIC_FIELD_TRAVEL_TIME = 600;
    }
    return TravelConst.BASIC_FIELD_TRAVEL_TIME;
  };
  TravelConst.MAX_FALLBACK_TIME_$LI$ = function () {
    if (TravelConst.MAX_FALLBACK_TIME == null) {
      TravelConst.MAX_FALLBACK_TIME = 600;
    }
    return TravelConst.MAX_FALLBACK_TIME;
  };
  TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS_$LI$ = function () {
    if (TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS == null) {
      TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS = 43200;
    }
    return TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS;
  };
  TravelConst.PLAGUE_TRAVEL_TIME_$LI$ = function () {
    if (TravelConst.PLAGUE_TRAVEL_TIME == null) {
      TravelConst.PLAGUE_TRAVEL_TIME = 600;
    }
    return TravelConst.PLAGUE_TRAVEL_TIME;
  };
  TravelConst.getPlagueTravelTime = function (__s1802param0) {
    return TravelConst.getSpecialTravelTime(__s1802param0, TravelConst.PLAGUE_TRAVEL_TIME_$LI$());
  };
  TravelConst.getSpecialTravelTime = function (__s1804param0, __s1804param1) {
    var __s1804local0 = __s1804param1;
    if (__s1804param0) {
      __s1804local0 = TravelConst.TRAVEL_BOOST_CHEAT;
    }
    return __s1804local0;
  };
  TravelConst.getArmySightRadius = function (__s1807param0) {
    return Math.max(Math.pow(__s1807param0, 0.4) * 0.6, TravelConst.DEFAULT_SIGHT_RADIUS);
  };
  TravelConst.getSupportDurationCostC2 = function (__s1809param0, __s1809param1, __s1809param2, __s1809param3) {
    var __s1809local0 = TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_FREE;
    if (__s1809param2 || __s1809param3) {
      __s1809local0 = TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_FREE_CAPITAL_METROPOL;
    } else if (__s1809param1) {
      __s1809local0 = TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_FREE_OCCUPIED;
    }
    return Math.max(0, (__s1809param0 - __s1809local0) * TravelConst.DEFENSE_SUPPORT_DURATION_HOURLY_C2_COST);
  };
  TravelConst.getTravelCostC1 = function (__s1813param0, __s1813param1, __s1813param2, __s1813param3) {
    var __s1813local0 = (100 - __s1813param2) * (100 - __s1813param3) / 10000;
    return Math.max(0, Math.ceil(__s1813local0 * 0.6 * (__s1813param1 * Math.log(__s1813param0 + 1) / Math.log(2.3)))) | 0;
  };
  TravelConst.getAttackTravelCostC1 = function (__s1815param0, __s1815param1, __s1815param2, __s1815param3, __s1815param4, __s1815param5, __s1815param6) {
    var __s1815local0 = TravelConst.getTravelCostC1(__s1815param0, __s1815param1, __s1815param2, __s1815param3);
    if (__s1815param4 <= __s1815param5) {
      return __s1815local0;
    }
    var __s1815local1 = TravelConst.getTravelCostC1(__s1815param0, __s1815param1, 0, 0);
    return Math.min((Math.exp(__s1815param6 * (__s1815param4 - __s1815param5)) - 1) * __s1815local1 + __s1815local0, 2147483647) | 0;
  };
  TravelConst.getRedeployTravelCostC1 = function (__s1818param0, __s1818param1, __s1818param2, __s1818param3) {
    return TravelConst.getTravelCostC1(__s1818param0, __s1818param1, __s1818param2, __s1818param3) / 2 | 0;
  };
  TravelConst.getTravelBoostCostC2 = function (__s1820param0) {
    return Math.ceil(Math.pow(__s1820param0, 0.5) * 179) | 0;
  };
  TravelConst.getTravelTime = function (__s1822param0, __s1822param1, __s1822param2, __s1822param3, __s1822param4) {
    return Math.floor(TravelConst.getTravelTimeAsFloat(__s1822param0, __s1822param1, __s1822param2, __s1822param3, __s1822param4)) | 0;
  };
  TravelConst.getTravelTimeWithTitle = function (__s1824param0, __s1824param1, __s1824param2, __s1824param3, __s1824param4, __s1824param5) {
    return Math.floor(TravelConst.getTravelTimeAsFloat(__s1824param0, __s1824param1, __s1824param2, __s1824param3 + __s1824param4, __s1824param5)) | 0;
  };
  TravelConst.getTravelTimeAsFloat = function (__s1826param0, __s1826param1, __s1826param2, __s1826param3, __s1826param4) {
    var __s1826local0 = __s1826param3 / 100;
    var __s1826local1 = __s1826param0 / 10 / TravelConst.BASIC_FIELD_TRAVEL_TIME_$LI$() * (__s1826param2 + __s1826local0);
    if (__s1826param4) {
      return TravelConst.TRAVEL_BOOST_CHEAT;
    } else {
      return __s1826param1 / __s1826local1;
    }
  };
  TravelConst.getHorseCostC1 = function (__s1830param0, __s1830param1, __s1830param2) {
    return __s1830param2 * (Math.ceil(__s1830param1 * Math.log(__s1830param0 + 1) / Math.log(2.3) * 0.2) | 0);
  };
  TravelConst.getHorseCostC2 = function (__s1832param0, __s1832param1, __s1832param2) {
    var __s1832local0 = (Math.sqrt(__s1832param0 + 60) * -25 * Math.pow(1.5, Math.pow(__s1832param0 + 60, 2) * -0.0002) + 145) * 1.5 * (1 + __s1832param1 / 1100) | 0;
    return Math.round(Math.max(1, __s1832local0) * __s1832param2);
  };
  TravelConst.getTravelTimeWithHorseAndWithoutLowLevelBoost = function (__s1834param0, __s1834param1, __s1834param2, __s1834param3, __s1834param4, __s1834param5, __s1834param6) {
    return TravelConst.getTravelTimeWithHorse(__s1834param0, __s1834param1, __s1834param2, __s1834param3, __s1834param4, __s1834param5, __s1834param6);
  };
  TravelConst.getTravelTimeWithHorse = function (__s1836param0, __s1836param1, __s1836param2, __s1836param3, __s1836param4, __s1836param5, __s1836param6) {
    if (__s1836param6) {
      return TravelConst.TRAVEL_BOOST_CHEAT;
    }
    var __s1836local0;
    var __s1836local1 = __s1836param0 / 10 / TravelConst.BASIC_FIELD_TRAVEL_TIME_$LI$() * (__s1836param2 + __s1836param4 / 100);
    if (__s1836param1 < TravelConst.LOW_DISTANCE_BOOST_FIELDS) {
      __s1836local0 = 1 + __s1836param3 / 100 / TravelConst.HORSE_BOOST_FIELDS * 60 * (Math.log(__s1836param5 / 2 + 1) / Math.log(8));
    } else if (__s1836param3 > 0) {
      __s1836local0 = 1 + __s1836param3 / 100 / TravelConst.HORSE_BOOST_FIELDS * (__s1836param5 - 10);
      __s1836param1 -= 10;
    } else {
      __s1836local0 = 1 + __s1836param3 / 100 / TravelConst.HORSE_BOOST_FIELDS * __s1836param5;
    }
    var __s1836local2 = __s1836param1 / (__s1836local1 *= __s1836local0);
    return Math.floor(__s1836local2) | 0;
  };
  TravelConst.getInstantSpyHorseTravelTime = function (__s1842param0) {
    return Math.floor(Math.log(__s1842param0) / Math.log(10) + 1) | 0;
  };
  TravelConst.getTravelTimeWithTitleAndHorse = function (__s1844param0, __s1844param1, __s1844param2, __s1844param3, __s1844param4, __s1844param5, __s1844param6, __s1844param7, __s1844param8, __s1844param9) {
    return TravelConst.getTravelTimeWithHorse(__s1844param0, __s1844param1, __s1844param2 + __s1844param9, __s1844param3, __s1844param4 + __s1844param6 + __s1844param7, __s1844param5, __s1844param8);
  };
  TravelConst.calculateSightDistance = function (__s1846param0, __s1846param1, __s1846param2, __s1846param3, __s1846param4, __s1846param5, __s1846param6) {
    var __s1846local0 = __s1846param5 - __s1846param3;
    var __s1846local1 = __s1846param6 - __s1846param4;
    if (__s1846local0 === 0 && __s1846local1 === 0) {
      return NaN;
    }
    var __s1846local2 = __s1846param3 - __s1846param1;
    var __s1846local3 = __s1846param4 - __s1846param2;
    var __s1846local4 = __s1846local0 * __s1846local0 + __s1846local1 * __s1846local1;
    var __s1846local5 = (__s1846local0 * 2 * __s1846local2 + __s1846local1 * 2 * __s1846local3) / __s1846local4;
    var __s1846local6 = __s1846local5 * __s1846local5 / 4 - (__s1846local2 * __s1846local2 + __s1846local3 * __s1846local3 - __s1846param0 * __s1846param0) / __s1846local4;
    if (__s1846local6 < 0) {
      return NaN;
    }
    var __s1846local7 = -__s1846local5 / 2 - Math.sqrt(__s1846local6);
    var __s1846local8 = -__s1846local5 / 2 + Math.sqrt(__s1846local6);
    if (__s1846local7 < 0 && __s1846local8 < 0) {
      return NaN;
    }
    if (__s1846local7 > 1 && __s1846local8 > 1) {
      return NaN;
    }
    var __s1846local9 = Math.max(0, Math.min(__s1846local7, __s1846local8));
    return Math.sqrt(__s1846local9 * __s1846local0 * __s1846local9 * __s1846local0 + __s1846local9 * __s1846local1 * __s1846local9 * __s1846local1);
  };
  TravelConst.calculateLowLevelBoost = function (__s1852param0, __s1852param1) {
    if (__s1852param1 || __s1852param0 >= TravelConst.MAX_LEVEL_FOR_LOW_LEVEL_TRAVEL_BOOST) {
      return 0;
    } else {
      return (Math.max(0, __s1852param0 * -0.1667 + 4.167) * 100 | 0) / 100;
    }
  };
  return TravelConst;
}();
__s0local92.GUESS_SIZE_PRECISION = 3;
__s0local92.DEFAULT_SIGHT_RADIUS = 6;
__s0local92.INNER_CIRCLE_DIVISOR = 2;
__s0local92.TRAVEL_PREMIUM_COMMANDER_COSTS_C2 = 125;
__s0local92.KINGDOM_TOOL_TRAVEL_COST_C1 = 100;
__s0local92.TRAVEL_BOOST_TUTORIAL = 20;
__s0local92.BARON_SPEED = 2;
__s0local92.CAPITAL_CONQUER_SPEED = 5;
__s0local92.CAPITAL_CONQUER_MIN_ATTACK_DISTANCE = 6;
__s0local92.CAPITAL_CONQUER_MAX_ATTACK_DISTANCE = 144;
__s0local92.CAPITAL_CONQUER_MIN_BIG_SIGHT_RADIUS = 30;
__s0local92.METROPOL_CONQUER_SPEED = 5;
__s0local92.METROPOL_CONQUER_MIN_ATTACK_DISTANCE = 6;
__s0local92.METROPOL_CONQUER_MAX_ATTACK_DISTANCE = 144;
__s0local92.METROPOL_CONQUER_MIN_BIG_SIGHT_RADIUS = 30;
__s0local92.DEFENSE_SUPPORT_DURATION_HOURS_MAX = 99;
__s0local92.DEFENSE_SUPPORT_DURATION_HOURS_FREE = 12;
__s0local92.DEFENSE_SUPPORT_DURATION_HOURS_FREE_OCCUPIED = 24;
__s0local92.DEFENSE_SUPPORT_DURATION_HOURS_FREE_CAPITAL_METROPOL = 72;
__s0local92.DEFENSE_SUPPORT_DURATION_HOURLY_C2_COST = 275;
__s0local92.SLOWDOWN_C2_COSTS = 200;
__s0local92.TRAVEL_BOOST_CHEAT = 5;
__s0local92.HORSE_BOOST_FIELDS = 10;
__s0local92.LOW_DISTANCE_BOOST_FIELDS = 100;
__s0local92.ALIEN_TRAVEL_DISTANCE = 50;
__s0local92.NOMAD_TRAVEL_DISTANCE = 2;
__s0local92.SAMURAI_TRAVEL_DISTANCE = 2;
__s0local92.FACTION_TRAVEL_DISTANCE = 5;
__s0local92.ALLIANCE_INVASION_CAMP_TRAVEL_DISTANCE = 2;
__s0local92.COLLECTOR_TRAVEL_DISTANCE = 50;
__s0local92.TEMPSERVER_RANKSWAP_TRAVEL_DISTANCE = 25.2;
__s0local92.DAIMYO_CASTLE_TRAVEL_DISTANCE = 2;
__s0local92.DAIMYO_TOWNSHIP_TRAVEL_DISTANCE = 2;
__s0local92.DAIMYO_TAUNT_TRAVEL_DISTANCE = 2;
__s0local92.ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER_DISTANCE = 10;
__s0local92.ALLIANCE_BATTLE_GROUND_TOWER_DISTANCE = 25;
__s0local92.WOLFKING_TRAVEL_DISTANCE = 1;
__s0local92.WOLFKING_TAUNT_TRAVEL_DISTANCE = 0.5;
__s0local92.ALLIANCE_RAID_PORTAL_TRAVEL_DISTANCE = 50;
__s0local92.MAX_TOOL_SLOTS = 9;
__s0local92.MAX_TOOLS_PER_SLOT = 99999;
__s0local92.TESTSERVER_DEFENSE_WAIT_DIVISOR = 4;
__s0local92.MAX_KINGDOM_GOODS_MOVEMENTS = 1;
__s0local92.MAX_KINGDOM_ARMY_MOVEMENTS = 1;
__s0local92.COMMANDER_PREMIUM = -14;
__s0local92.COMMANDER_DUNGEON = -15;
__s0local92.WOLFKING_COMMANDER = -213;
__s0local92.COMMANDER_BOSS_DUNGEON = -45;
__s0local92.COMMANDER_TREASURE = -12;
__s0local92.MAX_LEVEL_FOR_LOW_LEVEL_TRAVEL_BOOST = 25;
exports.TravelConst = __s0local92;
__s0local92.__class = "TravelConst";
var __s0local93 = function () {
  function TreasureMapsConst() {}
  TreasureMapsConst.CRUSADE_MAP_IDS_$LI$ = function () {
    if (TreasureMapsConst.CRUSADE_MAP_IDS == null) {
      TreasureMapsConst.CRUSADE_MAP_IDS = [TreasureMapsConst.MAP_ID_THORNKING_EASY, TreasureMapsConst.MAP_ID_THORNKING_HARD, TreasureMapsConst.MAP_ID_SEAQUEEN_EASY, TreasureMapsConst.MAP_ID_SEAQUEEN_HARD, TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD, TreasureMapsConst.MAP_ID_UNDERWORLD_EASY, TreasureMapsConst.MAP_ID_UNDERWORLD_HARD];
    }
    return TreasureMapsConst.CRUSADE_MAP_IDS;
  };
  TreasureMapsConst.STAGED_CRUSADE_MAPS_$LI$ = function () {
    if (TreasureMapsConst.STAGED_CRUSADE_MAPS == null) {
      TreasureMapsConst.STAGED_CRUSADE_MAPS = [TreasureMapsConst.MAP_ID_UNDERWORLD_EASY, TreasureMapsConst.MAP_ID_THORNKING_EASY];
    }
    return TreasureMapsConst.STAGED_CRUSADE_MAPS;
  };
  TreasureMapsConst.getTreasureMapDropChance = function (__s1866param0, __s1866param1, __s1866param2) {
    if (__s1866param1 === TreasureMapsConst.FIRST_MAP_ID) {
      return 0.5;
    }
    var __s1866local0 = (Math.pow(__s1866param0 - __s1866param2, 3) / 100 + 8) * 4 + __s1866param0 * 0.1;
    return Math.round(Math.min(80, Math.max(5, __s1866local0))) / 100;
  };
  return TreasureMapsConst;
}();
__s0local93.FIRST_MAP_ID = 50;
__s0local93.PROGRESS_NONE = 0;
__s0local93.PROGRESS_FOUND_MAP_PIECE = 1;
__s0local93.PROGRESS_DESTROYED_DUNGEON = 2;
__s0local93.PROGRESS_NEW_MAP = 3;
__s0local93.PROGRESS_DESTROYED_END_NODE = 4;
__s0local93.MIN_LEVEL_FOR_FINDING_PIECES = 6;
__s0local93.TRAVEL_BOOST_ARMY = 2;
__s0local93.MAP_ID_THORNKING_EASY = 21;
__s0local93.MAP_ID_THORNKING_HARD = 25;
__s0local93.MAP_ID_SEAQUEEN_EASY = 22;
__s0local93.MAP_ID_SEAQUEEN_HARD = 27;
__s0local93.MAP_ID_SEAQUEEN_EXTRA_HARD = 28;
__s0local93.MAP_ID_UNDERWORLD_EASY = 23;
__s0local93.MAP_ID_UNDERWORLD_HARD = 24;
__s0local93.LOWLEVEL_UNDERWORLD_START_LEVEL = 10;
__s0local93.LOWLEVEL_UNDERWORLD_STOP_LEVEL = 22;
__s0local93.LOWLEVEL_UNDERWORLD_WARN_LEVEL = 29;
__s0local93.LOWLEVEL_UNDERWORLD_KILL_LEVEL = 30;
__s0local93.NODE_ID_HIDDEN_COW_DUNGEON = 165;
__s0local93.NODE_ID_KRAKEN = 206;
__s0local93.NODE_ID_THORNKING = 164;
__s0local93.MAP_TYPE_CRUSADE = 0;
__s0local93.MAP_TYPE_TREASURE_HUNT = 1;
__s0local93.MAP_TYPE_CRUSADE_TIMED = 2;
exports.TreasureMapsConst = __s0local93;
__s0local93.__class = "TreasureMapsConst";
var __s0local94 = function () {
  function TutorialConst() {}
  TutorialConst.TUTORIAL_TMAPS_$LI$ = function () {
    if (TutorialConst.TUTORIAL_TMAPS == null) {
      TutorialConst.TUTORIAL_TMAPS = [7, 8];
    }
    return TutorialConst.TUTORIAL_TMAPS;
  };
  return TutorialConst;
}();
__s0local94.LAST_TUTORIAL_STEP_LEVEL = 6;
__s0local94.TUTORIAL_END_LEVEL = 5;
__s0local94.LAST_TUTORIAL_STEP_XP = 1080;
__s0local94.LAST_TUTORIAL_QID = 2130;
__s0local94.LOAD_TAX_COLLECTOR_MIN_XP = 119;
__s0local94.TUTORIAL_HERO_0_ID = 801;
__s0local94.TUTORIAL_HERO_1_ID = 802;
__s0local94.TUTORIAL_HERO_2_ID = 803;
__s0local94.E4K_SHORT_TUTORIAL_FIRST_LEVEL_BARRIER = 2;
__s0local94.E4K_SHORT_TUTORIAL_SECOND_LEVEL_BARRIER = 3;
__s0local94.E4K_SHORT_TUTORIAL_QUEST_ID_ATTACK_DUNGEON = 3220;
exports.TutorialConst = __s0local94;
__s0local94.__class = "TutorialConst";
var __s0local95 = function () {
  function UnitProductionConst() {}
  UnitProductionConst.UNLOCK_DURATION_$LI$ = function () {
    if (UnitProductionConst.UNLOCK_DURATION == null) {
      UnitProductionConst.UNLOCK_DURATION = 604800;
    }
    return UnitProductionConst.UNLOCK_DURATION;
  };
  return UnitProductionConst;
}();
__s0local95.MAX_SLOTS = 5;
__s0local95.TOOLS_LIMIT = 80;
__s0local95.UNIT_LIST = 0;
__s0local95.TOOLS_LIST = 1;
__s0local95.HOSPITAL_LIST = 2;
__s0local95.AUXILIARY_LIST = 3;
__s0local95.LIST_AMOUNT = 2;
__s0local95.UNLOCK_C2 = 375;
__s0local95.PEACE_MODE_SLOWDOWN = 2;
__s0local95.MAX_AMOUNT_CLIENT_INPUT = 1000;
__s0local95.MAX_UNIT_BOOST_AMOUNT = 3;
__s0local95.MAX_TOOL_BOOST_AMOUNT = 1;
__s0local95.MAX_STARTER_BOOST_LEVEL = 10;
__s0local95.MAX_STARTER_BOOST_Value = 0.98;
exports.UnitProductionConst = __s0local95;
__s0local95.__class = "UnitProductionConst";
var __s0local96 = function () {
  function VillageConst() {}
  VillageConst.getVillageDefaultOwnerID = function (__s1887param0) {
    return VillageConst.DEFAULT_OWNER_OFFSET - (__s1887param0 - 1);
  };
  VillageConst.isVillagePlayer = function (__s1889param0) {
    return __s1889param0 <= VillageConst.DEFAULT_OWNER_OFFSET && __s1889param0 > VillageConst.DEFAULT_OWNER_OFFSET - 4;
  };
  return VillageConst;
}();
__s0local96.VILLAGE_UNSPAWNED_AREA_ID = -1;
__s0local96.DEFAULT_OWNER_OFFSET = -400;
exports.VillageConst = __s0local96;
__s0local96.__class = "VillageConst";
var __s0local97 = function () {
  return function WaveConst() {};
}();
__s0local97.YARD = -1;
__s0local97.PRE_COMBAT = -2;
__s0local97.POST_COMBAT = -3;
exports.WaveConst = __s0local97;
__s0local97.__class = "WaveConst";
var __s0local98 = function () {
  function WishingWellConst() {}
  WishingWellConst.calculateWishingWellSkipCost = function (__s1899param0) {
    return Math.min((__s1899param0 / 60 | 0) * 0.5, WishingWellConst.MIN_SKIP_PRICE_C2);
  };
  return WishingWellConst;
}();
__s0local98.ENTRY_COST_MODIFIER = 2;
__s0local98.RUINED_WELL = 0;
__s0local98.MIN_REQUIRED_PLAYER_LEVEL = 13;
__s0local98.MIN_SKIP_PRICE_C2 = 1999;
__s0local98.OPTION_START_RUBY_WISHING_WELL = "S";
__s0local98.OPTION_SKIP_RUBY_WISHING_WELL = "SK";
__s0local98.OPTION_COLLECT_RUBY_WISHING_WELL = "C";
__s0local98.OPTION_UPGRADE_RUBY_WISHING_WELL = "U";
__s0local98.OPTION_UPDATE_INFO_WISHING_WELL = "UD";
exports.WishingWellConst = __s0local98;
__s0local98.__class = "WishingWellConst";
var __s0local99 = function () {
  return function WODConst() {};
}();
__s0local99.WOD_IDS = "wodIds";
__s0local99.COST_WOOD = "costWood";
__s0local99.COST_STONE = "costStone";
__s0local99.COST_AQUAMARINE = "costAquamarine";
__s0local99.COST_FOOD = "costFood";
__s0local99.COST_COAL = "costCoal";
__s0local99.COST_OIL = "costOil";
__s0local99.COST_GLASS = "costGlass";
__s0local99.COST_IRON = "costIron";
__s0local99.COST_HONEY = "costHoney";
__s0local99.COST_MEAD = "costMead";
__s0local99.COST_BEEF = "costBeef";
__s0local99.COST_CURRENCY1 = "costC1";
__s0local99.COST_CURRENCY2 = "costC2";
__s0local99.XML_VERSION_NODE = "version";
__s0local99.XML_VERSION_VALUE = "value";
__s0local99.DROPPABLE = "droppable";
__s0local99.DEPRECATED = "deprecated";
__s0local99.ID_LOWER_CASE = "id";
__s0local99.ID_UPPER_CASE = "ID";
__s0local99.EVENT_TYPE_ID = "eventTypeID";
__s0local99.COST_HEALING_C1 = "healingCostC1";
__s0local99.COST_HEALING_C2 = "healingCostC2";
__s0local99.COST_SKIP_C2 = "skipCostC2";
__s0local99.COST_ALL_REVIVAL_C2 = "reviveAllCostC2";
__s0local99.HEALING_TIME = "healingTime";
__s0local99.HEALING_ORDER = "healingOrder";
__s0local99.WOD_ID = "wodID";
__s0local99.TYPE = "type";
__s0local99.FOOD_SUPPLY = "foodSupply";
__s0local99.MEAD_SUPPLY = "meadSupply";
__s0local99.BEEF_SUPPLY = "beefSupply";
__s0local99.MELEE_DEF = "meleeDefence";
__s0local99.MELEE_ATT = "meleeAttack";
__s0local99.RANGE_DEF = "rangeDefence";
__s0local99.RANGE_ATT = "rangeAttack";
__s0local99.LOOT = "lootValue";
__s0local99.ROLE = "role";
__s0local99.SPEED = "speed";
__s0local99.RECRUITMENT_TIME = "recruitmentTime";
__s0local99.LOWLEVEL_RECRUITMENT_TIME = "lowLevelRecruitmentTime";
__s0local99.BUILDING_LEVEL = "buildingLevel";
__s0local99.INVENTORY_TYPE = "inventoryType";
__s0local99.RESEARCH_LOCKED = "researchLocked";
__s0local99.PALACE_LOCKED = "palaceLockedByKID";
__s0local99.FIRE_BOOST = "fireBoost";
__s0local99.FIGHT_TYPE = "fightType";
__s0local99.OFFENSIVE_RANGE_BONUS = "offRangeBonus";
__s0local99.OFFENSIVE_MELEE_BONUS = "offMeleeBonus";
__s0local99.KAMIKAZE = "isKamikaze";
__s0local99.IS_DORMANT = "isDormant";
__s0local99.EXTRA_BOSS_HEALTH_UNIT = "extraBossHealthUnit";
__s0local99.UNLOCK_NPC_ID = "unlockNpcId";
__s0local99.SKIP_COST = "skipCost";
__s0local99.DESERTING_ORDER = "desertingOrder";
__s0local99.CLEAVAGE_OF_CELLS_COST = "cleavageOfCellsCost";
__s0local99.ALLOWED_TO_TRAVEL = "allowedToTravel";
__s0local99.ALLOWED_TO_ATTACK = "allowedToAttack";
__s0local99.NAME = "name";
__s0local99.SLOT_TYPES = "slotTypes";
__s0local99.WALL_BONUS = "wallBonus";
__s0local99.WALL_LEVEL = "wallLevel";
__s0local99.GATE_BONUS = "gateBonus";
__s0local99.GATE_LEVEL = "gateLevel";
__s0local99.MOAT_BONUS = "moatBonus";
__s0local99.MOAT_LEVEL = "moatLevel";
__s0local99.TOWER_LEVEL = "towerLevel";
__s0local99.TOOL_TYP = "typ";
__s0local99.DELETE_AFTER_BATTLE = "deleteToolAfterBattle";
__s0local99.DAILY_ACTIVITY = "dailyactivity";
__s0local99.ACHIEVEMENT = "achievement";
__s0local99.ACHIEVEMENT_ID = "achievementID";
__s0local99.REQUIRED_ACHIEVEMENT_ID = "requiredAchievementID";
__s0local99.OR_REQUIRED_ACHIEVEMENT_ID = "orRequiredAchievementID";
__s0local99.ACHIEVEMENT_POINTS = "achievementPoints";
__s0local99.CREST_SYMBOL_IDS = "crestSymbolIDs";
__s0local99.RUNS_PARALLEL_FOR_SERVER = "runsParallelForServer";
__s0local99.QUEST = "quest";
__s0local99.QUEST_ID = "questID";
__s0local99.EVENT_ID = "eventID";
__s0local99.MAP_ID = "mapID";
__s0local99.WOD_FOOD = "food";
__s0local99.WOD_WOOD = "wood";
__s0local99.WOD_STONE = "stone";
__s0local99.WOD_COAL = "coal";
__s0local99.WOD_OIL = "oil";
__s0local99.WOD_GLASS = "glass";
__s0local99.WOD_IRON = "iron";
__s0local99.WOD_AQUAMARINE = "aquamarine";
__s0local99.WOD_HONEY = "honey";
__s0local99.WOD_MEAD = "mead";
__s0local99.WOD_BEEF = "beef";
__s0local99.APOLOGIZE_TOKEN = "apologizeToken";
__s0local99.CURRENCY1 = "currency1";
__s0local99.CURRENCY2 = "currency2";
__s0local99.KHAN_TABLETS = "khanTablets";
__s0local99.KHAN_MEDALS = "khanMedals";
__s0local99.SAMURAI_TOKENS = "samuraiTokens";
__s0local99.PEGASUS_TRAVEL_TICKETS = "pegasusTravelTickets";
__s0local99.XP = "xp";
__s0local99.REQUIRED_LEVEL = "requiredLevel";
__s0local99.EARLY_UNLOCK_REQUIRED_LEVEL = "earlyUnlockRequiredLevel";
__s0local99.MAX_LEVEL = "maxLevel";
__s0local99.MAX_LEVEL_FOR_XP = "maxLevelForXP";
__s0local99.REQUIRED_QUEST_ID = "requiredQuestID";
__s0local99.OR_REQUIRED_QUEST_ID = "orRequiredQuestID";
__s0local99.ATTRIBUTE_KILLED_QUESTS = "killQuestIDs";
__s0local99.ATTRIBUTE_KILLED_QUESTS_START = "killQuestIDsOnStart";
__s0local99.QUEST_SERIES_ID = "questSeriesID";
__s0local99.TRIGGER_TUTORIAL_STEP_ID = "triggerTutorialStepID";
__s0local99.TEST_CASE_ID = "testCaseID";
__s0local99.CONDITIONS = "conditions";
__s0local99.FAILURE_CONDITIONS = "failureConditions";
__s0local99.DOLL_AMOUNT = "numberofDolls";
__s0local99.DOLL_WOD = "dollWod";
__s0local99.DEFENSIVE_MELEE_BONUS = "defMeleeBonus";
__s0local99.DEFENSIVE_RANGE_BONUS = "defRangeBonus";
__s0local99.MAX_COUNT = "maximumCount";
__s0local99.UPGRADE_ID = "upgradeWodID";
__s0local99.DOWNGRAGE_ID = "downgradeWodID";
__s0local99.GROUP = "group";
__s0local99.HEIGHT = "height";
__s0local99.WIDTH = "width";
__s0local99.STORABLE = "storeable";
__s0local99.BUILD_DURATION = "buildDuration";
__s0local99.LOW_LEVEL_BUILD_DURATION = "lowLevelBuildDuration";
__s0local99.BUILD_SPEED_BOOST = "buildSpeedBoost";
__s0local99.WOOD_PRODUCTION = "Woodproduction";
__s0local99.STONE_PRODUCTION = "Stoneproduction";
__s0local99.FOOD_PRODUCTION = "Foodproduction";
__s0local99.COAL_PRODUCTION = "Coalproduction";
__s0local99.OIL_PRODUCTION = "Oilproduction";
__s0local99.GLASS_PRODUCTION = "Glassproduction";
__s0local99.IRON_PRODUCTION = "Ironproduction";
__s0local99.HONEY_PRODUCTION = "Honeyproduction";
__s0local99.MEAD_PRODUCTION = "meadProduction";
__s0local99.BEEF_PRODUCTION = "Beefproduction";
__s0local99.FOOD_RATIO = "foodRatio";
__s0local99.HONEY_RATIO = "honeyRatio";
__s0local99.WOOD_BOOST = "Woodboost";
__s0local99.STONE_BOOST = "Stoneboost";
__s0local99.FOOD_BOOST = "Foodboost";
__s0local99.COAL_BOOST = "Coalboost";
__s0local99.OIL_BOOST = "Oilboost";
__s0local99.GLASS_BOOST = "Glassboost";
__s0local99.IRON_BOOST = "Ironboost";
__s0local99.HONEY_BOOST = "Honeyboost";
__s0local99.MEAD_BOOST = "Meadboost";
__s0local99.BEEF_BOOST = "Beefboost";
__s0local99.FOOD_CONSUMPTION_REDUCTION = "Foodreduction";
__s0local99.MEAD_CONSUMPTION_REDUCTION = "Meadreduction";
__s0local99.BEEF_CONSUMPTION_REDUCTION = "Beefreduction";
__s0local99.HIDEOUT = "Hideout";
__s0local99.AQUAMARINE_HIDEOUT = "aquamarineHideout";
__s0local99.GUARDS = "guardSize";
__s0local99.SPY_SIZE = "spySize";
__s0local99.GENERALS = "commanderSize";
__s0local99.MARKET_CARRIAGES = "marketCarriages";
__s0local99.BARONS = "baronSize";
__s0local99.STONESTORAGE = "stoneStorage";
__s0local99.FOODSTORAGE = "foodStorage";
__s0local99.WOODSTORAGE = "woodStorage";
__s0local99.COALSTORAGE = "coalStorage";
__s0local99.OILSTORAGE = "oilStorage";
__s0local99.GLASSSTORAGE = "glassStorage";
__s0local99.IRONSTORAGE = "ironStorage";
__s0local99.AQUAMARINESTORAGE = "aquamarineStorage";
__s0local99.HONEYSTORAGE = "honeyStorage";
__s0local99.MEADSTORAGE = "meadStorage";
__s0local99.BEEFSTORAGE = "beefStorage";
__s0local99.SIGHT_RADIUS_BONUS = "sightRadiusBonus";
__s0local99.POPULATION = "Population";
__s0local99.DECO_POINTS = "decoPoints";
__s0local99.EVENT_IDS = "eventIDs";
__s0local99.MAP_IDS = "mapIDs";
__s0local99.UNLOCKING_IDS = "unlockIDs";
__s0local99.UNLOCKING_HORSES = "unlockHorses";
__s0local99.CONSTRUCTION_ITEM_GROUP_IDS = "constructionItemGroupIDs";
__s0local99.SHOP_CATEGORY = "shopCategory";
__s0local99.LEVEL = "level";
__s0local99.DESTRUCTABLE = "destructable";
__s0local99.BURNABLE = "burnable";
__s0local99.DAMAGE_THRESHOLD = "damageTreshold";
__s0local99.DUNGEON = "dungeon";
__s0local99.COUNT_VICTORIES = "countVictories";
__s0local99.DUNGEON_SKIP_COST = "skipCosts";
__s0local99.UNIT_WALL_COUNT = "unitWallCount";
__s0local99.TOOL_R = "toolR";
__s0local99.TOOL_M = "toolM";
__s0local99.TOOL_L = "toolL";
__s0local99.UNIT_R = "unitsR";
__s0local99.UNIT_M = "unitsM";
__s0local99.UNIT_L = "unitsL";
__s0local99.UNIT_K = "unitsK";
__s0local99.UNITS = "units";
__s0local99.SMASHABLE = "smashable";
__s0local99.MORAL = "Moral";
__s0local99.UNIT_SIZE = "unitSize";
__s0local99.RESEARCH_BOOST = "researchBoost";
__s0local99.RECRUIT_SPEED_BOOST = "recruitSpeedBoost";
__s0local99.USAGE_EVENT_ID = "usageEventID";
__s0local99.XP_BONUS = "xpBonus";
__s0local99.AMOUNT_PER_WAVE = "amountPerWave";
__s0local99.DECOS = "decos";
__s0local99.TOHOME = "toHome";
__s0local99.HIDDENFOOD = "hiddenFood";
__s0local99.HIDDENMEAD = "hiddenMead";
__s0local99.HIDDENBEEF = "hiddenBeef";
__s0local99.DUNGEON_TYPE = "dungeonType";
__s0local99.DUNGEON_TYPE_MAIN = "main";
__s0local99.DUNGEON_TYPE_SUB = "sub";
__s0local99.TREASUREMAP = "tmap";
__s0local99.TREASUREMAP_ID = "mapID";
__s0local99.TREASUREMAP_TYPE = "maptype";
__s0local99.TREASURE_MAP_NODE_IDS = "tmapnodeIDs";
__s0local99.TREASURE_RELATES_OLD_MAP = "relatesOld";
__s0local99.STARTMAPPIECES = "initialpieces";
__s0local99.TOTALMAPPIECES = "totalpieces";
__s0local99.TREASURE_END_NODE_ID = "endNodeID";
__s0local99.TREASURE_HAS_CAMP = "hasCamp";
__s0local99.CONTINUE_AFTER_BOSS = "continueAfterBoss";
__s0local99.TREASURE_MAP_NODE = "tmapnode";
__s0local99.TREASURE_MAP_NODE_ID = "tmapnodeID";
__s0local99.DEFENSE_STREGTH = "defStrength";
__s0local99.RANDOMIZED_DEFENSE = "randomizedDefence";
__s0local99.DEFENCE_UNITS = "defenceUnits";
__s0local99.DEFENCE_TOOLS = "defenceTools";
__s0local99.DEFENCE_P_TOOLS = "dungeonPTools";
__s0local99.DISTANCE = "distance";
__s0local99.COOLDOWN = "coolDown";
__s0local99.DUNGEON_ID = "countVictories";
__s0local99.LOOT_C1 = "lootc1";
__s0local99.LOOT_C2 = "lootc2";
__s0local99.LOOT_WOOD = "lootWood";
__s0local99.LOOT_STONE = "lootStone";
__s0local99.LOOT_FOOD = "lootFood";
__s0local99.LOOT_COAL = "lootCoal";
__s0local99.LOOT_OIL = "lootOil";
__s0local99.LOOT_GLASS = "lootGlass";
__s0local99.LOOT_IRON = "lootIron";
__s0local99.LOOT_BEEF = "lootBeef";
__s0local99.CAPTURED_PRODUCTION_WOOD = "capturedProductionWood";
__s0local99.CAPTURED_PRODUCTION_STONE = "capturedProductionStone";
__s0local99.CAPTURED_PRODUCTION_FOOD = "capturedProductionFood";
__s0local99.TREASURE_UNLOCK_IDS_OR = "orUnlockIDs";
__s0local99.TREASURE_UNLOCK_IDS_AND = "andUnlockIDs";
__s0local99.TREASURE_TYPE = "type";
__s0local99.TREASURE_TYPE_DUNGEON = "DUNGEON";
__s0local99.TREASURE_TYPE_BRIDGE = "BRIDGE";
__s0local99.TREASURE_TYPE_BRIDGEDUNGEON = "BRIDGEDUNGEON";
__s0local99.TREASURE_TYPE_MORALE_BOOSTER = "MORALBOOSTER";
__s0local99.TREASURE_TYPE_PORT = "PORT";
__s0local99.TREASURE_TYPE_SWAMP = "SWAMP";
__s0local99.TREASURE_TYPE_SAND = "SAND";
__s0local99.TREASURE_CHEST_COSTC2 = "COSTC2";
__s0local99.DUNGEONLEVEL = "dungeonlevel";
__s0local99.MAPPIECEPRICE = "costpiece";
__s0local99.DIFFICULTY = "difficulty";
__s0local99.UNIT_BOOST = "unitBoost";
__s0local99.MARKET_BOOST = "marketBoost";
__s0local99.SPY_BOOST = "spyBoost";
__s0local99.IS_INSTANT_SPY_HORSE = "isInstantSpyHorse";
__s0local99.COST_FACTOR_C1 = "costFactorC1";
__s0local99.COST_FACTOR_C2 = "costFactorC2";
__s0local99.ALLOWED_FOR_NPC_ATTACK_IN_KIDS = "allowedForNpcAttackInKingdom";
__s0local99.IS_LAST_TUTORIAL_QUEST = "isLastTutorialQuest";
__s0local99.IS_RELIC_BUILDING = "isRelicBuilding";
__s0local99.SELL_WOOD = "sellWood";
__s0local99.SELL_STONE = "sellStone";
__s0local99.SELL_AQUAMARINE = "sellAquamarine";
__s0local99.SELL_FOOD = "sellFood";
__s0local99.SELL_COAL = "sellCoal";
__s0local99.SELL_OIL = "sellOil";
__s0local99.SELL_GLASS = "sellGlass";
__s0local99.SELL_IRON = "sellIron";
__s0local99.SELL_HONEY = "sellHoney";
__s0local99.SELL_MEAD = "sellMead";
__s0local99.SELL_BEEF = "sellBeef";
__s0local99.SELL_CURRENCY1 = "sellC1";
__s0local99.SELL_CURRENCY2 = "sellC2";
__s0local99.WISHING_WELL = "wishingwell";
__s0local99.WISHING_WELL_COIN = "wishingWellCoin";
__s0local99.COST_WISHING_WELL_COINS = "costWishingWellCoin";
__s0local99.ENTRY_COSTS = "entryCosts";
__s0local99.EVENT = "event";
__s0local99.EVENTID = "eventID";
__s0local99.TRAVEL_TIME = "travelTime";
__s0local99.SKIP_COST_C2 = "skipCostC2";
__s0local99.REQUIRED_MAP_ID = "requiredMapID";
__s0local99.THRESHOLD = "threshold";
__s0local99.TOP_X = "topX";
__s0local99.BOOSTED_WODS = "boostedWodIDs";
__s0local99.REDUCTION = "reduction";
__s0local99.ENABLE_WODS = "enabledWodIDs";
__s0local99.ALLIANCE_FAME_BOOST = "allianceFameBoost";
__s0local99.MAX_SOLDIERS = "maxSoldiers";
__s0local99.RETURN_UNITS = "returnUnits";
__s0local99.START_TMAP_WITH_UNITS = "startWithUnits";
__s0local99.FAME_LEVEL = "fameLevel";
__s0local99.FAME_DECREASE_PERCENT = "fameLoss";
__s0local99.EVENT_TYPE = "eventType";
__s0local99.PACKAGE_IDS = "packageIDs";
__s0local99.PACKAGES = "packages";
__s0local99.ARTIFACT = "artifact";
__s0local99.ARTIFACT_LEAGUE = "artifactsLeague";
__s0local99.ARTIFACT_LEAGUE_ID = "artifactsLeagueID";
__s0local99.ARTIFACT_ID = "artifactID";
__s0local99.ARTIFACT_PARTS = "artifactParts";
__s0local99.ARTIFACT_PRICE = "artifactPrice";
__s0local99.ARTIFACT_PART_PRICE = "artifactPartPrice";
__s0local99.DROP_FACTOR = "dropFactor";
__s0local99.EXPONENT = "exponent";
__s0local99.OFFSET = "offset";
__s0local99.AVERAGE_DUNGEON_LEVEL = "averageDungeonLevel";
__s0local99.PACKAGE_ID = "packageID";
__s0local99.PACKAGE_TYPE = "packageType";
__s0local99.PACKAGE_PRICE_C1 = "packagePriceC1";
__s0local99.PACKAGE_PRICE_C2 = "packagePriceC2";
__s0local99.PACKAGE_PRICE_WOOD = "packagePriceWood";
__s0local99.PACKAGE_PRICE_STONE = "packagePriceStone";
__s0local99.PACKAGE_PRICE_FOOD = "packagePriceFood";
__s0local99.PACKAGE_PRICE_COAL = "packagePriceCoal";
__s0local99.PACKAGE_PRICE_OIL = "packagePriceOil";
__s0local99.PACKAGE_PRICE_GLASS = "packagePriceGlass";
__s0local99.PACKAGE_PRICE_IRON = "packagePriceIron";
__s0local99.PACKAGE_PRICE_AQUAMARINE = "packagePriceAquamarine";
__s0local99.PACKAGE_PRICE_HONEY = "packagePriceHoney";
__s0local99.PACKAGE_PRICE_MEAD = "packagePriceMead";
__s0local99.PACKAGE_PRICE_BEEF = "packagePriceBeef";
__s0local99.BUY_AGAIN_REDUCED_COST_C2 = "buyAgainReducedCostC2";
__s0local99.AMOUNT_WOOD = "amountWood";
__s0local99.AMOUNT_STONE = "amountStone";
__s0local99.AMOUNT_FOOD = "amountFood";
__s0local99.AMOUNT_COAL = "amountCoal";
__s0local99.AMOUNT_OIL = "amountOil";
__s0local99.AMOUNT_GLASS = "amountGlass";
__s0local99.AMOUNT_IRON = "amountIron";
__s0local99.AMOUNT_C1 = "amountC1";
__s0local99.WOD_AMOUNT = "wodAmount";
__s0local99.PACKAGE_STOCK = "stock";
__s0local99.FILL_UP_RESOURCE_STORAGE = "fillUpResourceStorage";
__s0local99.FILL_ALL_KINGDOMS = "fillAllStorages";
__s0local99.EXCLUDED_AREA_TYPES = "excludedAreaTypes";
__s0local99.AMOUNT_SILVER_RUNES = "amountSilverRunes";
__s0local99.IS_GIFT_PACKAGE = "isGiftPackage";
__s0local99.AMOUNT_XP = "amountXP";
__s0local99.MAX_BUY_PER_CLICK = "maxBuyPerClick";
__s0local99.BOUNTY_TARGET_SKIP_COST_C2 = "targetSkipCostC2";
__s0local99.FAME_AS_OFF = "fameAsOff";
__s0local99.FAME_AS_DEF = "fameAsDef";
__s0local99.DEFENCE_P_TOOLS_STACK = "dungeonPToolStacks";
__s0local99.DEFENCE_NP_TOOLS_STACK = "dungeonNPToolStacks";
__s0local99.HIDDEN_SOLDIERS_SPACE = "hiddenSoldiersSpace";
__s0local99.KINGDOM_TRAVELLING_COST = "kingdomTravellingCost";
__s0local99.CAN_BE_PRIME_SALE_OFFER = "canBePrimeSaleOffer";
__s0local99.HOSPITAL_CAPACITY = "hospitalCapacity";
__s0local99.HOSPITAL_SURVIVE_BOOST = "surviveBoost";
__s0local99.HOSPITAL_SLOTS = "hospitalSlots";
__s0local99.HEAL_SPEED = "healSpeed";
__s0local99.RESEARCH = "research";
__s0local99.RESEARCH_ID = "researchID";
__s0local99.RESEARCH_GROUP_ID = "groupID";
__s0local99.RESEARCH_LEVEL = "level";
__s0local99.RESEARCH_PREREQUISITE_IDS = "prerequisiteIDs";
__s0local99.RESEARCH_DURATION = "researchDuration";
__s0local99.RECRUIT_SOLDIER_BOOST = "recruitSoldierBoost";
__s0local99.BUILD_TOOL_BOOST = "buildToolBoost";
__s0local99.TRAVEL_STATION_UNIT_BOOST = "travelStationUnitBoost";
__s0local99.TRAVEL_SPY_BOOST = "travelSpyBoost";
__s0local99.TRAVEL_MARKET_OWN_BOOST = "travelMarketOwnBoost";
__s0local99.TAX_COLLECTOR_BOOST = "taxCollectorBoost";
__s0local99.BUILDING_XP_BOOST = "buildingXPBoost";
__s0local99.PRODUCTIVITY_WOOD_BOOST = "productivityWoodBoost";
__s0local99.PRODUCTIVITY_STONE_BOOST = "productivityStoneBoost";
__s0local99.PRODUCTIVITY_FOOD_BOOST = "productivityFoodBoost";
__s0local99.BATTLE_XP_BOOST = "battleXPBoost";
__s0local99.LOOT_BOOST = "lootBoost";
__s0local99.RESEARCH_LOCK_WOD_IDS = "lockWodIDs";
__s0local99.RESEARCH_UNLOCK_WOD_IDS = "unlockWodIDs";
__s0local99.RESEARCH_SPEED_BOOST = "researchBoost";
__s0local99.FAME_BOOST = "fameBoost";
__s0local99.HONOR_BOOST = "honorBoost";
__s0local99.PERCEPTION_BOOST = "perceptionBoost";
__s0local99.MAGIC_FIND_BOOST = "magicFindBoost";
__s0local99.POPULATION_BOOST = "populationAmountBoost";
__s0local99.POPULATION_CONVERSION_BOOST = "peasantAmountBoost";
__s0local99.CRAFT_COST_REDUCTION = "forgeCostReduction";
__s0local99.STEALTH_BOOST = "stealthBoost";
__s0local99.ONLY_WITH_RESEARCH_EXPERT = "onlyWithResearchExpert";
__s0local99.REQUIRED_BUILDINGS = "requiredBuildings";
__s0local99.REQUIRED_BUILDINGS_CONDITION = "requiredBuildingsCondition";
__s0local99.RESEARCH_RECRUIT_SOLDIER_BOOST_ABSOLUTE = "recruitSoldierBoostAbsolute";
__s0local99.RESEARCH_BUILD_TOOL_BOOST_ABSOLUTE = "buildToolBoostAbsolute";
__s0local99.RESEARCH_PLUNDER_CAPACITY = "plunderCapacity";
__s0local99.RESEARCH_PRODUCT_WOOD_BOOST_ABSOLUTE = "productivityWoodBoostAbsolute";
__s0local99.RESEARCH_PRODUCT_STONE_BOOST_ABSOLUTE = "productivityStoneBoostAbsolute";
__s0local99.RESEARCH_PRODUCT_FOOD_BOOST_ABSOLUTE = "productivityFoodBoostAbsolute";
__s0local99.RESEARCH_BOOST_ABSOLUTE_ABSOLUTE = "researchBoostAbsolute";
__s0local99.RESEARCH_POPULATION_BOOST_ABSOLUTE = "populationAmountBoostAbsolute";
__s0local99.RESEARCH_XP_BONUS_ABSOLUTE = "xpBonusAbsolute";
__s0local99.VILLAGE = "village";
__s0local99.KINGDOM_ID = "kID";
__s0local99.TRIGGER_KINGDOM_ID = "triggerKingdomID";
__s0local99.RELATED_ID = "groupID";
__s0local99.WALL_WOD_ID = "wallWodId";
__s0local99.GATE_WOD_ID = "gateWodId";
__s0local99.KEEP_WOD_ID = "keepWodId";
__s0local99.MOAT_WOD_ID = "moatWodId";
__s0local99.PEASANTS = "peasants";
__s0local99.GUARDS_COUNT = "guards";
__s0local99.BOSS_DUNGEON = "bossdungeon";
__s0local99.COOLDOWN_DELAY = "cooldownDelay";
__s0local99.ATTACK_DELAY_RANGE = "attackDelayRange";
__s0local99.ATTACK_STRENGTH = "attackStrength";
__s0local99.PLAYER_COOLDOWN_DELAY = "playerCooldownDelay";
__s0local99.OWNER_ID = "ownerID";
__s0local99.KINGDOM_IDS = "kIDs";
__s0local99.KINGDOM = "kingdom";
__s0local99.UNIT_TRAVEL_TIME = "unitTravelTime";
__s0local99.RESOURCE_TRAVEL_TIME = "resourceTravelTime";
__s0local99.UNIT_TRAVEL_TAX_RATE = "unitTravelTaxRate";
__s0local99.RESOURCE_TRAVEL_TAX_RATE = "resourceTravelTaxRate";
__s0local99.MIN_LEVEL = "minLevel";
__s0local99.SKIP_UNIT_TRAVEL_C2_COST = "skipUnitTravelC2Cost";
__s0local99.SKIP_RESOURCE_TRAVEL_C2_COST = "skipResourceTravelC2Cost";
__s0local99.NOOB_PROTECTION_TIME = "noobProtectionTime";
__s0local99.REQUIRED_KINGDOM_ID = "requiredKingdomID";
__s0local99.VILLAGE_CAP_WOOD = "villageCapWood";
__s0local99.VILLAGE_CAP_STONE = "villageCapStone";
__s0local99.VILLAGE_CAP_FOOD = "villageCapFood";
__s0local99.NPC_COOLDOWN_FACTOR = "npcCooldownFactor";
__s0local99.MIN_C2_LEVEL = "minC2Level";
__s0local99.FAME_BONUS = "fameBonus";
__s0local99.FACTION_POINT_BONUS = "pointBonus";
__s0local99.C1_BONUS = "c1Bonus";
__s0local99.REPUTATION_BONUS = "reputationBonus";
__s0local99.RAGE_POINT_BONUS = "ragePointBonus";
__s0local99.IS_YARD_TOOL = "isYardTool";
__s0local99.IS_ALLOWED_TO_DEFEND = "allowedToDefend";
__s0local99.TOURNAMENT_PRIZE_DECO = "prizeDeco";
__s0local99.TOURNAMENT_FAME_PER_DAY = "famePerDay";
__s0local99.EVENT_DUNGEON_PROTECTION_TIME = "dungeonProtectionTime";
__s0local99.EVENT_DUNGEON_LOOT_C2 = "dungeonLootC2";
__s0local99.CAN_BE_USED_TO_ATTACK_NPC = "canBeUsedToAttackNPC";
__s0local99.CAN_BE_USED_BY_NPC = "canBeUsedByNPC";
__s0local99.INITIAL_WOOD = "initialWood";
__s0local99.INITIAL_FOOD = "initialFood";
__s0local99.INITIAL_STONE = "initialStone";
__s0local99.C2_FOR_REWARD = "c2ForReward";
__s0local99.REWARD_CAP = "rewardCap";
__s0local99.IGNORE_RESOURCE_STORAGE_CAPACITY = "ignoreResourceStorageCapacity";
__s0local99.MAIN_QUEST = "mainquest";
__s0local99.MAIN_QUEST_ID = "mainQuestID";
__s0local99.ANNOUNCEMENT_REQUIREMENTS = "IDsForAnnounced";
__s0local99.RUNNING_REQUIREMENTS = "IDsForRunning";
__s0local99.DONE_REQUIREMENTS = "IDsForDone";
__s0local99.PART_PAY_PRICE = "partpayprice";
__s0local99.PARTPAYPRICE_ID = "partPayPriceID";
__s0local99.PARTPAYMENT_SKIPPABLE = "skippable";
__s0local99.MODE = "mode";
__s0local99.FIXED = "fixed";
__s0local99.HOURLY_ROUNDED_TO_DAYS = "hourlyRoundedToDays";
__s0local99.PREMIUM_UNLOCK_C2 = "premiumUnlockCurrency2";
__s0local99.PREMIUM_UNLOCK_DISCOUNT = "premiumUnlockDiscount";
__s0local99.TRAVEL_KINGDOM_MARKET_TIME_REDUCTION = "travelKingdomMarketTimeReduction";
__s0local99.TRAVEL_KINGDOM_TROOP_TIME_REDUCTION = "travelKingdomTroopTimeReduction";
__s0local99.TAX_COLLECTOR_NO_RUBIES = "taxCollectorNoRubies";
__s0local99.MARKET_CARRIAGE_CAPACITY_BOOST = "marketCarriageCapacityBoost";
__s0local99.GUARDS_BOOST = "guardsBoost";
__s0local99.MIN_RESEARCH_TOWER_LEVEL = "minResearchTowerLevel";
__s0local99.UNIT_BOOST_SPEED = "boostUnitSpeed";
__s0local99.CONSTRUCTION_EXPERT = "constructionExpert";
__s0local99.CUSTOM_DECO = "customDeco";
__s0local99.SLUM_LEVEL_NEEDED = "slumLevelNeeded";
__s0local99.HUNTER_RATIO = "hunterRatio";
__s0local99.HUNTER_MAX = "hunterMax";
__s0local99.ONLY_IN_AREA_TYPES = "onlyInAreaTypes";
__s0local99.ALLI_FOOD_PRODUCTION_BONUS = "alliFoodProductionBonus";
__s0local99.KINGDOM_FAME_BOOST = "kingdomFameBoost";
__s0local99.TAG_SPECIAL_CAMP = "specialcamp";
__s0local99.TYPE_CAPITAL = "CAPITAL";
__s0local99.TYPE_TOWER = "DUNGEON";
__s0local99.TYPE_VILLAGES = "VILLAGES";
__s0local99.LOOT_VALUE_MODIFIER = "lootValueModifier";
__s0local99.ATTRIBUTE_CAMP_ID = "specialcampID";
__s0local99.ATTRIBUTE_POSITION_X = "CampPosX";
__s0local99.ATTRIBUTE_POSITION_Y = "CampPosY";
__s0local99.ATTRIBUTE_PROTECTOR_ID = "unlockIDs";
__s0local99.ATTRIBUTE_ATTACKS_UNTIL_DESTROYED = "attacksUntilDestroyed";
__s0local99.ATTRIBUTE_VILLAGE_COUNT = "villageCount";
__s0local99.ATTRIBUTE_AREA_TYPES = "areaTypes";
__s0local99.PLAGUEMONK_COUNT = "plagueMonkCount";
__s0local99.MAX_REPEAT_COUNT = "maxRepeatCount";
__s0local99.FACTION_ID = "factionID";
__s0local99.FIRE_BRIGADE_BOOST = "fireBrigadeBoost";
__s0local99.IS_HIDDEN = "hidden";
__s0local99.RESOURCE_POINTS = "resourcePoints";
__s0local99.BUILDING_COST_REDUCTION = "buildingCostReduction";
__s0local99.RECRUIT_COST_REDUCTION = "recruitCostReduction";
__s0local99.HOSPITAL_SLOT_BOOST = "hospitalSlotBoost";
__s0local99.LEAGUE_TYPE = "leaguetype";
__s0local99.LEAGUE_TYPE_ID = "leaguetypeID";
__s0local99.SUB_TYPE_ID = "subType";
__s0local99.LEAGUE_INVISIBLE_RANKING = "hasInvisibleRanking";
__s0local99.ALLIANCE_REWARD_THRESHOLD_POINTS = "allianceRewardThresholdPoints";
__s0local99.LEAGUE_TYPE_CV_MIN = "countVictoryMin";
__s0local99.LEAGUE_TYPE_CV_MAX = "countVictoryMax";
__s0local99.TAG_HIGHSCOREBONI = "highscoreboni";
__s0local99.ATTRIBUTE_HIGH_RANK = "highestRank";
__s0local99.ATTRIBUTE_LOW_RANK = "lowestRank";
__s0local99.ATTRIBUTE_UNIT_REWARD = "unitReward";
__s0local99.ATTRIBUTE_C1_REWARD = "c1Reward";
__s0local99.ATTRIBUTE_MIN_AMOUNT = "minAmount";
__s0local99.ATTRIBUTE_TOOL_REWARD = "toolReward";
__s0local99.ATTRIBUTE_TOOL_MIN_AMOUNT = "toolMinAmount";
__s0local99.ATTRIBUTE_TOOL_OFFSET = "toolOffset";
__s0local99.EQ_DROP_CHANCE = "equipment_drop";
__s0local99.EQ_SLOT = "equipment_slot";
__s0local99.EQUIPMENT_EFFECT = "equipment_effect";
__s0local99.EQ_RARENESS = "equipment_rareness";
__s0local99.EQ_EFFECTSTRENGTH = "equipment_effectstrength";
__s0local99.EQ_WEARER = "equipment_wearer";
__s0local99.EQ_UNIQUE = "equipment";
__s0local99.EQ_SET = "equipment_set";
__s0local99.MAGIC_FIND_STRENGTH = "magicFindStrength";
__s0local99.EQ_GROUP = "equipment_group";
__s0local99.EFFECT_TYPE = "effecttype";
__s0local99.HERO_AMOUNT = "heroAmount";
__s0local99.HERO_SPECIAL_RARENESS_ID = "specialHeroOfRarenessID";
__s0local99.HERO_DROP_CHANCE = "heroDropChance";
__s0local99.EFFECT = "effect";
__s0local99.SLOT_ID = "slotID";
__s0local99.SLOT_IDS = "slotIDs";
__s0local99.BONUS = "bonus";
__s0local99.SINGLE_BONUS = "singleBonus";
__s0local99.DROPRATE = "dropRate";
__s0local99.DROP_CHANCE = "dropChance";
__s0local99.LEVEL_FACTOR = "levelFactor";
__s0local99.EFFECT_ID = "effectID";
__s0local99.STRENGTH_ID = "strengthID";
__s0local99.WEARER_ID = "wearerID";
__s0local99.RARENESS_ID = "rarenessID";
__s0local99.SECONDARY_ATTRIBUTES = "secondaryAttributes";
__s0local99.SALE_VALUE = "saleValue";
__s0local99.EQ_IDS = "equipmentIDs";
__s0local99.ENCHANTED_EQ_IDS = "enchantedEquipmentIDs";
__s0local99.EQ_ID = "equipmentID";
__s0local99.ENCHANTED_EQ_ID = "enchantedEquipmentID";
__s0local99.EFFECTS = "effects";
__s0local99.PRIMARY = "primary";
__s0local99.APPEARANCE_COUNT = "appearanceCount";
__s0local99.SET_ID = "setID";
__s0local99.NEEDED_ITEMS = "neededItems";
__s0local99.EFFECT_BONUS_LIMIT = "maxTotalBonus";
__s0local99.PICTURE_ID = "picID";
__s0local99.ENCHANT_PRIMARY_BONUS = "enchantmentPrimaryBonus";
__s0local99.ENCHANT_SECONDARY_BONUS = "enchantmentSecondaryBonus";
__s0local99.ITEM_GROUP_ID = "itemGroupID";
__s0local99.EXCLUDE_EFFECT = "excludedMali";
__s0local99.AREA_TYPE_ID = "areaTypeID";
__s0local99.DROP_ID = "dropID";
__s0local99.EFFECT_TYPE_ID = "effectTypeID";
__s0local99.IGNORE_CAP = "ignoreCap";
__s0local99.EQUIPMENT_EFFECT_ID = "equipmentEffectID";
__s0local99.CAN_SLOT_GEM = "canSlotGem";
__s0local99.SELL_PRICE_OVERRIDE = "sellPriceOverride";
__s0local99.SPECIAL_LORDS = "lord";
__s0local99.LORD_ID = "lordID";
__s0local99.EQUIPMENT_DUNGEON_LEVEL = "equipmentDungeonLevel";
__s0local99.EQUIPMENT_AMOUNT = "equipmentAmount";
__s0local99.SPECIAL_EQUIPMENT_OF_RARENESS_ID = "specialEquipmentOfRarenessID";
__s0local99.EQUIPMENT_IDS = "equipmentIDs";
__s0local99.SHADOW_LORD_MIN_LEVEL = "minLevel";
__s0local99.SHADOW_LORD_MAX_LEVEL = "maxLevel";
__s0local99.REWARD = "reward";
__s0local99.DECO_WOD_ID = "decoWodID";
__s0local99.IGNORE_VIP_POINT_CAP = "ignoreVipPointCap";
__s0local99.EXTINGUISH_FIRE = "extinguishFire";
__s0local99.ALLIANCE_GIFT = "allianceGift";
__s0local99.GIFT_PACKAGE_IDS = "giftPackageIDs";
__s0local99.IGNORE_GIFT_CAP = "ignoreGiftCapacity";
__s0local99.GLORY_BOOSTER = "gloryBooster";
__s0local99.PERSONAL_GLORY_BOOSTER = "personalGloryBooster";
__s0local99.GLORY_BOOSTER_DURATION = "gloryBoosterDuration";
__s0local99.KHAN_TABLET_BOOSTER = "khanTabletBooster";
__s0local99.KHAN_BOOSTER_DURATION = "khanBoosterDuration";
__s0local99.XP_BOOSTER = "xpBooster";
__s0local99.XP_BOOSTER_BUILDING = "xpBoosterBuilding";
__s0local99.XP_BOOSTER_DURATION = "xpBoosterDuration";
__s0local99.KHAN_MEDAL_BOOSTER = "khanMedalBooster";
__s0local99.RAGE_POINT_BOOSTER = "ragePointBooster";
__s0local99.REPUTATION_POINT_BOOSTER = "reputationPointBooster";
__s0local99.GALLANTRY_POINT_BOOSTER = "gallantryPointBooster";
__s0local99.SAMURAI_TOKENS_BOOSTER = "samuraiTokenBooster";
__s0local99.CARAVAN_OVERLOADER_BOOSTER = "caravanOverloaderBooster";
__s0local99.INSTRUCTOR_BOOSTER = "instructorBooster";
__s0local99.TAX_COLLECTOR_BOOSTER = "taxCollectorBooster";
__s0local99.MARAUDER_BOOSTER = "maraduerBooster";
__s0local99.RETURNING_SPEED_BOOSTER = "returningSpeedBooster";
__s0local99.RANDOM_GROUP = "randomgroup";
__s0local99.RANDOM_GROUP_TYPE = "groupType";
__s0local99.RANDOM_GROUP_ENTRY_ID = "randomGroupEntryID";
__s0local99.PROBABILITY = "probability";
__s0local99.AMOUNT = "amount";
__s0local99.PAYMENTREWARD = "paymentreward";
__s0local99.PAYMENTREWARD_ID = "paymentrewardID";
__s0local99.LIFETIME_SPENT_C2_MIN = "c2LifetimeSpentMin";
__s0local99.LIFETIME_SPENT_C2_MAX = "c2LifetimeSpentMax";
__s0local99.C2_PURCHASED_90DAYS_MIN = "C290daysMin";
__s0local99.C2_PURCHASED_90DAYS_MAX = "C290daysMax";
__s0local99.BOOSTERS = "boosters";
__s0local99.ABTEST_GROUP_COUNT = "abGoupCount";
__s0local99.ABTEST_GROUP_IDS = "abGroupIDs";
__s0local99.REWARDS = "rewards";
__s0local99.SLOTS = "slots";
__s0local99.RANDOM_GROUP_KEY = "RG";
__s0local99.DEFAULT_SKIN_ID = "skinID";
__s0local99.DAYS_SINCE_LAST_PAYMENT_MIN = "daysSinceLastPaymentMin";
__s0local99.DAYS_SINCE_LAST_PAYMENT_MAX = "daysSinceLastPaymentMax";
__s0local99.PAYMENTREWARD_IDS = "paymentRewardIDs";
__s0local99.PRIMEDAY = "primeDay";
__s0local99.PRIMEDAY_ID = "primeDayID";
__s0local99.C2_STOCK_MIN = "currentC2StockMin";
__s0local99.C2_STOCK_MAX = "currentC2StockMax";
__s0local99.PAYMENTS_LAST14_DAYS_MIN = "paymentsLast14DaysMin";
__s0local99.PAYMENTS_LAST14_DAYS_MAX = "paymentsLast14DaysMax";
__s0local99.ACTIVITY_CHEST = "activityreward";
__s0local99.ACTIVITY_CHEST_ID = "activityRewardID";
__s0local99.REWARD_ID = "rewardID";
__s0local99.WAITING_TIME = "waitingTime";
__s0local99.BEGINNER_LOGIN_REWARD_ID = "beginnerLoginRewardID";
__s0local99.JUDGEMENT_CITIZEN_EVENT = "judgement";
__s0local99.JUDGEMENT_CITIZEN_ID = "judgementID";
__s0local99.CONDTYP_A = "conditionTypeA";
__s0local99.CONDTYP_B = "conditionTypeB";
__s0local99.REWARDTYP_A = "rewardTypeA";
__s0local99.REWARDTYP_B = "rewardTypeB";
__s0local99.DAILY_REWARD = "dailyreward";
__s0local99.DAILY_REWARD_ID = "dailyRewardID";
__s0local99.REWARD_POINTS = "rewardPoints";
__s0local99.UNITS_A = "unitA";
__s0local99.UNITS_B = "unitB";
__s0local99.UNITS_C = "unitC";
__s0local99.DAILY_QUEST_ID = "dailyQuestID";
__s0local99.LEVEL_CALCULATED = "levelCalculated";
__s0local99.EQUIPMENT = "equipment";
__s0local99.REWARD_IDS = "rewardIDs";
__s0local99.DURATION = "duration";
__s0local99.REPUTATION = "reputation";
__s0local99.SLUM = "slum";
__s0local99.SLUM_ID = "slumID";
__s0local99.SLUM_LEVEL = "slumLevel";
__s0local99.WINNER_REWARD_IDS = "winnerRewardIDs";
__s0local99.TOP_X_REWARD_IDS = "topXRewardIDs";
__s0local99.BOOBY_REWARD_IDS = "boobyRewardIDs";
__s0local99.FAMERANK = "famerank";
__s0local99.MIGHT_RANK = "mightrank";
__s0local99.FAME_ID = "fameID";
__s0local99.MIGHT_ID = "mightID";
__s0local99.ATTACK_BOOST = "attackBoost";
__s0local99.ATTACK_BOOST_PVP = "pvpAttackBoost";
__s0local99.MOVEMENT_BOOST = "movementBoost";
__s0local99.PVP_COIN_BOOST = "pvpCoinBoost";
__s0local99.ALLIANCEFAMERANK = "alliancefamerank";
__s0local99.BEGINNER_LOGINREWARD = "beginner_loginreward";
__s0local99.PACKAGE = "package";
__s0local99.VALID_KINGDOMS = "validKingdoms";
__s0local99.IS_NOT_REBUYABLE = "notRebuyable";
__s0local99.SPECIAL_EQUIPMENT_WITH_SLOT_ID = "specialEquipmentWithSlotID";
__s0local99.EQUIPMENTDROPCHANCE = "equipmentDropChance";
__s0local99.LUCKYWHEEL_TICKETS = "luckyWheelTickets";
__s0local99.NOMAD_CAMP = "nomadCamp";
__s0local99.COUNT_VICTORY = "countVictory";
__s0local99.MIN_SIGHT_LEVEL = "minSightLevel";
__s0local99.MAX_SIGHT_LEVEL = "maxSightLevel";
__s0local99.SAMURAI_CAMP = "samuraiCamp";
__s0local99.FACTION_INVASION_CAMP = "factioninvasioncamp";
__s0local99.FACTION_INVASION_CAMP_ID = "factionInvasionCampID";
__s0local99.MINE_TYPE = "mineType";
__s0local99.MINE_TYPE_ID = "mineTypeID";
__s0local99.AMOUNT_LOOTABLE = "amountLootable";
__s0local99.AMOUNT_PER_COLLECT_C1 = "amountPerCollectC1";
__s0local99.AMOUNT_PER_COLLECT_C2 = "amountPerCollectC2";
__s0local99.AMOUNT_INFLUENCE_PER_MINUTE = "amountInfluencePerMinute";
__s0local99.MAX_INFLUENCE_POINTS = "maxInfluencePoints";
__s0local99.EMPTY_AREA = "emptyArea";
__s0local99.AREA_TYPE = "areaType";
__s0local99.STARTING_FOOD = "startingFood";
__s0local99.EXPANSION = "expansion";
__s0local99.EXPANSION_ID = "expansionID";
__s0local99.SPACE_IDS = "spaceIDs";
__s0local99.EXPANSION_LEVEL = "expansionLevel";
__s0local99.CONSTRUCTIONSLOTCOUNT = "constructionSlotCount";
__s0local99.LOW_LEVEL_MAINCASTLE_COSTC2 = "lowLevelMainCastleCostC2";
__s0local99.MIN_SCORE_FOR_BOOBY = "minScoreForBooby";
__s0local99.POINT_EVENT_QUEST = "pointeventquest";
__s0local99.POINT_EVENT_TYPE = "pointeventtype";
__s0local99.POINT_EVENT_REWARD_SET = "pointeventrewardset";
__s0local99.POINT_EVENT_QUESTS_ID = "pointEventQuestIDs";
__s0local99.POINT_EVENT_QUEST_ID = "pointEventQuestID";
__s0local99.POINT_EVENT_TYPE_ID = "pointEventTypeID";
__s0local99.THRESHOLD_NAME = "neededPointsForReward";
__s0local99.THRESHOLDS = "neededPointsForRewards";
__s0local99.INCREMENTAL = "incremental";
__s0local99.POINTS_FOR_CONDITION = "pointsPerTier";
__s0local99.NEXT_ACTIVITY_REWARD_ID = "nextActivityRewardID";
__s0local99.REWARD_THRESHOLDS = "rewardThresholds";
__s0local99.THRESHOLD_REWARD_IDS = "thresholdRewardIDs";
__s0local99.REWARD_RANKS = "rewardRanks";
__s0local99.RANK_REWARD_IDS = "rankRewardIDs";
__s0local99.LONGTERM_POINT_EVENT_QUEST = "longtermpointeventquest";
__s0local99.SUB_EVENT_ID = "subEventID";
__s0local99.LONGTERM_POINT_EVENT_LEAGUE = "leaguetypelongtermpointevent";
__s0local99.LONGTERM_POINT_EVENT_LEAGUE_TYPE = "leaguetypeLongtermpointEventsID";
__s0local99.DIFFICULTY_IDS_MAX_POINTS = "difficultyIDforMaxPoints";
__s0local99.DIFFICULTY_MAX_POINTS = "difficultyMaxPoints";
__s0local99.DIFFICULTY_THRESHOLDS = "difficultyScalingNeededPointsForRewards";
__s0local99.DIFFICULTY_REWARDS_IDS = "difficultyScalingRewardIDs";
__s0local99.BOOSTER = "booster";
__s0local99.TOOLS = "tools";
__s0local99.ITEM_RARENESS = "equipmentRarenessID";
__s0local99.C1_MYSTERY = "c1";
__s0local99.C2_MYSTERY = "c2";
__s0local99.REWARD_CHOICE_MYSTERY = "choice";
__s0local99.REWARD_VIP_MYSTERY = "vip";
__s0local99.REWARD_ALLIANCE_MYSTERY = "alliance";
__s0local99.DAY = "day";
__s0local99.LEVEL_BRACKET = "levelBracket";
__s0local99.REWARD_STEP = "rewardStep";
__s0local99.VIP_POINTS = "vipPoints";
__s0local99.VIP_TIME = "vipTime";
__s0local99.VIP_LEVEL = "viplevel";
__s0local99.VIP_LEVEL_ID = "vipLevelID";
__s0local99.THRESHOLD_MIN = "thresholdMin";
__s0local99.THRESHOLD_MAX = "thresholdMax";
__s0local99.WOOD_BOOSTS = "woodBoosts";
__s0local99.STONE_BOOSTS = "stoneBoosts";
__s0local99.FOOD_BOOSTS = "foodBoosts";
__s0local99.BONUS_LOGIN_KEYS = "bonusLoginKeys";
__s0local99.ATTACK_SPEED_BOOST = "attackSpeedBoost";
__s0local99.ATTACK_FAME_BOOST = "attackFameBoost";
__s0local99.PRODUCTION_BONUS_SLOTS = "productionBonusSlots";
__s0local99.RECRUITMENT_BONUS_SLOTS = "recruitmentBonusSlots";
__s0local99.FREE_PREMIUM_GENERALS_PER_DAY = "freePremiumGeneralsPerDay";
__s0local99.TAX_COLLECTOR_NO_RUBIES_12 = "taxCollectorNoRubies12";
__s0local99.TAX_COLLECTOR_NO_RUBIES_24 = "taxCollectorNoRubies24";
__s0local99.MOVABLE = "movable";
__s0local99.FORCED_POSITION = "forcedPosition";
__s0local99.EXPANSION_REWARD_POSITION = "ExpansionRewardPosition";
__s0local99.LEAGUE_TYPE_EVENT_ID = "leaguetypeEventsID";
__s0local99.RESSOURCE_FACTORS = "ressourceFactors";
__s0local99.TOPXVALUE = "topXValue";
__s0local99.LEAGUETYPEEVENT = "leaguetypeevent";
__s0local99.LEAGUE_TYPE_TOPX = "leaguetypeTopXSize";
__s0local99.HARD_MODE_START = "hardModeStart";
__s0local99.ALLIANCEHELPREQUEST = "alliancehelprequest";
__s0local99.ALLIANCEHELPREQUEST_ID = "allianceHelpRequestID";
__s0local99.ALLIANCEHELPREQUEST_MAX_HELPERS_COUNT = "maxHelpersCount";
__s0local99.ALLIANCEHELPREQUEST_UNIT_COUNT_BONUS = "unitCountBonus";
__s0local99.ALLIANCEHELPREQUEST_UNIT_HEAL_TIME_REDUCTION = "unitHealTimeReduction";
__s0local99.ALLIANCEHELPREQUEST_DECREASE_BUILDING_TIME = "decreaseBuildingTimeAbsolute";
__s0local99.ISLE = "isle";
__s0local99.ISLE_ID = "IsleID";
__s0local99.FIXED_LOOT_WOOD = "fixedLootWood";
__s0local99.FIXED_LOOT_STONE = "fixedLootStone";
__s0local99.FIXED_LOOT_AQUAMARINE = "fixedLootAquamarine";
__s0local99.GLOBAL_COOLDOWN = "globalCooldown";
__s0local99.LOCAL_COOLDOWN = "localCooldown";
__s0local99.OCCUPATION_TIME = "occupationTime";
__s0local99.MAX_COUNT_VICTORIES = "maxCountVictories";
__s0local99.LOOT_AQUAMARINE = "lootAquamarine";
__s0local99.AQUA_POINTS = "islandAlliancePoints";
__s0local99.MAX_DIFF_LOOT_AQUAMARINE = "maxDiffLootAquamarine";
__s0local99.MAX_DIFF_LOOT_RESOURCES = "maxDiffLootResources";
__s0local99.ISLAND_REWARD_RANK = "islandrewardrank";
__s0local99.ISLAND_REWARD_SET_ID = "islandRewardSetID";
__s0local99.ISLAND_REWARD_RANK_ID = "islandRewardRankID";
__s0local99.ISLAND_REWARD_CARGO_POINTS = "cargoPointRequirement";
__s0local99.LOOT_CARGO_POINTS = "lootCargoPoints";
__s0local99.MAX_DIFF_LOOT_CARGO_POINTS = "maxDiffLootCargoPoints";
__s0local99.ISLAND_PLAYER_REWARD = "islandPlayerReward";
__s0local99.ISLAND_PLAYER_REWARD_ID = "islandPlayerRewardID";
__s0local99.TITLE = "title";
__s0local99.TITLE_ID = "titleID";
__s0local99.TITLE_IS_POSITIVE = "isPositive";
__s0local99.TITLE_IS_KING = "isKing";
__s0local99.TITLE_FOOD_PRODUCTION_BOOST = "foodProductionBoost";
__s0local99.TITLE_ATTACK_BONUS = "attackBonus";
__s0local99.TITLE_RECRUITMENT_SPEED_BOOST = "recruitmentSpeedBoost";
__s0local99.TITLE_SPY_COUNT_BOOST = "spyCountBoost";
__s0local99.TITLE_TRAVEL_BOOST = "travelBoost";
__s0local99.TITLE_RECRUITMENT_COSTS = "recruitmentCosts";
__s0local99.TITLE_PUBLIC_ORDER_POINTS = "publicOrderPoints";
__s0local99.TITLE_FAME_AND_LOOT_ENEMY_BOOST = "fameAndLootEnemyBoost";
__s0local99.ALLIANCEBUFFS = "alliancebuff";
__s0local99.ALLIANCEBUFF_ID = "allianceBuffID";
__s0local99.ALLIANCEBUFF_SERIES_ID = "allianceBuffSeriesID";
__s0local99.ALLIANCEBUFF_LEVEL = "level";
__s0local99.ALLIANCEBUFF_MAXLEVEL = "maxLevel";
__s0local99.ALLIANCEBUFF_MEMBERCOUNT = "memberCount";
__s0local99.ALLIANCEBUFF_COST_WOOD = "costWood";
__s0local99.ALLIANCEBUFF_COST_STONE = "costStone";
__s0local99.ALLIANCEBUFF_COST_C1 = "costC1";
__s0local99.ALLIANCEBUFF_COST_C2 = "costC2";
__s0local99.ALLIANCEBUFF_COST_COAL = "costCoal";
__s0local99.ALLIANCEBUFF_COST_GLASS = "costGlass";
__s0local99.ALLIANCEBUFF_COST_OIL = "costOil";
__s0local99.ALLIANCEBUFF_COST_IRON = "costIron";
__s0local99.ALLIANCEBUFF_ALLIANCE_TRAVEL_SUPPORT_BOOST = "allianceTravelSupportBoost";
__s0local99.ALLIANCEBUFF_ALLIANCE_TRAVEL_MARKET_BOOST = "allianceTravelMarketBoost";
__s0local99.ALLIANCEBUFF_ALLIANCE_RESOURCE_DEPOSIT_BOOST = "resourceDepositBoost";
__s0local99.ALLIANCEBUFF_WAR_LOOT_BOOST = "warLootBoost";
__s0local99.ALLIANCEBUFF_TRAVEL_WAR_ATTACK_BOOST = "travelWarAttackBoost";
__s0local99.ALLIANCEBUFF_RARE_CHANCE = "rareChance";
__s0local99.ALLIANCEBUFF_EPIC_CHANCE = "epicChance";
__s0local99.ALLIANCEBUFF_LEGENDARY_CHANCE = "legendaryChance";
__s0local99.ALLIANCEBUFF_FORGING_COST_C1 = "forgingCostC1";
__s0local99.ALLIANCEBUFF_GEM_1_CHANCE = "gem1Chance";
__s0local99.ALLIANCEBUFF_GEM_2_CHANCE = "gem2Chance";
__s0local99.ALLIANCEBUFF_GEM_3_CHANCE = "gem3Chance";
__s0local99.ALLIANCEBUFF_GEM_4_CHANCE = "gem4Chance";
__s0local99.ALLIANCEBUFF_GEM_5_CHANCE = "gem5Chance";
__s0local99.ALLIANCEBUFF_GLORY_BOOST_ATTACK = "allianceFameBoost";
__s0local99.ALLIANCEBUFF_ATTACK_STRENGTH_BOOST = "allianceAttackBoost";
__s0local99.ALLIANCEBUFF_DEFENSE_STRENGTH_BOOST = "allianceDefenseBoost";
__s0local99.ALLIANCEBUFF_DURATION = "duration";
__s0local99.ALLIANCEBUFF_REQUIRED_MEMBER_BUFF_LEVEL = "requiredMemberBuffLevel";
__s0local99.ALLIANCEBUFF_REQUIRED_MIGHT_POINTS = "requiredMightPoints";
__s0local99.ALLIANCEBUFF_REQUIRED_RANK_ID = "requiredRankID";
__s0local99.ALLIANCEBUFF_ALLIANCE_FAME = "requiredAllianceFame";
__s0local99.ALLIANCEBUFF_IS_DEFAULT_LEVEL = "isDefaultLevel";
__s0local99.ALLIANCE_BUFF_REQUIRED_BUFF_ID = "requiredBuffID";
__s0local99.ALLIANCE_BUFF_RESET_ON_EVENT_END = "resetOnEventEnd";
__s0local99.ALLIANCEBUFF_IS_UPGRADEABLE = "isUpgradeable";
__s0local99.ALLIANCEBUFF_IS_TEMPORARY = "isTemporary";
__s0local99.ALLIANCE_FORGE = "allianceForge";
__s0local99.ALLIANCE_FORGE_ID = "allianceForgeID";
__s0local99.ALLIANCE_FORGE_FORGING_COST_C1 = "forgingCostC1";
__s0local99.ALLIANCE_FORGE_LEVEL = "level";
__s0local99.LUCKYWHEEL_CLASSES = "luckywheelclass";
__s0local99.LUCKYWHEEL_CLASSES_ID = "luckyWheelClassID";
__s0local99.LUCKYWHEEL_CLASSES_SPINS = "neededSpinsForNextClass";
__s0local99.LUCKYWHEEL_JACKPOT_SETS = "luckywheelrewardset";
__s0local99.LUCKYWHEEL_JACKPOT_SET_ID = "luckyWheelRewardSetID";
__s0local99.LUCKYWHEEL_ACTIVITY_REWARD_THRESHOLD = "activityRewardThreshold";
__s0local99.LUCKYWHEEL_C2_PER_SKIPPED_SPIN = "C2PerSkippedSpin";
__s0local99.LUCKYWHEEL_SD_CLASSES = "saleDaysLuckyWheelClass";
__s0local99.LUCKYWHEEL_SALE_DAYS_CLASSES = "saleDaysLuckyWheelClass";
__s0local99.LUCKYWHEEL_SALE_DAYS_CLASSES_ID = "saleDaysLuckyWheelClassID";
__s0local99.LUCKYWHEEL_SALE_DAYS_JACKPOT_SETS = "saleDaysLuckyWheelRewardSet";
__s0local99.LUCKYWHEEL_SALE_DAYS_JACKPOT_SET_ID = "saleDaysLuckyWheelRewardSetID";
__s0local99.LUCKYWHEEL_CATEGORY_SELECTION_SALE_DAYS = "saleDaysLuckyWheelInitialCategorySelection";
__s0local99.CHANCE = "chance";
__s0local99.CATEGORY = "category";
__s0local99.GEM = "gem";
__s0local99.GEM_ID = "gemID";
__s0local99.GEM_FOLLOWING_GEM_ID = "followingGemID";
__s0local99.GEM_LEVEL_ID = "gemLevelID";
__s0local99.GEM_COLOR_ID = "gemColorID";
__s0local99.GEM_EFFECT_TYPE = "effectType";
__s0local99.GEM_EFFECT_VALUE = "effectValue";
__s0local99.GEM_TRIGGER_CHANCE = "triggerChance";
__s0local99.GEM_LEVEL = "gemlevel";
__s0local99.GEM_CRAFT_SUCCESS_CHANCE = "craftSuccessChance";
__s0local99.GEM_CRAFT_COST_C1 = "craftCostC1";
__s0local99.GEM_CRAFT_COST_C2 = "craftCostC2";
__s0local99.GEM_INSERT_COST_C1 = "insertCostC1";
__s0local99.GEM_SALE_VALUE = "saleValue";
__s0local99.GEM_AMOUNT = "gemAmount";
__s0local99.GEM_IDS = "gemIDs";
__s0local99.GEM_LEVEL_IDS = "gemLevelIDs";
__s0local99.GEM_SPECIAL_LEVEL_ID = "specialGemOfLevelID";
__s0local99.GEM_DROP_CHANCE = "gemDropChance";
__s0local99.GEM_REMOVAL_COST_C2 = "removalCostC2";
__s0local99.CREST_SYMBOL = "crestsymbol";
__s0local99.CREST_SYMBOL_ID = "crestSymbolID";
__s0local99.SPECIAL_EVENT_DONT_SEND_TO_CLIEN = "invisible";
__s0local99.SPECIAL_EVENT_ONLY_PAY_USER = "onlyPayUser";
__s0local99.SPECIAL_EVENT_ONLY_ALLIANCE_MEMBER = "onlyAllianceMember";
__s0local99.FOR_PAYUSER = "playerIsPayuser";
__s0local99.GRANT_TYPE = "grantType";
__s0local99.REWARD_DECO_TO_GLOBAL_STORAGE = "toDecoGlobalStorage";
__s0local99.REWARD_TO_KINGDOM_CASTLE = "sendToKingdomCastle";
__s0local99.POTIONABLE = "potionable";
__s0local99.FEAST = "feast";
__s0local99.FEAST_ID = "feastID";
__s0local99.PRODUCTION_BOOST = "productionBoost";
__s0local99.MONUMENT = "monument";
__s0local99.REQUIRED_POINTS = "requiredPoints";
__s0local99.AB_TEST_GROUP_IDS = "ABTestGroupIDs";
__s0local99.AB_TEST_AUTO_ASSIGN = "autoAssignABTest";
__s0local99.AB_TEST_PARAM = "ABTestParam";
__s0local99.SUCCEED_ON_WRONG_CASE_ID = "succeedOnWrongCaseID";
__s0local99.LEVEL_UP = "levelup";
__s0local99.REQUIRED_LEGEND_LEVEL = "requiredLegendLevel";
__s0local99.IS_LEGEND = "isLegend";
__s0local99.MIN_LEGEND_LEVEL = "minLegendLevel";
__s0local99.MAX_LEGEND_LEVEL = "maxLegendLevel";
__s0local99.LEGEND_SKILL = "legendskill";
__s0local99.SCEAT_SKILL_TREE = "sceatSkillTree";
__s0local99.SCEAT_SKILL_TIER = "sceatSkillTier";
__s0local99.SCEAT_SKILL = "sceatSkill";
__s0local99.SKILL_ID = "skillID";
__s0local99.REQUIRED_SKILL_ID = "requiredSkillID";
__s0local99.PREVIOUS_SKILL_ID = "previousSkillID";
__s0local99.REQUIRED_SKILL_IDS = "requiredSkillIDs";
__s0local99.FOLLOWING_SKILL_ID = "followingSkillID";
__s0local99.SKILL_TREE_ID = "skillTreeID";
__s0local99.SKILL_TIER = "tier";
__s0local99.LEGEND_SKILL_COSTS = "costSkillPoints";
__s0local99.LEGEND_SKILL_EFFECT_TYPE = "effectType";
__s0local99.LEGEND_SKILL_EFFECT_VALUE = "effectValue";
__s0local99.LEGEND_TOTAL_SKILL_EFFECT_VALUE = "totalEffectValue";
__s0local99.LEGEND_TOTAL_SKILL_COSTS = "totalCostSkillPoints";
__s0local99.LEGEND_SKILL_POINTS = "skillPoints";
__s0local99.LEGEND_SKILL_SPECIAL_TYPE = "specialType";
__s0local99.SKILL_TIER_ID = "tierID";
__s0local99.ACTIVATION_TIME = "activationTime";
__s0local99.SCEAT_SKILL_CATEGORY = "tabID";
__s0local99.EFFECT_LOCKED = "effectLocked";
__s0local99.SCEAT_SKILL_LOCKED = "sceatSkillLocked";
__s0local99.SKILL_GROUP_ID = "skillGroupID";
__s0local99.REQUIRE_PREVIOUS_TIER_UNLOCKED = "requirePreviousTierUnlocked";
__s0local99.BUILDING = "building";
__s0local99.BUILDING_ID = "buildingID";
__s0local99.BUILDING_AMOUNT = "buildingAmount";
__s0local99.UNIT = "unit";
__s0local99.UNIT_ID = "unitID";
__s0local99.UNIT_AMOUNT = "unitAmount";
__s0local99.HORSE = "horse";
__s0local99.BUILDING_POSITION = "buildingPosition";
__s0local99.BUILDING_POSITION_ID = "buildingPositionID";
__s0local99.BUILDING_WOD_ID = "buildingWodID";
__s0local99.X = "x";
__s0local99.Y = "y";
__s0local99.ROTATION = "rotation";
__s0local99.PRE_BUILT_CASTLE_ID = "preBuiltCastleID";
__s0local99.SPACE_ID = "spaceID";
__s0local99.IS_MAIN_CASTLE_COPY = "isMainCastleCopy";
__s0local99.MIGHT_VALUE = "mightValue";
__s0local99.MINUTE_SKIP_1 = "minuteSkip1";
__s0local99.MINUTE_SKIP_2 = "minuteSkip2";
__s0local99.MINUTE_SKIP_3 = "minuteSkip3";
__s0local99.MINUTE_SKIP_4 = "minuteSkip4";
__s0local99.MINUTE_SKIP_5 = "minuteSkip5";
__s0local99.MINUTE_SKIP_6 = "minuteSkip6";
__s0local99.MINUTE_SKIP_7 = "minuteSkip7";
__s0local99.IGNORE_MINUTE_SKIP_CAPACITY = "ignoreMinuteSkipCapacity";
__s0local99.LABORATORY = "laboratory";
__s0local99.IRON_ALLIANCE_BOOST = "ironAllianceBoost";
__s0local99.GLASS_ALLIANCE_BOOST = "glassAllianceBoost";
__s0local99.CHARCOAL_ALLIANCE_BOOST = "charcoalAllianceBoost";
__s0local99.OLIVE_OIL_ALLIANCE_BOOST = "oliveOilAllianceBoost";
__s0local99.AB_TEST = "abTest";
__s0local99.DAILY_ACTIVITIES = "dailyActivities";
__s0local99.IS_DEFAULT_QUEST = "isDefaultQuest";
__s0local99.NEEDS_ALLIANCE = "needsAlliance";
__s0local99.IS_TEMP_SERVER_QUEST = "isTempServerQuest";
__s0local99.LEVEL_BRACKET_NODE = "levelbracket";
__s0local99.BASIC_LEVEL_BRACKET_ID = "bracketID";
__s0local99.LEVEL_BRACKET_MIN_LEVEL = "minLevel";
__s0local99.LEVEL_BRACKET_MAX_LEVEL = "maxLevel";
__s0local99.EVENT_ANNOUNCEMENT_ID = "eventAnnouncementID";
__s0local99.EVENT_ANNOUNCEMENT_REWARD_ID = "messageRewardID";
__s0local99.EVENT_ANNOUNCEMENT = "eventannouncement";
__s0local99.TUTORIAL = "tutorial";
__s0local99.TUTORIAL_STEP_ID = "tutorialStepID";
__s0local99.CHAPTER = "chapter";
__s0local99.CHAPTER_STEP = "chapterStep";
__s0local99.ALLIANCE_RIGHTS = "alliancerankright";
__s0local99.RIGHT_ID = "rankRightID";
__s0local99.NEEDED_ALLIANCE_RANK = "neededMemberRank";
__s0local99.ALLIANCE_RANKS = "alliancerank";
__s0local99.RANK_ID = "rankID";
__s0local99.RERANK_RIGHT = "rerankRight";
__s0local99.MISSION_REWARD = "mercenary";
__s0local99.MISSION_PROPERTY = "missionProperty";
__s0local99.MISSION_ID = "missionID";
__s0local99.UNIT_SLOT = "unitSlot";
__s0local99.TOOL_SLOT = "toolSlot";
__s0local99.IS_AUXILIARY = "isAuxiliary";
__s0local99.STACK_SIZE = "stackSize";
__s0local99.AUXILIARY_CAPACITY = "auxiliaryCapacity";
__s0local99.PRE_BUILT_CASTLE = "prebuiltcastle";
__s0local99.EVENT_SKIN = "eventSkin";
__s0local99.EVENT_SKIN_ID = "eventSkinID";
__s0local99.FORCED = "forced";
__s0local99.POINT_LOSS = "decay";
__s0local99.TITLE_EFFECT_ID = "titleEffectID";
__s0local99.TITLE_VALUE = "value";
__s0local99.DISPLAY_TYPE = "displayType";
__s0local99.PREVIOUS_TITLE_ID = "previousTitleID";
__s0local99.TITLE_EFFECTS = "titleEffect";
__s0local99.QUEST_PROGRESS = "questProgress";
__s0local99.GRANT_TITLE = "grantTitle";
__s0local99.LEVEL_BOOSTER = "levelBooster";
__s0local99.BOOSTER_ID = "boosterID";
__s0local99.BOOSTER_LEVEL = "level";
__s0local99.BOOST_PERCENTAGE = "boostPercentage";
__s0local99.BOOSTER_TYPE = "boosterType";
__s0local99.LONGTERM_POINT_EVENT_BOOSTER = "longTermPointEventBooster";
__s0local99.CONSTRUCTION_ITEM = "constructionItem";
__s0local99.CONSTRUCTION_ITEM_ID = "constructionItemID";
__s0local99.CONSTRUCTION_ITEM_GROUP_ID = "constructionItemGroupID";
__s0local99.CONSTRUCTION_ITEM_EFFECT_GROUP_ID = "constructionItemEffectGroupID";
__s0local99.CONSTRUCTION_ITEM_EFFECT_GROUP = "constructionItemsEffectGroup";
__s0local99.CONSTRUCTION_ITEM_AREA_LIMIT = "areaLimit";
__s0local99.CONSTRUCTION_ITEM_OWNER_GLOBAL_EFFECT = "ownerGlobalEffect";
__s0local99.CONSTRUCTION_ITEM_RECIPE = "constructionItemRecipe";
__s0local99.CONSTRUCTION_ITEM_RECIPE_ID = "constructionItemRecipeID";
__s0local99.DEFAULT_UNLOCKED = "defaultUnlocked";
__s0local99.CONSTRUCTION_ITEM_IDS = "constructionItemIDs";
__s0local99.CONSTRUCTION_ITEM_AMOUNT = "constructionItemAmount";
__s0local99.SLOT_TYPE_ID = "slotTypeID";
__s0local99.REMOVAL_COST_C1 = "removalCostC1";
__s0local99.XP_BOOST_PERCENTAGE = "xpBoostPercentage";
__s0local99.LOCK_REMOVAL = "lockRemoval";
__s0local99.BOOST_CONSUMABLE = "boostConsumable";
__s0local99.PROPERTY = "property";
__s0local99.PROPERTY_ID = "propertyID";
__s0local99.VALUE = "value";
__s0local99.META_TYPE = "metaType";
__s0local99.PRIME_TIME = "primeTime";
__s0local99.PAYMENT_META_DATA_PRIVATE = "private";
__s0local99.PLAYER_RELATION = "playerRelation";
__s0local99.PLAYER_RELATION_NOT_SET = "";
__s0local99.PLAYER_RELATION_NONE = "none";
__s0local99.PLAYER_RELATION_SAME_PLAYER = "samePlayer";
__s0local99.PLAYER_RELATION_SAME_ALLIANCE = "sameAlliance";
__s0local99.PLAYER_RELATION_ALLIANCE_WAR = "allianceInWar";
__s0local99.PLAYER_RELATION_ALLIANCE_FRIENDLY = "allianceFriendly";
__s0local99.CLIENT_ONLY = "clientOnly";
__s0local99.SHOPPING_CART = "shoppingCart";
__s0local99.CART_OPTION_ID = "cartOptionID";
__s0local99.TYPE_ID = "typeID";
__s0local99.GROUP_ID = "groupID";
__s0local99.AMOUNT_BUYABLE = "amountBuyable";
__s0local99.UNBOOSTED_WOOD_PRODUCTION = "unboostedWoodProduction";
__s0local99.UNBOOSTED_STONE_PRODUCTION = "unboostedStoneProduction";
__s0local99.UNBOOSTED_FOOD_PRODUCTION = "unboostedFoodProduction";
__s0local99.LEVEL_UP_PRICE = "levelUpPrice";
__s0local99.LEVEL_UP_PRICE_ID = "levelUpPriceID";
__s0local99.FROM_LEVEL = "fromLevel";
__s0local99.TO_LEVEL = "toLevel";
__s0local99.CURRENCY2_COST = "c2Cost";
__s0local99.AUTO_RECRUITMENT_PRICE = "autoRecruitmentPrice";
__s0local99.AUTO_RECRUITMENT_PRICE_ID = "autoRecruitmentPriceID";
__s0local99.LOOP = "loop";
__s0local99.TYPE_AUXILIARY = "auxiliaries";
__s0local99.TYPE_SOLDIER = "soldiers";
__s0local99.TYPE_TOOL = "tools";
__s0local99.CRAFTING_MATERIAL = "craftingMaterial";
__s0local99.MATERIAL_ID = "materialID";
__s0local99.MATERIAL_NAME = "materialName";
__s0local99.DECONSTRUCT_MATERIAL_NAME = "deconstructMaterialName";
__s0local99.NEEDED_CONSTRUCTION_ITEM_ID = "neededConstructionItemID";
__s0local99.MATERIAL_BAG = "rewardBag";
__s0local99.MATERIAL_BAGS = "rewardBags";
__s0local99.BAG_ID = "bagID";
__s0local99.MATERIAL_STATIC_SUFFIX = "static";
__s0local99.MATERIAL_STACK_SIZE_SUFFIX = "stackSize";
__s0local99.MATERIAL_PERCENTAGES_SUFFIX = "percentages";
__s0local99.FEAST_COST_REDUCTION = "feastCostsReduction";
__s0local99.OFFENSIVE_TOOLS_COSTS_REDUCTION = "offensiveToolsCostsReduction";
__s0local99.DEFENSIVE_TOOLS_COSTS_REDUCTION = "defensiveToolsCostsReduction";
__s0local99.ESPIONAGE_TRAVEL_BOOST = "espionageTravelBoost";
__s0local99.OFFENSIVE_TOOLS_SPEED_BOOST = "offensiveToolsSpeedBoost";
__s0local99.DEFENSIVE_TOOLS_SPEED_BOOST = "defensiveToolsSpeedBoost";
__s0local99.RESEARCH_RESOURCE_COSTS_REDUCTION = "ReduceResearchResourceCosts";
__s0local99.BUILD_BUILDINGS_XP_BOOST = "XPBoostBuildBuildings";
__s0local99.ATTACK_SETUP_SLOT = "attackSetupSlot";
__s0local99.CRAFTING_DURATION = "craftingDuration";
__s0local99.SUBSCRIPTION_BUFFS = "subscriptionsBuff";
__s0local99.SUBSCRIPTION_BUFF_ID = "subscriptionBuffID";
__s0local99.SUBSCRIPTION_BUFF_TYPE_ID = "subscriptionTypeID";
__s0local99.SUBSCRIPTION_BUFF_SERIES_ID = "seriesID";
__s0local99.SUBSCRIPTION_BUFF_REQUIRED_ALLIANCE_MEMBER_COUNT = "requiredMembers";
__s0local99.PVP_FIGHT_ONLY = "isPvPFight";
__s0local99.SUBSCRIPTION_CONVENIENCE_FEATURE = "subscriptionsConvenienceFeature";
__s0local99.SUBSCRIPTION_CONVENIENCE_FEATURE_ID = "convenienceFeatureID";
__s0local99.SUBSCRIPTION_LOYALTY = "subscriptionLoyalty";
__s0local99.SUBSCRIPTION_LOYALTY_ID = "subscriptionLoyaltyID";
__s0local99.SUBSCRIPTION_LOYALTY_MONTH = "month";
__s0local99.SUBSCRIPTION_LOYALTY_BOOST = "boost";
__s0local99.SUBSCRIPTION_REWARDS = "subscriptionsReward";
__s0local99.SUBSCRIPTION_REWARD_ID = "subscriptionsRewardID";
__s0local99.ALLIANCE_INVASION_CAMP = "allianceInvasionCamp";
__s0local99.ALLIANCE_INVASION_CAMP_ID = "allianceInvasionCampID";
__s0local99.RAGE_NEEDED_FOR_LEVEL_UP = "rageNeededForLevelUp";
__s0local99.PLAYER_RAGE_CAP = "playerRageCap";
__s0local99.COOLDOWN_INCREASE = "cooldownIncrease";
__s0local99.SKIP_COST_INCREASE = "skipCostIncrease";
__s0local99.INCREASE_MULTIPLIER = "increaseMultiplier";
__s0local99.INCREASE_INTERVAL = "increaseInterval";
__s0local99.COOLDOWN_INCREASE_CAP = "cooldownIncreaseCap";
__s0local99.SKIP_COST_INCREASE_CAP = "skipCostIncreaseCap";
__s0local99.GENERATED_RAGE_PER_ATTACK = "generatedRagePerAttack";
__s0local99.CHANCE_FOR_CRITICAL_RAGE_GENERATION = "chanceForCriticalRageGeneration";
__s0local99.GENERATED_RAGE_PER_DEFENSE = "generatedRagePerDefense";
__s0local99.LOOT_RESOURCES = "lootResources";
__s0local99.LOOT_WOOD_PERCENT_MIN = "lootWoodPercentMin";
__s0local99.LOOT_WOOD_PERCENT_MAX = "lootWoodPercentMax";
__s0local99.LOOT_STONE_PERCENT_MIN = "lootStonePercentMin";
__s0local99.LOOT_STONE_PERCENT_MAX = "lootStonePercentMax";
__s0local99.LOOT_IRON_PERCENT_MIN = "lootIronPercentMin";
__s0local99.LOOT_IRON_PERCENT_MAX = "lootIronPercentMax";
__s0local99.LOOT_COAL_PERCENT_MIN = "lootCoalPercentMin";
__s0local99.LOOT_COAL_PERCENT_MAX = "lootCoalPercentMax";
__s0local99.LOOT_OIL_PERCENT_MIN = "lootOilPercentMin";
__s0local99.LOOT_OIL_PERCENT_MAX = "lootOilPercentMax";
__s0local99.LOOT_GLASS_PERCENT_MIN = "lootGlassPercentMin";
__s0local99.LOOT_GLASS_PERCENT_MAX = "lootGlassPercentMax";
__s0local99.PAYMENT_DOPPLER = "paymentDoppler";
__s0local99.REWARD_SET_ID = "rewardSetID";
__s0local99.QUEST_C2_COST = "c2Cost";
__s0local99.QUEST_C2_REDUCTION = "c2Reduction";
__s0local99.CURRENCY = "currency";
__s0local99.CURRENCY_ID = "currencyID";
__s0local99.CURRENCY_NAME = "Name";
__s0local99.CURRENCY_CAP = "currencyCap";
__s0local99.CURRENCY_SOFT_CAP = "softCap";
__s0local99.CURRENCY_HARD_CAP = "hardCap";
__s0local99.CURRENCY_BOOST = "currencyBooster";
__s0local99.CURRENCY_BOOST_NAME = "currencyBoosterName";
__s0local99.JSON_KEY = "JSONKey";
__s0local99.CURRENCY_RANDOM_BONUS = "currencyRandomBonus";
__s0local99.CURRENCY_RANDOM_BONUS_NAME = "RandomBonusName";
__s0local99.CURRENCY_COLLECT_TASK_TYPE = "currencyCollectTaskType";
__s0local99.CURRENCY_SPEND_TASK_TYPE = "currencySpendTaskType";
__s0local99.CURRENCY_TASK_TYPE = "taskType";
__s0local99.CURRENCY_MINUTE_SKIP_VALUE = "currencyMinutesSkipValue";
__s0local99.CURRENCY_MINUTE_SKIP_TIME = "MinutesSkipValue";
__s0local99.CURRENCY_MINUTE_SKIP_INDEX = "MinuteSkipIndex";
__s0local99.CURRENCY_TYPE = "currencyType";
__s0local99.CURRENCY_TYPE_ID = "typeID";
__s0local99.CURRENCY_TYPE_ID_RANGE = "currencyIDRange";
__s0local99.IGNORE_CURRENCY_SOFT_CAP = "ignoreCurrencySoftCap";
__s0local99.FUSION_SYSTEM = "fusionSystem";
__s0local99.FUSION_SYSTEM_ID = "id";
__s0local99.FUSION_SYSTEM_ENERGY_RECHARGE_INTERVAL = "energyRechargeIntervalInSeconds";
__s0local99.FUSION_SYSTEM_ASSEMBLE_CATALYST_ENERGY_COST = "assembleCatalystEnergyCost";
__s0local99.FUSION_SYSTEM_DISASSEMBLE_CATALYST_ENERGY_COST = "disassembleCatalystEnergyCost";
__s0local99.FUSION_SYSTEM_BASE_BONUS_XP_CHANCE = "baseBonusFusionXPChance";
__s0local99.FUSION_SYSTEM_PREMIUM_BONUS_XP_CHANCE = "premiumBonusFusionXPChance";
__s0local99.FUSION_SYSTEM_SKIP_RECHARGE_C2_COST = "skipRechargeHardCurrencyCost";
__s0local99.FUSION_SYSTEM_SKIP_RECHARGE_C2_COST_FACTOR = "skipRechargeHardCurrencyCostFactor";
__s0local99.FUSION_SYSTEM_FUSION_CURRENCY_ID = "fusionCurrencyID";
__s0local99.FORGE = "fusionForge";
__s0local99.FORGE_ID = "forgeID";
__s0local99.FORGE_DUST_CURRENCY_ID = "dustCurrencyID";
__s0local99.FORGE_USABLE_TIMESKIPS_PER_DAY = "usableMinuteSkipsPerDay";
__s0local99.FORGE_MINUTE_SKIP = "forgeMinuteSkip";
__s0local99.FORGE_MINUTE_SKIP_ID = "id";
__s0local99.CATALYST = "catalyst";
__s0local99.CATALYST_DEPRECATED = "deprecated";
__s0local99.CATALYST_MAX_USABLE_FUSION_LEVEL = "maxUsableFusionLevel";
__s0local99.CATALYST_TIER = "tier";
__s0local99.FUSION_COST_SEQUENCE = "fusionCostSequence";
__s0local99.FUSION_COST_SEQUENCE_ID = "id";
__s0local99.FUSION_COST_SEQUENCE_FUSION_TARGET_LEVEL = "fusionTargetLevelIterationIndex";
__s0local99.FUSION_COST_SEQUENCE_COST_JSON_KEY = "costJSONKey";
__s0local99.FUSION_COST_SEQUENCE_COST_AMOUNT = "costAmount";
__s0local99.FUSION_IS_SOURCE = "isFusionSource";
__s0local99.FUSION_IS_TARGET = "isFusionTarget";
__s0local99.FUSION_INITIAL_FUSION_LEVEL = "initialFusionLevel";
__s0local99.FUSION_SHOP = "fusionShop";
__s0local99.PRIVATE_RESOURCE_VILLAGE = "privateVillage";
__s0local99.VILLAGE_ID = "villageID";
__s0local99.VILLAGE_LEVEL = "villageLevel";
__s0local99.RESOURCE_VILLAGE_TOKEN_COST = "costResourceVillageToken";
__s0local99.RESOURCE_VILLAGE_TOKEN_COST_TOTAL = "costResourceVillageTokenTotal";
__s0local99.VILLAGE_CAP_COAL = "villageCapCoal";
__s0local99.VILLAGE_CAP_OIL = "villageCapOil";
__s0local99.VILLAGE_CAP_GLASS = "villageCapGlass";
__s0local99.VILLAGE_CAP_IRON = "villageCapIron";
__s0local99.VILLAGE_TYPE = "type";
__s0local99.KINGS_MARKET = "kingsMarket";
__s0local99.TEMP_SERVER_REPAIR_COST_WOOD = "tempServerCostWood";
__s0local99.TEMP_SERVER_REPAIR_COST_STONE = "tempServerCostStone";
__s0local99.TEMP_SERVER_REPAIR_TIME = "tempServerTime";
__s0local99.TEMP_SERVER_RANK_ID = "tempServerRankID";
__s0local99.TEMP_SERVER_RANK_REWARD_ID = "tempServerRankRewardID";
__s0local99.MIN_RANK = "minRank";
__s0local99.MAX_RANK = "maxRank";
__s0local99.RANK_POINTS = "rankPoints";
__s0local99.TEMP_SERVER_RANK_POINTS = "tempServerRankPoint";
__s0local99.IS_HIDDEN_ON_TEMP_SERVER = "hiddenTempServer";
__s0local99.IS_HIDDEN_ON_CROSS_PLAY_SERVER = "hiddenCrossPlayServer";
__s0local99.DESTRUCTIBLE_ON_TEMP_SERVER = "tempServerDestructable";
__s0local99.BURNABLE_ON_TEMP_SERVER = "tempServerBurnable";
__s0local99.TEMP_SERVER_COST_CURRENCY2 = "tempServerCostC2";
__s0local99.START_PLAYER_LEVEL = "startPlayerLevel";
__s0local99.START_PLAYER_LEGEND_LEVEL = "startPlayerLegendLevel";
__s0local99.QUESTS_TO_FINISH = "questsToFinish";
__s0local99.TEMP_SERVER_RANK_REWARD = "tempServerRankReward";
__s0local99.RANK = "rank";
__s0local99.GAME_ID = "gameID";
__s0local99.ZONE_ID = "zoneID";
__s0local99.ZONE_IDS = "zoneIDs";
__s0local99.DATA = "data";
__s0local99.PLAYER_ID = "playerId";
__s0local99.PAYMENT_TYPE = "paymentType";
__s0local99.PAYMENT_TYPE_INCENTIVE = "incentive";
__s0local99.CURRENCY_PREMIUM = "currencyPremium";
__s0local99.PAYOUT = "payout";
__s0local99.ORDER_ID = "orderId";
__s0local99.MESSAGE = "message";
__s0local99.COMMAND_TYPE = "commandType";
__s0local99.COMMAND_TYPE_CUSTOM_PAYMENT_3 = "CUSTOM_PAYMENT_3";
__s0local99.CAMP_ID = "campID";
__s0local99.START_RESOURCE_ID = "startResourceID";
__s0local99.CASTLE_PASSAGE_TOKEN_PACKAGE_ID = "castlePassageTokenPackageID";
__s0local99.WOD_C1 = "c1";
__s0local99.START_RESOURCE = "startResource";
__s0local99.TEMP_SEVER_SETTING = "tempServerSetting";
__s0local99.SETTING_ID = "settingID";
__s0local99.PRESET_IDS = "presetIDs";
__s0local99.PEACE_MODE = "peaceMode";
__s0local99.SCORING_SYSTEM = "scoringSystem";
__s0local99.TEMP_SERVER_PREBUILT_CASTLE = "tempServerPreBuiltCastle";
__s0local99.START_CURRENCY_AMOUNT = "startCurrencyAmount";
__s0local99.CURRENCY_LOOTFACTOR_MIN = "currencyLootFactorMin";
__s0local99.CURRENCY_LOOTFACTOR_MAX = "currencyLootFactorMax";
__s0local99.BOOSTER_CURRENCY_ID = "boosterCurrencyID";
__s0local99.BOOSTER_CURRENCY_VALUE = "boosterCurrencyValue";
__s0local99.BOOSTER_CURRENCY_LIMIT = "boosterCurrencyLimit";
__s0local99.BOOSTER_CURRENCY_PACKAGE_ID = "boosterCurrencyPackageID";
__s0local99.TEMPSERVER_PAYOUT = "tempserver-payout";
__s0local99.SOURCE = "source";
__s0local99.TEMP_SERVER_DAILY_TASK_REWARD_ID = "tempServerDailyTaskRewardID";
__s0local99.TEMP_SERVER_MIN_DAILY_TASK_POINTS_PER_DAY = "minDailyTaskPointsPerDay";
__s0local99.TEMP_SERVER_DAILY_TASK_REWARD = "tempServerDailyTaskReward";
__s0local99.RETURN_CURRENCY_FACTOR = "returnCurrencyFactor";
__s0local99.DISABLED_ON_GLOBAL_SERVER = "disabledOnGlobalServer";
__s0local99.DEFENSE_STREGTH_INCREASE = "defStrengthIncrease";
__s0local99.LEVEL_INCREASE = "levelIncrease";
__s0local99.MAX_VALUE = "maxValue";
__s0local99.MINIMUM_CURRENCY_AMOUNT_TO_SCORE = "minimumCurrencyAmountToScore";
__s0local99.PEACE_DURATION = "peaceDuration";
__s0local99.GLOBAL_SERVER_RESEARCH_DURATION = "globalServerResearchDuration";
__s0local99.GLOBAL_SERVER_COST_C1 = "globalServerCostC1";
__s0local99.GLOBAL_SERVER_COST_C2 = "globalServerCostC2";
__s0local99.GLOBAL_SERVER_COST_WOOD = "globalServerCostWood";
__s0local99.GLOBAL_SERVER_COST_STONE = "globalServerCostStone";
__s0local99.GLOBAL_SERVER_COST_COAL = "globalServerCostCoal";
__s0local99.GLOBAL_SERVER_COST_OIL = "globalServerCostOil";
__s0local99.GLOBAL_SERVER_COST_GLASS = "globalServerCostGlass";
__s0local99.GLOBAL_SERVER_COST_IRON = "globalServerCostIron";
__s0local99.GLOBAL_SERVER_COST_FOOD = "globalServerCostFood";
__s0local99.GLOBAL_SERVER_COST_MEAD = "globalServerCostMead";
__s0local99.GLOBAL_SERVER_COST_HONEY = "globalServerCostHoney";
__s0local99.GLOBAL_SERVER_COST_AQUAMARINE = "globalServerCostAquamarine";
__s0local99.GLOBAL_SERVER_COST_BEEF = "globalServerCostBeef";
__s0local99.COLLECTOR_EVENT_REWARDS_ID = "collectorEventRewardsID";
__s0local99.COLLECTOR_EVENT_REWARD_EVENT_OPTION_ID = "eventOptionID";
__s0local99.COLLECTOR_EVENT_CURRENCY_THRESHOLD = "minCurrencyAmount";
__s0local99.COLLECTOR_EVENT_OPTION_ID = "collectorEventOptionID";
__s0local99.COLLECTOR_CURRENCY_ID = "collectorCurrencyID";
__s0local99.COLLECTOR_KEY_CURRENCY_ID = "collectorKeyCurrencyID";
__s0local99.COLLECTOR_KEY_BOOST = "collectorKeyBoost";
__s0local99.COLLECTOR_KEY_LIMIT = "collectorKeyLimit";
__s0local99.BASE_COLLECTOR_BOOST = "baseCollectorBoost";
__s0local99.EVENT_START_CURRENCY_AMOUNT = "eventStartCurrencyAmount";
__s0local99.DAILY_CURRENCY_INCREASE = "dailyCurrencyIncrease";
__s0local99.COLLECTOR_EVENT_OPTION = "collectorEventOption";
__s0local99.COLLECTOR_EVENT_REWARD = "collectorEventReward";
__s0local99.NPC_PLAYER_ID = "npcPlayerID";
__s0local99.SEASON_MEDAL = "seasonMedal";
__s0local99.SEASON_MEDAL_ID = "medalID";
__s0local99.SEASON_MEDAL_POINTS = "medalPoints";
__s0local99.SEASON_RANK = "seasonRank";
__s0local99.SEASON_RANK_ID = "rankID";
__s0local99.SEASON_MIN_MEDAL_POINTS_FOR_UNLOCK = "minMedalPointsForUnlock";
__s0local99.SEASON_EVENT_REWARD = "seasonEventReward";
__s0local99.SEASON_END_REWARD = "seasonEndReward";
__s0local99.SEASON_PROMOTION_REWARD = "seasonPromotionReward";
__s0local99.SEASON_NEEDS_PASS = "needsSeasonPass";
__s0local99.SEASON_MIN_HIGHSCORE_RANK = "minHighscoreRank";
__s0local99.USE_MIN_LEVEL_OF_EVENTS = "useMinLevelOfEvents";
__s0local99.SEASON_SETTING = "seasonSetting";
__s0local99.SEASON_PASS_PROMOTION_PRICE = "seasonPassPromotionPrice";
__s0local99.SEASON_PASS_EVENT_END_PRICE = "seasonPassEventEndPrice";
__s0local99.SEASON_PASS_FULL_DISCOUNT = "seasonPassFullDiscount";
__s0local99.SEASON_PASS_SINGLE_DISCOUNT = "seasonPassSingleDiscount";
__s0local99.REROLL_COST = "rerollCost";
__s0local99.REROLL_COUNT = "rerollCount";
__s0local99.REROLL_COST_C1 = "c1Cost";
__s0local99.REROLL_COST_C2 = "c2Cost";
__s0local99.GLOBAL_EFFECT = "globalEffect";
__s0local99.GLOBAL_EFFECT_ID = "globalEffectID";
__s0local99.REFRESH_AREA = "refreshArea";
__s0local99.EFFECT_CAP = "effectCap";
__s0local99.CAP_ID = "capID";
__s0local99.RELIC_POWER_DISTRIBUTION = "relicPowerDistribution";
__s0local99.POWER = "power";
__s0local99.SHARES = "shares";
__s0local99.RELIC_EFFECT = "relicEffect";
__s0local99.MINIMUM_VALUE = "minimumValue";
__s0local99.MAXIMUM_VALUE = "maximumValue";
__s0local99.RELIC_EFFECT_LIST = "relicEffectList";
__s0local99.RELIC_EFFECT_IDS = "relicEffectIDs";
__s0local99.RELIC_TYPES = "relicType";
__s0local99.RELIC_BLUE_PRINTS = "relicBluePrint";
__s0local99.NORMAL_AMOUNT = "normalAmount";
__s0local99.SPECIAL_AMOUNT = "specialAmount";
__s0local99.NORMAL_EFFECT_LIST_ID = "normalRelicEffectListID";
__s0local99.SPECIAL_EFFECT_LIST_ID = "specialRelicEffectListID";
__s0local99.RELIC_TYPE_ID = "relicTypeID";
__s0local99.BASE_EFFECT_IDS = "baseRelicEffectIDs";
__s0local99.RELIC_EFFECT_POWER_RATING = "relicEffectPowerRating";
__s0local99.RELIC_CATEGORY = "relicCategory";
__s0local99.NEEDED_RATINGS = "neededRatings";
__s0local99.IS_GEM = "isGem";
__s0local99.RELIC_EFFECT_TYPE = "relicEffectType";
__s0local99.VALUE_TEXT_TYPE = "valueTextType";
__s0local99.EFFECT_VALUE_KEYS = "effectValueKeys";
__s0local99.RELIC_ITEM_REWARDS = "relicEquipments";
__s0local99.PVE_FIGHT_ONLY = "isPvEFight";
__s0local99.SUCCESS_CHANCE = "chance";
__s0local99.EFFECT_INCREASE = "relicNormalEffectBoost";
__s0local99.RELIC_ENCHANTER = "relicEnchanter";
__s0local99.IS_RELIC_ENCHANTER = "isRelicEnchanter";
__s0local99.RELIC_FRAGMENT_BOOST = "relicFragmentBoost";
__s0local99.EQUIPMENT_STORAGE = "addEquipmentStorageCapacity";
__s0local99.GEM_STORAGE = "addGemStorageCapacity";
__s0local99.RELIC_LOOT_TABLE = "relicLootOption";
__s0local99.TOMBOLA_ID = "tombolaID";
__s0local99.OFFICERS_SCHOOL_POWER_DISTRIBUTION = "officersSchoolPowerDistribution";
__s0local99.OFFICERS_SCHOOL_UNIT_PAIR = "officersSchoolUnitPair";
__s0local99.OFFICERS_SCHOOL_EFFECT = "officersSchoolEffect";
__s0local99.OFFICERS_SCHOOL_CURRENCY = "officersSchoolCurrency";
__s0local99.OFFICERS_SCHOOL_DURATIION = "officersSchoolDuration";
__s0local99.UNLOCK_BUILDING_WOD_ID = "unlockBuildingWodID";
__s0local99.USED_FOR_PROGRAM = "usedForProgram";
__s0local99.USED_FOR_REROLL = "usedForReroll";
__s0local99.MINIMUM_VALUE_1 = "minimumEffectValueSlot1";
__s0local99.MAXIMUM_VALUE_1 = "maximumEffectValueSlot1";
__s0local99.MINIMUM_VALUE_2 = "minimumEffectValueSlot2";
__s0local99.MAXIMUM_VALUE_2 = "maximumEffectValueSlot2";
__s0local99.MINIMUM_VALUE_3 = "minimumEffectValueSlot3";
__s0local99.MAXIMUM_VALUE_3 = "maximumEffectValueSlot3";
__s0local99.C1_COST = "c1Cost";
__s0local99.C2_COST = "c2Cost";
__s0local99.DAIMYO_CASTLE = "daimyoCastle";
__s0local99.DAIMYO_TOWNSHIP = "daimyoTownship";
__s0local99.DAIMYO_CASTLE_ALLIANCE_CONTRACT = "daimyoCastleAllianceContract";
__s0local99.DAIMYO_TOWNSHIP_ALLIANCE_CONTRACT = "daimyoTownshipAllianceContract";
__s0local99.DAIMYO_ALLIANCE_CONTRACT_ENABLE_ON_START = "enableOnStart";
__s0local99.DAIMYO_ALLIANCE_CONTRACT_NEXT_CONTRACT = "nextContract";
__s0local99.DAIMYO_SHOGUN_POINTS = "shogunPoints";
__s0local99.DAIMYO_WAR_EFFORT_POINTS = "warEffortPoints";
__s0local99.DAIMYO_NEEDED_SHOGUN_POINTS = "shogunPointsNeededForLevelUp";
__s0local99.DAIMYO_MIN_HIGHSCORE_RANK = "minHighscoreRank";
__s0local99.DAIMYO_END_REWARD = "daimyoEndReward";
__s0local99.UNIT_CAPACITY = "unitCapacity";
__s0local99.SKIN = "skin";
__s0local99.ALLIANCE_BATTLE_GROUND_SETTING = "allianceBattleGroundSetting";
__s0local99.ALLIANCE_BATTLE_GROUND_PREBUILT_CASTLE = "allianceBattleGroundPreBuiltCastle";
__s0local99.SKIN_ID = "skinID";
__s0local99.ALLIANCE_BATTLE_GROUND_SKIN = "allianceBattleGroundSkin";
__s0local99.ALLIANCE_BATTLE_GROUND_SCORING = "allianceBattleGroundScoring";
__s0local99.ALLIANCE_BATTLE_GROUND_SCORING_ID = "allianceBattleGroundScoringID";
__s0local99.SCORING = "scoring";
__s0local99.SCORING_ID = "scoringID";
__s0local99.METROPOLIS_DECAY = "metropolisDecay";
__s0local99.KINGSTOWER_DECAY = "kingstowerDecay";
__s0local99.PLAYER_STEAL = "playerSteal";
__s0local99.ALLIANCE_STEAL = "allianceSteal";
__s0local99.MAX_ALLIANCE_SIZE = "maxAllianceSize";
__s0local99.ALLIANCE_BATTLE_GROUND_RANK_REWARD = "allianceBattleGroundRankReward";
__s0local99.ALLIANCE_BATTLE_GROUND_RANK_ID = "allianceBattleGroundRankID";
__s0local99.ALLIANCE_BATTLE_GROUND_RANK_REWARD_ID = "allianceBattleGroundRankRewardID";
__s0local99.ALLIANCE_BATTLE_GROUND_MAP = "allianceBattleGroundMap";
__s0local99.ALLIANCE_BATTLE_GROUND_DUNGEON = "allianceBattleGroundDungeon";
__s0local99.ALLIANCE_BATTLE_GROUND_DUNGEON_ID = "allianceBattleGroundDungeonID";
__s0local99.ALLIANCE_BATTLE_GROUND_PAYOUT = "battlegroundserver-payout";
__s0local99.IS_BATTLE_GROUND = "isBattleground";
__s0local99.ALLIANCE_CURRENCY_ID = "allianceCurrencyID";
__s0local99.IS_HIDDEN_ON_BATTLE_GROUND = "hiddenBattleGround";
__s0local99.ONLY_BATTLE_GROUND_SCORING_ID = "onlyBattleGroundScoringID";
__s0local99.ALLIANCE_CURRENCY_LOOT_FACTOR_MIN = "allianceCurrencyLootFactorMin";
__s0local99.ALLIANCE_REWARD_SET_ID = "allianceRewardSetID";
__s0local99.PLAYER_REWARD_SET_ID = "playerRewardSetID";
__s0local99.ALLIANCE_REWARD_ID = "allianceRewardID";
__s0local99.ALLIANCE_RANK_POINTS = "allianceRankPoints";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER = "allianceTower";
__s0local99.DIALOG_STATISTIC_IDS = "dialogStatisticIDs";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_ID = "allianceTowerID";
__s0local99.TOWER_BASE_POINTS = "addAllianceTowerPoints";
__s0local99.TOWER_LEVEL_MULTIPLIER = "allianceTowerLevelMultiplier";
__s0local99.DEFEATED_PLAYER_CASTLES_BASE_POINTS = "defeatedPVPBasePoints";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_ID = "allianceTowerEffectID";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_IDS = "allianceTowerEffectIDs";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT = "allianceTowerEffect";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_BASE = "effectStartValue";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_INCREASE = "effectIncrease";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_MAX = "effectMaxLevel";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_BASE_PRICE = "effectBasePrice";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_ACTIVATION = "allianceTowerEffectsActivation";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_ACTIVATION_ID = "allianceTowerEffectsActivationID";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_REMAINING = "remainingTime";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_COST = "cost";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_LOSS_MALUS = "defenceTowerLossMalus";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_MAX_MALUS = "defenceTowerLossMalusMax";
__s0local99.ALLIANCE_BATTLE_GROUND_TOWER_MALUS_CURRENCY = "malusCurrencyID";
__s0local99.BASE_LEVEL = "baseLevel";
__s0local99.INITINAL_ALLIANCE_FAME = "allianceFame";
__s0local99.INITINAL_ALLIANCE_MIGHT = "allianceMight";
__s0local99.LANDMARK = "landmark";
__s0local99.LANDMARK_ID = "landmarkID";
__s0local99.EMPTY_MIN_CONQUER_LEVEL = "emptyMinConquerLevel";
__s0local99.MIN_DEFENSE_LEVEL = "minDefenseLevel";
__s0local99.DEFAULT_LEVEL = "defaultLevel";
__s0local99.IS_DEFAULT = "isDefault";
__s0local99.METROPOLIS_LANDMARK_ID = "metropolisLandmarkID";
__s0local99.CAPITAL_LANDMARK_ID = "capitalLandmarkID";
__s0local99.FORTUNE_TELLER_CLASS = "fortuneTellerClass";
__s0local99.FORTUNE_TELLER_CLASS_ID = "fortuneTellerClassID";
__s0local99.TOP_REWARD_ID = "toprewardID";
__s0local99.DISTRICT_TYPE_ID = "districtTypeID";
__s0local99.IS_DISTRICT = "isDistrict";
__s0local99.DISTRICT_BUILDING_SLOTS = "districtSlots";
__s0local99.DISTRICT_TYPE = "districtType";
__s0local99.NEWSLETTER_REWARD = "newsletterReward";
__s0local99.NEWSLETTER_ID = "newsLetterID";
__s0local99.CURRENCY_RARENESS = "currencyRareness";
__s0local99.CURRENCY_RARENESS_RARENESS = "rareness";
__s0local99.ISLAND_PREBUILT_CASTLE = "islandPreBuiltCastle";
__s0local99.ALLIANCE_REWARD_IDs = "allianceRewardIDs";
__s0local99.PLAYER_REWARD_IDs = "playerRewardIDs";
__s0local99.CONSTRUCTION_ITEM_DISASSEMBLING_TOMBOLA = "constructionItemDisassemblingTombola";
__s0local99.CONSTRUCTION_ITEM_DISASSEMBLING_TOMBOLA_ID = "constructionItemDisassemblingTombolaID";
__s0local99.DISASSEMBLING_TOMBOLA_ID = "disassemblingTombolaID";
__s0local99.CRAFTING_RECIPE = "craftingRecipe";
__s0local99.CRAFTING_RECIPE_ID = "craftingRecipeId";
__s0local99.QUEUE_TYPE_ID = "queueTypeId";
__s0local99.CRAFTING_QUEUE = "craftingQueue";
__s0local99.CRAFTING_QUEUE_ID = "craftingQueueId";
__s0local99.PERMANENT_PRODUCTION_SLOTS = "permanentProductionSlots";
__s0local99.TEMPORARY_PRODUCTION_SLOTS = "temporaryProductionSlots";
__s0local99.PRODUCTION_SLOT_UNLOCK_BASE_COST_C1 = "productionSlotUnlockCostC1";
__s0local99.PRODUCTION_SLOT_UNLOCK_DURATION = "productionSlotUnlockDuration";
__s0local99.PERMANENT_QUEUE_SLOTS = "permanentQueueSlots";
__s0local99.TEMPORARY_QUEUE_SLOTS = "temporaryQueueSlots";
__s0local99.QUEUE_SLOT_UNLOCK_BASE_COST_C1 = "queueSlotUnlockCostC1";
__s0local99.QUEUE_SLOT_UNLOCK_DURATION = "queueSlotUnlockDuration";
__s0local99.RECIPE_GROUP_ID = "recipeGroupID";
__s0local99.CRAFTING_RESEARCH_GROUP_ID = "researchGroupID";
__s0local99.CURRENCY_CLEAR_COMPENSATION = "currencyClearCompensation";
__s0local99.CURRENCY_CLEAR_COMPENSATION_ID = "currencyClearCompensationID";
__s0local99.MIN_CURRENCY_AMOUNT = "minCurrencyAmount";
__s0local99.EVENT_AUTO_SCALING = "eventAutoScaling";
__s0local99.EVENT_AUTO_SCALING_ID = "eventAutoScalingID";
__s0local99.WALL_REDUCTION_BOOST = "wallReductionBoost";
__s0local99.GATE_REDUCTION_BOOST = "gateReductionBoost";
__s0local99.MOAT_REDUCTION_BOOST = "moatReductionBoost";
__s0local99.GUARDS_REDUCTION_BOOST = "guardsReductionBoost";
__s0local99.DIFF_DEFENSE_STRENGTH_BOOST_NORMAL_MIN_DEFENSE = "normalDiffDefStrengthBoostMinDefense";
__s0local99.DIFF_DEFENSE_STRENGTH_BOOST_NORMAL_MAX_DEFENSE = "normalDiffDefStrengthBoostMaxDefense";
__s0local99.DIFF_DEFENSE_STRENGTH_BOOST_PREMIUM_MIN_DEFENSE = "premiumDiffDefStrengthBoostMinDefense";
__s0local99.DIFF_DEFENSE_STRENGTH_BOOST_PREMIUM_MAX_DEFENSE = "premiumDiffDefStrengthBoostMaxDefense";
__s0local99.MAX_TROOP_CAPACITY_DEFENSE = "maxTroopCapacityDefense";
__s0local99.RANDOM_FACTOR_DEFENSE = "randomFactorDefense";
__s0local99.DIFF_DEFENSE_STRENGTH_BOOST_NORMAL_MIN_ATTACK = "normalDiffDefStrengthBoostMinAttack";
__s0local99.DIFF_DEFENSE_STRENGTH_BOOST_NORMAL_MAX_ATTACK = "normalDiffDefStrengthBoostMaxAttack";
__s0local99.DIFF_DEFENSE_STRENGTH_BOOST_PREMIUM_MIN_ATTACK = "premiumDiffDefStrengthBoostMinAttack";
__s0local99.DIFF_DEFENSE_STRENGTH_BOOST_PREMIUM_MAX_ATTACK = "premiumDiffDefStrengthBoostMaxAttack";
__s0local99.MAX_TROOP_CAPACITY_ATTACK = "maxTroopCapacityAttack";
__s0local99.RANDOM_FACTOR_ATTACK = "randomFactorAttack";
__s0local99.WAVES_PER_TOOL = "wavesPerTool";
__s0local99.MIN_DEF_STRENGTH = "minDefStrength";
__s0local99.DEFAULT_DEFENSE_UNITS = "defaultDefenseUnits";
__s0local99.TOOL_PLAYER_LEVEL = "toolPlayerLevel";
__s0local99.DEFAULT_WALL_DEFENSE_TOOLS = "defaultWallDefenseTools";
__s0local99.DEFAULT_GATE_DEFENSE_TOOLS = "defaultGateDefenseTools";
__s0local99.DEFAULT_MOAT_DEFENSE_TOOLS = "defaultMoatDefenseTools";
__s0local99.DEFAULT_RANGE_DEFENSE_TOOLS = "defaultRangeDefenseTools";
__s0local99.DEFAULT_MELEE_DEFENSE_TOOLS = "defaultMeleeDefenseTools";
__s0local99.DEFAULT_ATTACK_UNITS = "defaultAttackUnits";
__s0local99.DEFAULT_RANGE_ATTACK_TOOLS = "defaultRangeAttackTools";
__s0local99.DEFAULT_MELEE_ATTACK_TOOLS = "defaultMeleeAttackTools";
__s0local99.MAX_DEFENSE_STRENGTH_MULTIPLIER = "maxDefenseStrengthMultiplier";
__s0local99.NPC_DEFENSE_SCORE_MULTIPLIER = "npcDefenseScoreMultiplier";
__s0local99.EVENT_AUTO_SCALING_HOL_SKILL = "eventAutoScalingHoLSkill";
__s0local99.EVENT_AUTO_SCALING_LEGEND_ID = "eventAutoScalingLegendID";
__s0local99.PLAYER_LEGEND_SKILL_EFFECT = "playerLegendSkillEffect";
__s0local99.MAPPING_LEGEND_SKILL_EFFECT = "mappingLegendSkillEffect";
__s0local99.EVENT_AUTO_SCALING_CI = "eventAutoScalingCI";
__s0local99.EVENT_AUTO_SCALING_CI_ID = "eventAutoScalingCiID";
__s0local99.USEABLE_CI_GROUP_IDS = "useableConstructionItemGroupIDs";
__s0local99.EVENT_AUTO_SCALING_UNIT_PAIRING = "eventAutoScalingUnitPairing";
__s0local99.UNIT_PAIR_ID = "unitPairID";
__s0local99.PLAYER_WOD_ID = "playerWodID";
__s0local99.MAPPING_WOD_ID = "mappingWodID";
__s0local99.MIN_DIFFICULTY_ID = "minDifficultyID";
__s0local99.MAX_DIFFICULTY_ID = "maxDifficultyID";
__s0local99.EVENT_AUTO_SCALING_TOOL_PAIRING = "eventAutoScalingToolPairing";
__s0local99.TOOL_PAIR_ID = "toolPairID";
__s0local99.EVENT_AUTO_SCALING_BARON_EFFECT = "eventAutoScalingLordEffect";
__s0local99.EVENT_AUTO_SCALING_BARON_EFFECT_ID = "eventAutoScalingLordEffectID";
__s0local99.MIN_VALUE = "minValue";
__s0local99.EFFECT_GROUP = "effectGroup";
__s0local99.EVENT_AUTO_SCALING_DIFFICULTY = "eventAutoScalingDifficulty";
__s0local99.DIFFICULTY_ID = "difficultyID";
__s0local99.DIFFICULTY_TYPE_ID = "difficultyTypeID";
__s0local99.IS_LOCKED = "isLocked";
__s0local99.RENT_C2_COST = "rentC2Cost";
__s0local99.UNLOCKS_DIFFICULTY = "unlocksDifficulty";
__s0local99.EVENT_AUTO_SCALING_CAMP = "eventAutoScalingCamp";
__s0local99.EVENT_AUTO_SCALING_CAMP_ID = "eventAutoScalingCampID";
__s0local99.CAMP_LEVEL = "camplevel";
__s0local99.GENERATE_ATTACKS = "generateAttacks";
__s0local99.ATTACK_WAVE_AMOUNT = "attackWaveAmount";
__s0local99.ATTACK_WAVE_AMOUNT_MIN = "attackWaveAmountMin";
__s0local99.ATTACK_WAVE_AMOUNT_MAX = "attackWaveAmountMax";
__s0local99.FLANK_TOOLS_PER_WAVE = "flankToolsPerWave";
__s0local99.FLANK_TOOLS_PER_WAVE_MIN = "flankToolsPerWaveMin";
__s0local99.FLANK_TOOLS_PER_WAVE_MAX = "flankToolsPerWaveMax";
__s0local99.FRONT_TOOLS_PER_WAVE = "frontToolsPerWave";
__s0local99.FRONT_TOOLS_PER_WAVE_MIN = "frontToolsPerWaveMin";
__s0local99.FRONT_TOOLS_PER_WAVE_MAX = "frontToolsPerWaveMax";
__s0local99.SAVE_SETTING_FOR_NUMBER_OF_ATTACKS = "saveSettingForNumberOfAttacks";
__s0local99.BETA_SERVER_PREBUILT_CASTLE = "betaServerPreBuiltCastle";
__s0local99.PLAYER_NAME_CHANGE = "playerNameChange";
__s0local99.NAME_CHANGE_ID = "nameChangeID";
__s0local99.OLD_NAME = "oldName";
__s0local99.NEW_NAME = "newName";
__s0local99.WELCOME_BACK_REWARD = "welcomeBackReward";
__s0local99.WELCOME_BACK_REWARD_ID = "welcomeBackRewardID";
__s0local99.MIN_INACTIVE_DAYS = "minInactiveDays";
__s0local99.MAX_INACTIVE_DAYS = "maxInactiveDays";
__s0local99.ENTRY_ID = "entryID";
__s0local99.LOOT_BOX = "lootBox";
__s0local99.LOOT_BOX_TOMBOLA = "lootBoxTombola";
__s0local99.LOOT_BOX_KEY_TOMBOLA = "lootBoxKeyTombola";
__s0local99.LOOT_BOX_ID = "lootBoxID";
__s0local99.LOOT_BOX_THEME = "lootBoxTheme";
__s0local99.LOOT_BOX_TYPE = "lootBoxType";
__s0local99.LOOT_BOX_TYPE_ID = "lootBoxTypeID";
__s0local99.LOOT_BOX_TOMBOLA_ID = "lootBoxTombolaID";
__s0local99.DRAWS = "draws";
__s0local99.LOOT_BOX_KEY_TOMBOLA_ID = "lootBoxKeyTombolaID";
__s0local99.SORT_ORDER = "sortOrder";
__s0local99.LOOT_BOX_KEY_PAYOUT_THRESHOLD = "lootBoxKeyPayoutThreshold";
__s0local99.RARITY = "rarity";
__s0local99.REWARD_CATEGORY = "rewardCategory";
__s0local99.GENERAL = "general";
__s0local99.GENERAL_ID = "generalID";
__s0local99.MIN_GENERAL_STAR_TIER = "minGeneralStarTier";
__s0local99.GENERAL_RARITY = "generalRarity";
__s0local99.GENERAL_RARITY_ID = "generalRarityID";
__s0local99.MAX_STAR_LEVEL = "maxStarLevel";
__s0local99.XP_REQUIREMENTS = "xpRequirements";
__s0local99.UNLOCK_COSTS = "unlockCosts";
__s0local99.UPGRADE_COSTS = "upgradeCosts";
__s0local99.UNIVERSAL_SHARDS_PER_HUNDRED = "universalShardsPerHundred";
__s0local99.UNLOCK_CURRENCY_ID = "unlockCurrencyID";
__s0local99.UPGRADE_CURRENCY_IDS = "upgradeCurrencyIDs";
__s0local99.GENERAL_SKILL_TIER = "generalSkillTier";
__s0local99.GENERAL_SKILL = "generalSkill";
__s0local99.PREVIOUS_TIER_REQUIRED_SKILL_POINTS = "previousTierRequiredSkillPoints";
__s0local99.CHARACTER = "character";
__s0local99.CHARACTER_ID = "characterID";
__s0local99.SPIN_RARITIES = "spinRarities";
__s0local99.TOMBOLAS = "tombolas";
__s0local99.COOL_DOWN_IN_SECONDS = "coolDownInSeconds";
__s0local99.BAD_LUCK_PROTECTION_DRAW_AMOUNT = "badLuckProtectionDrawAmount";
__s0local99.FREE_OPENING_TOMBOLA_ID = "freeOpeningTombolaID";
__s0local99.MAX_FREE_OPENINGS = "maxFreeOpenings";
__s0local99.BAD_LUCK_SPIN_RARITIES = "badLuckSpinRarities";
__s0local99.UNLUCKY_TOTAL_POINTS = "unluckyTotalPoints";
__s0local99.ATTACK_SLOT = "attackSlots";
__s0local99.DEFENSE_SLOT = "defenseSlots";
__s0local99.GENERALS_RESPEC_PACKAGE = "generalsRespecPackage";
__s0local99.IS_PREVIEW = "isPreview";
__s0local99.IS_NPC_GENERAL = "isNPCGeneral";
__s0local99.GENERAL_SKIP_FINISH_QUEST = "generalSkipFinishQuest";
__s0local99.GENERAL_SKIP_FINISH_QUEST_ID = "generalSkipFinishQuestID";
__s0local99.AFFECTS_ENEMY_ARMY = "affectsEnemyArmy";
__s0local99.GENERAL_ABILITY = "generalAbility";
__s0local99.ABILITY_ID = "abilityID";
__s0local99.ABILITY_GROUP_ID = "abilityGroupID";
__s0local99.ABILITY_TRIGGER_ID = "abilityTriggerID";
__s0local99.GENERAL_ABILITY_EFFECT = "generalAbilityEffect";
__s0local99.ABILITY_EFFECT_ID = "abilityEffectID";
__s0local99.ABILITY_ATTACK_EFFECT_ID = "abilityAttackEffectID";
__s0local99.ABILITY_DEFENSE_EFFECT_ID = "abilityDefenseEffectID";
__s0local99.PRIORITY = "priority";
__s0local99.TRIGGER_PER_WAVE = "triggerPerWave";
__s0local99.GENERAL_ABILITY_TRIGGER = "generalAbilityTrigger";
__s0local99.GENERAL_SLOT = "generalSlot";
__s0local99.ABILITY_GROUP_IDS = "abilityGroupIDs";
__s0local99.AREA_SPECIFIC_EFFECTS = "areaSpecificEffects";
__s0local99.GENERAL_XP_ITEM = "generalXpItem";
__s0local99.XP_AMOUNT = "xpAmount";
__s0local99.XP_PER_ITEM_ID = "xpPerItemID";
__s0local99.MESSAGE_RESTRICTION_ID = "messageRestrictionID";
__s0local99.MESSAGE_TYPE = "messageType";
__s0local99.DAILY_LIMIT_PER_PLAYER = "dailyLimitPerPlayer";
__s0local99.MIN_LEVEL_GLOBAL_SERVER = "minLevelGlobalServer";
__s0local99.MESSAGE_RESTRICTION = "messageRestriction";
__s0local99.CROSSPLAY_ID = "crossplayID";
__s0local99.CROSSPLAY_MIN_LEVEL = "crossplayMinLevel";
__s0local99.RESOURCE = "resource";
__s0local99.RESOURCE_ID = "resourceID";
__s0local99.DONATION_TYPE = "donationType";
__s0local99.DONATION_TYPE_ID = "donationTypeID";
__s0local99.DONATION_SETTING = "donationSetting";
__s0local99.DONATION_SETTING_ID = "donationSettingID";
__s0local99.DONATION_ITEM = "donationItem";
__s0local99.DONATION_ITEM_ID = "donationItemID";
__s0local99.DONATION_ITEM_SET_ID = "donationItemSetID";
__s0local99.DONATION_ITEM_RATIO = "ratio";
__s0local99.DONATION_ITEM_MAX_POINT_LIMIT = "maxPointLimit";
__s0local99.DONATION_REWARD = "donationReward";
__s0local99.DONATION_REWARD_ID = "donationRewardID";
__s0local99.DONATION_REWARD_MIN_POINTS = "minPoints";
__s0local99.DONATION_ITEM_RESET = "reset";
__s0local99.GACHA_ID = "gachaID";
__s0local99.TOMBOLA_SPINS_AMOUNT = "tombolaSpinsAmount";
__s0local99.GACHA_LEVEL = "gachaLevel";
__s0local99.MIN_PULLS = "minPulls";
__s0local99.MAX_PULLS = "maxPulls";
__s0local99.MULTI_PULL_MAX = "multiPullMax";
__s0local99.FREE_CHEST_RESET_TIME = "freeChestResetTime";
__s0local99.FREE_CHEST_REWARD_ID = "freeChestRewardID";
__s0local99.GACHA = "gachaEvent";
__s0local99.LEAGUE_TYPE_IDS = "leagueTypeIDs";
__s0local99.ALLIANCE_COAT_LAYOUT = "allianceCoatLayout";
__s0local99.ALLIANCE_COAT_LAYOUT_ID = "allianceCoatLayoutID";
__s0local99.ALLIANCE_COAT_COLOR_ID = "allianceCoatColorID";
__s0local99.ALLIANCE_COAT_COLOR = "allianceCoatColor";
__s0local99.COLOR = "color";
__s0local99.NO_OF_COLORS = "noofColors";
__s0local99.ALLIANCE_COAT_LAYOUT_IDS = "allianceCoatLayoutIDs";
__s0local99.MAX_DURATION = "maxDuration";
__s0local99.LEADERBOARD_REWARD = "leaderboardReward";
__s0local99.LEADERBOARD_REWARD_ID = "leaderboardRewardID";
__s0local99.LEADERBOARD_REWARD_SET_ID = "leaderboardRewardSetID";
__s0local99.LEADERBOARD_REWARD_LEAGUE_ID = "leagueID";
__s0local99.ALLIANCE_FUNDS_DONATABLE = "allianceFundsDonatable";
__s0local99.ALLIANCE_FUNDS_DONATABLE_ID = "allianceFundsDonatableID";
__s0local99.DIRECTLY_BY_PLAYER = "directlyByPlayer";
__s0local99.ALLIANCE_QUEST = "allianceQuest";
__s0local99.ALLIANCE_QUEST_ID = "allianceQuestID";
__s0local99.COMMENT_2 = "comment2";
__s0local99.CANCEL_COST_C2 = "cancelCostC2";
__s0local99.DIVISION_ROUND = "divisionRound";
__s0local99.DIVISION_ROUND_ID = "divisionRoundID";
__s0local99.DIVISION_ROUND_DIVISIONS = "divisions";
__s0local99.DIVISION_ROUND_SUBDIVISIONS = "subdivisions";
__s0local99.DIVISION_ROUND_SUBDIVISION_SIZES = "subdivisionSizes";
__s0local99.DIVISION_ROUND_PROMOTES = "promotes";
__s0local99.DIVISION_ROUND_DEMOTES = "demotes";
__s0local99.DIVISION_ROUND_SOURCE_DIVISION_ROUND_ID = "sourceDivisionRoundID";
__s0local99.DIVISION_ROUND_TARGET_DIVISION_ROUND_ID = "targetDivisionRoundID";
__s0local99.DIVISION_ROUND_TEST_ONLY = "testOnly";
__s0local99.PREMIUM = "Premium";
__s0local99.RAID_BOSS = "raidBoss";
__s0local99.RAID_BOSS_ID = "raidBossID";
__s0local99.RAID_BOSS_LEVEL = "raidBossLevel";
__s0local99.RAID_BOSS_LEVEL_ID = "raidBossLevelID";
__s0local99.RAID_BOSS_LEVEL_LEVEL = "level";
__s0local99.RAID_BOSS_LEVEL_WALL_REGENERATION_TIME = "wallRegenerationTime";
__s0local99.RAID_BOSS_LEVEL_COURTYARD_RESERVE_UNITS = "courtyardReserveUnits";
__s0local99.RAID_BOSS_LEVEL_COURTYARD_SIZE = "courtyardSize";
__s0local99.RAID_BOSS_LEVEL_COURTYARD_MELEE_PERCENT = "courtyardMeleePercent";
__s0local99.RAID_BOSS_LEVEL_MIN_POINTS_FOR_BOSS_REWARDS = "minPointsForBossRewards";
__s0local99.RAID_BOSS_STAGE = "raidBossStage";
__s0local99.RAID_BOSS_STAGE_ID = "raidBossStageID";
__s0local99.RAID_BOSS_STAGE_HEALTH = "health";
__s0local99.RAID_BOSS_STAGE_DEFENDER_STAGE_EFFECTS = "defenderStageEffects";
__s0local99.RAID_BOSS_STAGE_ATTACKER_STAGE_EFFECTS = "attackerStageEffects";
__s0local99.RAID_BOSS_STAGE_DEFENDER_BATTLE_EFFECTS = "defenderBattleEffects";
__s0local99.RAID_BOSS_STAGE_ATTACKER_BATTLE_EFFECTS = "attackerBattleEffects";
__s0local99.RAID_BOSS_STAGE_DEFENDER_POST_BATTLE_EFFECTS = "defenderPostBattleEffects";
__s0local99.RAID_BOSS_STAGE_ATTACKER_POST_BATTLE_EFFECTS = "attackerPostBattleEffects";
__s0local99.RAID_BOSS_STAGE_LEFT_WALL_UNITS = "leftWallUnits";
__s0local99.RAID_BOSS_STAGE_FRONT_WALL_UNITS = "frontWallUnits";
__s0local99.RAID_BOSS_STAGE_RIGHT_WALL_UNITS = "rightWallUnits";
__s0local99.RAID_BOSS_STAGE_COURTYARD_POINT_FACTOR = "courtyardPointFactor";
__s0local99.RAID_BOSS_STAGE_WALL_POINT_FACTOR = "wallPointFactor";
__s0local99.RAID_BOSS_STAGE_HIGHLIGHTED_EFFECT_IDS = "HighlightEffectIcon";
__s0local99.RAID_BOSS_STAGE_DEFENDER_WALL_REGENERATION_EFFECTS = "defenderWallRegenerationEffects";
__s0local99.MIN_RAID_BOSS_LEVEL = "minRaidBossLevel";
__s0local99.MAX_RAID_BOSS_LEVEL = "maxRaidBossLevel";
exports.WODConst = __s0local99;
__s0local99.__class = "WODConst";
var __s0local100 = function () {
  function WorldClassic() {}
  WorldClassic.OUTPOST_TYPE_COUNT_$LI$ = function () {
    if (WorldClassic.OUTPOST_TYPE_COUNT == null) {
      WorldClassic.OUTPOST_TYPE_COUNT = [1, 4, 1, 4, 1, 3, 1, 3];
    }
    return WorldClassic.OUTPOST_TYPE_COUNT;
  };
  WorldClassic.AREA_MAP_$LI$ = function () {
    if (WorldClassic.AREA_MAP == null) {
      WorldClassic.AREA_MAP = [[1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0], [0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 1, 0, 0, 1], [0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [1, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 2], [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1], [2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0], [0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0], [2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0], [0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]];
    }
    return WorldClassic.AREA_MAP;
  };
  WorldClassic.prototype.getAreaMap = function () {
    return WorldClassic.AREA_MAP_$LI$();
  };
  WorldClassic.prototype.getKingdomId = function () {
    return WorldClassic.KINGDOM_ID;
  };
  WorldClassic.prototype.isClassicWorld = function () {
    return true;
  };
  WorldClassic.prototype.isDessertWorld = function () {
    return false;
  };
  WorldClassic.prototype.isIceWorld = function () {
    return false;
  };
  WorldClassic.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldClassic.prototype.isIslandWorld = function () {
    return false;
  };
  WorldClassic.prototype.getTypeCount = function () {
    return WorldClassic.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassic.prototype.getActiveTypeCount = function () {
    return WorldClassic.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassic.prototype.isExtension = function () {
    return WorldClassic.IS_EXTENSION;
  };
  return WorldClassic;
}();
__s0local100.KINGDOM_ID = 0;
__s0local100.IS_EXTENSION = false;
__s0local100.WOOD_PRODUCERS = 3;
__s0local100.STONE_PRODUCERS = 3;
__s0local100.FOOD_PRODUCERS = 3;
__s0local100.BEEF_PRODUCERS = 3;
__s0local100.IRON_PRODUCERS = 2;
exports.WorldClassic = __s0local100;
__s0local100.__class = "WorldClassic";
__s0local100.__interfaces = ["IAreaMap"];
var __s0local101 = function () {
  function WorldClassicBattleGroundGroundZero() {}
  WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT_$LI$ = function () {
    if (WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT == null) {
      WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT = [1, 0, 1, 0, 1, 0, 1, 0];
    }
    return WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT;
  };
  WorldClassicBattleGroundGroundZero.AREA_MAP_$LI$ = function () {
    if (WorldClassicBattleGroundGroundZero.AREA_MAP == null) {
      WorldClassicBattleGroundGroundZero.AREA_MAP = [[0, 1, 0, 1, 0, 2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 1, 0], [0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0], [0, 2, 0, 0, 0, 0, 1, 0, 0, 99, 99, 99, 0, 0, 1, 0, 0, 0, 99, 99, 99, 0, 0, 0, 1, 0, 0, 99, 99, 99, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 2, 0, 0, 2, 0, 99, 3, 99, 1, 0, 0, 2, 0, 2, 99, 3, 99, 2, 0, 2, 0, 0, 1, 99, 3, 99, 0, 2, 0, 0, 2, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 2, 0, 1, 0, 1, 0, 99, 3, 99, 3, 99, 1, 99, 3, 99, 3, 99, 23, 99, 3, 99, 3, 99, 1, 99, 3, 99, 3, 99, 0, 1, 0, 1, 0, 2, 0, 0], [1, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 99, 3, 99, 3, 99, 3, 99, 3, 99, 0, 0, 23, 0, 23, 0, 0, 99, 3, 99, 3, 99, 3, 99, 3, 99, 0, 2, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 1, 0, 0, 1], [2, 0, 2, 0, 0, 1, 99, 3, 99, 22, 99, 22, 99, 99, 22, 99, 23, 0, 0, 0, 0, 0, 23, 99, 22, 99, 99, 22, 99, 22, 99, 3, 99, 1, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 2, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 1, 99, 99, 99, 99, 99, 1, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 1, 99, 99, 99, 99, 99, 1, 0, 1, 0, 0, 1, 0, 0], [0, 2, 0, 0, 1, 0, 99, 99, 99, 3, 99, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 99, 99, 0, 1, 0, 0, 2, 0], [0, 0, 1, 0, 0, 2, 99, 3, 99, 99, 99, 99, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 99, 99, 99, 99, 3, 99, 2, 0, 0, 1, 0, 2], [0, 2, 0, 2, 0, 0, 99, 99, 99, 0, 0, 23, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 23, 0, 0, 99, 99, 99, 0, 0, 2, 0, 0, 0], [1, 0, 1, 0, 0, 2, 99, 3, 99, 0, 0, 0, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 0, 0, 0, 99, 3, 99, 2, 0, 0, 1, 0, 0], [0, 0, 0, 0, 99, 99, 99, 99, 99, 23, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 23, 99, 99, 99, 99, 99, 0, 0, 0, 1], [2, 0, 0, 1, 99, 3, 99, 23, 0, 0, 0, 0, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 0, 0, 0, 0, 23, 99, 3, 99, 1, 0, 2, 0], [0, 0, 0, 0, 99, 99, 99, 99, 99, 23, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 23, 99, 99, 99, 99, 99, 0, 0, 0, 1], [1, 0, 1, 0, 99, 2, 99, 3, 99, 0, 0, 0, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 0, 0, 0, 99, 3, 99, 0, 2, 0, 1, 0, 0], [0, 2, 0, 2, 0, 0, 99, 99, 99, 0, 0, 23, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 23, 0, 0, 99, 99, 99, 0, 0, 2, 0, 2, 0], [0, 0, 1, 0, 0, 2, 99, 3, 99, 99, 99, 99, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 99, 99, 99, 99, 3, 99, 2, 0, 0, 1, 0, 1], [0, 2, 0, 0, 1, 0, 99, 99, 99, 3, 99, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 99, 99, 0, 1, 0, 0, 2, 0], [1, 0, 1, 0, 0, 0, 0, 1, 99, 99, 99, 99, 99, 1, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 1, 99, 99, 99, 99, 99, 1, 0, 2, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 2, 0, 0, 0, 0], [2, 0, 2, 0, 0, 1, 99, 3, 99, 22, 99, 22, 99, 99, 22, 99, 23, 0, 0, 0, 0, 0, 23, 99, 22, 99, 99, 22, 99, 22, 99, 3, 99, 1, 0, 0, 2, 0, 0], [0, 0, 0, 1, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 99, 3, 99, 3, 99, 3, 99, 3, 99, 0, 0, 23, 0, 23, 0, 0, 99, 3, 99, 3, 99, 3, 99, 3, 99, 0, 2, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 1, 0, 1, 0, 99, 3, 99, 3, 99, 1, 99, 3, 99, 3, 99, 23, 99, 3, 99, 3, 99, 1, 99, 3, 99, 3, 99, 0, 1, 0, 1, 0, 2, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 2, 0, 0, 2, 0, 99, 3, 99, 1, 0, 0, 2, 0, 2, 99, 3, 99, 2, 0, 2, 0, 0, 1, 99, 3, 99, 0, 2, 0, 2, 0, 1, 0, 0, 0], [0, 2, 0, 0, 0, 0, 1, 0, 0, 99, 99, 99, 0, 0, 1, 0, 2, 0, 99, 99, 99, 0, 0, 0, 1, 0, 0, 99, 99, 99, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0], [1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 1, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 1, 0], [2, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0]];
    }
    return WorldClassicBattleGroundGroundZero.AREA_MAP;
  };
  WorldClassicBattleGroundGroundZero.prototype.getAreaMap = function () {
    return WorldClassicBattleGroundGroundZero.AREA_MAP_$LI$();
  };
  WorldClassicBattleGroundGroundZero.prototype.getKingdomId = function () {
    return WorldClassicBattleGroundGroundZero.KINGDOM_ID;
  };
  WorldClassicBattleGroundGroundZero.prototype.isClassicWorld = function () {
    return true;
  };
  WorldClassicBattleGroundGroundZero.prototype.isDessertWorld = function () {
    return false;
  };
  WorldClassicBattleGroundGroundZero.prototype.isIceWorld = function () {
    return false;
  };
  WorldClassicBattleGroundGroundZero.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldClassicBattleGroundGroundZero.prototype.isIslandWorld = function () {
    return false;
  };
  WorldClassicBattleGroundGroundZero.prototype.getTypeCount = function () {
    return WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundGroundZero.prototype.getActiveTypeCount = function () {
    return WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundGroundZero.prototype.isExtension = function () {
    return WorldClassicBattleGroundGroundZero.IS_EXTENSION;
  };
  return WorldClassicBattleGroundGroundZero;
}();
__s0local101.KINGDOM_ID = 0;
__s0local101.IS_EXTENSION = true;
__s0local101.WOOD_PRODUCERS = 3;
__s0local101.STONE_PRODUCERS = 3;
__s0local101.FOOD_PRODUCERS = 3;
__s0local101.IRON_PRODUCERS = 2;
exports.WorldClassicBattleGroundGroundZero = __s0local101;
__s0local101.__class = "WorldClassicBattleGroundGroundZero";
__s0local101.__interfaces = ["IAreaMap"];
var __s0local102 = function () {
  function WorldClassicBattleGroundHiddenStar() {}
  WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT_$LI$ = function () {
    if (WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT == null) {
      WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT = [1, 0, 1, 0, 1, 0, 1, 0];
    }
    return WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT;
  };
  WorldClassicBattleGroundHiddenStar.AREA_MAP_$LI$ = function () {
    if (WorldClassicBattleGroundHiddenStar.AREA_MAP == null) {
      WorldClassicBattleGroundHiddenStar.AREA_MAP = [[0, 0, 0, 0, 2, 0, 99, 99, 99, 2, 0, 1, 0, 2, 0, 0, 23, 0, 99, 99, 99, 0, 23, 0, 0, 2, 0, 1, 0, 2, 99, 99, 99, 0, 2, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 99, 3, 99, 0, 0, 0, 0, 0, 1, 0, 0, 0, 99, 22, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 99, 3, 99, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 23, 0, 99, 99, 99, 0, 23, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 1, 0, 99, 99, 99], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 99, 3, 99], [99, 99, 99, 0, 0, 23, 0, 23, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 23, 0, 23, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 23, 0, 23, 0, 0, 99, 99, 99], [99, 3, 99, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 99, 22, 99, 0, 0, 0, 0, 0, 99, 22, 99, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [99, 99, 99, 0, 0, 23, 0, 23, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 2, 0, 1, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 23, 0, 23, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [0, 99, 99, 99, 0, 23, 0, 23, 0, 2, 0, 99, 99, 99, 0, 0, 0, 1, 0, 2, 0, 99, 99, 99, 0, 99, 99, 99, 0, 2, 0, 23, 0, 23, 0, 99, 99, 99, 0], [0, 99, 3, 99, 0, 0, 0, 0, 0, 0, 0, 99, 22, 99, 99, 99, 99, 0, 0, 0, 0, 99, 3, 99, 0, 99, 22, 99, 0, 0, 0, 0, 0, 0, 0, 99, 3, 99, 0], [0, 99, 99, 99, 1, 0, 0, 1, 0, 0, 0, 99, 99, 99, 99, 3, 99, 0, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 0, 0, 0, 1, 0, 0, 1, 99, 99, 99, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 99, 99, 99, 0, 0, 1, 0, 0, 0, 2, 99, 3, 99, 0, 0, 0, 1, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 2, 0, 0], [0, 1, 0, 0, 99, 99, 99, 0, 99, 22, 99, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 99, 99, 99, 0, 0, 99, 22, 99, 0, 99, 99, 99, 0, 0, 0, 1], [0, 0, 0, 0, 99, 22, 99, 0, 99, 99, 99, 0, 23, 0, 2, 99, 99, 99, 0, 0, 0, 0, 2, 99, 3, 99, 23, 0, 99, 99, 99, 0, 99, 22, 99, 0, 0, 0, 0], [99, 99, 99, 0, 99, 99, 99, 1, 0, 0, 2, 0, 0, 0, 0, 99, 3, 99, 2, 0, 0, 0, 0, 99, 99, 99, 0, 0, 2, 0, 0, 1, 99, 99, 99, 0, 99, 99, 99], [99, 22, 99, 0, 0, 0, 2, 0, 0, 0, 0, 0, 23, 0, 0, 99, 99, 99, 0, 0, 23, 0, 1, 0, 0, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 0, 99, 22, 99], [99, 99, 99, 0, 1, 0, 0, 0, 99, 99, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 1, 0, 99, 99, 99], [0, 0, 2, 0, 0, 0, 0, 0, 99, 3, 99, 0, 1, 0, 0, 0, 0, 0, 1, 0, 23, 0, 99, 99, 99, 0, 1, 0, 99, 3, 99, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 99, 3, 99, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 0, 0, 0, 0], [0, 1, 0, 0, 99, 22, 99, 0, 0, 0, 0, 0, 23, 0, 0, 99, 3, 99, 0, 0, 23, 0, 99, 99, 99, 0, 23, 0, 0, 0, 0, 0, 99, 22, 99, 0, 0, 1, 0], [0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99], [0, 2, 0, 0, 0, 0, 0, 2, 99, 99, 99, 0, 23, 0, 0, 0, 2, 0, 0, 99, 99, 99, 0, 0, 1, 0, 23, 0, 99, 99, 99, 2, 0, 0, 0, 0, 99, 3, 99], [99, 99, 99, 0, 1, 0, 0, 0, 99, 22, 99, 0, 0, 0, 1, 0, 0, 0, 0, 99, 3, 99, 0, 0, 0, 0, 0, 0, 99, 22, 99, 0, 0, 0, 1, 0, 99, 99, 99], [99, 3, 99, 0, 0, 0, 1, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 1, 0, 99, 99, 99, 0, 1, 0, 2, 0, 0, 99, 99, 99, 0, 1, 0, 0, 0, 2, 0, 0], [99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 23, 0, 23, 0, 99, 99, 99, 0, 0, 99, 3, 99, 0, 1, 0, 0, 99, 99, 99, 0, 0, 0, 2, 99, 3, 99, 0, 0, 99, 99, 99, 0, 23, 0, 23, 0, 2], [0, 0, 0, 0, 0, 0, 99, 22, 99, 0, 0, 99, 99, 99, 0, 0, 0, 2, 99, 22, 99, 1, 0, 0, 0, 99, 99, 99, 0, 0, 99, 22, 99, 0, 0, 0, 0, 0, 0], [2, 0, 23, 0, 23, 0, 99, 99, 99, 0, 1, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 0, 99, 99, 99, 0, 0, 0, 1, 0, 99, 99, 99, 0, 23, 0, 23, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 99, 22, 99, 0, 0, 0, 0, 0, 99, 22, 99, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 0, 1, 99, 99, 99, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 0, 23, 0, 23, 0, 99, 99, 99, 0, 99, 99, 99, 0, 0, 0, 99, 99, 99, 1, 0, 2, 0], [0, 0, 0, 0, 99, 22, 99, 0, 1, 0, 99, 22, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 99, 22, 99, 0, 1, 0, 99, 22, 99, 0, 0, 0, 0], [0, 1, 0, 0, 99, 99, 99, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 23, 0, 23, 0, 0, 99, 99, 99, 99, 99, 99, 0, 0, 0, 99, 99, 99, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 99, 3, 99, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [99, 99, 99, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 99, 99, 99, 2, 0, 0, 0, 1, 0, 99, 99, 99, 0, 0, 0, 0, 99, 99, 99, 0, 0, 1, 0, 0, 0], [99, 3, 99, 0, 0, 0, 99, 22, 99, 0, 0, 1, 0, 0, 99, 3, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 99, 22, 99, 0, 0, 0, 0, 0, 0], [99, 99, 99, 0, 1, 0, 99, 99, 99, 99, 99, 99, 0, 0, 99, 99, 99, 0, 1, 0, 99, 99, 99, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 0, 1, 0, 99, 99, 99], [0, 0, 0, 0, 0, 0, 2, 0, 0, 99, 3, 99, 0, 1, 0, 0, 0, 0, 0, 0, 99, 3, 99, 0, 1, 0, 0, 99, 3, 99, 0, 0, 2, 0, 0, 0, 99, 3, 99], [0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 2, 0, 99, 99, 99, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 99, 99, 99]];
    }
    return WorldClassicBattleGroundHiddenStar.AREA_MAP;
  };
  WorldClassicBattleGroundHiddenStar.prototype.getAreaMap = function () {
    return WorldClassicBattleGroundHiddenStar.AREA_MAP_$LI$();
  };
  WorldClassicBattleGroundHiddenStar.prototype.getKingdomId = function () {
    return WorldClassicBattleGroundHiddenStar.KINGDOM_ID;
  };
  WorldClassicBattleGroundHiddenStar.prototype.isClassicWorld = function () {
    return true;
  };
  WorldClassicBattleGroundHiddenStar.prototype.isDessertWorld = function () {
    return false;
  };
  WorldClassicBattleGroundHiddenStar.prototype.isIceWorld = function () {
    return false;
  };
  WorldClassicBattleGroundHiddenStar.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldClassicBattleGroundHiddenStar.prototype.isIslandWorld = function () {
    return false;
  };
  WorldClassicBattleGroundHiddenStar.prototype.getTypeCount = function () {
    return WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundHiddenStar.prototype.getActiveTypeCount = function () {
    return WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundHiddenStar.prototype.isExtension = function () {
    return WorldClassicBattleGroundHiddenStar.IS_EXTENSION;
  };
  return WorldClassicBattleGroundHiddenStar;
}();
__s0local102.KINGDOM_ID = 0;
__s0local102.IS_EXTENSION = true;
__s0local102.WOOD_PRODUCERS = 3;
__s0local102.STONE_PRODUCERS = 3;
__s0local102.FOOD_PRODUCERS = 3;
__s0local102.IRON_PRODUCERS = 2;
exports.WorldClassicBattleGroundHiddenStar = __s0local102;
__s0local102.__class = "WorldClassicBattleGroundHiddenStar";
__s0local102.__interfaces = ["IAreaMap"];
var __s0local103 = function () {
  function WorldClassicBattleGroundLineBreak() {}
  WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT_$LI$ = function () {
    if (WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT == null) {
      WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT = [1, 0, 1, 0, 1, 0, 1, 0];
    }
    return WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT;
  };
  WorldClassicBattleGroundLineBreak.AREA_MAP_$LI$ = function () {
    if (WorldClassicBattleGroundLineBreak.AREA_MAP == null) {
      WorldClassicBattleGroundLineBreak.AREA_MAP = [[1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0], [0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2], [2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0], [99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99], [99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99], [99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99], [0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0], [0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2], [2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0], [99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99], [99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99], [99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99], [0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0], [0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2], [2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0], [99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99], [99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99], [99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99], [0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]];
    }
    return WorldClassicBattleGroundLineBreak.AREA_MAP;
  };
  WorldClassicBattleGroundLineBreak.prototype.getAreaMap = function () {
    return WorldClassicBattleGroundLineBreak.AREA_MAP_$LI$();
  };
  WorldClassicBattleGroundLineBreak.prototype.getKingdomId = function () {
    return WorldClassicBattleGroundLineBreak.KINGDOM_ID;
  };
  WorldClassicBattleGroundLineBreak.prototype.isClassicWorld = function () {
    return true;
  };
  WorldClassicBattleGroundLineBreak.prototype.isDessertWorld = function () {
    return false;
  };
  WorldClassicBattleGroundLineBreak.prototype.isIceWorld = function () {
    return false;
  };
  WorldClassicBattleGroundLineBreak.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldClassicBattleGroundLineBreak.prototype.isIslandWorld = function () {
    return false;
  };
  WorldClassicBattleGroundLineBreak.prototype.getTypeCount = function () {
    return WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundLineBreak.prototype.getActiveTypeCount = function () {
    return WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundLineBreak.prototype.isExtension = function () {
    return WorldClassicBattleGroundLineBreak.IS_EXTENSION;
  };
  return WorldClassicBattleGroundLineBreak;
}();
__s0local103.KINGDOM_ID = 0;
__s0local103.IS_EXTENSION = true;
__s0local103.WOOD_PRODUCERS = 3;
__s0local103.STONE_PRODUCERS = 3;
__s0local103.FOOD_PRODUCERS = 3;
__s0local103.IRON_PRODUCERS = 2;
exports.WorldClassicBattleGroundLineBreak = __s0local103;
__s0local103.__class = "WorldClassicBattleGroundLineBreak";
__s0local103.__interfaces = ["IAreaMap"];
var __s0local104 = function () {
  function WorldClassicBattleGroundTowers() {}
  WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT_$LI$ = function () {
    if (WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT == null) {
      WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT = [0, 0, 0, 0, 0, 0, 0, 0];
    }
    return WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT;
  };
  WorldClassicBattleGroundTowers.AREA_MAP_$LI$ = function () {
    if (WorldClassicBattleGroundTowers.AREA_MAP == null) {
      WorldClassicBattleGroundTowers.AREA_MAP = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0], [0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0], [0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0], [0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    }
    return WorldClassicBattleGroundTowers.AREA_MAP;
  };
  WorldClassicBattleGroundTowers.prototype.getAreaMap = function () {
    return WorldClassicBattleGroundTowers.AREA_MAP_$LI$();
  };
  WorldClassicBattleGroundTowers.prototype.getKingdomId = function () {
    return WorldClassicBattleGroundTowers.KINGDOM_ID;
  };
  WorldClassicBattleGroundTowers.prototype.isClassicWorld = function () {
    return true;
  };
  WorldClassicBattleGroundTowers.prototype.isDessertWorld = function () {
    return false;
  };
  WorldClassicBattleGroundTowers.prototype.isIceWorld = function () {
    return false;
  };
  WorldClassicBattleGroundTowers.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldClassicBattleGroundTowers.prototype.isIslandWorld = function () {
    return false;
  };
  WorldClassicBattleGroundTowers.prototype.getTypeCount = function () {
    return WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundTowers.prototype.getActiveTypeCount = function () {
    return WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundTowers.prototype.isExtension = function () {
    return WorldClassicBattleGroundTowers.IS_EXTENSION;
  };
  return WorldClassicBattleGroundTowers;
}();
__s0local104.KINGDOM_ID = 0;
__s0local104.IS_EXTENSION = true;
__s0local104.WOOD_PRODUCERS = 3;
__s0local104.STONE_PRODUCERS = 3;
__s0local104.FOOD_PRODUCERS = 3;
__s0local104.IRON_PRODUCERS = 2;
exports.WorldClassicBattleGroundTowers = __s0local104;
__s0local104.__class = "WorldClassicBattleGroundTowers";
__s0local104.__interfaces = ["IAreaMap"];
var __s0local105 = function () {
  function WorldConst() {}
  WorldConst.ALIEN_CAMP_AREA_TYPES_$LI$ = function () {
    if (WorldConst.ALIEN_CAMP_AREA_TYPES == null) {
      WorldConst.ALIEN_CAMP_AREA_TYPES = [WorldConst.AREA_TYPE_ALIEN_CAMP, WorldConst.AREA_TYPE_RED_ALIEN_CAMP];
    }
    return WorldConst.ALIEN_CAMP_AREA_TYPES;
  };
  WorldConst.OUTPOST_TYPE_LIST_$LI$ = function () {
    if (WorldConst.OUTPOST_TYPE_LIST == null) {
      WorldConst.OUTPOST_TYPE_LIST = [[2, 0, 1, 8, 0, 2], [2, 0, 1, 6, 0, 2], [0, 2, 1, 0, 8, 2], [0, 2, 1, 0, 6, 2], [1, 0, 2, 2, 0, 8], [1, 0, 2, 2, 0, 6], [0, 1, 2, 0, 2, 8], [0, 1, 2, 0, 2, 6]];
    }
    return WorldConst.OUTPOST_TYPE_LIST;
  };
  WorldConst.WORLD_IDS_$LI$ = function () {
    if (WorldConst.WORLD_IDS == null) {
      WorldConst.WORLD_IDS = [__s0local100.KINGDOM_ID, __s0local106.KINGDOM_ID, __s0local107.KINGDOM_ID, __s0local110.KINGDOM_ID, __s0local108.KINGDOM_ID, __s0local32.KINGDOM_ID];
    }
    return WorldConst.WORLD_IDS;
  };
  WorldConst.getSectorCountX = function (__s2068param0) {
    if (__s2068param0) {
      return WorldConst.SECTOR_COUNT_ON_TEST;
    } else {
      return WorldConst.SECTOR_COUNT;
    }
  };
  WorldConst.getSectorCountY = function (__s2072param0) {
    return WorldConst.getSectorCountX(__s2072param0);
  };
  WorldConst.getSectorCount = function (__s2074param0) {
    return WorldConst.getSectorCountX(__s2074param0) * WorldConst.getSectorCountY(__s2074param0);
  };
  WorldConst.isLaboratoryKingdom = function (__s2076param0) {
    return __s0local100.KINGDOM_ID === __s2076param0 || __s0local107.KINGDOM_ID === __s2076param0 || __s0local106.KINGDOM_ID === __s2076param0 || __s0local110.KINGDOM_ID === __s2076param0;
  };
  return WorldConst;
}();
__s0local105.SECTOR_WIDTH = 13;
__s0local105.SECTOR_HEIGHT = 13;
__s0local105.AREA_TYPE_EMPTY = 0;
__s0local105.AREA_TYPE_CASTLE = 1;
__s0local105.AREA_TYPE_DUNGEON = 2;
__s0local105.AREA_TYPE_CAPITAL = 3;
__s0local105.AREA_TYPE_OUTPOST = 4;
__s0local105.AREA_TYPE_TREASURE_DUNGEON = 7;
__s0local105.AREA_TYPE_TREASURE_CAMP = 8;
__s0local105.AREA_TYPE_SHADOW_AREA = 9;
__s0local105.AREA_TYPE_VILLAGE = 10;
__s0local105.AREA_TYPE_BOSS_DUNGEON = 11;
__s0local105.AREA_TYPE_KINGDOM_CASTLE = 12;
__s0local105.AREA_TYPE_EVENT_DUNGEON = 13;
__s0local105.AREA_TYPE_NO_LANDMARK = 14;
__s0local105.AREA_TYPE_FACTION_CAMP = 15;
__s0local105.AREA_TYPE_FACTION_VILLAGE = 16;
__s0local105.AREA_TYPE_FACTION_TOWER = 17;
__s0local105.AREA_TYPE_FACTION_CAPITAL = 18;
__s0local105.AREA_TYPE_PLAGUE_AREA = 19;
__s0local105.AREA_TYPE_TROOP_HOSTEL = 20;
__s0local105.AREA_TYPE_ALIEN_CAMP = 21;
__s0local105.AREA_TYPE_METROPOL = 22;
__s0local105.AREA_TYPE_KINGS_TOWER = 23;
__s0local105.AREA_TYPE_ISLE_RESOURCE = 24;
__s0local105.AREA_TYPE_ISLE_DUNGEON = 25;
__s0local105.AREA_TYPE_MONUMENT = 26;
__s0local105.AREA_TYPE_NOMAD_CAMP = 27;
__s0local105.AREA_TYPE_LABORATORY = 28;
__s0local105.AREA_TYPE_SAMURAI_CAMP = 29;
__s0local105.AREA_TYPE_FACTION_INVASION_CAMP = 30;
__s0local105.AREA_TYPE_DYNAMIC = 31;
__s0local105.AREA_TYPE_SAMURAI_ALIEN_CAMP = 33;
__s0local105.AREA_TYPE_RED_ALIEN_CAMP = 34;
__s0local105.AREA_TYPE_ALLIANCE_NOMAD_CAMP = 35;
__s0local105.AREA_TYPE_DAIMYO_CASTLE = 37;
__s0local105.AREA_TYPE_DAIMYO_TOWNSHIP = 38;
__s0local105.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER = 40;
__s0local105.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER = 41;
__s0local105.AREA_TYPE_WOLF_KING = 42;
__s0local105.AREA_TYPE_ARE_PORTAL = 43;
__s0local105.AREA_TYPE_NO_OUTPOST = 99;
__s0local105.VILLAGE_TYPE_WOOD = 0;
__s0local105.VILLAGE_TYPE_STONE = 1;
__s0local105.VILLAGE_TYPE_FOOD = 2;
__s0local105.VILLAGE_TYPE_AQUAMARINE = 3;
__s0local105.VILLAGE_TYPE_WOOD_NON_PREMIUM = 4;
__s0local105.VILLAGE_TYPE_STONE_NON_PREMIUM = 5;
__s0local105.VILLAGE_TYPE_AQUAMARINE_NON_PREMIUM = 6;
__s0local105.VILLAGE_TYPE_COAL = 7;
__s0local105.VILLAGE_TYPE_OIL = 8;
__s0local105.VILLAGE_TYPE_GLASS = 9;
__s0local105.VILLAGE_TYPE_IRON = 10;
__s0local105.MONUMENT_TYPE_SMALL = 0;
__s0local105.MONUMENT_TYPE_BIG = 1;
__s0local105.LOOKUP_MAP_SIZE = 39;
__s0local105.CAPITAL_RANDOM_POS_OFFSET_XY1 = 5;
__s0local105.CAPITAL_RANDOM_POS_OFFSET_XY2 = 8;
__s0local105.SEED_VALUE_1 = 7;
__s0local105.SEED_VALUE_2 = 923;
__s0local105.CASTLES_PER_SECTOR = 14;
__s0local105.ALIEN_CAMPS_PER_SECTOR = 4;
__s0local105.NOMAD_CAMPS_PER_SECTOR = 4;
__s0local105.SAMURAI_CAMPS_PER_SECTOR = 4;
__s0local105.RED_FACTION_INVASION_CAMPS_PER_SECTOR = 5;
__s0local105.BLUE_FACTION_INVASION_CAMPS_PER_SECTOR = 5;
__s0local105.DAIMYO_CASTLES_PER_SECTOR = 2;
__s0local105.DAIMYO_TOWNSHIPS_PER_SECTOR = 2;
__s0local105.ARE_PORTALS_PER_SECTOR = 1;
__s0local105.ALLIANCE_NOMAD_CAMPS_PER_SECTOR = 1;
__s0local105.ALLIANCE_SAMURAI_CAMPS_PER_SECTOR = 0;
__s0local105.BLUE_ALLIANCE_FACTION_INVASION_CAMPS_PER_SECTOR = 0;
__s0local105.RED_ALLIANCE_FACTION_INVASION_CAMPS_PER_SECTOR = 0;
__s0local105.ZERO_ALLIANCE_CAMPS_PER_SECTOR = 0;
__s0local105.SECTOR_COUNT = 99;
__s0local105.SECTOR_COUNT_ON_TEST = 9;
__s0local105.AREA_ID_DYNAMIC_WORLDMAPOBJECT = -1;
exports.WorldConst = __s0local105;
__s0local105.__class = "WorldConst";
var __s0local106 = function () {
  function WorldDessert() {}
  WorldDessert.VILLAGE_TYPE_COUNT_$LI$ = function () {
    if (WorldDessert.VILLAGE_TYPE_COUNT == null) {
      WorldDessert.VILLAGE_TYPE_COUNT = [5, 5, 11];
    }
    return WorldDessert.VILLAGE_TYPE_COUNT;
  };
  WorldDessert.AREA_MAP_$LI$ = function () {
    if (WorldDessert.AREA_MAP == null) {
      WorldDessert.AREA_MAP = [[0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2], [12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 2, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 12, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 12, 0, 0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0], [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0]];
    }
    return WorldDessert.AREA_MAP;
  };
  WorldDessert.prototype.getAreaMap = function () {
    return WorldDessert.AREA_MAP_$LI$();
  };
  WorldDessert.prototype.getTypeCount = function () {
    return WorldDessert.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldDessert.prototype.isClassicWorld = function () {
    return false;
  };
  WorldDessert.prototype.isDessertWorld = function () {
    return true;
  };
  WorldDessert.prototype.isIceWorld = function () {
    return false;
  };
  WorldDessert.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldDessert.prototype.isIslandWorld = function () {
    return false;
  };
  WorldDessert.prototype.getKingdomId = function () {
    return WorldDessert.KINGDOM_ID;
  };
  WorldDessert.prototype.getActiveTypeCount = function () {
    return WorldDessert.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldDessert.prototype.isExtension = function () {
    return WorldDessert.IS_EXTENSION;
  };
  return WorldDessert;
}();
__s0local106.KINGDOM_ID = 1;
__s0local106.IS_EXTENSION = false;
__s0local106.WOOD_PRODUCERS = 1;
__s0local106.STONE_PRODUCERS = 1;
__s0local106.FOOD_PRODUCERS = 2;
__s0local106.BEEF_PRODUCERS = 2;
__s0local106.OIL_PRODUCERS = 2;
exports.WorldDessert = __s0local106;
__s0local106.__class = "WorldDessert";
__s0local106.__interfaces = ["IAreaMap"];
var __s0local107 = function () {
  function WorldIce() {}
  WorldIce.VILLAGE_TYPE_COUNT_$LI$ = function () {
    if (WorldIce.VILLAGE_TYPE_COUNT == null) {
      WorldIce.VILLAGE_TYPE_COUNT = [5, 5, 11];
    }
    return WorldIce.VILLAGE_TYPE_COUNT;
  };
  WorldIce.AREA_MAP_$LI$ = function () {
    if (WorldIce.AREA_MAP == null) {
      WorldIce.AREA_MAP = [[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 12], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 2, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 12, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0], [0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 12, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0]];
    }
    return WorldIce.AREA_MAP;
  };
  WorldIce.prototype.getAreaMap = function () {
    return WorldIce.AREA_MAP_$LI$();
  };
  WorldIce.prototype.getKingdomId = function () {
    return WorldIce.KINGDOM_ID;
  };
  WorldIce.prototype.isClassicWorld = function () {
    return false;
  };
  WorldIce.prototype.isDessertWorld = function () {
    return false;
  };
  WorldIce.prototype.isIceWorld = function () {
    return true;
  };
  WorldIce.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldIce.prototype.isIslandWorld = function () {
    return false;
  };
  WorldIce.prototype.getTypeCount = function () {
    return WorldIce.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldIce.prototype.getActiveTypeCount = function () {
    return WorldIce.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldIce.prototype.isExtension = function () {
    return WorldIce.IS_EXTENSION;
  };
  return WorldIce;
}();
__s0local107.KINGDOM_ID = 2;
__s0local107.IS_EXTENSION = false;
__s0local107.WOOD_PRODUCERS = 2;
__s0local107.STONE_PRODUCERS = 2;
__s0local107.FOOD_PRODUCERS = 2;
__s0local107.BEEF_PRODUCERS = 2;
__s0local107.COAL_PRODUCERS = 2;
__s0local107.ADDITIONAL_KINGDOM_CASTLES_COUNT = 2;
exports.WorldIce = __s0local107;
__s0local107.__class = "WorldIce";
__s0local107.__interfaces = ["IAreaMap"];
var __s0local108 = function () {
  function WorldIsland() {}
  WorldIsland.ISLE_TYPE_COUNT_$LI$ = function () {
    if (WorldIsland.ISLE_TYPE_COUNT == null) {
      WorldIsland.ISLE_TYPE_COUNT = [1, 4];
    }
    return WorldIsland.ISLE_TYPE_COUNT;
  };
  WorldIsland.AREA_MAP_$LI$ = function () {
    if (WorldIsland.AREA_MAP == null) {
      WorldIsland.AREA_MAP = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 12], [0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 25], [0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0], [0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 25, 0, 0, 0, 12, 0, 0], [0, 0, 0, 12, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 25, 0, 0, 0, 0, 25, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 24], [0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 25, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 25, 0, 0], [0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 25, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0], [0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0], [0, 24, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 25, 0, 0, 0, 0, 0, 0, 12, 0, 0, 25, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0], [0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12], [0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 25, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 25, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 25, 0, 0, 24, 0, 0, 12, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 12, 0, 0, 0, 24, 0, 0, 0, 0], [24, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0], [0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0]];
    }
    return WorldIsland.AREA_MAP;
  };
  WorldIsland.prototype.getKingdomId = function () {
    return WorldIsland.KINGDOM_ID;
  };
  WorldIsland.prototype.getAreaMap = function () {
    return WorldIsland.AREA_MAP_$LI$();
  };
  WorldIsland.prototype.isClassicWorld = function () {
    return false;
  };
  WorldIsland.prototype.isDessertWorld = function () {
    return false;
  };
  WorldIsland.prototype.isIceWorld = function () {
    return false;
  };
  WorldIsland.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldIsland.prototype.isIslandWorld = function () {
    return true;
  };
  WorldIsland.prototype.getTypeCount = function () {
    return WorldIsland.ISLE_TYPE_COUNT_$LI$();
  };
  WorldIsland.prototype.getActiveTypeCount = function () {
    return WorldIsland.ISLE_TYPE_COUNT_$LI$();
  };
  WorldIsland.prototype.isExtension = function () {
    return WorldIsland.IS_EXTENSION;
  };
  return WorldIsland;
}();
__s0local108.KINGDOM_ID = 4;
__s0local108.IS_EXTENSION = false;
__s0local108.HARD_R_ISLES_BELOW_ID = 4;
__s0local108.HARD_R_ISLES_APPEAR_PERCENTAGE = 20;
__s0local108.EASY_R_ISLES_APPEAR_PERCENTAGE = 40;
__s0local108.WOOD_PRODUCERS = 3;
__s0local108.STONE_PRODUCERS = 3;
__s0local108.FOOD_PRODUCERS = 2;
__s0local108.BEEF_PRODUCERS = 2;
exports.WorldIsland = __s0local108;
__s0local108.__class = "WorldIsland";
__s0local108.__interfaces = ["IAreaMap"];
var __s0local109;
var __s0local110 = function () {
  function WorldVolcano() {}
  WorldVolcano.VILLAGE_TYPE_COUNT_$LI$ = function () {
    if (WorldVolcano.VILLAGE_TYPE_COUNT == null) {
      WorldVolcano.VILLAGE_TYPE_COUNT = [5, 5, 11];
    }
    return WorldVolcano.VILLAGE_TYPE_COUNT;
  };
  WorldVolcano.AREA_MAP_$LI$ = function () {
    if (WorldVolcano.AREA_MAP == null) {
      WorldVolcano.AREA_MAP = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0], [12, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0], [0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 12, 0, 0], [0, 0, 0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 12, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12], [0, 0, 0, 12, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12]];
    }
    return WorldVolcano.AREA_MAP;
  };
  WorldVolcano.prototype.getAreaMap = function () {
    return WorldVolcano.AREA_MAP_$LI$();
  };
  WorldVolcano.prototype.getKingdomId = function () {
    return WorldVolcano.KINGDOM_ID;
  };
  WorldVolcano.prototype.isClassicWorld = function () {
    return false;
  };
  WorldVolcano.prototype.isDessertWorld = function () {
    return false;
  };
  WorldVolcano.prototype.isIceWorld = function () {
    return false;
  };
  WorldVolcano.prototype.isVolcanoWorld = function () {
    return true;
  };
  WorldVolcano.prototype.isIslandWorld = function () {
    return false;
  };
  WorldVolcano.prototype.getTypeCount = function () {
    return WorldVolcano.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldVolcano.prototype.getActiveTypeCount = function () {
    return WorldVolcano.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldVolcano.prototype.isExtension = function () {
    return WorldVolcano.IS_EXTENSION;
  };
  return WorldVolcano;
}();
__s0local110.KINGDOM_ID = 3;
__s0local110.IS_EXTENSION = false;
__s0local110.WOOD_PRODUCERS = 1;
__s0local110.STONE_PRODUCERS = 1;
__s0local110.FOOD_PRODUCERS = 2;
__s0local110.BEEF_PRODUCERS = 2;
__s0local110.GLASS_PRODUCERS = 2;
exports.WorldVolcano = __s0local110;
__s0local110.__class = "WorldVolcano";
__s0local110.__interfaces = ["IAreaMap"];
__s0local0.POTION_TO_DURATION_$LI$();
__s0local0.POTION_TO_BOOST_$LI$();
__s0local0.POTION_TO_INGREDIENT_TO_COST_$LI$();
__s0local0.HOURS_$LI$();
__s0local2.APPLICATION_TIME_TO_LIVE_$LI$();
__s0local2.FAME_REDUCE_INTERVAL_TEST_$LI$();
__s0local2.FAME_REDUCE_INTERVAL_$LI$();
__s0local2.TYPE_TEMP_BUFFS_$LI$();
__s0local2.MIN_RANK_FORUM_ADMIN_$LI$();
__s0local2.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET_$LI$();
__s0local2.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET_$LI$();
__s0local2.LOWEST_RANK_$LI$();
__s0local2.DIPLOMACY_REQUEST_EXPIRATION_TEST_$LI$();
__s0local2.DIPLOMACY_REQUEST_EXPIRATION_$LI$();
__s0local2.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_$LI$();
__s0local2.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_TEST_$LI$();
__s0local2.DIPLOMACY_AUTO_WAR_PROTECTION_TEST_$LI$();
__s0local2.DIPLOMACY_AUTO_WAR_PROTECTION_$LI$();
__s0local2.MIN_MEMBERSHIP_FOR_DONATE_$LI$();
__s0local2.MIN_XP_$LI$();
__s0local2.ALLIANCE_HELP_REPAIR_COOLDOWN_$LI$();
__s0local11.PRIME_SALE_BOOSTER_IDS_$LI$();
__s0local11.OVERSEER_DURATION_$LI$();
__s0local11.MARAUDER_DURATION_$LI$();
__s0local11.INSTRUCTOR_DURATION_$LI$();
__s0local11.TAX_BRIBE_DURATION_$LI$();
__s0local11.REMINDER_LEAD_TIME_SECONDS_$LI$();
__s0local13.NPC_ATTACK_DEFAULT_SOLDIER_IDS_$LI$();
__s0local13.GATE_WOD_IDS_VILLAGES_$LI$();
__s0local13.WALL_WOD_IDS_VILLAGES_$LI$();
__s0local13.FLANKBONUS_RAID_$LI$();
__s0local13.FLANKBONUS_$LI$();
__s0local13.WAVE_UNLOCK_LEVEL_$LI$();
__s0local13.ITEMS_FINALWAVE_UNITS_$LI$();
__s0local13.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP_$LI$();
__s0local13.ITEMS_ASUPPORT_TOOLS_$LI$();
__s0local13.LEVELS_RIGHTWALL_UNITS_$LI$();
__s0local13.ITEMS_RIGHTWALL_UNITS_$LI$();
__s0local13.LEVELS_RIGHTWALL_TOOLS_$LI$();
__s0local13.ITEMS_RIGHTWALL_TOOLS_$LI$();
__s0local13.LEVELS_MIDDLEWALL_UNITS_CROSS_PLAY_$LI$();
__s0local13.ITEMS_MIDDLEWALL_UNITS_CROSS_PLAY_$LI$();
__s0local13.LEVELS_MIDDLEWALL_UNITS_$LI$();
__s0local13.ITEMS_MIDDLEWALL_UNITS_$LI$();
__s0local13.LEVELS_MIDDLEWALL_TOOLS_$LI$();
__s0local13.ITEMS_MIDDLEWALL_TOOLS_$LI$();
__s0local13.LEVELS_LEFTWALL_UNITS_$LI$();
__s0local13.ITEMS_LEFTWALL_UNITS_$LI$();
__s0local13.LEVELS_LEFTWALL_TOOLS_$LI$();
__s0local13.ITEMS_LEFTWALL_TOOLS_$LI$();
__s0local17.FREE_SKIP_TIME_$LI$();
__s0local17.UNLOCK_DURATION_$LI$();
__s0local18.SLOT_TYPE_COUNTS_$LI$();
__s0local18.MAX_SLOTS_$LI$();
__s0local19.RANDOM_REWARD_STEPS_$LI$();
__s0local19.REWARD_STEPS_$LI$();
__s0local22.LEVELS_RIGHTWALL_FACTION_$LI$();
__s0local22.ITEMS_RIGHTWALL_FACTION_$LI$();
__s0local22.LEVELS_MIDDLEWALL_FACTION_$LI$();
__s0local22.ITEMS_MIDDLEWALL_FACTION_$LI$();
__s0local22.LEVELS_LEFTWALL_FACTION_$LI$();
__s0local22.ITEMS_LEFTWALL_FACTION_$LI$();
__s0local22.LEVELS_RIGHTMOAT_$LI$();
__s0local22.ITEMS_RIGHTMOAT_$LI$();
__s0local22.LEVELS_MIDDLEMOAT_$LI$();
__s0local22.ITEMS_MIDDLEMOAT_$LI$();
__s0local22.LEVELS_LEFTMOAT_$LI$();
__s0local22.ITEMS_LEFTMOAT_$LI$();
__s0local22.LEVELS_SKILLS_RIGHTWALL_$LI$();
__s0local22.ITEMS_SKILLS_RIGHTWALL_$LI$();
__s0local22.LEVELS_RIGHTWALL_$LI$();
__s0local22.ITEMS_RIGHTWALL_$LI$();
__s0local22.PLAYER_LEVEL_GATE_$LI$();
__s0local22.PLAYER_LEVEL_WALL_$LI$();
__s0local22.LEVELS_MIDDLEWALL_$LI$();
__s0local22.ITEMS_MIDDLEWALL_$LI$();
__s0local22.LEVELS_SKILLS_LEFTWALL_$LI$();
__s0local22.ITEMS_SKILLS_LEFTWALL_$LI$();
__s0local22.LEVELS_LEFTWALL_$LI$();
__s0local22.ITEMS_LEFTWALL_$LI$();
__s0local22.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP_$LI$();
__s0local22.ITEMS_SUPPORT_TOOLS_$LI$();
__s0local22.LEVELS_KEEP_$LI$();
__s0local22.ITEMS_KEEP_$LI$();
__s0local26.COOLDOWN_$LI$();
__s0local28.PER_TEN_THOUSAND_$LI$();
__s0local28.SLOT_IDS_FOR_GEMS_$LI$();
__s0local28.SLOT_IDS_$LI$();
__s0local30.QUEST_SKIP_AUTO_START_EVENTS_$LI$();
__s0local30.LUCKY_WHEEL_EVENT_TYPES_$LI$();
__s0local30.EVENT_TYPES_FOR_OFFICERS_SCHOOL_$LI$();
__s0local30.ALLOWED_EVENT_TYPES_FOR_LTPE_$LI$();
__s0local30.LTPE_DEFAULT_SUBTYPE_$LI$();
__s0local30.LEAGUETYPE_EVENT_SUBTYPES_FACTION_$LI$();
__s0local30.LEAGUETYPE_EVENT_SUBTYPES_ALIEN_INVASION_ALLIANCE_$LI$();
__s0local30.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_ALIEN_INVASION_ALLIANCE_$LI$();
__s0local30.LTPE_DEFAULT_SUBTYPES_$LI$();
__s0local30.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT_$LI$();
__s0local30.BUY_INSTANT_TOOL_CHECK_RELEVANT_EVENTS_$LI$();
__s0local30.COLOSSUS_EVENT_TYPES_$LI$();
__s0local30.TREASURE_MAP_UNIT_DEALERS_$LI$();
__s0local30.ALIEN_INVASION_EVENT_TYPES_$LI$();
__s0local30.MODIFIABLE_PACKAGEEVENT_EVENT_TYPES_$LI$();
__s0local30.ALL_PACKAGEEVENT_EVENT_TYPES_$LI$();
__s0local30.EVENTTYPES_WITH_ALLIANCE_INVASION_CAMP_$LI$();
__s0local30.FACTION_INVASION_EVENT_TYPES_$LI$();
__s0local30.SAMURAI_INVASION_EVENT_TYPES_$LI$();
__s0local30.NOMAD_INVASION_EVENT_TYPES_$LI$();
__s0local30.CRUSADE_EVENT_TYPES_$LI$();
__s0local30.DUNGEON_EVENT_TYPES_$LI$();
__s0local30.ARTIFACT_EVENT_TYPES_$LI$();
__s0local31.GIFT_COOLDOWN_$LI$();
__s0local32.TITLE_RESET_INTERVAL_SECONDS_$LI$();
__s0local32.VILLAGE_COOLDOWN_$LI$();
__s0local32.TOWER_COOLDOWN_$LI$();
__s0local32.FACTIONS_$LI$();
__s0local42.GLOBALSERVER_PREVIOUS_RUN_HIGHSCORES_ON_MAINSERVER_$LI$();
__s0local42.NO_OFFSET_$LI$();
__s0local42.MIN_XP_FOR_HIGHSCORE_$LI$();
__s0local42.LEAGUED_HIGHSCORES_$LI$();
__s0local42.TITLE_COOLDOWN_TEST_$LI$();
__s0local42.TITLE_COOLDOWN_$LI$();
__s0local42.POINTS_CAPITALS_$LI$();
__s0local42.GLOBAL_SERVER_PREVIOUS_RUN_NUMBER_OF_ENTRIES_SHOWN_$LI$();
__s0local42.DAIMYO_NUMBER_OF_ENTRIES_SHOWN_$LI$();
__s0local42.SEASON_NUMBER_OF_ENTRIES_SHOWN_$LI$();
__s0local44.FACTOR_FORMULA_1_REWARD_$LI$();
__s0local44.EXPONENT_FORMULA_1_REWARD_$LI$();
__s0local44.OFFSET_REWARD_$LI$();
__s0local44.MAX_VALUE_$LI$();
__s0local44.FACTORS_REWARD_$LI$();
__s0local44.MIN_VALUE_$LI$();
__s0local44.OFFSET_FORMULA_1_COND_$LI$();
__s0local44.FACTOR_FORMULA_1_COND_$LI$();
__s0local44.EXPONENT_FORMULA_1_COND_$LI$();
__s0local46.TIER_UNLOCK_POINTS_$LI$();
__s0local46.RESET_COOLDOWN_IN_SECONDS_$LI$();
__s0local47.SKINS_$LI$();
__s0local56.ABANDON_CANCEL_TIME_$LI$();
__s0local56.ABANDON_TIME_TEST_$LI$();
__s0local56.ABANDON_TIME_$LI$();
__s0local56.MIN_TIME_BEFORE_ABANDON_TEST_$LI$();
__s0local56.MIN_TIME_BEFORE_ABANDON_$LI$();
__s0local56.SIEGE_TIME_TEST_$LI$();
__s0local56.SIEGE_TIME_$LI$();
__s0local58.PLAYER_NAME_CHANGE_COOLDOWN_$LI$();
__s0local58.SAVE_ACCOUNT_LEVEL_CATEGORY_$LI$();
__s0local58.LOGIN_BONUS_KEY_PRICES_$LI$();
__s0local58.CUMULATED_LEVEL_CAP_$LI$();
__s0local58.LEGEND_MAX_XP_$LI$();
__s0local58.COMBINED_LEVEL_CAP_$LI$();
__s0local58.LEVEL_CAP_XP_$LI$();
__s0local58.LOGIN_LP_INCENTIVES_C2_$LI$();
__s0local58.LOGIN_LP_INCENTIVES_C1_$LI$();
__s0local58.MAIL_CONFIRM_C2_$LI$();
__s0local58.PEACE_MODE_COOLDOWN_$LI$();
__s0local58.PEACE_MODE_HEAT_UP_TEST_$LI$();
__s0local58.PEACE_MODE_HEAT_UP_$LI$();
__s0local58.PEACE_MODE_DURATION_$LI$();
__s0local58.PEACE_MODE_C2_$LI$();
__s0local58.OPEN_GATE_DURATION_$LI$();
__s0local58.OPEN_GATE_C2_$LI$();
__s0local58.NAME_SUFFIX_$LI$();
__s0local58.NAME_MIDDLE_$LI$();
__s0local58.NAME_PREFIX_$LI$();
__s0local59.POINTS_FOR_TASK_$LI$();
__s0local61.ALLIANCE_MOBILIZATION_POPUPS_$LI$();
__s0local61.SAMURAI_ALIEN_INVASION_POPUPS_$LI$();
__s0local61.ALLIANCE_RED_ALIEN_INVASION_POPUPS_$LI$();
__s0local61.FACTION_INVASION_POPUPS_$LI$();
__s0local61.ALLIANCE_TOURNAMENT_POPUPS_$LI$();
__s0local61.SAMURAI_INVASION_POPUPS_$LI$();
__s0local61.ALLIANCE_NOMAD_INVASION_POPUPS_$LI$();
__s0local61.ALLIANCE_ALIEN_INVASION_POPUPS_$LI$();
__s0local62.FACTOR_DONATE_ALLI_$LI$();
__s0local62.FACTOR_BRIBE_TAX_C2_$LI$();
__s0local62.FACTOR_C2_$LI$();
__s0local62.FACTOR_C1_$LI$();
__s0local64.SKIN_LIST_$LI$();
__s0local64.BRICK_SKIN_ID_$LI$();
__s0local64.GOLD_SKIN_ID_$LI$();
__s0local64.DEFAULT_SKIN_ID_$LI$();
__s0local66.PUSHCATEGORY_FORWARDED_MESSAGES_$LI$();
__s0local66.PUSHCATEGORY_ALLIANCE_ATTACK_$LI$();
__s0local66.PUSHCATEGORY_INGAME_EVENTS_$LI$();
__s0local66.PUSHCATEGORY_TAX_$LI$();
__s0local66.PUSHCATEGORY_RESSOURCE_$LI$();
__s0local66.PUSHCATEGORY_MISC_$LI$();
__s0local66.PUSHCATEGORY_CONSTRUCTION_$LI$();
__s0local69.TEST_RELOCATION_COOLDOWN_$LI$();
__s0local69.TEST_RELOCATION_DURATION_$LI$();
__s0local69.RELOCATION_COOLDOWN_$LI$();
__s0local69.RELOCATION_COST_C2_$LI$();
__s0local69.RELOCATION_DURATION_$LI$();
__s0local70.RESOURCE_TYPES_TO_MODIFY_$LI$();
__s0local71.CHARGETIME_$LI$();
__s0local72.RESOURCE_FACTORS_$LI$();
__s0local80.SABOTAGE_PROTECTION_WINDOW_$LI$();
__s0local80.MAX_SABOTAGE_COOLDOWN_$LI$();
__s0local80.SPY_VALIDITY_$LI$();
__s0local82.PLAYER_TYPE_PACKAGES_$LI$();
__s0local84.COLLECTOR_LOSS_$LI$();
__s0local84.START_COST_C1_PERC_$LI$();
__s0local84.START_COST_C2_$LI$();
__s0local84.COLLECTOR_DURATION_$LI$();
__s0local92.PLAGUE_TRAVEL_TIME_$LI$();
__s0local92.MAX_SLOWDOWN_DURATION_IN_SECONDS_$LI$();
__s0local92.MAX_FALLBACK_TIME_$LI$();
__s0local92.BASIC_FIELD_TRAVEL_TIME_$LI$();
__s0local93.STAGED_CRUSADE_MAPS_$LI$();
__s0local93.CRUSADE_MAP_IDS_$LI$();
__s0local94.TUTORIAL_TMAPS_$LI$();
__s0local95.UNLOCK_DURATION_$LI$();
__s0local100.AREA_MAP_$LI$();
__s0local100.OUTPOST_TYPE_COUNT_$LI$();
__s0local101.AREA_MAP_$LI$();
__s0local101.OUTPOST_TYPE_COUNT_$LI$();
__s0local102.AREA_MAP_$LI$();
__s0local102.OUTPOST_TYPE_COUNT_$LI$();
__s0local103.AREA_MAP_$LI$();
__s0local103.OUTPOST_TYPE_COUNT_$LI$();
__s0local104.AREA_MAP_$LI$();
__s0local104.OUTPOST_TYPE_COUNT_$LI$();
__s0local105.WORLD_IDS_$LI$();
__s0local105.OUTPOST_TYPE_LIST_$LI$();
__s0local105.ALIEN_CAMP_AREA_TYPES_$LI$();
__s0local106.AREA_MAP_$LI$();
__s0local106.VILLAGE_TYPE_COUNT_$LI$();
__s0local107.AREA_MAP_$LI$();
__s0local107.VILLAGE_TYPE_COUNT_$LI$();
__s0local108.AREA_MAP_$LI$();
__s0local108.ISLE_TYPE_COUNT_$LI$();
__s0local110.AREA_MAP_$LI$();
__s0local110.VILLAGE_TYPE_COUNT_$LI$();
(function (__s2198param0) {
  __s2198param0[__s2198param0.ALL_OK = 0] = "ALL_OK";
  __s2198param0[__s2198param0.GENERAL_ERROR = 1] = "GENERAL_ERROR";
  __s2198param0[__s2198param0.INVALID_PARAMETER_VALUE = 2] = "INVALID_PARAMETER_VALUE";
  __s2198param0[__s2198param0.MISSING_PARAMETER = 3] = "MISSING_PARAMETER";
  __s2198param0[__s2198param0.INVALID_WOD_ID = 4] = "INVALID_WOD_ID";
  __s2198param0[__s2198param0.INVALID_OBJECT_ID = 5] = "INVALID_OBJECT_ID";
  __s2198param0[__s2198param0.INVALID_POSITION = 6] = "INVALID_POSITION";
  __s2198param0[__s2198param0.FEATURE_NOT_IN_THIS_NETWORK = 7] = "FEATURE_NOT_IN_THIS_NETWORK";
  __s2198param0[__s2198param0.NOT_ENOUGH_CURRENCY1 = 10] = "NOT_ENOUGH_CURRENCY1";
  __s2198param0[__s2198param0.NOT_ENOUGH_CURRENCY2 = 11] = "NOT_ENOUGH_CURRENCY2";
  __s2198param0[__s2198param0.LEVEL_TOO_HIGH_OR_LOW = 12] = "LEVEL_TOO_HIGH_OR_LOW";
  __s2198param0[__s2198param0.NO_PAY_USER = 14] = "NO_PAY_USER";
  __s2198param0[__s2198param0.NO_CHANGE = 15] = "NO_CHANGE";
  __s2198param0[__s2198param0.CAMP_IS_OCCUPIED = 16] = "CAMP_IS_OCCUPIED";
  __s2198param0[__s2198param0.WRONG_INPUT_SCREEN = 19] = "WRONG_INPUT_SCREEN";
  __s2198param0[__s2198param0.INVALID_PASSWORD = 20] = "INVALID_PASSWORD";
  __s2198param0[__s2198param0.PLAYER_NOT_FOUND = 21] = "PLAYER_NOT_FOUND";
  __s2198param0[__s2198param0.NAME_ALREADY_IN_USE = 22] = "NAME_ALREADY_IN_USE";
  __s2198param0[__s2198param0.EMAIL_ALREADY_IN_USE = 23] = "EMAIL_ALREADY_IN_USE";
  __s2198param0[__s2198param0.INVALID_EMAIL = 24] = "INVALID_EMAIL";
  __s2198param0[__s2198param0.ALREADY_VERIFIED_MAIL = 25] = "ALREADY_VERIFIED_MAIL";
  __s2198param0[__s2198param0.NO_AVATAR_CREATED = 26] = "NO_AVATAR_CREATED";
  __s2198param0[__s2198param0.IS_BANNED = 27] = "IS_BANNED";
  __s2198param0[__s2198param0.INVALID_NAME = 28] = "INVALID_NAME";
  __s2198param0[__s2198param0.WORLD_IS_FULL = 29] = "WORLD_IS_FULL";
  __s2198param0[__s2198param0.WRONG_MODE = 50] = "WRONG_MODE";
  __s2198param0[__s2198param0.NOT_MOVEABLE = 51] = "NOT_MOVEABLE";
  __s2198param0[__s2198param0.POSITION_IS_BLOCKED = 52] = "POSITION_IS_BLOCKED";
  __s2198param0[__s2198param0.NOT_IN_OWNED_CASTLE = 53] = "NOT_IN_OWNED_CASTLE";
  __s2198param0[__s2198param0.WOD_NOT_ACTIVE = 54] = "WOD_NOT_ACTIVE";
  __s2198param0[__s2198param0.NOT_ENOUGH_RESOURCES = 55] = "NOT_ENOUGH_RESOURCES";
  __s2198param0[__s2198param0.NOT_UPGRADEABLE = 56] = "NOT_UPGRADEABLE";
  __s2198param0[__s2198param0.TITLE_TOO_LOW = 57] = "TITLE_TOO_LOW";
  __s2198param0[__s2198param0.MOVE_FAILED = 58] = "MOVE_FAILED";
  __s2198param0[__s2198param0.NOT_SELLABLE = 59] = "NOT_SELLABLE";
  __s2198param0[__s2198param0.NO_COLLECTABLE_OBJECT_BONUS = 60] = "NO_COLLECTABLE_OBJECT_BONUS";
  __s2198param0[__s2198param0.NOT_STOREABLE = 61] = "NOT_STOREABLE";
  __s2198param0[__s2198param0.INVALID_OBJECT_STATE = 62] = "INVALID_OBJECT_STATE";
  __s2198param0[__s2198param0.NO_FREE_CONSTRUCTION_SLOT = 63] = "NO_FREE_CONSTRUCTION_SLOT";
  __s2198param0[__s2198param0.INVALID_NUMBER_OF_PARAMETERS = 64] = "INVALID_NUMBER_OF_PARAMETERS";
  __s2198param0[__s2198param0.INVALID_PLAYER_ID = 65] = "INVALID_PLAYER_ID";
  __s2198param0[__s2198param0.NO_SUCH_MESSAGE = 66] = "NO_SUCH_MESSAGE";
  __s2198param0[__s2198param0.NOT_ADDRESSED_TO_USER = 67] = "NOT_ADDRESSED_TO_USER";
  __s2198param0[__s2198param0.INVALID_RECEIVER_ID = 68] = "INVALID_RECEIVER_ID";
  __s2198param0[__s2198param0.PLAYER_IS_IGNORED = 69] = "PLAYER_IS_IGNORED";
  __s2198param0[__s2198param0.USAGE_OF_BADWORDS = 70] = "USAGE_OF_BADWORDS";
  __s2198param0[__s2198param0.PLAYER_IS_GUEST = 80] = "PLAYER_IS_GUEST";
  __s2198param0[__s2198param0.AREA_NOT_ATTACKABLE = 81] = "AREA_NOT_ATTACKABLE";
  __s2198param0[__s2198param0.ALREADY_TO_MANY_OUTPOSTS = 82] = "ALREADY_TO_MANY_OUTPOSTS";
  __s2198param0[__s2198param0.ALREADY_COLLECTING_TAXES = 83] = "ALREADY_COLLECTING_TAXES";
  __s2198param0[__s2198param0.TAX_COLLECTOR_NOT_FINISHED = 84] = "TAX_COLLECTOR_NOT_FINISHED";
  __s2198param0[__s2198param0.TAX_COLLECTOR_HAS_OLD_MONEY = 85] = "TAX_COLLECTOR_HAS_OLD_MONEY";
  __s2198param0[__s2198param0.NOT_REPAIRABLE = 86] = "NOT_REPAIRABLE";
  __s2198param0[__s2198param0.MISSING_REQUIRED_BUILDING = 87] = "MISSING_REQUIRED_BUILDING";
  __s2198param0[__s2198param0.TOO_MUCH_UNITS = 88] = "TOO_MUCH_UNITS";
  __s2198param0[__s2198param0.PACKAGE_NOT_BOOSTABLE = 89] = "PACKAGE_NOT_BOOSTABLE";
  __s2198param0[__s2198param0.CANT_START_NEW_ARMIES = 90] = "CANT_START_NEW_ARMIES";
  __s2198param0[__s2198param0.INVALID_ARMY_REQUEST = 91] = "INVALID_ARMY_REQUEST";
  __s2198param0[__s2198param0.NO_SELF_DESTRUCTION = 92] = "NO_SELF_DESTRUCTION";
  __s2198param0[__s2198param0.EXCEEDING_MAXIMUM_COUNT = 93] = "EXCEEDING_MAXIMUM_COUNT";
  __s2198param0[__s2198param0.PLAYER_HAS_NOOB_PROTECTION = 94] = "PLAYER_HAS_NOOB_PROTECTION";
  __s2198param0[__s2198param0.COOLING_DOWN = 95] = "COOLING_DOWN";
  __s2198param0[__s2198param0.PLAYER_NOT_ON_MAP = 96] = "PLAYER_NOT_ON_MAP";
  __s2198param0[__s2198param0.MISSING_GENERAL = 97] = "MISSING_GENERAL";
  __s2198param0[__s2198param0.TEXT_TOO_SHORT = 98] = "TEXT_TOO_SHORT";
  __s2198param0[__s2198param0.TEXT_TOO_LONG = 99] = "TEXT_TOO_LONG";
  __s2198param0[__s2198param0.MOVEMENT_HAS_NO_UNITS = 100] = "MOVEMENT_HAS_NO_UNITS";
  __s2198param0[__s2198param0.MISSING_UNITS = 101] = "MISSING_UNITS";
  __s2198param0[__s2198param0.PLAYER_ALREADY_HAS_INVITATION = 102] = "PLAYER_ALREADY_HAS_INVITATION";
  __s2198param0[__s2198param0.TOO_MANY_FRIENDS_MY = 103] = "TOO_MANY_FRIENDS_MY";
  __s2198param0[__s2198param0.PLAYER_ALREADY_IS_FRIEND = 104] = "PLAYER_ALREADY_IS_FRIEND";
  __s2198param0[__s2198param0.NOT_ENOUGH_SPIES = 105] = "NOT_ENOUGH_SPIES";
  __s2198param0[__s2198param0.RUIN = 106] = "RUIN";
  __s2198param0[__s2198param0.TOO_MANY_FRIENDS_OTHER = 107] = "TOO_MANY_FRIENDS_OTHER";
  __s2198param0[__s2198param0.UNKNOWN_MOVEMENT = 108] = "UNKNOWN_MOVEMENT";
  __s2198param0[__s2198param0.MISSING_CARRIAGE = 109] = "MISSING_CARRIAGE";
  __s2198param0[__s2198param0.IN_OTHER_ALLI = 110] = "IN_OTHER_ALLI";
  __s2198param0[__s2198param0.IN_THIS_ALLI = 111] = "IN_THIS_ALLI";
  __s2198param0[__s2198param0.ALLI_FULL = 112] = "ALLI_FULL";
  __s2198param0[__s2198param0.ALLI_NO_RIGHTS = 113] = "ALLI_NO_RIGHTS";
  __s2198param0[__s2198param0.ALLI_NOT_FOUND = 114] = "ALLI_NOT_FOUND";
  __s2198param0[__s2198param0.ALLI_NOT_ENOUGH_C1 = 115] = "ALLI_NOT_ENOUGH_C1";
  __s2198param0[__s2198param0.ALLI_NOT_ENOUGH_C2 = 116] = "ALLI_NOT_ENOUGH_C2";
  __s2198param0[__s2198param0.ALLI_NOT_ENOUGH_RES = 117] = "ALLI_NOT_ENOUGH_RES";
  __s2198param0[__s2198param0.OTHER_LEVEL_TOO_LOW = 120] = "OTHER_LEVEL_TOO_LOW";
  __s2198param0[__s2198param0.TOO_MUCH_TRAVEL_TIME = 121] = "TOO_MUCH_TRAVEL_TIME";
  __s2198param0[__s2198param0.DEFENDER_IS_IN_YOUR_ALLI = 122] = "DEFENDER_IS_IN_YOUR_ALLI";
  __s2198param0[__s2198param0.NOT_IN_SAME_ALLIANCE = 123] = "NOT_IN_SAME_ALLIANCE";
  __s2198param0[__s2198param0.JUST_JOINED_ALLIANCE = 124] = "JUST_JOINED_ALLIANCE";
  __s2198param0[__s2198param0.NO_SPY_DATA = 130] = "NO_SPY_DATA";
  __s2198param0[__s2198param0.TARGET_HAS_PEACE = 131] = "TARGET_HAS_PEACE";
  __s2198param0[__s2198param0.PLAYER_HAS_PEACE = 132] = "PLAYER_HAS_PEACE";
  __s2198param0[__s2198param0.MISSING_BARON = 133] = "MISSING_BARON";
  __s2198param0[__s2198param0.AREA_NOT_CONQUERABLE = 134] = "AREA_NOT_CONQUERABLE";
  __s2198param0[__s2198param0.TAX_COLLECTOR_FINISHED = 135] = "TAX_COLLECTOR_FINISHED";
  __s2198param0[__s2198param0.TAX_COLLECTOR_HAS_NO_MONEY = 136] = "TAX_COLLECTOR_HAS_NO_MONEY";
  __s2198param0[__s2198param0.NO_FREE_RENAME = 137] = "NO_FREE_RENAME";
  __s2198param0[__s2198param0.AREA_NOT_ABANDONABLE = 138] = "AREA_NOT_ABANDONABLE";
  __s2198param0[__s2198param0.ONLY_IN_MAIN_CASTLE = 139] = "ONLY_IN_MAIN_CASTLE";
  __s2198param0[__s2198param0.NOT_OWNED_LONG_ENOUGH = 140] = "NOT_OWNED_LONG_ENOUGH";
  __s2198param0[__s2198param0.IN_ALLIED_ALLI = 141] = "IN_ALLIED_ALLI";
  __s2198param0[__s2198param0.MAP_NOT_AVAILABLE = 142] = "MAP_NOT_AVAILABLE";
  __s2198param0[__s2198param0.NOT_COMPLETED = 143] = "NOT_COMPLETED";
  __s2198param0[__s2198param0.NO_EVENT_BUILDING = 144] = "NO_EVENT_BUILDING";
  __s2198param0[__s2198param0.NO_EVENT = 145] = "NO_EVENT";
  __s2198param0[__s2198param0.LOCKED = 146] = "LOCKED";
  __s2198param0[__s2198param0.NOTHING_TO_SKIP = 147] = "NOTHING_TO_SKIP";
  __s2198param0[__s2198param0.ALREADY_TRANSFERING = 148] = "ALREADY_TRANSFERING";
  __s2198param0[__s2198param0.NO_CAMP = 149] = "NO_CAMP";
  __s2198param0[__s2198param0.INVALID_NODE = 150] = "INVALID_NODE";
  __s2198param0[__s2198param0.ALREADY_ACHIEVED_NODE = 151] = "ALREADY_ACHIEVED_NODE";
  __s2198param0[__s2198param0.NO_SPACE = 152] = "NO_SPACE";
  __s2198param0[__s2198param0.NO_PLAYER_FOUND = 153] = "NO_PLAYER_FOUND";
  __s2198param0[__s2198param0.STORAGE_CAPACITY_REACHED = 154] = "STORAGE_CAPACITY_REACHED";
  __s2198param0[__s2198param0.OTHER_ALLIANCE_REACHED_MAXIMUM = 155] = "OTHER_ALLIANCE_REACHED_MAXIMUM";
  __s2198param0[__s2198param0.THIS_ALLIANCE_REACHED_MAXIMUM = 156] = "THIS_ALLIANCE_REACHED_MAXIMUM";
  __s2198param0[__s2198param0.REQUESTED_AMOUNT_NOT_ALLOWED = 157] = "REQUESTED_AMOUNT_NOT_ALLOWED";
  __s2198param0[__s2198param0.PACKAGE_NOT_IN_EVENT = 158] = "PACKAGE_NOT_IN_EVENT";
  __s2198param0[__s2198param0.PACKAGE_NOT_FOUND = 159] = "PACKAGE_NOT_FOUND";
  __s2198param0[__s2198param0.ALREADY_HUNTING = 160] = "ALREADY_HUNTING";
  __s2198param0[__s2198param0.OTHER_PLAYER_IN_OTHER_ALLI = 161] = "OTHER_PLAYER_IN_OTHER_ALLI";
  __s2198param0[__s2198param0.ALREADY_ABANDONING_OUTPOST = 162] = "ALREADY_ABANDONING_OUTPOST";
  __s2198param0[__s2198param0.ALREADY_RESEARCHING = 163] = "ALREADY_RESEARCHING";
  __s2198param0[__s2198param0.PREREQUISITE_NOT_MATCHED = 164] = "PREREQUISITE_NOT_MATCHED";
  __s2198param0[__s2198param0.ALREADY_RESEARCHED = 165] = "ALREADY_RESEARCHED";
  __s2198param0[__s2198param0.MAY_NOT_FORWARD = 166] = "MAY_NOT_FORWARD";
  __s2198param0[__s2198param0.ALREADY_HAS_SPY_REPORT = 167] = "ALREADY_HAS_SPY_REPORT";
  __s2198param0[__s2198param0.ALLI_APPLICATION_EXISTS = 168] = "ALLI_APPLICATION_EXISTS";
  __s2198param0[__s2198param0.ALLI_NOT_SEARCHING_MEMBERS = 169] = "ALLI_NOT_SEARCHING_MEMBERS";
  __s2198param0[__s2198param0.ALLI_REACHED_MAX_APLLICATIONS = 170] = "ALLI_REACHED_MAX_APLLICATIONS";
  __s2198param0[__s2198param0.ALLI_APPLICATION_NOT_EXISTS = 171] = "ALLI_APPLICATION_NOT_EXISTS";
  __s2198param0[__s2198param0.CL_OBJECT_ALREADY_IN_LIST = 172] = "CL_OBJECT_ALREADY_IN_LIST";
  __s2198param0[__s2198param0.MAILDOMAIN_BLOCKED = 173] = "MAILDOMAIN_BLOCKED";
  __s2198param0[__s2198param0.ALREADY_PURCHASED = 174] = "ALREADY_PURCHASED";
  __s2198param0[__s2198param0.INVALID_KINGDOM_ID = 175] = "INVALID_KINGDOM_ID";
  __s2198param0[__s2198param0.ALREADY_UNLOCKED = 176] = "ALREADY_UNLOCKED";
  __s2198param0[__s2198param0.NOT_IN_THIS_KINGDOM = 177] = "NOT_IN_THIS_KINGDOM";
  __s2198param0[__s2198param0.KINGDOM_NOT_AVAILABLE_FOR_USER = 178] = "KINGDOM_NOT_AVAILABLE_FOR_USER";
  __s2198param0[__s2198param0.TARGETAREA_DOES_NOT_EXSIST = 179] = "TARGETAREA_DOES_NOT_EXSIST";
  __s2198param0[__s2198param0.MAX_KINGDOM_GOODS_MOVEMENTS_EXCEEDED = 180] = "MAX_KINGDOM_GOODS_MOVEMENTS_EXCEEDED";
  __s2198param0[__s2198param0.MAX_KINGDOM_ARMY_MOVEMENTS_EXCEEDED = 181] = "MAX_KINGDOM_ARMY_MOVEMENTS_EXCEEDED";
  __s2198param0[__s2198param0.KINGDOM_MOVEMENTS_NOT_AVAILABLE = 182] = "KINGDOM_MOVEMENTS_NOT_AVAILABLE";
  __s2198param0[__s2198param0.MULTIPLE_MOVEMENTS_AVAILABLE = 183] = "MULTIPLE_MOVEMENTS_AVAILABLE";
  __s2198param0[__s2198param0.VILLAGE_CAP_WOOD_REACHED = 184] = "VILLAGE_CAP_WOOD_REACHED";
  __s2198param0[__s2198param0.VILLAGE_CAP_STONE_REACHED = 185] = "VILLAGE_CAP_STONE_REACHED";
  __s2198param0[__s2198param0.VILLAGE_CAP_FOOD_REACHED = 186] = "VILLAGE_CAP_FOOD_REACHED";
  __s2198param0[__s2198param0.NO_CONTOR = 187] = "NO_CONTOR";
  __s2198param0[__s2198param0.VILLAGE_WOULD_GET_LOST = 188] = "VILLAGE_WOULD_GET_LOST";
  __s2198param0[__s2198param0.INVALID_STARTAREA_FOR_CANCEL_MOVEMENT = 189] = "INVALID_STARTAREA_FOR_CANCEL_MOVEMENT";
  __s2198param0[__s2198param0.CL_MOAT_ALREADY_IN = 190] = "CL_MOAT_ALREADY_IN";
  __s2198param0[__s2198param0.IS_ALREADY_ACHIEVED = 191] = "IS_ALREADY_ACHIEVED";
  __s2198param0[__s2198param0.NO_TARGET = 192] = "NO_TARGET";
  __s2198param0[__s2198param0.ONLY_IN_CAPITAL = 193] = "ONLY_IN_CAPITAL";
  __s2198param0[__s2198param0.ALREADY_HAS_CAPITAL = 194] = "ALREADY_HAS_CAPITAL";
  __s2198param0[__s2198param0.NOT_ENOUGH_INGREDIENTS = 195] = "NOT_ENOUGH_INGREDIENTS";
  __s2198param0[__s2198param0.NOT_IN_CAPITAL = 196] = "NOT_IN_CAPITAL";
  __s2198param0[__s2198param0.IS_RELOCATING = 197] = "IS_RELOCATING";
  __s2198param0[__s2198param0.RELOCATION_COOLDOWN_RUNNING = 198] = "RELOCATION_COOLDOWN_RUNNING";
  __s2198param0[__s2198param0.IS_RELOCATING_OTHER = 199] = "IS_RELOCATING_OTHER";
  __s2198param0[__s2198param0.RELOCATION_RESERVED = 200] = "RELOCATION_RESERVED";
  __s2198param0[__s2198param0.FACTION_ALREADY_CHOSEN = 201] = "FACTION_ALREADY_CHOSEN";
  __s2198param0[__s2198param0.AREA_CANNOT_BUY_THIS = 202] = "AREA_CANNOT_BUY_THIS";
  __s2198param0[__s2198param0.INVALID_AREA = 203] = "INVALID_AREA";
  __s2198param0[__s2198param0.SPECIALCAMP_PROTECTED = 204] = "SPECIALCAMP_PROTECTED";
  __s2198param0[__s2198param0.NO_MORE_TOWERS = 205] = "NO_MORE_TOWERS";
  __s2198param0[__s2198param0.FACTION_PLAYER_CAMP_LIMIT_REACHED = 206] = "FACTION_PLAYER_CAMP_LIMIT_REACHED";
  __s2198param0[__s2198param0.HUNTER_LEVEL_TOO_LOW = 207] = "HUNTER_LEVEL_TOO_LOW";
  __s2198param0[__s2198param0.INVALID_CUSTOM_INVENTORY_OBJECT_ID = 208] = "INVALID_CUSTOM_INVENTORY_OBJECT_ID";
  __s2198param0[__s2198param0.SPECIALEVENT_NOT_RUNNING = 209] = "SPECIALEVENT_NOT_RUNNING";
  __s2198param0[__s2198param0.SPECIALEVENT_STILL_RUNNING = 210] = "SPECIALEVENT_STILL_RUNNING";
  __s2198param0[__s2198param0.NOT_ENOUGH_POINTS = 211] = "NOT_ENOUGH_POINTS";
  __s2198param0[__s2198param0.CASTLE_HAS_MOVEMENTS = 212] = "CASTLE_HAS_MOVEMENTS";
  __s2198param0[__s2198param0.ALREADY_REDEEMED = 213] = "ALREADY_REDEEMED";
  __s2198param0[__s2198param0.EQUIPMENT_NOT_FOUND = 214] = "EQUIPMENT_NOT_FOUND";
  __s2198param0[__s2198param0.DIFFERENT_EQUIPMENT_RARENESS = 215] = "DIFFERENT_EQUIPMENT_RARENESS";
  __s2198param0[__s2198param0.RARENESS_TO_HIGH = 216] = "RARENESS_TO_HIGH";
  __s2198param0[__s2198param0.BARON_IS_USED = 217] = "BARON_IS_USED";
  __s2198param0[__s2198param0.COMMANDER_IS_USED = 218] = "COMMANDER_IS_USED";
  __s2198param0[__s2198param0.INVALID_LORD_ID = 219] = "INVALID_LORD_ID";
  __s2198param0[__s2198param0.INVENTORY_FULL = 220] = "INVENTORY_FULL";
  __s2198param0[__s2198param0.EQUIPMENT_NOT_APPLICABLE = 221] = "EQUIPMENT_NOT_APPLICABLE";
  __s2198param0[__s2198param0.LORD_IN_MOVEMENT = 222] = "LORD_IN_MOVEMENT";
  __s2198param0[__s2198param0.INVALID_AMOUNT = 223] = "INVALID_AMOUNT";
  __s2198param0[__s2198param0.IS_ABANDONING = 224] = "IS_ABANDONING";
  __s2198param0[__s2198param0.MESSAGEDATA_TOO_OLD = 225] = "MESSAGEDATA_TOO_OLD";
  __s2198param0[__s2198param0.ENCHANTMENTLEVEL_TO_HIGH = 226] = "ENCHANTMENTLEVEL_TO_HIGH";
  __s2198param0[__s2198param0.ENCHANTING_FAILED = 227] = "ENCHANTING_FAILED";
  __s2198param0[__s2198param0.MAX_MARKET_MOVEMENTS_TO_PLAYER_REACHED = 228] = "MAX_MARKET_MOVEMENTS_TO_PLAYER_REACHED";
  __s2198param0[__s2198param0.NO_CHEST_AVAILABLE = 229] = "NO_CHEST_AVAILABLE";
  __s2198param0[__s2198param0.CHEST_LOCKED = 230] = "CHEST_LOCKED";
  __s2198param0[__s2198param0.FORGE_FORBIDDEN = 231] = "FORGE_FORBIDDEN";
  __s2198param0[__s2198param0.ALREADY_COLLECTED = 232] = "ALREADY_COLLECTED";
  __s2198param0[__s2198param0.TARGET_NOT_OWNED = 233] = "TARGET_NOT_OWNED";
  __s2198param0[__s2198param0.ATTACK_IN_PROGRESS = 234] = "ATTACK_IN_PROGRESS";
  __s2198param0[__s2198param0.SELECTED_FACTION_DISABLED = 235] = "SELECTED_FACTION_DISABLED";
  __s2198param0[__s2198param0.NOT_ENCHANTABLE = 236] = "NOT_ENCHANTABLE";
  __s2198param0[__s2198param0.PACKAGE_MAX_BUY_REACHED = 237] = "PACKAGE_MAX_BUY_REACHED";
  __s2198param0[__s2198param0.NAME_HAS_ONLY_NUMBERS = 238] = "NAME_HAS_ONLY_NUMBERS";
  __s2198param0[__s2198param0.NOT_ENOUGH_KHAN_TABLETS = 239] = "NOT_ENOUGH_KHAN_TABLETS";
  __s2198param0[__s2198param0.TOO_MANY_TOOLS = 240] = "TOO_MANY_TOOLS";
  __s2198param0[__s2198param0.IS_NETWORK_ACCOUNT = 241] = "IS_NETWORK_ACCOUNT";
  __s2198param0[__s2198param0.MINE_IS_EMPTY = 242] = "MINE_IS_EMPTY";
  __s2198param0[__s2198param0.MINE_IS_COOLING_DOWN = 243] = "MINE_IS_COOLING_DOWN";
  __s2198param0[__s2198param0.PLAYER_IS_IN_OTHER_LEAGUE = 244] = "PLAYER_IS_IN_OTHER_LEAGUE";
  __s2198param0[__s2198param0.TOO_MANY_MESSAGES_IN_ARCHIVE = 245] = "TOO_MANY_MESSAGES_IN_ARCHIVE";
  __s2198param0[__s2198param0.TOPIC_NOT_FOUND = 246] = "TOPIC_NOT_FOUND";
  __s2198param0[__s2198param0.REPLY_NOT_FOUND = 247] = "REPLY_NOT_FOUND";
  __s2198param0[__s2198param0.ALLI_IS_NOT_AUTO_JOIN_ENABLED = 248] = "ALLI_IS_NOT_AUTO_JOIN_ENABLED";
  __s2198param0[__s2198param0.TOO_MANY_REPLIES = 249] = "TOO_MANY_REPLIES";
  __s2198param0[__s2198param0.TOO_MANY_TOPICS = 250] = "TOO_MANY_TOPICS";
  __s2198param0[__s2198param0.NOT_ENOUGH_SKULL_RELICS = 251] = "NOT_ENOUGH_SKULL_RELICS";
  __s2198param0[__s2198param0.ALREADY_HAS_METROPOL = 252] = "ALREADY_HAS_METROPOL";
  __s2198param0[__s2198param0.NOT_IN_METROPOL = 253] = "NOT_IN_METROPOL";
  __s2198param0[__s2198param0.ONLY_IN_METROPOL = 254] = "ONLY_IN_METROPOL";
  __s2198param0[__s2198param0.INVALID_ATTACK_TYPE = 255] = "INVALID_ATTACK_TYPE";
  __s2198param0[__s2198param0.LORD_IS_USED = 256] = "LORD_IS_USED";
  __s2198param0[__s2198param0.RESOURCE_CART_NOT_READY = 257] = "RESOURCE_CART_NOT_READY";
  __s2198param0[__s2198param0.NOT_ENOUGH_LOTTERY_TICKETS = 258] = "NOT_ENOUGH_LOTTERY_TICKETS";
  __s2198param0[__s2198param0.ALLIANCE_DIFFERENCE_TOO_BIG = 259] = "ALLIANCE_DIFFERENCE_TOO_BIG";
  __s2198param0[__s2198param0.NOT_ENOUGH_PEARL_RELICS = 260] = "NOT_ENOUGH_PEARL_RELICS";
  __s2198param0[__s2198param0.FACTION_NPC_OBJECT_IS_PROTECTED = 261] = "FACTION_NPC_OBJECT_IS_PROTECTED";
  __s2198param0[__s2198param0.NO_MARKETPLACE = 262] = "NO_MARKETPLACE";
  __s2198param0[__s2198param0.ORIENTATION_FULL = 263] = "ORIENTATION_FULL";
  __s2198param0[__s2198param0.BOOSTER_REACHED_MAX_LEVEL = 264] = "BOOSTER_REACHED_MAX_LEVEL";
  __s2198param0[__s2198param0.UNITS_WOULD_STARVE = 265] = "UNITS_WOULD_STARVE";
  __s2198param0[__s2198param0.VIP_MAX_TIME_REACHED = 266] = "VIP_MAX_TIME_REACHED";
  __s2198param0[__s2198param0.VIP_MAX_POINTS_REACHED = 267] = "VIP_MAX_POINTS_REACHED";
  __s2198param0[__s2198param0.NO_RECRUITMENT = 268] = "NO_RECRUITMENT";
  __s2198param0[__s2198param0.PACKAGE_NOT_HELPABLE = 269] = "PACKAGE_NOT_HELPABLE";
  __s2198param0[__s2198param0.PLAYER_HAS_NO_ALLIANCE = 270] = "PLAYER_HAS_NO_ALLIANCE";
  __s2198param0[__s2198param0.NO_ALLIANCEHELP = 271] = "NO_ALLIANCEHELP";
  __s2198param0[__s2198param0.NO_SELF_ALLIANCEHELP = 272] = "NO_SELF_ALLIANCEHELP";
  __s2198param0[__s2198param0.NO_MULTIPLE_ALLIANCEHELP = 273] = "NO_MULTIPLE_ALLIANCEHELP";
  __s2198param0[__s2198param0.INVALID_PRICE = 274] = "INVALID_PRICE";
  __s2198param0[__s2198param0.NO_WORLDMAPOBJECT_FOUND = 275] = "NO_WORLDMAPOBJECT_FOUND";
  __s2198param0[__s2198param0.NO_FACTION_VILLAGE_FOUND = 276] = "NO_FACTION_VILLAGE_FOUND";
  __s2198param0[__s2198param0.CAMPS_NOT_ATTACKABLE = 277] = "CAMPS_NOT_ATTACKABLE";
  __s2198param0[__s2198param0.PLAYER_IS_BANNED_FROM_ALLI = 278] = "PLAYER_IS_BANNED_FROM_ALLI";
  __s2198param0[__s2198param0.BOOKMARK_ALREADY_ADDED = 279] = "BOOKMARK_ALREADY_ADDED";
  __s2198param0[__s2198param0.BOOKMARK_MAX_ENTRYS = 280] = "BOOKMARK_MAX_ENTRYS";
  __s2198param0[__s2198param0.NO_SELF_TARGET = 281] = "NO_SELF_TARGET";
  __s2198param0[__s2198param0.IS_OCCUPYING = 282] = "IS_OCCUPYING";
  __s2198param0[__s2198param0.IS_NOT_KING = 283] = "IS_NOT_KING";
  __s2198param0[__s2198param0.CANNOT_ASSIGN_TO_SELF = 284] = "CANNOT_ASSIGN_TO_SELF";
  __s2198param0[__s2198param0.ALREADY_HAS_TITLE = 285] = "ALREADY_HAS_TITLE";
  __s2198param0[__s2198param0.COOLING_DOWN_EQUIPMENT = 286] = "COOLING_DOWN_EQUIPMENT";
  __s2198param0[__s2198param0.NOT_IN_TIME_FOR_FREE_SKIP = 287] = "NOT_IN_TIME_FOR_FREE_SKIP";
  __s2198param0[__s2198param0.NO_KAMIKAZE_CONQUER = 288] = "NO_KAMIKAZE_CONQUER";
  __s2198param0[__s2198param0.ALLIANCE_ALREADY_HAS_PEACE_REQUEST = 289] = "ALLIANCE_ALREADY_HAS_PEACE_REQUEST";
  __s2198param0[__s2198param0.CAN_NOT_VOTE_IN_WORLD_CUP = 290] = "CAN_NOT_VOTE_IN_WORLD_CUP";
  __s2198param0[__s2198param0.NO_PLAYER_SPAWNED_YET = 291] = "NO_PLAYER_SPAWNED_YET";
  __s2198param0[__s2198param0.INVALID_EVENT_TOOL_USAGE = 292] = "INVALID_EVENT_TOOL_USAGE";
  __s2198param0[__s2198param0.ALLIANCE_ALREADY_HAS_SOFT_ALLIED_REQUEST = 293] = "ALLIANCE_ALREADY_HAS_SOFT_ALLIED_REQUEST";
  __s2198param0[__s2198param0.ALLIANCE_ALREADY_HAS_REAL_ALLIED_REQUEST = 294] = "ALLIANCE_ALREADY_HAS_REAL_ALLIED_REQUEST";
  __s2198param0[__s2198param0.BOOKMARK_IS_INVALID = 295] = "BOOKMARK_IS_INVALID";
  __s2198param0[__s2198param0.IS_OCCUPIED = 296] = "IS_OCCUPIED";
  __s2198param0[__s2198param0.HAS_ALREADY_RUNNING_MISSION = 297] = "HAS_ALREADY_RUNNING_MISSION";
  __s2198param0[__s2198param0.GEM_NOT_FOUND = 298] = "GEM_NOT_FOUND";
  __s2198param0[__s2198param0.GEM_INVALID = 299] = "GEM_INVALID";
  __s2198param0[__s2198param0.GEM_CANNOT_BE_UPGRADED = 300] = "GEM_CANNOT_BE_UPGRADED";
  __s2198param0[__s2198param0.GEM_STORAGE_FULL = 301] = "GEM_STORAGE_FULL";
  __s2198param0[__s2198param0.GEM_ID_FULL = 302] = "GEM_ID_FULL";
  __s2198param0[__s2198param0.DID_NOT_BUY_CREST_SYMBOL = 303] = "DID_NOT_BUY_CREST_SYMBOL";
  __s2198param0[__s2198param0.SYMBOL_NOT_UNLOCKED = 304] = "SYMBOL_NOT_UNLOCKED";
  __s2198param0[__s2198param0.PLAYER_NOT_IN_FACTION = 305] = "PLAYER_NOT_IN_FACTION";
  __s2198param0[__s2198param0.ALLI_NOT_IN_HIGH_SCORE = 306] = "ALLI_NOT_IN_HIGH_SCORE";
  __s2198param0[__s2198param0.CAPITAL_NOT_OWNED_LONG_ENOUGH = 307] = "CAPITAL_NOT_OWNED_LONG_ENOUGH";
  __s2198param0[__s2198param0.NOT_ENOUGH_SILVER_RUNES = 308] = "NOT_ENOUGH_SILVER_RUNES";
  __s2198param0[__s2198param0.NOT_ENOUGH_GOLD_RUNES = 309] = "NOT_ENOUGH_GOLD_RUNES";
  __s2198param0[__s2198param0.METROPOL_NOT_OWNED_LONG_ENOUGH = 310] = "METROPOL_NOT_OWNED_LONG_ENOUGH";
  __s2198param0[__s2198param0.NOT_COOLING_DOWN = 311] = "NOT_COOLING_DOWN";
  __s2198param0[__s2198param0.GIFT_EXPIRED = 312] = "GIFT_EXPIRED";
  __s2198param0[__s2198param0.ATTACK_TOO_MANY_UNITS = 313] = "ATTACK_TOO_MANY_UNITS";
  __s2198param0[__s2198param0.NOT_ENOUGH_GREEN_SKULL_RELICS = 314] = "NOT_ENOUGH_GREEN_SKULL_RELICS";
  __s2198param0[__s2198param0.WONT_REACH_IN_TIME = 315] = "WONT_REACH_IN_TIME";
  __s2198param0[__s2198param0.PLAYER_GIFT_STORAGE_FULL = 316] = "PLAYER_GIFT_STORAGE_FULL";
  __s2198param0[__s2198param0.TOO_MANY_PACKAGES_SENT_TODAY = 317] = "TOO_MANY_PACKAGES_SENT_TODAY";
  __s2198param0[__s2198param0.INVALID_BOOKMARK_ID = 318] = "INVALID_BOOKMARK_ID";
  __s2198param0[__s2198param0.INVALID_START_AREA = 319] = "INVALID_START_AREA";
  __s2198param0[__s2198param0.MONUMENT_REACHED_MAX_LEVEL = 320] = "MONUMENT_REACHED_MAX_LEVEL";
  __s2198param0[__s2198param0.EMPTY_BOOKMARK = 321] = "EMPTY_BOOKMARK";
  __s2198param0[__s2198param0.ALLIANCE_BOOKMARK_MAX_ENTRYS = 322] = "ALLIANCE_BOOKMARK_MAX_ENTRYS";
  __s2198param0[__s2198param0.RECEIVER_IS_EMPTY = 323] = "RECEIVER_IS_EMPTY";
  __s2198param0[__s2198param0.INVALID_LOOT_PRIORITY = 324] = "INVALID_LOOT_PRIORITY";
  __s2198param0[__s2198param0.ALLI_TOO_LOW_MEMBER_BUFF = 325] = "ALLI_TOO_LOW_MEMBER_BUFF";
  __s2198param0[__s2198param0.LEGEND_LEVEL_TOO_HIGH_OR_LOW = 326] = "LEGEND_LEVEL_TOO_HIGH_OR_LOW";
  __s2198param0[__s2198param0.NOT_ENOUGH_SPECIAL_CURRENCY = 327] = "NOT_ENOUGH_SPECIAL_CURRENCY";
  __s2198param0[__s2198param0.PLAYER_NOT_IN_HIGH_SCORE = 328] = "PLAYER_NOT_IN_HIGH_SCORE";
  __s2198param0[__s2198param0.AREA_BECOMES_RUIN = 329] = "AREA_BECOMES_RUIN";
  __s2198param0[__s2198param0.ADD_LEGEND_SKILL_FAILED = 330] = "ADD_LEGEND_SKILL_FAILED";
  __s2198param0[__s2198param0.ADD_LEGEND_SKILL_REQUIRED_SKILL_MISSING = 331] = "ADD_LEGEND_SKILL_REQUIRED_SKILL_MISSING";
  __s2198param0[__s2198param0.ADD_LEGEND_SKILL_NOT_ENOUGH_SKILL_POINTS = 332] = "ADD_LEGEND_SKILL_NOT_ENOUGH_SKILL_POINTS";
  __s2198param0[__s2198param0.ADD_LEGEND_SKILL_TIER_LOCKED = 333] = "ADD_LEGEND_SKILL_TIER_LOCKED";
  __s2198param0[__s2198param0.NOT_IN_WORLD_CHAT = 334] = "NOT_IN_WORLD_CHAT";
  __s2198param0[__s2198param0.NO_TIME_SKIP_LEFT = 335] = "NO_TIME_SKIP_LEFT";
  __s2198param0[__s2198param0.WRONG_AMOUNT_OF_BOUGHT_C2 = 336] = "WRONG_AMOUNT_OF_BOUGHT_C2";
  __s2198param0[__s2198param0.ADDITIONAL_KINGDOM_NOT_UNLOCKED = 337] = "ADDITIONAL_KINGDOM_NOT_UNLOCKED";
  __s2198param0[__s2198param0.WISHING_WELL_NOT_FINISHED = 338] = "WISHING_WELL_NOT_FINISHED";
  __s2198param0[__s2198param0.NOT_ENOUGH_WISHINGWELLCOINS = 339] = "NOT_ENOUGH_WISHINGWELLCOINS";
  __s2198param0[__s2198param0.STORAGE_CAPACITY_TO_LOW = 340] = "STORAGE_CAPACITY_TO_LOW";
  __s2198param0[__s2198param0.LABORATORY_REACHED_MAX_LEVEL = 341] = "LABORATORY_REACHED_MAX_LEVEL";
  __s2198param0[__s2198param0.PRIZE_CLASS_LIMIT_REACHED = 342] = "PRIZE_CLASS_LIMIT_REACHED";
  __s2198param0[__s2198param0.MAX_MAILS_PER_DAY = 343] = "MAX_MAILS_PER_DAY";
  __s2198param0[__s2198param0.MAX_MAILS_PER_MINUTE = 344] = "MAX_MAILS_PER_MINUTE";
  __s2198param0[__s2198param0.MAX_MAILS_PER_EMAIL_PER_DAY = 345] = "MAX_MAILS_PER_EMAIL_PER_DAY";
  __s2198param0[__s2198param0.MAP_TIME_RAN_OUT = 346] = "MAP_TIME_RAN_OUT";
  __s2198param0[__s2198param0.ALLI_TOO_LOW_MIGHT_POINTS = 347] = "ALLI_TOO_LOW_MIGHT_POINTS";
  __s2198param0[__s2198param0.ALLI_LEVEL_TOO_LOW = 348] = "ALLI_LEVEL_TOO_LOW";
  __s2198param0[__s2198param0.ALLIANCE_EMBLEM_NOT_SET = 349] = "ALLIANCE_EMBLEM_NOT_SET";
  __s2198param0[__s2198param0.ALLI_NO_NOBLE_HOUSE = 350] = "ALLI_NO_NOBLE_HOUSE";
  __s2198param0[__s2198param0.EVENT_ALREADY_ENTERED = 351] = "EVENT_ALREADY_ENTERED";
  __s2198param0[__s2198param0.UNKNOWN_CAMP_TYPE = 352] = "UNKNOWN_CAMP_TYPE";
  __s2198param0[__s2198param0.FACTION_LAST_MAN_STANDING_ACTIVE = 353] = "FACTION_LAST_MAN_STANDING_ACTIVE";
  __s2198param0[__s2198param0.ALL_SLOTS_ARE_PERMANENT = 354] = "ALL_SLOTS_ARE_PERMANENT";
  __s2198param0[__s2198param0.TITLE_NOT_AVAILABLE = 355] = "TITLE_NOT_AVAILABLE";
  __s2198param0[__s2198param0.NOT_ENOUGH_POINTS_FOR_TITLE = 356] = "NOT_ENOUGH_POINTS_FOR_TITLE";
  __s2198param0[__s2198param0.TITLE_SYSTEM_NOT_AVAILABLE = 357] = "TITLE_SYSTEM_NOT_AVAILABLE";
  __s2198param0[__s2198param0.TITLE_ON_COOLDOWN = 358] = "TITLE_ON_COOLDOWN";
  __s2198param0[__s2198param0.EXISTING_MAPPING_WRONG_SERVER = 368] = "EXISTING_MAPPING_WRONG_SERVER";
  __s2198param0[__s2198param0.UNEXPECTED_FACEBOOK_ERROR = 369] = "UNEXPECTED_FACEBOOK_ERROR";
  __s2198param0[__s2198param0.REGISTER_REDIRECTED_TO_LOGIN = 370] = "REGISTER_REDIRECTED_TO_LOGIN";
  __s2198param0[__s2198param0.FACEBOOK_MAPPING_NOT_ESTABLISHED = 371] = "FACEBOOK_MAPPING_NOT_ESTABLISHED";
  __s2198param0[__s2198param0.CONSTRUCTION_ITEM_NOT_FOUND = 372] = "CONSTRUCTION_ITEM_NOT_FOUND";
  __s2198param0[__s2198param0.CONSTRUCTION_ITEM_COULD_NOT_BE_REMOVED = 373] = "CONSTRUCTION_ITEM_COULD_NOT_BE_REMOVED";
  __s2198param0[__s2198param0.NO_FREE_CONSTRUCTION_ITEM_SLOT = 374] = "NO_FREE_CONSTRUCTION_ITEM_SLOT";
  __s2198param0[__s2198param0.LOCKED_CONSTRUCTION_ITEM_SLOT = 375] = "LOCKED_CONSTRUCTION_ITEM_SLOT";
  __s2198param0[__s2198param0.CONSTRUCTION_ITEM_INVENTORY_FULL = 376] = "CONSTRUCTION_ITEM_INVENTORY_FULL";
  __s2198param0[__s2198param0.CONSTRUCTION_ITEM_INVENTORY_MAX_AMOUNT_REACHED = 377] = "CONSTRUCTION_ITEM_INVENTORY_MAX_AMOUNT_REACHED";
  __s2198param0[__s2198param0.SOME_INVERNTORY_IS_FULL = 378] = "SOME_INVERNTORY_IS_FULL";
  __s2198param0[__s2198param0.TARGET_EQUIPMENT_INVENTORY_FULL = 379] = "TARGET_EQUIPMENT_INVENTORY_FULL";
  __s2198param0[__s2198param0.FACEBOOK_WRONG_USER_ID = 380] = "FACEBOOK_WRONG_USER_ID";
  __s2198param0[__s2198param0.INVALID_SLOWDOWN_DURATION = 381] = "INVALID_SLOWDOWN_DURATION";
  __s2198param0[__s2198param0.STORED_DECORATION_NOT_FOUND = 382] = "STORED_DECORATION_NOT_FOUND";
  __s2198param0[__s2198param0.NOT_A_DECORATION = 383] = "NOT_A_DECORATION";
  __s2198param0[__s2198param0.DECORATION_NOT_SELLABLE = 384] = "DECORATION_NOT_SELLABLE";
  __s2198param0[__s2198param0.ALLIANCE_TOO_LOW_REQUIRED_BUFF = 385] = "ALLIANCE_TOO_LOW_REQUIRED_BUFF";
  __s2198param0[__s2198param0.INVALID_LEVEL = 388] = "INVALID_LEVEL";
  __s2198param0[__s2198param0.AB_TEST_NOT_ASSIGNED_TO_PLAYER = 389] = "AB_TEST_NOT_ASSIGNED_TO_PLAYER";
  __s2198param0[__s2198param0.PLAYER_FRIEND_LIST_FULL = 390] = "PLAYER_FRIEND_LIST_FULL";
  __s2198param0[__s2198param0.EVENT_ALREADY_ENDED = 391] = "EVENT_ALREADY_ENDED";
  __s2198param0[__s2198param0.CONSTRUCTION_ITEM_LIMIT_FOR_TYPE_REACHED = 392] = "CONSTRUCTION_ITEM_LIMIT_FOR_TYPE_REACHED";
  __s2198param0[__s2198param0.ALREADY_CRAFTING_CONSTRUCTION_ITEM = 393] = "ALREADY_CRAFTING_CONSTRUCTION_ITEM";
  __s2198param0[__s2198param0.NOT_ENOUGH_MATERIALS = 394] = "NOT_ENOUGH_MATERIALS";
  __s2198param0[__s2198param0.NOT_ENOUGH_RAGE_POINTS = 395] = "NOT_ENOUGH_RAGE_POINTS";
  __s2198param0[__s2198param0.RELOCATION_PREVENTS_TAUNT = 396] = "RELOCATION_PREVENTS_TAUNT";
  __s2198param0[__s2198param0.TAUNT_WONT_REACH_IN_TIME = 397] = "TAUNT_WONT_REACH_IN_TIME";
  __s2198param0[__s2198param0.ALLIANCE_FUNDS_FULL = 398] = "ALLIANCE_FUNDS_FULL";
  __s2198param0[__s2198param0.CONSTRUCTION_ITEM_LOCKED = 399] = "CONSTRUCTION_ITEM_LOCKED";
  __s2198param0[__s2198param0.QUEST_ID_NOT_FOUND = 400] = "QUEST_ID_NOT_FOUND";
  __s2198param0[__s2198param0.REWARD_ID_NOT_FOUND = 401] = "REWARD_ID_NOT_FOUND";
  __s2198param0[__s2198param0.AREA_ALREADY_ATTACKED = 402] = "AREA_ALREADY_ATTACKED";
  __s2198param0[__s2198param0.AREA_BUSY = 403] = "AREA_BUSY";
  __s2198param0[__s2198param0.LORD_NEEDED = 404] = "LORD_NEEDED";
  __s2198param0[__s2198param0.TICKET_NEEDED = 405] = "TICKET_NEEDED";
  __s2198param0[__s2198param0.NO_TICKET_AVAILABLE = 406] = "NO_TICKET_AVAILABLE";
  __s2198param0[__s2198param0.EQUIPMENT_HAS_NO_GEM_SLOT = 407] = "EQUIPMENT_HAS_NO_GEM_SLOT";
  __s2198param0[__s2198param0.TROOPS_WONT_ARRIVE_IN_TIME = 408] = "TROOPS_WONT_ARRIVE_IN_TIME";
  __s2198param0[__s2198param0.INVALID_LOGIN_TOKEN = 409] = "INVALID_LOGIN_TOKEN";
  __s2198param0[__s2198param0.INVALID_FUSION_SOURCE = 410] = "INVALID_FUSION_SOURCE";
  __s2198param0[__s2198param0.INVALID_FUSION_TARGET = 411] = "INVALID_FUSION_TARGET";
  __s2198param0[__s2198param0.NOT_ENOUGH_FUSION_ENERGY = 412] = "NOT_ENOUGH_FUSION_ENERGY";
  __s2198param0[__s2198param0.INVALID_CATALYST = 413] = "INVALID_CATALYST";
  __s2198param0[__s2198param0.MINUTESKIP_BLOCKED = 414] = "MINUTESKIP_BLOCKED";
  __s2198param0[__s2198param0.PREMIUMSKIP_BLOCKED = 415] = "PREMIUMSKIP_BLOCKED";
  __s2198param0[__s2198param0.FUSION_INVENTORY_FULL = 416] = "FUSION_INVENTORY_FULL";
  __s2198param0[__s2198param0.FEATURE_NOT_ENABLED = 417] = "FEATURE_NOT_ENABLED";
  __s2198param0[__s2198param0.VILLAGE_CAP_COAL_REACHED = 418] = "VILLAGE_CAP_COAL_REACHED";
  __s2198param0[__s2198param0.VILLAGE_CAP_OIL_REACHED = 419] = "VILLAGE_CAP_OIL_REACHED";
  __s2198param0[__s2198param0.VILLAGE_CAP_GLASS_REACHED = 420] = "VILLAGE_CAP_GLASS_REACHED";
  __s2198param0[__s2198param0.VILLAGE_CAP_IRON_REACHED = 421] = "VILLAGE_CAP_IRON_REACHED";
  __s2198param0[__s2198param0.NOT_ENOUGH_PRIVATE_RESOURCE_VILLAGE_TOKEN = 422] = "NOT_ENOUGH_PRIVATE_RESOURCE_VILLAGE_TOKEN";
  __s2198param0[__s2198param0.INVALID_GLOBALSERVER_LOGIN_TOKEN = 423] = "INVALID_GLOBALSERVER_LOGIN_TOKEN";
  __s2198param0[__s2198param0.REWARD_EXPIRED = 424] = "REWARD_EXPIRED";
  __s2198param0[__s2198param0.LOSTANDFOUND_INVENTORY_FULL = 425] = "LOSTANDFOUND_INVENTORY_FULL";
  __s2198param0[__s2198param0.INVALID_SLOT_ID = 426] = "INVALID_SLOT_ID";
  __s2198param0[__s2198param0.NO_ACTIVE_TRAINING = 427] = "NO_ACTIVE_TRAINING";
  __s2198param0[__s2198param0.TARGET_SUPPORTED_BY_DIFFERENT_AREA = 428] = "TARGET_SUPPORTED_BY_DIFFERENT_AREA";
  __s2198param0[__s2198param0.MAX_CONQUERABLE_ALLIANCE_LANDMARKS_REACHED = 429] = "MAX_CONQUERABLE_ALLIANCE_LANDMARKS_REACHED";
  __s2198param0[__s2198param0.NEEDS_REPAIR = 430] = "NEEDS_REPAIR";
  __s2198param0[__s2198param0.NO_DISTRICT = 431] = "NO_DISTRICT";
  __s2198param0[__s2198param0.SCEAT_SKILL_ACTIVATION_IN_PROGRESS = 432] = "SCEAT_SKILL_ACTIVATION_IN_PROGRESS";
  __s2198param0[__s2198param0.INCOMPATIBLE_CIS_FOR_UPGRADE = 433] = "INCOMPATIBLE_CIS_FOR_UPGRADE";
  __s2198param0[__s2198param0.PASSWORD_ALREADY_SET = 434] = "PASSWORD_ALREADY_SET";
  __s2198param0[__s2198param0.NO_EXISTING_PASSWORD = 435] = "NO_EXISTING_PASSWORD";
  __s2198param0[__s2198param0.NO_MORE_DAILY_SCORES_WILL_BE_CALCULATED = 436] = "NO_MORE_DAILY_SCORES_WILL_BE_CALCULATED";
  __s2198param0[__s2198param0.INVALID_EVENT_DIFFICULTY_ID = 437] = "INVALID_EVENT_DIFFICULTY_ID";
  __s2198param0[__s2198param0.ALREADY_SELECTED_EVENT_DIFFICULTY_ID = 438] = "ALREADY_SELECTED_EVENT_DIFFICULTY_ID";
  __s2198param0[__s2198param0.LOCKED_EVENT_DIFFICULTY_ID = 439] = "LOCKED_EVENT_DIFFICULTY_ID";
  __s2198param0[__s2198param0.C2_CONFIRMATION_REQUIRED = 440] = "C2_CONFIRMATION_REQUIRED";
  __s2198param0[__s2198param0.RE_SEND_MAIL_COOLDOWN = 441] = "RE_SEND_MAIL_COOLDOWN";
  __s2198param0[__s2198param0.INVALID_ABILITY_ID = 442] = "INVALID_ABILITY_ID";
  __s2198param0[__s2198param0.TO_MANY_XP = 443] = "TO_MANY_XP";
  __s2198param0[__s2198param0.TOO_MANY_PACKAGES = 444] = "TOO_MANY_PACKAGES";
  __s2198param0[__s2198param0.NO_SPACE_WARNING = 445] = "NO_SPACE_WARNING";
  __s2198param0[__s2198param0.CURRENCY_SOFT_CAP_OVERFLOW = 446] = "CURRENCY_SOFT_CAP_OVERFLOW";
  __s2198param0[__s2198param0.TOO_MANY_MESSAGES = 447] = "TOO_MANY_MESSAGES";
  __s2198param0[__s2198param0.INVALID_DONATION_ITEM = 448] = "INVALID_DONATION_ITEM";
  __s2198param0[__s2198param0.DUPLICATE_ID = 449] = "DUPLICATE_ID";
  __s2198param0[__s2198param0.PASSWORD_COOLDOWN = 450] = "PASSWORD_COOLDOWN";
  __s2198param0[__s2198param0.NOT_ENOUGH_TIME = 451] = "NOT_ENOUGH_TIME";
  __s2198param0[__s2198param0.NOT_SUPPORTED = 452] = "NOT_SUPPORTED";
  __s2198param0[__s2198param0.LOGIN_COOLDOWN_ACTIVE = 453] = "LOGIN_COOLDOWN_ACTIVE";
  __s2198param0[__s2198param0.QUEST_IN_PROGRESS = 454] = "QUEST_IN_PROGRESS";
  __s2198param0[__s2198param0.QUEST_IN_COOLDOWN = 455] = "QUEST_IN_COOLDOWN";
  __s2198param0[__s2198param0.NOT_ENOUGH_QUEST_TRIES = 456] = "NOT_ENOUGH_QUEST_TRIES";
  __s2198param0[__s2198param0.QUEST_NOT_IN_COOLDOWN = 457] = "QUEST_NOT_IN_COOLDOWN";
  __s2198param0[__s2198param0.INVALID_ALLIANCE_REWARD_ID = 458] = "INVALID_ALLIANCE_REWARD_ID";
  __s2198param0[__s2198param0.QUEST_IN_PROGRESS_BY_OTHER_PLAYER = 459] = "QUEST_IN_PROGRESS_BY_OTHER_PLAYER";
  __s2198param0[__s2198param0.RAID_BOSS_NOT_IN_POOL = 460] = "RAID_BOSS_NOT_IN_POOL";
  __s2198param0[__s2198param0.RAID_ALREADY_IN_PROGRESS = 461] = "RAID_ALREADY_IN_PROGRESS";
  __s2198param0[__s2198param0.RAID_BOSS_LOCKED = 462] = "RAID_BOSS_LOCKED";
  __s2198param0[__s2198param0.RAID_NO_ACTIVE_BOSS = 463] = "RAID_NO_ACTIVE_BOSS";
  __s2198param0[__s2198param0.RESOURCE_PRODUCTION_CAP = 1001] = "RESOURCE_PRODUCTION_CAP";
  __s2198param0[__s2198param0.TOO_MANY_LEADERS = 1002] = "TOO_MANY_LEADERS";
  __s2198param0[__s2198param0.QUICK_ATTACK_ENABLED = 1003] = "QUICK_ATTACK_ENABLED";
  __s2198param0[__s2198param0.NO_FREE_EMBLEM = 2000] = "NO_FREE_EMBLEM";
  __s2198param0[__s2198param0.AGE_CHECK_FAILED_TIME_OF_DAY = 10000] = "AGE_CHECK_FAILED_TIME_OF_DAY";
  __s2198param0[__s2198param0.KOREA_ID_ALREADY_REGISTERED = 10001] = "KOREA_ID_ALREADY_REGISTERED";
  __s2198param0[__s2198param0.MISSING_KOREA_USER_DATA = 10002] = "MISSING_KOREA_USER_DATA";
  __s2198param0[__s2198param0.NO_KOREA_USER_DATA_AVAILABLE = 10003] = "NO_KOREA_USER_DATA_AVAILABLE";
  __s2198param0[__s2198param0.AGE_CHECK_FAILED_GAME_NOT_ALLOWED_FOR_AGE = 10004] = "AGE_CHECK_FAILED_GAME_NOT_ALLOWED_FOR_AGE";
  __s2198param0[__s2198param0.MISSING_KOREA_REQUEST_ID_PARAMETER = 10013] = "MISSING_KOREA_REQUEST_ID_PARAMETER";
  __s2198param0[__s2198param0.SOCIAL_LOGIN_KEYS_INVALID = 10014] = "SOCIAL_LOGIN_KEYS_INVALID";
  __s2198param0[__s2198param0.IS_MINING_INFLUENCE = 1004] = "IS_MINING_INFLUENCE";
  __s2198param0[__s2198param0.MISSING_INFLUENCE_MINER = 1005] = "MISSING_INFLUENCE_MINER";
  __s2198param0[__s2198param0.MAX_CONQUERABLE_KINGS_TOWER_REACHED = 1006] = "MAX_CONQUERABLE_KINGS_TOWER_REACHED";
  __s2198param0[__s2198param0.ALLIANCE_TOWER_NO_CHANGE = 1007] = "ALLIANCE_TOWER_NO_CHANGE";
  __s2198param0[__s2198param0.REGISTRATION_RESTRICTED = 1008] = "REGISTRATION_RESTRICTED";
  __s2198param0[__s2198param0.TOWER_DEPLETED = 1009] = "TOWER_DEPLETED";
  __s2198param0[__s2198param0.INVALID_LANGUAGE = 1010] = "INVALID_LANGUAGE";
  __s2198param0[__s2198param0.ALLIANCE_LANGUAGE_CHANGE_NOT_ALLOWED = 1011] = "ALLIANCE_LANGUAGE_CHANGE_NOT_ALLOWED";
})(__s0local109 ||= {});
exports.ERROR = __s0local109;
(function (__s2200param0) {
  __s2200param0.getErrorText = function getErrorText(__s2202param0) {
    return __s2200param0[__s2202param0];
  };
})(__s0local109 ||= {});
exports.ERROR = __s0local109;
