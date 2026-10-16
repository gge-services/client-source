Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_MonumentEvent = require("gge-module:export_MonumentEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_UpgradableLandmarkData = require("gge-module:export_UpgradableLandmarkData");
var __dep_export_MonumentLevelInfoVO = require("gge-module:export_MonumentLevelInfoVO");
var __s0local0 = function (__s1param0) {
  function CastleMonumentData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMonumentData, __s1param0);
  CastleMonumentData.prototype.parseXML = function (__s5param0) {
    this.levelInfoVOs = new Map();
    var __s5local0 = __s5param0.monuments;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = new __dep_export_MonumentLevelInfoVO.MonumentLevelInfoVO();
          __s5local4.parseXML(__s5local3);
          this.levelInfoVOs.set(__s5local4.level, __s5local4);
        }
      }
    }
  };
  CastleMonumentData.prototype.parseMRE = function (__s11param0) {
    if (__s11param0.MRS) {
      if (__s11param0.MRS < 0) {
        this.resetLandmarks();
      } else {
        this._remainingResetTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s11param0.MRS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
        this.resetComplete();
      }
    }
  };
  CastleMonumentData.prototype.getLevelInfoByLevel = function (__s16param0, __s16param1) {
    var __s16local0;
    if (this.levelInfoVOs && this.levelInfoVOs.get(__s16param0)) {
      __s16local0 = this.levelInfoVOs.get(__s16param0);
    }
    return __s16local0;
  };
  CastleMonumentData.prototype.getLevelInfoByPointsAchieved = function (__s19param0, __s19param1) {
    for (var __s19local0 = 1; this.levelInfoVOs.get(__s19local0) && __s19param0 >= this.levelInfoVOs.get(__s19local0).requiredPoints;) {
      __s19local0++;
    }
    return this.levelInfoVOs.get(__s19local0 - 1);
  };
  Object.defineProperty(CastleMonumentData.prototype, "remainingResetTime", {
    get: function () {
      return __dep_exact_f855840627e6e145.int((this._remainingResetTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) / __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    },
    enumerable: true,
    configurable: true
  });
  CastleMonumentData.prototype.resetLandmarks = function () {
    if (!this._alreadyReset) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_MonumentEvent.MonumentEvent(__dep_export_MonumentEvent.MonumentEvent.MONUMENTS_RESET_WARNING));
    }
    __s1param0.prototype.resetLandmarks.call(this);
  };
  Object.defineProperty(CastleMonumentData.prototype, "userList", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.monumentList;
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UpgradableLandmarkData.UpgradableLandmarkData.prototype, "userList").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleMonumentData.__initialize_static_members = function () {
    CastleMonumentData.MONUMENT_MAX_LEVELS = [__dep_exact_26a421b704832cff.MonumentConst.MAX_LEVEL_NORMAL_MONUMENT, __dep_exact_26a421b704832cff.MonumentConst.MAX_LEVEL_RARE_MONUMENT];
  };
  return CastleMonumentData;
}(__dep_export_UpgradableLandmarkData.UpgradableLandmarkData);
exports.CastleMonumentData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "IUpgradableLandmarkData");
__s0local0.__initialize_static_members();
