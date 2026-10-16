Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoEventDialogRanking(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoEventDialogRanking, __s1param0);
  SamuraiDaimyoEventDialogRanking.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_name"))).autoFitToBounds = true;
    this.subLayerDisp.mc_icon_rank.toolTipText = "allianceRanking";
    this.subLayerDisp.mc_icon_level.toolTipText = "level";
    this.subLayerDisp.mc_icon_members.toolTipText = "dialog_alliance_member";
    this.subLayerDisp.mc_icon_points.toolTipText = "warEffortPoints";
    this._highscore = new __dep_export_ModernHighscoreComponent.ModernHighscoreComponent(this.subLayerDisp.mc_list, SamuraiDaimyoEventDialogRanking.MAX_VISIBLE_ITEMS, __dep_export_SamuraiDaimyoEventDialogRankingItem.SamuraiDaimyoEventDialogRankingItem, __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_DAIMYO, -1);
  };
  SamuraiDaimyoEventDialogRanking.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this._highscore.onShow();
    this._highscore.requestOwnRankFromServer();
  };
  SamuraiDaimyoEventDialogRanking.prototype.hide = function () {
    this._highscore.onHide();
    __s1param0.prototype.hide.call(this);
  };
  SamuraiDaimyoEventDialogRanking.MAX_VISIBLE_ITEMS = 8;
  return SamuraiDaimyoEventDialogRanking;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.SamuraiDaimyoEventDialogRanking = __s0local0;
var __dep_export_ModernHighscoreComponent = require("gge-module:export_ModernHighscoreComponent");
var __dep_export_SamuraiDaimyoEventDialogRankingItem = require("gge-module:export_SamuraiDaimyoEventDialogRankingItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
