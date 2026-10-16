Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleLootBoxDataEvent = require("gge-module:export_CastleLootBoxDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function RewardHubMainDialog() {
    var __s3local0 = __s1param0.call(this, RewardHubMainDialog.NAME) || this;
    __s3local0.isSettingTabOpen = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubMainDialog, __s1param0);
  RewardHubMainDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_season, this.dialogDisp.btn_tab_events, this.dialogDisp.btn_tab_mysteryBox]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._subLayer = new Map();
    this._subLayer.set(RewardHubMainDialog.TAB_SEASON_REWARDS, new __dep_export_RewardHubMainDialogSeason.RewardHubMainDialogSeason(this.dialogDisp.sublayer_rewards, this));
    this._subLayer.set(RewardHubMainDialog.TAB_EVENT_REWARDS, new __dep_export_RewardHubMainDialogEvents.RewardHubMainDialogEvents(this.dialogDisp.sublayer_rewards, this));
    this._subLayer.set(RewardHubMainDialog.TAB_MYSTERY_BOXES, new __dep_export_RewardHubMainDialogMysteryBoxes.RewardHubMainDialogMysteryBoxes(this.dialogDisp.sublayer_mysteryBox, this));
    this.dialogDisp.btn_tab_season.toolTipText = "dialog_rewardHub_pending_header";
    this.dialogDisp.btn_tab_events.toolTipText = "dialog_mysteryBoxSystem_mysteryBoxHUB_header";
    this.dialogDisp.btn_tab_mysteryBox.toolTipText = "dialog_mysteryBoxSystem_mysteryBoxHUB_header";
    this.dialogDisp.btn_tab_events.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_pending_header")));
  };
  RewardHubMainDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.dialogProperties.openStartTab == null || this.dialogProperties.openStartTab == RewardHubMainDialog.TAB_SEASON_REWARDS) {
      this._currentSublayer = this._subLayer.get(RewardHubMainDialog.TAB_SEASON_REWARDS);
      __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.add(this.bindFunction(this.enableView));
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.PRE_ARRIVED, this.bindFunction(this.onPREarrived));
      __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.pickRewardsSignal.add(this.bindFunction(this.onPickRewardsInitiated));
      this.showLoadingAnimation();
      __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.getRewardsSignal.dispatch();
      this.changeCategory(RewardHubMainDialog.TAB_SEASON_REWARDS);
    } else {
      this.changeCategory(this.dialogProperties.openStartTab);
    }
    __dep_export_CastleModel.CastleModel.lootBoxData.addEventListener(__dep_export_CastleLootBoxDataEvent.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.updateTabButtonAmounts));
    this.updateTabButtonAmounts();
  };
  RewardHubMainDialog.prototype.updateTabButtonAmounts = function () {
    this.setMysteryBoxAmount(__dep_export_CastleModel.CastleModel.lootBoxData.allLootBoxAmount());
  };
  RewardHubMainDialog.prototype.onPickRewardsInitiated = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), true, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  RewardHubMainDialog.prototype.onPREarrived = function (__s15param0 = null) {
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.getRewardsSignal.dispatch();
  };
  RewardHubMainDialog.prototype.enableView = function () {
    this.clearLoadingAnimation();
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
  };
  RewardHubMainDialog.prototype.showLoadingAnimation = function () {
    this._currentSublayer.isLoading = true;
    this.lockDialog();
    var __s19local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByNameFromLibrary("LoadingAnimation"))();
    __s19local0.scaleX = __s19local0.scaleY = 3;
    __s19local0.x = __s19local0.x - __s19local0.width / 2;
    this.dialogDisp.mc_loading = __s19local0;
    this.dialogDisp.addChild(__s19local0);
    setTimeout(this.bindFunction(this.clearLoadingAnimation), 3000);
  };
  RewardHubMainDialog.prototype.clearLoadingAnimation = function () {
    if (this.dialogDisp.mc_loading) {
      if (this._currentSublayer) {
        this._currentSublayer.isLoading = false;
        this._currentSublayer.updateAllInfos();
      }
      this.unLockDialog();
      this.dialogDisp.removeChild(this.dialogDisp.mc_loading);
    }
  };
  RewardHubMainDialog.prototype.setSeasonAmount = function (__s25param0) {
    this.dialogDisp.btn_tab_season.mc_new.visible = __s25param0 > 0;
    this.dialogDisp.btn_tab_season.mc_new1.visible = __s25param0 > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_season.mc_new.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s25param0));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_season.mc_new1.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s25param0));
  };
  RewardHubMainDialog.prototype.setEventAmount = function (__s27param0) {
    this.dialogDisp.btn_tab_events.mc_new.visible = __s27param0 > 0;
    this.dialogDisp.btn_tab_events.mc_new1.visible = __s27param0 > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_events.mc_new.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s27param0));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_events.mc_new1.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s27param0));
  };
  RewardHubMainDialog.prototype.setMysteryBoxAmount = function (__s29param0) {
    this.dialogDisp.btn_tab_mysteryBox.mc_new.visible = __s29param0 > 0;
    this.dialogDisp.btn_tab_mysteryBox.mc_new1.visible = __s29param0 > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_mysteryBox.mc_new.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s29param0));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_mysteryBox.mc_new1.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s29param0));
  };
  RewardHubMainDialog.prototype.changeCategory = function (__s31param0) {
    function updateButton(__s33param0, __s33param1) {
      __s33param0.gotoAndStop(__s33param1 ? 2 : 1);
    }
    if (this._currentCategory != __s31param0) {
      __s1param0.prototype.changeCategory.call(this, __s31param0);
      this.showSublayer(this._subLayer.get(__s31param0), [this.dialogProperties.openOnGameStart, this]);
      updateButton(this.dialogDisp.btn_tab_season, this._currentCategory == RewardHubMainDialog.TAB_SEASON_REWARDS);
      updateButton(this.dialogDisp.btn_tab_events, this._currentCategory == RewardHubMainDialog.TAB_EVENT_REWARDS);
      updateButton(this.dialogDisp.btn_tab_mysteryBox, this._currentCategory == RewardHubMainDialog.TAB_MYSTERY_BOXES);
    }
  };
  RewardHubMainDialog.prototype.getHelpTextId = function () {
    if (this._currentCategory == RewardHubMainDialog.TAB_MYSTERY_BOXES) {
      return "help_mysteryBoxSystem_mysteryBoxHUB";
    } else {
      return "help_rewardHub_pending";
    }
  };
  RewardHubMainDialog.prototype.onClick = function (__s40param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s40param0.target)) {
      __s1param0.prototype.onClick.call(this, __s40param0);
      switch (__s40param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_season:
          this.changeCategory(RewardHubMainDialog.TAB_SEASON_REWARDS);
          break;
        case this.dialogDisp.btn_tab_events:
          this.changeCategory(RewardHubMainDialog.TAB_EVENT_REWARDS);
          break;
        case this.dialogDisp.btn_tab_mysteryBox:
          this.changeCategory(RewardHubMainDialog.TAB_MYSTERY_BOXES);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.getHelpTextId()));
      }
    }
  };
  RewardHubMainDialog.prototype.hideLoaded = function (__s44param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s44param0);
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.remove(this.bindFunction(this.enableView));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.PRE_ARRIVED, this.bindFunction(this.onPREarrived));
    __dep_export_CastleModel.CastleModel.lootBoxData.removeEventListener(__dep_export_CastleLootBoxDataEvent.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.updateTabButtonAmounts));
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.pickRewardsSignal.remove(this.bindFunction(this.onPickRewardsInitiated));
  };
  Object.defineProperty(RewardHubMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubMainDialog.NAME = "CastleRewardHub3";
  RewardHubMainDialog.TAB_SEASON_REWARDS = "tab_season";
  RewardHubMainDialog.TAB_EVENT_REWARDS = "tab_events";
  RewardHubMainDialog.TAB_MYSTERY_BOXES = "tab_mysteryBoxes";
  return RewardHubMainDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.RewardHubMainDialog = __s0local0;
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_RewardHubMainDialogMysteryBoxes = require("gge-module:export_RewardHubMainDialogMysteryBoxes");
var __dep_export_RewardHubMainDialogSeason = require("gge-module:export_RewardHubMainDialogSeason");
var __dep_export_RewardHubMainDialogEvents = require("gge-module:export_RewardHubMainDialogEvents");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleRewardHubMicroservice = require("gge-module:export_CastleRewardHubMicroservice");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
