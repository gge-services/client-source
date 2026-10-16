Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function DecorationForgeSelectTargetDialogOrderButton(__s3param0 = null, __s3param1 = false) {
    var __s3local0 = this;
    __s3local0._isActive = false;
    __s3local0._isArrowUp = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this).updateActiveState();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeSelectTargetDialogOrderButton, __s1param0);
  DecorationForgeSelectTargetDialogOrderButton.prototype.setActive = function (__s5param0) {
    this._isActive = __s5param0;
    this.updateActiveState();
  };
  DecorationForgeSelectTargetDialogOrderButton.prototype.updateActiveState = function () {
    this.disp.gotoAndStop(__dep_exact_f855840627e6e145.int(this._isActive ? 2 : 1));
    this.updateArrow();
  };
  DecorationForgeSelectTargetDialogOrderButton.prototype.setArrow = function (__s9param0) {
    this._isArrowUp = __s9param0;
    this.updateArrow();
  };
  DecorationForgeSelectTargetDialogOrderButton.prototype.updateArrow = function () {
    var __s11local0 = __dep_exact_81dacdf05bd32292.castAs(this.disp.getChildByName("mc_arrow"), "MovieClip");
    if (__s11local0) {
      __s11local0.gotoAndStop(__dep_exact_f855840627e6e145.int(this._isArrowUp ? 1 : 2));
    }
  };
  DecorationForgeSelectTargetDialogOrderButton.prototype.onRollOut = function (__s14param0) {
    this._disp.scaleX = this._disp.scaleY = this.initScale;
  };
  Object.defineProperty(DecorationForgeSelectTargetDialogOrderButton.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectTargetDialogOrderButton.prototype, "isArrowUp", {
    get: function () {
      return this._isArrowUp;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeSelectTargetDialogOrderButton;
}(require("gge-module:export_ClickFeedbackButtonBackground").ClickFeedbackButtonBackground);
exports.DecorationForgeSelectTargetDialogOrderButton = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "MovieClip");
