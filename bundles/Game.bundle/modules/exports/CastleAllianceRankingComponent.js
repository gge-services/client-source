Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleAllianceRankingComponent(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rank")).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("panel_multiinfo_alliance")).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_fameLevel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceFame_level")).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_membercount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_member")).autoFitToBounds = true;
    __s3local0.disp.btn_search.toolTipText = "dialog_highscore_search";
    __s3local0.disp.mc_scoreIcon.toolTipText = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceRankingComponent, __s1param0);
  CastleAllianceRankingComponent.prototype.setSearchPlaceholderText = function () {
    this.searchPlaceholderText = "dialog_highscore_search_alliance";
  };
  return CastleAllianceRankingComponent;
}(require("gge-module:export_CastleGenericRankingComponent").CastleGenericRankingComponent);
exports.CastleAllianceRankingComponent = __s0local0;
