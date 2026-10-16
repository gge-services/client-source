Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DetailedCastleVO() {
    this.kingdomID = 0;
    this.areaID = 0;
    this.resources = new Map();
    this.storage = new Map();
    this.production = new Map();
    this.maxStorage = 0;
    this.minStorage = 0;
    this.lawAndOrder = 0;
    this.population = 0;
    this.defence = 0;
    this.neutralDeco = 0;
    this.sickness = 0;
    this.riot = 0;
    this._numGuards = 0;
    this.numTotalMarketCarriages = 0;
    this.hasBarracks = false;
    this.hasSiegeWorkshop = false;
    this.hasDefenseWorkshop = false;
    this.hasHospital = false;
    this._resourceDeltaFoodConsumption = 0;
    this._foodConsumptionReduction = 0;
    this._resourceDeltaMeadConsumption = 0;
    this._resourceDeltaBeefConsumption = 0;
    this._meadConsumptionReduction = 0;
    this._beefConsumptionReduction = 0;
  }
  DetailedCastleVO.prototype.parseData = function (__s5param0) {
    this.unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this.unitInventory.fillFromWodAmountArray(__s5param0.AC);
    this.strongholdUnitInventory = new __dep_export_StrongholdUnitInventory.StrongholdUnitInventory();
    this.strongholdUnitInventory.fillFromWodAmountArray(__s5param0.SHI);
    this.areaID = __dep_exact_f855840627e6e145.int(__s5param0.AID);
    this.defence = __dep_exact_f855840627e6e145.int(__s5param0.D);
    this.hasBarracks = Boolean(__s5param0.B);
    this.hasSiegeWorkshop = Boolean(__s5param0.WS);
    this.hasDefenseWorkshop = Boolean(__s5param0.DW);
    this.hasHospital = Boolean(__s5param0.H);
    for (var __s5local0 = 0, __s5local1 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        this.resources.set(__s5local2, __s5param0[__s5local2.serverKey]);
      }
    }
    if (__s5param0.gpa) {
      this.parseGpaData(__s5param0.gpa);
    } else {
      this.storage = new Map();
      this.production = new Map();
      this.lawAndOrder = this.population = this._numGuards = -1;
    }
    this.numTotalMarketCarriages = __dep_exact_f855840627e6e145.int(__s5param0.MC);
  };
  DetailedCastleVO.prototype.parseGpaData = function (__s12param0) {
    this.maxStorage = 0;
    this.minStorage = 0;
    for (var __s12local0 = 0, __s12local1 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s12local0 < __s12local1.length; __s12local0++) {
      var __s12local2 = __s12local1[__s12local0];
      if (__s12local2 !== undefined) {
        var __s12local3 = "D" + __s12local2.serverKey;
        var __s12local4 = "MR" + __s12local2.serverKey;
        this.production.set(__s12local2, __s12param0.hasOwnProperty(__s12local3) ? __s12param0[__s12local3] / 10 : 0);
        this.storage.set(__s12local2, __s12param0.hasOwnProperty(__s12local4) ? __s12param0[__s12local4] : 0);
        if (__s12local2 != __dep_export_CollectableEnum.CollectableEnum.AQUAMARINE) {
          this.maxStorage = __dep_exact_f855840627e6e145.int(Math.max(this.maxStorage, this.storage.get(__s12local2)));
        }
        if (this.minStorage <= 0) {
          this.minStorage = this.maxStorage;
        }
        if (this.storage.get(__s12local2) > 0) {
          this.minStorage = __dep_exact_f855840627e6e145.int(Math.min(this.minStorage, this.storage.get(__s12local2)));
        }
      }
    }
    this.lawAndOrder = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.LawAndOrderConst.calculateLawAndOrder(__s12param0.NDP, __s12param0.S, __s12param0.R));
    this.neutralDeco = __dep_exact_f855840627e6e145.int(__s12param0.NDP);
    this.sickness = __dep_exact_f855840627e6e145.int(__s12param0.S);
    this.riot = __dep_exact_f855840627e6e145.int(__s12param0.R);
    this.population = __dep_exact_f855840627e6e145.int(__s12param0.P);
    this._numGuards = __dep_exact_f855840627e6e145.int(__s12param0.GRD);
    this._resourceDeltaFoodConsumption = __s12param0.DFC / 10;
    this._foodConsumptionReduction = __dep_exact_f855840627e6e145.int(__s12param0.FCR);
    this._resourceDeltaMeadConsumption = __s12param0.DMEADC / 10;
    this._resourceDeltaBeefConsumption = __s12param0.DBEEFC / 10;
    this._meadConsumptionReduction = __dep_exact_f855840627e6e145.int(__s12param0.MEADCR);
    this._beefConsumptionReduction = __dep_exact_f855840627e6e145.int(__s12param0.BEEFCR);
  };
  DetailedCastleVO.prototype.getIsMyMainCastle = function (__s20param0) {
    var __s20local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s20param0);
    return !!__s20local0 && __s20local0.objectId == this.areaID;
  };
  Object.defineProperty(DetailedCastleVO.prototype, "maxResourceStorageAmount", {
    get: function () {
      return this.maxStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedCastleVO.prototype, "minResourceStorageAmount", {
    get: function () {
      return this.minStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedCastleVO.prototype, "numGuards", {
    get: function () {
      var __s26local0 = __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AMOUNT_GUARDS_BOOST).strength;
      return Math.round(this._numGuards * (1 + __s26local0 / 100));
    },
    enumerable: true,
    configurable: true
  });
  DetailedCastleVO.prototype.getResourcesAsCollectableList = function () {
    var __s28local0 = new __dep_export_CollectableList.CollectableList();
    for (var __s28local1 = 0, __s28local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s28local1 < __s28local2.length; __s28local1++) {
      var __s28local3 = __s28local2[__s28local1];
      if (__s28local3 !== undefined) {
        __s28local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s28local3, this.resources.get(__s28local3)));
      }
    }
    return __s28local0;
  };
  DetailedCastleVO.prototype.getMaxStorageSpace = function (__s33param0) {
    return __dep_exact_f855840627e6e145.int(this.storage.get(__s33param0));
  };
  DetailedCastleVO.prototype.getResource = function (__s35param0) {
    return __dep_exact_f855840627e6e145.int(this.resources.get(__s35param0));
  };
  DetailedCastleVO.prototype.setResource = function (__s37param0, __s37param1) {
    this.resources.set(__s37param0, __s37param1);
  };
  DetailedCastleVO.prototype.getResourceProduction = function (__s39param0) {
    return this.production.get(__s39param0);
  };
  DetailedCastleVO.prototype.createStorageList = function () {
    var __s41local0 = new __dep_export_CollectableList.CollectableList();
    if (this.storage != null) {
      for (var __s41local1 = 0, __s41local2 = Array.from(this.storage.keys()); __s41local1 < __s41local2.length; __s41local1++) {
        var __s41local3 = __s41local2[__s41local1];
        if (__s41local3 !== undefined) {
          __s41local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s41local3, this.storage.get(__s41local3)));
        }
      }
    }
    return __s41local0;
  };
  DetailedCastleVO.prototype.getEffectiveResourceProduction = function (__s47param0) {
    if (__s47param0 == __dep_export_CollectableEnum.CollectableEnum.FOOD) {
      return this.getResourceProduction(__dep_export_CollectableEnum.CollectableEnum.FOOD) - this.foodConsumption;
    } else if (__s47param0 == __dep_export_CollectableEnum.CollectableEnum.MEAD) {
      return this.getResourceProduction(__dep_export_CollectableEnum.CollectableEnum.MEAD) - this.meadConsumption;
    } else if (__s47param0 == __dep_export_CollectableEnum.CollectableEnum.BEEF) {
      return this.getResourceProduction(__dep_export_CollectableEnum.CollectableEnum.BEEF) - this.beefConsumption;
    } else {
      return this.getResourceProduction(__s47param0);
    }
  };
  Object.defineProperty(DetailedCastleVO.prototype, "foodConsumption", {
    get: function () {
      return this._resourceDeltaFoodConsumption * this._foodConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedCastleVO.prototype, "meadConsumption", {
    get: function () {
      return this._resourceDeltaMeadConsumption * this._meadConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedCastleVO.prototype, "beefConsumption", {
    get: function () {
      return this._resourceDeltaBeefConsumption * this._beefConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  return DetailedCastleVO;
}();
exports.DetailedCastleVO = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_StrongholdUnitInventory = require("gge-module:export_StrongholdUnitInventory");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
