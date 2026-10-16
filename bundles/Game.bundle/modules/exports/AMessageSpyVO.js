Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __s0local0 = function (__s1param0) {
  function AMessageSpyVO() {
    var __s3local0 = this;
    __s3local0._subtypeSpy = 0;
    __s3local0._subtypeResult = 0;
    __s3local0._kingdomID = 0;
    __s3local0._ownerID = 0;
    __s3local0._areaID = 0;
    __s3local0._areaType = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AMessageSpyVO, __s1param0);
  AMessageSpyVO.prototype.hasDetailedSpyLog = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AMessageSpyVO.prototype.isFailedSpyLog = function () {
    return this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_FAILED || this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_SUCCESS;
  };
  AMessageSpyVO.prototype.isDefenceSpyLog = function () {
    return this.subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_DEFENCE && this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_SUCCESS;
  };
  AMessageSpyVO.prototype.isEcoSpyLog = function () {
    return this.subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_ECO;
  };
  Object.defineProperty(AMessageSpyVO.prototype, "isSabotageLog", {
    get: function () {
      return this.subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_SABOTAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "isPlagueLog", {
    get: function () {
      return this.subtypeSpy == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SPY_PLAQUE_MONK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "subtypeSpy", {
    get: function () {
      return this._subtypeSpy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "subtypeResult", {
    get: function () {
      return this._subtypeResult;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "areaID", {
    get: function () {
      return this._areaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  return AMessageSpyVO;
}(require("gge-module:export_AMessageVO").AMessageVO);
exports.AMessageSpyVO = __s0local0;
