Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceBattleGroundGetTowerInfoVO = require("gge-module:export_C2SAllianceBattleGroundGetTowerInfoVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogPerformanceTower(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.mainDialog = __s3param1;
    var __s3local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleAllianceBattlegroundEventDialogPerformanceTowerItem.CastleAllianceBattlegroundEventDialogPerformanceTowerItem, "CastleABGEventDialog_TowerItem", __dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.NAME);
    __s3local1.itemPaddingY = 7;
    __s3local1.useSmoothScroll = true;
    __s3local0._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0.subLayerDisp.mc_list).addMaskMc(__s3local0.subLayerDisp.mc_list.mc_mask).addSliderMc(__s3local0.subLayerDisp.mc_list.mc_slider).addItemContainerMc(__s3local0.subLayerDisp.mc_list.mc_items), __s3local1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogPerformanceTower, __s1param0);
  CastleAllianceBattlegroundEventDialogPerformanceTower.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_subTitle")));
    this.subLayerDisp.btn_alliance.actLikeButton = true;
    this.subLayerDisp.btn_player.actLikeButton = true;
    this.subLayerDisp.btn_alliance.gotoAndStop(2);
    this.subLayerDisp.btn_player.gotoAndStop(2);
    this.subLayerDisp.btn_alliance.mouseChildren = false;
    this.subLayerDisp.btn_player.mouseChildren = false;
    this.subLayerDisp.btn_tower.actLikeButton = true;
    this.subLayerDisp.btn_tower.gotoAndStop(1);
    this.subLayerDisp.btn_tower.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_alliance.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_player.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("myPerformance")));
    this.itxt_reassign = this.textFieldManager.registerTextField(this.subLayerDisp.mc_reassign.txt_time0, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_revive = this.textFieldManager.registerTextField(this.subLayerDisp.mc_revive.txt_time1, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.subLayerDisp.mc_reassign.toolTipText = "dialog_remainingTime_AllianceTower_towerReassignment_tooltip";
    this.subLayerDisp.mc_revive.toolTipText = "dialog_remainingTime_AllianceTower_playerRevive_tooltip";
    this.subLayerDisp.mc_reassign.mouseChildren = false;
    this.subLayerDisp.mc_revive.mouseChildren = false;
    this.onTimer();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO, this.bindFunction(this.updateItems));
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetTowerInfoVO.C2SAllianceBattleGroundGetTowerInfoVO(__dep_export_CastleModel.CastleModel.userData.allianceID));
    this._scrollList.onShow();
  };
  CastleAllianceBattlegroundEventDialogPerformanceTower.prototype.onTimer = function (__s7param0 = null) {
    this.itxt_reassign.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_CastleModel.CastleModel.allianceBattlegroundData.remainingSecondsTillRelink);
    this.itxt_revive.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_CastleModel.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive);
  };
  CastleAllianceBattlegroundEventDialogPerformanceTower.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO, this.bindFunction(this.updateItems));
    this._scrollList.onHide();
  };
  CastleAllianceBattlegroundEventDialogPerformanceTower.prototype.updateItems = function (__s11param0) {
    var __s11local0 = [];
    for (var __s11local1 = __s11param0.params, __s11local2 = 0; __s11local2 < __s11local1.length; __s11local2 += 2) {
      var __s11local3 = {
        vo1: __s11local1[__s11local2]
      };
      if (__s11local1.length > __s11local2 + 1) {
        __s11local3.vo2 = __s11local1[__s11local2 + 1];
      }
      __s11local0.push(__s11local3);
    }
    this._scrollList.updateWithNewData(__s11local0);
  };
  CastleAllianceBattlegroundEventDialogPerformanceTower.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    switch (__s16param0.target) {
      case this.subLayerDisp.btn_alliance:
        this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER);
        break;
      case this.subLayerDisp.btn_player:
        this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER);
        break;
      case this.subLayerDisp.btn_tower:
        this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER);
    }
  };
  return CastleAllianceBattlegroundEventDialogPerformanceTower;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogPerformanceTower = __s0local0;
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_CastleAllianceBattlegroundEventDialogPerformanceTowerItem = require("gge-module:export_CastleAllianceBattlegroundEventDialogPerformanceTowerItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
