Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueEndDialogMedals(__s3param0, __s3param1 = false) {
    var __s3local0 = this;
    __s3local0._useAllianceMedals = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._useAllianceMedals = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueEndDialogMedals, __s1param0);
  SeasonLeagueEndDialogMedals.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.updateRewards();
  };
  SeasonLeagueEndDialogMedals.prototype.updateRewards = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.subLayerDisp, "mc_item"), this.useAllianceMedals ? this.dialogProperties.allianceMedals : this.dialogProperties.seasonMedals, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(55, 55)));
  };
  Object.defineProperty(SeasonLeagueEndDialogMedals.prototype, "dialogProperties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogMedals.prototype, "useAllianceMedals", {
    get: function () {
      return this._useAllianceMedals;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEndDialogMedals;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.SeasonLeagueEndDialogMedals = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
