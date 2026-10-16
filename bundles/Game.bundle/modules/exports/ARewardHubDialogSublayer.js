Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ARewardHubDialogSublayer(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.parent = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ARewardHubDialogSublayer, __s1param0);
  ARewardHubDialogSublayer.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.mc_events.btn_triggerAll, this.subLayerDisp.mc_events.btn_deleteAll, this.subLayerDisp.mc_season.btn_all, this.subLayerDisp.mc_reward.btn_config, this.subLayerDisp.mc_start.btn_config], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._checkboxStart = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.subLayerDisp.mc_start.cbx_start, true);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_start.txt_start, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rewardHub_showAtGameStart_desc"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.txt_rewardNotify, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_pending_header")));
    this.tx_empty = this.textFieldManager.registerTextField(this.subLayerDisp.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rewardHub_pending_noNotifications_desc"));
    this.subLayerDisp.mc_reward.btn_config.toolTipText = "settings";
    this.subLayerDisp.mc_start.btn_config.toolTipText = "settings";
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_season.btn_all.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_manageAll_button")));
    this.subLayerDisp.mc_reward.mc_progress.mouseChildren = false;
    this.subLayerDisp.mc_reward.mc_progress.toolTipText = "dialog_rewardHub_notificationsCapacity_pending_tt";
    this.dataList();
  };
  ARewardHubDialogSublayer.prototype.updateTabButton = function (__s7param0) {};
  ARewardHubDialogSublayer.prototype.show = function (__s9param0) {
    __s1param0.prototype.show.call(this, __s9param0);
    this.parent.isSettingTabOpen = this.subLayerDisp.mc_start.visible = __s9param0[0] || this.parent.isSettingTabOpen;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_list.mc_items);
    this._checkboxStart.selectButton = __dep_export_CastleModel.CastleModel.localData.readOpenRewardHubAtStart();
    this.parent.dialogProperties.openOnGameStart = false;
    var __s9local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_RewardHubDialogItem.RewardHubDialogItem, "RewardHubItem", __dep_export_RewardHubMainDialog.RewardHubMainDialog.NAME);
    __s9local0.itemPaddingY = 4;
    __s9local0.useSmoothScroll = true;
    this._list = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.subLayerDisp.mc_list).addSliderMc(this.subLayerDisp.mc_list.mc_slider), __s9local0);
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.add(this.bindFunction(this.updateAllInfos));
    this._list.onShow();
    this.updateAllInfos();
  };
  ARewardHubDialogSublayer.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.remove(this.bindFunction(this.updateAllInfos));
    __s1param0.prototype.hide.call(this);
  };
  ARewardHubDialogSublayer.prototype.updateAllInfos = function () {
    if (!this._isLoading) {
      var __s14local0 = this.dataList();
      this.tx_empty.visible = __s14local0.length <= 0;
      this._list.updateWithNewData(__s14local0);
      this._list.onShow();
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.mc_progress.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s14local0.length, this.inventoryLimit]));
      this.subLayerDisp.mc_reward.mc_progress.mc_bar.scaleX = Math.min(__s14local0.length / this.inventoryLimit, 1);
      this.subLayerDisp.mc_reward.mc_progress.mc_bar.gotoAndStop(__s14local0.length >= this.inventoryLimit ? 2 : 1);
    }
  };
  ARewardHubDialogSublayer.prototype.dataList = function () {
    return null;
  };
  ARewardHubDialogSublayer.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    switch (__s19param0.target) {
      case this.subLayerDisp.mc_reward.btn_config:
        this.parent.isSettingTabOpen = true;
        this.subLayerDisp.mc_start.visible = true;
        break;
      case this.subLayerDisp.mc_start.btn_config:
        this.parent.isSettingTabOpen = false;
        this.subLayerDisp.mc_start.visible = false;
        break;
      case this.subLayerDisp.mc_start.cbx_start:
        this._checkboxStart.toggleSelected();
        __dep_export_CastleModel.CastleModel.localData.saveOpenRewardHubAtStart(this._checkboxStart.isSelected);
    }
  };
  Object.defineProperty(ARewardHubDialogSublayer.prototype, "inventoryLimit", {
    get: function () {
      return 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ARewardHubDialogSublayer.prototype, "isLoading", {
    get: function () {
      return this._isLoading;
    },
    set: function (__s26param0) {
      this._isLoading = __s26param0;
      this.tx_empty.visible = !__s26param0;
    },
    enumerable: true,
    configurable: true
  });
  return ARewardHubDialogSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.ARewardHubDialogSublayer = __s0local0;
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_RewardHubMainDialog = require("gge-module:export_RewardHubMainDialog");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_RewardHubDialogItem = require("gge-module:export_RewardHubDialogItem");
var __dep_export_CastleRewardHubMicroservice = require("gge-module:export_CastleRewardHubMicroservice");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
