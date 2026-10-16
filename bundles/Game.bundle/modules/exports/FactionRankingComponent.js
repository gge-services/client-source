Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleGenericRankingComponentEvent = require("gge-module:export_CastleGenericRankingComponentEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGenericRankingComponent = require("gge-module:export_CastleGenericRankingComponent");
var __dep_export_CastleGenericHighscoreDialogProperties = require("gge-module:export_CastleGenericHighscoreDialogProperties");
var __s0local0 = function (__s1param0) {
  function FactionRankingComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._previousLeagueID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_export_FactionRankingItem.FactionRankingItem, FactionRankingComponent.generateProperties()) || this).textFieldManager.registerTextField(__s3local0.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rank"));
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_name"));
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_factionhighscore_berimondTitle"));
    __s3local0.itxt_league = __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s3local0.leagueTextID));
    __s3local0.disp.icon_level.toolTipText = "level";
    __s3local0.disp.icon_points.toolTipText = "factionHighscore_points";
    __s3local0.disp.btn_search.toolTipText = "dialog_highscore_search";
    __s3local0._previousLeagueID = __dep_exact_f855840627e6e145.int(__s3local0._currentLeagueId);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionRankingComponent, __s1param0);
  FactionRankingComponent.prototype.reset = function () {
    this.show(FactionRankingComponent.generateProperties());
    this._previousLeagueID = __dep_exact_f855840627e6e145.int(this._currentLeagueId);
  };
  FactionRankingComponent.generateProperties = function () {
    return new __dep_export_CastleGenericHighscoreDialogProperties.CastleGenericHighscoreDialogProperties(__dep_exact_26a421b704832cff_1.HighscoreConst.FACTION_TOURNAMENT, __dep_exact_9e901e8e2483a22f.DictionaryUtil.getDictionaryLength(FactionRankingComponent.factionEventVO.leaguetypes), FactionRankingComponent.factionEventVO.isLocked ? 1 : FactionRankingComponent.factionEventVO.ownLeagueID, FactionRankingComponent.factionEventVO.isLocked ? 1 : -1, FactionRankingComponent.factionEventVO.ownLeagueID);
  };
  FactionRankingComponent.prototype.setSearchPlaceholderText = function () {
    this.searchPlaceholderText = "panel_navigation_playername";
  };
  FactionRankingComponent.prototype.onGetHighscoreData = function (__s11param0) {
    if (this.searchName == "") {
      this.searchName = __dep_export_CastleModel.CastleModel.userData.userName;
    }
    __s1param0.prototype.onGetHighscoreData.call(this, __s11param0);
    if (this.itxt_league && this.itxt_league.textContentVO) {
      this.itxt_league.textContentVO.textId = this.leagueTextID;
    }
    if (this._previousLeagueID != this._currentLeagueId) {
      this.dispatchEvent(new __dep_export_CastleGenericRankingComponentEvent.CastleGenericRankingComponentEvent(__dep_export_CastleGenericRankingComponentEvent.CastleGenericRankingComponentEvent.LEAGUETYPE_CHANGED));
      if (this.itxt_league && this.itxt_league.textContentVO) {
        this.itxt_league.textContentVO.textId = this.leagueTextID;
      }
    }
    this._previousLeagueID = __dep_exact_f855840627e6e145.int(this._currentLeagueId);
  };
  Object.defineProperty(FactionRankingComponent.prototype, "leagueTextID", {
    get: function () {
      return FactionRankingComponent.LEAGUE_HEADER_IDS[this.currentLeagueId - 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingComponent.prototype, "currentLeagueId", {
    get: function () {
      return this._currentLeagueId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingComponent, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  FactionRankingComponent.LEAGUE_HEADER_IDS = ["dialog_factionhighscore_blueList", "dialog_factionhighscore_redList", "dialog_factionhighscore_blueList_legendary", "dialog_factionhighscore_redList_legendary"];
  return FactionRankingComponent;
}(__dep_export_CastleGenericRankingComponent.CastleGenericRankingComponent);
exports.FactionRankingComponent = __s0local0;
var __dep_export_FactionRankingItem = require("gge-module:export_FactionRankingItem");
