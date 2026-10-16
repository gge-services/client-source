Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function CraftingSlotVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._recipeID = -1;
    this._productionTimeStamp = -1;
    this._unlockTimeStamp = -1;
    this._boosterValue = 0;
    this._queueID = __s3param0;
    this._slotType = __s3param1;
    this._slotIndex = __s3param2;
    this._isTemporarySlot = __s3param3;
  }
  Object.defineProperty(CraftingSlotVO.prototype, "queueID", {
    get: function () {
      return this._queueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "slotType", {
    get: function () {
      return this._slotType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "slotIndex", {
    get: function () {
      return this._slotIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "isTemporarySlot", {
    get: function () {
      return this._isTemporarySlot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "isProductionSlot", {
    get: function () {
      return this._slotType == CraftingSlotVO.SLOT_TYPE_PRODUCTION;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "recipeID", {
    get: function () {
      return this._recipeID;
    },
    set: function (__s17param0) {
      this._recipeID = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "boosterValue", {
    get: function () {
      return this._boosterValue;
    },
    set: function (__s21param0) {
      this._boosterValue = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "recipeVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.craftingData.getRecipeByID(this.recipeID);
    },
    enumerable: true,
    configurable: true
  });
  CraftingSlotVO.prototype.setRemainingProductionTime = function (__s25param0) {
    this._productionTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s25param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
  };
  CraftingSlotVO.prototype.setRemainingUnlockTime = function (__s27param0) {
    this._unlockTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s27param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
  };
  CraftingSlotVO.prototype.getRemainingProductionTime = function () {
    if (this._productionTimeStamp > 0) {
      return (this._productionTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    } else if (this.recipeVO) {
      return this.recipeVO.craftingDuration;
    } else {
      return 0;
    }
  };
  CraftingSlotVO.prototype.getRemainingUnlockTime = function () {
    return (this._unlockTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
  };
  CraftingSlotVO.prototype.getRemainingProductionTimeRatio = function () {
    if (!this.recipeVO) {
      return 0;
    }
    var __s36local0 = this.recipeVO.craftingDuration;
    var __s36local1 = this.getRemainingProductionTime();
    return __dep_exact_9e901e8e2483a22f.MathBase.clamp((__s36local0 - __s36local1) / __s36local0, 0, 1);
  };
  CraftingSlotVO.prototype.isFilled = function () {
    return this._recipeID > 0 && this.getRemainingProductionTime() > 0;
  };
  CraftingSlotVO.prototype.isLocked = function () {
    return this._isTemporarySlot && this.getRemainingUnlockTime() <= 0;
  };
  CraftingSlotVO.prototype.getUnlockDuration = function () {
    var __s43local0 = __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(this._queueID);
    if (this.isProductionSlot) {
      return __s43local0.productionSlotUnlockDuration;
    } else {
      return __s43local0.queueSlotUnlockDuration;
    }
  };
  CraftingSlotVO.prototype.getUnlockCostC1 = function () {
    var __s47local0 = 0;
    if (this.previousSlot() && this.previousSlot().isLocked()) {
      __s47local0 += this.previousSlot().getUnlockCostC1();
    }
    var __s47local1 = __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(this._queueID);
    return __s47local0 += this.isProductionSlot ? __s47local1.productionSlotUnlockCostC1[this._slotIndex - __s47local1.permanentProductionSlots] : __s47local1.queueSlotUnlockCostC1[this._slotIndex - __s47local1.permanentQueueSlots];
  };
  CraftingSlotVO.prototype.getAdjustedSkipCostC2 = function () {
    if (this.recipeVO) {
      return Math.ceil((1 - this.getRemainingProductionTimeRatio()) * this.recipeVO.skipCostC2);
    } else {
      return 0;
    }
  };
  CraftingSlotVO.prototype.reset = function () {
    this._recipeID = -1;
    this._productionTimeStamp = -1;
    this._unlockTimeStamp = -1;
  };
  Object.defineProperty(CraftingSlotVO.prototype, "queueVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(this._queueID);
    },
    enumerable: true,
    configurable: true
  });
  CraftingSlotVO.prototype.nextSlot = function () {
    var __s58local0 = this;
    return this.queueVO.getSlotsByType(this._slotType).find(function (__s60param0) {
      return __s60param0._slotIndex == __s58local0._slotIndex + 1;
    });
  };
  CraftingSlotVO.prototype.previousSlot = function () {
    var __s62local0 = this;
    return this.queueVO.getSlotsByType(this._slotType).find(function (__s64param0) {
      return __s64param0._slotIndex == __s62local0._slotIndex - 1;
    });
  };
  CraftingSlotVO.prototype.buy = function () {
    __dep_export_CastleModel.CastleModel.craftingData.buySlot(this);
  };
  CraftingSlotVO.prototype.cancel = function () {
    __dep_export_CastleModel.CastleModel.craftingData.cancelCrafting(this);
  };
  CraftingSlotVO.prototype.rubySkip = function () {
    __dep_export_CastleModel.CastleModel.craftingData.skipCrafting(this);
  };
  CraftingSlotVO.SLOT_TYPE_PRODUCTION = 1;
  CraftingSlotVO.SLOT_TYPE_QUEUE = 2;
  return CraftingSlotVO;
}();
exports.CraftingSlotVO = __s0local0;
