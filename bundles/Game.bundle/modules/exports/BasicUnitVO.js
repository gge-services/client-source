Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_AVisualVO = require("gge-module:export_AVisualVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_InstantBuyInfoVO = require("gge-module:export_InstantBuyInfoVO");
var __dep_export_SpaceIdAreaTypValuePair = require("gge-module:export_SpaceIdAreaTypValuePair");
var __s0local0 = function (__s1param0) {
  function BasicUnitVO() {
    var __s3local0 = this;
    __s3local0.fightType = 0;
    __s3local0._unitSpeed = 0;
    __s3local0._recruitmentTime = 0;
    __s3local0.costs = new __dep_export_CollectableList.CollectableList();
    __s3local0._kingdomTravellingCost = 0;
    __s3local0.buildingLevel = 0;
    __s3local0._foodSupply = 0;
    __s3local0._meadSupply = 0;
    __s3local0._beefSupply = 0;
    __s3local0._sortOrder = 0;
    __s3local0._inventoryAmount = 0;
    __s3local0._isAuxiliary = false;
    __s3local0.isResearchLocked = false;
    __s3local0.isPalaceLocked = false;
    __s3local0.lootValue = 0;
    __s3local0.isKamikaze = false;
    __s3local0.isHybrid = false;
    __s3local0.skipCost = 0;
    __s3local0.level = -1;
    __s3local0.upgradeWodID = -1;
    __s3local0.downgradeWodID = -1;
    __s3local0.isStronghold = false;
    __s3local0._tempServerCostC2 = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicUnitVO, __s1param0);
  BasicUnitVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._unitSpeed = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("speed", __s5param0, "0"));
    this._recruitmentTime = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("recruitmentTime", __s5param0, "0"));
    this._lowLevelRecruitmenttimes = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lowLevelRecruitmentTime", __s5param0, "").split(",");
    if (this._lowLevelRecruitmenttimes[0] == "") {
      this._lowLevelRecruitmenttimes.shift();
    }
    this.costs = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_COST);
    this._tempServerCostC2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tempServerCostC2", __s5param0, this.costs.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2).toString()));
    this._kingdomTravellingCost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("kingdomTravellingCost", __s5param0, "0"));
    this.buildingLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("buildingLevel", __s5param0, "0"));
    this.level = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("level", __s5param0, "-1"));
    this.upgradeWodID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("upgradeWodID", __s5param0, "-1"));
    this.downgradeWodID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("downgradeWodID", __s5param0, "-1"));
    this._sortOrder = __s5param0.sortOrder !== undefined ? parseFloat(__s5param0.sortOrder) : Number.MAX_VALUE;
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventIDs", __s5param0, "");
    this._events = __s5local0 ? __s5local0.split("+") : [];
    this.isResearchLocked = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("researchLocked", __s5param0, "0")) == 1;
    this.isPalaceLocked = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("palaceLockedByKID", __s5param0, "-1")) >= 0;
    this.lootValue = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootValue", __s5param0, "0"));
    this.fightType = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("fightType", __s5param0, "0"));
    this.cleavageOfCellsCosts = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("cleavageOfCellsCost", __s5param0, "999,999").split(",");
    this.isKamikaze = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isKamikaze", __s5param0, "0")) == 1;
    this.isHybrid = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hybrid", __s5param0, "0")) == 1;
    this._isAuxiliary = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isAuxiliary", __s5param0, "0")) == 1;
    this.skipCost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skipCost", __s5param0, "0"));
    this._allowedToAttack = [];
    this._allowedToTravel = [];
    this.parseSpaceIdAreaTypeValues(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allowedToAttack", __s5param0, ""), this._allowedToAttack);
    this.parseSpaceIdAreaTypeValues(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allowedToTravel", __s5param0, ""), this._allowedToTravel);
    this._toolCategory = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("toolCategory", __s5param0).toLowerCase();
  };
  BasicUnitVO.prototype.parseSpaceIdAreaTypeValues = function (__s8param0, __s8param1) {
    var __s8local0;
    var __s8local1 = __s8param0.split("#");
    if (__s8local1[0] == "") {
      __s8local1.shift();
    }
    for (var __s8local2 = 0; __s8local2 < __s8local1.length; ++__s8local2) {
      __s8local0 = __s8local1[__s8local2].split("+");
      __s8param1.push(new __dep_export_SpaceIdAreaTypValuePair.SpaceIdAreaTypValuePair(parseInt(__s8local0[0]), parseInt(__s8local0[1])));
    }
  };
  BasicUnitVO.prototype.getNameString = function () {
    if (BasicUnitVO.showUnitWodID) {
      return this.type.toLowerCase() + "_name (" + this._wodId.toString() + ")";
    } else {
      return this.type.toLowerCase() + "_name";
    }
  };
  BasicUnitVO.prototype.getShortInfoString = function () {
    return this.type.toLowerCase() + "_short_info";
  };
  BasicUnitVO.prototype.getRequiredBuildingString = function () {
    if (this.unitBuildingType && this.unitBuildingType.length > 0) {
      var __s19local0 = __dep_exact_92d05af59ee2ff30.Localize.text(this.unitBuildingType.toString().toLocaleLowerCase() + "_name") + " " + __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [this.buildingLevel]);
      return __dep_exact_92d05af59ee2ff30.Localize.text("needs", [__s19local0]);
    }
    return __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
  };
  Object.defineProperty(BasicUnitVO.prototype, "isAvailableByLevel", {
    get: function () {
      return this.buildingLevel <= __dep_export_CastleModel.CastleModel.militaryData.getBuildingLevel(this.unitBuildingType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isAvailableByPalace", {
    get: function () {
      return !this.isPalaceLocked || !!__dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle() && !!__dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle().unitsVO && !__dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle().unitsVO.isLocked(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isAvailable", {
    get: function () {
      return this.isAvailableByLevel && this.isAvailableByPalace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isAvailableInPeaceMode", {
    get: function () {
      return this.fightType == BasicUnitVO.FIGHTTYPE_DEF;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.isToolForSlotType = function (__s30param0) {
    return false;
  };
  Object.defineProperty(BasicUnitVO.prototype, "unitCategory", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "unitBuildingType", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "unitType", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isAuxiliary", {
    get: function () {
      return this._isAuxiliary;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "inventoryAmount", {
    get: function () {
      return this._inventoryAmount;
    },
    set: function (__s42param0) {
      this._inventoryAmount = __s42param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "basicCostC1", {
    get: function () {
      return this.costs.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "kingdomTravellingCost", {
    get: function () {
      return this._kingdomTravellingCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "basicCostC2", {
    get: function () {
      if (this.isOnTempServer) {
        return this._tempServerCostC2;
      } else {
        return this.costs.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isOnTempServer", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isOnTemporaryServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "costC1", {
    get: function () {
      return this.calcCostWithFameReductionAndPremium(this.basicCostC1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "costC2", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.basicCostC2);
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getCost = function (__s58param0) {
    switch (__s58param0.type) {
      case __dep_export_CollectableEnum.CollectableEnum.C1:
        return this.costC1;
      case __dep_export_CollectableEnum.CollectableEnum.C2:
        return this.costC2;
    }
    return __dep_exact_f855840627e6e145.int(this.costs.getAmountOrDefaultByTypeVO(__s58param0));
  };
  BasicUnitVO.prototype.getCostTypes = function () {
    return this.costs.getContainingTypes();
  };
  Object.defineProperty(BasicUnitVO.prototype, "isLowlevelBoosted", {
    get: function () {
      return this._lowLevelRecruitmenttimes.length >= __dep_export_CastleModel.CastleModel.userData.userLevel && parseInt(this._lowLevelRecruitmenttimes[__dep_export_CastleModel.CastleModel.userData.userLevel - 1]) > -1;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getRecruitmentTime = function (__s65param0 = 1) {
    if (this.isPeaceModePreOrActive && !this.isAvailableInPeaceMode && this.isAvailable) {
      return this.getBaseRecruitTimePeacemode() * __s65param0;
    } else {
      return this.getBaseRecruitmentTime() * __s65param0;
    }
  };
  Object.defineProperty(BasicUnitVO.prototype, "isPeaceModePreOrActive", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID) {
        return __dep_export_CastleModel.CastleModel.userData.isInPeaceMode;
      }
      var __s69local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      return !!__s69local0 && __s69local0.isInPreOrActivePeaceMode;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getBaseRecruitmentTime = function () {
    var __s72local0 = 0;
    __s72local0 = this.isLowlevelBoosted ? parseInt(this._lowLevelRecruitmenttimes[__dep_export_CastleModel.CastleModel.userData.userLevel - 1]) : this._recruitmentTime;
    return __dep_exact_f855840627e6e145.int(__s72local0);
  };
  Object.defineProperty(BasicUnitVO.prototype, "hasPremiumBoostedTime", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getPremiumBoostedTime = function (__s76param0, __s76param1, __s76param2, __s76param3, __s76param4) {
    for (var __s76local0 = this.getPhasesSortedByTime(), __s76local1 = 0, __s76local2 = 0, __s76local3 = 0, __s76local4 = 0, __s76local5 = 0, __s76local6 = 0, __s76local7 = __s76param2; __s76local0.length > 0;) {
      __s76local2 = __dep_exact_f855840627e6e145.int(Math.max(__s76local0[0].duration - __s76local6, 0));
      __s76local1 = Math.max(__s76param4, this.getSummedUpBoostedRecruitmentTime(__s76param1, __s76param0, __s76local0, __s76local6));
      __s76local3 = Math.ceil(__s76local2 / __s76local1);
      __s76local4 = Math.ceil(__s76local3 / __dep_exact_26a421b704832cff_3.ProductionPackageConst.PRODUCTION_SLOT_SIZE);
      __s76local7 -= __s76local5 = __dep_exact_f855840627e6e145.int(Math.min(__s76local7, __s76local4 * __dep_exact_26a421b704832cff_3.ProductionPackageConst.PRODUCTION_SLOT_SIZE));
      __s76local6 += __dep_exact_f855840627e6e145.int(__s76local5 * __s76local1);
      __s76local0.shift();
    }
    return __s76local6 + __s76local7 * __s76param3;
  };
  BasicUnitVO.prototype.getFestivalBoost = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.festivalVO.remainingTimeInSeconds > 0 ? __dep_export_CastleModel.CastleModel.boostData.festivalVO.boostAmount : 0);
  };
  BasicUnitVO.prototype.getInstructorBoost = function () {
    var __s82local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR).remainingTimeInSeconds);
    return __dep_exact_f855840627e6e145.int(__s82local0 > 0 ? __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR).bonusValue : 0);
  };
  BasicUnitVO.prototype.getPhasesSortedByTime = function () {
    var __s84local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.festivalVO.remainingTimeInSeconds);
    var __s84local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR).remainingTimeInSeconds);
    var __s84local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime());
    var __s84local3 = {
      name: "festival",
      duration: __s84local0,
      boostValue: this.getFestivalBoost(),
      multiplier: 0
    };
    var __s84local4 = {
      name: "instructor",
      duration: __s84local1,
      boostValue: this.getInstructorBoost(),
      multiplier: 0
    };
    var __s84local5 = {
      name: "peace mode",
      duration: __s84local2,
      boostValue: 0,
      multiplier: __dep_exact_26a421b704832cff_4.UnitProductionConst.PEACE_MODE_SLOWDOWN
    };
    var __s84local6 = new Array();
    if (this.applyFestival && __s84local0 > 0) {
      __s84local6.push(__s84local3);
    }
    if (this.applyInstructor && __s84local1 > 0) {
      __s84local6.push(__s84local4);
    }
    if (this.applyPeaceMode && __dep_export_CastleModel.CastleModel.userData.isInPeaceMode && __s84local2 > 0 && !this.isAvailableInPeaceMode) {
      __s84local6.push(__s84local5);
    }
    __s84local6.sort(function (__s89param0, __s89param1) {
      if (__s89param0.duration < __s89param1.duration) {
        return -1;
      } else if (__s89param0.duration > __s89param1.duration) {
        return 1;
      } else {
        return 0;
      }
    });
    return __s84local6;
  };
  Object.defineProperty(BasicUnitVO.prototype, "applyPeaceMode", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "applyFestival", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "applyInstructor", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getSummedUpBoostedRecruitmentTime = function (__s100param0, __s100param1, __s100param2, __s100param3) {
    var __s100local0 = __s100param1;
    var __s100local1 = 0;
    if (__s100param2 != null) {
      for (var __s100local2 = 0, __s100local3 = __s100param2; __s100local2 < __s100local3.length; __s100local2++) {
        var __s100local4 = __s100local3[__s100local2];
        if (__s100local4 !== undefined && __s100param3 <= __s100local4.duration) {
          __s100local0 += __s100local4.boostValue;
          __s100local1 += __dep_exact_f855840627e6e145.int(__s100local4.multiplier);
        }
      }
    }
    __s100local1 = __s100local1 > 0 ? __s100local1 : 1;
    return Math.round(__s100param0 * __s100local1 / (__s100local0 / 100));
  };
  BasicUnitVO.prototype.getBoostedRecruitmentTime = function (__s106param0 = 1) {
    return 0;
  };
  Object.defineProperty(BasicUnitVO.prototype, "isRecruitTimeSubscriptionBuffed", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getBaseRecruitTimePeacemode = function () {
    return __dep_exact_f855840627e6e145.int(this.getBaseRecruitmentTime() * __dep_exact_26a421b704832cff_4.UnitProductionConst.PEACE_MODE_SLOWDOWN);
  };
  Object.defineProperty(BasicUnitVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.isUnitAvailableByEvent = function () {
    if (this._events.length > 0) {
      if (this._events != null) {
        for (var __s114local0 = 0, __s114local1 = this._events; __s114local0 < __s114local1.length; __s114local0++) {
          var __s114local2 = __s114local1[__s114local0];
          if (__s114local2 !== undefined && __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(parseInt(__s114local2))) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  BasicUnitVO.prototype.requestInstantBuy = function (__s121param0, __s121param1, __s121param2, __s121param3, __s121param4 = -1) {};
  BasicUnitVO.prototype.getShopIconURL = function (__s123param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.getVisualClassName());
  };
  BasicUnitVO.prototype.getShopIconName = function (__s125param0) {
    return this.getVisualClassName();
  };
  Object.defineProperty(BasicUnitVO.prototype, "unitSpeed", {
    get: function () {
      var __s127local0 = __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNIT_SPEED_BONUS, -1, -1, this.wodId);
      var __s127local1 = __dep_exact_f855840627e6e145.int(__s127local0.getValueforWodId(this.wodId) || 0);
      return this._unitSpeed + __s127local1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isDefensive", {
    get: function () {
      return this.fightType == BasicUnitVO.FIGHTTYPE_DEF;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isOffensive", {
    get: function () {
      return this.fightType == BasicUnitVO.FIGHTTYPE_OFF;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isAllround", {
    get: function () {
      return this.isHybrid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isDismissable", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.isAllowedByAttackTarget = function (__s137param0, __s137param1) {
    return this.checkIfTargetIsInArray(__s137param0, __s137param1, this._allowedToAttack);
  };
  BasicUnitVO.prototype.isTravelingToTargetAllowed = function (__s139param0, __s139param1) {
    return this.checkIfTargetIsInArray(__s139param0, __s139param1, this._allowedToTravel);
  };
  BasicUnitVO.prototype.checkIfTargetIsInArray = function (__s141param0, __s141param1, __s141param2) {
    if (__s141param2.length < 1) {
      return true;
    }
    if (__s141param2 != null) {
      for (var __s141local0 = 0, __s141local1 = __s141param2; __s141local0 < __s141local1.length; __s141local0++) {
        var __s141local2 = __s141local1[__s141local0];
        if (__s141local2 !== undefined && (__s141local2.spaceId == __s141param0 || __s141local2.spaceId == BasicUnitVO.ALL_ALLOWED) && (__s141local2.areaType == BasicUnitVO.ALL_ALLOWED || __s141local2.areaType == __s141param1)) {
          return true;
        }
      }
    }
    return false;
  };
  BasicUnitVO.prototype.calcCostWithFameReductionAndPremium = function (__s148param0) {
    var __s148local0 = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
    var __s148local1 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleMapObjectVO(__s148local0);
    var __s148local2 = new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__s148local0.areaType, __s148local0.spaceID, this.wodId);
    var __s148local3 = [__dep_export_CastleModel.CastleModel.areaData.activeConstructionItems];
    var __s148local4 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEffectValueForType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL, __s148local1, __s148local2, __s148local3).strength;
    __s148local4 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEffectValueForType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE, __s148local1, __s148local2, __s148local3).getValueforWodId(this.wodId);
    __s148local4 += __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeConstructionItems.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.RECRUITCOSTREDUCTION));
    __s148local4 += __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO()).strength;
    var __s148local5 = __dep_exact_f855840627e6e145.int(Math.max(100 - __s148local4, 0));
    return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_f855840627e6e145.int(Math.round(__s148param0 * __s148local5 / 100)));
  };
  BasicUnitVO.prototype.getInstantBuyInfoByUnitsVO = function (__s150param0) {
    return new __dep_export_InstantBuyInfoVO.InstantBuyInfoVO();
  };
  BasicUnitVO.prototype.getAbsoluteBoostEffectType = function () {
    return __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_TIME_BONUS;
  };
  Object.defineProperty(BasicUnitVO.prototype, "foodSupply", {
    get: function () {
      var __s154local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FOOD_CONSUMPTION_REDUCTION));
      return Math.max(0, this._foodSupply + __s154local0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "meadSupply", {
    get: function () {
      return Math.max(0, this._meadSupply);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "beefSupply", {
    get: function () {
      return Math.max(0, this._beefSupply);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "toolCategory", {
    get: function () {
      return this._toolCategory;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.FIGHTTYPE_OFF = 0;
  BasicUnitVO.FIGHTTYPE_DEF = 1;
  BasicUnitVO.ALL_ALLOWED = -1;
  BasicUnitVO.showUnitWodID = false;
  return BasicUnitVO;
}(__dep_export_AVisualVO.AVisualVO);
exports.BasicUnitVO = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IInventoryVO", "IShopVO", "ICostVO");
