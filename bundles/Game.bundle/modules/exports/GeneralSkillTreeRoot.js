Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AGeneralSkillTreeNode = require("gge-module:export_AGeneralSkillTreeNode");
var __dep_export_GeneralSkillTree = require("gge-module:export_GeneralSkillTree");
var __s0local0 = function (__s1param0) {
  function GeneralSkillTreeRoot(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralSkillTreeRoot, __s1param0);
  GeneralSkillTreeRoot.prototype.childIDProperty = function (__s5param0) {
    return __s5param0.generalID;
  };
  Object.defineProperty(GeneralSkillTreeRoot.prototype, "childNodeClass", {
    get: function () {
      return __dep_export_GeneralSkillTree.GeneralSkillTree;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AGeneralSkillTreeNode.AGeneralSkillTreeNode.prototype, "childNodeClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillTreeRoot;
}(__dep_export_AGeneralSkillTreeNode.AGeneralSkillTreeNode);
exports.GeneralSkillTreeRoot = __s0local0;
