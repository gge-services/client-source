Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DefenderEffectVO(__s3param0) {
    this._spaceID = 0;
    this._areaType = 0;
    this._defenderArea = __s3param0;
    this._spaceID = __s3param0.mapID > 0 ? __s3param0.mapID : __s3param0.kingdomID;
    this._areaType = __dep_exact_f855840627e6e145.int(__s3param0.areaType);
    this._defenderFlankEffects = new Map();
  }
  DefenderEffectVO.prototype.addDefenderFlankEffects = function (__s5param0, __s5param1) {
    if (__s5param1 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT && __s5param1 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE && __s5param1 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT && __s5param1 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_YARD) {
      throw new Error("INCORRECT FLANK CHOSEN");
    }
    this._defenderFlankEffects.set(__s5param1, __s5param0);
  };
  DefenderEffectVO.prototype.getDefenderFlankEffects = function (__s8param0) {
    if (__s8param0 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT && __s8param0 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE && __s8param0 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT && __s8param0 != __dep_export_ClientConstCastle.ClientConstCastle.FLANK_YARD) {
      throw new Error("INCORRECT FLANK CHOSEN");
    }
    return this._defenderFlankEffects.get(__s8param0);
  };
  Object.defineProperty(DefenderEffectVO.prototype, "spaceID", {
    get: function () {
      return this._spaceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderEffectVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderEffectVO.prototype, "defenderArea", {
    get: function () {
      return this._defenderArea;
    },
    enumerable: true,
    configurable: true
  });
  return DefenderEffectVO;
}();
exports.DefenderEffectVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
