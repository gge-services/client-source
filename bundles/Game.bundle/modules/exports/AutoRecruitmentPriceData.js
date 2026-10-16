Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_AutoRecruitmentPriceEnum = require("gge-module:export_AutoRecruitmentPriceEnum");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentPriceData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._priceDic = new Map();
    __s3local0._priceDicByType = new Map();
    __s3local0._maxLoopsByType = new Map();
    __s3local0.parse(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentPriceData, __s1param0);
  AutoRecruitmentPriceData.prototype.parse = function (__s5param0) {
    this._priceDic = new Map();
    this._priceDicByType = new Map();
    for (var __s5local0 = 0, __s5local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_AutoRecruitmentPriceEnum.AutoRecruitmentPriceEnum); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      this._priceDicByType.set(__s5local2, new Map());
    }
    this._maxLoopsByType = new Map();
    var __s5local3 = __s5param0.autoRecruitmentPrices;
    if (__s5local3 != null) {
      if (__s5local3 != null) {
        for (var __s5local4 = 0, __s5local5 = __s5local3; __s5local4 < __s5local5.length; __s5local4++) {
          var __s5local6 = __s5local5[__s5local4];
          var __s5local7 = new __dep_export_AutoRecruitmentPriceVO.AutoRecruitmentPriceVO();
          __s5local7.fillByXmlNode(__s5local6);
          this._priceDic.set(__s5local7.id, __s5local7);
          this._priceDicByType.get(__s5local7.priceType)[__s5local7.loop] = __s5local7;
          if (!__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this._maxLoopsByType, __s5local7.priceType)) {
            this._maxLoopsByType.set(__s5local7.priceType, 0);
          }
          this._maxLoopsByType.set(__s5local7.priceType, this._maxLoopsByType.get(__s5local7.priceType) + 1);
        }
      }
    }
  };
  AutoRecruitmentPriceData.prototype.getPriceVO = function (__s14param0, __s14param1) {
    return this._priceDicByType.get(__s14param0)[__s14param1];
  };
  AutoRecruitmentPriceData.prototype.getPriceVOById = function (__s16param0) {
    return this._priceDic.get(__s16param0);
  };
  AutoRecruitmentPriceData.prototype.getMaxLoopsByType = function (__s18param0) {
    return __dep_exact_f855840627e6e145.int(this._maxLoopsByType.get(__s18param0));
  };
  AutoRecruitmentPriceData.prototype.getCosts = function (__s20param0, __s20param1, __s20param2) {
    var __s20local0 = new __dep_export_CollectableItemC2VO.CollectableItemC2VO(0);
    for (var __s20local1 = __s20param1; __s20local1 <= __s20param2; ++__s20local1) {
      var __s20local2 = this.getPriceVO(__s20param0, __s20local1);
      if (__s20local2) {
        var __s20local3 = __s20local2.costs;
        if (__s20local3) {
          __s20local0.amount += __s20local3.amount;
        }
      }
    }
    return __s20local0;
  };
  return AutoRecruitmentPriceData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.AutoRecruitmentPriceData = __s0local0;
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_AutoRecruitmentPriceVO = require("gge-module:export_AutoRecruitmentPriceVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
