Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleResearchEvent = require("gge-module:export_CastleResearchEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CraftingRecipeResearchVO = require("gge-module:export_CraftingRecipeResearchVO");
var __dep_export_ResearchGroupVO = require("gge-module:export_ResearchGroupVO");
var __dep_export_ResearchTabVO = require("gge-module:export_ResearchTabVO");
var __s0local0 = function (__s1param0) {
  function CastleResearchData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._boughtResearches = [];
    __s3local0._currentResearchId = -1;
    __s3local0._actResearchEndTime = 0;
    __s3local0._hasResearchTower = false;
    __s3local0._tabs = [];
    __s3local0.showResearchIDs = false;
    __s3local0.showResearchGrid = false;
    __s3local0.editingEnabled = false;
    __s3local0._researchVOs = new Map();
    __s3local0._groupVOs = new Map();
    __s3local0._hasResearchTower = false;
    var __s3local1 = __s3param0.researches;
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          var __s3local5 = __s3local0.createResearchVO(__s3local4);
          __s3local0._researchVOs.set(__s3local5.researchID, __s3local5);
          var __s3local6 = __s3local0._groupVOs.get(__s3local5.groupID);
          if (__s3local6 == null) {
            __s3local6 = new __dep_export_ResearchGroupVO.ResearchGroupVO();
            __s3local0._groupVOs.set(__s3local5.groupID, __s3local6);
            __s3local6.fillFromParamXML(__s3local4);
            var __s3local7 = __s3local0._tabs[__s3local6.tabId];
            if (__s3local7 == null) {
              (__s3local7 = __s3local0._tabs[__s3local6.tabId] = new __dep_export_ResearchTabVO.ResearchTabVO()).fillFromParamXML(__s3local4);
            }
            __s3local7.addGroup(__s3local6);
            __s3local7.checkRootResearch(__s3local5);
          }
          __s3local6.addResearch(__s3local5);
        }
      }
    }
    if (__s3local0._researchVOs != null) {
      for (var __s3local8 = 0, __s3local9 = Array.from(__s3local0._researchVOs.values()); __s3local8 < __s3local9.length; __s3local8++) {
        if ((__s3local5 = __s3local9[__s3local8]) !== undefined) {
          __s3local5.setupPrerequisites(__s3local0._researchVOs);
        }
      }
    }
    if (__s3local0._tabs) {
      __s3local0._tabs.forEach(function (__s16param0) {
        return __s16param0.setupConnections();
      });
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResearchData, __s1param0);
  CastleResearchData.prototype.reset = function () {
    if (this._researchVOs != null) {
      for (var __s18local0 = 0, __s18local1 = Array.from(this._researchVOs.values()); __s18local0 < __s18local1.length; __s18local0++) {
        __s18local1[__s18local0].isComplete = false;
      }
    }
    this._boughtResearches = [];
    this._currentResearchId = -1;
    this._actResearchEndTime = 0;
    this._hasResearchTower = false;
    this._researchBuildingVO = null;
    this._researchBoosterBuildingVO = null;
  };
  CastleResearchData.prototype.createResearchVO = function (__s23param0) {
    var __s23local0;
    var __s23local1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s23param0, "").split(/[&,#]/)[0]);
    switch (__s23local1 ? __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.effectsData.getEffectByID(__s23local1).effectTypeID) : -1) {
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID.id:
        __s23local0 = new __dep_export_BlueprintResearchVO.BlueprintResearchVO();
        break;
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE.id:
        __s23local0 = new __dep_export_CraftingRecipeResearchVO.CraftingRecipeResearchVO();
        break;
      default:
        __s23local0 = new __dep_export_ResearchVO.ResearchVO();
    }
    __s23local0.fillFromParamXML(__s23param0);
    return __s23local0;
  };
  CastleResearchData.prototype.parse_REI = function (__s26param0) {
    if (__s26param0) {
      this._boughtResearches = __s26param0.BR;
      this._currentResearchId = __dep_exact_f855840627e6e145.int(__s26param0.ARID);
      this._actResearchEndTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s26param0.ARRT * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      if (this._boughtResearches != null) {
        for (var __s26local0 = 0, __s26local1 = this._boughtResearches; __s26local0 < __s26local1.length; __s26local0++) {
          var __s26local2 = __s26local1[__s26local0];
          if (__s26local2 !== undefined && this._researchVOs.get(__s26local2)) {
            this._researchVOs.get(__s26local2).isComplete = true;
          }
        }
      }
      this.dispatchEvent(new __dep_export_CastleResearchEvent.CastleResearchEvent(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE));
    }
  };
  Object.defineProperty(CastleResearchData.prototype, "researchTowerLevel", {
    get: function () {
      if (this._researchBuildingVO) {
        return this._researchBuildingVO.level;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchData.prototype.remainingResearchTimeInSeconds = function () {
    return __dep_exact_f855840627e6e145.int(Math.max((this._actResearchEndTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0));
  };
  Object.defineProperty(CastleResearchData.prototype, "isSomeResearchActive", {
    get: function () {
      return this._currentResearchId != -1 && this.remainingResearchTimeInSeconds() > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchData.prototype, "currentResearchVO", {
    get: function () {
      if (this._currentResearchId != -1) {
        return this._researchVOs.get(this._currentResearchId);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchData.prototype.getResearchEffectsByType = function (__s45param0, __s45param1 = null) {
    __s45param1 = __s45param1 || new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO();
    var __s45local0 = [];
    if (!this._boughtResearches) {
      return __s45local0;
    }
    if (this._researchVOs != null) {
      for (var __s45local1 = 0, __s45local2 = this._boughtResearches; __s45local1 < __s45local2.length; __s45local1++) {
        var __s45local3 = __s45local2[__s45local1];
        var __s45local4 = this.getResearchById(__s45local3);
        if (__s45local4 !== undefined) {
          for (var __s45local5 = 0, __s45local6 = __s45local4.boni; __s45local5 < __s45local6.length; __s45local5++) {
            var __s45local7 = __s45local6[__s45local5];
            if (__s45local7 !== undefined && __s45local7.matchesConditions(__s45param0, __s45param1.areaType, __s45param1.spaceId, __s45param1.wodId, __s45param1.otherPlayer)) {
              __s45local0.push(__s45local7);
            }
          }
        }
      }
    }
    return __s45local0;
  };
  CastleResearchData.prototype.getResearchEffectValue = function (__s55param0, __s55param1 = -1, __s55param2 = -1, __s55param3 = -1, __s55param4 = null) {
    var __s55local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getResearchEffectsByType(__s55param0, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__s55param1, __s55param2, __s55param3, __s55param4)), true);
    return __s55local0 || new __s55param0.valueClass();
  };
  Object.defineProperty(CastleResearchData.prototype, "isResearchTowerBuilt", {
    get: function () {
      return this._hasResearchTower;
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchData.prototype.setResearchBuildingData = function (__s59param0) {
    this._researchBuildingVO = __s59param0;
    this._hasResearchTower = !!__s59param0 && __s59param0.objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.RESEARCH_TOWER && __s59param0.buildingState.isFunctionally;
  };
  CastleResearchData.prototype.setResearchBoostBuildingData = function (__s61param0) {
    this._researchBoosterBuildingVO = __s61param0;
  };
  Object.defineProperty(CastleResearchData.prototype, "researchBoost", {
    get: function () {
      if (this._researchBuildingVO) {
        if (this._researchBoosterBuildingVO) {
          return this._researchBuildingVO.researchBoost + this._researchBoosterBuildingVO.researchBoost;
        } else {
          return this._researchBuildingVO.researchBoost;
        }
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchData.prototype.getAbsoluteProductionBoost = function (__s69param0, __s69param1, __s69param2, __s69param3) {
    if (__s69param1 > __dep_export_ClientConstCastle.ClientConstCastle.MINIMUM_RECRUITEMENT_TIME * __s69param2 && __s69param3.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CASTLE && __s69param3.kingdomID == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID) {
      var __s69local0 = __dep_exact_f855840627e6e145.int(__s69param2 * this.getResearchEffectValue(__s69param0.getAbsoluteBoostEffectType()).strength);
      return __s69param1 - __dep_exact_f855840627e6e145.int(Math.max(__s69param1 + __s69local0, __dep_export_ClientConstCastle.ClientConstCastle.MINIMUM_RECRUITEMENT_TIME * __s69param2));
    }
    return 0;
  };
  CastleResearchData.prototype.getNextResearch = function (__s72param0) {
    var __s72local0 = null;
    if (this._researchVOs != null) {
      for (var __s72local1 = 0, __s72local2 = Array.from(this._researchVOs.values()); __s72local1 < __s72local2.length; __s72local1++) {
        var __s72local3 = __s72local2[__s72local1];
        if (__s72local3 !== undefined && __s72local3.isResearchable) {
          var __s72local4 = __s72local3.prerequisiteIDs;
          if (__s72local4 != null) {
            for (var __s72local5 = 0, __s72local6 = __s72local4; __s72local5 < __s72local6.length; __s72local5++) {
              var __s72local7 = __s72local6[__s72local5];
              if (__s72local7 !== undefined && __s72local7 == __s72param0.researchID) {
                if (__s72local3.groupID != __s72param0.groupID) {
                  return __s72local3;
                }
                __s72local0 = __s72local3;
              }
            }
          }
        }
      }
    }
    return __s72local0;
  };
  CastleResearchData.prototype.getResearchById = function (__s83param0) {
    return this._researchVOs.get(__s83param0);
  };
  Object.defineProperty(CastleResearchData.prototype, "researchVOs", {
    get: function () {
      return this._researchVOs;
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchData.prototype.getGroupById = function (__s87param0) {
    return this._groupVOs.get(__s87param0);
  };
  Object.defineProperty(CastleResearchData.prototype, "groupVOs", {
    get: function () {
      return this._groupVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchData.prototype, "tabsCount", {
    get: function () {
      return this._tabs.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchData.prototype, "tabs", {
    get: function () {
      return this._tabs;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResearchData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleResearchData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleBasicData");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_BlueprintResearchVO = require("gge-module:export_BlueprintResearchVO");
var __dep_export_ResearchVO = require("gge-module:export_ResearchVO");
