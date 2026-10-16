Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function FestivalVO() {
    this._festivalType = 0;
    this._endTime = NaN;
    this.boostAmount = 0;
  }
  FestivalVO.prototype.fillFromParamObject = function (__s5param0) {
    if (__s5param0) {
      this._festivalType = __dep_exact_f855840627e6e145.int(__s5param0.T);
      this.parseDuration(__s5param0.RT);
      this._activeFestivalVO = __dep_export_CastleModel.CastleModel.premiumData.getFestivalItemByID(this._festivalType);
      if (this._activeFestivalVO) {
        this.boostAmount = this._activeFestivalVO.boost;
      }
    }
  };
  FestivalVO.prototype.parseDuration = function (__s9param0) {
    this._endTime = Math.max(0, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s9param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
  };
  Object.defineProperty(FestivalVO.prototype, "isActive", {
    get: function () {
      return this.remainingTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FestivalVO.prototype, "activeFestivalVO", {
    get: function () {
      return this._activeFestivalVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FestivalVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max(0, (this._endTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  return FestivalVO;
}();
exports.FestivalVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
