Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SearchListAllianceItemVO() {
    this.allianceID = 0;
    this.distance = 0;
    this.memberCount = 0;
    this.allianceHonor = 0;
    this.allianceLevel = 0;
    this.allianceLanguage = "";
  }
  SearchListAllianceItemVO.prototype.parseItem = function (__s5param0) {
    this.allianceID = __dep_exact_f855840627e6e145.int(__s5param0.AID);
    this.allianceName = __s5param0.N;
    this.distance = __s5param0.D;
    this.memberCount = __dep_exact_f855840627e6e145.int(__s5param0.M);
    this.allianceHonor = __dep_exact_f855840627e6e145.int(__s5param0.AH);
    this.allianceLevel = __dep_exact_f855840627e6e145.int(__s5param0.AL);
    this.allianceLanguage = __s5param0.ALL;
  };
  return SearchListAllianceItemVO;
}();
exports.SearchListAllianceItemVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
