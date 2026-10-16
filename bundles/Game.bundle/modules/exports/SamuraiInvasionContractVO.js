Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function SamuraiInvasionContractVO(__s3param0 = null) {
    this.rank = 0;
    this.points = 0;
    if (__s3param0) {
      this.parseServerObject(__s3param0);
    }
  }
  SamuraiInvasionContractVO.prototype.parseServerObject = function (__s6param0) {
    var __s6local0 = __s6param0;
    if (__s6local0) {
      this.rank = __dep_exact_f855840627e6e145.int(__s6local0[0]);
      this.points = __dep_exact_f855840627e6e145.int(__s6local0[1]);
    }
  };
  return SamuraiInvasionContractVO;
}();
exports.SamuraiInvasionContractVO = __s0local0;
