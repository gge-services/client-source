Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __s0local0 = function (__s1param0) {
  function CastleSupportDefenceData() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSupportDefenceData, __s1param0);
  CastleSupportDefenceData.prototype.parse_SDI = function (__s5param0) {
    if (!__s5param0) {
      return null;
    }
    var __s5local0 = new __dep_export_CastleSupportDefenceVO.CastleSupportDefenceVO();
    __s5local0.fillFromParamObject(__s5param0);
    __s5local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE;
    return __s5local0;
  };
  return CastleSupportDefenceData;
}(require("gge-module:export_CastleEventDispatcher").CastleEventDispatcher);
exports.CastleSupportDefenceData = __s0local0;
var __dep_export_CastleSupportDefenceVO = require("gge-module:export_CastleSupportDefenceVO");
