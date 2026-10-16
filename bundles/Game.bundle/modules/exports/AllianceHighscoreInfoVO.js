Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AllianceHighscoreInfoVO() {
    this.allianceId = 0;
    this._allianceName = "";
    this.memberAmount = 0;
    this.allianceCurrentFame = 0;
  }
  AllianceHighscoreInfoVO.prototype.fillFromParamObject = function (__s5param0) {
    if (__s5param0 && Array.isArray(__s5param0)) {
      this.allianceId = __dep_exact_f855840627e6e145.int(__s5param0.shift());
      this._allianceName = __s5param0.shift();
      this.memberAmount = __dep_exact_f855840627e6e145.int(__s5param0.shift());
      this.allianceCurrentFame = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    }
  };
  Object.defineProperty(AllianceHighscoreInfoVO.prototype, "allianceName", {
    get: function () {
      if (this._allianceName) {
        return this._allianceName.toString();
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  return AllianceHighscoreInfoVO;
}();
exports.AllianceHighscoreInfoVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
