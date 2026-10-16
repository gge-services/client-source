Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function GeneralSkillLevel(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralSkillLevel, __s1param0);
  GeneralSkillLevel.prototype.insertSkill = function (__s5param0) {
    this._generalSkillVO = __s5param0;
  };
  Object.defineProperty(GeneralSkillLevel.prototype, "generalSkillVO", {
    get: function () {
      return this._generalSkillVO;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillLevel;
}(require("gge-module:export_AGeneralSkillTreeNode").AGeneralSkillTreeNode);
exports.GeneralSkillLevel = __s0local0;
