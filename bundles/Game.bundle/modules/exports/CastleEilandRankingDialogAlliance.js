Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleEilandRankingDialogAlliance(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentRewardPage = 1;
    __s3local0.standardXpos = 0;
    __s3local0.firstHighscoreRequest = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).initBasicButtons([__s3local0.subLayerDisp.mc_rankingContainer.btn_search, __s3local0.subLayerDisp.btn_right, __s3local0.subLayerDisp.btn_left, __s3local0.subLayerDisp.mc_rankingContainer.btn_top, __s3local0.subLayerDisp.mc_rankingContainer.btn_up, __s3local0.subLayerDisp.mc_rankingContainer.btn_down]);
    __s3local0.rankingList = new __dep_export_CastleEilandAllianceRankingComponent.CastleEilandAllianceRankingComponent(__s3local0.subLayerDisp.mc_rankingContainer);
    __s3local0.rewardInfos = __dep_export_CastleModel.CastleModel.kingdomData.eilandRewards;
    __s3local0.subLayerDisp.mc_gotReward.toolTipText = "dialog_eiland_gotReward_tooltip";
    __s3local0.standardXpos = __s3local0.getCustomRewardComponent(__s3local0.subLayerDisp.mc_reward.mc_multireward_item0).clips.itemMc.x;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandRankingDialogAlliance, __s1param0);
  CastleEilandRankingDialogAlliance.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.rankingList.show();
    this.scrollReward(this.getStartRewardPage());
    this.subLayerDisp.mc_reward.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.subLayerDisp.mc_reward.mc_c1.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.txt_forAlliance, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_forTreasury_header")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.firstHighscoreRequest = true;
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
  };
  CastleEilandRankingDialogAlliance.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.rankingList.hide();
    this.destroyCollectableRenderList();
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
  };
  CastleEilandRankingDialogAlliance.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      __s1param0.prototype.onClick.call(this, __s9param0);
      switch (__s9param0.target) {
        case this.subLayerDisp.btn_right:
          this.scrollReward(this._currentRewardPage + 1);
          break;
        case this.subLayerDisp.btn_left:
          this.scrollReward(this._currentRewardPage - 1);
      }
    }
  };
  CastleEilandRankingDialogAlliance.prototype.onGetHighscoreData = function (__s13param0) {
    if (this.firstHighscoreRequest) {
      this.firstHighscoreRequest = false;
      this.scrollReward(this.getStartRewardPage());
    }
  };
  CastleEilandRankingDialogAlliance.prototype.getStartRewardPage = function () {
    if (!__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      return CastleEilandRankingDialogAlliance.PAGE_TOP1;
    }
    var __s16local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.aquaPoints);
    if (this.rankingList.ownRank <= __dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.TOPX_MIN_RANK) {
      return CastleEilandRankingDialogAlliance.PAGE_TOP1;
    } else if (__s16local0 >= this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY6).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_TOPX;
    } else if (__s16local0 >= this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY5).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_3;
    } else if (__s16local0 >= this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY4).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_4;
    } else if (__s16local0 >= this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY3).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_5;
    } else if (__s16local0 >= this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY2).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_6;
    } else if (__s16local0 >= this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY1).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_7;
    } else {
      return CastleEilandRankingDialogAlliance.PAGE_8;
    }
  };
  CastleEilandRankingDialogAlliance.prototype.scrollReward = function (__s27param0) {
    this._currentRewardPage = __s27param0;
    this.subLayerDisp.btn_left.visible = this._currentRewardPage > 1;
    this.subLayerDisp.btn_right.visible = this._currentRewardPage < CastleEilandRankingDialogAlliance.MAX_REWARD_PAGE;
    switch (this._currentRewardPage) {
      case CastleEilandRankingDialogAlliance.PAGE_TOP1:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_top1Reward_copy"));
        this.subLayerDisp.mc_topReward.visible = true;
        this.subLayerDisp.mc_reward.visible = false;
        this.textFieldManager.registerTextField(this.subLayerDisp.mc_topReward.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_forLeader_header"));
        this.textFieldManager.registerTextField(this.subLayerDisp.mc_topReward.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_forLeader_copy"));
        if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
          this.subLayerDisp.mc_gotReward.visible = this.rankingList.ownRank == 1;
        } else {
          this.subLayerDisp.mc_gotReward.visible = false;
        }
        break;
      case CastleEilandRankingDialogAlliance.PAGE_TOPX:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_topXReward_copy", [__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.TOPX_MIN_RANK]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_TOPX));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_3:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_pointReward_copy", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY6).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY6));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_4:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_pointReward_copy", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY5).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY5));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_5:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_pointReward_copy", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY4).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY4));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_6:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_pointReward_copy", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY3).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY3));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_7:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_pointReward_copy", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY2).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY2));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_8:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_pointReward_copy", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY1).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.REWARD_BOOBY1));
    }
  };
  CastleEilandRankingDialogAlliance.prototype.applyReward = function (__s32param0) {
    this.destroyCollectableRenderList();
    var __s32local0 = __s32param0.rewardList.clone();
    var __s32local1 = this.getCustomRewardComponent(this.subLayerDisp.mc_reward.mc_decoReward, new __s0local0(60, 60));
    var __s32local2 = this.getCustomRewardComponent(this.subLayerDisp.mc_reward.mc_multireward_item0);
    var __s32local3 = this.getCustomRewardComponent(this.subLayerDisp.mc_reward.mc_multireward_item1);
    this.collectableRenderList.push(__s32local1);
    this.collectableRenderList.push(__s32local2);
    this.collectableRenderList.push(__s32local3);
    var __s32local4 = __s32local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.C2);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.mc_c2RewardValue.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s32local4.amount));
    __s32local0.removeByItem(__s32local4);
    var __s32local5 = __s32local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.C1);
    if (__s32local5 && __s32local5.amount > 0) {
      this.subLayerDisp.mc_reward.mc_c1RewardValue.visible = true;
      this.subLayerDisp.mc_reward.mc_c1.visible = true;
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.mc_c1RewardValue.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s32local5.amount));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.txt_forPlayer, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_forTreasury_header")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
      __s32local0.removeByItem(__s32local5);
    } else {
      this.subLayerDisp.mc_reward.mc_c1RewardValue.visible = false;
      this.subLayerDisp.mc_reward.mc_c1.visible = false;
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.txt_forPlayer, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_forMembers_header")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    }
    this.subLayerDisp.mc_reward.visible = true;
    __s32local2.setVisibility(false);
    __s32local3.setVisibility(false);
    __s32local1.setVisibility(false);
    if (__s32local0.containsType(__dep_export_CollectableEnum.CollectableEnum.BUILDING)) {
      __s32local1.updateWithNewVO(__s32local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.BUILDING));
      __s32local1.setVisibility(true);
    } else {
      __s32local2.clips.itemMc.x = __s32local0.length == 1 ? this.standardXpos + CastleEilandRankingDialogAlliance.SINGLE_REWARD_OFFSET.x : this.standardXpos;
      var __s32local6 = __s32local0.getItemByIndexSave(0);
      if (__s32local6) {
        __s32local2.setVisibility(true);
        __s32local2.updateWithNewVO(__s32local6);
      }
      if (__s32local6 = __s32local0.getItemByIndexSave(1)) {
        __s32local3.setVisibility(true);
        __s32local3.updateWithNewVO(__s32local6);
      }
    }
    this.subLayerDisp.mc_reward.deco_background.visible = __s32local0.containsType(__dep_export_CollectableEnum.CollectableEnum.BUILDING);
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.aquaPoints >= __s32param0.cargoPointsNeeded && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.aquaPoints > 0) {
      if (__s32param0.isTopXReward) {
        this.subLayerDisp.mc_gotReward.visible = this.rankingList.ownRank <= __dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.TOPX_MIN_RANK;
      } else {
        this.subLayerDisp.mc_gotReward.visible = true;
      }
    } else {
      this.subLayerDisp.mc_gotReward.visible = false;
    }
  };
  CastleEilandRankingDialogAlliance.prototype.getCustomRewardComponent = function (__s44param0, __s44param1 = null) {
    return new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s44param0), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, __s44param1 || CastleEilandRankingDialogAlliance.DEFAULT_ICON_DIMENSION));
  };
  CastleEilandRankingDialogAlliance.__initialize_static_members = function () {
    CastleEilandRankingDialogAlliance.SINGLE_REWARD_OFFSET = new __s0local0(23, 0);
    CastleEilandRankingDialogAlliance.DEFAULT_ICON_DIMENSION = new __s0local0(40, 40);
  };
  CastleEilandRankingDialogAlliance.MAX_REWARD_PAGE = 8;
  CastleEilandRankingDialogAlliance.PAGE_TOP1 = 1;
  CastleEilandRankingDialogAlliance.PAGE_TOPX = 2;
  CastleEilandRankingDialogAlliance.PAGE_3 = 3;
  CastleEilandRankingDialogAlliance.PAGE_4 = 4;
  CastleEilandRankingDialogAlliance.PAGE_5 = 5;
  CastleEilandRankingDialogAlliance.PAGE_6 = 6;
  CastleEilandRankingDialogAlliance.PAGE_7 = 7;
  CastleEilandRankingDialogAlliance.PAGE_8 = 8;
  return CastleEilandRankingDialogAlliance;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleEilandRankingDialogAlliance = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_CastleEilandRewardsVO = require("gge-module:export_CastleEilandRewardsVO");
var __dep_export_CastleEilandAllianceRankingComponent = require("gge-module:export_CastleEilandAllianceRankingComponent");
__s0local1.__initialize_static_members();
