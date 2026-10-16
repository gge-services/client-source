Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_DivisonRoundVO = require("gge-module:export_DivisonRoundVO");
var __s0local0 = function () {
  function DivisionData(__s3param0) {
    var __s3local0 = this;
    this._divisionRounds = new Map();
    var __s3local1 = __s3param0.divisionRounds;
    if (__s3local1) {
      __s3local1.forEach(function (__s6param0) {
        var __s6local0 = new __dep_export_DivisonRoundVO.DivisonRoundVO();
        __s6local0.fillFromParamXML(__s6param0);
        __s3local0._divisionRounds.set(__s6local0.divisionRoundID, __s6local0);
      });
    }
  }
  DivisionData.prototype.getDivisionRoundByID = function (__s8param0) {
    if (this._divisionRounds.has(__s8param0)) {
      return this._divisionRounds.get(__s8param0);
    } else {
      return null;
    }
  };
  return DivisionData;
}();
exports.DivisionData = __s0local0;
