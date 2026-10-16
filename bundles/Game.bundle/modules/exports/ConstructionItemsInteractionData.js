Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AModel = require("gge-module:export_AModel");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ConstructionItemsInteractionData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.ITEM_FILTERS = [__dep_export_ConstructionItemData.ConstructionItemData.ALL_SLOTS, __dep_exact_26a421b704832cff.ConstructionItemConst.PRIMARY_SLOT_TYPE, __dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_TYPE, __dep_exact_26a421b704832cff.ConstructionItemConst.SECONDARY_SLOT_TYPE];
    __s3local0._currentItemFilter = 0;
    __s3local0._filterBuildingGroundType = "";
    __s3local0._filterConstructionItemEffectAmount = 0;
    __s3local0._filterConstructionItemRarity = -1;
    __s3local0._draggedItemGroupEffectAmount = 0;
    __s3local0._draggedItem = null;
    __s3local0._selectedSlot = null;
    __s3local0._currentItemFilter = __dep_exact_f855840627e6e145.int(__dep_export_ConstructionItemData.ConstructionItemData.ALL_SLOTS);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemsInteractionData, __s1param0);
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "draggedItem", {
    get: function () {
      return this._draggedItem;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsInteractionData.prototype.setDraggedItem = function (__s7param0, __s7param1 = true) {
    this._draggedItem = __s7param0;
    if (this.draggedItem) {
      this._selectedSlot = null;
      if (this.selectedBuilding && this.selectedBuilding.constructionItemGroupIds.indexOf(this.draggedItem.constructionItemVO.groupId) == -1) {
        this._selectedBuilding = null;
      }
      this._draggedItemGroupEffectAmount = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeConstructionItems.getConstructionItemGroupEffectAmount(this.draggedItem.constructionItemVO.effectGroupId));
      this._draggedItemUpgradeRecipe = this.draggedItem.constructionItemVO.upgradeRecipe;
    } else {
      this._draggedItemGroupEffectAmount = 0;
      this._draggedItemUpgradeRecipe = null;
    }
    if (__s7param1) {
      this.dispatchUpdate();
    }
  };
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "selectedBuilding", {
    get: function () {
      return this._selectedBuilding;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsInteractionData.prototype.setSelectedBuilding = function (__s15param0, __s15param1 = true) {
    this._selectedBuilding = this._selectedBuilding != __s15param0 ? __s15param0 : null;
    this._selectedSlot = null;
    if (__s15param1) {
      this.dispatchUpdate();
    }
  };
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "selectedSlot", {
    get: function () {
      return this._selectedSlot;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsInteractionData.prototype.setSelectedSlot = function (__s20param0, __s20param1 = true) {
    this._selectedSlot = this._selectedSlot && __s20param0 && this._selectedSlot.equals(__s20param0) ? null : __s20param0;
    this._currentItemFilter = __dep_exact_f855840627e6e145.int(this._selectedSlot ? this.selectedSlot.slotType : this._currentItemFilter);
    if (__s20param1) {
      this.dispatchUpdate();
    }
  };
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "currentItemFilter", {
    get: function () {
      return this._currentItemFilter;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsInteractionData.prototype.setCurrentItemFilter = function (__s25param0, __s25param1 = true) {
    this._currentItemFilter = __s25param0;
    if (__s25param1) {
      this.dispatchUpdate();
    }
  };
  ConstructionItemsInteractionData.prototype.isSlotLockedForDrop = function (__s28param0, __s28param1) {
    return !!this.draggedItem && this.draggedItem.constructionItemVO.slotType != __s28param0.slotType || this.isSlotLockedByAreaLimit(__s28param0, __s28param1);
  };
  ConstructionItemsInteractionData.prototype.isSlotLockedByAreaLimit = function (__s30param0, __s30param1) {
    return !!this.draggedItem && (!__s30param1 || !!__s30param1 && __s30param1.effectGroupId != this.draggedItem.constructionItemVO.effectGroupId) && this.isEffectGroupAreaLimitReached;
  };
  ConstructionItemsInteractionData.prototype.triggerUpdate = function () {
    this.dispatchUpdate();
  };
  ConstructionItemsInteractionData.prototype.setFilterBuildingGroundType = function (__s34param0, __s34param1 = true) {
    if (__s34param0 && this.selectedBuilding && this.selectedBuilding.buildingGroundType != __s34param0) {
      this.setSelectedBuilding(null, false);
    }
    this._filterBuildingGroundType = __s34param0;
    if (this.filterBuildingType && this.filterBuildingGroundType && this.filterBuildingType.buildingGroundType != this.filterBuildingGroundType) {
      this.setFilterBuildingType(null, false);
    }
    if (__s34param1) {
      this.dispatchUpdate();
    }
  };
  ConstructionItemsInteractionData.prototype.setFilterBuildingType = function (__s39param0, __s39param1 = true) {
    if (__s39param0 && this.selectedBuilding && this.selectedBuilding.name != __s39param0.name) {
      this.setSelectedBuilding(null, false);
    }
    this._filterBuildingType = __s39param0;
    if (__s39param1) {
      this.dispatchUpdate();
    }
  };
  ConstructionItemsInteractionData.prototype.setFilterExpiredOnly = function (__s43param0, __s43param1 = true) {
    if (__s43param0 && this.selectedBuilding && !this.hasBuildingExpired(this.selectedBuilding.objectId)) {
      this.setSelectedBuilding(null, false);
    }
    this._filterExpiredOnly = __s43param0;
    if (__s43param1) {
      this.dispatchUpdate();
    }
  };
  ConstructionItemsInteractionData.prototype.setFilterConstructionItemEffectAmount = function (__s47param0, __s47param1 = true) {
    this._filterConstructionItemEffectAmount = __s47param0;
    if (__s47param1) {
      this.dispatchUpdate();
    }
  };
  ConstructionItemsInteractionData.prototype.setFilterConstructionItemRarity = function (__s50param0, __s50param1 = true) {
    this._filterConstructionItemRarity = __s50param0;
    if (__s50param1) {
      this.dispatchUpdate();
    }
  };
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "filterBuildingGroundType", {
    get: function () {
      return this._filterBuildingGroundType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "filterBuildingType", {
    get: function () {
      return this._filterBuildingType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "filterExpiredOnly", {
    get: function () {
      return this._filterExpiredOnly;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "filterConstructionItemEffectAmount", {
    get: function () {
      return this._filterConstructionItemEffectAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "filterConstructionItemRarity", {
    get: function () {
      return this._filterConstructionItemRarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "draggedItemGroupEffectAmount", {
    get: function () {
      return this._draggedItemGroupEffectAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "isEffectGroupAreaLimitReached", {
    get: function () {
      return !!this.draggedItem && this.draggedItem.constructionItemVO.areaLimit <= this.draggedItemGroupEffectAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "draggedItemUpgradeRecipe", {
    get: function () {
      return this._draggedItemUpgradeRecipe;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsInteractionData.prototype.hasBuildingExpired = function (__s69param0) {
    return !!this.expiredAreaVO && this.expiredAreaVO.hasBuildingExpired(__s69param0);
  };
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "expiredAreaVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.constructionItemData.getExpiredAreaVO(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo);
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemsInteractionData;
}(__dep_export_AModel.AModel);
exports.ConstructionItemsInteractionData = __s0local0;
var __dep_export_ConstructionItemData = require("gge-module:export_ConstructionItemData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IModel");
