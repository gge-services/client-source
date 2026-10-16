Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleLuckyWheelCheckboxWrapper(__s3param0, __s3param1 = null, __s3param2 = null, __s3param3 = null) {
    this.sourceMCForTooltipName = null;
    this._isEnabled = false;
    this._disp = __s3param0;
    this.sourceMCForTooltipName = __s3param1;
    this.tooltipChecked = __s3param2 || "";
    this.tooltipEmpty = __s3param3 || "";
    this.setBox();
  }
  CastleLuckyWheelCheckboxWrapper.prototype.onRollOver = function (__s5param0) {
    this.getSourceMCForTooltip().toolTipText = null;
    this._disp.gotoAndStop(CastleLuckyWheelCheckboxWrapper.FRAME_HOVER);
    this.getSourceMCForTooltip().toolTipText = this._isEnabled ? this.tooltipChecked : this.tooltipEmpty;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleLuckyWheelCheckboxWrapper.prototype.onRollOut = function (__s7param0) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    this.setBox();
  };
  CastleLuckyWheelCheckboxWrapper.prototype.onClick = function (__s9param0) {
    this._isEnabled = !this._isEnabled;
    this.setBox();
  };
  CastleLuckyWheelCheckboxWrapper.prototype.setBox = function () {
    this.getSourceMCForTooltip().toolTipText = null;
    this._disp.gotoAndStop(this._isEnabled ? CastleLuckyWheelCheckboxWrapper.FRAME_ON : CastleLuckyWheelCheckboxWrapper.FRAME_OFF);
    this.getSourceMCForTooltip().toolTipText = this._isEnabled ? this.tooltipChecked : this.tooltipEmpty;
  };
  Object.defineProperty(CastleLuckyWheelCheckboxWrapper.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    set: function (__s15param0) {
      this._isEnabled = __s15param0;
      this.setBox();
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelCheckboxWrapper.prototype.getSourceMCForTooltip = function () {
    if (this.sourceMCForTooltipName) {
      return this._disp[this.sourceMCForTooltipName];
    } else {
      return this._disp;
    }
  };
  CastleLuckyWheelCheckboxWrapper.prototype.addEventListenerOnShow = function () {
    this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onRollOver));
    this._disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onRollOut));
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  CastleLuckyWheelCheckboxWrapper.prototype.removeEventListenersOnHide = function () {
    this._disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onRollOver));
    this._disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onRollOut));
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  CastleLuckyWheelCheckboxWrapper.__initialize_static_members = function () {
    CastleLuckyWheelCheckboxWrapper.FRAME_OFF = 3;
    CastleLuckyWheelCheckboxWrapper.FRAME_HOVER = 2;
    CastleLuckyWheelCheckboxWrapper.FRAME_ON = 1;
  };
  return CastleLuckyWheelCheckboxWrapper;
}();
exports.CastleLuckyWheelCheckboxWrapper = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
__s0local1.__initialize_static_members();
