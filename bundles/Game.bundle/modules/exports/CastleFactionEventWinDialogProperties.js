Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleFactionEventWinDialogProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0._hasWon = false;
    __s3local0._factionWonID = 0;
    __s3local0._rank = 0;
    __s3local0._points = 0;
    __s3local0._playerFactionID = 0;
    __s3local0._boobyPricePointsNeeded = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseParamObject(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionEventWinDialogProperties, __s1param0);
  CastleFactionEventWinDialogProperties.prototype.parseParamObject = function (__s5param0) {
    this._hasWon = parseInt(__s5param0.W) == 1;
    this._rank = __dep_exact_f855840627e6e145.int(__s5param0.R);
    this._boobyPricePointsNeeded = __dep_exact_f855840627e6e145.int(__s5param0.BS);
    this._points = __dep_exact_f855840627e6e145.int(__s5param0.S);
    this._factionWonID = this.factionWonID;
    this._playerFactionID = __dep_exact_f855840627e6e145.int(__s5param0.FID);
    this._rewardList = __dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(__dep_exact_9e901e8e2483a22f_1.TextValide.parseChatJSONMessage(__s5param0.RID), false, "+");
  };
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "hasWon", {
    get: function () {
      return this._hasWon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "points", {
    get: function () {
      return this._points;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "factionWonID", {
    get: function () {
      return this._factionWonID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "boobyPricePointsNeeded", {
    get: function () {
      return this._boobyPricePointsNeeded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "playerFactionID", {
    get: function () {
      return this._playerFactionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventWinDialogProperties.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionEventWinDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleFactionEventWinDialogProperties = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
