Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ACastleLegendSkillTreeNode = require("gge-module:export_ACastleLegendSkillTreeNode");
var __dep_export_CastleLegendSkillLevel = require("gge-module:export_CastleLegendSkillLevel");
var __dep_export_CastleSceatSkillVO = require("gge-module:export_CastleSceatSkillVO");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillGroup(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillGroup, __s1param0);
  CastleLegendSkillGroup.prototype.insertSkill = function (__s5param0) {
    __s1param0.prototype.insertSkill.call(this, __s5param0);
    if (__s5param0 instanceof __dep_export_CastleSceatSkillVO.CastleSceatSkillVO) {
      this._sortOrder = __s5param0.sortOrder;
    }
  };
  CastleLegendSkillGroup.prototype.childIDProperty = function (__s8param0) {
    return __s8param0.level;
  };
  Object.defineProperty(CastleLegendSkillGroup.prototype, "childNodeClass", {
    get: function () {
      return __dep_export_CastleLegendSkillLevel.CastleLegendSkillLevel;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleLegendSkillTreeNode.ACastleLegendSkillTreeNode.prototype, "childNodeClass").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillGroup.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillGroup;
}(__dep_export_ACastleLegendSkillTreeNode.ACastleLegendSkillTreeNode);
exports.CastleLegendSkillGroup = __s0local0;
