Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ACastleLegendSkillTreeNode = require("gge-module:export_ACastleLegendSkillTreeNode");
var __dep_export_CastleLegendSkillTier = require("gge-module:export_CastleLegendSkillTier");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillTree(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillTree, __s1param0);
  CastleLegendSkillTree.prototype.childIDProperty = function (__s5param0) {
    return __s5param0.tier;
  };
  Object.defineProperty(CastleLegendSkillTree.prototype, "childNodeClass", {
    get: function () {
      return __dep_export_CastleLegendSkillTier.CastleLegendSkillTier;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleLegendSkillTreeNode.ACastleLegendSkillTreeNode.prototype, "childNodeClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillTree;
}(__dep_export_ACastleLegendSkillTreeNode.ACastleLegendSkillTreeNode);
exports.CastleLegendSkillTree = __s0local0;
