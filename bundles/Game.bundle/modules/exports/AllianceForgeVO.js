Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  return function AllianceForgeVO(__s3param0) {
    this.allianceForgeID = 0;
    this.level = 0;
    this.forgingCostC1 = 0;
    this.allianceForgeID = parseInt(__s3param0.allianceForgeID || "");
    this.level = parseInt(__s3param0.level || "");
    this.forgingCostC1 = parseInt(__s3param0.forgingCostC1 || "");
  };
}();
exports.AllianceForgeVO = __s0local0;
