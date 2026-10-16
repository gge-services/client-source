Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoStatusIconProgressBarMine() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoStatusIconProgressBarMine, __s1param0);
  IsoStatusIconProgressBarMine.prototype.getBarText = function () {
    return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(this.mineBuildingVE.mineBuildingVO.getTimeLeftForCollect());
  };
  IsoStatusIconProgressBarMine.prototype.getBarFillFactor = function () {
    return this.mineBuildingVE.mineBuildingVO.getPercentRechargingCompletion();
  };
  IsoStatusIconProgressBarMine.prototype.getDispFrame = function () {
    return 5;
  };
  Object.defineProperty(IsoStatusIconProgressBarMine.prototype, "mineBuildingVE", {
    get: function () {
      return this.ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoStatusIconProgressBarMine;
}(require("gge-module:export_AIsoStatusIconProgressBar").AIsoStatusIconProgressBar);
exports.IsoStatusIconProgressBarMine = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
