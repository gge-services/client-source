Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleSurveyMessageDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.surveyId = 0;
    __s3local0.surveyType = -1;
    __s3local0.isOldSurvey = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).surveyId = __s3param0;
    __s3local0.questions = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSurveyMessageDialogProperties, __s1param0);
  return CastleSurveyMessageDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleSurveyMessageDialogProperties = __s0local0;
