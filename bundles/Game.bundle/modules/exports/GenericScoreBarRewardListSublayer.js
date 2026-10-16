Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicPointEventRewardListScrollItemVO = require("gge-module:export_CastleBasicPointEventRewardListScrollItemVO");
var __s0local0 = function (__s1param0) {
  function GenericScoreBarRewardListSublayer(__s3param0) {
    var __s3local0 = this;
    __s3local0._rewardPerPage = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._rewardPerPage = __s3local0.countRewardsPerPage();
    __s3local0._rewardScrollListComponent = new __dep_export_CastleBasicItemListScrollComponent.CastleBasicItemListScrollComponent(__s3local0.subLayerDisp.btn_down, __s3local0.subLayerDisp.btn_up, __s3local0.subLayerDisp.txt_page_counter, __s3local0._rewardPerPage);
    __s3local0._itxt_rewardsDesc = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GenericScoreBarRewardListSublayer, __s1param0);
  GenericScoreBarRewardListSublayer.prototype.countRewardsPerPage = function () {
    for (var __s5local0 = 0; this.subLayerDisp["reward_" + __s5local0];) {
      __s5local0++;
    }
    return __s5local0;
  };
  GenericScoreBarRewardListSublayer.prototype.show = function (__s9param0) {
    __s1param0.prototype.show.call(this, __s9param0);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_pointsEvent_rewardsList_header"));
    if (this.dialogProperties.additionalText && this.subLayerDisp.txt_additionalText) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_additionalText, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s9param0.additionalText));
    }
    this.initScrollList();
    this.updateRewardDesc();
    this.setupRewardScrollList();
  };
  GenericScoreBarRewardListSublayer.prototype.setupRewardScrollList = function () {
    this._rewardScrollListComponent.amountOfItems = this.dialogProperties.pointThreshholds.length;
    this._rewardScrollListComponent.startItemIndex = this.dialogProperties.rewardsReceived;
    this._rewardScrollListComponent.show(this._itemScrollList);
  };
  GenericScoreBarRewardListSublayer.prototype.initScrollList = function () {
    this.disposeScrollList();
    this._itemScrollList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.subLayerDisp);
    this._itemScrollList.scrollInstanceName = "reward_";
    this._itemScrollList.scrollStep = this._rewardPerPage;
    this._itemScrollList.scrollItemClass = __dep_export_GenericScoreBarRewardListScrollItem.GenericScoreBarRewardListScrollItem;
    this.populateScrollList(this._itemScrollList);
  };
  GenericScoreBarRewardListSublayer.prototype.populateScrollList = function (__s16param0) {
    for (var __s16local0 = 0; __s16local0 < this.dialogProperties.pointThreshholds.length; __s16local0++) {
      var __s16local1 = new __dep_export_CastleBasicPointEventRewardListScrollItemVO.CastleBasicPointEventRewardListScrollItemVO();
      __s16local1.collectableList = this.dialogProperties.rewardList[__s16local0];
      __s16local1.received = __s16local0 < this.dialogProperties.rewardsReceived;
      __s16local1.thresholdPoints = __dep_exact_f855840627e6e145.int(this.dialogProperties.pointThreshholds[__s16local0]);
      __s16local1.grantType = __dep_exact_f855840627e6e145.int(this.dialogProperties.rewardList[__s16local0].grantType);
      __s16local1.customPointTextID = this.dialogProperties.customPointTextID;
      __s16local1.customGrantTypeTextID = this.dialogProperties.customGrantTypeTextID;
      __s16local1.isPlayerQualifiedForRewards = this.dialogProperties.isPlayerQualifiedForRewards();
      __s16param0.pushContent(__s16local1);
    }
  };
  GenericScoreBarRewardListSublayer.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  GenericScoreBarRewardListSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._rewardScrollListComponent.hide();
    this.disposeScrollList();
  };
  GenericScoreBarRewardListSublayer.prototype.showHelp = function () {
    __s1param0.prototype.showHelp.call(this);
  };
  GenericScoreBarRewardListSublayer.prototype.updateRewardDesc = function () {
    if (this.dialogProperties.isPlayerQualifiedForRewards()) {
      if (this.dialogProperties.rewardsReceived < this.dialogProperties.rewardList.length) {
        this._itxt_rewardsDesc.textContentVO.textId = "dialog_pointsEvent_rewardsList_rewards";
        this._itxt_rewardsDesc.textContentVO.textReplacements = [this.dialogProperties.rewardsReceived, this.dialogProperties.pointThreshholds.length];
      } else {
        this._itxt_rewardsDesc.textContentVO.textId = "dialog_pointsEvent_rewardsList_rewards_all";
      }
    } else {
      if (this.dialogProperties.rewardsReceived == 1) {
        this._itxt_rewardsDesc.textContentVO.textId = "dialog_pointsEvent_rewardsList_allianceContest_notQualified_rewards_singular";
      } else {
        this._itxt_rewardsDesc.textContentVO.textId = "dialog_pointsEvent_rewardsList_allianceContest_notQualified_rewards_plural";
      }
      this._itxt_rewardsDesc.textContentVO.textReplacements = [0, this.dialogProperties.rewardList.length, this.dialogProperties.rewardsReceived];
    }
  };
  Object.defineProperty(GenericScoreBarRewardListSublayer.prototype, "dialogProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  return GenericScoreBarRewardListSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.GenericScoreBarRewardListSublayer = __s0local0;
var __dep_export_CastleBasicItemListScrollComponent = require("gge-module:export_CastleBasicItemListScrollComponent");
var __dep_export_GenericScoreBarRewardListScrollItem = require("gge-module:export_GenericScoreBarRewardListScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
