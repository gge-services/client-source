Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CraftingSlotVO = require("gge-module:export_CraftingSlotVO");
var __s0local0 = function () {
  function CraftingQueueVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    this._buildingState = null;
    this._craftingQueueXML = __dep_export_CastleModel.CastleModel.craftingData.getQueueXMLByID(__s3param3);
    this._kingdomID = __s3param0;
    this._areaID = __s3param1;
    this._objectID = __s3param2;
    this._buildingState = __s3param4;
    this._craftingEffects = __s3param5;
    this._productionSlots = [];
    this._queueSlots = [];
    for (var __s3local0 = 0; __s3local0 < this.permanentProductionSlots; __s3local0++) {
      this._productionSlots.push(new __dep_export_CraftingSlotVO.CraftingSlotVO(this.queueID, __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_PRODUCTION, this._productionSlots.length, false));
    }
    for (__s3local0 = 0; __s3local0 < this.temporaryProductionSlots; __s3local0++) {
      this._productionSlots.push(new __dep_export_CraftingSlotVO.CraftingSlotVO(this.queueID, __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_PRODUCTION, this._productionSlots.length, true));
    }
    for (__s3local0 = 0; __s3local0 < this.permanentQueueSlots; __s3local0++) {
      this._queueSlots.push(new __dep_export_CraftingSlotVO.CraftingSlotVO(this.queueID, __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_QUEUE, __s3local0, false));
    }
    for (__s3local0 = 0; __s3local0 < this.temporaryQueueSlots; __s3local0++) {
      this._queueSlots.push(new __dep_export_CraftingSlotVO.CraftingSlotVO(this.queueID, __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_QUEUE, this.permanentQueueSlots + __s3local0, true));
    }
  }
  CraftingQueueVO.prototype.parseServerData = function (__s13param0, __s13param1) {
    this.getSlotsByType(__s13param0).forEach(function (__s15param0) {
      __s15param0.reset();
      if (__s13param1.CRID && __s13param1.CRID.length > 0) {
        __s15param0.recipeID = __s13param1.CRID.shift();
      }
      if (__s13param1.RCT && __s13param1.RCT.length > 0) {
        __s15param0.setRemainingProductionTime(__s13param1.RCT.shift());
      }
      if (__s13param1.RUT && __s13param1.RUT.length > 0 && __s15param0.isTemporarySlot) {
        __s15param0.setRemainingUnlockTime(__s13param1.RUT.shift());
      }
      if (__s13param1.BV && __s13param1.BV.length > 0) {
        __s15param0.boosterValue = __s13param1.BV.shift();
      } else {
        __s15param0.boosterValue = 0;
      }
    });
  };
  Object.defineProperty(CraftingQueueVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "areaID", {
    get: function () {
      return this._areaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "objectID", {
    get: function () {
      return this._objectID;
    },
    set: function (__s28param0) {
      this._objectID = __s28param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "id", {
    get: function () {
      return this._craftingQueueXML.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "queueID", {
    get: function () {
      return this._craftingQueueXML.queueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "buildingState", {
    get: function () {
      return this._buildingState;
    },
    set: function (__s36param0) {
      this._buildingState = __s36param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "craftingEffects", {
    get: function () {
      return this._craftingEffects;
    },
    set: function (__s40param0) {
      this._craftingEffects = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "permanentProductionSlots", {
    get: function () {
      return this._craftingQueueXML.permanentProductionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "temporaryProductionSlots", {
    get: function () {
      return this._craftingQueueXML.temporaryProductionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "productionSlotUnlockCostC1", {
    get: function () {
      return this._craftingQueueXML.productionSlotUnlockCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "productionSlotUnlockDuration", {
    get: function () {
      return this._craftingQueueXML.productionSlotUnlockDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "permanentQueueSlots", {
    get: function () {
      return this._craftingQueueXML.permanentQueueSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "temporaryQueueSlots", {
    get: function () {
      return this._craftingQueueXML.temporaryQueueSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "queueSlotUnlockCostC1", {
    get: function () {
      return this._craftingQueueXML.queueSlotUnlockCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "queueSlotUnlockDuration", {
    get: function () {
      return this._craftingQueueXML.queueSlotUnlockDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "productionSlots", {
    get: function () {
      return this._productionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "hasFreeUnlockedSlots", {
    get: function () {
      return this.productionSlots.concat(this.queueSlots).some(function (__s62param0) {
        return !__s62param0.isFilled() && !__s62param0.isLocked();
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "hasFreeLockedSlots", {
    get: function () {
      return this.productionSlots.concat(this.queueSlots).some(function (__s66param0) {
        return __s66param0.isTemporarySlot && __s66param0.isLocked() && !__s66param0.isFilled();
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "nextFreeLockedSlot", {
    get: function () {
      return this.productionSlots.concat(this.queueSlots).find(function (__s70param0) {
        return __s70param0.isTemporarySlot && __s70param0.isLocked() && !__s70param0.isFilled();
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "queueSlots", {
    get: function () {
      return this._queueSlots;
    },
    enumerable: true,
    configurable: true
  });
  CraftingQueueVO.prototype.getSlotsByType = function (__s74param0) {
    if (__s74param0 == __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_PRODUCTION) {
      return this.productionSlots;
    } else {
      return this.queueSlots;
    }
  };
  CraftingQueueVO.prototype.isProducing = function () {
    return this.productionSlots.some(function (__s80param0) {
      return __s80param0.isFilled();
    });
  };
  CraftingQueueVO.QUEUE_REFINERY = 1;
  CraftingQueueVO.QUEUE_TOOLSMITH = 2;
  CraftingQueueVO.QUEUE_DRAGONHOARD = 3;
  CraftingQueueVO.QUEUE_DRAGONBREATH = 4;
  return CraftingQueueVO;
}();
exports.CraftingQueueVO = __s0local0;
