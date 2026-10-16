Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeaguePromotionDialog() {
    var __s3local0 = __s1param0.call(this, SeasonLeaguePromotionDialog.NAME) || this;
    __s3local0._hasBoughtSeasonPassInThisDialog = false;
    __s3local0.hasBoughtRewardHubPassInThisDialog = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeaguePromotionDialog, __s1param0);
  SeasonLeaguePromotionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_buy], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_pickUp], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_buy.toolTipText = "dialog_seasonLeague_seasonPass_purchaseButton_promotionPass_tooltip";
  };
  SeasonLeaguePromotionDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_promotionGained_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward1, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_standardRewards_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward2, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_bonusRewards_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.promotionVO.getNameTextId())));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_promotionGained_copy", [__dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.promotionVO.getNameTextId())]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_pickUp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("collect")));
    var __s7local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive ? "status_active" : "status_inactive");
    var __s7local1 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passEventActive ? "status_active" : "status_inactive");
    var __s7local2 = __dep_exact_92d05af59ee2ff30.Localize.text(this.promotionPassActive ? "status_active" : "status_inactive");
    this.dialogDisp.mc_info.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonLeague_promotionRanks_promotionReward_tooltip", [__s7local0, __s7local1, __s7local2]);
    this.dialogDisp.mc_info.visible = !this.dialogProperties.rewardHubVO;
    this._promotionIcon = new __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent(this.dialogDisp.mc_icon, __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent.TYPE_BIG, new __s0local0(200, 200));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onPassPurchased));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.add(this.bindFunction(this.onRewardHubPassPurchased));
    this.dialogDisp.mc_item0.mc_overlay.visible = false;
    this.dialogDisp.mc_item1.mc_overlay.visible = false;
    this.dialogDisp.mc_item0.mc_background.visible = false;
    this.dialogDisp.mc_item1.mc_background.visible = false;
    this.dialogDisp.mc_rewards.mc_item0.mc_background.visible = false;
    this.dialogDisp.mc_rewards.mc_item1.mc_background.visible = false;
    this.hasBoughtSeasonPassInThisDialog = false;
    this.hasBoughtRewardHubPassInThisDialog = false;
    this.updateInfos();
  };
  SeasonLeaguePromotionDialog.prototype.updateInfos = function () {
    __dep_export_MicroServiceRequestPreloader.MicroServiceRequestPreloader.hidePreloader();
    this._promotionIcon.updateWithNewVO(this.dialogProperties.promotionVO);
    var __s9local0 = this.dialogProperties.getPromotionRewardsVO();
    if (this.isPassActive) {
      this.dialogDisp.mc_rewards.mc_item0.mc_overlay.visible = !this.dialogProperties.getPromotionRewardsVO().isUnlocked;
      this.dialogDisp.mc_rewards.mc_item1.mc_overlay.visible = !this.dialogProperties.getPromotionRewardsVO().isUnlocked;
      this.dialogDisp.mc_rewards.mc_item0.mc_background.visible = (this.hasBoughtRewardHubPassInThisDialog || this.hasBoughtSeasonPassInThisDialog || this.dialogProperties.getPromotionRewardsVO().isUnlocked) && __s9local0.premiumRewards.length > 0;
      this.dialogDisp.mc_rewards.mc_item1.mc_background.visible = (this.hasBoughtRewardHubPassInThisDialog || this.hasBoughtSeasonPassInThisDialog || this.dialogProperties.getPromotionRewardsVO().isUnlocked) && __s9local0.premiumRewards.length > 0;
      var __s9local1 = this.dialogProperties.getPromotionRewardsVO().isUnlocked ? 2 : 1;
      this.dialogDisp.mc_rewards.mc_item0.mc_background.gotoAndStop(__s9local1);
      this.dialogDisp.mc_rewards.mc_item1.mc_background.gotoAndStop(__s9local1);
      this.dialogDisp.mc_rewards.mc_lockBG.visible = false;
      this.dialogDisp.mc_rewards.mc_lock0.visible = !this.dialogProperties.getPromotionRewardsVO().isUnlocked;
      this.dialogDisp.mc_rewards.mc_lock1.visible = !this.dialogProperties.getPromotionRewardsVO().isUnlocked;
      this.dialogDisp.btn_buy.visible = !this.dialogProperties.getPromotionRewardsVO().isUnlocked;
      this.dialogDisp.mc_check2.visible = this.dialogProperties.getPromotionRewardsVO().isUnlocked;
    } else {
      this.dialogDisp.mc_rewards.mc_item0.mc_overlay.visible = __s9local0.premiumRewards.length > 0;
      this.dialogDisp.mc_rewards.mc_item1.mc_overlay.visible = __s9local0.premiumRewards.length > 0;
      this.dialogDisp.mc_rewards.mc_lockBG.visible = false;
      this.dialogDisp.mc_rewards.mc_lock0.visible = __s9local0.premiumRewards.length > 0;
      this.dialogDisp.mc_rewards.mc_lock1.visible = __s9local0.premiumRewards.length > 0;
      this.dialogDisp.btn_buy.visible = __s9local0.premiumRewards.length > 0;
      this.dialogDisp.mc_check2.visible = false;
    }
    this.updateRewards();
  };
  SeasonLeaguePromotionDialog.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onPassPurchased));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.remove(this.bindFunction(this.onRewardHubPassPurchased));
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeaguePromotionDialog.prototype.updateRewards = function () {
    var __s15local0 = this.dialogProperties.getPromotionRewardsVO();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), __s15local0.normalRewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(55, 55)), function (__s17param0) {
      __s17param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = __s17param0.itemVE && __s17param0.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp.mc_rewards, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), __s15local0.premiumRewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(55, 55)), function (__s19param0) {
      __s19param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = __s19param0.itemVE && __s19param0.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
  };
  SeasonLeaguePromotionDialog.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_buy:
          if (this.dialogProperties.rewardHubVO) {
            var __s21local0 = new __dep_export_CollectableItemUnlockAllPassVO.CollectableItemUnlockAllPassVO();
            __s21local0.hubRewardIdsToUnlock = [this.dialogProperties.rewardHubVO.hubRewardID];
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmDialog.SeasonLeagueBuyPassConfirmDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(__s21local0, this.dialogProperties.rewardHubVO.extraTierUnlockCostC2, 0, -1, -1, -1, -1, __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_PROMOTION));
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmDialog.SeasonLeagueBuyPassConfirmDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(new __dep_export_CollectableItemSeasonLeaguePromotionPassVO.CollectableItemSeasonLeaguePromotionPassVO(), __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionPrice, 0, this.dialogProperties.promotionVO.id, -1, -1, this.dialogProperties.seasonID));
          }
          break;
        case this.dialogDisp.btn_pickUp:
          if (this.dialogProperties.rewardHubVO) {
            __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.pickRewardsSignal.dispatch([this.dialogProperties.rewardHubVO.hubRewardID]);
          }
          this.hide();
      }
    }
  };
  SeasonLeaguePromotionDialog.prototype.onPassPurchased = function (__s28param0 = null) {
    if (!this.hasBoughtSeasonPassInThisDialog && this.isPassActive) {
      this.hasBoughtSeasonPassInThisDialog = true;
    }
    this.updateInfos();
  };
  Object.defineProperty(SeasonLeaguePromotionDialog.prototype, "isPassActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive || this.promotionPassActive || this.dialogProperties.isSeasonPassEnabled || this.hasBoughtSeasonPassInThisDialog || this.hasBoughtRewardHubPassInThisDialog || this.dialogProperties.getPromotionRewardsVO().isUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionDialog.prototype, "promotionPassActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.seasonLeagueData.server.boughtPromoPassForPromoID(this.dialogProperties.promotionVO.id) || this.dialogProperties.isPromoPassEnabled;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeaguePromotionDialog.prototype.onRewardHubPassPurchased = function (__s35param0 = null) {
    this.hasBoughtRewardHubPassInThisDialog ||= true;
    this.updateInfos();
    __dep_export_CastleModel.CastleModel.seasonLeagueData.server.requestKLI();
  };
  Object.defineProperty(SeasonLeaguePromotionDialog.prototype, "hasBoughtSeasonPassInThisDialog", {
    get: function () {
      return this._hasBoughtSeasonPassInThisDialog;
    },
    set: function (__s39param0) {
      this._hasBoughtSeasonPassInThisDialog = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeaguePromotionDialog.NAME = "SeasonLeagueTitlePromotion_RewardHub";
  return SeasonLeaguePromotionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SeasonLeaguePromotionDialog = __s0local1;
var __dep_export_SeasonLeaguePromotionIconComponent = require("gge-module:export_SeasonLeaguePromotionIconComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_SeasonLeagueBuyPassConfirmDialog = require("gge-module:export_SeasonLeagueBuyPassConfirmDialog");
var __dep_export_SeasonLeagueBuyPassConfirmDialogProperties = require("gge-module:export_SeasonLeagueBuyPassConfirmDialogProperties");
var __dep_export_CollectableItemSeasonLeaguePromotionPassVO = require("gge-module:export_CollectableItemSeasonLeaguePromotionPassVO");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CollectableItemUnlockAllPassVO = require("gge-module:export_CollectableItemUnlockAllPassVO");
var __dep_export_CastleRewardHubMicroservice = require("gge-module:export_CastleRewardHubMicroservice");
var __dep_export_MicroServiceRequestPreloader = require("gge-module:export_MicroServiceRequestPreloader");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
