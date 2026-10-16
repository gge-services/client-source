Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function HorseTravelboosterVO() {
    var __s3local0 = this;
    __s3local0._costFactorC1 = 0;
    __s3local0._costFactorC2 = 0;
    __s3local0._unitBoost = 0;
    __s3local0._marketBoost = 0;
    __s3local0._spyBoost = 0;
    __s3local0._isInstantSpyHorse = false;
    __s3local0._payInPegasusTickets = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HorseTravelboosterVO, __s1param0);
  HorseTravelboosterVO.prototype.createNonPegasusDuplicate = function () {
    var __s5local0 = new HorseTravelboosterVO();
    __s5local0._costFactorC1 = this.costFactorC1;
    __s5local0._costFactorC2 = this.costFactorC2;
    __s5local0._unitBoost = this.unitBoost;
    __s5local0._marketBoost = this.marketBoost;
    __s5local0._spyBoost = this.spyBoost;
    __s5local0._isInstantSpyHorse = this._isInstantSpyHorse;
    __s5local0._payInPegasusTickets = false;
    __s5local0.objectId = this.objectId;
    __s5local0.wodId = this.wodId;
    __s5local0.name = this.name;
    __s5local0.group = this.group;
    __s5local0.type = this.type;
    return __s5local0;
  };
  HorseTravelboosterVO.prototype.parseXmlNode = function (__s7param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s7param0);
    this._costFactorC1 = Number(__s7param0.costFactorC1 || "");
    this._costFactorC2 = Number(__s7param0.costFactorC2 || "");
    this._unitBoost = parseInt(__s7param0.unitBoost || "");
    this._marketBoost = parseInt(__s7param0.marketBoost || "");
    this._spyBoost = parseInt(__s7param0.spyBoost || "");
    this._payInPegasusTickets = this._isInstantSpyHorse = !!parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isInstantSpyHorse", __s7param0, "0"));
  };
  Object.defineProperty(HorseTravelboosterVO.prototype, "costFactorC1", {
    get: function () {
      return this._costFactorC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "costFactorC2", {
    get: function () {
      return this._costFactorC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "unitBoost", {
    get: function () {
      return this._unitBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "marketBoost", {
    get: function () {
      return this._marketBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "spyBoost", {
    get: function () {
      return this._spyBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "isPayedWithPegasusTickets", {
    get: function () {
      return this._payInPegasusTickets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HorseTravelboosterVO.prototype, "isInstantSpyHorse", {
    get: function () {
      return this._isInstantSpyHorse;
    },
    enumerable: true,
    configurable: true
  });
  return HorseTravelboosterVO;
}(require("gge-module:export_AVisualVO").AVisualVO);
exports.HorseTravelboosterVO = __s0local0;
