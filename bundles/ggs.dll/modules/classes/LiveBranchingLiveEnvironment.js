Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function (__s1param0) {
  function LiveBranchingLiveEnvironment(__s3param0) {
    return __s1param0.call(this, __s3param0 !== undefined ? __s3param0 : LiveBranchingLiveEnvironment.LIVE_BRANCHING_LIVE_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LiveBranchingLiveEnvironment, __s1param0);
  LiveBranchingLiveEnvironment.prototype.initPatterns = function () {
    __s1param0.prototype.initPatterns.call(this);
    this._branchesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://" + __dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/Web_PreClient/branches/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://" + __dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/Web_PreClient/branches/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  LiveBranchingLiveEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLiveBranchingEnvironment;
  };
  LiveBranchingLiveEnvironment.LIVE_BRANCHING_LIVE_ENVIRONMENT_ID = "LiveBranchingLiveEnvironment";
  return LiveBranchingLiveEnvironment;
}(require("gge-module:class_LiveEnvironment").LiveEnvironment);
exports.LiveBranchingLiveEnvironment = __s0local0;
