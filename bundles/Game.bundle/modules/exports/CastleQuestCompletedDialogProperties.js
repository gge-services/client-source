Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_BasicQuestRewardDialogProperties = require("gge-module:export_BasicQuestRewardDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleQuestCompletedDialogProperties(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.quest = __s3param0;
    if (__s3param1 && __s3param1.GEQ) {
      __s3local0.parseReward(__s3param1.GEQ);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleQuestCompletedDialogProperties, __s1param0);
  CastleQuestCompletedDialogProperties.prototype.parseReward = function (__s6param0) {
    this._randomEquipmentRewardList = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s6param0);
  };
  Object.defineProperty(CastleQuestCompletedDialogProperties.prototype, "reward", {
    get: function () {
      return this.quest.getActualRewardList();
    },
    set: function (__s10param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties.prototype, "reward").set.call(this, __s10param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestCompletedDialogProperties.prototype, "crestFrameIndex", {
    get: function () {
      return this.quest.questCategory + 1;
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties.prototype, "crestFrameIndex").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestCompletedDialogProperties.prototype, "titleText", {
    get: function () {
      return __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_questFinish_MissionComplete"));
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties.prototype, "titleText").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestCompletedDialogProperties.prototype, "descriptionText", {
    get: function () {
      return __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(this.quest.getQuestName());
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties.prototype, "descriptionText").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestCompletedDialogProperties.prototype, "randomEquipmentRewardList", {
    get: function () {
      return this._randomEquipmentRewardList;
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties.prototype, "randomEquipmentRewardList").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleQuestCompletedDialogProperties;
}(__dep_export_BasicQuestRewardDialogProperties.BasicQuestRewardDialogProperties);
exports.CastleQuestCompletedDialogProperties = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
