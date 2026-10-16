Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SKingdomGoodsTransferVO = require("gge-module:export_C2SKingdomGoodsTransferVO");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTransferResToKingdomProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._targetKingdomVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTransferResToKingdomProperties, __s1param0);
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "infoText", {
    get: function () {
      return "dialog_kingdom_sendRes_info";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "travelTime", {
    get: function () {
      return this.kingdomVO.ressourceTravelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "exceptingKingdomIDs", {
    get: function () {
      return [this.kingdomVO.kID, __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID];
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferResToKingdomProperties.prototype.isSpecialEvent = function (__s11param0) {
    return false;
  };
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "travelTaxRate", {
    get: function () {
      return (100 - this.kingdomVO.boostedResourceTravelTaxRate) / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "targetResources", {
    get: function () {
      return this.targetDetailedCastleVO.getResourcesAsCollectableList();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "maxStorage", {
    get: function () {
      return this.targetDetailedCastleVO.maxResourceStorageAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "hasInsufficientTime", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "kingdomVO", {
    get: function () {
      return this._targetKingdomVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "targetDetailedCastleVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(this.kingdomVO.kID);
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferResToKingdomProperties.prototype.getSendResourcesCommand = function (__s25param0, __s25param1, __s25param2) {
    __dep_export_CastleModel.CastleModel.treasureMapData.dispatchEvent(new __dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.RESOURCE_TRANSFER_WERE_SEND, null));
    return new __dep_export_C2SKingdomGoodsTransferVO.C2SKingdomGoodsTransferVO(__s25param0, __s25param1, this.kingdomVO.kID, __s25param2);
  };
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "hideTabs", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "resourceStorageCapacity", {
    get: function () {
      return this.targetDetailedCastleVO.createStorageList();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "targetInitialized", {
    get: function () {
      return this.targetDetailedCastleVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResToKingdomProperties.prototype, "isSubscriptionBuffed", {
    get: function () {
      return this.kingdomVO.isSubscriptionBuffed;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTransferResToKingdomProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleTransferResToKingdomProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITransferResourcesDialogProperties");
