Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleSingleplayerRankingComponent(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0._scoreEventVO = __s3param3;
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rank")).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_name")).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_alliance, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("panel_multiinfo_alliance")).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("level")).autoFitToBounds = true;
    __s3local0.disp.btn_search.toolTipText = "panel_navigation_playername";
    __s3local0.disp.icon_distance.toolTipText = "distance";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSingleplayerRankingComponent, __s1param0);
  CastleSingleplayerRankingComponent.prototype.setSearchPlaceholderText = function () {
    this.searchPlaceholderText = "panel_navigation_playername";
  };
  CastleSingleplayerRankingComponent.prototype.onGetHighscoreData = function (__s7param0) {
    __s1param0.prototype.onGetHighscoreData.call(this, __s7param0);
    var __s7local0 = __dep_exact_f855840627e6e145.int(this._scoreEventVO.leagueLevels(__s7param0.leagueId)[0]);
    var __s7local1 = __dep_exact_f855840627e6e145.int(this._scoreEventVO.leagueLevels(__s7param0.leagueId)[1]);
    if (__s7local1 > __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.disp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_ranking_legendFilter", [Math.max(__s7local0 - __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP, 1), __s7local1 - __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.disp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("levelrange_placeholder", [__s7local0, __s7local1])).autoFitToBounds = true;
    }
  };
  return CastleSingleplayerRankingComponent;
}(require("gge-module:export_CastleGenericRankingComponent").CastleGenericRankingComponent);
exports.CastleSingleplayerRankingComponent = __s0local0;
