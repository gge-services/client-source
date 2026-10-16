Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlSamuraiDaimyoContractVO() {
    this._id = 0;
    this._rank = 0;
    this._enableOnStart = false;
    this._nextContract = 0;
    this._shogunPoints = 0;
    this._warEffortPoints = 0;
  }
  XmlSamuraiDaimyoContractVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._rank = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rank", __s5param0, -1));
    this._enableOnStart = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("enableOnStart", __s5param0, false);
    this._nextContract = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("nextContract", __s5param0, -1));
    this._shogunPoints = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("shogunPoints", __s5param0, -1));
    this._warEffortPoints = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("warEffortPoints", __s5param0, -1));
  };
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "enableOnStart", {
    get: function () {
      return this._enableOnStart;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "nextContract", {
    get: function () {
      return this._nextContract;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "shogunPoints", {
    get: function () {
      return this._shogunPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoContractVO.prototype, "warEffortPoints", {
    get: function () {
      return this._warEffortPoints;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSamuraiDaimyoContractVO;
}();
exports.XmlSamuraiDaimyoContractVO = __s0local0;
