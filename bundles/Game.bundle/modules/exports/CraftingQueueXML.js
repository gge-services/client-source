Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function CraftingQueueXML(__s3param0 = null) {
    if (__s3param0) {
      this.fillFromParamXml(__s3param0);
    }
  }
  CraftingQueueXML.prototype.fillFromParamXml = function (__s6param0) {
    this._id = parseInt(__s6param0.craftingQueueId || "0");
    this._queueID = parseInt(__s6param0.queueTypeId || "0");
    this._permanentProductionSlots = parseInt(__s6param0.permanentProductionSlots || "0");
    this._productionSlotUnlockCostC1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6param0.productionSlotUnlockCostC1 || "", ",");
    this._temporaryProductionSlots = this._productionSlotUnlockCostC1.length;
    this._productionSlotUnlockDuration = parseInt(__s6param0.productionSlotUnlockDuration || "0");
    this._permanentQueueSlots = parseInt(__s6param0.permanentQueueSlots || "0");
    this._queueSlotUnlockCostC1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6param0.queueSlotUnlockCostC1 || "", ",");
    this._temporaryQueueSlots = this._queueSlotUnlockCostC1.length;
    this._queueSlotUnlockDuration = parseInt(__s6param0.queueSlotUnlockDuration || "0");
  };
  Object.defineProperty(CraftingQueueXML.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "queueID", {
    get: function () {
      return this._queueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "permanentProductionSlots", {
    get: function () {
      return this._permanentProductionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "temporaryProductionSlots", {
    get: function () {
      return this._temporaryProductionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "productionSlotUnlockCostC1", {
    get: function () {
      return this._productionSlotUnlockCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "productionSlotUnlockDuration", {
    get: function () {
      return this._productionSlotUnlockDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "permanentQueueSlots", {
    get: function () {
      return this._permanentQueueSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "temporaryQueueSlots", {
    get: function () {
      return this._temporaryQueueSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "queueSlotUnlockCostC1", {
    get: function () {
      return this._queueSlotUnlockCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "queueSlotUnlockDuration", {
    get: function () {
      return this._queueSlotUnlockDuration;
    },
    enumerable: true,
    configurable: true
  });
  return CraftingQueueXML;
}();
exports.CraftingQueueXML = __s0local0;
