Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function MultiEventRewardEventInfoVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5 = null) {
    var __s3local0 = this;
    __s3local0._eventID = 0;
    __s3local0._topXCount = 0;
    __s3local0._rank = 0;
    __s3local0._score = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._eventID = __s3param0;
    __s3local0._rewards = __s3param1;
    __s3local0._rank = __s3param2;
    __s3local0._score = __s3param3;
    __s3local0._topXCount = __s3param4;
    __s3local0._skin = __s3param5;
    __s3local0._rewards.combineDuplicatedItems();
    __s3local0._rewards.sort(__dep_export_ClientConstSort.ClientConstSort.sortCombinedEventRewards);
    __s3local0._eventTitle = __s3local0.setEventTitleByEventID(__s3local0._eventID);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MultiEventRewardEventInfoVO, __s1param0);
  MultiEventRewardEventInfoVO.prototype.setEventTitleByEventID = function (__s5param0) {
    var __s5local0 = __dep_export_CastleModel.CastleModel.specialEventData.createEventVOByEventID(__s5param0);
    if (this._skin && __dep_exact_81dacdf05bd32292.instanceOfClass(__s5local0, "LongTermPointEventEventVO")) {
      __s5local0.skin = this._skin;
    }
    return __s5local0.eventBuildingNameId;
  };
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "eventTitle", {
    get: function () {
      return this._eventTitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "score", {
    get: function () {
      return this._score;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiEventRewardEventInfoVO.prototype, "topXCount", {
    get: function () {
      return this._topXCount;
    },
    enumerable: true,
    configurable: true
  });
  return MultiEventRewardEventInfoVO;
}(__dep_exact_9e901e8e2483a22f.ScrollItemVO);
exports.MultiEventRewardEventInfoVO = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
