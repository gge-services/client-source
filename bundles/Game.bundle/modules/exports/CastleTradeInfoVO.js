Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleTradeInfoVO() {}
  CastleTradeInfoVO.prototype.fillCastleList = function (__s5param0) {
    if (__s5param0 && (this.castleList = [], __s5param0 != null)) {
      for (var __s5local0 = 0, __s5local1 = __s5param0; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          var __s5local3 = new __dep_export_CastleTradeVO.CastleTradeVO();
          __s5local3.fillFromParamObject(__s5local2);
          this.castleList.push(__s5local3);
        }
      }
    }
  };
  CastleTradeInfoVO.prototype.getCastleInfoById = function (__s11param0) {
    if (this.castleList != null) {
      for (var __s11local0 = 0, __s11local1 = this.castleList; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined && __s11local2.startCastleID == __s11param0) {
          return __s11local2;
        }
      }
    }
    return null;
  };
  return CastleTradeInfoVO;
}();
exports.CastleTradeInfoVO = __s0local0;
var __dep_export_CastleTradeVO = require("gge-module:export_CastleTradeVO");
