Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentBuyRecruitmentSlotsProperties(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._slotCount = 0;
    __s3local0._listId = 0;
    __s3local0._c2Costs = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._listId = __s3param0;
    __s3local0._slotCount = __s3param1;
    __s3local0._c2Costs = __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.UnitProductionConst.UNLOCK_C2) * __s3local0._slotCount;
    var __s3local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.UnitProductionConst.UNLOCK_DURATION);
    __s3local0._unlockDurationStr = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeToString(__s3local1, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentBuyRecruitmentSlotsProperties, __s1param0);
  Object.defineProperty(AutoRecruitmentBuyRecruitmentSlotsProperties.prototype, "slotCount", {
    get: function () {
      return this._slotCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentBuyRecruitmentSlotsProperties.prototype, "listId", {
    get: function () {
      return this._listId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentBuyRecruitmentSlotsProperties.prototype, "c2Costs", {
    get: function () {
      return this._c2Costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentBuyRecruitmentSlotsProperties.prototype, "unlockDurationStr", {
    get: function () {
      return this._unlockDurationStr;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentBuyRecruitmentSlotsProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.AutoRecruitmentBuyRecruitmentSlotsProperties = __s0local0;
