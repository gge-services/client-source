Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_BasicMapmovementVO = require("gge-module:export_BasicMapmovementVO");
var __s0local0 = function (__s1param0) {
  function SpyMapmovementVO() {
    var __s3local0 = this;
    __s3local0._spyCount = 0;
    __s3local0._spyAccuracy = -1;
    __s3local0._spyRisk = 0;
    __s3local0._spyType = 0;
    __s3local0._sabotageDamage = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = SpyMapmovementVO.NAME;
    __s3local0.group = "Mapmovement";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SpyMapmovementVO, __s1param0);
  SpyMapmovementVO.prototype.loadFromParamObject = function (__s5param0) {
    __s1param0.prototype.loadFromParamObject.call(this, __s5param0);
    this.parseSpyInfo(__s5param0.S);
  };
  SpyMapmovementVO.prototype.parseSpyInfo = function (__s7param0) {
    this._spyType = __dep_exact_f855840627e6e145.int(__s7param0.ST);
    if (this._spyType == __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE) {
      this._sabotageDamage = __dep_exact_f855840627e6e145.int(__s7param0.SA);
    } else {
      this._spyAccuracy = __dep_exact_f855840627e6e145.int(__s7param0.SA);
    }
    this._spyCount = __dep_exact_f855840627e6e145.int(__s7param0.SC);
    this._spyRisk = __dep_exact_f855840627e6e145.int(__s7param0.SR);
  };
  Object.defineProperty(SpyMapmovementVO.prototype, "isSabotageSpyMovement", {
    get: function () {
      return this._spyType == __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "spyCount", {
    get: function () {
      return this._spyCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "spyAccuracy", {
    get: function () {
      return this._spyAccuracy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "spyRisk", {
    get: function () {
      return this._spyRisk;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "spyType", {
    get: function () {
      return this._spyType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      if (!this.isMyMovement) {
        return false;
      }
      switch (this._direction) {
        case __dep_export_BasicMapmovementVO.BasicMapmovementVO.TRAVELSTATE_MOVING_TO_TARGET:
          return true;
        case __dep_export_BasicMapmovementVO.BasicMapmovementVO.TRAVELSTATE_RETURN_HOME:
        default:
          return false;
      }
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "sabotageDamage", {
    get: function () {
      return this._sabotageDamage;
    },
    enumerable: true,
    configurable: true
  });
  SpyMapmovementVO.__initialize_static_members = function () {
    SpyMapmovementVO.NAME = "Spy";
  };
  return SpyMapmovementVO;
}(__dep_export_BasicMapmovementVO.BasicMapmovementVO);
exports.SpyMapmovementVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMapMovementVO");
__s0local0.__initialize_static_members();
