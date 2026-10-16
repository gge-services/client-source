Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function AllianceHelpRequestConstructionParamsVO(__s3param0 = 0, __s3param1 = 0, __s3param2 = 0) {
    this.kingdomID = 0;
    this.areaID = 0;
    this.objectID = 0;
    this.kingdomID = __s3param0;
    this.areaID = __s3param1;
    this.objectID = __s3param2;
  }
  AllianceHelpRequestConstructionParamsVO.prototype.parseParams = function (__s5param0) {
    this.kingdomID = __dep_exact_f855840627e6e145.int(__s5param0.KID);
    this.areaID = __dep_exact_f855840627e6e145.int(__s5param0.AID);
    this.objectID = __dep_exact_f855840627e6e145.int(__s5param0.OID);
  };
  AllianceHelpRequestConstructionParamsVO.prototype.isSameAs = function (__s7param0) {
    var __s7local0 = __dep_exact_81dacdf05bd32292.castAs(__s7param0, "AllianceHelpRequestConstructionParamsVO");
    return !!__s7local0 && this.kingdomID == __s7local0.kingdomID && this.areaID == __s7local0.areaID && this.objectID == __s7local0.objectID;
  };
  return AllianceHelpRequestConstructionParamsVO;
}();
exports.AllianceHelpRequestConstructionParamsVO = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IAllianceHelpRequestParamsVO");
