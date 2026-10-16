Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_export_RewardHubManagedListItem = require("gge-module:export_RewardHubManagedListItem");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRewardHubPickAllDialog = require("gge-module:export_CastleRewardHubPickAllDialog");
var __dep_export_CastleRewardHubPickAllDialogProperties = require("gge-module:export_CastleRewardHubPickAllDialogProperties");
var __dep_export_SeasonLeagueBuyPassConfirmDialog = require("gge-module:export_SeasonLeagueBuyPassConfirmDialog");
var __dep_export_SeasonLeagueBuyPassConfirmDialogProperties = require("gge-module:export_SeasonLeagueBuyPassConfirmDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CollectableItemUnlockAllPassVO = require("gge-module:export_CollectableItemUnlockAllPassVO");
var __dep_export_RewardHubData = require("gge-module:export_RewardHubData");
var __dep_export_CastleRewardHubMicroservice = require("gge-module:export_CastleRewardHubMicroservice");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __s0local0 = function (__s1param0) {
  function RewardHubManageAllDialog() {
    return __s1param0.call(this, RewardHubManageAllDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubManageAllDialog, __s1param0);
  RewardHubManageAllDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_pick_all.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("collectAll")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_unlock_all.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("unlockAll")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_manageAll_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rewardHub_manageAll_desc"));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_pick_all, this.dialogDisp.btn_unlock_all], __dep_exact_84d43d9c404bd4d8.ClickFeedbackButtonHover);
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    var __s5local0 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s5local0.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s5local0.disableButtons = true;
    __s5local0.scrollStepPixels = 154;
    this._scrollList = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.dialogDisp.mc_items, __s5local0);
  };
  RewardHubManageAllDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateItems();
    this._scrollList.show();
    this.updatePurchaseButton();
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.add(this.bindFunction(this.updateDialog));
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.add(this.bindFunction(this.updateDialog));
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.upgradeRewardsSignal.add(this.bindFunction(this.onUpgradeRewardsInitiated));
  };
  RewardHubManageAllDialog.prototype.clearDialog = function () {
    this._scrollList.clear();
  };
  RewardHubManageAllDialog.prototype.onUpgradeRewardsInitiated = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  RewardHubManageAllDialog.prototype.updateDialog = function () {
    if (__dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs.length == 0) {
      this.clearDialog();
      this.hideLoaded();
      return;
    }
    this.layoutManager.hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
    this.dialogProperties.updateItemVOs();
    this.updatePurchaseButton();
    this.updateItems();
  };
  RewardHubManageAllDialog.prototype.updateItems = function () {
    this._scrollList.clear();
    var __s16local0 = [];
    for (var __s16local1 = 0, __s16local2 = this.dialogProperties.listItemVOs; __s16local1 < __s16local2.length; __s16local1++) {
      var __s16local3 = __s16local2[__s16local1];
      var __s16local4 = new __dep_export_RewardHubManagedListItem.RewardHubManagedListItem(__s16local3, RewardHubManageAllDialog.itemProperties, false);
      __s16local0.push(__s16local4);
    }
    for (var __s16local5 = 0; __s16local5 < __s16local0.length; __s16local5++) {
      this._scrollList.addItem(__s16local0[__s16local5], __s16local5, true);
    }
    this._scrollList.show();
    this._scrollList.scrollToTop();
  };
  RewardHubManageAllDialog.prototype.hideLoaded = function (__s22param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this._scrollList.hide();
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.remove(this.bindFunction(this.updateDialog));
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.remove(this.bindFunction(this.updateDialog));
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.upgradeRewardsSignal.remove(this.bindFunction(this.onUpgradeRewardsInitiated));
  };
  RewardHubManageAllDialog.prototype.onClick = function (__s24param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      __s1param0.prototype.onClick.call(this, __s24param0);
      switch (__s24param0.target) {
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("generic_help", __dep_exact_92d05af59ee2ff30.Localize.text("help_rewardHub_manageAll"));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_pick_all:
          this.onPickAllClick();
          break;
        case this.dialogDisp.btn_unlock_all:
          this.onUnlockAllClick();
      }
    }
  };
  RewardHubManageAllDialog.prototype.onPickAllClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRewardHubPickAllDialog.CastleRewardHubPickAllDialog, new __dep_export_CastleRewardHubPickAllDialogProperties.CastleRewardHubPickAllDialogProperties(this.hasLockedRewards()));
  };
  RewardHubManageAllDialog.prototype.hasLockedRewards = function () {
    var __s30local0;
    for (var __s30local1 = 0; __s30local1 < this.dialogProperties.listItemVOs.length; __s30local1++) {
      __s30local0 = this.dialogProperties.listItemVOs[__s30local1];
      for (var __s30local2 = 0; __s30local2 < __s30local0.rewardsTiers.length; __s30local2++) {
        if (__s30local0.rewardsTiers[__s30local2].rewardType == __dep_export_RewardHubData.RewardHubData.REWARD_TYPE_EXTRA && !__s30local0.isExtraTierUnlocked) {
          return true;
        }
      }
    }
    return false;
  };
  RewardHubManageAllDialog.prototype.onUnlockAllClick = function () {
    this.calculateUnlockCosts();
    var __s37local0 = new __dep_export_CollectableItemUnlockAllPassVO.CollectableItemUnlockAllPassVO();
    __s37local0.hubRewardIdsToUnlock = this._rewardIdsToUnlock;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmDialog.SeasonLeagueBuyPassConfirmDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(__s37local0, this._unlockCosts, 0, -1, -1, -1, -1, __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_ALL));
  };
  RewardHubManageAllDialog.prototype.updatePurchaseButton = function () {
    this.calculateUnlockCosts();
    if (this._unlockCosts == 0 && this._rewardIdsToUnlock.length == 0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_unlock_all, false);
      this.dialogDisp.btn_unlock_all.mouseEnabled = false;
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_unlock_all, true);
      this.dialogDisp.btn_unlock_all.mouseEnabled = true;
    }
  };
  RewardHubManageAllDialog.prototype.calculateUnlockCosts = function () {
    var __s43local0;
    this._unlockCosts = 0;
    this._rewardIdsToUnlock = [];
    for (var __s43local1 = 0; __s43local1 < this.dialogProperties.listItemVOs.length; __s43local1++) {
      if (!(__s43local0 = this.dialogProperties.listItemVOs[__s43local1]).isExtraTierUnlocked && __s43local0.extraTierUnlockCostC2 > 0) {
        this._unlockCosts += __s43local0.extraTierUnlockCostC2;
        this._rewardIdsToUnlock.push(__s43local0.hubRewardID);
      }
    }
  };
  Object.defineProperty(RewardHubManageAllDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubManageAllDialog.__initialize_static_members = function () {
    RewardHubManageAllDialog.itemProperties = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 6, 0, 0), true, 0.2, 0.2, true);
  };
  RewardHubManageAllDialog.NAME = "CastleRewardHubManageAll";
  return RewardHubManageAllDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.RewardHubManageAllDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
