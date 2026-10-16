Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRerollCostData = require("gge-module:export_CastleRerollCostData");
var __dep_export_AlienRerollChanceVO = require("gge-module:export_AlienRerollChanceVO");
var __s0local0 = function (__s1param0) {
  function CastleAlienRerollData(__s3param0) {
    var __s3local0 = this;
    __s3local0._rerollCountSoft = 0;
    __s3local0._rerollCountHard = 0;
    __s3local0._softChancesReroll = [];
    __s3local0._hardChancesReroll = [];
    __s3local0.requestRerollIsHard = false;
    __s3local0.showWarningPopup = true;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this) || this;
    var __s3local1 = __s3param0.alienRerollChances;
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          var __s3local5 = new __dep_export_AlienRerollChanceVO.AlienRerollChanceVO();
          __s3local5.parseXML(__s3local4);
          if (__s3local5.isSoftCurrency) {
            __s3local0._softChancesReroll.push(__s3local5);
          }
          if (__s3local5.isHardCurrency) {
            __s3local0._hardChancesReroll.push(__s3local5);
          }
        }
      }
    }
    __s3local0._softChancesReroll.sort(__s3local0.bindFunction(__s3local0.rerollChanceSort));
    __s3local0._hardChancesReroll.sort(__s3local0.bindFunction(__s3local0.rerollChanceSort));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAlienRerollData, __s1param0);
  CastleAlienRerollData.prototype.rerollChanceSort = function (__s11param0, __s11param1) {
    return __s11param0.amountUnits - __s11param1.amountUnits;
  };
  CastleAlienRerollData.prototype.getCostHard = function () {
    return __dep_exact_f855840627e6e145.int(this.alienRerollCosts[this.hardCountIndex].c2Cost);
  };
  CastleAlienRerollData.prototype.getCostSoftByKey = function (__s15param0) {
    var __s15local0 = __dep_export_CollectableEnum.CollectableEnum.getTypeByServerKey(__s15param0);
    if (__s15local0) {
      if (__s15local0 == __dep_export_CollectableEnum.CollectableEnum.C1) {
        return __dep_exact_f855840627e6e145.int(this.alienRerollCosts[this.softCountIndex].c1Cost);
      } else {
        return __dep_exact_f855840627e6e145.int(this.alienRerollCosts[this.softCountIndex].softCosts.getAmountOrDefaultByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyByKey(__s15param0).id)));
      }
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleAlienRerollData.prototype, "softCountIndex", {
    get: function () {
      return Math.min(this._rerollCountSoft, this.alienRerollCosts.length - 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAlienRerollData.prototype, "hardCountIndex", {
    get: function () {
      return Math.min(this._rerollCountHard, this.alienRerollCosts.length);
    },
    enumerable: true,
    configurable: true
  });
  CastleAlienRerollData.prototype.reset = function () {
    this._rerollCountSoft = 0;
    this._rerollCountHard = 0;
    this.showWarningPopup = true;
  };
  Object.defineProperty(CastleAlienRerollData.prototype, "alienRerollCosts", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.rerollCostData.getRerollCostsByType(__dep_export_CastleRerollCostData.CastleRerollCostData.REROLL_TYPE_ALIEN);
    },
    enumerable: true,
    configurable: true
  });
  CastleAlienRerollData.prototype.parse_RCE = function (__s29param0) {
    if (__s29param0) {
      if (__s29param0.RCSC != null && __s29param0.RCSC !== undefined) {
        this._rerollCountSoft = __dep_exact_f855840627e6e145.int(__s29param0.RCSC);
      }
      if (__s29param0.RCHC != null && __s29param0.RCHC !== undefined) {
        this._rerollCountHard = __dep_exact_f855840627e6e145.int(__s29param0.RCHC);
      }
    }
  };
  Object.defineProperty(CastleAlienRerollData.prototype, "softChancesReroll", {
    get: function () {
      return this._softChancesReroll;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAlienRerollData.prototype, "hardChancesReroll", {
    get: function () {
      return this._hardChancesReroll;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAlienRerollData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleAlienRerollData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
