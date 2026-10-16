Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_C2STemporaryServerHighscoreVO = require("gge-module:export_C2STemporaryServerHighscoreVO");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleTemporaryServerEventDialogOverviewRewardItem = require("gge-module:export_CastleTemporaryServerEventDialogOverviewRewardItem");
var __s0local0 = function (__s1param0) {
  function CastleTemporaryServerEventDialogOverview(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentPoints = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTemporaryServerEventDialogOverview, __s1param0);
  CastleTemporaryServerEventDialogOverview.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.subLayerDisp.btn_enter);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.btn_info], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("panel_action_overview")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewards, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rewards")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_info.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_moreInfo_button"))).autoFitToBounds = true;
    this._textScrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.subLayerDisp.mc_descSlider), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, 0));
    if (this.subLayerDisp.mc_textScroll) {
      this._textScrollComponent.scrollVO.addMouseWheelElements([this.subLayerDisp.mc_textScroll]);
    } else {
      this._textScrollComponent.scrollVO.addMouseWheelElements([this.subLayerDisp.txt_desc]);
    }
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleTemporaryServerEventDialogOverviewRewardItem.CastleTemporaryServerEventDialogOverviewRewardItem, "TempServerOverview_ListItem", __dep_export_CastleTemporaryServerEventDialog.CastleTemporaryServerEventDialog.NAME);
    __s5local0.itemPaddingY = 10;
    __s5local0.useSmoothScroll = true;
    this._rewardScrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.subLayerDisp.mc_items).addMaskMc(this.subLayerDisp.mc_mask).addSliderMc(this.subLayerDisp.mc_items.mc_slider), __s5local0);
  };
  CastleTemporaryServerEventDialogOverview.prototype.show = function (__s9param0) {
    __s1param0.prototype.show.call(this, __s9param0);
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    this.controller.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
    this._textScrollComponent.show();
    this._rewardScrollList.onShow();
    this.updatePoints();
    this.updateDescription();
    this.updateEnterButton();
    this._rewardScrollList.updateWithNewData(this.getRewardData());
    this.subLayerDisp.mc_teaser_default.visible = !__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.isCrossPlay;
    this.subLayerDisp.mc_teaser_crossplay.visible = __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.isCrossPlay;
    if (this.subLayerDisp.mc_teaser_crossplay.visible) {
      this.subLayerDisp.mc_teaser_crossplay.gotoAndStop(__dep_export_TempServerHelper.TempServerHelper.getAssetFrame());
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STemporaryServerHighscoreVO.C2STemporaryServerHighscoreVO());
  };
  CastleTemporaryServerEventDialogOverview.prototype.hide = function () {
    this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
    this.controller.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
    this._textScrollComponent.hide();
    this._rewardScrollList.onHide();
    __s1param0.prototype.hide.call(this);
  };
  CastleTemporaryServerEventDialogOverview.prototype.updatePoints = function () {
    var __s14local0 = __dep_export_TempServerHelper.TempServerHelper.isOnTempServer;
    this.subLayerDisp.mc_pointsIcon.toolTipText = "dialog_tempServer_rankingPoints_tooltip";
    this.subLayerDisp.mc_overall_up.toolTipText = "dialog_tempServer_overallRanking_tooltip";
    this.subLayerDisp.mc_pointsIcon.visible = __s14local0;
    this.subLayerDisp.mc_overall_up.visible = __s14local0;
    this.subLayerDisp.txt_points.visible = __s14local0;
    this.subLayerDisp.txt_rewards.visible = !__s14local0;
    if (__s14local0) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this._currentPoints));
    }
  };
  CastleTemporaryServerEventDialogOverview.prototype.updateDescription = function () {
    if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.isCrossPlay) {
      this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_tempServer_overview_crossServerLive_desc"));
    } else if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
      this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_tempServer_overview_castleTransport_desc"));
    } else {
      this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_tempServer_overview_desc"));
    }
    var __s17local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, this._tfDesc.maxScrollV, __s17local0, __s17local0);
    this._textScrollComponent.setVisibility(this._tfDesc.maxScrollV > 1);
    this._textScrollComponent.scrollToPercent(0);
  };
  CastleTemporaryServerEventDialogOverview.prototype.updateEnterButton = function () {
    var __s22local0 = this.castleEnv.isOnTemporaryServer ? "dialog_tempServer_returnMainCastle_button" : "dialog_tempServer_joinTempServer_button";
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_enter.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s22local0)));
  };
  CastleTemporaryServerEventDialogOverview.prototype.getRewardData = function () {
    var __s24local0 = [];
    var __s24local1 = __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.getRewardList();
    for (var __s24local2 = __dep_exact_f855840627e6e145.int(__s24local1.length - 1); __s24local2 >= 0; --__s24local2) {
      __s24local1[__s24local2].listIndex = __s24local1.length - 1 - __s24local2;
      __s24local0.push(__s24local1[__s24local2]);
    }
    return __s24local0;
  };
  CastleTemporaryServerEventDialogOverview.prototype.onClick = function (__s28param0) {
    __s1param0.prototype.onClick.call(this, __s28param0);
    switch (__s28param0.target) {
      case this.subLayerDisp.btn_enter:
        if (!__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.castleBought) {
          __dep_exact_9e901e8e2483a22f_2.BasicDialogHandler.getInstance().registerDialogs(__dep_export_CastleSpecialServerPreBuildCastleSelectionDialog.CastleSpecialServerPreBuildCastleSelectionDialog, new __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties(__dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER));
          break;
        }
        if (this.castleEnv.isOnTemporaryServer) {
          __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_LOGOUT);
        } else {
          __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.CONNECT_TO_TEMPORARY_SERVER);
        }
        break;
      case this.subLayerDisp.btn_info:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTempServerWelcomeDialog.CastleTempServerWelcomeDialog, null, false, __dep_exact_9e901e8e2483a22f_2.BasicDialogHandler.PRIORITY_LOW);
    }
  };
  CastleTemporaryServerEventDialogOverview.prototype.onDescriptionScroll = function () {
    this._tfDesc.scrollV = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this._textScrollComponent.currentValue, 1, this._tfDesc.maxScrollV);
  };
  CastleTemporaryServerEventDialogOverview.prototype.onPointsChanged = function (__s36param0) {
    this._currentPoints = __dep_exact_f855840627e6e145.int(__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.ownOverallPoints);
    this.updatePoints();
  };
  return CastleTemporaryServerEventDialogOverview;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleTemporaryServerEventDialogOverview = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_CastleTemporaryServerEventDialog = require("gge-module:export_CastleTemporaryServerEventDialog");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionDialog = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionDialog");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionDialogProperties");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleTempServerWelcomeDialog = require("gge-module:export_CastleTempServerWelcomeDialog");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
