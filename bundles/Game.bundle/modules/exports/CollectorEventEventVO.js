Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectorEventEventVO() {
    var __s3local0 = this;
    __s3local0._nextPayoutTimestamp = NaN;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectorEventEventVO, __s1param0);
  CollectorEventEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    this._collectInfoVO = __dep_export_CastleModel.CastleModel.collectEventData.getCollectInfoVOByID(__s5param2.EOID);
    this._nextPayoutTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5param2.SDP * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
  };
  CollectorEventEventVO.prototype.openDialog = function (__s7param0 = true) {
    this.executeOpenDialog(__s7param0, __dep_export_CollectorEventDialog.CollectorEventDialog, new __dep_exact_9e901e8e2483a22f.BasicProperties());
  };
  CollectorEventEventVO.prototype.getTimeUntilNextPayout = function () {
    return __dep_exact_f855840627e6e145.int(Math.max(0, (this._nextPayoutTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC));
  };
  Object.defineProperty(CollectorEventEventVO.prototype, "collectInfoVO", {
    get: function () {
      return this._collectInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return CollectorEventEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.CollectorEventEventVO = __s0local0;
var __dep_export_CollectorEventDialog = require("gge-module:export_CollectorEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
