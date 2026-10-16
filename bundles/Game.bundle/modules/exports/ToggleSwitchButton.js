Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __s0local0 = function (__s1param0) {
  function ToggleSwitchButton(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._value = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.disp]);
    __s3local0.disp.gotoAndStop(1);
    new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(__s3local0.disp).addEventListener();
    __s3local0._changeSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.addEventListener();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ToggleSwitchButton, __s1param0);
  ToggleSwitchButton.prototype.onClick = function (__s5param0) {
    __s1param0.prototype.onClick.call(this, __s5param0);
    if (this.isEnabled) {
      this.toggle();
    }
  };
  ToggleSwitchButton.prototype.toggle = function () {
    this.setValue(!this.value, true);
    this._changeSignal.dispatch(this.value);
  };
  ToggleSwitchButton.prototype.setValue = function (__s10param0, __s10param1 = false) {
    this._value = __s10param0;
    var __s10local0 = this._value ? this.disp.toggle_off.x : this.disp.toggle_on.x;
    if (__s10param1) {
      __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(this.disp.toggle_slider);
      __dep_exact_608de47b6498f9b0.TweenMax.to(this.disp.toggle_slider, 0.3, {
        x: __s10local0,
        ease: __dep_exact_608de47b6498f9b0_1.Power1.easeOut
      });
    } else {
      this.disp.toggle_slider.x = __s10local0;
    }
  };
  ToggleSwitchButton.prototype.enableComponent = function (__s14param0) {
    __s1param0.prototype.enableComponent.call(this, __s14param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp, __s14param0);
  };
  Object.defineProperty(ToggleSwitchButton.prototype, "value", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToggleSwitchButton.prototype, "changeSignal", {
    get: function () {
      return this._changeSignal;
    },
    enumerable: true,
    configurable: true
  });
  return ToggleSwitchButton;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ToggleSwitchButton = __s0local0;
