Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AGeneralSkillTreeNode = require("gge-module:export_AGeneralSkillTreeNode");
var __dep_export_GeneralSkillGroup = require("gge-module:export_GeneralSkillGroup");
var __s0local0 = function (__s1param0) {
  function GeneralSkillTier(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._isHidden = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralSkillTier, __s1param0);
  GeneralSkillTier.prototype.childIDProperty = function (__s5param0) {
    return __s5param0.skillGroupID;
  };
  Object.defineProperty(GeneralSkillTier.prototype, "childNodeClass", {
    get: function () {
      return __dep_export_GeneralSkillGroup.GeneralSkillGroup;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AGeneralSkillTreeNode.AGeneralSkillTreeNode.prototype, "childNodeClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillTier.prototype, "isHidden", {
    get: function () {
      return this._isHidden;
    },
    set: function (__s13param0) {
      this._isHidden = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillTier;
}(__dep_export_AGeneralSkillTreeNode.AGeneralSkillTreeNode);
exports.GeneralSkillTier = __s0local0;
