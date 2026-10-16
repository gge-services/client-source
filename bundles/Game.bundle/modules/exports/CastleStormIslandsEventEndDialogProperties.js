Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsEventEndDialogProperties(__s3param0, __s3param1, __s3param2 = -1, __s3param3 = -1, __s3param4 = 0, __s3param5 = -1, __s3param6 = -1, __s3param7 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    if (__s3param0) {
      __s3local0._allianceRewards = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(__s3param0);
    }
    if (__s3param1) {
      __s3local0._playerRewards = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(__s3param1);
    }
    __s3local0._playerRank = __s3param2;
    __s3local0._allianceRank = __s3param3;
    __s3local0._playerPoints = __s3param4;
    __s3local0._alliancePoints = __s3param5;
    __s3local0._isAlliance = __s3param7;
    __s3local0._titleVO = __s3param6 != -1 ? __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(__s3param6) : null;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsEventEndDialogProperties, __s1param0);
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "isAlliance", {
    get: function () {
      return this._isAlliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "allianceRewards", {
    get: function () {
      return this._allianceRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "playerRewards", {
    get: function () {
      return this._playerRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "playerRank", {
    get: function () {
      return this._playerRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "playerPoints", {
    get: function () {
      return this._playerPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "alliancePoints", {
    get: function () {
      return this._alliancePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "titleVO", {
    get: function () {
      return this._titleVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleStormIslandsEventEndDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleStormIslandsEventEndDialogProperties = __s0local0;
