Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = function (__s1param0) {
  function CollectableRendererMinuteSkipBackground() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererMinuteSkipBackground, __s1param0);
  CollectableRendererMinuteSkipBackground.prototype.reset = function () {
    if (this.clips.minuteSkipBackgroundMc) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.clips.minuteSkipBackgroundMc);
    }
  };
  CollectableRendererMinuteSkipBackground.prototype.update = function () {
    var __s8local0 = this.itemVO;
    if (this.clips.minuteSkipBackgroundMc && __s8local0 && __s8local0.isInIdRange(__dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_MINUTE_SKIP))) {
      var __s8local1 = new (__dep_exact_f855840627e6e145.int(__s8local0.xmlCurrencyVO.minutesSkipValue) >= 60 ? Library.CastleInterfaceElements_Icons.Icon_HourClock_background : Library.CastleInterfaceElements_Icons.Icon_MinuteClock_background)();
      this.clips.minuteSkipBackgroundMc.addChild(__s8local1);
      __s8local1.width = this.renderer.options.icon.dimension.x * 1.3;
      __s8local1.height = this.renderer.options.icon.dimension.y * 1.3;
    }
  };
  CollectableRendererMinuteSkipBackground.prototype.setVisibility = function (__s11param0) {
    if (this.clips.minuteSkipBackgroundMc) {
      this.clips.minuteSkipBackgroundMc.visible = __s11param0;
    }
  };
  return CollectableRendererMinuteSkipBackground;
}(require("gge-module:export_ACollectableRenderComponent").ACollectableRenderComponent);
exports.CollectableRendererMinuteSkipBackground = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
