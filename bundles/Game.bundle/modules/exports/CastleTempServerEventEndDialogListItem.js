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
var __dep_export_TempServerConfigurationVO = require("gge-module:export_TempServerConfigurationVO");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleTempServerEventEndDialogListItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTempServerEventEndDialogListItem, __s1param0);
  CastleTempServerEventEndDialogListItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this._rewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(this.getItemMc().mc_rewards, false, false, 0);
  };
  CastleTempServerEventEndDialogListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  CastleTempServerEventEndDialogListItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._rewards.onHide();
  };
  CastleTempServerEventEndDialogListItem.prototype.fill = function () {
    var __s11local0 = this.getItemMc();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.data.isDaily ? "dialog_tempServer_dailyTask_header" : "dialog_beyondTheHorizon_end_individualContest")));
    __s11local0.mc_single_rank.toolTipText = "rank";
    this.renderPointIcon();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_rank, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.data.isDaily ? " " : __dep_exact_92d05af59ee2ff30.Localize.number(this.data.rank)));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_points, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.data.isDaily ? " " : __dep_exact_92d05af59ee2ff30.Localize.number(this.data.points)));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_daily_copy1, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.data.isDaily ? __dep_exact_92d05af59ee2ff30.Localize.text("currency_name_DailyDutyPoints") : " "));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_daily_value1, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.data.isDaily ? __dep_exact_92d05af59ee2ff30.Localize.number(this.data.mandatoryPoints) : " "));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_daily_copy2, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.data.isDaily ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_tempServer_dailyTask_RewardStep_short") : " "));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s11local0.txt_daily_value2, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.data.isDaily ? __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.data.rewardLevel, this.data.rewardLevelMax]) : " "));
    this._rewards.updateWithNewData(this.data.rewards);
  };
  CastleTempServerEventEndDialogListItem.prototype.renderPointIcon = function () {
    this.getItemMc().icon_might.visible = !this.data.isDaily && this.data.scoring == __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_MIGHT;
    this.getItemMc().icon_collector.visible = !this.data.isDaily && this.data.scoring == __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR;
    this.getItemMc().icon_rankSwap.visible = !this.data.isDaily && this.data.scoring == __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP;
    this.getItemMc().icon_charge.visible = false;
    this.getItemMc().mc_single_rank.visible = !this.data.isDaily;
    this.getItemMc().mc_daily.visible = this.data.isDaily;
    this.getItemMc().mc_single.visible = !this.data.isDaily;
    this.getItemMc().icon_might.toolTipText = "playerMight";
    this.getItemMc().icon_collector.toolTipText = "currency_name_Heritage";
    this.getItemMc().icon_rankSwap.toolTipText = "dialog_tempServer_collectPoints_tooltip_rankSwap";
    this.getItemMc().icon_charge.toolTipText = "dialog_tempServer_collectPoints_tooltip_tier_charge";
  };
  return CastleTempServerEventEndDialogListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleTempServerEventEndDialogListItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
