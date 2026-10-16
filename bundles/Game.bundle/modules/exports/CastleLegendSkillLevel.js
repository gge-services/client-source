Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillLevel(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillLevel, __s1param0);
  CastleLegendSkillLevel.prototype.insertSkill = function (__s5param0) {
    this._legendSkillVO = __s5param0;
  };
  Object.defineProperty(CastleLegendSkillLevel.prototype, "legendSkillVO", {
    get: function () {
      return this._legendSkillVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillLevel;
}(require("gge-module:export_ACastleLegendSkillTreeNode").ACastleLegendSkillTreeNode);
exports.CastleLegendSkillLevel = __s0local0;
