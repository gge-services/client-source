// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: PlayerConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
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
