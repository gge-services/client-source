Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_4 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_5 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstHighscore = require("gge-module:export_ClientConstHighscore");
var __dep_export_C2SGetHighscoreVO = require("gge-module:export_C2SGetHighscoreVO");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceHighscoreInfoVO = require("gge-module:export_AllianceHighscoreInfoVO");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleFullScreenInputBlocker = require("gge-module:export_CastleFullScreenInputBlocker");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleHighscoreDialog() {
    var __s3local0 = this;
    __s3local0.startRank = 0;
    __s3local0.searchName = "";
    __s3local0._defaultSearchText = "";
    __s3local0._currentSelectedLeague = 1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleHighscoreDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHighscoreDialog, __s1param0);
  CastleHighscoreDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.searchLists = new Map();
    this.searchLists.set(CastleHighscoreDialog.SEARCH_OVERALL, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS);
    this.searchLists.set(CastleHighscoreDialog.SEARCH_WEEKLY, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LOOT);
    this.searchLists.set(CastleHighscoreDialog.SEARCH_ALLIANCE, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS);
    this.searchLists.set(CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER, __dep_exact_26a421b704832cff.HighscoreConst.TEMPSERVER_PREVIOUS_RUN_PLAYER);
    this.searchLists.set(CastleHighscoreDialog.SEARCH_ABG_PLAYER, __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_PLAYER);
    this.searchLists.set(CastleHighscoreDialog.SEARCH_ABG_ALLIANCE, __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_ALLIANCE);
    this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.searchField ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_search, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_highscore_search"));
    this.searchField.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
    this.searchField.maxChars = 25;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG.txt_rank, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG.txt_alliance, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("panel_multiinfo_alliance"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG.txt_level, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("level")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG.txt_rank, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG.txt_fameLevel, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG.txt_membercount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_alliance_member"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG_specialServer.txt_rank, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG_specialServer.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG_specialServer.txt_alliance, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("panel_multiinfo_alliance"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG_specialServer.txt_rank, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG_specialServer.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG_specialServer.txt_fameLevel, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG_specialServer.txt_membercount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_alliance_member"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringDate, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("scoringDate_colon"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringTime, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("time_colon"));
    this._defaultSearchText = this.searchField.text;
    this.dialogDisp.mc_playerBG_specialServer.icon_level.toolTipText = "level";
    this.dialogDisp.mc_playerBG_specialServer.icon_legendary_level.toolTipText = "legendLevel";
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_player, this.dialogDisp.btn_alliance, this.dialogDisp.btn_tempserver, this.dialogDisp.btn_abg]);
    this.initBasicButtons([this.dialogDisp.btn_search, this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_weeklyReward, this.dialogDisp.mc_playerBG.btn_categoryLeft, this.dialogDisp.mc_playerBG.btn_categoryRight, this.dialogDisp.mc_allianceBG.btn_categoryLeft, this.dialogDisp.mc_allianceBG.btn_categoryRight, this.dialogDisp.btn_timeLeft, this.dialogDisp.btn_timeRight, this.dialogDisp.btn_search, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.btn_toTop, this.dialogDisp.mc_leagueBar.btn_leagueLeft, this.dialogDisp.mc_leagueBar.btn_leagueRight]);
  };
  CastleHighscoreDialog.prototype.changeHighscoreTab = function (__s7param0) {
    this.searchName = "";
    this.currentSearchTime = __s7param0;
    this.updateTabs();
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder);
    this.requestHighscoreData(CastleHighscoreDialog.OWN_RANK);
    this.updateSearchTimeText();
    this.updateSearchCategoryIcon();
    this.updateGlobalServerInfoElements();
  };
  CastleHighscoreDialog.prototype.updateTabs = function () {
    var __s9local0 = this.currentSearchTime;
    this.dialogDisp.mc_playerBG.visible = __s9local0 == CastleHighscoreDialog.SEARCH_OVERALL || __s9local0 == CastleHighscoreDialog.SEARCH_WEEKLY;
    this.dialogDisp.mc_allianceBG.visible = __s9local0 == CastleHighscoreDialog.SEARCH_ALLIANCE;
    this.dialogDisp.mc_playerBG_specialServer.visible = __s9local0 == CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER || __s9local0 == CastleHighscoreDialog.SEARCH_ABG_PLAYER;
    this.dialogDisp.mc_allianceBG_specialServer.visible = __s9local0 == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE;
    this.dialogDisp.mc_specialServer.visible = __s9local0 == CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER || __s9local0 == CastleHighscoreDialog.SEARCH_ABG_PLAYER || __s9local0 == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE;
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_player, __s9local0 == CastleHighscoreDialog.SEARCH_OVERALL || __s9local0 == CastleHighscoreDialog.SEARCH_WEEKLY);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_alliance, __s9local0 == CastleHighscoreDialog.SEARCH_ALLIANCE);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tempserver, __s9local0 == CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_abg, __s9local0 == CastleHighscoreDialog.SEARCH_ABG_PLAYER || __s9local0 == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE);
    this.dialogDisp.btn_search.toolTipText = __s9local0 == CastleHighscoreDialog.SEARCH_ALLIANCE || __s9local0 == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE ? "dialog_highscore_search_alliance" : "dialog_highscore_search_player";
    this.dialogDisp.mc_leagueBar.visible = __s9local0 == CastleHighscoreDialog.SEARCH_OVERALL;
  };
  CastleHighscoreDialog.prototype.updateSearchTimeText = function () {
    switch (this.currentSearchTime) {
      case CastleHighscoreDialog.SEARCH_OVERALL:
        this.timeSortField.textContentVO.textId = "dialog_highscore_searchOverall";
        this.dialogDisp.mc_playerBG.btn_categoryLeft.visible = true;
        this.dialogDisp.mc_playerBG.btn_categoryRight.visible = true;
        break;
      case CastleHighscoreDialog.SEARCH_WEEKLY:
        this.timeSortField.textContentVO.textId = "dialog_highscore_searchWeekly";
        this.dialogDisp.mc_playerBG.btn_categoryLeft.visible = true;
        this.dialogDisp.mc_playerBG.btn_categoryRight.visible = true;
        break;
      case CastleHighscoreDialog.SEARCH_ALLIANCE:
        this.timeSortField.textContentVO.textId = "dialog_highscore_searchAlliance";
        this.dialogDisp.mc_playerBG.btn_categoryLeft.visible = true;
        this.dialogDisp.mc_playerBG.btn_categoryRight.visible = true;
        break;
      case CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER:
      case CastleHighscoreDialog.SEARCH_ABG_PLAYER:
        this.timeSortField.textContentVO.textId = "dialog_ranking_single_title";
        break;
      case CastleHighscoreDialog.SEARCH_ABG_ALLIANCE:
        this.timeSortField.textContentVO.textId = "dialog_ranking_alliance_title";
    }
    this.dialogDisp.mc_playerBG.btn_categoryLeft.visible = this.currentSearchTime != CastleHighscoreDialog.SEARCH_WEEKLY;
    this.dialogDisp.mc_playerBG.btn_categoryRight.visible = this.currentSearchTime != CastleHighscoreDialog.SEARCH_WEEKLY;
    this.dialogDisp.mc_allianceBG.btn_categoryLeft.visible = true;
    this.dialogDisp.mc_allianceBG.btn_categoryRight.visible = true;
    this.dialogDisp.btn_timeLeft.visible = this.currentSearchTime != CastleHighscoreDialog.SEARCH_ALLIANCE && this.currentSearchTime != CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER;
    this.dialogDisp.btn_timeRight.visible = this.currentSearchTime != CastleHighscoreDialog.SEARCH_ALLIANCE && this.currentSearchTime != CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER;
  };
  CastleHighscoreDialog.prototype.setLeagueTitle = function (__s14param0) {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_leagueBar.txt_leagueSort, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s14param0));
  };
  CastleHighscoreDialog.prototype.setLeagueTitleById = function (__s16param0) {
    var __s16local0 = "";
    if (__s16param0 > 0) {
      __s16local0 = "dialog_highscore_league" + __s16param0;
    }
    this.setLeagueTitle(__s16local0);
  };
  CastleHighscoreDialog.prototype.switchLeague = function (__s19param0) {
    this.searchName = "";
    if (this._currentSelectedLeague <= 1 && __s19param0 < 0) {
      this._currentSelectedLeague = 6;
    } else if (this._currentSelectedLeague >= 6 && __s19param0 > 0) {
      this._currentSelectedLeague = 1;
    } else {
      this._currentSelectedLeague += __s19param0;
    }
    this.setLeague(this._currentSelectedLeague);
  };
  CastleHighscoreDialog.prototype.setLeague = function (__s24param0) {
    this._currentSelectedLeague = __s24param0;
    this.setLeagueTitleById(this._currentSelectedLeague);
    if (this.searchLists.get(this.currentSearchTime) == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LEGEND_LEVEL && this._currentSelectedLeague != __dep_export_ClientConstHighscore.ClientConstHighscore.getLeagueIdByLevel(__dep_exact_26a421b704832cff_1.PlayerConst.LEVEL_CAP)) {
      this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR);
      this.updateSearchCategoryIcon();
    }
    var __s24local0 = this._currentSelectedLeague == __dep_export_ClientConstHighscore.ClientConstHighscore.getLeagueIdByLevel(__dep_export_CastleModel.CastleModel.userData.userLevel);
    this.requestHighscoreData(__s24local0 ? CastleHighscoreDialog.OWN_RANK : "1");
  };
  CastleHighscoreDialog.prototype.setLeagueBarVisibility = function (__s27param0) {
    this.dialogDisp.mc_leagueBar.visible = __s27param0;
  };
  CastleHighscoreDialog.prototype.updateSearchCategoryIcon = function () {
    this.dialogDisp.btn_weeklyReward.visible = false;
    switch (this.searchLists.get(this.currentSearchTime)) {
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR:
        this.dialogDisp.mc_playerBG.mc_sortBy.gotoAndStop(2);
        this.dialogDisp.mc_playerBG.mc_sortBy.toolTipText = "honorPoints";
        this.dialogDisp.mc_allianceBG.mc_sortBy.gotoAndStop(2);
        this.dialogDisp.mc_allianceBG.mc_sortBy.toolTipText = "allianceHonor";
        this.dialogDisp.btn_weeklyReward.visible = true;
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LOOT:
        this.dialogDisp.mc_playerBG.mc_sortBy.gotoAndStop(3);
        this.dialogDisp.mc_playerBG.mc_sortBy.toolTipText = "dialog_battleLog_loot";
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_ACHIEVEMENT:
        this.dialogDisp.mc_playerBG.mc_sortBy.gotoAndStop(5);
        this.dialogDisp.mc_playerBG.mc_sortBy.toolTipText = "dialog_playerInfo_infoAchievements";
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS:
        this.dialogDisp.mc_playerBG.mc_sortBy.gotoAndStop(4);
        this.dialogDisp.mc_playerBG.mc_sortBy.toolTipText = "playerMight";
        this.dialogDisp.mc_allianceBG.mc_sortBy.gotoAndStop(4);
        this.dialogDisp.mc_allianceBG.mc_sortBy.toolTipText = "allianceMight";
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MIGHT:
        this.dialogDisp.mc_allianceBG.mc_sortBy.gotoAndStop(6);
        this.dialogDisp.mc_allianceBG.mc_sortBy.toolTipText = "dominionPoints";
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LEGEND_LEVEL:
        this.dialogDisp.mc_playerBG.mc_sortBy.gotoAndStop(6);
        this.dialogDisp.mc_playerBG.mc_sortBy.toolTipText = "legendLevel";
    }
    this.dialogDisp.mc_playerBG.mc_sortBy.mouseChildren = false;
    this.dialogDisp.mc_allianceBG.mc_sortBy.mouseChildren = false;
  };
  CastleHighscoreDialog.prototype.switchTimeSearch = function (__s32param0 = 0) {
    switch (this.currentSearchTime) {
      case CastleHighscoreDialog.SEARCH_OVERALL:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_WEEKLY;
        this.searchName = "";
        this.setLeagueBarVisibility(false);
        break;
      case CastleHighscoreDialog.SEARCH_WEEKLY:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
        this.searchName = "";
        this.setLeagueBarVisibility(true);
        break;
      case CastleHighscoreDialog.SEARCH_ABG_PLAYER:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_ABG_ALLIANCE;
        this.searchName = "";
        this.setLeagueBarVisibility(false);
        break;
      case CastleHighscoreDialog.SEARCH_ABG_ALLIANCE:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_ABG_PLAYER;
        this.searchName = "";
        this.setLeagueBarVisibility(false);
    }
    this.updateTabs();
    this.updateSearchTimeText();
    this.updateSearchCategoryIcon();
  };
  CastleHighscoreDialog.prototype.switchOverallCategory = function (__s35param0 = 0) {
    if (__s35param0 < 0) {
      switch (this.searchLists.get(this.currentSearchTime)) {
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR:
          if (this._currentSelectedLeague == __dep_export_ClientConstHighscore.ClientConstHighscore.getLeagueIdByLevel(__dep_exact_26a421b704832cff_1.PlayerConst.LEVEL_CAP)) {
            this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LEGEND_LEVEL);
          } else {
            this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS);
          }
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_ACHIEVEMENT);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_ACHIEVEMENT:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LEGEND_LEVEL:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS);
      }
    } else {
      switch (this.searchLists.get(this.currentSearchTime)) {
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_ACHIEVEMENT:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS:
          if (this._currentSelectedLeague == __dep_export_ClientConstHighscore.ClientConstHighscore.getLeagueIdByLevel(__dep_exact_26a421b704832cff_1.PlayerConst.LEVEL_CAP)) {
            this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LEGEND_LEVEL);
          } else {
            this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR);
          }
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_ACHIEVEMENT);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LEGEND_LEVEL:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR);
      }
    }
    this.updateSearchCategoryIcon();
  };
  CastleHighscoreDialog.prototype.switchOverallCategoryAlliance = function (__s45param0 = 0) {
    if (__s45param0 < 0) {
      switch (this.searchLists.get(this.currentSearchTime)) {
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MIGHT);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MIGHT:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS);
      }
    } else {
      switch (this.searchLists.get(this.currentSearchTime)) {
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MIGHT);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MIGHT:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR:
          this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS);
      }
    }
    this.updateSearchCategoryIcon();
  };
  CastleHighscoreDialog.prototype.onGetHighscoreDataError = function (__s51param0) {
    this.isWaitingForServerMessage = false;
    this.searchName = "";
  };
  CastleHighscoreDialog.prototype.onGetHighscoreData = function (__s53param0) {
    this.isWaitingForServerMessage = false;
    this.setLeagueTitleById(__s53param0.leagueId);
    this._currentSelectedLeague = __s53param0.leagueId;
    if (__s53param0.params.length != 0) {
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder);
      var __s53local0 = __dep_exact_f855840627e6e145.int(__s53param0.params[0].LT);
      if (__s53local0 && __s53local0 > 0) {
        this.setSearchListByListType(__s53local0);
      }
      var __s53local1 = __dep_exact_f855840627e6e145.int(__s53param0.params[0].LR);
      var __s53local2 = __s53param0.params[0].L;
      var __s53local3 = __dep_exact_f855840627e6e145.int(__s53local2.length);
      if (!(__s53local3 < 1)) {
        this.startRank = __dep_exact_f855840627e6e145.int(__s53local2[0][0]);
        var __s53local4 = __dep_exact_f855840627e6e145.int(__s53local2[__s53local3 - 1][0]);
        var __s53local5 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
        var __s53local6 = false;
        for (var __s53local7 = 0; __s53local7 < Math.min(CastleHighscoreDialog.ITEMS_PER_PAGE, __s53local3); __s53local7++) {
          var __s53local8;
          var __s53local9 = __s53local2.shift();
          var __s53local10 = __dep_exact_f855840627e6e145.int(__s53local9.shift());
          var __s53local11 = __dep_exact_f855840627e6e145.int(__s53local9.shift());
          if (__s53local0 == __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_HONOR || __s53local0 == __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_MIGHT_POINTS || __s53local0 == __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_LANDMARKS) {
            var __s53local12 = new __dep_export_AllianceHighscoreInfoVO.AllianceHighscoreInfoVO();
            __s53local12.fillFromParamObject(__s53local9.shift());
            switch (__s53local10) {
              case 1:
                __s53local6 = true;
                (__s53local8 = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank1_D()).txt_name.getTextFormat().bold = true;
                break;
              case 2:
                (__s53local8 = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank2_D()).txt_name.getTextFormat().bold = true;
                break;
              case 3:
                (__s53local8 = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank3_D()).txt_name.getTextFormat().bold = true;
                break;
              default:
                __s53local8 = new Library.CastleInterfaceElements.CastleHighscoreAllianceItem_D();
            }
            if (__s53local12.allianceId == __dep_export_CastleModel.CastleModel.userData.allianceID) {
              __s53local8.gotoAndStop(2);
            } else {
              __s53local8.gotoAndStop(1);
            }
            __s53local8.mc_search.mouseEnabled = false;
            __s53local8.mc_search.visible = this.searchName && this.searchName.toLowerCase() == __s53local12.allianceName.toLowerCase() || parseInt(this.searchName) == __s53local10;
            if (__s53local8.itxt_rank) {
              __s53local8.itxt_rank.textContentVO.stringValue = String(__s53local10);
            } else {
              __s53local8.itxt_rank = this.textFieldManager.registerTextField(__s53local8.txt_rank, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__s53local10), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            }
            if (__s53local8.itxt_name) {
              __s53local8.itxt_name.textContentVO.stringValue = String(__s53local12.allianceName);
            } else {
              __s53local8.itxt_name = this.textFieldManager.registerTextField(__s53local8.txt_name, new __dep_exact_92d05af59ee2ff30_4.TextVO(String(__s53local12.allianceName)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
              __s53local8.itxt_name.autoFitToBounds = true;
            }
            if (__s53local8.itxt_fameLevel) {
              __s53local8.itxt_fameLevel.textContentVO.stringValue = String(__dep_export_CastleModel.CastleModel.allianceFameData.getLevelFromFamePoints(__s53local12.allianceCurrentFame));
            } else {
              __s53local8.itxt_fameLevel = this.textFieldManager.registerTextField(__s53local8.txt_fameLevel, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__dep_export_CastleModel.CastleModel.allianceFameData.getLevelFromFamePoints(__s53local12.allianceCurrentFame)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            }
            if (__s53local8.itxt_membercount) {
              __s53local8.itxt_membercount.textContentVO.stringValue = String(__s53local12.memberAmount);
            } else {
              __s53local8.itxt_membercount = this.textFieldManager.registerTextField(__s53local8.txt_membercount, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__s53local12.memberAmount), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            }
            if (__s53local8.itxt_amount) {
              __s53local8.itxt_amount.textContentVO.numberValue = __s53local11;
            } else {
              __s53local8.itxt_amount = this.textFieldManager.registerTextField(__s53local8.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s53local11), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            }
            __s53local8.properties = __s53local12;
            this.dialogDisp.mc_holder.addChild(__s53local8);
            __s53local8.y = __s53local7 * CastleHighscoreDialog.ITEMS_HEIGHT + __s53local7 * CastleHighscoreDialog.ITEMS_SPACE;
          } else if (__s53local0 == __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_ALLIANCE) {
            var __s53local13 = __s53local9.shift();
            __s53local13[0];
            var __s53local14 = __s53local13[1];
            var __s53local15 = __s53local13[2];
            var __s53local16 = __s53local13[3];
            switch (__s53local10) {
              case 1:
                __s53local6 = true;
                (__s53local8 = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank1_D()).txt_name.getTextFormat().bold = true;
                break;
              case 2:
                (__s53local8 = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank2_D()).txt_name.getTextFormat().bold = true;
                break;
              case 3:
                (__s53local8 = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank3_D()).txt_name.getTextFormat().bold = true;
                break;
              default:
                __s53local8 = new Library.CastleInterfaceElements.CastleHighscoreAllianceItem_D();
            }
            __s53local8.mc_search.mouseEnabled = false;
            __s53local8.mc_search.visible = this.searchName.toLowerCase() == __s53local14.toLowerCase() || parseInt(this.searchName) == __s53local10;
            __s53local8.gotoAndStop(1);
            this.textFieldManager.registerTextField(__s53local8.txt_rank, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__s53local10), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(__s53local8.txt_name, new __dep_exact_92d05af59ee2ff30_4.TextVO(__s53local14), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(__s53local8.txt_fameLevel, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__s53local16), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(__s53local8.txt_membercount, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__s53local15), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(__s53local8.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s53local11), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            this.dialogDisp.mc_holder.addChild(__s53local8);
            __s53local8.y = __s53local7 * CastleHighscoreDialog.ITEMS_HEIGHT + __s53local7 * CastleHighscoreDialog.ITEMS_SPACE;
            __s53local8.mouseEnabled = false;
          } else if (__s53local0 == __dep_exact_26a421b704832cff.HighscoreConst.TEMPSERVER_PREVIOUS_RUN_PLAYER || __s53local0 == __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_PLAYER) {
            var __s53local17 = __s53local9.shift();
            var __s53local18 = __s53local9.length > 1 ? __dep_exact_f855840627e6e145.int(__s53local9[1]) : __s53local10;
            var __s53local19 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
            __s53local19.fillFromParamObject(__s53local17, __s53local5);
            switch (__s53local18) {
              case 1:
                (__s53local8 = new (__dep_exact_81dacdf05bd32292_3.getDefinitionByName("CastleHighscorePlayerItemRank1_D"))()).txt_name.getTextFormat().bold = true;
                __s53local6 = true;
                break;
              case 2:
                (__s53local8 = new (__dep_exact_81dacdf05bd32292_3.getDefinitionByName("CastleHighscorePlayerItemRank2_D"))()).txt_name.getTextFormat().bold = true;
                break;
              case 3:
                (__s53local8 = new (__dep_exact_81dacdf05bd32292_3.getDefinitionByName("CastleHighscorePlayerItemRank3_D"))()).txt_name.getTextFormat().bold = true;
                break;
              default:
                __s53local8 = new (__dep_exact_81dacdf05bd32292_3.getDefinitionByName("CastleHighscorePlayerItem_D"))();
            }
            __s53local8.mc_search.mouseEnabled = false;
            __s53local8.mc_search.visible = this.searchName.toLowerCase() == __s53local19.playerName.toLowerCase() || parseInt(this.searchName) == __s53local18;
            __s53local8.gotoAndStop(1);
            this.textFieldManager.registerTextField(__s53local8.txt_rank, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__s53local18), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(__s53local8.txt_name, new __dep_exact_92d05af59ee2ff30_4.TextVO(__s53local19.playerName), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(__s53local8.txt_alliance, new __dep_exact_92d05af59ee2ff30_4.TextVO(__s53local19.allianceName), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(__s53local8.txt_level, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__s53local19.playerLevel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(__s53local8.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s53local11), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            if (__s53local19.playerLegendLevel > 0) {
              this.textFieldManager.registerTextField(__s53local8.txt_distance, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s53local19.playerLegendLevel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            } else {
              this.textFieldManager.registerTextField(__s53local8.txt_distance, new __dep_exact_92d05af59ee2ff30_4.TextVO("-"), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            }
            this.dialogDisp.mc_holder.addChild(__s53local8);
            __s53local8.y = __s53local7 * CastleHighscoreDialog.ITEMS_HEIGHT + __s53local7 * CastleHighscoreDialog.ITEMS_SPACE;
            __s53local8.mouseEnabled = false;
          } else {
            var __s53local20 = __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s53local9.shift(), __s53local5);
            switch (__s53local10) {
              case 1:
                (__s53local8 = new (__dep_exact_81dacdf05bd32292_3.getDefinitionByName("CastleHighscorePlayerItemRank1_D"))()).txt_name.getTextFormat().bold = true;
                __s53local6 = true;
                break;
              case 2:
                (__s53local8 = new (__dep_exact_81dacdf05bd32292_3.getDefinitionByName("CastleHighscorePlayerItemRank2_D"))()).txt_name.getTextFormat().bold = true;
                break;
              case 3:
                (__s53local8 = new (__dep_exact_81dacdf05bd32292_3.getDefinitionByName("CastleHighscorePlayerItemRank3_D"))()).txt_name.getTextFormat().bold = true;
                break;
              default:
                __s53local8 = new (__dep_exact_81dacdf05bd32292_3.getDefinitionByName("CastleHighscorePlayerItem_D"))();
            }
            if (__s53local20 && __s53local20.isOwnOwnerInfo) {
              __s53local8.gotoAndStop(2);
            } else {
              __s53local8.gotoAndStop(1);
            }
            __s53local8.mc_search.mouseEnabled = false;
            __s53local8.mc_search.visible = this.searchName.toLowerCase() == __s53local20.playerName.toLowerCase() || parseInt(this.searchName) == __s53local10 || this.searchName.toLowerCase() == __s53local20.playerName.toLowerCase();
            if (__s53local8.itxt_rank) {
              __s53local8.itxt_rank.textContentVO.stringValue = String(__s53local10);
            } else {
              __s53local8.itxt_rank = this.textFieldManager.registerTextField(__s53local8.txt_rank, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__s53local10), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            }
            if (__s53local8.itxt_name) {
              __s53local8.itxt_name.textContentVO.stringValue = String(__s53local20.playerName);
            } else {
              __s53local8.itxt_name = this.textFieldManager.registerTextField(__s53local8.txt_name, new __dep_exact_92d05af59ee2ff30_4.TextVO(String(__s53local20.playerName)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
              __s53local8.itxt_name.autoFitToBounds = true;
            }
            if (__s53local8.itxt_alliance) {
              __s53local8.itxt_name.textContentVO.stringValue = String(__s53local20.allianceName);
            } else {
              __s53local8.itxt_alliance = this.textFieldManager.registerTextField(__s53local8.txt_alliance, new __dep_exact_92d05af59ee2ff30_4.TextVO(String(__s53local20.allianceName)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
              __s53local8.itxt_alliance.autoFitToBounds = true;
            }
            if (__s53local8.itxt_level) {
              __s53local8.itxt_fameLevel.textContentVO.stringValue = String(__s53local20.playerLevel);
            } else {
              __s53local8.itxt_level = this.textFieldManager.registerTextField(__s53local8.txt_level, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__s53local20.playerLevel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            }
            if (__s53local8.itxt_amount) {
              __s53local8.itxt_amount.textContentVO.numberValue = __s53local11;
            } else {
              __s53local8.itxt_amount = this.textFieldManager.registerTextField(__s53local8.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s53local11), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            }
            var __s53local21 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
            var __s53local22 = __s53local20.getMainCastlePositionByKingdomID(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
            var __s53local23 = 0;
            __s53local23 = __s53local21 && __s53local22 ? Math.round(__dep_export_MapHelper.MapHelper.getShortestDistance(__s53local22, new __s0local1(__s53local21.absAreaPosX, __s53local21.absAreaPosY))) : 0;
            if (__s53local8.itxt_distance) {
              __s53local8.itxt_distance.textContentVO.numberValue = __s53local23 == 0 ? "" : __s53local23;
            } else {
              __s53local8.itxt_distance = this.textFieldManager.registerTextField(__s53local8.txt_distance, new __dep_exact_92d05af59ee2ff30_3.NumberVO(__s53local23 == 0 ? "" : __s53local23), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
            }
            __s53local8.properties = __s53local20;
            this.dialogDisp.mc_holder.addChild(__s53local8);
            __s53local8.y = __s53local7 * CastleHighscoreDialog.ITEMS_HEIGHT + __s53local7 * CastleHighscoreDialog.ITEMS_SPACE;
          }
          __s53local8.mouseChildren = false;
        }
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_toTop, !__s53local6);
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_up, !__s53local6);
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_down, __s53local4 != __s53local1);
        var __s53local24 = this.dialogDisp.stage;
        __s53local24._mouseOverX = 0;
        __s53local24._testMouseOver();
      }
    }
  };
  CastleHighscoreDialog.prototype.onCursorOver = function (__s96param0) {
    __s1param0.prototype.onCursorOver.call(this, __s96param0);
    if (__dep_exact_81dacdf05bd32292_4.instanceOfClass(__s96param0.target, "CastleHighscorePlayerItem_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s96param0.target, "CastleHighscorePlayerItemRank1_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s96param0.target, "CastleHighscorePlayerItemRank2_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s96param0.target, "CastleHighscorePlayerItemRank3_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s96param0.target, "CastleHighscoreAllianceItem_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s96param0.target, "CastleHighscoreAllianceItemRank1_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s96param0.target, "CastleHighscoreAllianceItemRank2_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s96param0.target, "CastleHighscoreAllianceItemRank3_D")) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleHighscoreDialog.prototype.inputKeyDown = function (__s99param0) {
    if (__s99param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      this.onOKButton();
    }
  };
  CastleHighscoreDialog.prototype.onOKButton = function () {
    if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
      document.activeElement.blur();
      this.searchName = this.searchField.text.trim();
      this.requestHighscoreData(this.searchName);
    }
  };
  CastleHighscoreDialog.prototype.onClick = function (__s105param0) {
    __s1param0.prototype.onClick.call(this, __s105param0);
    if (__dep_exact_81dacdf05bd32292_4.instanceOfClass(__s105param0.target, "CastleHighscorePlayerItem_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s105param0.target, "CastleHighscorePlayerItemRank1_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s105param0.target, "CastleHighscorePlayerItemRank2_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s105param0.target, "CastleHighscorePlayerItemRank3_D")) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s105param0.target.properties.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
    if (__dep_exact_81dacdf05bd32292_4.instanceOfClass(__s105param0.target, "CastleHighscoreAllianceItem_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s105param0.target, "CastleHighscoreAllianceItemRank1_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s105param0.target, "CastleHighscoreAllianceItemRank2_D") || __dep_exact_81dacdf05bd32292_4.instanceOfClass(__s105param0.target, "CastleHighscoreAllianceItemRank3_D")) {
      if (__s105param0.target.properties.allianceId == __dep_export_CastleModel.CastleModel.userData.allianceID) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(__s105param0.target.properties.allianceId), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s105param0.target)) {
      switch (__s105param0.target) {
        case this.dialogDisp.btn_player:
          this.changeHighscoreTab(CastleHighscoreDialog.SEARCH_OVERALL);
          break;
        case this.dialogDisp.btn_alliance:
          this.changeHighscoreTab(CastleHighscoreDialog.SEARCH_ALLIANCE);
          break;
        case this.dialogDisp.btn_tempserver:
          this.changeHighscoreTab(CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER);
          break;
        case this.dialogDisp.btn_abg:
          this.changeHighscoreTab(CastleHighscoreDialog.SEARCH_ABG_PLAYER);
          break;
        case this.dialogDisp.btn_search:
          this.onOKButton();
          break;
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          if (this.currentSearchTime == CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_rankingGlobal_tempServer"));
          } else if (this.currentSearchTime == CastleHighscoreDialog.SEARCH_ABG_PLAYER || this.currentSearchTime == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_rankingGlobal_beyondTheHorizon"));
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_highscore"));
          }
          break;
        case this.dialogDisp.btn_weeklyReward:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleWeeklyHighscoreRewardDialog.CastleWeeklyHighscoreRewardDialog);
      }
      if (!this.isWaitingForServerMessage) {
        switch (__s105param0.target) {
          case this.dialogDisp.mc_playerBG.btn_categoryLeft:
            this.switchOverallCategory(-1);
            this.requestHighscoreData(this.getRequestValueOnChangeCategory());
            break;
          case this.dialogDisp.mc_playerBG.btn_categoryRight:
            this.switchOverallCategory(1);
            this.requestHighscoreData(this.getRequestValueOnChangeCategory());
            break;
          case this.dialogDisp.mc_allianceBG.btn_categoryLeft:
            this.switchOverallCategoryAlliance(1);
            this.requestHighscoreData(this.getRequestValueOnChangeCategory());
            break;
          case this.dialogDisp.mc_allianceBG.btn_categoryRight:
            this.switchOverallCategoryAlliance(-1);
            this.requestHighscoreData(this.getRequestValueOnChangeCategory());
            break;
          case this.dialogDisp.btn_timeLeft:
            this.switchTimeSearch(-1);
            this.requestHighscoreData(CastleHighscoreDialog.OWN_RANK);
            break;
          case this.dialogDisp.btn_timeRight:
            this.switchTimeSearch(1);
            this.requestHighscoreData(CastleHighscoreDialog.OWN_RANK);
            break;
          case this.dialogDisp.btn_search:
            if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
              this.searchName = this.searchField.text;
              this.requestHighscoreData(this.searchName);
            }
            break;
          case this.dialogDisp.btn_up:
            this.scrollUp();
            break;
          case this.dialogDisp.btn_down:
            this.scrollDown();
            break;
          case this.dialogDisp.btn_toTop:
            this.scrollToTop();
            break;
          case this.dialogDisp.mc_leagueBar.btn_leagueLeft:
            this.switchLeague(-1);
            break;
          case this.dialogDisp.mc_leagueBar.btn_leagueRight:
            this.switchLeague(1);
        }
      }
    }
  };
  CastleHighscoreDialog.prototype.getRequestValueOnChangeCategory = function () {
    var __s119local0 = this._currentSelectedLeague == __dep_export_ClientConstHighscore.ClientConstHighscore.getLeagueIdByLevel(__dep_export_CastleModel.CastleModel.userData.userLevel);
    if (this.searchName == "") {
      if (__s119local0) {
        return CastleHighscoreDialog.OWN_RANK;
      } else {
        return CastleHighscoreDialog.ON_CHANGE_CATEGORY;
      }
    } else {
      return this.searchName;
    }
  };
  CastleHighscoreDialog.prototype.scrollUp = function () {
    if (!this.isWaitingForServerMessage) {
      if (this.startRank > 1) {
        this.requestHighscoreData(Math.max(this.startRank - 1 - CastleHighscoreDialog.ITEMS_PER_PAGE / 2, 1).toString());
      }
    }
  };
  CastleHighscoreDialog.prototype.scrollDown = function () {
    if (!this.isWaitingForServerMessage) {
      this.requestHighscoreData((this.startRank - 1 + CastleHighscoreDialog.ITEMS_PER_PAGE + CastleHighscoreDialog.ITEMS_PER_PAGE / 2).toString());
    }
  };
  CastleHighscoreDialog.prototype.scrollToTop = function () {
    if (!this.isWaitingForServerMessage) {
      this.requestHighscoreData("1");
    }
  };
  CastleHighscoreDialog.prototype.onMouseWheel = function (__s135param0) {
    if (__s135param0.delta < 0) {
      this.scrollUp();
    } else if (__s135param0.delta > 0) {
      this.scrollDown();
    }
  };
  CastleHighscoreDialog.prototype.onFocusInSearchText = function (__s139param0) {
    if (this.searchField.text == this._defaultSearchText) {
      this.searchField.clearText();
    }
  };
  CastleHighscoreDialog.prototype.onFocusOutSearchText = function (__s142param0) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_highscore_search");
      this.searchName = "";
    }
  };
  CastleHighscoreDialog.prototype.requestHighscoreData = function (__s145param0) {
    this.isWaitingForServerMessage = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetHighscoreVO.C2SGetHighscoreVO(__s145param0, this.currentListType(), this._currentSelectedLeague));
  };
  CastleHighscoreDialog.prototype.currentListType = function () {
    if (this.searchLists.get(this.currentSearchTime) == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR && this.currentSearchTime == CastleHighscoreDialog.SEARCH_OVERALL) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreConst.PLAYER_HONOR);
    } else if (this.searchLists.get(this.currentSearchTime) == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_ACHIEVEMENT && this.currentSearchTime == CastleHighscoreDialog.SEARCH_OVERALL) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreConst.PLAYER_ACHIEVEMENT_POINTS);
    } else if (this.searchLists.get(this.currentSearchTime) == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LOOT && this.currentSearchTime == CastleHighscoreDialog.SEARCH_WEEKLY) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreConst.PLAYER_WEEKLY_LOOT);
    } else if (this.searchLists.get(this.currentSearchTime) == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS && this.currentSearchTime == CastleHighscoreDialog.SEARCH_OVERALL) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreConst.PLAYER_BUILDINGS);
    } else if (this.searchLists.get(this.currentSearchTime) == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LEGEND_LEVEL && this.currentSearchTime == CastleHighscoreDialog.SEARCH_OVERALL) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreConst.PLAYER_LEGEND);
    } else if (this.searchLists.get(this.currentSearchTime) == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS && this.currentSearchTime == CastleHighscoreDialog.SEARCH_ALLIANCE) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_BUILDINGS);
    } else if (this.searchLists.get(this.currentSearchTime) == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR && this.currentSearchTime == CastleHighscoreDialog.SEARCH_ALLIANCE) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_HONOR);
    } else if (this.searchLists.get(this.currentSearchTime) == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MIGHT && this.currentSearchTime == CastleHighscoreDialog.SEARCH_ALLIANCE) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_LANDMARKS);
    } else {
      return this.searchLists.get(this.currentSearchTime);
    }
  };
  CastleHighscoreDialog.prototype.setSearchListByListType = function (__s158param0) {
    switch (__s158param0) {
      case __dep_exact_26a421b704832cff.HighscoreConst.PLAYER_HONOR:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
        this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR);
        break;
      case __dep_exact_26a421b704832cff.HighscoreConst.PLAYER_ACHIEVEMENT_POINTS:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
        this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_ACHIEVEMENT);
        break;
      case __dep_exact_26a421b704832cff.HighscoreConst.PLAYER_WEEKLY_LOOT:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_WEEKLY;
        this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LOOT);
        break;
      case __dep_exact_26a421b704832cff.HighscoreConst.PLAYER_BUILDINGS:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
        this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS);
        break;
      case __dep_exact_26a421b704832cff.HighscoreConst.PLAYER_LEGEND:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
        this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_LEGEND_LEVEL);
        break;
      case __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_BUILDINGS:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_ALLIANCE;
        this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS);
        break;
      case __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_HONOR:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_ALLIANCE;
        this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HONOR);
        break;
      case __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_LANDMARKS:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_ALLIANCE;
        this.searchLists.set(this.currentSearchTime, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MIGHT);
    }
    this.updateSearchCategoryIcon();
  };
  CastleHighscoreDialog.prototype.showLoaded = function (__s161param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s161param0);
    this.dialogDisp.mc_playerBG.icon_distance.toolTipText = "distance";
    this.timeSortField = this.textFieldManager.registerTextField(this.dialogDisp.txt_timeSort, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_highscore_searchOverall"));
    this.dialogDisp.btn_search.toolTipText = "dialog_highscore_search_player";
    this.dialogDisp.btn_player.toolTipText = "dialog_highscore_searchOverall";
    this.dialogDisp.btn_alliance.toolTipText = "dialog_highscore_searchAlliance";
    this.dialogDisp.btn_tempserver.toolTipText = "dialog_highscore_finalTempServer_tooltip";
    this.dialogDisp.btn_abg.toolTipText = "dialog_highscore_finalBeyondTheHorizon_tooltip";
    this.dialogDisp.btn_weeklyReward.toolTipText = "dialog_rankreward_title";
    this.updateSearchTimeText();
    this.updateSearchCategoryIcon();
    this.searchLists.set(CastleHighscoreDialog.SEARCH_OVERALL, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS);
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.searchField.keyDown.add(this.bindFunction(this.inputKeyDown));
    this.searchField.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this.searchField.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    this.searchField = this.textFieldManager.registerTextField(this.dialogDisp.txt_search, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_highscore_search"));
    this.dialogDisp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.searchName = "";
    this.changeHighscoreTab(this.highscoreProperties.startTimeSpan);
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.dialogDisp.mc_block);
    this._currentSelectedLeague = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstHighscore.ClientConstHighscore.getLeagueIdByLevel(__dep_export_CastleModel.CastleModel.userData.userLevel));
    this.setLeagueTitleById(this._currentSelectedLeague);
    this.getGlobalServerInfo();
    this.dialogDisp.btn_tempserver.visible = !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer;
    this.dialogDisp.btn_abg.visible = !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer;
  };
  CastleHighscoreDialog.prototype.hideLoaded = function (__s163param0 = null) {
    this.searchField.keyDown.remove(this.bindFunction(this.inputKeyDown));
    this.searchField.focusIn.remove(this.bindFunction(this.onFocusInSearchText));
    this.searchField.focusOut.remove(this.bindFunction(this.onFocusOutSearchText));
    this.dialogDisp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.controller.removeEventListener(__dep_export_GlobalServerPreviousRunInfoEvent.GlobalServerPreviousRunInfoEvent.GLOBAL_SERVER_PREVIOUS_RUN_INFO_RECEIVED, this.bindFunction(this.onGlobalServerInfoReceived));
    __s1param0.prototype.hideLoaded.call(this, __s163param0);
  };
  Object.defineProperty(CastleHighscoreDialog.prototype, "highscoreProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleHighscoreDialog.prototype.getGlobalServerInfo = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGlobalServerPreviousRunInfoVO.C2SGlobalServerPreviousRunInfoVO());
    this.controller.addEventListener(__dep_export_GlobalServerPreviousRunInfoEvent.GlobalServerPreviousRunInfoEvent.GLOBAL_SERVER_PREVIOUS_RUN_INFO_RECEIVED, this.bindFunction(this.onGlobalServerInfoReceived));
  };
  CastleHighscoreDialog.prototype.onGlobalServerInfoReceived = function (__s169param0) {
    this.globalServerInfo = __s169param0.globalServerInfo;
    this.updateGlobalServerInfoElements();
  };
  CastleHighscoreDialog.prototype.updateGlobalServerInfoElements = function () {
    var __s171local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local1(40, 30));
    __s171local0.tooltip.useAmount = false;
    if (this.currentSearchTime == CastleHighscoreDialog.SEARCH_ABG_PLAYER || this.currentSearchTime == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_title, new __dep_exact_92d05af59ee2ff30_4.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("event_title_113")));
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon);
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon);
      if (this.globalServerInfo && this.globalServerInfo.abgServerSettingVO) {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoring, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_beyondTheHorizon_introduction_section1_title_" + this.globalServerInfo.abgServerSettingVO.scoringSystemVO.scoring));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringDate_val, new __dep_exact_92d05af59ee2ff30_4.TextVO(__dep_exact_92d05af59ee2ff30.Localize.datetime(this.globalServerInfo.abgServerTimeStamp, __dep_exact_92d05af59ee2ff30_5.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30_5.DateTimeStyle.NONE)));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringTime_val, new __dep_exact_92d05af59ee2ff30_4.TextVO(__dep_exact_92d05af59ee2ff30.Localize.datetime(this.globalServerInfo.abgServerTimeStamp, __dep_exact_92d05af59ee2ff30_5.DateTimeStyle.NONE, __dep_exact_92d05af59ee2ff30_5.DateTimeStyle.SHORT)));
        __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon);
        var __s171local1 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(this.globalServerInfo.abgServerSettingVO.currencyID);
        if (__s171local1.id > 0) {
          __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon), __s171local1, __s171local0);
        }
        __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_allianceBG_specialServer.mc_pointsIcon);
        var __s171local2 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(this.globalServerInfo.abgServerSettingVO.allianceCurrencyID);
        if (__s171local2.id > 0) {
          __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.dialogDisp.mc_allianceBG_specialServer.mc_pointsIcon), __s171local2, __s171local0);
        }
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoring, new __dep_exact_92d05af59ee2ff30_4.TextVO("-"));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringDate_val, new __dep_exact_92d05af59ee2ff30_4.TextVO("-"));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringTime_val, new __dep_exact_92d05af59ee2ff30_4.TextVO("-"));
      }
    } else if (this.currentSearchTime == CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_title, new __dep_exact_92d05af59ee2ff30_4.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("temp_server_name")));
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon);
      if (this.globalServerInfo && this.globalServerInfo.tempServerSettingVO) {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoring, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_tempServer_scoring_header_" + this.globalServerInfo.tempServerSettingVO.scoringSystem));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringDate_val, new __dep_exact_92d05af59ee2ff30_4.TextVO(__dep_exact_92d05af59ee2ff30.Localize.datetime(this.globalServerInfo.tempServerTimeStamp, __dep_exact_92d05af59ee2ff30_5.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30_5.DateTimeStyle.NONE)));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringTime_val, new __dep_exact_92d05af59ee2ff30_4.TextVO(__dep_exact_92d05af59ee2ff30.Localize.datetime(this.globalServerInfo.tempServerTimeStamp, __dep_exact_92d05af59ee2ff30_5.DateTimeStyle.NONE, __dep_exact_92d05af59ee2ff30_5.DateTimeStyle.SHORT)));
        var __s171local3 = new (__dep_exact_81dacdf05bd32292_3.getDefinitionByName("CastleHighscore_Tempserver_PointsIcon"))();
        this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon.toolTipText = "dialog_tempServer_rankingPoints_tooltip";
        this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon.mouseChildren = false;
        this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon.addChild(__s171local3);
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoring, new __dep_exact_92d05af59ee2ff30_4.TextVO("-"));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringDate_val, new __dep_exact_92d05af59ee2ff30_4.TextVO("-"));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringTime_val, new __dep_exact_92d05af59ee2ff30_4.TextVO("-"));
      }
    }
  };
  CastleHighscoreDialog.NAME = "CastleHighscoreEx_T";
  CastleHighscoreDialog.OWN_RANK = "-1";
  CastleHighscoreDialog.ON_CHANGE_CATEGORY = "1";
  CastleHighscoreDialog.ITEMS_PER_PAGE = 10;
  CastleHighscoreDialog.ITEMS_HEIGHT = 22;
  CastleHighscoreDialog.ITEMS_SPACE = 5;
  CastleHighscoreDialog.SEARCH_OVERALL = "overAll";
  CastleHighscoreDialog.SEARCH_WEEKLY = "weekly";
  CastleHighscoreDialog.SEARCH_ALLIANCE = "alliance";
  CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER = "tempserver_player";
  CastleHighscoreDialog.SEARCH_ABG_PLAYER = "abg_player";
  CastleHighscoreDialog.SEARCH_ABG_ALLIANCE = "abg_alliance";
  return CastleHighscoreDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleHighscoreDialog = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_CastleWeeklyHighscoreRewardDialog = require("gge-module:export_CastleWeeklyHighscoreRewardDialog");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_WorldMapOwnerInfoVO = require("gge-module:export_WorldMapOwnerInfoVO");
var __dep_export_GlobalServerPreviousRunInfoEvent = require("gge-module:export_GlobalServerPreviousRunInfoEvent");
var __dep_export_C2SGlobalServerPreviousRunInfoVO = require("gge-module:export_C2SGlobalServerPreviousRunInfoVO");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
