Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueMainDialogInfoPageMedals(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogInfoPageMedals, __s1param0);
  SeasonLeagueMainDialogInfoPageMedals.prototype.init = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonLeague_infoSection_medalOverview_text_1")).autoFitToBounds = true;
  };
  SeasonLeagueMainDialogInfoPageMedals.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onInfoUpdated));
  };
  SeasonLeagueMainDialogInfoPageMedals.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onInfoUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogInfoPageMedals.prototype.update = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.disp, "mc_item"), __dep_export_CastleModel.CastleModel.seasonLeagueData.server.playerMedals, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(55, 55)));
  };
  SeasonLeagueMainDialogInfoPageMedals.prototype.onInfoUpdated = function (__s13param0) {
    this.update();
  };
  return SeasonLeagueMainDialogInfoPageMedals;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SeasonLeagueMainDialogInfoPageMedals = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
