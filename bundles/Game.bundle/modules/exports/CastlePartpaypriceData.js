Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastlePartpaypriceData(__s3param0) {
    this.parseXml(__s3param0);
  }
  CastlePartpaypriceData.prototype.parseXml = function (__s5param0) {
    this._partpaypriceVOs = new Map();
    var __s5local0;
    var __s5local1 = __s5param0.partpayprices;
    if (__s5local1 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local1; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          (__s5local0 = new __dep_export_PartpaypriceVO.PartpaypriceVO()).fillFromParamXml(__s5local4);
          this._partpaypriceVOs.set(__s5local0.id, __s5local0);
        }
      }
    }
  };
  CastlePartpaypriceData.prototype.getVOById = function (__s11param0) {
    return this._partpaypriceVOs.get(__s11param0);
  };
  return CastlePartpaypriceData;
}();
exports.CastlePartpaypriceData = __s0local0;
var __dep_export_PartpaypriceVO = require("gge-module:export_PartpaypriceVO");
