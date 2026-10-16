Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function IsoStatusIconProgressBarRubyWishWell() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoStatusIconProgressBarRubyWishWell, __s1param0);
  IsoStatusIconProgressBarRubyWishWell.prototype.getBarText = function () {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.rubyWishingWellData.getRemainingSecondsCalculated());
    if (__s5local0 < 0) {
      __dep_export_CastleModel.CastleModel.rubyWishingWellData.requestFreshWishingWellData();
    }
    return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__s5local0);
  };
  IsoStatusIconProgressBarRubyWishWell.prototype.getBarFillFactor = function () {
    return __dep_export_CastleModel.CastleModel.rubyWishingWellData.getPercentageFinished();
  };
  return IsoStatusIconProgressBarRubyWishWell;
}(require("gge-module:export_AIsoStatusIconProgressBar").AIsoStatusIconProgressBar);
exports.IsoStatusIconProgressBarRubyWishWell = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
