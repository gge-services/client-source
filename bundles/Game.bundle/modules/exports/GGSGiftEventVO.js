Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function GGSGiftEventVO() {
    var __s3local0 = this;
    __s3local0._hasBeenCollected = false;
    __s3local0._skinID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GGSGiftEventVO, __s1param0);
  GGSGiftEventVO.prototype.collect = function () {
    this._hasBeenCollected = true;
  };
  GGSGiftEventVO.prototype.parseParamObject = function (__s7param0) {
    this._hasBeenCollected = __s7param0.AC > 0;
    if (__s7param0.SID) {
      this._skinID = parseInt(__s7param0.SID);
    }
  };
  GGSGiftEventVO.prototype.isCollectable = function () {
    return !this._hasBeenCollected && this.remainingEventTimeInSeconds > 0;
  };
  Object.defineProperty(GGSGiftEventVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  return GGSGiftEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.GGSGiftEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
