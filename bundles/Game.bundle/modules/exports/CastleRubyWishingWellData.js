Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SWishingWellCommandVO = require("gge-module:export_C2SWishingWellCommandVO");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRubyWishingWellVO = require("gge-module:export_CastleRubyWishingWellVO");
var __dep_export_CastleXmlData = require("gge-module:export_CastleXmlData");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function CastleRubyWishingWellData(__s3param0) {
    var __s3local0 = this;
    __s3local0._remainingSeconds = -1;
    __s3local0._endTime = -1;
    __s3local0.currentLevel = -1;
    __s3local0.isWaitingForCollectResponse = false;
    __s3local0.waitingForServerResponse = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRubyWishingWellData, __s1param0);
  Object.defineProperty(CastleRubyWishingWellData.prototype, "remainingSeconds", {
    get: function () {
      return this._remainingSeconds;
    },
    set: function (__s7param0) {
      this._remainingSeconds = __s7param0;
      this._endTime = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC + __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleRubyWishingWellData.prototype.isReadyToStart = function () {
    return this._remainingSeconds == -1;
  };
  CastleRubyWishingWellData.prototype.isReadyToCollect = function () {
    return this._remainingSeconds == 0;
  };
  Object.defineProperty(CastleRubyWishingWellData.prototype, "endTime", {
    get: function () {
      return this._endTime;
    },
    enumerable: true,
    configurable: true
  });
  CastleRubyWishingWellData.prototype.getXmlList = function (__s15param0) {
    return __s15param0.wishingwells;
  };
  CastleRubyWishingWellData.prototype.getNewNode = function () {
    return new __dep_export_CastleRubyWishingWellVO.CastleRubyWishingWellVO();
  };
  CastleRubyWishingWellData.prototype.getCurrentNode = function () {
    return this.getNode(this.currentLevel);
  };
  CastleRubyWishingWellData.prototype.parse_RWW = function (__s21param0) {
    if (__s21param0) {
      var __s21local0 = this.currentLevel;
      this.currentLevel = __dep_exact_f855840627e6e145.int(__s21param0.L);
      this._currentVO = this.getCurrentNode();
      this.remainingSeconds = __s21param0.RT;
      this.waitingForServerResponse = false;
      var __s21local1 = require("gge-module:export_Iso").Iso;
      if (__s21local0 != this.currentLevel && __s21local1.controller.dataUpdater) {
        __s21local1.controller.dataUpdater.updateRubyWishWell();
      } else {
        this.dispatchEvent(new __s0local0(CastleRubyWishingWellData.UPDATE));
      }
    }
  };
  CastleRubyWishingWellData.prototype.isRunning = function () {
    return !this.isReadyToCollect() && !this.isReadyToStart();
  };
  CastleRubyWishingWellData.prototype.getPercentageFinished = function () {
    if (this._currentVO) {
      return Math.max(Math.min(1 - this._remainingSeconds / this._currentVO.waitingTime, 1), 0);
    } else {
      return 0;
    }
  };
  CastleRubyWishingWellData.prototype.getRemainingSecondsCalculated = function () {
    return __dep_exact_f855840627e6e145.int(Math.max(0, this._endTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC));
  };
  CastleRubyWishingWellData.prototype.getCurrentWodId = function () {
    if (this._currentVO) {
      return this._currentVO.wodId;
    } else {
      return CastleRubyWishingWellData.MIN_WOD_ID;
    }
  };
  CastleRubyWishingWellData.prototype.requestFreshWishingWellData = function () {
    if (!this.waitingForServerResponse) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SWishingWellCommandVO.C2SWishingWellCommandVO(__dep_exact_26a421b704832cff.WishingWellConst.OPTION_UPDATE_INFO_WISHING_WELL));
      this.waitingForServerResponse = true;
    }
  };
  CastleRubyWishingWellData.UPDATE = "WISHING_WELL_UPDATE";
  CastleRubyWishingWellData.MIN_WOD_ID = 601;
  CastleRubyWishingWellData.MAX_WOD_ID = 611;
  CastleRubyWishingWellData.MULTIPLIER = 2;
  return CastleRubyWishingWellData;
}(__dep_export_CastleXmlData.CastleXmlData);
exports.CastleRubyWishingWellData = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IUpdatable");
