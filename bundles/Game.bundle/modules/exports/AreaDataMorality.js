Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __s0local0 = function (__s1param0) {
  function AreaDataMorality() {
    var __s3local0 = this;
    __s3local0._maxUnitStorage = 0;
    __s3local0._morality = 0;
    __s3local0._factionBuff = 0;
    __s3local0._maxAuxiliariesStorage = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AreaDataMorality, __s1param0);
  AreaDataMorality.prototype.parseGPA = function (__s5param0) {
    this._maxUnitStorage = __dep_exact_f855840627e6e145.int(__s5param0.US);
    this._maxAuxiliariesStorage = __dep_exact_f855840627e6e145.int(__s5param0.AUS);
    this._morality = __dep_exact_f855840627e6e145.int(__s5param0.M);
    this._factionBuff = __s5param0.RFPPA;
    if (this.areaData.isTreasureCamp) {
      var __s5local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
      if (__s5local0) {
        __s5local0.unitStorage = this._maxUnitStorage;
        __s5local0.morality = this._morality;
        __s5local0.resStorageCapacityWood = __dep_exact_f855840627e6e145.int(this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.WOOD).maxAmount);
        __s5local0.resStorageCapacityStone = __dep_exact_f855840627e6e145.int(this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.STONE).maxAmount);
        __s5local0.resStorageCapacityFood = __dep_exact_f855840627e6e145.int(this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).maxAmount);
      }
    }
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED));
  };
  AreaDataMorality.prototype.getTroopStrength = function () {
    var __s9local0 = 0;
    for (var __s9local1 = 0, __s9local2 = this.areaData.isoData.objects.getCompleteObjectsList(); __s9local1 < __s9local2.length; __s9local1++) {
      var __s9local3 = __s9local2[__s9local1];
      if (__s9local3 && __s9local3.morality < 0 && __s9local3.buildingState.isFunctionally) {
        __s9local0 += __dep_exact_f855840627e6e145.int(Math.abs(__s9local3.morality));
      }
    }
    return __s9local0;
  };
  AreaDataMorality.prototype.getMoralityPlus = function () {
    var __s14local0 = 0;
    for (var __s14local1 = 0, __s14local2 = this.areaData.isoData.objects.getCompleteObjectsList(); __s14local1 < __s14local2.length; __s14local1++) {
      var __s14local3 = __s14local2[__s14local1];
      if (__s14local3 && __s14local3.morality > 0 && __s14local3.buildingState.isFunctionally) {
        __s14local0 += __dep_exact_f855840627e6e145.int(Math.abs(__s14local3.morality));
      }
    }
    return __s14local0;
  };
  AreaDataMorality.prototype.getFactionMoralityPlus = function () {
    var __s19local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (__s19local0 && __s19local0.isOneLMSActive) {
      return 0;
    } else if (this._factionBuff < 0.5 && this.areaData.areaInfo.ownerInfo.factionID == __dep_exact_26a421b704832cff_1.FactionConst.RED_FACTION) {
      return __dep_exact_f855840627e6e145.int(this.getMoralityPlus() * __dep_exact_26a421b704832cff_1.FactionConst.getMoraleBoostFromFactionStrength(this._factionBuff));
    } else if (this._factionBuff > 0.5 && this.areaData.areaInfo.ownerInfo.factionID == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION) {
      return __dep_exact_f855840627e6e145.int(this.getMoralityPlus() * __dep_exact_26a421b704832cff_1.FactionConst.getMoraleBoostFromFactionStrength(1 - this._factionBuff));
    } else {
      return 0;
    }
  };
  Object.defineProperty(AreaDataMorality.prototype, "maxUnitStorage", {
    get: function () {
      return this._maxUnitStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataMorality.prototype, "morality", {
    get: function () {
      return this._morality;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataMorality.prototype, "factionBuff", {
    get: function () {
      return this._factionBuff;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataMorality.prototype, "maxAuxiliariesStorage", {
    get: function () {
      return this._maxAuxiliariesStorage;
    },
    enumerable: true,
    configurable: true
  });
  return AreaDataMorality;
}(require("gge-module:export_AAreaDataComponent").AAreaDataComponent);
exports.AreaDataMorality = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IAreaDataComponent");
