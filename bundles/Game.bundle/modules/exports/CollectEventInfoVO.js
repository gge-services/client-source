Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function CollectEventInfoVO(__s3param0) {
    this._collectorEventOptionID = 0;
    this._collectorCurrencyID = 0;
    this._collectorKeyCurrencyID = 0;
    this._collectorKeyBoost = 0;
    this._collectorKeyLimit = 0;
    this._collectorKeyPackageID = 0;
    this._baseCollectorBoost = 0;
    this._eventStartCurrencyAmount = 0;
    this._dailyCurrencyIncrease = 0;
    this._collectorEventColor = 0;
    this._rewards = [];
    this._collectorEventOptionID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("collectorEventOptionID", __s3param0, "0", true));
    this._collectorCurrencyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("collectorCurrencyID", __s3param0, "0", true));
    this._collectorKeyCurrencyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("collectorKeyCurrencyID", __s3param0, "0", true));
    this._collectorKeyBoost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("collectorKeyBoost", __s3param0, "0", true));
    this._collectorKeyLimit = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("collectorKeyLimit", __s3param0, "0", true));
    this._collectorKeyPackageID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("collectorKeyPackageID", __s3param0, "0", true));
    this._baseCollectorBoost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("baseCollectorBoost", __s3param0, "0", true));
    this._eventStartCurrencyAmount = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventStartCurrencyAmount", __s3param0, "0", true));
    this._dailyCurrencyIncrease = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("dailyCurrencyIncrease", __s3param0, "0", true));
    this._collectorEventSkinName = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("collectorEventSkinName", __s3param0, "Default", true);
    this._collectorEventColor = parseInt("0x" + __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("collectorEventColor", __s3param0, "FF88FF"));
  }
  CollectEventInfoVO.prototype.addCollectEventRewardVO = function (__s5param0) {
    this._rewards.push(__s5param0);
    this._rewards.sort(this.bindFunction(this.sortByMinPoints));
  };
  CollectEventInfoVO.prototype.sortByMinPoints = function (__s7param0, __s7param1) {
    return __s7param0.minCurrencyAmount - __s7param1.minCurrencyAmount;
  };
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorEventOptionID", {
    get: function () {
      return this._collectorEventOptionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorCurrencyID", {
    get: function () {
      return this._collectorCurrencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorKeyCurrencyID", {
    get: function () {
      return this._collectorKeyCurrencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorKeyBoost", {
    get: function () {
      return this._collectorKeyBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorKeyLimit", {
    get: function () {
      return this._collectorKeyLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorKeyPackageID", {
    get: function () {
      return this._collectorKeyPackageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "baseCollectorBoost", {
    get: function () {
      return this._baseCollectorBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "eventStartCurrencyAmount", {
    get: function () {
      return this._eventStartCurrencyAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "dailyCurrencyIncrease", {
    get: function () {
      return this._dailyCurrencyIncrease;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorEventSkinName", {
    get: function () {
      return this._collectorEventSkinName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventInfoVO.prototype, "collectorEventColor", {
    get: function () {
      return this._collectorEventColor;
    },
    enumerable: true,
    configurable: true
  });
  return CollectEventInfoVO;
}();
exports.CollectEventInfoVO = __s0local0;
