Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function AllianceHelpRequestRecruitParamsVO(__s3param0 = 0, __s3param1 = 0, __s3param2 = 0, __s3param3 = 0) {
    this.recruitID = 0;
    this.areaID = 0;
    this.spaceID = 0;
    this.recruitmentListID = 0;
    this.recruitID = __s3param0;
    this.areaID = __s3param1;
    this.spaceID = __s3param2;
    this.recruitmentListID = __s3param3;
  }
  AllianceHelpRequestRecruitParamsVO.prototype.parseParams = function (__s5param0) {
    this.recruitID = __dep_exact_f855840627e6e145.int(__s5param0.RID);
    this.areaID = __dep_exact_f855840627e6e145.int(__s5param0.AID);
    this.spaceID = __dep_exact_f855840627e6e145.int(__s5param0.SID);
    this.recruitmentListID = __dep_exact_f855840627e6e145.int(__s5param0.RLID);
  };
  AllianceHelpRequestRecruitParamsVO.prototype.isSameAs = function (__s7param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s7param0, "AllianceHelpRequestRecruitParamsVO")) {
      var __s7local0 = __s7param0;
      return this.recruitID == __s7local0.recruitID && this.areaID == __s7local0.areaID && this.spaceID == __s7local0.spaceID && this.recruitmentListID == __s7local0.recruitmentListID;
    }
    return false;
  };
  return AllianceHelpRequestRecruitParamsVO;
}();
exports.AllianceHelpRequestRecruitParamsVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IAllianceHelpRequestParamsVO");
