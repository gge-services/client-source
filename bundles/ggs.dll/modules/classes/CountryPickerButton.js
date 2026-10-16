Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = function (__s1param0) {
  function CountryPickerButton() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._minWidth = 100;
    __s3local0.textXOffset = 0;
    __s3local0.mouseOverScale = 1.05;
    __s3local0.addEventListener(__s0local1.ADDED_TO_STAGE, __s3local0.bindFunction(__s3local0.onAddedToStage));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(CountryPickerButton, __s1param0);
  CountryPickerButton.prototype.onAddedToStage = function (__s5param0) {
    this.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this.init();
    this.addEventListener(__s0local1.REMOVED_FROM_STAGE, this.bindFunction(this.onRemoveToStage));
  };
  CountryPickerButton.prototype.onRemoveToStage = function (__s7param0) {
    this.removeEventListener(__s0local1.REMOVED_FROM_STAGE, this.bindFunction(this.onRemoveToStage));
    this.removeEventListener(__s0local2.ROLL_OVER, this.bindFunction(this.onRollOver));
    this.removeEventListener(__s0local2.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  CountryPickerButton.prototype.init = function () {
    this.useHandCursor = true;
    this.buttonMode = true;
    this.mouseChildren = false;
    this.tabEnabled = false;
    this.initScale = Math.min(this.scaleX, this.scaleY);
    this.addEventListener(__s0local2.ROLL_OVER, this.bindFunction(this.onRollOver));
    this.addEventListener(__s0local2.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  Object.defineProperty(CountryPickerButton.prototype, "minWidth", {
    set: function (__s11param0) {
      this._minWidth = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CountryPickerButton.prototype, "enableButton", {
    set: function (__s13param0) {
      this.enabled = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CountryPickerButton.prototype, "selectButton", {
    set: function (__s15param0) {
      if (__s15param0) {
        this.selected();
      } else {
        this.deselected();
      }
    },
    enumerable: true,
    configurable: true
  });
  CountryPickerButton.prototype.selected = function () {
    if (this.enabled) {
      this.filters = [this.glowfilter];
    }
  };
  CountryPickerButton.prototype.deselected = function () {
    if (this.enabled) {
      this.filters = null;
    }
  };
  CountryPickerButton.prototype.onRollOut = function (__s25param0) {
    if (this.enabled) {
      this.scaleX = this.scaleY = this.initScale;
    }
  };
  CountryPickerButton.prototype.onRollOver = function (__s28param0) {
    if (this.enabled) {
      this.scaleX = this.scaleY = this.initScale * this.mouseOverScale;
    }
  };
  return CountryPickerButton;
}(__s0local0);
exports.CountryPickerButton = __s0local3;
