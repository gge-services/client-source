Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_ADecoBuildingVO = require("gge-module:export_ADecoBuildingVO");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoStorageCustomDecoVO = require("gge-module:export_DecoStorageCustomDecoVO");
var __dep_export_DecoStorageEvent = require("gge-module:export_DecoStorageEvent");
var __dep_export_DecoStorageRegularDecoVO = require("gge-module:export_DecoStorageRegularDecoVO");
var __dep_export_DecoStorageUniqueDecoVO = require("gge-module:export_DecoStorageUniqueDecoVO");
var __s0local0 = function () {
  function DecoStorageVO(__s3param0) {
    this._storageIDs = [];
    this._regularDecos = new Map();
    this._customDecos = [];
    this._uniqueDecos = [];
    this._storageIDs.push(__s3param0);
  }
  DecoStorageVO.prototype.parseSIN = function (__s5param0) {
    this._regularDecos = new Map();
    if (__s5param0 && __s5param0.RD) {
      for (var __s5local0 = 0, __s5local1 = __s5param0.RD; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          var __s5local3 = new __dep_export_DecoStorageRegularDecoVO.DecoStorageRegularDecoVO();
          __s5local3.parseData(__s5local2);
          if (this._storageIDs.indexOf(__dep_exact_26a421b704832cff.DecorationConst.AREA_INVENTORY_STORAGE_ID) > -1) {
            __s5local3.localStorageAmount = __s5local3.amount;
          }
          if (__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s5local3.wodId)) {
            this._regularDecos.set(__s5local3.wodId, __s5local3);
          }
        }
      }
    }
    this._customDecos = [];
    if (__s5param0 && __s5param0.CD) {
      for (var __s5local4 = 0, __s5local5 = __s5param0.CD; __s5local4 < __s5local5.length; __s5local4++) {
        __s5local2 = __s5local5[__s5local4];
        var __s5local6 = new __dep_export_DecoStorageCustomDecoVO.DecoStorageCustomDecoVO();
        __s5local6.parseData(__s5local2);
        this._customDecos.push(__s5local6);
      }
    }
    this._uniqueDecos = [];
    if (__s5param0 && __s5param0.UD) {
      for (var __s5local7 = 0, __s5local8 = __s5param0.UD; __s5local7 < __s5local8.length; __s5local7++) {
        __s5local2 = __s5local8[__s5local7];
        var __s5local9 = new __dep_export_DecoStorageUniqueDecoVO.DecoStorageUniqueDecoVO();
        __s5local9.parseData(__s5local2);
        this._uniqueDecos.push(__s5local9);
      }
    }
  };
  DecoStorageVO.prototype.markAllDecosAsSeen = function () {
    var __s19local0 = this.getNewAmount();
    if (this._regularDecos != null) {
      for (var __s19local1 = 0, __s19local2 = Array.from(this._regularDecos.values()); __s19local1 < __s19local2.length; __s19local1++) {
        __s19local2[__s19local1].newAmount = 0;
      }
    }
    if (this._customDecos != null) {
      for (var __s19local3 = 0, __s19local4 = this._customDecos; __s19local3 < __s19local4.length; __s19local3++) {
        var __s19local5 = __s19local4[__s19local3];
        if (__s19local5 !== undefined) {
          __s19local5.isNew = false;
        }
      }
    }
    if (this._uniqueDecos != null) {
      for (var __s19local6 = 0, __s19local7 = this._uniqueDecos; __s19local6 < __s19local7.length; __s19local6++) {
        var __s19local8 = __s19local7[__s19local6];
        if (__s19local8 !== undefined) {
          __s19local8.isNew = false;
        }
      }
    }
    if (__s19local0 > 0) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_DecoStorageEvent.DecoStorageEvent(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED));
    }
  };
  DecoStorageVO.prototype.getNewAmount = function (__s33param0 = true, __s33param1 = true) {
    var __s33local0 = 0;
    if (this._regularDecos != null) {
      for (var __s33local1 = 0, __s33local2 = Array.from(this._regularDecos.values()); __s33local1 < __s33local2.length; __s33local1++) {
        var __s33local3 = __s33local2[__s33local1];
        var __s33local4 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s33local3.wodId) instanceof __dep_export_ADecoBuildingVO.ADecoBuildingVO;
        if (__s33param0 && __s33local4 || __s33param1 && !__s33local4) {
          __s33local0 += __s33local3.newAmount;
        }
      }
    }
    if (__s33param0) {
      if (this._customDecos != null) {
        for (var __s33local5 = 0, __s33local6 = this._customDecos; __s33local5 < __s33local6.length; __s33local5++) {
          var __s33local7 = __s33local6[__s33local5];
          if (__s33local7 !== undefined && __s33local7.isNew) {
            __s33local0++;
          }
        }
      }
      if (this._uniqueDecos != null) {
        for (var __s33local8 = 0, __s33local9 = this._uniqueDecos; __s33local8 < __s33local9.length; __s33local8++) {
          var __s33local10 = __s33local9[__s33local8];
          if (__s33local10 !== undefined && __s33local10.isNew) {
            __s33local0++;
          }
        }
      }
    }
    return __s33local0;
  };
  DecoStorageVO.prototype.getCappedNewAmount = function (__s48param0 = true, __s48param1 = true) {
    return Math.min(this.getNewAmount(__s48param0, __s48param1), 99);
  };
  DecoStorageVO.prototype.getCustomDecoByCustomId = function (__s50param0) {
    if (this._customDecos != null) {
      for (var __s50local0 = 0, __s50local1 = this._customDecos; __s50local0 < __s50local1.length; __s50local0++) {
        var __s50local2 = __s50local1[__s50local0];
        if (__s50local2 !== undefined && __s50local2.customId == __s50param0) {
          return __s50local2;
        }
      }
    }
    return null;
  };
  DecoStorageVO.prototype.getUniqueDecoByCustomId = function (__s56param0) {
    if (this._uniqueDecos != null) {
      for (var __s56local0 = 0, __s56local1 = this._uniqueDecos; __s56local0 < __s56local1.length; __s56local0++) {
        var __s56local2 = __s56local1[__s56local0];
        if (__s56local2 !== undefined && __s56local2.uniqueId == __s56param0) {
          return __s56local2;
        }
      }
    }
    return null;
  };
  DecoStorageVO.prototype.isNew = function (__s62param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s62param0, "CustomDecoBuildingVO")) {
      var __s62local0 = __s62param0;
      var __s62local1 = this.getCustomDecoByCustomId(__s62local0.uniqueBuildingId);
      if (__s62local1) {
        return __s62local1.isNew;
      }
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s62param0, "DecoBuildingVO")) {
      var __s62local2 = __s62param0;
      if (__s62local2.uniqueBuildingId >= 0) {
        var __s62local3 = this.getUniqueDecoByCustomId(__s62local2.uniqueBuildingId);
        if (__s62local3) {
          return __s62local3.isNew;
        }
      }
    }
    return !!__dep_exact_9e901e8e2483a22f_1.DictionaryUtil.containsKey(this._regularDecos, __s62param0.wodId) && this._regularDecos.get(__s62param0.wodId).newAmount > 0;
  };
  DecoStorageVO.prototype.isDecoInStorage = function (__s69param0) {
    return __dep_exact_81dacdf05bd32292.instanceOfClass(__s69param0, "DecoBuildingVO") && __dep_exact_9e901e8e2483a22f_1.DictionaryUtil.containsKey(this._regularDecos, __s69param0.wodId);
  };
  DecoStorageVO.prototype.getAmount = function (__s71param0) {
    if (__dep_exact_9e901e8e2483a22f_1.DictionaryUtil.containsKey(this._regularDecos, __s71param0)) {
      return this._regularDecos.get(__s71param0).amount;
    }
    for (var __s71local0 = 0, __s71local1 = this._customDecos; __s71local0 < __s71local1.length; __s71local0++) {
      if (__s71local1[__s71local0].wodId == __s71param0) {
        return 1;
      }
    }
    for (var __s71local2 = 0, __s71local3 = this._uniqueDecos; __s71local2 < __s71local3.length; __s71local2++) {
      if (__s71local3[__s71local2].wodId == __s71param0) {
        return 1;
      }
    }
    return 0;
  };
  DecoStorageVO.prototype.getAmountForBuildMenu = function (__s80param0) {
    var __s80local0 = this.getRelevantWodIdListForBuildMenu(__s80param0);
    if (__s80local0.length <= 0) {
      return this.getAmount(__s80param0);
    }
    var __s80local1 = 0;
    for (var __s80local2 = 0; __s80local2 < __s80local0.length; ++__s80local2) {
      __s80local1 += __dep_exact_f855840627e6e145.int(this.getAmount(__s80local0[__s80local2]));
    }
    return __s80local1;
  };
  DecoStorageVO.prototype.getRelevantWodIdListForBuildMenu = function (__s85param0) {
    var __s85local0 = [];
    var __s85local1 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByXml(__s85param0);
    if (__s85local1) {
      __s85local0.push(__s85local1.wodId);
      for (var __s85local2 = __s85local1.getUpgradeVO(); __s85local2 != null;) {
        __s85local0.push(__s85local2.wodId);
        __s85local2 = __s85local2.getUpgradeVO();
      }
    }
    return __s85local0;
  };
  DecoStorageVO.prototype.getHighestBuildingLevel = function (__s90param0) {
    var __s90local0;
    var __s90local1 = this.getRelevantWodIdListForBuildMenu(__s90param0);
    if (__s90local1 != null) {
      for (var __s90local2 = 0, __s90local3 = __s90local1; __s90local2 < __s90local3.length; __s90local2++) {
        var __s90local4 = __s90local3[__s90local2];
        if (__s90local4 !== undefined && this.getAmount(__s90local4) > 0) {
          var __s90local5 = castAs(__dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByXml(__s90local4, null, false), "AShopVO");
          if (__s90local5 && (!__s90local0 || __s90local0.level < __s90local5.level)) {
            __s90local0 = __s90local5;
          }
        }
      }
    }
    return __s90local0;
  };
  DecoStorageVO.prototype.getAllDecosAsBuildings = function () {
    var __s97local0 = [];
    if (this._regularDecos != null) {
      for (var __s97local1 = 0, __s97local2 = Array.from(this._regularDecos.values()); __s97local1 < __s97local2.length; __s97local1++) {
        var __s97local3 = __s97local2[__s97local1];
        if (__s97local3) {
          var __s97local4 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByXml(__s97local3.wodId);
          if (__s97local4) {
            __s97local0.push(__s97local4);
          }
        }
      }
    }
    return __s97local0 = (__s97local0 = __s97local0.concat(this.getCustomDecosAsBuildings())).concat(this.getUniqueDecosAsBuildings());
  };
  DecoStorageVO.prototype.getCustomDecosAsBuildings = function () {
    var __s104local0 = [];
    if (this._customDecos != null) {
      for (var __s104local1 = 0, __s104local2 = this._customDecos; __s104local1 < __s104local2.length; __s104local1++) {
        var __s104local3 = __s104local2[__s104local1];
        if (__s104local3 !== undefined) {
          var __s104local4 = castAs(__dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByXml(__s104local3.wodId), "CustomDecoBuildingVO");
          if (__s104local4) {
            __s104local4.customDecoPoints = __s104local3.decoValue;
            __s104local4.customId = __s104local3.customId;
            __s104local0.push(__s104local4);
          } else {
            __dep_exact_9e901e8e2483a22f.warn("DecoStorageVO.getCustomDecosAsBuildings(): wodId '" + __s104local3.wodId + "' is not a customDecoBuilding. Should be investigated.");
          }
        }
      }
    }
    return __s104local0;
  };
  DecoStorageVO.prototype.getUniqueDecosAsBuildings = function () {
    var __s112local0 = [];
    if (this._uniqueDecos != null) {
      for (var __s112local1 = 0, __s112local2 = this._uniqueDecos; __s112local1 < __s112local2.length; __s112local1++) {
        var __s112local3 = __s112local2[__s112local1];
        if (__s112local3 !== undefined) {
          var __s112local4 = castAs(__dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByXml(__s112local3.wodId), "ABasicBuildingVO");
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s112local4, "DecoBuildingVO")) {
            var __s112local5 = __s112local4;
            __s112local5.fusionInfoVO.serverXP = __s112local3.fusionXP;
            __s112local5.fusionInfoVO.uniqueId = __s112local3.uniqueId;
          }
          __s112local0.push(__s112local4);
        }
      }
    }
    return __s112local0;
  };
  DecoStorageVO.prototype.isEventKingdomStorage = function () {
    return this.storageIDs.indexOf(__dep_exact_26a421b704832cff.DecorationConst.GLOBAL_DECORATION_STORAGE_ID) == -1;
  };
  DecoStorageVO.prototype.getCurrentCapacity = function () {
    return __dep_exact_f855840627e6e145.int(this._uniqueDecos.length + this._customDecos.length);
  };
  DecoStorageVO.prototype.getMaxCapacity = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DecorationConst.SOFT_CAP);
  };
  DecoStorageVO.prototype.isCapacityFull = function () {
    return this.getCurrentCapacity() >= this.getMaxCapacity();
  };
  Object.defineProperty(DecoStorageVO.prototype, "regularDecos", {
    get: function () {
      return this._regularDecos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageVO.prototype, "customDecos", {
    get: function () {
      return this._customDecos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageVO.prototype, "storageIDs", {
    get: function () {
      return this._storageIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageVO.prototype, "uniqueDecos", {
    get: function () {
      return this._uniqueDecos;
    },
    enumerable: true,
    configurable: true
  });
  DecoStorageVO.prototype.addDecoStorage = function (__s135param0) {
    for (var __s135local0 = 0, __s135local1 = Array.from(__s135param0.regularDecos.keys()); __s135local0 < __s135local1.length; __s135local0++) {
      var __s135local2 = __s135local1[__s135local0];
      if (this._regularDecos.has(__s135local2)) {
        this._regularDecos.get(__s135local2).amount = this._regularDecos.get(__s135local2).amount + __s135param0.regularDecos.get(__s135local2).amount;
        this._regularDecos.get(__s135local2).newAmount = this._regularDecos.get(__s135local2).newAmount + __s135param0.regularDecos.get(__s135local2).newAmount;
        this._regularDecos.get(__s135local2).localStorageAmount = this._regularDecos.get(__s135local2).localStorageAmount + __s135param0.regularDecos.get(__s135local2).localStorageAmount;
      } else {
        this._regularDecos.set(__s135local2, __s135param0.regularDecos.get(__s135local2));
      }
    }
    this._customDecos = this._customDecos.concat(__s135param0.customDecos);
    this._uniqueDecos = this._uniqueDecos.concat(__s135param0.uniqueDecos);
    for (var __s135local3 = 0, __s135local4 = __s135param0.storageIDs; __s135local3 < __s135local4.length; __s135local3++) {
      var __s135local5 = __s135local4[__s135local3];
      if (this._storageIDs.indexOf(__s135local5) == -1) {
        this._storageIDs.push(__s135local5);
      }
    }
  };
  DecoStorageVO.prototype.isInLocalStorage = function (__s144param0) {
    return !!this.regularDecos.has(__s144param0.wodId) && this.regularDecos.get(__s144param0.wodId).localStorageAmount > 0;
  };
  DecoStorageVO.prototype.getNewAmountByWodID = function (__s146param0) {
    if (this._regularDecos.has(__s146param0)) {
      return this._regularDecos.get(__s146param0).newAmount;
    } else {
      return 0;
    }
  };
  return DecoStorageVO;
}();
exports.DecoStorageVO = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
