Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_50aa1f1b16142f96 = require("gge-module:exact_50aa1f1b16142f96");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SBoosterInfoVO = require("gge-module:export_C2SBoosterInfoVO");
var __dep_export_C2SGetCastleProductionDataVO = require("gge-module:export_C2SGetCastleProductionDataVO");
var __dep_export_C2SShowPackageListVO = require("gge-module:export_C2SShowPackageListVO");
var __dep_export_C2SVIPInfoEvent = require("gge-module:export_C2SVIPInfoEvent");
var __dep_export_CastleVIPDataEvent = require("gge-module:export_CastleVIPDataEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleVIPData(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentVIPPoints = 0;
    __s3local0._maxVIPLevelReached = 0;
    __s3local0._vipTimeExpireTimestamp = 0;
    __s3local0._usedPremiumCommanders = 0;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this) || this;
    CastleVIPData.DISABLED_VIP_MODE_VO.parseConfigXML(__dep_exact_50aa1f1b16142f96.XML("<viplevel vipLevelID=\"0\" thresholdMin=\"" + -Number.MAX_VALUE + "\" thresholdMax=\"-1\"/>"));
    __s3local0.parseVIPLevels(__s3param0);
    __s3local0.parseVIPPackages(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVIPData, __s1param0);
  CastleVIPData.prototype.parseVIPPackages = function (__s5param0) {
    this._vipPackages = [];
    for (var __s5local0 = 0, __s5local1 = __s5param0.packages; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 != undefined) {
        var __s5local3 = __s5local2.vipPoints || "";
        var __s5local4 = __s5local2.vipTime || "";
        if (__s5local3.length > 0 || __s5local4.length > 0) {
          var __s5local5 = new __dep_export_VIPPackageVO.VIPPackageVO();
          __s5local5.fillFromParamXML(__s5local2);
          this._vipPackages.push(__s5local5);
        }
      }
    }
  };
  CastleVIPData.prototype.parseVIPLevels = function (__s11param0) {
    this._vipLevels = [];
    for (var __s11local0 = 0, __s11local1 = __s11param0.viplevels; __s11local0 < __s11local1.length; __s11local0++) {
      var __s11local2 = __s11local1[__s11local0];
      if (__s11local2 !== undefined) {
        var __s11local3 = new __dep_export_VIPLevelInfoVO.VIPLevelInfoVO();
        __s11local3.parseConfigXML(__s11local2);
        this._vipLevels.push(__s11local3);
      }
    }
    this._vipLevels.sort(this.bindFunction(this.sortVIPLevelByAscendingID));
  };
  CastleVIPData.prototype.sortVIPLevelByAscendingID = function (__s16param0, __s16param1) {
    return __s16param0.levelID - __s16param1.levelID;
  };
  CastleVIPData.prototype.parse_VIP = function (__s18param0) {
    if (__s18param0) {
      this._currentVIPPoints = __dep_exact_f855840627e6e145.int(__s18param0.VP);
      this._maxVIPLevelReached = __dep_exact_f855840627e6e145.int(__s18param0.VRL);
      this._usedPremiumCommanders = __dep_exact_f855840627e6e145.int(__s18param0.UPG);
      var __s18local0 = __dep_exact_f855840627e6e145.int(__s18param0.VRS);
      if (__s18local0 > CastleVIPData.NO_VIP_TIME) {
        this._vipTimeExpireTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s18local0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      } else {
        this._vipTimeExpireTimestamp = CastleVIPData.NO_VIP_TIME;
      }
      this.dispatchEvent(new __dep_export_CastleVIPDataEvent.CastleVIPDataEvent(__dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED));
    }
  };
  CastleVIPData.prototype.getVIPLevelInfoVOByPoints = function (__s23param0) {
    if (this._vipLevels != null) {
      for (var __s23local0 = 0, __s23local1 = this._vipLevels; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined && __s23local2.inPointRange(__s23param0)) {
          return __s23local2;
        }
      }
    }
    if (__s23param0 > 0) {
      return this._vipLevels[this._vipLevels.length - 1];
    } else {
      return null;
    }
  };
  CastleVIPData.prototype.getVIPLevelInfoVOByLevel = function (__s31param0) {
    if (this._vipLevels != null) {
      for (var __s31local0 = 0, __s31local1 = this._vipLevels; __s31local0 < __s31local1.length; __s31local0++) {
        var __s31local2 = __s31local1[__s31local0];
        if (__s31local2 !== undefined && __s31local2.levelID == __s31param0) {
          return __s31local2;
        }
      }
    }
    return null;
  };
  CastleVIPData.prototype.getPackages = function (__s37param0) {
    var __s37local0 = [];
    var __s37local1 = [170, 171, 172];
    var __s37local2 = [167, 168, 169];
    for (var __s37local3 = 0, __s37local4 = this._vipPackages; __s37local3 < __s37local4.length; __s37local3++) {
      var __s37local5 = __s37local4[__s37local3];
      if ((__s37param0 == __dep_export_CollectableEnum.CollectableEnum.VIP_POINTS ? __s37local2 : __s37local1).indexOf(__s37local5.packageID) >= 0) {
        __s37local0.push(__s37local5);
      }
    }
    return __s37local0;
  };
  Object.defineProperty(CastleVIPData.prototype, "currentActiveVIPLevel", {
    get: function () {
      if (this.vipModeActive) {
        return this.getVIPLevelInfoVOByPoints(this._currentVIPPoints);
      } else {
        return CastleVIPData.DISABLED_VIP_MODE_VO;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "currentVIPLevelVOReached", {
    get: function () {
      return this.getVIPLevelInfoVOByPoints(this._currentVIPPoints);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "vipModeActive", {
    get: function () {
      return this.remainingVIPTimeInSeconds > CastleVIPData.NO_VIP_TIME;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "maxVIPLevelReached", {
    get: function () {
      return this._maxVIPLevelReached;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "remainingPremiumCommanders", {
    get: function () {
      return this.currentActiveVIPLevel.freePremiumCommandersPerDay - this._usedPremiumCommanders;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "remainingVIPTimeInSeconds", {
    get: function () {
      return (this._vipTimeExpireTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) / __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "currentPremiumPoints", {
    get: function () {
      return this._currentVIPPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "currentVIPLevel", {
    get: function () {
      return this.getVIPLevelInfoVOByPoints(this._currentVIPPoints).levelID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "maxLevel", {
    get: function () {
      return this._vipLevels.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "maxLevelVO", {
    get: function () {
      return this.getVIPLevelInfoVOByLevel(this.maxLevel);
    },
    enumerable: true,
    configurable: true
  });
  CastleVIPData.prototype.maxPointPackagesBuyable = function (__s64param0) {
    var __s64local0 = __dep_exact_f855840627e6e145.int(this.maxLevelVO.maxVIPPoints - this.currentPremiumPoints);
    return Math.min(1000, Math.max(0, Math.ceil(__s64local0 / __s64param0)));
  };
  CastleVIPData.prototype.maxTimePackagesBuyable = function (__s66param0) {
    var __s66local0 = 0;
    __s66local0 = this.vipModeActive ? CastleVIPData.MAX_VIPTIME_SECONDS - this.remainingVIPTimeInSeconds : CastleVIPData.MAX_VIPTIME_SECONDS;
    return Math.min(1000, Math.max(0, Math.floor(__s66local0 / __s66param0)));
  };
  Object.defineProperty(CastleVIPData.prototype, "minBuyableVipTime", {
    get: function () {
      var __s68local0 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
      if (this._vipPackages != null) {
        for (var __s68local1 = 0, __s68local2 = this._vipPackages; __s68local1 < __s68local2.length; __s68local1++) {
          var __s68local3 = __s68local2[__s68local1];
          if (__s68local3 !== undefined) {
            var __s68local4 = __dep_exact_f855840627e6e145.int(__s68local3.reward.amount);
            if (__s68local4 > 0 && __s68local4 < __s68local0) {
              __s68local0 = __s68local4;
            }
          }
        }
      }
      return __s68local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleVIPData.prototype.executeUpdate = function (__s75param0) {
    if (this._vipTimeExpireTimestamp != CastleVIPData.NO_VIP_TIME && __s75param0 > this._vipTimeExpireTimestamp && (this._vipTimeExpireTimestamp = CastleVIPData.NO_VIP_TIME, __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SVIPInfoEvent.C2SVIPInfoEvent()), __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleProductionDataVO.C2SGetCastleProductionDataVO()), __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBoosterInfoVO.C2SBoosterInfoVO()), __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInMyCastle && __dep_export_Iso.Iso.data)) {
      var __s75local0 = !!__dep_export_Iso.Iso.data.objects.provider.getObjectAmountByType(__dep_export_IsoObjectEnum.IsoObjectEnum.BARRACKS);
      var __s75local1 = !!__dep_export_Iso.Iso.data.objects.provider.getObjectAmountByType(__dep_export_IsoObjectEnum.IsoObjectEnum.WORKSHOP);
      var __s75local2 = !!__dep_export_Iso.Iso.data.objects.provider.getObjectAmountByType(__dep_export_IsoObjectEnum.IsoObjectEnum.D_WORKSHOP);
      if (__s75local0) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowPackageListVO.C2SShowPackageListVO(0));
      }
      if (__s75local1 || __s75local2) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowPackageListVO.C2SShowPackageListVO(1));
      }
    }
  };
  CastleVIPData.__initialize_static_members = function () {
    CastleVIPData.MAX_VIPTIME_SECONDS = __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY * 180;
    CastleVIPData.DISABLED_VIP_MODE_VO = new __dep_export_VIPLevelInfoVO.VIPLevelInfoVO();
  };
  CastleVIPData.MAX_VIPTIME_DAYS = 180;
  CastleVIPData.NO_VIP_TIME = 0;
  return CastleVIPData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleVIPData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_VIPLevelInfoVO = require("gge-module:export_VIPLevelInfoVO");
var __dep_export_VIPPackageVO = require("gge-module:export_VIPPackageVO");
__s0local0.__initialize_static_members();
