Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function C2SCreateArmyAttackMovementAdvisorVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.AAC = 0;
    __s3local0.AASM = 0;
    __s3local0.AAT = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SCreateArmyAttackMovementAdvisorVO, __s1param0);
  C2SCreateArmyAttackMovementAdvisorVO.prototype.setAdvisor = function (__s5param0, __s5param1, __s5param2) {
    this.AAC = __s5param1;
    this.AASM = __s5param2 ? 1 : 0;
    this.AAT = __s5param0;
  };
  return C2SCreateArmyAttackMovementAdvisorVO;
}(require("gge-module:export_C2SCreateArmyAttackMovementVO").C2SCreateArmyAttackMovementVO);
exports.C2SCreateArmyAttackMovementAdvisorVO = __s0local0;
