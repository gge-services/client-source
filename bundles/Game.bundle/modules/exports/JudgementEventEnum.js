Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function JudgementEventEnum(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(JudgementEventEnum, __s1param0);
  JudgementEventEnum.getByName = function (__s5param0) {
    return this.getByProperty(JudgementEventEnum, "name", __s5param0, JudgementEventEnum.NONE);
  };
  JudgementEventEnum.__initialize_static_members = function () {
    JudgementEventEnum.NONE = new JudgementEventEnum("none");
    JudgementEventEnum.WOLFS = new JudgementEventEnum("wolfs");
    JudgementEventEnum.ROAMERS = new JudgementEventEnum("roamers");
    JudgementEventEnum.PEASANT_REFUGEES = new JudgementEventEnum("peasantRefugees");
    JudgementEventEnum.SQUABBLERS = new JudgementEventEnum("squabblers");
    JudgementEventEnum.THIEF = new JudgementEventEnum("thief");
  };
  return JudgementEventEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.JudgementEventEnum = __s0local0;
__s0local0.__initialize_static_members();
