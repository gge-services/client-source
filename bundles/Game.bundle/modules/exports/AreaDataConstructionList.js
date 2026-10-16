Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicBuildList = require("gge-module:export_BasicBuildList");
var __dep_export_ConstructionSlotVO = require("gge-module:export_ConstructionSlotVO");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_QueuedBuildingConstructionCommandVO = require("gge-module:export_QueuedBuildingConstructionCommandVO");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __s0local0 = function (__s1param0) {
  function AreaDataConstructionList() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._numConstructionSlots = 1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AreaDataConstructionList, __s1param0);
  Object.defineProperty(AreaDataConstructionList.prototype, "areaData", {
    get: function () {
      return this._areaData;
    },
    enumerable: true,
    configurable: true
  });
  AreaDataConstructionList.prototype.init = function (__s7param0) {
    this._areaData = this.areaData;
  };
  AreaDataConstructionList.prototype.parseList = function (__s9param0, __s9param1 = 1) {
    this._waitForUpdate = false;
    this._slots = [];
    this._numConstructionSlots = __s9param1;
    if (__s9param0) {
      this._freeSlots = 0;
      this._useableSlots = 0;
      for (var __s9local0 = 0; __s9local0 < __s9param0.length; __s9local0++) {
        var __s9local1 = new __dep_export_ConstructionSlotVO.ConstructionSlotVO();
        __s9local1.objectId = __dep_exact_f855840627e6e145.int(__s9param0[__s9local0]);
        __s9local1.pos = __s9local0;
        if (__s9local1.isFree) {
          this._freeSlots++;
        }
        if (!__s9local1.isLocked) {
          this._useableSlots++;
        }
        if (__s9local1.isLocked && __s9local1.pos < __s9param1) {
          __s9local1.isLockedProductionSlot = true;
        }
        this._slots.push(__s9local1);
      }
      this._slotsInUse = this._useableSlots - this._freeSlots;
    }
  };
  AreaDataConstructionList.prototype.parseSCL = function (__s17param0) {
    this.parseList(__s17param0.OIDL, __s17param0.SSC ? __s17param0.SSC : 1);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED));
    this.executeQueuedCommand();
  };
  AreaDataConstructionList.prototype.executeQueuedCommand = function () {
    if (this._queuedCommandVO) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(this._queuedCommandVO.command);
      this._queuedCommandVO = null;
    } else if (this._storedQueuedCommandVO) {
      this.setQueuedBuildingConstructionCommand();
    }
  };
  AreaDataConstructionList.prototype.setQueuedBuildingConstructionCommand = function (__s23param0 = null, __s23param1 = 0) {
    this._queuedCommandVO = new __dep_export_QueuedBuildingConstructionCommandVO.QueuedBuildingConstructionCommandVO(__s23param0, __s23param1);
  };
  Object.defineProperty(AreaDataConstructionList.prototype, "craneBuilding", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea && this.areaCraneBuildingVO) {
        return __dep_export_Iso.Iso.renderer.objects.provider.getObjectById(this.areaCraneBuildingVO.objectId);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "numBuildingsInWaitingQueue", {
    get: function () {
      var __s29local0 = 0;
      for (var __s29local1 = 0; __s29local1 < this._slots.length; __s29local1++) {
        if (__s29local1 > this._numConstructionSlots && this._slots[__s29local1].objectId > 0) {
          __s29local0++;
        }
      }
      return __s29local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "buildersBuilding", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea && this.areaBuildersBuildingVO) {
        return __dep_export_Iso.Iso.renderer.objects.provider.getObjectById(this.areaBuildersBuildingVO.objectId);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "isCraneBuilt", {
    get: function () {
      return this.areaCraneBuildingVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "isBuildersQuartersBuilt", {
    get: function () {
      return this.areaBuildersBuildingVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "isCraneUnderConstruction", {
    get: function () {
      var __s42local0 = this.areaCraneBuildingVO;
      return !!__s42local0 && __s42local0.buildingState.isUnderConstruction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "isBuildersQuartersUnderConstruction", {
    get: function () {
      var __s44local0 = this.areaBuildersBuildingVO;
      return !!__s44local0 && __s44local0.buildingState.isUnderConstruction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "numConstructionSlots", {
    get: function () {
      return this._numConstructionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "isDiscountActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.CRANE_BUILDING_WOD_LEVEL1).isLowLevelMainCastleCost2Boosted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "discount", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.CRANE_BUILDING_WOD_LEVEL1).lowLevelMainCastleCost2Discount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "lastDiscountLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.CRANE_BUILDING_WOD_LEVEL1).lastLowLevelMainCastleCost2Level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "nextAllowedCraneLevelRequirement", {
    get: function () {
      var __s54local0 = this.areaCraneBuildingVO;
      if (__s54local0) {
        if (__s54local0.buildingState.isFunctionally) {
          var __s54local1 = __s54local0.getUpgradeVO();
          if (__s54local1) {
            return __s54local1.requiredLevel;
          } else {
            return -1;
          }
        }
        return __s54local0.requiredLevel;
      }
      var __s54local2 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.BUILDERS_QUARTERS_BUILDING_WOD_LEVEL1);
      if (__s54local2) {
        return __s54local2.requiredLevel;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "nextAllowedBuildersLevelRequirement", {
    get: function () {
      var __s62local0 = this.areaBuildersBuildingVO;
      if (__s62local0) {
        if (__s62local0.buildingState.isFunctionally) {
          var __s62local1 = __s62local0.getUpgradeVO();
          if (__s62local1) {
            return __s62local1.requiredLevel;
          } else {
            return -1;
          }
        }
        return __s62local0.requiredLevel;
      }
      var __s62local2 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.BUILDERS_QUARTERS_BUILDING_WOD_LEVEL1);
      if (__s62local2) {
        return __s62local2.requiredLevel;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  AreaDataConstructionList.prototype.getEffectValue = function (__s70param0, __s70param1) {
    __s70param1 = __s70param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s70local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getBonusVOsByType(__s70param0, __s70param1));
    return __s70local0 || new __s70param0.valueClass();
  };
  AreaDataConstructionList.prototype.getBonusVOsByType = function (__s72param0, __s72param1) {
    __s72param1 = __s72param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s72local0 = [];
    var __s72local1 = __dep_export_Iso.Iso.data.areaData.isoData.objects.getCompleteObjectsList();
    if (__s72local1 != null) {
      for (var __s72local2 = 0, __s72local3 = __s72local1; __s72local2 < __s72local3.length; __s72local2++) {
        var __s72local4 = __s72local3[__s72local2];
        if (__s72local4 !== undefined) {
          var __s72local5 = __s72local4;
          if (__s72local5 && (__s72local5.hasConstructionItemSlots || __s72local5.hasModernEffects)) {
            __s72local0 = __s72local0.concat(__s72local5.getBonusVOsByType(__s72param0, __s72param1, false));
          }
        }
      }
    }
    return __s72local0;
  };
  Object.defineProperty(AreaDataConstructionList.prototype, "areaCraneBuildingVO", {
    get: function () {
      return __dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.CRANE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "areaBuildersBuildingVO", {
    get: function () {
      return __dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.BUILDERS_QUARTERS);
    },
    enumerable: true,
    configurable: true
  });
  AreaDataConstructionList.prototype.allSlotsBought = function () {
    return this._useableSlots == __dep_exact_26a421b704832cff.ConstructionConst.MAX_SLOTS;
  };
  return AreaDataConstructionList;
}(__dep_export_BasicBuildList.BasicBuildList);
exports.AreaDataConstructionList = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "IBuildList", "IAreaDataComponent");
