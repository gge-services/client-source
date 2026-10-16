Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AreaDataStorage() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.reset();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AreaDataStorage, __s1param0);
  AreaDataStorage.prototype.reset = function () {
    this._items = new Map();
    for (var __s5local0 = 0, __s5local1 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        this.addStorageSave(__s5local2);
      }
    }
  };
  AreaDataStorage.prototype.addStorageSave = function (__s10param0) {
    if (!this._items.get(__s10param0)) {
      this._items.set(__s10param0, new __dep_export_AreaDataStorageItem.AreaDataStorageItem(__s10param0));
    }
  };
  AreaDataStorage.prototype.parseGPA = function (__s13param0) {
    if (this._items != null) {
      for (var __s13local0 = 0, __s13local1 = Array.from(this._items.values()); __s13local0 < __s13local1.length; __s13local0++) {
        __s13local1[__s13local0].parseGPA(__s13param0);
      }
    }
  };
  AreaDataStorage.prototype.parseGCA = function (__s18param0) {
    if (this._items != null) {
      for (var __s18local0 = 0, __s18local1 = Array.from(this._items.values()); __s18local0 < __s18local1.length; __s18local0++) {
        __s18local1[__s18local0].parseGCA(__s18param0);
      }
    }
  };
  AreaDataStorage.prototype.parseGRC = function (__s23param0) {
    if (this._items != null) {
      for (var __s23local0 = 0, __s23local1 = Array.from(this._items.values()); __s23local0 < __s23local1.length; __s23local0++) {
        __s23local1[__s23local0].parseGRC(__s23param0);
      }
    }
  };
  AreaDataStorage.prototype.getItem = function (__s28param0) {
    this.addStorageSave(__s28param0);
    return this._items.get(__s28param0);
  };
  AreaDataStorage.prototype.getSpecialItem = function () {
    var __s30local0 = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    switch (this.areaData.areaInfo.kingdomID) {
      case __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID:
        __s30local0 = __dep_export_CollectableEnum.CollectableEnum.IRON;
        break;
      case __dep_exact_26a421b704832cff_2.WorldIce.KINGDOM_ID:
        __s30local0 = __dep_export_CollectableEnum.CollectableEnum.COAL;
        break;
      case __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID:
        __s30local0 = __dep_export_CollectableEnum.CollectableEnum.OIL;
        break;
      case __dep_exact_26a421b704832cff_4.WorldVolcano.KINGDOM_ID:
        __s30local0 = __dep_export_CollectableEnum.CollectableEnum.GLASS;
        break;
      case __dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID:
        __s30local0 = __dep_export_CollectableEnum.CollectableEnum.AQUAMARINE;
    }
    return this.getItem(__s30local0);
  };
  AreaDataStorage.prototype.getReceivableSpecialResources = function () {
    var __s33local0 = [];
    if (__dep_export_CastleModel.CastleModel.userData.isLegend) {
      __s33local0.push(__dep_export_CollectableEnum.CollectableEnum.COAL);
      __s33local0.push(__dep_export_CollectableEnum.CollectableEnum.OIL);
      __s33local0.push(__dep_export_CollectableEnum.CollectableEnum.GLASS);
      __s33local0.push(__dep_export_CollectableEnum.CollectableEnum.IRON);
      if (__dep_export_CastleModel.CastleModel.userData.userLegendLevel >= this.minHoneyMeadLegendLevel && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID) {
        __s33local0.push(__dep_export_CollectableEnum.CollectableEnum.HONEY);
      }
    } else {
      var __s33local1 = this.getProducibleSpecialResource();
      if (__s33local1) {
        __s33local0.push(__s33local1);
      }
    }
    return __s33local0;
  };
  Object.defineProperty(AreaDataStorage.prototype, "minHoneyMeadLegendLevel", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.MathBase.min(__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.BREWERY_BUILDING_WOD).requiredLegendLevel, __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.BEEKEEPER_BUILDING_WOD).requiredLegendLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorage.prototype, "minBeefLegendLevel", {
    get: function () {
      return this.minHoneyMeadLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  AreaDataStorage.prototype.getProducibleSpecialResource = function () {
    switch (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
      case __dep_exact_26a421b704832cff_2.WorldIce.KINGDOM_ID:
        return __dep_export_CollectableEnum.CollectableEnum.COAL;
      case __dep_exact_26a421b704832cff_4.WorldVolcano.KINGDOM_ID:
        return __dep_export_CollectableEnum.CollectableEnum.GLASS;
      case __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID:
        return __dep_export_CollectableEnum.CollectableEnum.OIL;
      case __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID:
        if (__dep_export_CastleModel.CastleModel.userData.isLegend) {
          return __dep_export_CollectableEnum.CollectableEnum.IRON;
        } else {
          return null;
        }
      default:
        return null;
    }
  };
  AreaDataStorage.prototype.getAffordableAmount = function (__s48param0) {
    var __s48local0 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    for (var __s48local1 = 0, __s48local2 = __s48param0.getCostTypes(); __s48local1 < __s48local2.length; __s48local1++) {
      var __s48local3 = __s48local2[__s48local1];
      var __s48local4 = __dep_exact_f855840627e6e145.int(__s48param0.getCost(__s48local3));
      var __s48local5 = this.getItem(__s48local3.type);
      if (__s48local4 > 0 && __s48local5) {
        __s48local0 = __dep_exact_f855840627e6e145.int(Math.min(__s48local0, __s48local5.amount / __s48local4));
      }
    }
    return __s48local0;
  };
  return AreaDataStorage;
}(require("gge-module:export_AAreaDataComponent").AAreaDataComponent);
exports.AreaDataStorage = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_AreaDataStorageItem = require("gge-module:export_AreaDataStorageItem");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IAreaDataComponent");
