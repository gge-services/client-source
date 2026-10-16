Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_AIsoViewComponent = require("gge-module:export_AIsoViewComponent");
var __dep_export_IsoViewStrategy = require("gge-module:export_IsoViewStrategy");
var __s0local0 = function (__s1param0) {
  function IsoViewStrategyManager() {
    var __s3local0 = this;
    __s3local0._prevStrategy = new __dep_export_IsoViewStrategy.IsoViewStrategy();
    __s3local0._currentStrategy = new __dep_export_IsoViewStrategy.IsoViewStrategy();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).setToDefault();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewStrategyManager, __s1param0);
  IsoViewStrategyManager.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this.setToDefault();
    this.triggerCallbacks();
  };
  IsoViewStrategyManager.prototype.destroy = function () {
    this.setToDefault();
    __s1param0.prototype.destroy.call(this);
  };
  IsoViewStrategyManager.prototype.setup = function () {
    __s1param0.prototype.setup.call(this);
    this.setToDefault();
  };
  IsoViewStrategyManager.prototype.switchTo = function (__s11param0) {
    this.updatePrevStrategy();
    this.switchAll(false);
    if (__s11param0 != null) {
      for (var __s11local0 = 0, __s11local1 = __s11param0; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined) {
          this.currentStrategy.modes.set(__s11local2, true);
        }
      }
    }
    this.triggerCallbacks();
  };
  IsoViewStrategyManager.prototype.switchBy = function (__s17param0, __s17param1) {
    if (this.currentStrategy.isActive(__s17param0) != __s17param1 && __s17param0) {
      this.updatePrevStrategy();
      this.currentStrategy.modes.set(__s17param0, __s17param1);
      this.triggerCallbacks();
    }
  };
  IsoViewStrategyManager.prototype.toggle = function (__s20param0) {
    this.switchBy(__s20param0, !this.currentStrategy.isActive(__s20param0));
  };
  IsoViewStrategyManager.prototype.triggerCallbacks = function () {
    this.isoRenderer.mouse.onRenderStrategyChanged();
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED));
  };
  IsoViewStrategyManager.prototype.switchToNormalMode = function () {
    if (!this.currentStrategy.isInNormalMode) {
      this.updatePrevStrategy();
      this.switchAll(false);
      this.triggerCallbacks();
    }
  };
  IsoViewStrategyManager.prototype.switchAll = function (__s27param0) {
    for (var __s27local0 = 0, __s27local1 = Array.from(this.currentStrategy.modes.keys()); __s27local0 < __s27local1.length; __s27local0++) {
      var __s27local2 = __s27local1[__s27local0];
      this.currentStrategy.modes.set(__s27local2, __s27param0);
    }
  };
  IsoViewStrategyManager.prototype.updatePrevStrategy = function () {
    for (var __s31local0 = 0, __s31local1 = Array.from(this.currentStrategy.modes.keys()); __s31local0 < __s31local1.length; __s31local0++) {
      var __s31local2 = __s31local1[__s31local0];
      this.prevStrategy.modes.set(__s31local2, this.currentStrategy.modes.get(__s31local2));
    }
  };
  IsoViewStrategyManager.prototype.setToDefault = function () {
    this.switchAll(false);
    this.updatePrevStrategy();
  };
  IsoViewStrategyManager.prototype.hasModeChanged = function (__s37param0) {
    return this.prevStrategy.isActive(__s37param0) != this.currentStrategy.isActive(__s37param0);
  };
  Object.defineProperty(IsoViewStrategyManager.prototype, "prevStrategy", {
    get: function () {
      return this._prevStrategy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewStrategyManager.prototype, "currentStrategy", {
    get: function () {
      return this._currentStrategy;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewStrategyManager;
}(__dep_export_AIsoViewComponent.AIsoViewComponent);
exports.IsoViewStrategyManager = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
