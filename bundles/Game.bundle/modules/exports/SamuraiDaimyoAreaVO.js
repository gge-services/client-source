Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function () {
  function SamuraiDaimyoAreaVO(__s3param0, __s3param1) {
    this._x = 0;
    this._y = 0;
    this._rank = 0;
    this._level = 0;
    this._shogunPoints = 0;
    this._remainingCooldownTimestamp = 0;
    this._cooldownCounter = 0;
    this._eventAutoScalingCampID = -1;
    this.parseServerData(__s3param0, __s3param1);
  }
  SamuraiDaimyoAreaVO.prototype.parseServerData = function (__s5param0, __s5param1) {
    this._contractType = __s5param0;
    this._x = __dep_exact_f855840627e6e145.int(__s5param1.PX);
    this._y = __dep_exact_f855840627e6e145.int(__s5param1.PY);
    this._rank = __dep_exact_f855840627e6e145.int(__s5param1.R);
    this._level = __dep_exact_f855840627e6e145.int(__s5param1.L);
    this._shogunPoints = __dep_exact_f855840627e6e145.int(__s5param1.SP);
    this._remainingCooldownTimestamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5param1.CD * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this._cooldownCounter = __dep_exact_f855840627e6e145.int(__s5param1.CDC);
    this._eventAutoScalingCampID = __dep_exact_f855840627e6e145.int(__s5param1.DDCID);
  };
  SamuraiDaimyoAreaVO.prototype.getRemainingCooldown = function () {
    return __dep_exact_f855840627e6e145.int(Math.max((this._remainingCooldownTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0));
  };
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "contractType", {
    get: function () {
      return this._contractType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "x", {
    get: function () {
      return this._x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "y", {
    get: function () {
      return this._y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "shogunPoints", {
    get: function () {
      return this._shogunPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "remainingCooldownTimestamp", {
    get: function () {
      return this._remainingCooldownTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "cooldownCounter", {
    get: function () {
      return this._cooldownCounter;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "eventAutoScalingCampID", {
    get: function () {
      return this._eventAutoScalingCampID;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiDaimyoAreaVO;
}();
exports.SamuraiDaimyoAreaVO = __s0local0;
