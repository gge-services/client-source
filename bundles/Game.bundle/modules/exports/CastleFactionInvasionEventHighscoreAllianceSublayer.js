Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionEventHighscoreAllianceSublayer(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.initBasicButtons([__s3local0.subLayerDisp.mc_listContainer.btn_search, __s3local0.subLayerDisp.mc_listContainer.btn_top, __s3local0.subLayerDisp.mc_listContainer.btn_up, __s3local0.subLayerDisp.mc_listContainer.btn_down]);
    __s3local0._rankingList = new __dep_export_CastleAllianceRankingComponent.CastleAllianceRankingComponent(__s3local0.subLayerDisp.mc_listContainer, "factionHighscore_points", __dep_export_CastleAllianceRankingItem.CastleAllianceRankingItem, __s3param2);
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_listContainer.txt_leagueRange, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_highscore_searchAlliance"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s3param1));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionEventHighscoreAllianceSublayer, __s1param0);
  CastleFactionInvasionEventHighscoreAllianceSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this._rankingList.show(__s5param0);
  };
  CastleFactionInvasionEventHighscoreAllianceSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._rankingList.hide();
  };
  return CastleFactionInvasionEventHighscoreAllianceSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleFactionInvasionEventHighscoreAllianceSublayer = __s0local0;
var __dep_export_CastleAllianceRankingComponent = require("gge-module:export_CastleAllianceRankingComponent");
var __dep_export_CastleAllianceRankingItem = require("gge-module:export_CastleAllianceRankingItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
