Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PlayerPerformanceVO() {
    this.performanceData = {};
  }
  PlayerPerformanceVO.prototype.parseData = function (__s5param0) {
    if (__s5param0.PST) {
      this.performanceData = __s5param0.PST;
    }
    this._points = __s5param0.AMT;
  };
  PlayerPerformanceVO.prototype.getPerformanceData = function (__s8param0) {
    for (var __s8local0 = 0, __s8local1 = this.performanceData; __s8local0 < __s8local1.length; __s8local0++) {
      var __s8local2 = __s8local1[__s8local0];
      if (__s8local2 !== undefined && __s8local2.PSI == __s8param0) {
        return __s8local2.AMT;
      }
    }
    return 0;
  };
  Object.defineProperty(PlayerPerformanceVO.prototype, "points", {
    get: function () {
      return this._points;
    },
    enumerable: true,
    configurable: true
  });
  return PlayerPerformanceVO;
}();
exports.PlayerPerformanceVO = __s0local0;
