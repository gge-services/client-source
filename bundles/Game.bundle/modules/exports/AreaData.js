Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AreaData() {
    this._data = new Map();
    this._updater = new __dep_export_AreaDataUpdater.AreaDataUpdater(this);
  }
  AreaData.prototype.initData = function (__s5param0) {
    if (__s5param0 != null) {
      for (var __s5local0 = 0, __s5local1 = __s5param0; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          var __s5local3 = new __s5local2.associatedClass();
          if (__s5local3) {
            this._data.set(__s5local2, __s5local3);
            __s5local3.init(this);
          }
        }
      }
    }
  };
  AreaData.prototype.destroy = function () {
    if (this._data != null) {
      for (var __s12local0 = 0, __s12local1 = Array.from(this._data.values()); __s12local0 < __s12local1.length; __s12local0++) {
        __s12local1[__s12local0].destroy();
      }
    }
    this._data = null;
  };
  Object.defineProperty(AreaData.prototype, "isMyArea", {
    get: function () {
      return this.areaInfo && this.areaInfo.isOwnMapobject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isMyMainCastle", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.kingdomData && this.isMyArea && __dep_export_CastleModel.CastleModel.userData.castleList) {
        var __s19local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
        return __s19local0 && __s19local0.objectId == this._areaInfo.objectId;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isMyHomeCastle", {
    get: function () {
      if (!this.areaInfo || !__dep_export_CastleModel.CastleModel.userData.castleList) {
        return false;
      }
      var __s22local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
      return !!__s22local0 && __s22local0.objectId == this._areaInfo.objectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isInAreaWithHunter", {
    get: function () {
      return this.isMyMainCastle && !this.isFactionCamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isUnderConquerProcess", {
    get: function () {
      return this.areaInfo.isUnderConquerControl;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isUnderConquerProcessByMe", {
    get: function () {
      var __s29local0 = this.areaInfo;
      return !!__s29local0 && __s29local0.isUnderConquerControl && __s29local0.occupierID == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  AreaData.prototype.getData = function (__s31param0) {
    if (this._data) {
      return this._data.get(__s31param0);
    } else {
      return null;
    }
  };
  Object.defineProperty(AreaData.prototype, "areaId", {
    get: function () {
      if (this.areaInfo) {
        return this.areaInfo.objectId;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "spaceId", {
    get: function () {
      if (this.areaInfo) {
        if (this.isTreasureCamp) {
          return this.areaInfo.mapID;
        } else {
          return this.areaInfo.kingdomID;
        }
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isFactionCamp", {
    get: function () {
      return !!this.areaInfo && this.areaInfo.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isSeasonCamp", {
    get: function () {
      return !!this.areaInfo && (this.areaInfo.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_TREASURE_CAMP || this.areaInfo.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAMP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isTreasureCamp", {
    get: function () {
      return !!this.areaInfo && this.areaInfo.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_TREASURE_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isCapital", {
    get: function () {
      return this.areaInfo.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isMetropol", {
    get: function () {
      return this.areaInfo.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isKingdomCastle", {
    get: function () {
      return this.areaInfo.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_KINGDOM_CASTLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isLowLevelUnderworld", {
    get: function () {
      return this.isTreasureCamp && !!__dep_export_CastleModel.CastleModel.specialEventData.getEventByClass(__dep_export_PrivateUnitDealerEventVO.PrivateUnitDealerEventVO);
    },
    enumerable: true,
    configurable: true
  });
  AreaData.prototype.getTotalRepairCostC2 = function () {
    var __s59local0;
    var __s59local1;
    var __s59local2 = 0;
    for (var __s59local3 = 0, __s59local4 = this.isoData.objects.innerBuildings.list; __s59local3 < __s59local4.length; __s59local3++) {
      __s59local0 = __s59local4[__s59local3];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s59local0, "ABasicBuildingVO")) {
        if (!(__s59local1 = castAs(__s59local0, "ABasicBuildingVO")) || !__s59local1.isDamaged || __s59local1.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED) {
          continue;
        }
        __s59local2 += __s59local1.getRepairDurationForAllRepairFunction();
      }
    }
    for (var __s59local5 = 0, __s59local6 = this.isoData.objects.defences.towers; __s59local5 < __s59local6.length; __s59local5++) {
      if ((__s59local1 = __s59local6[__s59local5]) && __s59local1.isDamaged && __s59local1.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED) {
        __s59local2 += __s59local1.getRepairDurationForAllRepairFunction();
      }
    }
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionConst.getRepairAllCostsC2(__s59local2));
  };
  Object.defineProperty(AreaData.prototype, "isoData", {
    get: function () {
      return this.getData(__dep_export_AreaDataEnum.AreaDataEnum.ISO_DATA);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "commonInfo", {
    get: function () {
      return this.getData(__dep_export_AreaDataEnum.AreaDataEnum.COMMON_INFO);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "storage", {
    get: function () {
      return this.getData(__dep_export_AreaDataEnum.AreaDataEnum.STORAGE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "constructionList", {
    get: function () {
      return this.getData(__dep_export_AreaDataEnum.AreaDataEnum.CONSTRUCTION_LIST);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "constructionItems", {
    get: function () {
      return this.getData(__dep_export_AreaDataEnum.AreaDataEnum.CONSTRUCTION_ITEMS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "morality", {
    get: function () {
      return this.getData(__dep_export_AreaDataEnum.AreaDataEnum.MORALITY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "slum", {
    get: function () {
      return this.getData(__dep_export_AreaDataEnum.AreaDataEnum.SLUM);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "areaInfo", {
    get: function () {
      return this._areaInfo;
    },
    set: function (__s84param0) {
      this._areaInfo = __s84param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "updater", {
    get: function () {
      return this._updater;
    },
    enumerable: true,
    configurable: true
  });
  return AreaData;
}();
exports.AreaData = __s0local0;
var __dep_export_PrivateUnitDealerEventVO = require("gge-module:export_PrivateUnitDealerEventVO");
var __dep_export_AreaDataUpdater = require("gge-module:export_AreaDataUpdater");
var __dep_export_AreaDataEnum = require("gge-module:export_AreaDataEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
