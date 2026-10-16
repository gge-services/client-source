Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ModernHighscoreComponent = require("gge-module:export_ModernHighscoreComponent");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleStormIslandsMainDialogRankingItem = require("gge-module:export_CastleStormIslandsMainDialogRankingItem");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsMainDialogRanking(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.subLayerDisp.btn_search, __s3local0.subLayerDisp.btn_findme], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_main_cargoPointsContestRanking_title")));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_allianceName, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceName")));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_findme.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("myAlliance"))).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_ranking.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_island_main_cargoPointsContestRanking_noParticipants"));
    __s3local0.subLayerDisp.icon_rank.toolTipText = "rank";
    __s3local0.subLayerDisp.icon_level.toolTipText = "dialog_alliancelevel";
    __s3local0.subLayerDisp.icon_member.toolTipText = "dialog_alliance_member";
    __s3local0.subLayerDisp.icon_points.toolTipText = "cargo_points";
    __s3local0._searchField = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_find.txt_input, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_highscore_search")));
    __s3local0._searchInputBehaviour = new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s3local0.subLayerDisp.mc_find, __s3local0._searchField);
    __s3local0._highscore = new __dep_export_ModernHighscoreComponent.ModernHighscoreComponent(__s3local0.subLayerDisp.mc_ranking, CastleStormIslandsMainDialogRanking.MAX_VISIBLE_ITEMS, __dep_export_CastleStormIslandsMainDialogRankingItem.CastleStormIslandsMainDialogRankingItem, __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_AQUA_POINTS, -1);
    __s3local0._highscore.setEmptyText(__s3local0.subLayerDisp.mc_ranking.txt_empty);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsMainDialogRanking, __s1param0);
  CastleStormIslandsMainDialogRanking.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this._searchInputBehaviour.onShow();
    this._highscore.onShow();
    this._highscore.requestOwnRankFromServer();
    this._searchField.keyUp.add(this.bindFunction(this.onSearchFieldKeyDown));
  };
  CastleStormIslandsMainDialogRanking.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._searchInputBehaviour.onHide();
    this._highscore.onHide();
    this._searchField.keyUp.remove(this.bindFunction(this.onSearchFieldKeyDown));
  };
  CastleStormIslandsMainDialogRanking.prototype.onSearchFieldKeyDown = function (__s9param0) {
    if (__s9param0.key == __dep_exact_81dacdf05bd32292_1.Keyboard.ENTER) {
      document.activeElement.blur();
      this.onClickSearch();
    }
  };
  CastleStormIslandsMainDialogRanking.prototype.onClick = function (__s12param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      __s1param0.prototype.onClick.call(this, __s12param0);
      switch (__s12param0.target) {
        case this.subLayerDisp.btn_search:
          this.onClickSearch();
          break;
        case this.subLayerDisp.btn_findme:
          this.requestHighscoreData(this.searchName);
      }
    }
  };
  CastleStormIslandsMainDialogRanking.prototype.onClickSearch = function () {
    if (!this._searchInputBehaviour.isEmpty()) {
      this.requestHighscoreData(this._searchField.text);
    }
  };
  CastleStormIslandsMainDialogRanking.prototype.requestHighscoreData = function (__s19param0) {
    this._highscore.requestDataFromServer(-1, __s19param0);
  };
  CastleStormIslandsMainDialogRanking.MAX_VISIBLE_ITEMS = 7;
  return CastleStormIslandsMainDialogRanking;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleStormIslandsMainDialogRanking = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
