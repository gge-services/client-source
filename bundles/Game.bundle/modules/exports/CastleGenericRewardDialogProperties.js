Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_LongTermPointEventSkin = require("gge-module:export_LongTermPointEventSkin");
var __s0local0 = function (__s1param0) {
  function CastleGenericRewardDialogProperties(__s3param0, __s3param1, __s3param2 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isFirstPrize = false;
    __s3local0._isTopX = false;
    __s3local0._points = 0;
    __s3local0._topXCount = 0;
    __s3local0._ownRank = 0;
    __s3local0._grantType = 0;
    __s3local0._optionID = 0;
    __s3local0._isFirstPrize = __s3param0;
    __s3local0._isTopX = __s3param2;
    __s3local0._points = __dep_exact_f855840627e6e145.int(__s3param1.OP ? __s3param1.OP : -1);
    __s3local0._ownRank = __dep_exact_f855840627e6e145.int(__s3param1.OR ? __s3param1.OR : -1);
    __s3local0._topXCount = __dep_exact_f855840627e6e145.int(__s3param1.TX ? __s3param1.TX : -1);
    __s3local0._optionID = __dep_exact_f855840627e6e145.int(__s3param1.EOID ? __s3param1.EOID : -1);
    __s3local0._rewardList = __dep_export_CastlePopUpHelper.CastlePopUpHelper.createRewardList(__s3param1);
    __s3local0._grantType = __s3param1.GT ? parseInt(__s3param1.GT) : -1;
    __s3local0.getSkinBySkinId(__s3param1.SID);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericRewardDialogProperties, __s1param0);
  CastleGenericRewardDialogProperties.prototype.getSkinBySkinId = function (__s5param0) {
    this._skin = __s5param0 ? __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.getTypeById(__s5param0) : __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.DEFAULT;
  };
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "isFirstPrize", {
    get: function () {
      return this._isFirstPrize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    set: function (__s11param0) {
      this._rewardList = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "points", {
    get: function () {
      return this._points;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "ownRank", {
    get: function () {
      return this._ownRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "isTopX", {
    get: function () {
      return this._isTopX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "topXCount", {
    get: function () {
      return this._topXCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "skin", {
    get: function () {
      return this._skin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "grantType", {
    get: function () {
      return this._grantType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "optionID", {
    get: function () {
      return this._optionID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGenericRewardDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleGenericRewardDialogProperties = __s0local0;
var __dep_export_CastlePopUpHelper = require("gge-module:export_CastlePopUpHelper");
