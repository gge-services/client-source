Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_TaxInfoVO = require("gge-module:export_TaxInfoVO");
var __s0local0 = function (__s1param0) {
  function CastleTaxData() {
    var __s3local0 = this;
    __s3local0._isWaitingForServerResponse = false;
    __s3local0._lastTaxState = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._taxInfoVO = new __dep_export_TaxInfoVO.TaxInfoVO();
    __s3local0.onTaxChanged = new __dep_exact_9e901e8e2483a22f.NumberSignal();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTaxData, __s1param0);
  CastleTaxData.prototype.executeUpdate = function (__s5param0) {
    if (this._taxInfoVO) {
      var __s5local0 = this._taxInfoVO.taxState;
      var __s5local1 = this._lastTaxState != __s5local0;
      this._lastTaxState = __s5local0;
      if (__s5local1) {
        this.onTaxChanged.signal(__s5local0);
      }
    }
  };
  Object.defineProperty(CastleTaxData.prototype, "taxInfoVO", {
    get: function () {
      return this._taxInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTaxData.prototype.parse_TXI = function (__s11param0) {
    if (__s11param0) {
      this._taxInfoVO = new __dep_export_TaxInfoVO.TaxInfoVO();
      this._taxInfoVO.fillFromParamObject(__s11param0.TX);
    }
  };
  Object.defineProperty(CastleTaxData.prototype, "isWaitingForServerResponse", {
    get: function () {
      return this._isWaitingForServerResponse;
    },
    set: function (__s16param0) {
      this._isWaitingForServerResponse = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTaxData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleTaxData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
