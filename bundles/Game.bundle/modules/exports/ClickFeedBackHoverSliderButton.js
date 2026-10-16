Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = function (__s1param0) {
  function ClickFeedBackHoverSliderButton(__s3param0 = null, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0._isVertical = true;
    __s3local0._isVertical = __s3param0.height > __s3param0.width;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ClickFeedBackHoverSliderButton, __s1param0);
  ClickFeedBackHoverSliderButton.prototype.onMouseDown = function (__s5param0) {
    var __s5local0 = this._isVertical ? this._disp.height : this._disp.width;
    __s1param0.prototype.onMouseDown.call(this, __s5param0);
    this.setSize(__s5local0);
  };
  ClickFeedBackHoverSliderButton.prototype.onMouseUp = function (__s7param0) {
    var __s7local0 = this._isVertical ? this._disp.height : this._disp.width;
    __s1param0.prototype.onMouseUp.call(this, __s7param0);
    this.setSize(__s7local0);
  };
  ClickFeedBackHoverSliderButton.prototype.onRollOut = function (__s9param0) {
    var __s9local0 = this._isVertical ? this._disp.height : this._disp.width;
    this._disp.gotoAndStop(__dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover.FRAME_DEFAULT);
    this.setSize(__s9local0);
  };
  ClickFeedBackHoverSliderButton.prototype.onRollOver = function (__s11param0) {
    var __s11local0 = this._isVertical ? this._disp.height : this._disp.width;
    __s1param0.prototype.onRollOver.call(this, __s11param0);
    this.setSize(__s11local0);
  };
  ClickFeedBackHoverSliderButton.prototype.setSize = function (__s13param0) {
    if (this._disp.bg) {
      if (this._isVertical) {
        this._disp.bg.height = __s13param0;
        this._disp.bg.y = 0;
      } else {
        this._disp.bg.width = __s13param0;
        this._disp.bg.x = 0;
      }
    }
  };
  Object.defineProperty(ClickFeedBackHoverSliderButton.prototype, "minSize", {
    get: function () {
      if (this._disp.stripes) {
        if (this._isVertical) {
          return this._disp.stripes.height + 10;
        } else {
          return this._disp.stripes.width + 10;
        }
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  return ClickFeedBackHoverSliderButton;
}(__dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
exports.ClickFeedBackHoverSliderButton = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip", "IDynamicSizeSlider");
