Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueRewardOverviewDialogItem(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._dispCreator = new __dep_export_DispCreatorComponent.DispCreatorComponent();
    __s3local0._index = 0;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, new __s0local0()) || this;
    __s3param0.addChild(__s3local0.disp);
    __s3local0._vo = __s3param1;
    __s3local0._index = __s3param2;
    __s3local0._dispCreator.init(__s3local0.disp);
    __s3local0._dispCreator.dispContainer.mouseChildren = true;
    __s3local0._dispCreator.cacheDisp = false;
    __s3local0._dispCreator.switchCreationState(true);
    __s3local0._dispCreator.addClip(new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal(SeasonLeagueRewardOverviewDialogItem.ASSET_CLIP_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_SeasonLeagueRewardOverviewDialog.SeasonLeagueRewardOverviewDialog.NAME)));
    __s3local0._dispCreator.switchCreationState(false);
    var __s3local1 = __s3local0.getItemMc();
    __s3local0._rewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(__s3local1, true, true, 0);
    __s3local0._rewardAlign = new __dep_export_ItemCenterAlignComponent.ItemCenterAlignComponent(__s3local1, "mc_item", true);
    var __s3local2 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local1.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__s3param1.text)));
    __s3local2.autoFitToBounds = true;
    __s3local2.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local1.mc_color.gotoAndStop(Math.min(__s3local0._index + 1, 4));
    __s3local0._rewardAlign.align(__s3param1.rewards.length);
    __s3local0._rewards.updateWithNewData(__s3param1.rewards);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueRewardOverviewDialogItem, __s1param0);
  SeasonLeagueRewardOverviewDialogItem.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._dispCreator.destroy();
  };
  SeasonLeagueRewardOverviewDialogItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  SeasonLeagueRewardOverviewDialogItem.prototype.onHide = function () {
    this._rewards.onHide();
    __s1param0.prototype.onHide.call(this);
  };
  SeasonLeagueRewardOverviewDialogItem.prototype.getItemMc = function () {
    return this._dispCreator.getClipMc(0);
  };
  Object.defineProperty(SeasonLeagueRewardOverviewDialogItem.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueRewardOverviewDialogItem.prototype, "index", {
    get: function () {
      return this._index;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueRewardOverviewDialogItem.ASSET_CLIP_NAME = "SeasonLeagueRewardOverview_Item";
  return SeasonLeagueRewardOverviewDialogItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SeasonLeagueRewardOverviewDialogItem = __s0local1;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ItemCenterAlignComponent = require("gge-module:export_ItemCenterAlignComponent");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __dep_export_SeasonLeagueRewardOverviewDialog = require("gge-module:export_SeasonLeagueRewardOverviewDialog");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
