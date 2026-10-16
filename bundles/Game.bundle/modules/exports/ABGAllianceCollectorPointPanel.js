Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastlePanelEvent = require("gge-module:export_CastlePanelEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function ABGAllianceCollectorPointPanel() {
    return __s1param0.call(this, ABGAllianceCollectorPointPanel.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGAllianceCollectorPointPanel, __s1param0);
  ABGAllianceCollectorPointPanel.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.txt_ownPoints = this.textFieldManager.registerTextField(this.panelDisp.txt_points, new __dep_exact_92d05af59ee2ff30_1.NumberVO(0));
    this.txt_alliPoints = this.textFieldManager.registerTextField(this.panelDisp.txt_alliRanking, new __dep_exact_92d05af59ee2ff30_1.NumberVO(0));
    this.updateData();
    this.panelDisp.mc_tt_alliRank.toolTipText = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_ALLIANCE_INFLUENCE).getNameTextId();
    this.panelDisp.mc_tt_alliRank.mouseChildren = false;
    this.panelDisp.mc_tt_points.toolTipText = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_INFLUENCE).getNameTextId();
    this.panelDisp.mc_tt_points.mouseChildren = false;
    this.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
    this.onHideSpecialResources();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateData));
  };
  ABGAllianceCollectorPointPanel.prototype.onHideSpecialResources = function (__s7param0 = null) {
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.panelDisp, 0.3, {
      autoAlpha: 1,
      delay: 0.3
    });
  };
  ABGAllianceCollectorPointPanel.prototype.onShowSpecialResources = function (__s9param0) {
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.panelDisp, 0, {
      autoAlpha: 0,
      delay: 0
    });
  };
  ABGAllianceCollectorPointPanel.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES, this.bindFunction(this.onShowSpecialResources));
    this.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES, this.bindFunction(this.onHideSpecialResources));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateData));
  };
  ABGAllianceCollectorPointPanel.prototype.onMouseOver = function (__s13param0) {
    __s1param0.prototype.onMouseOver.call(this, __s13param0);
  };
  ABGAllianceCollectorPointPanel.prototype.updateData = function (__s15param0 = null) {
    var __s15local0;
    var __s15local1 = __dep_export_CastleModel.CastleModel.currencyData.getAmountByType(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_INFLUENCE));
    this.txt_ownPoints = this.textFieldManager.registerTextField(this.panelDisp.txt_points, new __dep_exact_92d05af59ee2ff30_1.NumberVO(__s15local1));
    if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
      __s15local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage.getItemByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_ALLIANCE_INFLUENCE));
      this.txt_alliPoints = this.textFieldManager.registerTextField(this.panelDisp.txt_alliRanking, new __dep_exact_92d05af59ee2ff30_1.NumberVO(__s15local0 ? __s15local0.amount : 0));
    }
  };
  ABGAllianceCollectorPointPanel.prototype.updateTime = function (__s18param0 = null) {
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      this.textFieldManager.registerTextField(this.panelDisp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_ABGHelper.ABGHelper.abgEvent.remainingEventTimeInSeconds)));
      var __s18local0 = __dep_exact_92d05af59ee2ff30_2.Localize.text("resttime") + "\n" + __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getFullTimeString(__dep_export_ABGHelper.ABGHelper.abgEvent.remainingEventTimeInSeconds);
      this.panelDisp.mc_tt_time.toolTipText = __s18local0;
      this.panelDisp.mc_tt_time.mouseChildren = false;
      this.updateData();
    } else {
      this.hide();
    }
  };
  ABGAllianceCollectorPointPanel.prototype.updatePosition = function () {
    if (this.externalClip && this.externalClip.stage) {
      var __s22local0 = 30;
      var __s22local1 = __dep_exact_f855840627e6e145.int(this.externalClip.stage.stageWidth / 2);
      if (this.layoutManager.isOnMap) {
        __s22local0 -= 10;
        __s22local1 += 40;
      }
      this.externalClip.y = __s22local0;
      this.externalClip.x = __s22local1;
    }
  };
  ABGAllianceCollectorPointPanel.NAME = "ABGAllianceCollectorPoint";
  return ABGAllianceCollectorPointPanel;
}(require("gge-module:export_CastleExternalPanel").CastleExternalPanel);
exports.ABGAllianceCollectorPointPanel = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
