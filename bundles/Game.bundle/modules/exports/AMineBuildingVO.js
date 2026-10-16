Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __s0local0 = function (__s1param0) {
  function AMineBuildingVO() {
    var __s3local0 = this;
    __s3local0._mineTypeId = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AMineBuildingVO, __s1param0);
  AMineBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._mineTypeId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("mineTypeID", __s5param0));
  };
  Object.defineProperty(AMineBuildingVO.prototype, "isCharging", {
    get: function () {
      return this.mineState == __dep_export_CastleMineData.CastleMineData.STATE_RECHARGING;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "isEmpty", {
    get: function () {
      return this.mineState == __dep_export_CastleMineData.CastleMineData.STATE_EMPTY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "isFull", {
    get: function () {
      return this.mineState == __dep_export_CastleMineData.CastleMineData.STATE_COLLECTABLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "canBeDisassembled", {
    get: function () {
      return this.mineState == __dep_export_CastleMineData.CastleMineData.STATE_EMPTY;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "canBeDisassembled").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  AMineBuildingVO.prototype.getVisualClassName = function () {
    this._mineState = __dep_export_CastleModel.CastleModel.mineData.getMineStateByObjectId(this.objectId);
    return __s1param0.prototype.getVisualClassName.call(this) + "_" + this.mineState;
  };
  AMineBuildingVO.prototype.getPercentRechargingCompletion = function () {
    return __dep_export_CastleModel.CastleModel.mineData.getPercentRechargingCompletion(this.objectId, this.mineTypeId);
  };
  AMineBuildingVO.prototype.getRestLootAmount = function () {
    return __dep_export_CastleModel.CastleModel.mineData.getRestAmountByMineID(this.objectId, this.mineTypeId);
  };
  AMineBuildingVO.prototype.mineStateChanged = function () {
    var __s23local0 = __dep_export_CastleModel.CastleModel.mineData.getMineStateByObjectId(this.objectId);
    return this.mineState != __s23local0 && (this._mineState = __s23local0, true);
  };
  Object.defineProperty(AMineBuildingVO.prototype, "canBeCollected", {
    get: function () {
      return this.isFull && this.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED;
    },
    enumerable: true,
    configurable: true
  });
  AMineBuildingVO.prototype.getTimeLeftForCollect = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.mineData.getRemainingRechargeTime(this.objectId));
  };
  Object.defineProperty(AMineBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return this.canBeCollected;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "isClickAvailable").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return !this.isClickAvailable;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "isRingmenuAvailable").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "mineTypeId", {
    get: function () {
      return this._mineTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "mineState", {
    get: function () {
      return this._mineState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "mineVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.mineData.getMineVOByObjectID(this.mineTypeId);
    },
    enumerable: true,
    configurable: true
  });
  return AMineBuildingVO;
}(__dep_export_AEffectBuildingVO.AEffectBuildingVO);
exports.AMineBuildingVO = __s0local0;
var __dep_export_CastleMineData = require("gge-module:export_CastleMineData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
