Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __s0local0 = function (__s1param0) {
  function CastleSeasonEventActionPanel() {
    var __s3local0 = this;
    __s3local0._isPanelActive = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.SeasonEventActionPanel_Relicus()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeasonEventActionPanel, __s1param0);
  CastleSeasonEventActionPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onChangeLayoutState));
    this._buttons = new __dep_export_PanelButtonsComponent.PanelButtonsComponent(this.panelDisp.mc_buttons, Library.CastleInterfaceElements.ActionPanelButton);
    this.panelDisp.mc_buttons.mc_backgroundDeco.visible = false;
  };
  CastleSeasonEventActionPanel.prototype.buildButtons = function () {
    this._buttons.switchCreationMode(true);
    this._buttons.addMainButton(new __dep_export_PremiumMarketPanelButton.PremiumMarketPanelButton());
    this._buttons.addMainButton(new __dep_export_MovementsPanelButton.MovementsPanelButton());
    this._buttons.addMainButton(new __dep_export_SeasonOverviewPanelButton.SeasonOverviewPanelButton());
    this._buttons.addMainButton(new __dep_export_BuildMenuPanelButton.BuildMenuPanelButton());
    this._buttons.addMainButton(new __dep_export_SeasonCampPanelButton.SeasonCampPanelButton());
    this._buttons.addMainButton(new __dep_export_SeasonWorldmapPanelButton.SeasonWorldmapPanelButton());
    this._buttons.addMainButton(new __dep_export_SeasonHomeCastlePanelButton.SeasonHomeCastlePanelButton());
    this._buttons.switchCreationMode(false);
  };
  CastleSeasonEventActionPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.activatePanel();
    this._buttons.onShow();
    this.buildButtons();
  };
  CastleSeasonEventActionPanel.prototype.hide = function () {
    this._buttons.onHide();
    if (this.layoutManager.isInMyCastleBuildMode) {
      this.deactivatePanel();
    } else {
      __s1param0.prototype.hide.call(this);
    }
  };
  CastleSeasonEventActionPanel.prototype.destroy = function () {
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onChangeLayoutState));
    __s1param0.prototype.destroy.call(this);
  };
  CastleSeasonEventActionPanel.prototype.activatePanel = function () {
    this.panelDisp.mouseChildren = true;
    this._isPanelActive = true;
    this.panelDisp.filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER;
  };
  CastleSeasonEventActionPanel.prototype.deactivatePanel = function () {
    this.panelDisp.mouseChildren = false;
    this._isPanelActive = false;
    var __s19local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
    __s19local0.desaturate();
    this.panelDisp.filters = [__s19local0.filter];
    if (this.panelDisp.parent) {
      this.panelDisp.parent.setChildIndex(this.panelDisp, 0);
    }
  };
  CastleSeasonEventActionPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight;
      this.disp.x = this.disp.stage.stageWidth;
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= __dep_export_ClientConstCastle.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  CastleSeasonEventActionPanel.prototype.onChangeLayoutState = function (__s26param0 = null) {
    this._buttons.updateButtons();
    this.unLockPanel();
  };
  Object.defineProperty(CastleSeasonEventActionPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonEventActionPanel.NAME = "CastleSeasonEventActionPanel";
  return CastleSeasonEventActionPanel;
}(require("gge-module:export_CastlePanel").CastlePanel);
exports.CastleSeasonEventActionPanel = __s0local0;
var __dep_export_BuildMenuPanelButton = require("gge-module:export_BuildMenuPanelButton");
var __dep_export_MovementsPanelButton = require("gge-module:export_MovementsPanelButton");
var __dep_export_PremiumMarketPanelButton = require("gge-module:export_PremiumMarketPanelButton");
var __dep_export_SeasonCampPanelButton = require("gge-module:export_SeasonCampPanelButton");
var __dep_export_SeasonHomeCastlePanelButton = require("gge-module:export_SeasonHomeCastlePanelButton");
var __dep_export_SeasonOverviewPanelButton = require("gge-module:export_SeasonOverviewPanelButton");
var __dep_export_SeasonWorldmapPanelButton = require("gge-module:export_SeasonWorldmapPanelButton");
var __dep_export_PanelButtonsComponent = require("gge-module:export_PanelButtonsComponent");
