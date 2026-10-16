Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceHelpRequestConstructionParamsVO = require("gge-module:export_AllianceHelpRequestConstructionParamsVO");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_AShopVO = require("gge-module:export_AShopVO");
var __dep_export_AVisualVO = require("gge-module:export_AVisualVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ABasicBuildingVO() {
    var __s3local0 = this;
    __s3local0._buildingState = __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.INITIAL;
    __s3local0._hitPoints = 0;
    __s3local0._damageType = 0;
    __s3local0._stateEndTime = -1;
    __s3local0._efficiency = 0;
    __s3local0._moatBonus = 0;
    __s3local0._wallBonus = 0;
    __s3local0._buildDuration = 0;
    __s3local0._lowLevelBuildDurations = [];
    __s3local0._lowLevelMainCastleCostC2 = [];
    __s3local0._districtTypeID = 0;
    __s3local0._isDistrict = false;
    __s3local0._isRelicBuilding = false;
    __s3local0._constructionBoostAtStart = 1;
    __s3local0._constructionCompletionInSec = 0;
    __s3local0._serverUpgradeTargetWodId = -1;
    __s3local0._constructionItems = [];
    __s3local0._constructionItemGroupIds = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABasicBuildingVO, __s1param0);
  ABasicBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._wallBonus = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("wallBonus", __s5param0));
    this._moatBonus = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("moatBonus", __s5param0));
    this._buildDuration = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("buildDuration", __s5param0));
    this._buildingGroundType = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("buildingGroundType", __s5param0);
    this._lowLevelMainCastleCostC2 = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("lowLevelMainCastleCostC2", __s5param0);
    this._lowLevelBuildDurations = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("lowLevelBuildDuration", __s5param0);
    this._districtTypeID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("districtTypeID", __s5param0));
    this._isDistrict = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("isDistrict", __s5param0);
    this._isRelicBuilding = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("isRelicBuilding", __s5param0);
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("constructionItemGroupIDs", __s5param0, "").split(",");
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = parseInt(__s5local3);
          if (__s5local4 > 0) {
            this._constructionItemGroupIds.push(__s5local4);
          }
        }
      }
    }
    this._effectsString = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("effects", __s5param0);
    this._areaEffectsString = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("areaSpecificEffects", __s5param0);
    this._effects = null;
    this._areaSpecificEffects = null;
  };
  ABasicBuildingVO.prototype.parseEffects = function () {
    this._effects = [];
    if (this._effectsString != "") {
      for (var __s12local0 = 0, __s12local1 = this._effectsString.split(","); __s12local0 < __s12local1.length; __s12local0++) {
        var __s12local2 = __s12local1[__s12local0];
        if (__s12local2.length > 0) {
          var __s12local3 = __s12local2.split("&");
          var __s12local4 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s12local3[0]));
          var __s12local5 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s12local4, __s12local3[1]);
          this._effects.push(__s12local5);
        }
      }
    }
  };
  ABasicBuildingVO.prototype.parseAreaSpecificEffects = function () {
    this._areaSpecificEffects = [];
    if (this._areaEffectsString != "") {
      for (var __s18local0 = 0, __s18local1 = this._areaEffectsString.split(","); __s18local0 < __s18local1.length; __s18local0++) {
        var __s18local2 = __s18local1[__s18local0];
        if (__s18local2.length > 0) {
          var __s18local3 = __s18local2.split("&");
          var __s18local4 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s18local3[0]));
          var __s18local5 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s18local4, __s18local3[1]);
          this._areaSpecificEffects.push(__s18local5);
        }
      }
    }
  };
  ABasicBuildingVO.prototype.isUnique = function () {
    return false;
  };
  ABasicBuildingVO.prototype.parseServerObject = function (__s26param0) {
    this._serverUpgradeTargetWodId = __dep_exact_f855840627e6e145.int(__s26param0.length > ABasicBuildingVO.SERVERINDEX_UPGRADE_TARGET_WOD_ID ? __s26param0[ABasicBuildingVO.SERVERINDEX_UPGRADE_TARGET_WOD_ID] : -1);
    __s1param0.prototype.parseServerObject.call(this, __s26param0);
    var __s26local0 = this._buildingState;
    this._constructionCompletionInSec = __dep_exact_f855840627e6e145.int(__s26param0.shift());
    this._buildingState = __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.getTypeById(__s26param0.shift());
    this._hitPoints = __dep_exact_f855840627e6e145.int(__s26param0.shift());
    this._constructionBoostAtStart = __s26param0.shift() / 100;
    this._efficiency = __dep_exact_f855840627e6e145.int(__s26param0.shift());
    this._damageType = __dep_exact_f855840627e6e145.int(__s26param0.length > 0 ? __s26param0.shift() : 0);
    this.setStateEndTime();
    this.triggerConstructionCallbacks(__s26local0);
  };
  ABasicBuildingVO.prototype.cloneFrom = function (__s28param0) {
    __s1param0.prototype.cloneFrom.call(this, __s28param0);
    var __s28local0 = __s28param0;
    if (__s28local0) {
      this._buildingState = __s28local0._buildingState;
      this._hitPoints = __s28local0._hitPoints;
      this._damageType = __s28local0._damageType;
      this._stateEndTime = __s28local0._stateEndTime;
      this._constructionBoostAtStart = __s28local0._constructionBoostAtStart;
      this._constructionCompletionInSec = __s28local0._constructionCompletionInSec;
      this._serverUpgradeTargetWodId = __s28local0._serverUpgradeTargetWodId;
      this._constructionItems = __s28local0._constructionItems.slice();
      this._constructionItemGroupIds = __s28local0._constructionItemGroupIds;
    }
  };
  ABasicBuildingVO.prototype.update = function (__s31param0) {
    switch (this.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        this.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_BUILDING_BUILD_PROGRESS, [this]));
    }
  };
  ABasicBuildingVO.prototype.updateWalkmap = function () {
    if (!this.buildingState.isFunctionally || this.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS || this.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED) {
      this._walkmap = __dep_export_IsoHelper.IsoHelper.walkmap.createWalkmapWithWalkableL(this.dimension);
    }
    this._walkmap = __dep_export_IsoHelper.IsoHelper.walkmap.generateWalkmap(this.walkMapAssetName);
    if (this._walkmap) {
      if (this._rotation % 2 == 1) {
        this._walkmap = __dep_export_IsoHelper.IsoHelper.walkmap.mirrorWalkmap(this.walkmap);
      }
    } else {
      this._walkmap = __dep_export_IsoHelper.IsoHelper.walkmap.createWalkmapWithWalkableL(this.dimension);
    }
  };
  ABasicBuildingVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints = __dep_export_IsoHelper.IsoHelper.walkmap.getSpawnPoints(this.walkMapAssetName);
    if (this._spawnPoints.length > 0 && this._rotation % 2 == 1) {
      this.mirrorSpawnPoints();
    }
  };
  ABasicBuildingVO.prototype.mirrorSpawnPoints = function () {
    var __s43local0 = [];
    for (var __s43local1 = 0; __s43local1 < this._spawnPoints.length; ++__s43local1) {
      __s43local0[__s43local1] = new __s0local0(this._spawnPoints[__s43local1].y, this._spawnPoints[__s43local1].x);
    }
    this._spawnPoints = __s43local0;
  };
  ABasicBuildingVO.prototype.triggerConstructionCallbacks = function (__s47param0) {
    if (__s47param0 != this.buildingState && __s47param0 != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.INITIAL) {
      switch (this.buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_COMPLETED:
          __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, [this]));
          break;
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
          __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_BUILDING_UPGRADE_STARTED, [this]));
      }
    }
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "damageFactor", {
    get: function () {
      return (100 - this.hitPoints) / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "damageInPercent", {
    get: function () {
      return 100 - this.hitPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "basicBuildDuration", {
    get: function () {
      if (this._lowLevelBuildDurations.length >= __dep_export_CastleModel.CastleModel.userData.userLevel) {
        var __s55local0 = __dep_exact_f855840627e6e145.int(this._lowLevelBuildDurations[__dep_export_CastleModel.CastleModel.userData.userLevel - 1]);
        if (__s55local0 > 0) {
          return __s55local0;
        }
      }
      return this._buildDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "areValuesActive", {
    get: function () {
      var __s59local0 = true;
      switch (this._buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
          if (this._level == 1) {
            __s59local0 = false;
          }
          break;
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
          __s59local0 = false;
      }
      return __s59local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "usesLords", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "canBeDisassembled", {
    get: function () {
      return this.destructable && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_DESTRUCTION && !this.buildingState.isUnderConstruction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "isDamaged", {
    get: function () {
      return this.hitPoints < __dep_exact_26a421b704832cff_1.ConstructionConst.MAX_HP;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.getRepairCostByType = function (__s69param0) {
    if (__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isOnSpecialServer) {
      var __s69local0 = this._tempServerRepairCosts.getFirstItemOfType(__s69param0);
      return __dep_exact_f855840627e6e145.int(__s69local0 != null ? __s69local0.amount : 0);
    }
    if (__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_REPAIR_COST_RESOURCES.indexOf(__s69param0) == -1) {
      return 0;
    }
    var __s69local1 = __dep_exact_26a421b704832cff_1.ConstructionConst.getRepairCost(this._costs.getAmountOrDefaultByType(__s69param0), this.damageFactor);
    __s69local1 -= __s69local1 * __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.builderDiscount;
    return Math.ceil(__s69local1);
  };
  ABasicBuildingVO.prototype.getRefundPriceByType = function (__s73param0) {
    if (__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_REPAIR_COST_RESOURCES.indexOf(__s73param0) == -1) {
      return 0;
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.ConstructionConst.getRefundPrice(this._costs.getAmountOrDefaultByType(__s73param0)));
    }
  };
  ABasicBuildingVO.prototype.getInfoItemTextColor = function (__s77param0 = null) {
    if (__s77param0 && this.getConstructionItemEffectValue(__s77param0) != 0) {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN;
    } else {
      return __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  ABasicBuildingVO.prototype.getInfoItemTextColor2 = function (__s81param0 = null) {
    if (__s81param0 && this.getEffectValue(__s81param0).strength != 0) {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN;
    } else {
      return __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "builderMultiplier", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "needsReparation", {
    get: function () {
      return this.isDamaged && this.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS && this.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "upgradeAvailable", {
    get: function () {
      return this.canUpgrade() && !this.buildingState.isUnderConstruction && !this.buildingState.isInProgress && !this.needsReparation;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "upgradeTargetWodId", {
    get: function () {
      switch (this.buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
          if (this._serverUpgradeTargetWodId > 0) {
            return this._serverUpgradeTargetWodId;
          }
      }
      return this.upgradeWodID;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.getUpgradeVO = function () {
    var __s95local0 = this.upgradeTargetWodId;
    if (__s95local0 > 0) {
      return __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s95local0, this.wodDataType);
    } else {
      return null;
    }
  };
  ABasicBuildingVO.prototype.getUpgradeTargetVO = function () {
    var __s99local0 = this.upgradeTargetWodId;
    if (__s99local0 <= 0) {
      return null;
    } else {
      return __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s99local0);
    }
  };
  ABasicBuildingVO.prototype.getInfoTooltipLine1 = function () {
    if (__dep_export_CastleDataHolder.CastleDataHolder.instance.showObjectIDs) {
      return "ObjectID: " + this.objectId;
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text(this.getNameString());
    }
  };
  ABasicBuildingVO.prototype.getInfoTooltipLine2 = function () {
    if (this.level > 0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [this.level]);
    } else {
      return "";
    }
  };
  ABasicBuildingVO.prototype.getInfoTooltipLine3 = function () {
    if (this.hitPoints < 100) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("building_damagePercent", [this.damageInPercent]);
    }
    if (this.efficiency > 0 && !__dep_export_CastleModel.CastleModel.areaData.activeArea.isSeasonCamp) {
      switch (this.buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
          return __dep_exact_92d05af59ee2ff30.Localize.text("demolish_process");
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
          break;
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        default:
          return __dep_exact_92d05af59ee2ff30.Localize.text("utilizationPercentage", [this.efficiency]);
      }
    }
    return "";
  };
  ABasicBuildingVO.prototype.canShowConstructionHelpIcon = function () {
    switch (this.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
        break;
      default:
        return false;
    }
    if (!__dep_export_CastleModel.CastleModel.allianceHelpRequestData.isBuildHelpAvailable() || __dep_export_CastleModel.CastleModel.allianceHelpRequestData.hasBuildHelpAbTestLevelRestriction()) {
      return false;
    }
    var __s116local0 = new __dep_export_AllianceHelpRequestConstructionParamsVO.AllianceHelpRequestConstructionParamsVO(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, this.isoData.areaData.areaId, this.objectId);
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceHelpRequestData.getStatusOfOwnRequestByID(__dep_exact_26a421b704832cff_2.AllianceConst.ALLIANCE_HELP_BUILD, __s116local0)) == __dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_POSSIBLE;
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "isBuildingGroundViewAvailable", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "isLowLevelMainCastleCost2Boosted", {
    get: function () {
      return this.lowLevelMainCastleCostC2.length >= __dep_export_CastleModel.CastleModel.userData.userLevel && this.lowLevelMainCastleCostC2[__dep_export_CastleModel.CastleModel.userData.userLevel - 1] > -1;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.getLowLevelMainCastleC2Costs = function () {
    if (this.isLowLevelMainCastleCost2Boosted) {
      return __dep_exact_f855840627e6e145.int(this.lowLevelMainCastleCostC2[__dep_export_CastleModel.CastleModel.userData.userLevel - 1]);
    } else {
      return -1;
    }
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "lastLowLevelMainCastleCost2Level", {
    get: function () {
      return this._lowLevelMainCastleCostC2.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "lowLevelMainCastleCost2Discount", {
    get: function () {
      if (this.isLowLevelMainCastleCost2Boosted) {
        var __s130local0 = this.getLowLevelMainCastleC2Costs();
        if (__s130local0 > -1) {
          __s130local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__s130local0));
        }
        var __s130local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.basicCostC2));
        return (__s130local1 - __s130local0) / __s130local1 * 100;
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "costC2", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.userLevel == 0) {
        return 0;
      }
      if (this.lowLevelMainCastleCostC2.length >= __dep_export_CastleModel.CastleModel.userData.userLevel) {
        var __s134local0 = __dep_exact_f855840627e6e145.int(this.lowLevelMainCastleCostC2[__dep_export_CastleModel.CastleModel.userData.userLevel - 1]);
        if (__s134local0 > -1) {
          return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__s134local0);
        }
      }
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.basicCostC2);
    },
    set: function (__s139param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AShopVO.AShopVO.prototype, "costC2").set.call(this, __s139param0);
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.getBuildDuration = function () {
    return __dep_exact_f855840627e6e145.int(this.basicBuildDuration / this._constructionBoostAtStart);
  };
  ABasicBuildingVO.prototype.getEstimatedBuildDuration = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo) {
      return __dep_exact_f855840627e6e145.int(this.basicBuildDuration * __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.buildDurationBoostFactor);
    } else {
      return 0;
    }
  };
  ABasicBuildingVO.prototype.getDisassembleDuration = function () {
    return __dep_exact_f855840627e6e145.int(this.basicBuildDuration * __dep_exact_26a421b704832cff_1.ConstructionConst.BUILT_TO_DISASSEMBLE_TIME_FACTOR / this._constructionBoostAtStart);
  };
  ABasicBuildingVO.prototype.getEstimatedDisassembleDuration = function () {
    return __dep_exact_f855840627e6e145.int(this.basicBuildDuration * __dep_exact_26a421b704832cff_1.ConstructionConst.BUILT_TO_DISASSEMBLE_TIME_FACTOR * __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.buildDurationBoostFactor);
  };
  ABasicBuildingVO.prototype.getRepairDuration = function () {
    if (__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isOnSpecialServer) {
      return this._tempServerRepairTime;
    } else {
      return __dep_exact_26a421b704832cff_1.ConstructionConst.getRepairDuration(this.basicBuildDuration, this._hitPoints) / this._constructionBoostAtStart;
    }
  };
  ABasicBuildingVO.prototype.getRepairDurationForAllRepairFunction = function () {
    if (__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isOnSpecialServer) {
      return this._tempServerRepairTime;
    } else {
      return __dep_exact_26a421b704832cff_1.ConstructionConst.getRepairDuration(this.basicBuildDuration * __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.buildDurationBoostFactor, this._hitPoints);
    }
  };
  ABasicBuildingVO.prototype.getEstimatedRepairDuration = function () {
    if (__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isOnSpecialServer) {
      return __dep_exact_f855840627e6e145.int(this._tempServerRepairTime);
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.ConstructionConst.getRepairDuration(this.basicBuildDuration, this._hitPoints) * __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.buildDurationBoostFactor);
    }
  };
  ABasicBuildingVO.prototype.getUpgradeDuration = function () {
    var __s163local0 = this.getUpgradeTargetVO();
    if (__s163local0) {
      return __dep_exact_f855840627e6e145.int(__s163local0.getBuildDuration() / this._constructionBoostAtStart);
    } else {
      return 0;
    }
  };
  ABasicBuildingVO.prototype.getEstimatedUpgradeDuration = function () {
    var __s167local0 = this.getUpgradeTargetVO();
    if (__s167local0 && __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo) {
      return __dep_exact_f855840627e6e145.int(__s167local0.getBuildDuration() * __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.buildDurationBoostFactor);
    } else {
      return 0;
    }
  };
  ABasicBuildingVO.prototype.getTimeLeftForBuilding = function () {
    var __s171local0 = 0;
    switch (this.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
        __s171local0 = this.getBuildDuration() - this._constructionCompletionInSec;
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        __s171local0 = this.getDisassembleDuration() - this._constructionCompletionInSec;
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
        __s171local0 = this.getUpgradeDuration() - this._constructionCompletionInSec;
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
        __s171local0 = __dep_exact_f855840627e6e145.int(this.getRepairDuration() - this._constructionCompletionInSec);
        break;
      default:
        __s171local0 = Math.ceil((this._stateEndTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    }
    return __s171local0;
  };
  ABasicBuildingVO.prototype.getPercentCompletedForBuilding = function () {
    var __s174local0 = 0;
    switch (this.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
        __s174local0 = this._constructionCompletionInSec / this.currentBuildingStateTime;
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        __s174local0 = 1 - (this._stateEndTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC / this.currentBuildingStateTime;
    }
    return Math.min(Math.max(__s174local0, 0), 1);
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "currentBuildingStateTime", {
    get: function () {
      switch (this.buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
          return this.getBuildDuration();
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
          return this.getDisassembleDuration();
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
          return this.getUpgradeDuration();
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
          return this.getRepairDuration();
        default:
          return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.setStateEndTime = function () {
    switch (this.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        this._stateEndTime = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() + (this.getDisassembleDuration() - this._constructionCompletionInSec) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        this._stateEndTime = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() + (this.getBuildDuration() - this._constructionCompletionInSec) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        this._stateEndTime = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() + (this.getRepairDuration() - this._constructionCompletionInSec) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        this._stateEndTime = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() + (this.getUpgradeDuration() - this._constructionCompletionInSec) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
        break;
      default:
        this._stateEndTime = -1;
    }
  };
  ABasicBuildingVO.prototype.parseConstructionItems = function (__s183param0) {
    this._constructionItems = [];
    __dep_export_CastleModel.CastleModel.userData.removeGlobalConstructionItemEffect(this.objectId);
    __dep_export_CastleModel.CastleModel.userData.removeGlobalConstructionItemBonus(this.objectId);
    if (__s183param0 && __s183param0 != null) {
      for (var __s183local0 = 0, __s183local1 = __s183param0; __s183local0 < __s183local1.length; __s183local0++) {
        var __s183local2 = __s183local1[__s183local0];
        if (__s183local2 !== undefined && __s183local2.OID == this.objectId) {
          for (var __s183local3 = 0, __s183local4 = __s183local2.CIL; __s183local3 < __s183local4.length; __s183local3++) {
            var __s183local5 = __s183local4[__s183local3];
            if (__s183local5 !== undefined) {
              var __s183local6 = __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemVO(__s183local5.CID);
              if (__s183local6) {
                if (__s183local6.isAppearanceItem && !__s183local6.skin) {
                  throw new Error("Got invalid appearance item without skin! Item ID " + __s183local6.id);
                }
                if (__s183local5.RS && __s183local6.isTemporary) {
                  (__s183local6 = __s183local6.clone()).setRemainingTime(__s183local5.RS);
                }
                var __s183local7 = __dep_exact_f855840627e6e145.int(__s183local5.S);
                this._constructionItems[ABasicBuildingVO.STARTINDEX_BY_TYPE[__s183local6.slotType] + __s183local7] = __s183local6;
                if (this.isoData.areaData.isMyHomeCastle) {
                  __dep_export_CastleModel.CastleModel.userData.setGlobalConstructionItemEffects(__s183local6, this.objectId);
                  __dep_export_CastleModel.CastleModel.userData.setGlobalConstructionItemBoni(__s183local6, this.objectId);
                }
              } else {
                __dep_exact_9e901e8e2483a22f.debug("Invalid item id! No item found for id: " + __s183local5.CID);
              }
            }
          }
        }
      }
    }
  };
  ABasicBuildingVO.prototype.getConstructionItem = function (__s197param0) {
    var __s197local0 = __dep_exact_f855840627e6e145.int(ABasicBuildingVO.STARTINDEX_BY_TYPE[__s197param0.slotType] + __s197param0.index);
    if (this._constructionItems.length > __s197local0) {
      return this._constructionItems[__s197local0];
    } else {
      return null;
    }
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "constructionItemGroupIds", {
    get: function () {
      return this._constructionItemGroupIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "hasConstructionItemSlots", {
    get: function () {
      return this._constructionItemGroupIds.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "constructionItemEffectsText", {
    get: function () {
      var __s205local0 = "";
      for (var __s205local1 = 0; __s205local1 < this._constructionItems.length; __s205local1++) {
        var __s205local2 = this._constructionItems[__s205local1];
        if (__s205local2) {
          if (__s205local0 != "") {
            __s205local0 += "\n";
          }
          __s205local0 += __s205local2.effectText;
        }
      }
      return __s205local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "numEquippedConstructionItems", {
    get: function () {
      var __s211local0 = 0;
      if (this._constructionItems != null) {
        for (var __s211local1 = 0, __s211local2 = this._constructionItems; __s211local1 < __s211local2.length; __s211local1++) {
          var __s211local3 = __s211local2[__s211local1];
          if (__s211local3 !== undefined && __s211local3) {
            __s211local0++;
          }
        }
      }
      return __s211local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "averageConstructionItemRarity", {
    get: function () {
      var __s217local0 = 0;
      var __s217local1 = 0;
      if (this._constructionItems != null) {
        for (var __s217local2 = 0, __s217local3 = this._constructionItems; __s217local2 < __s217local3.length; __s217local2++) {
          var __s217local4 = __s217local3[__s217local2];
          if (__s217local4 !== undefined && __s217local4) {
            __s217local0++;
            __s217local1 += __dep_exact_f855840627e6e145.int(__s217local4.rarity == __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_UNIQUE ? __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_LEGENDARY + 1 : __s217local4.rarity);
          }
        }
      }
      return __s217local1 / __s217local0;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.getConstructionItemEffectValue = function (__s223param0) {
    var __s223local0 = 0;
    this._constructionItems.forEach(function (__s225param0) {
      __s225param0.effects.forEach(function (__s227param0) {
        if (__s227param0 && __s227param0.type == __s223param0) {
          __s223local0 += __s227param0.value;
        }
      });
    });
    return __dep_exact_f855840627e6e145.int(__s223local0);
  };
  ABasicBuildingVO.prototype.getBonusVOsByTypeFromConstructionItemsOnly = function (__s230param0, __s230param1) {
    if (__s230param1 == null) {
      __s230param1 = __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    }
    var __s230local0 = [];
    if (this._constructionItems != null) {
      for (var __s230local1 = 0, __s230local2 = this._constructionItems; __s230local1 < __s230local2.length; __s230local1++) {
        var __s230local3 = __s230local2[__s230local1];
        if (__s230local3 !== undefined) {
          for (var __s230local4 = 0, __s230local5 = __s230local3.boni; __s230local4 < __s230local5.length; __s230local4++) {
            var __s230local6 = __s230local5[__s230local4];
            if (__s230local6 !== undefined && __s230local6 && __s230local6.matchesConditions(__s230param0, __s230param1.areaType, __s230param1.spaceId, __s230param1.wodId, __s230param1.otherPlayer)) {
              __s230local0.push(__s230local6);
            }
          }
        }
      }
    }
    return __s230local0;
  };
  ABasicBuildingVO.prototype.getBonusVOsByType = function (__s240param0, __s240param1, __s240param2 = true, __s240param3 = true) {
    if (__s240param1 == null) {
      __s240param1 = __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    }
    var __s240local0 = [];
    this._constructionItems.forEach(function (__s243param0) {
      __s243param0.boni.forEach(function (__s245param0) {
        if (__s240param2 && __s245param0 && __s245param0.matchesConditions(__s240param0, __s240param1.areaType, __s240param1.spaceId, __s240param1.wodId, __s240param1.otherPlayer)) {
          __s240local0.push(__s245param0);
        }
      });
    });
    if (!this._effects) {
      this.parseEffects();
    }
    this._effects.forEach(function (__s249param0) {
      if (__s240param3 && __s249param0 && __s249param0.matchesConditions(__s240param0, __s240param1.areaType, __s240param1.spaceId, __s240param1.wodId, __s240param1.otherPlayer)) {
        __s240local0.push(__s249param0);
      }
    });
    if (!this._areaSpecificEffects) {
      this.parseAreaSpecificEffects();
    }
    this._areaSpecificEffects.forEach(function (__s253param0) {
      if (__s240param3 && __s253param0 && __s253param0.matchesConditions(__s240param0, __s240param1.areaType, __s240param1.spaceId, __s240param1.wodId, __s240param1.otherPlayer)) {
        __s240local0.push(__s253param0);
      }
    });
    return __s240local0;
  };
  ABasicBuildingVO.prototype.getEffectValue = function (__s256param0, __s256param1 = null, __s256param2 = true, __s256param3 = true) {
    if (__s256param1 == null) {
      __s256param1 = __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    }
    var __s256local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getBonusVOsByType(__s256param0, __s256param1, __s256param2, __s256param3));
    return __s256local0 || new __s256param0.valueClass();
  };
  ABasicBuildingVO.prototype.getConstructionItemGroupEffectsAmount = function (__s259param0) {
    var __s259local0 = 0;
    if (this._constructionItems != null) {
      for (var __s259local1 = 0, __s259local2 = this._constructionItems; __s259local1 < __s259local2.length; __s259local1++) {
        var __s259local3 = __s259local2[__s259local1];
        if (__s259local3 !== undefined && __s259local3 && __s259local3.effectGroupId == __s259param0) {
          __s259local0++;
        }
      }
    }
    return __s259local0;
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "appearanceItem", {
    get: function () {
      return this._constructionItems[ABasicBuildingVO.STARTINDEX_BY_TYPE[__dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_TYPE]];
    },
    set: function (__s267param0) {
      this._constructionItems[ABasicBuildingVO.STARTINDEX_BY_TYPE[__dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_TYPE]] = __s267param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "walkMapAssetName", {
    get: function () {
      return this.getVisualClassName() + "_walkmap";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "buildingState", {
    get: function () {
      return this._buildingState;
    },
    set: function (__s273param0) {
      this._buildingState = __s273param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "hitPoints", {
    get: function () {
      return this._hitPoints;
    },
    set: function (__s277param0) {
      this._hitPoints = __s277param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "damageType", {
    get: function () {
      return this._damageType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "efficiency", {
    get: function () {
      return this._efficiency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "moatBonus", {
    get: function () {
      return this._moatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "buildingGroundType", {
    get: function () {
      return this._buildingGroundType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "lowLevelMainCastleCostC2", {
    get: function () {
      return this._lowLevelMainCastleCostC2;
    },
    set: function (__s291param0) {
      this._lowLevelMainCastleCostC2 = __s291param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "buildDuration", {
    get: function () {
      return this._buildDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "type", {
    get: function () {
      if (this.appearanceItem) {
        return this.appearanceItem.skin;
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_AVisualVO.AVisualVO.prototype, "type").get.call(this);
      }
    },
    set: function (__s299param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AVisualVO.AVisualVO.prototype, "type").set.call(this, __s299param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "districtTypeID", {
    get: function () {
      return this._districtTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "isDistrict", {
    get: function () {
      return this._isDistrict;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "hasFlag", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "hasModernEffects", {
    get: function () {
      return !!this._effectsString || !!this._areaEffectsString;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "effects", {
    get: function () {
      if (!this._effects) {
        this.parseEffects();
      }
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "areaSpecificEffects", {
    get: function () {
      if (!this._areaSpecificEffects) {
        this.parseAreaSpecificEffects();
      }
      return this._areaSpecificEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "allBuildingEffects", {
    get: function () {
      return this.effects.concat(this.areaSpecificEffects);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "allShowableBuildingEffects", {
    get: function () {
      return this.allBuildingEffects.filter(function (__s319param0) {
        return __s319param0.effect.effectType.type != __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE && __s319param0.effect.effectType.type != __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE_GROUPS;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "ignoreCap", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "constructionItems", {
    get: function () {
      return this._constructionItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "isRelicBuilding", {
    get: function () {
      return this._isRelicBuilding;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.__initialize_static_members = function () {
    ABasicBuildingVO.STARTINDEX_CI_PRIMARY = __dep_exact_f855840627e6e145.int(ABasicBuildingVO.STARTINDEX_CI_APPEARANCE + __dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_COUNT);
    ABasicBuildingVO.STARTINDEX_CI_SECONDARY = __dep_exact_f855840627e6e145.int(ABasicBuildingVO.STARTINDEX_CI_PRIMARY + __dep_exact_26a421b704832cff.ConstructionItemConst.PRIMARY_SLOT_COUNT);
    ABasicBuildingVO.STARTINDEX_BY_TYPE = [ABasicBuildingVO.STARTINDEX_CI_APPEARANCE, ABasicBuildingVO.STARTINDEX_CI_PRIMARY, ABasicBuildingVO.STARTINDEX_CI_SECONDARY];
  };
  ABasicBuildingVO.SERVERINDEX_UPGRADE_TARGET_WOD_ID = 15;
  ABasicBuildingVO.STARTINDEX_CI_APPEARANCE = 0;
  return ABasicBuildingVO;
}(__dep_export_AShopVO.AShopVO);
exports.ABasicBuildingVO = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IShopVO", "ICostVO", "IInventoryVO", "IEffectSource");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__s0local1.__initialize_static_members();
