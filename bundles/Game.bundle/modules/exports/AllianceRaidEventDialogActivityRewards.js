Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_AllianceRaidEventDialogActivityRewardItem = require("gge-module:export_AllianceRaidEventDialogActivityRewardItem");
var __dep_export_AllianceRaidEventDialogRewardTab = require("gge-module:export_AllianceRaidEventDialogRewardTab");
var __dep_export_AllianceRaidEventMainDialog = require("gge-module:export_AllianceRaidEventMainDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AllianceRaidEventDialogActivityRewards(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogActivityRewards, __s1param0);
  AllianceRaidEventDialogActivityRewards.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_are_activityreward_description"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_nextThreshold, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_are_activityreward_nexttreshold"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_nextRewards, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_are_activityreward_nextreward"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_completed.txt_completed, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_are_activityreward_allrewardsreached"));
    this._itxt_points = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_progress, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_AllianceRaidEventDialogActivityRewardItem.AllianceRaidEventDialogActivityRewardItem, "ARE_Main_ActivityRewardItem", __dep_export_AllianceRaidEventMainDialog.AllianceRaidEventMainDialog.NAME);
    __s5local0.isMultiColumn = true;
    __s5local0.useSmoothScroll = true;
    __s5local0.sliderInvisibleWhenNotScrollable = true;
    __s5local0.itemPaddingY = 7;
    __s5local0.itemPaddingX = 7;
    this._rewardList = this.createScrollList(this.subLayerDisp, __s5local0);
  };
  AllianceRaidEventDialogActivityRewards.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this._rewardList.onShow();
    this.updateRewards();
    var __s7local0 = this.getDisplayedStageVO();
    if (__s7local0) {
      this.subLayerDisp.icon_help.toolTipText = {
        t: "dialog_are_activityreward_tooltip",
        p: [__s7local0.wallPointFactor, __s7local0.courtyardPointFactor]
      };
    }
    this.subLayerDisp.icon_help.mouseChildren = false;
    this.controller.addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  AllianceRaidEventDialogActivityRewards.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._rewardList) {
      this._rewardList.onHide();
    }
    this.controller.removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  Object.defineProperty(AllianceRaidEventDialogActivityRewards.prototype, "titleText", {
    get: function () {
      return __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_activityreward_title");
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventDialogActivityRewards.prototype.updateRewards = function () {
    var __s15local0 = this.eventVO.scoreEventVO.rewardLists;
    var __s15local1 = this.eventVO.scoreEventVO.pointThresholds;
    var __s15local2 = __s15local1.length > 0;
    var __s15local3 = this.eventVO.scoreEventVO.ownPoints;
    var __s15local4 = Math.min(this.eventVO.scoreEventVO.rewardsReceived, __s15local1.length - 1);
    var __s15local5 = __s15local4 - 1 >= 0 ? __s15local1[__s15local4 - 1] : 0;
    var __s15local6 = __s15local1[__s15local4];
    this._itxt_points.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s15local3 || 0), new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s15local6 || 0)]);
    this.subLayerDisp.mc_progress.progressBar.scaleX = __s15local2 ? __dep_exact_9e901e8e2483a22f.MathBase.clamp((__s15local3 - __s15local5) / (__s15local6 - __s15local5), 0, 1) : 0;
    var __s15local7 = this.eventVO.scoreEventVO.rewardsReceived >= __s15local1.length;
    this.subLayerDisp.mc_completed.visible = __s15local7;
    this.subLayerDisp.item0.visible = this.subLayerDisp.item1.visible = !__s15local7;
    if (!__s15local7) {
      var __s15local8 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(64, 62));
      var __s15local9 = __s15local0[__s15local4];
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.subLayerDisp, "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), __s15local9, __s15local8);
    }
    var __s15local10 = [];
    for (var __s15local11 = 0; __s15local11 < __s15local0.length; __s15local11++) {
      __s15local10.push({
        rewards: __s15local0[__s15local11],
        threshold: __s15local1[__s15local11]
      });
    }
    this._rewardList.updateWithNewData(__s15local10);
  };
  AllianceRaidEventDialogActivityRewards.prototype.onUpdatePoints = function (__s20param0) {
    this.updateRewards();
  };
  AllianceRaidEventDialogActivityRewards.prototype.onClick = function (__s22param0) {
    __s1param0.prototype.onClick.call(this, __s22param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s22param0.target)) {
      __s22param0.target;
    }
  };
  return AllianceRaidEventDialogActivityRewards;
}(__dep_export_AllianceRaidEventDialogRewardTab.AllianceRaidEventDialogRewardTab);
exports.AllianceRaidEventDialogActivityRewards = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
