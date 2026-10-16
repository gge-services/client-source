Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_PercentageBoosterVO = require("gge-module:export_PercentageBoosterVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function ACollectableItemPercentageBoosterVO() {
    return __s1param0.call(this, 1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemPercentageBoosterVO, __s1param0);
  ACollectableItemPercentageBoosterVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "Array")) {
      this._percentageBoosterVO = new __dep_export_PercentageBoosterVO.PercentageBoosterVO(__s5param0[0], __s5param0[1]);
    } else {
      this._percentageBoosterVO = new __dep_export_PercentageBoosterVO.PercentageBoosterVO(__s5param0.PB, __s5param0.D);
    }
  };
  ACollectableItemPercentageBoosterVO.prototype.clone = function () {
    var __s9local0 = __s1param0.prototype.clone.call(this);
    __s9local0.percentageBoosterVO = this.percentageBoosterVO.clone();
    return __s9local0;
  };
  ACollectableItemPercentageBoosterVO.prototype.isCombineAbleWith = function (__s11param0) {
    return false;
  };
  ACollectableItemPercentageBoosterVO.prototype.getTextfieldText = function () {
    return __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this.percentageBoosterVO.duration);
  };
  Object.defineProperty(ACollectableItemPercentageBoosterVO.prototype, "percentageBoosterVO", {
    get: function () {
      return this._percentageBoosterVO;
    },
    set: function (__s17param0) {
      this._percentageBoosterVO = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemPercentageBoosterVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.ACollectableItemPercentageBoosterVO = __s0local0;
