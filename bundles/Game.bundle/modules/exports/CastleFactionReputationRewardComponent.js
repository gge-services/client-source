Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AdvancedProgressBar = require("gge-module:export_AdvancedProgressBar");
var __dep_export_HorizontalCallbackProgressBehaviour = require("gge-module:export_HorizontalCallbackProgressBehaviour");
var __dep_export_GenericEventInfoListProperties = require("gge-module:export_GenericEventInfoListProperties");
var __s0local0 = function () {
  function CastleFactionReputationRewardComponent(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._updateRewardAfterProgressbarComplete = false;
    this._tabID = 0;
    this._maxReputationPoints = 0;
    this._disp = __s3param0;
    this._nextRewardProgressbar = new __dep_export_AdvancedProgressBar.AdvancedProgressBar(this._disp.mc_factionBar.mc_bar, new __dep_export_HorizontalCallbackProgressBehaviour.HorizontalCallbackProgressBehaviour(this.bindFunction(this.onProgressAnimationUpdate), this.bindFunction(this.onProgressAnimationComplete)));
    this._rewardRenderList = new __dep_export_CollectableRendererList.CollectableRendererList();
    this._rewardList = __s3param1;
    this._pointThresholds = __s3param2;
    this._tabID = __s3param3;
    this._currentProgressbarInfo = new __s0local1();
    this._itxtCurrentReward = this.textFieldManager.registerTextField(this._disp.mc_nextReward.mc_rewards.txt_threshold, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("points"));
    var __s3local0 = this.textFieldManager.registerTextField(this._disp.btn_showRewards.txt_btnRewards, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("listRewards"));
    __s3local0.autoFitToBounds = true;
    __s3local0.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this._disp.mc_allRewards.txt_gotAllRewards, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_pointsEvent_scoreBar_allRewardsEarned"));
    this._disp.mc_factionBar.mouseChildren = false;
  }
  CastleFactionReputationRewardComponent.prototype.update = function (__s5param0, __s5param1) {
    this._maxReputationPoints = __s5param1;
    var __s5local0 = this.getReputationRewardProgressInfo(__s5param0, this._maxReputationPoints);
    __s5local0.currentRewardPoints = __s5param0;
    this.updateRewardProgressbar(__s5local0);
    if (this._updateRewardAfterProgressbarComplete) {
      this.updateProgressbarTooltip();
    } else {
      this.updateNextReward(__s5param1);
    }
  };
  CastleFactionReputationRewardComponent.prototype.updateRewardProgressbar = function (__s9param0) {
    if (this.isDefault(this._currentProgressbarInfo)) {
      this.showCurrentRewardProgress(__s9param0);
    } else if (__s9param0.nextRewardPoints != this._currentProgressbarInfo.nextRewardPoints) {
      this.showRewardReceivedProgress(__s9param0);
    } else if (__s9param0.currentRewardPoints != this._currentProgressbarInfo.currentRewardPoints) {
      this.showCurrentRewardProgress(__s9param0);
    }
  };
  CastleFactionReputationRewardComponent.prototype.showRewardReceivedProgress = function (__s14param0) {
    this._updateRewardAfterProgressbarComplete = true;
    this._nextRewardProgressbar.fromTo(this.currentProgressScale, 1);
    this._currentProgressbarInfo = __s14param0;
  };
  CastleFactionReputationRewardComponent.prototype.showCurrentRewardProgress = function (__s16param0) {
    this._nextRewardProgressbar.fromTo(this.currentProgressScale, this.calcProgressScale(__s16param0));
    this._currentProgressbarInfo = __s16param0;
  };
  CastleFactionReputationRewardComponent.prototype.onProgressAnimationUpdate = function (__s18param0, __s18param1) {
    var __s18local0 = __s18param0.target;
    this._disp.mc_factionBar.mc_seperator.x = this._disp.mc_factionBar.mc_bar.x + this._nextRewardProgressbar.getOriginBarWidth * __s18local0.scaleX;
  };
  CastleFactionReputationRewardComponent.prototype.onProgressAnimationComplete = function () {
    if (this._updateRewardAfterProgressbarComplete) {
      this._updateRewardAfterProgressbarComplete = false;
      this.updateNextReward(this._maxReputationPoints);
      this.updateProgressbarTooltip();
      if (!this.isDefault(this.getReputationRewardProgressInfo(this._maxReputationPoints, this._maxReputationPoints))) {
        this._nextRewardProgressbar.fromTo(0, this.currentProgressScale);
      }
    }
  };
  CastleFactionReputationRewardComponent.prototype.getReputationRewardProgressInfo = function (__s24param0, __s24param1) {
    var __s24local0 = new __s0local1();
    for (var __s24local1 = 0; __s24local1 < this._pointThresholds.length; __s24local1++) {
      if (this._pointThresholds[__s24local1] > __s24param1) {
        __s24local0.nextRewardPoints = __dep_exact_f855840627e6e145.int(this._pointThresholds[__s24local1]);
        for (var __s24local2 = __s24local1; __s24local2 >= 0; __s24local2--) {
          if (this._pointThresholds[__s24local2] <= __s24param0) {
            __s24local0.previousRewardPoints = __dep_exact_f855840627e6e145.int(this._pointThresholds[__s24local2]);
            break;
          }
        }
        break;
      }
    }
    return __s24local0;
  };
  CastleFactionReputationRewardComponent.prototype.updateNextReward = function (__s32param0) {
    var __s32local0 = null;
    var __s32local1 = 0;
    for (var __s32local2 = 0; __s32local2 < this._pointThresholds.length; __s32local2++) {
      if (this._pointThresholds[__s32local2] > __s32param0) {
        __s32local0 = this._rewardList[__s32local2];
        __s32local1 = this._pointThresholds[__s32local2];
        break;
      }
    }
    if (__s32local0) {
      this._disp.mc_allRewards.visible = false;
      this._disp.mc_nextReward.visible = true;
      this._itxtCurrentReward.textContentVO.textReplacements = [__s32local1];
      __dep_export_RewardRenderHelper.RewardRenderHelper.renderCollectableList(this._rewardRenderList, this._disp.mc_nextReward.mc_rewards, __s32local0);
      this._disp.mc_nextReward.mc_rewards.mc_decoration.gotoAndStop(this._rewardRenderList.collectableRenderList.length);
    } else {
      this._disp.mc_allRewards.visible = true;
      this._disp.mc_nextReward.visible = false;
    }
    this.updateProgressbarTooltip();
  };
  CastleFactionReputationRewardComponent.prototype.showAllRewards = function () {
    CastleFactionReputationRewardComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleFactionInvasionEventRewardListDialog.CastleFactionInvasionEventRewardListDialog, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION, this._tabID));
  };
  CastleFactionReputationRewardComponent.prototype.updateProgressbarTooltip = function () {
    if (this._currentProgressbarInfo.nextRewardPoints - this._currentProgressbarInfo.currentRewardPoints > 0) {
      this._disp.mc_factionBar.toolTipText = {
        t: "dialog_berimondInvasion_sp_singleReputationBar_tooltip",
        p: [this._currentProgressbarInfo.nextRewardPoints - this._currentProgressbarInfo.currentRewardPoints]
      };
    } else {
      this._disp.mc_factionBar.toolTipText = {
        t: "dialog_pointsEvent_rewardsList_rewards_all"
      };
    }
  };
  CastleFactionReputationRewardComponent.prototype.gotoCamp = function (__s45param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID, -1, -1, __s45param0));
  };
  Object.defineProperty(CastleFactionReputationRewardComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionReputationRewardComponent.prototype, "currentProgressScale", {
    get: function () {
      return this.calcProgressScale(this._currentProgressbarInfo);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionReputationRewardComponent.prototype.calcProgressScale = function (__s51param0) {
    if (this.isDefault(__s51param0)) {
      return 0;
    }
    if (__s51param0.nextRewardPoints == 0) {
      return 1;
    }
    var __s51local0 = __s51param0.nextRewardPoints - __s51param0.previousRewardPoints;
    return (__s51param0.currentRewardPoints - __s51param0.previousRewardPoints) / __s51local0;
  };
  CastleFactionReputationRewardComponent.prototype.isDefault = function (__s55param0) {
    return __s55param0.nextRewardPoints == 0 && __s55param0.currentRewardPoints == 0 && __s55param0.previousRewardPoints == 0;
  };
  Object.defineProperty(CastleFactionReputationRewardComponent, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionReputationRewardComponent;
}();
exports.CastleFactionReputationRewardComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_RewardRenderHelper = require("gge-module:export_RewardRenderHelper");
var __dep_export_CastleFactionInvasionEventRewardListDialog = require("gge-module:export_CastleFactionInvasionEventRewardListDialog");
var __s0local1 = function () {
  return function ReputationProgressbarRewardInfo() {
    this.nextRewardPoints = 0;
    this.previousRewardPoints = 0;
    this.currentRewardPoints = 0;
  };
}();
