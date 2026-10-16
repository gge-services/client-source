Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastlePanelEvent = require("gge-module:export_CastlePanelEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = function (__s1param0) {
  function ABGAllianceTowerPointMalusInfoPanel() {
    return __s1param0.call(this, ABGAllianceTowerPointMalusInfoPanel.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGAllianceTowerPointMalusInfoPanel, __s1param0);
  ABGAllianceTowerPointMalusInfoPanel.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.panelDisp.mc_malus.toolTipText = "statuetteMalusInfo_tt";
    this.panelDisp.mc_malus.mouseChildren = false;
    this.panelDisp.mc_info.toolTipText = "help_StatuetteMalusInfo_tt";
    this.panelDisp.mc_info.mouseChildren = false;
    this.updateData();
    this.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
    this.onHideSpecialResources();
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.onHideSpecialResources = function (__s7param0 = null) {
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.panelDisp, 0.3, {
      autoAlpha: 1,
      delay: 0.3
    });
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.onShowSpecialResources = function (__s9param0) {
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.panelDisp, 0, {
      autoAlpha: 0,
      delay: 0
    });
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.updateData = function () {
    this.updateTime();
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.updateTime = function (__s15param0 = null) {
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      var __s15local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage.getItemByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_STATUETTE_MALUS));
      var __s15local1 = __s15local0 ? __s15local0.amount : 0;
      if (__s15local1 == 0) {
        this.textFieldManager.registerTextField(this.panelDisp.txt_malus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s15local1])).color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      } else {
        this.textFieldManager.registerTextField(this.panelDisp.txt_malus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s15local1])).color = __dep_export_ClientConstColor.ClientConstColor.MODERN_RED2;
      }
    } else {
      this.hide();
    }
  };
  ABGAllianceTowerPointMalusInfoPanel.prototype.updatePosition = function () {
    if (this.externalClip && this.externalClip.stage) {
      this.externalClip.y = 65;
      this.externalClip.x = this.externalClip.stage.stageWidth / 2;
      if (this.layoutManager.isOnMap) {
        this.externalClip.y -= 10;
        this.externalClip.x += 40;
      }
    }
  };
  ABGAllianceTowerPointMalusInfoPanel.NAME = "ABGAllianceTowerPointMalusInfo";
  return ABGAllianceTowerPointMalusInfoPanel;
}(require("gge-module:export_CastleExternalPanel").CastleExternalPanel);
exports.ABGAllianceTowerPointMalusInfoPanel = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
