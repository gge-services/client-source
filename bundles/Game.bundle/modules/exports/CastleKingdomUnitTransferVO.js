Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleKingdomUnitTransferVO() {
    this._units = [];
    this._endTime = 0;
    this._targetKingdomID = 0;
  }
  CastleKingdomUnitTransferVO.prototype.fillFromParamObject = function (__s5param0) {
    this._units = __s5param0.I;
    var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param0.RS);
    this._endTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5local0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._targetKingdomID = __dep_exact_f855840627e6e145.int(__s5param0.KID);
  };
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max((this._endTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "totalTravelTimeInSeconds", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this._targetKingdomID).unitTravelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "progressPercent", {
    get: function () {
      return 1 - Math.max(this.remainingTimeInSeconds / this.totalTravelTimeInSeconds, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "toolTipText", {
    get: function () {
      var __s13local0 = "";
      if (this._units != null) {
        for (var __s13local1 = 0, __s13local2 = this._units; __s13local1 < __s13local2.length; __s13local1++) {
          var __s13local3 = __s13local2[__s13local1];
          if (__s13local3 !== undefined) {
            var __s13local4 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(__s13local3[0]);
            __s13local0 += __s13local3[1] + "x " + __dep_exact_92d05af59ee2ff30.Localize.text(__s13local4.getNameString()) + "\n";
          }
        }
      }
      return __s13local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "units", {
    get: function () {
      return this._units;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomUnitTransferVO.prototype, "targetKingdomID", {
    get: function () {
      return this._targetKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingdomUnitTransferVO;
}();
exports.CastleKingdomUnitTransferVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
