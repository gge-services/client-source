Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_ModernTextScrollComponent = require("gge-module:export_ModernTextScrollComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_CastleStormIslandsMainDialog = require("gge-module:export_CastleStormIslandsMainDialog");
var __dep_export_CastleStormIslandsMainDialogOverviewRewardItem = require("gge-module:export_CastleStormIslandsMainDialogOverviewRewardItem");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleStormIslandsRulesDialog = require("gge-module:export_CastleStormIslandsRulesDialog");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionDialog = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionDialog");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionDialogProperties");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSupportKingdomControls = require("gge-module:export_CastleSupportKingdomControls");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsMainDialogOverview(__s3param0) {
    var __s3local0 = this;
    __s3local0.infoCategory = 0;
    __s3local0.rewardCategory = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsMainDialogOverview, __s1param0);
  CastleStormIslandsMainDialogOverview.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.btn_info, this.subLayerDisp.btn_enter, this.subLayerDisp.btn_right, this.subLayerDisp.btn_left, this.subLayerDisp.btn_enter, this.subLayerDisp.mc_rewardCategory.btn_right, this.subLayerDisp.mc_rewardCategory.btn_left], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_main_overview_title")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_rewardCategory.txt_rewardCategory, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_main_allianceContest_rewards")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_info.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_moreInfo")));
    var __s5local0 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.subLayerDisp.mc_desc).addMouseWheelElements([this.subLayerDisp.mc_desc]).addSliderBackground(this.subLayerDisp.mc_desc.bg_cached);
    this._textScrollComponent = new __dep_export_ModernTextScrollComponent.ModernTextScrollComponent(__s5local0, this.subLayerDisp.mc_desc.txt_desc);
    var __s5local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleStormIslandsMainDialogOverviewRewardItem.CastleStormIslandsMainDialogOverviewRewardItem, "CastleStormIslandsMainOverview_ListItem", __dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.NAME);
    __s5local1.itemPaddingY = 10;
    __s5local1.useSmoothScroll = true;
    this.subLayerDisp.mc_items.mask = this.subLayerDisp.mc_mask;
    this._rewardScrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.subLayerDisp.mc_items).addMaskMc(this.subLayerDisp.mc_mask).addSliderMc(this.subLayerDisp.mc_items.mc_slider), __s5local1);
    this._supportControls = new __dep_export_CastleSupportKingdomControls.CastleSupportKingdomControls(this.subLayerDisp.mc_send, this.kingdomVO);
  };
  CastleStormIslandsMainDialogOverview.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      this._textScrollComponent.setText(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_island_main_overview_desc"));
    } else {
      this._textScrollComponent.setText(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_island_main_overview_noAlliance_desc"));
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_enter, true);
    if (this.kingdomVO.isPaid) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_enter.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("Btn_island_travel")));
      if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == this.kingdomVO.kID && !__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInState(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP)) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_enter, false);
      }
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_enter.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_introduction_joinButton"))).autoFitToBounds = true;
    }
    this.changeInfoCategory(this.kingdomVO.isPaid ? CastleStormIslandsMainDialogOverview.INFO_SEND : CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION);
    this.subLayerDisp.btn_left.visible = this.kingdomVO.isPaid;
    this.subLayerDisp.btn_right.visible = this.kingdomVO.isPaid;
    this._rewardScrollList.onShow();
    this._rewardScrollList.updateWithNewData(this.getRewardData());
    this._supportControls.onShow();
  };
  CastleStormIslandsMainDialogOverview.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._rewardScrollList.onHide();
    this._supportControls.onHide();
  };
  CastleStormIslandsMainDialogOverview.prototype.getRewardData = function () {
    var __s16local0 = this.rewardCategory == CastleStormIslandsMainDialogOverview.REWARD_ALLIANCE ? __dep_export_CastleModel.CastleModel.kingdomData.eilandRewards.getActiveRewardItems() : __dep_export_CastleModel.CastleModel.kingdomData.eilandRewards.getActivePlayerRewardItems();
    var __s16local1 = [];
    for (var __s16local2 = __s16local0.length - 1; __s16local2 >= 0; __s16local2--) {
      __s16local1.push([__s16local0[__s16local2], __s16local0.length - 1 - __s16local2]);
    }
    return __s16local1;
  };
  CastleStormIslandsMainDialogOverview.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      switch (__s20param0.target) {
        case this.subLayerDisp.btn_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStormIslandsRulesDialog.CastleStormIslandsRulesDialog);
          break;
        case this.subLayerDisp.btn_enter:
          this.onClickEnter();
          break;
        case this.subLayerDisp.btn_left:
        case this.subLayerDisp.btn_right:
          this.changeInfoCategory(this.infoCategory == CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION ? CastleStormIslandsMainDialogOverview.INFO_SEND : CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION);
          break;
        case this.subLayerDisp.mc_rewardCategory.btn_left:
        case this.subLayerDisp.mc_rewardCategory.btn_right:
          this.changeRewardCategory(this.rewardCategory == CastleStormIslandsMainDialogOverview.REWARD_ALLIANCE ? CastleStormIslandsMainDialogOverview.REWARD_PLAYER : CastleStormIslandsMainDialogOverview.REWARD_ALLIANCE);
      }
    }
  };
  CastleStormIslandsMainDialogOverview.prototype.onClickEnter = function () {
    if (this.kingdomVO.isPaid) {
      var __s24local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this.kingdomVO.kID);
      if (__s24local0) {
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __s24local0);
      } else {
        if (__dep_export_CastleModel.CastleModel.worldmapData) {
          __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
        }
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(0, this.kingdomVO.kID));
      }
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleSpecialServerPreBuildCastleSelectionDialog.CastleSpecialServerPreBuildCastleSelectionDialog, new __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties(__dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS));
    }
  };
  Object.defineProperty(CastleStormIslandsMainDialogOverview.prototype, "kingdomVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID);
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsMainDialogOverview.prototype.changeInfoCategory = function (__s33param0) {
    this.infoCategory = __s33param0;
    this.subLayerDisp.mc_desc.visible = this.infoCategory == CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION;
    this.subLayerDisp.mc_send.visible = this.infoCategory == CastleStormIslandsMainDialogOverview.INFO_SEND;
    if (this.infoCategory == CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_subtitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_island_main_overview_displayCarousel_description"));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_subtitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_island_main_overview_displayCarousel_transferControls"));
    }
  };
  CastleStormIslandsMainDialogOverview.prototype.changeRewardCategory = function (__s37param0) {
    this.rewardCategory = __s37param0;
    this._rewardScrollList.updateWithNewData(this.getRewardData());
    if (this.rewardCategory == CastleStormIslandsMainDialogOverview.REWARD_ALLIANCE) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_rewardCategory.txt_rewardCategory, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_main_allianceContest_rewards")));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_rewardCategory.txt_rewardCategory, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_main_playerContest_rewards")));
    }
  };
  CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION = 0;
  CastleStormIslandsMainDialogOverview.INFO_SEND = 1;
  CastleStormIslandsMainDialogOverview.REWARD_ALLIANCE = 0;
  CastleStormIslandsMainDialogOverview.REWARD_PLAYER = 1;
  return CastleStormIslandsMainDialogOverview;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleStormIslandsMainDialogOverview = __s0local0;
