Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_CastleMultiInfoBuildingPanelVO = require("gge-module:export_CastleMultiInfoBuildingPanelVO");
var __dep_export_CollectableItemBeefVO = require("gge-module:export_CollectableItemBeefVO");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __s0local0 = function (__s1param0) {
  function AEffectBuildingVO() {
    var __s3local0 = this;
    __s3local0._resourceStorage = new __dep_export_CollectableList.CollectableList();
    __s3local0._hideout = 0;
    __s3local0._resourceBoosts = new __dep_export_CollectableList.CollectableList();
    __s3local0._recruitSpeedBoost = 0;
    __s3local0._alliFoodProductionBoost = 0;
    __s3local0._shownTravelBoost = 0;
    __s3local0._buildSpeedBoost = 0;
    __s3local0._buildingCostReduction = 0;
    __s3local0._foodReduction = 0;
    __s3local0._meadReduction = 0;
    __s3local0._beefReduction = 0;
    __s3local0._commanders = 0;
    __s3local0._barons = 0;
    __s3local0._guards = 0;
    __s3local0._spies = 0;
    __s3local0._population = 0;
    __s3local0._decoPoints = 0;
    __s3local0._marketCarriages = 0;
    __s3local0._morality = 0;
    __s3local0._unitCapacity = 0;
    __s3local0._unitWallCount = 0;
    __s3local0._islandAlliancePoints = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AEffectBuildingVO, __s1param0);
  AEffectBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._resourceStorage = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("woodStorage", __s5param0)), new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("stoneStorage", __s5param0)), new __dep_export_CollectableItemFoodVO.CollectableItemFoodVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("foodStorage", __s5param0)), new __dep_export_CollectableItemCoalVO.CollectableItemCoalVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("coalStorage", __s5param0)), new __dep_export_CollectableItemOilVO.CollectableItemOilVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("oilStorage", __s5param0)), new __dep_export_CollectableItemGlassVO.CollectableItemGlassVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("glassStorage", __s5param0)), new __dep_export_CollectableItemIronVO.CollectableItemIronVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("ironStorage", __s5param0)), new __dep_export_CollectableItemMeadVO.CollectableItemMeadVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("meadStorage", __s5param0)), new __dep_export_CollectableItemBeefVO.CollectableItemBeefVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("beefStorage", __s5param0)), new __dep_export_CollectableItemHoneyVO.CollectableItemHoneyVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("honeyStorage", __s5param0)), new __dep_export_CollectableItemAquamarineVO.CollectableItemAquamarineVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("aquamarineStorage", __s5param0)));
    this._hideout = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Hideout", __s5param0));
    this._resourceBoosts = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Woodboost", __s5param0)), new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Stoneboost", __s5param0)), new __dep_export_CollectableItemFoodVO.CollectableItemFoodVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Foodboost", __s5param0)), new __dep_export_CollectableItemCoalVO.CollectableItemCoalVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Coalboost", __s5param0)), new __dep_export_CollectableItemOilVO.CollectableItemOilVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Oilboost", __s5param0)), new __dep_export_CollectableItemGlassVO.CollectableItemGlassVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Glassboost", __s5param0)), new __dep_export_CollectableItemIronVO.CollectableItemIronVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Ironboost", __s5param0)), new __dep_export_CollectableItemMeadVO.CollectableItemMeadVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Meadboost", __s5param0)), new __dep_export_CollectableItemBeefVO.CollectableItemBeefVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Beefboost", __s5param0)), new __dep_export_CollectableItemHoneyVO.CollectableItemHoneyVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Honeyboost", __s5param0)));
    this._alliFoodProductionBoost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("alliFoodProductionBonus", __s5param0));
    this._recruitSpeedBoost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("recruitSpeedBoost", __s5param0));
    this._shownTravelBoost = __dep_export_CastleXMLUtils.CastleXMLUtils.getNumberAttribute("shownTravelBonus", __s5param0);
    this._buildSpeedBoost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("buildSpeedBoost", __s5param0));
    this._foodReduction = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Foodreduction", __s5param0));
    this._meadReduction = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Meadreduction", __s5param0));
    this._beefReduction = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Beefreduction", __s5param0));
    this._buildingCostReduction = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("buildingCostReduction", __s5param0));
    this._commanders = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("commanderSize", __s5param0));
    this._barons = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("baronSize", __s5param0));
    this._guards = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("guardSize", __s5param0));
    this._spies = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("spySize", __s5param0));
    this._decoPoints = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("decoPoints", __s5param0));
    this._population = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Population", __s5param0));
    this._marketCarriages = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("marketCarriages", __s5param0));
    this._morality = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Moral", __s5param0));
    this._unitCapacity = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("unitSize", __s5param0));
    this._unitWallCount = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("unitWallCount", __s5param0));
    this._islandAlliancePoints = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("islandAlliancePoints", __s5param0));
  };
  Object.defineProperty(AEffectBuildingVO.prototype, "maxStorageValue", {
    get: function () {
      var __s7local0 = 0;
      for (var __s7local1 = 0; __s7local1 < this.resourceStorage.length; ++__s7local1) {
        var __s7local2 = this.resourceStorage.getItemByIndex(__s7local1);
        if (__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_GOODS.indexOf(__s7local2.itemType) >= 0 && __s7local2.itemType != __dep_export_CollectableEnum.CollectableEnum.AQUAMARINE && __s7local2.amount > __s7local0) {
          __s7local0 = __s7local2.amount;
        }
      }
      return __s7local0;
    },
    enumerable: true,
    configurable: true
  });
  AEffectBuildingVO.prototype.needsResourceTypeInCastle = function (__s12param0) {
    return this.resourceBoosts.getAmountOrDefaultByType(__s12param0) > 0;
  };
  AEffectBuildingVO.prototype.canBeBuildByResourceFields = function () {
    var __s14local0 = this.isoData ? this.isoData.areaData.storage : __dep_export_CastleModel.CastleModel.areaData.activeStorage;
    var __s14local1 = [__dep_export_CollectableEnum.CollectableEnum.WOOD, __dep_export_CollectableEnum.CollectableEnum.STONE, __dep_export_CollectableEnum.CollectableEnum.FOOD];
    if (__s14local1 != null) {
      for (var __s14local2 = 0, __s14local3 = __s14local1; __s14local2 < __s14local3.length; __s14local2++) {
        var __s14local4 = __s14local3[__s14local2];
        if (__s14local4 !== undefined && this.needsResourceTypeInCastle(__s14local4)) {
          return __s14local0.getItem(__s14local4).fieldEfficiency != 0;
        }
      }
    }
    return true;
  };
  Object.defineProperty(AEffectBuildingVO.prototype, "multiInfoPanelVO", {
    get: function () {
      var __s20local0;
      if (this._buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.INITIAL) {
        return null;
      } else {
        (__s20local0 = new __dep_export_CastleMultiInfoBuildingPanelVO.CastleMultiInfoBuildingPanelVO()).titleID = this.getNameString();
        if (this._buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS || this._buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED) {
          __s20local0.copyID = "buildInProgress";
          return __s20local0;
        } else {
          __s20local0.copyID = this.getShortInfoString();
          this.createAdditionalEffectItems(__s20local0);
          this.createInfoPanelItems(__s20local0);
          return __s20local0;
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "infoDialogVO", {
    get: function () {
      var __s26local0;
      (__s26local0 = new __dep_export_CastleMultiInfoBuildingPanelVO.CastleMultiInfoBuildingPanelVO()).titleID = this.getNameString();
      __s26local0.buildingVO = this;
      __s26local0.copyID = this.getShortInfoString();
      this.createAdditionalEffectItems(__s26local0);
      this.createInfoDialogItems(__s26local0);
      return __s26local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "storageDialogVO", {
    get: function () {
      var __s28local0;
      (__s28local0 = new __dep_export_CastleMultiInfoBuildingPanelVO.CastleMultiInfoBuildingPanelVO()).titleID = this.getNameString();
      __s28local0.buildingVO = this;
      __s28local0.copyID = this.getShortInfoString();
      this.createStorageDialogItems(__s28local0);
      return __s28local0;
    },
    enumerable: true,
    configurable: true
  });
  AEffectBuildingVO.prototype.createAdditionalEffectItems = function (__s30param0) {};
  AEffectBuildingVO.prototype.createInfoDialogItems = function (__s32param0) {
    this.createInfoPanelItems(__s32param0);
  };
  AEffectBuildingVO.prototype.createInfoPanelItems = function (__s34param0) {};
  AEffectBuildingVO.prototype.createStorageDialogItems = function (__s36param0) {
    __s36param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GridSize, "gridSize", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("filter_gridSize_custom", [this.width, this.height]));
    if (this.mightValue > 0) {
      __s36param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might_starOnly_noShadow, "playerMight", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.mightValue));
    } else {
      __s36param0.addInfoItem(null, "", new __dep_exact_92d05af59ee2ff30.TextVO(""));
    }
  };
  Object.defineProperty(AEffectBuildingVO.prototype, "resourceStorage", {
    get: function () {
      return this._resourceStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "hideout", {
    get: function () {
      return this._hideout;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "recruitSpeedBoost", {
    get: function () {
      return this._recruitSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "alliFoodProductionBoost", {
    get: function () {
      return this._alliFoodProductionBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "shownTravelBoost", {
    get: function () {
      return this._shownTravelBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "buildingCostReduction", {
    get: function () {
      return this._buildingCostReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "foodReduction", {
    get: function () {
      return this._foodReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "meadReduction", {
    get: function () {
      return this._meadReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "beefReduction", {
    get: function () {
      return this._beefReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "commanders", {
    get: function () {
      return this._commanders;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "barons", {
    get: function () {
      return this._barons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "guards", {
    get: function () {
      return Math.ceil(this._guards);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "spies", {
    get: function () {
      return this._spies;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "population", {
    get: function () {
      if (this.areValuesActive) {
        return Math.ceil(this._population);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "decoPoints", {
    get: function () {
      return this._decoPoints + this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "rawDecoPoints", {
    get: function () {
      return this._decoPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "marketCarriages", {
    get: function () {
      return Math.ceil(this._marketCarriages) + this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.MARKETCARRIAGES);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "islandAlliancePoints", {
    get: function () {
      return this._islandAlliancePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "buildSpeedBoost", {
    get: function () {
      return this._buildSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "resourceBoosts", {
    get: function () {
      return this._resourceBoosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "morality", {
    get: function () {
      return this._morality;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "unitCapacity", {
    get: function () {
      return this._unitCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "unitWallCount", {
    get: function () {
      return this._unitWallCount;
    },
    enumerable: true,
    configurable: true
  });
  return AEffectBuildingVO;
}(require("gge-module:export_ABasicBuildingVO").ABasicBuildingVO);
exports.AEffectBuildingVO = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemCoalVO = require("gge-module:export_CollectableItemCoalVO");
var __dep_export_CollectableItemFoodVO = require("gge-module:export_CollectableItemFoodVO");
var __dep_export_CollectableItemGlassVO = require("gge-module:export_CollectableItemGlassVO");
var __dep_export_CollectableItemIronVO = require("gge-module:export_CollectableItemIronVO");
var __dep_export_CollectableItemOilVO = require("gge-module:export_CollectableItemOilVO");
var __dep_export_CollectableItemStoneVO = require("gge-module:export_CollectableItemStoneVO");
var __dep_export_CollectableItemWoodVO = require("gge-module:export_CollectableItemWoodVO");
var __dep_export_CollectableItemMeadVO = require("gge-module:export_CollectableItemMeadVO");
var __dep_export_CollectableItemHoneyVO = require("gge-module:export_CollectableItemHoneyVO");
var __dep_export_CollectableItemAquamarineVO = require("gge-module:export_CollectableItemAquamarineVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
