Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __s0local0 = function (__s1param0) {
  function AShopVO() {
    var __s3local0 = this;
    __s3local0._costs = new __dep_export_CollectableList.CollectableList();
    __s3local0._tempServerRepairCosts = new __dep_export_CollectableList.CollectableList();
    __s3local0._tempServerRepairTime = 0;
    __s3local0._requiredLevel = 0;
    __s3local0._requiredLegendLevel = 0;
    __s3local0._earlyUnlockRequiredLevel = 0;
    __s3local0._storeable = false;
    __s3local0._level = 0;
    __s3local0._upgradeWodID = 0;
    __s3local0._downgradeWodID = 0;
    __s3local0._needConstructionExpert = false;
    __s3local0._xp = 0;
    __s3local0._mightValue = 0;
    __s3local0._maximumCount = 0;
    __s3local0._destructable = false;
    __s3local0._slumLevelNeeded = 0;
    __s3local0._inventoryAmount = 0;
    __s3local0._sortOrder = 0;
    __s3local0._onlyInAreaTypes = [];
    __s3local0._onlyInKingdomIds = [];
    __s3local0._availableInMapIds = [];
    __s3local0._onlyInEventIds = [];
    __s3local0._discountedCostC2 = -1;
    __s3local0._sellCostC1 = 0;
    __s3local0._tempServerDestructable = false;
    __s3local0._isBattleGround = false;
    __s3local0._isNotBattleGround = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AShopVO, __s1param0);
  AShopVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._costs = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_COST);
    this._tempServerRepairCosts = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("tempServerCostWood", __s5param0)), new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("tempServerCostStone", __s5param0)));
    this._tempServerRepairTime = __dep_exact_f855840627e6e145.int(this._requiredLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("tempServerTime", __s5param0)));
    this._requiredLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("requiredLevel", __s5param0));
    this._requiredLegendLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("requiredLegendLevel", __s5param0));
    this._earlyUnlockRequiredLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("earlyUnlockRequiredLevel", __s5param0));
    this._upgradeWodID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("upgradeWodID", __s5param0));
    this._downgradeWodID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("downgradeWodID", __s5param0));
    this._shopCategory = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("shopCategory", __s5param0, "NOT_IN_SHOP");
    this._level = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("level", __s5param0, -1));
    this._xp = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("xp", __s5param0));
    this._mightValue = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("mightValue", __s5param0, 0));
    this._storeable = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("storeable", __s5param0);
    this._maximumCount = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("maximumCount", __s5param0, 1000000));
    this._destructable = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("destructable", __s5param0, true);
    this._tempServerDestructable = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("tempServerDestructable", __s5param0, true);
    this._isBattleGround = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("isBattleGround", __s5param0, false);
    this._isNotBattleGround = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("isNotBattleGround", __s5param0, false);
    this._slumLevelNeeded = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("slumLevelNeeded", __s5param0));
    this._needConstructionExpert = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("constructionExpert", __s5param0);
    this._sellCostC1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("sellC1", __s5param0, 0));
    this._sellBuildingVO = new __dep_export_SellBuildingVO.SellBuildingVO(__dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_SELL));
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getNumberAttribute("sortOrder", __s5param0, 1000000);
    this._sortOrder = isNaN(__s5local0) ? Number.MAX_VALUE : __s5local0;
    this._onlyInAreaTypes = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("onlyInAreaTypes", __s5param0);
    this._onlyInKingdomIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("kIDs", __s5param0);
    this._availableInMapIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("mapIDs", __s5param0);
    this._onlyInEventIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("eventIDs", __s5param0);
    this._effectLocked = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("effectLocked", __s5param0);
    this._sceatSkillLocked = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("sceatSkillLocked", __s5param0);
    if (this._onlyInKingdomIds.length <= 0) {
      this._onlyInKingdomIds = [__dep_export_KingdomEnum.KingdomEnum.CLASSIC.id, __dep_export_KingdomEnum.KingdomEnum.DESSERT.id, __dep_export_KingdomEnum.KingdomEnum.ICE.id, __dep_export_KingdomEnum.KingdomEnum.VOLCANO.id, __dep_export_KingdomEnum.KingdomEnum.ISLAND.id, __dep_export_KingdomEnum.KingdomEnum.SEAQUEEN.id, __dep_export_KingdomEnum.KingdomEnum.THORNKING.id, __dep_export_KingdomEnum.KingdomEnum.UNDERWORLD.id];
    }
  };
  AShopVO.prototype.getNameString = function () {
    return this.name.toLowerCase() + "_name";
  };
  AShopVO.prototype.getShortInfoString = function () {
    return this.name.toLowerCase() + "_short_info";
  };
  AShopVO.prototype.getUpgradeInfoString = function () {
    return this.name.toLowerCase() + "_upgrade_info";
  };
  AShopVO.prototype.getUpgradeVO = function () {
    if (this.upgradeWodID) {
      return __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(this.upgradeWodID, this.wodDataType);
    } else {
      return null;
    }
  };
  AShopVO.prototype.getDowngradeVO = function () {
    if (this.downgradeWodID != 0) {
      return __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(this.downgradeWodID, this.wodDataType);
    } else {
      return null;
    }
  };
  AShopVO.prototype.getLowestDowngradeVO = function () {
    var __s22local0;
    var __s22local1 = this;
    do {
      if (__s22local0 = __s22local1.getDowngradeVO()) {
        __s22local1 = __s22local0;
      }
    } while (__s22local0);
    return __s22local1;
  };
  Object.defineProperty(AShopVO.prototype, "hasUpgrade", {
    get: function () {
      return this.upgradeWodID > 0;
    },
    enumerable: true,
    configurable: true
  });
  AShopVO.prototype.hasUserLevelAndEffectsForUpgrade = function () {
    var __s29local0 = this.getUpgradeVO();
    return !!__s29local0 && __s29local0.isAvailableByLevelAndEffect;
  };
  AShopVO.prototype.canUpgrade = function () {
    return !!this.hasUserLevelAndEffectsForUpgrade() && (!this.isConstructionExpertRequiredForUpgrade || !!__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CONSTRUCTION_EXPERT));
  };
  Object.defineProperty(AShopVO.prototype, "isConstructionExpertRequiredForUpgrade", {
    get: function () {
      if (this.upgradeWodID != 0) {
        var __s33local0 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(this.upgradeWodID), "AShopVO");
        if (__s33local0 && __s33local0.needConstructionExpert) {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  AShopVO.prototype.canBeBuildByResourceFields = function () {
    return true;
  };
  AShopVO.prototype.getRequiredLevel = function () {
    if (this.requiredLegendLevel > 0) {
      return this.requiredLegendLevel;
    } else if (this.earlyUnlockRequiredLevel != 0) {
      return this.earlyUnlockRequiredLevel;
    } else {
      return this.requiredLevel;
    }
  };
  AShopVO.prototype.getDeltaMightValue = function () {
    if (this.level > 1 && this.mightValue > 0) {
      return __dep_exact_f855840627e6e145.int(this.mightValue - (this.getDowngradeVO() ? this.getDowngradeVO().mightValue : 0));
    } else {
      return this.mightValue;
    }
  };
  AShopVO.prototype.isAvailableInAreaTypeAndKingdomId = function (__s48param0, __s48param1) {
    return this.isAvailableInAreaType(__s48param0) && this.isAvailableByKingdomId(__s48param1);
  };
  AShopVO.prototype.isAvailableInAreaType = function (__s50param0) {
    var __s50local0 = true;
    if (this._isBattleGround) {
      __s50local0 = __dep_export_ABGHelper.ABGHelper.isOnABGServer && this._isBattleGround;
    }
    if (this._isNotBattleGround) {
      __s50local0 = !__dep_export_ABGHelper.ABGHelper.isOnABGServer && this._isNotBattleGround;
    }
    return (this.onlyInAreaTypes.length <= 0 || this.onlyInAreaTypes.indexOf(__s50param0) >= 0) && __s50local0;
  };
  Object.defineProperty(AShopVO.prototype, "isAvailableByLevelAndEffect", {
    get: function () {
      return this.isAvailableByLevel && this.isAvailableByEffect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "isAvailableByEffect", {
    get: function () {
      if (this.effectLocked && !__dep_export_CastleModel.CastleModel.legendSkillData.getSceatSkillEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS).hasID(this.wodId)) {
        return false;
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "isAvailableByLevel", {
    get: function () {
      if (this.earlyUnlockRequiredLevel != 0) {
        return this.earlyUnlockRequiredLevel <= __dep_export_CastleModel.CastleModel.userData.userLevel && this.requiredLegendLevel <= __dep_export_CastleModel.CastleModel.userData.userLegendLevel;
      } else {
        return this.requiredLevel <= __dep_export_CastleModel.CastleModel.userData.userLevel && this.requiredLegendLevel <= __dep_export_CastleModel.CastleModel.userData.userLegendLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  AShopVO.prototype.isAvailableByKingdomId = function (__s63param0) {
    return this.onlyInKingdomIds.length <= 0 || this.onlyInKingdomIds.indexOf(__s63param0) >= 0;
  };
  AShopVO.prototype.isAvailableByMapId = function (__s65param0) {
    return this.availableInMapIds.indexOf(__s65param0) >= 0;
  };
  AShopVO.prototype.isOnlyAvailableByMapIds = function () {
    return this.availableInMapIds.length > 0;
  };
  AShopVO.prototype.isOnlyAvailableInEvent = function () {
    if (this.onlyInEventIds != null) {
      for (var __s69local0 = 0, __s69local1 = this.onlyInEventIds; __s69local0 < __s69local1.length; __s69local0++) {
        var __s69local2 = __s69local1[__s69local0];
        if (__s69local2 !== undefined && __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__s69local2)) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(AShopVO.prototype, "costC1", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(this.costs.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "costC2", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.costs.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "basicCostC1", {
    get: function () {
      return this.costs.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "basicCostC2", {
    get: function () {
      return this.costs.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2);
    },
    enumerable: true,
    configurable: true
  });
  AShopVO.prototype.getShopIconURL = function (__s83param0) {
    return __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.getShopIconName(__s83param0));
  };
  AShopVO.prototype.getShopIconName = function (__s85param0) {
    return this.getVisualClassName();
  };
  AShopVO.prototype.getCost = function (__s87param0) {
    switch (__s87param0.type) {
      case __dep_export_CollectableEnum.CollectableEnum.C1:
        return this.costC1;
      case __dep_export_CollectableEnum.CollectableEnum.C2:
        return this.costC2;
    }
    return __dep_exact_f855840627e6e145.int(this.costs.getAmountOrDefaultByTypeVO(__s87param0));
  };
  AShopVO.prototype.getCostTypes = function () {
    return this.costs.getContainingTypes();
  };
  Object.defineProperty(AShopVO.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "requiredLevel", {
    get: function () {
      return this._requiredLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "storeable", {
    get: function () {
      return this._storeable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "shopCategory", {
    get: function () {
      return this._shopCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    set: function (__s102param0) {
      this._level = __s102param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "upgradeWodID", {
    get: function () {
      return this._upgradeWodID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "downgradeWodID", {
    get: function () {
      return this._downgradeWodID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "maximumCount", {
    get: function () {
      return this._maximumCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "destructable", {
    get: function () {
      return this._destructable || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnTemporaryServer && this._tempServerDestructable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "slumLevelNeeded", {
    get: function () {
      return this._slumLevelNeeded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "inventoryAmount", {
    get: function () {
      return this._inventoryAmount;
    },
    set: function (__s116param0) {
      this._inventoryAmount = __s116param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "discountedCostC2", {
    get: function () {
      return this._discountedCostC2;
    },
    set: function (__s120param0) {
      this._discountedCostC2 = __s120param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "needConstructionExpert", {
    get: function () {
      return this._needConstructionExpert;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "xp", {
    get: function () {
      var __s124local0 = 0;
      var __s124local1 = 0;
      if (__dep_export_CastleModel.CastleModel.areaData && __dep_export_CastleModel.CastleModel.areaData.activeConstructionItems) {
        var __s124local2 = new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.areaType, __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.spaceID);
        __s124local0 = __dep_export_CastleModel.CastleModel.areaData.activeConstructionItems.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.XPBOOSTBUILDBUILDINGS);
        __s124local1 = __dep_export_CastleModel.CastleModel.areaData.activeConstructionItems.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_BUILDING_XP_BOOST, __s124local2).strength;
      }
      var __s124local3 = __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_BUILDING_XP_BOOST).strength;
      var __s124local4 = __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.XP_CONSTRUCTION_BONUS);
      return Math.ceil(this._xp * (1 + (__s124local0 + __s124local1 + __s124local3 + __s124local4) / 100));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "requiredLegendLevel", {
    get: function () {
      return this._requiredLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "onlyInKingdomIds", {
    get: function () {
      return this._onlyInKingdomIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "onlyInEventIds", {
    get: function () {
      return this._onlyInEventIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "availableInMapIds", {
    get: function () {
      return this._availableInMapIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "onlyInAreaTypes", {
    get: function () {
      return this._onlyInAreaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "mightValue", {
    get: function () {
      return this._mightValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "sellCostC1", {
    get: function () {
      return this._sellCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "sellBuildingVO", {
    get: function () {
      return this._sellBuildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "earlyUnlockRequiredLevel", {
    get: function () {
      return this._earlyUnlockRequiredLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "tempServerDestructable", {
    get: function () {
      return this._tempServerDestructable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "effectLocked", {
    get: function () {
      return this._effectLocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "sceatSkillLocked", {
    get: function () {
      return this._sceatSkillLocked;
    },
    enumerable: true,
    configurable: true
  });
  return AShopVO;
}(require("gge-module:export_AInteractiveIsoObjectVO").AInteractiveIsoObjectVO);
exports.AShopVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemStoneVO = require("gge-module:export_CollectableItemStoneVO");
var __dep_export_CollectableItemWoodVO = require("gge-module:export_CollectableItemWoodVO");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_SellBuildingVO = require("gge-module:export_SellBuildingVO");
