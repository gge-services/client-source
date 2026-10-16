Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __s0local0 = function (__s1param0) {
  function C2SAllianceAnswerTopicVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.TID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).TID = __s3param0;
    __s3local0.RT = __dep_exact_9e901e8e2483a22f_1.TextValide.getValideSmartFoxJSONTextMessage(__dep_export_CastleAllianceForumData.CastleAllianceForumData.getForumValidText(__s3param1));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SAllianceAnswerTopicVO, __s1param0);
  C2SAllianceAnswerTopicVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_ALLIANCE_ANSWER_TOPIC;
  };
  return C2SAllianceAnswerTopicVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SAllianceAnswerTopicVO = __s0local0;
