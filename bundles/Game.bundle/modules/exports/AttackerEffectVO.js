Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AttackerEffectVO() {
    this._attackerFlankEffects = new Map();
  }
  AttackerEffectVO.prototype.addAttackerFlankEffects = function (__s5param0, __s5param1) {
    if (__s5param1 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT && __s5param1 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE && __s5param1 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT) {
      throw new Error("INCORRECT FLANK CHOSEN");
    }
    this._attackerFlankEffects.set(__s5param1, __s5param0);
  };
  AttackerEffectVO.prototype.getAttackerFlankEffects = function (__s8param0) {
    if (__s8param0 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT && __s8param0 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE && __s8param0 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT) {
      throw new Error("INCORRECT FLANK CHOSEN");
    }
    return this._attackerFlankEffects.get(__s8param0);
  };
  return AttackerEffectVO;
}();
exports.AttackerEffectVO = __s0local0;
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
