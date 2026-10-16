Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastlePaymentRewardSpecialOfferFinishDialogProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0.rewardCount = 0;
    __s3local0.rewardId = 0;
    __s3local0.wonRubies = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).rewardCount = __s3param0.RC;
    __s3local0.rewardId = __s3param0.RID ? __s3param0.RID : -1;
    __s3local0.definedRarenessEquipmentList = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s3param0.RW);
    __s3local0.finalRewardList = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s3param0.RW);
    __s3local0.wonRubies = __s3param0.WR;
    if (__s3param0.R) {
      __s3local0.parseReward(__s3param0.R);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePaymentRewardSpecialOfferFinishDialogProperties, __s1param0);
  CastlePaymentRewardSpecialOfferFinishDialogProperties.prototype.parseReward = function (__s6param0) {
    this.randomEquipmentRewardList = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s6param0);
  };
  return CastlePaymentRewardSpecialOfferFinishDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastlePaymentRewardSpecialOfferFinishDialogProperties = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
