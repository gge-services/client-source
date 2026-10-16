Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastlePrimeDayData(__s3param0) {
    this.parseFromXML(__s3param0);
  }
  CastlePrimeDayData.prototype.parseFromXML = function (__s5param0) {
    var __s5local0;
    var __s5local1;
    this._primeDayXMLNodes = new Map();
    this._primeDayRewardXMLNodes = new Map();
    for (var __s5local2 = 0, __s5local3 = __s5param0.primeDays; __s5local2 < __s5local3.length; __s5local2++) {
      var __s5local4 = __s5local3[__s5local2];
      if (__s5local4 !== undefined) {
        (__s5local0 = new __dep_export_CastlePrimeDayXMLNode.CastlePrimeDayXMLNode()).parseXML(__s5local4);
        this._primeDayXMLNodes.set(__s5local0.primeDayID, __s5local0);
      }
    }
    for (var __s5local5 = 0, __s5local6 = __s5param0.paymentrewards; __s5local5 < __s5local6.length; __s5local5++) {
      var __s5local7 = __s5local6[__s5local5];
      if (__s5local7 !== undefined) {
        (__s5local1 = new __dep_export_CastlePrimeDayRewardXMLNode.CastlePrimeDayRewardXMLNode()).parseXML(__s5local7);
        this._primeDayRewardXMLNodes.set(__s5local1.paymentrewardID, __s5local1);
      }
    }
  };
  CastlePrimeDayData.prototype.getPrimeDayXMLNodeByID = function (__s13param0) {
    return this._primeDayXMLNodes.get(__s13param0);
  };
  CastlePrimeDayData.prototype.getPrimeDayRewardXMLNodeByID = function (__s15param0) {
    return this._primeDayRewardXMLNodes.get(__s15param0);
  };
  return CastlePrimeDayData;
}();
exports.CastlePrimeDayData = __s0local0;
var __dep_export_CastlePrimeDayRewardXMLNode = require("gge-module:export_CastlePrimeDayRewardXMLNode");
var __dep_export_CastlePrimeDayXMLNode = require("gge-module:export_CastlePrimeDayXMLNode");
