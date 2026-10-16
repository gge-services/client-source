Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2CraftingStartVO = require("gge-module:export_C2CraftingStartVO");
var __dep_export_C2SCraftingSkipVO = require("gge-module:export_C2SCraftingSkipVO");
var __dep_export_C2SCraftingUnlockVO = require("gge-module:export_C2SCraftingUnlockVO");
var __dep_export_C2SCraftingCancelVO = require("gge-module:export_C2SCraftingCancelVO");
var __dep_export_C2SCraftingInfoVO = require("gge-module:export_C2SCraftingInfoVO");
var __dep_export_C2SCraftingQueueMoveVO = require("gge-module:export_C2SCraftingQueueMoveVO");
var __dep_export_CraftingEvent = require("gge-module:export_CraftingEvent");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CraftingQueueVO = require("gge-module:export_CraftingQueueVO");
var __dep_export_CraftingQueueXML = require("gge-module:export_CraftingQueueXML");
var __dep_export_CraftingRecipeVO = require("gge-module:export_CraftingRecipeVO");
var __dep_export_CraftingSlotVO = require("gge-module:export_CraftingSlotVO");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_SimpleEffectSource = require("gge-module:export_SimpleEffectSource");
var __s0local0 = function (__s1param0) {
  function CastleCraftingData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._craftingQueueVOs = [];
    __s3local0._craftingQueueXMLs = new Map();
    __s3local0._craftingRecipeVOs = new Map();
    __s3local0._craftingRecipeClusters = new Map();
    var __s3local1 = __s3param0.craftingQueues;
    var __s3local2 = __s3param0.craftingRecipes;
    if (__s3local2 != null) {
      for (var __s3local3 = 0, __s3local4 = __s3local2; __s3local3 < __s3local4.length; __s3local3++) {
        var __s3local5 = __s3local4[__s3local3];
        if (__s3local5 !== undefined) {
          var __s3local6 = new __dep_export_CraftingRecipeVO.CraftingRecipeVO(__s3local5);
          if (__s3local6 && __s3local6.output.length > 0) {
            __s3local0.addRecipe(__s3local6);
          }
        }
      }
    }
    if (__s3local1 != null) {
      for (var __s3local7 = 0, __s3local8 = __s3local1; __s3local7 < __s3local8.length; __s3local7++) {
        var __s3local9 = __s3local8[__s3local7];
        if (__s3local9 !== undefined) {
          var __s3local10 = new __dep_export_CraftingQueueXML.CraftingQueueXML(__s3local9);
          __s3local0._craftingQueueXMLs.add(__s3local10.queueID, __s3local10);
        }
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCraftingData, __s1param0);
  CastleCraftingData.prototype.addRecipe = function (__s14param0) {
    this._craftingRecipeVOs.add(__s14param0.id, __s14param0);
    if (!this._craftingRecipeClusters.has(__s14param0.queueID)) {
      this._craftingRecipeClusters.add(__s14param0.queueID, new Map());
    }
    if (!this._craftingRecipeClusters.get(__s14param0.queueID).has(__s14param0.recipeGroupID)) {
      this._craftingRecipeClusters.get(__s14param0.queueID).add(__s14param0.recipeGroupID, new Map());
    }
    if (!this._craftingRecipeClusters.get(__s14param0.queueID).get(__s14param0.recipeGroupID).has(__s14param0.type)) {
      this._craftingRecipeClusters.get(__s14param0.queueID).get(__s14param0.recipeGroupID).add(__s14param0.type, []);
    }
    this._craftingRecipeClusters.get(__s14param0.queueID).get(__s14param0.recipeGroupID).get(__s14param0.type).push(__s14param0);
    this._craftingRecipeClusters.get(__s14param0.queueID).get(__s14param0.recipeGroupID).get(__s14param0.type).sort(function (__s19param0, __s19param1) {
      return __s19param0.level - __s19param1.level;
    });
  };
  CastleCraftingData.prototype.parseAllQueueData = function (__s21param0) {
    var __s21local0 = this;
    (Array.isArray(__s21param0[__dep_exact_26a421b704832cff.CommKeys.CRAFTING_AREA_INFO]) ? __s21param0[__dep_exact_26a421b704832cff.CommKeys.CRAFTING_AREA_INFO] : [__s21param0[__dep_exact_26a421b704832cff.CommKeys.CRAFTING_AREA_INFO]]).forEach(function (__s23param0) {
      __s21local0.parseAreaQueueData(__s23param0);
    });
    this.dispatchEvent(new __dep_export_CraftingEvent.CraftingEvent(__dep_export_CraftingEvent.CraftingEvent.CRAFTING_QUEUE_UPDATED, -1));
  };
  CastleCraftingData.prototype.parseAreaQueueData = function (__s25param0) {
    var __s25local0 = this;
    if (__s25param0) {
      var __s25local1 = new __dep_export_SimpleEffectSource.SimpleEffectSource();
      __s25local1.parseEffects(__s25param0[__dep_exact_26a421b704832cff.CommKeys.CRAFTING_EFFECTS] || []);
      (__s25param0[__dep_exact_26a421b704832cff.CommKeys.CRAFTING_BUILDINGS_INFO] || []).forEach(function (__s28param0) {
        __s25local0.parseBuildingQueueData(__s28param0, __s25local1, false);
      });
    }
  };
  CastleCraftingData.prototype.parseBuildingQueueData = function (__s30param0, __s30param1 = null, __s30param2 = true) {
    var __s30local0 = __s30param0[__dep_exact_26a421b704832cff.CommKeys.KINGDOM_ID];
    var __s30local1 = __s30param0[__dep_exact_26a421b704832cff.CommKeys.AREA_ID];
    var __s30local2 = __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.getTypeById(__s30param0[__dep_exact_26a421b704832cff.CommKeys.STATE]);
    var __s30local3 = __s30param0[__dep_exact_26a421b704832cff.CommKeys.CRAFTING_QUEUE_ID];
    var __s30local4 = __s30param0[__dep_exact_26a421b704832cff.CommKeys.OBJECT_ID];
    var __s30local5 = this._craftingQueueVOs.find(function (__s32param0) {
      return __s32param0.queueID === __s30local3 && __s32param0.kingdomID === __s30local0 && __s32param0.areaID === __s30local1;
    });
    if (!__s30local5) {
      __s30local5 = new __dep_export_CraftingQueueVO.CraftingQueueVO(__s30local0, __s30local1, __s30local4, __s30local3, __s30local2, __s30param1);
      this._craftingQueueVOs.push(__s30local5);
    }
    __s30local5.objectID = __s30local4;
    __s30local5.buildingState = __s30local2;
    __s30local5.craftingEffects = __s30param1 || __s30local5.craftingEffects || new __dep_export_SimpleEffectSource.SimpleEffectSource();
    __s30local5.parseServerData(__dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_PRODUCTION, __s30param0[__dep_exact_26a421b704832cff.CommKeys.PRODUCTION_SLOT] || {});
    __s30local5.parseServerData(__dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_QUEUE, __s30param0[__dep_exact_26a421b704832cff.CommKeys.QUEUE_SLOTS] || {});
    if (__s30param2) {
      this.dispatchEvent(new __dep_export_CraftingEvent.CraftingEvent(__dep_export_CraftingEvent.CraftingEvent.CRAFTING_QUEUE_UPDATED, __s30local3, __s30local0));
    }
  };
  CastleCraftingData.prototype.checkForLearnedRecipes = function () {
    var __s36local0 = this;
    Array.from(this._craftingRecipeVOs.values()).forEach(function (__s38param0) {
      var __s38local0 = __s36local0.getQueueVOByID(__s38param0.queueID) ? [__s36local0.getQueueVOByID(__s38param0.queueID).craftingEffects] : null;
      __s38param0.learned = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEffectValueForType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE, null, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(), __s38local0).hasID(__s38param0.id);
      var __s38local1 = __s36local0._craftingRecipeClusters.get(__s38param0.queueID).get(__s38param0.recipeGroupID).get(__s38param0.type).find(function (__s40param0) {
        return __s40param0.level === __s38param0.level + 1;
      });
      if (__s38local1 && !__s38param0.learned) {
        __s38param0.learned = __s38local1.learned;
      }
    });
  };
  CastleCraftingData.prototype.reset = function () {
    this._craftingQueueVOs = [];
  };
  CastleCraftingData.prototype.getCraftingInfo = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCraftingInfoVO.C2SCraftingInfoVO());
  };
  CastleCraftingData.prototype.startCrafting = function (__s47param0) {
    var __s47local0 = this.currentCastleVO.kingdomID;
    var __s47local1 = this.currentCastleVO.objectId;
    var __s47local2 = this.getQueueVOByID(__s47param0.queueID).objectID;
    if (this.getQueueVOByID(__s47param0.queueID).buildingState.isFunctionally) {
      __dep_export_CostHelper.CostHelper.validateCostBuyCommand(__s47param0.input, new __dep_export_C2CraftingStartVO.C2CraftingStartVO(__s47local0, __s47local1, __s47local2, false, __s47param0.id));
    }
  };
  CastleCraftingData.prototype.cancelCrafting = function (__s50param0) {
    var __s50local0 = this.currentCastleVO.kingdomID;
    var __s50local1 = this.currentCastleVO.objectId;
    var __s50local2 = this.getQueueVOByID(__s50param0.queueID).objectID;
    if (this.getQueueVOByID(__s50param0.queueID).buildingState.isFunctionally) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCraftingCancelVO.C2SCraftingCancelVO(__s50local0, __s50local1, __s50local2, __s50param0.slotIndex, __s50param0.slotType));
    }
  };
  CastleCraftingData.prototype.skipCrafting = function (__s53param0) {
    var __s53local0 = this.currentCastleVO.kingdomID;
    var __s53local1 = this.currentCastleVO.objectId;
    var __s53local2 = this.getQueueVOByID(__s53param0.queueID).objectID;
    if (this.getQueueVOByID(__s53param0.queueID).buildingState.isFunctionally) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCraftingSkipVO.C2SCraftingSkipVO(__s53local0, __s53local1, __s53local2, __s53param0.slotIndex, __s53param0.slotType, __s53param0.getAdjustedSkipCostC2()));
    }
  };
  CastleCraftingData.prototype.buySlot = function (__s56param0) {
    var __s56local0 = this.currentCastleVO.kingdomID;
    var __s56local1 = this.currentCastleVO.objectId;
    var __s56local2 = this.getQueueVOByID(__s56param0.queueID).objectID;
    if (this.getQueueVOByID(__s56param0.queueID).buildingState.isFunctionally) {
      var __s56local3 = [__s56param0.slotIndex];
      for (var __s56local4 = __s56param0.previousSlot(); __s56local4 && __s56local4.isLocked();) {
        __s56local3.unshift(__s56local4.slotIndex);
        __s56local4 = __s56local4.previousSlot();
      }
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCraftingUnlockVO.C2SCraftingUnlockVO(__s56local0, __s56local1, __s56local2, __s56local3, __s56param0.slotType));
    }
  };
  CastleCraftingData.prototype.moveQueueSlot = function (__s61param0, __s61param1) {
    var __s61local0 = this.currentCastleVO.kingdomID;
    var __s61local1 = this.currentCastleVO.objectId;
    var __s61local2 = this.getQueueVOByID(__s61param0.queueID).objectID;
    if (this.getQueueVOByID(__s61param0.queueID).buildingState.isFunctionally) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCraftingQueueMoveVO.C2SCraftingQueueMoveVO(__s61local0, __s61local1, __s61local2, __s61param0.slotIndex, __s61param1));
    }
  };
  CastleCraftingData.prototype.getQueueXMLByID = function (__s64param0) {
    return this._craftingQueueXMLs.get(__s64param0);
  };
  CastleCraftingData.prototype.getQueueVOByID = function (__s66param0) {
    var __s66local0 = this;
    return this._craftingQueueVOs.find(function (__s68param0) {
      return __s68param0.queueID === __s66param0 && __s68param0.kingdomID === __s66local0.currentCastleVO.kingdomID && __s68param0.areaID === __s66local0.currentCastleVO.objectId;
    });
  };
  CastleCraftingData.prototype.getRecipeByID = function (__s70param0) {
    return this._craftingRecipeVOs.get(__s70param0);
  };
  CastleCraftingData.prototype.getRecipeClustersByQueue = function (__s72param0) {
    return this._craftingRecipeClusters.get(__s72param0);
  };
  CastleCraftingData.prototype.getAvailableCastleList = function (__s74param0) {
    var __s74local0 = this;
    return __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastlesInKingdoms().filter(function (__s76param0) {
      return __s74local0._craftingQueueVOs.some(function (__s78param0) {
        return __s78param0.queueID == __s74param0 && __s78param0.kingdomID === __s76param0.kingdomID && __s78param0.areaID === __s76param0.objectId && __s78param0.buildingState.isFunctionally;
      });
    });
  };
  Object.defineProperty(CastleCraftingData.prototype, "currentCastleVO", {
    get: function () {
      this._currentCastleVO ||= __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
      return this._currentCastleVO;
    },
    set: function (__s82param0) {
      this._currentCastleVO = __s82param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleCraftingData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleCraftingData = __s0local0;
