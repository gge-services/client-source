Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_UnitInventoryEvent = require("gge-module:export_UnitInventoryEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleMilitaryData() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).resetCategories();
    __s3local0.initMilitaryData();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMilitaryData, __s1param0);
  CastleMilitaryData.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.clearMilitaryData();
  };
  CastleMilitaryData.prototype.clearMilitaryData = function () {
    this._unitInventory.removeEventListener(__dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitInCourse.removeEventListener(__dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitStrongholdInventory.removeEventListener(__dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitHospitalInventory.removeEventListener(__dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED, this.bindFunction(this.onHospitalUnitInventoryUpdated));
  };
  CastleMilitaryData.prototype.initMilitaryData = function () {
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._unitInventory.addEventListener(__dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitInCourse = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._unitInCourse.addEventListener(__dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitStrongholdInventory = new __dep_export_StrongholdUnitInventory.StrongholdUnitInventory();
    this._unitStrongholdInventory.addEventListener(__dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitHospitalInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._unitHospitalInventory.addEventListener(__dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED, this.bindFunction(this.onHospitalUnitInventoryUpdated));
    this.initPackageLists();
  };
  CastleMilitaryData.prototype.onHospitalUnitInventoryUpdated = function (__s11param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED));
  };
  CastleMilitaryData.prototype.onUnitInventoryUpdated = function (__s13param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED));
  };
  CastleMilitaryData.prototype.executeUpdate = function (__s15param0) {
    if (this._packageLists != null) {
      for (var __s15local0 = 0, __s15local1 = this._packageLists; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.update(__s15param0);
        }
      }
    }
  };
  CastleMilitaryData.prototype.initPackageLists = function () {
    this._packageLists = [];
    for (var __s21local0 = 0; __s21local0 < CastleMilitaryData.NUMBER_OF_PACKAGE_LISTS; __s21local0++) {
      this._packageLists.push(new __dep_export_UnitPackageList.UnitPackageList(__s21local0));
    }
  };
  CastleMilitaryData.prototype.getPackageListByCategory = function (__s25param0) {
    return this.getPackageListById(this.getListIdByCategory(__s25param0));
  };
  CastleMilitaryData.prototype.getPackageListById = function (__s27param0) {
    if (__s27param0 < this._packageLists.length && __s27param0 >= 0) {
      return this._packageLists[__s27param0];
    } else {
      return null;
    }
  };
  CastleMilitaryData.prototype.parse_SPL = function (__s31param0) {
    if (__s31param0 && __s31param0.hasOwnProperty("LID")) {
      var __s31local0 = __dep_exact_f855840627e6e145.int(__s31param0.LID);
      var __s31local1 = this.getPackageListById(__s31local0);
      if (__s31local0 == this.getListIdByCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL)) {
        __s31local1.parseList(__s31param0.PIDL);
        __s31local1.activeSlotIndex = parseInt(__s31param0.ASI);
      } else {
        __s31local1.isNotKeepingCurrentRecruitmentTrack = true;
        __s31local1.parseMilitaryList(__s31param0.QS);
        __s31local1.parseCurrentProductionSlot(__s31param0.PS);
        __s31local1.recruitmentMode = __dep_exact_f855840627e6e145.int(__s31param0.RM);
        __s31local1.remainingSecondsForProduction = __dep_exact_f855840627e6e145.int(__s31param0.TCT);
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, [__s31local0]));
    }
  };
  CastleMilitaryData.prototype.parse_GUI = function (__s36param0) {
    if (__s36param0 && __dep_export_CastleModel.CastleModel.areaData.activeArea) {
      this._unitInventory.fillFromWodAmountArray(__s36param0.I);
      this._unitInCourse.fillFromWodAmountArray(__s36param0.TU);
      this._unitStrongholdInventory.fillFromWodAmountArray(__s36param0.SHI);
      this._unitHospitalInventory.fillFromWodAmountArray(__s36param0.HI);
      if (__dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId == __dep_exact_26a421b704832cff.EventConst.EVENTCAMP_AREA_ID && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO) {
        __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.parseUnitInventory(__s36param0.I);
      }
      __dep_export_CastleModel.CastleModel.treasureMapData.dispatchEvent(new __dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, null));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.ALL_INVENTORIES_UPDATED));
    }
  };
  CastleMilitaryData.prototype.parse_rue = function (__s40param0) {
    if (__s40param0) {
      var __s40local0 = __dep_exact_f855840627e6e145.int(__s40param0.AID);
      var __s40local1 = __dep_exact_f855840627e6e145.int(__s40param0.SID);
      var __s40local2 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
      if (__s40local2 && __s40local0 == __s40local2.areaId && __s40local1 == __s40local2.spaceId) {
        var __s40local3 = __dep_exact_f855840627e6e145.int(__s40param0.WID);
        var __s40local4 = __dep_exact_f855840627e6e145.int(__s40param0.NUA);
        this.unitInventory.setUnit(__s40local3, __s40local4);
      }
    }
  };
  CastleMilitaryData.prototype.updateMilitaryData = function () {
    this.resetCategories();
    if (__dep_export_Iso.Iso.data) {
      for (var __s44local0 = 0, __s44local1 = __dep_export_Iso.Iso.data.objects.innerBuildings.list; __s44local0 < __s44local1.length; __s44local0++) {
        var __s44local2 = __s44local1[__s44local0];
        if (__s44local2 !== undefined) {
          var __s44local3 = __dep_exact_81dacdf05bd32292.castAs(__s44local2, "AUnitProductionBuildingVO");
          if (__s44local3 && __s44local3.areValuesActive) {
            this.setBuildingLevel(__s44local3.name, __s44local3.level);
            this.addAllowedBuildingCategory(__s44local3.name);
            this.addUnitCategory(__s44local3.unitCategory);
          }
        }
      }
    }
  };
  CastleMilitaryData.prototype.resetProductionSpeed = function () {
    this._buildingProductionSpeed = new Map();
  };
  CastleMilitaryData.prototype.getBuildingProductionSpeed = function (__s53param0) {
    if (this._buildingProductionSpeed.get(__s53param0)) {
      return this._buildingProductionSpeed.get(__s53param0);
    } else {
      return 0;
    }
  };
  CastleMilitaryData.prototype.setBuildingProductionSpeed = function (__s57param0, __s57param1) {
    this._buildingProductionSpeed.set(__s57param0, __s57param1);
  };
  CastleMilitaryData.prototype.getBuildingLevel = function (__s59param0) {
    if (this._buildingLevels.get(__s59param0)) {
      return __dep_exact_f855840627e6e145.int(this._buildingLevels.get(__s59param0));
    } else {
      return 0;
    }
  };
  CastleMilitaryData.prototype.setBuildingLevel = function (__s63param0, __s63param1) {
    if (this._buildingLevels.get(__s63param0)) {
      this._buildingLevels.set(__s63param0, Math.max(this._buildingLevels.get(__s63param0), __s63param1));
    } else {
      this._buildingLevels.set(__s63param0, __s63param1);
    }
  };
  CastleMilitaryData.prototype.addAllowedBuildingCategory = function (__s67param0) {
    this._buildingCategorys.set(__s67param0, true);
  };
  CastleMilitaryData.prototype.isBuildingCategoryAllowed = function (__s69param0) {
    return !!this._buildingCategorys.get(__s69param0);
  };
  Object.defineProperty(CastleMilitaryData.prototype, "userHasAnyMilitarybuilding", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.DictionaryUtil.getKeys(this._buildingCategorys).length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleMilitaryData.prototype.addUnitCategory = function (__s73param0) {
    this._unitCategorys.set(__s73param0, true);
  };
  CastleMilitaryData.prototype.isUnitCategoryAllowed = function (__s75param0) {
    return !!this._unitCategorys.get(__s75param0);
  };
  CastleMilitaryData.prototype.getFirstAvalibleUnitCategory = function () {
    var __s77local0 = __dep_exact_9e901e8e2483a22f.DictionaryUtil.getKeys(this._unitCategorys);
    if (__s77local0.length > 0) {
      return __s77local0[0];
    } else {
      return "";
    }
  };
  CastleMilitaryData.prototype.resetCategories = function () {
    this._buildingLevels = new Map();
    this._buildingCategorys = new Map();
    this._unitCategorys = new Map();
  };
  Object.defineProperty(CastleMilitaryData.prototype, "strongholdUnitCount", {
    get: function () {
      return this._unitStrongholdInventory.getSoldierCount();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "currentHiddenSoldierCapacity", {
    get: function () {
      if (__dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.STRONGHOLD)) {
        return __dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.STRONGHOLD).hiddenSoldiersSpace;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "isStrongholdFull", {
    get: function () {
      return this.currentHiddenSoldierCapacity == this.strongholdUnitCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "currentHiddenSoldierSpace", {
    get: function () {
      return this.currentHiddenSoldierCapacity - this.strongholdUnitCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "doWoundedSoldiersExist", {
    get: function () {
      return this._unitHospitalInventory.getSoldierCount() > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleMilitaryData.prototype.getListIdByCategory = function (__s95param0) {
    switch (__s95param0) {
      case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.UnitProductionConst.UNIT_LIST);
      case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.UnitProductionConst.AUXILIARY_LIST);
      case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.UnitProductionConst.TOOLS_LIST);
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.UnitProductionConst.HOSPITAL_LIST);
      default:
        return -1;
    }
  };
  CastleMilitaryData.prototype.isUnitInProgress = function (__s98param0) {
    for (var __s98local0 = 0, __s98local1 = this.getPackageListByCategory(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS).slotsArray; __s98local0 < __s98local1.length; __s98local0++) {
      var __s98local2 = __s98local1[__s98local0];
      if (__s98local2 !== undefined && __s98local2.wodId == __s98param0) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(CastleMilitaryData.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "unitInCourse", {
    get: function () {
      return this._unitInCourse;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "unitStrongholdInventory", {
    get: function () {
      return this._unitStrongholdInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "unitHospitalInventory", {
    get: function () {
      return this._unitHospitalInventory;
    },
    enumerable: true,
    configurable: true
  });
  CastleMilitaryData.NUMBER_OF_PACKAGE_LISTS = 4;
  return CastleMilitaryData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleMilitaryData = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_UnitPackageList = require("gge-module:export_UnitPackageList");
var __dep_export_StrongholdUnitInventory = require("gge-module:export_StrongholdUnitInventory");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IUpdatable");
