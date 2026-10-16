Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TimeLimitedCampaignQuestEventEventVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TimeLimitedCampaignQuestEventEventVO, __s1param0);
  TimeLimitedCampaignQuestEventEventVO.prototype.parseParamObject = function (__s5param0) {
    this._questIDs = [];
    for (var __s5local0 = 0, __s5local1 = __s5param0.CQS; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        this._questIDs.push(__s5local2.QID);
      }
    }
  };
  Object.defineProperty(TimeLimitedCampaignQuestEventEventVO.prototype, "questIDs", {
    get: function () {
      return this._questIDs;
    },
    enumerable: true,
    configurable: true
  });
  return TimeLimitedCampaignQuestEventEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.TimeLimitedCampaignQuestEventEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
