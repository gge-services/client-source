Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_LuckyWheelData = require("gge-module:export_LuckyWheelData");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function SaleDaysLuckyWheelData(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SaleDaysLuckyWheelData, __s1param0);
  SaleDaysLuckyWheelData.prototype.parseXml = function (__s5param0) {
    this._rewardSets = this.createRewardItemsMappedToSetID(__s5param0, "saleDaysLuckyWheelRewardSets", "saleDaysLuckyWheelRewardSet", "saleDaysLuckyWheelRewardSetID", "rewardIDs");
    this._normalPreviewSets = this.createRewardItemsMappedToSetID(__s5param0, "saleDaysLuckyWheelClasses", "saleDaysLuckyWheelClass", "saleDaysLuckyWheelClassID", "normalPreview");
    this._pointThresholds = this.getActivityRewardThresholds(__s5param0);
    this._winClassesAmount = __s5param0.saleDaysLuckyWheelClasses.length;
    var __s5local0;
    var __s5local1 = 0;
    var __s5local2 = 0;
    var __s5local3 = 0;
    this._sumOfSpinsWithinThresholds = new Array();
    for (var __s5local4 = 0; __s5local4 < this._winClassesAmount; __s5local4++) {
      __s5local0 = __s5param0.saleDaysLuckyWheelClasses[__s5local4];
      __s5local1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("saleDaysLuckyWheelClassID", __s5local0, "0"));
      __s5local2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("neededSpinsForNextClass", __s5local0, "0"));
      this._c2CostsPerSpinByWinClass.set(__s5local1, Number(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("C2PerSkippedSpin", __s5local0, "0")));
      this._neededSpinsForNextClass.set(__s5local1, __s5local2);
      if (__s5local1 >= this._pointThresholds[__s5local3] || __s5local1 == 1) {
        this._sumOfSpinsWithinThresholds.push(this._neededSpinsForNextClass.get(__s5local1));
        __s5local3++;
      } else {
        this._sumOfSpinsWithinThresholds.push(this._neededSpinsForNextClass.get(__s5local1 - 1) + this._neededSpinsForNextClass.get(__s5local1));
      }
    }
  };
  SaleDaysLuckyWheelData.prototype.getActivityRewardThresholds = function (__s11param0) {
    var __s11local0 = new Array();
    for (var __s11local1 = __dep_exact_f855840627e6e145.int(__s11param0.saleDaysLuckyWheelClasses.length), __s11local2 = 0; __s11local2 < __s11local1; __s11local2++) {
      if ((__s11param0.saleDaysLuckyWheelClasses[__s11local2].activityRewardThreshold || "") != "") {
        __s11local0.push(__dep_exact_f855840627e6e145.int(__s11param0.saleDaysLuckyWheelClasses[__s11local2].saleDaysLuckyWheelClassID || ""));
      }
    }
    return __s11local0;
  };
  Object.defineProperty(SaleDaysLuckyWheelData.prototype, "currencyID", {
    get: function () {
      return __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SALES_DAYS_LUCKY_WHEEL_TICKET;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LuckyWheelData.LuckyWheelData.prototype, "currencyID").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SaleDaysLuckyWheelData.prototype, "eventID", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LUCKYWHEEL_SD;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LuckyWheelData.LuckyWheelData.prototype, "eventID").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  return SaleDaysLuckyWheelData;
}(__dep_export_LuckyWheelData.LuckyWheelData);
exports.SaleDaysLuckyWheelData = __s0local0;
