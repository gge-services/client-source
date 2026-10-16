Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceBattleGroundEventEndDialogListItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattleGroundEventEndDialogListItem, __s1param0);
  CastleAllianceBattleGroundEventEndDialogListItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this._rewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(this.getItemMc().mc_rewards, false, false);
  };
  CastleAllianceBattleGroundEventEndDialogListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  CastleAllianceBattleGroundEventEndDialogListItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._rewards.onHide();
  };
  CastleAllianceBattleGroundEventEndDialogListItem.prototype.fill = function () {
    var __s11local0 = this.getItemMc();
    if (this.data.isAlliance) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_end_allianceContest")));
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_end_individualContest")));
    }
    __s11local0.mc_single.visible = __s11local0.mc_single_rank.visible = !this.data.isAlliance;
    __s11local0.mc_alli.visible = __s11local0.mc_alli_rank.visible = this.data.isAlliance;
    __s11local0.mc_single_rank.toolTipText = "rank";
    __s11local0.mc_alli_rank.toolTipText = "rank";
    this.renderPointIcon();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.data.rank));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.data.points));
    this._rewards.updateWithNewData(this.data.rewards);
  };
  CastleAllianceBattleGroundEventEndDialogListItem.prototype.renderPointIcon = function () {
    var __s15local0 = this.getItemMc();
    var __s15local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(30, 30));
    __s15local1.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s15local0.mc_points).addIconMc(__s15local0.mc_points), this.data.pointsCollectableVO, __s15local1);
  };
  return CastleAllianceBattleGroundEventEndDialogListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleAllianceBattleGroundEventEndDialogListItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
