Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_HorizontalProgressBehaviour = require("gge-module:export_HorizontalProgressBehaviour");
var __s0local0 = function (__s1param0) {
  function AdvancedProgressBar(__s3param0 = null, __s3param1 = null) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).changeStrategy = __s3param1 || AdvancedProgressBar.DEFAULT_BEHAVIOUR;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvancedProgressBar, __s1param0);
  AdvancedProgressBar.prototype.fromTo = function (__s5param0, __s5param1) {
    this.applyMask();
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.disp.mask, this._changeBehaviour.duration, this._changeBehaviour.getFromVars(__s5param0), this._changeBehaviour.getToVars(__s5param1));
  };
  AdvancedProgressBar.prototype.to = function (__s7param0) {
    this.applyMask();
    __dep_exact_608de47b6498f9b0.TweenMax.to(this.disp.mask, this._changeBehaviour.duration, this._changeBehaviour.getToVars(__s7param0));
  };
  AdvancedProgressBar.prototype.scale = function (__s9param0) {
    this.applyMask();
    __dep_exact_608de47b6498f9b0.TweenMax.to(this.disp.mask, 0, this._changeBehaviour.getToVars(__s9param0));
  };
  Object.defineProperty(AdvancedProgressBar.prototype, "changeStrategy", {
    set: function (__s11param0) {
      this._changeBehaviour = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  AdvancedProgressBar.prototype.kill = function () {
    __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(this.disp.mask);
  };
  Object.defineProperty(AdvancedProgressBar.prototype, "currentProgress", {
    get: function () {
      this.applyMask();
      return this._changeBehaviour.getCurrentProgress(this.disp);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvancedProgressBar.prototype, "isTweening", {
    get: function () {
      return __dep_exact_608de47b6498f9b0.TweenMax.isTweening(this.disp.mask);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvancedProgressBar.prototype, "getOriginBarWidth", {
    get: function () {
      return this.disp.bitmap_1.width;
    },
    enumerable: true,
    configurable: true
  });
  AdvancedProgressBar.__initialize_static_members = function () {
    AdvancedProgressBar.DEFAULT_BEHAVIOUR = new __dep_export_HorizontalProgressBehaviour.HorizontalProgressBehaviour();
  };
  return AdvancedProgressBar;
}(__dep_exact_84d43d9c404bd4d8.BasicProgressBar);
exports.AdvancedProgressBar = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
__s0local0.__initialize_static_members();
