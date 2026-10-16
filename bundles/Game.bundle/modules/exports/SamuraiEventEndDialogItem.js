Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __s0local0 = function (__s1param0) {
  function SamuraiEventEndDialogItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiEventEndDialogItem, __s1param0);
  SamuraiEventEndDialogItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    var __s5local0 = this.getItemMc();
    __s5local0.mc_pointsIcon.mouseChildren = false;
    this._rewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(__s5local0.mc_rewards, false, false);
  };
  SamuraiEventEndDialogItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  SamuraiEventEndDialogItem.prototype.onHide = function () {
    this._rewards.onHide();
    __s1param0.prototype.onHide.call(this);
  };
  SamuraiEventEndDialogItem.prototype.fill = function () {
    this.updateTitle();
    this.updateRank();
    this.updatePoints();
    this._rewards.updateWithNewData(this.itemVO.rewards);
  };
  SamuraiEventEndDialogItem.prototype.updateTitle = function () {
    var __s13local0 = 1;
    var __s13local1 = "";
    switch (this.itemVO.itemType) {
      case __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER:
        __s13local0 = 1;
        __s13local1 = "dialog_samuraiInvasionEnd_sub_singleplayer";
        break;
      case __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_ALLIANCE:
        __s13local0 = 2;
        __s13local1 = "dialog_samuraiInvasionEnd_sub_alliance";
        break;
      case __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_DAIMYO:
        __s13local0 = 3;
        __s13local1 = "dialog_samuraiInvasionEnd_sub_daimyo";
    }
    var __s13local2 = this.getItemMc();
    __s13local2.mc_titleIcon.gotoAndStop(__s13local0);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s13local2.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s13local1))).autoFitToBounds = true;
  };
  SamuraiEventEndDialogItem.prototype.updateRank = function () {
    var __s16local0 = "";
    switch (this.itemVO.itemType) {
      case __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER:
        __s16local0 = "yourRanking";
        break;
      case __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_ALLIANCE:
      case __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_DAIMYO:
        __s16local0 = "allianceRanking";
    }
    var __s16local1 = this.getItemMc();
    __s16local1.mc_rankIcon.toolTipText = __s16local0;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s16local1.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.itemVO.rank)).autoFitToBounds = true;
  };
  SamuraiEventEndDialogItem.prototype.updatePoints = function () {
    var __s19local0 = 1;
    var __s19local1 = "";
    switch (this.itemVO.itemType) {
      case __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER:
        __s19local1 = "dialog_samuraiInvasion_samuraiPoints";
        break;
      case __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_ALLIANCE:
        __s19local1 = "dialog_samuraiInvasion_alliance_points";
        break;
      case __dep_export_SamuraiEventEndDialogItemVO.SamuraiEventEndDialogItemVO.TYPE_DAIMYO:
        __s19local0 = 2;
        __s19local1 = "warEffortPoints";
    }
    var __s19local2 = this.getItemMc();
    __s19local2.mc_pointsIcon.gotoAndStop(__s19local0);
    __s19local2.mc_pointsIcon.toolTipText = __s19local1;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s19local2.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.itemVO.points)).autoFitToBounds = true;
  };
  Object.defineProperty(SamuraiEventEndDialogItem.prototype, "itemVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiEventEndDialogItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.SamuraiEventEndDialogItem = __s0local0;
var __dep_export_SamuraiEventEndDialogItemVO = require("gge-module:export_SamuraiEventEndDialogItemVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
