Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AGeneralSkillTreeNode = require("gge-module:export_AGeneralSkillTreeNode");
var __dep_export_GeneralSkillLevel = require("gge-module:export_GeneralSkillLevel");
var __s0local0 = function (__s1param0) {
  function GeneralSkillGroup(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralSkillGroup, __s1param0);
  GeneralSkillGroup.prototype.insertSkill = function (__s5param0) {
    __s1param0.prototype.insertSkill.call(this, __s5param0);
  };
  GeneralSkillGroup.prototype.childIDProperty = function (__s7param0) {
    return __s7param0.level;
  };
  Object.defineProperty(GeneralSkillGroup.prototype, "childNodeClass", {
    get: function () {
      return __dep_export_GeneralSkillLevel.GeneralSkillLevel;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AGeneralSkillTreeNode.AGeneralSkillTreeNode.prototype, "childNodeClass").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillGroup;
}(__dep_export_AGeneralSkillTreeNode.AGeneralSkillTreeNode);
exports.GeneralSkillGroup = __s0local0;
