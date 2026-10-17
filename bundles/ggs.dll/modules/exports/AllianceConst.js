// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: AllianceConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
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
