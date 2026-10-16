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
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __dep_export_AllianceRaidEventDialogBossRewardItem = require("gge-module:export_AllianceRaidEventDialogBossRewardItem");
var __dep_export_AllianceRaidEventDialogRewardTab = require("gge-module:export_AllianceRaidEventDialogRewardTab");
var __dep_export_AllianceRaidEventMainDialog = require("gge-module:export_AllianceRaidEventMainDialog");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventDialogBossDefeatRewards(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogBossDefeatRewards, __s1param0);
  AllianceRaidEventDialogBossDefeatRewards.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_are_bossdefeatreward_description"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_nextThreshold, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_are_bossdefeatreward_eligibility"));
    this._itxt_points = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_progress, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_AllianceRaidEventDialogBossRewardItem.AllianceRaidEventDialogBossRewardItem, "ARE_Main_BossRewardItem", __dep_export_AllianceRaidEventMainDialog.AllianceRaidEventMainDialog.NAME);
    __s5local0.useSmoothScroll = true;
    __s5local0.sliderInvisibleWhenNotScrollable = true;
    __s5local0.itemPaddingY = 4;
    this._rewardList = this.createScrollList(this.subLayerDisp, __s5local0);
  };
  AllianceRaidEventDialogBossDefeatRewards.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.updateRewards();
    this.updateGeneralIcon();
    var __s7local0 = this.getDisplayedStageVO();
    if (__s7local0) {
      this.subLayerDisp.icon_help.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_are_bossdefeatreward_tooltip", [__s7local0.wallPointFactor, __s7local0.courtyardPointFactor]);
    }
    this.subLayerDisp.icon_help.mouseChildren = false;
    this.controller.addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  AllianceRaidEventDialogBossDefeatRewards.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._rewardList) {
      this._rewardList.onHide();
    }
    if (this._generalIcon) {
      this._generalIcon.onHide();
      this._generalIcon = null;
    }
    this.controller.removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  AllianceRaidEventDialogBossDefeatRewards.prototype.updateGeneralIcon = function () {
    if (this.subLayerDisp.mc_general) {
      if (this._generalIcon) {
        this._generalIcon.onHide();
      }
      var __s14local0 = this.getDisplayedStageVO();
      var __s14local1 = __s14local0 ? __dep_export_CastleModel.CastleModel.generalsData.npcGenerals.get(__s14local0.generalID) : null;
      this._generalIcon = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(__s14local1, this.subLayerDisp.mc_general, false, false, false, true, null, false, false, false);
      this._generalIcon.disp.scaleX = this._generalIcon.disp.scaleY = AllianceRaidEventDialogBossDefeatRewards.GENERAL_ICON_SCALE;
      this._generalIcon.disp.y = -AllianceRaidEventDialogBossDefeatRewards.GENERAL_ICON_CENTER_Y * AllianceRaidEventDialogBossDefeatRewards.GENERAL_ICON_SCALE;
      this._generalIcon.onShow();
    }
  };
  Object.defineProperty(AllianceRaidEventDialogBossDefeatRewards.prototype, "titleText", {
    get: function () {
      var __s18local0 = this.getDisplayedBossVO();
      if (__s18local0) {
        return __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_bossdefeatreward_title", [__dep_exact_92d05af59ee2ff30.Localize.text(__s18local0.getBossNameTextID())]);
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventDialogBossDefeatRewards.prototype.updateRewards = function () {
    var __s22local0 = this.getDisplayedBossVO();
    if (__s22local0) {
      var __s22local1 = this.isDisplayingActiveBoss ? this.eventVO.currentBossLevelPoints : 0;
      var __s22local2 = this.getDisplayedLevelVO(__s22local0);
      if (__s22local2) {
        var __s22local3 = __s22local0.bossLevels;
        var __s22local4 = (__s22local3 = __s22local3.filter(function (__s26param0) {
          return __s26param0.level >= __s22local2.level;
        }))[0].minPointsForBossRewards;
        this._itxt_points.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s22local1), new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s22local4)]);
        this.subLayerDisp.mc_progress.progressBar.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s22local1 / __s22local4, 0, 1);
        this._rewardList.onShow();
        this._rewardList.updateWithNewData(__s22local3);
      }
    }
  };
  AllianceRaidEventDialogBossDefeatRewards.prototype.onUpdatePoints = function (__s28param0) {
    this.updateRewards();
  };
  AllianceRaidEventDialogBossDefeatRewards.prototype.onClick = function (__s30param0) {
    __s1param0.prototype.onClick.call(this, __s30param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s30param0.target)) {
      __s30param0.target;
    }
  };
  AllianceRaidEventDialogBossDefeatRewards.GENERAL_ICON_SCALE = 0.5;
  AllianceRaidEventDialogBossDefeatRewards.GENERAL_ICON_CENTER_Y = 46;
  return AllianceRaidEventDialogBossDefeatRewards;
}(__dep_export_AllianceRaidEventDialogRewardTab.AllianceRaidEventDialogRewardTab);
exports.AllianceRaidEventDialogBossDefeatRewards = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
