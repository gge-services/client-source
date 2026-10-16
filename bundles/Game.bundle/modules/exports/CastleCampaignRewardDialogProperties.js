Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicQuestRewardDialogProperties = require("gge-module:export_BasicQuestRewardDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleCampaignRewardDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._reward = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(__s3param0.RIDS);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCampaignRewardDialogProperties, __s1param0);
  Object.defineProperty(CastleCampaignRewardDialogProperties.prototype, "reward", {
    get: function () {
      return this._reward;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties.prototype, "reward").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCampaignRewardDialogProperties.prototype, "crestFrameIndex", {
    get: function () {
      return __dep_export_CastleQuestData.CastleQuestData.CATEGORY_CAMPAIGN + 1;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties.prototype, "crestFrameIndex").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCampaignRewardDialogProperties.prototype, "titleText", {
    get: function () {
      return __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_questFinish_TimeLimitedCampaignComplete"));
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties.prototype, "titleText").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCampaignRewardDialogProperties.prototype, "descriptionText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_questFinish_TimeLimitedCampaignComplete_description");
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties.prototype, "descriptionText").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCampaignRewardDialogProperties.prototype, "randomEquipmentRewardList", {
    get: function () {
      return null;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties.prototype, "randomEquipmentRewardList").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleCampaignRewardDialogProperties;
}(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties);
exports.CastleCampaignRewardDialogProperties = __s0local0;
var __dep_export_CastleQuestData = require("gge-module:export_CastleQuestData");
