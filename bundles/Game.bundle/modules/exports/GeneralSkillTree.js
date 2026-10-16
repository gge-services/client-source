Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AGeneralSkillTreeNode = require("gge-module:export_AGeneralSkillTreeNode");
var __dep_export_GeneralSkillTier = require("gge-module:export_GeneralSkillTier");
var __s0local0 = function (__s1param0) {
  function GeneralSkillTree(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._isIncomplete = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralSkillTree, __s1param0);
  GeneralSkillTree.prototype.insertSkill = function (__s5param0) {
    if (__s5param0.isImplemented()) {
      __s1param0.prototype.insertSkill.call(this, __s5param0);
      this.childs.sort(function (__s8param0, __s8param1) {
        return __s8param0.id - __s8param1.id;
      });
    } else {
      this._isIncomplete = true;
    }
  };
  Object.defineProperty(GeneralSkillTree.prototype, "isIncomplete", {
    get: function () {
      return this._isIncomplete;
    },
    set: function (__s13param0) {
      this._isIncomplete = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSkillTree.prototype.childIDProperty = function (__s15param0) {
    return __s15param0.tier;
  };
  Object.defineProperty(GeneralSkillTree.prototype, "childNodeClass", {
    get: function () {
      return __dep_export_GeneralSkillTier.GeneralSkillTier;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AGeneralSkillTreeNode.AGeneralSkillTreeNode.prototype, "childNodeClass").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillTree;
}(__dep_export_AGeneralSkillTreeNode.AGeneralSkillTreeNode);
exports.GeneralSkillTree = __s0local0;
