Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function FusionForgeItemInfoVO() {
    this._initialFusionLevel = -1;
    this._isFusionSource = false;
    this._isFusionTarget = false;
    this._uniqueId = -1;
    this._serverXP = 0;
  }
  FusionForgeItemInfoVO.prototype.parseXmlNode = function (__s5param0) {
    this._initialFusionLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("initialFusionLevel", __s5param0, -1));
    this._isFusionSource = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("isFusionSource", __s5param0, false);
    this._isFusionTarget = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("isFusionTarget", __s5param0, false);
  };
  FusionForgeItemInfoVO.prototype.getDeltaXpBetweenCurrentLevels = function () {
    return __dep_exact_f855840627e6e145.int(this.isForged() ? this.serverXP - __dep_exact_26a421b704832cff.FusionConst.getStartXPFromLevel(this.getCurrentLevel()) : 0);
  };
  FusionForgeItemInfoVO.prototype.getDeltaXpForNextLevel = function () {
    return __dep_exact_f855840627e6e145.int(this.getTotalXpForNextLevel() - __dep_exact_26a421b704832cff.FusionConst.getStartXPFromLevel(this.getCurrentLevel()));
  };
  FusionForgeItemInfoVO.prototype.getTotalXpForNextLevel = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getStartXPFromLevel(this.getCurrentLevel() + 1));
  };
  FusionForgeItemInfoVO.prototype.getCurrentTotalXp = function () {
    return __dep_exact_f855840627e6e145.int(this.isForged() ? this.serverXP : __dep_exact_26a421b704832cff.FusionConst.getStartXPFromLevel(this.getCurrentLevel()));
  };
  FusionForgeItemInfoVO.prototype.isForged = function () {
    return this.serverXP != 0 && this.serverXP > __dep_exact_26a421b704832cff.FusionConst.getStartXPFromLevel(this.initialFusionLevel);
  };
  FusionForgeItemInfoVO.prototype.getCurrentLevel = function () {
    return __dep_exact_f855840627e6e145.int(this.serverXP <= 0 && this.initialFusionLevel > 0 ? this.initialFusionLevel : __dep_exact_26a421b704832cff.FusionConst.getLevelFromXP(this.serverXP));
  };
  FusionForgeItemInfoVO.prototype.getDeltaXpPercentFactor = function () {
    return __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.getDeltaXpBetweenCurrentLevels() / this.getDeltaXpForNextLevel(), 0, 1);
  };
  Object.defineProperty(FusionForgeItemInfoVO.prototype, "initialFusionLevel", {
    get: function () {
      return this._initialFusionLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeItemInfoVO.prototype, "isFusionSource", {
    get: function () {
      return this._isFusionSource;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeItemInfoVO.prototype, "isFusionTarget", {
    get: function () {
      return this._isFusionTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeItemInfoVO.prototype, "serverXP", {
    get: function () {
      return this._serverXP;
    },
    set: function (__s29param0) {
      this._serverXP = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.max(0, __s29param0));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeItemInfoVO.prototype, "uniqueId", {
    get: function () {
      return this._uniqueId;
    },
    set: function (__s33param0) {
      this._uniqueId = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeItemInfoVO;
}();
exports.FusionForgeItemInfoVO = __s0local0;
