Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleHandleSeasonDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._seasonEventVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHandleSeasonDialogProperties, __s1param0);
  CastleHandleSeasonDialogProperties.prototype.hasTimer = function () {
    return true;
  };
  CastleHandleSeasonDialogProperties.prototype.getRemainingTime = function () {
    if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO != null) {
      return __dep_exact_f855840627e6e145.int(this._seasonEventVO.remainingEventTimeInSeconds);
    } else {
      return 0;
    }
  };
  CastleHandleSeasonDialogProperties.prototype.getTitleString = function () {
    return this._seasonEventVO.seasonNameString;
  };
  CastleHandleSeasonDialogProperties.prototype.getName = function () {
    return this._seasonEventVO.eventType;
  };
  CastleHandleSeasonDialogProperties.prototype.getBackgroundSkinClassName = function () {
    return "SeasonDialogBackground_" + this._seasonEventVO.eventId;
  };
  CastleHandleSeasonDialogProperties.prototype.getSpaceID = function () {
    return this._seasonEventVO.mapID;
  };
  CastleHandleSeasonDialogProperties.prototype.getCrestLeft = function () {
    return __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.getCrusadeCrest(this._seasonEventVO.eventId);
  };
  CastleHandleSeasonDialogProperties.prototype.getCrestRight = function () {
    return this.getCrestLeft();
  };
  CastleHandleSeasonDialogProperties.prototype.isUnlocked = function () {
    return !this._seasonEventVO.isLocked;
  };
  CastleHandleSeasonDialogProperties.prototype.getFirstSeasonReward = function () {
    return this._seasonEventVO.rewardList.getItemByIndexSave(0);
  };
  CastleHandleSeasonDialogProperties.prototype.getEventId = function () {
    return __dep_exact_f855840627e6e145.int(this._seasonEventVO.eventId);
  };
  Object.defineProperty(CastleHandleSeasonDialogProperties.prototype, "seasonEventVO", {
    get: function () {
      return this._seasonEventVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHandleSeasonDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleHandleSeasonDialogProperties = __s0local0;
var __dep_export_CastleNPCOwnerFactory = require("gge-module:export_CastleNPCOwnerFactory");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleHandleSpaceDialogProperties");
