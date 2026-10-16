Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function CollectorEventRewardVO(__s3param0) {
    this._minCurrencyAmount = 0;
    this._eventOptionID = 0;
    this._id = 0;
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("collectorEventRewardsID", __s3param0, "0", true));
    this._eventOptionID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventOptionID", __s3param0, "0", true));
    this._minCurrencyAmount = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minCurrencyAmount", __s3param0, "0", true));
    var __s3local0 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s3param0, "0", true));
    this._collectable = __dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(__s3local0.toString(), true);
    this._collectable.sort(__dep_export_ClientConstSort.ClientConstSort.sortCombinedEventRewards);
  }
  Object.defineProperty(CollectorEventRewardVO.prototype, "collectable", {
    get: function () {
      return this._collectable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventRewardVO.prototype, "minCurrencyAmount", {
    get: function () {
      return this._minCurrencyAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventRewardVO.prototype, "eventOptionID", {
    get: function () {
      return this._eventOptionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventRewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  return CollectorEventRewardVO;
}();
exports.CollectorEventRewardVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
