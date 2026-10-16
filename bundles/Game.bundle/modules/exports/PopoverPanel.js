Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PopoverEvent = require("gge-module:export_PopoverEvent");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function PopoverPanel() {
    return __s1param0.call(this, new __s0local0()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PopoverPanel, __s1param0);
  PopoverPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this._popoverComponent = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.panelDisp);
  };
  PopoverPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.addEventListener(__dep_export_PopoverEvent.PopoverEvent.ON_NEW_POPOVER_ARRIVED, this.bindFunction(this.onNewPopoverArrived));
    this._popoverComponent.onAssetLoadedSignal.add(this.bindFunction(this.onPopoverAssetLoaded));
    this._popoverComponent.onSequenceCompleteSignal.add(this.bindFunction(this.onPopoverSequenceComplete));
    this._popoverComponent.onShow();
  };
  PopoverPanel.prototype.hide = function () {
    this._popoverComponent.onHide();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.removeEventListener(__dep_export_PopoverEvent.PopoverEvent.ON_NEW_POPOVER_ARRIVED, this.bindFunction(this.onNewPopoverArrived));
    this._popoverComponent.onAssetLoadedSignal.remove(this.bindFunction(this.onPopoverAssetLoaded));
    this._popoverComponent.onSequenceCompleteSignal.remove(this.bindFunction(this.onPopoverSequenceComplete));
    this.stopCurrentPopover();
    __s1param0.prototype.hide.call(this);
  };
  PopoverPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = 50;
      this.disp.x = this.disp.stage.stageWidth * 0.5;
    }
  };
  PopoverPanel.prototype.checkAndExecuteNextPopover = function () {
    if (!this._currentPopoverVO && (this._currentPopoverVO = __dep_export_CastleModel.CastleModel.popoverData.getNextPopover(), this._currentPopoverVO)) {
      var __s14local0 = __dep_export_PopoverEnum.PopoverEnum.getTypeById(this._currentPopoverVO.id);
      if (!__s14local0) {
        return;
      }
      this._currentPopoverVE = new __s14local0.veClass();
      this._currentPopoverVE.popoverVO = this._currentPopoverVO;
      this._popoverComponent.init(this._currentPopoverVE.getPopoverConfig());
      this._popoverComponent.startSequence();
    }
  };
  PopoverPanel.prototype.stopCurrentPopover = function () {
    if (this._currentPopoverVO) {
      this._popoverComponent.startState(__dep_export_SimplePopoverComponent.SimplePopoverComponent.STATE_HIDE);
      __dep_export_CastleModel.CastleModel.popoverData.removeQueueItem(this._currentPopoverVO.queueId);
      this._currentPopoverVO = null;
      this._currentPopoverVE = null;
    }
  };
  PopoverPanel.prototype.onTimer = function (__s21param0) {
    this.checkAndExecuteNextPopover();
  };
  PopoverPanel.prototype.onNewPopoverArrived = function (__s23param0) {
    this.checkAndExecuteNextPopover();
  };
  PopoverPanel.prototype.onPopoverAssetLoaded = function () {
    if (this._currentPopoverVE && this._popoverComponent) {
      this._currentPopoverVE.fillContent(this._popoverComponent.getAssetDisp());
    }
  };
  PopoverPanel.prototype.onPopoverSequenceComplete = function () {
    this.stopCurrentPopover();
  };
  Object.defineProperty(PopoverPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  PopoverPanel.NAME = "PopoverPanel";
  return PopoverPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.PopoverPanel = __s0local1;
var __dep_export_PopoverEnum = require("gge-module:export_PopoverEnum");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
