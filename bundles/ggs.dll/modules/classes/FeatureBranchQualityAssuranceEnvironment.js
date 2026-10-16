Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function (__s1param0) {
  function FeatureBranchQualityAssuranceEnvironment() {
    return __s1param0.call(this, FeatureBranchQualityAssuranceEnvironment.FEATURE_BRANCH_QUALITY_ASSURANCE_ENVIRONMENT) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(FeatureBranchQualityAssuranceEnvironment, __s1param0);
  FeatureBranchQualityAssuranceEnvironment.prototype.initPatterns = function () {
    __s1param0.prototype.initPatterns.call(this);
    this._branchesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://" + __dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/branch_feature_{featureBranchId}/{featureBranchEnvironment}/branches/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://" + __dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/branch_feature_{featureBranchId}/{featureBranchEnvironment}/branches/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  FeatureBranchQualityAssuranceEnvironment.prototype.isSupported = function () {
    return this._data.globals.isFeatureBranchEnvironment;
  };
  FeatureBranchQualityAssuranceEnvironment.FEATURE_BRANCH_QUALITY_ASSURANCE_ENVIRONMENT = "FeatureBranchQualityAssuranceEnvironment";
  return FeatureBranchQualityAssuranceEnvironment;
}(require("gge-module:class_TestEnvironment").TestEnvironment);
exports.FeatureBranchQualityAssuranceEnvironment = __s0local0;
