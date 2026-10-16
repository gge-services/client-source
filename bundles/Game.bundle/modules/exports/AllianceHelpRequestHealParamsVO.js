Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function AllianceHelpRequestHealParamsVO(__s3param0 = 0, __s3param1 = 0, __s3param2 = 0, __s3param3 = 0) {
    this.id = 0;
    this.hospitalListID = 0;
    this.areaID = 0;
    this.spaceID = 0;
    this.id = __s3param0;
    this.hospitalListID = __s3param1;
    this.areaID = __s3param2;
    this.spaceID = __s3param3;
  }
  AllianceHelpRequestHealParamsVO.prototype.parseParams = function (__s5param0) {
    this.id = __dep_exact_f855840627e6e145.int(__s5param0.RID);
    this.hospitalListID = __dep_exact_f855840627e6e145.int(__s5param0.T);
    this.areaID = __dep_exact_f855840627e6e145.int(__s5param0.AID);
    this.spaceID = __dep_exact_f855840627e6e145.int(__s5param0.SID);
  };
  AllianceHelpRequestHealParamsVO.prototype.isSameAs = function (__s7param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s7param0, "AllianceHelpRequestHealParamsVO")) {
      var __s7local0 = __s7param0;
      return this.id == __s7local0.id || !!this.hospitalListID && !!__s7local0.hospitalListID && this.hospitalListID == __s7local0.hospitalListID && this.areaID == __s7local0.areaID && this.spaceID == __s7local0.spaceID;
    }
    return false;
  };
  return AllianceHelpRequestHealParamsVO;
}();
exports.AllianceHelpRequestHealParamsVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IAllianceHelpRequestParamsVO");
