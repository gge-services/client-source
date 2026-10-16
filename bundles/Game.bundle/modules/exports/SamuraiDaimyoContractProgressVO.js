Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function SamuraiDaimyoContractProgressVO(__s3param0 = null) {
    this._id = 0;
    this._points = 0;
    if (__s3param0) {
      this.parseServerData(__s3param0);
    }
  }
  SamuraiDaimyoContractProgressVO.prototype.parseServerData = function (__s6param0) {
    var __s6local0 = __s6param0;
    if (__s6local0) {
      this._id = __dep_exact_f855840627e6e145.int(__s6local0[0]);
      this._points = __dep_exact_f855840627e6e145.int(__s6local0[1]);
    }
  };
  Object.defineProperty(SamuraiDaimyoContractProgressVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoContractProgressVO.prototype, "points", {
    get: function () {
      return this._points;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiDaimyoContractProgressVO;
}();
exports.SamuraiDaimyoContractProgressVO = __s0local0;
