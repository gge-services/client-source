Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_C2SAllianceBattleGroundGetTimersVO = require("gge-module:export_C2SAllianceBattleGroundGetTimersVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastlePanelEvent = require("gge-module:export_CastlePanelEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function ABGAllianceTowerPanel() {
    return __s1param0.call(this, ABGAllianceTowerPanel.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGAllianceTowerPanel, __s1param0);
  ABGAllianceTowerPanel.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.txt_time0 = this.textFieldManager.registerTextField(this.panelDisp.txt_time0, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.txt_time1 = this.textFieldManager.registerTextField(this.panelDisp.txt_time1, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.txt_time2 = this.textFieldManager.registerTextField(this.panelDisp.txt_time2, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.panelDisp.mc_tt_time0.mouseChildren = false;
    this.panelDisp.mc_tt_time0.toolTipText = "currency_name_AllianceStatuette";
    this.panelDisp.mc_tt_time1.toolTipText = "dialog_remainingTime_AllianceTower_towerReassignment_tooltip";
    this.panelDisp.mc_tt_time1.mouseChildren = false;
    this.panelDisp.mc_tt_time2.toolTipText = "dialog_remainingTime_AllianceTower_playerRevive_tooltip";
    this.panelDisp.mc_tt_time2.mouseChildren = false;
    this.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
    this.onHideSpecialResources();
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetTimersVO.C2SAllianceBattleGroundGetTimersVO());
  };
  ABGAllianceTowerPanel.prototype.onHideSpecialResources = function (__s7param0 = null) {
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.panelDisp, 0.3, {
      autoAlpha: 1,
      delay: 0.3
    });
  };
  ABGAllianceTowerPanel.prototype.onShowSpecialResources = function (__s9param0) {
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.panelDisp, 0, {
      autoAlpha: 0,
      delay: 0
    });
  };
  ABGAllianceTowerPanel.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
  };
  ABGAllianceTowerPanel.prototype.onMouseOver = function (__s13param0) {
    __s1param0.prototype.onMouseOver.call(this, __s13param0);
  };
  ABGAllianceTowerPanel.prototype.updateTime = function (__s15param0 = null) {
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      var __s15local0 = __dep_exact_f855840627e6e145.int(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.allianceCurrencyID);
      var __s15local1 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage.getItemByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s15local0));
      this.txt_time0.textContentVO.numberValue = __s15local1 ? __s15local1.amount : 0;
      this.txt_time1.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_CastleModel.CastleModel.allianceBattlegroundData.remainingSecondsTillRelink);
      this.txt_time2.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_CastleModel.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive);
    } else {
      this.hide();
    }
  };
  ABGAllianceTowerPanel.prototype.updatePosition = function () {
    if (this.externalClip && this.externalClip.stage) {
      var __s19local0 = 30;
      var __s19local1 = __dep_exact_f855840627e6e145.int(this.externalClip.stage.stageWidth / 2);
      if (this.layoutManager.isOnMap) {
        __s19local0 -= 10;
        __s19local1 += 40;
      }
      this.externalClip.y = __s19local0;
      this.externalClip.x = __s19local1;
    }
  };
  ABGAllianceTowerPanel.NAME = "ABGPanelAllianceTower";
  return ABGAllianceTowerPanel;
}(require("gge-module:export_CastleExternalPanel").CastleExternalPanel);
exports.ABGAllianceTowerPanel = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
