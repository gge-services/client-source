Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function EventPackageVO() {
    this._packageID = 0;
    this._rewards = new __dep_export_CollectableList.CollectableList();
    this._isBannerPackage = false;
    this._fillUpResourceStorage = false;
    this._ignoreResourceStorageCapacity = false;
    this._fillAllStorages = false;
    this._minLevel = 0;
    this._maxLevel = 0;
    this._minLegendLevel = 0;
    this._maxLegendLevel = 0;
    this._lifetimeSpentMin = 0;
    this._lifetimeSpentMax = 0;
    this._notRebuyable = false;
    this._stock = 0;
    this._boughtCount = 0;
    this._buyAgainReducedCostC2 = 0;
    this._sortOrder = 0;
    this._isGiftPackage = false;
    this._highlightOrderLeft = 0;
    this._highlightOrderRight = 0;
    this._topPackage = false;
    this._bundlePackageIds = [];
    this._hideInShop = false;
    this._filterRelationIDs = [];
    this._filterRelationVOs = [];
    this._disabledOnGlobalServer = false;
    this._maxBuyPerClick = __dep_exact_26a421b704832cff.PackageConst.MAX_BUY_PER_CLICK;
  }
  EventPackageVO.prototype.fillFromParamXML = function (__s5param0) {
    var __s5local0 = this;
    this._packageID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("packageID", __s5param0, "-1", true));
    this._packageType = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("packageType", __s5param0, "0");
    this._costs = __dep_export_CollectableManager.CollectableManager.parser.x2cEventPackages.createCostList(__s5param0);
    this._rewards = __dep_export_CollectableManager.CollectableManager.parser.x2cEventPackages.createRewardList(__s5param0);
    this._minLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minLevel", __s5param0, "0"));
    this._maxLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxLevel", __s5param0, "99"));
    this._minLegendLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minLegendLevel", __s5param0, "0"));
    this._maxLegendLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxLegendLevel", __s5param0, __dep_exact_26a421b704832cff_1.PlayerConst.LEGEND_LEVEL_CAP.toString()));
    this._sortOrder = parseFloat(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("sortOrder", __s5param0, "0"));
    this._stock = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("stock", __s5param0, "-1"));
    this._isBannerPackage = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isBannerPackage", __s5param0, "0")) == 1;
    this._fillUpResourceStorage = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("fillUpResourceStorage", __s5param0, "0")) == 1;
    this._ignoreResourceStorageCapacity = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("ignoreResourceStorageCapacity", __s5param0, "0")) == 1;
    this._buyAgainReducedCostC2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("buyAgainReducedCostC2", __s5param0, "0"));
    this._notRebuyable = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("notRebuyable", __s5param0, "0")) == 1;
    this._fillAllStorages = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("fillAllStorages", __s5param0, "0")) == 1;
    this._highlightOrderLeft = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("highlightOrderLeft", __s5param0, "0"));
    this._highlightOrderRight = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("highlightOrderRight", __s5param0, "0"));
    this._lifetimeSpentMax = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("c2LifetimeSpentMax", __s5param0, "0"));
    this._lifetimeSpentMin = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("c2LifetimeSpentMin", __s5param0, "0"));
    this._isGiftPackage = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isGiftPackage", __s5param0, "0")) == 1;
    this._hideInShop = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hideInShop", __s5param0, "0")) == 1;
    this._boughtCount = 0;
    this._filterRelationVOs = [];
    this._filterRelationIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("relationIDs", __s5param0, ""), ",");
    this._filterRelationIDs.forEach(function (__s7param0) {
      return __s5local0._filterRelationVOs.push(__dep_export_CastleModel.CastleModel.eventPackageData.getFilterRelationByID(__s7param0));
    });
    this._maxBuyPerClick = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxBuyPerClick", __s5param0, __dep_exact_26a421b704832cff.PackageConst.MAX_BUY_PER_CLICK.toString()));
    var __s5local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("excludedAreaTypes", __s5param0, "").split(",");
    this._excludedAreaTypes = [];
    if (__s5local1 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local1; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined && __s5local4 != "" && parseInt(__s5local4) != -1) {
          this._excludedAreaTypes.push(parseInt(__s5local4));
        }
      }
      this._disabledOnGlobalServer = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("disabledOnGlobalServer", __s5param0, "0")) == 1;
    }
    this._bundlePackageIds = [];
    for (var __s5local5 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("packageIDs", __s5param0, "").split(","), __s5local6 = 0; __s5local6 < __s5local5.length; ++__s5local6) {
      this._bundlePackageIds.push(parseInt(__s5local5[__s5local6]));
    }
  };
  EventPackageVO.prototype.parseRewards = function (__s15param0) {
    this._rewards = __dep_export_CollectableManager.CollectableManager.parser.x2cEventPackages.createRewardList(__s15param0);
  };
  Object.defineProperty(EventPackageVO.prototype, "boughtCount", {
    set: function (__s17param0) {
      this._boughtCount = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isStockLimited", {
    get: function () {
      return this._notRebuyable || this._stock > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "remainingStock", {
    get: function () {
      if (this._stock > 0) {
        return Math.max(this._stock - this._boughtCount, 0);
      } else if (this._notRebuyable) {
        return Math.max(1 - this._boughtCount, 0);
      } else {
        return this._maxBuyPerClick;
      }
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.isAvailable = function () {
    return this.remainingStock > 0;
  };
  Object.defineProperty(EventPackageVO.prototype, "isNotRebuyable", {
    get: function () {
      return this._notRebuyable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "packageID", {
    get: function () {
      return this._packageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "basicPriceC2", {
    get: function () {
      for (var __s32local0 = 0, __s32local1 = this._costs.list; __s32local0 < __s32local1.length; __s32local0++) {
        var __s32local2 = __s32local1[__s32local0];
        if (__s32local2 !== undefined && __s32local2.itemType == __dep_export_CollectableEnum.CollectableEnum.C2) {
          if (this.fillUpResourceStorage) {
            return this.calculateFillUpResourceStoragePrice();
          } else if (this.fillAllStorages) {
            return __dep_export_CastleModel.CastleModel.eventPackageData.packagePrice;
          } else {
            return __s32local2.amount;
          }
        }
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.calculateFillUpResourceStoragePrice = function () {
    var __s40local0 = [__dep_export_CollectableEnum.CollectableEnum.WOOD, __dep_export_CollectableEnum.CollectableEnum.STONE, __dep_export_CollectableEnum.CollectableEnum.FOOD, __dep_export_CollectableEnum.CollectableEnum.COAL, __dep_export_CollectableEnum.CollectableEnum.OIL, __dep_export_CollectableEnum.CollectableEnum.GLASS, __dep_export_CollectableEnum.CollectableEnum.IRON];
    var __s40local1 = [];
    var __s40local2 = 0;
    if (__s40local0 != null) {
      for (var __s40local3 = 0, __s40local4 = __s40local0; __s40local3 < __s40local4.length; __s40local3++) {
        var __s40local5 = __s40local4[__s40local3];
        if (__s40local5 !== undefined) {
          __s40local1[__s40local2++] = this.getAmount(__s40local5) ? __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s40local5).freeSpace : 0;
        }
      }
    }
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.ResourceConst.getC2PriceForResources(__s40local1));
  };
  Object.defineProperty(EventPackageVO.prototype, "basicPriceC1", {
    get: function () {
      return this._costs.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "priceC1", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(this.basicPriceC1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "priceC2", {
    get: function () {
      var __s50local0 = __dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageID) / 100;
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.basicPriceC2, null, __s50local0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "c2Discount", {
    get: function () {
      return __dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageID);
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.getAmount = function (__s54param0) {
    for (var __s54local0 = 0, __s54local1 = this._rewards.list; __s54local0 < __s54local1.length; __s54local0++) {
      var __s54local2 = __s54local1[__s54local0];
      if (__s54local2 !== undefined && __s54local2.itemType == __s54param0) {
        return __dep_exact_f855840627e6e145.int(__s54local2.amount);
      }
    }
    return 0;
  };
  EventPackageVO.prototype.getAmounts = function () {
    var __s59local0 = [];
    for (var __s59local1 = 0, __s59local2 = this._rewards.list; __s59local1 < __s59local2.length; __s59local1++) {
      var __s59local3 = __s59local2[__s59local1];
      if (__s59local3 !== undefined) {
        __s59local0.push(__s59local3.amount);
      }
    }
    return __s59local0;
  };
  Object.defineProperty(EventPackageVO.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "minLegendLevel", {
    get: function () {
      return this._minLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "maxLegendLevel", {
    get: function () {
      return this._maxLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.isPackageAvailableByArea = function (__s72param0) {
    return this._excludedAreaTypes.indexOf(__s72param0) < 0;
  };
  EventPackageVO.prototype.isPackageAvailableByLevel = function (__s74param0, __s74param1 = 0) {
    return __s74param0 >= this._minLevel && __s74param0 <= this._maxLevel && __s74param1 >= this._minLegendLevel && __s74param1 <= this._maxLegendLevel;
  };
  EventPackageVO.prototype.isAvailableByUnlockedKingdoms = function () {
    if (this.fillAllStorages && !this.hasUnlockedEnoughKingdomsForFillAllStorages()) {
      return false;
    }
    var __s76local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventBySoldPackage(this.packageID);
    return !__s76local0 || __dep_export_CastleModel.CastleModel.kingdomData.isAnyKingdomUnlocked(__s76local0.kingdomIDs);
  };
  EventPackageVO.prototype.hasUnlockedEnoughKingdomsForFillAllStorages = function () {
    var __s79local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.numUnlockedKingdoms);
    if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID)) {
      __s79local0--;
    }
    return __s79local0 > 1;
  };
  EventPackageVO.prototype.isVisible = function (__s82param0, __s82param1, __s82param2 = 0) {
    return (!__s82param2 || !!this.isPackageAvailableByArea(__s82param2)) && !!this.isPackageAvailableByLevel(__s82param0, __s82param1) && !!this.isAvailableByUnlockedKingdoms() && !this.hideInShop && this.isAvailableByLifeTimeSpend();
  };
  Object.defineProperty(EventPackageVO.prototype, "descriptionTextID", {
    get: function () {
      if (this.usePackageNameAndDescription) {
        var __s84local0 = "equipmentPackageDesc_" + this.packageID;
        if (__dep_exact_92d05af59ee2ff30.Localize.text(__s84local0) != __s84local0) {
          return __s84local0;
        }
      }
      if (this.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RESOURCES) {
        if (this.firstReward.itemType == __dep_export_CollectableEnum.CollectableEnum.C1) {
          return "dialog_merchantEventBuy_desc_coins";
        } else if (this.ignoreResourceStorageCapacity) {
          return "dialog_merchantEventBuy_ignoreStorageLimit_desc";
        } else {
          return "dialog_merchantEventBuy_desc";
        }
      } else {
        return this.firstReward.getDescriptionTextId();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "descriptionParams", {
    get: function () {
      if (this.isBannerPackage) {
        return this.getAmounts();
      } else {
        return this.firstReward.getDescriptionTextParams();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "nameTextID", {
    get: function () {
      if (this.usePackageNameAndDescription || this.ignoreResourceStorageCapacity) {
        var __s97local0 = "equipmentPackageName_" + this.packageID;
        if (__dep_exact_92d05af59ee2ff30.Localize.text(__s97local0) != __s97local0) {
          return "equipmentPackageName_" + this.packageID;
        }
      }
      return this.firstReward.getNameTextId();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "nameParams", {
    get: function () {
      return this.firstReward.getNameTextParams();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "usePackageNameAndDescription", {
    get: function () {
      return !!this.isGiftResourcePackage || this.rewards.length == 1 && this.firstReward.itemType == __dep_export_CollectableEnum.CollectableEnum.RELIC_EQUIPMENT || this.usePackageIcon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "usePackageIcon", {
    get: function () {
      return !!this.isRandomReward || this._rewards.length > 1 || this.firstReward.amount > 1 && (this.firstReward.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS || this.firstReward.itemType == __dep_export_CollectableEnum.CollectableEnum.HERO_RANDOM || this.firstReward.itemType == __dep_export_CollectableEnum.CollectableEnum.GEM_RANDOM);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isGiftResourcePackage", {
    get: function () {
      return this.isGiftPackage && this.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RESOURCES;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.getCostList = function () {
    var __s111local0 = new __dep_export_CollectableList.CollectableList();
    for (var __s111local1 = 0, __s111local2 = this._costs.list; __s111local1 < __s111local2.length; __s111local1++) {
      var __s111local3 = __s111local2[__s111local1];
      if (__s111local3 !== undefined) {
        switch (__s111local3.itemType) {
          case __dep_export_CollectableEnum.CollectableEnum.C1:
            __s111local0.addItem(new __dep_export_CollectableItemC1VO.CollectableItemC1VO(this.priceC1));
            break;
          case __dep_export_CollectableEnum.CollectableEnum.C2:
            __s111local0.addItem(new __dep_export_CollectableItemC2VO.CollectableItemC2VO(this.priceC2));
            break;
          default:
            __s111local0.addItem(__s111local3.clone());
        }
      }
    }
    return __s111local0;
  };
  Object.defineProperty(EventPackageVO.prototype, "price", {
    get: function () {
      var __s117local0 = this.getCostList();
      if (__s117local0.length > 0) {
        return __s117local0.getItemByIndex(0);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isBannerPackage", {
    get: function () {
      return this._isBannerPackage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "fillUpResourceStorage", {
    get: function () {
      return this._fillUpResourceStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "ignoreResourceStorageCapacity", {
    get: function () {
      return this._ignoreResourceStorageCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "packageType", {
    get: function () {
      return this._packageType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "notRebuyable", {
    get: function () {
      return this._notRebuyable;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.isAvailableByLifeTimeSpend = function () {
    var __s131local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.lifeTimeSpent);
    return __s131local0 >= this._lifetimeSpentMin && (this._lifetimeSpentMax == 0 || __s131local0 <= this._lifetimeSpentMax);
  };
  Object.defineProperty(EventPackageVO.prototype, "isReducedPriceC2WhenBoughtAgain", {
    get: function () {
      return this._buyAgainReducedCostC2 > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "rebuyPriceC2Reduction", {
    get: function () {
      if (this.isReducedPriceC2WhenBoughtAgain) {
        return 1 - this._buyAgainReducedCostC2 / this.basicPriceC2;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "priceC2WithRebuyReduction", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.basicPriceC2, null, this.maxPriceReductionC2WithRebuyReduction);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "maxPriceReductionC2WithRebuyReduction", {
    get: function () {
      var __s141local0 = __dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageID) / 100;
      return __dep_export_CastleModel.CastleModel.costsData.getMaxPriceC2Reduction(false, Math.max(__s141local0, this.rebuyPriceC2Reduction));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "initialStock", {
    get: function () {
      return this._stock;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "mayBeBoughtInBulk", {
    get: function () {
      switch (this.reward.itemType) {
        case __dep_export_CollectableEnum.CollectableEnum.HERO_RANDOM:
        case __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS:
        case __dep_export_CollectableEnum.CollectableEnum.BUILDING:
        case __dep_export_CollectableEnum.CollectableEnum.GEM_RANDOM:
          return false;
      }
      return !this.hasCustomPrice && !this.isBannerPackage && !this.isNotRebuyable && !this.isRandomReward && this.initialStock != 1 && this.remainingStock > 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isRandomReward", {
    get: function () {
      return this.firstReward.itemType == __dep_export_CollectableEnum.CollectableEnum.RANDOM_REWARD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "hasCustomPrice", {
    get: function () {
      return this._fillAllStorages || this._fillUpResourceStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "fillAllStorages", {
    get: function () {
      return this._fillAllStorages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "highlightOrderLeft", {
    get: function () {
      return this._highlightOrderLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "highlightOrderRight", {
    get: function () {
      return this._highlightOrderRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isTopPackage", {
    get: function () {
      return this._topPackage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "topPackage", {
    set: function (__s160param0) {
      this._topPackage = __s160param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isGiftPackage", {
    get: function () {
      return this._isGiftPackage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "firstReward", {
    get: function () {
      return this._rewards.getItemByIndexSave(0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "reward", {
    get: function () {
      if (this.usePackageIcon) {
        this._packageItem ||= new __dep_export_CollectableItemEventPackageVO.CollectableItemEventPackageVO(this._packageID);
        return this._packageItem;
      } else {
        return this.firstReward;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "bundlePackageIds", {
    get: function () {
      return this._bundlePackageIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "hideInShop", {
    get: function () {
      return this._hideInShop;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.getXmlCosts = function () {
    return this._costs;
  };
  EventPackageVO.prototype.getSearchString = function () {
    var __s178local0 = "";
    __s178local0 += this.packageID;
    __s178local0 += __dep_exact_92d05af59ee2ff30.Localize.text(this.nameTextID, this.nameParams);
    if (this.rewards && this.rewards.list.length > 0) {
      this.rewards.list.forEach(function (__s181param0) {
        return __s178local0 += __s181param0.getSearchString();
      });
    }
    if (this.bundlePackageIds.length > 0) {
      this.bundlePackageIds.forEach(function (__s184param0) {
        var __s184local0 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s184param0);
        if (__s184local0) {
          __s178local0 += __s184local0.getSearchString();
        }
      });
    }
    return __s178local0.toLowerCase();
  };
  Object.defineProperty(EventPackageVO.prototype, "filterRelationIDs", {
    get: function () {
      return this._filterRelationIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "filterRelationVOs", {
    get: function () {
      return this._filterRelationVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "maxBuyPerClick", {
    get: function () {
      return this._maxBuyPerClick;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "disabledOnGlobalServer", {
    get: function () {
      return this._disabledOnGlobalServer;
    },
    enumerable: true,
    configurable: true
  });
  return EventPackageVO;
}();
exports.EventPackageVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableItemEventPackageVO = require("gge-module:export_CollectableItemEventPackageVO");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
