Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleStormIslandsMainDialog = require("gge-module:export_CastleStormIslandsMainDialog");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_CastleStormIslandsMainDialogPerformanceAllianceItem = require("gge-module:export_CastleStormIslandsMainDialogPerformanceAllianceItem");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleEilandPlayerRankingItemVO = require("gge-module:export_CastleEilandPlayerRankingItemVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SAllianceMemberAquaPoints = require("gge-module:export_C2SAllianceMemberAquaPoints");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsMainDialogPerformanceAlliance(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.mainDialog = __s3param1;
    var __s3local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleStormIslandsMainDialogPerformanceAllianceItem.CastleStormIslandsMainDialogPerformanceAllianceItem, "CastleStormIslandsMainPerformanceAlliance_Item", __dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.NAME);
    __s3local1.itemPaddingY = 4;
    __s3local1.useSmoothScroll = true;
    __s3local0._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0.subLayerDisp.mc_list).addMaskMc(__s3local0.subLayerDisp.mc_list.mc_mask).addSliderMc(__s3local0.subLayerDisp.mc_list.mc_slider).addItemContainerMc(__s3local0.subLayerDisp.mc_list.mc_items), __s3local1);
    __s3local0.subLayerDisp.icon_rank.toolTipText = "rank";
    __s3local0.subLayerDisp.icon_level.toolTipText = "level";
    __s3local0.subLayerDisp.icon_aquaPoints.toolTipText = "cargo_points";
    __s3local0.subLayerDisp.mc_topContributor.icon_aquapoints.toolTipText = "cargo_points";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsMainDialogPerformanceAlliance, __s1param0);
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.subLayerDisp.btn_performanceAlliance.actLikeButton = true;
    this.subLayerDisp.btn_performancePlayer.actLikeButton = true;
    this.subLayerDisp.btn_titles.actLikeButton = true;
    this.subLayerDisp.btn_performanceAlliance.gotoAndStop(2);
    this.subLayerDisp.btn_performancePlayer.gotoAndStop(1);
    this.subLayerDisp.btn_titles.gotoAndStop(1);
    this.subLayerDisp.btn_performanceAlliance.mouseChildren = false;
    this.subLayerDisp.btn_performancePlayer.mouseChildren = false;
    this.subLayerDisp.btn_titles.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performanceAlliance.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performancePlayer.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("myPerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_titles.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_stormTitles_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_name")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_topContributor.txt_top, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("topContributor_colon"));
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
      if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceEnteredIslands) {
        this.controller.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER, this.bindFunction(this.onGetHighscoreData));
        this.subLayerDisp.txt_noAlliance.visible = false;
        this.requestHighscoreData();
      } else {
        this.subLayerDisp.mc_list.visible = false;
        this.subLayerDisp.mc_topContributor.visible = false;
        this.subLayerDisp.txt_noAlliance.visible = true;
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_noAlliance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_island_main_internalAllianceRanking_noMemberjoined_desc"));
      }
    } else {
      this.subLayerDisp.mc_list.visible = false;
      this.subLayerDisp.mc_topContributor.visible = false;
      this.subLayerDisp.txt_noAlliance.visible = true;
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_noAlliance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_island_main_internalAllianceRanking_notAllianceMember_desc"));
    }
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._scrollList.onHide();
    this.controller.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER, this.bindFunction(this.onGetHighscoreData));
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.subLayerDisp.btn_performanceAlliance:
        this.mainDialog.setCategory(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE);
        break;
      case this.subLayerDisp.btn_performancePlayer:
        this.mainDialog.setCategory(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER);
        break;
      case this.subLayerDisp.btn_titles:
        this.mainDialog.setCategory(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_TITLES);
    }
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.requestHighscoreData = function () {
    var __s16local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceId;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceMemberAquaPoints.C2SAllianceMemberAquaPoints(__s16local0));
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.onGetHighscoreData = function (__s18param0) {
    var __s18local0 = this.createHighscoreList(__s18param0.params[0].APH);
    this._scrollList.onShow();
    this._scrollList.updateWithNewData(__s18local0);
    this.subLayerDisp.mc_list.visible = true;
    this.subLayerDisp.mc_topContributor.visible = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_topContributor.txt_top_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__s18local0[0].playerName)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_topContributor.txt_top_points, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s18local0[0].aquaPoints));
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.subLayerDisp.mc_topContributor.mc_playercrest, __s18local0[0].crestVO);
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.createHighscoreList = function (__s20param0) {
    var __s20local0 = [];
    for (var __s20local1 = 0; __s20local1 < __s20param0.length; __s20local1++) {
      var __s20local2 = __s20param0[__s20local1];
      __s20local0[__s20local1] = new __dep_export_CastleEilandPlayerRankingItemVO.CastleEilandPlayerRankingItemVO(__s20local2);
    }
    __s20local0.sort(this.bindFunction(this.sort));
    __s20local1 = 0;
    for (; __s20local1 < __s20local0.length; __s20local1++) {
      __s20local0[__s20local1].rank = __s20local1 + 1;
    }
    return __s20local0;
  };
  CastleStormIslandsMainDialogPerformanceAlliance.prototype.sort = function (__s26param0, __s26param1) {
    if (!__s26param0.hasUnlockedEiland && __s26param1.hasUnlockedEiland) {
      return 1;
    } else if (__s26param0.hasUnlockedEiland && !__s26param1.hasUnlockedEiland) {
      return -1;
    } else if (__s26param0.hasUnlockedEiland || __s26param1.hasUnlockedEiland) {
      if (__s26param0.aquaPoints > __s26param1.aquaPoints) {
        return -1;
      } else if (__s26param0.aquaPoints < __s26param1.aquaPoints) {
        return 1;
      } else {
        return __s26param0.allianceRank - __s26param1.allianceRank;
      }
    } else {
      return __s26param0.allianceRank - __s26param1.allianceRank;
    }
  };
  return CastleStormIslandsMainDialogPerformanceAlliance;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleStormIslandsMainDialogPerformanceAlliance = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
