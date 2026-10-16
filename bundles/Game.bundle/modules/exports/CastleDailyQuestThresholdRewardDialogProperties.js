Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleDailyQuestThresholdRewardDialogProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0.threshold = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).rewardList = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s3param0.R);
    __s3local0.threshold = __s3param0.RS;
    __s3local0.renderProperties = new __dep_export_DailyQuestScoreBarProperties.DailyQuestScoreBarProperties(null);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDailyQuestThresholdRewardDialogProperties, __s1param0);
  return CastleDailyQuestThresholdRewardDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleDailyQuestThresholdRewardDialogProperties = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_DailyQuestScoreBarProperties = require("gge-module:export_DailyQuestScoreBarProperties");
