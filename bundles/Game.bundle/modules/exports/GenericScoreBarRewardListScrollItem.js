Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function GenericScoreBarRewardListScrollItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GenericScoreBarRewardListScrollItem, __s1param0);
  GenericScoreBarRewardListScrollItem.prototype.customFillItem = function () {
    this.destroyCollectableRenderList();
    if (this.rewardScrollItemVO.collectableList.length > 0) {
      __dep_export_RewardRenderHelper.RewardRenderHelper.renderCollectableList(this, this.disp, this.rewardScrollItemVO.collectableList);
    }
    this.changeDecoration();
    this.disp.reward_received_check.visible = this.rewardScrollItemVO.received;
    var __s5local0 = this.rewardScrollItemVO.customPointTextID ? this.rewardScrollItemVO.customPointTextID : "points";
    this.textFieldManager.registerTextField(this.disp.txt_threshold, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s5local0, [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.rewardScrollItemVO.thresholdPoints)])).autoFitToBounds = true;
    if (this.rewardScrollItemVO.customGrantTypeTextID) {
      this.textFieldManager.registerTextField(this.disp.txt_forAllAllianceMembers, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.rewardScrollItemVO.customGrantTypeTextID)).autoFitToBounds = true;
    } else if (this.rewardScrollItemVO.grantType > 0) {
      this.textFieldManager.registerTextField(this.disp.txt_forAllAllianceMembers, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.rewardScrollItemVO.grantType < __dep_exact_26a421b704832cff.RewardConst.ALLIANCE_MEMBER ? "reward_forAllianceFunds" : "reward_forAllianceMembers")).autoFitToBounds = true;
    }
    if (this.disp.icon_locked) {
      this.disp.icon_locked.visible = false;
      this.disp.icon_locked.toolTipText = null;
      this.disp.toolTipText = null;
      if (!this.rewardScrollItemVO.isPlayerQualifiedForRewards) {
        this.disp.icon_locked.visible = true;
        this.disp.icon_locked.mouseChildren = false;
        this.disp.icon_locked.gotoAndStop(this.rewardScrollItemVO.collectableList.length > 1 ? 2 : 1);
        this.disp.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_pointsEvent_rewardsList_allianceContest_notQualified_tooltip");
        this.disp.icon_locked.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_pointsEvent_rewardsList_allianceContest_notQualified_tooltip");
      }
    }
  };
  GenericScoreBarRewardListScrollItem.prototype.changeDecoration = function () {
    this.disp.decoration.gotoAndStop(this.rewardScrollItemVO.collectableList.length);
  };
  GenericScoreBarRewardListScrollItem.prototype.destroyCollectableRenderList = function () {
    for (var __s14local0 = 0; __s14local0 < this._collectableRenderList.length; ++__s14local0) {
      this._collectableRenderList[__s14local0].destroy();
    }
    this._collectableRenderList = [];
  };
  GenericScoreBarRewardListScrollItem.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    this.destroyCollectableRenderList();
  };
  Object.defineProperty(GenericScoreBarRewardListScrollItem.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListScrollItem.prototype, "rewardScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListScrollItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return GenericScoreBarRewardListScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.GenericScoreBarRewardListScrollItem = __s0local0;
var __dep_export_RewardRenderHelper = require("gge-module:export_RewardRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip", "ICollectableRendererList");
