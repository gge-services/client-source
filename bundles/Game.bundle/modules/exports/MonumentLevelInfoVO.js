Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function MonumentLevelInfoVO() {
    this._level = 0;
    this._boost = 0;
    this._requiredPoints = 0;
  }
  MonumentLevelInfoVO.prototype.parseXML = function (__s5param0) {
    this._level = parseInt(__s5param0.level || "");
    this._boost = parseInt(__s5param0.fameBoost || "");
    this._requiredPoints = parseInt(__s5param0.requiredPoints || "");
  };
  Object.defineProperty(MonumentLevelInfoVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentLevelInfoVO.prototype, "landmarkBonus", {
    get: function () {
      return this._boost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentLevelInfoVO.prototype, "requiredPoints", {
    get: function () {
      return this._requiredPoints;
    },
    enumerable: true,
    configurable: true
  });
  return MonumentLevelInfoVO;
}();
exports.MonumentLevelInfoVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpgradableLandmarkLevelInfoVO");
