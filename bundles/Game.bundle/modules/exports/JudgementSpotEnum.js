Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __s0local0 = function (__s1param0) {
  function JudgementSpotEnum(__s3param0, __s3param1 = null) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._veClass = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(JudgementSpotEnum, __s1param0);
  JudgementSpotEnum.getTypeFromName = function (__s5param0) {
    return this.getByProperty(JudgementSpotEnum, "name", __s5param0, JudgementSpotEnum.UNKNOWN);
  };
  JudgementSpotEnum.getTypeFromVEClass = function (__s7param0) {
    return this.getByProperty(JudgementSpotEnum, "veClass", __s7param0, JudgementSpotEnum.UNKNOWN);
  };
  Object.defineProperty(JudgementSpotEnum.prototype, "spawnType", {
    get: function () {
      return __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(this.name, false);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(JudgementSpotEnum.prototype, "veClass", {
    get: function () {
      return this._veClass;
    },
    enumerable: true,
    configurable: true
  });
  JudgementSpotEnum.__initialize_static_members = function () {
    JudgementSpotEnum.UNKNOWN = new JudgementSpotEnum("unknown");
    JudgementSpotEnum.RESOURCE_FOOD = new JudgementSpotEnum("resourceFood", __dep_export_ResourceFieldSpotJudgementVE.ResourceFieldSpotJudgementVE);
    JudgementSpotEnum.KEEP_BUILDING = new JudgementSpotEnum("keep", __dep_export_KeepSpotJudgementVE.KeepSpotJudgementVE);
  };
  return JudgementSpotEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.JudgementSpotEnum = __s0local0;
var __dep_export_KeepSpotJudgementVE = require("gge-module:export_KeepSpotJudgementVE");
var __dep_export_ResourceFieldSpotJudgementVE = require("gge-module:export_ResourceFieldSpotJudgementVE");
__s0local0.__initialize_static_members();
