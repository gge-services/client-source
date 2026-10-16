Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_AllianceQuestVO = require("gge-module:export_AllianceQuestVO");
var __s0local0 = function () {
  function AllianceQuestData(__s3param0) {
    var __s3local0 = this;
    this.allianceQuests = new Map();
    var __s3local1 = __s3param0.allianceQuests;
    if (__s3local1) {
      __s3local1.forEach(function (__s6param0) {
        var __s6local0 = new __dep_export_AllianceQuestVO.AllianceQuestVO();
        __s6local0.fillFromParamXML(__s6param0);
        __s3local0.allianceQuests.set(__s6local0.allianceQuestID, __s6local0);
      });
    }
  }
  AllianceQuestData.prototype.getAllianceQuestByID = function (__s8param0) {
    if (this.allianceQuests.has(__s8param0)) {
      return this.allianceQuests.get(__s8param0);
    } else {
      return null;
    }
  };
  AllianceQuestData.prototype.getMaxAttempts = function () {
    return AllianceQuestData.MAX_ATTEMPTS;
  };
  AllianceQuestData.MAX_ATTEMPTS = 11;
  return AllianceQuestData;
}();
exports.AllianceQuestData = __s0local0;
