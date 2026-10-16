Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function GeneralsXPItemVO(__s3param0 = null) {
    if (__s3param0) {
      this.fillFromParamXml(__s3param0);
    }
  }
  GeneralsXPItemVO.prototype.fillFromParamXml = function (__s6param0) {
    this._currencyID = parseInt(__s6param0.currencyID || "0");
    this._xpAmount = parseInt(__s6param0.xpAmount || "0");
  };
  Object.defineProperty(GeneralsXPItemVO.prototype, "currencyID", {
    get: function () {
      return this._currencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsXPItemVO.prototype, "xpAmount", {
    get: function () {
      return this._xpAmount;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsXPItemVO;
}();
exports.GeneralsXPItemVO = __s0local0;
