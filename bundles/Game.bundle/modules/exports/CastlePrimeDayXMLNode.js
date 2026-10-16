Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastlePrimeDayXMLNode() {
    this._primeDayID = 0;
    this._rewardCap = 0;
    this._skinID = 0;
  }
  CastlePrimeDayXMLNode.prototype.parseXML = function (__s5param0) {
    this._primeDayID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("primeDayID", __s5param0, "-1", true));
    this._rewardCap = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardCap", __s5param0, "-1", true));
    this._paymentRewardIDs = [];
    for (var __s5local0 = 0, __s5local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("paymentRewardIDs", __s5param0, "-1", true).split(","); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      this._paymentRewardIDs.push(parseInt(__s5local2));
    }
  };
  Object.defineProperty(CastlePrimeDayXMLNode.prototype, "primeDayID", {
    get: function () {
      return this._primeDayID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayXMLNode.prototype, "rewardCap", {
    get: function () {
      return this._rewardCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayXMLNode.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayXMLNode.prototype, "paymentRewardIDs", {
    get: function () {
      return this._paymentRewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayXMLNode.prototype, "isMultiTiered", {
    get: function () {
      return this._paymentRewardIDs.length > 1;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrimeDayXMLNode;
}();
exports.CastlePrimeDayXMLNode = __s0local0;
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
