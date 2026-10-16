Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function () {
  function FusionForgeVO(__s3param0) {
    this._id = -1;
    this._level = -1;
    this._currentEnergy = 0;
    this._energyRechargeProgressTime = 0;
    this._newDataArrivedTimestamp = 0;
    this._usedMinuteSkips = 0;
    this._usedPremiumSkips = 0;
    this._requestTimer = new __dep_exact_81dacdf05bd32292.Timer(1000);
    this._id = __s3param0;
    this.init();
  }
  FusionForgeVO.prototype.init = function () {
    this._requestTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onRequestTimerComplete));
  };
  FusionForgeVO.prototype.destroy = function () {
    this._requestTimer.stop();
    this._requestTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onRequestTimerComplete));
  };
  FusionForgeVO.prototype.parseServerObject = function (__s9param0) {
    this._level = __dep_exact_f855840627e6e145.int(__s9param0.FL);
    this._currentEnergy = __dep_exact_f855840627e6e145.int(__s9param0.FE);
    this._energyRechargeProgressTime = __dep_exact_f855840627e6e145.int(__s9param0.FRS);
    this._usedMinuteSkips = __dep_exact_f855840627e6e145.int(__s9param0.FUM);
    this._usedPremiumSkips = __dep_exact_f855840627e6e145.int(__s9param0.FUPS);
    this._newDataArrivedTimestamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
    this._requestTimer.delay = this.getNextEnergyRechargeTime() * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._requestTimer.repeatCount = 1;
    this._requestTimer.reset();
    this._requestTimer.start();
  };
  FusionForgeVO.prototype.requestDataFromServer = function () {
    this._requestTimer.stop();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetFusionForgeInfoEventVO.C2SGetFusionForgeInfoEventVO([this.id]));
  };
  FusionForgeVO.prototype.getFullEnergy = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionEnergyCap(this.level));
  };
  FusionForgeVO.prototype.getMaxEnergy = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionEnergyCap(this.level) * __dep_export_ClientConstFusion.ClientConstFusion.MAX_ENERGY_PERCENTAGE_FACTOR);
  };
  FusionForgeVO.prototype.getCurrentEnergyFillFactor = function () {
    return __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.currentEnergy / this.getFullEnergy(), 0, __dep_export_ClientConstFusion.ClientConstFusion.MAX_ENERGY_PERCENTAGE_FACTOR);
  };
  FusionForgeVO.prototype.getCurrentEnergyOverfillFactor = function () {
    return __dep_exact_9e901e8e2483a22f.MathBase.max(0, this.getCurrentEnergyFillFactor() - __dep_export_ClientConstFusion.ClientConstFusion.FULL_ENERGY_PERCENTAGE_FACTOR);
  };
  FusionForgeVO.prototype.getPremiumSkipEnergy = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionEnergyRechargeFromC2(this.getFullEnergy()));
  };
  FusionForgeVO.prototype.getEnergyAfterPremiumSkip = function () {
    return __dep_exact_f855840627e6e145.int(Math.min(this.getMaxEnergy() * __dep_export_ClientConstFusion.ClientConstFusion.MAX_ENERGY_PERCENTAGE_FACTOR, this.currentEnergy + this.getPremiumSkipEnergy()));
  };
  FusionForgeVO.prototype.getC2PriceForEnergyPremiumSkip = function () {
    var __s25local0 = __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionSystem(this.id);
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionEnergyRechargeFromC2Cost(__s25local0.skipRechargeHardCurrencyCost, __s25local0.skipRechargeHardCurrencyCostFactor, this._usedPremiumSkips));
  };
  FusionForgeVO.prototype.getNextEnergyRechargeTime = function () {
    var __s27local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionSystem(this.id).energyRechargeIntervalInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    var __s27local1 = __dep_exact_f855840627e6e145.int(this._energyRechargeProgressTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    var __s27local2 = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._newDataArrivedTimestamp);
    return __dep_exact_f855840627e6e145.int((__s27local0 - __s27local1 - __s27local2) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
  };
  FusionForgeVO.prototype.getEnergyProgressbarTooltipText = function () {
    if (this.getCurrentEnergyFillFactor() >= __dep_export_ClientConstFusion.ClientConstFusion.FULL_ENERGY_PERCENTAGE_FACTOR) {
      return "";
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("fusionEnergy_refillTime_tt", [__dep_exact_26a421b704832cff.FusionConst.getFusionEnergyRechargeAmount(this.level), __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(this.getNextEnergyRechargeTime())]);
    }
  };
  FusionForgeVO.prototype.getCostForForgeLevelUp = function () {
    return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_exact_26a421b704832cff.FusionConst.getForgeLevelUpDustCost(this.level), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_DECO_DUST);
  };
  FusionForgeVO.prototype.getAvailableCatalysts = function (__s35param0 = -1) {
    var __s35local0 = __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getCatalystsByForge(this.id);
    var __s35local1 = [];
    if (__s35local0 != null) {
      for (var __s35local2 = 0, __s35local3 = __s35local0; __s35local2 < __s35local3.length; __s35local2++) {
        var __s35local4 = __s35local3[__s35local2];
        if (__s35local4 !== undefined) {
          var __s35local5 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s35local4.currencyId), __s35local4.currencyId);
          if ((__s35param0 <= __s35local4.maxUsableFusionLevel || __s35param0 < 0) && (__s35local5.amount > 0 || !__s35local4.deprecated)) {
            __s35local1.push(__s35local5);
          }
        }
      }
    }
    return __s35local1;
  };
  FusionForgeVO.prototype.onRequestTimerComplete = function (__s42param0) {
    this.requestDataFromServer();
  };
  Object.defineProperty(FusionForgeVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeVO.prototype, "currentEnergy", {
    get: function () {
      return this._currentEnergy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeVO.prototype, "energyRechargeProgressTime", {
    get: function () {
      return this._energyRechargeProgressTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeVO.prototype, "usedMinuteSkips", {
    get: function () {
      return this._usedMinuteSkips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeVO.prototype, "usedPremiumSkips", {
    get: function () {
      return this._usedPremiumSkips;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeVO;
}();
exports.FusionForgeVO = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetFusionForgeInfoEventVO = require("gge-module:export_C2SGetFusionForgeInfoEventVO");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
