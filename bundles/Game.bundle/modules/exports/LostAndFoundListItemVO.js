Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function LostAndFoundListItemVO() {
    this.id = 0;
    this.endTimeStamp = NaN;
    this.receivedTimeStamp = NaN;
    this.rank = 0;
  }
  LostAndFoundListItemVO.prototype.parseData = function (__s5param0) {
    var __s5local0 = __dep_export_CollectableHelper.CollectableHelper.getTypeByServerKey(__s5param0.ROT, __s5param0.ROV);
    this.collectableVO = __dep_export_CollectableHelper.CollectableHelper.createVO(__s5local0.type, -Number.MAX_VALUE, __s5local0.id);
    this.collectableVO.parseServerObject(__s5param0.ROV);
    this.id = __dep_exact_f855840627e6e145.int(__s5param0.LFID);
    this.endTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5param0.ET * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this.receivedTimeStamp = __s5param0.CT;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param0.LFES);
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.collectableVO, "CollectableItemEquipmentUniqueVO") && this.collectableVO.equipmentVO && this.collectableVO.equipmentVO.remainingDuration > 0) {
      this.collectableVO.setRemainingTime(this.collectableVO.equipmentVO.totalDuration - __s5local1);
    }
  };
  Object.defineProperty(LostAndFoundListItemVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max(0, (this.endTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItemVO.prototype, "receivedTimeTextVO", {
    get: function () {
      var __s10local0 = new Date();
      __s10local0.setTime(this.receivedTimeStamp * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
      return new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getDateStringFromDate(__s10local0));
    },
    enumerable: true,
    configurable: true
  });
  return LostAndFoundListItemVO;
}();
exports.LostAndFoundListItemVO = __s0local0;
