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
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ABGAllianceCollectorPointDepletionInfoPanel() {
    return __s1param0.call(this, ABGAllianceCollectorPointDepletionInfoPanel.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGAllianceCollectorPointDepletionInfoPanel, __s1param0);
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.onClick = function (__s5param0) {
    if (!this.isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      __s1param0.prototype.onClick.call(this, __s5param0);
      switch (__s5param0.target) {
        case this.panelDisp.mc_info:
      }
    }
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.panelDisp.mc_disabled.toolTipText = "depletion_influence_tt";
    if (this.boosterBuildingVO) {
      this.panelDisp.mc_info.toolTipText = {
        t: "help_depletion_influence_tt",
        p: [this.boosterBuildingVO.mineVO.maxInfluencePoints]
      };
    }
    this.updateData();
    this.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
    this.onHideSpecialResources();
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.onHideSpecialResources = function (__s12param0 = null) {
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.panelDisp, 0.3, {
      autoAlpha: 1,
      delay: 0.3
    });
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.onShowSpecialResources = function (__s14param0) {
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.panelDisp, 0, {
      autoAlpha: 0,
      delay: 0
    });
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.hideLoaded = function (__s16param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.updateData = function () {
    this.updateTime();
  };
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.updateTime = function (__s20param0 = null) {
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      var __s20local0 = this.boosterBuildingVO;
      if (__s20local0) {
        this.textFieldManager.registerTextField(this.panelDisp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f.TimeStringHelper.getHoureMinutesTimeString(__s20local0.timeTillEmptyInSeconds)));
      }
    } else {
      this.hide();
    }
  };
  Object.defineProperty(ABGAllianceCollectorPointDepletionInfoPanel.prototype, "boosterBuildingVO", {
    get: function () {
      var __s25local0 = __dep_export_Iso.Iso.renderer.objects.innerBuildings.list;
      if (__s25local0 != null) {
        for (var __s25local1 = 0, __s25local2 = __s25local0; __s25local1 < __s25local2.length; __s25local1++) {
          var __s25local3 = __s25local2[__s25local1];
          if (__s25local3 !== undefined && __s25local3.buildingVO.name == "MetropolisBooster") {
            return __s25local3.buildingVO;
          }
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  ABGAllianceCollectorPointDepletionInfoPanel.prototype.updatePosition = function () {
    if (this.externalClip && this.externalClip.stage) {
      this.externalClip.y = 65;
      this.externalClip.x = this.externalClip.stage.stageWidth / 2;
    }
  };
  ABGAllianceCollectorPointDepletionInfoPanel.NAME = "ABGAllianceCollectorPointDepletionInfo";
  return ABGAllianceCollectorPointDepletionInfoPanel;
}(require("gge-module:export_CastleExternalPanel").CastleExternalPanel);
exports.ABGAllianceCollectorPointDepletionInfoPanel = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
