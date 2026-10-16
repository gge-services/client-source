Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function MightRankVO() {
    this._threshold = 0;
    this._id = 0;
    this._rewardID = 0;
  }
  MightRankVO.prototype.parseXML = function (__s5param0) {
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("mightID", __s5param0, "0"));
    this._threshold = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("threshold", __s5param0, "0"));
    this._rewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s5param0, "0"));
  };
  MightRankVO.prototype.getId = function () {
    return this._id;
  };
  Object.defineProperty(MightRankVO.prototype, "threshold", {
    get: function () {
      return this._threshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightRankVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  return MightRankVO;
}();
exports.MightRankVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleXmlNode");
